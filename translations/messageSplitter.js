const fs = require("fs");
const { languageFiles } = require("./translation-files");
const langFilesArray = languageFiles.flat();

const jsFileNames = fs
  .readdirSync("./translation-files")
  .map((file) => file.slice(0, -3))
  .filter((file) => file !== "index");

const getEnglishTranslation = (messages) => {
  if (messages.some((msg) => !msg.code || !msg.tr[0] || !msg.tr[0].v)) {
    console.log("Please add correct english translation format!");
    return;
  } else {
    const formattedMessages = messages.map((msg) => {
      const msgCode = msg.code.toString();
      const translation = msg.tr[0].v;
      return [msgCode, translation];
    });
    return Object.fromEntries(formattedMessages);
  }
};

const getItalianTranslation = (messages) => {
  if (messages.some((msg) => !msg.code || !msg.tr[2] || !msg.tr[2].v)) {
    console.log("Please add correct italian translation format!");
    return;
  } else {
    const formattedMessages = messages.map((msg) => {
      const msgCode = msg.code.toString();
      const translation = msg.tr[2].v;
      return [msgCode, translation];
    });
    return Object.fromEntries(formattedMessages);
  }
};

const getAlbanianTranslation = (messages) => {
  if (messages.some((msg) => !msg.code || !msg.tr[1] || !msg.tr[1].v)) {
    console.log("Please add correct albanian translation format!");
    return;
  } else {
    const formattedMessages = messages.map((msg) => {
      const msgCode = msg.code.toString();
      const translation = msg.tr[1].v;
      return [msgCode, translation];
    });
    return Object.fromEntries(formattedMessages);
  }
};

const getMessages = (messages) => {
  if (messages.some((msg) => !msg.code || !msg.tr[0] || !msg.tr[0].v)) {
    console.log("Please add correct translation format!");
    return;
  } else {
    const msgCodesArray = messages.map((obj) => {
      const title = obj.code.split(".");
      const firstElement = title[0];
      const sliced = title
        .slice(1)
        .map((str) => str[0].toUpperCase() + str.slice(1));
      const cammelCase = firstElement + sliced.join("");

      return `export const ${cammelCase} = '${obj.code}'; `;
    });

    const msgCodes = msgCodesArray.join("\r\n");

    fs.writeFile(`../src/messages/i18nMessages.ts`, msgCodes, (err) => {
      if (err) {
        console.log("Error writing file", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  }
};

// Creates translation files according to keywords.
const splitJsonByKeyword = (array, translation, destinationPath) => {
  if (!translation)
    return console.log("Please check .js translation files formatting!");
  const objectEntries = Object.entries(translation);
  array.forEach((string) => {
    const filtered = objectEntries.filter((entry) =>
      entry[0].includes(`text.${string}`)
    );

    const obj = Object.fromEntries(filtered);

    const stringifiedObj = JSON.stringify(obj, null, 2);

    const fileName = string.includes(".") ? string.replace(".", "-") : string;

    fs.writeFile(
      `${destinationPath}/${fileName}.json`,
      stringifiedObj,
      (err) => {
        if (err) {
          console.log("Error writing file", err);
        } else {
          console.log("Successfully wrote file");
        }
      }
    );
  });
};

// Creates common translation.json file
const createJsonTranslationCommon = (array, translation, destinationPath) => {
  if (!translation) return console.log("Please add translation correctly!");
  const objectEntries = Object.entries(translation);
  const common = objectEntries.filter((entry) => {
    return !array.some((str) => entry[0].includes(`text.${str}`));
  });

  const obj = Object.fromEntries(common);

  const stringifiedObj = JSON.stringify(obj, null, 2);

  fs.writeFile(`${destinationPath}/common.json`, stringifiedObj, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
};

const englishTranslation = getEnglishTranslation(langFilesArray);
const italianTranslation = getItalianTranslation(langFilesArray);
const albanianTranslation = getAlbanianTranslation(langFilesArray);

const enDestinationPath = "../locales/en";
const itDestinationPath = "../locales/it";
const alDestinationPath = "../locales/al";

splitJsonByKeyword(jsFileNames, englishTranslation, enDestinationPath);
splitJsonByKeyword(jsFileNames, italianTranslation, itDestinationPath);
splitJsonByKeyword(jsFileNames, albanianTranslation, alDestinationPath);
createJsonTranslationCommon(jsFileNames, italianTranslation, itDestinationPath);
createJsonTranslationCommon(jsFileNames, englishTranslation, enDestinationPath);
createJsonTranslationCommon(
  jsFileNames,
  albanianTranslation,
  alDestinationPath
);
getMessages(langFilesArray);
