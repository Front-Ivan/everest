export default {
    namespaced: true,
    state: {
        catalogItems: [
            [
                "Алкидные эмали",
                "Акриловые эмали",
                "Нитроэмали",
                "Масляные краски",
                "Грунты ГФ и ГЭ",
                "Эмали спецназначения",
                "Растворители",
                "Специальные грунты",
                {
                    "alt": "img1",
                    "id": 0,
                    "img": "/assets/img/HomePage/catalog-img1.png",
                    "title": "Эмали"
                }
            ],
            [
                "Водно-дисперсионные краски",
                "Колеровочные пасты",
                "Аэрозольные краски",
                "Декоративные штукатурки",
                "Колоранты",
                "Шпатлевки готовые",
                "Акриловые грунты",
                {
                    "alt": "img2",
                    "id": 1,
                    "img": "/assets/img/HomePage/catalog-img2.png",
                    "title": "Краски"
                }
            ],
            [
                "Для дерева",
                "Огне-биозащита, антисептики",
                "Для сауны",
                "Лак ХВ",
                "Морилки",
                "Нитролаки",
                "Пропитки",
                "Прочее",
                {
                    "alt": "img3",
                    "id": 2,
                    "img": "/assets/img/HomePage/catalog-img3.png",
                    "title": "Защита для древесины"
                }
            ],
            [
                "Пены монтажные",
                "Герметики",
                "Мастики",
                "Жидкие гвозди",
                "ПВА",
                "Контактный клей",
                "Клей для обоев",
                "Для напольных покрытий",
                "Для потолочных и декоративных плит",
                "Универсальные клея",
                "Холодная сварка",
                "Эпоксидные клея",
                {
                    "alt": "img4",
                    "id": 3,
                    "img": "/assets/img/HomePage/catalog-img4.png",
                    "title": "Пены, Герметики, Клей"
                }
            ],
            [
                "Измерительне",
                "Ленты",
                "Малярный",
                "Монтажно-крепежный",
                "Пистолеты",
                "Абразивные",
                "Режущие",
                "Средства защиты труда",
                "Прочее",
                "Столярно-слесарные",
                "Штукатурные",
                {
                    "alt": "img5",
                    "id": 4,
                    "img": "/assets/img/HomePage/catalog-img5.png",
                    "title": "Инструменты"
                }
            ],
            [
                "Космофен",
                "Откос оконный утепленный",
                "Москитная группа",
                "Панели ПВХ",
                "Подкладки под стеклопакет",
                "Прочее",
                "Подоконник",
                "Профили, нащельники",
                "Псулы, ленты",
                "Ручки",
                "Сэндвич-ПВХ",
                "Уплотнители оконные",
                {
                    "alt": "img6",
                    "id": 5,
                    "img": "/assets/img/HomePage/catalog-img6.png",
                    "title": "Оконная комплектация"
                }
            ],
            [
                "Двери входные",
                "Двери межкомнатные",
                "Плинтуса, порожки,стремянки",
                "Сухие смеси",
                "Арматура",
                "Сантехника",
                "Теплоизоляция",
                "Плинтуса потолочные, угол, плитка, фартук",
                "Профили для гипсокартона, комплектующие",
                "Электрика",
                {
                    "alt": "img6",
                    "id": 6,
                    "img": "/assets/img/HomePage/catalog-img7.png",
                    "title": "Общестроительные материалы"
                }
            ],
            [
                "Анкерные болты",
                "Гайки",
                "Гвозди",
                "Дюбельная техника",
                "Саморезы и шурупы",
                "Крепеж перфорированный",
                "Прочее",
                "Скобы строительные",
                "Шпильки резьбовые",
                {
                    "alt": "img8",
                    "id": 7,
                    "img": "/assets/img/HomePage/catalog-img8.png",
                    "title": "Крепеж"
                }
            ],
            [
                "Батарейки",
                "Бытовая химия",
                "Прочие хозтовары",
                "Лопаты снеговые",
                {
                    "alt": "img9",
                    "id": 8,
                    "img": "/assets/img/HomePage/catalog-img9.png",
                    "title": "Хозтовары"
                }
            ]
        ],
        catalogItemsImages: [
            [
                '/assets/img/CatalogPage/Enamels/alkyd-enamels.svg',
                '/assets/img/CatalogPage/Enamels/acrylic-enamels.svg',
                '/assets/img/CatalogPage/Enamels/nitro-enamels.svg',
                '/assets/img/CatalogPage/Enamels/oil-paints.svg',
                '/assets/img/CatalogPage/Enamels/special-enamels.svg',
                '/assets/img/CatalogPage/Enamels/hammer-paints.svg',
                '/assets/img/CatalogPage/Enamels/primers-and-primer-enamels.svg',
                '/assets/img/CatalogPage/Enamels/solvents.svg',
            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
            [

            ],
        ],
    },
    getters: {
        getCatalogItems(state) {
            return state.catalogItems
        },
        getCatalogItemsImages(state) {
            return state.catalogItemsImages
        },
    },
    mutations: {

    },
    actions: {

    },
}