**Fortran** (formerly **FORTRAN**, derived from "Formula Translation"[\[2\]][0]) is a general-purpose, [imperative][1] [programming language][2] that is especially suited to [numeric computation][3] and [scientific computing][4]. Originally developed by [IBM][5][\[3\]][6] in the 1950s for scientific and engineering applications, Fortran came to dominate this area of programming early on and has been in continuous use for over half a century in computationally intensive areas such as [numerical weather prediction][7], [finite element analysis][8], [computational fluid dynamics][9], [computational physics][10], [crystallography][11] and [computational chemistry][12]. It is a popular language for [high-performance computing][13][\[4\]][14] and is used for programs that benchmark and rank the world's [fastest supercomputers][15].[\[5\]][16]

Fortran encompasses a lineage of versions, each of which evolved to add extensions to the language while usually retaining compatibility with prior versions. Successive versions have added support for [structured programming][17] and processing of character-based data (FORTRAN 77), [array programming][18], [modular programming][19] and [generic programming][20] (Fortran 90), [high performance Fortran][21] (Fortran 95), [object-oriented programming][22] (Fortran 2003) and [concurrent programming][23] (Fortran 2008).

## Naming

The names of earlier versions of the language through FORTRAN 77 were conventionally spelled in all-capitals (FORTRAN 77 was the last version in which the use of lowercase letters in keywords was strictly non-standard). The capitalization has been dropped in referring to newer versions beginning with Fortran 90\. The official language [standards][24] now refer to the language as "Fortran" rather than all-caps "FORTRAN".

## History

In late 1953, [John W. Backus][25] submitted a proposal to his superiors at [IBM][5] to develop a more practical alternative to [assembly language][26] for programming their [IBM 704][27] mainframe computer. Backus' historic FORTRAN team consisted of programmers Richard Goldberg, Sheldon F. Best, Harlan Herrick, Peter Sheridan, [Roy Nutt][28], Robert Nelson, Irving Ziller, [Lois Haibt][29], and [David Sayre][30].[\[6\]][31] Its concepts included easier entry of equations into a computer, an idea developed by [J. Halcombe Laning][32] and demonstrated in the [Laning and Zierler system][33] of 1952\.[\[7\]][34]

A draft specification for _The IBM Mathematical Formula Translating System_ was completed by mid-1954\. The first manual for FORTRAN appeared in October 1956, with the first FORTRAN [compiler][35] delivered in April 1957\. This was the first [optimizing compiler][36], because customers were reluctant to use a [high-level programming language][37] unless its compiler could generate code with performance comparable to that of hand-coded assembly language.[\[8\]][38]

While the community was skeptical that this new method could possibly outperform hand-coding, it reduced the number of programming [statements][39] necessary to operate a machine by a factor of 20, and quickly gained acceptance. John Backus said during a 1979 interview with _Think_, the IBM employee magazine, "Much of my work has come from being lazy. I didn't like writing programs, and so, when I was working on the [IBM 701][40], writing programs for computing missile trajectories, I started work on a programming system to make it easier to write programs."[\[9\]][41]

The language was widely adopted by scientists for writing numerically intensive programs, which encouraged compiler writers to produce compilers that could generate faster and more efficient code. The inclusion of a [complex number data type][42] in the language made Fortran especially suited to technical applications such as electrical engineering.

By 1960, versions of FORTRAN were available for the [IBM 709][43], [650][44], [1620][45], and [7090][46] computers. Significantly, the increasing popularity of FORTRAN spurred competing computer manufacturers to provide FORTRAN compilers for their machines, so that by 1963 over 40 FORTRAN compilers existed. For these reasons, FORTRAN is considered to be the first widely used programming language supported across a variety of computer architectures.

The development of FORTRAN paralleled the [early evolution of compiler technology][47], and many advances in the theory and design of [compilers][35] were specifically motivated by the need to generate efficient code for FORTRAN programs.

## FORTRAN

The initial release of FORTRAN for the IBM 704 contained 32 [statements][39], including:

The arithmetic `IF` statement was similar to a three-way branch instruction on the IBM 704\. However, the 704 branch instructions all contained only one destination address (e.g., TZE -- Transfer AC Zero, TNZ -- Transfer AC Not Zero, TPL -- Transfer AC Plus, TMI -- Transfer AC Minus). The machine (and its successors in the [700/7000 series][48]) did have a three-way _skip_ instruction (CAS -- Compare AC with Storage), but using this instruction to implement the `IF` would consume 4 instruction words, require the constant Zero in a word of storage, and take 3 machine cycles to execute; using the Transfer instructions to implement the `IF` could be done in 1 to 3 instruction words, required no constants in storage, and take 1 to 3 machine cycles to execute. An optimizing compiler like FORTRAN would most likely select the more compact and usually faster Transfers instead of the Compare (use of Transfers also allowed the `FREQUENCY` statement to optimize `IF`s, which could not be done using the Compare). Also the Compare considered −0 and +0 to be different values while the Transfer Zero and Transfer Not Zero considered them to be the same. The `FREQUENCY` statement in FORTRAN was used originally (and optionally) to give branch probabilities for the three branch cases of the arithmetic IF statement. The first FORTRAN compiler used this weighting to perform _at compile time_ a [Monte Carlo simulation][49] of the generated code, the results of which were used to optimize the placement of basic blocks in memory -- a very sophisticated optimization for its time. The Monte Carlo technique is documented in Backus et al.'s paper on this original implementation, _The FORTRAN Automatic Coding System_:

