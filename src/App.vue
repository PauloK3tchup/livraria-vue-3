<script>
import PeppinoGif from "../src/components/PeppinoGif.vue";

export default {
  components: {
    PeppinoGif,
  },
};
</script>
<template>
  <header>
    <router-link class="btn-nav" :to="{ name: 'home' }">Home</router-link>
    <router-link class="btn-nav" to="/categorias">Categorias</router-link>
    <router-link class="btn-nav" to="/editoras">Editoras</router-link>
    <router-link class="btn-nav" to="/autores">Autores</router-link>
    <router-link class="btn-nav" to="/livros">Livros</router-link>
  </header>
  <main>
    <RouterView />
  </main>
  <PeppinoGif
    :fotohover="'https://static.wikia.nocookie.net/pizzatower/images/8/86/Do_do_do_do_dah...yeah.gif/'"
    :fotoclick="'https://static.wikia.nocookie.net/pizzatower/images/2/2b/Spr_player_taunt_4.png/'"
  />
  <PeppinoGif
    :fotohover="'https://static.wikia.nocookie.net/pizzatower/images/2/29/Peppinognomecutscene.gif/'"
    :fotoclick="'https://static.wikia.nocookie.net/pizzatower/images/7/7b/Peppino_%28Smug_Hat_Taunt%29.png/'"
  />
  <PeppinoGif
    :fotoclick="'https://static.wikia.nocookie.net/pizzatower/images/8/85/Peppino_(Back_Flex_Taunt).png/'"
    :fotohover="'https://static.wikia.nocookie.net/pizzatower/images/3/3f/OH_MAMA_MIA.gif/'"
  />
  <PeppinoGif
    :fotoclick="'https://static.wikia.nocookie.net/pizzatower/images/4/46/Spr_player_taunt1.png/'"
    :fotohover="'https://static.wikia.nocookie.net/pizzatower/images/b/b2/Peppinoscaredjump.gif/'"
  />
  <PeppinoGif
    :fotoclick="'https://static.wikia.nocookie.net/pizzatower/images/e/e4/Peppino_%28Handsome_Taunt%29.png/'"
    :fotohover="'https://static.wikia.nocookie.net/pizzatower/images/1/11/Spr_player_handgesture3.gif/'"
  />
</template>
<style scoped>
.btn-nav {
  text-decoration: none;
  color: rgb(189, 0, 0);
  font-size: 20px;
  background-color: #000;
  padding: 10px;
  border-radius: 5px;
  transition: 0.1s;
  display: inline-block;
  margin-right: 10px;
}

.btn-nav:hover {
  color: black;
  background-color: rgb(189, 0, 0);
  transform: scale(1.3);
  z-index: 1;
}

.btn-nav:active {
  color: black;
  background-color: rgb(189, 0, 0);
  transform: scale(0.9);
}
</style>
