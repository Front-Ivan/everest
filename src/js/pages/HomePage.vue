<template>
  <main-layout-component>
    <main class="container">
      <div class="home">
        <slider-swiper-component/>
        <section class="catalog mt160">
          <h1 class="sc-title sc-title_mb48">Каталог</h1>
          <div class="catalog__content catalog__content_mt48">
            <catalog-item-component
                v-for="(category, idx) in catalog"
                :key="category[category.length - 1].id"
                :category="category[category.length - 1]"
                :catalog="category"
                :index="idx"
            />
          </div>
        </section>
        <section class="news mt160">
          <h1 class="sc-title sc-title_mb48">Новости</h1>
          <div class="news__content">
            <news-item-component
                v-for="(item, idx) in news"
                :key="item[item.length - 1].id"
                :item="item[item.length - 1]"
                :news="item"
                :index="idx"
            />
          </div>
        </section>
      </div>
    </main>
  </main-layout-component>
</template>

<script>

import MainLayoutComponent from "@/js/layouts/MainLayoutComponent";
import SliderSwiperComponent from "@/js/components/SliderSwiperComponent";
import CatalogItemComponent from "@/js/components/HomePageComponents/CatalogItemComponent";
import NewsItemComponent from "@/js/components/HomePageComponents/NewsItemComponent";
import axios from 'axios'

export default {
  name: "HomePage",
  components: {
    MainLayoutComponent,
    SliderSwiperComponent,
    CatalogItemComponent,
    NewsItemComponent,
  },
  data() {
    return {
      catalog: null,
      news: null,
    }
  },
  methods: {
    async fetchCatalogCategories() {
      try {
        const {data} = await axios.get('https://ever-est-default-rtdb.firebaseio.com/HomePage/catalog/categories.json');
        this.catalog = data;
        console.log(this.catalog)
      } catch (e) {
        console.error(e)
      }
    },
    async fetchNews() {
      try {
        const {data} = await axios.get('https://ever-est-default-rtdb.firebaseio.com/HomePage/news.json');
        this.news = data;
        console.log(data)
      } catch (e) {
        console.error(e)
      }
    }
  },
  mounted() {
    this.fetchCatalogCategories();
    this.fetchNews();
  }
}
</script>

<style scoped lang="scss">
.home {
  margin-top: 32px;
}
.catalog {
  &_y160 {
    margin: 160px 0;
  }

  &__content {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 32px 24px;

    &_mt48 {
      margin-top: 48px;
    }
  }
}

.news {
  &__content {
    display: flex;
  }
}

//@media screen and (max-width: 1350px) {
//  .catalog {
//    &__content {
//      grid-template-columns: auto auto;
//    }
//  }
//}
</style>