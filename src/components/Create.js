import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
//import { type } from "@testing-library/user-event/dist/type";

const Create = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const productCollection = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productCollection, {
      description: description,
      stock: stock,
    });
    navigate(`/`);
  };

  const volver = (e) => {
    e.preventDefault;
    navigate(`/`);
  };

  return (
    <>
      <div className="container">
        <h1>Crear Producto</h1>
        <div className="row crear-product">
          <div className="col ">
            <form onSubmit={store}>
              <div className="mb-3">
                <label className="form-label label-crear">Descripcion</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label label-crear">Stock</label>
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Cargar Producto
              </button>

              <button
                type="submit"
                className="btn btn-success"
                onClick={volver}
              >
                Volver
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
