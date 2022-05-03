const {Router} = require('express');
const router = Router();

const NAME = 'Jhon Freddy'
const LAST_NAME = 'Castillo Fuerte';
const BASE_URL = 'https://api.mercadolibre.com';

// Funtions
const {
  getCategories, 
  getItemsData, 
  getItems
} = require('../functions/functions');

// Router
router.get('/items', (req, res) => {

  const { query:{q} } = req;
  const url = (BASE_URL+'/sites/MLA/search?limit=4&q=' + q );
  const getItemsInfo = async () =>{
    try {
      const response = await getItems(url);
      const {results, available_filters} = response;
      const productData = getItemsData([...results]);
      const categories = getCategories(available_filters);
      const data = {
        autor:{
          name: NAME,
          lastname: LAST_NAME,
        },
        categories: categories,
        items: productData
      }
      res.json({
        data: data
      })
    } catch (error) {
      res.json({
        error: 'Error Algo paso'
      })
    }
  }

  getItemsInfo()
})


module.exports = router
