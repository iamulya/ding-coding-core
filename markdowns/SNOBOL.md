**SNOBOL** (_StriNg Oriented and symBOlic Language_) is a series of [computer][0] [programming languages][1] developed between 1962 and 1967 at [AT&T][2] [Bell Laboratories][3] by [David J. Farber][4], [Ralph E. Griswold][5] and Ivan P. Polonsky, culminating in SNOBOL4\. It was one of a number of text-string-oriented languages developed during the 1950s and 1960s; others included [COMIT][6] and [TRAC][7].

SNOBOL4 stands apart from most programming languages of its era by having patterns as a [first-class data type][8] (_i.e._ a data type whose values can be manipulated in all ways permitted to any other data type in the programming language) and by providing operators for pattern [concatenation][9] and [alternation][10]. In later [object-oriented languages][11], such as [JavaScript][12], patterns are a type of object, and admit various manipulations. Further, strings generated during execution can be treated as programs and executed (as in the [eval][13] function of other languages).

SNOBOL4 was quite widely taught in larger US universities in the late 1960s and early 1970s and was widely used in the 1970s and 1980s as a text manipulation language in the [humanities][14].

In the 1980s and 1990s its use faded as newer languages such as [AWK][15] and [Perl][16] made string manipulation by means of [regular expressions][17] fashionable. SNOBOL4 patterns subsume [BNF][18] grammars, which are equivalent to [context-free grammars][19] and more powerful than regular expressions.[\[1\]][20] The "regular expressions" in current versions of AWK and Perl are in fact extensions of regular expressions in the [traditional sense][21], but regular expressions, unlike SNOBOL4 patterns, cannot be recursive, which gives a distinct computational advantage to SNOBOL4 patterns.[\[2\]][22] However, since Perl 5.10 (released in December 2007), Perl regular expressions can be recursive.[\[3\]][23]

One of the designers of SNOBOL, Ralph Griswold, designed successors to SNOBOL4 called SL5 and [Icon][24], which combined the backtracking of SNOBOL4 pattern matching with more standard [ALGOL][25]-like structuring, as well as adding some features of their own.

## Development

The initial SNOBOL language was created as a tool to be used by its authors to work with the symbolic manipulation of polynomials. It was written in assembly language for the [IBM 7090][26]. It had a simple syntax, only one datatype, the string, no functions, and no declarations and very little error control. However despite its simplicity and its "personal" nature its use began to spread to other groups. As a result the authors decided to extend it and tidy it up. They rewrote it and added functions, both standard and user-defined, and released the result as SNOBOL3\. SNOBOL2 did exist but it was a short-lived intermediate development version without user-defined functions and was never released. SNOBOL3 became quite popular and was rewritten for other computers than the IBM 7090 by other programmers. As a result several incompatible dialects arose.

As SNOBOL3 became more popular the authors received more and more requests for extensions to the language. They also began to receive complaints about incompatibility and bugs in versions that they hadn't written. To address this and to take advantage of the new computers being introduced in the late 1960s, the decision was taken to develop SNOBOL4 with many extra datatypes and features but based on a [virtual machine][27] to allow improved portability across computers.[\[4\]][28] The SNOBOL4 language translator was still written in assembly language. However the macro features of the assembler were used to define the virtual machine instructions of the **S**NOBOL **I**mplementation **L**anguage, the SIL. This very much improved the portability of the language by making it relatively easy to port the virtual machine which hosted the translator by recreating its virtual instructions on any machine which included a macro assembler or indeed a high level language.[\[5\]][29]

## Features

SNOBOL4 supports a number of built-in [data types][30], such as [integers][31] and limited precision [real numbers][32], [strings][33], [patterns][34], [arrays][35], and [tables][36] (associative arrays), and also allows the programmer to define additional data types and new [functions][37]. SNOBOL4's programmer-defined data type facility was advanced at the time---it is similar to the earlier [COBOL][38]'s and the later [Pascal][39]'s records.

All SNOBOL command lines are of the form

Each of the five elements is optional. In general, the _subject_ is matched against the _pattern_. If the _object_ is present, any matched portion is replaced by the _object_ via rules for replacement. The _transfer_ can be an absolute branch or a conditional branch dependent upon the success or failure of the subject evaluation, the pattern evaluation, the pattern match, the object evaluation or the final assignment. It can also be a transfer to code created and compiled by the program itself during a run.

A SNOBOL pattern can be very simple or extremely complex. A simple pattern is just a text string (e.g. "ABCD"), but a complex pattern may be a large structure describing, for example, the complete grammar of a computer language. It is possible to implement a language interpreter in SNOBOL almost directly from a [Backus--Naur form][40] expression of it, with few changes. Creating a macro assembler and an interpreter for a completely theoretical piece of hardware could take as little as a few hundred lines, with a new instruction being added with a single line.

