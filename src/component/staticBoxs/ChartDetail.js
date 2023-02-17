import classes from "./ChartDetail.module.css";
const ChartDetail = (props) => {
  return (
    <div className={classes.main}>
      <div className={classes.flex}>
        <div className={classes.name}>{props.name}</div>
        <div className={classes.percent}>{`${props.percent}%`}</div>
      </div>
      <div className={classes.numberCon}>
        <div>{props.number}</div>
      </div>
      <div className={classes.flex}>
        <div>{props.link}</div>
        <div style={{ backgroundColor: props.backGround, borderRadius: "5px" }}>
          {props.icon}
        </div>
      </div>
    </div>
  );
};

export default ChartDetail;
