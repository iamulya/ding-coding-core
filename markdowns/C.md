**C** ([/ˈsiː/][0], as in [the letter _c_][1]) is a [general-purpose][2], [imperative][3] computer [programming language][4], supporting [structured programming][5], [lexical variable scope][6] and [recursion][7], while a [static type system][8] prevents many unintended operations. By design, C provides constructs that map efficiently to typical [machine instructions][9], and therefore it has found lasting use in applications that had formerly been coded in [assembly language][10], including [operating systems][11], as well as various [application software][12] for computers ranging from [supercomputers][13] to [embedded systems][14].

C was originally developed by [Dennis Ritchie][15] between 1969 and 1973 at [Bell Labs][16],[\[5\]][17] and used to re-implement the [Unix][18] operating system.[\[6\]][19] It has since become one of the [most widely used programming languages][20] of all time,[\[7\]][21][\[8\]][22] with C [compilers][23] from various vendors available for the majority of existing [computer architectures][24] and operating systems. C has been standardized by the [American National Standards Institute][25] (ANSI) since 1989 (see [ANSI C][26]) and subsequently by the [International Organization for Standardization][27] (ISO).

## Design

C is an [imperative][3] [procedural][28] language. It was designed to be compiled using a relatively straightforward [compiler][23], to provide low-level access to memory, to provide language constructs that map efficiently to machine instructions, and to require minimal [run-time support][29]. Therefore, C was useful for many applications that had formerly been coded in assembly language, for example in [system programming][30].

Despite its low-level capabilities, the language was designed to encourage [cross-platform][31] programming. A standards-compliant and [portably][32] written C program can be compiled for a very wide variety of computer platforms and operating systems with few changes to its source code. The language has become available on a very wide range of platforms, from embedded [microcontrollers][33] to [supercomputers][13].

## Overview

Like most imperative languages in the [ALGOL][34] tradition, C has facilities for [structured programming][5] and allows [lexical variable scope][6] and recursion, while a static [type system][35] prevents many unintended operations. In C, all [executable code][36] is contained within [subroutines][37], which are called "functions" (although not in the strict sense of [functional programming][38]). [Function parameters][39] are always passed by value. Pass-by-reference is simulated in C by explicitly passing [pointer][40] values. C program source text is [free-format][41], using the [semicolon][42] as a [statement][43] terminator and [curly braces][44] for grouping [blocks of statements][45].

The C language also exhibits the following characteristics:

While C does not include some features found in some other languages, such as [object orientation][46] or [garbage collection][47], such features can be implemented or emulated in C, often by way of external libraries (e.g., the [Boehm garbage collector][48] or the [GLib Object System][49]).

## Relations to other languages

Many later languages have borrowed directly or indirectly from C, including [C++][50], [D][51], [Go][52], [Rust][53], [Java][54], [JavaScript][55], [Limbo][56], [LPC][57], [C\#][58], [Objective-C][59], [Perl][60], [PHP][61], [Python][62], [Swift][63], [Verilog][64] (hardware description language),[\[4\]][65] and Unix's [C shell][66]. These languages have drawn many of their [control structures][67] and other basic features from C. Most of them (with Python being the most dramatic exception) are also very [syntactically][68] similar to C in general, and they tend to combine the recognizable expression and statement [syntax of C][69] with underlying type systems, data models, and semantics that can be radically different.

## History

## Early developments

The origin of C is closely tied to the development of the [Unix][18] operating system, originally implemented in [assembly language][10] on a [PDP-7][70] by Ritchie and Thompson, incorporating several ideas from colleagues. Eventually, they decided to port the operating system to a [PDP-11][71]. The original PDP-11 version of Unix was developed in assembly language. The developers were considering rewriting the system using the [B language][72], Thompson's simplified version of [BCPL][73].[\[9\]][74] However B's inability to take advantage of some of the PDP-11's features, notably [byte][75] addressability, led to C. The name of C was chosen simply as the next after B.[\[10\]][76]

The development of C started in 1972 on the PDP-11 Unix system[\[11\]][77] and first appeared in [Version 2 Unix][78].[\[12\]][79] The language was not initially designed with portability in mind, but soon ran on different platforms as well: a compiler for the [Honeywell 6000][80] was written within the first year of C's history, while an [IBM System/370][81] port followed soon.[\[1\]][82][\[11\]][77]

Also in 1972, a large part of Unix was rewritten in C.[\[13\]][83] By 1973, with the addition of `struct` types, the C language had become powerful enough that most of the [Unix][18]'s [kernel][84] was now in C.

Unix was one of the first operating system kernels implemented in a language other than [assembly][10]. Earlier instances include the [Multics][85] system which was written in [PL/I][86]), and [Master Control Program][87] (MCP) for the [Burroughs B5000][88] written in [ALGOL][34] in 1961\. In around 1977, Ritchie and [Stephen C. Johnson][89] made further changes to the language to facilitate portability of the Unix operating system. Johnson's [Portable C Compiler][90] served as the basis for several implementations of C on new platforms.[\[11\]][77]

## K&R C

In 1978, [Brian Kernighan][91] and [Dennis Ritchie][15] published the first edition of _[The C Programming Language][92]_.[\[1\]][82] This book, known to C programmers as "K&R", served for many years as an informal [specification][93] of the language. The version of C that it describes is commonly referred to as _K&R C_. The second edition of the book[\[14\]][94] covers the later [ANSI C][26] standard, described below.

K&R introduced several language features:

Even after the publication of the 1989 ANSI standard, for many years K&R C was still considered the "[lowest common denominator][95]" to which C programmers restricted themselves when maximum portability was desired, since many older compilers were still in use, and because carefully written K&R C code can be legal Standard C as well.

In early versions of C, only functions that return types other than `int` must be declared if used before the function definition; functions used without prior declaration were presumed to return type `int`.

For example:

The `int` type specifiers which are commented out could be omitted in K&R C, but are required in later standards.

Since K&R function declarations did not include any information about function arguments, function parameter [type checks][96] were not performed, although some compilers would issue a warning message if a local function was called with the wrong number of arguments, or if multiple calls to an external function used different numbers or types of arguments. Separate tools such as Unix's [lint][97] utility were developed that (among other things) could check for consistency of function use across multiple source files.

