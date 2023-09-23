import "./sidebar.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LanguageIcon from "@mui/icons-material/Language";
import MoneyIcon from "@mui/icons-material/Money";
import PaymentIcon from "@mui/icons-material/Payment";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { AuthContext } from "../../context/Auth-context";

function Sidebar(props) {
  // import signout fnc form auth context
  const { role, signOut } = useContext(AuthContext);

  // destructure props
  const { isSidebarActive, toggleSidebar } = props;

  return (
    <div className={isSidebarActive ? "sidebar collapse" : "sidebar"}>
      <div className="top" onClick={toggleSidebar}>
        <LanguageIcon className="icon" />

        {!isSidebarActive && <p className="logo">RISSC Bank</p>}
      </div>

      <div className="center">
        <ul>
          <Link to={"/adminpanel"}>
            <li>
              <DashboardIcon className="icon" />
              {!isSidebarActive && <p>Overview</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/customers"}>
            <li>
              <AccountCircleIcon className="icon" />
              {!isSidebarActive && <p>Customers</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/accounts"}>
            <li>
              <AccountBalanceWalletIcon className="icon" />
              {!isSidebarActive && <p>Accounts</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/fixed-deposits"}>
            <li>
              <PaymentIcon className="icon" />
              {!isSidebarActive && <p>Fixed Deposits</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/loans"}>
            <li>
              <MoneyIcon className="icon" />
              {!isSidebarActive && <p>Loans</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/onlineloans"}>
            <li>
              <BookOnlineIcon className="icon" />
              {!isSidebarActive && <p>Online Loans</p>}
            </li>
          </Link>

          <Link to={"/adminpanel/transactions"}>
            <li>
              <ViewListOutlinedIcon className="icon" />
              {!isSidebarActive && <p>Transactions</p>}
            </li>
          </Link>

          {role === "manager" && <Link to={"/adminpanel/lateinstallments"}>
            <li>
              <AccessTimeIcon className="icon" />
              {!isSidebarActive && <p>Late Installments</p>}
            </li>
          </Link>}

          <li onClick={signOut}>
            <ExitToAppOutlinedIcon className="icon" />
            {!isSidebarActive && <p>Sign Out</p>}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
