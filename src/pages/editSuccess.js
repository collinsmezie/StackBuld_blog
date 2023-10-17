import React from 'react';
import { useRouter } from 'next/router';



const EditSuccess = () => {
    const router = useRouter();

    return (
    
        <div className="flex justify-center items-center h-screen">
          <div className="flex justify-center w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg bg-teal-500">

            <p className="text-white">This post has been Edited successfully</p>

          </div>
        </div>
    
    );
};

export default EditSuccess;
