**APL** (named after the book _A Programming Language_)[\[8\]][0] is a [programming language][1] developed in the 1960s by [Kenneth E. Iverson][2]. Its central datatype is the [multidimensional array][3]. It uses a large range of special graphic symbols[\[9\]][4] to represent most functions and operators, leading to very concise code. It has been an important influence on the development of concept modeling, [spreadsheets][5], [functional programming][6],[\[10\]][7] and computer math packages.[\[6\]][8] It has also inspired several other programming languages.[\[4\]][9][\[5\]][10][\[7\]][11] It is still used today for certain applications.[\[11\]][12][\[12\]][13]

## History

The [mathematical notation][14] for manipulating arrays which developed into the APL programming language was developed by Iverson at [Harvard University][15] starting in 1957, and published in his _A Programming Language_ in 1962\.[\[8\]][0] The preface states its premise:

Applied mathematics is largely concerned with the design and analysis of explicit procedures for calculating the exact or approximate values of various functions. Such explicit procedures are called algorithms or _programs_. Because an effective notation for the description of programs exhibits considerable syntactic structure, it is called a _programming language_.

In 1960, he began work for [IBM][16] and, working with [Adin Falkoff][17], created APL based on the notation he had developed. This notation was used inside IBM for short research reports on computer systems, such as the [Burroughs B5000][18] and its stack mechanism when stack machines versus [register machines][19] were being evaluated by IBM for upcoming computers.

Also in 1960, Iverson used his notation in a draft of the chapter "A Programming Language", written for a book he was writing with [Fred Brooks][20], _Automatic Data Processing_, which would be published in 1963\.[\[13\]][21][\[14\]][22]

As early as 1962, the first attempt to use the notation to describe a complete computer system happened after Falkoff discussed with Dr. William C. Carter his work in the standardization of the instruction set for the machines that later became the [IBM System/360][23] family.

In 1963, Herbert Hellerman, working at the IBM Systems Research Institute, implemented a part of the notation on an [IBM 1620][24] computer, and it was used by students in a special high school course on calculating transcendental functions by series summation. Students tested their code in Hellerman's lab. This implementation of a portion of the notation was called PAT (Personalized Array Translator).[\[15\]][25]

In 1963, Falkoff, Iverson, and [Edward H. Sussenguth Jr.][26], all working at IBM, used the notation for a formal description of the [IBM System/360][23] series machine architecture and functionality, which resulted in a paper published in _[IBM Systems Journal][27]_ in 1964\. After this was published, the team turned their attention to an implementation of the notation on a computer system. One of the motivations for this focus of implementation was the interest of John L. Lawrence who had new duties with [Science Research Associates][28], an educational company bought by IBM in 1964\. Lawrence asked Iverson and his group to help utilize the language as a tool for the development and use of computers in education.[\[16\]][29]

After [Lawrence M. Breed][30] and [Philip S. Abrams][31] of Stanford University joined the team at IBM Research, they continued their prior work on an implementation programmed in [FORTRAN IV][32] for a portion of the notation which had been done for the [IBM 7090][33] computer running under the [IBSYS][34] operating system. This work was finished in late 1965 and later known as IVSYS (Iverson System). The basis of this implementation was described in detail by Abrams in a Stanford University Technical Report, "An Interpreter for Iverson Notation" in 1966\.[\[17\]][35] this was formally supervised by [Niklaus Wirth][36]. Like Hellerman's PAT system earlier, this implementation did not include the APL character set but used special English reserved words for functions and operators. The system was later adapted for a [time-sharing][37] system and, by November 1966, it had been reprogrammed for the [IBM System/360 Model 50][38] computer running in a time sharing mode and was used internally at IBM.[\[18\]][39]

A key development in the ability to use APL effectively, before the widespread use of [CRT][40] terminals, was the development of a special [IBM Selectric typewriter][41] interchangeable typeball with all the special APL characters on it. This was used on paper printing terminal workstations using the Selectric typewriter and typeball mechanism, such as the [IBM 1050][42] and [IBM 2741][43] terminal. Keycaps could be placed over the normal keys to show which APL characters would be entered and typed when that key was struck. For the first time, a programmer could actually type in and see real APL characters as used in Iverson's notation and not be forced to use awkward English keyword representations of them. Falkoff and Iverson had the special APL Selectric typeballs, 987 and 988, designed in late 1964, although no APL computer system was available to use them.[\[19\]][44] Iverson cited Falkoff as the inspiration for the idea of using an IBM Selectric typeball for the APL character set.[\[20\]][45]

Some APL symbols, even with the APL characters on the typeball, still had to be typed in by over-striking two existing typeball characters. An example would be the "grade up" character, which had to be made from a "delta" (shift-H) and a "[Sheffer stroke][46]" (shift-M). This was necessary because the APL character set was larger than the 88 characters allowed on the Selectric typeball.

The first APL interactive login and creation of an APL workspace was in 1966 by Larry Breed using an IBM 1050 terminal at the IBM Mohansic Labs near [Thomas J. Watson Research Center][47], the home of APL, in [Yorktown Heights, New York][48].[\[19\]][44]

IBM was chiefly responsible for the introduction of APL to the marketplace. APL was first available in 1967 for the [IBM 1130][49] as _APL\\1130_.[\[21\]][50][\[22\]][51] It would run in as little as 8k 16-bit words of memory, and used a dedicated 1 megabyte hard disk.

APL gained its foothold on mainframe timesharing systems from the late 1960s through the early 1980s, in part because it would run on lower-specification systems that were not equipped with [Dynamic Address Translation][52] hardware.[\[23\]][53] Additional improvements in performance for selected [IBM System/370][54] mainframe systems included the "APL Assist Microcode" in which some support for APL execution was included in the actual firmware as opposed to APL being exclusively a software product. Somewhat later, as suitably performing hardware was finally becoming available in the mid- to late-1980s, many users migrated their applications to the personal computer environment.

Early IBM APL interpreters for IBM 360 and IBM 370 hardware implemented their own multi-user management instead of relying on the host services, thus they were timesharing systems in their own right. First introduced in 1966, the _APL\\360_[\[24\]][55][\[25\]][56][\[26\]][57] system was a multi-user interpreter. The ability to programmatically communicate with the operating system for information and setting interpreter system variables was done through special privileged "I-beam" functions, using both [monadic][58] and [dyadic][59] operations.[\[27\]][60]

