// Import Styles for component
import './styles.scss'

// Import component ProductsListItem
import {ProductsListItem} from '../index'

// Define type fot interface of props
type productItem = {
  id: string;
  picture: string;
  price: string;
  title: string;
}

// Definition interface Props
interface IPROPS {
  productsInfo: productItem[];
}

const ItemsList = ({productsInfo} : IPROPS) => {
  return (
    <section>
      {
        productsInfo.map((item: productItem) => {
          return(
            <ProductsListItem 
              key={item.id}
              id={item.id}
              picture={item.picture}
              price={item.price}
              title={item.title}
            />
          );
        }
        )
      }
    </section>
  )
}

export default ItemsList