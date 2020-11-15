const {Product, CarInsurance} = require('./coTest');
const cov = require('./config/config').coverages;

const productsAtDayZero = [
  new Product(cov.MEDIUM_COV.name, 10, 20),
  new Product(cov.FULL_COV.name, 2, 0),
  new Product(cov.LOW_COV.name, 5, 7),
  new Product(cov.MEGA_COV.name, 0, 80),
  new Product(cov.MEGA_COV.name, -1, 80),
  new Product(cov.SPECIAL_FUL_COV.name, 15, 20),
  new Product(cov.SPECIAL_FUL_COV.name, 10, 49),
  new Product(cov.SPECIAL_FUL_COV.name, 5, 49),
  new Product(cov.SUPER_SALE.name, 3, 6),
];

const carInsurance = new CarInsurance(productsAtDayZero);
const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

for (let i = 1; i <= 30; i += 1) {
  console.log(`Day ${i}`);
  console.log('name, sellIn, price');
  carInsurance.updatePrice().forEach(productPrinter);
  console.log('');
}
