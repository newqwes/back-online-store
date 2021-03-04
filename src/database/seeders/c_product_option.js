module.exports = {
  up: queryInterface =>
    queryInterface.bulkInsert('product_option', [
      {
        price: 10.49,
        weight: 365,
        product_id: 1,
      },
      {
        price: 22.89,
        weight: 585,
        product_id: 1,
      },
      {
        price: 27.89,
        weight: 880,
        product_id: 1,
      },
      {
        price: 10.49,
        weight: 350,
        product_id: 2,
      },
      {
        price: 22.89,
        weight: 525,
        product_id: 2,
      },
      {
        price: 27.89,
        weight: 785,
        product_id: 2,
      },
      {
        price: 10.49,
        weight: 400,
        product_id: 3,
      },
      {
        price: 22.89,
        weight: 620,
        product_id: 3,
      },
      {
        price: 27.89,
        weight: 920,
        product_id: 3,
      },
      {
        price: 10.49,
        weight: 375,
        product_id: 4,
      },
      {
        price: 22.89,
        weight: 635,
        product_id: 4,
      },
      {
        price: 27.89,
        weight: 945,
        product_id: 4,
      },
      {
        price: 10.49,
        weight: 390,
        product_id: 5,
      },
      {
        price: 22.89,
        weight: 585,
        product_id: 5,
      },
      {
        price: 27.89,
        weight: 890,
        product_id: 5,
      },
      {
        price: 14.49,
        weight: 370,
        product_id: 6,
      },
      {
        price: 25.39,
        weight: 645,
        product_id: 6,
      },
      {
        price: 28.89,
        weight: 950,
        product_id: 6,
      },
      {
        price: 14.49,
        weight: 460,
        product_id: 7,
      },
      {
        price: 25.39,
        weight: 715,
        product_id: 7,
      },
      {
        price: 28.89,
        weight: 1020,
        product_id: 7,
      },
      {
        price: 14.49,
        weight: 395,
        product_id: 8,
      },
      {
        price: 25.39,
        weight: 625,
        product_id: 8,
      },
      {
        price: 28.89,
        weight: 955,
        product_id: 8,
      },
      {
        price: 14.49,
        weight: 395,
        product_id: 9,
      },
      {
        price: 25.39,
        weight: 625,
        product_id: 9,
      },
      {
        price: 28.89,
        weight: 955,
        product_id: 9,
      },
      {
        price: 14.49,
        weight: 370,
        product_id: 10,
      },
      {
        price: 25.39,
        weight: 645,
        product_id: 10,
      },
      {
        price: 28.89,
        weight: 950,
        product_id: 10,
      },
      {
        price: 13.49,
        weight: 370,
        product_id: 11,
      },
      {
        price: 25.39,
        weight: 615,
        product_id: 11,
      },
      {
        price: 28.89,
        weight: 945,
        product_id: 11,
      },
      {
        price: 16.49,
        weight: 375,
        product_id: 12,
      },
      {
        price: 25.39,
        weight: 615,
        product_id: 12,
      },
      {
        price: 28.89,
        weight: 845,
        product_id: 12,
      },
      {
        price: 12.49,
        weight: 375,
        product_id: 13,
      },
      {
        price: 25.19,
        weight: 615,
        product_id: 13,
      },
      {
        price: 28.89,
        weight: 845,
        product_id: 13,
      },
      {
        price: 8.99,
        weight: 245,
        product_id: 14,
      },
      {
        price: 7.49,
        weight: 180,
        product_id: 15,
      },
      {
        price: 3.89,
        weight: 300,
        product_id: 16,
      },
      {
        price: 0.7,
        weight: 25,
        product_id: 17,
      },
    ]),

  down: queryInterface => queryInterface.bulkDelete('product_option', null, {}),
};
