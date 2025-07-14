import React from 'react';

/**
 * UserPlus icon component
 * Used for registration requests in the navigation
 */
function UserPlus({ size = 24, color = "currentColor", weight = "regular", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M128,96a40,40,0,1,0-40-40A40,40,0,0,0,128,96Zm0-64a24,24,0,1,1-24,24A24,24,0,0,1,128,32ZM72,192a8,8,0,0,1-16,0c0-22.09,35.79-40,80-40,6.44,0,12.78.45,18.84,1.32a8,8,0,1,1-2.16,15.84c-5.44-.74-11.07-1.16-16.68-1.16C104.09,168,72,179.47,72,192Zm120-56h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152H160a8,8,0,0,1,0-16h16V120a8,8,0,0,1,16,0Z"
        fill={color}
      />
    </svg>
  );
}

export default UserPlus;
