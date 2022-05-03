// Import Styles for component
import './styles.scss'

// Import Hooks
import { useNavigate } from 'react-router-dom';

// Definition interface Props
interface IPROPS{
  id: string;
  picture: string;
  price: string;
  title: string;
}


const ProductsListItem = ({id, picture, price, title} : IPROPS) => {

  const navigate = useNavigate();
  const handleClick = () => navigate(`/items/${id}`);


  return (
    <div 
      className="product-item"
      onClick={handleClick}
    >
      <img 
        src={picture} 
        alt={`Mercadolibre ${picture}`} 
      />
      <div className="information">
        <h3>{`$ ${price}`}</h3>
        <p>{title}</p>
      </div>
      <a href="">Link</a>
    </div>
  )
}

export default ProductsListItem