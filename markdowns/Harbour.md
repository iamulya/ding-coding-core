**Harbour** is a modern computer [programming language][0], primarily used to create database/business programs. It is a modernized, [open sourced][1] and [cross-platform][2] version of the older and largely [DOS][3]-only [Clipper][4] system, which in turn developed from the [dBase][5] database market of the 1980s and 90s.

Harbour code using the same databases can be compiled under a wide variety of platforms, including [DOS][3], [Microsoft Windows][6], [Linux][7], [Unix][8] variants, several [BSD][9] descendants, [Mac OS X][10], [MINIX 3][11], [Windows CE][12], [Pocket PC][13], [Symbian][14], [iOS][15], [Android][16], [QNX][17], [VxWorks][18], [OS/2][19]/[eComStation][20], [BeOS][21]/[Haiku][22], [AIX][23].

## History

The idea of a free software Clipper compiler had been floating around for a long time and the subject has often cropped up in discussion on comp.lang.clipper. Antonio Linares founded the Harbour project and the implementation was started in March 1999\. The name "Harbour" was proposed by Linares, it is a play on a [Clipper][24] as a type of ship. Harbour is a synonym for port (where ships dock), and Harbour is a port of the Clipper language.

In 2009 Harbour was substantially redesigned, mainly by Viktor Szakáts and Przemyslaw Czerpak.

## Database support

Harbour extends the Clipper Replaceable Database Drivers (RDD) approach. It offers multiple RDDs such as [DBF][25], DBFNTX, DBFCDX, DBFDBT and DBFFPT. In Harbour multiple RDDs can be used in a single application, and new logical RDDs can be defined by combining other RDDs. The RDD architecture allows for inheritance, so that a given RDD may extend the functionality of other existing RDD(s). Third-party RDDs, like RDDSQL, RDDSIX, RMDBFCDX, [Advantage Database Server][26], and Mediator exemplify some of the RDD architecture features. DBFNTX implementation has almost same functionality of DBFCDX and RDDSIX. NETIO and LetoDB[\[1\]][27] provide remote access over [TCP][28] protocol.

Harbour also offers [ODBC][29] support by means of an [OOP][30] syntax, and [ADO][31] support by means of [OLE][32]. [MySQL][33], [PostgreSQL][34], [SQLite][35], [Firebird][36], [Oracle][37] are examples of databases which Harbour can connect.

xBase technologies often is confused with a [RDBMS][38] software. Although this is true, xBase is more than a simple database system as the same time xBase languages using purely DBF can not provide full concept of a real RDBMS.\[_[citation needed][39]_\]

## Programming philosophy

Unlike Java which is intended to be write once, run anywhere, Harbour aims to be **[write once, compile anywhere][40]**. As the same compiler is available for all of the above operating systems, there is no need for recoding to produce identical products for different platforms, except when operating system dependent features are used. Cross-compiling is supported with [MinGW][41]. Under Microsoft Windows, Harbour is more stable but less well-documented than Clipper, but has multi-platform capability and is more transparent, customizable and can run from a USB flash drive.

Under Linux and Windows Mobile, Clipper source code can be compiled with Harbour with very little adaptation. Most software originally written to run on Xbase++, FlagShip, FoxPro, xHarbour and others dialects can be compiled with Harbor with some adaptation. As 2010 many efforts have been made to turn the transition from other [xBase][42] dialects easier.

Harbour can use the following C compilers, among others: [GCC][43], [MinGW][41], [Clang][44], [ICC][45], [Microsoft Visual C++][46] (6.0+), [Borland C++][47], [Watcom C][48], [Pelles C][49] and [Sun Studio][50].

Harbour can make use of multiple Graphic Terminal emulations, including console drivers, and Hybrid Console/GUIs, such as GTWvt, and GTWvg.

Harbour supports external GUIs, free (e.g. HBQt, HWGui, MiniGUI (latest version based on Qt) and [QtContribs][51]) and commercial (e.g. FiveWin, Xailer). HBQt is a library provinding bindings to Qt. HBIDE application is a sample of HBQt potential.

Harbour is 100% Clipper-compatible[\[2\]][52] and supports many language syntax extensions including greatly extended run-time libraries such as [OLE][32], [Blat][53], [OpenSSL][54], [FreeImage][55], [GD][56], hbtip, hbtpathy, [PCRE][57], hbmzip ([zlib][58]), hbbz2 ([bzip2][59]), [cURL][60], [Cairo][61], its own implementation of CA-Tools, updated NanFor libraries and many others. Harbour has an active development community and extensive third party support.

Any [xBase][42] language provides a very productive way to build business and data intensive applications. Harbour is not an exception.

## Macro Operator (runtime compiler)

