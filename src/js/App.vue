<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  font-family: 'Onest', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

ul, ol {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: #0E192E;
}

img {
  max-width: 100%;
  display: block;
}

article > * + * {
  margin-top: 1em;
}

input,
button,
textarea,
select {
  font: inherit;
}

/*ОБНУЛЯЮЩИЕ СТИЛИ*/

.container {
  width: 1320px;
  margin: 0 auto;
}
</style>