The fundamental unit of program is the [basic block][50]; a basic block is a stretch of program which has one entry point and one exit point. The purpose of section 4 is to prepare for section 5 a table of predecessors (PRED table) which enumerates the basic blocks and lists for every basic block each of the basic blocks which can be its immediate predecessor in flow, together with the absolute frequency of each such basic block link. This table is obtained by running the program once in Monte-Carlo fashion, in which the outcome of conditional transfers arising out of IF-type statements and computed GO TO'S is determined by a random number generator suitably weighted according to whatever FREQUENCY statements have been provided.[\[10\]][51]

Many years later, the `FREQUENCY` statement had no effect on the code, and was treated as a comment statement, since the compilers no longer did this kind of compile-time simulation. A similar fate has befallen _compiler hints_ in several other programming languages; for example [C][52]'s [`register` keyword][53].\[_[citation needed][54]_\]

## Fixed layout and punched cards

Before the development of disk files, text editors and terminals, programs were most often entered on a [keypunch][55] keyboard onto 80-column [punched cards][56], one line to a card. The resulting deck of cards would be fed into a card reader to be compiled. Punched-card codes included no lower-case letters or many special characters, and special versions of the IBM 026 keypunch were offered that would correctly print the repurposed special characters used in Fortran.

Reflecting punched-card input practice, Fortran programs were originally written in a fixed-column format, with the first 72 columns read into twelve 36-bit words.

A letter "C" in column 1 caused the entire card to be treated as a comment and ignored by the compiler. Otherwise, the columns of the card were divided into four fields:

Columns 73 to 80 could therefore be used for identification information, such as punching a sequence number or text, which could be used to re-order cards if a stack of cards was dropped; though in practice this was reserved for stable, production programs. An [IBM 519][57] could be used to copy a program deck and add sequence numbers. Some early compilers, e.g., the IBM 650's, had additional restrictions due to limitations on their card readers.[\[12\]][58] Keypunches could be programmed to tab to column 7 and skip out after column 72\. Later compilers relaxed most fixed-format restrictions, and the requirement was eliminated in the Fortran 90 standard.

Within the statement field, [whitespace characters][59] (blanks) were ignored outside a text literal. This allowed omitting spaces between tokens for brevity or including spaces within identifiers for clarity. For example, `AVG OF X` was a valid identifier, equivalent to `AVGOFX`, and `101010DO101I=1,101` was a valid statement, equivalent to `10101 DO 101 I = 1, 101` because the zero in column 6 is treated as if it were a space (!), while `101010DO101I=1.101` was instead `10101 DO101I = 1.101`, the assignment of 1.101 to a variable called `DO101I`. Note the slight visual difference between a comma and a period.

[Hollerith strings][60], originally allowed only in FORMAT and DATA statements, were prefixed by a character count and the letter H (e.g., `26HTHIS IS ALPHANUMERIC DATA.`), allowing blanks to be retained within the character string. Miscounts were a problem.

## FORTRAN II

IBM's _FORTRAN II_ appeared in 1958\. The main enhancement was to support [procedural programming][61] by allowing user-written subroutines and functions which returned values, with parameters passed by [reference][62]. The COMMON statement provided a way for subroutines to access common (or [global][63]) variables. Six new statements were introduced:

Over the next few years, FORTRAN II would also add support for the `DOUBLE PRECISION` and `COMPLEX` data types.

Early FORTRAN compilers supported no [recursion][64] in subroutines. Early computer architectures supported no concept of a stack, and when they did directly support subroutine calls, the return location was often stored in one fixed location adjacent to the subroutine code, which does not permit a subroutine to be called again before a prior call of the subroutine has returned. Although not specified in Fortran 77, many F77 compilers supported recursion as an option, while it became a standard in Fortran 90\.[\[13\]][65]

## Simple FORTRAN II program