In 1973, IBM released _APL.SV_, which was a continuation of the same product, but which offered [shared variables][61] as a means to access facilities outside of the APL system, such as operating system files. In the mid-1970s, the IBM mainframe interpreter was even adapted for use on the [IBM 5100][62] desktop computer, which had a small CRT and an APL keyboard, when most other small computers of the time only offered [BASIC][63]. In the 1980s, the _VSAPL_ program product enjoyed widespread usage with [CMS][64], [TSO][65], [VSPC][66], [MUSIC/SP][67] and [CICS][68] users.

In 1973-1974, Dr. Patrick E. Hagerty directed the implementation of the University of Maryland APL interpreter for the [Sperry Univac 1100][69] Series mainframe computers.[\[28\]][70] At the time, Sperry had nothing. In 1974, student Alan Stebbens was assigned the task of implementing an internal function.[\[29\]][71]

Several timesharing firms sprang up in the 1960s and 1970s that sold APL services using modified versions of the IBM APL\\360[\[26\]][57] interpreter. In North America, the better-known ones were [I. P. Sharp Associates][72], [STSC][73], [Time Sharing Resources][74] (TSR) and [The Computer Company][75] (TCC). CompuServe also entered the fray in 1978 with an APL Interpreter based on a modified version of Digital Equipment Corp and Carnegie Mellon's which ran on DEC's KI and KL 36 bit machines. CompuServe's APL was available both to its commercial market and the consumer information service. With the advent first of less expensive mainframes such as the [IBM 4300][76] and later the personal computer, the timesharing industry had all but disappeared by the mid-1980s.

_Sharp APL_ was available from [I. P. Sharp Associates][72], first on a timesharing basis in the 1960s, and later as a program product starting around 1979\. _Sharp APL_ was an advanced APL implementation with many language extensions, such as _packages_ (the ability to put one or more objects into a single variable), file system, nested arrays, and [shared variables][61].

APL interpreters were available from other mainframe and mini-computer manufacturers as well, notably [Burroughs][77], [CDC][78], [Data General][79], [DEC][80], [Harris][81], [Hewlett-Packard][82], [Siemens AG][83], [Xerox][84], and others.

[Garth Foster][85] of [Syracuse University][86] sponsored regular meetings of the APL implementers' community at Syracuse's Minnowbrook Conference Center in [Blue Mountain Lake, New York][87]. In later years, Eugene McDonnell organized similar meetings at the [Asilomar Conference Grounds][88] near Monterey, California, and at Pajaro Dunes near Watsonville, California. The SIGAPL special interest group of the [Association for Computing Machinery][89] continues to support the APL community.[\[30\]][90]

In 1979, Iverson received the [Turing Award][91] for his work on APL.[\[31\]][92]

_Filmography_, Videos: Over the years APL has been the subject of more than a few films and videos. Some of these include:

## APL2

Starting in the early 1980s, IBM APL development, under the leadership of Dr [Jim Brown][93], implemented a new version of the APL language that contained as its primary enhancement the concept of _nested arrays_, where an array can contain other arrays, as well as new language features which facilitated the integration of nested arrays into program workflow. Ken Iverson, no longer in control of the development of the APL language, left IBM and joined [I. P. Sharp Associates][72], where one of his major contributions was directing the evolution of Sharp APL to be more in accordance with his vision.[\[36\]][94][\[37\]][95][\[38\]][96]

As other vendors were busy developing APL interpreters for new hardware, notably [Unix][97]-based [microcomputers][98], APL2 was almost always the standard chosen for new APL interpreter developments. Even today, most APL vendors or their users cite APL2 compatibility, as a selling point for those products.[\[39\]][99][\[40\]][100]

_APL2_ for IBM mainframe computers is still available. IBM cites its use for problem solving, system design, prototyping, engineering and scientific computations, expert systems,[\[41\]][101] for teaching mathematics and other subjects, visualization and database access[\[42\]][102] and was first available for [CMS][64] and [TSO][65] in 1984\.[\[43\]][103] The APL2 Workstation edition (Windows, OS/2, AIX, Linux, and Solaris) followed much later in the early 1990s.\[_[citation needed][104]_\]

## Microcomputers

The first microcomputer implementation of APL was on the [Intel 8008][105]-based [MCM/70][106], the first general purpose personal computer, in 1973\. Size of arrays along any dimension could not be larger than 255 and the machine was quite slow, but very convenient for education purposes.

IBM's own [IBM 5100][62] microcomputer (1975) offered APL as one of two built-in ROM-based interpreted languages for the computer, complete with a keyboard and display that supported all the special symbols used in the language. While the 5100 was very slow and operated its screen only like a typewriter, its follower the 5110 had more acceptable performances and a read-write addressable text screen. Graphics could be printed on an external matrix printer.

In 1976 DNA Systems introduced an APL interpreter for their TSO Operating System, which ran timesharing on the IBM 1130, Digital Scientific Meta-4, General Automation GA 18/30 and Computer Hardware CHI 21/30\.

The [VideoBrain Family Computer][107], released in 1977, only had one programming language available for it, and that was a dialect of APL called APL/S.[\[44\]][108]

A Small APL for the [Intel][109] 8080 called EMPL was released in 1977, and Softronics APL, with most of the functions of full APL, for 8080-based CP/M systems was released in 1979\.

In 1977, the Canadian firm Telecompute Integrated Systems, Inc. released a business-oriented APL interpreter known as TIS APL, for Z80-based systems. It featured the full set of file functions for APL, plus a full screen input and switching of right and left arguments for most dyadic operators by introducing the `~.` prefix to all single character dyadic functions such as `-` or `/`.

Vanguard APL was available for [Z80][110] [CP/M][111]-based processors in the late 1970s. [TCC][75] released APL.68000 in the early 1980s for Motorola [68000][112]-based processors, this system being the basis for MicroAPL Limited's [APLX][113] product. I. P. Sharp Associates released a version of their APL interpreter for the [IBM PC][114] and [PC-XT/370][115].[\[45\]][116] For the IBM PC, an [emulator][117] was written that facilitated reusing much of the IBM 370 mainframe code. Arguably, the best known APL interpreter for the IBM Personal Computer was [STSC][73]'s APL\*Plus/PC.\[_[citation needed][104]_\]

The [Commodore SuperPET][118], introduced in 1981, included an APL interpreter developed by the [University of Waterloo][119].

