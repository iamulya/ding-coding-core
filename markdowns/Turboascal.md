**Turbo Pascal** is a software development system that includes a [compiler][0] and an [integrated development environment][1] (IDE) for the [Pascal][2] [programming language][3] running on [CP/M][4], [CP/M-86][5], and [MS-DOS][6], developed by [Borland][7] under [Philippe Kahn][8]'s leadership. For versions 6 and 7 (last), both a lower-priced Turbo Pascal and more expensive **Borland Pascal** were produced; Borland Pascal was more oriented towards professional software development, with more libraries and standard library source code. The name Borland Pascal is also used more generically for Borland's dialect of the Pascal programming language, significantly different from Standard Pascal.

Borland has released three old versions of Turbo Pascal free of charge because of their historical interest: the original Turbo Pascal (now known as 1.0), and versions 3.02 and 5.5 for DOS.[\[2\]][9][\[3\]][10][\[4\]][11]

## Motivation and release

[Philippe Kahn][8] first saw an opportunity for Borland, his newly formed software company, in the field of programming tools. Historically, the vast majority of programmers saw their workflow in terms of the edit/compile/link cycle, with separate tools dedicated to each task. Programmers wrote [source code][12] using a [text editor][13]; the source code was then compiled into [object code][14] (often requiring multiple passes), and a [linker][15] combined object code with runtime libraries to produce an executable program.

In the early IBM PC market (1981--83) the major [programming tool][16] vendors all made compilers that worked in a similar fashion. For example, the [Microsoft Pascal][17] system consisted of two compiler passes and a final linking pass (which could take minutes on systems with only floppy disks for secondary storage, although programs were very much smaller than they are today). This process was less resource-intensive than the later [integrated development environment][1] (IDE). Vendors of software development tools aimed their products at professional developers, and the price for these basic tools plus ancillary tools like [profilers][18] ran into the hundreds of dollars.

Kahn's idea was to package all these functions in an integrated programming toolkit designed to have much better performance and resource utilisation than the usual professional development tools, and charge a low price for a package integrating a custom text editor, compiler, and all functionality need to produce executable programs. The program was sold by direct mail order for $49.95, without going through established sales channels (retailers or resellers).

Unlike some other development tools, Turbo Pascal disks had no [copy protection][19]. Turbo Pascal came with the famous "Book License": "You must treat this software _just like a book_ ... \[it\] may be used by any number of people ... may be freely moved from one computer location to another, so long as there is no possibility of it being used at one location while it's being used at another."[\[5\]][20]

## Reception

[Jerry Pournelle][21] of _[BYTE][22]_ wrote in February 1984 that Turbo Pascal "comes close to what I think the computer industry is headed for: well documented, standard, plenty of good features, and a reasonable price". Pournelle disliked the requirement to buy another license to distribute binaries, but noted that "it turns out not to be a lot more. Borland only wants another $100" more than the $49.95 base price, and that "my first impression of Turbo is that it's probably worth $149.95\. It looks to do everything [MT+][23] _with the Speed Programming Package_ does, and maybe even do it faster and better".[\[6\]][24] Three _BYTE_ reviewers praised Turbo Pascal in July 1984\. One called the DOS version "without doubt, the best software value I have ever purchased", and another called the CP/M version "an excellent product ... \[Borland\] deserves praise for this high-value product". The third stated that it was "not a good compiler for developing massive applications", but added that it was greatly superior to [BASIC][25], the programming language usually associated with home computers at the time. He concluded that Turbo Pascal was "a bargain that shouldn't be passed up".[\[7\]][26]

Despite finding what it described as "a serious bug" in version 3.0, and decreased compatibility with [PC clones][27], the magazine in February 1986 stated that "it is hard to avoid recommending Turbo to anyone who wants to program in Pascal", citing improved speed and graphic routines.[\[8\]][28] When reviewing four other Pascal compilers in December 1986, _BYTE_ described Turbo Pascal as "practical and attractive to programmers at all levels of expertise".[\[9\]][29] [Bruce Webster][30] also praised the language in the magazine, stating in August 1985 that Turbo Pascal "is best known for its small size, incredible compile speeds, and fast execution times". He noted that the software's quality and low price had been especially surprising after the "[JRT Pascal][31] fiasco", and stated that even at the new higher $69.95 price, version 3.0 was "probably still the best software deal on the market".[\[10\]][32]

