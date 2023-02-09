import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
//import Profile from "../pages/Profile";

export default function Root(){
  return(
    <div>
      <Header />
      <SideNav />
      {/* <Profile /> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}