In the early 1980s, the Analogic Corporation developed _The APL Machine_, which was an [array processing][120] computer designed to be programmed only in APL. There were actually three processing units, the user's workstation, an [IBM PC][114], where programs were entered and edited, a [Motorola 68000][121] processor that ran the APL interpreter, and the Analogic array processor that executed the primitives.[\[46\]][122] At the time of its introduction, The APL Machine was likely the fastest APL system available. Although a technological success, The APL Machine was a marketing failure. The initial version supported a single process at a time. At the time the project was discontinued, the design had been completed to allow multiple users. As an aside, an unusual aspect of The APL Machine was that the library of workspaces was organized such that a single function or variable that was shared by many workspaces existed only once in the library. Several of the members of The APL Machine project had previously spent a number of years with Burroughs implementing _APL\\700_.

At one stage, it was claimed by Bill Gates in his [Open Letter to Hobbyists][123], [Microsoft Corporation][124] planned to release a version of APL, but these plans never materialized.

An early 1978 publication of [Rodnay Zaks][125] from [Sybex][126] was _A microprogrammed APL implementation_ [ISBN 0-89588-005-9][127], which is the complete source listing for the microcode for a Digital Scientific Corporation Meta 4 microprogrammable processor implementing APL. This topic was also the subject of his PhD thesis.[\[47\]][128][\[48\]][129]

In 1979, [William Yerazunis][130] wrote a partial version of APL in [Prime Computer][131] FORTRAN, extended it with graphics primitives, and released it. This was also the subject of his Masters thesis.[\[49\]][132]

## Extensions

Various implementations of APL by APLX, Dyalog, et al., include extensions for [object-oriented programming][133], support for [.NET][134], XML-array conversion primitives, graphing, operating system interfaces, and [lambda expressions][135].

## Design

Unlike traditionally structured programming languages, APL code is typically structured as chains of [monadic][136] or [dyadic][137] [functions][138], and [operators][139][\[50\]][140] acting on [arrays][141].[\[51\]][142] APL has many nonstandard _primitives_ (functions and operators) that are indicated by a single symbol or a combination of a few symbols. All primitives are defined to have the same [precedence][143], and always associate to the right; hence APL is _read_ or best understood from [right-to-left][144].

_Early_ APL implementations (circa 1970 or so) did not have programming loop-[flow control structures][145], such as "do" or "while" loops, and "if-then-else" constructions. Instead, they used array operations, and use of [structured programming][146] constructs was often not necessary, since an operation could be carried out on an entire array in a single statement. For example, the _iota_ function (_ι_) can replace for-loop [iteration][147]: ιN when applied to a scalar positive integer yields a one-dimensional array (vector), 1 2 3 ... N. More recent implementations of APL generally include comprehensive control structures, so that data structure and program control flow can be clearly and cleanly separated.

The APL environment is called a _workspace_. In a workspace the user can define programs and data, i.e. the data values exist also outside the programs, and the user can also manipulate the data without having to define a program.[\[52\]][148] In the examples below, the APL interpreter first types six spaces before awaiting the user's input. Its own output starts in column one.

The user can save the workspace with all values, programs, and execution status.

