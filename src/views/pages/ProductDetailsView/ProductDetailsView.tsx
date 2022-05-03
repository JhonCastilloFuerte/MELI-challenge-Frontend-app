import { Breadcrumb, ProductDetails } from "../../../components"
import { useState ,useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {getItem} from '../../../api/resources/items/index';
import LOADING from '../../../assets/images/loading-img.png';

interface productDetails{
  id: string;
  picture: string;
  title: string;
  price: number;
  description: string;
}

const PRODUCTS_DETAILS:productDetails = {
  id: '0000',
  picture: LOADING,
  title: 'Item not found',
  price: 0,
  description: 'Este producto no se encuentra'
}


const ProductDetailsView = () => {

  const {id} = useParams();
  const [productDetails, setProductDetails] = useState(PRODUCTS_DETAILS);
  const [breadcrumbData, setBreadcrumbData]  = useState([''])

  const getItemAPI = async (item: string = '') =>{
    const {data} = await getItem(item);
    const resp = {
      id: data.item.id,
      picture: data.item.picture,
      title: data.item.title,
      price: data.item.price.amount,
      description: data.item.description
    }
    setBreadcrumbData([data.item.category]);
    setProductDetails(resp);
  }


  useEffect(() => {
    id ?? <Navigate to='/' />
    const getData = async () => {
      try {
        await getItemAPI(id);
      } catch (err: any) {
        console.log(err);
        return <Navigate to='/items'/>
      }
    };
    getData();
  }, [id])

  return (
    <>
      <Breadcrumb
        items={breadcrumbData}
      />
      <ProductDetails 
        {...productDetails}
      />
    </>
  )
}

export default ProductDetailsView