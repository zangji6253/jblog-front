<template>
  <div class="index">
    <div class="container-fluid">
      <div id="flex">
        <div id="left">
          <div class="left-top">
            <h1 class="title">{{article.title}}</h1>
            <!--<p class="content">{{article.content}}</p>-->
            <div class="content" v-html="compiledMarkdown"></div>
          </div>
          <div class="left-bottom">
            <div class="edit">
              <router-link :to="{ name: 'edit', params: { id: article.id }}" class="btn btn-outline-primary">编辑
              </router-link>
            </div>
          </div>
        </div>
        <div id="right">
          <div class="right-top">
            <ul class="list-unstyled">
              <li v-for="article in articles">
                <router-link :to="{ name: 'article', params: { id: article.id }}">{{article.title}}</router-link>
              </li>
            </ul>
          </div>
          <div class="right-bottom">
            <div class="add">
              <router-link :to="{ name: 'insert'}" class="btn btn-outline-primary">新增</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import marked from 'marked'

  export default {
    name: "index",
    data() {
      return {
        articles: [],
        id: 1,
        article: Object
      }
    },
    updated() {
      // this.$nextTick(function(){
      //   if(typeof this.$route.params.id !== "undefined"){
      //     this.id = this.$route.params.id;
      //   }
      //   let that = this ;//存储this
      //   this.axios.get('http://localhost:8080/article/'+this.id+'/select')
      //     .then(function (response) {
      //       that.article = response.data;
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //     });
      // })


    },
    computed:{
      compiledMarkdown () {
        if(typeof this.article.content === "undefined"){
          return '';
        }
        return marked(this.article.content, { sanitize: true })
      }
    },
    watch: {
      '$route'(to, from) {
        // 对路由变化作出响应...
        if (typeof this.$route.params.id !== "undefined") {
          this.id = this.$route.params.id;
        }
        let that = this;//存储this
        this.axios.get('/article/' + this.id + '/select')
          .then(function (response) {
            that.article = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },
    // computed: {
    //   key() {
    //     return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    //   }
    // },
    created() {
      let that = this;//存储this

      if (typeof this.$route.params.id !== "undefined") {
        this.id = this.$route.params.id;
      }

      this.article.id = this.id;

      this.axios.get('/article/' + this.id + '/select')
        .then(function (response) {
          that.article = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });

      this.axios.get('/article/selectAll')
        .then(function (response) {
          that.articles = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
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
      margin-top 10px
      text-align center

    .content
      margin-top 10px

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
    .right-top
      margin-top 10px
      margin-left 10px

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
