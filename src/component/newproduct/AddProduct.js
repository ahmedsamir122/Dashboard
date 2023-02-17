import classes from "../newuser/AddUser.module.css";
import { useState } from "react";
const AddProduct = () => {
  const [file, setFile] = useState(
    "https://cdn5.vectorstock.com/i/1000x1000/76/44/camera-icon-thin-line-black-on-white-background-vector-17697644.jpg"
  );

  const fileHandler = (e) => {
    setFile(e.target.value);
    console.log(e.target.value);
  };
  return (
    <section className={classes.main}>
      <div className={classes.title}>Add New User</div>
      <div className={classes.inputCon}>
        <div className={classes.left}>
          <img src={file} alt="" className={classes.img} />
        </div>
        <div className={classes.right}>
          <div className={classes.rightCon}>
            <div className={classes.item}>
              <input type="file" onChange={fileHandler} />
            </div>
            <div className={classes.item}>
              <label>Description</label>
              <input type="text" placeholder="description..." />
            </div>
            <div className={classes.item}>
              <label>Price</label>
              <input type="number" placeholder="100..." />
            </div>
            <div className={classes.item}>
              <label>Name</label>
              <input type="text" placeholder="name..." />
            </div>
            <div className={classes.item}>
              <label>Category</label>
              <input type="text" placeholder="category..." />
            </div>
            <div className={classes.item}>
              <label>In Stock</label>
              <input type="text" placeholder="10..." />
            </div>
          </div>
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
