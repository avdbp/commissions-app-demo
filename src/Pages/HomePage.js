import React, { useState } from 'react';
import { CustomGrid, CustomColumn } from '../components/CustomGrid';
import { Link } from 'react-router-dom';
import demo from '../demo.json';
import demo2 from '../demo2.json';
import SeparatorBar from '../components/SeparatorBar';
import NavbarHome from '../components/NavBarHome';
import './HomePage.css'
import document from "../icons/document.png"


function HomePage() {
  const [data, setData] = useState(demo);
  const [data2, setData2] = useState(demo2);

  return (
    <div className='grid'>
      <NavbarHome />
      <CustomGrid className="myGridOne" data={data} resizable={true}>
        <CustomColumn className='grid-column-head' field='Rolling Total(6 Periods)' title={<a href="/">Rolling Total(6 Periods)</a>} />
        <CustomColumn className='grid-column-head' field='Pending Submission' title={<a href="#">Pending Submission</a>} />
        <CustomColumn className='grid-column-head' field='Sales Aproval' title={<a href="#">Sales Aproval</a>} />
        <CustomColumn className='grid-column-head' field='Order Verification' title={<a href="#">Order Verification</a>} />
        <CustomColumn className='grid-column-head' field='Waiting Payment' title={<a href="#">Waiting Payment</a>} />
        <CustomColumn className='grid-column-head' field='Submitted for Payroll' title={<a href="#">Submitted for Payroll</a>} />
        <CustomColumn className='grid-column-head' field='Pending Final Approval' title={<a href="#">Pending Final Approval</a>} />
        <CustomColumn className='grid-column-head' field='Waiting to be Paid' title={<a href="#">Waiting to be Paid</a>} />
        <CustomColumn className='grid-column-head' field='Being Paid' title={<a href="#">Being Paid</a>} />
        <CustomColumn className='grid-column-head' field='Archive' title={<a href="#">Archive</a>} />
        <CustomColumn className='grid-column-head' field='Grand Total' title={<a href="#">Grand Total</a>} />
      </CustomGrid>
     
     
     
     
      <SeparatorBar titulo="Order Verification"  />
      
      
      
      <CustomGrid className="myGridTwo" data={data2} resizable={true}>
        
      <CustomColumn
  className='grid-column-head column-width'
  field='ServiceInfo'
  title={<a href="#"></a>}
  cell={(props) => {
    return (
      <td className='tdImg'>
        {props.dataItem.ShowImage ? (
          <img className='imgGrid' src="../icons/trash.webp" alt="Imagen" />
        ) : (
          props.dataItem.ServiceInfo
        )}
      </td>
    );
  }}
/>

<CustomColumn
  className='grid-column-head column-width'
  field='ServiceInfo'
  title={<Link to="/document-page">View Document</Link>}
  cell={(props) => {
    return (
      <td className='tdImg'>
        <Link to="/document-page">
          {props.dataItem.ShowImage ? (
            <img className='imgGrid' src="../icons/document.png" alt="Imagen" />
          ) : (
            props.dataItem.ServiceInfo
          )}
        </Link>
      </td>
    );
  }}
/>





       
        <CustomColumn field='ID' title={<a href="#">ID</a>} width="100px"
        minResizableWidth={30} />
        <CustomColumn field='Booking Period' title={<a href="#">Booking Period</a>} />
        <CustomColumn field='Sales Rep' title={<a href="#">Sales Rep</a>} />
        <CustomColumn field='Company' title={<a href="#">Company</a>} />
        <CustomColumn field='Packet Number' title={<a href="#">Packet Number</a>} />
        <CustomColumn field='Revenue' title={<a href="#">Revenue</a>} />
        <CustomColumn field='Comission Earned' title={<a href="#">Comission Earned</a>} />
        

      </CustomGrid>
      
    </div>
  );
}

export default HomePage;
