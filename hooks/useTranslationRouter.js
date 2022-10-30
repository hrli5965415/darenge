import { useRouter } from "next/router";
import { ZH_CN, ZH_TW } from "../constants/constant";

export const useTranslationRouter = () => {
  const TW = {
    HOME_PAGE: "🏡 首頁",
    TUTORIAL: "📜 入門文件",
    VIDEOS: "📺 影片專區",
    HOME_PAGE_TITLE: "這裡是一個可以讓你學習程式技術的地方",
    START_LEARNING: "開始學習",
  };
  const CN = {
    HOME_PAGE: "🏡 首页",
    TUTORIAL: "📜 入门文档",
    VIDEOS: "📺 视频专区",
    HOME_PAGE_TITLE: "这里是一个可以让你学习编程技术的地方",
    START_LEARNING: "开始学习",
  };

  let langConst = {};

  const router = useRouter();

  if (router.locale === ZH_TW) {
    langConst = TW;
  } else if (router.locale === ZH_CN) {
    langConst = CN;
  }

  return { router, langConst };
};
