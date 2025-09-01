import React, { useState } from 'react';
import { CustomGrid, CustomColumn } from '../components/CustomGrid';
import demo from '../demo.json';
import demo2 from '../demo2.json';
import demo3 from '../demo3.json';
import NavbarHome from '../components/NavBarHome';
import './HomePage.css'
import { CustomTabs, CustomTab } from '../components/CustomTabs';
import './DocumentPage.css'
import SeparatorBar from '../components/SeparatorBar';
import NavbarUtilities from '../components/NavBarUtilities';
import { CustomInput, CustomSelect, CustomDatePicker } from '../components/CustomInput';


function DocumentPage() {
    const [selectedItemsIsMainframe, setSelectedItemsIsMainframe] = useState([]);
    const [selectedItemsNewPlacement, setSelectedItemsNewPlacement] = useState([]);
    const [selectedItemsPriceEdited, setSelectedItemsPriceEdited] = useState([]);
  
    const handleCheckboxChange = (column, item) => {
      if (column === 'IsMainframe') {
        if (selectedItemsIsMainframe.includes(item)) {
          setSelectedItemsIsMainframe(selectedItemsIsMainframe.filter((i) => i !== item));
        } else {
          setSelectedItemsIsMainframe([...selectedItemsIsMainframe, item]);
        }
      } else if (column === 'NewPlacement') {
        if (selectedItemsNewPlacement.includes(item)) {
          setSelectedItemsNewPlacement(selectedItemsNewPlacement.filter((i) => i !== item));
        } else {
          setSelectedItemsNewPlacement([...selectedItemsNewPlacement, item]);
        }
      }
      else if (column === 'PriceEdited') {
        if (selectedItemsPriceEdited.includes(item)) {
          setSelectedItemsPriceEdited(selectedItemsPriceEdited.filter((i) => i !== item));
        } else {
          setSelectedItemsPriceEdited([...selectedItemsPriceEdited, item]);
        }
      }
    };
  
  

    const periods = [
        "january 2024",
        "February 2024",
        "March 2024",
        "April 2024",
        "May 2024",
        "June 2024",
        "July 2024",
        "August 2024",
        "September 2024",
        "November 2024",
        "August 2024",
        "December 2024",
        "December 2023"
      ];

    const [value, setValue] = React.useState(new Date());
    const changeDate = ({ value }) => {
      setValue(value);
    };

const [selected, setSelected] = React.useState(0);
  const handleSelect = (e) => {
    setSelected(e.selected);
  };
  const [data, setData] = useState(demo);
  const [data2, setData2] = useState(demo2);
  const [data3, setData3] = useState(demo3);


  return (


    
    <div className='contenido'>
<NavbarHome />

<NavbarUtilities />

<SeparatorBar titulo="Transaction Info" />
<div className='tablas' >
        <div className='tablas1' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Date</td>
                <td> <CustomDatePicker placeholder="Choose a date..." /></td>
              </tr>
              <tr>
                <td>Period</td>
                <td><CustomSelect
          data={periods}
        /></td>
              </tr>
              <tr>
                <td>Commission Status</td>
                <td><CustomInput defaultValue="" disabled /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tablas1' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Customer Name</td>
                <td><CustomInput defaultValue="" /></td>
              </tr>
              <tr>
                <td>Customer Number</td>
                <td><CustomInput defaultValue="" /></td>
              </tr>
              <tr>
                <td>Sales Rep</td>
                <td><CustomInput defaultValue="" disabled  /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tablas1' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Sales Rep</td>
                <td><CustomInput defaultValue="" disabled   /></td>
              </tr>
              <tr>
                <td>Sales Manager</td>
                <td><CustomInput defaultValue="" disabled  /></td>
              </tr>
              <tr>
                <td>Customer Number</td>
                <td><CustomInput defaultValue="" disabled   /></td>
              </tr>
            </tbody>
          </table>
        </div>
</div>

<SeparatorBar titulo="" />
<CustomTabs selected={selected} onSelect={handleSelect}>


      <CustomTab title="CPC Worksheet">
        <div>
    
        <div className='tablas' >
        <div className='tablas1' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Monthly Copies (b&w)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>POA CPC (b&w)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Monthly Cost (b&w)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Monthly Copies (Color)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>POA CPC (Color)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Monthly Cost (Color)</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tablas2' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Total Monthly Cost</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Lease Service Credit</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Monthly Service Payment</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Devide By Factor</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>$ Down</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Rate</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='tablas3' >
          <table className="myTable">
            <tbody>
              <tr>
                <td>Total Monthly Lease Payment</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Less Monthly Lease Payment</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Equals Monthly Equipment Payment</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Equipment Funding</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Plus One Year Service</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
              <tr>
                <td>Total Quota Billing</td>
                <td><CustomInput defaultValue="$0.00" /></td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
        </div>
        <SeparatorBar titulo="Equipment" />  
        <CustomGrid className="myGridOne" data={data3} resizable={true}>
        
        <CustomColumn
            className='grid-column-head'
            field='ServiceInfo'
            title={<a href="#">Service Info</a>}
            cell={(props) => {
                return (
                    <td className='tdImg'>
                        {props.dataItem.ShowImage ? (
                        <img className='imgGrid' src="../icons/document.png" alt="Imagen" />
                        ) : (
                        props.dataItem.ServiceInfo
                        )}
      </td>
    );
  }}
/>  
  <CustomColumn className='grid-column-head' field='Item No' title={<a href="#">Item Nº</a>} />
  <CustomColumn className='grid-column-head' field='Item Category' title={<a href="#">Item Category</a>} />

  <CustomColumn
  className='grid-column-head'
  field='CheckBoxColumn'
  title={<a href="#">Is Mainframe</a>}
  cell={(props) => (
    <td>
      <input
        type="checkbox"
        checked={selectedItemsIsMainframe.includes(props.dataItem)}
        onChange={() => handleCheckboxChange('IsMainframe', props.dataItem)}
      />
    </td>
  )}
/>

<CustomColumn
  className='grid-column-head'
  field='CheckBoxColumn'
  title={<a href="#">New Placement</a>}
  cell={(props) => (
    <td>
      <input
        type="checkbox"
        checked={selectedItemsNewPlacement.includes(props.dataItem)}
        onChange={() => handleCheckboxChange('NewPlacement', props.dataItem)}
      />
    </td>
  )}
/>

<CustomColumn
  className='grid-column-head'
  field='CheckBoxColumn'
  title={<a href="#">Price Edited</a>}
  cell={(props) => (
    <td>
      <input
        type="checkbox"
        checked={selectedItemsPriceEdited.includes(props.dataItem)}
        onChange={() => handleCheckboxChange('PriceEdited', props.dataItem)}
      />
    </td>
  )}
/>





  <CustomColumn className='grid-column-head' field='ID' title={<a href="#">ID</a>} />
  <CustomColumn className='grid-column-head' field='Equipment' title={<a href="#">Equipment</a>} />
  <CustomColumn className='grid-column-head' field='Price List' title={<a href="#">Price List</a>} />
  <CustomColumn className='grid-column-head' field='QTY' title={<a href="#">QTY</a>} />
  <CustomColumn className='grid-column-head' field='Unit Price' title={<a href="#">Unit Price</a>} />
  <CustomColumn className='grid-column-head' field='Unit Price' title={<a href="#">Total Price</a>} />
  <CustomColumn className='grid-column-head' field='Unit Price' title={<a href="#">Dealer Cost</a>} />

  

</CustomGrid>
   
      </CustomTab>
      <CustomTab title="Commission Form">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="IT Comm Sheet">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="Product Config">
        <div>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="Adjustments">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="Sales Rep Splits">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>

      <CustomTab title="Commission Changes">
        <div>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="Notes">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
      <CustomTab title="File Keeper">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>

      <CustomTab title="BAM Checklist">
        <div>
          <p>
            ...
          </p>
          <p>
            ...
          </p>
        </div>
      </CustomTab>
        
    </CustomTabs>




    
      
     
     
     
     
    
    

      
    </div>
  );
}

export default DocumentPage;
