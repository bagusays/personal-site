<template>
  <div>
    <p class="headline">🚀 &nbsp;Work Experiences</p>
    <hr>
    <div class="block">
      <b-row class="text-center job-field" v-for="d in workExperiences" :key="d.company">
        <b-col class="text-left" md="8">
          <p class="position">{{d.position}} <span style="color: #86868b;font-size:14px">at </span><a target="_blank"
              v-bind:href="d.companyUrl" class="company link">{{d.company}}</a></p>
          <p class="year d-sm-block d-md-none text-left">{{d.year}}</p>
          <p class="description">
            <span v-html="d.description"></span>
            <br>
            <span class="strong">Tech stack</span>: {{d.techStack}}
          </p>
        </b-col>
        <b-col class="year bold d-none d-md-block" md="4">{{d.year}}</b-col>
      </b-row>
    </div>

    <b-row align-h="between">
      <b-col sm="12" md="5" style="margin-bottom:40px !important">
        <p class="headline">🏆 &nbsp;Award</p>
        <hr>
        <div>
          <b-row class="text-center">
            <b-col class="text-left">
              <p class="position">2nd Place, Hackathon: The Global Dialogue on Seafood Traceability</p>
              <p class="year d-sm-block d-md-none text-left grey f-12">26-27 Oct 2019</p>
              <p class="company grey">
                Big Data for Seafood Traceability and Sustainability in Bali, Indonesia <br>
                <a class="link" target="_blank"
                  href="https://traceability-dialogue.org/gdst-news-_/bali-trackathon-2019/">Bali Trackathon 2019</a>
                and
                <a class="link" target="_blank" href="https://devpost.com/software/fisheye-ai">Devpost</a>
              </p>
            </b-col>
            <b-col class="year bold d-none d-md-block" cols="4">26-27 Oct 2019</b-col>
          </b-row>
        </div>
      </b-col>

      <b-col sm="12" md="5">
        <p class="headline">🏫 &nbsp;Education</p>
        <hr>
        <div>
          <b-row class="text-center">
            <b-col class="text-left">
              <p class="position">Bachelor Degree of Computer Science</p>
              <p class="year d-sm-block d-md-none text-left grey f-12">2014 - 2018</p>
              <p class="company grey">University of Persada Indonesia Y.A.I</p>
            </b-col>
            <b-col class="year bold d-none d-md-block" cols="4">2014 - 2018</b-col>
          </b-row>
          <b-row class="text-center">
            <b-col class="text-left">
              <p class="position">High School of Computer and Network Engineering</p>
              <p class="year d-sm-block d-md-none text-left grey f-12">2011 - 2014</p>
              <p class="company grey">Karya Guna Technical High School</p>
            </b-col>
            <b-col class="year bold d-none d-md-block" cols="4">2011 - 2014</b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
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
        • Researched & initialize unit testing usability for my squad.`,
          techStack: "NodeJS, MoleculerJS, Objection.js, Jest, Go, MySQL, NATS.io",
        }, {
          position: "Full Stack Engineer",
          companyUrl: "https://growpal.co.id",
          company: "Growpal",
          year: "Jul 2018 - Jul 2020",
          description: `Growpal is a financial technology company focusing on aquaculture development in Indonesia through equity crowd-investment scheme. Growpal provides a digital-financial platform where the investors and fish farmers can synergize to build a better fisheries production ecosystem.
        <br><br>
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
  .job-field {
    margin-top: 15px !important;
  }

  .f-12 {
    font-size: 12px !important;
  }

  .block {
    margin-bottom: 50px;
  }

  .row {
    margin-top: 8px;
  }

  .year {
    font-size: 14px;
    text-align: right;
    margin-bottom: 0;
  }

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