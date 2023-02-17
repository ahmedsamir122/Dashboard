import UsersTable from "../component/dataTable/UsersTable";
import classes from "./Users.module.css";
import TopTitle from "../component/TopTitle";
const Users = () => {
  return (
    <div className={classes.main}>
      <TopTitle
        nav={"/users/newuser"}
        titleRight={"Add New User"}
        titleLeft={"Users"}
      />
      <UsersTable />
    </div>
  );
};

export default Users;
