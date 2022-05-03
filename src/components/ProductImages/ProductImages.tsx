// Import Styles for component
import './styles.scss';

// Definition interface Props
interface IPROPS{
  picture: string;
}

const ProductImages = ({picture}:IPROPS) => {
  return (
    <div className="container-products-image">
      <img
        className='products-main-image'
        src={picture} 
        alt={`MercadoLibre ${picture}`} />
    </div>
  )
}

export default ProductImages