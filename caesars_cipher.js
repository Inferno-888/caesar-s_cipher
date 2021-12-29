function rot13(str) {

  const ENCODING_ARR = [["A", "N"], ["B", "O"], ["C", "P"], ["D", "Q"], ["E", "R"], ["F", "S"], ["G", "T"], ["H", "U"], ["I", "V"], ["J", "W"], ["K", "X"], ["L", "Y"], ["M", "Z"], ["N", "A"], ["O", "B"], ["P", "C"], ["Q", "D"], ["R", "E"], ["S", "F"], ["T", "G"], ["U", "H"], ["V", "I"], ["W", "J"], ["X", "K"], ["Y", "L"], ["Z", "M"]];

  let words = str.split(" ");

  for(let i = 0; i < words.length; i++) {
    words[i] = words[i].split("");
  }

  function changeToCode(arr) {
    let letterIndex = 0;
    while(letterIndex < arr.length) {
      for(let i = 0; i < ENCODING_ARR.length; i++) {
        if(arr[letterIndex] === ENCODING_ARR[i][0]) {
          arr[letterIndex] = ENCODING_ARR[i][1];
          break;
        }
      }
      letterIndex++;
    }
  }

  for(let i = 0; i < words.length; i++) {
    changeToCode(words[i]);
  }

  for(let i = 0; i < words.length; i++) {
    words[i] = words[i].join("");
  }

  return words.join(" ");
  
}
