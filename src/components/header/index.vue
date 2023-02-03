<template>
    <div>
        <router-link to="/">
            <img
                src="https://camo.githubusercontent.com/a94dcc24abcb18d9f2a7265736de74308f69a377cc6d94277ddabf33806bde44/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f662f66312f5675652e706e672f33333070782d5675652e706e67"
            />
        </router-link>
        <Navbar />
    </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default {
    name: 'Header',
    components: { Navbar },
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}
div {
    display: flex;
}
div > a > img {
    position: relative;
    width: 90px;
    height: 80px;
    top: -20px;
}
</style>
