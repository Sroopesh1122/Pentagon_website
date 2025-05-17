import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { CiUser, CiViewList } from "react-icons/ci";
import { FaUsersGear } from "react-icons/fa6";
import { PiUsersThree } from "react-icons/pi";

const adminMenuItems = [
  {
    key: 0,
    label: "Dashboard",
    icon: RxDashboard,
    path:"/admin"
  },
  {
    key: 1,
    label: "Profile",
    icon: CiUser,
    path:"/admin/profile"
  },
  {
    key: 0,
    label: "Employees",
    icon: PiUsersThree,
    path:"/admin/employees"
  },
  {
    key: 0,
    label: "List Of JD's",
    icon: CiViewList,
    path:"/admin/job-description"
  },
];

const AdminAppWrapper = () => {

  const navigate = useNavigate();

  const location  = useLocation();


  const currentPage = adminMenuItems.find((item) => item.path === location.pathname) || { label: "Admin" };




  const handleMenuClick =(url)=>{
    navigate(url)
  }


  return (
    <section className="w-full max-w-[1800px] h-screen overflow-auto mx-auto  flex font-outfit">
      <article className="w-[300px] h-full bg-white  p-3 overflow-y-auto hide-scrollbar">
        <div className="flex justify-start items-center border-b p-8 border-slate-300">
          <span className="text-[1.9rem] whitespace-nowrap font-medium">
            Pentagon Space
          </span>
        </div>

        <article className="w-full  mt-[15px] flex justify-start items-center flex-col gap-[10px]">
          {adminMenuItems.map((menuItem, idx) => (
            <div
              key={menuItem.key}
              className="flex justify-start ps-[15px] w-full gap-3 duration-500 hover:bg-orange-200 p-3 rounded-md items-center cursor-pointer"
             onClick={()=>handleMenuClick(menuItem.path)}
            >
              <menuItem.icon size={25} /> <span>{menuItem.label}</span>
            </div>
          ))}
        </article>
      </article>

      <article className="flex-1 h-full overflow-y-auto bg-[#f9f3ef] p-[40px]">
        <article className="w-full sticky top-0 bg-[#f9f3ef] p-[10px] flex justify-between items-center">
          <span className="text-[1.8rem]">
            {
              currentPage.label
            }
          </span>

          <div className="flex justify-end items-center">
            <span className="flex justify-center items-center gap-1">
              <IoIosLogOut /> Logout
            </span>
          </div>
        </article>

        <Outlet />
      </article>
    </section>
  );
};

export default AdminAppWrapper;
