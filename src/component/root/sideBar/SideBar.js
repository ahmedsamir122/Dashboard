import { Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import InboxIcon from "@mui/icons-material/Inbox";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PollIcon from "@mui/icons-material/Poll";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import InputIcon from "@mui/icons-material/Input";
import classes from "./SideBar.module.css";
const SideBar = () => {
  return (
    <div>
      <div className={classes.top}>lamadmin</div>
      <div className={classes.middle}>
        <div className={classes.title}>MAIN</div>
        <ul>
          <li>
            <Link to="/">
              <DashboardIcon className={classes.icon} />
              <span>Dashboard</span>
            </Link>
          </li>
        </ul>
        <div className={classes.title}>LISTS</div>
        <ul>
          <li className="test">
            <Link to="/users">
              <PersonOutlineIcon className={classes.icon} />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/products">
              <ProductionQuantityLimitsIcon className={classes.icon} />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <InboxIcon className={classes.icon} />
              <span>Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <LocalShippingIcon className={classes.icon} />
              <span>Delivery</span>
            </Link>
          </li>
        </ul>
        <div className={classes.title}>USEFUL</div>
        <ul>
          <li>
            <Link to="/users">
              <PollIcon className={classes.icon} />
              <span>Stats</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <NotificationsNoneIcon className={classes.icon} />
              <span>Notifications</span>
            </Link>
          </li>
        </ul>
        <div className={classes.title}>SERVICE</div>
        <ul>
          <li>
            <Link to="/users">
              <SettingsApplicationsIcon className={classes.icon} />
              <span>System Health</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <SettingsApplicationsIcon className={classes.icon} />
              <span>Logs</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <SettingsApplicationsIcon className={classes.icon} />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
        <div className={classes.title}>USER</div>
        <ul>
          <li>
            <Link to="/users">
              <InputIcon className={classes.icon} />
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <InputIcon className={classes.icon} />
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        <div className={classes.title}>THEME</div>
        <ul>
          <li>
            <Link to="/users">
              <PersonOutlineIcon className={classes.icon} />
              <span>users</span>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <PersonOutlineIcon className={classes.icon} />
              <span>users</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
