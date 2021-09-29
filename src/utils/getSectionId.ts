const getSectionId = (sectionName: string) => {
  const arr = sectionName.split(" ");
  const arrLen = arr.length;
  let id = arr[0].toLowerCase();
  let maxLen = arr[0].length;
  for (let i = 1; i < arrLen; i++) {
    if (arr[i].length > maxLen) {
      maxLen = arr[i].length;
      id = arr[i].toLowerCase();
    }
  }
  return id;
};

export default getSectionId;
