import { NavLink } from "react-router-dom";

const Navbar = ({ quantityCart }) => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='../intro'>Galeries Libellule</NavLink>
        </li>
        <li>
          <NavLink to='../shop'>Atelier</NavLink>
        </li>
      </ul>
      <NavLink to='../cart'>
        <button>
          <div className='quantityCart'>{quantityCart}</div>
        </button>
      </NavLink>
    </nav>
  )
}

export default Navbar