In the years following the publication of K&R C, several features were added to the language, supported by compilers from AT&T (in particular [PCC][90][\[15\]][98]) and some other vendors. These included:

The large number of extensions and lack of agreement on a [standard library][99], together with the language popularity and the fact that not even the Unix compilers precisely implemented the K&R specification, led to the necessity of standardization.

## ANSI C and ISO C

During the late 1970s and 1980s, versions of C were implemented for a wide variety of [mainframe computers][100], [minicomputers][101], and [microcomputers][102], including the [IBM PC][103], as its popularity began to increase significantly.

In 1983, the [American National Standards Institute][25] (ANSI) formed a committee, X3J11, to establish a standard specification of C. X3J11 based the C standard on the Unix implementation; however, the non-portable portion of the Unix C library was handed off to the [IEEE][104] [working group][105] 1003 to become the basis for the 1988 [POSIX][106] standard. In 1989, the C standard was ratified as ANSI X3.159-1989 "Programming Language C". This version of the language is often referred to as [ANSI C][26], Standard C, or sometimes C89\.

In 1990, the ANSI C standard (with formatting changes) was adopted by the [International Organization for Standardization][27] (ISO) as ISO/IEC 9899:1990, which is sometimes called C90\. Therefore, the terms "C89" and "C90" refer to the same programming language.

ANSI, like other national standards bodies, no longer develops the C standard independently, but defers to the international C standard, maintained by the working group [ISO/IEC JTC1/SC22][107]/WG14\. National adoption of an update to the international standard typically occurs within a year of ISO publication.

One of the aims of the C standardization process was to produce a [superset][108] of K&R C, incorporating many of the subsequently introduced unofficial features. The standards committee also included several additional features such as [function prototypes][109] (borrowed from C++), `void` pointers, support for international [character sets][110] and [locales][111], and preprocessor enhancements. Although the [syntax][69] for parameter declarations was augmented to include the style used in C++, the K&R interface continued to be permitted, for compatibility with existing source code.

C89 is supported by current C compilers, and most C code being written today is based on it. Any program written only in Standard C and without any hardware-dependent assumptions will run correctly on any [platform][112] with a conforming C implementation, within its resource limits. Without such precautions, programs may compile only on a certain platform or with a particular compiler, due, for example, to the use of non-standard libraries, such as [GUI][113] libraries, or to a reliance on compiler- or platform-specific attributes such as the exact size of data types and byte [endianness][114].

In cases where code must be compilable by either standard-conforming or K&R C-based compilers, the `__STDC__` macro can be used to split the code into Standard and K&R sections to prevent the use on a K&R C-based compiler of features available only in Standard C.

After the ANSI/ISO standardization process, the C language specification remained relatively static for several years. In 1995, Normative Amendment 1 to the 1990 C standard (ISO/IEC 9899/AMD1:1995, known informally as C95) was published, to correct some details and to add more extensive support for international character sets.\[_[citation needed][115]_\]

## C99

The C standard was further revised in the late 1990s, leading to the publication of ISO/IEC 9899:1999 in 1999, which is commonly referred to as "[C99][116]". It has since been amended three times by Technical Corrigenda.[\[16\]][117]

C99 introduced several new features, including [inline functions][118], several new [data types][119] (including `long long int` and a `complex` type to represent [complex numbers][120]), [variable-length arrays][121] and [flexible array members][122], improved support for [IEEE 754][123] floating point, support for [variadic macros][124] (macros of variable [arity][125]), and support for one-line comments beginning with `//`, as in [BCPL][73] or C++. Many of these had already been implemented as extensions in several C compilers.

C99 is for the most part backward compatible with C90, but is stricter in some ways; in particular, a declaration that lacks a type specifier no longer has `int` implicitly assumed. A standard macro `__STDC_VERSION__` is defined with value `199901L` to indicate that C99 support is available. [GCC][126], [Solaris Studio][127], and other C compilers now support many or all of the new features of C99\. The C compiler in [Microsoft Visual C++][128], however, implements the C89 standard and those parts of C99 that are required for compatibility with [C++11][129].[\[17\]][130]

## C11

In 2007, work began on another revision of the C standard, informally called "C1X" until its official publication on 2011-12-08\. The C standards committee adopted guidelines to limit the adoption of new features that had not been tested by existing implementations.

The C11 standard adds numerous new features to C and the library, including type generic macros, anonymous structures, improved Unicode support, atomic operations, multi-threading, and bounds-checked functions. It also makes some portions of the existing C99 library optional, and improves compatibility with C++. The standard macro `__STDC_VERSION__` is defined as `201112L` to indicate that C11 support is available.

## Embedded C

Historically, embedded C programming requires nonstandard extensions to the C language in order to support exotic features such as fixed-point arithmetic, multiple distinct memory banks, and basic I/O operations.

In 2008, the C Standards Committee published a technical report extending the C language[\[18\]][131] to address these issues by providing a common standard for all implementations to adhere to. It includes a number of features not available in normal C, such as [fixed-point arithmetic][132], named address spaces, and basic I/O hardware addressing.

## Syntax

C has a [formal grammar][133] specified by the C standard.[\[19\]][134] Line endings are generally not significant in C; however, line boundaries do have significance during the preprocessing phase. Comments may appear either between the delimiters `/*` and `*/`, or (since C99) following `//` until the end of the line. Comments delimited by `/*` and `*/` do not nest, and these sequences of characters are not interpreted as comment delimiters if they appear inside [string][135] or character literals.[\[20\]][136]

C source files contain declarations and function definitions. Function definitions, in turn, contain declarations and [statements][43]. Declarations either define new types using keywords such as `struct`, `union`, and `enum`, or assign types to and perhaps reserve storage for new variables, usually by writing the type followed by the variable name. Keywords such as `char` and `int` specify built-in types. Sections of code are enclosed in braces (`{` and `}`, sometimes called "curly brackets") to limit the scope of declarations and to act as a single statement for control structures.

