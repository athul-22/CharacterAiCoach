"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";

interface BlogItemProps {
  blog: Blog;
  onClick: () => void;
}

const BlogItem = ({ blog, onClick }: BlogItemProps) => {
  const { mainImage, title, metadata } = blog;

  return (
    <div 
      className="group cursor-pointer rounded-lg bg-white p-4 shadow-solid-8 dark:bg-blacksection dark:shadow-none"
      onClick={onClick}
    >
      <div className="relative mb-4 overflow-hidden rounded">
        <Image
          width={401}
          height={255}
          src={mainImage}
          alt={title}
          className="h-[255px] w-full object-cover transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
        />
      </div>

      <div>
        <h4 className="mb-[10px] line-clamp-2 text-xl font-semibold text-black duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary">
          {title}
        </h4>
        <p className="line-clamp-3">{metadata}</p>
        <div className="mt-4 flex items-center gap-2 text-sm font-medium">
          <span className="text-black dark:text-white">Read more</span>
          <svg
            width="15"
            height="13"
            viewBox="0 0 15 13"
            className="fill-current"
          >
            <path
              d="M13.689 6.502L9.17 1.983C8.921 1.735 8.516 1.735 8.268 1.983C8.019 2.231 8.019 2.636 8.268 2.884L11.859 6.475L1.5 6.475C1.144 6.475 0.857 6.762 0.857 7.117C0.857 7.473 1.144 7.76 1.5 7.76L11.859 7.76L8.268 11.35C8.019 11.599 8.019 12.004 8.268 12.252C8.393 12.376 8.557 12.439 8.719 12.439C8.881 12.439 9.044 12.376 9.17 12.252L13.689 7.733C13.937 7.484 13.937 7.079 13.689 6.831C13.689 6.663 13.689 6.663 13.689 6.502Z"
              fill=""
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
