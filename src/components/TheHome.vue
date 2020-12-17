<template>
<div>
    
    <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Home Semana 3</a>
        <form class="form-inline">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click.prevent="logoutUser">
                Logout
            </button>
        </form>
    </nav>
    <div class="container mt-5 row">
        <div class="col-9">
            <ul class="list-group">
            <li class="list-group-item"><span>Name: </span>{{user.nombre}}</li>
            <li class="list-group-item"><span>Email: </span>{{user.email}}</li>
        </ul>
        </div>
        <div class="col-3">
            <img src="https://picsum.photos/400" />
        </div>
    </div>
    

</div>
    
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        logoutUser(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        },
        getUserData(){
            let token = localStorage.getItem('jwt');
            //let user = localStorage.getItem('user');
            let user = VueJwtDecode.decode(token);
            //this.user = JSON.parse(user);
            this.user = user;
        }
    },
    created(){
        this.getUserData();
    }
    
}
</script>

<style scoped>

</style>