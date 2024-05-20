// Butterfly.js
import React from 'react';

const Butterfly = () => {
  return (
    <div className="butterfly">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="50px" height="50px">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 5.83L17.18 10H20v4h-4.42l3.22 3.22L15 18l-5-5 5-5 1.6 1.6L15.58 10H9V6h3.18L12 5.83zM3 6l2.29 2.29L3 10l1.41 1.41L6 10l2.29 2.29L10 10l2.29 2.29L14 10l2.29 2.29L18 10l2.29 2.29L22 10v8h-2v-3.77L13.77 22H10.23L5 16.77V20H3V6z"/>
      </svg>
    </div>
  );
};

export default Butterfly;
