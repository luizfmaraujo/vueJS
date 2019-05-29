<template>
    <div id="acoes" v-if='exibir===1'>
        <p>Ações</p>
        <p>Editar</p>
        <p>Deletar</p>
    </div>
</template>

<script>

  export default {
    name: 'Acoes',
    props:['exibir'],
    data() {
      return {
      }
    },
  };

</script>

<style>
    #acoes {
        position: absolute; 
        left: 50%; 
        top: 50%;
        width: 116px;
        height: 118px;
        border-radius: 5px;
        background-color: #FFF;
        color: #FFF;
        background-color: #666;
        text-align: center;
        z-index: 1000;
    }

</style>
