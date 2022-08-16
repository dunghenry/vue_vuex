<template>
    <div>
        <router-link to="/">
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEMeqFRAZgIUA/company-logo_200_200/0/1519874344927?e=1668038400&v=beta&t=VtIJb8UbP_y47WmvT1SWJ9g5ypk9vlv-KbW8ujGk9GQ"/>
        </router-link>
        <Navbar/>
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: "Header",
    components: { Navbar }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
div{
    display: flex;
}
div>a>img{
    position: relative;
    width: 90px;
    height: 80px;
    top: -20px;
}
</style>