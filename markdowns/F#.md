**F\#** (pronounced **F sharp**) is a [strongly typed][0], [multi-paradigm][1] [programming language][2] that encompasses [functional][3], [imperative][4], and [object-oriented][5] programming techniques. F\# is most often used as a cross-platform [CLI][6] language, but can also be used to generate [JavaScript][7][\[6\]][8] and [GPU][9][\[7\]][10] code.

F\# is developed by the [F\# Software Foundation][11],[\[8\]][12] [Microsoft][13] and open contributors. An [open source][14], cross-platform compiler for F\# is available from the F\# Software Foundation.[\[9\]][15] F\# is also a fully supported language in [Visual Studio][16][\[10\]][17] and [Xamarin Studio][18].[\[11\]][19] Other tools supporting F\# development include [Mono][20], [MonoDevelop][21], [SharpDevelop][22], [MBrace][23] and [WebSharper][24].[\[12\]][25] Plugins supporting F\# exist for a number of widely used editors, most notably the _Ionide_ extension for [Atom][26] and [Visual Studio Code][27], as well as integrations for other editors such as [Vim][28], [Emacs][29] or [Sublime Text][30].

F\# originated as a .NET implementation of a core of the [OCaml][31] programming language,[\[2\]][32][\[3\]][33] and has also been influenced by [C\#][34], [Python][35], [Haskell][36],[\[4\]][37] [Scala][38] and [Erlang][39].

## History

## Versions

In the course of its development, the F\# language has gone through several versions:

## Language evolution

F\# uses an open development and engineering process. The language evolution process is managed by [Don Syme][40] from [Microsoft Research][41] as the [BDFL][42] for the language design in conjunction with the F\# Software Foundation. Earlier versions of the F\# language were designed by [Microsoft][13] and [Microsoft Research][41] using a closed development process.

F\# originates from [Microsoft Research][41], Cambridge, and the language was originally designed and implemented by [Don Syme][40],[\[2\]][32] according to whom the name F\# refers to either functional programming or [System F][43].[\[18\]][44] Andrew Kennedy contributed to the design of [units of measure][45].[\[2\]][32] The Visual F\# Tools for Visual Studio are developed by Microsoft.[\[2\]][32] The F\# Software Foundation developed the F\# open-source compiler and tools, incorporating the open-source compiler implementation provided by the Microsoft Visual F\# Tools team.[\[8\]][12]

## Language overview

## Functional programming

F\# is a [strongly typed][0] functional-first language that uses [type inference][46]. The programmer does not need to declare types---the compiler deduces types during compilation. F\# also allows explicit type annotations, and requires them in some situations.

F\# is an expression-based language using [eager evaluation][47]. Every statement in F\#, including `if` expressions, `try` expressions and loops, is a composable expression with a static type.[\[22\]][48] Functions and expressions that do not return any value have a return type of `unit`. F\# uses the `let` keyword for binding values to a name.[\[22\]][48] For example:

binds the value `7` to the name `x`.

New types are defined using the `type` keyword. For functional programming, F\# provides _tuple_, _record_, _discriminated union_, _list_ and _option_ types.[\[22\]][48] A _[tuple][49]_ represents a collection of _n_ values, where _n_ ≥ 0\. The value _n_ is called the [arity][50] of the tuple. A 3-tuple would be represented as `(A, B, C)`, where A, B and C are values of possibly different types. A tuple can be used to store values only when the number of values is known at design-time and stays constant throughout execution.

A _record_ is a type where the data members are named, as in `{ Name:string; Age:int }`. Records can be created as `{ Name="AB"; Age=42 }`. The `with` keyword is used to create a copy of a record, as in `{ r with Name="CD" }`, which creates a new record by copying `r` and changing the value of the `Name` field (assuming the record created in the last example was named `r`).

A [discriminated union][51] type is a [type-safe][52] version of [C unions][53]. For example,

Values of the union type can correspond to either union case. The types of the values carried by each union case is included in the definition of each case.

