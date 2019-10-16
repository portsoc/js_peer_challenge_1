// 1. Word Filter

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

function isNotBanned(word) {
  const bannedWords = ["and", "the", "of", "it", "flipping", "rats"];
  for (const banned of bannedWords) {
    if (banned === word) {
      return false;
    }
  }
  return true;
}


// 2. Trim-N
function trimmer(str, n) {
  const chars = str.split('');
  const newLen = str.length - n;
  let result = "";
  for (let i=0; i<newLen; i++) {
    result += chars[i];
  }
  return result;
}


// 3. Flipper
function flipper(num) {
  const str = num.toString();
  const brk = str.split('');
  const rev = brk.reverse();
  const joined = rev.join('');
  return Number(joined);
}


// 4. Count the Spaces
function spaceCounter(sentence) {
  let count = 0;
  for (const ch of sentence) {
    if (ch === ' ') count += 1;
  }
  return count;
}


// 5. Capital Nth
function capitalizer(str, n) {
  const words = str.split(' ');
  for (let i=0; i<=words.length; i+=1) {
    if ((i+1) % n === 0) {
      words[i] = capitalizeWord(words[i]);
    }
  }
  return words.join(' ');
}

function capitalizeWord(word) {
  const firstChar = word[0];
  const remainder = word.substring(1);
  return firstChar.toUpperCase() + remainder;
}


// 6. Halver
function halver(input) {
  let work;
  let result = [];
  if (typeof input === 'string') {
    work = input.split('');
  } else {
    work = input;
  }

  for (let i=0; i<work.length; i+=2) {
    result.push(work[i]);
  }

  if (typeof input === 'string') {
    return result.join('');
  } else {
    return result;
  }
}


// 7. Character Filter
function charFilter(arr, charToRemove) {
  const retval = [];
  for (const str of arr) {
    let result = '';
    for (const ch of str) {
      if (ch !== charToRemove) {
        result += ch;
      }
    }
    retval.push(result);
  }
  return retval;
}


// 8. Pig Latin
function toPigLatin(str) {
  const words = str.split(' ');
  for (let i=0; i<words.length; i+=1) {
    const w = words[i];
    let firstConsonantIndex = findConsonant(w);
    if (firstConsonantIndex !== -1) {
      // found a consonant
      const upToConsonant = w.substring(0, firstConsonantIndex+1);
      const rest = w.substring(firstConsonantIndex+1);
      words[i] = rest + upToConsonant + 'ay';
    } else {
      // no consonant found, just adding 'ay'
      words[i] = w + 'ay';
    }
  }
  return words.join(' ');
}

// returns the index in the given string where there is a consonant
// or -1 if there is no consonant
function findConsonant(str) {
  for (let i=0; i<=str.length; i+=1) {
    if (!isVowel(str[i])) {
      return i;
    }
  }
  return -1;
}

function isVowel(ch) {
  return ['a', 'e', 'i', 'o', 'u'].includes(ch.toLowerCase());
}


// 9. Character Counter
function counter(str) {
  const chars = str.split('');
  const counts = {};
  for (const ch of chars) {
    if (counts[ch] == null) {
      counts[ch] = 1;
    } else {
      counts[ch] += 1;
    }
  }
  return counts;
}


// 10. Chain Compressor
function compressor(words) {
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
  return result;
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
