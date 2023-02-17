import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import classes from "./CircleStatic.module.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const CircleStatic = () => {
  const percentage = 66;
  return (
    <div className={classes.main}>
      <div className={classes.top}>
        <h2>Total Revenue</h2>
        <MoreVertOutlinedIcon />
      </div>
      <div className={classes.circleCon}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={5}
        />
        ;
      </div>
      <div className={classes.title}>Total sales made today</div>
      <div className={classes.titleNumber}>$420</div>
      <div className={classes.title}>
        Previous transactions processing Last payments may not be included
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottomOne}>
          <div>Target</div>
          <div className={classes.bottomTarget}>
            <KeyboardArrowUpOutlinedIcon />
            <span>$12.4</span>
          </div>
        </div>
        <div className={classes.bottomOne}>
          <div>Target</div>
          <div className={classes.bottomTarget}>
            <KeyboardArrowUpOutlinedIcon />
            <span>$12.4</span>
          </div>
        </div>
        <div className={classes.bottomOne}>
          <div>Target</div>
          <div className={classes.bottomTarget}>
            <KeyboardArrowUpOutlinedIcon />
            <span>$12.4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleStatic;
