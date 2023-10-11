// import dynamic from 'next/dynamic';
// import 'react-quill/dist/quill.snow.css';

// const TextEditor = dynamic(import('react-quill'), {
//   ssr: false,
//   loading: () => <p>Loading ...</p>,
// })


// const modules = {
//   toolbar: [
//     [{ header: '1' }, { header: '2' }, { font: [] }],
//     [{ size: [] }],
//     ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     [
//       { list: 'ordered' },
//       { list: 'bullet' },
//       { indent: '-1' },
//       { indent: '+1' },
//     ],
//     ['link', 'image', 'video'],
//     ['clean'],
//   ],
//   clipboard: {
//     // toggle to add extra line breaks when pasting HTML:
//     matchVisual: false,
//   },
// }

// const formats = [
//   'header',
//   'font',
//   'size',
//   'bold',
//   'italic',
//   'underline',
//   'strike',
//   'blockquote',
//   'list',
//   'bullet',
//   'indent',
//   'link',
//   'image',
//   'video',
// ]



// export { TextEditor, modules, formats };






import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import PostTitle from './postTitle';
import styles from "../pages/technology/index.module.css";
import TopicSelector from './topicSelector';
import { useRouter } from 'next/router';


const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export function removeHtmlTags(html) {
  // Use a regular expression to remove HTML tags
  return html.replace(/<[^>]*>|&nbsp;/g, '')
  ;
}



const CustomEditor = () => {
  const [text, setText] = useState('');
  const [postTitle, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const router = useRouter();

  // Function to handle the button click
  const handleButtonClick = async () => {
    try {
      // Create an object containing the text content
      const dataToSend = { content: removeHtmlTags(text), title: postTitle, topic: topic };
      console.log('DA-TA',dataToSend);

      // Send a POST request to your API
      const response = await fetch('/api/posts/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        console.log('Post sent successfully');
      } else {
        console.error('Failed to Post');
      }
    } catch (error) {
      console.error('Error sending Post:', error);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-4">
        {/* Custom button */}
        <PostTitle
          placeholder="Post title"
          value={postTitle}
          onChange={setTitle}
          className="mb-2"
        />
      </div>

      {/* ReactQuill editor */}
      <div className="relative h-96">
        <ReactQuill
          className="h-80"
          value={text}
          onChange={setText}
          modules={CustomEditor.modules}
          formats={CustomEditor.formats}
        />
      </div>
      <div className={styles.postSelect} >

        <TopicSelector
          value={topic}
          setTopic={setTopic}
         />
        <button
          onClick={() => {
            handleButtonClick();
            setText('');
            setTitle('');
            setTopic('');
            router.push('/');
          }}
          
          className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300"
        >
          Post
        </button>
      </div>
    </div>
  );
};

// Define modules and formats as needed
CustomEditor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
  ],
};

CustomEditor.formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'list',
  'bullet',
  'link',
  'image',
];

export default CustomEditor;