One of the most powerful features of xBase languages is the [Macro][62] Operator '&'. Harbour's implementation of the Macro Operator allows for runtime compilation of any valid Harbour expression. Such a compiled expression may be used as a VALUE, i.e. the right side of an assignment (rvalue), but more interestingly, such a compiled expression may be used to resolve the left side (lvalue) of an assignment, i.e. PRIVATE, or PUBLIC variables, or a database FIELD.

Additionally, the Macro Operator may compile and execute function calls, complete assignments, or even list of arguments, and the result of the macro may be used to resolve any of the above contexts in the compiled application. In other words, any Harbour application may be extended and modified at runtime to compile and execute additional code on-demand.

Latest Macro compiler can compile any valid Harbour code including code to pre-process before compile.

Syntax:

The text value of the expression '...' will be compiled, and the value resulting from the execution of the compiled code is the result.

is the short form for &( SomeId ).

is the short form of &( SomeId + "postfix" ).

## Object Oriented Programming

Programming in an OOP style is a broader issue than a specific library or a specific interface, but OOP programming is something many Clipper programmers have come to expect. CA-Clipper 5.2 and especially 5.3 added a number of base classes, and a matching OOP syntax. Libraries such as [Class(y)][63], Fivewin, Clip4Win, and TopClass provide additional OOP functionality.

Harbour has OOP extensions with full support for classes including inheritance, based on Class(y) syntax. OOP syntax in Harbour is very similar to that of earlier Clipper class libraries so it should be possible to maintain legacy Clipper code with minimal changes.

## Syntax and semantics

Harbour as every xBase language is case insensitive and can optionally accept keywords written just by first four characters.

## Built-in data types

Harbour has 6 scalar types : [Nil][64], [Character][65], [Date][66], [Logical][67], [Numeric][68], [Pointer][69], and 4 complex types: [Array][70], [Object][71], [CodeBlock][72], and [Hash][73]. A scalar holds a single value, such as a character (string), numeric, or reference to any other type. Arrays are ordered lists of scalars or complex types, indexed by number, starting at 1\. Hashes, or [associative arrays][74], are unordered collections of any type values indexed by their associated key, which may be of any scalar or complex type.

Literal (static) representation of scalar types:

Complex Types may also be represent as literal values:

Hashes may use _any_ type including other Hashes as the _Key_ for any element. Hashes and Arrays may contain _any_ type as the _Value_ of any member, including nesting arrays, and Hashes.

Codeblocks may have references to Variables of the Procedure/Function\>method in which it was defined. Such Codeblocks may be returned as a value, or by means of an argument passed BY REFERENCE, in such case the Codeblock will "outlive" the routine in which it was defined, and any variables it references, will be a DETACHED variable.

Detached variables will maintain their value for as long as a Codeblock referencing them still exists. Such values will be shared with any other Codeblock which may have access to those same variables. If the Codeblock did not outlive its containing routine, and will be evaluated within the lifetime of the routine in which it is defined, changes to its _Detached Variables_(s) by means of its evaluation, will be reflected back at its parent routine.

Codeblocks can be evaluated any number of times, by means of the Eval( _BlockExp_ ) function.

## Variables

All types can be assigned to named variables. Named variable identifiers are 1 to 63 characters long, start with `[A-Z|_]` and further consist of the characters `[A-Z|0–9|_]` up to a maximum of 63 characters. Named variables are not case sensitive.

Variables have one of the following scopes:

LOCAL and STATIC are resolved at compile time, and thus are much faster than PRIVATE and PUBLIC variables which are dynamic entities accessed by means of a runtime [Symbol table][75]. For this same reason, LOCAL and STATIC variables are not exposed to the Macro compiler, and any macro code which attempts to reference them will generate a runtime error.

Due to the dynamic nature of PRIVATE and PUBLIC variables, they can be created and destroyed at runtime, can be accessed and modified by means of runtime macros, and can be accessed and modified by Codeblocks created on the fly.

## Control structures

The basic control structures include all of the standard [dBase][5], and [Clipper][4] control structures as well as additional ones inspired by the [C][76] or [Java][77] programming languages:

## Loops

In the _FOR_ statement, the _assignment_ expression is evaluated prior to the first loop iteration. The _TO_ expression is evaluated and compared against the value of the control variable, prior to each iteration, and the loop is terminated if it evaluates to a numeric value greater than the numeric value of the control variable. The optional _STEP_ expression is evaluated after each iteration, prior to deciding whether to perform the next iteration.

In _FOR EACH_, the _Var_ variable will have the value (scalar, or complex) of the respective element in the collection value. The collection expression, may be an Array (of any type or combinations of types), an Hash Table, or an Object type.

## IF statements

_..._ represents 0 or more _statement(s)_.

The condition expression(s) has to evaluate to a _LOGICAL_ value.

## SWITCH statements

