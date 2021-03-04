module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('product', [
      {
        name: 'Фермерская',
        type: 'pizza',
        description:
          'Кунжут, Курица, Соус терияки, Сыр моцарелла, Томаты, Пепперони, Сладкий перец',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2019/10/18/fermerskaya_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Пепперони Блюз',
        type: 'pizza',
        description:
          'Крем фреш, Пепперони, Шпинат, Сыр моцарелла, Обжаренный лук, Телятина, Бекон, Соус барбекю',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/pepperoni_bluz.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Овощная',
        type: 'pizza',
        description: 'Мюнхенские колбаски, Соус карри, Сыр моцарелла, Ананас, Ветчина, Курица',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/ovoshchnaya.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Чикен Ранч',
        type: 'pizza',
        description: 'Соус Чесночный, Томаты, Сыр моцарелла, Курица',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2020/11/18/chiken_fresh_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Баварская',
        type: 'pizza',
        description: 'Баварские колбаски, Сыр моцарелла, Соус барбекю, Пармезан, Халапеньо',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2019/07/03/bavarchkaya_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Сытная',
        type: 'pizza',
        description: 'Пепперони, Баварские колбаски, Соус Бургер, Сыр моцарелла',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2020/11/18/syitnaya_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Хатняя',
        type: 'pizza',
        description:
          'Картофельные дольки, Обжаренный лук, Курица, Баварские колбаски x 2, Соус Чесночный, Сыр моцарелла, Огурцы',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2020/09/18/Hatnyaya_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Говядина BURGER',
        type: 'pizza',
        description: 'Шампиньоны, Телятина, Сыр моцарелла, Соус Бургер, Лук, Огурцы',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2020/03/11/govyadina_burger_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Цыпленок Доминатор',
        type: 'pizza',
        description:
          'Томаты, Мюнхенские колбаски, Курица, Сыр моцарелла, Соус Чесночный, Огурцы, Сладкий перец',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2020/04/21/tsyplenok__dominator_small-min.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Барбекю',
        type: 'pizza',
        description: 'Лук, Курица, Соус барбекю, Бекон, Шампиньоны, Сыр моцарелла',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/barbecue.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Карбонара',
        type: 'pizza',
        description: 'Лук, Сыр моцарелла, Крем фреш, Бекон, Ветчина, Шампиньоны',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/carbonara.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Супер Пепперони',
        type: 'pizza',
        description: 'Томатный соус, Сыр моцарелла, Пепперони',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2020/07/14/super_pepperoni_small-min.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Прованс',
        type: 'pizza',
        description: 'Томаты, Голубой сыр, Сыр моцарелла, Крем фреш, Пепперони, Ветчина',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2018/09/12/provence.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Крылышки острые',
        type: 'chicken',
        description: 'Сальса соус, Томатный соус 25г',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2019/04/29/krylyshki_kurinyye_ostryye_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Салат Греческий',
        type: 'salad',
        description: 'Оливковое масло',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2021/02/09/Grecheskiy_small.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
      {
        name: 'Чай Клюква с имбирем',
        type: 'drink',
        description: 'На доставку: чай в индивидуальной упаковке + стакан',
        photo_url:
          'https://images.dominos.by/media/dominos/osg/api/2020/04/21/%D0%B2%D0%B8%D1%82%D0%B0_%D1%87%D0%B0%D0%B9_%D0%BA%D0%BB%D1%8E%D0%BA%D0%B2%D0%B0_%D1%81_%D0%B8%D0%BC%D0%B1%D0%B8%D1%80%D0%B5%D0%BC_%D1%81%D0%BC%D0%BE%D0%BB%D0%BB.png',
        unit_sign: 'мл',
        currency_sign: 'р.',
      },
      {
        name: 'Соус Барбекю',
        type: 'sauce',
        description: 'Соус Барбекю',
        photo_url: 'https://images.dominos.by/media/dominos/osg/api/2019/01/08/dippot_BBQ.png',
        unit_sign: 'гр',
        currency_sign: 'р.',
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('product', null, {}),
};
