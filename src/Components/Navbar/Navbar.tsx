import {Link} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <Link to='/character'>All Characters</Link>
      {/* <Link to='/episode'>Episodes</Link>
      <Link to='/location'>Locations</Link> */}
    </nav>
  )
}

export default Navbar