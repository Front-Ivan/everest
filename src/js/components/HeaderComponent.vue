<template>
  <header class="header">
    <div class="container">
      <section class="header__content">
        <div class="header__logo">
          <img src="../../assets/img/logo.png" alt="logo">
        </div>
        <div class="header__navigation">
          <nav class="header__navigation-up">
            <ul class="header__navigation-up-left">
              <li class="header__navigation-item">
                <a href="#">Казань</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">+7 8552 44-84-09</a>
              </li>
            </ul>
            <ul class="header__navigation-up-right">
              <li class="header__navigation-item">
                <a href="#">Доставка</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Оплата</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Прайс-лист</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Оптовикам</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Вакансии</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Новости</a>
              </li>
              <li class="header__navigation-item">
                <a href="#">Контакты</a>
              </li>
            </ul>
          </nav>
          <nav class="header__navigation-down">
            <a class="header__catalog-btn">КАТАЛОГ</a>
            <form class="header__search">
              <input type="search" placeholder="Поиск товаров" class="header__search-input">
              <button type="submit" class="header__search-btn">Найти</button>
            </form>
          </nav>
        </div>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  background: #E8EFF5;
  width: 100%;
  height: 171px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 107px;
  }

  &__navigation-item {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0;
  }

  &__navigation-up,
  &__navigation-down,
  &__navigation-up-left,
  &__navigation-up-right {
    display: flex;
  }

  &__navigation-up-left {
    margin-right: 136px;
  }

  &__navigation-item {
    margin-right: 24px;
  }

  &__navigation-up-right &__navigation-item:last-child {
    margin-right: 0;
  }

  &__catalog-btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: #FFFFFF;
    border-radius: 4px;
    width: 174px;
    height: 56px;
    padding: 0 24px;
    font-weight: 800;
    font-size: 18px;
    line-height: 21px;
    text-transform: uppercase;
    position: relative;
  }

  &__catalog-btn:before {
    content: '';
    width: 24px;
    height: 3px;
    background: #091F3A;
    border-radius: 8px;
    position: absolute;
    left: 24px;
    top: calc(50% - 5px);
  }

  &__catalog-btn:after {
    content: '';
    width: 24px;
    height: 3px;
    background: #091F3A;
    border-radius: 8px;
    position: absolute;
    left: 24px;
    top: calc(50% + 1px);
  }

  &__search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px 0 16px;
    width: 575px;
    height: 56px;
    background: #D8E1EA;
    border-radius: 4px;
    margin-left: 24px;
  }

  & input[type="search"] {
    border: none;
    background: none;
  }

  &__search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 40px;
    background: #2A79CC;
    border-radius: 4px;
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
  }
}


</style>