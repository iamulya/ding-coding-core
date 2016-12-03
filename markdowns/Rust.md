**Rust** is a general-purpose, [multi-paradigm][0], [compiled programming language][1] sponsored by [Mozilla][2] Research.[\[11\]][3] It is designed to be a "safe, [concurrent][4], practical language",[\[12\]][5] supporting [functional][6] and [imperative-procedural][7] paradigms.

The language grew out of a personal project by Mozilla employee Graydon Hoare. Mozilla began sponsoring the project in 2009[\[12\]][5] and announced it in 2010\.[\[13\]][8] The same year, work shifted from the initial [compiler][9] (written in [OCaml][10]) to the [self-hosting compiler][11] written in Rust.[\[14\]][12] Known as rustc, it successfully [compiled itself][13] in 2011\.[\[15\]][14] rustc uses [LLVM][15] as its [back end][16].

The first numbered [pre-alpha release][17] of the Rust compiler occurred in January 2012\.[\[16\]][18] Rust 1.0, the first stable release, was released on May 15, 2015\.[\[17\]][19]

Although its development is sponsored by Mozilla, it is an open community project. The design of the language has been refined through the experiences of writing the [Servo][20][\[18\]][21] [web browser][22] [layout engine][23] and the Rust compiler. A large portion of current [commits][24] are from community members.[\[19\]][25]

Rust won the first place for Most Loved Programming Language of 2016 in the [Stack Overflow][26] Developer Survey.[\[20\]][27] The language is believed to take its name from the [rust family of fungi][28].[\[21\]][29]

## Design

The goal of Rust is to be a language suited to creating highly concurrent and highly safe [systems][30],[\[22\]][31] and [programming in the large][32]. This has led to a feature set with an emphasis on safety, control of [memory layout][33], and [concurrency][34]. Performance of idiomatic Rust is comparable to the performance of idiomatic C++.[\[23\]][35][\[24\]][36]

The syntax of Rust is similar to [C][37] and [C++][38], with blocks of code delimited by [curly brackets][39], and [control flow][40] keywords such as `[if][41]`, `else`, `while`, and `for`. Not all C or C++ keywords are present, however, while some Rust keywords (such as [`match`][42] for multi-directional branching, similar to `switch` in other languages) will be less familiar to programmers coming from these languages. Despite the [syntactic][43] resemblance, Rust is [semantically][44] very different from C and C++.\[_[citation needed][45]_\]

The system is designed to be [memory safe][46], and it does not permit [null pointers][47] or [dangling pointers][48].[\[25\]][49][\[26\]][50] Data values can only be initialized through a fixed set of forms, all of which require their inputs to be already initialized.[\[27\]][51]

The [type system][52] supports a mechanism similar to [type classes][53], called '[traits][54]', inspired directly by the [Haskell][55] language. This is a facility for [ad-hoc polymorphism][56], achieved by adding constraints to type variable declarations. Other features from Haskell, such as [higher-kinded polymorphism][57], are not yet supported.

Rust does not use an automated [garbage collection][58] system like those used by [Go][59], [Java][60] or [.NET Framework][61], but instead [Resource Acquisition Is Initialization][62] (RAII), as in [C++][38].

Rust features [type inference][63], for variables declared with the `let` keyword. Such variables do not require a value to be initially assigned to determine their type. A [compile time][64] error results if any branch of code fails to assign a value to the variable.[\[28\]][65] Functions can be given generic [parameters][66] but they must be explicitly bounded by traits. There is no way to leave off [type signatures][67] while still making use of methods and operators on the parameters.

The object system within Rust is based around implementations, [traits][54] and [structured types][68]. Implementations fulfill a role similar to that of [classes][69] within other languages, and are defined with the `impl` keyword. Inheritance and polymorphism are provided by traits; they allow methods to be defined and [mixed in][70] to implementations. Structured types are used to define fields. Implementations and traits cannot define fields themselves, and only traits can provide inheritance, to prevent the [diamond problem][71] of [multiple inheritance][72], as in C++.

## History

