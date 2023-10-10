import React from 'react';
import CustomEditor from '../components/textEditor'; 


const EditorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg">
        <CustomEditor  />
      </div>
    </div>
  );
};

export default EditorPage;
