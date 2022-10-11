<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Selección de servicios de transporte

    .row.col-md-9.m-auto.cont_tema5_1(style="position:relative")
      .col-lg-7.mb-lg-0.mb-4(style="position:relative;place-self:center;")
        .p-4(style="background-color:#F6F6F6;box-shadow:rgb(0 0 0 / 20%) -3px 6px 16px -7px;" data-aos="fade-right")
          p.mb-0(data-aos="fade-up") Seleccionar un servicio de transporte resulta una tarea no siempre fácil. Lo primero es elegir el modo de transporte, ya sea aéreo, marítimo o terrestre. Lo segundo consiste en analizar qué transportista es el más conveniente, pues los costos varían demasiado, ya que no son universales.
          p.mt-4.mb-0(data-aos="fade-up") A pesar de que algunos productos solo pueden ser transportados en algunas ocasiones por unos modos, esta elección merece tiempo y análisis.
      .col-lg-5(style="position:relative;place-self:center;")
        figure
          img(src="@/assets/curso/tema5/1.svg" data-aos="fade-left")

    br
    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0.m-auto.col-md-8.col-sm-10.order-2.order-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema5/2.png" data-aos="fade-right")
      .col-lg-6.order-1.order-lg-0(style="place-self:center;")
        p(data-aos="fade-up") Los factores que intervienen en la selección del modo de transporte son normalmente los siguientes:
        ul.lista.mt-4
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Factibilidad logística.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Factor de estiba de la carga.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Valor de la mercadería.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Cantidad del envío.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Perecibilidad de la carga.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Urgencia del cliente.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Riesgos que pretendan asumirse.
          li(data-aos="fade-up") 
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Costos de terminales portuarias, depósitos fiscales y terminales aeroportuarias.

    Separador.mt-5

    .titulo-segundo
      h2#t_5_1 5.1 Ciclo de pedido

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.col-md-10.m-auto
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/3.png')})`}"
      )
      .bloque-texto-g__texto.p-5.mt-4.mb-4
        p.mb-0 El ciclo de pedido es la suma de todos los tiempos que se requieren para cada una de las actividades que involucran desde el momento que se recibe el pedido de un cliente hasta que se entrega el producto en las condiciones acordadas previamente.

    p.mt-5(data-aos="fade-up") Hay diferentes pasos que completan este ciclo, en algunos casos, el orden pudiese cambiar, pero en general el ciclo se comprende por los siguientes momentos:

    PasosB.color-acento-contenido.mt-5.p-5(style="background-color:#EEECF4;border-radius:20px;")
      .row.mt-4(titulo="Recepción del pedido")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/4.png')
        .col-md-6(style="place-self:center")
          h4 Recepción del Pedido:
          p.mt-4 Se recibe la información acerca de un producto que se necesita. En la misma se encuentra la cantidad, tiempo y aplicación.
      .row.mt-4(titulo="Comprobación del pedido")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          h4 Comprobación del pedido:
          p.mt-4 Se verifica toda la información entre el cliente y el productor, incluyendo la forma de pago.
        .col-md-6(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/5.png')
      .row.mt-4(titulo="Comprobación de las Existencias")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/6.png')
        .col-md-6(style="place-self:center")
          h4 Comprobación de las Existencias:
          p.mt-4 Se revisa el inventario para asegurarse si se puede responder con el pedido.
      .row.mt-4(titulo="Priorización de Pedidos")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          h4 Priorización de Pedidos:
          p.mt-4 Consiste en las tácticas que se realicen con relación al servicio al cliente y fidelización.
        .col-md-6(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/7.png')
      .row.mt-4(titulo="Preparación del Pedido")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/8.png')
        .col-md-6(style="place-self:center")
          h4 Preparación del Pedido:
          p.mt-4 Aclara las características del transporte del pedido y se organiza el pedido según lo solicitado.
      .row.mt-4(titulo="Envío y Entrega")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          h4 Envío y Entrega:
          p.mt-4 La mercancía es despachada y entregada al comprador, bajo las condiciones pautadas.
        .col-md-6(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/9.png')
      .row.mt-4(titulo="Facturación")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/10.png')
        .col-md-6(style="place-self:center")
          h4 Facturación:
          p.mt-4 Se hace entrega de toda la documentación que soporta el precio del producto, declaraciones y cláusulas. Puede ser virtual o física.
      .row.mt-4(titulo="Cobro")
        .col-md-6.mb-4.mb-md-0(style="place-self:center")
          h4 Cobro:
          p.mt-4 Se recibe la cantidad de dinero acordado para el pago del producto. Según el caso, este paso también puede ocurrir al inicio del ciclo.
        .col-md-6(style="place-self:center")
          figure
            img(src='@/assets/curso/tema5/11.png')

    Separador.mt-5

    .titulo-segundo
      h2#t_5_2 5.2   Administración de cadena de suministro SCM

    .row.col-md-10.m-auto.cont_tema5_2(style="position:relative")
      .col-lg-5.mb-lg-0.mb-4(style="position:relative;place-self:center;")
        figure
          img(src="@/assets/curso/tema5/12.svg" data-aos="fade-left")
      .col-lg-7(style="position:relative;place-self:center;")
        .p-4(style="background-color:#F6F6F6;box-shadow:rgb(0 0 0 / 20%) -3px 6px 16px -7px;" data-aos="fade-right")
          p.mb-0(data-aos="fade-up") El modelo de Administración de cadena de suministro SCM (#[em Supply Chain Management]) sirve para ofrecer seguimiento al proceso completo de producción, integrando y coordinando las maneras en que una organización descubre las materias primas y los elementos necesarios para llevar a cabo un producto o servicio, y después lo entrega a los consumidores.

    br
    .row.mt-5
      .col-lg-3.mb-4.mb-lg-0(style="place-self:center")
        h4(data-aos="fade-up") Características y funcionalidades
        p.mt-3(data-aos="fade-up") El SCM abarca lo siguiente:
        ul.lista-ul.mt-3
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Compras
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Producción
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Contratación
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Inventario
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Dsitribución
      .col-lg-3.mb-4.mb-lg-0.d-none.d-lg-flex(style="place-self:center")
        figure.text-center
          img(src="@/assets/curso/tema5/13.png" data-aos="zoom-in-up" style="display:inline;max-width:200px;")
      .col-lg-6(style="place-self:center")
        h4(data-aos="fade-up") Procesos de la cadena de suministro
        ul.lista-ul.mt-3
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Planeamiento entre la demanda y la oferta para abastecer al consumidor.
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Abastecimiento mediante planes y alianzas con proveedores, para lograr mínimos costos de entrega.
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Manufactura con máxima flexibilidad y velocidad, a bajos costos, para responder al mercado.
          li(data-aos="fade-up") 
            i.fas.fa-check(style="color:#FFBA5B;")
            | Entrega mediante movimiento eficiente de productos desde los almacenes a los clientes.

    p.mt-5(data-aos="fade-up") En conclusión, el SCM no sólo permite ir más allá del registro y seguimiento del proceso, sino que ayuda a identificar los elementos clave de la cadena de suministro, a realizar tendencias y pronósticos de producción y ventas; ayuda en la planificación integral de los procesos y planeación colaborativa, optimización y entrega a tiempo a los clientes, con lo que se mejora el nivel de servicio y satisfacción, lo cual deriva también en reducción de costos de inventario, de transporte y de administración.




</template>

<script>
export default {
  name: 'Tema5',
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
.cont_tema5_1:before
  content: ''
  position: absolute
  width: 60%
  height: 50%
  right: -10%
  background-color: #FF6D4B
  bottom: -10px
  border-top-right-radius: 100px
.cont_tema5_2:before
  content: ''
  position: absolute
  width: 60%
  height: 50%
  left: -10%
  background-color: #FF6D4B
  bottom: -10px
  border-top-left-radius: 100px
</style>
