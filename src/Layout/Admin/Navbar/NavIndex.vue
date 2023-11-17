<template lang="">
    <div>
        <header>
            <side-bar/>
            <navbar/>
    </header>

    </div>
</template>
<script>
import Navbar from './NavBar.vue';
import SideBar from './SideBar.vue';
export default {
    components: {
        'side-bar': SideBar,
        'navbar': Navbar
    }
}
</script>
<style lang="">
    
</style>