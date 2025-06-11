import { db } from "./src/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const productos = [
  {
    nombre: "Zapatillas deportivas",
    descripcion: "Zapatillas cómodas y livianas para entrenamiento.",
    precio: 7999,
    imagen: "https://via.placeholder.com/300"
  },
  {
    nombre: "Campera impermeable",
    descripcion: "Campera para lluvia, ideal para actividades al aire libre.",
    precio: 12999,
    imagen: "https://via.placeholder.com/300"
  },
  {
    nombre: "Mochila 30L",
    descripcion: "Mochila resistente con múltiples compartimentos.",
    precio: 8999,
    imagen: "https://via.placeholder.com/300"
  },
  {
    nombre: "Gorra de algodón",
    descripcion: "Gorra unisex 100% algodón, ajustable.",
    precio: 2499,
    imagen: "https://via.placeholder.com/300"
  }
];

const cargarProductos = async () => {
  const productosCol = collection(db, "productos");
  for (let producto of productos) {
    await addDoc(productosCol, producto);
    console.log(`Producto "${producto.nombre}" agregado`);
  }
};

cargarProductos();
