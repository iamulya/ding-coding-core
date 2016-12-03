**Rebol** ([/ˈrɛbəl/][0] [_**REB**-əl_][1]; historically **REBOL**) is a [cross-platform][2][\[6\]][3] [data exchange language][4] and a [multi-paradigm][5] [dynamic programming language][6] designed by [Carl Sassenrath][7] for network communications and [distributed computing][8]. It introduces the concept of [dialecting][9]: small, [optimized][10], [domain-specific languages][11] for code and data,[\[6\]][3][\[7\]][12] which is also the most notable property of the language according to its designer Carl Sassenrath:

Although it can be used for programming, writing functions, and performing processes, its greatest strength is the ability to easily create domain-specific languages or dialects

[Douglas Crockford][13] of [JavaScript][14] fame has described Rebol as _"a more modern language, but with some very similar ideas to Lisp, in that it's all built upon a representation of data which is then executable as programs"_ and as one of [JSON][15]'s influences.[\[5\]][16]

Originally, the language and its official implementation were [proprietary][17] and closed source, developed by REBOL Technologies. Following the discussion with [Lawrence Rosen][18],[\[9\]][19] the Rebol version 3 interpreter was released under the [Apache 2.0 license][20] on December 12, 2012\.[\[10\]][21] Older versions are only available in binary form, and no source release for them is planned.

Rebol has been used to program [Internet][22] [applications][23] (both [client-][24] and [server-side][25]), [database][26] applications, [utilities][27], and [multimedia][28] applications.[\[6\]][3]

## Etymology

Rebol was initially an acronym for **R**elative **E**xpression **B**ased **O**bject **L**anguage.[\[6\]][3][\[8\]][29] To align with modern trends in language naming, most writers ceased the practice of writing it in all caps. Sassenrath eventually put the question to the community debate on his blog.[\[11\]][30]

In subsequent writing, Sassenrath adopted the convention of writing the language name as "Rebol".[\[12\]][31]

## History

First released in 1997, Rebol was designed over a 20-year period by Carl Sassenrath, the architect and primary developer of [AmigaOS][32], based on his study of [denotational semantics][33] and using concepts from the programming languages [Lisp][34], [Forth][35], [Logo][36], and [Self][37].

REBOL Technologies was founded in 1998\.

_REBOL 2_, the interpreter, which became the core of extended interpreter editions, was first released in 1999\.

_REBOL/Command_, which added strong encryption and [ODBC][38] access, was released in September 2000\.

_REBOL/View_ was released in April 2001, adding graphical abilities on the core language.

_REBOL/IOS_, an extensible collaboration environment built with REBOL was released in August 2001\.

_REBOL/SDK_, providing a choice of kernels to bind against, as well as a preprocessor, was released in December 2002\.

_Rebol 3_, the newest version of the [interpreter][39], had alpha versions released by REBOL Technologies since January 2008\. Since its release as an Apache 2 project in December 2012, it is being developed by the Rebol community.\[_[citation needed][40]_\]

## Design

## Ease of use

One of the Rebol design principles is "to do simple things in simple ways".[\[6\]][3] In the following example the _Visual interface dialect_ is used to describe a simple [Hello world program][41] with a graphical user interface:

This is how a similar example looks in R3-GUI:

