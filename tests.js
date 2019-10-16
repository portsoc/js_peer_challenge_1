QUnit.config.reorder = false;


// 1. Word Filter
// Write a function called `cleanUp` that, given a long string, breaks it up
// at spaces and removes occurrences of the following words:
// `and`, `the`, `of`, `it`, `flippin` and `rats`
QUnit.test("Word Filter",
  function (assert) {
    assert.strictEqual(
      typeof cleanUp,
      "function",
      "Create function called cleanUp."
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


// 2. Trim-N
// Write a function called `trimmer` that accepts a string and a
// value `n`, and returns a string that has the given string with
// `n` characters removed from the end of it.
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


// 3. Flipper
// Write a function called `flipper' that accepts a number
// and returns the number that has the same digits but in
// reverse.
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
      "The number 12345 should return 54321."
    );
    assert.strictEqual(
      flipper(1000),
      1,
      "The number 1000 should return 1."
    );
  }
);


// 4. Count the Spaces
// Write a function called `spaceCounter`
// that accepts a string and returns the count
// of spaces in that string.
QUnit.test("Count the Spaces",
  function (assert) {
    assert.strictEqual(
      typeof spaceCounter,
      "function",
      "Write a function called spaceCounter."
    );
    assert.strictEqual(
      spaceCounter("rich is taller than jacek"),
      4,
      "Should count spaces between words."
    );
    assert.strictEqual(
      spaceCounter("many spaces        "),
      9,
      "Should count spaces at the end."
    );
  }
);


// 5. Capital Nth
// Write a function called `capitalizer` that accepts a long string and
// a number `n`; it returns a long string where every `n`th word has its first
// character capitalized.
QUnit.test("Capital Nth",
  function (assert) {
    assert.strictEqual(
      typeof capitalizer,
      "function",
      "Write a function called capitalizer."
    );
    assert.deepEqual(
      capitalizer("and jacek is prettier than matt", 2),
      "and Jacek is Prettier than Matt"
    );
  }
);



// 6. Halver
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
      "Write a function called halver."
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
    );
  }
);


// 7. Character Filter
// Write a function called `charFilter` that accepts an array of strings and
// a character, and returns an array of strings with all occurrences of the
// given character removed.
QUnit.test("Character Filter",
  function (assert) {
    assert.strictEqual(
      typeof charFilter,
      "function",
      "Write a function called charFilter."
    );
    assert.deepEqual(
      charFilter(["bananas"], "a"),
      ["bnns"]
    );
    assert.deepEqual(
      charFilter(["smorgasbord", "for both!"], "o"),
      ["smrgasbrd", "fr bth!"]
    );
  }
);








// 8. Pig Latin
// Write a function called `toPigLatin` that accepts a long string and turns
// every word into its pig-latin version.  To translate a word, remove the
// beginning up to the first consonant, then append what is removed at the
// end of the word, followed by `"ay"`.
QUnit.test("Pig Latin",
  function (assert) {
    assert.strictEqual(
      typeof toPigLatin,
      "function",
      "Write a function called toPigLatin."
    );
    assert.deepEqual(
      toPigLatin("pig latin ahoy"),
      "igpay atinlay oyahay"
    );
  }
);



// 9. Character Counter
// Write a function called `counter` that accepts a string and counts the
// occurrence of every character, returning the result as an object.
QUnit.test("Character Counter",
  function (assert) {
    assert.strictEqual(
      typeof counter,
      "function",
      "Write a function called counter."
    );
    assert.deepEqual(
      counter ("hello"),
      { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }
    );
    assert.deepEqual(
      counter ("jacek has long hair"),
      { a: 3, c: 1, e: 1, g: 1, h: 2, i: 1, j: 1, k: 1, l: 1, n: 1,
        o: 1, r: 1, s: 1, ' ': 3 },
      "it should count spaces as well"
    );
  }
);





// 10. Chain Compressor
// Write a function called `compressor` that takes an array of strings and
// returns an array where every string has all the occurrences of the last
// letter from the preceeding string removed (the first string remains intact)
QUnit.test("Chain Compressor",
  function (assert) {
    assert.strictEqual(
      typeof compressor,
      "function",
      "Write a function called compressor."
    );
    assert.deepEqual(
      compressor(["the", "elephant", "tacitly", "yoyoed"]),
      ["the", "lphant", "acily", "ooed"]
    );
    assert.deepEqual(
      compressor(["jack", "smacked", "dennis"]),
      ["jack", "smaced", "ennis"]
    );
    assert.deepEqual(
      compressor(["they", "they", "they", "they"]),
      ["they", "the", "the", "the"]
    );
  }
);