As an imperative language, C uses _statements_ to specify actions. The most common statement is an _expression statement_, consisting of an expression to be evaluated, followed by a semicolon; as a side effect of the evaluation, functions may be [called][137] and variables may be [assigned][138] new values. To modify the normal sequential execution of statements, C provides several control-flow statements identified by reserved keywords. [Structured programming][5] is supported by `if`(-`else`) conditional execution and by `do`-`while`, `while`, and `for` iterative execution (looping). The `for` statement has separate initialization, testing, and reinitialization expressions, any or all of which can be omitted. `break` and `continue` can be used to leave the innermost enclosing loop statement or skip to its reinitialization. There is also a non-structured `[goto][139]` statement which branches directly to the designated [label][140] within the function. `switch` selects a `case` to be executed based on the value of an integer expression.

Expressions can use a variety of built-in operators and may contain function calls. The order in which arguments to functions and operands to most operators are evaluated is unspecified. The evaluations may even be interleaved. However, all side effects (including storage to variables) will occur before the next "[sequence point][141]"; sequence points include the end of each expression statement, and the entry to and return from each function call. Sequence points also occur during evaluation of expressions containing certain operators (`&&`, `||`, `[?:][142]` and the [comma operator][143]). This permits a high degree of object code optimization by the compiler, but requires C programmers to take more care to obtain reliable results than is needed for other programming languages.

Kernighan and Ritchie say in the Introduction of _The C Programming Language_: "C, like any other language, has its blemishes. Some of the operators have the wrong precedence; some parts of the syntax could be better."[\[21\]][144] The C standard did not attempt to correct many of these blemishes, because of the impact of such changes on already existing software.

## Character set

The basic C source character set includes the following characters:

Newline indicates the end of a text line; it need not correspond to an actual single character, although for convenience C treats it as one.

Additional multi-byte encoded characters may be used in string literals, but they are not entirely [portable][145]. The latest C standard ([C11][146]) allows multi-national [Unicode][147] characters to be embedded portably within C source text by using `\uXXXX` or `\UXXXXXXXX` encoding (where the `X` denotes a hexadecimal character), although this feature is not yet widely implemented.

The basic C execution character set contains the same characters, along with representations for [alert][148], [backspace][149], and [carriage return][150]. [Run-time][151] support for extended character sets has increased with each revision of the C standard.

## Reserved words

C89 has 32 reserved words, also known as keywords, which are the words that cannot be used for any purposes other than those for which they are predefined:

C99 reserved five more words:

C11 reserved seven more words:[\[22\]][152]

Most of the recently reserved words begin with an underscore followed by a capital letter, because identifiers of that form were previously reserved by the C standard for use only by implementations. Since existing program source code should not have been using these identifiers, it would not be affected when C implementations started supporting these extensions to the programming language. Some standard headers do define more convenient synonyms for underscored identifiers. The language previously included a reserved word called `entry`, but this was seldom implemented, and has now been removed as a reserved word.[\[23\]][153]

## Operators

C supports a rich set of [operators][154], which are symbols used within an [expression][155] to specify the manipulations to be performed while evaluating that expression. C has operators for:

C uses the operator `=` (used in mathematics to express equality) to indicate assignment, following the precedent of [Fortran][156] and [PL/I][86], but unlike [ALGOL][34] and its derivatives. C uses the operator `==` to test for equality. The similarity between these two operators (assignment and equality) may result in the accidental use of one in place of the other, and in many cases, the mistake does not produce an error message (although some compilers produce warnings). For example, the conditional expression `if(a==b+1)` might mistakenly be written as `if(a=b+1)`, which will be evaluated as true if `a` is not zero after the assignment.[\[24\]][157]

The C [operator precedence][158] is not always intuitive. For example, the operator `==` binds more tightly than (is executed prior to) the operators `&` (bitwise AND) and `|` (bitwise OR) in expressions such as `x & 1 == 0`, which must be written as `(x & 1) == 0` if that is the coder's intent.[\[25\]][159]

## "Hello, world" example

The "[hello, world][160]" example, which appeared in the first edition of [K&R][161], has become the model for an introductory program in most programming textbooks, regardless of programming language. The program prints "hello, world" to the [standard output][162], which is usually a terminal or screen display.

The original version was:[\[26\]][163]

A standard-conforming "hello, world" program is:[\[a\]][164]

The first line of the program contains a [preprocessing directive][165], indicated by `#include`. This causes the compiler to replace that line with the entire text of the `[stdio.h][166]` standard header, which contains declarations for standard input and output functions such as `printf`. The angle brackets surrounding `stdio.h` indicate that `stdio.h` is located using a search strategy that prefers headers provided with the compiler to other headers having the same name, as opposed to double quotes which typically include local or project-specific header files.

The next line indicates that a function named `main` is being defined. The `[main][167]` function serves a special purpose in C programs; the run-time environment calls the `main` function to begin program execution. The type specifier `int` indicates that the value that is returned to the invoker (in this case the run-time environment) as a result of evaluating the `main` function, is an integer. The keyword `void` as a parameter list indicates that this function takes no arguments.[\[b\]][168]

The opening curly brace indicates the beginning of the definition of the `main` function.

The next line _calls_ (diverts execution to) a function named `[printf][169]`, which in this case is supplied from a system [library][170]. In this call, the `printf` function is _passed_ (provided with) a single argument, the address of the first character in the [string literal][135] `"hello, world\n"`. The string literal is an unnamed [array][171] with elements of type `char`, set up automatically by the compiler with a final 0-valued character to mark the end of the array (`printf` needs to know this). The `\n` is an _[escape sequence][172]_ that C translates to a _[newline][173]_ character, which on output signifies the end of the current line. The return value of the `printf` function is of type `int`, but it is silently discarded since it is not used. (A more careful program might test the return value to determine whether or not the `printf` function succeeded.) The semicolon `;` terminates the statement.

The closing curly brace indicates the end of the code for the `main` function. According to the C99 specification and newer, the `main` function, unlike any other function, will implicitly return a value of `0` upon reaching the `}` that terminates the function. This is interpreted by the run-time system as an exit code indicating successful execution.[\[27\]][174]

## Data types

