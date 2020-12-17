<template>
    <div class="formularioRegistro container">
        <form>
            <div class="form-group mt-3">
                <label for="inputName">Nombre</label>
                <input type="text" class="form-control" id="inputName" v-model="datos.nombre">
                
            </div>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="datos.email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="datos.password">
            </div>
            <button type="submit" class="btn btn-success">Submit</button>
        </form>

        <pre class="mt-3">
            {{datos}}
        </pre>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            datos:{
                nombre: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{

    }
    
}
</script>