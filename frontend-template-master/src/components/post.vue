<template>
<!-- props son los parametros -->
<!-- el componente tiene 3 partes el template,css,js -->
<!-- va el html -->
<!-- tiene que tener un elemento base,agrupa -->
<div>
    <div class="title">
        {{title}}  
        
    </div>
    <p>{{descripcion}}</p>
    <p>{{coment}}</p> 

    </div> 
   
</template>

<script>
// va la funcionalidad
//export default exporta el componente
export default {
    name: 'post',
    // los parametros que quiero que mi componente tenga, y que me diga que tipo es 
    props: {
        title: {
            type: String,
        },
        descripcion:{
            type:String,
        },
        coment:{
            type:String,
        }
    },
};
</script>

<style scoped>
/* todo el css solo funciona para ese componente , para que solo pertenezca a ese componente su css*/
.title {
    color: peru;
    font-size: 24px;
}
</style>