_[PC Magazine][33]_ was similarly complimentary in November 1984, stating that "nothing like Turbo Pascal has ever existed for PC-DOS before". It praised the software's low price, speed, unusually good documentation for a compiler, and noted the existence of many utilities from other companies that hoped to benefit from Turbo Pascal's popularity. The review stated that the IDE that simplified the edit-compile-run-debug loop made Turbo Pascal accessible to new programmers like BASIC.[\[11\]][34]

Borland sold about 250,000 copies of Turbo Pascal in two years, which Webster described as "an amazing figure for a computer language".[\[10\]][32] He reported six months later that the figure had risen to "more than 400,000 copies in a marketplace that had been estimated as having only 30,000 potential buyers".[\[12\]][35]

## CP/M and DOS versions

The Turbo Pascal compiler was based on the Blue Label Pascal compiler originally produced for the NasSys cassette-based operating system of the [Nascom][36] microcomputer in 1981 by [Anders Hejlsberg][37]. Borland licensed Hejlsberg's "PolyPascal" compiler core (**Poly Data** was the name of Hejlsberg's company in Denmark), and added the user interface and editor. Anders Hejlsberg joined the company as an employee and was the architect for all versions of the Turbo Pascal compiler and the first three versions of Borland [Delphi][38].[\[2\]][9]

The compiler was first released as Compas Pascal for [CP/M][4], and then released on November 20, 1983 as Turbo Pascal for CP/M (including the [Apple II][39] computer when fitted with a [Z-80 SoftCard][40], effectively converting the [6502][41]-based Apple into a CP/M machine, the Commodore 64 with CP/M cartridge, and the later [DEC Rainbow][42]), CP/M-86, and MS-DOS machines. On its launch in the [United States][43] market, Turbo Pascal retailed for [USD][44]49.99, a very low price for a compiler at the time. The integrated Pascal compiler was of good quality compared to other Pascal products of the time.[\[13\]][45]

