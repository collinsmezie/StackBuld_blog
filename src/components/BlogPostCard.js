import Link from "next/link";
import styles from "./components.module.css";


const BlogPostCard = ({ title, content, topic, id }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4">
        <p className="text-gray-700 mb-5 px-3 py-1 italic bg-gray-300 border rounded-full text-center justify-start inline-block">{topic.toUpperCase()}</p>
      </div>

      <div className="px-6 py-8">
        {/* <Link href={`/blog/${slug}`}> */}
        <h1 className="text-2xl font-bold mb-4 hover:text-teal-500 transition-colors duration-300">
          {title}
        </h1>
        {/* </Link> */}
        <p className="text-gray-700 mb-5">{content}</p>
        {/* <div className={styles.postTopic}>{author.topic}</div> */}



        <div className="flex items-center">
          <Link href={`/${topic.toLowerCase()}/${id}`}>
            <div className="bg-white text-teal-500 hover:bg-teal-500 hover:text-white border-teal-500 border hover:border-teal font-bold py-2 px-4 rounded transition-colors">Read More</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
