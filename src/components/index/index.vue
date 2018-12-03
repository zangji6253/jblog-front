<template>
  <div class="index">
    <div class="container-fluid">
      <div id="flex">
        <div id="left">
          <div class="left-top">
            <h1 class="title">{{article.title}}</h1>
            <p class="content">{{article.content}}</p>
          </div>
          <div class="left-bottom">
            <!--<div class="btn-group btn-group-justified">-->
            <div class="edit">
              <a href="/edit/1" class="btn btn-outline-primary">编辑</a>
            </div>
            <!--<a class="btn  btn-outline-primary" href="#" role="button">Link</a>-->
              <!--<a class="btn btn-default" href="#" role="button">Link</a>-->
            <!--</div>-->

            <!--<button class="edit">编辑</button>-->
          </div>
        </div>
        <div id="right">
          <div class="right-top">
            <ul  class="list-unstyled">
              <li v-for="article in articles" >
                <!--<router-link to="/">{{article.title}}</router-link>-->
                <router-link :to="{ name: 'article', params: { id: article.id }}">{{article.title}}</router-link>
                <!--<a :href="'/'+article.id">{{article.title}}</a>-->
              </li>
            </ul>
          </div>
          <div class="right-bottom">
            <div class="add">
              <a href="/insert" class="btn btn-outline-primary">新增</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    data () {
      return {
        articles: [],
        id: 1,
        article: Object
      }
    },
    updated() {
      if(typeof this.$route.params.id !== "undefined"){
        this.id = this.$route.params.id;
      }
      let that = this ;//存储this
      this.axios.get('http://localhost:8080/article/'+this.id+'/select')
        .then(function (response) {
          that.article = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

    },
    created() {
      // console.log(this.$route.params.id);
      // this.id = this.$route.params.id;
      // console.log(this.id);
      let that = this ;//存储this

      if(typeof this.$route.params.id !== "undefined"){
        this.id = this.$route.params.id;
      }

      // console.log((typeof this.$route.params.id == "undefined"));
      // let url =
      // console.log(url);
      this.axios.get('http://localhost:8080/article/'+this.id+'/select')
        .then(function (response) {
          that.article = response.data;
          // console.log(that.article);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.axios.get('http://localhost:8080/article/selectAll')
        .then(function (response) {
          // console.log(response);
          that.articles = response.data;
          // console.log(that.articles[0].title);
          // console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      // console.log(that.router);
    }
  }
</script>

<style scoped>

</style>

<style type="text/css">
  #flex {
    display: flex;
  }

  #left {
    flex: 1 1 auto;
  }

  #right {
    width: 200px;
  }
</style>

<style lang="stylus" rel="stylesheet/stylus">
  html
    margin 0
    height 100%

  body
    margin 0
    height 100%

    .index
      margin 0
      height 100%

  .container-fluid
    background #fff
    height 100%

  #flex
    height 100%

  #left
    border-right: 1px solid rgba(7, 17, 27, 0.1)
    .title
      text-align center
    .left-bottom
      position fixed
      bottom 0
      margin-bottom 20px
      width 100%
      margin-right 200px
      padding-right 200px
      .edit
        display block
        margin 0 auto
        text-align center
  #right
    .right-bottom
      position fixed
      bottom 0
      margin-bottom 20px
      width 100%
      .add
        display block
        /*margin 0 auto*/
        text-align center
        /*padding-left auto*/
        /*margin-left auto*/
        width 200px
</style>
