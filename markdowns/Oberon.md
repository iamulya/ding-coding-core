**Oberon** is a general-purpose [programming language][0] created in 1986 by Professor [Niklaus Wirth][1] and the latest member of the Wirthian family of [ALGOL][2]-like languages ([Euler][3], [Algol-W][4], [Pascal][5], [Modula][6], and [Modula-2][7]). Oberon was the result of a concentrated effort to increase the power of [Modula-2][7], the direct successor of [Pascal][5], and simultaneously to reduce its complexity. Its principal new feature is the concept of type extension of record types:[\[1\]][8] It permits the construction of new data types on the basis of existing ones and to relate them, deviating from the dogma of strictly static data typing. Type extension is Wirth's way of inheritance reflecting the viewpoint of the parent site. Oberon was developed as part of the implementation of the [Oberon operating system][9] at [ETH Zurich][10] in [Switzerland][11]. The name is from the moon of [Uranus][12], [Oberon][13].

Oberon is still maintained by Wirth and the latest revision is dated May 3, 2016\.

## Design

Oberon is designed with a motto attributed to [Albert Einstein][14] in mind: "Make things as simple as possible, but not simpler." The principal guideline was to concentrate on features that are basic and essential and to omit ephemeral issues. Another factor was recognition of the growth of complexity in languages such as [C++][15] and [Ada][16]: in contrast to these, Oberon emphasizes the use of the library concept for extending the language. Enumeration and subrange types, which were present in Modula-2, have been removed; similarly, set types have been limited to small sets of integers, and the number of low-level facilities has been sharply reduced (most particularly, type transfer functions have been eliminated). Elimination of the remaining potentially-unsafe facilities concludes the most essential step toward obtaining a truly high-level language. Very close type-checking even across modules, strict index-checking at run time, [null-pointer][17] checking, and the safe type extension concept largely allow the programmer to rely on the language rules alone.

The intent of this strategy was to produce a language that is easier to learn, simpler to implement, and very efficient. Oberon compilers have been viewed as compact and fast, while providing adequate code quality compared to commercial compilers.[\[2\]][18]

## Characteristics

The following features characterise the Oberon language:

## Object orientation

Oberon supports extension of record types for the construction of abstractions and heterogeneous structures. In contrast to the later dialects---Oberon-2 and Active Oberon---the original Oberon doesn't have a dispatch mechanism as a language feature but rather as programming technique or design pattern. This gives great flexibility in the OOP world. In the [Oberon operating system][9] two programming techniques have been used in conjunction for the dispatch call: Method suite and Message handler.

## Method suite

In this technique a table of procedure variables is defined and a global variable of this type is declared in the extended module and assigned back in the generic module:

We extend the generic type Figure to a specific shape:

Dynamic dispatch is only done via procedures in Figures module that is the generic module.

## Message handler

This technique consists of replacing the set of methods with a single procedure, which discriminates among the various methods:

We extend the generic type Figure to a specific shape:

In the Oberon operating system both of these techniques are used for dynamic dispatch. The first one is used for a known set of methods; the second is used for any new methods declared in the extension module. For example, if the extension module Rectangles were to implement a new Rotate() procedure, within the Figures module it could only be called via a message handler.

## Implementations and variants

## Oberon

No-cost implementations of Oberon (the language) and Oberon (the operating system) can be found on the Internet (several are from ETHZ itself).

## Oberon-2

A few changes were made to the first released specification (object-oriented programming features were added, the 'FOR' loop was reinstated, for instance); the result was **[Oberon-2][19]**, currently the most common implementation. There is a release called _[Native Oberon][20]_ which includes an operating system, and can directly boot on PC class hardware. A [.NET][21] implementation of Oberon with the addition of some minor .NET-related extensions has also been developed at ETHZ.

Oberon-2 compilers maintained by ETH include versions for Windows, Linux, Solaris, and [macOS][22]. Furthermore, there are implementations for various other operating systems, such as [Atari-TOS][23] or [AmigaOS][24].

There is an Oberon-2 [Lex][25] scanner and [Yacc][26] [parser][27] by Stephen J Bevan of Manchester University, UK, based on the one in the Mössenböck and Wirth reference. It is at version 1.4\.

## Oberon-07

Oberon-07, defined by Niklaus Wirth in 2007 and revised in 2011, 2013, 2014, 2015 and 2016 is based on the original version of Oberon rather than Oberon-2\. The main changes are: explicit numeric conversion functions (e.g. FLOOR and FLT) must be used, the LOOP and EXIT statements have been eliminated, WHILE statements have been extended, CASE statements can be used for type extension tests, RETURN statements can only be connected to the end of a function, imported variables and structured value parameters are read-only and arrays can be assigned without using COPY. For full details, see [The Programming Language Oberon-07][28].

