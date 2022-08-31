Describe: textOmitter()
Test: "It should return "" if the text contains one offensive word."
Code:
const text = "gigglewater";
textOmitter(text);
Expected Output: []

Describe: textOmitter()
Test: "It should return "" if the text contains two offensive word and a normal word."
Code:
const text = "gigglewater bushwa water";
textOmitter(text);
Expected Output: ["water"]

Describe: textOmitter()
Test: "It should return "" if the text contains three offensive word and a normal word."
Code:
const text = "gigglewater water bushwa gasper";
textOmitter(text);
Expected Output: ["water"]

Describe: textOmitter()
Test: "It should return "" if the text contains am empty string."
Code:
const text = "";
textOmitter(text);
Expected Output: [""]



