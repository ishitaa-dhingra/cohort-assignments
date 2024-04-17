const fs = require("fs");

fs.writeFile("sample.txt", "hey! sample file", (err) => {
  if (err) throw err;
});
