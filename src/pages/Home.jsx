import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ProductCard from "../components/ProductCard.jsx";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "productos"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productos.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default Home;
