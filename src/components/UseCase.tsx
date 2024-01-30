import { useState } from "react";
import PrettyCode from "./PrettyCode";
import RightArrowRound from "./RightArrowRound";

interface Props {
  title: string;
  code: string;
  link: string; // External link
  description: string;
}

export default function UseCase({ title, code, link, description }: Props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="flex flex-col gap-5 lg:gap-[1.875rem]">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center">
        <h3 className="text-h2 text-app-white lg:text-h1">{title}</h3>
        <a
          className="flex items-center gap-medium rounded-[2.5rem] pl-[15px] pr-medium h-[50px] border border-app-white w-fit text-app-white transition-colors hover:border-app-main hover:text-app-main"
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <span className="text-t16">View use case in docs</span>
          <RightArrowRound fill={isHovering ? "main" : "white"} />
        </a>
      </div>
      <PrettyCode className="h-[26.5rem] lg:w-[48.75rem]" language="solidity" code={code} />
      <span className="text-t14 text-app-white lg:mt-[0.1875rem]">{description}</span>
    </div>
  );
}
