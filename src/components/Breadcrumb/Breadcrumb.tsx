// Import Styles for component
import './styles.scss';

// Define interface Props
interface IPROPS{
  items: string[]
}

const Breadcrumn = ({items = ['']} : IPROPS) => {
  return (
    <ul className='container-breadcrum'>
        {
          items.map((breadcrum)=>{
            return (
            <li
              className='breadcrum-item'
              key={breadcrum}>
                <span>{breadcrum}</span>
            </li>)
          })
        }
    </ul>
  )
}

export default Breadcrumn