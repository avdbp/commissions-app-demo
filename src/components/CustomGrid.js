import React from 'react';
import './CustomGrid.css';

const CustomGrid = ({ data, children, className = '', resizable = false }) => {
  return (
    <div className={`custom-grid ${className}`}>
      <table className="custom-grid-table">
        <thead>
          <tr>
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === CustomColumn) {
                return (
                  <th 
                    key={child.props.field || child.props.title}
                    className={`custom-grid-header ${child.props.className || ''}`}
                    style={{ width: child.props.width }}
                  >
                    {child.props.title}
                  </th>
                );
              }
              return null;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="custom-grid-row">
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child) && child.type === CustomColumn) {
                  return (
                    <td 
                      key={child.props.field || child.props.title}
                      className={`custom-grid-cell ${child.props.className || ''}`}
                    >
                      {child.props.cell ? 
                        child.props.cell({ dataItem: item, field: child.props.field }) : 
                        item[child.props.field]
                      }
                    </td>
                  );
                }
                return null;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CustomColumn = ({ field, title, cell, className, width }) => {
  // Este componente solo se usa para pasar props al CustomGrid
  return null;
};

export { CustomGrid, CustomColumn };
