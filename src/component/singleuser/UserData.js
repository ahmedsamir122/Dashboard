import classes from "./UserData.module.css";
const UserData = () => {
  return (
    <div className={classes.main}>
      <h2 className={classes.title}>Information</h2>
      <div className={classes.infoCon}>
        <img
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          className={classes.imgUser}
        />
        <div>
          <h2>Jane Doe</h2>
          <div className={classes.info}>
            <span>Email:</span>
            <span>janedoe@gmail.com</span>
          </div>
          <div className={classes.info}>
            <span>Phone:</span>
            <span>+012012551254</span>
          </div>
          <div className={classes.info}>
            <span>Address:</span>
            <span>hggh St.12 fgfgfgcity</span>
          </div>
          <h3 className={classes.info}>Country: USA</h3>
        </div>
      </div>
      <div className={classes.edit}>Edit</div>
    </div>
  );
};

export default UserData;
