/** @format */

import { BlogSummary } from "@/types/blog-summary-interface";
import { BlogCard } from "./blogsCard";

type BlogCardListProps = {
  blogs: BlogSummary[];
};
export const BlogCardList: React.FC<BlogCardListProps> = ({
  blogs,
}: BlogCardListProps) => {
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {blogs?.map((blog) => (
        <BlogCard key={`blogs${blog.slug}`} {...blog} />
      ))}
    </div>
  );
};
