**Rexx** (**Restructured Extended Executor**) is an [interpreted][0] [programming language][1] developed at [IBM][2] by [Mike Cowlishaw][3]. It is a structured, [high-level programming language][4] designed for ease of learning and reading. Proprietary and [open source][5] REXX [interpreters][6] exist for a wide range of computing platforms; [compilers][7] exist for IBM [mainframe computers][8].[\[2\]][9]

Rexx is widely used as a [scripting][10] and [macro][11] language, and is often used for processing data and text and generating reports; these similarities with [Perl][12] mean that Rexx works well in [Common Gateway Interface][13] (CGI) programming and it is indeed used for this purpose. Rexx is the primary scripting language in some operating systems, e.g. [OS/2][14], [MVS][15], [VM][16], [AmigaOS][17], and is also used as an internal macro language in some other software, such as [KEDIT][18], [THE][19] and the [ZOC][20] terminal emulator. Additionally, the Rexx language can be used for scripting and macros in any program that uses Windows Scripting Host ActiveX scripting engines languages (e.g. VBScript and JScript) if one of the Rexx engines is installed.

Rexx is supplied with VM/SP on up, TSO/E Version 2 on up, OS/2 (1.3 and later, where it is officially named _Procedures Language/2_), AmigaOS Version 2 on up, PC DOS (7.0 or 2000), and Windows NT 4.0 (Resource Kit: Regina). REXX scripts for OS/2 share the filename extension .cmd with other scripting languages, and the first line of the script specifies the interpreter to be used. REXX macros for REXX-aware applications use extensions determined by the application. In the late 1980s Rexx became the common scripting language for [IBM Systems Application Architecture][21], where it was renamed "SAA Procedure Language REXX."

A Rexx script or command is sometimes referred to as an _EXEC_ in a nod to Rexx's role as a replacement for the older [EXEC][22] command language on [CP/CMS][23] and VM/370 and [EXEC 2][24] command language on VM/SP.

## Features

Rexx has the following characteristics and features:

Rexx has just twenty-three, largely self-evident, instructions (such as `call`, `parse`, and `select`) with minimal punctuation and formatting requirements. It is essentially an almost [free-form language][25] with only one data-type, the character string; this philosophy means that all data are visible (symbolic) and debugging and tracing are simplified.

Rexx's syntax looks similar to [PL/I][26], but has fewer notations; this makes it harder to parse (by program) but easier to use, except for cases where PL/I habits may lead to surprises. One of the REXX design goals was the [principle of least astonishment][27].[\[3\]][28]

## History

Rexx was designed and first implemented, in [assembly language][29], as an 'own-time' project between 20 March 1979 and mid-1982 by [Mike Cowlishaw][3] of IBM, originally as a [scripting programming language][30] to replace the languages [EXEC][31] and [EXEC 2][24].[\[4\]][32] It was designed to be a [macro][11] or scripting language for any system. As such, Rexx is considered a precursor to [Tcl][33] and [Python][34]. Rexx was also intended by its creator to be a simplified and easier to learn version of the [PL/I][26] programming language. However, some differences from PL/I may trip up the unwary.

It was first described in public at the SHARE 56 conference in Houston, Texas, in 1981,[\[5\]][35] where customer reaction, championed by Ted Johnston of [SLAC][36], led to it being shipped as an IBM product in 1982\.

Over the years IBM included Rexx in almost all of its operating systems ([VM/CMS][37], [MVS TSO/E][15], [AS/400][38], [VSE/ESA][39], [AIX][40], [PC DOS][41], and [OS/2][14]), and has made versions available for [Novell NetWare][42], [Windows][43], [Java][44], and [Linux][45].

The first non-IBM version was written for [PC DOS][41] by Charles Daney in 1984/5\. The first compiler version appeared in 1987, written for CMS by Lundin and Woodruff.[\[6\]][46] Other versions have also been developed for [Atari][47], [AmigaOS][17], [Unix][48] (many variants), [Solaris][49], [DEC][50], [Windows][43], [Windows CE][51], [Pocket PC][52], [DOS][53], [Palm OS][54], [QNX][55], [OS/2][14], [Linux][45], [BeOS][56], [EPOC32][57]/[Symbian][58], [AtheOS][59], [OpenVMS][60], Apple [Macintosh][61], and [Mac OS X][62].[\[7\]][63]