The [type system][35] in C is [static][175] and [weakly typed][176], which makes it similar to the type system of [ALGOL][34] descendants such as [Pascal][177].[\[28\]][178] There are built-in types for integers of various sizes, both signed and unsigned, [floating-point numbers][179], and enumerated types (`enum`). Integer type `char` is often used for single-byte characters. C99 added a [boolean datatype][180]. There are also derived types including [arrays][171], [pointers][40], [records][181] (`[struct][182]`), and untagged [unions][183] (`union`).

C is often used in low-level systems programming where escapes from the type system may be necessary. The compiler attempts to ensure type correctness of most expressions, but the programmer can override the checks in various ways, either by using a _[type cast][184]_ to explicitly convert a value from one type to another, or by using pointers or unions to reinterpret the underlying bits of a data object in some other way.

Some find C's declaration syntax unintuitive, particularly for [function pointers][185]. (Ritchie's idea was to declare identifiers in contexts resembling their use: "[declaration reflects use][186]".)[\[29\]][187]

C's _usual arithmetic conversions_ allow for efficient code to be generated, but can sometimes produce unexpected results. For example, a comparison of signed and unsigned integers of equal width requires a conversion of the signed value to unsigned. This can generate unexpected results if the signed value is negative.

## Pointers

C supports the use of [pointers][40], a type of [reference][188] that records the address or location of an object or function in memory. Pointers can be _dereferenced_ to access data stored at the address pointed to, or to invoke a pointed-to function. Pointers can be manipulated using assignment or [pointer arithmetic][189]. The run-time representation of a pointer value is typically a raw memory address (perhaps augmented by an offset-within-word field), but since a pointer's type includes the type of the thing pointed to, expressions including pointers can be type-checked at compile time. Pointer arithmetic is automatically scaled by the size of the pointed-to data type. Pointers are used for many purposes in C. [Text strings][190] are commonly manipulated using pointers into arrays of characters. [Dynamic memory allocation][191] is performed using pointers. Many data types, such as [trees][192], are commonly implemented as dynamically allocated `struct` objects linked together using pointers. Pointers to functions are useful for passing functions as arguments to [higher-order functions][193] (such as [qsort][194] or [bsearch][195]) or as [callbacks][196] to be invoked by event handlers.[\[27\]][174]

A _[null pointer][197] value_ explicitly points to no valid location. Dereferencing a null pointer value is undefined, often resulting in a [segmentation fault][198]. Null pointer values are useful for indicating special cases such as no "next" pointer in the final node of a [linked list][199], or as an error indication from functions returning pointers. In appropriate contexts in source code, such as for assigning to a pointer variable, a _null pointer constant_ can be written as `0`, with or without explicit casting to a pointer type, or as the `NULL` macro defined by several standard headers. In conditional contexts, null pointer values evaluate to false, while all other pointer values evaluate to true.

Void pointers (`void *`) point to objects of unspecified type, and can therefore be used as "generic" data pointers. Since the size and type of the pointed-to object is not known, void pointers cannot be dereferenced, nor is pointer arithmetic on them allowed, although they can easily be (and in many contexts implicitly are) converted to and from any other object pointer type.[\[27\]][174]

Careless use of pointers is potentially dangerous. Because they are typically unchecked, a pointer variable can be made to point to any arbitrary location, which can cause undesirable effects. Although properly used pointers point to safe places, they can be made to point to unsafe places by using invalid [pointer arithmetic][189]; the objects they point to may continue to be used after deallocation ([dangling pointers][200]); they may be used without having been initialized ([wild pointers][201]); or they may be directly assigned an unsafe value using a cast, union, or through another corrupt pointer. In general, C is permissive in allowing manipulation of and conversion between pointer types, although compilers typically provide options for various levels of checking. Some other programming languages address these problems by using more restrictive [reference][188] types.

## Arrays

[Array][171] types in C are traditionally of a fixed, static size specified at compile time. (The more recent C99 standard also allows a form of variable-length arrays.) However, it is also possible to allocate a block of memory (of arbitrary size) at run-time, using the standard library's `malloc` function, and treat it as an array. C's unification of arrays and pointers means that declared arrays and these dynamically allocated simulated arrays are virtually interchangeable.

Since arrays are always accessed (in effect) via pointers, array accesses are typically _not_ checked against the underlying array size, although some compilers may provide [bounds checking][202] as an option.[\[30\]][203] Array bounds violations are therefore possible and rather common in carelessly written code, and can lead to various repercussions, including illegal memory accesses, corruption of data, [buffer overruns][204], and run-time exceptions. If bounds checking is desired, it must be done manually.

C does not have a special provision for declaring [multi-dimensional arrays][205], but rather relies on [recursion][7] within the type system to declare arrays of arrays, which effectively accomplishes the same thing. The index values of the resulting "multi-dimensional array" can be thought of as increasing in [row-major order][206].

Multi-dimensional arrays are commonly used in numerical algorithms (mainly from applied [linear algebra][207]) to store matrices. The structure of the C array is well suited to this particular task. However, since arrays are passed merely as pointers, the bounds of the array must be known fixed values or else explicitly passed to any subroutine that requires them, and dynamically sized arrays of arrays cannot be accessed using double indexing. (A workaround for this is to allocate the array with an additional "row vector" of pointers to the columns.)

C99 introduced "variable-length arrays" which address some, but not all, of the issues with ordinary C arrays.

## Array--pointer interchangeability

The subscript notation `x[i]` (where `x` designates a pointer) is [syntactic sugar][208] for `*(x+i)`.[\[31\]][209] Taking advantage of the compiler's knowledge of the pointer type, the address that `x + i` points to is not the base address (pointed to by `x`) incremented by `i` bytes, but rather is defined to be the base address incremented by `i` multiplied by the size of an element that `x` points to. Thus, `x[i]` designates the `i+1`th element of the array.

Furthermore, in most expression contexts (a notable exception is as operand of `[sizeof][210]`), the name of an array is automatically converted to a pointer to the array's first element. This implies that an array is never copied as a whole when named as an argument to a function, but rather only the address of its first element is passed. Therefore, although function calls in C use [pass-by-value][211] semantics, arrays are in effect passed by [reference][188].

