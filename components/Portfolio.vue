<template>
  <div>
    <div class="overlay" v-if="imagePreview !== ''">
      <div class="closeBtn" @click="imagePreview = ''">✖️</div>
      <div class="imagePreview">
        <b-img fluid :src="`/portfolio/${imagePreview}`"></b-img>
      </div>
    </div>
    <p class="grey sorryText">*Sorry, for now this section was written in Bahasa, will updating later</p>
    <div v-for="portfolio in portfolios" :key="portfolio.id" style="margin-bottom:60px">
      <p class="headline">{{portfolio.title}}</p>
      <hr>
      <div class="image-block">
        <a v-for="image in portfolio.images" :key="image" @click="enlargeImage(image)">
          <b-img-lazy v-bind="mainProps" :src="`/portfolio/${image}`"></b-img-lazy>
        </a>
      </div>
      <p class="enlarge-text" v-if="portfolio.images.length != 0">*click to enlarge</p>
      <p class="fw-600">Garis Besar Fitur</p>
      <ol class="grey">
        <li v-for="feature in portfolio.feature" :key="feature">{{feature}}</li>
      </ol>
      <p class="grey"><span class="fw-600">Tech Stack:</span> <span>{{portfolio.techStack.join(", ")}}</span></p>
    </div>
  </div>
</template>

<script>
  import PortfolioHttpRequest from "../service/portfolio"

  export default {
    data: function () {
      return {
        portfolios: [],
        mainProps: {
          width: 100,
          height: 75,
          blank: true,
          blankColor: '#bbb',
          class: "m1, image"
        },
        imagePreview: "",
      }
    },
    created: async function () {
      let self = this;
      this.portfolios = await PortfolioHttpRequest()
    },
    methods: {
      enlargeImage: function (imageUrl) {
        this.imagePreview = imageUrl
      },
    }
  }
</script>

<style scoped>
  .sorryText {
    font-size: 10px;
    text-align: right;
  }
  .imagePreview {
    padding: 0;
    display: block;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
  }

  .closeBtn {
    font-size: 90px;
    color: white;
    font-weight: 600;
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1004;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .3);
  }

  .image {
    object-fit: cover;
    margin-right: 5px;
    cursor: pointer;
  }

  .headline {
    font-size: 24px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -1.2px;
  }

  .image-block {
    margin: 30px 0 10px 0;
    text-align: center;
  }

  .enlarge-text {
    font-size: 11px;
    text-align: center;
    margin-bottom: 20px;
  }
</style>
