**BCPL** (**Basic Combined Programming Language**) is a [procedural][0], [imperative][1], and [structured][2] [computer][3] [programming language][4] designed by [Martin Richards][5] of the [University of Cambridge][6] in 1966\.

Originally intended for writing [compilers][7] for other languages, BCPL is no longer in common use. However, its influence is still felt because a stripped down and syntactically changed version of BCPL, called [B][8], was the language on which the [C programming language][9] was based. This led many C programmers to give BCPL the humorous [backronym][10] **Before C Programming Language**.[\[2\]][11]

BCPL was the first [brace programming language][12], and the braces survived the syntactical changes and have become a common means of denoting program source code statements. In practice, on limited keyboards of the day, source programs often used the sequences $( and $) in place of the symbols { and }. The single-line '//' [comments][13] of BCPL, which were not adopted by [C][9], reappeared in [C++][14], and later in [C99][15].

## Design

BCPL was a response to difficulties with its predecessor [Combined Programming Language][16] (CPL), created during the early 1960s. Richards created BCPL by "removing those features of the full language which make compilation difficult". The first compiler implementation, for the [IBM 7094][17] under [Compatible Time-Sharing System][18] (CTSS), was written while Richards was visiting [Project MAC][19] at the [Massachusetts Institute of Technology][20] (MIT) in the spring of 1967\. The language was first described in a paper presented to the 1969 Spring Joint Computer Conference.

It was designed so that small and simple compilers could be written for it; reputedly some compilers could be run in 16 [kilobytes][21]. Further, the Richards compiler, itself written in BCPL, was easily portable. BCPL was thus a popular choice for [bootstrapping][22] a system.

A major reason for the compiler's portability lay in its structure. It was split into two parts: the front end parsed the source and generated [O-code][23] for a [virtual machine][24], and the back end took the O-code and translated it into the code for the target machine. Only 1/5 of the compiler's code needed to be rewritten to support a new machine, a task that usually took between 2 and 5 [man-months][25]. This approach became common practice later, e.g., [Pascal][26] or [Java][27], but the Richards BCPL compiler was the first to define a virtual machine for this purpose.

The language is unusual in having only one [data type][28]: a [word][29], a fixed number of bits, usually chosen to align with the architecture's machine word and of adequate capacity to represent any valid storage address. For many machines of the time, this data type was a 16-bit word. This choice later proved to be a significant problem when BCPL was used on machines in which the smallest addressable item was not a word, but a [byte][30] or on machines with larger word sizes: 32-bit and 64-bit words, which allowed them to manage large address spaces.

The interpretation of any value was determined by the operators used to process the values. (For example, + added two values together treating them as [integers][31]; ! indirected through a value, effectively treating it as a pointer.) In order for this to work, the implementation provided no [type checking][32]. The [Hungarian notation][33] was developed to help programmers avoid inadvertent type errors.

The mismatch between BCPL's [word orientation][29] and [byte-oriented][34] hardware was addressed in several ways. One was providing standard library routines for packing and unpacking words into byte strings. Later, two language features were added: the bit-field selection operator and the infix byte indirection operator (denoted by the '%' character).

BCPL handles bindings spanning separate [compilation units][35] in a unique way. There are no user-declarable global variables; instead there is a global vector, which is similar to "blank common" in [Fortran][36]. All data shared between different compilation units comprises scalars and pointers to vectors stored in a pre-arranged place in the global vector. Thus the header files (files included during compilation using the "GET" directive) become the primary means of synchronizing global data between compilation units, containing "GLOBAL" directives that present lists of symbolic names, each paired with a number that associates the name with the corresponding numerically addressed word in the global vector. As well as variables, the global vector also contains bindings for external procedures. This makes dynamic loading of compilation units very simple to achieve. Instead of relying on the link loader of the underlying implementation, effectively BCPL gives the programmer control of the linking process.

The global vector also made it very simple to replace or augment standard library routines. A program could save the pointer from the global vector to the original routine and replace it with a pointer to an alternative version. The alternative might call the original as part of its processing. This could be used as a quick ad-hoc debugging aid.

The philosophy of BCPL can be summarised by quoting from the book _BCPL, the language and its compiler_:

The philosophy of BCPL is not one of the tyrant who thinks he knows best and lays down the law on what is and what is not allowed; rather, BCPL acts more as a servant offering his services to the best of his ability without complaint, even when confronted with apparent nonsense. The programmer is always assumed to know what he is doing and is not hemmed in by petty restrictions.

The design, and philosophy, of BCPL strongly influenced [B][8], which in turn influenced [C][9].

There are rumours that BCPL actually stood for "Bootstrap Cambridge Programming Language", however CPL was never created since development stopped at BCPL, and the acronym was reinterpreted for the BCPL book.

## Uses and implementations

BCPL is the language in which the original [hello world program][37] was written.[\[3\]][38] The first [MUD][39] was also written in BCPL ([MUD1][40]).

Several [operating systems][41] were written partially or wholly in BCPL (for example, [TRIPOS][42] and the earliest versions of [AmigaDOS][43], a part of [AmigaOS][44]). BCPL was also the initial language used in the seminal [Xerox PARC][45] [Alto][46] project, the first modern [personal computer][47]; among other projects, the [Bravo][48] [document preparation system][49] was written in BCPL.

An early compiler, bootstrapped in 1969 by starting with a paper tape of the [O-code][50] of Martin Richards's [Atlas 2][51] compiler, targeted the [ICT 1900 series][52]. The two machines had different word-lengths (48 vs 24 bits), different character encodings, and different packed string representations---and the successful bootstrapping increased confidence in the practicality of the method.

