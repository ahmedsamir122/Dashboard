import classes from "./SingleUser.module.css";
import UserData from "../component/singleuser/UserData";
import ChartArea from "../component/diagramStatic/ChartArea";
import BasicTable from "../component/tableHome/BasicTable";
const SingleUser = () => {
  return (
    <section className={classes.single}>
      <div className={classes.top}>
        <div className={classes.left}>
          <UserData />
        </div>
        <div className={classes.right}>
          <h3>User Spending (Last 6 Months)</h3>
          <ChartArea aspect={3 / 1} />
        </div>
      </div>
      <div className={classes.table}>
        <h3>Last Transactions</h3>
        <BasicTable />
      </div>
    </section>
  );
};

export default SingleUser;
