import React, { useState } from 'react';
import styled from 'styled-components';



/**
 * Tabs component for switching between different views
 * @param {Object[]} tabs - Array of tab objects with label, content, and optional status
 * @param {string} tabs[].label - Label for the tab
 * @param {React.ReactNode} tabs[].content - Content to render when tab is active
 * @param {('working'|'coming_soon'|'new'|'disabled')} [tabs[].status='working'] - Status of the tab
 * @param {number} defaultTab - Index of default active tab
 * @param {boolean} [isSuperAdmin=false] - If true, overrides disabled behavior for coming_soon/disabled tabs
 */
function Tabs({ tabs, defaultTab = 0, isSuperAdmin = false }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const handleTabClick = (index, status) => {
    const unclickable = (status === 'coming_soon' || status === 'disabled') && !isSuperAdmin;
    if (unclickable) return;
    setActiveTab(index);
  };

  const activeContent = tabs[activeTab]?.content;

  return (
    <TabContainer>
      <TabList>
        {tabs.map((tab, index) => {
          const status = tab.status || 'working';
          const unclickable = (status === 'coming_soon' || status === 'disabled') && !isSuperAdmin;
          const hardDisabled = (status === 'disabled') && !isSuperAdmin;
          const badgeText = status === 'new' ? 'New!' : status === 'coming_soon' ? 'Coming Soon!' : null;
          return (
            <TabItemWrapper key={index}>
              {badgeText && (
                <TabBadge $variant={status}>{badgeText}</TabBadge>
              )}
              <TabItem
                active={activeTab === index}
                onClick={() => handleTabClick(index, status)}
                $unclickable={unclickable}
                $hardDisabled={hardDisabled}
                title={unclickable ? (status === 'coming_soon' ? 'Coming soon' : 'Disabled') : undefined}
              >
                {tab.label}
              </TabItem>
            </TabItemWrapper>
          );
        })}
      </TabList>
      <TabContent>
        {activeContent}
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
  cursor: ${props => props.$unclickable ? 'not-allowed' : 'pointer'};
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#800000' : '#333'};
  border-bottom: ${props => props.active ? '2px solid #800000' : '2px solid transparent'};
  margin-bottom: -2px;
  transition: all 0.2s ease;
  opacity: ${props => props.$hardDisabled ? 0.6 : 1};
  filter: ${props => props.$hardDisabled ? 'grayscale(70%)' : 'none'};

  &:hover {
    color: #800000;
  }
`;

const TabContent = styled.div`
  padding: 0.5rem 0;
`;

const TabItemWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const TabBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.$variant === 'new' ? '#22c55e' : '#9ca3af'};
  color: white;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 9999px;
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.15);
`;