By late 1970, implementations existed for the [Honeywell 635 and Honeywell 645][53], the [IBM 360][54], the [PDP-10][55], the [TX-2][56], the [CDC 6400][57], the [UNIVAC 1108][58], the [PDP-9][59], the [KDF 9][60] and the [Atlas 2][61]. In 1974 a dialect of BCPL was implemented at [BBN][62] without using the intermediate [O-code][50]. The initial implementation was a [cross-compiler][63] hosted on BBN's [Tenex][64] [PDP-10s][55], and directly targeted the [PDP-11s][65] used in BBN's implementation of the second generation [IMPs][66] used in the [Arpanet][67].

There was also a version produced for the [BBC Micro][68] in the mid-1980s by Richards Computer Products, a company started by John Richards, the brother of Dr. Martin Richards.\[_[citation needed][69]_\] The [BBC Domesday Project][70] made use of the language. Versions of BCPL for the [Amstrad CPC][71] and [Amstrad PCW][72] computers were also released in 1986 by UK software house Arnor Ltd. MacBCPL was released for the Apple Macintosh in 1985 by Topexpress Ltd, of Kensington, England.

In 1979 implementations of BCPL existed for at least 25 architectures; the language gradually fell out of favor as C became popular on non-Unix systems.

## Examples

These complete and compilable examples are from Martin Richards′ BCPL distribution.

Print factorials:

Count solutions to the [N queens problem][73]:

## References

## Further reading

## External links

[0]: /wiki/Procedural_programming "Procedural programming"
[1]: /wiki/Imperative_programming "Imperative programming"
[2]: /wiki/Structured_programming "Structured programming"
[3]: /wiki/Computer "Computer"
[4]: /wiki/Programming_language "Programming language"
[5]: /wiki/Martin_Richards_(computer_scientist) "Martin Richards (computer scientist)"
[6]: /wiki/University_of_Cambridge "University of Cambridge"
[7]: /wiki/Compiler "Compiler"
[8]: /wiki/B_(programming_language) "B (programming language)"
[9]: /wiki/C_(programming_language) "C (programming language)"
[10]: /wiki/Backronym "Backronym"
[11]: #cite_note-2
[12]: /wiki/Brace_programming_language "Brace programming language"
[13]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[14]: /wiki/C%2B%2B "C++"
[15]: /wiki/C99 "C99"
[16]: /wiki/Combined_Programming_Language "Combined Programming Language"
[17]: /wiki/IBM_7094 "IBM 7094"
[18]: /wiki/Compatible_Time-Sharing_System "Compatible Time-Sharing System"
[19]: /wiki/Project_MAC "Project MAC"
[20]: /wiki/Massachusetts_Institute_of_Technology "Massachusetts Institute of Technology"
[21]: /wiki/Kilobyte "Kilobyte"
[22]: /wiki/Bootstrapping_(compilers) "Bootstrapping (compilers)"
[23]: /wiki/O-code_machine "O-code machine"
[24]: /wiki/Virtual_machine "Virtual machine"
[25]: /wiki/Man-month "Man-month"
[26]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[27]: /wiki/Java_(programming_language) "Java (programming language)"
[28]: /wiki/Data_type "Data type"
[29]: /wiki/Word_(data_type) "Word (data type)"
[30]: /wiki/Byte "Byte"
[31]: /wiki/Integer "Integer"
[32]: /wiki/Type_checking "Type checking"
[33]: /wiki/Hungarian_notation "Hungarian notation"
[34]: /wiki/Byte_orientation "Byte orientation"
[35]: /wiki/Compilation_unit "Compilation unit"
[36]: /wiki/Fortran "Fortran"
[37]: /wiki/Hello_world_program "Hello world program"
[38]: #cite_note-3
[39]: /wiki/MUD "MUD"
[40]: /wiki/MUD1 "MUD1"
[41]: /wiki/Operating_system "Operating system"
[42]: /wiki/TRIPOS "TRIPOS"
[43]: /wiki/AmigaDOS "AmigaDOS"
[44]: /wiki/AmigaOS "AmigaOS"
[45]: /wiki/Xerox_PARC "Xerox PARC"
[46]: /wiki/Alto_(computer) "Alto (computer)"
[47]: /wiki/Personal_computer "Personal computer"
[48]: /wiki/Bravo_(software) "Bravo (software)"
[49]: /wiki/Document_preparation_system "Document preparation system"
[50]: /wiki/O-code "O-code"
[51]: /wiki/Titan_(computer) "Titan (computer)"
[52]: /wiki/ICT_1900_series "ICT 1900 series"
[53]: /wiki/GE-600_series "GE-600 series"
[54]: /wiki/IBM_360 "IBM 360"
[55]: /wiki/PDP-10 "PDP-10"
[56]: /wiki/TX-2 "TX-2"
[57]: /wiki/CDC_6400 "CDC 6400"
[58]: /wiki/UNIVAC_1108 "UNIVAC 1108"
[59]: /wiki/PDP-9 "PDP-9"
[60]: /wiki/KDF_9 "KDF 9"
[61]: /wiki/Atlas_2 "Atlas 2"
[62]: /wiki/BBN_Technologies "BBN Technologies"
[63]: /wiki/Cross-compiler "Cross-compiler"
[64]: /wiki/TOPS-20#TENEX "TOPS-20"
[65]: /wiki/PDP-11 "PDP-11"
[66]: /wiki/Interface_Message_Processor "Interface Message Processor"
[67]: /wiki/Arpanet "Arpanet"
[68]: /wiki/BBC_Micro "BBC Micro"
[69]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[70]: /wiki/BBC_Domesday_Project "BBC Domesday Project"
[71]: /wiki/Amstrad_CPC "Amstrad CPC"
[72]: /wiki/Amstrad_PCW "Amstrad PCW"
[73]: /wiki/Eight_queens_puzzle "Eight queens puzzle"