import { NavLinks } from '../../constants/index'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
    <nav>
        <ul>
          {NavLinks.map((link) => (
            <li key={link.id}>
              <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
    </nav>
  )
}

export default Navbar
