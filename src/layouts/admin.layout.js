import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthService, StorageService } from "../services";
import {
  DashSidebarComponents,
  DashboardNavComponents,
  DashboardFooterComponents,
} from "../components";
import { useNavigate } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = useState(AuthService.isLoggedIn());
  const [user, setUser] = useState(StorageService.getCurrentUser());

  const [toggleSidebar, setToggleSidebar] = useState(false);

  const checkUserIslogedInAndRedirect = () => {
    // check if user is loged in then redirect it to home or profile page
    // const isLogedIn = AuthService.isLoggedIn();
    if (!isLogedIn) {
      navigate("/login", { replace: true });
    } else if (user && user.user_type !== "admin") {
      navigate("/", {
        replace: true,
      });
    }
  };

  useEffect(() => {
    checkUserIslogedInAndRedirect();
  }, []);

  // console.log(toggleSidebar)

  // useEffect(()=>{
  //   var toggler = document.getElementsByClassName("sidebar-content")
  //   console.log(toggler)
  // }, [])

  return (
    <>
      <section className="w-100 h-100 flex dash-main">
        <div className="sidebar-content">
          <DashSidebarComponents />
        </div>

        <main className="main-dashboard main-padding">
          <DashboardNavComponents
            className="w-100 fixed-top"
            toggleSide={setToggleSidebar}
          />
          <Outlet />
          {/* <DashboardFooterComponents className="w-100 fixed-bottom" /> */}
        </main>
      </section>
    </>
  );
};

export default AdminLayout;
