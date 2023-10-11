import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import TagIcon from "../../components/TagIcon";
import StarIcon from "../../components/StarIcon";
import styles from "./index.module.css";
import { useRouter } from 'next/router';






const TechBlogPosts = () => {

  const router = useRouter();
  const { route } = router;
  console.log("ROUTEE", route);

  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {

    // Fetch data from your API
    fetch(`/api/posts/read/topic/${route}`) 
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data); // Assuming data is an array of blog posts
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div className="mx-auto">
      <Navbar />
      <Head>
        <title>Technology Blog Posts</title>
      </Head>
      <div className={styles.topicSection}>
        <div className={styles.topic}>
          <div className="inline-block rounded-full bg-gray-200 p-1 mr-3">
            <TagIcon />
          </div>
          <h1 className={styles.tech}>TECHNOLOGY</h1>
        </div>
        <div className={styles.buttons}>
          <button className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
            Follow
          </button>
          <Link href="/editorPage">
            <div className="hover:bg-white text-teal-500 hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 hover:border-teal-500 transition-colors duration-300">
              Start writing
            </div>
          </Link>

        </div>
      </div>

      {blogPosts?.map((post) => (
        <div key={post.id} className={styles.postCard}>
          <div className={styles.profileInfo}>
            <div className={styles.nameAndDate}>
              <p className="text-gray-500 text-sm mt-0.5">
                Published on: {new Date(post.createdAt).toDateString()}
              </p>
            </div>
            <div className="ml-4 flex items-center">
              <StarIcon className="w-6 h-6 mr-2" />
              <p className="ml-4 text-gray-500 text-sm">Members only</p>
            </div>
          </div>
          <div className={styles.postSection}>
            <div className={styles.postTitleAndText}>
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <div className="max-w-4xl mb-7">
                {post.content}
              </div>
              <div className="flex items-center">
                {console.log("POST", post)}
                <Link href={`/${route}/${post._id}`}>
                  <div className={styles.readPostBtn}>Read More</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default TechBlogPosts;
