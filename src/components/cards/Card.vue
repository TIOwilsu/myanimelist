<template>
    <b-card
        :img-src="anime.image_url"
        :img-alt="anime.title"
        tag="article"
        :no-body="true"
    >
        <b-card-body>
            <b-card-title>{{ anime.title }}</b-card-title>
        </b-card-body>
    
    <!-- <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button> -->
  </b-card>
</template>
<script>
export default {
    name: 'Card',
    props: {
        anime: {},
    }
}
</script>