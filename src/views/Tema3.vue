<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Redes logísticas

    .row.col-md-9.m-auto.cont_tema2_1(style="position:relative")
      .col-lg-7.mb-lg-0.mb-4(style="position:relative;place-self:center;")
        .p-4(style="background-color:#F6F6F6;box-shadow:rgb(0 0 0 / 20%) -3px 6px 16px -7px;" data-aos="fade-right")
          p.mb-0(data-aos="fade-up") Se entiende por red logística al conjunto de acciones que hacen posible que un producto manufacturado llegue desde el lugar de fabricación al consumidor final.
          p.mt-4.mb-0(data-aos="fade-up") Las redes están integradas por conjuntos de almacenes y centros de producción conectados entre sí mediante algún tipo de transporte. Estos almacenes pueden ser de varias clases, según la función que cumplan dentro de la red de distribución.
      .col-lg-5(style="position:relative;place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.svg" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") A continuación, vea los diferentes tipos:

    SlyderA.mt-5.slydertema2(tipo="b" style="background-color:#EFF5FA;border-radius:15px;")
      .row.p-4
        .col-lg-4.mb-4.mb-lg-0
          h4 Plataformas logísticas o almacenes centrales: 
          p.mt-4 Es una zona delimitada en la que se concentran actividades y funciones logísticas.
          ul.lista-ul.mt-4
            li 
              i.fas.fa-check(style="color:#FFBA5B;")
              | Su tarea fundamental es ahorrar costes en el almacenaje y distribución de productos.
            li 
              i.fas.fa-check(style="color:#FFBA5B;")
              | Hacer pedidos más grandes.
            li 
              i.fas.fa-check(style="color:#FFBA5B;")
              | Ubicar el almacenaje en lugares donde el coste del suelo es más reducido.
            li 
              i.fas.fa-check(style="color:#FFBA5B;")
              | Reducir el número de transportes necesarios.
        .col-lg-8
          figure
            img(src='@/assets/curso/tema3/2.png')
      .row.p-4
        .col-lg-4.mb-4.mb-lg-0
          h4 Almacenes de consolidación o de tránsito: 
          p.mt-4 Son sitios o almacenes que agrupan pedidos de tamaño pequeño o medio, de una zona geográfica, con el fin de ahorrar costos de transporte. Este tipo de almacén es muy utilizado por las empresas de transporte, en especial las de paquetería.
          p.mt-4 Está, por lo general, localizado en algún punto intermedio entre el almacén regional y el lugar de consumo. Cuando entre ambos hay una distancia que se tarda más de un día en cubrir, se suelen utilizar equipos y sistemas de almacenamiento sencillos. 
        .col-lg-8
          figure
            img(src='@/assets/curso/tema3/3.png')
      .row.p-4
        .col-lg-4.mb-4.mb-lg-0
          h4 Almacenes regionales o locales:
          p.mt-4 Distribuyen los pedidos de clientes o puntos de ventas de un área geográfica concreta; su tarea fundamental es desconsolidar o desagrupar los envíos. 
          p.mt-4 Se caracterizan por su especial diseño, adecuado para recibir grandes vehículos para la descarga de mercancía. La ruta de distribución de los productos del almacén al centro de consumo no debe ser superior a un día.
        .col-lg-8
          figure
            img(src='@/assets/curso/tema3/4.png')




</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.cont_tema2_1:before
  content: ''
  position: absolute
  width: 60%
  height: 50%
  right: -10%
  background-color: #FF6D4B
  bottom: -10px
  border-top-right-radius: 100px
.slydertema2 .slyder-a__bullets__item
  background-color: #A5B6C4
.slydertema2 .slyder-a__bullets__item--active
  background-color: #1B3F5E !important
  border-color: #1B3F5E
.slydertema2 .slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFBA5B
  opacity: 1
</style>
