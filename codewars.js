function toCamelCase(str){
  for(var i = 0; i < str.length; i++) {
    if(str.charAt(i) == "-" || str.charAt(i) == "_") {
      str = replaceAt(str, i, str.charAt(i+1).toUpperCase());
      str = replaceAt(str, i+1, "");
    }
  }
  return str;
}

function replaceAt(string, index, replacement) {
  if(index > string.length-1) return string;
  return string.substring(0, index) + replacement + string.substring(index+1, string.length);
}

console.log(toCamelCase("the-warrior"));