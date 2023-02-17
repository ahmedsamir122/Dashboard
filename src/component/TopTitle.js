import classes from "./TopTitle.module.css";
import { useNavigate } from "react-router-dom";

const TopTitle = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.title}>
      <div>{props.titleLeft}</div>
      <div className={classes.button} onClick={() => navigate(`${props.nav}`)}>
        {props.titleRight}
      </div>
    </div>
  );
};

export default TopTitle;
