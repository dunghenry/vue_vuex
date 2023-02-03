<template>
    <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
</template>

<script>
import LoginForm from '../components/auth/LoginForm.vue';
export default {
    name: 'LoginPage',
    components: { LoginForm },
};
</script>

<style scoped>
div {
    width: 50%;
    margin: 5% auto;
}
h1 {
    text-align: center;
}
</style>