This program, for [Heron's formula][66], reads data on a tape reel containing three 5-digit integers A, B, and C as input. If A, B, and C cannot represent the sides of a triangle in plane geometry, then the program's execution will end with an error code of "STOP 1". Otherwise, an output line will be printed showing the input values for A, B, and C, followed by the computed AREA of the triangle as a floating-point number with 2 digits after the decimal point.

## FORTRAN III

IBM also developed a _FORTRAN III_ in 1958 that allowed for inline assembly code among other features; however, this version was never released as a product. Like the 704 FORTRAN and FORTRAN II, FORTRAN III included machine-dependent features that made code written in it unportable from machine to machine. Early versions of FORTRAN provided by other vendors suffered from the same disadvantage.

## IBM 1401 FORTRAN

FORTRAN was provided for the IBM 1401 computer by an innovative 63-phase compiler that ran entirely in its [core memory][67] of only 8000 (6-bit) characters. The compiler could be run from tape, or from a 2200-card deck; it used no further tape or disk storage. It kept the program in memory and loaded [overlays][68] that gradually transformed it, in place, into executable form, as described by Haines.[\[14\]][69] and in [IBM document C24-1455][70]. The executable form was not entirely [machine language][71]; rather, floating-point arithmetic, subscripting, input/output, and function references were interpreted, anticipating [UCSD Pascal][72] [P-code][73] by two decades.

IBM later provided a FORTRAN IV compiler for the 1400 series of computers, described in [IBM document C24-3322][74].

## FORTRAN IV

Starting in 1961, as a result of customer demands, IBM began development of a _FORTRAN IV_ that removed the machine-dependent features of FORTRAN II (such as `READ INPUT TAPE`), while adding new features such as a [`LOGICAL` data type][75], logical [Boolean expressions][76] and the _logical IF statement_ as an alternative to the _arithmetic IF statement._ FORTRAN IV was eventually released in 1962, first for the [IBM 7030][77] ("Stretch") computer, followed by versions for the [IBM 7090][46], [IBM 7094][46], and later for the [IBM 1401][78] in 1966\.

By 1965, FORTRAN IV was supposed to be compliant with the _standard_ being developed by the [American Standards Association][79] X3.4.3 FORTRAN Working Group.[\[15\]][80]

At about this time FORTRAN IV had started to become an important educational tool and implementations such as the University of Waterloo's WATFOR and [WATFIV][81] were created to simplify the complex compile and link processes of earlier compilers.

## FORTRAN 66

Perhaps the most significant development in the early history of FORTRAN was the decision by the _American Standards Association_ (now [American National Standards Institute][79] (ANSI)) to form a committee sponsored by BEMA, the Business Equipment Manufacturers Association, to develop an _American Standard Fortran_. The resulting two standards, approved in March 1966, defined two languages, _FORTRAN_ (based on FORTRAN IV, which had served as a de facto standard), and _Basic FORTRAN_ (based on FORTRAN II, but stripped of its machine-dependent features). The FORTRAN defined by the first standard, officially denoted X3.9-1966, became known as _FORTRAN 66_ (although many continued to term it FORTRAN IV, the language on which the standard was largely based). FORTRAN 66 effectively became the first industry-standard version of FORTRAN. FORTRAN 66 included:

## FORTRAN 77

After the release of the FORTRAN 66 standard, compiler vendors introduced several extensions to _Standard Fortran_, prompting ANSI committee X3J3 in 1969 to begin work on revising the 1966 standard, under sponsorship of [CBEMA][82], the Computer Business Equipment Manufacturers Association (formerly BEMA). Final drafts of this revised standard circulated in 1977, leading to formal approval of the new FORTRAN standard in April 1978\. The new standard, called _FORTRAN 77_ and officially denoted X3.9-1978, added a number of significant features to address many of the shortcomings of FORTRAN 66:

In this revision of the standard, a number of features were removed or altered in a manner that might invalidate formerly standard-conforming programs. _(Removal was the only allowable alternative to X3J3 at that time, since the concept of "[deprecation][83]" was not yet available for ANSI standards.)_ While most of the 24 items in the conflict list (see Appendix A2 of X3.9-1978) addressed loopholes or pathological cases permitted by the prior standard but rarely used, a small number of specific capabilities were deliberately removed, such as:

## Variants: Minnesota FORTRAN

[Control Data Corporation][84] computers had another version of FORTRAN 77, called Minnesota FORTRAN (MNF), designed especially for student use, with variations in output constructs, special uses of COMMONs and DATA statements, optimizations code levels for compiling, and detailed error listings, extensive warning messages, and debugs.[\[16\]][85]

## Transition to ANSI Standard Fortran

The development of a revised standard to succeed FORTRAN 77 would be repeatedly delayed as the standardization process struggled to keep up with rapid changes in computing and programming practice. In the meantime, as the "Standard FORTRAN" for nearly fifteen years, FORTRAN 77 would become the historically most important dialect.

An important practical extension to FORTRAN 77 was the release of MIL-STD-1753 in 1978\.[\[17\]][86] This specification, developed by the [U.S. Department of Defense][87], standardized a number of features implemented by most FORTRAN 77 compilers but not included in the ANSI FORTRAN 77 standard. These features would eventually be incorporated into the Fortran 90 standard.

The [IEEE][88] 1003.9 [POSIX][89] Standard, released in 1991, provided a simple means for FORTRAN 77 programmers to issue POSIX system calls.[\[18\]][90] Over 100 calls were defined in the document -- allowing access to POSIX-compatible process control, signal handling, file system control, device control, procedure pointing, and stream I/O in a portable manner.

## Fortran 90

The much delayed successor to FORTRAN 77, informally known as _Fortran 90_ (and prior to that, _Fortran 8X_), was finally released as ISO/IEC standard 1539:1991 in 1991 and an ANSI Standard in 1992\. In addition to changing the official spelling from FORTRAN to Fortran, this major revision added many new features to reflect the significant changes in programming practice that had evolved since the 1978 standard:

## Obsolescence and deletions

Unlike the prior revision, Fortran 90 removed no features. _(Appendix B.1 says, "The list of deleted features in this standard is empty.")_ Any standard-conforming FORTRAN 77 program is also standard-conforming under Fortran 90, and either standard should be usable to define its behavior.

A small set of features were identified as "obsolescent" and expected to be removed in a future standard.

## "Hello world" example

## Fortran 95

_Fortran 95,_ published officially as ISO/IEC 1539-1:1997, was a minor revision, mostly to resolve some outstanding issues from the Fortran 90 standard. Nevertheless, Fortran 95 also added a number of extensions, notably from the [High Performance Fortran][21] specification:

A number of intrinsic functions were extended (for example a `dim` argument was added to the `maxloc` intrinsic).

Several features noted in Fortran 90 to be "obsolescent" were removed from Fortran 95:

An important supplement to Fortran 95 was the [ISO technical report][91] _TR-15581: Enhanced Data Type Facilities_, informally known as the _Allocatable TR._ This specification defined enhanced use of `ALLOCATABLE` arrays, prior to the availability of fully Fortran 2003-compliant Fortran compilers. Such uses include `ALLOCATABLE` arrays as derived type components, in procedure dummy argument lists, and as function return values. (`ALLOCATABLE` arrays are preferable to `POINTER`-based arrays because `ALLOCATABLE` arrays are guaranteed by Fortran 95 to be deallocated automatically when they go out of scope, eliminating the possibility of [memory leakage][92]. In addition, elements of allocatable arrays are contiguous, and [aliasing][93] is not an issue for optimization of array references, allowing compilers to generate faster code than in the case of pointers.[\[20\]][94])

Another important supplement to Fortran 95 was the [ISO][91] technical report _TR-15580: Floating-point exception handling_, informally known as the _IEEE TR._ This specification defined support for [IEEE floating-point arithmetic][95] and [floating point][96] [exception handling][97].

## Conditional compilation and varying length strings

In addition to the mandatory "Base language" (defined in ISO/IEC 1539-1 : 1997), the Fortran 95 language also includes two optional modules:

which, together, compose the multi-part International Standard (ISO/IEC 1539).

According to the standards developers, "the optional parts describe self-contained features which have been requested by a substantial body of users and/or implementors, but which are not deemed to be of sufficient generality for them to be required in all standard-conforming Fortran compilers." Nevertheless, if a standard-conforming Fortran does provide such options, then they "must be provided in accordance with the description of those facilities in the appropriate Part of the Standard."

## Fortran 2003

_Fortran 2003,_ officially published as ISO/IEC 1539-1:2004, is a major revision introducing many new features.[\[21\]][98] A comprehensive summary of the new features of Fortran 2003 is available at the Fortran Working Group (ISO/IEC JTC1/SC22/WG5) official Web site.[\[22\]][99]

From that article, the major enhancements for this revision include:

An important supplement to Fortran 2003 was the [ISO technical report][91] _TR-19767: Enhanced module facilities in Fortran._ This report provided _submodules,_ which make Fortran modules more similar to [Modula-2][100] modules. They are similar to [Ada][101] private child subunits. This allows the specification and implementation of a module to be expressed in separate program units, which improves packaging of large libraries, allows preservation of trade secrets while publishing definitive interfaces, and prevents compilation cascades.

## Fortran 2008

The most recent standard, ISO/IEC 1539-1:2010, informally known as Fortran 2008, was approved in September 2010\.[\[23\]][102][\[24\]][103] As with Fortran 95, this is a minor upgrade, incorporating clarifications and corrections to Fortran 2003, as well as introducing a select few new capabilities. The new capabilities include:

The Final Draft international Standard (FDIS) is available as document N1830\.[\[25\]][104]

An important supplement to Fortran 2008 is the [ISO][91] Technical Specification (TS) 29113 on _Further Interoperability of Fortran with C_,[\[26\]][105][\[27\]][106] which has been submitted to ISO in May 2012 for approval. The specification adds support for accessing the array descriptor from C and allows ignoring the type and rank of arguments.

## Fortran 2015

The next revision of the language (Fortran 2015) is intended to be a minor revision and is planned for release in mid-2018\.[\[28\]][107] It is currently planned to include further interoperability between Fortran and C, additional parallel features, and "the removal of simple deficiencies in and discrepancies between existing facilities."[\[29\]][108][\[30\]][109]

## Fortran and supercomputers

Although a 1968 journal article by the authors of [BASIC][110] already described Fortran as "old-fashioned",[\[31\]][111] since Fortran has been in use for many decades, there is a vast body of Fortran software in daily use throughout the scientific and engineering communities.[\[32\]][112] [Jay Pasachoff][113] wrote in 1984 that "physics and astronomy students simply have to learn Fortran. So much exists in Fortran that it seems unlikely that scientists will change to Pascal, Modula-2, or whatever."[\[33\]][114] In 1993, Cecil E. Leith called Fortran the "mother tongue of scientific computing" adding that its replacement by any other possible language "may remain a forlorn hope."[\[34\]][115] It is the primary language for some of the most intensive [supercomputing][116] tasks, such as [astronomy][117], [weather][7] and [climate modeling][118], numerical linear algebra ([LAPACK][119]), numerical libraries ([IMSL][120] and [NAG][121]), [structural engineering][122], [hydrological modeling][123], [optimization][124], satellite simulation and data analysis, [computational fluid dynamics][9], [computational chemistry][12], [computational economics][125] and [computational physics][10]. Many of the floating-point benchmarks to gauge the performance of new computer processors -- such as [CFP2006][126], the floating-point component of the [SPEC][127] [CPU2006][128] benchmarks -- are written in Fortran.

On the other hand, more modern code generally uses large program libraries such as [PETSc][129] or [Trilinos][130] for linear algebra capabilities, [METIS][131] for graph partitioning, [deal.II][132] or [FEniCS][133] for mesh and finite element support, and other generic libraries. Since the late 1990s, almost all of the most widely used support libraries have been written in [C][52] and, more often, [C++][134]. Consequently, a growing fraction of scientific code is also written in these languages. For this reason, facilities for interoperation with C were added to Fortran 2003, and enhanced by ISO/IEC technical specification 29113, which will be incorporated into Fortran 2015\. This shift is also evident in the selection of applications between the [SPEC CPU 2000][135] and [SPEC CPU 2006][136] floating point benchmarks.

## Language features

The precise characteristics and syntax of Fortran 95 are discussed in [Fortran 95 language features][137].

## Portability

[Portability][138] was a problem in the early days because there was no agreed standard -- not even IBM's reference manual -- and computer companies vied to differentiate their offerings from others by providing incompatible features. Standards have improved portability. The 1966 standard provided a reference [syntax][139] and semantics, but vendors continued to provide incompatible extensions. Although careful programmers were coming to realize that use of incompatible extensions caused expensive portability problems, and were therefore using programs such as _The PFORT Verifier,_ it was not until after the 1977 standard, when the National Bureau of Standards (now [NIST][140]) published _FIPS PUB 69_, that processors purchased by the U.S. Government were required to diagnose extensions of the standard. Rather than offer two processors, essentially every compiler eventually had at least an option to diagnose extensions.

Incompatible extensions were not the only portability problem. For numerical calculations, it is important to take account of the characteristics of the arithmetic. This was addressed by Fox et al. in the context of the 1966 standard by the _PORT_ library. The ideas therein became widely used, and were eventually incorporated into the 1990 standard by way of intrinsic inquiry functions. The widespread (now almost universal) adoption of the [IEEE 754][95] standard for binary floating-point arithmetic has essentially removed this problem.

Access to the computing environment (e.g., the program's command line, environment variables, textual explanation of error conditions) remained a problem until it was addressed by the 2003 standard.

Large collections of library software that could be described as being loosely related to engineering and scientific calculations, such as graphics libraries, have been written in C, and therefore access to them presented a portability problem. This has been addressed by incorporation of C interoperability into the 2003 standard.

It is now possible (and relatively easy) to write an entirely portable program in Fortran, even without recourse to a preprocessor.

## Variants

## Fortran 5

Fortran 5 was marketed by [Data General][141] Corp in the late 1970s and early 1980s, for the [Nova][142], [Eclipse][143], and [MV][144] line of computers. It had an optimizing compiler that was quite good for minicomputers of its time. The language most closely resembles Fortran 66\. The name is a [pun][145] on the earlier Fortran IV.

## Fortran V

Fortran V was distributed by [Control Data Corporation][84] in 1968 for the [CDC 6600][146] series. The language was based upon Fortran IV.[\[35\]][147]

Univac also offered a compiler for the 1100 series known as Fortran V. A spinoff of Univac Fortran V was Athena Fortran.

## Fortran 6

**Fortran 6** or Visual Fortran 2001 was licensed to [Compaq][148] by [Microsoft][149]. They have licensed Compaq Visual Fortran and have provided the Visual Studio 5 environment interface for [Compaq v6][150] up to v6.1\.[\[36\]][151]

## Specific variants

Vendors of high-performance scientific computers (_e.g.,_ [Burroughs][152], [Control Data Corporation][84] (CDC), [Cray][153], [Honeywell][154], [IBM][5], [Texas Instruments][155], and [UNIVAC][156]) added extensions to Fortran to take advantage of special hardware features such as [instruction cache][157], CPU [pipelines][158], and vector arrays. For example, one of IBM's FORTRAN compilers (_H Extended IUP_) had a level of optimization which reordered the [machine code][159] [instructions][160] to keep multiple internal arithmetic units busy simultaneously. Another example is _CFD_, a special variant of Fortran designed specifically for the [ILLIAC IV][161] supercomputer, running at [NASA][162]'s [Ames Research Center][163]. IBM Research Labs also developed an extended FORTRAN-based language called _VECTRAN_ for processing vectors and matrices.

[Object-Oriented Fortran][164] was an object-oriented extension of Fortran, in which data items can be grouped into objects, which can be instantiated and executed in parallel. It was available for Sun, Iris, [iPSC][165], and nCUBE, but is no longer supported.

Such machine-specific extensions have either disappeared over time or have had elements incorporated into the main standards. The major remaining extension is [OpenMP][166], which is a cross-platform extension for shared memory programming. One new extension, [Coarray Fortran][167], is intended to support parallel programming.

## FOR TRANSIT for the IBM 650

_FOR TRANSIT_ was the name of a reduced version of the IBM 704 FORTRAN language, which was implemented for the IBM 650, using a translator program developed at Carnegie in the late 1950s.[\[37\]][168] The following comment appears in the IBM Reference Manual (_FOR TRANSIT Automatic Coding System_ C28-4038, Copyright 1957, 1959 by IBM):

The FORTRAN system was designed for a more complex machine than the 650, and consequently some of the 32 statements found in the FORTRAN Programmer's Reference Manual are not acceptable to the FOR TRANSIT system. In addition, certain restrictions to the FORTRAN language have been added. However, none of these restrictions make a source program written for FOR TRANSIT incompatible with the FORTRAN system for the 704\.

The permissible statements were:

Up to ten subroutines could be used in one program.

FOR TRANSIT statements were limited to columns 7 through 56, only. Punched cards were used for input and output on the IBM 650\. Three passes were required to translate source code to the "IT" language, then to compile the IT statements into SOAP assembly language, and finally to produce the object program, which could then be loaded into the machine to run the program (using punched cards for data input, and outputting results onto punched cards).

Two versions existed for the 650s with a 2000 word memory drum: FOR TRANSIT I (S) and FOR TRANSIT II, the latter for machines equipped with indexing registers and automatic floating point decimal ([bi-quinary][169]) arithmetic. Appendix A of the manual included wiring diagrams for the [IBM 533][170] card reader/punch [control panel][171].

## Fortran-based languages

Prior to FORTRAN 77, a number of [preprocessors][172] were commonly used to provide a friendlier language, with the advantage that the preprocessed code could be compiled on any machine with a standard FORTRAN compiler. These preprocessors would typically support [structured programming][17], variable names longer than six characters, additional data types, [conditional compilation][173], and even [macro][174] capabilities. Popular preprocessors included [FLECS][175], [iftran][176], [MORTRAN][177], [SFtran][178], [S-Fortran][179], [Ratfor][180], and [Ratfiv][181]. Ratfor and Ratfiv, for example, implemented a [C][52]-like language, outputting preprocessed code in standard FORTRAN 66\. Despite advances in the Fortran language, preprocessors continue to be used for conditional compilation and macro substitution.

One of the earliest versions of FORTRAN, introduced in the 60's, was popularly used in colleges and universities. Developed, supported, and distributed by the [University of Waterloo][182], [WATFOR][81] was based largely on FORTRAN IV. A WATFOR student could submit their batch FORTRAN job and, if there were no syntax errors, the program would move straight to execution. This simplification allowed students to concentrate on their program's syntax and semantics, or execution logic flow, rather than dealing with submission [Job Control Language][183] (JCL), the compile/link-edit/execution successive process(es), or other complexities of the mainframe/minicomputer environment. A down side to this simplified environment was that WATFOR was not a good choice for programmers needing the expanded abilities of their host processor(s), e.g., WATFOR typically had very limited access to I/O devices. WATFOR was succeeded by [WATFIV][81] and its later versions.

(line programing)

[LRLTRAN][184] was developed at the [Lawrence Radiation Laboratory][185] to provide support for vector arithmetic and dynamic storage, among other extensions to support systems programming. The distribution included the [LTSS operating system][186].

The Fortran-95 Standard includes an optional _Part 3_ which defines an optional [conditional compilation][173] capability. This capability is often referred to as "CoCo".

Many Fortran compilers have integrated subsets of the [C preprocessor][187] into their systems.

[SIMSCRIPT][188] is an application specific Fortran preprocessor for modeling and simulating large discrete systems.

The [F programming language][189] was designed to be a clean subset of Fortran 95 that attempted to remove the redundant, unstructured, and deprecated features of Fortran, such as the `EQUIVALENCE` statement. F retains the array features added in Fortran 90, and removes control statements that were made obsolete by structured programming constructs added to both Fortran 77 and Fortran 90\. F is described by its creators as "a compiled, structured, array programming language especially well suited to education and scientific computing."[\[38\]][190]

Lahey and Fujitsu teamed up to create Fortran for the Microsoft [.NET Framework][191].[\[39\]][192] Silverfrost FTN95 is also capable of creating .NET code.[\[40\]][193]

## Code examples

The following program illustrates dynamic memory allocation and array-based operations, two features introduced with Fortran 90\. Particularly noteworthy is the absence of `DO` loops and `IF`/`THEN` statements in manipulating the array; mathematical operations are applied to the array as a whole. Also apparent is the use of descriptive variable names and general code formatting that conform with contemporary programming style. This example computes an average over data entered interactively.

## Humor

During the same Fortran standards committee meeting at which the name "FORTRAN 77" was chosen, a satirical technical proposal was incorporated into the official distribution bearing the title "Letter O [Considered Harmful][194]". This proposal purported to address the confusion that sometimes arises between the letter "O" and the numeral zero, by eliminating the letter from allowable variable names. However, the method proposed was to eliminate the letter from the character set entirely (thereby retaining 48 as the number of lexical characters, which the colon had increased to 49). This was considered beneficial in that it would promote structured programming, by making it impossible to use the notorious `**GO TO**` statement as before. (Troublesome `**FORMAT**` statements would also be eliminated.) It was noted that this "might invalidate some existing programs" but that most of these "probably were non-conforming, anyway".[\[41\]][195][\[42\]][196]

During the standards committee battle over whether the "minimum trip count" for the FORTRAN 77 `**DO**` statement should be zero (allowing no execution of the block) or one (the "plunge-ahead" `**DO**`), another facetious alternative was proposed (by Loren Meissner) to have the minimum be two -- since there is no need for a loop if it is only executed once.\[_[citation needed][54]_\]

When assumed-length arrays were being added, there was a dispute as to the appropriate character to separate upper and lower bounds. In a comment examining these arguments, Dr. Walt Brainerd penned an article entitled "Astronomy vs. Gastroenterology" because some proponents had suggested using the star or asterisk ("\*"), while others favored the colon (":").\[_[citation needed][54]_\]

In Fortran 77, variable names beginning with the letters I--N had a default type of integer, while variables starting with any other letters defaulted to real, although programmers could override the defaults with an explicit declaration.[\[43\]][197] This led to the joke: "In Fortran, GOD is REAL (unless declared INTEGER)."

## See also

## References

## Further reading

## External links

[0]: #cite_note-2
[1]: /wiki/Imperative_programming "Imperative programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Numerical_analysis "Numerical analysis"
[4]: /wiki/Computational_science "Computational science"
[5]: /wiki/IBM "IBM"
[6]: #cite_note-Where-3
[7]: /wiki/Numerical_weather_prediction "Numerical weather prediction"
[8]: /wiki/Finite_element_method "Finite element method"
[9]: /wiki/Computational_fluid_dynamics "Computational fluid dynamics"
[10]: /wiki/Computational_physics "Computational physics"
[11]: /wiki/Crystallography "Crystallography"
[12]: /wiki/Computational_chemistry "Computational chemistry"
[13]: /wiki/High-performance_computing "High-performance computing"
[14]: #cite_note-hpc-4
[15]: /wiki/TOP500 "TOP500"
[16]: #cite_note-5
[17]: /wiki/Structured_programming "Structured programming"
[18]: /wiki/Array_programming "Array programming"
[19]: /wiki/Modular_programming "Modular programming"
[20]: /wiki/Generic_programming "Generic programming"
[21]: /wiki/High_Performance_Fortran "High Performance Fortran"
[22]: /wiki/Object-oriented_programming "Object-oriented programming"
[23]: /wiki/Concurrent_programming "Concurrent programming"
[24]: /wiki/International_standard "International standard"
[25]: /wiki/John_Backus "John Backus"
[26]: /wiki/Assembly_language "Assembly language"
[27]: /wiki/IBM_704 "IBM 704"
[28]: /wiki/Roy_Nutt "Roy Nutt"
[29]: /wiki/Lois_Haibt "Lois Haibt"
[30]: /wiki/David_Sayre "David Sayre"
[31]: #cite_note-6
[32]: /wiki/J._Halcombe_Laning "J. Halcombe Laning"
[33]: /wiki/Laning_and_Zierler_system "Laning and Zierler system"
[34]: #cite_note-7
[35]: /wiki/Compiler "Compiler"
[36]: /wiki/Optimizing_compiler "Optimizing compiler"
[37]: /wiki/High-level_programming_language "High-level programming language"
[38]: #cite_note-8
[39]: /wiki/Statement_(programming) "Statement (programming)"
[40]: /wiki/IBM_701 "IBM 701"
[41]: #cite_note-9
[42]: /wiki/Complex_data_type "Complex data type"
[43]: /wiki/IBM_709 "IBM 709"
[44]: /wiki/IBM_650 "IBM 650"
[45]: /wiki/IBM_1620 "IBM 1620"
[46]: /wiki/IBM_7090 "IBM 7090"
[47]: /wiki/History_of_compiler_writing "History of compiler writing"
[48]: /wiki/IBM_700/7000_series#Scientific_Architecture_.28704.2F709.2F7090.2F7094.29 "IBM 700/7000 series"
[49]: /wiki/Monte_Carlo_method "Monte Carlo method"
[50]: /wiki/Basic_block "Basic block"
[51]: #cite_note-Backus57-10
[52]: /wiki/C_(programming_language) "C (programming language)"
[53]: /wiki/Register_keyword "Register keyword"
[54]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[55]: /wiki/Keypunch "Keypunch"
[56]: /wiki/Punched_card "Punched card"
[57]: /wiki/IBM_519 "IBM 519"
[58]: #cite_note-12
[59]: /wiki/Whitespace_characters "Whitespace characters"
[60]: /wiki/Hollerith_string "Hollerith string"
[61]: /wiki/Procedural_programming "Procedural programming"
[62]: /wiki/Call_by_reference#Call_by_reference "Call by reference"
[63]: /wiki/Global_variable "Global variable"
[64]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[65]: #cite_note-13
[66]: /wiki/Heron%27s_formula "Heron's formula"
[67]: /wiki/Magnetic_core_memory "Magnetic core memory"
[68]: /wiki/Overlay_(programming) "Overlay (programming)"
[69]: #cite_note-14
[70]: http://www.bitsavers.org/pdf/ibm/140x/C24-1455-2_Fortran_Specifications_and_Operating_Procedures_Apr65.pdf
[71]: /wiki/Machine_language "Machine language"
[72]: /wiki/UCSD_Pascal "UCSD Pascal"
[73]: /wiki/P-code_machine#UCSD_p-Machine "P-code machine"
[74]: http://www.bitsavers.org/pdf/ibm/140x/C24-3322-2_Fortran_IV_Language_Specifications_IBM_1401_1440_1460_Apr66.pdf
[75]: /wiki/Boolean_data_type "Boolean data type"
[76]: /wiki/Boolean_expression "Boolean expression"
[77]: /wiki/IBM_7030_Stretch "IBM 7030 Stretch"
[78]: /wiki/IBM_1401 "IBM 1401"
[79]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[80]: #cite_note-McCracken-15
[81]: /wiki/WATFIV "WATFIV"
[82]: /wiki/CBEMA "CBEMA"
[83]: /wiki/Deprecation "Deprecation"
[84]: /wiki/Control_Data_Corporation "Control Data Corporation"
[85]: #cite_note-16
[86]: #cite_note-17
[87]: /wiki/United_States_Department_of_Defense "United States Department of Defense"
[88]: /wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers"
[89]: /wiki/POSIX "POSIX"
[90]: #cite_note-18
[91]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[92]: /wiki/Memory_leak "Memory leak"
[93]: /wiki/Aliasing_(computing) "Aliasing (computing)"
[94]: #cite_note-20
[95]: /wiki/IEEE_754-2008 "IEEE 754-2008"
[96]: /wiki/Floating_point "Floating point"
[97]: /wiki/Exception_handling "Exception handling"
[98]: #cite_note-21
[99]: #cite_note-22
[100]: /wiki/Modula-2 "Modula-2"
[101]: /wiki/Ada_(programming_language) "Ada (programming language)"
[102]: #cite_note-23
[103]: #cite_note-24
[104]: #cite_note-25
[105]: #cite_note-26
[106]: #cite_note-27
[107]: #cite_note-Fortran2015Closes-28
[108]: #cite_note-Fortran2015-29
[109]: #cite_note-30
[110]: /wiki/BASIC "BASIC"
[111]: #cite_note-dtss196810-31
[112]: #cite_note-32
[113]: /wiki/Jay_Pasachoff "Jay Pasachoff"
[114]: #cite_note-pasachoff198404-33
[115]: #cite_note-Galperin-34
[116]: /wiki/Supercomputer "Supercomputer"
[117]: /wiki/Astronomy "Astronomy"
[118]: /wiki/Climate_model "Climate model"
[119]: /wiki/LAPACK "LAPACK"
[120]: /wiki/IMSL_Numerical_Libraries "IMSL Numerical Libraries"
[121]: /wiki/NAG_Numerical_Library "NAG Numerical Library"
[122]: /wiki/Structural_engineering "Structural engineering"
[123]: /wiki/Hydrological_modeling "Hydrological modeling"
[124]: /wiki/Optimization "Optimization"
[125]: /wiki/Computational_economics "Computational economics"
[126]: http://www.spec.org/cpu2006/CFP2006/
[127]: /wiki/Standard_Performance_Evaluation_Corporation "Standard Performance Evaluation Corporation"
[128]: http://www.spec.org/cpu2006/
[129]: /wiki/PETSc "PETSc"
[130]: /wiki/Trilinos "Trilinos"
[131]: /wiki/METIS "METIS"
[132]: /wiki/Deal.II "Deal.II"
[133]: /wiki/FEniCS_Project "FEniCS Project"
[134]: /wiki/C%2B%2B "C++"
[135]: /wiki/SPECfp#Benchmarks_2 "SPECfp"
[136]: /wiki/SPECfp#Benchmarks "SPECfp"
[137]: /wiki/Fortran_95_language_features "Fortran 95 language features"
[138]: /wiki/Portability_(computer_science) "Portability (computer science)"
[139]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[140]: /wiki/National_Institute_of_Standards_and_Technology "National Institute of Standards and Technology"
[141]: /wiki/Data_General "Data General"
[142]: /wiki/Data_General_Nova "Data General Nova"
[143]: /wiki/Data_General_Eclipse "Data General Eclipse"
[144]: /wiki/Data_General_Eclipse_MV/8000 "Data General Eclipse MV/8000"
[145]: /wiki/Pun "Pun"
[146]: /wiki/CDC_6600 "CDC 6600"
[147]: #cite_note-FIV-35
[148]: /wiki/Compaq "Compaq"
[149]: /wiki/Microsoft "Microsoft"
[150]: /wiki/Visual_Studio_97 "Visual Studio 97"
[151]: #cite_note-36
[152]: /wiki/Burroughs_Corporation "Burroughs Corporation"
[153]: /wiki/Cray "Cray"
[154]: /wiki/Honeywell "Honeywell"
[155]: /wiki/Texas_Instruments "Texas Instruments"
[156]: /wiki/UNIVAC "UNIVAC"
[157]: /wiki/CPU_cache "CPU cache"
[158]: /wiki/Pipeline_(computing) "Pipeline (computing)"
[159]: /wiki/Machine_code "Machine code"
[160]: /wiki/Instruction_(computer_science) "Instruction (computer science)"
[161]: /wiki/ILLIAC_IV "ILLIAC IV"
[162]: /wiki/NASA "NASA"
[163]: /wiki/NASA_Ames_Research_Center "NASA Ames Research Center"
[164]: /wiki/Object-Oriented_Fortran "Object-Oriented Fortran"
[165]: /wiki/Intel_iPSC "Intel iPSC"
[166]: /wiki/OpenMP "OpenMP"
[167]: /wiki/Coarray_Fortran "Coarray Fortran"
[168]: #cite_note-37
[169]: /wiki/Bi-quinary_coded_decimal "Bi-quinary coded decimal"
[170]: /wiki/IBM_533 "IBM 533"
[171]: /wiki/Plugboard "Plugboard"
[172]: /wiki/Preprocessor "Preprocessor"
[173]: /wiki/Conditional_compilation "Conditional compilation"
[174]: /wiki/Macro_(computer_science) "Macro (computer science)"
[175]: /w/index.php?title=FLECS&action=edit&redlink=1 "FLECS (page does not exist)"
[176]: /wiki/Iftran "Iftran"
[177]: /wiki/Mortran "Mortran"
[178]: /w/index.php?title=SFtran&action=edit&redlink=1 "SFtran (page does not exist)"
[179]: /w/index.php?title=S-Fortran&action=edit&redlink=1 "S-Fortran (page does not exist)"
[180]: /wiki/Ratfor "Ratfor"
[181]: /wiki/Ratfiv "Ratfiv"
[182]: /wiki/University_of_Waterloo "University of Waterloo"
[183]: /wiki/Job_Control_Language "Job Control Language"
[184]: /w/index.php?title=LRLTRAN&action=edit&redlink=1 "LRLTRAN (page does not exist)"
[185]: /wiki/Lawrence_Radiation_Laboratory "Lawrence Radiation Laboratory"
[186]: /w/index.php?title=LTSS_operating_system&action=edit&redlink=1 "LTSS operating system (page does not exist)"
[187]: /wiki/C_preprocessor "C preprocessor"
[188]: /wiki/SIMSCRIPT "SIMSCRIPT"
[189]: /wiki/F_(programming_language) "F (programming language)"
[190]: #cite_note-38
[191]: /wiki/.NET_Framework ".NET Framework"
[192]: #cite_note-39
[193]: #cite_note-40
[194]: /wiki/Considered_harmful "Considered harmful"
[195]: #cite_note-41
[196]: #cite_note-42
[197]: #cite_note-43