import { Link } from "react-router-dom"

const Header = (props) => {
  return (
    <nav className="Header">
      <Link to="/">
        <h1>Kixclusive</h1>
      </Link>
    </nav>
  )
}

export default Header;