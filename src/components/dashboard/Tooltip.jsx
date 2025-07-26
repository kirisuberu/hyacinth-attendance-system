import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: help;
  z-index: 100;
`;

const TooltipContent = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  z-index: 9999;
  min-width: 200px;
  max-width: 280px;
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.2s, visibility 0.2s;
  white-space: normal;
  pointer-events: none;
`;

const TooltipArrow = styled.div`
  position: fixed;
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid rgba(0, 0, 0, 0.8);
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  opacity: ${props => props.visible ? '1' : '0'};
  transition: opacity 0.2s, visibility 0.2s;
  z-index: 9999;
  pointer-events: none;
`;

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0 });
  const containerRef = React.useRef(null);
  
  const updatePosition = () => {
    if (containerRef.current && isVisible) {
      const rect = containerRef.current.getBoundingClientRect();
      const tooltipHeight = 70; // Approximate height of tooltip
      const tooltipWidth = 200; // Minimum width of tooltip
      
      // Position tooltip above the element
      const top = rect.top - tooltipHeight - 10;
      const left = rect.left + (rect.width / 2) - (tooltipWidth / 2);
      
      // Keep tooltip within viewport
      const adjustedLeft = Math.max(10, Math.min(left, window.innerWidth - tooltipWidth - 10));
      const adjustedTop = top < 10 ? rect.bottom + 10 : top; // If not enough room above, position below
      
      setPosition({ 
        top: adjustedTop, 
        left: adjustedLeft 
      });
      
      // Position arrow
      if (adjustedTop === top) {
        // Tooltip is above element
        setArrowPosition({
          top: top + tooltipHeight,
          left: rect.left + (rect.width / 2)
        });
      } else {
        // Tooltip is below element
        setArrowPosition({
          top: rect.top - 6,
          left: rect.left + (rect.width / 2),
          transform: 'rotate(180deg)'
        });
      }
    }
  };
  
  useEffect(() => {
    if (isVisible) {
      updatePosition();
      window.addEventListener('scroll', updatePosition);
      window.addEventListener('resize', updatePosition);
    }
    
    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible]);
  
  return (
    <TooltipContainer 
      ref={containerRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <TooltipContent 
        visible={isVisible} 
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`
        }}
      >
        {text}
      </TooltipContent>
      <TooltipArrow 
        visible={isVisible}
        style={{
          top: `${arrowPosition.top}px`,
          left: `${arrowPosition.left}px`,
          transform: arrowPosition.transform || ''
        }}
      />
    </TooltipContainer>
  );
};

export default Tooltip;
