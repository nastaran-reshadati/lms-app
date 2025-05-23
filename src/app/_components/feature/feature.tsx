/** @format */

import Image from "next/image";

export const Feature: React.FC<FeatureProps> = ({
  feature: { icon, title, description },
}) => {
  return (
    <article className="flex flex-1 flex-col justify-center items-center xl:items-start gap-y-3">
      <Image src={icon} width={52} height={52} alt="feature item" />
      <h4 className="font-bold text-xl">{title}</h4>
      <p className="max-w-md">{description}</p>
    </article>
  );
};
