**Julia** is a [high-level][0] [dynamic programming language][1] designed to address the requirements of high-performance [numerical][2] and [scientific computing][3] while also being effective for [general-purpose programming][4],[\[12\]][5][\[13\]][6][\[14\]][7][\[15\]][8] web use[\[16\]][9][\[17\]][10] or as a [specification language][11].[\[18\]][12]

Distinctive aspects of Julia's design include a type system with [parametric types][13] in a fully [dynamic programming language][1] and [multiple dispatch][14] as its core [programming paradigm][15]. It allows [concurrent][16], [parallel][17] and [distributed computing][18], and [direct calling][19] of [C][20] and [Fortran][21] libraries without [glue code][22].

Julia is [garbage-collected][23],[\[19\]][24] uses [eager evaluation][25] and includes efficient libraries for [floating-point][26] calculations, [linear algebra][27], [random number generation][28], [fast Fourier transforms][29] and [regular expression][30] matching.

## Language features

According to the official website, the main features of the language are:

Multiple dispatch (also known as [multimethods][31] in Lisp) is a [generalization][32] of [single dispatch][33] -- the [polymorphic mechanism][34] used in common [object oriented][35] (OO) languages -- that uses [inheritance][36]. In Julia, all concrete types are [subtypes][37] of abstract types, directly or indirectly subtypes of the "Any" type, which is the top of the type hierarchy. Concrete types can not be subtyped, but composition is used over inheritance, that is used by traditional object-oriented languages (see also [Inheritance vs subtyping][38]).

Julia draws significant inspiration from various dialects of Lisp, including [Scheme][39] and [Common Lisp][40], and it shares many features with [Dylan][41] (such as an [ALGOL][42]-like [free-form][43] [infix][44] syntax rather than a Lisp-like prefix syntax, while in Julia "everything"[\[23\]][45] is an [expression][46]) -- also a multiple-dispatch-oriented dynamic language -- and [Fortress][47], another numerical programming language with multiple dispatch and a sophisticated parametric type system. While [CLOS][48] adds multiple dispatch to Common Lisp, not all functions are generic functions.

In Julia, Dylan and Fortress extensibility is the default, and the system's built-in functions are all generic and extensible. In Dylan, multiple dispatch is as fundamental as it is in Julia: all user-defined functions and even basic built-in operations like `+` are generic. Dylan's type system, however, does not fully support parametric types, which are more typical of the [ML lineage of languages][49]. By default, CLOS does not allow for dispatch on Common Lisp's parametric types; such extended dispatch semantics can only be added as an extension through the [CLOS Metaobject Protocol][50]. By convergent design, Fortress also features multiple dispatch on parametric types; unlike Julia, however, Fortress is statically rather than dynamically typed, with separate compilation and execution phases. The language features are summarized in the following table:

By default the Julia runtime needs to be pre-installed as you run source code you provide, while another way is possible, where you make a standalone "[executable][51] that doesn't require any Julia source code" built with _BuildExecutable.jl_.[\[24\]][52][\[25\]][53]

Julia's [syntactic macros][54] (used for [metaprogramming][55]), like Lisp macros, are more powerful and different from [text-substitution macros][56] used in the [preprocessor][57] of some other languages such as C, because they work at the level of [abstract syntax trees][58] (ASTs). Julia's macro system is [hygienic][59], but also supports deliberate capture when desired (like for [anaphoric macros][60]) using the `esc` construct.

## Interaction

The Julia official distribution includes an interactive session shell, called Julia's [REPL][61], which can be used to experiment and test code quickly.[\[26\]][62] The following fragment represents a sample session on the REPL:[\[27\]][63]

The REPL gives user access to the system shell and to help mode, by pressing `;` or `?` after the prompt (preceding each command), respectively. The REPL also keeps the history of commands, even between sessions. For other examples, see the Julia documentation,[\[28\]][64] which gives code that can be tested inside the Julia's interactive section or saved into a file with a `.jl` extension and run from the command line by typing (for example):[\[29\]][65]

Julia is also supported by [Jupyter][66], an online interactive "notebooks" environment ([project Jupyter][67] is a multi-language extension, that "evolved", from the [IPython][68] command shell; now includes IJulia). See for other ways in the next section.

## To use Julia with other languages

Julia's `ccall` keyword is used to call C-exported or Fortran shared library functions individually.

Julia has [Unicode 9.0][69] support, with UTF-8 used for source code (and by default for strings) and e.g. optionally allowing common math symbols for many operators, such as ∈ for the `in` operator.

Julia has packages supporting markup languages such as [HTML][70], (and also for [HTTP][71]), [XML][72], [JSON][73] and [BSON][74].

## Implementation

