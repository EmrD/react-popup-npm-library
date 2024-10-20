# React Popup With Tailwind

This is an library to create a popup with Tailwind easily. 

## Example Usage

- First, you must install the library using ```npm```
- Install TailwindCSS using ```npm install tailwindcss```
- After that you can use like; 
```
import React, { useState } from 'react';
import Popup from 'react-popup-package';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setIsOpen(true)} 
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Popup
      </button>

      {isOpen && (
        <Popup 
          title="Example Popup"
          content="This is an example popup using React and TailwindCSS!"
          isDarkMode={false}
          style="shadow"
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
```