Harbour supports a SWITCH construct inspired by the C implementation of switch().

## BEGIN SEQUENCE statements

The BEGIN SEQUENCE structure allows for a well behaved abortion of any sequence, even when crossing nested procedures/functions. This means that a called procedure/function, may issue a BREAK statement, or a Break() expression, to force unfolding of any nested procedure/functions, all the way back to the first outer BEGIN SEQUENCE structure, either after its respective END statement, or a RECOVER clause if present. The Break statement may optionally pass any type of expression, which may be accepted by the RECOVER statement to allow further recovery handing.

Additionally the Harbour _Error Object_ supports _canDefault_, _canRetry_ and _canSubstitute_ properties, which allows error handlers to perform some preparations, and then request a _Retry Operation_, a _Resume_, or return a [Value][78] to replace the expression triggering the error condition.

Alternatively TRY \[CATCH\] \[FINALLY\] statements are available on _xhb_ library working like the SEQUENCE construct.

## Procedures/Functions

[Procedures][79]/[Functions][80] in Harbour can be specified with the [keywords][81] `PROCEDURE`, or `FUNCTION`. Naming rules are same as those for _Variables_ (up to 63 characters non-case sensitive). Both Procedures and Functions may be qualified by the scope qualifier _STATIC_ to restrict their usage to the scope of the module where defined.

The _INIT_ or _EXIT_ optional qualifiers, will flag the procedure to be automatically invoked just before calling the application startup procedure, or just after quitting the application, respectively. [Parameters][82] passed to a procedure/function appear in the subroutine as local variables, and may accept any type, including references.

Changes to argument variables are not reflected in respective variables passed by the calling procedure/function/method unless explicitly passed BY REFERENCE using the _@_ prefix.

PROCEDURE have no return value, and if used in an Expression context will produce a _NIL_ value.

FUNCTION may return any type by means of the RETURN statement, anywhere in the body of its definition.

An example procedure definition and a function call follows:

## Sample code

The typical "[hello world][83]" program would be:

Or, enclosed in an explicit procedure:

## OOP examples

## Tools

All tools are multiplatform.

## Development

Today Harbour development is led by Viktor Szakáts in collaboration with Przemysław Czerpak who also contributes many components of the core language and supplementary components. HBIDE and some other components especially HBQt, are developed by Pritpal Bedi. Other members of the development community send changes to the [GitHub][84] source repository.[\[3\]][85] As of 2015 Harbour development is active and vibrant.

## Popularity

Although there is no way to measure popularity of Harbour or xBase, the _TIOBE Programming Community Index_[\[4\]][86] As of June 2006 ranked Microsoft Visual FoxPro, a high-profile dialect of xBase, in 12th position of programming languages popularity ranking. FoxPro/xBase ranked in the 25th position As of August 2010. As of September 2010, the Clipper [Usenet][87] [newsgroups][88] [comp.lang.clipper][89] is still active. As of August 2010 Harbour occupied the 16th position in weekly downloads in compiler category and 132nd position in global rank.[\[5\]][90]

## xHarbour comparison

[xHarbour][91] is a fork[\[6\]][92] of the earlier Harbour project. xHarbour takes a more aggressive approach to implementing new features in the language, while Harbour is more conservative in its approach, aiming first of all for an exact replication of Clipper behaviour and then implementing new features and extensions as a secondary consideration. It should also be noted that Harbour is supported on a wide variety of [operating systems][93] while xHarbour only really supports MS Windows and Linux 32-bit.

The Harbour developers have attempted to document all hidden behaviour in the Clipper language and test Harbour-compiled code alongside the same code compiled with Clipper to maintain compatibility.

The Harbour developers explicitly reject extensions to the language where those extensions would break Clipper compatibility. These rejections were softened recently since the new Harbour architecture allows extensions out of the core compiler.

A detailed comparison between extensions implemented in Harbour and xHarbour can be found in the source repository of the project on GitHub.[\[7\]][94]

As of 2009--2010, Harbour has seen a huge increase in its adoption while xHarbour decline as can be seen on its mailing list.[\[8\]][95]

