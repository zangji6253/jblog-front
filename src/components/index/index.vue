<template>
  <div class="index">
    <div class="container-fluid">
      <div id="flex">
        <div id="left">
          <div class="left-top">
            <h1>标题2</h1>
            <p>
              内容
            </p>
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
            <ul>
              <li>
                <a href="">标题1</a>
              </li>
              <li>
                <a href="">标题2</a>
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
    created() {
      this.axios.get('http://localhost:3030/seller')
        .then(function (response) {
          console.log(response);
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
