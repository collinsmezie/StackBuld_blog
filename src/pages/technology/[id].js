// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// import { createClient } from "contentful";
// import StarIcon from "../../components/StarIcon";
// import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaCheckCircle, FaPlayCircle} from 'react-icons/fa';
// import Image from "next/image";


// export async function getStaticPaths() {
//   const client = createClient({
//     space: "vwy0ghuk1nr5",
//     accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
//   });

//   const response = await client.getEntries({
//     content_type: "topic",
//     "fields.name": "TECHNOLOGY",
//   });

//   const { fields: { post } } = response.items[0];

//   const paths = post.map((post) => ({params: { id: post.sys.id },}));
//   // console.log('paths',paths);
//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const client = createClient({
//     space: "vwy0ghuk1nr5",
//     accessToken: "LylgR44z0y0S2VtFEMyOYXxZEm8dcucaMVegFQP87OQ",
//   });

//   const response = await client.getEntries({
//     content_type: "blogPost",
//     "sys.id": params.id,
//   });

//   const post = response.items[0];

//   return {
//     props: {
//       post,
//     },
//   };
// }




// export default function TechPostDetails({ post }) {
//   const {
//     authorPhoto,
//     authorName,
//     authorWebsite,
//     published,
//     postTitle,
//     postBody,
//     blogPostImage,
//   } = post.fields;

//   const { id } = post.sys;

//   return (
//     <div className="min-h-screen">
//       <Navbar className="bg-gray-100" />
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="py-6 sm:py-8 md:py-10 lg:py-12">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300">
//                 {blogPostImage && (
//                   <Image
//                     src={`https:${blogPostImage.fields.file.url}`}
//                     alt={postTitle}
//                     className="w-full object-cover object-center"
//                     width={50}
//                     height={50}
//                     layout="responsive"
//                     loading="eager"
//                   />
//                 )}
//                 <div className="px-6 py-8">
//                   <h1 className="text-3xl font-bold mb-4">{postTitle}</h1>
//                   <div className="break-words">
//                     {documentToReactComponents(postBody)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="lg:col-span-1">
//   <div className="bg-white rounded-lg shadow-lg px-6 py-8 border border-gray-200">
//     <div className="flex items-center mb-4">
//       {authorPhoto && (
//         <Image
//           src={`https:${authorPhoto.fields.file.url}`}
//           alt={authorName}
//           className="w-12 h-12 rounded-full mr-4"
//           width={50}
//           height={50}
//         />
//       )}
//       <div>
//         <div className="flex items-center gap-2">
//         <FaCheckCircle className="w-3 h-3 text-teal-500" />
//         <p className="font-bold">{authorName}</p>
//         </div>
//         <p className="text-gray-500 text-sm">
//           Published -  {new Date(published).toLocaleString('default', { month: 'short', day: 'numeric' })}
//         </p>
//       </div>
//     </div>
//       <div className="flex items-center mb-8">
//       <FaPlayCircle className="w-4 h-4 mr-2 text-gray-500" />
//       <p className="text-gray-500 text-sm">Listen</p>
//     </div>
//     <div className="flex items-center mb-4 gap-2">
//       <StarIcon className="w-6 h-6 mr-2 text-yellow-400" />
//       <p className="text-gray-500 text-sm">Verified User</p>
//     </div>
//     <div className="flex items-center justify-around mb-4">

//       <FaTwitter className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-2" />
//       <FaFacebook className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-2" />
//       <FaLinkedin className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-2" />
//       <FaEnvelope className="w-5 h-5 text-gray-500 hover:text-blue-500 mr-2" />

//     </div>
//     <div className="flex items-center justify-center">
//       <button className="bg-teal-500 text-white hover:bg-white hover:text-teal-500 border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors">
//         Follow {authorName}
//       </button>
//     </div>
//   </div>
// </div>

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }



// import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import StarIcon from "../../components/StarIcon";
import { FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaCheckCircle, FaPlayCircle } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';







export default function TechPostDetails() {

  const router = useRouter();
  const { id } = router.query;
  const [blogPost, setBlogPost] = useState([]);

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

  

  return (
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
                    <button className="bg-teal-500 text-white hover:bg-white hover:text-teal-500 border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors">
                      Follow
                    </button>
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
