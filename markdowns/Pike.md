**Pike** is an [interpreted][0], [general-purpose][1], [high-level][2], [cross-platform][3], [dynamic programming language][4], with a syntax similar to that of [C][5]. Unlike many other dynamic languages, Pike is both statically and dynamically typed, and requires explicit type definitions. It features a flexible type system that allows the rapid development and flexible code of dynamically typed languages, while still providing some of the benefits of a statically typed language.

Pike features [garbage collection][6], advanced data types, and first-class anonymous functions, with support for many programming paradigms, including [object-oriented][7], [functional][8] and [imperative programming][9]. Pike is [free software][10], released under the [GPL][11], [LGPL][12] and [MPL][13] licenses.

## History

Pike has its roots in [LPC][14], which was a language developed for [MUDs][15]. Programmers at [Lysator][16] in [Linköping][17], Sweden, most notably Fredrik Hübinette and Per Hedbor,[\[1\]][18] separated the language and virtual machine from the rest of the MUD driver, and used it as a rapid prototyping language for various applications, calling it LPC4\.

LPC's license did not allow use for commercial purposes, and so a new GPL implementation was written in 1994, called µLPC (micro LPC).

In 1996, µLPC was renamed to Pike in order to provide a more commercially viable name. Although the name of the company has changed over the years, the company now known as Roxen Internet Software employed many Pike developers, and provided resources for Pike's development. [Roxen][19] is also the name of a web server developed by the company in Pike. In 2002, the programming environment laboratory at [Linköping University][20] took over maintenance of Pike from Roxen. Several Pike programmers have found their way to the Linköping office of [Opera Software][21], where the language plays a central role in the server/gateway parts of the [Opera Mini][22] application.[\[2\]][23]

## Syntax highlights

## Hello World

The syntax above requires some explanation. Those who are familiar with [C][24] or [C++][25] should pick it up right away.

## Data types

The following list shows all the standard data types that Pike provides. Advanced data types such as sequences, queues, heaps, stacks, etc. are available in the ADT module which is included with Pike.

Basic data types:

Container types:

Other types:

Pike requires explicit type definitions for all variables. It uses this information to report type errors at compile time. The following code will cause a compile error because the value of the variable "number" must be an integer but the code is attempting to assign floating point and string values to it.

That kind of behavior is traditionally considered restrictive and limiting by proponents of dynamically typed languages. However unlike C, C++, and Java, Pike uses a more flexible type system---specifically, a system of [tagged unions][26]. The system allows programmers to declare variables that may contain values of multiple types, something impossible in most of the C-family languages without straying from the bounds of [safe usage][27].

The following demonstrates a variable that can hold either an integer or a floating point number.

Because a variable can be declared as holding many different data types, functions are provided to determine what type of data is currently stored. These functions are all of the form typenamep, as in intp, floatp, stringp, etc.

Additionally, there is a special "mixed" data type. That definition allows a variable to hold any kind of data type.

In order to convert a value from one type to another, Pike can use an explicit cast:

## See also

## References

## External links

[0]: /wiki/Interpreter_(computer_software) "Interpreter (computer software)"
[1]: /wiki/General-purpose_programming_language "General-purpose programming language"
[2]: /wiki/High_level_programming_language "High level programming language"
[3]: /wiki/Cross-platform "Cross-platform"
[4]: /wiki/Dynamic_programming_language "Dynamic programming language"
[5]: /wiki/C_(programming_language) "C (programming language)"
[6]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[7]: /wiki/Object-oriented_programming "Object-oriented programming"
[8]: /wiki/Functional_programming "Functional programming"
[9]: /wiki/Imperative_programming "Imperative programming"
[10]: /wiki/Free_software "Free software"
[11]: /wiki/GNU_General_Public_License "GNU General Public License"
[12]: /wiki/LGPL "LGPL"
[13]: /wiki/Mozilla_Public_License "Mozilla Public License"
[14]: /wiki/LPC_(programming_language) "LPC (programming language)"
[15]: /wiki/MUD "MUD"
[16]: /wiki/Lysator "Lysator"
[17]: /wiki/Link%C3%B6ping "Linköping"
[18]: #cite_note-1
[19]: /wiki/Roxen_(web_server) "Roxen (web server)"
[20]: /wiki/Link%C3%B6ping_University "Linköping University"
[21]: /wiki/Opera_Software "Opera Software"
[22]: /wiki/Opera_Mini "Opera Mini"
[23]: #cite_note-2
[24]: /wiki/C_programing_language "C programing language"
[25]: /wiki/C%2B%2B "C++"
[26]: /wiki/Tagged_union "Tagged union"
[27]: /wiki/Union_(computer_science)#C.2FC.2B.2B "Union (computer science)"