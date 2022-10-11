<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelos de distribución

    .row
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-right" style="display:inline;max-width:190px;")
      .col-lg-10
        p(data-aos="fade-up") Los modelos de distribución consisten en la infraestructura que adoptan las empresas fabricantes para llevar sus productos a los clientes. 
        p.mt-4(data-aos="fade-up") Dentro del proceso de distribución, se pueden encontrar varios modelos que permiten a las empresas hacer llegar sus productos hasta un mercado. Es de entender que una compañía puede optar de forma simultánea por varios de estos modelos, estructurándolos de forma adecuada, unos u otros, en determinados lugares, clientes, etc.
        p.mt-4(data-aos="fade-up") A continuación, vea los modelos de distribución más comunes que se pueden encontrar:

    h3.text-center.mt-5(data-aos="fade-up")
      span(style="background-color:#5B4794;color:white;padding:.3rem 4rem;border-radius:3px;") Modelos de distribución

    h4.mt-5(data-aos="fade-up") Modelo descentralizado
    .row.mt-5
      .col-lg-6.mb-4.mb-mb-0
        p(data-aos="fade-up") Es el modelo más utilizado, consiste en que, una vez haya acabado la fase de fabricación, la mercancía pasa directamente a un almacén central, conocido como regulador; de ahí, pasa nuevamente a transportarse a otros almacenes de proximidad o delegaciones, con el objetivo de acercar la mercancía a los puntos de venta.
        p.mt-4(data-aos="fade-up") La gran ventaja de este modelo es el ahorro de tiempo que supone la cercanía entre almacén y punto de venta, pero su principal desventaja es que este modelo requiere de una gran infraestructura, por lo que resulta costoso.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/2.png" data-aos="fade-left")

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.mb-5.mb-md-0(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/3.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Ventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Se disminuye mucho la incertidumbre en el plazo de entrega.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Genera puestos de trabajo locales.
      .col-lg-6
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/4.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Desventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Costos fijos elevados por el número de CD (Centros de Distribución), personas de control y seguridad.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Transporte menos eficiente.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mayor manipulación.

    div.mt-5(style="border-top:3px #707070 solid;")

    h4.mt-5(data-aos="fade-up") Modelo centralizado
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        p(data-aos="fade-up") Diferente al modelo descentralizado, el modelo centralizado requiere de una menor capacidad de infraestructura, por lo que se produce un mayor ahorro. En este modelo logístico de distribución, la mercancía, una vez sale de la fábrica, pasa a un almacén central, de donde sale una flota de camiones, cada uno con una ruta de distribución asignada, para dar alcance a los clientes de las diferentes zonas.
        p.mt-4(data-aos="fade-up") Utilizada cuando se tiene que administrar, recibir y despachar un número muy grande de productos, facilitando su control y buscando eficiencias permanentes.
      .col-lg-6
        figure
          img(src="@/assets/curso/tema2/6.png" data-aos="fade-left")

    .row.mt-5
      .col-lg-6.mb-4.mg-lg-0
        .tarjeta-avatar-b.mb-5.mb-md-0(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/3.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Ventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Ahorro en el transporte desde origen.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Menores costos fijos.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Un solo CD.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mayores eficiencias.
      .col-lg-6
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/4.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Desventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mayores costes de transporte a los destinos finales. 
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Incertidumbre en los plazos de entrega.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mayor inversión inicial.

    div.mt-5(style="border-top:3px #707070 solid;")

    h4.mt-5(data-aos="fade-up") Distribución #[em cross-docking]

    p.mt-4(data-aos="fade-up") En este método, se reemplazan delegaciones por plataformas #[em cross-docking] (carga/descarga), sitios de recepción y reexpedición de mercancías del fabricante al distribuidor. Evitan el requisito de almacenaje y aceleran el flujo al punto de venta.

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar-b.mb-5.mb-md-0(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/3.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Ventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Ahorro de costo de almacenamiento de inventario.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Menor número de operaciones y manejo de cargas.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Acorta plazos de entrega.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mejora la satisfacción del cliente.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Reduce la huella de carbono.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Mejora la rentabilidad, gracias al ahorro de tiempo.
      .col-lg-6
        .tarjeta-avatar-b(style="height:100%;")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/4.png' data-aos="zoom-in-up")
          .tarjeta.tarjeta--azul(style="background-color:#FAE7CF;")
            .p-4
              h4(data-aos="fade-up") Desventajas
              ul.lista-ul--color.mt-4
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Se necesita inversión para reestructurar todo para #[em cross-docking].
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Requiere integrar efectivamente toda la cadena.
                li(data-aos="fade-up") 
                  i.fas.fa-check(style="color:#FFBA5B;")
                  | Se necesita dedicar buen tiempo a la planificación y coordinación.



</template>

<script>
export default {
  name: 'Tema2',
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