The [Amiga][64] version of Rexx, called [ARexx][65], was included with AmigaOS 2 onwards and was popular for scripting as well as application control. Many Amiga applications have an "ARexx port" built into them which allows control of the application from Rexx. One single Rexx script could even switch between different Rexx ports in order to control several running applications.

In 1990, Cathy Dager of SLAC organized the first independent Rexx symposium, which led to the forming of the REXX Language Association. Symposia are held annually.

Several [freeware][66] versions of Rexx are available. In 1992, the two most widely used [open-source][67] ports appeared: Ian Collier's REXX/imc for Unix and Anders Christensen's Regina (later adopted by Mark Hessling) for Windows and Unix. [BREXX][68] is well known for WinCE and Pocket PC platforms, and has been "back-ported" to VM/370 and [MVS][15].

OS/2 had a visual development system from Watcom [VX-REXX][69] another dialect was VisPro REXX from Hockware.

Portable Rexx by Kilowatt and Personal Rexx by Quercus are two Rexx interpreters designed for MS-DOS and can of course be run under Windows as well using a command prompt. Since the mid-1990s, two newer variants of Rexx have appeared:

In 1996 [American National Standards Institute][70] (ANSI) published a standard for Rexx: ANSI X3.274--1996 "Information Technology -- Programming Language REXX".[\[8\]][71] More than two dozen books on Rexx have been published since 1985\.

Rexx marked its 25th anniversary on 20 March 2004, which was celebrated at the REXX Language Association's 15th International REXX Symposium in Böblingen, Germany, in May 2004\.

On October 12, 2004, IBM announced their plan to release their [Object REXX][72] implementation's sources under the [Common Public License][73]. Recent releases of Object REXX contain an ActiveX WSH scripting engine implementing this version of the Rexx language.

On February 22, 2005, the first public release of Open Object Rexx (ooRexx) was announced. This product contains a WSH scripting engine which allows for programming of the Windows operating system and applications with Rexx in the same fashion in which [Visual Basic][74] and [JScript][75] are implemented by the default WSH installation and [Perl][12], [Tcl][33], [Python][34] third-party scripting engines.

A command-line Rexx interpreter is also installed with ooRexx, and it is also possible to run ooRexxScript programs from the command line by means of the CScript command (WScript may also be run from the command line) invoking the Windows Scripting Host.

Rexx/Tk, a toolkit for graphics to be used in Rexx programmes in the same fashion as [Tcl/Tk][76] is widely available.

A Rexx IDE, RxxxEd, has been developed for Windows.[\[9\]][77] RxSock for network communication as well as other add-ons to and implementations of Regina Rexx have been developed, and a Rexx interpreter for the Windows command line is supplied in most Resource Kits for various versions of Windows and works under all of them as well as MS-DOS.

## Spelling and capitalization

Originally the language was called _Rex_ (_Reformed Executor_); the extra "X" was added to avoid collisions with other products' names. REX was originally all uppercase because the mainframe code was uppercase oriented. The style in those days was to have all-caps names, partly because almost all code was still all-caps then. For the product it became REXX, and both editions of Mike Cowlishaw's book use all-caps. The expansion to _REstructured eXtended eXecutor_ was used for the system product in 1984\.[\[3\]][28]

## Syntax

## Looping

The loop control structure in Rexx begins with a `DO` and ends with an `END` but comes in several varieties. NetRexx uses the keyword `LOOP` instead of `DO` for looping, while ooRexx treats `LOOP` and `DO` as equivalent when looping.

## Conditional loops

Rexx supports a variety of traditional structured-programming loops while testing a condition either before (`do while`) or after (`do until`) the list of instructions are executed:

## Repetitive loops

Like most languages, Rexx can loop while incrementing an index variable and stop when a limit is reached:

