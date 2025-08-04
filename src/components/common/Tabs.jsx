import React, { useState } from 'react';
import styled from 'styled-components';



/**
 * Tabs component for switching between different views
 * @param {Object[]} tabs - Array of tab objects with label and content
 * @param {string} tabs[].label - Label for the tab
 * @param {React.ReactNode} tabs[].content - Content to render when tab is active
 * @param {number} defaultTab - Index of default active tab
 */
function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabItem
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabList>
      <TabContent>
        {tabs[activeTab].content}
      </TabContent>
    </TabContainer>
  );
}

export default Tabs;

const TabContainer = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 1rem;
`;

const TabItem = styled.div`
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#800000' : '#333'};
  border-bottom: ${props => props.active ? '2px solid #800000' : '2px solid transparent'};
  margin-bottom: -2px;
  transition: all 0.2s ease;

  &:hover {
    color: #800000;
  }
`;

const TabContent = styled.div`
  padding: 0.5rem 0;
`;