## GUI libraries and tools

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Open_source "Open source"
[2]: /wiki/Cross-platform "Cross-platform"
[3]: /wiki/DOS "DOS"
[4]: /wiki/Clipper_(programming_language) "Clipper (programming language)"
[5]: /wiki/DBase "DBase"
[6]: /wiki/Microsoft_Windows "Microsoft Windows"
[7]: /wiki/Linux "Linux"
[8]: /wiki/Unix "Unix"
[9]: /wiki/BSD "BSD"
[10]: /wiki/Mac_OS_X "Mac OS X"
[11]: /wiki/MINIX_3 "MINIX 3"
[12]: /wiki/Windows_CE "Windows CE"
[13]: /wiki/Pocket_PC "Pocket PC"
[14]: /wiki/Symbian "Symbian"
[15]: /wiki/IOS "IOS"
[16]: /wiki/Android_(operating_system) "Android (operating system)"
[17]: /wiki/QNX "QNX"
[18]: /wiki/VxWorks "VxWorks"
[19]: /wiki/OS/2 "OS/2"
[20]: /wiki/EComStation "EComStation"
[21]: /wiki/BeOS "BeOS"
[22]: /wiki/Haiku_(operating_system) "Haiku (operating system)"
[23]: /wiki/IBM_AIX "IBM AIX"
[24]: /wiki/Clipper_ship "Clipper ship"
[25]: /wiki/DBASE "DBASE"
[26]: /wiki/Advantage_Database_Server "Advantage Database Server"
[27]: #cite_note-1
[28]: /wiki/Transmission_Control_Protocol "Transmission Control Protocol"
[29]: /wiki/ODBC "ODBC"
[30]: /wiki/Object-oriented_programming "Object-oriented programming"
[31]: /wiki/ActiveX_Data_Objects "ActiveX Data Objects"
[32]: /wiki/OLE_Automation "OLE Automation"
[33]: /wiki/MySQL "MySQL"
[34]: /wiki/PostgreSQL "PostgreSQL"
[35]: /wiki/SQLite "SQLite"
[36]: /wiki/Firebird_(database_server) "Firebird (database server)"
[37]: /wiki/Oracle_(database) "Oracle (database)"
[38]: /wiki/RDBMS "RDBMS"
[39]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[40]: /wiki/Write_once,_compile_anywhere "Write once, compile anywhere"
[41]: /wiki/MinGW "MinGW"
[42]: /wiki/XBase "XBase"
[43]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[44]: /wiki/Clang "Clang"
[45]: /wiki/Intel_C%2B%2B_Compiler "Intel C++ Compiler"
[46]: /wiki/Microsoft_Visual_C%2B%2B "Microsoft Visual C++"
[47]: /wiki/Borland_C%2B%2B "Borland C++"
[48]: /wiki/Watcom_C "Watcom C"
[49]: /wiki/Pelles_C "Pelles C"
[50]: /wiki/Sun_Studio_(software) "Sun Studio (software)"
[51]: https://sourceforge.net/projects/qtcontribs/
[52]: #cite_note-2
[53]: /w/index.php?title=Blat_(software)&action=edit&redlink=1 "Blat (software) (page does not exist)"
[54]: /wiki/OpenSSL "OpenSSL"
[55]: /w/index.php?title=FreeImage&action=edit&redlink=1 "FreeImage (page does not exist)"
[56]: /wiki/GD_Graphics_Library "GD Graphics Library"
[57]: /wiki/PCRE "PCRE"
[58]: /wiki/Zlib "Zlib"
[59]: /wiki/Bzip2 "Bzip2"
[60]: /wiki/CURL "CURL"
[61]: /wiki/Cairo_(graphics) "Cairo (graphics)"
[62]: /wiki/Macro_(computer_science) "Macro (computer science)"
[63]: http://www.appsolutions.com/Classy/
[64]: /wiki/Null_pointer "Null pointer"
[65]: /wiki/String_(computer_science) "String (computer science)"
[66]: /wiki/Calendar_date "Calendar date"
[67]: /wiki/Logical "Logical"
[68]: /wiki/Integer "Integer"
[69]: /wiki/Pointer_(computer_programming) "Pointer (computer programming)"
[70]: /wiki/Array_data_type "Array data type"
[71]: /wiki/Object_(computer_science) "Object (computer science)"
[72]: /wiki/Closure_(computer_science) "Closure (computer science)"
[73]: /wiki/Hash_table "Hash table"
[74]: /wiki/Associative_array "Associative array"
[75]: /wiki/Symbol_table "Symbol table"
[76]: /wiki/C_(programming_language) "C (programming language)"
[77]: /wiki/Java_(programming_language) "Java (programming language)"
[78]: /wiki/Value_(computer_science) "Value (computer science)"
[79]: /wiki/Subroutine "Subroutine"
[80]: /wiki/Function_(computer_science) "Function (computer science)"
[81]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[82]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[83]: /wiki/Hello_world "Hello world"
[84]: /wiki/GitHub "GitHub"
[85]: #cite_note-3
[86]: #cite_note-4
[87]: /wiki/Usenet "Usenet"
[88]: /wiki/Newsgroup "Newsgroup"
[89]: https://groups.google.com/group/comp.lang.clipper
[90]: #cite_note-5
[91]: /wiki/XHarbour "XHarbour"
[92]: #cite_note-6
[93]: /wiki/Operating_systems "Operating systems"
[94]: #cite_note-7
[95]: #cite_note-8