The size of an element can be determined by applying the operator `sizeof` to any dereferenced element of `x`, as in `n = sizeof *x` or `n = sizeof x[0]`, and the number of elements in a declared array `A` can be determined as `sizeof A / sizeof A[0]`. The latter only applies to array names: variables declared with subscripts (`int A[20]`). Due to the semantics of C, it is not possible to determine the entire size of arrays through pointers to arrays or those created by dynamic allocation (`[malloc][212]`); code such as `sizeof arr / sizeof arr[0]` (where `arr` designates a pointer) will not work since the compiler assumes the size of the pointer itself is being requested.[\[32\]][213][\[33\]][214] Since array name arguments to `sizeof` are not converted to pointers, they do not exhibit such ambiguity. However, arrays created by dynamic allocation are accessed by pointers rather than true array variables, so they suffer from the same `sizeof` issues as array pointers.

Thus, despite this apparent equivalence between array and pointer variables, there is still a distinction to be made between them. Even though the name of an array is, in most expression contexts, converted into a pointer (to its first element), this pointer does not itself occupy any storage; the array name is not an [l-value][215], and its address is a constant, unlike a pointer variable. Consequently, what an array "points to" cannot be changed, and it is impossible to assign a new address to an array name. Array contents may be copied, however, by using the `memcpy` function, or by accessing the individual elements.

## Memory management

One of the most important functions of a programming language is to provide facilities for managing [memory][216] and the objects that are stored in memory. C provides three distinct ways to allocate memory for objects:[\[27\]][174]

These three approaches are appropriate in different situations and have various trade-offs. For example, static memory allocation has little allocation overhead, automatic allocation may involve slightly more overhead, and dynamic memory allocation can potentially have a great deal of overhead for both allocation and deallocation. The persistent nature of static objects is useful for maintaining state information across function calls, automatic allocation is easy to use but stack space is typically much more limited and transient than either static memory or heap space, and dynamic memory allocation allows convenient allocation of objects whose size is known only at run-time. Most C programs make extensive use of all three.

Where possible, automatic or static allocation is usually simplest because the storage is managed by the compiler, freeing the programmer of the potentially error-prone chore of manually allocating and releasing storage. However, many data structures can change in size at runtime, and since static allocations (and automatic allocations before C99) must have a fixed size at compile-time, there are many situations in which dynamic allocation is necessary.[\[27\]][174] Prior to the C99 standard, variable-sized arrays were a common example of this. (See the article on `[malloc][212]` for an example of dynamically allocated arrays.) Unlike automatic allocation, which can fail at run time with uncontrolled consequences, the dynamic allocation functions return an indication (in the form of a null pointer value) when the required storage cannot be allocated. (Static allocation that is too large is usually detected by the [linker][217] or [loader][218], before the program can even begin execution.)

Unless otherwise specified, static objects contain zero or null pointer values upon program startup. Automatically and dynamically allocated objects are initialized only if an initial value is explicitly specified; otherwise they initially have indeterminate values (typically, whatever [bit pattern][219] happens to be present in the [storage][220], which might not even represent a valid value for that type). If the program attempts to access an uninitialized value, the results are undefined. Many modern compilers try to detect and warn about this problem, but both [false positives and false negatives][221] can occur.

Another issue is that heap memory allocation has to be synchronized with its actual usage in any program in order for it to be reused as much as possible. For example, if the only pointer to a heap memory allocation goes out of scope or has its value overwritten before `[free()][212]` is called, then that memory cannot be recovered for later reuse and is essentially lost to the program, a phenomenon known as a _[memory leak][222]._ Conversely, it is possible for memory to be freed but continue to be referenced, leading to unpredictable results. Typically, the symptoms will appear in a portion of the program far removed from the actual error, making it difficult to track down the problem. (Such issues are ameliorated in languages with [automatic garbage collection][47].)

## Libraries

The C programming language uses [libraries][170] as its primary method of extension. In C, a library is a set of functions contained within a single "archive" file. Each library typically has a [header file][223], which contains the prototypes of the functions contained within the library that may be used by a program, and declarations of special data types and macro symbols used with these functions. In order for a program to use a library, it must include the library's header file, and the library must be linked with the program, which in many cases requires [compiler flags][224] (e.g., `-lm`, shorthand for "link the math library").[\[27\]][174]

The most common C library is the [C standard library][99], which is specified by the [ISO][225] and [ANSI C][26] standards and comes with every C implementation (implementations which target limited environments such as [embedded systems][226] may provide only a subset of the standard library). This library supports stream input and output, memory allocation, mathematics, character strings, and time values. Several separate standard headers (for example, `stdio.h`) specify the interfaces for these and other standard library facilities.

Another common set of C library functions are those used by applications specifically targeted for [Unix][18] and [Unix-like][227] systems, especially functions which provide an interface to the [kernel][228]. These functions are detailed in various standards such as [POSIX][106] and the [Single UNIX Specification][229].

Since many programs have been written in C, there are a wide variety of other libraries available. Libraries are often written in C because C compilers generate efficient [object code][230]; programmers then create interfaces to the library so that the routines can be used from higher-level languages like [Java][54], [Perl][60], and [Python][62].[\[27\]][174]

## Language tools

A number of tools have been developed to help C programmers find and fix statements with undefined behavior or possibly erroneous expressions, with greater rigor than that provided by the compiler. The tool [lint][231] was the first such, leading to many others.

Automated source code checking and auditing are beneficial in any language, and for C many such tools exist, such as [Lint][231]. A common practice is to use Lint to detect questionable code when a program is first written. Once a program passes Lint, it is then compiled using the C compiler. Also, many compilers can optionally warn about syntactically valid constructs that are likely to actually be errors. [MISRA C][232] is a proprietary set of guidelines to avoid such questionable code, developed for embedded systems.[\[34\]][233]

There are also compilers, libraries, and operating system level mechanisms for performing actions that are not a standard part of C, such as [bounds checking][202] for arrays, detection of [buffer overflow][204], [serialization][234], [dynamic memory][235] tracking, and [automatic garbage collection][47].

