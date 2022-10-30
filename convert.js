const opencc = require("node-opencc");
const fs = require("fs");
const path = require("path");

const phrases = [
  {
    tra: "滑鼠",
    sim: "鼠標",
  },
  {
    tra: "入門文件",
    sim: "入門文檔",
  },
];
//pure function: convert TWstring and return CNstring
const convertTWtoCN = (traString) => {
  let transition = "";
  phrases.forEach((phrase) => {
    transition = traString.replaceAll([phrase.tra], [phrase.sim]);
  });
  const result = opencc.traditionalToSimplified(transition);
  return result;
};

const startTime = new Date();
console.log("converting...");

//convert TWCollection.js to CNCollection.js
const TWjsPath = path.join(__dirname, "documentation/TWCollection.js");
const CNjsPath = path.join(__dirname, "documentation/CNCollection.js");
const TWjsContent = fs.readFileSync(TWjsPath, "utf-8");
const ConvertedCNjsContent = convertTWtoCN(TWjsContent);
fs.writeFileSync(
  CNjsPath,
  ConvertedCNjsContent.replaceAll("TWCollection", "CNCollection").replaceAll(
    "TWchapterdocs",
    "CNchapterdocs"
  )
);

const TWchapterdocsPath = path.join(__dirname, "documentation/TWchapterdocs");
const CNchapterdocsPath = path.join(__dirname, "documentation/CNchapterdocs");

const TWcoursesList = fs.readdirSync(
  path.join(__dirname, "documentation/TWchapterdocs")
);

//make all the course folders from TWchapterdocs in CNchapterdocs
//convert all the chapters from TWchapterdocs in CNchapterdocs
TWcoursesList.forEach((TWcourseName) => {
  const targetCNcoursePath = path.join(CNchapterdocsPath, TWcourseName);
  if (!fs.existsSync(targetCNcoursePath)) {
    fs.mkdirSync(targetCNcoursePath);
  }

  const TWcoursePath = path.join(TWchapterdocsPath, TWcourseName);
  const TWchapterNameList = fs.readdirSync(TWcoursePath);

  TWchapterNameList.forEach((TWchapterName) => {
    const targetCNchapterPath = path.join(targetCNcoursePath, TWchapterName);
    const TWchapterPath = path.join(TWcoursePath, TWchapterName);
    const TWchapterHtmlString = fs.readFileSync(TWchapterPath, "utf-8");

    const ConvertedHtmlString = convertTWtoCN(TWchapterHtmlString);

    fs.writeFileSync(targetCNchapterPath, ConvertedHtmlString);
  });
});

const endTime = new Date();
const duration = endTime - startTime;
console.log(duration, "ms");

console.log("done converting!!");
