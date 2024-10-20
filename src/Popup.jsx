import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Popup = ({ 
  title, 
  content, 
  isDarkMode, 
  primaryColor = 'blue', 
  onClose, 
  style = 'default' 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50); 
  }, []);

  const handleClose = () => {
    setIsClosing(true); 
    setTimeout(() => {
      setIsVisible(false); 
      onClose(); 
    }, 300); 
  };

  const themeClass = isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const buttonClass = isDarkMode ? `bg-${primaryColor}-700` : `bg-${primaryColor}-500`;

  const styleVariants = {
    default: '',
    rounded: 'rounded-lg',
    flat: 'shadow-none',
    shadow: 'shadow-xl',
  };

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center`}>
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${isVisible && !isClosing ? 'opacity-50' : 'opacity-0'}`} 
        onClick={handleClose}
      ></div>

      <div 
        className={`transform transition-all duration-300 ${isVisible && !isClosing ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} 
                    p-6 w-full max-w-lg mx-auto ${themeClass} ${styleVariants[style]} shadow-lg rounded-lg z-10`}
      >
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button className="text-gray-500 hover:text-gray-800" onClick={handleClose}>X</button>
        </div>
        <div className="mt-4">
          <p>{content}</p>
        </div>
        <div className="flex justify-end mt-6">
          <button 
            className={`text-white py-2 px-4 rounded-lg ${buttonClass} hover:bg-${primaryColor}-600`} 
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.oneOf(['default', 'rounded', 'flat', 'shadow']),
};

export default Popup;