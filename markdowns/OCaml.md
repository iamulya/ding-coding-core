**OCaml** ([/oʊˈkæməl/][0] [_oh-**KAM**-əl_][1]), originally known as **Objective Caml**, is the main implementation of the [Caml programming language][2], created by [Xavier Leroy][3], Jérôme Vouillon, [Damien Doligez][4], Didier Rémy, Ascánder Suárez and others in 1996\. A member of the [ML language family][5], OCaml extends the core Caml language with [object-oriented][6] constructs.

OCaml's toolset includes an interactive top-level [interpreter][7], a [bytecode][8] [compiler][9], a reversible [debugger][10], a package manager (OPAM), and an optimizing [native code][11] compiler. It has a large standard library that makes it useful for many of the same applications as [Python][12] or [Perl][13], as well as robust modular and object-oriented programming constructs that make it applicable for large-scale software engineering. OCaml is the successor to [Caml Light][14]. The acronym "CAML" originally stood for _Categorical Abstract Machine Language_, although OCaml abandons this [abstract machine][15].[\[1\]][16]

OCaml is a [free][17] [open-source][18] project managed and principally maintained by [INRIA][19]. In recent years,\[_[when?][20]_\] many new languages have drawn elements from OCaml, most notably [F\#][21] and [Scala][22].

## Philosophy

[ML][5]-derived languages are best known for their static [type systems][23] and [type-inferring][24] compilers. OCaml unifies [functional][25], [imperative][26], and [object-oriented programming][6] under an ML-like type system. This means the program author is not required to be overly familiar with the pure functional language paradigm in order to use OCaml.

OCaml's static type system can help eliminate problems at runtime. However, it also forces the programmer to conform to the constraints of the type system, which can require careful thought and close attention. A type-inferring compiler greatly reduces the need for manual type annotations (for example, the [data type][27] of variables and the signature of functions usually do not need to be explicitly declared, as they do in [Java][28]). Nonetheless, effective use of OCaml's type system can require some sophistication on the part of the programmer.

OCaml is perhaps most distinguished from other languages with origins in academia by its emphasis on performance. Firstly, its static type system renders runtime type mismatches impossible, and thus obviates runtime type and safety checks that burden the performance of dynamically typed languages, while still guaranteeing runtime safety (except when array bounds checking is turned off, or when certain type-unsafe features like serialization are used; these are rare enough that avoiding them is quite possible in practice).

Aside from type-checking overhead, [functional programming][25] languages are, in general, challenging to compile to efficient machine language code, due to issues such as the [funarg problem][29]. In addition to standard loop, register, and instruction [optimizations][30], OCaml's optimizing compiler employs [static program analysis][31] techniques to optimize value [boxing][32] and [closure][33] allocation, helping to maximize the performance of the resulting code even if it makes extensive use of functional programming constructs.

[Xavier Leroy][3] has stated that "OCaml delivers at least 50% of the performance of a decent C compiler",[\[2\]][34] but a direct comparison is impossible. Some functions in the OCaml standard library are implemented with faster algorithms than equivalent functions in the standard libraries of other languages. For example, the implementation of set union in the OCaml standard library in theory is asymptotically faster than the equivalent function in the standard libraries of imperative languages (e.g. C++, Java) because the OCaml implementation exploits the immutability of sets in order to reuse parts of input sets in the output ([persistence][35]).

## Features

OCaml features: a [static][36] [type system][23], [type inference][24], [parametric polymorphism][37], [tail recursion][38], [pattern matching][39], [first class lexical closures][33], [functors (parametric modules)][40], [exception handling][41], and incremental generational [automatic garbage collection][42].

OCaml is particularly notable for extending ML-style type inference to an object system in a general-purpose language. This permits [structural subtyping][43], where object types are compatible if their method signatures are compatible, regardless of their declared inheritance; an unusual feature in statically typed languages.

A [foreign function interface][44] for [linking][45] to [C][46] primitives is provided, including language support for efficient numerical [arrays][47] in formats compatible with both C and [FORTRAN][48]. OCaml also supports the creation of libraries of OCaml functions that can be linked to a "main" program in C, so that one could distribute an OCaml library to C programmers who have no knowledge nor installation of OCaml.

The OCaml distribution contains:

The native code compiler is available for many platforms, including [Unix][49], [Microsoft Windows][50], and [Apple][51] [Mac OS X][52]. Portability is achieved through native code generation support for major architectures: [IA-32][53], [AMD64][54], [Power][55], [SPARC][56], [ARM][57], and [ARM64][58].[\[3\]][59]

OCaml bytecode and native code programs can be written in a [multithreaded][60] style, with preemptive context switching. However, because the garbage collector of the INRIA OCaml system (which is the only currently available full implementation of the language) is not designed for concurrency, [symmetric multiprocessing][61] is not supported.[\[4\]][62] OCaml threads in the same process execute by time sharing only. There are however several libraries for distributed computing such as [Functory][63] and [ocamlnet/Plasma][64].

## Development environment

Since 2011, a lot of new tools and libraries have been contributed to the OCaml development environment:

## Code examples

Snippets of OCaml code are most easily studied by entering them into the "top-level". This is an interactive OCaml session that prints the inferred types of resulting or defined expressions. The OCaml top-level is started by simply executing the OCaml program:

Code can then be entered at the "\#" prompt. For example, to calculate 1+2\*3:

OCaml infers the type of the expression to be "int" (a [machine-precision][65] [integer][66]) and gives the result "7".

## Hello World

The following program "hello.ml":

can be compiled into a bytecode executable:

or compiled into an optimized native-code executable:

and executed:

## Summing a list of integers

Lists are one of the fundamental datatypes in OCaml. The following code example defines a _recursive_ function _sum_ that accepts one argument _xs_. (Notice the keyword **rec**). The function recursively iterates over a given list and provides a sum of integer elements. The _match_ statement has similarities to [C][46]'s [switch][67] element, though it is much more general.

Another way is to use standard [fold function][68] that works with lists.

## Quicksort

OCaml lends itself to the concise expression of recursive algorithms. The following code example implements an algorithm similar to [quicksort][69] that sorts a list in increasing order.

## Birthday paradox

The following program calculates the smallest number of people in a room for whom the probability of completely unique birthdays is less than 50% (the so-called [birthday paradox][70], where for 1 person the probability is 365/365 (or 100%), for 2 it is 364/365, for 3 it is 364/365 × 363/365, etc.) (answer = 23).

## Church numerals

The following code defines a [Church encoding][71] of [natural numbers][72], with successor (succ) and addition (add). A Church numeral `n` is a higher-order function that accepts a function `f` and a value `x` and applies `f` to `x` exactly `n` times. To convert a Church numeral from a functional value to a string, we pass it a function that prepends the string `"S"` to its input and the constant string `"0"`.

## Arbitrary-precision factorial function (libraries)

A variety of libraries are directly accessible from OCaml. For example, OCaml has a built-in library for [arbitrary-precision arithmetic][73]. As the factorial function grows very rapidly, it quickly overflows machine-precision numbers (typically 32- or 64-bits). Thus, factorial is a suitable candidate for arbitrary-precision arithmetic.

In OCaml, the Num module provides arbitrary-precision arithmetic and can be loaded into a running top-level using:

The factorial function may then be written using the arbitrary-precision numeric operators =/, \*/ and -/ :

This function can compute much larger factorials, such as 120!:

The cumbersome syntax for Num operations can be alleviated thanks to the camlp4 syntax extension called Delimited overloading:

## Triangle (graphics)

The following program "simple.ml" renders a rotating triangle in 2D using [OpenGL][74]:

The LablGL bindings to OpenGL are required. The program may then be compiled to bytecode with:

or to nativecode with:

and run:

Far more sophisticated, high-performance 2D and 3D graphical programs can be developed in OCaml. Thanks to the use of OpenGL and OCaml, the resulting programs can be cross-platform, compiling without any changes on many major platforms.

## Fibonacci Sequence

The following code calculates the Fibonacci sequence of a number _n_ inputted. It uses [tail recursion][38] and pattern matching.

## Higher-order functions

Functions may take functions as input and return functions as result. For example, applying _twice_ to a function _f_ yields a function that applies _f_ two times to its argument.

The function _twice_ uses a type variable _'a_ to indicate that it can be applied to any function _f_ mapping from a type _'a_ to itself, rather than only to _int-\>int_ functions. In particular, _twice_ can even be applied to itself.

## Derived languages

## MetaOCaml

MetaOCaml[\[5\]][75] is a [multi-stage programming][76] extension of OCaml enabling incremental compiling of new machine code during runtime. Under certain circumstances, significant speedups are possible using multi-stage programming, because more detailed information about the data to process is available at runtime than at the regular compile time, so the incremental compiler can optimize away many cases of condition checking etc.

As an example: if at compile time it is known that a certain [power function][77] `x -> x^n` is needed very frequently, but the value of `n` is known only at runtime, you can use a two-stage power function in MetaOCaml:

As soon as you know `n` at runtime, you can create a specialized and very fast power function:

The result is:

The new function is automatically compiled.

## Other derived languages

## Software written in OCaml

## Commercial users of OCaml

There are several dozen companies that use OCaml to some degree.[\[6\]][78] Notable examples include:

## See also

## References

## External links

[0]: /wiki/Help:IPA_for_English "Help:IPA for English"
[1]: /wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key"
[2]: /wiki/Caml "Caml"
[3]: /wiki/Xavier_Leroy "Xavier Leroy"
[4]: /wiki/Damien_Doligez "Damien Doligez"
[5]: /wiki/ML_(programming_language) "ML (programming language)"
[6]: /wiki/Object-oriented_programming "Object-oriented programming"
[7]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[8]: /wiki/Bytecode "Bytecode"
[9]: /wiki/Compiler "Compiler"
[10]: /wiki/Debugger "Debugger"
[11]: /wiki/Native_code "Native code"
[12]: /wiki/Python_(programming_language) "Python (programming language)"
[13]: /wiki/Perl "Perl"
[14]: /wiki/Caml_Light "Caml Light"
[15]: /wiki/Abstract_machine "Abstract machine"
[16]: #cite_note-1
[17]: /wiki/Free_software "Free software"
[18]: /wiki/Open_source_software "Open source software"
[19]: /wiki/Institut_National_de_Recherche_en_Informatique_et_en_Automatique "Institut National de Recherche en Informatique et en Automatique"
[20]: /wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items "Wikipedia:Manual of Style/Dates and numbers"
[21]: /wiki/F_Sharp_(programming_language) "F Sharp (programming language)"
[22]: /wiki/Scala_(programming_language) "Scala (programming language)"
[23]: /wiki/Type_system "Type system"
[24]: /wiki/Type_inference "Type inference"
[25]: /wiki/Functional_programming "Functional programming"
[26]: /wiki/Imperative_programming "Imperative programming"
[27]: /wiki/Data_type "Data type"
[28]: /wiki/Java_(programming_language) "Java (programming language)"
[29]: /wiki/Funarg_problem "Funarg problem"
[30]: /wiki/Compiler_optimization "Compiler optimization"
[31]: /wiki/Static_program_analysis "Static program analysis"
[32]: /wiki/Boxing_(computer_science) "Boxing (computer science)"
[33]: /wiki/Closure_(computer_science) "Closure (computer science)"
[34]: #cite_note-LWN-2
[35]: /wiki/Persistent_data_structure "Persistent data structure"
[36]: /wiki/Semantic_analysis_(computer_science) "Semantic analysis (computer science)"
[37]: /wiki/Parametric_polymorphism "Parametric polymorphism"
[38]: /wiki/Tail_recursion "Tail recursion"
[39]: /wiki/Pattern_matching "Pattern matching"
[40]: /wiki/Function_object#Other_meanings "Function object"
[41]: /wiki/Exception_handling "Exception handling"
[42]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[43]: /wiki/Structural_subtyping "Structural subtyping"
[44]: /wiki/Foreign_function_interface "Foreign function interface"
[45]: /wiki/Linker_(computing) "Linker (computing)"
[46]: /wiki/C_(programming_language) "C (programming language)"
[47]: /wiki/Array_data_structure "Array data structure"
[48]: /wiki/FORTRAN "FORTRAN"
[49]: /wiki/Unix "Unix"
[50]: /wiki/Microsoft_Windows "Microsoft Windows"
[51]: /wiki/Apple_Computer "Apple Computer"
[52]: /wiki/Mac_OS_X "Mac OS X"
[53]: /wiki/IA-32 "IA-32"
[54]: /wiki/X86-64 "X86-64"
[55]: /wiki/Power_Architecture "Power Architecture"
[56]: /wiki/SPARC "SPARC"
[57]: /wiki/ARM_architecture "ARM architecture"
[58]: /wiki/ARM64 "ARM64"
[59]: #cite_note-3
[60]: /wiki/Thread_(computer_science) "Thread (computer science)"
[61]: /wiki/Symmetric_multiprocessing "Symmetric multiprocessing"
[62]: #cite_note-INRIA-4
[63]: http://functory.lri.fr/About.html
[64]: http://projects.camlcity.org/projects/ocamlnet.html
[65]: /wiki/Word_(computer_architecture) "Word (computer architecture)"
[66]: /wiki/Integer_(computer_science) "Integer (computer science)"
[67]: /wiki/Switch_statement "Switch statement"
[68]: /wiki/Fold_function "Fold function"
[69]: /wiki/Quicksort "Quicksort"
[70]: /wiki/Birthday_paradox "Birthday paradox"
[71]: /wiki/Church_encoding "Church encoding"
[72]: /wiki/Natural_numbers "Natural numbers"
[73]: /wiki/Arbitrary-precision_arithmetic "Arbitrary-precision arithmetic"
[74]: /wiki/OpenGL "OpenGL"
[75]: #cite_note-Meta-5
[76]: /wiki/Multi-stage_programming "Multi-stage programming"
[77]: /wiki/Exponentiation "Exponentiation"
[78]: #cite_note-ocaml.org-companies-6