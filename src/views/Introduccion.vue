<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p(data-aos="fade-up") El ser humano nunca, en el desarrollo de su vida social, familiar o laboral, puede hacer a un lado el proceso de planificación y programación. Se planifica un viaje, se planifica un estudio, se programa una boda, etc., buscando llegar siempre a un fin de manera acertada. A continuación, se le invita a ver el siguiente video introductorio sobre la programación de operación:
    
    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ugsoir4sKUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
