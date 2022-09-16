const fs = require("fs");
const jsFileNames = fs
  .readdirSync("./translation-files")
  .map((file) => file.slice(0, -3))
  .filter((file) => file !== "index");

const enFilePath = "../locales/en";
const itFilePath = "../locales/it";

const enJsonFileNames = fs
  .readdirSync(enFilePath)
  .map((file) => file.slice(0, -5));
const itJsonFileNames = fs
  .readdirSync(itFilePath)
  .map((file) => file.slice(0, -5));

// Create index.ts in ./translation-files
const createMessagesIndexer = (jsFileNames) => {
  const formatted = jsFileNames.map(
    (kwd) => `const ${kwd} = require("./${kwd}"); `
  );
  const stringified = formatted.join("\r\n");
  const file = `${stringified}\r\n\nexports.languageFiles = [\r\n${jsFileNames
    .map((kwd) => `${kwd}, `)
    .join("\r\n")}\r\n]`;

  fs.writeFile(`./translation-files/index.js`, file, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote index.js file");
    }
  });
};

const cleanUnusedTranslationFiles = (jsonFileNames, jsonFilePath) => {
  const unUsedFileNames = jsonFileNames.filter(
    (name) => !jsFileNames.includes(name)
  );
  if (!unUsedFileNames.length) return;

  unUsedFileNames.forEach((fileName) => {
    if (fs.existsSync(`${jsonFilePath}/${fileName}.json`)) {
      fs.unlinkSync(`${jsonFilePath}/${fileName}.json`, (err) => {
        if (err) {
          throw err;
        }

        console.log("Cleaned Files successfully.");
      });
    }
  });
};

createMessagesIndexer(jsFileNames);
cleanUnusedTranslationFiles(itJsonFileNames, itFilePath);
cleanUnusedTranslationFiles(enJsonFileNames, enFilePath);
