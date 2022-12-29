// import { DashboardNavCss } from "./css";
import { useNavigate } from "react-router-dom";
import { StorageService } from "../services";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Logo, AvatarDefault } from "../constants/images";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useEffect, useState } from "react";

export default function DashboardNavComponents({ toggleSide }) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleSignout = () => {
    StorageService.clearSession();
    navigate("/", { replace: true });
  };

  const displaySidebar = () => {
    let toggler = document.getElementsByClassName("sidebar-content");
    toggler[0].style.display = "block";
    let cross = document.getElementsByClassName("toggle-side");
    cross[0].style.display="block";
    // setToggle(true);
  };

  const hideSidebar = () => {
    var toggler = document.getElementsByClassName("sidebar-content");
    toggler[0].style.display = "none";
    let cross = document.getElementsByClassName("toggle-side");
    cross[0].style.display="none";
    // setToggle(false);
  };

  // useEffect(() => {
  //   toggleSide(toggle);
  // }, [toggle]);

  return (
    <>
      <div className="dashboard-nav mb-5">
        <div className="flex justify-arround align-items-center toggle-icon">
          <i
            class="fa-solid fa-grip cursor-pointer"
            onClick={() => displaySidebar()}
            style={{ fontSize: "25px" }}
          ></i>
          <i
            class="fa-solid fa-xmark toggle-side cursor-pointer"
            onClick={() => hideSidebar()}
            style={{ fontSize: "25px" }}
          ></i>
        </div>
        <div className="flex justify-start align-items-center">
          <div className="px-20">
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon color="action" style={{ fontSize: "25px" }} />
            </Badge>
          </div>
          <div className="">
            <div className="user-img">
              <img src={AvatarDefault} alt="user-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
