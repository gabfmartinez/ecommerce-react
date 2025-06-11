import { Link } from "react-router-dom";

const ProductCard = ({ producto }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 200 }}>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <strong>${producto.precio}</strong>
      <br />
      <Link to={`/producto/${producto.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default ProductCard;
