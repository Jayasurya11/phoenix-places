import {Outlet,Link} from "react-router-dom"
import './App.css';

function App() {
  return (
    <main className="px-2 lg:px-12 min-h-screen flex justify-between flex-col ">
      <div className="flex flex-col lg:flex-row justify-between  lg:items-center border-0 lg:border-b py-2 border-gray-500">
        <img src="/images/logo.png"/>
        <div className="flex justify-evenly grow gap-2 border-y lg:border-0 border-gray-500 ">
          <Link to="/" className="cursor-pointer hover:text-red-500">Home</Link>
          <Link to="/people" className="cursor-pointer hover:text-red-500">Our People</Link>
          <Link to="/kerala" className="cursor-pointer hover:text-red-500">Kerala Meet</Link>
          <Link to="/place" className="cursor-pointer hover:text-red-500">Places</Link>
         </div>
      </div>
      <Outlet/>
      <footer className="w-full text-gray-500 py-8 shadow-xl border border-gray-300">
        <p className="text-center">©Phoenixmart-2024 - Melsiruvallur</p>
        <p className="text-center text-xs">Created by Jayasurya E</p>
      </footer>
      
    </main>
    
  );
}

export default App;
