import Navbar from "../components/navbar";
import { createClient } from "contentful";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BlogPostCard from "../components/BlogPostCard";
import { useEffect, useState } from 'react';


export default function Home() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    fetch('/api/posts/read')
      .then((response) => response.json())
      .then((data) => {
        setBlogPosts(data); // Assuming data is an array of blog posts
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
  return (
    <div className="bg-white border text-black ">
      <Navbar />
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="pb-12">
          <div className="text-center">
            <h1 className="text-gray-600 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
              Latest Posts
            </h1>
          </div>
          {blogPosts.map((post) => (
            <div key={post._id} className="mb-10">
              <BlogPostCard title={post.title} content={post.content} topic={post.topic} createdAt={post.createdAt} id={post._id} />
    
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
