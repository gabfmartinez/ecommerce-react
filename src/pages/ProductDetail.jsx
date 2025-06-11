import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProducto = async () => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProducto(docSnap.data());
      }
    };

    fetchProducto();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} width="300" />
      <p>{producto.descripcion}</p>
      <strong>${producto.precio}</strong>
    </div>
  );
};

export default ProductDetail;
