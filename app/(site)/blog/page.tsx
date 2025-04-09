"use client";

import { useState } from "react";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import BlogPopup from "@/components/Blog/BlogPopup";
import { Blog } from "@/types/blog";

const BlogPage = () => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const handleBlogClick = (blog: Blog) => {
    setSelectedBlog(blog);
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem 
                key={key} 
                blog={post} 
                onClick={() => handleBlogClick(post)} 
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
      
      {/* Blog Popup */}
      <BlogPopup blog={selectedBlog} onClose={handleClosePopup} />
    </>
  );
};

export default BlogPage;
