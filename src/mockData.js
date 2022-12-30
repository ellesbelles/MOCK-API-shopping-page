// import { faker } from '@faker-js/faker';
const {faker}  = require('@faker-js/faker')
// import { faker } from '@faker-js/faker/locale/de';

// node supports modules, for the backend we use nodejs
module.exports = () => {
    // json object
    let data = { products: []};
    for (let i = 0; i < 6; i++) {

        data.products.push(
            {
                userId: faker.datatype.uuid(),
                productname: faker.commerce.product(),
                productimage: faker.image.fashion(),
                productprice: faker.commerce.price() 
            }
        )
  };
  return data;
}

