import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";

const MySwal = withReactContent(Swal);

const Show = () => {
  //1-configurar hooks
  const [products, setProducts] = useState([]);
  //2-referencia a la DB firestore
  const productsCollection = collection(db, "products");
  //3-funcion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    //console.log(data.docs);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //console.log(products);
  };
  //4-funcion para eliminar un doc
  const deleteProduct = async (id) => {
    const productDoc = doc(dc, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };
  //5-funcion de confirmacion para Sweet Alert

  //6-usamos useEffect
  useEffect(() => {
    getProducts();
  }, []);
  //7-devolvemos vista de nuestro componente

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-grid gap-2">
              <Link to="/create" className="btn btn-secondary mt-2 mb-2">
                Create
              </Link>
            </div>
            <table className="table table-dark table-hover">
              <thead>
                <th>Descripcion</th>
                <th>Stock</th>
                <th>Acciones</th>
              </thead>

              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.description}</td>
                    <td>{product.stock}</td>
                    <td>
                      <Link
                        to={`/edit/${product.id}`}
                        className="btn btn-light"
                      >
                        {" "}
                        <i className="fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        onClick={() => {
                          deleteProduct(product.id);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
