<script>
export default {
  data() {
    return {
      gifkey: 1,
    };
  },
  props: ["fotoclick", "fotohover"],
  methods: {
    resetGif() {
      this.gifkey += 1;
    },
  },
};
</script>

<template>
  <div class="peppino" @mouseover="resetGif">
    <img
      class="peppino-default"
      src="https://static.wikia.nocookie.net/pizzatower/images/d/d2/Idle_demo1.gif/"
      alt="peppito"
    />
    <img class="peppino-tchararam" :src="fotoclick" alt="click" id="tcharam" />
    <img
      class="peppino-mamamia"
      :src="fotohover"
      alt="hover"
      id="mamamia"
      :key="gifkey"
    />
  </div>
</template>
<style scoped>
.peppino {
  display: inline-block;
  width: 70px;
  height: auto;
}

.peppino-default {
  width: 70px;
  height: auto;
  display: block;
}

.peppino:hover .peppino-default {
  width: 70px;
  height: auto;
  display: none;
}

.peppino:hover .peppino-mamamia {
  display: block;
}

.peppino:active .peppino-tchararam {
  display: block;
}

.peppino:active .peppino-mamamia {
  display: none;
}

.peppino:active .peppino-default {
  display: none;
}

.peppino:focus .peppino-sensual {
  display: block;
}

.peppino-tchararam {
  width: 70px;
  height: auto;
  display: none;
}
.peppino-mamamia {
  width: 70px;
  height: auto;
  display: none;
}
</style>