The _list_ type is an immutable [linked list][54] represented either using a `head::tail` notation (`::` is the [cons][55] operator) or a shorthand as `[item1; item2; item3]`. An empty list is written `[]`. The _option_ type is a discriminated union type with choices `Some(x)` or `None`. F\# types may be [generic][56], implemented as generic .NET types.

F\# supports [lambda functions][57] and [closures][58].[\[22\]][48] All functions in F\# are first class values and are immutable.[\[22\]][48] Functions can be [curried][59]. Being first-class values, functions can be passed as arguments to other functions. Like other functional programming languages, F\# allows [function composition][60] using the `>>` and `<<` operators.

F\# provides _sequence expressions_[\[23\]][61] that define a sequence `seq { ... }`, list `[ ... ]` or array `[| ... |]` through code that generates values. For example,

forms a sequence of squares of numbers from 0 to 14 by filtering out numbers from the range of numbers from 0 to 25\. Sequences are [generators][62] -- values are generated on-demand (i.e. are [lazily evaluated][63]) -- while lists and arrays are evaluated eagerly.

F\# uses [pattern matching][64] to bind values to names. Pattern matching is also used when accessing discriminated unions - the union is value matched against pattern rules and a rule is selected when a match succeeds. F\# also supports _Active Patterns_ as a form of extensible pattern matching.[\[24\]][65] It is used, for example, when multiple ways of matching on a type exist.[\[22\]][48]

F\# supports a general syntax for defining compositional computations called _computation expressions_. Sequence expressions, asynchronous computations and queries are particular kinds of computation expressions. Computation expressions are an implementation of the [monad][66] pattern.[\[23\]][61]

## Imperative programming

F\# support for imperative programming includes

Values and record fields can also be labelled as `mutable`. For example:

In addition, F\# supports access to all CLI types and objects such as those defined in the `System.Collections.Generic` namespace defining imperative data structures.

## Object programming

F\#, like other [CLI][6] languages, can use CLI types and objects through object programming.[\[22\]][48] F\# support for object programming in expressions includes:

Support for object programming in patterns includes

F\# object type definitions can be class, struct, interface, enum or delegate type definitions, corresponding to the definition forms found in the [C\#][34]. For example, here is a class with a constructor taking a name and age, and declaring two properties.

## Asynchronous programming

F\# supports asynchronous programming through _asynchronous workflows_.[\[25\]][67] An asynchronous workflow is defined as a sequence of commands inside an `async{ ... }`, as in

The `let!` indicates that the expression on the right (getting the response) should be done asynchronously but the flow should only continue when the result is available. In other words, from the point of view of the code block, it's as if getting the response is a blocking call, whereas from the point of view of the system, the thread won't be blocked and may be used to process other flows while the result needed for this one doesn't become available.

The async block may be invoked using the `Async.RunSynchronously` function. Multiple async blocks can be executed in parallel using the `Async.Parallel` function that takes a list of `async` objects (in the example, `asynctask` is an async object) and creates another async object to run the tasks in the lists in parallel. The resultant object is invoked using `Async.RunSynchronously`.[\[25\]][67] [Inversion of control][68] in F\# follows this pattern.[\[25\]][67]

## Parallel programming

Parallel programming is supported partly through the `Async.Parallel`, `Async.Start` and other operations that run asynchronous blocks in parallel.

Parallel programming is also supported through the `Array.Parallel` functional programming operators in the F\# standard library, direct use of the `System.Threading.Tasks` task programming model, the direct use of .NET thread pool and .NET threads and through dynamic translation of F\# code to alternative parallel execution engines such as [GPU][9][\[7\]][10] code.

## Units of measure

The F\# type system supports [units of measure][69] checking for numbers.[\[26\]][70] The units of measure feature integrates with F\# type inference to require minimal type annotations in user code.[\[27\]][71]

## Metaprogramming

F\# allows some forms of [syntax customization][72] to support embedding custom [domain-specific languages][73] within the F\# language itself, particularly through computation expressions.[\[22\]][48]

