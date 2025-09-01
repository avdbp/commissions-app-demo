import '../App.css';
import React, { useState } from 'react';
import { CustomGrid, CustomColumn } from '../components/CustomGrid';
import demo from '../demo.json';
import SecondNavbarHome from '../components/SecondNavBarHome';
import NavBarWaitinPayment from '../components/NavBarWaitinPayment';
import ToolBar from '../components/ToolBar';


function WaitingPaymentPage() {
  const [data, setData] = useState(demo);

  return (
    <div className='grid'>
    <NavBarWaitinPayment/>
    <ToolBar/>
      <CustomGrid className="myGridOne"
     
        data={data}>
        <CustomColumn className='grid-column' field='Rolling Total(6 Periods)' title='Rolling Total(6 Periods)' />
        <CustomColumn field='Second Description' title='Pending Submission' />
        <CustomColumn field='Third Description' title='Sales Aproval' />
        <CustomColumn field='Fourth Description' title='Order Verification' />
        <CustomColumn field='Fifth Description' title='Waiting Payment' />
        <CustomColumn field='Sixth Description' title='Submitted for Payroll' />
        <CustomColumn field='Sixth Description' title='Pending Final Approval' />
        <CustomColumn field='Firts Description' title='Waiting to be Paid' />
        <CustomColumn field='Second Description' title='Being Paid' />
        <CustomColumn field='Third Description' title='Archive' />
        <CustomColumn field='Fourth Description' title='Grand Total' />
      </CustomGrid>
    <SecondNavbarHome/>
    <CustomGrid className="myGridTwo"
        data={data}>
        <CustomColumn field='Firts Description' title='Firts Description' />
        <CustomColumn field='Second Description' title='Second Description' />
        <CustomColumn field='Third Description' title='Third Description' />
        <CustomColumn field='Fourth Description' title='Fourth Description' />
        <CustomColumn field='Fifth Description' title='Fifth Description' />
        <CustomColumn field='Sixth Description' title='Sixth Description' />
      </CustomGrid>
    </div>
  );
}

export default WaitingPaymentPage;
