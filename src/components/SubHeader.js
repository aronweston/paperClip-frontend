import React, { useState } from 'react';

const SubHeader = () => {
  const [message, setMessage] = useState('');

  return (
    <div className='error-container text-center bg-green-600 py-5 text-white'>
      Hello from the subheader, this is where we will render error/success
      messages
    </div>
  );
};

export default SubHeader;