The increment may be omitted and defaults to 1\. The limit can also be omitted, which makes the loop continue forever.

Rexx permits counted loops, where an expression is computed at the start of the loop and the instructions within the loop are executed that many times:

Rexx can even loop until the program is terminated:

A program can break out of the current loop with the `leave` instruction, which is the normal way to exit a `do forever` loop, or can short-circuit it with the `iterate` instruction.

## Combined loops

Most unusually, Rexx allows both conditional and repetitive elements to be combined in the same loop:[\[10\]][78]

## Conditionals

Testing conditions with `IF`:

The `ELSE` clause is optional.

For single instructions, `DO` and `END` can also be omitted:

Indentation is optional, but it helps improve the readability.

## Testing for multiple conditions

`SELECT` is Rexx's [CASE structure][79], like many other constructs derived from [PL/I][26]. Like some implementations of CASE constructs in other dynamic languages, Rexx's `WHEN` clauses specify full conditions, which need not be related to each other. In that, they are more like cascaded sets of `IF-THEN-ELSEIF-THEN-...-ELSE` code than they are like the C or Java `switch` statement.

The `NOP` instruction performs "no operation", and is used when the programmer wishes to do nothing in a place where one or more instructions would be required.

The OTHERWISE clause is optional. If omitted and no WHEN conditions are met, then the SYNTAX condition is raised.

## Simple variables

Variables in Rexx are typeless, and initially are evaluated as their names, in upper case. Thus a variable's type can vary with its use in the program:

## Compound variables

Unlike many other programming languages, classic Rexx has no direct support for arrays of variables addressed by a numerical index. Instead it provides _compound variables_. A compound variable consists of a stem followed by a tail. A . (dot) is used to join the stem to the tail. If the tails used are numeric, it is easy to produce the same effect as an array.

Afterwards the following variables with the following values exist: `stem.1 = 9, stem.2 = 8, stem.3 = 7`...

Unlike arrays, the index for a stem variable is not required to have an integer value. For example, the following code is valid:

In Rexx it is also possible to set a default value for a stem.

After these assignments the term `stem.3` would produce `'Unknown'`.

The whole stem can also be erased with the DROP statement.

This also has the effect of removing any default value set previously.

By convention (and not as part of the language) the compound `stem.0` is often used to keep track of how many items are in a stem, for example a procedure to add a word to a list might be coded like this:

It is also possible to have multiple elements in the tail of a compound variable. For example:

Multiple numerical tail elements can be used to provide the effect of a multi-dimensional array.

Features similar to Rexx compound variables are found in many other languages (including [associative arrays][80] in [AWK][81], [hashes][82] in [Perl][12] and Hashtables in [Java][44]). Most of these languages provide an instruction to iterate over all the keys (or _tails_ in Rexx terms) of such a construct, but this is lacking in classic Rexx. Instead it is necessary to keep auxiliary lists of tail values as appropriate. For example, in a program to count words the following procedure might be used to record each occurrence of a word.

and then later:

At the cost of some clarity it is possible to combine these techniques into a single stem:

and later:

Rexx provides no safety net here, so if one of the words happens to be a whole number less than `dictionary.0` this technique will fail mysteriously.

Recent implementations of Rexx, including [IBM][2]'s Object REXX and the open source implementations like ooRexx include a new [language construct][83] to simplify iteration over the value of a stem, or over another collection object such as an array, table or list.

## Keyword instructions

## PARSE

The `PARSE` instruction is particularly powerful; it combines some useful string-handling functions. Its syntax is:

where _origin_ specifies the source:

and _template_ can be:

`upper` is optional; if specified, data will be converted to upper case before parsing.

Examples:

Using a list of variables as template

displays the following:

Using a delimiter as template:

also displays the following:

Using column number delimiters:

displays the following:

A template can use a combination of variables, literal delimiters, and column number delimiters.

## INTERPRET

The INTERPRET instruction evaluates its argument and treats its value as a Rexx statement. Sometimes INTERPRET is the clearest way to perform a task, but it is often used where clearer code is possible using, e.g., `value()`.