Oberon-07 compilers have been developed for use with 32-bit Windows [Oberon-07M][29] ([Oberon-07 language revision 2008][30]), [Akron's][31] (compiles code for both Windows and Linux), [oberonjs][32] (produces JavaScript code), 32-bit [ARM][33], Cortex-M3 and Cortex-M4 microcontrollers, and a Wirth-designed RISC processor implemented using a Xilinx FPGA Spartan-3 board. Ports to FPGA Spartan-6, Artix-7 and a RISC emulator for Windows (compilable on Linux and OS X, as well as binaries available for Windows) also exist.

## Active Oberon

[Active Oberon][34] is yet another variant of Oberon, which adds objects (with object-centered access protection and local activity control), system-guarded assertions, preemptive priority scheduling and a changed syntax for methods (- type-bound procedures in the Oberon world). Objects may be active, which means that they may be threads or processes. Additionally, Active Oberon has a way to implement operators (including overloading), an advanced syntax for using arrays (see [OberonX language extensions][35] and Proceedings[\[3\]][36] of the 7th Joint Modular Languages Conference 2006 Oxford, UK), and knows about [namespaces][37] (see [Proposal for Module Contexts][38]). The operating system A2 - Bluebottle, especially the kernel, synchronizes and coordinates different active objects.

## Related languages

Development has continued on languages in this family. A further extension of Oberon-2 produced [Component Pascal][39] which was developed for Windows and [classic Mac OS][40] by Oberon microsystems, a commercial company spin-off from ETHZ, and for .NET by [Queensland University of Technology][41]. In addition, the [Lagoona][42] and [Obliq][43] languages carry the Oberon spirit into specialized areas.

ETHZ has released [Active Oberon][34] which supports active objects, and the [Bluebottle operating system][44] and environment (JDK, HTTP, FTP, etc.) for the language. As with many prior designs from ETHZ, versions of both are available for download on the Internet. As this is written, both single and dual [x86][45] CPUs and the [StrongARM][46] family are supported.

Recent .NET development efforts at ETHZ have been focused on a new language called [Zonnon][47]. This includes the features of Oberon and restores some from Pascal (enumerated types, built-in IO) but has some syntactic differences. Additional features include support for active objects, operator overloading and exception handling. Zonnon is available as a plug-in language for the [Microsoft Visual Studio][48] for .NET development environment.

Oberon-V (originally called Seneca, after [Seneca the Younger][49]) is a descendant of Oberon designed for numerical applications on [supercomputers][50], especially vector or pipelined architectures. It includes array constructors and an ALL statement. (See "Seneca - A Language for Numerical Applications on Vectorcomputers", Proc CONPAR 90 - VAPP IV Conf. R. Griesemer, Diss Nr. 10277, ETH Zurich.)

## See also

## References

## External links

## General

## Evolution of Oberon

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[2]: /wiki/ALGOL "ALGOL"
[3]: /wiki/Euler_(programming_language) "Euler (programming language)"
[4]: /wiki/Algol_W "Algol W"
[5]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[6]: /wiki/Modula "Modula"
[7]: /wiki/Modula-2 "Modula-2"
[8]: #cite_note-1
[9]: /wiki/Oberon_operating_system "Oberon operating system"
[10]: /wiki/ETH_Zurich "ETH Zurich"
[11]: /wiki/Switzerland "Switzerland"
[12]: /wiki/Uranus "Uranus"
[13]: /wiki/Oberon_(moon) "Oberon (moon)"
[14]: /wiki/Albert_Einstein "Albert Einstein"
[15]: /wiki/C%2B%2B "C++"
[16]: /wiki/Ada_(programming_language) "Ada (programming language)"
[17]: /wiki/Null_pointer "Null pointer"
[18]: #cite_note-2
[19]: /wiki/Oberon-2 "Oberon-2"
[20]: /wiki/Native_Oberon "Native Oberon"
[21]: /wiki/.NET_Framework ".NET Framework"
[22]: /wiki/MacOS "MacOS"
[23]: /wiki/Atari_TOS "Atari TOS"
[24]: /wiki/AmigaOS "AmigaOS"
[25]: /wiki/Lex_(software) "Lex (software)"
[26]: /wiki/Yacc "Yacc"
[27]: /wiki/Parser "Parser"
[28]: http://www.inf.ethz.ch/personal/wirth/Oberon/Oberon07.Report.pdf
[29]: http://www.exaprog.com/
[30]: http://exaprog.com/Oberon07.Report.pdf
[31]: https://sites.google.com/site/oberon07compiler/versii
[32]: http://oberspace.dyndns.org/oberonjs.html
[33]: /wiki/ARM_architecture "ARM architecture"
[34]: /wiki/Active_Oberon "Active Oberon"
[35]: http://www.ethoberon.ethz.ch/native/compiler/x.index.html
[36]: #cite_note-3
[37]: /wiki/Namespace "Namespace"
[38]: http://www.ocp.inf.ethz.ch/wiki/Documentation/Language?action=download&upname=contexts.pdf
[39]: /wiki/Component_Pascal "Component Pascal"
[40]: /wiki/Classic_Mac_OS "Classic Mac OS"
[41]: /wiki/Queensland_University_of_Technology "Queensland University of Technology"
[42]: /wiki/Lagoona_programming_language "Lagoona programming language"
[43]: /wiki/Obliq "Obliq"
[44]: /wiki/Bluebottle_operating_system "Bluebottle operating system"
[45]: /wiki/X86 "X86"
[46]: /wiki/StrongARM "StrongARM"
[47]: /wiki/Zonnon "Zonnon"
[48]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[49]: /wiki/Seneca_the_Younger "Seneca the Younger"
[50]: /wiki/Supercomputer "Supercomputer"