**ALGOL 60** (short for **ALGO**rithmic **L**anguage 19**60**) is a member of the [ALGOL][0] family of computer programming languages. It followed on from [ALGOL 58][1] which had introduced [code blocks][2] and the `begin` and `end` pairs for delimiting them. ALGOL 60 was the first language implementing [nested function][3] definitions with [lexical scope][4]. It gave rise to many other programming languages, including [CPL][5], [Simula][6], [BCPL][7], [B][8], [Pascal][9] and [C][10].

[Niklaus Wirth][11] based his own [ALGOL W][12] on ALGOL 60 before moving to develop [Pascal][9]. Algol-W was intended to be the next generation ALGOL but the [ALGOL 68][13] committee decided on a design that was more complex and advanced rather than a cleaned simplified ALGOL 60\. The official ALGOL versions are named after the year they were first published. Algol 68 is substantially different from Algol 60 and was criticised partially for being so, so that in general "Algol" refers to dialects of Algol 60\.

## Standardization

ALGOL 60 --- with [COBOL][14] --- were the first languages to seek standardization.

## History

ALGOL 60 was used mostly by research computer scientists in the United States and in Europe. Its use in commercial applications was hindered by the absence of standard input/output facilities in its description and the lack of interest in the language by large computer vendors. ALGOL 60 did however become the standard for the publication of algorithms and had a profound effect on future language development.

[John Backus][15] developed the [Backus normal form][16] method of describing programming languages specifically for ALGOL 58\. It was revised and expanded by [Peter Naur][17] for ALGOL 60, and at [Donald Knuth][18]'s suggestion renamed [Backus--Naur form][16].[\[1\]][19]

Peter Naur: "As editor of the ALGOL Bulletin I was drawn into the international discussions of the language and was selected to be member of the European language design group in November 1959\. In this capacity I was the editor of the ALGOL 60 report, produced as the result of the ALGOL 60 meeting in Paris in January 1960."[\[2\]][20]

The following people attended the meeting in Paris (from January 11 to 16):

Alan Perlis gave a vivid description of the meeting: "The meetings were exhausting, interminable, and exhilarating. One became aggravated when one's good ideas were discarded along with the bad ones of others. Nevertheless, diligence persisted during the entire period. The chemistry of the 13 was excellent."

The language originally did not include [recursion][21]. It was inserted into the specification at the last minute, against the wishes of some of the committee.[\[3\]][22]

ALGOL 60 inspired many languages that followed it. [Tony Hoare][23] remarked: "Here is a language so far ahead of its time that it was not only an improvement on its predecessors but also on nearly all its successors."[\[4\]][24] The [Scheme][25] programming language, a variant of [Lisp][26] that adopted the block structure and lexical scope of ALGOL, also adopted the wording "Revised Report on the Algorithmic Language Scheme" for its standards documents in homage to ALGOL.[\[5\]][27]

## ALGOL 60 implementations timeline

To date there have been at least 70 augmentations, extensions, derivations and sublanguages of Algol 60\.[\[6\]][28]

The Burroughs dialects included special system programming dialects such as [ESPOL][29] and [NEWP][30].

## Properties

ALGOL 60 as officially defined had no I/O facilities; implementations defined their own in ways that were rarely compatible with each other. In contrast, ALGOL 68 offered an extensive library of _transput_ (ALGOL 68 parlance for Input/Output) facilities.

ALGOL 60 allowed for two [evaluation strategies][31] for [parameter][32] passing: the common [call-by-value][33], and [call-by-name][34]. Call-by-name has certain effects in contrast to [call-by-reference][35]. For example, without specifying the parameters as _value_ or _reference_, it is impossible to develop a procedure that will swap the values of two parameters if the actual parameters that are passed in are an integer variable and an array that is indexed by that same integer variable.[\[10\]][36] Think of passing a pointer to swap(i, A\[i\]) in to a function. Now that every time swap is referenced, it's reevaluated. Say i := 1 and A\[i\] := 2, so every time swap is referenced it'll return the other combination of the values (\[1,2\], \[2,1\], \[1,2\] and so on). A similar situation occurs with a random function passed as actual argument.

Call-by-name is known by many compiler designers for the interesting "[thunks][37]" that are used to implement it. [Donald Knuth][18] devised the "[man or boy test][38]" to separate compilers that correctly implemented "[recursion][39] and non-local references." This test contains an example of call-by-name.

## ALGOL 60 Reserved words and restricted identifiers

There are 35 such reserved words in the standard [Burroughs large systems][40] sub-language:

There are 71 such restricted identifiers in the standard Burroughs large systems sub-language:

