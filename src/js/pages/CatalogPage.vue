<template>
  <main-layout-component>
    <main class="container">
      <div class="catalog">
        <h1 class="sc-title sc-title_y">{{  }}</h1>
        <section class="catalog__content">
          <div class="catalog__item" v-for="(it, idx) in catalog" v-show="typeof it !== 'object'" :key="idx">
            {{ it }}
          </div>
        </section>
      </div>
    </main>
  </main-layout-component>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'

import {
  // ref,
  // reactive,
  // toRefs,
  // isRef,
  // isReactive,
  // computed,
  // watch
  // onMounted,
  // onUpdated,
    computed,
} from 'vue'

import MainLayoutComponent from "@/js/layouts/MainLayoutComponent";
// import axios from "axios";
import { useStore } from "vuex";

export default {
  name: "CatalogPage",
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    let catalog = computed(() => store.getters["Catalogs/getCatalog"][route.params.id])


    return {
      catalog,
      router,
      route,
    }
  },
  components: {
    MainLayoutComponent
  },
}
</script>

<style scoped>

</style>