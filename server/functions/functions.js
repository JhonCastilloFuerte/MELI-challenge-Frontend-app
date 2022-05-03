const axios = require('axios');
const DECIMALS = 00;
const BASE_URL = 'https://api.mercadolibre.com';


const getItems = async (url) =>{
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const getItemsData = (items) => {
  const data = items.map((data) => {
    const { prices: {prices} } = data;
    const [{amount, currency_id}] = prices;
    return{
      id: data.id,
      title: data.title,
      price: {
        currency: currency_id,
        amount: amount,
        decimals: DECIMALS,
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping
    }
  });
  return data;
}

const getCategories = (categories) =>{
  let resp;
  categories.map((category) => {
    if(category.id == 'category'){
      let results = 0;
      category.values.map((item)=>{
        if(item.results > results){
          results = item.results;
          resp = item.name;
        }
      }
      );
    }
  });
  return [resp];
}


const getProductDescription = async (id) =>{
  const url = (BASE_URL+'/items/'+id+'/description')
  try {
    const response = await axios.get(url);
    return response.data.plain_text;
  } catch (error) {
  console.log(error)
  }
}

const getProductCategory = async (id) =>{
  const url = (BASE_URL+'/categories/'+id);
  try {
    const response = await axios.get(url);
    return response.data.name;
  } catch (error) {
    console.log(error)
    
  }
}


const getItem = async(url) =>{
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


const functions = {
  getCategories,
  getItemsData,
  getItems,
  getProductDescription,
  getProductCategory,
  getItem
}

module.exports = functions

