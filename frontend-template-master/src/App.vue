<template> 
  <div id="app">
		<!-- name variable de js -->
		<!-- v-show:directiva y le asigno un valor mostrar o oculptar un contenido, y le asigno el valor de mostrar-->
		<!-- v-for es como el for : x es el elemento y la matriz-->
		<!-- v-model capturar los datos del componente, de un formulario-->
		<!-- <p v-show="mostrar">
			 {{ name }}-{{ nombre }}
		</p> -->
		<!-- <div v-for="x in names">
        {{ x }}
    </div>  -->
		<!-- user se debe definir siempre en el script-->
		 <!-- <form>
        <input type="text" v-model="user" />
				{{user}}
    </form> -->
	<form>
  <div>
    <label for="">Usuario</label>
    <input type="text" v-model="user">
  </div>
  <div>
    <label for="">Password</label>
    <input type="password" v-model="password">
  </div>  
  <div>
    <label for="">Rol</label>
    <select name="" id="" v-model="rol">
			<option v-for="x in example">{{x}}</option>
		</select>
  </div>
  <div>
    <label for="">Genero</label>
    <input type="radio" value="hombre" name="gender" v-model="genero" />Hombre
    <input type="radio" value="mujer" name="gender" v-model="genero"/>Mujer
  </div>
  <div>
    <label for="">Acepta Terminos y condiciones?</label>
    <input type="checkbox" v-model="check">
  </div>
  <div>
    <p>
      El rol seleccionado es:{{rol}}
    </p>
    <p>
      Usted es {{genero}}
    </p>    
    <p v-show="password.length<6">
      La contraseña debe tener por lo menos 6 digitos
    </p>
    <p v-show="user.length!=3">
      El nombre de usuario debe tener 3 digitos
    </p>
    <p v-show="!check">
      Debe aceptar los terminos y condiciones
    </p>
  </div>
</form>
<p v-bind:class="classRed">
  Soy un texto
</p>
<div>
    <input type="text" v-model="link">
    <a v-bind:href="fullLink">{{link}}</a>
</div>
<!-- v-on se ejecuta cuando yo quiero, saludo es una funcion, el v-model acepta variables -->
<div>
  <input type="text" v-model="name">
  <button v-on:click="saludo">Click me</button>
</div>

<form>
  <div>
    <input type="number" placeholder="Indicar primer numero" v-model="valorUno">
    <input type="number" placeholder="Indicar segundo numero" v-model="valorDos">
    <select v-model="operacion">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <p>
      Estas a punto de realizar una {{nombreOperacion}}
    </p>
    <button type="button"  v-on:click="calcular">Calcular</button>
    <p>El resultado de la es: <span v-bind:class="resultado>3?classVerde:classRed">{{resultado}}</span></p>
  </div>
</form>
  <post v-bind:title="title" v-bind:descripcion="descripcion"></post>
  <post v-for="post in posts" v-bind:coment="post.title" v-bind:key="post.id"></post>
  </div>
</template>

<style lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #000;
}
#nav {
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
.red {
    color: red;
}
.verde{
  color: green;
}
</style>
<!--es el script, todo lo que esta dentro del data lo define-->
<script>
import post from './components/post';
// . hace referncia al archivo que yo cree
function data() {
	return {
		// name: 'Hola',
		// nombre: 'Elena',
		// mostrar: true,
		// names: ['Eduardo', 'Elena', 'Adrian', 'Erick'],
		user: '',
		password:'',
		example:['Ingeniero','Odontologo'],
		rol:'',
	  genero:'',
    check:'',
    classRed:'red',
    link:'',
    name:'',
    valorUno:0,
    valorDos:0,
    operacion:'',
    resultado:'',
    classVerde:'verde',
    title:'este es el titulo',
    descripcion:'estes es el contenido',
    posts:[
      { id: 1, title: 'comentario1' },
      { id: 2, title: 'comentario2' },
      { id: 3, title: 'comentario3' },
    ]
	};
}
//tiene que ser el mismo que puse el computed, this acceder al data a todas las variables automatico cuando cambian
function fullLink() {
    return `http://www.${this.link}.com`;
}

//los metodos no es necesario que retornan algo
function saludo(){
  alert(this.name);
}

function calcular(){
  this.resultado = eval(this.valorUno+this.operacion+this.valorDos);

}

function nombreOperacion(){
  var op='';
  // var operador=this.operacion;
  if(this.operacion ==='-'){
    op='resta';
  }

  if(this.operacion==='+'){
    op='suma';
  }

  if(this.operacion==='*'){
    op='multiplicación'
  }

  if(this.operacion==='/'){
    op='división'
  }
  return op;
}
export default {
  data,
  // computed es un objeto que me pasas funciones
  computed:{
    fullLink,
    nombreOperacion
  },
  // son los metodos para v-on
  methods: {
    saludo,
    calcular
  },

  //para que funcione los componenetes es un objeto
  components: {
        post,
  },
};
</script>
