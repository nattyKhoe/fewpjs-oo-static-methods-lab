class Formatter {
  //add static methods here
  static capitalize(word){
    let wordSpread  = word.split('');
    wordSpread[0] = wordSpread[0].toUpperCase();
    return wordSpread.join('');
  }

  static sanitize(word){
  var textArr = word.replace(/[*+!@#[$%%^&:"\|/{_}();<>,.?\r\n]/g, '');
  return textArr;

  }

  static titleize(sentence){
    let words = sentence.split(" ");
    words[0] = this.capitalize(words[0]);
    for (let i = 1; i<words.length; i++){
      if (words[i] === "the"||words[i] =="a"||words[i] ==="an" ||words[i]==="but" || words [i] === "of" || words[i]
      ==="and" || words[i] === "for" || words[i] ==="at" ||words[i] ==="by" || words[i] === "from") {
      words[i] = words[i]
      } else {
        words[i]= this.capitalize(words[i]);
      }
  }

  return words.join(" ");
}
}