Julia's core is implemented in [C][20] and [C++][75] (the [LLVM][76] dependency is in C++), its parser in [Scheme][39] (["femtolisp"][77]), and the LLVM compiler framework is used for [just-in-time][78] (JIT) generation of [64-bit][79] or [32-bit][80] optimized [machine code][81] (i.e. not for [VM][82][\[30\]][83]) depending on the platform Julia runs on. With some exceptions (e.g., [libuv][84]), the standard library is implemented in Julia itself. The most notable aspect of Julia's implementation is its speed, which is often within a factor of two relative to fully optimized C code (and thus often an order of magnitude faster than Python or [R][85]).[\[31\]][86] Development of Julia began in 2009 and an [open-source][87] version was publicized in February 2012\.[\[4\]][88][\[32\]][89]

Julia, the 0.5.x line, is on a monthly release schedule where bugs are fixed and some new features from 0.6-dev are [backported][90] (and possibly also to 0.4.x).

## Current and future platforms

While Julia uses JIT[\[33\]][91] (MCJIT[\[34\]][92] from LLVM) -- Julia generates native machine code, directly, the first time a function is run (not a [bytecode][93] that is run on a [VM][82], as with e.g. Java/[JVM][94] or Java/[Dalvik][95] in Android).

Current support is for [32-][80] and [64-bit][96] (all except for ancient pre-[Pentium 4][97]-era, to [optimize][98] for newer) x86 processors (and with download of [executables][51] or source code also available for other architectures). "Experimental and early support for ARM, [AARCH64][99], and [POWER][100] ([little-endian][101]) is available too."[\[35\]][102] Including support for [Raspberry Pi 1][103] and later (e.g. "requires at least [armv6][104]").[\[36\]][105][\[37\]][106]

Support for [GNU Hurd][107] is being worked on.[\[38\]][108]

Julia version 0.6 is planned for 2016 and 1.0 for 2017 and some features are discussed for 2+ that is also planned, e.g. "[multiple inheritance][109] for abstract types".[\[39\]][110]

## Julia2C source-to-source compiler

A Julia2C [source-to-source compiler][111] from [Intel][112] Labs is available.[\[40\]][113] This source-to-source compiler is a [fork][114] of Julia, that implements the same Julia language syntax, which emits C code (for compatibility with more [CPUs][115]) instead of native machine code, for functions or whole programs. The compiler is also meant to allow analyzing code at a higher level than C.[\[41\]][116]

Intel's [ParallelAccelerator.jl][117] can be thought of as a partial Julia to C++ compiler, but the objective is [parallel speedup][118] (can by "100x over plain Julia", for the older 0.4 version,[\[42\]][119] and could in cases also speed up serial code manyfold for that version), not compiling the full language to C++ (it's only an implementation detail, that may be dropped later). It needs not compile all syntax, as the rest is handled by Julia.

## Notes

## References

## External links

