

// import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StarIcon from "../../components/StarIcon";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { MdDelete } from 'react-icons/md';
import 'react-quill/dist/quill.snow.css';
import styles from "../technology/index.module.css";
import { MdEdit } from 'react-icons/md';
import PostTitle from "@/components/postTitle";
import CustomEditor from "@/components/textEditor";
import dynamic from 'next/dynamic';
import { removeHtmlTags } from '@/components/textEditor';
import Link from "next/link";





const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});


export default function TechPostDetails() {

  const router = useRouter();
  const { id } = router.query;
  console.log("ROUTER", id)
  const [blogPost, setBlogPost] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
  const [titleData, setTitleData] = useState('');
  const [contentData, setContentData] = useState('');



  useEffect(() => {

    // Fetch data from your API
    if (id) {
      // Fetch data from your API
      fetch(`/api/posts/read/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setBlogPost(data);
          setTitleData(data.title);
          setContentData(data.content);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

  const handleDeleteClick = async () => {
    try {
      // Send a DELETE request to the server
      const response = await fetch(`/api/posts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // The card was successfully deleted
        console.log('Card deleted successfully');

        // Navigate to the homepage
        setIsDeleted(true);

        // You can perform further actions here, e.g., update your UI
      } else {
        // Handle errors, e.g., show an error message to the user
        console.error('Failed to delete card');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error deleting card:', error);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);

  };



  const handleSaveClick = async () => {
    try {
      // Send a PUT request to update the card data
      const response = await fetch(`/api/posts/update/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          title: titleData,
          content: removeHtmlTags(contentData),
        }), // Send the updated data
      });

      if (response.ok) {
        // The card was successfully updated
        console.log('Card updated successfully');

        setIsEditing(false);
        setIsEdited(true);

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
  }


  return (
    isDeleted ?
      (
        <>
          <Navbar />
          <div className="flex flex-col justify-center items-center mt-12">
            <div className="flex justify-center w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg bg-teal-500">

              <p className="text-white">This post has been deleted successfully</p>

            </div>
            <Link href="/technology">
              <button className="mt-7 bg-white text-teal-500 hover:bg-teal-500 hover:text-white border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors"
              >Go Back</button>
            </Link>
          </div>
        </>
      )
      :

      isEditing ?
        (
          <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg">

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
                      // router.push('/');
                    }}

                    className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        )

        :
        isEdited ?
          (
            <>
            <Navbar />
            <div className="flex flex-col justify-center items-center h-screen">
              <div className="flex justify-center w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg bg-teal-500">

                <p className="text-white">Your post has been Edited successfully</p>

              </div>
              <Link href={{ pathname: '/technology', query: { id: id } }}>
              <button className="mt-7 bg-white text-teal-500 hover:bg-teal-500 hover:text-white border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors"
              >Go Back</button>
              </Link>
              </div >
              </>
          )
          :
          (
            <div className="min-h-screen">
              <Navbar className="bg-gray-100" />
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 sm:py-8 md:py-10 lg:py-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-2">
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">

                        <div className="px-6 py-8">
                          <div className="flex items-center mb-8 justify-between">
                            <div className="flex items-center">
                              <FaPlayCircle className="w-4 h-4 mr-2 text-gray-500" />
                              <p className="text-gray-500 text-sm">Listen</p>
                            </div>
                            <div className="flex items-center justify-between w-24">
                              {/* <EditHandler cardId={id} title={blogPost.title} content={blogPost.content} /> */}
                              <div>
                                <MdEdit
                                  size={28}
                                  color="lightseagreen"
                                  style={{ cursor: 'pointer' }}
                                  onClick={handleEditClick}
                                />

                              </div>

                              <div>
                                <MdDelete
                                  size={28}
                                  color="red"
                                  style={{ cursor: 'pointer' }}
                                  onClick={handleDeleteClick}
                                />
                              </div>
                            </div>
                          </div>

                          <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
                          <div className="break-words">
                            <p>{blogPost.content}</p>
                          </div>
                          <div className="flex items-center justify-start mt-7">

                            <FaTwitter className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-4" />
                            <FaFacebook className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-4" />
                            <FaLinkedin className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-4" />
                            <FaEnvelope className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-2" />

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-1">
                      <div className="bg-white rounded-lg shadow-lg px-6 py-8 border border-gray-200">
                        <span className="flex items-center">
                          <StarIcon className="w-6 h-6 mr-2 text-yellow-400" />
                          <p className="text-gray-500 text-sm italic ml-3">
                            Published -  {new Date(blogPost.createdAt).toLocaleString('default', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )
  )
}
