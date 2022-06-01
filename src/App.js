import React, { useState, Suspense } from "react";
import './App.css';
import Editor from './components/Editor';
import Data from "./components/Data_Table";
import GitHubIcon from '@mui/icons-material/GitHub';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';




const App = () => {
    const [query, setQuery] = useState("");
    const [value, setValue] = useState("select * from categories");
    const [isOpen, setIsOpen] = useState(false);
    const [name,setName] = useState("categories");
    const [db, setDB] =useState("");
   
   // opens navbar

    function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
      document.getElementById("button").style.marginLeft = "550px";
      document.getElementById("buttoncsv").style.marginLeft = "10px";
    };
    
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
    const closeNav = () => {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("main").style.marginLeft = "0";
      document.getElementById("button").style.marginLeft = "800px";
      document.getElementById("buttoncsv").style.marginLeft = "30px";
    }
    
  return (
   
  <body>
    <div id="mySidenav" class="sidenav">
      <a onClick={(e) => closeNav()} class="closebtn">&times;</a>
      <a onClick={(e)=>setValue("select * from categories")}>Categories</a>
      <a onClick={(e)=>setValue("select * from customers")}>Customers</a>
      <a onClick={(e)=>setValue("select * from employee_territories")}>Employee Territories</a>
      <a onClick={(e)=>setValue("select * from empolyees")}>Employees</a>
      <a onClick={(e)=>setValue("select * from order_details")}>Order Details</a>
      <a onClick={(e)=>setValue("select * from orders")}>Orders</a>
      <a onClick={(e)=>setValue("select * from products")}>Products</a>
      <a onClick={(e)=>setValue("select * from regions")}>Regions</a>
      <a onClick={(e)=>setValue("select * from shippers")}>Shippers</a>
      <a onClick={(e)=>setValue("select * from suppliers")}>Suppliers</a>
      <a onClick={(e)=>setValue("select * from territories")}>Territories</a>
    </div>
    <div id="main">
      <header align="left" class="header">
        <div>
          <button onClick={openNav} className="logo"><IntegrationInstructionsIcon /></button>
        </div>
        <div>
          <h1>SQL EDITOR</h1>
        </div>
        <div>
          <a href="https://github.com/sahil5800">
            <button className="logo"><GitHubIcon /></button>
          </a>
        </div>
      </header>
      <Editor 
       setQuery={setQuery}
       value={value}
       setValue={setValue}
       isOpen={isOpen}
       />
       <Data
       value={value}
       setValue={setValue}
      />
      <div id="footer">
        <a href="https://www.linkedin.com/in/sahil-raj-srivastava-3457581aa/" className="link">@Made by Sahil Raj</a>
      </div>
    </div>   
  </body>
  );
}

export default App;