In addition to conventional static typing, before version 0.4, Rust also supported [typestates][73]. The typestate system modeled assertions before and after program statements, through use of a special `check` statement. Discrepancies could be discovered at compile time, rather than when a program was running, as might be the case with [assertions][74] in C or C++ code. The typestate concept was not unique to Rust, as it was first introduced in the language [NIL][75].[\[29\]][76] Typestates were removed because in practice they found little use, though the same functionality can still be achieved with [branding patterns][77].[\[30\]][78]

The style of the object system changed considerably within versions 0.2, 0.3 and 0.4 of Rust.\[_[when?][79]_\] Version 0.2 introduced classes for the first time, with version 0.3 adding a number of features including destructors and polymorphism through the use of interfaces. In Rust 0.4, traits were added as a means to provide inheritance; interfaces were unified with traits and removed as a separate feature. Classes were also removed, replaced by a combination of implementations and structured types.\[_[citation needed][45]_\]

Starting in Rust 0.9 and ending in Rust 0.11, Rust had two built-in pointer types, `~` and `@`, simplifying the core memory model. It reimplemented\[_[when?][79]_\] those pointer types in the standard library as `Box` and (the now removed) `Gc`.

In January 2014, the editor-in-chief of _[Dr Dobb's][80]_, Andrew Binstock, commented on Rust's chances to become a competitor to C++, as well as to the other upcoming languages [D][81], [Go][59] and [Nim][82] (then Nimrod): according to Binstock, while Rust was "widely viewed as a remarkably elegant language", adoption of it stayed behind because the language kept changing between versions.[\[31\]][83] The first "stable" version of the Rust, version 1.0.0, was released in May 2015\.[\[32\]][84]

Rust was the third most loved programming language in the 2015 Stack Overflow annual survey,[\[33\]][85] and jumped to the first place in 2016 Stack Overflow annual survey.[\[34\]][86]

## Projects using Rust

## Examples

## Hello world

This program prints the string "[Hello, world!][87]" to [standard output][88] and exits.

## Factorial

This is a [factorial][89] function, implemented [recursively][90]. The branches in this function exhibit Rust's optional implicit return values, which can be utilized where a more "functional" style is preferred. Unlike C++ and related languages, Rust's `if` construct is an expression rather than a statement, and thus has a return value of its own.

And here's an [iterative][91] implementation:

This implementation uses an [iterator][92] instead.

## Concurrency

A demonstration of Rust's [concurrency][93] capabilities:

## Miscellaneous

A demonstration of Rust's built-in [unique smart pointers][94], along with [tagged unions][95] and [methods][96].

## See also

## References

## External links

[0]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[1]: /wiki/Compiled_programming_language "Compiled programming language"
[2]: /wiki/Mozilla "Mozilla"
[3]: #cite_note-lamda-11
[4]: /wiki/Concurrent_programming_language "Concurrent programming language"
[5]: #cite_note-FAQ_-_The_Rust_Project-12
[6]: /wiki/Functional_programming "Functional programming"
[7]: /wiki/Procedural_programming "Procedural programming"
[8]: #cite_note-future-tense-13
[9]: /wiki/Compiler "Compiler"
[10]: /wiki/OCaml "OCaml"
[11]: /wiki/Self-hosting_compiler "Self-hosting compiler"
[12]: #cite_note-rust-in-rust-14
[13]: /wiki/Bootstrapping_(compilers) "Bootstrapping (compilers)"
[14]: #cite_note-rust-compiles-rust-15
[15]: /wiki/LLVM "LLVM"
[16]: /wiki/Front_and_back_ends "Front and back ends"
[17]: /wiki/Software_release_life_cycle#Pre-alpha "Software release life cycle"
[18]: #cite_note-rustc-0.1-16
[19]: #cite_note-17
[20]: /wiki/Servo_(layout_engine) "Servo (layout engine)"
[21]: #cite_note-rustinservo-18
[22]: /wiki/Web_browser "Web browser"
[23]: /wiki/Layout_engine "Layout engine"
[24]: /wiki/Commit_(version_control) "Commit (version control)"
[25]: #cite_note-contributors-19
[26]: /wiki/Stack_Overflow "Stack Overflow"
[27]: #cite_note-20
[28]: /wiki/Rust_(fungus) "Rust (fungus)"
[29]: #cite_note-rust-name-21
[30]: /wiki/System_programming "System programming"
[31]: #cite_note-infoq2012-22
[32]: /wiki/Programming_in_the_large "Programming in the large"
[33]: /wiki/Memory_map "Memory map"
[34]: /wiki/Concurrency_(computer_science) "Concurrency (computer science)"
[35]: #cite_note-cpp-design-goals-23
[36]: #cite_note-how-fast-is-rust-24
[37]: /wiki/C_(programming_language) "C (programming language)"
[38]: /wiki/C%2B%2B "C++"
[39]: /wiki/Bracket#Curly_brackets "Bracket"
[40]: /wiki/Control_flow "Control flow"
[41]: /wiki/Conditional_(computer_programming) "Conditional (computer programming)"
[42]: /wiki/Pattern_matching "Pattern matching"
[43]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[44]: /wiki/Semantics_(computer_science) "Semantics (computer science)"
[45]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[46]: /wiki/Memory_safe "Memory safe"
[47]: /wiki/Null_pointer "Null pointer"
[48]: /wiki/Dangling_pointer "Dangling pointer"
[49]: #cite_note-cnet-25
[50]: #cite_note-lwn-26
[51]: #cite_note-lang-faq-27
[52]: /wiki/Type_system "Type system"
[53]: /wiki/Type_class "Type class"
[54]: /wiki/Trait_(computer_programming) "Trait (computer programming)"
[55]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[56]: /wiki/Ad-hoc_polymorphism "Ad-hoc polymorphism"
[57]: /wiki/Type_class#Higher-kinded_polymorphism "Type class"
[58]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[59]: /wiki/Go_(programming_language) "Go (programming language)"
[60]: /wiki/Java_(programming_language) "Java (programming language)"
[61]: /wiki/.NET_Framework ".NET Framework"
[62]: /wiki/Resource_Acquisition_Is_Initialization "Resource Acquisition Is Initialization"
[63]: /wiki/Type_inference "Type inference"
[64]: /wiki/Compile_time "Compile time"
[65]: #cite_note-type-inference-28
[66]: /wiki/Parameter_(computer_programming) "Parameter (computer programming)"
[67]: /wiki/Type_signature "Type signature"
[68]: /wiki/Struct_(C_programming_language) "Struct (C programming language)"
[69]: /wiki/Class_(computer_programming) "Class (computer programming)"
[70]: /wiki/Mixin "Mixin"
[71]: /wiki/Diamond_problem "Diamond problem"
[72]: /wiki/Multiple_inheritance "Multiple inheritance"
[73]: /wiki/Typestate_analysis "Typestate analysis"
[74]: /wiki/Assertion_(computing) "Assertion (computing)"
[75]: /wiki/NIL_(programming_language) "NIL (programming language)"
[76]: #cite_note-typestate-29
[77]: /w/index.php?title=Branding_pattern&action=edit&redlink=1 "Branding pattern (page does not exist)"
[78]: #cite_note-branding-patterns-30
[79]: /wiki/Wikipedia:Manual_of_Style/Dates_and_numbers#Chronological_items "Wikipedia:Manual of Style/Dates and numbers"
[80]: /wiki/Dr_Dobb%27s "Dr Dobb's"
[81]: /wiki/D_(programming_language) "D (programming language)"
[82]: /wiki/Nim_(programming_language) "Nim (programming language)"
[83]: #cite_note-31
[84]: #cite_note-32
[85]: #cite_note-33
[86]: #cite_note-34
[87]: /wiki/Hello,_world! "Hello, world!"
[88]: /wiki/Standard_output "Standard output"
[89]: /wiki/Factorial "Factorial"
[90]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[91]: /wiki/Iteration "Iteration"
[92]: /wiki/Iterator "Iterator"
[93]: /wiki/Concurrent_computing "Concurrent computing"
[94]: /wiki/Smart_pointer "Smart pointer"
[95]: /wiki/Tagged_union "Tagged union"
[96]: /wiki/Method_(computer_programming) "Method (computer programming)"