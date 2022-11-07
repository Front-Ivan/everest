<template>
  <main-layout-component>
    <main class="container">
      <div class="catalog">
        <h1 class="sc-title sc-title_y">{{ catalog[catalog.length - 1].title }}</h1>
        <section class="catalog__content">
          <div class="catalog__item" v-for="(item, idx) in catalog" :key="idx">
            <div class="catalog__item-img">
              <img src="/assets/img/CatalogPage/Enamels/acrylic-enamels.svg" alt="">
              {{ item.itemsImages }}
            </div>
            <div class="catalog__item-title" v-if="typeof item !== 'object'">
              <h3>{{ item }}</h3>
            </div>
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

    const catalog = computed(() => {
      let arr = store.getters["Catalogs/getCatalogItems"][route.params.id]

      arr[arr.length - 1].itemsImages = store.getters["Catalogs/getCatalogItemsImages"][route.params.id]

      return arr
    })


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