
	const byteSize = (str) => {
  let totalBytes = 0;
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode <= 0x7f) {
      totalBytes += 1; // ASCII character
    } else if (charCode <= 0x7ff) {
      totalBytes += 2; // 2-byte character
    } else if (charCode <= 0xffff) {
      totalBytes += 3; // 3-byte character
    } else {
      totalBytes += 4; // 4-byte character
    }
  }
  return totalBytes;


};

// Do not change th
const str = prmpt("Enter some string.");
alert(byteSize(str));
