The **J** [programming language][0], developed in the early 1990s by [Kenneth E. Iverson][1] and [Roger Hui][2],[\[4\]][3][\[5\]][4] is a synthesis of [APL][5] (also by Iverson) and the [FP][6] and [FL][7] [function-level][8] languages created by [John Backus][9].[\[6\]][10]

To avoid repeating the APL special-character problem, J uses only the basic [ASCII][11] character set, resorting to the use of the dot and colon as _inflections_[\[7\]][12] to form short words similar to _[digraphs][13]_. Most such "primary" (or "primitive") J words serve as mathematical symbols, with the dot or colon extending the meaning of the basic characters available. Also, many characters which in other languages often must be paired (such as `[] {} "" \`\`` or `<>`) are treated by J as stand-alone words or, when inflected, as single-character roots of multi-character words.

J is a very terse [array programming language][14], and is most suited to [mathematical][15] and [statistical][16] programming, especially when performing operations on [matrices][17]. It has also been used in [extreme programming][18][\[8\]][19] and [network performance][20] analysis.[\[9\]][21]

Like the original FP/FL languages, J supports [function-level programming][22] via its _[tacit programming][23]_ features.

Unlike most languages that support [object-oriented programming][24], J's flexible hierarchical [namespace][25] scheme (where every name exists in a specific _locale_) can be effectively used as a framework for both [class-based][26] and [prototype-based][27] object-oriented programming.

Since March 2011, J is [free and open-source software][28] under the [GPLv3][29] license.[\[10\]][30][\[11\]][31][\[12\]][32] One may also purchase source for commercial use under a negotiated license.[\[13\]][33]

## Examples

J permits [point-free style][23] and [function composition][34]. Thus, its programs can be very terse and are [considered difficult to read][35] by some programmers.

The ["Hello, World!" program][36] in J is

This implementation of hello world reflects the traditional use of J -- programs are entered into a J interpreter session, and the results of expressions are displayed. It's also possible to arrange for J scripts to be executed as standalone programs. Here's how this might look on a [Unix][37] system:

