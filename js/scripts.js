function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++
    }
  });
  return wordCount;
}

function textOmitter(text) {
  const textArray = text.split(" ");
  const output = [];

  textArray.forEach(function(element) {
  if (element !== "gigglewater" || element !== "bushwa" || element !== "gasper" || element !== "mazuma" || element !== "sockdollager" || element !== "wurp") {
    output.push(element);  
    }
  })
  return output;
}