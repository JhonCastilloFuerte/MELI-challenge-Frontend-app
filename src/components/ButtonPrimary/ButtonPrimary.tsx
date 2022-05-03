// Import Styles for component
import './styles.scss' 

// Define interface Props
interface IPROPS{
  title: string;
}

const ButtonPrimary = ({title} : IPROPS) => {
  return (
    <button className='btn-payment'>
      <span>{title}</span>
    </button>
  )
}

export default ButtonPrimary