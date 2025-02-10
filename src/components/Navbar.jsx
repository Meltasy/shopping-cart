import { NavLink } from 'react-router-dom';

const Navbar = ({ quantityCart, handleShowCart }) => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='../home'>Galeries Libellule</NavLink>
        </li>
        <li>
          <NavLink to='../shop'>Atelier</NavLink>
        </li>
      </ul>
      <button onClick={() => handleShowCart(true)}>
        <div className='quantityCart'>{quantityCart}</div>
      </button>
    </nav>
  )
}

export default Navbar
