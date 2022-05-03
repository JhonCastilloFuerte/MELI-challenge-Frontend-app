// Import Styles for component
import './styles.scss';

// Definition interface Props
interface IPROPS{
  title: string;
  description: string;
}

const ProductDescription = ({title = '', description = ''} : IPROPS) => {
  return (
    <div className="container-description">
      <h4 className="description-title">{title}</h4>
      <p className='description'>{description}</p>
    </div>
  )
}

export default ProductDescription