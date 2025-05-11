import React from "react";

const NotFound = () => {
  return (
    <section className="w-full h-[60vh] flex justify-center items-center">
      <div>
        {/* <img
          src="https://t3.ftcdn.net/jpg/06/81/54/68/360_F_681546867_RByPTonG5tHreBDn84tn9Sa0wf8xHsps.jpg"
          className="scale-75 animate-slow-bounce"
          alt=""
        /> */}
        <img className="w-[280px] h-auto" src="https://static.vecteezy.com/system/resources/previews/032/477/253/non_2x/astronaut-sitting-on-the-crescent-moon-ai-generative-free-png.png" alt="" />
        <h1 className="text-[1.3rem] font-semibold text-center">Page Not Found</h1>
      </div>
    </section>
  );
};

export default NotFound;
