<template>
  <main-layout-component>
    <main class="container">
      <div class="catalog">
        <h1 class="sc-title sc-title_y">{{  }}</h1>
        <section class="catalog__content">
          <div class="catalog__item">
          <pre>
            {{  }}
          </pre>
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
  reactive,
  // toRefs,
  // isRef,
  // isReactive,
  // computed,
  // watch
  onMounted,
  // onUpdated,
} from 'vue'

import MainLayoutComponent from "@/js/layouts/MainLayoutComponent";
import axios from "axios";

export default {
  name: "CatalogPage",
  setup() {
    const router = useRouter()
    const route = useRoute()

    let catalog = reactive(null)

    const getCategory = async function() {
      try {
        const {data} = await axios.get(`https://ever-est-default-rtdb.firebaseio.com/HomePage/catalog/categories/1.json`);
        catalog = data
      } catch (e) {
        console.error(e)
      }
    }

    onMounted(() => {
      getCategory()
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