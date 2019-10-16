QUnit.config.reorder = false;

QUnit.test("Word Filter",
  function (assert) {
    assert.strictEqual(
      typeof cleanUp,
      "function",
      "Create a cleanUp function."
    );
    assert.strictEqual(
      cleanUp("I hate these flipping rats of the seas"),
      "I hate these seas",
      '"flipping", "rats", "of" and "the" should all be removed'
    );
    assert.strictEqual(
      cleanUp("Oh rats"),
      "Oh",
      '"Oh rats" should become "Oh"'
    );
  }
);


// that takes an array of strings and returns an array where every
// string has all the occurrences of the last letter from the
// preceeding string removed (the first string remains intact); e.g.
QUnit.test("Chain Compressor",
  function (assert) {
    assert.strictEqual(
      typeof compressor,
      "function",
      "Write a function called compressor."
    );
    assert.strictEqual(
      compressor("the elephant tacitly yoyoed"),
      "the lphant acily ooed"
    );
  }
);


// Write a function called `trimmer` that accepts a string and a
// value `n`, and returns a string that has the given string with
// `n` characters removed from the end of it.  e.g. 
QUnit.test("Trimmer",
  function (assert) {
    assert.strictEqual(
      typeof trimmer,
      "function",
      "Write a function called trimmer."
    );
    assert.strictEqual(
      trimmer("portsmouth", 6),
      "port"
    );
    assert.strictEqual(
      trimmer("port", 4),
      ""
    );
    assert.strictEqual(
      trimmer("port", 3),
      "p"
    );
  }
);



// Write a function called `flipper' that accepts a number
// and returns the number that has the same digits but in
// reverse.NB: The function needs to treat the input number
// as a string.e.g.
QUnit.test("Flipper",
  function (assert) {
    assert.strictEqual(
      typeof flipper,
      "function",
      "Write a function called flipper."
    );
    assert.strictEqual(
      flipper(12345),
      54321,
      "The number 12345 shoudl return 54321."
    );
  }
);


// Write a function called `spaceCounter`
// that accepts a string and returns the count
// of spaces in that string. e.g.
QUnit.test("Count the Space",
  function (assert) {
    assert.strictEqual(
      typeof spaceCounter,
      "function",
      "Write a function called spaceCounter."
    );
    assert.strictEqual(
      spaceCounter("rich is taller than jacek"),
      4,
      "Shoud have 4 spaces."
    );
  }
);




// Write a function called `halver` that accepts
// an array or a string (the function must determine
// what is received) and returns an array or a string
// where every other item(or character) is removed.
// The first item / character will always stay.
QUnit.test("Halver",
  function (assert) {
    assert.strictEqual(
      typeof halver,
      "function",
      "Write a function called spaceCounter."
    );
    assert.strictEqual(
      halver("hello"),
      `hlo`,
      "A halved string 'hello' should be 'hlo' (because the first character always stays)."
    );
    assert.deepEqual(
      halver(["h", "e", "l", "l", "o"]),
      ["h", "l", "o"],
      "A halved array hello should return a 3 character array contianing h, l and o)."
    );
    assert.deepEqual(
      halver(["jacek", "really", "loves", "eating", "pets"]),
      ["jacek", "loves", "pets"],
      "really and eating should be removed"
    );
  }
);











// 5. Capital Nth

// Write a
// function called `capitalizer`
// that accepts a long string and a number `n`;
// it returns a long string where every `n`
// th word has its first character capitalized.e.g.

// `capitalizer("jacek is prettier than matt", 2)`

// returns

//   `jacek Is prettier Than matt`


// 7. Character Filter

// Write a
// function called `charFilter`
// that accepts an array of strings and a character, and returns an array of strings with all occurrences of the given character removed.e.g.

// `charFilter("bananas", "a")`

// returns

//   `bnns`

// and

//   `charFilter("ermahgerd gersberms!", "e")`

// returns

//   `rmahgrd grsbrms!`


// 8. Pig Latin

// Write a
// function called `toPigLatin`
// that accepts a long string and turns every word into its pig - latin version.To translate a word, remove the beginning up to the first consonant, then append what is removed at the end of the word, followed by `"ay"`, e.g.

// `toPigLatin("pig latin ahoy")`

// returns

//   `igpay atinlay oyahey`


// 9. Character Counter

// Write a
// function called `counter`
// that accepts a string and counts the occurrence of every character, returning the result as an object, thus:

//   `counter ("hello")`

// returns

//   `{ 'h': 1, 'e': 1, 'l': 2, 'o': 1 }`


// 10. Chain Compressor

// Write a
// function called `compressor`
// that takes an array of strings and returns an array where every string has all the occurrences of the last letter from the preceding string removed(the first string remains intact);
// e.g.

// `compressor(["jack", "smacked", "dennis"])`

// returns

//   `["jack", "smaced", "ennis"]`