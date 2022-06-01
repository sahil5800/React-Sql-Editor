import { useState } from "react";
import categories from "./Data/categories.csv";
import customers from "./Data/customers.csv";
import employee_territories from "./Data/employee_territories.csv";
import employees from "./Data/employees.csv";
import order_details from "./Data/order_details.csv";
import orders from "./Data/orders.csv";
import products from "./Data/products.csv";
import regions from "./Data/regions.csv";
import shippers from "./Data/shippers.csv";
import suppliers from "./Data/suppliers.csv";
import territories from "./Data/territories.csv";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import DataTable from 'react-data-table-component';
import {CSVLink} from "react-csv";
import "../App.css"



const Data = ({value,setValue}) => {
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);
  const [csvData, setCsvData] = useState([]);

// process data fetched from the dataset 
//sets the data in display-able format

  const processData = dataString => {
    const dataStringLines = dataString.split(/\r\n|\n/);
    const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
 
    const list = [];
    for (let i = 1; i < dataStringLines.length; i++) {
      const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
      if (headers && row.length == headers.length) {
        const obj = {};
        for (let j = 0; j < headers.length; j++) {
          let d = row[j];
          if (d.length > 0) {
            if (d[0] == '"')
              d = d.substring(1, d.length - 1);
            if (d[d.length - 1] == '"')
              d = d.substring(d.length - 2, 1);
          }
          if (headers[j]) {
            obj[headers[j]] = d;
          }
        }
 
        // remove the blank rows
        if (Object.values(obj).filter(x => x).length > 0) {
          list.push(obj);
        }
      }
    }
 
    // prepare columns list from headers
    const columns = headers.map(c => ({
      name: c,
      selector: c,
    }));
 
    setData(list);
    setColumns(columns);
  }

//fetching data from the csv

  async function getData(lan) {
    const response = await fetch(lan, {
      headers : { 
        'content-type': 'text/csv;charset=UTF-8'
       }
      })
      .catch(function() {
        console.log("error");
    }); 
    
    
    const data = await response.text();
    processData(data);
    setCsvData(data);

    // footer setting
    document.getElementById("footer").style.marginTop = "9px";
    }

// checking query for multiple datasets

    const checkquery = (value) =>{
      if(value === "select * from customers"){
        getData(customers);
      }
      else if(value === "select * from employee_territories"){
        getData(employee_territories)
      }
      else if(value === "select * from empolyees"){
        getData(employees)
      }
      else if(value === "select * from order_details"){
        getData(order_details)
      }
      else if(value === "select * from orders"){
        getData(orders)
      }
      else if(value === "select * from products"){
        getData(products)
      }
      else if(value === "select * from regions"){
        getData(regions)
      }
      else if(value === "select * from shippers"){
        getData(shippers)
      }
      else if(value === "select * from suppliers"){
        getData(suppliers)
      }
      else if(value === "select * from territories"){
        getData(territories)
      }
      else{
        getData(categories);
      }
    }

    return(
      <div>
        <CSVLink data={csvData}><button id="buttoncsv"><div><DownloadForOfflineIcon /></div><div>.CSV</div></button></CSVLink>
        <button onClick={(e)=>checkquery(value)} id="button"><div><PlayCircleFilledWhiteIcon /></div><div> Run Query</div></button>
        <DataTable
        className="table"
        pagination
        highlightOnHover
        columns={columns}
        data={data}
        />
      </div>
    )
}
export default Data;
