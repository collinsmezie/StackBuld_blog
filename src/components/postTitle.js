import React from 'react';
const PostTitle = ({ placeholder, value, onChange }) => {
    return (
      <input
        className="w-full p-2 border rounded-md"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}

      />
    );
  };
  
  export default PostTitle;
  