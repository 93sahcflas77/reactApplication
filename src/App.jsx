import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../Component/RecatRouterDom/Home";
import About from "../Component/RecatRouterDom/About";
import NotFound from "../Component/RecatRouterDom/NotFound";
import Dashboard from "../Component/RecatRouterDom/Dashboard";
import Profile from "../Component/RecatRouterDom/Profile";
import Settings from "../Component/RecatRouterDom/Settings";
import Navigation from "../Component/RecatRouterDom/Navigation";
import User1 from "../Component/RecatRouterDom/User";
import Index from "../Component/RecatRouterDom/Index";
import Login from "../Component/RecatRouterDom/Login";
import Loaddata from "../Component/RecatRouterDom/Loaddata";
import DashboardNestedRoute from "../Component/RecatRouterDom/DashboardNestedRoute";
import Lauout from "../Component/RecatRouterDom/Lauout";
import MainLayout from "../Component/RecatRouterDom/MainLayout";
import MainApp from "../Component/RecatRouterDom/NestedRoute/MainApp";
import Dynamicroute from "../Component/RecatRouterDom/DynamicRoutes/Dynamicroute";
import MultipleParametersDynamicRoute from "../Component/RecatRouterDom/DynamicRoutes/MultipleParametersDynamicRoute";
import DynamicRouteWithNestedRoute from "../Component/RecatRouterDom/DynamicRoutes/DynamicRouteWithNestedRoute";
import DynamicRouteWithQueryParameter from "../Component/RecatRouterDom/DynamicRoutes/DynamicRouteWithQueryParameter";
import LazyLoading from "../Component/RecatRouterDom/LazyLoading/LazyLoading";
import Outlet from "../Component/RecatRouterDom/Outlet/Outlet";
import DynamicLinks from "../Component/AllExample/DynamicLinks";
import UseContextExample from "../Component/AllExample/UseContext/UseContextExample";
import UseContextExample2 from "../Component/AllExample/UseContext/UseContextExample2";
import UseContextExample3 from "../Component/AllExample/UseContext/UseContextExample3";
import UseContextExample4 from "../Component/AllExample/UseContext/UseContextExample4";
import UseContextExample5 from "../Component/AllExample/UseContext/UseContextExample5";
import TaskApp from "../Component/AllExample/UseContext/TaskApp/TaskApp";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from "../Component/FunctionComponent";
import ClassComponent from "../Component/ClassComponent";
import User from "../Component/User";
import ContainerComponent from "../Component/ContainerComponent";
import Props from "../Component/Props";
import HierarchicalStructure from "../Component/HierarchicalStructure";
import Reusability from "../Component/Reusability";
import SeparationofConcerns from "../Component/SeparationofConcerns";
import JavascriptXML from "../Component/JavascriptXML";
import Compsition from "../Component/Compsition";
import AllEvent from "../Component/Event";
import HighOrderComponents from "../Component/HighOrderComponents";

function App() {

  const ProtectRoute = ({ element }) => {
    const isAuthenticated = true;
    return isAuthenticated ? element : < Navigate to="/login" />
  }

  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent />
      <User /> */}
      {/* <ContainerComponent />
      <Props /> */}
      {/* < HierarchicalStructure /> */}
      {/* < Reusability /> */}
      {/* <SeparationofConcerns /> */}
      {/* < JavascriptXML /> */}
      {/* <Compsition/> */}
      {/* < AllEvent /> */}
      {/* < HighOrderComponents /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/dashboard" element={< Dashboard />} >
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/*' element={<MainLayout />} />
          <Route path='/about' element={<About />} />
          <Route path="/dashboardNestedRoute/*" element={<DashboardNestedRoute />}/>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<Index />} />
            <Route path='profile' element={<Profile/>}/> 
            <Route path='settings' element={<Settings/>}/> 
            <Route /> 
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/user/:id' element={< ProtectRoute element={<User1 />} />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path="/loaddata" element={< Loaddata />} loader={ async () => {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            return reponse.json();
          }}/> */}
        {/* </Routes> */}
      {/* </BrowserRouter>  */}

      {/* <MainApp/> */}
      {/* <BrowserRouter> */}
      {/* <Dynamicroute/> */}
      {/* <MultipleParametersDynamicRoute/> */}
      {/* <DynamicRouteWithNestedRoute/> */}
      {/* <DynamicRouteWithQueryParameter /> */}
      {/* </BrowserRouter> */}

      {/* <BrowserRouter>
        <LazyLoading />
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Outlet/>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <DynamicLinks/>
      </BrowserRouter> */}


    {/* <UseContextExample/>       */}
    {/* <UseContextExample2/> */}
    {/* <UseContextExample3/> */}
    {/* <UseContextExample4/> */}
    {/* <UseContextExample5/> */}
    <TaskApp/>

    </>
  )
}

export default App
