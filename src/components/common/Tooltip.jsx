import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * Reusable tooltip component that displays additional information on hover
 */
export const Tooltip = ({ content, children, position = 'top', maxWidth = '300px' }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <TooltipContainer
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <TooltipContent position={position} maxWidth={maxWidth}>
          {content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < content.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </TooltipContent>
      )}
    </TooltipContainer>
  );
};

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const TooltipContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  text-align: left;
  padding: 8px 10px;
  border-radius: 4px;
  z-index: 100;
  font-size: 0.8rem;
  line-height: 1.4;
  white-space: nowrap;
  max-width: ${props => props.maxWidth};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  
  ${props => {
    switch(props.position) {
      case 'top':
        return `
          bottom: 120%;
          &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
          }
        `;
      case 'bottom':
        return `
          top: 120%;
          &:after {
            content: '';
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent #333 transparent;
          }
        `;
      case 'left':
        return `
          right: 120%;
          top: 50%;
          transform: translateY(-50%);
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent #333;
          }
        `;
      case 'right':
        return `
          left: 120%;
          top: 50%;
          transform: translateY(-50%);
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 100%;
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent #333 transparent transparent;
          }
        `;
      default:
        return `
          bottom: 120%;
          &:after {
            content: '';
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: #333 transparent transparent transparent;
          }
        `;
    }
  }}
`;

export default Tooltip;
