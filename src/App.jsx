import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppWrapper from './components/AppWrapper'
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import { LuLoaderCircle } from "react-icons/lu";
import AboutUs from './pages/AboutUs';
import StudentSignIn from './placement-portal/pages/student/StudentSignIn';
import AdminSignIn from './placement-portal/pages/admin/AdminSignIn';
import AdminAppWrapper from './placement-portal/components/admin/AdminAppWrapper';
import StudentSignUp from './placement-portal/pages/student/StudentSignUp';
import AdminDashboard from './placement-portal/pages/admin/AdminDashboard';
import AdminEmployeesList from './placement-portal/pages/admin/AdminEmployeesList';
import StudentAppWrapper from './placement-portal/components/student/StudentAppWrapper';

function App() {

 const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
          
          <div >
               <img src="https://i.pinimg.com/564x/0d/a8/9c/0da89cd80d1d48baedb06242d9b5c60d.jpg" className='w-[250px] h-auto scale-50 animate-slow-bounce' alt="" />
           <h1 className='w-full text-center font-semibold flex justify-center items-center gap-2'>Entering Orbit... Hold On <LuLoaderCircle size={20} className='animate-spin duration-1000'/> </h1>
          
          </div>

      </div>
    );
  }

  return (
    <BrowserRouter>
     <Routes>
           <Route path='/auth/student/signin' element={<StudentSignIn/>}/>
           <Route path='/auth/student/signup' element={<StudentSignUp/>}/>
           <Route path='/auth/admin/signin' element={<AdminSignIn/>}/>

            <Route path='/admin' element={<AdminAppWrapper/>}>
                <Route index element={<AdminDashboard/>}/>
                <Route path='/admin/employees' element={<AdminEmployeesList/>}/>
           </Route>

           
           <Route path='/student' element={<StudentAppWrapper/>}>
               
           </Route>

       <Route path='/' element={<AppWrapper/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='*' element={<NotFound/>}/>
       </Route>

     </Routes>
    </BrowserRouter>
  )
}

export default App
