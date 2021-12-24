<template>
  <div>
    <div class="header">
      <span class="text-xl font-bold wavy">Bagus Panggalih Agung</span>
    </div>

    <div class="mt-20">
      <div class="hello-section">
        <p class="emoji">👋</p>
        <p class="hello text-6xl mb-3">Hello, I'm Bagus</p>
        <p class="text-lg mb-2">A dynamic, hands-on, detail-oriented, motivated {{new Date().getFullYear() - 1996}}-year-old guy with a great
          passing for technology and software development, and highly analytical IT professional with {{new Date().getFullYear() - 2018}}+ years of
          experience in the industry. Currently, work as a Backend Engineer using Go programming language.</p>
        <p style="">
          📬 &nbsp;<span class="grey">bagusays@gmail.com</span><br>
          🔗 &nbsp;<a target="_blank" href="https://www.linkedin.com/in/bagus-p-43344b13a/" class="link">LinkedIn</a>
        </p>
      </div>

      <div class="mb-6">
        <nav class="flex flex-row justify-center">
          <button @click="tabActive = `DETAILS`"
            :class="tabActive == `DETAILS` && `border-b-2 border-blue-500 text-blue-500 font-bold`"
            class="text-gray-600 py-3 px-6 block hover:text-blue-500 focus:outline-none w-full md:w-auto">
            🙋‍♂️&nbsp;&nbsp;Details
          </button>
          <button @click="tabActive = `PORTFOLIO`"
            :class="tabActive == `PORTFOLIO` && `border-b-2 border-blue-500 text-blue-500 font-bold`"
            class="text-gray-600 py-3 px-6 block hover:text-blue-500 focus:outline-none w-full md:w-auto">
            🛠&nbsp;&nbsp;Portfolio
          </button>
        </nav>
      </div>


      <DetailsComponent v-if="tabActive == `DETAILS`" />
      <PortfolioComponent v-if="tabActive == `PORTFOLIO`" />

    </div>
    <div class="footer">
      <p>Built with <a target="_blank" href="nuxtjs.org">NuxtJS</a> and <a target="_blank"
          href="https://digitalocean.com/">Digital Ocean</a></p>
    </div>
  </div>
</template>

<script>
  import DetailsComponent from '../components/Details';
  import PortfolioComponent from '../components/Portfolio';
  import PortfolioHTTPRequest from '../service/portfolio'

  export default {
    components: {
      DetailsComponent,
      PortfolioComponent
    },
    data: () => {
      return {
        tabActive: "DETAILS"
      }
    },
    created: async () => {
      await PortfolioHTTPRequest()
    }
  }
</script>

<style scoped>
  .body {
    margin-top: 70px;
  }

  .hello {
    font-weight: 600;
    line-height: 1.07143;
    font-weight: 600;
  }

  .header {
    margin-top: 20px;
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

  .wavy:hover {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23ff9800' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
    background-position: 0 90%;
    background-size: auto 5px;
    background-repeat: repeat-x;
    text-decoration: none;
  }
</style>
