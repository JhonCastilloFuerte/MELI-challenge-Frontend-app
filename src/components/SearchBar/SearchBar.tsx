// Import Styles for component
import './styles.scss'

// Import Hoooks
import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

// Import Icon from assets
import ICON from  '../../assets/images/lupa-icon.png';

const SearchBar = () => {

  const [valueSearch, setValueSearch] = useState('');
  const navigate = useNavigate();

  // Creating exp_Reg for item id
  const EXP_REG = /(MLA)[\d]{9}/;


  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    if(valueSearch.trim().length > 0){
      EXP_REG.test(valueSearch) ? 
      navigate(`/items/${valueSearch}`) : 
      navigate(`/items?search=${valueSearch.toLowerCase()}`);
    }

  }

  
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='search-bars'
        type="text"
        placeholder='Nunca dejes de buscar'
        onChange={handleChange}
        value={ valueSearch }
      />
      <button className='btn-search'>
        <img 
          src={ICON} 
          alt="Mercadolibre Busqueda" 
        />
      </button>
    </form>
  )
}

export default SearchBar