<template>
    <div>
    <b-col md="3">
        <b-card
        tag="article"
        style="max-width:20rem"
        class="mb-2 padding-0"
        >

        <h4>Gimnasio 1</h4>
        
        <!--<b-dropdown id="dropdown-1" class="m-md-2">
            <b-dropdown-item>Editar información</b-dropdown-item>
            <b-dropdown-item>Eliminar gimnasio</b-dropdown-item>
        </b-dropdown>-->
        
        
        <div>
            <img alt="gym-info" class="img-gym" src="../assets/images/gimnasio1.jpg" top>
        </div>
                  
        
        <b-card-text class="text-left">
            <h6>Teléfono</h6>
            <p>  Teléfono</p>

            <h6>Dirección postal</h6>
            <p>  Nombre de calle</p>
            <p>  #número</p>
            <p>  Colonia, código postal</p>
            <p>  Estado, Ciudad</p>

            <h6>Mensualidad</h6>
            <p>  Mensualidad</p>

            <h6>Aforo</h6>
            <p>  Aforo</p>

            <h6>Aforo permitido</h6>
            <p>  Aforo permitido</p>
        </b-card-text>
        </b-card>
    </b-col>
    </div>
</template>

<script>
    export default{

    }

</script>

<style scoped>
    * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    color: black;
  }

  .padding-0{
    padding-right:0;
    padding-left:0;
  }

  .text-left{
    text-align: left !important;
    padding: .5rem .5rem .5rem .5rem;
  }

  .img-gym{
    max-width:100%;
  }

</style>