**Fortress** is a discontinued experimental [programming language][0] for [high-performance computing][1], created by [Sun Microsystems][2] with funding from [DARPA][3]'s [High Productivity Computing Systems][4] project. One of the language designers was [Guy L. Steele Jr.][5], whose previous work includes [Scheme][6], [Common Lisp][7], and [Java][8].

## Design

The name "Fortress" was intended to connote a secure [Fortran][9], i.e., "a language for high-performance computation that provides abstraction and type safety on par with modern programming language principles".[\[1\]][10] Language features included implicit [parallelism][11], [Unicode][12] support and concrete [syntax][13] similar to [mathematical notation][14]. The language was not designed to be similar to Fortran. Syntactically, it most resembles [Scala][15], [Standard ML][16], and [Haskell][17]. Fortress was designed from the outset to have multiple syntactic stylesheets. Source code can be rendered as [ASCII][18] text, in [Unicode][12], or as a prettied image. This would allow for support of mathematical symbols and other symbols in the rendered output for easier reading. An [emacs][19]-based tool called _fortify_ transforms ASCII-based Fortress source code into [LaTeX][20] output.[\[2\]][21]

Fortress was also designed to be both highly parallel and have rich functionality contained within libraries, drawing from Java. For example, the `for` loop construct was a parallel operation, which would not necessarily iterate in a strictly linear manner, depending on the underlying implementation. However, the `for` construct was a library function and could be replaced by another version of the programmer's liking rather than being built into the language.

Fortress' designers made its syntax as close as possible to [pseudocode][22] and analyzed hundreds of [computer science][23] and [mathematics][24] papers, courses, books and journals using pseudocode to extract the common usage patterns of the English language and standard mathematical notation when used to represent [algorithms][25] in pseudocode. Then they made the compiler trying to maintain a one-to-one correspondence between pseudocode and executable Fortress.[\[3\]][26]\[_[better source needed][27]_\]

## History

Fortress was one of three languages created with funding from the [High Productivity Computing Systems][4] project; the others were [X10][28] from IBM and [Chapel][29] from [Cray, Inc][30]. In November 2006, when DARPA approved funding for the third phase of the HPCS project, X10 and Chapel were funded, but Fortress was not,[\[4\]][31] leading to uncertainty about the future of Fortress.

In January 2007, Fortress was transformed into "an open-source project with an open-source community. People outside Sun can write Fortress code and test it using the open-source Fortress interpreter."[\[5\]][32] Version 1.0 of the Fortress Language Specification was released in April 2008, along with a compliant implementation targeting the [Java Virtual Machine][33].

In July 2012, Steele announced that active development on Fortress would cease after a brief winding-down period, citing complications with using Fortress's type system on existing virtual machines.[\[6\]][34]

## Example: Hello world!

This is the Fortress version of the archetypal [hello world][35] program, as presented in the _Fortress Reference Card_:[\[2\]][21]

The _export_ statement makes the program [executable][36] and every executable program in Fortress must implement the _run()_ function. The file where the program is saved for compilation must have the same name as the one specified in the initial _component_ statement. The _println()_ function is what outputs the "Hello, World!" words on the screen.

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/High-performance_computing "High-performance computing"
[2]: /wiki/Sun_Microsystems "Sun Microsystems"
[3]: /wiki/DARPA "DARPA"
[4]: /wiki/High_Productivity_Computing_Systems "High Productivity Computing Systems"
[5]: /wiki/Guy_L._Steele_Jr. "Guy L. Steele Jr."
[6]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[7]: /wiki/Common_Lisp "Common Lisp"
[8]: /wiki/Java_(programming_language) "Java (programming language)"
[9]: /wiki/Fortran "Fortran"
[10]: #cite_note-spec-1
[11]: /wiki/Parallel_programming "Parallel programming"
[12]: /wiki/Unicode "Unicode"
[13]: /wiki/Syntax "Syntax"
[14]: /wiki/Mathematical_notation "Mathematical notation"
[15]: /wiki/Scala_(programming_language) "Scala (programming language)"
[16]: /wiki/Standard_ML "Standard ML"
[17]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[18]: /wiki/ASCII "ASCII"
[19]: /wiki/Emacs "Emacs"
[20]: /wiki/LaTeX "LaTeX"
[21]: #cite_note-java.net-2
[22]: /wiki/Pseudocode "Pseudocode"
[23]: /wiki/Computer_science "Computer science"
[24]: /wiki/Mathematics "Mathematics"
[25]: /wiki/Algorithm "Algorithm"
[26]: #cite_note-3
[27]: /wiki/Wikipedia:NOTRS "Wikipedia:NOTRS"
[28]: /wiki/X10_(programming_language) "X10 (programming language)"
[29]: /wiki/Chapel_(programming_language) "Chapel (programming language)"
[30]: /wiki/Cray "Cray"
[31]: #cite_note-4
[32]: #cite_note-5
[33]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[34]: #cite_note-over-6
[35]: /wiki/Hello_world "Hello world"
[36]: /wiki/Executable_program "Executable program"