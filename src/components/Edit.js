import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import { async } from "@firebase/util";

const Edit = () => {
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = {
      description: description,
      stock: stock,
    };
    await updateDoc(product, data);
    navigate(`/`);
  };

  const getProductById = async (id) => {
    constproduct = await getDoc(doc(db, "products", id));
    if (product.exists(console.log(product.data()))) {
    } else {
      console.log("El producto no existe");
      setDescription(product.data().description);
      setStock(product.data().stock);
    }
  };

  useEffect(() => {
    getProductById(id);
    //eslint-disable-netx-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Actualizar Producto</h1>
            <form onSubmit={update}>
              <div className="mb-3">
                <label className="form-label">Descripcion</label>
                <input
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Actualizar Producto
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
