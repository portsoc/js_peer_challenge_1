# Peer Challenge 1

We asked students to come up with challenges for their peers to tackle.  We took the raw ideas and wrote them up into these challenges.

Enjoy.

1. Word Filter

   Write a function called `cleanUp` that, given a long string, breaks it up at spaces and removes occurrences of the following words: `and`, `the`, `of`, `it`, `flippin` and `rats`. The function returns a new string with those words removed.
   for example:

     `cleanUp("I hate these flipping rats of the seas")`

   returns

     `I hate these seas`


2. Trim-N

   Write a function called `trimmer` that accepts a string and a value `n`, and returns a string that has the given string with `n` characters removed from the end of it.  e.g.

   `trimmer("portsmouth", 6)`

   returns

   `port`


3. Flipper

   Write a function called `flipper` that accepts a number and returns the number that has the same digits but in reverse.  NB: The function may need to treat the input number as a string. e.g.

   `flipper(1234567)` will return `7654321`


4. Count the Spaces

   Write a function called `spaceCounter` that accepts a string and returns the count of spaces in that string.
   e.g.

   `spaceCounter("rich is taller than jacek")`

   will return

   `4`


5. Capital Nth

   Write a function called `capitalizer` that accepts a long string and a number `n`; it returns a long string where every `n`th word has its first character capitalized. e.g.

   `capitalizer("and jacek is prettier than matt", 2)`

   returns

   `and Jacek is Prettier than Matt`


6. Halver

   Write a function called `halver` that accepts an array or a string (the function must determine what is received) and returns an array or a string where every other item (or character) is removed – the first item/character will stay.

   `halver("hello")`

   returns

   `hlo`

   and

   `halver(["h", "e", "l", "l", "o"])`

   returns

   `["h", "l", "o"]`

   and

   `halver(["jacek", "really", "loves", "eating", "pets"])`

   returns

   `["jacek", "loves", "pets"]`


7. Character Filter

   Write a function called `charFilter` that accepts an array of strings and a character, and returns an array of strings with all occurrences of the given character removed. e.g.

   `charFilter(["bananas"], "a")`

   returns

   `["bnns"]`

   and

   `charFilter(["smorgasbord", "for both!"], "o")`

   returns

   `["smrgasbrd", "fr bth!"]`



8. Pig Latin

   Write a function called `toPigLatin` that accepts a long string and turns every word into its pig-latin version.  To translate a word, remove the beginning up to the first consonant, then append what is removed at the end of the word, followed by `"ay"`, e.g.

   `toPigLatin("pig latin ahoy")`

   returns

   `igpay atinlay oyahay`


9. Character Counter

   Write a function called `counter` that accepts a string and counts the occurrence of every character, returning the result as an object, thus:

   `counter ("hello")`

   returns

   `{ 'h': 1, 'e': 1, 'l': 2, 'o': 1 }`


10. Chain Compressor

    Write a function called `compressor` that takes an array of strings and returns an array where every string has all the occurrences of the last letter from the preceding string removed (the first string remains intact);  e.g.

    `compressor(["jack", "smacked", "dennis"])`

    returns

    `["jack", "smaced", "ennis"]`
