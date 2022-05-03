// Import Styles for component
import './styles.scss'

// Import Componente SearchBar
import { SearchBar } from '../index';

// Import Hooks
import { useNavigate } from 'react-router-dom';

// Import Image from assets
import ML_LOGO from '../../assets/images/logo__large_plus.png';

const Header = () => {
  const navigate = useNavigate();

  // Function no navigate to '/'
  const handleClick = () =>{
    navigate('/');
  }

  return (
    <>
    <header>
      <div className="container-header">
        <div
          onClick={handleClick}
        >
          <img
              className='logo-ml'
              src={ML_LOGO} 
              alt="Mercado Libre Logo"
            />
        </div>
        <SearchBar />
      </div>
    </header>
    </>
  )
}

export default Header