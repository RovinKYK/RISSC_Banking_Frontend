import "./sidebar.scss";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import LanguageIcon from "@mui/icons-material/Language";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import MoneyIcon from "@mui/icons-material/Money";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
// import TransformOutlinedIcon from "@mui/icons-material/TransformOutlined";
// import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { AuthContext } from "../../context/Auth-context";

function Sidebar(props) {
  // import signout fnc form auth context
  const { signOut } = useContext(AuthContext);

  // destracture props
  const { isSidebarActive, toggleSidebar } = props;

  return (
    <div className={isSidebarActive ? "sidebar collapse" : "sidebar"}>
      <div className="top" onClick={toggleSidebar}>
        <LanguageIcon className="icon" />

        {!isSidebarActive && <p className="logo">RISSC Bank</p>}
      </div>

      <div className="center">
        <ul>
          <Link to={"/userdashboard"}>
            <li>
              <DashboardIcon className="icon" />
              {!isSidebarActive && <p>Overview</p>}
            </li>
          </Link>

          <Link to={"/userdashboard/accounts"}>
            <li>
              <AccountBalanceWalletIcon className="icon" />
              {!isSidebarActive && <p>Accounts</p>}
            </li>
          </Link>

          <Link to={"/userdashboard/loans"}>
            <li>
              <MoneyIcon className="icon" />
              {!isSidebarActive && <p>Loans</p>}
            </li>
          </Link>

          {/* <Link to={"/userdashboard/transfer"}>
            <li>
              <TransformOutlinedIcon className="icon" />
              {!isSidebarActive && <p>Transfer</p>}
            </li>
          </Link> */}

          <Link to={"/userdashboard/transactions"}>
            <li>
              <ViewListOutlinedIcon className="icon" />
              {!isSidebarActive && <p>Transactions</p>}
            </li>
          </Link>

          {/* <Link to={"/userdashboard/settings"}>
            <li>
              <SettingsIcon className="icon" />
              {!isSidebarActive && <p>Settings</p>}
            </li>
          </Link> */}

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
