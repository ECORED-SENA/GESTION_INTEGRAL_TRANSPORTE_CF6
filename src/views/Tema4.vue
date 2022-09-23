<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Selección de rutas de transporte con puntos de origen y destinos diferentes

    p(data-aos="fade-up") Luego de escoger un modo de transporte y tener la mercancía para transportar del lugar X al Y, se decide la ruta a seguir (R) y el vehículo (V). Se debe dar un mapa con diferentes opciones, prevaleciendo siempre la más corta.
    p.mt-4(data-aos="fade-up") Ahora, se preguntará cómo seleccionar o definir esas rutas a seguir, para lo cual se le invita a ver el siguiente video:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/1.png" data-aos="fade-right")
      .col-md-10
        h5(data-aos="fade-up") Normatividad vigente para el transporte de carga: velocidades y tiempos permitidos.
        p.mt-3(data-aos="fade-up") En Colombia, la normatividad vigente que regula la velocidad en carreteras nacionales, departamentales, distritales y municipales está dada por la Resolución 1384 de 2010, del Ministerio de Transporte, donde se establecen los límites permitidos en los diferentes corredores viales, bajo el manual denominado "Método para establecer límites de velocidad en carreteras colombianas", elaborado por la Universidad del Cauca, el cual hace parte integral de esta resolución. 

    p.mt-5(data-aos="fade-up") Por otra parte, en el Código Nacional de Tránsito, también se mencionan los límites de velocidad, en los artículos 106 y 107 del Capítulo XI, con el Decreto 015 de 2011, que modificó el artículo 107 de este código, modificando los límites de velocidad. 

    figure.mt-5
      img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up")

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema4/3.png" data-aos="fade-right")
      .col-md-10
        h5(data-aos="fade-up") Ruteo de flotas de distribución a centros de venta
        p.mt-3(data-aos="fade-up") Dentro de la operación de transporte, es importante buscar un camino entre todas las opciones posibles en una red de distribución, permitiendo programar rutas efectivas a cualquier destino.
        p.mt-4(data-aos="fade-up") Se ha demostrado que desarrollando una adecuada programación de rutas efectivas de transporte de carga las empresas pueden reducir los gastos de transporte hasta en un 30 %, y sin este trabajo de programación, las empresas pueden llegar a gastar hasta 30 % de su presupuesto anual en el desarrollo e implementación de la logística de rutas de entrega de productos, asimismo, demorando más los tiempos de operación e incurriendo en desperdicios en rubros como el gasto en combustible y el pago de horas-hombre. 

    p.mt-4(data-aos="fade-up") Otro problema que surge, al no tener un diseño o programación de rutas de entrega, es la pérdida o deterioro de mercancías. Actualmente, las empresas de envíos pagan entre un 15 % y un 50 % del total del precio de venta de un producto, todo por errores en el almacenaje y de despacho de sus pedidos.

    figure.mt-5
      img(src="@/assets/curso/tema4/4.png" data-aos="zoom-in-up")




</template>

<script>
export default {
  name: 'Tema4',
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
<style lang="sass"></style>
