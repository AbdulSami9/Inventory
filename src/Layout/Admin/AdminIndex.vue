<template lang="">
    <div>
    <!--Main layout-->
    <navbar/>
    <main style="margin-top: 58px;">
      <div class="">
        <router-view />
      </div>
    </main>
    <!--Main layout-->
    </div>
</template>
<script>
import "../../assets/style.css"
import Navbar from './Navbar/NavIndex.vue'
export default {
  components: {
    'navbar': Navbar,
  }
}
</script>
<style lang="">
    
</style>