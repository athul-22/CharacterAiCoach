"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { Blog as BlogType } from "@/types/blog";
import BlogPopup from "./BlogPopup";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  const handleBlogClick = (blog: BlogType) => {
    setSelectedBlog(blog);
    // Disable body scroll when popup is open
    document.body.style.overflow = "hidden";
  };

  const handleClosePopup = () => {
    setSelectedBlog(null);
    // Re-enable body scroll when popup is closed
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {/* <!-- ===== Blog Start ===== --> */}
      <section id="blog" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <div className="mb-4 inline-block rounded-full bg-zumthor px-4.5 py-1.5 dark:border dark:border-strokedark dark:bg-blacksection">
              <span className="text-sectiontitle font-medium text-black dark:text-white">
                Latest Insights
              </span>
            </div>
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
              Workplace Well-Being and Performance
            </h2>
            <p className="mx-auto md:w-4/5 xl:w-3/5">
              Discover how mental well-being impacts business success and how AI-powered coaching is transforming workplace support.
            </p>
          </div>
          {/* <!-- Section Title End --> */}

          <div className="mt-15 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 xl:mt-23.5 xl:gap-12.5">
            {/* <!-- Blog Item --> */}
            {BlogData.map((blog, key) => (
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: key * 0.2 }}
                viewport={{ once: true }}
                className="animate_top"
                key={key}
              >
                <BlogItem blog={blog} onClick={() => handleBlogClick(blog)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog End ===== --> */}

      {/* Blog Popup */}
      <BlogPopup blog={selectedBlog} onClose={handleClosePopup} />
    </>
  );
};

export default Blog;
