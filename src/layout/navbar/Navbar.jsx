import React, { useContext } from 'react'
import './navbar.scss'

import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import useApi from '../../hooks/useApi';
import { AuthContext } from "../../context/Auth-context";


function Navbar(props) {

  const { role } = useContext(AuthContext);

  const {isSidebarActive} = props
  const { data } = useApi("/api/user", "GET")

  return (
    <div className={isSidebarActive ? "navbar collapse" : "navbar"}>

      <div className="wrapper">

        <div className="displayname">
          <p>{(role === "manager" ? "Manager " : "") + (data ? data.name : "")}</p>
        </div>

        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon/>
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon/>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Navbar