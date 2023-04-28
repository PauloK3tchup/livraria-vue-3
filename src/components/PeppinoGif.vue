<script>
export default {
  props: ["fotoclick"],
};
</script>

<template>
  <div class="peppino">
    <img
      class="peppino-default"
      src="https://static.wikia.nocookie.net/pizzatower/images/d/d2/Idle_demo1.gif/"
      alt="peppito"
    />
    <img
      class="peppino-tchararam"
      :src="fotoclick"
      alt=""
      id="tcharam"
      onmousedown="document.getElementById('tcharam').src='{{ fotoclick }}';"
    />
    <img
      onmouseover="document.getElementById('mamamia').src='https://static.wikia.nocookie.net/pizzatower/images/3/3f/OH_MAMA_MIA.gif/'"
      class="peppino-mamamia"
      src="https://static.wikia.nocookie.net/pizzatower/images/3/3f/OH_MAMA_MIA.gif/"
      alt=""
      id="mamamia"
    />
  </div>
</template>
<style scoped>
.peppino {
  display: inline-block;
  width: 70px;
  height: 70px;
}

.peppino-default {
  width: 70px;
  height: 70px;
  display: block;
}

.peppino:hover .peppino-default {
  width: 70px;
  height: 70px;
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
  height: 70px;
  display: none;
}
.peppino-mamamia {
  width: 70px;
  height: 70px;
  display: none;
}
</style>