Complex SNOBOL patterns can do things that would be impractical or impossible using the more primitive regular expressions used in most other pattern matching languages. Some of this power derives from the so-called "SPITBOL extensions" (which have since been incorporated in basically all modern implementations of the original SNOBOL 4 language too), although it is possible to achieve the same power without them. Part of this power comes from the side effects that it is possible to produce during the pattern matching operation, including saving numerous intermediate/tentative matching results and the ability to invoke user-written functions during the pattern match which can perform nearly any desired processing, and then influence the ongoing direction the interrupted pattern match takes, or even to indeed change the pattern itself during the matching operation. Patterns can be saved like any other first-class data item, and can be concatenated, used within other patterns, and used to create very complex and sophisticated pattern expressions. It is possible to write, for example, a SNOBOL4 pattern which matches "a complete name and international postal mailing address", which is well beyond anything that is practical to even attempt using regular expressions.

SNOBOL4 pattern-matching uses a backtracking algorithm similar to that used in the [logic programming][41] language [Prolog][42], which provides pattern-like constructs via [DCGs][43]. This algorithm makes it easier to use SNOBOL as a logic programming language than is the case for most languages.

SNOBOL stores variables, strings and data structures in a single [garbage-collected][44] heap.

SNOBOL rivals [APL][45] for its distinctiveness in format and programming style, both being radically unlike more "standard" procedural languages such as [BASIC][46], [Fortran][47], or [C][48].

## Example programs

The Hello World program might be as follows...

A simple program to ask for a user's name and then use it in an output sentence...

To choose between three possible outputs...

To continue requesting input until no more is forthcoming...

## Implementations

The classic implementation was on the [PDP-10][49]; it has been used to study [compilers][50], [formal grammars][51], and [artificial intelligence][52], especially [machine translation][53] and machine comprehension of [natural languages][54]. The original implementation was on an IBM 7090 at Bell Labs, Holmdel, N.J. SNOBOL4 was specifically designed for portability; the first implementation was started on an IBM 7094 in 1966 but completed on an IBM 360 in 1967\. It was rapidly ported to many other platforms.

It is normally implemented as an [interpreter][55] because of the difficulty in implementing some of its very high-level features, but there is a [compiler][50], the [SPITBOL compiler][56], which provides nearly all the facilities that the interpreter provides.

The [Gnat][57] [Ada][58] Compiler comes with a package (GNAT.Spitbol) which implements all of the Spitbol string manipulation semantics. This can be called from within an Ada program.

The file editor for the [Michigan Terminal System][59] (MTS) provided pattern matching based on SNOBOL4 patterns.[\[6\]][60]

Several implementations are currently available. Macro SNOBOL4 in C written by Phil Budne is a free, open source implementation, capable of running on almost any platform.[\[7\]][61] Catspaw, Inc provided a commercial implementation of the SNOBOL4 language for many different computer platforms, including DOS, Macintosh, Sun, RS/6000, and others, and these implementations are now available free from Catspaw. Minnesota SNOBOL4, by Viktors Berstis, the closest PC implementation to the original IBM mainframe version (even including Fortran-like FORMAT statement support) is also free.[\[8\]][62]

Although SNOBOL itself has no [structured programming][63] features, a SNOBOL preprocessor called [Snostorm][64] was designed and implemented during the 1970s by Fred G. Swartz for use under the [Michigan Terminal System][59] (MTS) at the [University of Michigan][65].[\[9\]][66] Snostorm was used at the eight to fifteen sites that ran MTS. It was also available at [University College London][67] (UCL) between 1982 and 1984\.

Snocone by [Andrew Koenig][68] adds block-structured constructs to the SNOBOL4 language. Snocone is a self-contained programming language, rather than a proper superset of SNOBOL4\.[\[10\]][69]

The SPITBOL implementation also introduced a number of features which, while not using traditional structured programming keywords, nevertheless can be used to provide many of the equivalent capabilities normally thought of as "structured programming", most notably nested if/then/else type constructs. These features have since been added to most recent SNOBOL4 implementations. After many years as a commercial product, in April 2009 SPITBOL was released as free software under the [GNU General Public License][70].

## Naming

According to Dave Farber,[\[11\]][71] he, Griswold and Polonsky "finally arrived at the name Symbolic EXpression Interpreter SEXI."

All went well until one day I was submitting a batch job to assemble the system and as normal on my JOB [card][72] -- the first card in the deck, I, in BTL standards my job and my name -- SEXI Farber

One of the Comp Center girls looked at it and said, "That's what you think" in a humorous way.

That made it clear that we needed another name!! We sat and talked and drank coffee and shot rubber bands and after much too much time someone said -- most likely Ralph -- "We don't have a [Snowball chance in hell][73] of finding a name". All of us yelled at once, "WE GOT IT -- SNOBOL" in the spirit of all the [BOL languages][38]. We then stretched our mind to find what it stood for.

