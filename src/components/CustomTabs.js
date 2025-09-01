import React from 'react';
import './CustomTabs.css';

const CustomTabs = ({ selected = 0, onSelect, children }) => {
  const handleTabClick = (index) => {
    if (onSelect) {
      onSelect({ selected: index });
    }
  };

  const tabs = React.Children.toArray(children).filter(child => 
    React.isValidElement(child) && child.type === CustomTab
  );

  return (
    <div className="custom-tabs">
      <div className="custom-tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`custom-tab-button ${selected === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {tab.props.title}
          </button>
        ))}
      </div>
      <div className="custom-tabs-content">
        {tabs[selected] && tabs[selected].props.children}
      </div>
    </div>
  );
};

const CustomTab = ({ title, children }) => {
  // Este componente solo se usa para pasar props al CustomTabs
  return null;
};

export { CustomTabs, CustomTab };
