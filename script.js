const byteSize = (str) => {
  const encoder = new TextEncoder();
  const encodedString = encoder.encode(str);
  return encodedString.length;
};
const str = prompt("Enter some string.");
alert(byteSize(str));
