import React from "react";
import BarChart from "../../components/analitics/BarChart";
import PieChart from "../../components/analitics/PieChart";
import { CiViewList } from "react-icons/ci";

const AdminDashboard = () => {
  return (
    <section className="w-full p-5">
       
       <article className="w-full h-fit bg-white flex justify-start items-center p-6 rounded-2xl">
          
          <div className="flex  justify-center items-start gap-5">
             
             <span className="flex flex-col justify-center items-center">
                <h1>Taday's JD's</h1>
                <span className="text-[2.5rem] font-semibold">8</span>
             </span>

             <span className="p-3 bg-black rounded-full text-white">
                <CiViewList className="w-10 h-10  text-white "/>
             </span>

          </div>

          <div className="w-[1px] ms-[10px] bg-slate-200 h-[80px]  rotate-12"></div>

           
       </article>

      <div className="w-[600px] h-auto p-4 ">
        <div className="w-[500px] bg-white p-3 rounded-2xl">
          <BarChart />
        </div>

        <div className="w-[300px] mt-[20px] p-3 bg-white rounded-2xl">
          <PieChart />
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
