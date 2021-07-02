<template>
    <div class="c-app">
      <Header/>
      <div class="">
              <router-view></router-view>
      </div>
      <Footer/>
  </div>
</template>
<script>
import Header from './Header'
import Footer from './Footer'
export default {
  name: 'Container',
  components: {
    Header,
    Footer
  }
}
</script>