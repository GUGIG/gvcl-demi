# gvcl-demi

This is a demo Vue component library compatible with both Vue 2 & Vue 3 via `vue-demi` & vue's render function.  
  

## Test out my library
### Install
```bash
npm install gvcl-demi
```

### Apply library's style globally
```JavaScript
// Vue 3 App
// main.js(ts)

import { createApp } from "vue";
import App from "./App.vue";

// Apply library's style globally
import "gvcl-demi/style.css";

createApp(App).mount("#app");
```
```JavaScript
// Vue 2 App
// main.js(ts)

import Vue from "vue";
import App from "./App.vue";

// Apply library's style globally
import "gvcl-demi/style.css";

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

```

### Use the button component
```HTML
<!-- Vue 3 -->
<script setup>
import { GButton } from "gvcl-demi";
const onClick = () => {
  console.log("hey!");
}
</script>

<template>
  <h1>test</h1>
  <GButton color="positive" @click="onClick">
    click me
  </GButton>
</template>
```
```HTML
<!-- Vue 2 -->
<template>
  <div>
    <h1>test</h1>
    <GButton color="positive" @click="onClick">
      click me
    </GButton>
  </div>
</template>

<script>
import { GButton } from "gvcl-demi";
export default {
  components: {
    GButton,
  },
  methods: {
    onClick() {
      console.log("hey!");
    }
  }
}
</script>
```

As shown above, this component should work in both Vue 3 & Vue 2 apps thanks to `vue-demi` & usage of render function (with some ugly syntax mix which you can check further in [this comment](https://github.com/vueuse/vue-demi/issues/152#issuecomment-1175681274)).