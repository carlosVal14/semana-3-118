<template>
<div class="container-fluid bg-info vh-100">
    <div class="container">
    
    <div class="row d-flex align-items-center">
        <div class="col">
            <img src="../../assets/logo.png">
        </div>
        <div class="col mt-5">
            <div class="card p-5">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button @click.prevent="loginUser" type="submit" class="btn btn-primary">Submit</button>
                </form>
                <!--pre>
                    {{login}}
                </pre>  -->  
            </div>
        </div>
        
    </div>
    
    
</div>


</div>
    
</template>

<script>
import swal from 'sweetalert'
import VueJwtDecode from 'vue-jwt-decode'
export default {
    name: 'TheLogin',
    data(){
        return{

            login:{
                email : '',
                password : ''

            }
        }
    },
    methods:{


        async loginUser(){

            try{
                let response = await this.$http.post('/api/usuario/login', this.login)
                console.log(response.data)
                let token = response.data.tokenReturn;
                //let user = response.data.user;
                localStorage.setItem('jwt',token);
                //localStorage.setItem('user',JSON.stringify(user));
                let user = VueJwtDecode.decode(token)

                if(token){
                    swal("Login correcto", `Los datos son correctos, bienvenido ${user.nombre}`, "success");
                    this.$router.push('/home')
                }
                
            }
            catch(error){
                swal("Oops!", "Algo salió mal", "error");
                console.log(error);

            }

        }

    }
    
}
</script>

<style scoped>


</style>