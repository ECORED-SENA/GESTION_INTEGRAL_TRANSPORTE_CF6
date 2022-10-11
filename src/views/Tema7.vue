<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Calidad de la gestión y desempeño de la operación

    p(data-aos="fade-up") Un proceso de gestión de la calidad asegura que una organización, producto o servicio sea consistente, para ello, se realiza un análisis de desempeño, donde se evalúa la eficiencia y la productividad, para mejorarlos al mayor grado posible.
    .row.col-md-10.m-auto.cont_tema7_1.mt-5(style="position:relative")
      .col-lg-7.mb-lg-0.mb-4(style="position:relative;place-self:center;")
        .p-4(style="background-color:#F6F6F6;box-shadow:rgb(0 0 0 / 20%) -3px 6px 16px -7px;" data-aos="fade-right")
          p.mb-0(data-aos="fade-up") Algunos de los principios de la gestión de calidad son:
          ul.lista.mt-3
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Enfoque hacia el cliente.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Liderazgo.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Implicación de todo el personal.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Compromiso de la dirección.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Enfoque en los procesos.
            li(data-aos="fade-up")
              p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Mejora continua.
      .col-lg-5(style="position:relative;place-self:center;")
        figure.text-center.mt-5.mb-5
          img(src="@/assets/curso/tema7/1.svg" data-aos="fade-left" style="display:inline;max-width:250px;")

    p.mt-5(data-aos="fade-up") Grandes empresas y pymes trabajan hacia una gestión de la calidad de manera más efectiva, para ello, tienen sus propios estándares y adecúan sus procedimientos según sus necesidades.
    p.mt-4(data-aos="fade-up") La implementación de prácticas y normas de calidad en la gestión fue favorecida por la aparición de las Normas ISO 9001, establecidas por la Organización Internacional para la Estandarización. Son un referente de distintos aspectos, con la finalidad de ayudar a las organizaciones a ser más eficientes.

    figure.mt-5
      img(src="@/assets/curso/tema7/2.png" data-aos="zoom-in-up")

    h4.mt-5(data-aos="fade-up") ¿Cómo lograr una buena gestión de la calidad en la logística y el transporte?
    p.mt-4(data-aos="fade-up") La particularidad del transporte automotor de carga en relación con la gestión de la calidad se basa en que es un servicio que interrelaciona a proveedores, clientes y operadores logísticos, independientemente del tamaño de la empresa, la carga o el camión.

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema7/3.png" data-aos="fade-right" style="display:inline;max-width:190px")
      .col-lg-10
        p.mb-0(data-aos="fade-up") Desarrollar e implantar un Sistema de Gestión de la Calidad bajo la Norma ISO 9001 en el sector del transporte es una iniciativa que trae grandes beneficios para todos los grupos de interés. Aunque no se certifique, aplicar este tipo de normas promueve las buenas prácticas para un trabajo más eficiente, productivo y, en algunos casos, la posibilidad de certificación en campos como la seguridad y el cuidado del medio ambiente; aspectos valorados por proveedores.

    figure.mt-5
      img(src="@/assets/curso/tema7/4.png" data-aos="zoom-in-up")

    h4.mt-5(data-aos="fade-up") Indicadores de calidad en logística
    p.mt-4(data-aos="fade-up") Los indicadores de calidad ineludibles que deben figurar en la monitorización de operaciones logísticas y transporte son: 

    .row.mt-5
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FAE7CF;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              p #[strong Relación costes-beneficios:] la reducción de costes no debe ni puede afectar la calidad en su totalidad.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/5.png')})`}" style="background-color: #fae7cf;")
              h4.mb-0.p-3.text-center(style="background-color:#FAE7CF;position:absolute;width:100%;bottom:0;border-radius:0px 0px 15px 15px;") Relación costes-beneficios
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FAE7CF;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              p #[strong Tiempos:] la reducción del tiempo en la gestión, la carga y la distribución de mercancías es un aspecto importante en cuanto a calidad del servicio se refiere; por lo tanto, este ítem debe contar con los indicadores oportunos en el conjunto de los KPI de calidad que se implementen.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/6.png')})`}" style="background-color: #fae7cf;")
              h4.mb-0.p-3.text-center(style="background-color:#FAE7CF;position:absolute;width:100%;bottom:0;border-radius:0px 0px 15px 15px;") Tiempos
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FAE7CF;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              p #[strong Nivel de satisfacción del cliente:] es importante tener una serie de indicadores tanto cuantitativos como cualitativos que permitan medir el servicio prestado. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/7.png')})`}" style="background-color: #fae7cf;")
              h4.mb-0.p-3.text-center(style="background-color:#FAE7CF;position:absolute;width:100%;bottom:0;border-radius:0px 0px 15px 15px;") Nivel de satisfacción del cliente
      .col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="background-color:#FAE7CF;")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-5.p-xl-5
              p #[strong Operaciones de logística inversa:] este tipo de operaciones debe contar con indicadores específicos que evalúen aspectos como los tiempos de recogida y devolución de los artículos o mercancías al punto de origen, costes repercutidos al cliente, márgenes de beneficios-pérdidas, impacto medioambiental de estas operaciones.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema7/8.png')})`}" style="background-color: #fae7cf;")
              h4.mb-0.p-3.text-center(style="background-color:#FAE7CF;position:absolute;width:100%;bottom:0;border-radius:0px 0px 15px 15px;") Operaciones de logística inversa

    Separador.mt-5

    .titulo-segundo
      h2#t_7_1 7.1   #[em Cross docking]

    p(data-aos="fade-up") Es un proceso logístico que promueve un ahorro de costos, el aumento de la calidad del producto y la disminución de los tiempos de entrega; ayuda a mejorar los procesos de logística y a la satisfacción de los clientes.

    .row.col-md-10.m-auto.cont_tema7_2.mt-5(style="position:relative")
      .col-lg-5.mb-lg-0.mb-4(style="position:relative;place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema7/9.svg" data-aos="fade-left" style="display:inline;")
      .col-lg-7(style="position:relative;place-self:center;")
        .p-4(style="background-color:#F6F6F6;box-shadow:rgb(0 0 0 / 20%) -3px 6px 16px -7px;" data-aos="fade-right")
          p.mb-0(data-aos="fade-up") El #[em cross docking] hace parte de los procesos de logística y consiste en la entrega rápida de un producto.  "Es una técnica de consolidación y preparación de pedidos de productos provenientes de diferentes proveedores para su envío a varios destinos (puntos de venta o clientes), todo en un lapso de tiempo menor a 24 horas" (Alvarado, 2018). 

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        p(data-aos="fade-up") Es un sistema de distribución donde la mercancía recibida es dispuesta inmediatamente para su envío, en lugar de ser enviada a almacenamiento. Con este procedimiento de logística, la necesidad de almacenaje de los productos se reduce o es totalmente eliminada; al evitar o disminuir el almacenamiento, se conseguirá que el valor de un producto no se vea perjudicado. 
        p.mt-4(data-aos="fade-up") Otra de las ventajas del #[em cross docking] es que disminuye el tiempo de manipulación de los productos, así, la empresa genera un ahorro significativo, ya que no necesitará una gran carga de personal para la labor; igualmente, este sistema de distribución permitirá a la compañía tener una línea de suministros mucho más organizada. 
        p.mt-4(data-aos="fade-up") Para una efectiva y correcta aplicación del #[em cross docking], se necesita:
        ul.lista.mt-3
          li.mb-2(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Selección adecuada de los productos.
          li.mb-2(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Un diseño del flujo de productos y su relación con el área de trabajo.
          li.mb-2(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Soporte de las TIC para el flujo adecuado de información entre el cross docker, proveedores y puntos de venta.
          li.mb-2(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Entrenamiento del personal.
          li.mb-2(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Proveedores adecuados para evitar incumplimientos.
          li(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] Una efectiva gestión de transporte.
      .col-lg-6(style="place-self:center")
        figure
          img(src="@/assets/curso/tema7/10.png" data-aos="fade-left")

    p.mt-5(data-aos="fade-up") La implementación del #[em cross docking] puede generar a una empresa oportunidades para ahorrar dinero, aumentar la eficiencia y brindar un mejor servicio a los clientes. De esta forma, puede ser un diferenciador clave entre la organización y sus competidores.

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema7/11.png" data-aos="fade-right" style="display:inline;max-width:190px")
      .col-lg-10(style="place-self:center")
        p.mb-0(data-aos="fade-up") Desde el punto de vista de la manipulación, el #[em cross docking] se caracteriza por la ausencia de picking (descomposición de las unidades de carga en otras menores), o su reducción al mínimo; algunas veces, muchas de las plataformas dedicadas al #[em cross docking] están ya totalmente automatizadas, sustituyendo los operarios por cintas transportadoras o carretillas robotizadas.

    Separador.mt-5

    .titulo-segundo
      h2#t_7_2 7.2   Logística inversa

    p(data-aos="fade-up") La logística inversa son aquellas actividades y procesos que se llevan a cabo para trasladar los productos o materiales desde el usuario o consumidor hasta el fabricante, las devoluciones, los envíos para el reciclaje o para su destrucción, entre otros fines. 
    p.mt-4(data-aos="fade-up") También implica las prácticas y procesos destinados a gestionar las devoluciones y retornos de los productos desde los puntos de venta hasta el fabricante, para efectuar su reparación, reciclaje o eliminación al mínimo coste posible.

    figure.mt-5
      img(src="@/assets/curso/tema7/12.png" data-aos="zoom-in-up")

    h4.mt-5(data-aos="fade-up") Indicadores de calidad en logística
    p.mt-4(data-aos="fade-up") Los indicadores de calidad ineludibles que deben figurar en la monitorización de operaciones logísticas y transporte son: 

    SlyderF.mt-5.col-md-10.m-auto(columnas="col-lg-6")
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/13.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Rapidez en la entrega:] Se debe elegir el medio de transporte y la empresa proveedora que cumpla con la entrega de la mercancía en el plazo pactado.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/14.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Costos:] se deben contemplar varias unidades de transporte para ajustar todo lo relacionado con el flete; a pesar de que hay un estándar de precios, es recomendable hacer un estudio antes de elegir la mejor opción.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/15.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Eficiencia:] si es necesaria una empresa proveedora de vehículos de transporte, ésta debe contar con servicios adicionales que solucionen las distintas eventualidades que se puedan presentar.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/16.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Seguridad:] los vehículos deben garantizar la entrega de la mercancía en óptimas condiciones, contar con GPS.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/17.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Precisión:] para una mayor tranquilidad de los clientes y evitar contratiempos, es importante que los vehículos sean de calidad y, en lo posible, modernos.
      .tarjeta-avatar
        img(src='@/assets/curso/tema7/18.png')
        .tarjeta.color-primario(style="background-color:#FAE7CF;min-height:300px;")
          .p-4
            p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Modo:] el tipo de transporte debe satisfacer los requerimientos de la carga, puede ser un vehículo de carretera, ferroviario, marítimo o aéreo.

    h3.mt-5(data-aos="fade-up") Tipos de logística inversa

    p.mt-4(data-aos="fade-up") Básicamente, existen dos tipos de logística Inversa:
    p.mt-4(data-aos="fade-up") Logística de devoluciones: se responsabiliza de los retornos desde el punto de distribución o desde el cliente hasta el centro del que partió el producto, es una de las gestiones más importantes y más ahora que las ventas por Internet han aumentado.
    p.mt-4(data-aos="fade-up") Logística de residuos: Se refiere a la recuperación de los residuos para su posterior aprovechamiento y así contribuir a la conservación del medio ambiente. 

    h4.mt-5(data-aos="fade-up") Selección de vehículos de acuerdo con operación de transporte

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema7/19.png" data-aos="fade-right")
      .col-lg-6(style="place-self:center")
        p(data-aos="fade-up") Para definir el vehículo de carga, es importante tener en cuenta aspectos como seguridad, eficacia, costos, posibles rutas y capacidad. Además, debe elegirse pensando siempre en las necesidades de la empresa y en cumplir con los requisitos del cliente, garantizando un excelente papel de distribución.
        p.mt-4(data-aos="fade-up") En algunos casos, resulta ser un total desafío elegir un camión de carga; este debe cumplir con varias características, debe ser versátil, se debe pensar en el combustible que usará e incluso su rendimiento, la capacidad de carga, las exigencias de los productos y el modo de superficie que recorrerá.

    p.mt-5(data-aos="fade-up") Los factores a considerar en el momento de la selección de un vehículo de carga son:

    h4.text-center.mt-5(data-aos="fade-up") Selección de vehículos de acuerdo con operación de transporte

    .row.col-lg-8.m-auto.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .tarjeta-avatar(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema7/20.png')
          .tarjeta.color-primario(style="background-color:#FAE7CF;")
            .p-4
              p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Logística de devoluciones:] se responsabiliza de los retornos desde el punto de distribución o desde el cliente hasta el centro del que partió el producto, es una de las gestiones más importantes y más ahora que las ventas por Internet han aumentado.
      .col-lg-6
        .tarjeta-avatar(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema7/21.png')
          .tarjeta.color-primario(style="background-color:#FAE7CF;")
            .p-4
              p.text-center.mt-4(style="color:#12263F;") #[strong(style="color:#12263F;") Logística de residuos:] se refiere a la recuperación de los residuos para su posterior aprovechamiento y así contribuir a la conservación del medio ambiente. 

      .p-4.mt-5(style="background-color:#D9D5E6;border-radius:10px;")
        h5(data-aos="fade-up") Indicadores de eficiencia
        p.mt-4(data-aos="fade-up") Para poder contar con un proceso de eficiencia, es importante tener en cuenta los indicadores a seguir:
        ul.lista.mt-3
          li.mb-1(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong Tipo de operación:] incluye la distancia a recorrer, tipo de terreno, etc.
          li.mb-1(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong Tipo de carga:] involucra las características del producto, peso, etc.
          li.mb-1(data-aos="fade-up")
            p.mb-0 #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong Tipo de vehículo:] comprende tipo de chasis, resistencia, etc.



</template>

<script>
export default {
  name: 'Tema7',
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
.cont_tema7_1:before
  content: ''
  position: absolute
  width: 60%
  height: 100%
  right: -10%
  background-color: #FF6D4B
  bottom: -10px
  border-top-right-radius: 200px
.tarjeta-slide.color-secundario .tarjeta-slide__img
  background-color: white
.cont_tema7_2:before
  content: ''
  position: absolute
  width: 60%
  height: 60%
  left: 0
  top: 20%
  background-color: #FF6D4B
  bottom: -10px
  border-top-left-radius: 50px
.slyder-f__btn i
  color: #FFBA5B
</style>
