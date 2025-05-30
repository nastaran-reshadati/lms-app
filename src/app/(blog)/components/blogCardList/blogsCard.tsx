/** @format */

import { Badge } from "@/app/_components/badge/badge";
import { IconClock, IconComment, IconEye } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { BlogSummary } from "@/types/blog-summary-interface";
import Image from "next/image";
import Link from "next/link";

export const BlogCard: React.FC<BlogSummary> = ({
  title,
  slug,
  postDate,
  thumbnailUrl,
  studyTime,
  isNew,
  numberOfViews,
  author,
  numberOfComments,
  summary,
  category,
}) => {
  return (
    <div className="card">
      <figure>
        <Image src={thumbnailUrl} alt={title} width={550} height={327} />
      </figure>
      <Link href={`blog/${slug}`} className="card-title">
        {title}
      </Link>

      <div className="mt-2 flex justify-between gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{author}</Badge>
        <Badge variant="accent">{postDate}</Badge>
      </div>

      <div className="card-footer flex justify-between">
        <div>
          <Badge variant="accent">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <div>زمان مطالعه : {studyTime}</div>
      </div>
      {/* a<div className="card-body">
        <Link href={`/course/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between">
          <Badge variant="warning">
            <IconClock width={20} height={20} />
            {duration}
          </Badge>

          <Price price={basePrice} size="small" />
        </div>
      </div>

      <Link
        className="card-footer animated-icon justify-center"
        href={`/course/${slug}`}
      >
        مشاهده جزئیات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link> */}
    </div>
  );
};