F\# includes a feature for run-time meta-programming called quotations.[\[28\]][74] A quotation expression evaluates to an abstract syntax representation of F\# expressions. A definition labelled with the `[<ReflectedDefinition>]` attribute can also be accessed in its quotation form. F\# quotations are used for various purposes including to compile F\# code to [JavaScript][7][\[6\]][8] and [GPU][9][\[7\]][10] code.

## Information-rich programming

F\# 3.0 introduced a form of compile-time meta-programming through statically extensible type generation called F\# type providers.[\[29\]][75] F\# type providers allow the F\# compiler and tools to be extended with components that provide type information to the compiler on-demand at compile time. F\# type providers have been used to give strongly typed access to connected information sources in a scalable way, including to the [Freebase][76] knowledge graph.[\[30\]][77]

In F\# 3.0 the F\# quotation and computation expression features are combined to implement [LINQ][78] queries.[\[31\]][79] For example:

The combination of type providers, queries and strongly typed functional programming is known as _information rich programming_.[\[32\]][80]

## Agent programming

F\# supports a variation of the [Actor][81] programming model through the in-memory implementation of lightweight asynchronous agents. For example, the following code defines an agent and posts 2 messages:

## Development tools

## Application areas

F\# is a [general purpose programming language][82].

## Web programming

F\# is a central part of the [WebSharper][24] framework where F\# code is executed as a .NET code on the server and as [JavaScript][7] code on the client-side.[\[33\]][83]

## Analytical programming

Among others, F\# is used for quantitative finance programming,[\[34\]][84] energy trading and portfolio optimization,[\[35\]][85] machine learning,[\[36\]][86] business intelligence[\[37\]][87] and social gaming on [Facebook][88].[\[38\]][89]

In recent years F\# has been positioned as an optimized alternative to C\#. F\#'s scripting ability and IL compatibility with all Microsoft products have made it popular among developers. Many developers are creating solutions based on F\# and use C\# WCF Services.\[_[clarification needed][90]_\]\[_[citation needed][91]_\]\[_[who?][92]_\]

## Scripting

F\# is often used as a scripting language, mainly for desktop [REPL][93] scripting.[\[39\]][94]

## Open-source community

The F\# [open-source][14] community includes the F\# Software Foundation[\[8\]][12] and the F\# Open Source Group at [GitHub][95].[\[9\]][15]

## Compatibility

F\# features a legacy "ML compatibility mode" that can directly compile programs written in a large subset of OCaml (roughly, with no functors, objects, polymorphic variants and other additions).

## Examples

A few small samples follow:

A Person class with a constructor taking a name and age and two properties.

A simple example that is often used to demonstrate the syntax of functional languages is the [factorial function][96] for non-negative 32-bit integers, here shown in F\#:

Iteration examples:

Fibonacci examples:

A sample Windows Forms program:

Asynchronous parallel programming sample (parallel CPU and I/O tasks):

## See also

## Notes

## References

## External links

