const fs = require("fs");
fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;

  const lines = data.toString().split("\n");

  const cleanedLines = lines.map((line) => line.replace(/\s+/g, " ").trim());

  const cleanedContent = cleanedLines.join("\n");

  fs.writeFile("sample.txt", cleanedContent, "utf-8", (err) => {
    if (err) throw err;
  });
});
