import { Breadcrumn, ItemsList } from "../../../components"
import { Navigate, useSearchParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';
import { getItems } from '../../../api/resources/items/index';

import LOADING from '../../../assets/images/loading-img.png';


const PRODUCTS = [
  {
    id: '123',
    picture: LOADING,
    price: '1',
    title: 'No se ha podido cargar el producto',
  },
];

const ProductsListView = () => {

  // Hooks
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('search');
  
  if(params == null) 
    return <Navigate to='/'/>

  const [productsInfo, setProductsInfo] = useState(PRODUCTS);
  const [breadcrumnData, setBreadcrumData] = useState([]);

  const getItemsAPI = async (q: string = '') =>{
    const {data} = await getItems({q});
    setBreadcrumData(data.categories);
    console.log(data.items);
    const resp = data.items.map((item:any) =>{
      return{
        id: item.id,
        picture: item.picture,
        price: item.price.amount,
        title: item.title
      }
    })
    setProductsInfo(resp);
  }


  useEffect(() => {
    const getData = async () => {
      try {
        await getItemsAPI(params ?? '');
      } catch (err: any) {
        console.log(err)
      }
    };
    getData();
  }, [params])


  return (
    <>
      <Breadcrumn
        items={breadcrumnData}
      />
      <ItemsList 
        productsInfo={productsInfo}
      />
    </>
  )
}

export default ProductsListView