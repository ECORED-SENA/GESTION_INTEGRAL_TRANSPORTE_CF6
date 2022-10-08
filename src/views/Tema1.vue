<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Canales de distribución

    figure
      img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-up")

    p.mt-5(data-aos="fade-up") El canal de distribución es un conjunto de rutas que elige una empresa para llevar un producto desde el fabricante hasta el consumidor final; estos canales pueden ser propios o directos, y externos o ajenos.
    p.mt-4(data-aos="fade-up") Pero para un buen entendimiento de estos canales, es importante conocer los siguientes conceptos y elementos que forman parte de ellos:

    SlyderA.p-5.mt-5(tipo="b" style="background-color:#EFF5FA;border-radius:15px;")
      .row
        .col-lg-4.mb-4.mb-lg-0
          h4 Elementos que intervienen
          p.mt-4 Dentro del desarrollo del canal de distribución, intervienen:
          ul.lista.mt-4
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong El productor:] quien fabrica el producto.
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong El consumidor:] la persona que compra el producto.
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong El mayorista:] las empresas que adquieren artículos para vender, a su vez, a otras empresas. No al consumidor final.
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong El minorista:] el comercio que vende al cliente final.
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/2.png')
      .row
        .col-lg-4.mb-4.mb-lg-0
          h4 Variables
          p.mt-4 Variables en la elección de los canales de distribución:
          ul.lista.mt-4
            li #[i.fas.fa-check(style="color:#FFBA5B;")] Naturaleza del producto
            li #[i.fas.fa-check(style="color:#FFBA5B;")] Precio de venta
            li #[i.fas.fa-check(style="color:#FFBA5B;")] Estabilidad del producto y del distribuidor en el mercado
            li #[i.fas.fa-check(style="color:#FFBA5B;")] Reputación del intermediario
            li #[i.fas.fa-check(style="color:#FFBA5B;")] Calidad de la fuerza de ventas
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/3.png')
      .row
        .col-lg-4.mb-4.mb-lg-0
          h4 Longitud de un canal de distribución
          p.mt-4 La longitud de un canal de distribución hace referencia al número de intermediarios que participan en el proceso de comercialización de un producto hasta que llega a las manos del consumidor final.
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/4.png')
      .row
        .col-lg-4.mb-4.mb-lg-0
          h4 Canales
          p.mt-4 #[strong Canal propio o directo:] la empresa entrega el producto al cliente, sin intermediarios. De esta manera, no necesita de un tercero para el almacenaje, transporte o atención al consumidor.
          p.mt-4 #[strong Canal externo o indirecto:] en este caso, se necesita una empresa externa para la distribución. Existen dos tipos de distribución externa:
          ul.lista.mt-4
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong Corto:] va desde el fabricante al detallista o minorista, y de este, al cliente final. 
            li #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong Largo:] cuando el producto viaja desde el fabricante al mayorista, luego de este, al minorista, hasta llegar al consumidor. 
        .col-lg-8
          figure
            img(src='@/assets/curso/tema1/5.png')




</template>

<script>
export default {
  name: 'Tema1',
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
.slyder-a__bullets__item
  background-color: #F5C6BD
.slyder-a__bullets__item--active
  background-color: #FF6D4B !important
  border-color: #FF6D4B
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #FFBA5B
  opacity: 1
</style>
