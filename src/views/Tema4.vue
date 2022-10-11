<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Selección de rutas de transporte con puntos de origen y destinos diferentes

    p(data-aos="fade-up") Luego de escoger un modo de transporte y tener la mercancía para transportar del lugar X al Y, se decide la ruta a seguir (R) y el vehículo (V). Se debe dar un mapa con diferentes opciones, prevaleciendo siempre la más corta.

    .row.mt-5
      .col-md-3.mb-4.mb-md-0.d-none.d-md-block
        figure.text-center
          img(src="@/assets/curso/tema4/5.png" data-aos="fade-right" style="display:inline;max-width:150px;")
      .col-md-9
        h4(data-aos="fade-up") #[span(style="background-color:#5B4794;padding:.4rem 3rem;border-radius:5px;color:white;") Selección de rutas de transporte]
        p.mt-4(data-aos="fade-up") A la hora de transportar mercancía, tenemos puntos de origen y destino distintos y únicos. Para lograr una correcta movilización de la mercancía, necesitamos elaborar una red; conozcamos los elementos de esta:

    .row.mt-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/6.png" data-aos="fade-right")
      .col-lg-7
        h5(data-aos="fade-up") Nodo: es una localización específica
        ul.lista-ul.mt-4
          li(data-aos="fade-up") 
            p #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong(style="color:#5B4794;") El primer elemento es el Nodo:] es una localización específica; podemos tener nodos de origen, de destino o de transbordo.
          li(data-aos="fade-up") 
            p #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong(style="color:#5B4794;") Luego, tenemos el Arco:] que representa la conectividad de dos nodos; estos pueden ser unidireccionales o bidireccionales.
          li(data-aos="fade-up") 
            p #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong(style="color:#5B4794;") Decisión:] que nos indica a través de qué arcos viajar.
          li(data-aos="fade-up") 
            p #[i.fas.fa-check(style="color:#FFBA5B;")] #[strong(style="color:#5B4794;") Y el Objetivo:] que busca minimizar la distancia (o tiempo) entre el origen y el destino.

    .row.mt-4
      .col-lg-7.mb-4.mb-lg-0
        p(data-aos="fade-up") Hay métodos que nos pueden ayudar para elegir rutas óptimas o funcionales:
        p.mt-4(data-aos="fade-up") El primero es  #[strong(style="color:#5B4794;") “El problema del viajero”]. Método sencillo a la hora de asignar nodos y volúmenes de mercancía a rutas, tiene como finalidad hallar el recorrido más completo, haciendo conexión con todos los nodos de una red, pasando por allí solo una vez y regresando al punto de partida; es importante que además se minimice tanto el tiempo como la ruta, pudiendo obtener del ejercicio diferentes opciones.
        p.mt-5(data-aos="fade-up") La siguiente ecuación determina la cantidad de rutas posibles en una red: #[strong(style="color:#5B4794;background-color:#DBD2F3;padding:.3rem;") (n-1)!]
        p.mt-4(data-aos="fade-up") Lo que significa que en una red de #[strong(style="color:#5B4794;background-color:#DBD2F3;padding:.3rem;") 5 nodos podemos tener: (5-1)! = 24 rutas posibles;] y, a medida que el número de nodos aumente, la cantidad de rutas posibles crece proporcionalmente. En el caso de que las distancias sean simétricas la cantidad de rutas posibles se reduce a la mitad, es decir: #[strong(style="color:#5B4794;background-color:#DBD2F3;padding:.3rem;") ( (n-1)!) / 2]
        .mt-4.p-4(style="background-color:#FCF2E5;")
          p.mb-0(data-aos="fade-up") El objetivo de este método es calcular #[strong(style="color:#5B4794;") la mejor ruta para la distribución y optimizar,] utilizando el mejor escenario posible. Lo cual significa un ahorro significativo en el tiempo de procesamiento al calcular rutas de gran tamaño.
      .col-lg-5.col-md-8.col-sm-10.m-auto
        figure
          img(src="@/assets/curso/tema4/7.png" data-aos="fade-left")

    .row.mt-5
      .col-md-3.mb-4.mb-md-0.d-none.d-md-block
        figure.text-center
          img(src="@/assets/curso/tema4/8.png" data-aos="fade-right" style="display:inline;max-width:150px;")
      .col-md-9
        h4(data-aos="fade-up") #[span(style="background-color:#5B4794;padding:.4rem 3rem;border-radius:5px;color:white;") Método de la fuerza bruta]
        p.mt-4(data-aos="fade-up") Se han generado varias iniciativas con el fin de ser más eficientes en el cálculo de rutas a raíz de la dificultad que se presenta con el agente viajero. Existe un método muy común, nombrado fuerza bruta, donde se calculan todos los posibles recorridos, pero no es funcional en redes de gran tamaño, como en el método anterior.

    p.mt-4(data-aos="fade-up") #[strong(style="color:#5B4794;") El método de la fuerza bruta no necesita la aplicación de ningún algoritmo o fórmula,] sencillamente consiste en explorar todos los recorridos factibles y seleccionar el más adecuado.

    h5.mt-4(data-aos="fade-up") Veamos el siguiente ejemplo:

    .row.mt-5
      .col-lg-6.mb-4.mb-lg-0
        .p-4(style="height:100%;background-color:#FAE7CF;")
          p(data-aos="fade-up") El mismo tiene entre nodos (o destinos) diferentes distancias, teniendo en cuenta eso:
          p.mt-4(data-aos="fade-up") Las posibles rutas serían:
          p.mt-4(data-aos="fade-up") #[strong Una de 35 km #[br] Una de 31 km #[br] Y una de 40 km]
          p.mt-4(data-aos="fade-up") Y de esas mismas podemos derivar las rutas simétricas que, cambiando el orden de algunos destinos, nos den los mismos resultados:
          p.mt-4(data-aos="fade-up") #[strong Una de 31 km #[br] Una de 35 km #[br] Y otra de 40 km]
          h5.mt-5.text-center(data-aos="fade-up") Método de fuerza
          figure.text-center.mt-4
            img(src="@/assets/curso/tema4/9.png" data-aos="zoom-in-up" style="display:inline;max-width:300px")
      .col-lg-6.mb-4.mb-lg-0
        .p-4(style="height:100%;background-color:#DBD2F3;")
          h5(data-aos="fade-up") Posibles rutas:
          p.mt-3.mb-1(style="color:#5B4794;" data-aos="fade-up") A – B – D – C – A = 9 + 15 + 4 + 7 = 35 km
          p.mb-1(data-aos="fade-up") #[strong(style="color:#1A9637;text-decoration: underline;") A – B – C – D – A = 9 + 10 + 4 + 8 = 31 km]
          p.mb-1(style="color:#5B4794;" data-aos="fade-up") A – C – B – D – A = 7 + 10 + 15 + 8 = 40 km
          h5.mt-5(data-aos="fade-up") Posibles rutas simétricas:
          p.mb-1(data-aos="fade-up") #[strong(style="color:#1A9637;text-decoration: underline;") A – B – C – D – A = 9 + 10 + 4 + 8 = 31 km]
          p.mb-1(style="color:#5B4794;" data-aos="fade-up") A – C – D – B – A = 7 + 4 + 15 + 9 = 35 km
          p.mb-1(style="color:#5B4794;" data-aos="fade-up") A – D – B – C – A = 8 + 15 + 10 +7 = 40 km
          p.mt-4(data-aos="fade-up") Teniendo en cuenta el mapeo realizado de las rutas, se descartan los resultados mayores y nos quedamos con las menores rutas.
          p.mt-4(data-aos="fade-up") En este caso, podemos ver que podemos hacer la misma en tan sólo 31 km de dos formas distintas.
          figure.text-center.mt-5
            img(src="@/assets/curso/tema4/10.png" data-aos="zoom-in-up" style="display:inline;max-width:300px")

    p.mt-5(data-aos="fade-up") También tenemos el #[strong(style="color:#5B4794;") Método del vecino más cercano:] en este, buscaremos siempre el punto más cercano entre cada nodo, lo que permite conseguir #[strong(style="color:#5B4794;") buenas soluciones en un corto tiempo de análisis y buenos resultados], capaz no tan eficientes como en los métodos anteriores.
    p.mt-4(data-aos="fade-up") Pero garantizando que en un corto tiempo podemos tener una alternativa en el caso de necesitar trazar una ruta de forma rápida.

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema4/1.png" data-aos="fade-right" style="display:inline;max-width:190px")
      .col-md-10
        h5(data-aos="fade-up") Normatividad vigente para el transporte de carga: velocidades y tiempos permitidos.
        p.mt-3(data-aos="fade-up") En Colombia, la normatividad vigente que regula la velocidad en carreteras nacionales, departamentales, distritales y municipales está dada por la Resolución 1384 de 2010, del Ministerio de Transporte, donde se establecen los límites permitidos en los diferentes corredores viales, bajo el manual denominado "Método para establecer límites de velocidad en carreteras colombianas", elaborado por la Universidad del Cauca, el cual hace parte integral de esta resolución. 

    p.mt-5(data-aos="fade-up") Por otra parte, en el Código Nacional de Tránsito, también se mencionan los límites de velocidad, en los artículos 106 y 107 del Capítulo XI, con el Decreto 015 de 2011, que modificó el artículo 107 de este código, modificando los límites de velocidad. 

    figure.mt-5
      img(src="@/assets/curso/tema4/2.png" data-aos="zoom-in-up")

    .row.mt-5
      .col-lg-2.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema4/3.png" data-aos="fade-right" style="display:inline;max-width:190px")
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
