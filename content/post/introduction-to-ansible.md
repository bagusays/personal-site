---
author: "Bagus"
title: "Introduction to Ansible"
date: "2021-07-23"
description: "Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments."
---

![](https://miro.medium.com/max/630/0*J8QZ8j9rKiaPV7xW)

Imagine you got a task to execute several commands or maybe a bunch of steps to configure something in your servers. For example; updating your Ubuntu, then add some HTML page, then install Nginx, then change its config, and then restart the Nginx service. It’ll be okay if only have one or two servers. But what if you have ten servers? even maybe 15? 20? Trust me, it will hurt your back if you handle it one by one manually. That also gives a probability of human error while executing it. At this point, Ansible will become a solution for you.

> Ansible is an IT automation tool. It can configure systems, deploy software, and orchestrate more advanced IT tasks such as continuous deployments

Before continue, we’ll need to know several terms like:
- Inventory
- Playbooks
- Tasks
- Modules

##### Inventory
It contains a bunch of managed nodes. Like a hostfile containing several pieces of information like IP Address, port, etc for each node. There also can make groups to easier manage those nodes.

##### Playbooks
Written in YAML containing a set of ordered lists of tasks will be executed repeatedly on each node.

##### Tasks
A subset of playbooks to executing commands.

#####  Modules
A subset of Tasks to interact directly on remote hosts or through Playbooks. It’s also called “task plugins” or “library plugins” or “module library”

#### Prerequisite for demo
- Docker
- Python (with pip installed)

##### Installation
```bash
pip3 install ansible
```

Ensure the Ansible was installed

```bash
ansible --version
```

I’m gonna using Docker to spin up my dummy servers. You can use others like VirtualBox, EC2 on AWS, Droplet on DigitalOcean, or something else. Ansible is agentless. Which means you can use it directly without installing an agent in each nodes. Make sure your servers are ready to be remoted via SSH.

Let’s create a custom Docker Image, by default Ubuntu Image wasn’t support SSH by asking for the password.


##### Build the image

```bash
docker build -t ubuntu_ssh .
```

We’ll use this python script to create or destroy our servers
```spinup-servers.py
import os

fileName = "inventory"

if os.path.exists(fileName):
    os.remove(fileName)

with open(fileName, 'a') as inventory:
    inventory.write('[local_servers]\n')

    for i in range(5):
        idx = i+1
        sshPort = "500{}".format(idx)
        webPort = "600{}".format(idx)
        os.system("docker run -it -d -p {}:22 -p {}:80 --name ubuntu-{} ubuntu_ssh".format(sshPort, webPort, idx))

        inventory.write('localhost-{} ansible_host=localhost ansible_port=500{} ansible_user=root\n'.format(idx, idx))
```
```destroy-servers.py
import os

for i in range(5):
    os.system("docker rm ubuntu-{} --force".format(i+1))
```

We mapping the local port to the container port. 500x as 22 (SSH) and 600x as 80 (HTTP).

And then we’ll create Nginx config to serve an HTML file later.
```nginx.conf
server {
   listen       80;
   server_name  localhost;

   location / {
       root   /home;
       index  index.html index.htm;
   }
}
```


Next, we’ll create a `playbook.yml` as the Playbook. Containing an ordered task that will be executed in each node.

- Create an HTML file using shell script.
- Install Nginx using apt module and update the cache as well.
- Copy nginx-conf file to replacing Nginx default config.
- Restart the Nginx service to reload the new configuration.

```playbook.yml
- hosts: local_servers

  tasks:
  - name: Create page
    ansible.builtin.shell: "echo '<h1>hello world</h1>' > /home/index.html"

  - name: Installing Nginx
    apt:
      name: nginx
      update_cache: yes

  - name: Overwrite default conf in Nginx
    copy:
      src: nginx-conf
      dest: /etc/nginx/sites-available/default

  - name: Restart nginx service
    ansible.builtin.service:
      name: nginx
      state: restarted
```

OK, we finished creating all files needed, and now let’s try to execute them!

Run this command to spin up all servers

```bash
python spinup-servers.py
```

![](https://miro.medium.com/max/421/1*MMd3feaiKcp-xwBeZn_3BA.png)
After finished, it will generate an “inventory” file that containing lists of nodes that run on the docker container.

![](https://miro.medium.com/max/581/1*RDPBdnHDhtpnty9enoTBNw.png)
You can write that file manually as well. We using a python script just to make this demo easier.

The “localhost-1” is the name of host. Value from ansible_host is the host or IP address. ansible_port is SSH port. ansible_user is the user that has access to the node.

Now, run the playbook

```bash
ansible-playbook -l local_servers -i inventory playbook.yml --ask-pass
```
- -l used to specify which group server in inventory will be executed.
- -i used to specify the inventory file.
- The main args are the playbook file name.
- --ask-pass is used to tell ansible to asks the SSH password.

In case you got an error like this

`to use the ‘ssh’ connection type with passwords, you must install the sshpass program`

You should install sshpass depending on your OS.

![](https://miro.medium.com/max/630/1*FxfgGEbj2Bf1M7dIgKsh0A.png)
As you can see, all nodes have finished running the commands that we specify in the playbook!

To verify that, we can try to do cURL to some nodes to get the result of web page as we have specified before.


![](https://miro.medium.com/max/298/1*rcJgK8PPPhho0s7zMuWx7A.png)
**Yeah!** All nodes are returning the result as we expected.

To destroy our servers, you can execute destroy-servers.py

```bash
python destroy-servers.py
```

## Final Notes
This is the only introduction to Ansible. There are so many features to make your life as DevOps easier. You can check out the official documentation at https://docs.ansible.com/ansible/latest/index.html