<template>
<div>

  <router-view class="view two" name="a"></router-view>
</div>

</template>
<style>
  @import './assets/css/app.css';

  :root {
    --mainColor: red;
    --danger-theme: {
      color: white;
      border:1px solid sienna;
    };
  }
a{
  color: var(--mainColor);
}
  #app {

    @apply --danger-theme;
  }

  html {
    height: 100%;
  }


  #app {
    color: #2c3e50;
    font-family: Source Sans Pro, Helvetica, sans-serif;

  }

  #app a {
    color: #42b983;
    text-decoration: none;
  }


</style>
