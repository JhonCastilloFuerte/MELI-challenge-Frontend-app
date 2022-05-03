const { Router} = require('express');
const router = Router();

const NAME = 'Jhon Freddy'
const LAST_NAME = 'Castillo Fuerte';
const BASE_URL = 'https://api.mercadolibre.com';
const DECIMALS = 00;

// Funtions
const {
  getProductDescription,
  getProductCategory,
  getItem
} = require('../functions/functions');

router.get('/:id', (req, res) => {
  const { params:{id} } = req;
  const url = (BASE_URL+'/items/' + id );
  const getItemInfo = async () =>{
    try {
      const response = await getItem(url);
      const description = await getProductDescription(id);
      const category = await getProductCategory(response.category_id);
  
      const data = {
        autor:{
          name: NAME,
          lastname: LAST_NAME
        },
        item:{
          id: response.id,
          title: response.title,
          price:{
            currency: response.currency_id,
            amount: response.price,
            decimals: DECIMALS,
          },
          picture: response.thumbnail,
          condition: response.condition,
          free_shipping: response.shipping.free_shipping,
          sold_quantity: response.sold_quantity,
          description,
          category
        }
      }
      res.json({
        data: data
      })
    } catch (error) {
      console.log(error);
      res.json({
        error: 'Error Algo paso'
      })
    }
  }

  getItemInfo();
});


module.exports = router
