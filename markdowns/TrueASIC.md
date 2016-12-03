**True BASIC** is a variant of the [BASIC programming language][0] descended from [Dartmouth BASIC][1] --- the original BASIC --- invented by college professors [John G. Kemeny][2] and [Thomas E. Kurtz][3].

## Background and Features

When True BASIC appeared on the market in 1985, the BASIC language was widely used on [home computers][4], but with little standardization. Each manufacturer implemented extensions to the language to support features of their hardware. Initially based on Dartmouth BASIC 7 --- otherwise known as [ANSI][5] BASIC --- True BASIC implemented a number of new features over [GW-BASIC][6], and allowed the user a redefinable 16-color, 640×480 [pixel][7] backdrop for program editing. True BASIC introduced new functions for [graphics primitives][8] like plot, plot area, flood, etc. It also was the first to provide a method for saving a portion of the screen and [blitting][9] it elsewhere, but had no proper buffering implementation.

Being a [structured programming][10] implementation of the language, it dispensed with the need for [line numbers][11] and [GOTO][12] statements, although these earlier features can still be used. Use of [LET][13] for value assignment became optional. It also allowed for descriptive [variable][14] names longer than a single letter plus a single digit. For example, the familiar [algebraic equation][15] [y = mx + b][16] (y = mx + c for the UK) could be expressed as:

The above code segment would yield "y2= 10".

True BASIC provides statements for matrix arithmetic, a feature that had been present in Dartmouth BASIC since early times, but had been dropped in almost all microcomputer versions of BASIC interpreters due to memory limitations. It also supports global and local variables, which permits [recursive][17] functions and [subroutines][18] to be written.

There are versions of the True BASIC compiler for [DOS][19], [Windows][20], and [classic Mac OS][21]. There is currently no [macOS][22] version of True BASIC, although it may be run in a Windows emulator application. PowerPC Macs running Mac OS X can run it through the [Classic Environment][23]. At one time, versions for [Tandy][24], [Amiga][25] and [Atari][26] computers were offered, as well as a [UNIX][27] command-line compiler.

The designers wanted to make the language hardware-independent, to allow True BASIC source code to run equally well on any version of their compiler. For the most part they succeed in this endeavor. The drawback for users was that direct access to some features of their machines was not available, but this could be remedied with callable functions and subroutines specially written in [assembly language][28].

Using newer versions of True BASIC, some of the older functions are blocked out. An example of the recent code would be more like this:

As one can see, even without comments (text following the unquoted exclamation point), True BASIC code can be read rather easily. This simple program plots the text "Welcome To ..." at the top left-hand corner of the screen, and then continues into a never-ending loop plotting "Fabulous Wikipedia!" at random coordinates.

An example of simple animation could be like this:

## Excessive CPU usage

True BASIC suffers from excessive CPU usage. Several users have complained about their programs and the editor using up 100% of their CPU (or core).[\[1\]][29][\[2\]][30][\[3\]][31][\[4\]][32] This appears to be caused by the editor and user's programs using a loop which constantly polls the keyboard and mouse for events. The problem has been known since at least the end of 2010,[\[1\]][29] yet as of early 2014 is still being worked on.[\[4\]][32]

## Reception

[Jerry Pournelle][33] in 1985 asked, "why do we need True BASIC at all? \[It\] doesn't seem to do anything regular BASIC doesn't do, and what it does do isn't attacked in a logical or intuitive manner." He criticized the lack of output when encountering an error, preventing interactive debugging by "[inserting print statements as diagnostics][34]". Pournelle concluded, "I think I'll pass up the opportunity to become a born-again True BASIC believer. I'll enjoy my [Microsoft][35] and [CBASIC][36] heresies."[\[5\]][37]

## Further reading

## References

## External links

[0]: /wiki/BASIC "BASIC"
[1]: /wiki/Dartmouth_BASIC "Dartmouth BASIC"
[2]: /wiki/John_George_Kemeny "John George Kemeny"
[3]: /wiki/Thomas_Eugene_Kurtz "Thomas Eugene Kurtz"
[4]: /wiki/Home_computers "Home computers"
[5]: /wiki/ANSI "ANSI"
[6]: /wiki/GW-BASIC "GW-BASIC"
[7]: /wiki/Pixel "Pixel"
[8]: /wiki/Graphics_primitive "Graphics primitive"
[9]: /wiki/BitBLT "BitBLT"
[10]: /wiki/Structured_programming "Structured programming"
[11]: /wiki/Line_number "Line number"
[12]: /wiki/Goto "Goto"
[13]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[14]: /wiki/Variable_(computer_science) "Variable (computer science)"
[15]: /wiki/Algebraic_equation "Algebraic equation"
[16]: /wiki/Y_%3D_mx_%2B_b "Y = mx + b"
[17]: /wiki/Recursion#Functional_recursion "Recursion"
[18]: /wiki/Subroutine "Subroutine"
[19]: /wiki/DOS "DOS"
[20]: /wiki/Microsoft_Windows "Microsoft Windows"
[21]: /wiki/Classic_Mac_OS "Classic Mac OS"
[22]: /wiki/MacOS "MacOS"
[23]: /wiki/Classic_Environment "Classic Environment"
[24]: /wiki/TRS-80_Color_Computer "TRS-80 Color Computer"
[25]: /wiki/Amiga "Amiga"
[26]: /wiki/Atari "Atari"
[27]: /wiki/UNIX "UNIX"
[28]: /wiki/Assembly_language "Assembly language"
[29]: #cite_note-FirstComplaint-1
[30]: #cite_note-2
[31]: #cite_note-3
[32]: #cite_note-LastComplaint-4
[33]: /wiki/Jerry_Pournelle "Jerry Pournelle"
[34]: /wiki/Breakpoint "Breakpoint"
[35]: /wiki/Microsoft_BASIC "Microsoft BASIC"
[36]: /wiki/CBASIC "CBASIC"
[37]: #cite_note-pournelle198509-5