

// import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import StarIcon from "../../components/StarIcon";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import EditHandler from "@/components/editHandler";
import { MdDelete } from 'react-icons/md';






export default function TechPostDetails() {

  const router = useRouter();
  const { id } = router.query;
  const [blogPost, setBlogPost] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);


  useEffect(() => {

    // Fetch data from your API
    fetch(`/api/posts/read/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogPost(data); // Assuming data is an array of blog posts
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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

        router.push('/');
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




  return (
    isDeleted ?
      (
        <>
          <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg bg-teal-500">

              <p className="text-white">This post has been deleted successfully</p>

            </div>
          </div>
        </>
      )
      :

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
                      {/* <button className="bg-teal-500 text-white hover:bg-white hover:text-teal-500 border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors">
                      Follow
                    </button> */}
                      <div className="flex items-center justify-between w-24">
                        <EditHandler cardId={id} title={blogPost.title} content={blogPost.content} />
                        {/* <TrashCan onClick={handleDeletePost} cardId={id}/> */}
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
}