Tools such as [Purify][236] or [Valgrind][237] and linking with libraries containing special versions of the [memory allocation functions][212] can help uncover runtime errors in memory usage.

## Uses

C is widely used for "[system programming][30]", including implementing [operating systems][11] and [embedded system][14] applications, because C code, when written for portability, can be used for most purposes, yet when needed, system-specific code can be used to access specific hardware addresses and to perform [type punning][238] to match externally imposed interface requirements, with a low [run-time][151] demand on system resources. C can also be used for website programming using [CGI][239] as a "gateway" for information between the Web application, the server, and the browser.[\[36\]][240] C is often chosen over [interpreted languages][241] because of its speed, stability, and near-universal availability.[\[37\]][242]

One consequence of C's wide availability and efficiency is that compilers, libraries and interpreters of other programming languages are often implemented in C. The primary implementations of [Python][62], [Perl][60] 5 and [PHP][61], for example, are all written in C.

Because the layer of abstraction is thin and the overhead is low, C enables programmers to create efficient implementations of algorithms and data structures, useful for computationally intense programs. For example, the [GNU Multiple Precision Arithmetic Library][243], the [GNU Scientific Library][244], [Mathematica][245], and [MATLAB][246] are completely or partially written in C.

C is sometimes used as an [intermediate language][247] by implementations of other languages. This approach may be used for portability or convenience; by using C as an intermediate language, additional machine-specific code generators are not necessary. C has some features, such as line-number preprocessor directives and optional superfluous commas at the end of initializer lists, that support compilation of generated code. However, some of C's shortcomings have prompted the development of other C-based languages specifically designed for use as intermediate languages, such as [C--][248].

C has also been widely used to implement [end-user][249] applications. However, such applications can also be written in newer, higher-level languages.

## Related languages

