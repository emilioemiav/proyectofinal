import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormProducto from "../components/formProducto";
export const productos = [
  {
    id: 1,
    imagen: "/burger2.jpg",
    nombreProducto: "Hamburguesa 1",
    descripcion: "Tomate lechuga huevo",
    categoria: "Hamburguesas",
    precio: 500,
    stock: 100,
  },
  {
    id: 2,
    imagen: "/burger3.jpg",
    nombreProducto: "Hamburguesa 2",
    descripcion: "Tomate lechuga huevo",
    categoria: "Hamburguesas",
    precio: 1000,
    stock: 99,
  },
];

const EditProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    if (id) {
      const idNum = parseInt(id);
      //TODO: CUANDO ESTE LA API ACA VA EL BUSCAR EL PRODUCTO POR ID
      const target = productos.find((producto) => producto.id === idNum);
      if (target) {
        setProducto(target);
      }
    }
  }, [id]);

  const onSubmit = (nuevoProducto) => {
    alert(JSON.stringify(nuevoProducto));
  };

  if (producto) {
    return (
      <div>
        <FormProducto producto={producto} onSubmit={onSubmit}></FormProducto>
      </div>
    );
  }
  return <div>no existe</div>;
};
export default EditProducto;
