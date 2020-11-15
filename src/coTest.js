const conf = require('./config/config');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach(product => {
      switch (product.name) {
        case 'Low Coverage': case 'Medium Coverage': case 'Super Sale':  case 'Full Coverage':
          if ( product.sellIn > 0)
            product.price += conf.coverages[product.name].upgradeVal;
          else {
            product.price += 2*conf.coverages[product.name].upgradeVal;
          }
          break;
        case 'Special Full Coverage':
          if(product.sellIn <= 0 ){
            product.price = 0;
          } else if (product.sellIn > 10 )
            product.price += conf.coverages[product.name].upgradeVal;
          else if (product.sellIn > 5) 
            product.price += 2*conf.coverages[product.name].upgradeVal;
          else 
            product.price += 3*conf.coverages[product.name].upgradeVal;
          break;
        
        default:
          break;
      }

      if (product.name != 'Mega Coverage') {
        product.sellIn = product.sellIn - 1;
        if ( product.price > conf.MAX_PRICE)
          product.price = conf.MAX_PRICE;
      }

      if ( product.price < 0)
        product.price = 0;

    });

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
