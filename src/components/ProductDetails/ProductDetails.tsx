// Import Styles for component
import './styles.scss'

// Importation components 
import {ProductDescription, ProductImages, PurchaseInformation} from  '../index'

// Definition interface Props
interface IPROPS{
  id: string;
  picture: string;
  title: string;
  price: number;
  description: string;
}

const ProductDetails = ({id, picture, title, price, description} :IPROPS ) => {
  return (
    <section className='product-details'>
   
        <ProductImages 
          picture={picture}
        />
        <ProductDescription 
          title={title}
          description={description}
        />
        <aside className='product-payment'>
          <PurchaseInformation 
            title={title}
            price={price}
          />
        </aside>

    </section>
  )
}

export default ProductDetails