import classes from "./DiagramStatic.module.css";
import ChartArea from "./ChartArea";
const DiagramStatic = () => {
  return (
    <div className={classes.main}>
      <div className={classes.title}>Last 6 Months(income)</div>
      <ChartArea aspect={2 / 1} />
    </div>
  );
};

export default DiagramStatic;