Common [backronyms][74] of "SNOBOL" are 'String Oriented Symbolic Language'[\[12\]][75] or (as a [quasi-initialism][76]) 'StriNg Oriented symBOlic Language'.[\[13\]][77]

## See also

## References

## Further reading

## External links

[0]: /wiki/Computer "Computer"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/AT%26T_Corporation "AT&T Corporation"
[3]: /wiki/Bell_Laboratories "Bell Laboratories"
[4]: /wiki/David_J._Farber "David J. Farber"
[5]: /wiki/Ralph_E._Griswold "Ralph E. Griswold"
[6]: /wiki/COMIT "COMIT"
[7]: /wiki/TRAC_(programming_language) "TRAC (programming language)"
[8]: /wiki/First-class_object "First-class object"
[9]: /wiki/Concatenation "Concatenation"
[10]: /wiki/Alternation_(formal_language_theory) "Alternation (formal language theory)"
[11]: /wiki/Object-oriented_language "Object-oriented language"
[12]: /wiki/JavaScript "JavaScript"
[13]: /wiki/Eval "Eval"
[14]: /wiki/Humanities "Humanities"
[15]: /wiki/AWK "AWK"
[16]: /wiki/Perl "Perl"
[17]: /wiki/Regular_expression "Regular expression"
[18]: /wiki/Backus%E2%80%93Naur_Form "Backus–Naur Form"
[19]: /wiki/Context-free_grammar "Context-free grammar"
[20]: #cite_note-1
[21]: /wiki/Regular_language "Regular language"
[22]: #cite_note-2
[23]: #cite_note-3
[24]: /wiki/Icon_(programming_language) "Icon (programming language)"
[25]: /wiki/ALGOL "ALGOL"
[26]: /wiki/IBM_7090 "IBM 7090"
[27]: /wiki/Virtual_machine "Virtual machine"
[28]: #cite_note-4
[29]: #cite_note-5
[30]: /wiki/Data_type "Data type"
[31]: /wiki/Integer "Integer"
[32]: /wiki/Real_number "Real number"
[33]: /wiki/String_(computer_science) "String (computer science)"
[34]: /wiki/Pattern_matching "Pattern matching"
[35]: /wiki/Array_data_type "Array data type"
[36]: /wiki/Associative_array "Associative array"
[37]: /wiki/Function_(programming) "Function (programming)"
[38]: /wiki/COBOL "COBOL"
[39]: /wiki/Pascal_programming_language "Pascal programming language"
[40]: /wiki/Backus%E2%80%93Naur_form "Backus–Naur form"
[41]: /wiki/Logic_programming "Logic programming"
[42]: /wiki/Prolog "Prolog"
[43]: /wiki/Definite_clause_grammar "Definite clause grammar"
[44]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[45]: /wiki/APL_(programming_language) "APL (programming language)"
[46]: /wiki/BASIC "BASIC"
[47]: /wiki/Fortran "Fortran"
[48]: /wiki/C_(programming_language) "C (programming language)"
[49]: /wiki/PDP-10 "PDP-10"
[50]: /wiki/Compiler "Compiler"
[51]: /wiki/Formal_grammar "Formal grammar"
[52]: /wiki/Artificial_intelligence "Artificial intelligence"
[53]: /wiki/Machine_translation "Machine translation"
[54]: /wiki/Natural_language "Natural language"
[55]: /wiki/Interpreter_(computer_software) "Interpreter (computer software)"
[56]: /wiki/SPITBOL_compiler "SPITBOL compiler"
[57]: /wiki/GNAT "GNAT"
[58]: /wiki/Ada_(programming_language) "Ada (programming language)"
[59]: /wiki/Michigan_Terminal_System "Michigan Terminal System"
[60]: #cite_note-6
[61]: #cite_note-7
[62]: #cite_note-8
[63]: /wiki/Structured_programming "Structured programming"
[64]: /wiki/Snostorm "Snostorm"
[65]: /wiki/University_of_Michigan "University of Michigan"
[66]: #cite_note-MTSVolume9-June1979-9
[67]: /wiki/University_College_London "University College London"
[68]: /wiki/Andrew_Koenig_(programmer) "Andrew Koenig (programmer)"
[69]: #cite_note-10
[70]: /wiki/GNU_General_Public_License "GNU General Public License"
[71]: #cite_note-11
[72]: /wiki/Punched_card "Punched card"
[73]: https://en.wiktionary.org/wiki/snowball%27s_chance_in_hell "wikt:snowball's chance in hell"
[74]: /wiki/Backronym "Backronym"
[75]: #cite_note-12
[76]: /wiki/Acronym_and_initialism "Acronym and initialism"
[77]: #cite_note-13