The other reasons being Rexx's (decimal) arbitrary precision arithmetic (including fuzzy comparisons), use of the PARSE statement with programmatic templates, stemmed arrays, and sparse arrays. --\>

This displays 16 and exits. Because variable contents in Rexx are strings, including rational numbers with exponents and even entire programs, Rexx offers to interpret strings as evaluated expressions.

This feature could be used to pass functions as _function parameters_, such as passing SIN or COS to a procedure to calculate integrals.

Rexx offers only basic math functions like ABS, DIGITS, MAX, MIN, SIGN, RANDOM, and a complete set of hex plus binary conversions with bit operations. More complex functions like SIN had to be implemented from scratch or obtained from third party external [libraries][84]. Some external libraries, typically those implemented in traditional languages, did not support extended precision.

Later versions (non-classic) support `CALL variable` constructs. Together with the built-in function `VALUE`, CALL can be used in place of many cases of `INTERPRET`. This is a classic program:

A slightly more sophisticated "Rexx calculator":

`PULL` is shorthand for `parse upper pull`. Likewise, `ARG` is shorthand for `parse upper arg`.

The power of the INTERPRET instruction had other uses. The [Valour software][85] package relied upon Rexx's interpretive ability to implement an [OOP][86] environment. Another use was found in an unreleased [Westinghouse][87] product called _Time Machine_ that was able to fully recover following a fatal error.

## NUMERIC

## SIGNAL

The SIGNAL instruction is intended for abnormal changes in the flow of control (see the next section). However, it can be misused and treated like the [GOTO][88] statement found in other languages (although it is not strictly equivalent, because it terminates loops and other constructs). This can produce difficult-to-read code.

## Error handling and exceptions

It is possible in Rexx to intercept and deal with errors and other exceptions, using the SIGNAL instruction. There are seven system conditions: ERROR, FAILURE, HALT, NOVALUE, NOTREADY, LOSTDIGITS and SYNTAX. Handling of each can be switched on and off in the source code as desired.

The following program will run until terminated by the user:

Many Rexx programmers believe that relying on the default value of symbols is dangerous and employ `signal on novalue` or a similar statement. This intercepts uses of undefined variables, which would otherwise get their own (upper case) name as their value. Regardless of the state of the `NOVALUE` condition, the status of a variable can always be checked with the built-in function `SYMBOL` returning VAR for defined variables.

The `VALUE` function can be used to get the value of variables without triggering a `NOVALUE` condition, but its main purpose is to read and set [environment][89] variables, similar to [POSIX][90] `getenv` and `putenv`.

## Conditions

When a condition is handled by `SIGNAL ON`, the `SIGL` and `RC` system variables can be analyzed to understand the situation. RC contains the Rexx error code and SIGL contains the line number where the error arose.

Beginning with Rexx version 4 conditions can get names, and there's also a `CALL ON` construct. That's handy if external functions do not necessarily exist:

## See also

## References

## Further reading

## External links

