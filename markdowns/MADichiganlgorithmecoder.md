**MAD** (**Michigan Algorithm Decoder**) is a [programming language][0] and [compiler][1] for the [IBM 704][2] and later the [IBM 709][3], [IBM 7090][4], [IBM 7040][5], [UNIVAC 1107][6], [UNIVAC 1108][7], [Philco 210-211][8], and eventually the [IBM S/370][9] mainframe computers. Developed in 1959 at the [University of Michigan][10] by [Bernard Galler][11], [Bruce Arden][12] and [Robert M. Graham][13], MAD is a variant of the [ALGOL][14] language. It was widely used to teach programming at colleges and universities during the 1960s and played a minor role in the development of [CTSS][15], [Multics][16], and the [Michigan Terminal System][17] computer [operating systems][18].[\[1\]][19]

The archives at the [Bentley Historical Library][20] of the University of Michigan contain reference materials on the development of MAD and MAD/I, including three linear feet of printouts with hand-written notations and original printed manuals.[\[2\]][21][\[3\]][22][\[4\]][23][\[5\]][24]

## MAD, MAD/I, and GOM

There are three MAD compilers:

## History

While **MAD** was motivated by [ALGOL 58][25], it does not resemble ALGOL 58 in any significant way.[\[12\]][26][\[13\]][27]

Programs written in MAD included MAIL,[\[14\]][28] [RUNOFF][29], one of the first text processing systems, and several other utilities all under [Compatible Time-Sharing System][15](CTSS).[\[15\]][30] Work was done on a design for a MAD compiler for [Multics][16], but it was never implemented.[\[16\]][31]

The following is an interesting quote from _An Interview with [Brian Kernighan][32]_[\[17\]][33] when he was asked "What hooked you on programming?":

MAD was quite fast compared to some of the other compilers of its day. Because a number of people were interested in using the [FORTRAN][34] language and yet wanted to obtain the speed of the MAD compiler, a system called MADTRAN (written in MAD) was developed. MADTRAN was simply a translator from FORTRAN to MAD, which then produced machine code. MADTRAN was distributed through [SHARE][35].[\[12\]][26]

**MAD/I** has a syntactic structure similar to [ALGOL 60][36] together with important features from the original MAD and from [PL/I][37].[\[9\]][38] MAD/I was designed as an extensible language. It was available for use under [MTS][17] and provided many new ideas which made their way into other languages, but MAD/I compilations were slow and MAD/I never extended itself into widespread use when compared to the original 7090 MAD.[\[11\]][39]

**GOM** is essentially the 7090 MAD language modified and extended for the 360/370 architecture with some judicious tailoring to better fit current programming practices and problems.[\[11\]][39] The [MTS][17] Message System was written in GOM.

## MAD, MAD Magazine, and Alfred E. Neuman

In a pre-release version of the original MAD, as a reference to MAD's namesake, [MAD magazine][40], when a program contained too many compile time errors the compiler would print a full-page picture of [Alfred E. Neuman][41] using [ASCII art][42]. The caption read, "See this man about your program--He might want to publish it. He never worries--but from the looks of your program, you should."[\[8\]][43] This feature was not included in the final official version.[\[18\]][44] However, it was included in the production version for the IBM 7040\.

And Bernie Galler remembers:

## "Hello, world" example

The "[hello, world][45]" example program prints the string "Hello, world" to a terminal or screen display.

The first character of the line is treated as [logical carriage control][46], in this example the character "0" which causes a double-spaced line to be printed.

Or, if entering all of the keywords at your keypunch is too much work, you can use contractions and the compiler will expand them in the listing:

## Language elements

MAD and GOM, but not MAD/I, are composed of the following elements:[\[7\]][47][\[11\]][39][\[12\]][26]

## Input format

MAD programs are a series of statements written on punched cards, generally one statement per card, although a statement can be continued to multiple cards. Columns 1-10 contains an optional statement label, comments or remarks are flagged using the letter "R" in column 11, and columns 73-80 are unused and could contain a sequence identifier. Spaces are not significant anywhere other than within character constants. For GOM input is free form with no sequence field and lines may be up to 255 characters long; lines that start with an asterisk (\*) are comments; and lines that start with a plus-sign (+) are continuation lines.

## Names

Variable names, function names, and statement labels have the same form, a letter followed by zero to five letters or digits. Function names end with a period. All names can be subscripted (the name followed by parentheses, with multiple subscripts separated by commas). For GOM names may be up to 24 characters long and may include the underscore (\_) character.