APL is well known for its use of a set of non-[ASCII][149] symbols, which are an extension of traditional arithmetic and algebraic notation. Having single character names for [SIMD][150] vector functions is one way that APL enables compact formulation of algorithms for data transformation such as computing [Conway's Game of Life][151] in one line of code.[\[53\]][152] In nearly all versions of APL, it is theoretically possible to express any computable function in one expression, that is, in one line of code.

Because of the unusual [character set][153], many programmers use special [keyboards][154] with APL keytops to write APL code.[\[54\]][155] Although there are various ways to write APL code using only ASCII characters,[\[55\]][156] in practice it is almost never done. (This may be thought to support Iverson's thesis about [notation as a tool of thought][157].[\[56\]][158]) Most if not all modern implementations use standard keyboard layouts, with special mappings or [input method editors][159] to access non-ASCII characters. Historically, the APL font has been distinctive, with uppercase italic alphabetic characters and upright numerals and symbols. Most vendors continue to display the APL character set in a custom font.

Advocates of APL\[_[who?][160]_\] claim that the examples of so-called "write-only code" (badly written and almost incomprehensible code) are almost invariably examples of poor programming practice or novice mistakes, which can occur in any language. Advocates of APL also claim that they are far more productive with APL than with more conventional computer languages, and that working software can be implemented in far less time and with far fewer programmers than using other technology.

They also may claim that because it is compact and terse, APL lends itself well to larger-scale software development and complexity, because the number of lines of code can be dramatically reduced. Many APL advocates and practitioners also view standard programming languages such as [COBOL][161] and [Java][162] as being comparatively tedious. APL is often found where time-to-market is important, such as with trading systems.[\[57\]][163][\[58\]][164][\[59\]][165][\[60\]][166]

Iverson later designed the _[J programming language][167]_, which uses [ASCII][149] with [digraphs][168] instead of special symbols.

## Execution

Because APL's core objects are arrays,[\[61\]][169] it lends itself well to [parallelism][170],[\[62\]][171] [parallel computing][172],[\[63\]][173][\[64\]][174] [massively parallel][175] applications,[\[65\]][176][\[66\]][177] and [very-large-scale integration or VLSI][178].[\[67\]][179][\[68\]][180]

## Interpreters

APLNext (formerly APL2000) offers an advanced APL interpreter that operates under Linux, Unix, and Windows. It supports Windows automation, supports calls to operating system and user defined DLLs, has an advanced APL File System, and represents the current level of APL language development. APL2000's product is an advanced continuation of [STSC][73]'s successful APL\*Plus/PC and APL\*Plus/386 product line.

_Dyalog APL_ is an advanced APL interpreter that operates under [AIX][181], [Linux][182] (including on the [Raspberry Pi][183]), [macOS][184] and [Microsoft Windows][185].[\[69\]][186] Dyalog has extensions to the APL language, which include new [object-oriented][133] features, numerous language enhancements, plus a consistent [namespace][187] model used for both its Microsoft Automation interface, as well as native [namespaces][187]. For the Windows platform, Dyalog APL offers tight integration with .NET, plus limited integration with the Microsoft Visual Studio development platform.

IBM offers a version of IBM APL2 for IBM AIX, Linux, Sun Solaris and Windows systems. This product is a continuation of APL2 offered for IBM mainframes. IBM APL2 was arguably the most influential APL system, which provided a solid implementation standard for the next set of extensions to the language, focusing on nested arrays.

NARS2000 is an open-source APL interpreter written by Bob Smith, a well-known APL developer and implementor from [STSC][188] in the 1970s and 1980s. NARS2000 contains advanced features and new datatypes, runs natively under Windows (32- and 64-bit versions), and runs under [Linux][182] and Apple [macOS][184] with [Wine][189].

MicroAPL Limited offers [APLX][113], a full-featured 64 bit interpreter for [Linux][182], [Microsoft Windows][185], and [macOS][184] systems. The core language is closely modelled on IBM's APL2 with various enhancements. _APLX_ includes close integration with [.NET][190], [Java][162], [Ruby][191] and [R][192]. Effective July 11, 2016,[\[70\]][193] MicroAPL withdrew APLX from commercial sale. [Dyalog][194] began hosting the [APLX website][195] including the download area and documentation.

[Soliton Incorporated][196] offers the SAX interpreter, which stands for _S_harp _A_PL for Uni_X_, for Unix and Linux systems. This is a further development of I. P. Sharp Associates' Sharp APL product. Unlike most other APL interpreters, [Kenneth E. Iverson][2] had some influence in the way nested arrays were implemented in Sharp APL and SAX. Nearly all other APL implementations followed the course set by IBM with APL2, thus some important details in Sharp APL differ from other implementations.

OpenAPL is an open source implementation of APL published by Branko Bratkovic. It is based on code by [Ken Thompson][197] of Bell Laboratories, together with contributions by others. It is licensed under the [GNU General Public License][198], and runs on Unix systems including Linux on x86, SPARC and other CPUs.

GNU APL is a free implementation of ISO Standard 13751 and hence similar to APL2\. It runs on GNU/Linux and on Windows using [Cygwin][199]. It uses [Unicode][200] internally. GNU APL was written by Jürgen Sauermann.

## Compilers

APL programs are normally [interpreted][201] and less often [compiled][202]. In reality, most APL compilers [translated][203] source APL to a lower level language such as [C][204], leaving the machine-specific details to the lower level compiler. Compilation of APL programs was a frequently discussed topic in conferences. Although some of the newer enhancements to the APL language such as nested arrays have rendered the language increasingly difficult to compile, the idea of APL compilation is still under development today.

In the past, APL compilation was regarded as a means to achieve execution speed comparable to other mainstream languages, especially on mainframe computers. Several APL compilers achieved some levels of success, though comparatively little of the development effort spent on APL over the years went to perfecting compilation into machine code.

As is the case when moving APL programs from one vendor's APL interpreter to another, APL programs invariably will require changes to their content. Depending on the compiler, variable declarations might be needed, certain language features would need to be removed or avoided, or the APL programs would need to be cleaned up in some way. Some features of the language, such as the execute function (an expression evaluator) and the various [reflection][205] and [introspection][206] functions from APL, such as the ability to return a function's text or to materialize a new function from text, are simply not practical to implement in machine code compilation.

A commercial compiler was brought to market by [STSC][73] in the mid-1980s as an add-on to IBM's VSAPL Program Product.[\[71\]][207][\[72\]][208] Unlike more modern APL compilers, this product produced machine code that would execute only in the interpreter environment, it was not possible to eliminate the interpreter component. The compiler could compile many scalar and vector operations to machine code, but it would rely on the APL interpreter's services to perform some more advanced functions, rather than attempt to compile them. However, dramatic speedups did occur, especially for heavily iterative APL code.

Around the same time, the book _An APL Compiler_ by [Timothy Budd][209] appeared in print.[\[73\]][210] This book detailed the construction of an APL [translator][203] (aplc),[\[74\]][211] written in [C][204], which performed certain optimizations such as [loop fusion][212] specific to the needs of an array language. The source language was APL-like in that a few rules of the APL language were changed or relaxed to permit more efficient compilation. The translator would emit C code which could then be compiled and run outside of the APL workspace. Another compiler, also named aplc, was later created by Samuel W. Sirlin, based on Budd's work.[\[75\]][213]

The Burroughs/Unisys _APLB_ interpreter (1982) was the first to use [dynamic][214] [incremental][215] compilation to produce code for an APL-specific [virtual machine][216]. It recompiled on-the-fly as identifiers changed their functional meanings. In addition to removing [parsing][217] and some error checking from the main execution path, such compilation also streamlines the repeated entry and exit of user-defined functional operands. This avoids the stack setup and take-down for function calls made by APL's built-in operators such as **Reduce** and **Each**.

_APEX_, a research APL compiler, is available under the [GNU Public License][218], per Snake Island Research Inc.[\[77\]][219] APEX compiles flat APL (a subset of ISO N8485) into [SAC][220], a functional array language with parallel semantics, and currently runs under [Linux][182]. APEX-generated code uses [loop fusion][212] and 'array contraction', special-case algorithms not generally available to interpreters (e.g., upgrade of [permutation matrix/vector][221]), to achieve a level of performance comparable to that of [Fortran][222].

The APLNext _VisualAPL_ system is a departure from a conventional APL system in that VisualAPL is a true .NET language which is fully interoperable with other .NET languages such as [VB.NET][223] and [C\#][224]. VisualAPL is inherently object-oriented and Unicode-based. While VisualAPL incorporates most of the features of standard APL implementations, the VisualAPL language extends standard APL to be .NET-compliant. VisualAPL is hosted in the standard Microsoft Visual Studio IDE and as such, invokes compilation in a manner identical to that of other .NET languages. By producing [Common Intermediate Language][225] (CIL) code, it utilizes the Microsoft just-in-time compiler (JIT) to support 32-bit or 64-bit hardware. Substantial performance speed-ups over standard APL have been reported,\[_[citation needed][104]_\] especially when (optional) strong typing of function arguments is used.

An APL-to-[C\#][224] [translator][203] is available from Causeway Graphical Systems. This product was designed to allow the APL code, translated to equivalent C\#, to run completely outside of the APL environment. The Causeway compiler requires a run-time library of array functions. Some speedup, sometimes dramatic, is visible, but happens on account of the optimisations inherent in Microsoft's .NET Framework.

## Matrix optimizations

APL was unique in the speed with which it could perform complicated matrix operations. For example, a very large matrix multiplication would take only a few seconds on a machine that was much less powerful than those today, ref. [history of supercomputing][226] and "because it operates on arrays and performs operations like matrix inversion internally, well written APL can be surprisingly fast."[\[78\]][227][\[79\]][228] There were both technical and economic reasons for this advantage:

Phil Abrams' much-cited paper "An APL Machine" illustrated how APL could make effective use of [lazy evaluation][229] where calculations would not actually be performed until the results were needed and then only those calculations strictly required. An obvious (and easy to implement) lazy evaluation is the _J-vector_: when a monadic _iota_ is encountered in the code, it is kept as a representation instead of being expanded in memory; in future operations, a J-vectors contents are the loop's induction register, not reads from memory.

Although such techniques were not widely used by commercial interpreters, they exemplify the language's best survival mechanism: not specifying the order of scalar operations or the exact contents of memory. As standardized, in 1983 by [ANSI][230] [working group][231] X3J10, APL remains highly [data-parallel][170]. This gives language implementers immense freedom to schedule operations as efficiently as possible. As computer innovations such as [cache memory][232], and [SIMD][150] execution became commercially available, APL programs are ported with almost no extra effort spent re-optimizing low-level details.

## Terminology

APL makes a clear distinction between _functions_ and _operators_.[\[50\]][140][\[80\]][233] Functions take arrays (variables or constants or expressions) as arguments, and return arrays as results. Operators (similar to [higher-order functions][139]) take functions or arrays as arguments, and derive related functions. For example, the "sum" function is derived by applying the "reduction" operator to the "addition" function. Applying the same reduction operator to the "maximum" function (which returns the larger of two numbers) derives a function which returns the largest of a group (vector) of numbers. In the J language, Iverson substituted the terms "verb" for "function" and "adverb" or "conjunction" for "operator".

APL also identifies those features built into the language, and represented by a symbol, or a fixed combination of symbols, as _primitives_. Most primitives are either functions or operators. Coding APL is largely a process of writing non-primitive functions and (in some versions of APL) operators. However a few primitives are considered to be neither functions nor operators, most noticeably assignment.

Some words used in APL literature have meanings that differ from those in both mathematics and the generality of computer science.

## Syntax

APL has explicit representations of functions, operators, and syntax, thus providing a basis for the clear and explicit statement of extended facilities in the language, as well as tools for experimentation upon them.[\[84\]][234]

## Examples

## Hello, World

This displays "[Hello, world][235]":

'Hello World,' sample user session on YouTube[\[85\]][236]

A design theme in APL is to define default actions in some cases that would produce syntax errors in most other programming languages.

The 'Hello, world' string constant above displays, because display is the default action on any expression for which no action is specified explicitly (e.g. assignment, function parameter).

## Exponentiation

Another example of this theme is that exponentiation in APL is written as "`2⋆3`", which indicates raising 2 to the power 3 (this would be written as "`2^3`" in some other languages and "`2**3`" in FORTRAN and Python). However, if no base is specified (as with the statement "`⋆3`" in APL, or "`^3`" in other languages), most other programming languages one would have a syntax error. APL however assumes the missing base to be the natural logarithm constant [e][237] (2.71828....), and so interpreting "`⋆3`" as "`2.71828⋆3`".

## "Pick 6" lottery numbers

This following immediate-mode expression generates a typical set of "Pick 6" [lottery][238] numbers: six [pseudo-random][239] [integers][240] ranging from 1 to 40, _guaranteed non-repeating_, and displays them sorted in ascending order:

The above does a lot, concisely; although it seems complex to a beginning [APLer][241]. It combines the following APL **functions** (also called _primitives_[\[86\]][242] and _glyphs_[\[87\]][243]):

Since there is no function to the left of the left-most x to tell APL what to do with the result, it simply outputs it to the display (on a single line, separated by spaces) without needing any explicit instruction to do that.

"?" also has a monadic equivalent called **roll**, which simply returns a single random integer between 1 and its sole operand \[to the right of it\], inclusive. Thus, a [role-playing game][244] program might use the expression "?20" to roll a twenty-sided die.

## Prime numbers

The following expression finds all [prime numbers][245] from 1 to R. In both time and space, the calculation complexity is ![O(R^{2})\,\!](https://wikimedia.org/api/rest_v1/media/math/render/svg/7f0e6bdedb302cd53a7925a15431adf27738bc3f) (in [Big O notation][246]).

Executed from right to left, this means:

(Note, this assumes the APL origin is 1, i.e. indices start with 1\. APL can be set to use 0 as the origin, so that `ι6` is `0 1 2 3 4 5`, which is convenient for some calculations).

## Sorting

The following expression [sorts][247] a word list stored in matrix X according to word length:

## Game of Life

The following function "life", written in Dyalog APL, takes a boolean matrix and calculates the new generation according to [Conway's Game of Life][151]. It demonstrates the power of APL to implement a complex algorithm in very little code, but it is also very hard to follow unless one has advanced knowledge of APL.

## HTML tags removal

In the following example, also Dyalog, the first line assigns some HTML code to a variable `txt` and then uses an APL expression to remove all the HTML tags:

This returns the text `This is emphasized text.`

## Character set

**APL** has been both criticized and praised for its choice of a unique, non-standard character set. Some who learn it become ardent adherents, suggesting that there is some weight behind Iverson's idea that the notation used does make a difference. In the beginning, there were few terminal devices and even display monitors that could reproduce the APL character set---the most popular ones employing the [IBM Selectric][248] print mechanism used with a special APL type element. One of the early APL [line terminals][249] (line-mode operation only, _not_ full screen) was the Texas Instruments TI Model 745 (circa 1977) with the full APL character set[\[89\]][250] which featured [half and full duplex][251] [telecommunications][252] modes, for interacting with an APL [time-sharing][37] service or remote mainframe to run a remote computer job, [called an RJE][253].

Over time, with the universal use of high-quality graphic displays, printing devices and [Unicode][200] support, the APL character font problem has largely been eliminated. However, entering APL characters requires the use of [input method editors][159], keyboard mappings, virtual/on-screen APL symbol sets,[\[90\]][254][\[91\]][255] or easy-reference printed keyboard cards which can frustrate beginners accustomed to other programming languages.[\[92\]][256][\[93\]][257][\[94\]][258] With beginners who have no prior experience with other programming languages, a study involving high school students found that typing and using APL characters did not hinder the students in any measurable way.[\[95\]][259]

In defense of the APL community, APL requires less coding to type in, and keyboard mappings become memorized over time. Also, special APL keyboards are manufactured and in use today, as are freely available downloadable fonts for operating system platforms such as Microsoft Windows.[\[96\]][260] The reported productivity gains assume that one will spend enough time working in APL to make memorization of the symbols, their semantics, and keyboard mappings worthwhile.\[_[citation needed][104]_\]

## Use

APL has long had a select, mathematically inclined and curiosity-driven user base, who reference its powerful and symbolic nature: one symbol/character can perform an entire sort, another can perform regression, for example. It was and still is popular in financial, pre-modeling applications, and insurance applications, in simulations, and in mathematical applications. APL has been used in a wide variety of contexts and for many and varied purposes, including artificial intelligence[\[97\]][261][\[98\]][262] and robotics.[\[99\]][263][\[100\]][264] A newsletter titled "Quote-Quad" dedicated to APL was published from the 1970s until 2007 by the SIGAPL section of the Association for Computing Machinery (Quote-Quad is the name of the APL character used for text input and output).[\[101\]][265]

Before the advent of full-screen systems and until as late as the mid-1980s, systems were written such that the user entered instructions in his own business specific vocabulary. APL [time-sharing][37] vendors delivered applications in this form. On the [I. P. Sharp][72] timesharing system, a workspace called 39 MAGIC offered access to financial and airline data plus sophisticated (for the time) graphing and reporting. Another example is the GRAPHPAK workspace supplied with IBM's APL, then APL2\.

Because of its matrix operations, APL was for some time quite popular for computer graphics programming, where graphic transformations could be encoded as matrix multiplications. One of the first commercial computer graphics houses, [Digital Effects][266], based in New York City, produced an APL graphics product known as "Visions", which was used to create television commercials and, reportedly, animation for the 1982 film _[Tron][267]_. Digital Effects' use of APL was informally described at a number of SIGAPL conferences in the late 1980s; examples discussed included the early UK [Channel 4][268] TV logo/ident.

Interest in APL has declined from a peak in the mid-1980s. This appears partly due to lack of smooth migration pathways from higher performing memory-intensive mainframe implementations to low-cost personal computer alternatives - APL implementations for computers before the [Intel 80386][269] released in the late 1980s were only suitable for small applications. Another important reason for the decline is the lack of low cost, standardized and robust, compiled APL executables - usable across multiple computer hardware and OS platforms. There are several APL version permutations across various APL implementations, particularly differences between IBM's APL2 and APL2000's APL+ versions. Another practical limitation is that APL has fallen behind modern integrated computing environments with respect to debugging capabilities or test-driven development. Consequently, while APL remains eminently suitable for small-to-medium-sized programs, productivity gains for larger projects involving teams of developers would be questionable.\[_[citation needed][104]_\]

The growth of end-user computing tools such as [Microsoft Excel][270] and [Microsoft Access][271] has indirectly eroded potential APL usage. These are frequently appropriate platforms for what may have been APL applications in the 1970s and 1980s. Some APL users migrated to the [J programming language][167], which offers some advanced features. Lastly, the decline was also due in part to the growth of [MATLAB][272], [GNU Octave][273], and [Scilab][274]. These scientific computing array-oriented platforms provide an interactive computing experience similar to APL, but more closely resemble conventional programming languages such as Fortran, and use standard ASCII. Other APL users continue to wait for a very low-cost, standardized, broad-hardware-usable APL implementation.[\[102\]][275][\[103\]][276]

Notwithstanding this decline, APL finds continued use in certain fields, such as accounting research, pre-hardcoded modeling, DNA identification technology,[\[104\]][277][\[105\]][278] symbolic mathematical expression and learning. It remains an inspiration to its current user base as well as for other languages.

## Standardization

APL has been standardized by the [ANSI][230] [working group][231] X3J10 and [ISO][279]/[IEC][280] Joint Technical Committee 1 Subcommittee 22 Working Group 3\. The Core APL language is specified in ISO 8485:1989, and the Extended APL language is specified in ISO/IEC 13751:2001\.

## See also

## References

## Further reading

## External links

[0]: #cite_note-aplbook-8
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Kenneth_E._Iverson "Kenneth E. Iverson"
[3]: /wiki/Array_data_type#Multi-dimensional_arrays "Array data type"
[4]: #cite_note-9
[5]: /wiki/Spreadsheet "Spreadsheet"
[6]: /wiki/Functional_programming "Functional programming"
[7]: #cite_note-10
[8]: #cite_note-mworks-6
[9]: #cite_note-jinsp-4
[10]: #cite_note-kinsp-5
[11]: #cite_note-qinsp-7
[12]: #cite_note-11
[13]: #cite_note-prod-12
[14]: /wiki/Mathematical_notation "Mathematical notation"
[15]: /wiki/Harvard_University "Harvard University"
[16]: /wiki/IBM "IBM"
[17]: /wiki/Adin_Falkoff "Adin Falkoff"
[18]: /wiki/Burroughs_B5000 "Burroughs B5000"
[19]: /wiki/Register_machine "Register machine"
[20]: /wiki/Fred_Brooks "Fred Brooks"
[21]: #cite_note-13
[22]: #cite_note-14
[23]: /wiki/IBM_System/360 "IBM System/360"
[24]: /wiki/IBM_1620 "IBM 1620"
[25]: #cite_note-15
[26]: /wiki/Edward_H._Sussenguth_Jr. "Edward H. Sussenguth Jr."
[27]: /w/index.php?title=IBM_Systems_Journal&action=edit&redlink=1 "IBM Systems Journal (page does not exist)"
[28]: /wiki/Science_Research_Associates "Science Research Associates"
[29]: #cite_note-16
[30]: /wiki/Lawrence_M._Breed "Lawrence M. Breed"
[31]: /wiki/Philip_S._Abrams "Philip S. Abrams"
[32]: /wiki/FORTRAN_IV "FORTRAN IV"
[33]: /wiki/IBM_7090 "IBM 7090"
[34]: /wiki/IBM_7090/94_IBSYS "IBM 7090/94 IBSYS"
[35]: #cite_note-17
[36]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[37]: /wiki/Time-sharing "Time-sharing"
[38]: /wiki/IBM_System/360_Model_50 "IBM System/360 Model 50"
[39]: #cite_note-18
[40]: /wiki/Computer_monitor#Cathode_ray_tube "Computer monitor"
[41]: /wiki/IBM_Selectric_typewriter "IBM Selectric typewriter"
[42]: /wiki/IBM_1050 "IBM 1050"
[43]: /wiki/IBM_2741 "IBM 2741"
[44]: #cite_note-APLQQ91-19
[45]: #cite_note-20
[46]: /wiki/Sheffer_stroke "Sheffer stroke"
[47]: /wiki/Thomas_J._Watson_Research_Center "Thomas J. Watson Research Center"
[48]: /wiki/Yorktown_Heights,_New_York "Yorktown Heights, New York"
[49]: /wiki/IBM_1130 "IBM 1130"
[50]: #cite_note-21
[51]: #cite_note-22
[52]: /wiki/Memory_management_unit "Memory management unit"
[53]: #cite_note-23
[54]: /wiki/IBM_System/370 "IBM System/370"
[55]: #cite_note-IBM_APL.5C360_1968-24
[56]: #cite_note-25
[57]: #cite_note-apl360-26
[58]: /wiki/Monad_(functional_programming) "Monad (functional programming)"
[59]: /wiki/Dyadics "Dyadics"
[60]: #cite_note-27
[61]: /wiki/Shared_variable "Shared variable"
[62]: /wiki/IBM_5100 "IBM 5100"
[63]: /wiki/BASIC "BASIC"
[64]: /wiki/Conversational_Monitor_System "Conversational Monitor System"
[65]: /wiki/Time_Sharing_Option "Time Sharing Option"
[66]: /wiki/VSPC "VSPC"
[67]: /wiki/MUSIC/SP "MUSIC/SP"
[68]: /wiki/CICS "CICS"
[69]: /wiki/UNIVAC_1100/2200_series "UNIVAC 1100/2200 series"
[70]: #cite_note-28
[71]: #cite_note-29
[72]: /wiki/I._P._Sharp_Associates "I. P. Sharp Associates"
[73]: /wiki/Scientific_Time_Sharing_Corporation "Scientific Time Sharing Corporation"
[74]: /w/index.php?title=Time_Sharing_Resources&action=edit&redlink=1 "Time Sharing Resources (page does not exist)"
[75]: /wiki/The_Computer_Company "The Computer Company"
[76]: /wiki/IBM_4300 "IBM 4300"
[77]: /wiki/Burroughs_Corporation "Burroughs Corporation"
[78]: /wiki/Control_Data_Corporation "Control Data Corporation"
[79]: /wiki/Data_General "Data General"
[80]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[81]: /wiki/Harris_Corporation "Harris Corporation"
[82]: /wiki/Hewlett-Packard "Hewlett-Packard"
[83]: /wiki/Siemens_AG "Siemens AG"
[84]: /wiki/Xerox "Xerox"
[85]: /w/index.php?title=Garth_Foster&action=edit&redlink=1 "Garth Foster (page does not exist)"
[86]: /wiki/Syracuse_University "Syracuse University"
[87]: /wiki/Blue_Mountain_Lake,_New_York "Blue Mountain Lake, New York"
[88]: /wiki/Asilomar_Conference_Grounds "Asilomar Conference Grounds"
[89]: /wiki/Association_for_Computing_Machinery "Association for Computing Machinery"
[90]: #cite_note-30
[91]: /wiki/Turing_Award "Turing Award"
[92]: #cite_note-31
[93]: /wiki/Jim_Brown_(Computer_Scientist) "Jim Brown (Computer Scientist)"
[94]: #cite_note-36
[95]: #cite_note-37
[96]: #cite_note-38
[97]: /wiki/Unix "Unix"
[98]: /wiki/Microcomputer "Microcomputer"
[99]: #cite_note-39
[100]: #cite_note-40
[101]: #cite_note-41
[102]: #cite_note-42
[103]: #cite_note-43
[104]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[105]: /wiki/Intel_8008 "Intel 8008"
[106]: /wiki/MCM/70 "MCM/70"
[107]: /wiki/VideoBrain_Family_Computer "VideoBrain Family Computer"
[108]: #cite_note-44
[109]: /wiki/Intel "Intel"
[110]: /wiki/Z80 "Z80"
[111]: /wiki/CP/M "CP/M"
[112]: /wiki/68000 "68000"
[113]: /wiki/APLX "APLX"
[114]: /wiki/IBM_PC "IBM PC"
[115]: /wiki/PC-XT/370 "PC-XT/370"
[116]: #cite_note-45
[117]: /wiki/Emulator "Emulator"
[118]: /wiki/Commodore_SuperPET "Commodore SuperPET"
[119]: /wiki/University_of_Waterloo "University of Waterloo"
[120]: /wiki/Vector_processor "Vector processor"
[121]: /wiki/Motorola_68000 "Motorola 68000"
[122]: #cite_note-46
[123]: /wiki/Open_Letter_to_Hobbyists "Open Letter to Hobbyists"
[124]: /wiki/Microsoft_Corporation "Microsoft Corporation"
[125]: /wiki/Rodnay_Zaks "Rodnay Zaks"
[126]: /wiki/Sybex "Sybex"
[127]: /wiki/Special:BookSources/0895880059
[128]: #cite_note-47
[129]: #cite_note-48
[130]: /w/index.php?title=William_Yerazunis&action=edit&redlink=1 "William Yerazunis (page does not exist)"
[131]: /wiki/Prime_Computer "Prime Computer"
[132]: #cite_note-49
[133]: /wiki/Object-oriented_programming "Object-oriented programming"
[134]: /wiki/.NET_Framework ".NET Framework"
[135]: /wiki/Lambda_expressions "Lambda expressions"
[136]: /wiki/Unary_operation "Unary operation"
[137]: /wiki/Binary_operation "Binary operation"
[138]: /wiki/Function_(programming) "Function (programming)"
[139]: /wiki/Higher-order_function "Higher-order function"
[140]: #cite_note-MicroAOL_Operators-50
[141]: /wiki/Array_data_type "Array data type"
[142]: #cite_note-51
[143]: /wiki/Operator_precedence "Operator precedence"
[144]: /wiki/APL_syntax_and_symbols#Syntax_rules "APL syntax and symbols"
[145]: /wiki/Control_flow "Control flow"
[146]: /wiki/Structured_programming "Structured programming"
[147]: /wiki/Iteration "Iteration"
[148]: #cite_note-52
[149]: /wiki/ASCII "ASCII"
[150]: /wiki/SIMD "SIMD"
[151]: /wiki/Conway%27s_Game_of_Life "Conway's Game of Life"
[152]: #cite_note-53
[153]: /wiki/Character_set "Character set"
[154]: /wiki/Computer_keyboard "Computer keyboard"
[155]: #cite_note-54
[156]: #cite_note-55
[157]: /wiki/Linguistic_relativity "Linguistic relativity"
[158]: #cite_note-56
[159]: /wiki/Input_method_editor "Input method editor"
[160]: /wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions "Wikipedia:Manual of Style/Words to watch"
[161]: /wiki/COBOL "COBOL"
[162]: /wiki/Java_(programming_language) "Java (programming language)"
[163]: #cite_note-57
[164]: #cite_note-58
[165]: #cite_note-59
[166]: #cite_note-60
[167]: /wiki/J_programming_language "J programming language"
[168]: /wiki/Digraph_(computing) "Digraph (computing)"
[169]: #cite_note-61
[170]: /wiki/Data_parallelism "Data parallelism"
[171]: #cite_note-62
[172]: /wiki/Parallel_computing "Parallel computing"
[173]: #cite_note-63
[174]: #cite_note-64
[175]: /wiki/Massively_parallel_(computing) "Massively parallel (computing)"
[176]: #cite_note-65
[177]: #cite_note-66
[178]: /wiki/Very-large-scale_integration "Very-large-scale integration"
[179]: #cite_note-67
[180]: #cite_note-68
[181]: /wiki/AIX "AIX"
[182]: /wiki/Linux "Linux"
[183]: /wiki/Raspberry_Pi "Raspberry Pi"
[184]: /wiki/MacOS "MacOS"
[185]: /wiki/Microsoft_Windows "Microsoft Windows"
[186]: #cite_note-69
[187]: /wiki/Namespace "Namespace"
[188]: /wiki/STSC "STSC"
[189]: /wiki/Wine_(software) "Wine (software)"
[190]: /wiki/.NET ".NET"
[191]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[192]: /wiki/R_(programming_language) "R (programming language)"
[193]: #cite_note-70
[194]: http://www.dyalog.com
[195]: http://www.dyalog.com/aplx.htm
[196]: /wiki/Soliton_Incorporated "Soliton Incorporated"
[197]: /wiki/Ken_Thompson "Ken Thompson"
[198]: /wiki/GNU_General_Public_License "GNU General Public License"
[199]: /wiki/Cygwin "Cygwin"
[200]: /wiki/Unicode "Unicode"
[201]: /wiki/Interpreted_language "Interpreted language"
[202]: /wiki/Compiled_language "Compiled language"
[203]: /wiki/Translator_(computing) "Translator (computing)"
[204]: /wiki/C_(programming_language) "C (programming language)"
[205]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[206]: /wiki/Introspection_(computer_science) "Introspection (computer science)"
[207]: #cite_note-71
[208]: #cite_note-72
[209]: /wiki/Timothy_Budd "Timothy Budd"
[210]: #cite_note-73
[211]: #cite_note-74
[212]: /wiki/Loop_fusion "Loop fusion"
[213]: #cite_note-75
[214]: /wiki/Dynamic_compilation "Dynamic compilation"
[215]: /wiki/Incremental_compiler "Incremental compiler"
[216]: /wiki/Virtual_machine "Virtual machine"
[217]: /wiki/Parsing "Parsing"
[218]: /wiki/GNU_Public_License "GNU Public License"
[219]: #cite_note-77
[220]: /wiki/SAC_programming_language "SAC programming language"
[221]: /wiki/Permutation_matrix "Permutation matrix"
[222]: /wiki/Fortran "Fortran"
[223]: /wiki/VB.NET "VB.NET"
[224]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[225]: /wiki/Common_Intermediate_Language "Common Intermediate Language"
[226]: /wiki/History_of_supercomputing#Beginnings:_1950s_and_1960s "History of supercomputing"
[227]: #cite_note-78
[228]: #cite_note-79
[229]: /wiki/Lazy_evaluation "Lazy evaluation"
[230]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[231]: /wiki/Working_group "Working group"
[232]: /wiki/Cache_memory "Cache memory"
[233]: #cite_note-80
[234]: #cite_note-84
[235]: /wiki/Hello,_world "Hello, world"
[236]: #cite_note-85
[237]: /wiki/E_(mathematical_constant) "E (mathematical constant)"
[238]: /wiki/Lottery "Lottery"
[239]: /wiki/Pseudo-random "Pseudo-random"
[240]: /wiki/Integer "Integer"
[241]: https://en.wiktionary.org/wiki/APLer "wiktionary:APLer"
[242]: #cite_note-86
[243]: #cite_note-87
[244]: /wiki/Role-playing_game "Role-playing game"
[245]: /wiki/Prime_number "Prime number"
[246]: /wiki/Big_O_notation "Big O notation"
[247]: /wiki/Sorting "Sorting"
[248]: /wiki/IBM_Selectric "IBM Selectric"
[249]: /wiki/Computer_terminal "Computer terminal"
[250]: #cite_note-89
[251]: /wiki/Duplex_(telecommunications) "Duplex (telecommunications)"
[252]: /wiki/Telecommunication "Telecommunication"
[253]: /wiki/Remote_job_entry "Remote job entry"
[254]: #cite_note-90
[255]: #cite_note-91
[256]: #cite_note-92
[257]: #cite_note-93
[258]: #cite_note-94
[259]: #cite_note-95
[260]: #cite_note-96
[261]: #cite_note-97
[262]: #cite_note-98
[263]: #cite_note-99
[264]: #cite_note-100
[265]: #cite_note-101
[266]: /wiki/Digital_Effects_(studio) "Digital Effects (studio)"
[267]: /wiki/Tron "Tron"
[268]: /wiki/Channel_4 "Channel 4"
[269]: /wiki/Intel_80386 "Intel 80386"
[270]: /wiki/Microsoft_Excel "Microsoft Excel"
[271]: /wiki/Microsoft_Access "Microsoft Access"
[272]: /wiki/MATLAB "MATLAB"
[273]: /wiki/GNU_Octave "GNU Octave"
[274]: /wiki/Scilab "Scilab"
[275]: #cite_note-102
[276]: #cite_note-103
[277]: #cite_note-104
[278]: #cite_note-105
[279]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[280]: /wiki/International_Electrotechnical_Commission "International Electrotechnical Commission"