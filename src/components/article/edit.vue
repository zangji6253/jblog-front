<template>
  <div class="edit">
    <div class="container">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">标题</span>
        </div>
        <input type="text" class="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1"
               v-model="article.title">
      </div>

      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">内容</span>
        </div>
        <textarea rows="30" class="form-control" aria-label="With textarea" v-model="article.content"></textarea>
      </div>

      <button type="button" class="btn btn-primary" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "edit",
    data() {
      return {
        id: 1,
        article: Object,
        datahost: 'http://www.coderxx.com:8080'
      }
    },
    created() {
      // console.log(typeof this.$route.params.id);
      if (typeof this.$route.params.id !== "undefined") {
        this.id = this.article.id = this.$route.params.id;
        let that = this;//存储this

        // that.$router.push('/'+that.article .id);

        this.axios.get(this.datahost + '/article/' + this.id + '/select')
          .then(function (response) {
            that.article = response.data;
            // console.log(that.article);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {

      }


    },
    methods: {
      save() {
        if (typeof this.$route.params.id !== "undefined") {
          let that = this;//存储this
          this.axios.post(this.datahost + '/article/update/' + this.article.id, {
            title: this.article.title,
            content: this.article.content
          })
            .then(function (response) {
              that.$router.push('/' + that.article.id);
            })
            .catch(function (error) {
            });
        } else {
          let that = this;
          this.axios.post(this.datahost + '/article/insert/', {
            title: this.article.title,
            content: this.article.content
          })
            .then(function (response) {
              // console.log(response.data);
              that.$router.push('/' + response.data.id);
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    }
  }
</script>

<style scoped>

</style>
