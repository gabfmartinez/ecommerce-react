import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: 10, backgroundColor: "#eee" }}>
      <Link to="/">Inicio</Link> | <Link to="/registro">Registro</Link> | <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