and also the names of all the intrinsic functions.

## Standard Operators

## Examples and portability issues

## Code sample comparisons

## ALGOL 60

Implementations differ in how the text in bold must be written. The word 'INTEGER', including the quotation marks, must be used in some implementations in place of **integer**, above, thereby [designating][41] it as a special keyword.

Following is an example of how to produce a table using [Elliott 803][42] ALGOL:[\[11\]][43]

## ALGOL 60 family

Since ALGOL 60 had no I/O facilities, there is no portable [hello world program][44] in ALGOL. The following program could (and still will) compile and run on an ALGOL implementation for a Unisys A-Series mainframe, and is a straightforward simplification of code taken from [The Language Guide][45] at the [University of Michigan][46]-Dearborn Computer and Information Science Department [Hello world! ALGOL Example Program page][47].

A simpler program using an inline format:

An even simpler program using the Display statement:

An alternative example, using Elliott Algol I/O is as follows. Elliott Algol used different characters for "open-string-quote" and "close-string-quote", represented here by ['][48] and ['][49].

Here's a version for the Elliott 803 Algol (A104) The standard Elliott 803 used 5 hole paper tape and thus only had upper case. The code lacked any quote characters so [£][50] (UK Pound Sign) was used for open quote and [?][51] (Question Mark) for close quote. Special sequences were placed in double quotes (e.g. ££L?? produced a new line on the teleprinter).

The [ICT 1900 series][52] Algol I/O version allowed input from paper tape or punched card. Paper tape 'full' mode allowed lower case. Output was to a line printer. Note use of '(',')' and %.[\[12\]][53]

## See also

## References

## Further reading

## External links

[0]: /wiki/ALGOL "ALGOL"
[1]: /wiki/ALGOL_58 "ALGOL 58"
[2]: /wiki/Block_(programming) "Block (programming)"
[3]: /wiki/Nested_function "Nested function"
[4]: /wiki/Lexical_scope "Lexical scope"
[5]: /wiki/CPL_(programming_language) "CPL (programming language)"
[6]: /wiki/Simula "Simula"
[7]: /wiki/BCPL "BCPL"
[8]: /wiki/B_(programming_language) "B (programming language)"
[9]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[10]: /wiki/C_(programming_language) "C (programming language)"
[11]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[12]: /wiki/ALGOL_W "ALGOL W"
[13]: /wiki/ALGOL_68 "ALGOL 68"
[14]: /wiki/COBOL "COBOL"
[15]: /wiki/John_Backus "John Backus"
[16]: /wiki/Backus%E2%80%93Naur_form "Backus–Naur form"
[17]: /wiki/Peter_Naur "Peter Naur"
[18]: /wiki/Donald_Knuth "Donald Knuth"
[19]: #cite_note-1
[20]: #cite_note-naur_acm-2
[21]: /wiki/Recursion "Recursion"
[22]: #cite_note-3
[23]: /wiki/Tony_Hoare "Tony Hoare"
[24]: #cite_note-4
[25]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[26]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[27]: #cite_note-r3rs-5
[28]: #cite_note-6
[29]: /wiki/Executive_Systems_Problem_Oriented_Language "Executive Systems Problem Oriented Language"
[30]: /wiki/NEWP "NEWP"
[31]: /wiki/Evaluation_strategy "Evaluation strategy"
[32]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[33]: /wiki/Call-by-value "Call-by-value"
[34]: /wiki/Call-by-name "Call-by-name"
[35]: /wiki/Call-by-reference "Call-by-reference"
[36]: #cite_note-10
[37]: /wiki/Thunk_(delayed_computation) "Thunk (delayed computation)"
[38]: /wiki/Man_or_boy_test "Man or boy test"
[39]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[40]: /wiki/Burroughs_large_systems "Burroughs large systems"
[41]: /wiki/Stropping_(syntax) "Stropping (syntax)"
[42]: /wiki/Elliott_803 "Elliott 803"
[43]: #cite_note-11
[44]: /wiki/Hello_world_program "Hello world program"
[45]: http://www.engin.umd.umich.edu/CIS/course.des/cis400/index.html
[46]: /wiki/University_of_Michigan "University of Michigan"
[47]: http://www.engin.umd.umich.edu/CIS/course.des/cis400/algol/hworld.html
[48]: /wiki/%E2%80%98 "‘"
[49]: /wiki/%E2%80%99 "’"
[50]: /wiki/%C2%A3 "£"
[51]: /wiki/%3F "?"
[52]: /wiki/ICT_1900_series "ICT 1900 series"
[53]: #cite_note-12