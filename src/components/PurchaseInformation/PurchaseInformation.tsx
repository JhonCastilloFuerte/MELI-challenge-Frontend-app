// Import Styles for component
import './styles.scss'

// Import Component
import {ButtonPrimary} from '../index';

// Definition interface Props
interface IPROPS{
  title: string;
  price: number
}

const PurchaseInformation = ({title, price} : IPROPS) => {
  return (
    <>
      <h3>{title}</h3>
      <span className='price'>{`$ ${price}`}</span>
      <ButtonPrimary 
        title='Comprar'
      />
    </>
  )
}

export default PurchaseInformation