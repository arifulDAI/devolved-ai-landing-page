import React from "react";
import Link from "next/link";
import Image from "next/image";

type ProposalCardProps = {
  proposalTitle?: string;
  proposalImage?: any;
  proposalDescription?: string;
  proposalLink?: string;
  imageStyles?: string;
};

const ProposalCard = ({
  proposalTitle,
  proposalDescription,
  proposalLink,
  proposalImage,
  imageStyles,
}: ProposalCardProps) => {
  return (
    <article className="w-full flex flex-col my-5 p-5 mx-5 shadow-lg">
      {/* Image */}
      <Image src={proposalImage} alt="" className={imageStyles} />
      {/* Blog Title */}
      <h1 className="text-lg font-semibold text-start my-2">{proposalTitle}</h1>
      {/* Blog Description */}
      <p className="text-gray-600 text-sm text-start mb-4">
        {proposalDescription}
      </p>
      {/* Blog Link */}
      <Link
        href={""}
        rel="noopener noreferrer"
        target="_blank"
        className="text-blue-500 text-start"
      >
        Learn more
      </Link>
    </article>
  );
};

export default ProposalCard;