The [Turbo][46] name alluded to the speed of compilation and of the executables produced. The edit/compile/run cycle was fast compared to other Pascal implementations because everything related to building the program was stored in RAM, and because it was a [one-pass compiler][47] written in [assembly language][48]. Compilation was much faster than compilers for other languages (even Borland's own later compilers for C),\[_[citation needed][49]_\] and other Pascal compilers, and programmer time was also saved since the program could be compiled and run from the IDE. The execution speed of these [COM][50]-format programs was a revelation for developers whose only prior experience programming microcomputers was with [interpreted][51] BASIC or [UCSD Pascal][52], which compiled to [p-code][53] which was then interpreted at runtime.

There were different versions of Turbo Pascal for computers running MS-DOS, CP/M, or CP/M-86 with 64 KB of memory and at least one floppy disk drive. The CP/M version could run on the many CP/M machines of the time with [8080][54] or [Z80][55] processors, or an Apple \]\[ with Z80 card. The MS-DOS and CP/M-86 versions ran on the many [8086][56] and [8088][57] machines which became available, including the IBM PC. The installer, lister, and compiler with its IDE, and the source code for a simple spreadsheet program called MicroCalc written by Philippe Kahn as a demonstration, would fit on a single floppy disc. A disc copy without MicroCalc would accommodate the source code and compiled executable of a reasonable-sized program---as it was common at the time for users to have only a single floppy drive as [mass storage][58], it was a great convenience to be able to fit both the compiler and the program being written on a single disc, avoiding endless disc swapping.

[Bill Gates][59] saw the success of Turbo Pascal "in very personal terms, and 'couldn't understand why \[Microsoft's\] stuff was so slow. He would bring in poor [Greg Whitten][60] \[programming director of Microsoft languages\] and yell at him for half an hour.' He couldn't understand why Kahn had been able to beat an established competitor like Microsoft."[\[14\]][61]

At the time 8080/Z80/8088/8086 machines had limited computing resources. In particular [RAM][62] was expensive. The [architecture][63] of the various machines running DOS additionally limited the maximum to under 1 MB (e.g., [machines hardware-compatible with the IBM PC][64] were limited to 640 KB), although nothing approaching this limit was affordable for most users.

The TP IDE was very advanced for its day. It was able to perform well and compile very fast with the amount of RAM on a typical home computer. The IDE was simple and intuitive to use, and had a well-organized system of menus. Early versions of the editor used [WordStar][65] key functions, which was the [de facto][66] standard at the time. Later versions of the IDE, designed for PCs with more disk space and memory, could display the definitions of the keywords of the language by putting the cursor over a keyword and pressing the F1 key (conventionally used to display help). Many definitions included example code.

In addition to standard executable programs, the compiler could generate [Terminate and Stay Resident][67] (TSR) programs, small utilities that stayed in memory and let the computer do other tasks---running several programs at the same time, [multitasking][68], was not otherwise available. Borland itself produced a small application suite called [Sidekick][69] that was a TSR letting the user keep a diary, notes, and so forth.

## Versions 2--7

Versions 2 and 3 were incremental improvements to the original Turbo Pascal, a basic all-in-one system, working in memory and producing .COM executable files for DOS and CP/M, and equivalent .CMD executables for CP/M-86 (totally different from .CMD batch files later used in 32-bit Microsoft Windows).[\[3\]][10] Source code files were limited to 64 KB to simplify the IDE, and DOS .COM files were limited to 64 KB each of code, stack and global (static) variables. Program source code could be extended by the use of Included files, and the .COM programs could be [overlaid][70],[\[15\]][71] effectively using virtual memory if they would not otherwise fit in memory.

Version 4, released in 1987, was a total rewrite, with both [look and feel][72] and internal operation much changed; versions 5 to 7 were incremental improvements and expansions. The compiler generated executables in [.EXE][73] format under DOS, rather than the simpler but more restricted .COM executables. The by-then-obsolete CP/M and CP/M-86 operating system versions were dropped when TP was rewritten. Version 4 introduced units, and a full-screen text user interface with pull-down menus; earlier versions had a text-based menu screen and a separate full-screen editor. ([Microsoft Windows][74] was still very experimental when the first version was released, and even [mice][75] were rare.)

Colour displays were replacing monochrome; TP version 5.0 introduced the Borland blue screen, used by Borland's DOS compilers until the end of this product line in the mid-1990s.

Later versions came in two packages with the same version number: a less expensive "Turbo" package, and a "Borland" package with enhanced capabilities and more add-ons.

## Assembly language

While all versions of Turbo Pascal could include inline [machine code][76], starting with version 6 it was possible to integrate [assembly language][48] within Pascal source code.[\[16\]][77]

Support for the [8086 memory model][78] was provided by inline assembly, compiler options, and language extensions such as the "absolute" keyword. The [Turbo Assembler][79], TASM, a standard x86 assembler independent of TP source-compatible with the widely used [Microsoft Macro Assembler][80] MASM, was supplied with the enhanced "Borland Pascal" versions.

## Debugging and profiling

The IDE provided several debugging facilities, including [single stepping][81], examination and changing of variables, and conditional breakpoints. In later versions assembly-language blocks could be stepped through. The user could add [breakpoints][82] on variables and registers in an IDE window. Programs using [IBM PC][64] graphics mode could flip between graphics and text mode automatically or manually, or display both on two screens. For cases where the relatively simple debugging facilities of the IDE were insufficient, Turbopower Software produced a more powerful debugger, T-Debug.[\[17\]][83] The same company produced Turbo Analyst and Overlay Manager for Turbo Pascal. T-Debug was later updated for Turbo Pascal 4, but discontinued with the release of Borland's [Turbo Debugger][84] (TD), which also allowed some hardware intervention on computers equipped with the new [80386][85] processor.

TD was usually supplied in conjunction with the Turbo Assembler and the Turbo Profiler, a code [profiler][86] that reported on the time spent in each part of the program to assist [program optimisation][87] by finding bottlenecks.[\[18\]][88] The books included with Borland Pascal had detailed descriptions of the [Intel][89] assembler language, including the number of clock cycles required by each instruction. Development and debugging could be carried out entirely within the IDE unless the advanced debugging facilities of Turbopower T-Debug, and later TD, were required.

Later versions also supported [remote debugging][90] via an [RS232][91] communication cable.[\[19\]][92]

## Units

Over the years, Borland enhanced not only the IDE, but also extended the programming language. A development system based on [ISO standard Pascal][93] requires implementation-specific extensions for the development of real-world applications on the platforms they target. Standard Pascal is designed to be platform-independent, so prescribes no [low-level][94] access to hardware- or operating system-dependent facilities. Standard Pascal also does not prescribe how a large program should be split into separate compilation units. From version 4, Turbo Pascal adopted the concept of _[units][95]_ from [UCSD Pascal][52]. Units were used as external function libraries, like the object files used in other languages such as FORTRAN or C.

For example, the line `uses crt;` in a program included the unit called crt; the `uses` is the mechanism for using other compilation units. `interface` and `implementation` were the keywords used to specify, within the unit, what was (and what was not) visible outside the unit. This is similar to the `public` and `private` keywords in other languages such as [C++][96] and [Java][97].

Units in Borland's Pascal were similar to [Modula-2][98]'s separate compilation system. In 1987, when Turbo Pascal 4 was released, Modula-2 was making inroads as an educational language which could replace Pascal. Borland, in fact, had a Turbo Modula-2 compiler, but this product ran only on CP/M and was never ported to DOS (its user interface was almost identical to that of Turbo Pascal 1--3). Instead of porting their Modula-2 compiler to DOS, Borland chose to implement separate compilation in their established Pascal product.

Separate compilation was not part of the standard Pascal language, but was already available in [UCSD Pascal][52], which was very popular on 8-bit machines. Turbo Pascal syntax for units appears to have been borrowed from UCSD Pascal.[\[20\]][99] Earlier versions of Turbo Pascal, designed for computers with limited resources, had no real need for it (the language had a statement to include separate source code in a program when necessary, and overlaying was supported from TP3) but, as computing and storage facilities advanced and the ability to generate large EXE files was added to Turbo Pascal, programs became large and complex enough to benefit from separate compilation.

## Object-oriented programming

From version 5.5 some [object-oriented programming][100] features were introduced: classes, inheritance, constructors and destructors.[\[4\]][11] The IDE was already augmented with an object browser interface showing relations between objects and methods and allowing programmers to navigate the modules easily. Borland called its language _[Object Pascal][101]_, which was greatly extended to become the language underlying [Delphi][38] (which has two separate OOP systems). The name "Object Pascal" originated with the Pascal extensions developed by [Apple Inc.][102] to program its [Lisa][103] and [Macintosh][104] computers. Pascal originator [Niklaus Wirth][105] consulted in developing these extensions, which built upon the [record][106] type already present in Pascal.

## Windows versions

Two versions named "Turbo Pascal for Windows" (TPW), for [Windows 3.x][107], were released: TPW 1.0, based on Turbo Pascal 6 but released about 2 years later, and 1.5, released after Turbo Pascal 7; they were succeeded by Borland Pascal 7, which had Windows support. The Windows compiler in Pascal 7 was titled _Borland Pascal for Windows'_.

Both versions built Windows-compatible programs, and featured a Windows-based IDE, as opposed to the DOS-based IDE in Turbo Pascal. The IDE and editor commands conformed to the Microsoft Windows user interface guidelines instead of the classic TP user interface. The support for Windows programs required the [ObjectWindows][108] library, similar but not identical to that for the first release of [Borland C++][109], and radically different from the earlier DOS [Turbo Vision][110] environment. Turbo Pascal was superseded for the Windows platform by [Delphi][38]; the Delphi compiler can produce console programs in addition to [GUI][111] applications, so that the use of Turbo and Borland Pascal became unnecessary.

## Apple Macintosh

Borland released _Turbo Pascal for Macintosh_ in 1985\. Much like versions 1 to 3 for other operating systems, it was written in compact assembly language and had a very powerful IDE, but no good debugger. Borland did not support this product very well, although they issued a version 1.1, patched to run on the 32-bit [Macintosh II][112]. Macintosh support was dropped soon after.

## Successors

By 1995 Borland had dropped Turbo/Borland Pascal and replaced it with the [rapid application development][113] (RAD) environment [Delphi][38], based on Object Pascal. The 32- and 64-[bit][114] Delphi versions still support the more portable Pascal enhancements of the earlier products (i.e. those that are not specific to 16-bit code) including the earlier static object model. This language backwards compatibility means much old Turbo Pascal code can still be compiled and run in a modern environment today.

Other suppliers have produced software development tools compatible with Turbo Pascal. The best-known are [Free Pascal][115] and [Virtual Pascal][116].

## Freeware release

[Borland][7] released several versions of Turbo Pascal as [freeware][117] after they became "antique software" ([abandonware][118]) in 2002\.[\[21\]][119] The newest released international version was TP 5.5, while the newer French TP 7.01 was also released as freeware.[\[22\]][120] The downloads are still available on the successor website of [Embarcadero Technologies][121].[\[2\]][9][\[3\]][10][\[4\]][11]

## In education

Borland Pascal is still taught in some countries at secondary, sixth form and university levels. It is taught at colleges and universities in Costa Rica, Turkey, Germany, Russian Federation, USA, Malta and at secondary schools in Argentina, Belgium, Bulgaria, Canada, Costa Rica, Croatia, France, Italy, Jamaica, Libya, Moldova, Romania, Serbia, Tunisia, Ukraine and Vietnam. It was the state-approved educational programming language for all South African secondary schools until 2002\. Today it continues to be taught in some universities around the world as an introduction to computer programming, usually advancing to [C][122] or [Java][97] or both.

Some lecturers prefer to use Borland Pascal 7 or Turbo Pascal 5.5 because of its simplicity in comparison to more modern IDEs such as [Microsoft Visual Studio][123] or Borland [JBuilder][124], so it introduces students unfamiliar with computing to common tasks such as using the keyboard and [keyboard shortcuts][125] (TP 5.5 has no mouse support), familiarises them with DOS commands (which are largely the same as those of Microsoft Windows's command prompt), and lets them write programs without spending a lot of effort on getting the environment to work. TP 5.5 is available as a free download from Borland.[\[21\]][119][\[22\]][120]

## Issue with CRT unit on fast processors

Several versions of Turbo Pascal, including the latest version 7, include a CRT unit used by many fullscreen text mode applications. This unit contains code in its initialization section to determine the CPU speed and [calibrate][126] delay loops. This code fails on processors with a speed greater than about 200 [MHz][127] and aborts immediately with a "[Runtime error 200][128]" message.[\[23\]][129] (the error code 200 had nothing to do with the CPU speed 200 MHz). This is caused because a loop runs to count the number of times it can iterate in a fixed time, as measured by the [real-time clock][130]. When Turbo Pascal was developed it ran on machines with CPUs running at 1 to 8 MHz, and little thought was given to the possibility of vastly higher speeds, so from about 200 MHz enough iterations can be run to overflow the 16-bit counter.[\[24\]][131] A [patch][132] was produced when machines became too fast for the original method, but failed as processor speeds increased yet further, and was superseded by others.

Programs subject to this error can be recompiled from source code with a compiler patched to eliminate the error (using a TURBO.TPL itself compiled with a corrected CRT unit) or, if source code is not available, executables can be patched by a tool named TPPATCH or equivalent,[\[25\]][133] or by loading a [Terminate and Stay Resident][67] program loaded before running the faulty program.[\[26\]][134]

There are also patches to the TP7 compiler itself,[\[27\]][135] thus if the Pascal source is available, a new compilation's code will work without the compiled code having to be patched. If the source code is available, porting to libraries without CPU clock speed dependency is a solution too.[\[28\]][136]

## Floating point

There were several [floating point][137] types, including `single` (the 4-byte \[IEEE 754\] representation) `double` (the 8-byte IEEE 754 representation), `extended` (a 10-byte IEEE 754 representation used mostly internally by numeric [coprocessors][138]) and `Real` (a 6-byte representation).

In the early days, `Real` was the most popular. Many PCs did not have a floating point [coprocessor][138] so all FP had to be done in software. Borland's own FP algorithms on `Real` were quicker than using the other types, though its library also [emulated][139] the other types in software.

## Sample code

This is the classic [Hello world program][140] in Turbo Pascal:

This asks for a name and writes it back to the screen a hundred times:

## See also

## References

## External links

[0]: /wiki/Compiler "Compiler"
[1]: /wiki/Integrated_development_environment "Integrated development environment"
[2]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[3]: /wiki/Programming_language "Programming language"
[4]: /wiki/CP/M "CP/M"
[5]: /wiki/CP/M-86 "CP/M-86"
[6]: /wiki/MS-DOS "MS-DOS"
[7]: /wiki/Borland "Borland"
[8]: /wiki/Philippe_Kahn "Philippe Kahn"
[9]: #cite_note-tp10-2
[10]: #cite_note-tp302-3
[11]: #cite_note-tp55-4
[12]: /wiki/Source_code "Source code"
[13]: /wiki/Text_editor "Text editor"
[14]: /wiki/Object_code "Object code"
[15]: /wiki/Linker_(computing) "Linker (computing)"
[16]: /wiki/Programming_tool "Programming tool"
[17]: /wiki/Microsoft_Pascal "Microsoft Pascal"
[18]: /wiki/Profiling_(computer_programming) "Profiling (computer programming)"
[19]: /wiki/Copy_protection "Copy protection"
[20]: #cite_note-5
[21]: /wiki/Jerry_Pournelle "Jerry Pournelle"
[22]: /wiki/BYTE "BYTE"
[23]: /wiki/Pascal/MT%2B "Pascal/MT+"
[24]: #cite_note-pournelle198402-6
[25]: /wiki/BASIC_(programming_language) "BASIC (programming language)"
[26]: #cite_note-wadlow198407-7
[27]: /wiki/PC_clone "PC clone"
[28]: #cite_note-bridger198602-8
[29]: #cite_note-shammas198612-9
[30]: /wiki/Bruce_Webster "Bruce Webster"
[31]: /wiki/JRT_(programming_language) "JRT (programming language)"
[32]: #cite_note-webster198508-10
[33]: /wiki/PC_Magazine "PC Magazine"
[34]: #cite_note-duntemann19841113-11
[35]: #cite_note-webster198602-12
[36]: /wiki/Nascom "Nascom"
[37]: /wiki/Anders_Hejlsberg "Anders Hejlsberg"
[38]: /wiki/Embarcadero_Delphi "Embarcadero Delphi"
[39]: /wiki/Apple_II "Apple II"
[40]: /wiki/Z-80_SoftCard "Z-80 SoftCard"
[41]: /wiki/MOS_Technology_6502 "MOS Technology 6502"
[42]: /wiki/DEC_Rainbow "DEC Rainbow"
[43]: /wiki/United_States "United States"
[44]: /wiki/United_States_dollar "United States dollar"
[45]: #cite_note-Chapman_2006-13
[46]: /wiki/Turbo "Turbo"
[47]: /wiki/One-pass_compiler "One-pass compiler"
[48]: /wiki/Assembly_language "Assembly language"
[49]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[50]: /wiki/COM_file "COM file"
[51]: /wiki/Interpreted_language "Interpreted language"
[52]: /wiki/UCSD_Pascal "UCSD Pascal"
[53]: /wiki/P-code_machine "P-code machine"
[54]: /wiki/8080 "8080"
[55]: /wiki/Z80 "Z80"
[56]: /wiki/8086 "8086"
[57]: /wiki/8088 "8088"
[58]: /wiki/Mass_storage "Mass storage"
[59]: /wiki/Bill_Gates "Bill Gates"
[60]: /wiki/Greg_Whitten "Greg Whitten"
[61]: #cite_note-14
[62]: /wiki/Random-access_memory "Random-access memory"
[63]: /wiki/Computer_architecture "Computer architecture"
[64]: /wiki/IBM_PC_compatible "IBM PC compatible"
[65]: /wiki/WordStar "WordStar"
[66]: /wiki/De_facto "De facto"
[67]: /wiki/Terminate_and_Stay_Resident "Terminate and Stay Resident"
[68]: /wiki/Multitasking "Multitasking"
[69]: /wiki/Borland_Sidekick "Borland Sidekick"
[70]: /wiki/Overlay_(programming) "Overlay (programming)"
[71]: #cite_note-15
[72]: /wiki/Look_and_feel "Look and feel"
[73]: /wiki/.EXE ".EXE"
[74]: /wiki/Microsoft_Windows "Microsoft Windows"
[75]: /wiki/Mouse_(computing) "Mouse (computing)"
[76]: /wiki/Machine_code "Machine code"
[77]: #cite_note-16
[78]: /wiki/Intel_Memory_Model "Intel Memory Model"
[79]: /wiki/Turbo_Assembler "Turbo Assembler"
[80]: /wiki/Microsoft_Macro_Assembler "Microsoft Macro Assembler"
[81]: /wiki/Program_animation "Program animation"
[82]: /wiki/Breakpoint "Breakpoint"
[83]: #cite_note-17
[84]: /wiki/Turbo_Debugger "Turbo Debugger"
[85]: /wiki/80386 "80386"
[86]: /wiki/Profiler_(computer_science) "Profiler (computer science)"
[87]: /wiki/Program_optimisation "Program optimisation"
[88]: #cite_note-18
[89]: /wiki/Intel "Intel"
[90]: /wiki/Remote_debugging "Remote debugging"
[91]: /wiki/RS232 "RS232"
[92]: #cite_note-19
[93]: /wiki/Pascal_(programming_language)#Standards "Pascal (programming language)"
[94]: /wiki/Low-level "Low-level"
[95]: /wiki/Unit_(Software_Development) "Unit (Software Development)"
[96]: /wiki/C%2B%2B "C++"
[97]: /wiki/Java_(programming_language) "Java (programming language)"
[98]: /wiki/Modula-2 "Modula-2"
[99]: #cite_note-20
[100]: /wiki/Object-oriented_programming "Object-oriented programming"
[101]: /wiki/Object_Pascal "Object Pascal"
[102]: /wiki/Apple_Inc. "Apple Inc."
[103]: /wiki/Apple_Lisa "Apple Lisa"
[104]: /wiki/Macintosh "Macintosh"
[105]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[106]: /wiki/Record_(computer_science) "Record (computer science)"
[107]: /wiki/Windows_3.1x "Windows 3.1x"
[108]: /wiki/Object_Windows_Library "Object Windows Library"
[109]: /wiki/Borland_C%2B%2B "Borland C++"
[110]: /wiki/Turbo_Vision "Turbo Vision"
[111]: /wiki/GUI "GUI"
[112]: /wiki/Macintosh_II "Macintosh II"
[113]: /wiki/Rapid_application_development "Rapid application development"
[114]: /wiki/Bit "Bit"
[115]: /wiki/Free_Pascal "Free Pascal"
[116]: /wiki/Virtual_Pascal "Virtual Pascal"
[117]: /wiki/Freeware "Freeware"
[118]: /wiki/Abandonware "Abandonware"
[119]: #cite_note-borlandmuseum-21
[120]: #cite_note-tp701frenchfreeware-22
[121]: /wiki/Embarcadero_Technologies "Embarcadero Technologies"
[122]: /wiki/C_(programming_language) "C (programming language)"
[123]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[124]: /wiki/JBuilder "JBuilder"
[125]: /wiki/Keyboard_shortcut "Keyboard shortcut"
[126]: /wiki/Calibration "Calibration"
[127]: /wiki/Megahertz "Megahertz"
[128]: /w/index.php?title=Runtime_error_200&action=edit&redlink=1 "Runtime error 200 (page does not exist)"
[129]: #cite_note-23
[130]: /wiki/Real-time_clock "Real-time clock"
[131]: #cite_note-merlyn-24
[132]: /wiki/Patch_(computing) "Patch (computing)"
[133]: #cite_note-speedpatch-25
[134]: #cite_note-26
[135]: #cite_note-27
[136]: #cite_note-28
[137]: /wiki/Floating_point "Floating point"
[138]: /wiki/Coprocessor "Coprocessor"
[139]: /wiki/Emulation_(computing) "Emulation (computing)"
[140]: /wiki/Hello_world_program "Hello world program"