[0]: /wiki/Interpreted_language "Interpreted language"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/IBM "IBM"
[3]: /wiki/Mike_Cowlishaw "Mike Cowlishaw"
[4]: /wiki/High-level_programming_language "High-level programming language"
[5]: /wiki/Open_source "Open source"
[6]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[7]: /wiki/Compiler "Compiler"
[8]: /wiki/Mainframe_computer "Mainframe computer"
[9]: #cite_note-2
[10]: /wiki/Scripting_language "Scripting language"
[11]: /wiki/Macro_(computer_science) "Macro (computer science)"
[12]: /wiki/Perl "Perl"
[13]: /wiki/Common_Gateway_Interface "Common Gateway Interface"
[14]: /wiki/OS/2 "OS/2"
[15]: /wiki/MVS "MVS"
[16]: /wiki/VM_(operating_system) "VM (operating system)"
[17]: /wiki/AmigaOS "AmigaOS"
[18]: /wiki/XEDIT#PC_and_Unix_adaptations "XEDIT"
[19]: /wiki/The_Hessling_Editor "The Hessling Editor"
[20]: /wiki/ZOC_(software) "ZOC (software)"
[21]: /wiki/IBM_Systems_Application_Architecture "IBM Systems Application Architecture"
[22]: /wiki/CMS_EXEC "CMS EXEC"
[23]: /wiki/CP/CMS "CP/CMS"
[24]: /wiki/EXEC_2 "EXEC 2"
[25]: /wiki/Free-form_language "Free-form language"
[26]: /wiki/PL/I "PL/I"
[27]: /wiki/Principle_of_least_astonishment "Principle of least astonishment"
[28]: #cite_note-POLA-3
[29]: /wiki/Assembly_language "Assembly language"
[30]: /wiki/Scripting_programming_language "Scripting programming language"
[31]: /wiki/EXEC "EXEC"
[32]: #cite_note-4
[33]: /wiki/Tcl "Tcl"
[34]: /wiki/Python_(programming_language) "Python (programming language)"
[35]: #cite_note-5
[36]: /wiki/SLAC "SLAC"
[37]: /wiki/VM/CMS "VM/CMS"
[38]: /wiki/IBM_System_i "IBM System i"
[39]: /wiki/VSE/ESA "VSE/ESA"
[40]: /wiki/IBM_AIX_(operating_system) "IBM AIX (operating system)"
[41]: /wiki/PC_DOS "PC DOS"
[42]: /wiki/Novell_NetWare "Novell NetWare"
[43]: /wiki/Microsoft_Windows "Microsoft Windows"
[44]: /wiki/Java_(programming_language) "Java (programming language)"
[45]: /wiki/Linux "Linux"
[46]: #cite_note-TR-6
[47]: /wiki/Atari "Atari"
[48]: /wiki/Unix "Unix"
[49]: /wiki/Solaris_(operating_system) "Solaris (operating system)"
[50]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[51]: /wiki/Windows_CE "Windows CE"
[52]: /wiki/Pocket_PC "Pocket PC"
[53]: /wiki/DOS "DOS"
[54]: /wiki/Palm_OS "Palm OS"
[55]: /wiki/QNX "QNX"
[56]: /wiki/BeOS "BeOS"
[57]: /wiki/EPOC32 "EPOC32"
[58]: /wiki/Symbian "Symbian"
[59]: /wiki/AtheOS "AtheOS"
[60]: /wiki/OpenVMS "OpenVMS"
[61]: /wiki/Macintosh "Macintosh"
[62]: /wiki/Mac_OS_X "Mac OS X"
[63]: #cite_note-7
[64]: /wiki/Amiga "Amiga"
[65]: /wiki/ARexx "ARexx"
[66]: /wiki/Freeware "Freeware"
[67]: /wiki/Open-source "Open-source"
[68]: http://ftp.gwdg.de/pub/languages/rexx/brexx/html/rx.html
[69]: /wiki/VX-REXX "VX-REXX"
[70]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[71]: #cite_note-8
[72]: /wiki/Object_REXX "Object REXX"
[73]: /wiki/Common_Public_License "Common Public License"
[74]: /wiki/Visual_Basic "Visual Basic"
[75]: /wiki/JScript "JScript"
[76]: /wiki/Tcl/Tk "Tcl/Tk"
[77]: #cite_note-9
[78]: #cite_note-TRL-10
[79]: /wiki/Switch_statement "Switch statement"
[80]: /wiki/Associative_array "Associative array"
[81]: /wiki/AWK_programming_language "AWK programming language"
[82]: /wiki/Hash_table "Hash table"
[83]: /wiki/Language_construct "Language construct"
[84]: /wiki/Library_(computing) "Library (computing)"
[85]: /wiki/Valour_(software) "Valour (software)"
[86]: /wiki/Object-oriented_programming "Object-oriented programming"
[87]: /wiki/Westinghouse_Electric_(1886) "Westinghouse Electric (1886)"
[88]: /wiki/GOTO "GOTO"
[89]: /wiki/Env_(shell) "Env (shell)"
[90]: /wiki/POSIX "POSIX"