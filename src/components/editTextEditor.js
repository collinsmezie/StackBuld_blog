import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import 'react-quill/dist/quill.snow.css';
import PostTitle from './postTitle';
import styles from "../pages/technology/index.module.css";
import CustomEditor from './textEditor';
import { removeHtmlTags } from './textEditor';

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });



function EditTextEditor({ cardId, title, content }) {
  const router = useRouter();
  const [titleData, setTitleData] = useState(title); // Initialize state with initial data
  const [contentData, setContentData] = useState(content); // Initialize state with initial data


  const handleSaveClick = async () => {
    try {
      // Send a PUT request to update the card data
      const response = await fetch(`/api/posts/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: cardId,
            title: titleData,
            content: removeHtmlTags(contentData),
        }), // Send the updated data
      });

      if (response.ok) {
        // The card was successfully updated
        console.log('Card updated successfully');
        // Disable editing mode
        // You can perform further actions here, e.g., update your UI
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Failed to update card');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error updating card:', error);
    }
  };


  return (
    <div className="w-full">
    <div className="mb-4">
      {/* Custom button */}
      <PostTitle
        placeholder="Post title"
        value={titleData}
        onChange={setTitleData}
        className="mb-2"
      /> 
    </div>

    {/* ReactQuill editor */}
    <div className="relative h-96">
      <ReactQuill
        className="h-80"
        value={contentData}
        onChange={setContentData}
        modules={CustomEditor.modules}
        formats={CustomEditor.formats}
      />
    </div> 
    <div className={styles.postSelect} >

      <button
        onClick={() => {
          handleSaveClick();
          setContentData('');
          setTitleData('');
          router.push('/');
        }}
        
        className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300"
      >
        Post
      </button>
    </div>
  </div>
  );
}

export default EditTextEditor;
