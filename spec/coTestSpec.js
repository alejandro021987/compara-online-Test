const expect = require('chai').expect;

const coTest = require('../src/coTest');
const CarInsurance = coTest.CarInsurance;
const Product = coTest.Product;

describe("Co Test", function() {

  it("should return correct values for products", function() {
    let products = [ 
      new Product('Medium Coverage', 10, 20), 
      new Product('Low Coverage', -1, 20),
      new Product('Special Full Coverage', -1, 20),
      new Product('Special Full Coverage', 12, 20),
      new Product('Special Full Coverage', 6, 20),
      new Product('Special Full Coverage', 2, 20),
      new Product('Full Coverage', 2, 50),
      new Product('Low Coverage', 1, 0),
      new Product('Mega Coverage', 10, 80),
    ];

    const coTest = new CarInsurance(products);
    products = coTest.updatePrice();
    expect(products[0].sellIn).equal(9);
    expect(products[0].price).equal(19);

    expect(products[1].sellIn).equal(-2);
    expect(products[1].price).equal(18);

    expect(products[2].sellIn).equal(-2);
    expect(products[2].price).equal(0);

    expect(products[3].sellIn).equal(11);
    expect(products[3].price).equal(21);

    expect(products[4].sellIn).equal(5);
    expect(products[4].price).equal(22);

    expect(products[5].sellIn).equal(1);
    expect(products[5].price).equal(23);

    expect(products[6].sellIn).equal(1);
    expect(products[6].price).equal(50);

    expect(products[7].sellIn).equal(0);
    expect(products[7].price).equal(0);

    expect(products[8].sellIn).equal(10);
    expect(products[8].price).equal(80);

  });

});
