import fs from "fs";
import path from "path";

const getDocPath = (courseName, chapterName) => {
  const lastIndexNum =
    path.dirname(__dirname).indexOf("/my-app/") + "/my-app/".length;
  const parentPath = path.dirname(__dirname).slice(0, lastIndexNum);
  const fullPath = path.join(
    parentPath,
    "/documentation/TWchapterdocs/",
    courseName,
    chapterName
  );
  return fullPath;
};

const dumpHtmlDoc = (inputCollection) => {
  let outPutCollection = inputCollection;

  inputCollection.forEach((course) => {
    let courseUrl = course.courseUrl;

    const chapterList = course["chapters"];
    chapterList.forEach((chapter) => {
      const docPath = getDocPath(courseUrl, `${chapter.chapterUrl}.html`);

      if (!fs.existsSync(docPath)) {
        fs.writeFileSync(docPath, `<h1>${chapter["chapterUrl"]}</h1>`);
        chapter.htmlDoc = fs.readFileSync(docPath, "utf8");
      } else {
        chapter.htmlDoc = fs.readFileSync(docPath, "utf8");
      }
    });
  });

  return inputCollection;
};

const TWRawCollection = [
  {
    chapterGroups: [
      { groupName: "HTML基礎", groupEmoji: "🍰" },
      { groupName: "HTML結構", groupEmoji: "🏢" },
      { groupName: "更多HTML標籤", groupEmoji: "🎂" },
      { groupName: "HTML semantic", groupEmoji: "🍎" },
    ],
    courseName: "Html入門文件",
    courseUrl: "html-tutorial",
    courseID: "hYdB_uuWHj",
    courseIconPath: "/html.svg",
    chapters: [
      {
        chapterGroup: "HTML基礎",
        chapterDoc:
          '<h1>Getting Started with Redux Toolkit</h1>\n    <h2 id="purpose">Purpose\n        <a href="#purpose" class="hashtag">#</a>\n    </h2>\n    <p>The <strong>Redux Toolkit</strong> package is intended to be the standard way \n       to write <a>Redux</a> logic. It was originally created to help address three common concerns about Redux:\n    </p>\n    <ul>\n        <li>"Configuring a Redux store is too complicated"</li>\n        <li>"I have to add a lot of packages to get Redux to do anything useful"</li>\n        <li>"Redux requires too much boilerplate code"</li>\n    </ul>\n    <p>\n        We can\'t solve every use case, but in the spirit of <a>create-react-app</a>, \n        we can try to provide some tools that abstract over the setup process \n        and handle the most common use cases, as well as include some useful utilities \n        that will let the user simplify their application code.\n    </p>\n    <p>\n        Redux Toolkit also includes a powerful data fetching and caching capability \n        that we\'ve dubbed <a>"RTK Query"</a>. It\'s included in the package as a separate set of entry \n        points. It\'s optional, but can eliminate the need to hand-write data fetching logic yourself.\n    </p>\n    <p>\n        <strong>These tools should be beneficial to all Redux users. </strong>Whether you\'re a brand \n        new Redux user setting up your first project, or an experienced user who wants to \n        simplify an existing application, <strong>Redux Toolkit </strong>can help you make your Redux code better.\n    </p>',
        chapterName: "什麼是HTML",
        chapterUrl: "getting-started",
      },
      {
        chapterDoc:
          '    <h1>Tutorials Overview</h1>\n    <p>\n        The Redux core docs site at <a>https://redux.js.org</a> contains the primary \n        tutorials for learning Redux, including how to use Redux Toolkit and React-Redux together.\n    </p>\n    <div class="tip-box">\n        <h5>TIP</h5>\n        <p>\n            To avoid duplicating explanations between the Redux core and Redux Toolkit \n            documentation, we\'ve focused on making the Redux core docs tutorials comprehensive, \n            and point to them instead of having extended tutorials here in the Redux Toolkit docs.\n        </p>\n    </div>\n    <p>\n        See these linked tutorials to learn how to use Redux Toolkit effectively.\n    </p>\n\n    <h2 id="#redux-toolkit-quick-starts">Redux Toolkit Quick Starts \n        <a href="#redux-toolkit-quick-starts">#</a>\n    </h2>\n    <p>The <a>Redux Toolkit Quick Start tutorial</a> briefly shows how to \n        add and use Redux Toolkit in a React application.\n    </p>\n    <p><strong>If you just want the fastest way to \n        get a basic example running, read the Quick Start tutorial.\n    </strong></p>\n    <p>We also have a <a>TypeScript Quick Start tutorial</a> that briefly shows how to \n        set up and use TypeScript with Redux Toolkit and React-Redux.\n    </p>',
        chapterGroup: "HTML基礎",
        chapterName: "設定開發環境",
        chapterUrl: "setting-up-environment",
      },
      {
        chapterDoc: "<h1>第一行html</h1>",
        chapterGroup: "HTML基礎",
        chapterName: "第一行HTML",
        chapterUrl: "hellow-world",
      },
      {
        chapterDoc: "<h1>第一行html</h1>",
        chapterGroup: "HTML基礎",
        chapterName: "HTML基本知識",
        chapterUrl: "html-basic",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML基礎",
        chapterName: "a標籤與相對路徑",
        chapterUrl: "a-tag-and-relative-path",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML基礎",
        chapterName: "img標籤",
        chapterUrl: "img-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML結構",
        chapterName: "DOCTYPE",
        chapterUrl: "doctype",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML結構",
        chapterName: "根元素與body標籤",
        chapterUrl: "root-element-and-body-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML結構",
        chapterName: "巢狀結構",
        chapterUrl: "nested-structure",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML結構",
        chapterName: "head標籤",
        chapterUrl: "head-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "HTML結構",
        chapterName: "meta標籤與SEO",
        chapterUrl: "meta-tag-and-seo",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "Chrome開發者工具",
        chapterUrl: "chrome-dev-tool",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "VScode插件",
        chapterUrl: "vscode-extensions",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "strong與em標籤",
        chapterUrl: "strong-tag-and-em-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "CSS初始值",
        chapterUrl: "initial-css",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "heading標籤(h1-h6)",
        chapterUrl: "heading-tags",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "HTML註解",
        chapterUrl: "html-comment",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "HTML列表",
        chapterUrl: "html-list",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "div標籤",
        chapterUrl: "div-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "input與textarea標籤",
        chapterUrl: "input-tag-and-textarea-tag",
      },
      {
        chapterDoc: "",
        chapterGroup: "更多HTML標籤",
        chapterName: "form",
        chapterUrl: "form",
      },
    ],
  },
];

export let TWCollection = dumpHtmlDoc(TWRawCollection);
