function isNotBanned(word) {
  const bannedWords = ["and", "the", "of", "it", "flipping", "rats"];
  for (const banned of bannedWords) {    
    if (banned === word) {
      return false;
    }
  }
  return true;
}

function cleanUp(str) {
  const words = str.split(' ');
  let result = [];
  for (const word of words) {
    if (isNotBanned(word)) {
      result.push( word );
    }
  }
  return result.join(" ");
}

function stripCharFromWord(word, ignore) {
  const broken = word.split('');
  const result = [];
  for (const c of broken) {
    if (c!=ignore) {
      result.push(c)
    }
  }
  return result.join('');
}

function compressor(str) {
  const words = str.split(' ');
  const result = [];
  result.push(words[0]);
  for (let i=1; i<words.length; i++) {
    const word = words[i];
    const lastWord = words[i-1];
    const lastCharPosition = lastWord.length-1;
    const lastCharOfLastWord = lastWord[lastCharPosition];
    const strippedWord = stripCharFromWord(word, lastCharOfLastWord);
    result.push( strippedWord );
  }
  return result.join(" ");
}


function trimmer(str, n) {
  const chars = str.split('');
  const newLen = str.length - n;
  let result = "";
  for (let i=0; i<newLen; i++) {
    result += chars[i];
  }
  return result;
}


function flipper(num) {
  let str = num.toString();
  let brk = str.split('');
  let rev = brk.reverse();
  let joined = rev.join('');
  return Number(joined);
}


function spaceCounter(sentence) {
  return sentence.split(' ').length-1;
}