[0]: /wiki/High-level_programming_language "High-level programming language"
[1]: /wiki/Dynamic_programming_language "Dynamic programming language"
[2]: /wiki/Numerical_analysis "Numerical analysis"
[3]: /wiki/Computational_science "Computational science"
[4]: /wiki/General-purpose_programming_language "General-purpose programming language"
[5]: #cite_note-12
[6]: #cite_note-13
[7]: #cite_note-14
[8]: #cite_note-15
[9]: #cite_note-Escher.jl-16
[10]: #cite_note-node-js-17
[11]: /wiki/Specification_language "Specification language"
[12]: #cite_note-spec-18
[13]: /wiki/Parametric_polymorphism "Parametric polymorphism"
[14]: /wiki/Multiple_dispatch "Multiple dispatch"
[15]: /wiki/Programming_paradigm "Programming paradigm"
[16]: /wiki/Concurrent_computing "Concurrent computing"
[17]: /wiki/Parallel_computing "Parallel computing"
[18]: /wiki/Distributed_computing "Distributed computing"
[19]: /wiki/Foreign_function_interface "Foreign function interface"
[20]: /wiki/C_(programming_language) "C (programming language)"
[21]: /wiki/Fortran "Fortran"
[22]: /wiki/Adapter_pattern#gluecode "Adapter pattern"
[23]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[24]: #cite_note-19
[25]: /wiki/Eager_evaluation "Eager evaluation"
[26]: /wiki/Floating-point "Floating-point"
[27]: /wiki/Linear_algebra "Linear algebra"
[28]: /wiki/Random_number_generation "Random number generation"
[29]: /wiki/Fast_Fourier_transform "Fast Fourier transform"
[30]: /wiki/Regular_expression "Regular expression"
[31]: /wiki/Multimethod "Multimethod"
[32]: /wiki/Generalization "Generalization"
[33]: /wiki/Single_dispatch "Single dispatch"
[34]: /wiki/Polymorphism_(computer_science) "Polymorphism (computer science)"
[35]: /wiki/Object_oriented "Object oriented"
[36]: /wiki/Inheritance_(object-oriented_programming) "Inheritance (object-oriented programming)"
[37]: /wiki/Subtyping "Subtyping"
[38]: /wiki/Inheritance_(object-oriented_programming)#Inheritance_vs_subtyping "Inheritance (object-oriented programming)"
[39]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[40]: /wiki/Common_Lisp "Common Lisp"
[41]: /wiki/Dylan_(programming_language) "Dylan (programming language)"
[42]: /wiki/ALGOL "ALGOL"
[43]: /wiki/Free-form_language "Free-form language"
[44]: /wiki/Infix_notation "Infix notation"
[45]: #cite_note-24
[46]: /wiki/Expression_(computer_science) "Expression (computer science)"
[47]: /wiki/Fortress_(programming_language) "Fortress (programming language)"
[48]: /wiki/Common_Lisp_Object_System "Common Lisp Object System"
[49]: /wiki/Generational_list_of_programming_languages#ML_based "Generational list of programming languages"
[50]: /wiki/Common_Lisp_Object_System#Metaobject_Protocol "Common Lisp Object System"
[51]: /wiki/Executable "Executable"
[52]: #cite_note-25
[53]: #cite_note-26
[54]: /wiki/Macro_(computer_science)#Syntactic_macros "Macro (computer science)"
[55]: /wiki/Metaprogramming "Metaprogramming"
[56]: /wiki/Macro_(computer_science)#Text-substitution_macros "Macro (computer science)"
[57]: /wiki/Preprocessor "Preprocessor"
[58]: /wiki/Abstract_syntax_tree "Abstract syntax tree"
[59]: /wiki/Hygienic_macro "Hygienic macro"
[60]: /wiki/Anaphoric_macro "Anaphoric macro"
[61]: /wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop"
[62]: #cite_note-27
[63]: #cite_note-28
[64]: #cite_note-29
[65]: #cite_note-30
[66]: /wiki/Jupyter "Jupyter"
[67]: https://jupyter.org/
[68]: /wiki/IPython "IPython"
[69]: /wiki/Unicode_9.0 "Unicode 9.0"
[70]: /wiki/HTML "HTML"
[71]: /wiki/HTTP "HTTP"
[72]: /wiki/XML "XML"
[73]: /wiki/JSON "JSON"
[74]: /wiki/BSON "BSON"
[75]: /wiki/C%2B%2B "C++"
[76]: /wiki/LLVM "LLVM"
[77]: https://github.com/JeffBezanson/femtolisp
[78]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[79]: /wiki/64-bit "64-bit"
[80]: /wiki/32-bit "32-bit"
[81]: /wiki/Machine_code "Machine code"
[82]: /wiki/Virtual_machine "Virtual machine"
[83]: #cite_note-31
[84]: /wiki/Libuv "Libuv"
[85]: /wiki/R_(programming_language) "R (programming language)"
[86]: #cite_note-Julia-TR-32
[87]: /wiki/Open-source_software "Open-source software"
[88]: #cite_note-announcement-4
[89]: #cite_note-33
[90]: /wiki/Backporting "Backporting"
[91]: #cite_note-34
[92]: #cite_note-35
[93]: /wiki/Bytecode "Bytecode"
[94]: /wiki/JVM "JVM"
[95]: /wiki/Dalvik_(software) "Dalvik (software)"
[96]: /wiki/64-bit_computing "64-bit computing"
[97]: /wiki/Pentium_4 "Pentium 4"
[98]: /wiki/Program_optimization "Program optimization"
[99]: /wiki/AArch64 "AArch64"
[100]: /wiki/Power_Architecture "Power Architecture"
[101]: /wiki/Little-endian "Little-endian"
[102]: #cite_note-36
[103]: /wiki/Raspberry_Pi "Raspberry Pi"
[104]: /wiki/ARMv6 "ARMv6"
[105]: #cite_note-37
[106]: #cite_note-38
[107]: /wiki/GNU_Hurd "GNU Hurd"
[108]: #cite_note-39
[109]: /wiki/Multiple_inheritance "Multiple inheritance"
[110]: #cite_note-40
[111]: /wiki/Source-to-source_compiler "Source-to-source compiler"
[112]: /wiki/Intel "Intel"
[113]: #cite_note-41
[114]: /wiki/Fork_(software_development) "Fork (software development)"
[115]: /wiki/Central_processing_unit "Central processing unit"
[116]: #cite_note-42
[117]: https://github.com/IntelLabs/ParallelAccelerator.jl
[118]: /wiki/Parallel_speedup "Parallel speedup"
[119]: #cite_note-43