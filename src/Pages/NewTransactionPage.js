import React, { useState } from 'react';
import { CustomGrid, CustomColumn } from '../components/CustomGrid';
import demo from '../demo.json'; 
function NewTransactionPage() {
  const [data, setData] = useState(demo);

  return (
    <div className='grid'>
      <CustomGrid
        data={data}>
        <CustomColumn field='Rolling Total(6 Periods)' title='Rolling Total(6 Periods)' />
        <CustomColumn field='Second Description' title='Second Description' />
        <CustomColumn field='Third Description' title='Third Description' />
        <CustomColumn field='Fourth Description' title='Fourth Description' />
        <CustomColumn field='Fifth Description' title='Fifth Description' />
        <CustomColumn field='Sixth Description' title='Sixth Description' />
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

export default NewTransactionPage;
