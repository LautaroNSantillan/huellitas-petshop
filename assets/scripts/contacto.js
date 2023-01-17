const{ createApp } = Vue

createApp({
    data(){
        return{
            productos: [],
            mensaje:"",
            mascota:"",
            otraMascota:"",
            telefonoUsuario:"",
            nombreUsuario:"",
            emailUsuario:"",
        }
    },
    created(){
        fetch("https://mindhub-xj03.onrender.com/api/petshop")
            .then(response => response.json())
            .then(productos => {

                if(window.location.pathname === "/index.html"){
                    this.productos = productos
                }else if(window.location.pathname === "/farmacia.html"){
                    this.productos = productos.filter(producto => producto.categoria === "farmacia")
                }else if(window.location.pathname === "/juguete.html"){
                    this.productos = productos.filter(producto => producto.categoria === "jugueteria")
                }
                
            })
    },
    methods:{

        limpiarForm(){
            window.location.reload()
        },

        limpiarForm(){
            this.mensaje=""
            this.mascota=""
            this.otraMascota=""
            this.telefonoUsuario=""
            this.nombreUsuario=""
            this.emailUsuario=""
        },


        logmensaje (){
            console.log(this.mensaje , this.otraMascota)
        }   
    }
}).mount("#appContacto")
