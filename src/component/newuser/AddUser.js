import classes from "./AddUser.module.css";
import { useState } from "react";
const AddUser = () => {
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
              <label>Name and surname</label>
              <input type="text" placeholder="name..." />
            </div>
            <div className={classes.item}>
              <label>Phone</label>
              <input type="number" placeholder="+123...." />
            </div>
            <div className={classes.item}>
              <label>Address</label>
              <input type="text" placeholder="address..." />
            </div>
            <div className={classes.item}>
              <label>Username</label>
              <input type="text" placeholder="username..." />
            </div>
            <div className={classes.item}>
              <label>Email</label>
              <input type="text" placeholder="email@Example..." />
            </div>
            <div className={classes.item}>
              <label>Password</label>
              <input type="text" placeholder="your password...." />
            </div>
            <div className={classes.item}>
              <label>Country</label>
              <input type="text" placeholder="your country..." />
            </div>
          </div>
          <button>Send</button>
        </div>
      </div>
    </section>
  );
};

export default AddUser;
