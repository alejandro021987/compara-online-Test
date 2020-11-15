const conf = require('./config/config');

class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
    this.code = conf.coverages[name].code;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }
  updatePrice() {
    this.products.forEach(product => {
      switch (product.name) {
        case 'Low Coverage', 'Medium Coverage', 'Super Sale':
          if ( product.sellIn > 0)
            product.price += conf.coverages[product.name].upgradeVal;
          else {
            product.price += 2*conf.coverages[product.name].upgradeVal;
          }
          break;
        case 'Full Coverage', 'Special Full Coverage':
          if(product.sellIn <= 0){
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

    });

/*
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].name != cov.FULL_COV.name && this.products[i].name != cov.SPECIAL_FUL_COV.name) {
        if (this.products[i].price > 0) {
          if (this.products[i].name != cov.MEGA_COV.name) {
            if(this.products[i].name == cov.SUPER_SALE.name){
              this.products[i].price = this.products[i].price - cov.SUPER_SALE.degradeVal;
            }else{
              this.products[i].price = this.products[i].price - 1;
            }

          }
        }
      } else {
        if (this.products[i].price < 50) {
          this.products[i].price = this.products[i].price + 1;
          if (this.products[i].name == cov.SPECIAL_FUL_COV.name) {
            if (this.products[i].sellIn < 11) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
            if (this.products[i].sellIn < 6) {
              if (this.products[i].price < 50) {
                this.products[i].price = this.products[i].price + 1;
              }
            }
          }
        }
      }
      if (this.products[i].name != cov.MEGA_COV.name) {
        this.products[i].sellIn = this.products[i].sellIn - 1;
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != cov.FULL_COV.name) {
          if (this.products[i].name != cov.SPECIAL_FUL_COV.name) {
            if (this.products[i].price > 0) {
              if (this.products[i].name != cov.MEGA_COV.name) {
                if(this.products[i].name == cov.SUPER_SALE.name){
                  this.products[i].price = this.products[i].price - cov.SUPER_SALE.degradeOff;
                }else{
                  this.products[i].price = this.products[i].price - 2;
                }

              }
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else {
          if (this.products[i].price < 50) {
            this.products[i].price = this.products[i].price + 1;
          }
        }
      }
    }
*/
    
    

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
}