[![R3-GUI Hello world example](//upload.wikimedia.org/wikipedia/commons/4/44/R3-GUIHelloWorld.png)][42]

## Dialects

Rebol dialects, commonly known as [domain-specific languages][11] (DSLs), are micro-languages optimized for a specific purpose. Dialects can be used to define business rules, graphical user interfaces or sequences of screens during the installation of a program. Users can define their own dialects, reusing any existing Rebol word and giving it a specific meaning in that dialect.[\[6\]][3] Dialects are [interpreted][43] by functions processing Rebol blocks (or parsing strings) in a specific way.

An example of Rebol's dialecting abilities can be seen with the word `_return_`. In the _data exchange dialect_ `_return_` is just a word not having any specific meaning. In the _do dialect_, `_return_` is a [global variable][44] referring to a native [function][45] passing back a function result value.[\[4\]][46] In the _visual interface dialect (VID)_, `_return_` is a [keyword][47] causing the layout engine to simulate a [carriage return][48], moving the "rendering pen" down to the beginning of the next line.[\[7\]][12]

A Rebol interpreter with graphical abilities must understand and interpret many dialects. The table below lists the most important ones in order of significance.

## Syntax

Rebol [syntax][49] is [free-form][50], not requiring specific positioning. However, [indentation][51] is recommended to better convey the structure of the text to human readers.

Syntactic properties of different dialects may differ. The common platform for all Rebol dialects is the _data exchange dialect_; other dialects are usually derived from it. In addition to being the common platform for all dialects, the _data exchange dialect_ is directly used to represent data and metadata, populate data structures, send data over Internet, and save them in data storage.

In contrast to programming languages like [C][52], the _data exchange dialect_ does not consist of [declarations][53], [statements][54], [expressions][55] or keywords. A valid _data exchange dialect_ text stream is a [tree data structure][56] consisting of blocks (the root block is implicit, subblocks are [delimited][57] by [square brackets][58]), parens (delimited by [round brackets][58]), [strings][59] (delimited by [double quotes][60] or [curly brackets][58] suitable for multi-line strings; [caret notation][61] is used for unprintable characters), [URLs][62], e-mail addresses, files, paths or other [composite values][63]. Unlike [ALGOL][64] [blocks][65], Rebol blocks are composite values similar to quoted [s-expressions][66] in [Lisp][34]. The fact that code is written in the form of Rebol blocks makes the language [homoiconic][67].[\[4\]][46]

Blocks as well as parens may contain other composite values (a block may contain subblocks, parens, strings, ...) or [scalar values][63] like words, set-words (words suffixed by the [colon][68]), get-words (words prefixed by the colon), lit-words (words prefixed by the [apostrophe][69]), numbers, money, [characters][70], etc., separated by [whitespace][71]. Note that special characters are allowed in words, so `a+b` is a word unlike `a + b`, which is a sequence of three words separated by spaces.

[Comments][72] may appear following the [semicolon][73] until the end of the line. Multi-line comments or comments not ignored by the lexical parser can be written using "ordinary" datatypes like multi-line strings.[\[4\]][46]

## Semantics

Blocks containing domain-specific language can be submitted as [arguments][74] to specific _evaluator_ functions.[\[6\]][3]

## do

The most frequently used evaluator is the `do` function. It is used by default to interpret the text input to the interpreter [console][75].

The _do dialect_ interpreted by the `do` function, is an [expression-oriented][76] sublanguage of the _data exchange dialect_. The main semantic unit of the language is the [expression][55]. In contrast to imperative programming languages descending from [ALGOL][64], the _do dialect_ has neither keywords, nor statements.

Words are used as [case-insensitive][77] [variables][78]. Like in all [dynamically typed languages][79], variables don't have an associated type, type is associated with values. The result, i.e. the evaluation of a word is returned, when a word is encountered by the `do` function. The set-word form of a word can be used for [assignment][80]. While not having statements, assignment, together with [functions with side-effects][81] can be used for [imperative programming][82].[\[4\]][46]

Subblocks of the root block evaluate to themselves. This property is used to handle data blocks, for [structured programming][83] by submitting blocks as arguments to [control][84] functions like `if`, `either`, `loop`, etc., and for dialecting, when a block is passed to a specific interpreter function.[\[6\]][3]

A specific problem worth noting is that composite values, assigned to variables, are not copied. To make a copy, the value must be passed to the `copy` function.[\[4\]][46]

The `do` function normally follows a [prefix style of evaluation][85], where a function processes the arguments that follow it. However, [infix evaluation][86] using infix [operators][87] exists too. Infix evaluation takes precedence over the prefix evaluation. For example,

returns 1, since the infix addition takes precedence over the computation of the absolute value. When evaluating infix expressions, the order of evaluation is left to right, no operator takes [precedence][88] over another. For example,

returns 20, while an evaluation giving precedence to multiplication would yield 14\. All operators have prefix versions. `Do` usually evaluates arguments before passing them to a function. So, the below expression:

first reads the Wikipedia Rebol page and then passes the result to the `print` function. Parentheses can be used to change the order of evaluation. Using [prefix notation][85], the usage of parentheses in expressions can be avoided.[\[4\]][46]

The simple precedence rules are both an advantage:

as well as a disadvantage:

## parse

The `parse` function is preferably used to specify, validate, transform and interpret dialects. It does so by matching _parse expressions_ at run time.[\[6\]][3]

_Parse expressions_ are written in the _parse dialect_, which, like the _do dialect_, is an expression-oriented sublanguage of the _data exchange dialect_. Unlike the _do dialect_, the _parse dialect_ uses keywords representing operators and the most important [nonterminals][89], infix parsing operators don't have prefix equivalents and use precedence rules (_sequence_ has higher precedence than _choice_).[\[6\]][3]

Actions can be included to be taken during the parsing process as well and the `parse` function can be used to process blocks or strings. At the _string parsing_ level `parse` must handle the "low level" parsing, taking into account [characters][90] and delimiters. _Block parsing_ is higher level, handling the scanning at the level of Rebol values.[\[6\]][3]

The parse dialect belongs to the family of grammars represented by the [top-down parsing language][91] or the [parsing expression grammar][92] (PEG). The main similarity is the presence of the _sequence_ and _choice_ operators all the family members have. Parse dialect syntax and the similarities between the parse dialect and the PEG are illustrated by this transliteration of a [PEG example][93] that parses an arithmetic expression:

## Implementations

The official Rebol 2.7.8 [implementation][94] is available in several editions (_/Core_, _/View_, _/Command_, _/SDK_ and _/IOS_). Both _/Core_ and _/View_ editions are [freely redistributable software][95].[\[1\]][96]

The runtime environment is stored in a single executable file. _Rebol/Core_ 2.7.8, the console edition, is about 300 KB and _Rebol/View_ 2.7.8, the [graphical user interface][97] edition, is about 650 KB in size.

_Rebol/View_ provides [platform-independent][2] graphics and sound access, and comes with its own windowing toolkit and extensible set of styles ([GUI widgets][98]). Extended editions, such as _Rebol/Command_ 2.7.8 or _Rebol/SDK_ 2.7.8 require a paid license; they add features like ODBC data access, and the option to create standalone executable files.\[_[citation needed][40]_\]

## Impact

## See also

## References

## Further reading

## External links

[0]: /wiki/Help:IPA_for_English "Help:IPA for English"
[1]: /wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key"
[2]: /wiki/Cross-platform "Cross-platform"
[3]: #cite_note-RD-6
[4]: /wiki/Data_exchange_language "Data exchange language"
[5]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[6]: /wiki/Dynamic_programming_language "Dynamic programming language"
[7]: /wiki/Carl_Sassenrath "Carl Sassenrath"
[8]: /wiki/Distributed_computing "Distributed computing"
[9]: /wiki/Dialecting "Dialecting"
[10]: /wiki/Optimization_(computer_science) "Optimization (computer science)"
[11]: /wiki/Domain-specific_language "Domain-specific language"
[12]: #cite_note-RP-7
[13]: /wiki/Douglas_Crockford "Douglas Crockford"
[14]: /wiki/JavaScript "JavaScript"
[15]: /wiki/JSON "JSON"
[16]: #cite_note-JSON-5
[17]: /wiki/Proprietary_software "Proprietary software"
[18]: /wiki/Lawrence_Rosen_(attorney) "Lawrence Rosen (attorney)"
[19]: #cite_note-9
[20]: /wiki/Apache_License "Apache License"
[21]: #cite_note-10
[22]: /wiki/Internet "Internet"
[23]: /wiki/Application_software "Application software"
[24]: /wiki/Client-side "Client-side"
[25]: /wiki/Server-side "Server-side"
[26]: /wiki/Database "Database"
[27]: /wiki/Utility_software "Utility software"
[28]: /wiki/Multimedia "Multimedia"
[29]: #cite_note-DJ-8
[30]: #cite_note-11
[31]: #cite_note-12
[32]: /wiki/AmigaOS "AmigaOS"
[33]: /wiki/Denotational_semantics "Denotational semantics"
[34]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[35]: /wiki/Forth_(programming_language) "Forth (programming language)"
[36]: /wiki/Logo_(programming_language) "Logo (programming language)"
[37]: /wiki/Self_(programming_language) "Self (programming language)"
[38]: /wiki/Open_Database_Connectivity "Open Database Connectivity"
[39]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[40]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[41]: /wiki/Hello_world_program "Hello world program"
[42]: /wiki/File:R3-GUIHelloWorld.png "R3-GUI Hello world example"
[43]: /wiki/Interpreted_language "Interpreted language"
[44]: /wiki/Global_variable "Global variable"
[45]: /wiki/Function_(computer_science) "Function (computer science)"
[46]: #cite_note-OG-4
[47]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[48]: /wiki/Carriage_return "Carriage return"
[49]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[50]: /wiki/Free-form_language "Free-form language"
[51]: /wiki/Indent_style "Indent style"
[52]: /wiki/C_(programming_language) "C (programming language)"
[53]: /wiki/Declaration_(computer_science) "Declaration (computer science)"
[54]: /wiki/Statement_(programming) "Statement (programming)"
[55]: /wiki/Expression_(programming) "Expression (programming)"
[56]: /wiki/Tree_data_structure "Tree data structure"
[57]: /wiki/Delimiter "Delimiter"
[58]: /wiki/Bracket "Bracket"
[59]: /wiki/String_(computer_science) "String (computer science)"
[60]: /wiki/Quotation_mark_glyphs "Quotation mark glyphs"
[61]: /wiki/Caret_notation "Caret notation"
[62]: /wiki/Uniform_Resource_Locator "Uniform Resource Locator"
[63]: /wiki/Scalar_(computing) "Scalar (computing)"
[64]: /wiki/ALGOL "ALGOL"
[65]: /wiki/Block_(programming) "Block (programming)"
[66]: /wiki/S-expression "S-expression"
[67]: /wiki/Homoiconicity "Homoiconicity"
[68]: /wiki/Colon_(punctuation) "Colon (punctuation)"
[69]: /wiki/Apostrophe_(mark) "Apostrophe (mark)"
[70]: /wiki/Character_encoding "Character encoding"
[71]: /wiki/Whitespace_(computer_science) "Whitespace (computer science)"
[72]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[73]: /wiki/Semicolon "Semicolon"
[74]: /wiki/Argument_(computer_science) "Argument (computer science)"
[75]: /wiki/Command_line_interface "Command line interface"
[76]: /wiki/Expression-oriented_programming_languages "Expression-oriented programming languages"
[77]: /wiki/Case_sensitivity "Case sensitivity"
[78]: /wiki/Variable_(programming) "Variable (programming)"
[79]: /wiki/Dynamically_typed_language "Dynamically typed language"
[80]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[81]: /wiki/Side-effect_(computer_science) "Side-effect (computer science)"
[82]: /wiki/Imperative_programming "Imperative programming"
[83]: /wiki/Structured_programming "Structured programming"
[84]: /wiki/Control_flow "Control flow"
[85]: /wiki/Polish_notation "Polish notation"
[86]: /wiki/Infix_notation "Infix notation"
[87]: /wiki/Operator_(programming) "Operator (programming)"
[88]: /wiki/Order_of_operations "Order of operations"
[89]: /wiki/Terminal_symbol "Terminal symbol"
[90]: /wiki/Character_(computing) "Character (computing)"
[91]: /wiki/Top-down_parsing_language "Top-down parsing language"
[92]: /wiki/Parsing_expression_grammar "Parsing expression grammar"
[93]: /wiki/Parsing_expression_grammar#Examples "Parsing expression grammar"
[94]: /wiki/Implementation "Implementation"
[95]: /wiki/Freely_redistributable_software "Freely redistributable software"
[96]: #cite_note-lic-1
[97]: /wiki/Graphical_user_interface "Graphical user interface"
[98]: /wiki/GUI_widget "GUI widget"