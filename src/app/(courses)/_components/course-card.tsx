/** @format */

import { Badge } from "@/app/_components/badge/badge";
import { IconArrowLeftFill, IconClock } from "@/app/_components/icons/icons";
import { Price } from "@/app/_components/price/price";
import { CourrseSummary } from "@/types/course-summary-interface";
import Image from "next/image";
import Link from "next/link";

export type CourseCardProps = CourrseSummary & {};
export const CourseCard: React.FC<CourseCardProps> = ({
  coverImageId,
  title,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}) => {
  return (
    <div className="card">
      <figure>
        <Image
          src={`https://api.classbon.com/api/picture/${coverImageId!}`}
          alt={title}
          width={550}
          height={327}
        />
      </figure>
      <div className="mt-2 flex gap-2 font-semibold dark:text-info px-3 py-2">
        <Badge variant="info">{recordStatus}</Badge>
        <Badge variant="accent">{level}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/courses/${slug}`} className="card-title">
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
        href={`/courses/${slug}`}
      >
        مشاهده جزئیات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};