Few keywords in the language are reserved words since most are longer than six letters or are surrounded by periods. There is a standard set of abbreviations which can be used to replace the longer words. These consist of the first and last letters of the keywords with an apostrophe between them, such as W'R for WHENEVER and D'N for DIMENSION.

## Data types

MAD uses the term "mode" for its data types. Five basic modes are supported:

The mode of a constant can be redefined by adding the character M followed by a single digit at the end of the constant, where 0 indicates floating point, 1 integer, 2 boolean, 3 function name, and 4 statement label.

For GOM six additional modes are added: CHARACTER, SHORT INTEGER, BYTE INTEGER, LONG INTEGER, POINTER, and DYNAMIC RECORD.

Alphabetic or character constants are stored as integers and written using the dollar sign as a delimiter ($ABCDEF$) with double dollar-signs used to enter a true dollar sign ($$$.56$ is 56 cents). Strings longer than six characters are represented using arrays.

## Arrays and matrices

## Operators

## Arithmetic operators

## Pointer operators (GOM only)

## Relational operators

## Boolean operators

## Bit operators (GOM only)

## Declaration statements

Variables may be implicitly or explicitly declared. By default all implicitly declared variables are assumed to be floating point. The NORMAL MODE IS statement may be used to change this default.

## Executable statements

## Input and output statements

## Functions

Function names end with a period. Internal and external functions are supported. Internal functions are compiled as part of the program in which they are used and share declarations and variables with the main program. External functions are compiled separately and do not share declarations and variables. A one statement definition of internal functions is permitted. Recursive functions are permitted, although the function must do some of the required saving and restoring work itself.

## Operator definition and redefinition

One of the most interesting features in MAD is the ability to extend the language by redefining existing operators, defining new operators, or defining new data types (modes). The definitions are made using MAD declaration statements and assembly language mnemonics included following the declaration up to the END pseudo-instruction that implement the operation.

where:

Three pre-defined packages of definitions (MATRIX, DOUBLE PRECISION, and COMPLEX) are available for inclusion in MAD source programs using the INCLUDE statement.

## See also

## Notes

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Compiler "Compiler"
[2]: /wiki/IBM_704 "IBM 704"
[3]: /wiki/IBM_709 "IBM 709"
[4]: /wiki/IBM_7090 "IBM 7090"
[5]: /wiki/IBM_7040 "IBM 7040"
[6]: /wiki/UNIVAC_1107 "UNIVAC 1107"
[7]: /wiki/UNIVAC_1108 "UNIVAC 1108"
[8]: /wiki/Philco "Philco"
[9]: /wiki/S/370 "S/370"
[10]: /wiki/University_of_Michigan "University of Michigan"
[11]: /wiki/Bernard_Galler "Bernard Galler"
[12]: /wiki/Bruce_Arden "Bruce Arden"
[13]: /wiki/Robert_M._Graham "Robert M. Graham"
[14]: /wiki/ALGOL "ALGOL"
[15]: /wiki/Compatible_Time-Sharing_System "Compatible Time-Sharing System"
[16]: /wiki/Multics "Multics"
[17]: /wiki/Michigan_Terminal_System "Michigan Terminal System"
[18]: /wiki/Operating_system "Operating system"
[19]: #cite_note-1
[20]: /wiki/Bentley_Historical_Library "Bentley Historical Library"
[21]: #cite_note-2
[22]: #cite_note-3
[23]: #cite_note-4
[24]: #cite_note-5
[25]: /wiki/ALGOL_58 "ALGOL 58"
[26]: #cite_note-MADSammet-12
[27]: #cite_note-13
[28]: #cite_note-14
[29]: /wiki/RUNOFF "RUNOFF"
[30]: #cite_note-BernieGallerInterview-15
[31]: #cite_note-16
[32]: /wiki/Brian_Kernighan "Brian Kernighan"
[33]: #cite_note-17
[34]: /wiki/FORTRAN "FORTRAN"
[35]: /wiki/SHARE_(computing) "SHARE (computing)"
[36]: /wiki/ALGOL_60 "ALGOL 60"
[37]: /wiki/PL/I "PL/I"
[38]: #cite_note-MADIManual-9
[39]: #cite_note-GOMManual-11
[40]: /wiki/MAD_magazine "MAD magazine"
[41]: /wiki/Alfred_E._Neuman "Alfred E. Neuman"
[42]: /wiki/ASCII_art "ASCII art"
[43]: #cite_note-UnisysMad-8
[44]: #cite_note-18
[45]: /wiki/Hello,_world "Hello, world"
[46]: /wiki/ASA_carriage_control_characters "ASA carriage control characters"
[47]: #cite_note-deepblue.lib.umich.edu-7