<template>
  <div>
    <div class="my-3">
      <p class="headline">🚀 &nbsp;Work Experiences</p>
      <hr class="my-2">
      <div class="grid grid-cols-4 my-5" v-for="d in workExperiences" :key="d.company">
        <div class="col-span-4 md:col-span-3">
          <p class="position">{{d.position}} <span style="color: #86868b;font-size:14px">at </span><a target="_blank"
              v-bind:href="d.companyUrl" class="company link">{{d.company}}</a></p>
          <p class="block md:hidden grey text-left">{{d.year}}</p>
          <p class="description">
            <span v-html="d.description"></span>
            <br>
            <span class="strong">Tech stack</span>: {{d.techStack}}
          </p>
        </div>

        <div class="text-right hidden md:block grey">
          <span>{{d.year}}</span>
        </div>
      </div>
    </div>

    <div class="my-10">
      <div class="grid md:grid-cols-2 gap-10">
        <div>
          <div class="grid grid-cols-3 space-y-2">
            <div class="col-span-3">
              <p class="headline">🏆 &nbsp;Award</p>
              <hr class="my-2">
            </div>
            <div class="col-span-2">
              <p class="position">2nd Place, Hackathon: The Global Dialogue on Seafood Traceability</p>
              <p class="company grey">
                Big Data for Seafood Traceability and Sustainability in Bali, Indonesia <br>
                <a class="link" target="_blank"
                  href="https://traceability-dialogue.org/gdst-news-_/bali-trackathon-2019/">Bali Trackathon 2019</a>
                and
                <a class="link" target="_blank" href="https://devpost.com/software/fisheye-ai">Devpost</a>
              </p>
            </div>
            <div class="hidden md:block justify-items-end">
              <p class="grey">26-27 Oct 2019</p>
            </div>
          </div>
        </div>

        <div>
          <div class="grid grid-cols-3 space-y-2">
            <div class="col-span-3">
              <p class="headline">🏫 &nbsp;Education</p>
              <hr class="my-2">
            </div>
            <div class="col-span-2">
              <p class="position">Bachelor Degree of Computer Science</p>
              <p class="company grey">
                University of Persada Indonesia Y.A.I
              </p>
            </div>
            <div class="hidden md:block justify-items-end">
              <p class="grey">2014 - 2018</p>
            </div>

            <div class="col-span-2">
              <p class="position">High School of Computer and Network Engineering</p>
              <p class="company grey">Karya Guna Technical High School</p>
            </div>
            <div class="hidden md:block justify-items-end">
              <p class="grey">2011 - 2014</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        workExperiences: [{
          position: "Backend Engineer",
          companyUrl: "https://linkaja.id",
          company: "LinkAja",
          year: "Oct 2020 - Now",
          description: "LinkAja is an integrated e-wallet service created through a merger of the e-wallets of Telkomsel, Bank Mandiri, BRI, and BNI. LinkAja facilitates e-money payments, digital financial services, and fund transfers.",
          techStack: "Go, PostgreSQL",
        }, {
          position: "Backend Engineer",
          companyUrl: "https://qoala.app",
          company: "Qoala",
          year: "Jul 2020 - Oct 2020",
          description: `Qoala is a disruptive insure-tech company that leverages big-data, machine learning, IoT and blockchain aiming to revolutionize the insurance landscape in Indonesia. We partner with big companies, including e-commerce and travel platforms, to enhance their customer experience through our unique and innovative insurance products.
        <br><br>
        With my squad, I contribute but not limited to:<br>
        • Helping the server-side team for improving the existing marketplace platform to serve the customers.<br>
        • Creating new features, making changes, and bug fixing by the following product requirements, and reviewing co-worker’s code as well.<br>
        • Create many pdf builders for insurance product detail, comparison one product and another, certificate of ownership of insurance policy.<br>
        • Researched & initialize unit testing usability for my squad.`,
          techStack: "NodeJS, MoleculerJS, Objection.js, Jest, Go, MySQL, NATS.io",
        }, {
          position: "Full Stack Engineer",
          companyUrl: "https://www.google.com/search?q=company+confidential",
          company: "Company Confidential",
          year: "Jul 2018 - Jul 2020",
          description: `
        I contribute but not limited to:<br>
        • Implement a Single Page Application (SPA), RESTful API and Machine Learning (Object Detection & Image Recognition) to develop some internal services (most likely is web application).<br>
        • Setup, manage, deploy, and monitor servers to ensure business continuity and production services is running well using Digital Ocean and Ubuntu server 16/18.04.<br>
        • Optimized and simplified the processes by analyzing business requirements and rebuilding existing solutions.<br>
        • Interacting with the hardware team on a daily basis for IoT integration needs.<br>
        • Researched primary technological developments to determine whether implementation into organizational processes was efficient and feasible.`,
          techStack: "PHP, Javascript/NodeJS, Go, Python, ReactJS, MySQL, RabbitMQ, Jenkins, Nginx, Digital Ocean",
        }, {
          position: "Full Stack Engineer",
          companyUrl: "https://www.ecomindo.com/",
          company: "eComindo",
          year: "Mar 2017 - Dec 2017",
          description: `Ecomindo has mission to helping enterprise to leverage existing market, people, and resources to create breakthrough digital product and accelerate digital innovation through enterprise captive & potential market.
        <br><br>
        I contribute but not limited to: Implement Single Page Application (SPA) and RESTful API to develop custom product for client (web application).`,
          techStack: "C#, .NET, Javascript, AngularJS, SQL Server",
        }, ]
      }
    }
  }
</script>

<style scoped>
  .description {
    font-size: 14px;
    color: #86868b;
    line-height: 1.55;
    font-weight: 400;
    /* letter-spacing: -.016em; */
    margin-top: 5px;
  }

  .company {
    font-size: 14px;
    line-height: 1.42859;
    font-weight: 400;
    margin-top: 5px;
  }

  .position {
    font-size: 16px;
    margin-bottom: 0;
    line-height: 23px;
    font-weight: 600;
  }

  .headline {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -1px;
  }
</style>
