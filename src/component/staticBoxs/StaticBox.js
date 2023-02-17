import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ChartDetail from "./ChartDetail";
import classes from "./StaticBox.module.css";

const StaticBox = () => {
  const data = [
    {
      name: "USERS",
      number: 720,
      link: "See all users",
      icon: <PersonOutlineIcon />,
      percent: 2,
      backGround: "green",
    },
    {
      name: "ORDERS",
      number: 260,
      link: "View all orders",
      icon: <ShoppingCartOutlinedIcon />,
      percent: 5,
      backGround: "Yellow",
    },
    {
      name: "EARNINGS",
      number: "$4.6K",
      link: "View net earnings",
      icon: <MonetizationOnOutlinedIcon />,
      percent: 12,
      backGround: "green",
    },
    {
      name: "MY BALANCE",
      number: "$7.8K",
      link: "See details",
      icon: <AccountBalanceWalletOutlinedIcon />,
      percent: 5,
      backGround: "green",
    },
  ];
  return (
    <div className={classes.main}>
      {data.map((chart, index) => (
        <ChartDetail
          key={index}
          name={chart.name}
          number={chart.number}
          icon={chart.icon}
          link={chart.link}
          percent={chart.percent}
          backGround={chart.backGround}
        />
      ))}
    </div>
  );
};

export default StaticBox;
