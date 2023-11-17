<template lang="">
    <div>
        <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <!-- Container wrapper -->
        <div class="container-fluid">
          <!-- Toggle button -->
          <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars"></i>
          </button>
          <a class="navbar-brand nav-heading " href="#">{{title }}</a>
          <!-- Brand -->
          <a class="" href="#">
            <img src="../../../assets/images/logo.svg" height="50" alt=" Logo"
              loading="lazy" />
          </a>
         

          <!-- Right links -->
          <ul class="navbar-nav ms-auto d-flex flex-row">
            <!-- Notification dropdown -->
            <!-- Icon -->
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="#">
                <i class="fab fa-github"></i>
              </a>
            </li>


            <!-- Avatar -->
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
                id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle" height="22"
                  alt="Avatar" loading="lazy" />
              </a>
             
            </li>
          </ul>
        </div>
        <!-- Container wrapper -->
      </nav>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import { watchEffect, ref } from 'vue'


export default {
  setup() {
    const route = useRoute()
    const title = ref('')
    watchEffect(() => {
      let routeName = ''
      if (route.name == 'dashboard') {
        routeName = 'Dashboard'
      } else if (route.name == 'inventory') {
        routeName = 'Inventory'
      } else if (route.name == 'addInventory') {
        routeName = 'Add Product'
      } else {
        routeName = ''
      }
      title.value = routeName
    })
    return {
      title
    }
  }
}
</script>
<style lang="">
    
</style>