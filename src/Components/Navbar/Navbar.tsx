import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <Link to='/characters'>Characters</Link>
      <Link to='/episodes'>Episodes</Link>
      <Link to='/locations'>Locations</Link>
    </nav>
  )
}

export default Navbar