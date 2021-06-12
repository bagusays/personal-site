<template>
  <div>
    <div class="header">
      <span class="name wavy">Bagus Panggalih Agung</span>
    </div>

    <div class="body">
      <div class="hello-section">
        <b-row class="text-center">
          <b-col class="text-left">
            <p class="emoji">👋</p>
            <p class="hello">Hello, I'm Bagus</p>
            <p style="font-size:17px">A dynamic, hands-on, detail-oriented, motivated 25-year-old guy with a great
              passing for technology and software development, and highly analytical IT professional with 3+ years of
              experience in the industry. Currently, work as a Backend Engineer using Go programming language.</p>
            <p style="font-size:16px">
              📬 &nbsp;<span class="grey">bagusays@gmail.com</span><br>
              🔗 &nbsp;<a href="https://www.linkedin.com/in/bagus-p-43344b13a/" class="link">LinkedIn</a>
            </p>
          </b-col>
          <b-col lg="3"></b-col>
        </b-row>
      </div>

      <b-nav tabs style="margin-bottom:40px">
        <b-nav-item v-bind:active="tabActive == `DETAILS`" @click="tabActive = `DETAILS`">🙋‍♂️ Details</b-nav-item>
        <b-nav-item v-bind:active="tabActive == `PORTFOLIO`" @click="tabActive = `PORTFOLIO`">🛠 Portfolio</b-nav-item>
      </b-nav>

      <DetailsComponent v-if="tabActive == `DETAILS`" />
      <PortfolioComponent v-if="tabActive == `PORTFOLIO`" />

    </div>
    <div class="footer">
      <p>Built with <a href="nuxtjs.org">NuxtJS</a> and <a href="https://www.netlify.com/">Netlify</a></p>
    </div>
  </div>
</template>

<script>
  import DetailsComponent from '../components/Details';
  import PortfolioComponent from '../components/Portfolio';

  export default {
    components: {
      DetailsComponent,
      PortfolioComponent
    },
    data: () => {
      return {
        tabActive: "DETAILS"
      }
    }
  }
</script>

<style scoped>
  .body {
    margin-top: 70px;
  }

  .nav-tabs .nav-link {
    color: black !important;
  }

  .hello {
    font-size: 3.5rem;
    font-weight: 600;
    line-height: 1.07143;
    font-weight: 600;
  }

  .header {
    margin-top: 20px;
  }

  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .hello-section {
    margin-bottom: 60px;
  }

  .emoji {
    font-size: 70px;
    margin-bottom: 0px;
  }

  .footer {
    font-size: 12px;
    text-align: center;
    position: static;
    bottom: 10px;
    margin-top: 60px;
  }

  .wavy:hover{
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 90%;
    background-size: auto 5px;
    background-repeat: repeat-x;
    text-decoration: none;
  }
</style>