Historically, APL used `/` to indicate the [fold][38], so `+/1 2 3` was equivalent to `1+2+3`. Meanwhile, division was represented with the classic mathematical division symbol (the [obelus][39], ÷), which was implemented by [overstriking][40] a minus sign and a colon (on both EBCDIC and ASCII paper [text terminals][41]). Because ASCII in general does not support overstrikes in a device-independent way, and does not include a division symbol per se, J uses % to represent division, as a visual approximation or reminder. (This illustrates something of the mnemonic character of J's tokens, and some of the quandaries imposed by the use of ASCII.)

Defining a J function named `avg` to calculate the average of a list of numbers yields:

This is a test execution of the function:

`#` counts the number of items in the array. `+/` sums the items of the array.` %` divides the sum by the number of items. Note: _avg_ is defined above using a train of three verbs (`+/`, `%`, and `#`) known as a _fork_. Specifically `(V0 V1 V2) Ny` is the same as `(V0(Ny)) V1 (V2(Ny))` which shows some of the power of J. (Here V0, V1, and V2 denote verbs and Ny denotes a noun.)

Some examples of using `avg`:

[Rank][42] is a crucial concept in J. Its significance in J is similar to the significance of `select` in [SQL][43] and of `while` in [C][44].

Implementing [quicksort][45], from the J Dictionary yields:

The following is an implementation of quicksort demonstrating [tacit programming][23]. Tacit programming involves composing functions together and not referring explicitly to any variables. J's support for _forks_ and _hooks_ dictates rules on how arguments applied to this function will be applied to its component functions.

Sorting in J is usually accomplished using the built-in (primitive) verbs `/:` (sort up) and `\:` (sort down). User-defined sorts such as quicksort, above, typically are for illustration only.

The following expression exhibits [pi][46] with n digits and demonstrates the extended precision abilities of J:

## Data types and structures

J supports three simple types:

Of these, numeric has the most variants.

One of J's numeric types is the _bit_. There are two bit values: _0_, and _1_. Also, bits can be formed into lists. For example, `1 0 1 0 1 1 0 0` is a list of eight bits. Syntactically, the J parser treats that as one word. (The space character is recognized as a word-forming character between what would otherwise be numeric words.) Lists of arbitrary length are supported.

Furthermore, J supports all the usual binary operations on these lists, such as _and_, _or_, _exclusive or_, _rotate_, _shift_, _not_, etc. For example,

Note that J also supports higher order arrays of bits---they can be formed into two-dimensional, three-dimensional, etc. arrays. The above operations perform equally well on these arrays.

Other numeric types include integer (e.g. 3, 42), floating point (3.14, 8.8e22), complex (0j1, 2.5j3e88), extended precision integer (12345678901234567890x), and (extended precision) rational fraction (1r2, 3r4). As with bits, these can be formed into lists or arbitrarily dimensioned arrays. As with bits, operations are performed on all numbers in an array.

Lists of bits can be converted to integer using the `#.` verb. Integers can be converted to lists of bits using the `#:` verb. (When parsing J, `.` (period) and `:` (colon) are word-forming characters. They are never tokens alone, unless preceded by [whitespace characters][47].)

J also supports the literal (character) type. Literals are enclosed in quotes, for example, `'a'` or `'b'`. Lists of literals are also supported using the usual convention of putting multiple characters in quotes, such as `'abcdefg'`. Typically, individual literals are 8-bits wide (ASCII), but J also supports other literals ([Unicode][48]). Numeric and boolean operations are not supported on literals, but collection-oriented operations (such as rotate) are supported.

Finally, there is a boxed data type. Typically, data is put in a box using the `<` operation (with no left argument; if there's a left argument, this would be the _less than_ operation). This is analogous to [C][44]'s `&` operation (with no left argument). However, where the result of C's `&` has reference semantics, the result of J's `<` has value semantics. In other words, < is a function and it produces a result. The result has 0 dimensions, regardless of the structure of the contained data. From the viewpoint of a J programmer, `<` _puts the data into a box_ and allows working with an array of boxes (it can be assembled with other boxes, and/or more copies can be made of the box).

The only collection type offered by J is the arbitrarily dimensioned array. Most algorithms can be expressed very concisely using operations on these arrays.

J's arrays are homogeneously typed, for example the list `1 2 3` is a list of integers despite `1` being a bit. For the most part, these sorts of type issues are transparent to programmers. Only certain specialized operations reveal differences in type. For example, the list `1.0 0.0 1.0 0.0` would be treated exactly the same, by most operations, as the list `1 0 1 0` .

J also supports sparse numeric arrays where non-zero values are stored with their indices. This is an efficient mechanism where relatively few values are non-zero.

J also supports objects and classes,[\[14\]][49] but these are an artifact of the way things are named, and are not data types. Instead, boxed literals are used to refer to objects (and classes). J data has value semantics, but objects and classes need reference semantics.

Another pseudo-type---associated with name, rather than value---is the memory mapped file.

## Documentation

J's documentation includes a [dictionary][50], with words in J identified as [nouns][51], [verbs][52], [modifiers][53], and so on. Primary words are listed in the [vocabulary][54], in which their respective [parts of speech][55] are indicated using markup. Note that verbs have two forms: [monadic][56] (arguments only on the right) and [dyadic][56] (arguments on the left and on the right). For example, in '`-1`' the hyphen is a monadic verb, and in '`3-2`' the hyphen is a dyadic verb. The monadic definition is mostly independent of the dyadic definition, regardless of whether the verb is a primitive verb or a derived verb.

## Control structures

J provides control structures [(details here)][57] similar to other procedural languages. Prominent control words in each category include:

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Kenneth_E._Iverson "Kenneth E. Iverson"
[2]: /wiki/Roger_Hui "Roger Hui"
[3]: #cite_note-4
[4]: #cite_note-5
[5]: /wiki/APL_(programming_language) "APL (programming language)"
[6]: /wiki/FP_(programming_language) "FP (programming language)"
[7]: /wiki/FL_(programming_language) "FL (programming language)"
[8]: /wiki/Function-level "Function-level"
[9]: /wiki/John_Backus "John Backus"
[10]: #cite_note-6
[11]: /wiki/ASCII "ASCII"
[12]: #cite_note-7
[13]: /wiki/Digraph_(computing) "Digraph (computing)"
[14]: /wiki/Array_programming_language "Array programming language"
[15]: /wiki/Mathematical "Mathematical"
[16]: /wiki/Statistical "Statistical"
[17]: /wiki/Matrix_(mathematics) "Matrix (mathematics)"
[18]: /wiki/Extreme_Programming "Extreme Programming"
[19]: #cite_note-8
[20]: /wiki/Network_performance "Network performance"
[21]: #cite_note-9
[22]: /wiki/Function-level_programming "Function-level programming"
[23]: /wiki/Tacit_programming "Tacit programming"
[24]: /wiki/Object-oriented_programming "Object-oriented programming"
[25]: /wiki/Namespace "Namespace"
[26]: /wiki/Class-based_programming "Class-based programming"
[27]: /wiki/Prototype-based_programming "Prototype-based programming"
[28]: /wiki/Free_and_open-source_software "Free and open-source software"
[29]: /wiki/GNU_General_Public_License "GNU General Public License"
[30]: #cite_note-j_source_download-10
[31]: #cite_note-j_gpl-11
[32]: #cite_note-12
[33]: #cite_note-j_source-13
[34]: /wiki/Function_composition_(computer_science) "Function composition (computer science)"
[35]: /wiki/Write-only_language "Write-only language"
[36]: /wiki/%22Hello,_World!%22_program ""Hello, World!" program"
[37]: /wiki/Unix "Unix"
[38]: /wiki/Fold_(higher-order_function) "Fold (higher-order function)"
[39]: /wiki/Obelus "Obelus"
[40]: /wiki/Overstrike "Overstrike"
[41]: /wiki/Text_terminal "Text terminal"
[42]: /wiki/Rank_(J_programming_language) "Rank (J programming language)"
[43]: /wiki/SQL "SQL"
[44]: /wiki/C_(programming_language) "C (programming language)"
[45]: /wiki/Quicksort "Quicksort"
[46]: /wiki/Pi "Pi"
[47]: /wiki/Whitespace_character "Whitespace character"
[48]: /wiki/Unicode "Unicode"
[49]: #cite_note-14
[50]: http://code.jsoftware.com/wiki/NuVoc
[51]: http://code.jsoftware.com/wiki/Vocabulary/Nouns
[52]: http://code.jsoftware.com/wiki/Vocabulary/Verbs
[53]: http://code.jsoftware.com/wiki/Vocabulary/Modifiers,
[54]: http://code.jsoftware.com/wiki/Vocabulary/Words
[55]: http://code.jsoftware.com/wiki/Vocabulary/PartsOfSpeech
[56]: /wiki/Arity "Arity"
[57]: http://jsoftware.com/help/dictionary/ctrl.htm