[0]: /wiki/Strongly_typed_programming_language "Strongly typed programming language"
[1]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Functional_programming "Functional programming"
[4]: /wiki/Imperative_programming "Imperative programming"
[5]: /wiki/Object-oriented_programming "Object-oriented programming"
[6]: /wiki/Common_Language_Infrastructure "Common Language Infrastructure"
[7]: /wiki/JavaScript "JavaScript"
[8]: #cite_note-js-6
[9]: /wiki/Graphics_processing_unit "Graphics processing unit"
[10]: #cite_note-gpgpu-7
[11]: /wiki/F_Sharp_Software_Foundation "F Sharp Software Foundation"
[12]: #cite_note-fsharporg-8
[13]: /wiki/Microsoft "Microsoft"
[14]: /wiki/Open_source "Open source"
[15]: #cite_note-fsharposg-9
[16]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[17]: #cite_note-10
[18]: /wiki/Xamarin "Xamarin"
[19]: #cite_note-11
[20]: /wiki/Mono_(software) "Mono (software)"
[21]: /wiki/MonoDevelop "MonoDevelop"
[22]: /wiki/SharpDevelop "SharpDevelop"
[23]: /wiki/MBrace "MBrace"
[24]: /wiki/WebSharper "WebSharper"
[25]: #cite_note-12
[26]: /wiki/Atom_(text_editor) "Atom (text editor)"
[27]: /wiki/Visual_Studio_Code "Visual Studio Code"
[28]: /wiki/Vim_(text_editor) "Vim (text editor)"
[29]: /wiki/Emacs "Emacs"
[30]: /wiki/Sublime_Text "Sublime Text"
[31]: /wiki/OCaml_(programming_language) "OCaml (programming language)"
[32]: #cite_note-historyMSR-2
[33]: #cite_note-ocamlOrigins-3
[34]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[35]: /wiki/Python_(programming_language) "Python (programming language)"
[36]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[37]: #cite_note-haskellInfluence-4
[38]: /wiki/Scala_(programming_language) "Scala (programming language)"
[39]: /wiki/Erlang_(programming_language) "Erlang (programming language)"
[40]: /wiki/Don_Syme "Don Syme"
[41]: /wiki/Microsoft_Research "Microsoft Research"
[42]: /wiki/Benevolent_dictator_for_life "Benevolent dictator for life"
[43]: /wiki/System_F "System F"
[44]: #cite_note-18
[45]: /wiki/Units_of_measure "Units of measure"
[46]: /wiki/Type_inference "Type inference"
[47]: /wiki/Eager_evaluation "Eager evaluation"
[48]: #cite_note-overview-22
[49]: /wiki/N-tuple "N-tuple"
[50]: /wiki/Arity "Arity"
[51]: /wiki/Tagged_union "Tagged union"
[52]: /wiki/Type-safe "Type-safe"
[53]: /wiki/Union_(computer_science) "Union (computer science)"
[54]: /wiki/Linked_list "Linked list"
[55]: /wiki/Cons "Cons"
[56]: /wiki/Generic_programming "Generic programming"
[57]: /wiki/Lambda_calculus "Lambda calculus"
[58]: /wiki/Closure_(computing) "Closure (computing)"
[59]: /wiki/Curry_function "Curry function"
[60]: /wiki/Function_composition "Function composition"
[61]: #cite_note-seq-23
[62]: /wiki/Generator_(computer_programming) "Generator (computer programming)"
[63]: /wiki/Lazy_evaluation "Lazy evaluation"
[64]: /wiki/Pattern_matching "Pattern matching"
[65]: #cite_note-activePatterns-24
[66]: /wiki/Monad_(functional_programming) "Monad (functional programming)"
[67]: #cite_note-aw-25
[68]: /wiki/Inversion_of_control "Inversion of control"
[69]: /wiki/Units_of_measurement "Units of measurement"
[70]: #cite_note-units-msdn-26
[71]: #cite_note-units-27
[72]: /wiki/Metaprogramming "Metaprogramming"
[73]: /wiki/Domain-specific_language "Domain-specific language"
[74]: #cite_note-quotations-28
[75]: #cite_note-typeproviders-29
[76]: /wiki/Freebase "Freebase"
[77]: #cite_note-30
[78]: /wiki/LINQ "LINQ"
[79]: #cite_note-queries-31
[80]: #cite_note-irp-32
[81]: /wiki/Actor_model "Actor model"
[82]: /wiki/General-purpose_programming_language "General-purpose programming language"
[83]: #cite_note-websharper-33
[84]: #cite_note-34
[85]: #cite_note-35
[86]: #cite_note-36
[87]: #cite_note-37
[88]: /wiki/Facebook "Facebook"
[89]: #cite_note-38
[90]: /wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify"
[91]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[92]: /wiki/Wikipedia:Manual_of_Style/Words_to_watch#Unsupported_attributions "Wikipedia:Manual of Style/Words to watch"
[93]: /wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop"
[94]: #cite_note-39
[95]: /wiki/GitHub "GitHub"
[96]: /wiki/Factorial_function "Factorial function"