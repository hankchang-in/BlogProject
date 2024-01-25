import { BrowserRouter, Routes, Route , Navigate , Outlet } from "react-router-dom";
import { useState } from "react";
import Login from "./components/accounts/LoginPage";
import "./App.css";
import DataProvider from "./Context/DataProvider";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./about/About";

const PrivateRoute= ({isAuthenticated, ...props})=>{
  return isAuthenticated?(
  <>
    <Header/>
    <Outlet/>
    
  </>
  ): (
  <Navigate replace to ='/login'/>
)}

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false)
  // console.log(`is user authenticated ${isAuthenticated}`)
  return (
    <DataProvider>
      <BrowserRouter>
          
        <div style={{ marginTop: 70 }}>
          <Routes>

            <Route path="/login" element={<Login isUserAuthenticated = {isUserAuthenticated}/>} />
            {/* checking if user isAuthentiaced or logged in for accessing these components */}
            
            <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/" element={<Home/>}/>
            </Route>

            {/* checking if user isAuthentiaced or logged in for accessing these components */}
            
           <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
            <Route path="/about" element={<About/>}/>
           </Route>

           <Route path="/contact" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/contact" element={<Home/>}/>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
