<template>
    <div class="container">
        <form @submit="handleLogin">
            <div>
                <label>Username: </label>
                <input type="text" v-model="username" />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" v-model="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
        <div class="text">
            <p>
                You already have an account ?
                <span>
                    <router-link to="register">Register</router-link>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    name: 'LoginForm',
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        handleLogin(e) {
            e.preventDefault();
            const username = this.username;
            const password = this.password;
            const router = this.$router;
            const data = {
                username,
                password,
                router,
            };
            this.LOGIN(data);
            this.username = '';
            this.password = '';
        },
        ...mapMutations(['LOGIN']),
    },
};
</script>

<style scoped>
div {
    overflow: hidden;
}

input {
    width: 96%;
    padding: 7px 5px;
    border: 1px solid gray;
    outline: none;
    margin: 5px 0;
    border-radius: 3px;
}

button {
    width: 100%;
    display: inline-block;
    cursor: pointer;
    float: right;
    margin: 10px 0;
    padding: 10px 20px;
    background-color: rgb(249, 88, 249);
    color: #fff;
    outline: none;
    border: 1px solid #ffff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 1px;
}

a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    top: 4px;
}

a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    top: 4px;
    color: rgba(0, 0, 255, 0.783);
}

a:hover {
    text-decoration: underline;
}

p {
    overflow: hidden;
}

.text {
    color: gray;
    font-size: 14px;
    float: right;
}
</style>
