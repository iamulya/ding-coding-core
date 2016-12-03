**LOLCODE** is an [esoteric programming language][0] inspired by [lolspeak][1], the language expressed in examples of the [lolcat][2] [Internet meme][3].[\[1\]][4] The language was created in 2007 by Adam Lindsay, researcher at the Computing Department of [Lancaster University][5].[\[2\]][6][\[3\]][7]

The language is not clearly defined in terms of operator priorities and correct syntax, but several functioning interpreters and compilers exist. One interpretation of the language has been proven [Turing-complete][8].[\[4\]][9]

## Language structure and examples

LOLCODE's [keywords][10] are drawn from the heavily compressed (shortened) [patois][11] of the lolcat Internet meme. Here follows a [Hello world][12] program and a simple program to output a file to a monitor.[\[5\]][13] Similar code was printed in the _[Houston Chronicle][14]_.[\[1\]][4]

## Example 1

## Example 2

In this example,[\[5\]][13] commands to open a file (`PLZ OPEN FILE "NAME"?`---"Please try to open a file?"), and [error handling][15] (`AWSUM THX`---"Awesome, thanks!", and `O NOES`---"Oh no!") are introduced.

Other commands include `I HAS A _variable_` for declaring variables, `_variable_ R _value_` ("variable \[is/are/being\] value") for assigning them, sending error messages to the front end via `INVISIBLE` instead of `VISIBLE`, and `BTW` ("by the way") to denote a comment, making the parser ignore the rest of the line. Loops are created with IM IN YR _label_ (from an Internet meme "I'm in your \_\_\_"), and ended with IM OUTTA YR _label_. Loops lack counters or conditions, and thus do not cease inherently. They must be manually broken with the `ENUF`, "enough" in [Leetspeak][16] (old version [`GTFO`][17])[\[7\]][18] command. Loops can also be ended with the conditional `IZ` command:

## Example 3

[\[5\]][13]

This simple program displays the numbers 1--11 and terminates (as of specification 1.0). The same program as of specification 1.2 is (assuming VAR starts at 0):

## Implementations

The most recent and up-to-date interpreter for the LOLCODE language is [lci][19], written in [C][20] by Justin Meza. It interprets LOLCODE efficiently on a variety of platforms.[\[8\]][21]

The first LOLCODE implementation was a [PHP][22] parser written by Jeff Jones.[\[9\]][23][\[10\]][24] The parser's website was also the first website using LOLCODE as an actual web scripting language. Being open source with a BSD style licence, it has been forked and used by multiple websites to implement LOLCODE scripting. The winning [Pecha Kucha][25] presentation at PHP Works 2008 was about this parser.[\[11\]][26][\[12\]][27]

There is a [.NET][28] compiler for LOLCODE written by Nick Johnson,[\[13\]][29] and featured in [Microsoft][30] developer training seminars, TechEd 2007 Conference (Australia).[\[14\]][31][\[15\]][32][\[16\]][33]

PL/LOLCODE, a project headed by Josh Tolley, makes LOLCODE available as a server-side programming language inside PostgreSQL.[\[17\]][34]

[Microsoft][30] [Dynamic Language Runtime][35] has an implementation of LOLCODE for testing purposes.[\[18\]][36]

lolcode-java (A Java grammar / interpreter for the LOLCODE programming language) is a project also available[\[19\]][37] but it appears to not yet be compliant with the version 1.3 specification.

A LOLCODE to [JavaScript][38] translator is also available.[\[20\]][39]

There is also a LOLCODE compiler included with the [Parrot virtual machine][40] as one of the languages demonstrating the use of Parrot's compiler tools.[\[21\]][41]

A compiler, virtual machine and debugger, created by Piper, for a LoLCode like language, LoLCode 1337, written in C, is [here][42][\[22\]][43]

## Related projects

LOLCODE has also inspired LOLPython, written by Andrew Dalke. LOLPython uses LOL-inspired syntax similar to that of LOLCODE, but with a Python-like style. It operates by translating the LOLPython source into Python code.[\[23\]][44]

ArnoldC is an offshoot of LOLCODE that replaces lolspeak with quotes from different [Arnold Schwarzenegger][45] movies.[\[24\]][46]

## References

## External links

[0]: /wiki/Esoteric_programming_language "Esoteric programming language"
[1]: /wiki/Lolspeak "Lolspeak"
[2]: /wiki/Lolcat "Lolcat"
[3]: /wiki/Internet_meme "Internet meme"
[4]: #cite_note-Silverman-1
[5]: /wiki/Lancaster_University "Lancaster University"
[6]: #cite_note-2
[7]: #cite_note-3
[8]: /wiki/Turing-complete "Turing-complete"
[9]: #cite_note-4
[10]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[11]: /wiki/Patois "Patois"
[12]: /wiki/Hello_world "Hello world"
[13]: #cite_note-Lolcode.com_mainpage-5
[14]: /wiki/Houston_Chronicle "Houston Chronicle"
[15]: /wiki/Error_handling "Error handling"
[16]: /wiki/Leet "Leet"
[17]: https://en.wiktionary.org/wiki/GTFO "wiktionary:GTFO"
[18]: #cite_note-7
[19]: http://lolcode.org/
[20]: /wiki/C_(programming_language) "C (programming language)"
[21]: #cite_note-8
[22]: /wiki/PHP "PHP"
[23]: #cite_note-9
[24]: #cite_note-10
[25]: /wiki/Pecha_Kucha "Pecha Kucha"
[26]: #cite_note-11
[27]: #cite_note-12
[28]: /wiki/.NET_Framework ".NET Framework"
[29]: #cite_note-13
[30]: /wiki/Microsoft "Microsoft"
[31]: #cite_note-14
[32]: #cite_note-15
[33]: #cite_note-16
[34]: #cite_note-17
[35]: /wiki/Dynamic_Language_Runtime "Dynamic Language Runtime"
[36]: #cite_note-18
[37]: #cite_note-19
[38]: /wiki/JavaScript "JavaScript"
[39]: #cite_note-20
[40]: /wiki/Parrot_virtual_machine "Parrot virtual machine"
[41]: #cite_note-21
[42]: http://the-green-leaf.de/lolcode1337.html
[43]: #cite_note-22
[44]: #cite_note-23
[45]: /wiki/Arnold_Schwarzenegger "Arnold Schwarzenegger"
[46]: #cite_note-24