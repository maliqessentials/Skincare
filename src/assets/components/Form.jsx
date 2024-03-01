import React from "react";

const Form = ({ name, description, imageURL, onChange, onSubmit }) => {
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={onSubmit}>
          <div className="my-2 grid gap-2">
            <input
              className="border-2 w-96"
              type="text"
              name="nama"
              id=""
              placeholder="Name"
              value={name}
              onChange={onChange}
            />
            <input
              className="border-2 w-96"
              type="text"
              name="deskripsi"
              id=""
              placeholder="Description"
              value={description}
              onChange={onChange}
            />
            <input
              className="border-2 w-96"
              type="text"
              name="image"
              id=""
              placeholder="imageURL"
              value={imageURL}
              onChange={onChange}
            />
          </div>

          <div className="my-2 flex justify-center">
            <input className="border-2 w-96" type="submit" name="" id="" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
