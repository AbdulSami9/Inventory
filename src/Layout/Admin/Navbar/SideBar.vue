<template lang="">
    <div>
        <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse ">
        <img src="../../../assets/images/logo.svg" height="50" alt=" Logo"
              loading="lazy" />
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-auto mt-4">
              <router-link class="list-group-item-action py-3 ripple" aria-current="true" to="/dashboard">
                <img src="../../../assets/images/Dashboard.svg">
              </router-link>

              <router-link to="/inventory" class="list-group-item-action py-3" >
                <img src="../../../assets/images/Inventory.svg">
              </router-link>
     
              <router-link to="/add-inventory" class=" list-group-item-action py-3 " >
                <img src="../../../assets/images/Product.svg">
              </router-link>
          </div>
        </div>
      </nav>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="">
    
</style>