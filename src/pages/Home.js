import classes from "./Home.module.css";
import StaticBox from "../component/staticBoxs/StaticBox";
import CircleStatic from "../component/circleStatic/CircleStatic";
import DiagramStatic from "../component/diagramStatic/DiagramStatic";
import BasicTable from "../component/tableHome/BasicTable";

function Home() {
  return (
    <section className={classes.main}>
      <StaticBox />
      <div className={classes.middle}>
        <CircleStatic />
        <DiagramStatic />
      </div>
      <div className={classes.bottom}>
        <div className={classes.titleBottom}>Table</div>
        <BasicTable />
      </div>
    </section>
  );
}

export default Home;
