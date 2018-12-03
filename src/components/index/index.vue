<template>
  <div class="index">
    <div class="container-fluid">
      <div id="flex">
        <div id="left">
          <h1>标题2</h1>
          <p>
            内容
          </p>
          <a href="/edit/1">编辑</a>
        </div>
        <div id="right">
          <a href="/insert">新增</a>
          <ul>
            <li>
              <a href="">标题1</a>
            </li>
            <li>
              <a href="">标题2</a>
            </li>
          </ul>
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
</style>
