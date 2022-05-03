// Import Styles for component
import './styles.scss';

// Define interface Props
interface IPROPS{
  items: string[]
}

const Breadcrumb = ({items = ['']} : IPROPS) => {
  return (
    <ul className='container-breadcrumb'>
        {
          items.map((breadcrum)=>{
            return (
            <li
              className='breadcrumb-item'
              key={breadcrum}>
                <span>{breadcrum}</span>
            </li>)
          })
        }
    </ul>
  )
}

export default Breadcrumb