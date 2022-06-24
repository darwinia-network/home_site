import { useEffect } from "react";
import Typewriter from "../../utils/typewriter";
import { useTranslation } from "react-i18next";
import localeKeys from "../../locale/localeKeys";
import { SupportedLanguages } from "../../data/types";

const HomeTypewriter = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const typewriterElement: HTMLElement | null = document.querySelector(".typewriter-content");
    let typewriter: Typewriter | undefined;
    if (typewriterElement) {
      const currentLanguage = i18n.language as SupportedLanguages;
      typewriter = initTypewriter(typewriterElement, currentLanguage);
    }
    return () => {
      typewriter?.clean();
    };
  }, []);
  /* change this for every page */
  const fakeTitle = getFakeTitle(t(localeKeys.crossChainMessaging));
  return (
    <div className={"relative"}>
      {/* this first title is rendered just to expand the parent so that the typewriter text
       can be positioned absolute and still be seen */}
      <div className={"opacity-0"}>{fakeTitle}</div>
      <div className={"absolute left-0 right-0 top-0 bottom-0 z-10"}>
        <div className={"title-hero uppercase text-white pb-[1.25rem] pt-[3.75rem] lg:pt-0 typewriter-content"} />
      </div>
    </div>
  );
};

const getFakeTitle = (title: JSX.Element | undefined) => {
  if (!title) {
    return null;
  }
  return <div className={"title-hero uppercase text-white pb-[1.25rem] pt-[3.75rem] lg:pt-0"}>{title}</div>;
};

const initTypewriter = (typewriterElement: HTMLElement, language: SupportedLanguages) => {
  switch (language) {
    case "enUS": {
      return getEnglishTypewriter(typewriterElement);
    }
    default: {
      return getEnglishTypewriter(typewriterElement);
    }
  }
};

/* change this for every page */
const getEnglishTypewriter = (typewriterElement: HTMLElement): Typewriter => {
  const typewriter = new Typewriter(typewriterElement, { loop: true, cursor: "_" });
  typewriter
    .typeString({
      text: "Universal Cross-Chain Message Network",
    })
    .pauseFor(2000)
    .deleteChars(10)
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(1500)
    .start();
  return typewriter;
};

export default HomeTypewriter;
