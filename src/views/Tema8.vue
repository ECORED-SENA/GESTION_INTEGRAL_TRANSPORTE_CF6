<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Configuración de pedidos

    .row
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema8/1.png" data-aos="fade-right")
      .col-md-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") Durante la organización y gestión de pedidos, conocido como #[em picking], se seleccionan y recogen los productos desde las estanterías, pasillos y demás espacios de la bodega, así, el objetivo de la preparación de pedidos es organizar los productos para ser embalados (packing) y enviados a sus respectivos compradores, por lo que mientras más eficaz sea esta etapa, mejores serán los resultados a la hora de la entrega del producto al cliente.

    p.mt-5(data-aos="fade-up") Hay diferentes formas de realizar #[em picking] de acuerdo con las características de la mercancía, las cuales verá a continuación:

    SlyderA.p-5.mt-5(tipo="b" style="background-color:#EFF5FA;border-radius:15px;")
      .row
        .col-md-4.mb-4.mb-md-0
          h4 #[em Picking] al nivel del suelo
          p.mt-4 Las cajas con la mercancía están sobre el suelo. En esta clase de #[em picking], la preparación que se realiza es mediante el posicionamiento sobre el suelo de cargas completas (estibas, por ejemplo), de las que se extraerán las unidades que formarán parte de los pedidos finales. 
        .col-md-8
          figure
            img(src='@/assets/curso/tema8/2.png')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 #[em Picking] en niveles bajos
          p.mt-4 Este es un sistema que está en un nivel superior al del suelo, permite que los trabajadores puedan acceder al producto de pie.
        .col-md-8
          figure
            img(src='@/assets/curso/tema8/3.png')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 #[em Picking] en niveles medios
          p.mt-4 La altura máxima en la cual esté situado este sistema no será mayor a 4 metros, está pensado en el tipo de producto en el que su rotación no es muy alta. Esto quiere decir que los niveles inferiores a este tendrán el producto que más flujo tiene en la empresa.
        .col-md-8
          figure
            img(src='@/assets/curso/tema8/4.png')
      .row
        .col-md-4.mb-4.mb-md-0
          h4 #[em Picking] en niveles altos
          p.mt-4 Este es un sistema similar al de niveles medios, para desplazar los productos requiere de plataformas, lo que indica mayor costo; en este nivel están los productos que tienen menos demanda.
        .col-md-8
          figure
            img(src='@/assets/curso/tema8/5.png')



</template>

<script>
export default {
  name: 'Tema8',
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
