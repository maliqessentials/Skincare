import React, { useState } from 'react';
import Card from './assets/components/Card';
import { Products } from './assets/data/Dataproduct';
import Form from './assets/components/Form';

const App = () => {
  const initialStateData = {
    id: null,
    nama: '',
    deskripsi: '',
    image: '',
  };

  const [products, setProducts] = useState(Products);
  const [data, setData] = useState(initialStateData);
  const { id, nama, deskripsi, image } = data;
  const [addProduct, setAddProduct] = useState(false);

  function falseAddProduct() {
    setAddProduct(!addProduct);
  }

  function handleOnchange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  } //* {
  //*  id: <>,
  //*  key: value
  //* }

  function handleSubmit(e) {
    e.preventDefault();
    if (id) {
      const updatedProduct = products.map((product) => (product.id === id ? data : product));
      setProducts(updatedProduct);
    } else {
      setProducts([...products, { ...data, id: products.length + 1 }]);
    }
    setData(initialStateData);
  }
  /* ITEM button delete tambahin proops dan id*/
  function handleDelete(id) {
    const filteredItem = products.filter((item) => item.id != id);
    setProducts(filteredItem);
  }
  /* ITEM edit card tambahin proops dan id*/
  function handleEdit(productId) {
    const productToEdit = products.find((product) => product.id === productId);
    setData(productToEdit);
    setAddProduct(true);
  }

  return (
    // CARD
    <div>
      <h2 className="text-2xl font-bold text-center py-5">Skincarev2</h2>
      <div className="m-20">
        <div className="flex justify-end">
          <button onClick={falseAddProduct} className="border-2 p-1 flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            {addProduct == true ? 'close form' : 'show form'}
          </button>
        </div>
        {addProduct && <Form name={nama} description={deskripsi} imageURL={image} onChange={handleOnchange} onSubmit={handleSubmit} />}
      </div>
      <div className="lg:grid lg:grid-cols-4 m-10 gap-5 sm:grid sm:grid-cols-2">
        {products.map((product) => (
          <Card key={product.id} image={product.image} title={product.nama} description={product.deskripsi} onclick={() => handleDelete(product.id)} onEdit={() => handleEdit(product.id)} />
        ))}
      </div>
    </div>
  );
};

export default App;