C has directly or indirectly influenced many later languages such as [C\#][58], [D][51], [Go][52], [Java][54], [JavaScript][55], [Limbo][56], [LPC][57], [Perl][60], [PHP][61], [Python][62], and Unix's [C shell][66]. The most pervasive influence has been syntactical: all of the languages mentioned combine the statement and (more or less recognizably) expression [syntax of C][69] with type systems, data models and/or large-scale program structures that differ from those of C, sometimes radically.

Several C or near-C interpreters exist, including [Ch][250] and [CINT][251], which can also be used for scripting.

When object-oriented languages became popular, [C++][50] and [Objective-C][59] were two different extensions of C that provided object-oriented capabilities. Both languages were originally implemented as [source-to-source compilers][252]; source code was translated into C, and then compiled with a C compiler.

The [C++][50] programming language was devised by [Bjarne Stroustrup][253] as an approach to providing [object-oriented][46] functionality with a C-like syntax.[\[38\]][254] C++ adds greater typing strength, scoping, and other tools useful in object-oriented programming, and permits [generic programming][255] via templates. Nearly a superset of C, C++ now supports most of C, with [a few exceptions][256].

[Objective-C][59] was originally a very "thin" layer on top of C, and remains a strict superset of C that permits object-oriented programming using a hybrid dynamic/static typing paradigm. Objective-C derives its syntax from both C and [Smalltalk][257]: syntax that involves preprocessing, expressions, function declarations, and function calls is inherited from C, while the syntax for object-oriented features was originally taken from Smalltalk.

In addition to [C++][50] and [Objective-C][59], [Ch][250], [Cilk][258] and [Unified Parallel C][259] are nearly supersets of C.

## See also

## Notes

## References

## Sources

## Further reading

## External links

[0]: /wiki/Help:IPA_for_English "Help:IPA for English"
[1]: /wiki/C "C"
[2]: /wiki/General-purpose_language "General-purpose language"
[3]: /wiki/Imperative_programming "Imperative programming"
[4]: /wiki/Programming_language "Programming language"
[5]: /wiki/Structured_programming "Structured programming"
[6]: /wiki/Lexical_variable_scope "Lexical variable scope"
[7]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[8]: /wiki/Static_type_system "Static type system"
[9]: /wiki/Machine_instruction "Machine instruction"
[10]: /wiki/Assembly_language "Assembly language"
[11]: /wiki/Operating_system "Operating system"
[12]: /wiki/Application_software "Application software"
[13]: /wiki/Supercomputer "Supercomputer"
[14]: /wiki/Embedded_system "Embedded system"
[15]: /wiki/Dennis_Ritchie "Dennis Ritchie"
[16]: /wiki/Bell_Labs "Bell Labs"
[17]: #cite_note-chistory-5
[18]: /wiki/Unix "Unix"
[19]: #cite_note-AutoTX-1-6
[20]: /wiki/Measuring_programming_language_popularity "Measuring programming language popularity"
[21]: #cite_note-AutoTX-2-7
[22]: #cite_note-AutoTX-3-8
[23]: /wiki/Compiler "Compiler"
[24]: /wiki/Computer_architecture "Computer architecture"
[25]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[26]: /wiki/ANSI_C "ANSI C"
[27]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[28]: /wiki/Procedural_programming "Procedural programming"
[29]: /wiki/Run-time_system "Run-time system"
[30]: /wiki/System_programming "System programming"
[31]: /wiki/Cross-platform "Cross-platform"
[32]: /wiki/Porting "Porting"
[33]: /wiki/Microcontroller "Microcontroller"
[34]: /wiki/ALGOL "ALGOL"
[35]: /wiki/Type_system "Type system"
[36]: /wiki/Executable_code "Executable code"
[37]: /wiki/Subroutine "Subroutine"
[38]: /wiki/Functional_programming "Functional programming"
[39]: /wiki/Function_parameter "Function parameter"
[40]: /wiki/Pointer_(computer_programming) "Pointer (computer programming)"
[41]: /wiki/Free-form_language "Free-form language"
[42]: /wiki/Semicolon "Semicolon"
[43]: /wiki/Statement_(programming) "Statement (programming)"
[44]: /wiki/Curly_braces "Curly braces"
[45]: /wiki/Blocks_of_statements "Blocks of statements"
[46]: /wiki/Object-oriented_programming "Object-oriented programming"
[47]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[48]: /wiki/Boehm_garbage_collector "Boehm garbage collector"
[49]: /wiki/GObject "GObject"
[50]: /wiki/C%2B%2B "C++"
[51]: /wiki/D_(programming_language) "D (programming language)"
[52]: /wiki/Go_(programming_language) "Go (programming language)"
[53]: /wiki/Rust_(programming_language) "Rust (programming language)"
[54]: /wiki/Java_(programming_language) "Java (programming language)"
[55]: /wiki/JavaScript "JavaScript"
[56]: /wiki/Limbo_(programming_language) "Limbo (programming language)"
[57]: /wiki/LPC_(programming_language) "LPC (programming language)"
[58]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[59]: /wiki/Objective-C "Objective-C"
[60]: /wiki/Perl "Perl"
[61]: /wiki/PHP "PHP"
[62]: /wiki/Python_(programming_language) "Python (programming language)"
[63]: /wiki/Swift_(programming_language) "Swift (programming language)"
[64]: /wiki/Verilog "Verilog"
[65]: #cite_note-vinsp-4
[66]: /wiki/C_shell "C shell"
[67]: /wiki/Control_structures "Control structures"
[68]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[69]: /wiki/C_syntax "C syntax"
[70]: /wiki/PDP-7 "PDP-7"
[71]: /wiki/PDP-11 "PDP-11"
[72]: /wiki/B_(programming_language) "B (programming language)"
[73]: /wiki/BCPL "BCPL"
[74]: #cite_note-sigplan-9
[75]: /wiki/Byte "Byte"
[76]: #cite_note-10
[77]: #cite_note-unixport-11
[78]: /wiki/Version_2_Unix "Version 2 Unix"
[79]: #cite_note-12
[80]: /wiki/Honeywell_6000 "Honeywell 6000"
[81]: /wiki/IBM_System/370 "IBM System/370"
[82]: #cite_note-k.26r1e-1
[83]: #cite_note-Stallings-13
[84]: /wiki/Kernel_(operating_system) "Kernel (operating system)"
[85]: /wiki/Multics "Multics"
[86]: /wiki/PL/I "PL/I"
[87]: /wiki/MCP_(Burroughs_Large_Systems) "MCP (Burroughs Large Systems)"
[88]: /wiki/Burroughs_large_systems "Burroughs large systems"
[89]: /wiki/Stephen_C._Johnson "Stephen C. Johnson"
[90]: /wiki/Portable_C_Compiler "Portable C Compiler"
[91]: /wiki/Brian_Kernighan "Brian Kernighan"
[92]: /wiki/The_C_Programming_Language "The C Programming Language"
[93]: /wiki/Specification "Specification"
[94]: #cite_note-k.26r2e-14
[95]: /wiki/Lowest_common_denominator_(computers) "Lowest common denominator (computers)"
[96]: /wiki/Type_checking "Type checking"
[97]: /wiki/Lint_programming_tool "Lint programming tool"
[98]: #cite_note-15
[99]: /wiki/C_standard_library "C standard library"
[100]: /wiki/Mainframe_computer "Mainframe computer"
[101]: /wiki/Minicomputer "Minicomputer"
[102]: /wiki/Microcomputer "Microcomputer"
[103]: /wiki/IBM_PC "IBM PC"
[104]: /wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers"
[105]: /wiki/Working_group "Working group"
[106]: /wiki/POSIX "POSIX"
[107]: /wiki/ISO/IEC_JTC1/SC22 "ISO/IEC JTC1/SC22"
[108]: /wiki/Superset "Superset"
[109]: /wiki/Function_prototype "Function prototype"
[110]: /wiki/Character_encoding "Character encoding"
[111]: /wiki/Locale_(computer_software) "Locale (computer software)"
[112]: /wiki/Computing_platform "Computing platform"
[113]: /wiki/Graphical_user_interface "Graphical user interface"
[114]: /wiki/Endianness "Endianness"
[115]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[116]: /wiki/C99 "C99"
[117]: #cite_note-AutoTX-5-16
[118]: /wiki/Inline_function "Inline function"
[119]: /wiki/Data_type "Data type"
[120]: /wiki/Complex_number "Complex number"
[121]: /wiki/Variable-length_array "Variable-length array"
[122]: /wiki/Flexible_array_member "Flexible array member"
[123]: /wiki/IEEE_754 "IEEE 754"
[124]: /wiki/Variadic_macro "Variadic macro"
[125]: /wiki/Arity "Arity"
[126]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[127]: /wiki/Sun_Studio_(software) "Sun Studio (software)"
[128]: /wiki/Microsoft_Visual_C%2B%2B "Microsoft Visual C++"
[129]: /wiki/C%2B%2B11 "C++11"
[130]: #cite_note-17
[131]: #cite_note-AutoTX-6-18
[132]: /wiki/Fixed-point_arithmetic "Fixed-point arithmetic"
[133]: /wiki/Formal_grammar "Formal grammar"
[134]: #cite_note-h.26s5e-19
[135]: /wiki/String_literal "String literal"
[136]: #cite_note-KandR1-20
[137]: /wiki/Procedure_call "Procedure call"
[138]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[139]: /wiki/Goto "Goto"
[140]: /wiki/Label_(computer_science) "Label (computer science)"
[141]: /wiki/Sequence_point "Sequence point"
[142]: /wiki/%3F: "?:"
[143]: /wiki/Comma_operator "Comma operator"
[144]: #cite_note-21
[145]: /wiki/Software_portability "Software portability"
[146]: /wiki/C11_(C_standard_revision) "C11 (C standard revision)"
[147]: /wiki/Unicode "Unicode"
[148]: /wiki/Bell_character "Bell character"
[149]: /wiki/Backspace "Backspace"
[150]: /wiki/Carriage_return "Carriage return"
[151]: /wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)"
[152]: #cite_note-AutoTX-7-22
[153]: #cite_note-KandR2-23
[154]: /wiki/Operator_(programming) "Operator (programming)"
[155]: /wiki/Expression_(programming) "Expression (programming)"
[156]: /wiki/Fortran "Fortran"
[157]: #cite_note-AutoTX-8-24
[158]: /wiki/Operator_precedence "Operator precedence"
[159]: #cite_note-AutoTX-9-25
[160]: /wiki/Hello,_world "Hello, world"
[161]: /wiki/The_C_Programming_Language_(book) "The C Programming Language (book)"
[162]: /wiki/Standard_output "Standard output"
[163]: #cite_note-26
[164]: #cite_note-27
[165]: /wiki/Preprocessing "Preprocessing"
[166]: /wiki/Stdio.h "Stdio.h"
[167]: /wiki/Main_function_(programming) "Main function (programming)"
[168]: #cite_note-28
[169]: /wiki/Printf "Printf"
[170]: /wiki/Library_(computing) "Library (computing)"
[171]: /wiki/Array_data_type "Array data type"
[172]: /wiki/Escape_sequences_in_C "Escape sequences in C"
[173]: /wiki/Newline "Newline"
[174]: #cite_note-bk21st-29
[175]: /wiki/Static_typing "Static typing"
[176]: /wiki/Weak_typing "Weak typing"
[177]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[178]: #cite_note-30
[179]: /wiki/Floating-point_number "Floating-point number"
[180]: /wiki/Boolean_datatype "Boolean datatype"
[181]: /wiki/Record_(computer_science) "Record (computer science)"
[182]: /wiki/Struct_(C_programming_language) "Struct (C programming language)"
[183]: /wiki/Union_(computer_science) "Union (computer science)"
[184]: /wiki/Type_conversion "Type conversion"
[185]: /wiki/Function_pointer "Function pointer"
[186]: /wiki/Declaration_reflects_use "Declaration reflects use"
[187]: #cite_note-31
[188]: /wiki/Reference_(computer_science) "Reference (computer science)"
[189]: /wiki/Pointer_arithmetic "Pointer arithmetic"
[190]: /wiki/String_(computer_science) "String (computer science)"
[191]: /wiki/Dynamic_memory_allocation "Dynamic memory allocation"
[192]: /wiki/Tree_(data_structure) "Tree (data structure)"
[193]: /wiki/Higher-order_function "Higher-order function"
[194]: /wiki/Qsort "Qsort"
[195]: /wiki/Bsearch "Bsearch"
[196]: /wiki/Callback_(computer_science) "Callback (computer science)"
[197]: /wiki/Null_pointer "Null pointer"
[198]: /wiki/Segmentation_fault "Segmentation fault"
[199]: /wiki/Linked_list "Linked list"
[200]: /wiki/Dangling_pointer "Dangling pointer"
[201]: /wiki/Wild_pointer "Wild pointer"
[202]: /wiki/Bounds_checking "Bounds checking"
[203]: #cite_note-AutoTX-10-32
[204]: /wiki/Buffer_overflow "Buffer overflow"
[205]: /wiki/Multi-dimensional_array "Multi-dimensional array"
[206]: /wiki/Row-major_order "Row-major order"
[207]: /wiki/Linear_algebra "Linear algebra"
[208]: /wiki/Syntactic_sugar "Syntactic sugar"
[209]: #cite_note-Raymond1996-33
[210]: /wiki/Sizeof "Sizeof"
[211]: /wiki/Call-by-value "Call-by-value"
[212]: /wiki/Malloc "Malloc"
[213]: #cite_note-cfaq623-34
[214]: #cite_note-cfaq728-35
[215]: /wiki/Value_(computer_science) "Value (computer science)"
[216]: /wiki/Computer_memory "Computer memory"
[217]: /wiki/Linker_(computing) "Linker (computing)"
[218]: /wiki/Loader_(computing) "Loader (computing)"
[219]: /wiki/Bit "Bit"
[220]: /wiki/Computer_storage "Computer storage"
[221]: /wiki/Type_I_and_type_II_errors "Type I and type II errors"
[222]: /wiki/Memory_leak "Memory leak"
[223]: /wiki/Header_file "Header file"
[224]: /wiki/Compiler_flag "Compiler flag"
[225]: /wiki/ISO_standard "ISO standard"
[226]: /wiki/Embedded_systems "Embedded systems"
[227]: /wiki/Unix-like "Unix-like"
[228]: /wiki/Kernel_(computer_science) "Kernel (computer science)"
[229]: /wiki/Single_UNIX_Specification "Single UNIX Specification"
[230]: /wiki/Object_code "Object code"
[231]: /wiki/Lint_(software) "Lint (software)"
[232]: /wiki/MISRA_C "MISRA C"
[233]: #cite_note-36
[234]: /wiki/Serialization "Serialization"
[235]: /wiki/Memory_management "Memory management"
[236]: /wiki/IBM_Rational_Purify "IBM Rational Purify"
[237]: /wiki/Valgrind "Valgrind"
[238]: /wiki/Type_punning "Type punning"
[239]: /wiki/Common_Gateway_Interface "Common Gateway Interface"
[240]: #cite_note-AutoTX-11-38
[241]: /wiki/Interpreted_language "Interpreted language"
[242]: #cite_note-AutoTX-12-39
[243]: /wiki/GNU_Multiple_Precision_Arithmetic_Library "GNU Multiple Precision Arithmetic Library"
[244]: /wiki/GNU_Scientific_Library "GNU Scientific Library"
[245]: /wiki/Mathematica "Mathematica"
[246]: /wiki/MATLAB "MATLAB"
[247]: /wiki/Intermediate_language "Intermediate language"
[248]: /wiki/C-- "C--"
[249]: /wiki/End-user_(computer_science) "End-user (computer science)"
[250]: /wiki/Ch_(computer_programming) "Ch (computer programming)"
[251]: /wiki/CINT "CINT"
[252]: /wiki/Source-to-source_compiler "Source-to-source compiler"
[253]: /wiki/Bjarne_Stroustrup "Bjarne Stroustrup"
[254]: #cite_note-AutoTX-4-40
[255]: /wiki/Generic_programming "Generic programming"
[256]: /wiki/Compatibility_of_C_and_C%2B%2B "Compatibility of C and C++"
[257]: /wiki/Smalltalk "Smalltalk"
[258]: /wiki/Cilk "Cilk"
[259]: /wiki/Unified_Parallel_C "Unified Parallel C"