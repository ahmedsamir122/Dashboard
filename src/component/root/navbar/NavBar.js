import classes from "./NavBar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.input}>
        <input placeholder="Search.." />
        <SearchIcon className={classes.SearchIcon} />
      </div>
      <ul className={classes.list}>
        <li className={classes.language}>
          <LanguageIcon />
          <span>English</span>
        </li>
        <li>
          <DarkModeOutlinedIcon />
        </li>
        <li>
          <FullscreenExitIcon />
        </li>
        <li className={classes.widcontainer}>
          <NotificationsOutlinedIcon />
          <div className={classes.widget}>2</div>
        </li>
        <li className={classes.widcontainer}>
          <ChatBubbleOutlineOutlinedIcon />
          <div className={classes.widget}>2</div>
        </li>
        <li>
          <ListOutlinedIcon />
        </li>
        <li>
          <img src="" />
        </li>
        <li>
          <SettingsOutlinedIcon />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
