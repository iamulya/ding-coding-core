The **D programming language** is an [object-oriented][0], [imperative][1], [multi-paradigm][2] [system programming language][3] created by [Walter Bright][4] of [Digital Mars][5] and released in 2001\. Bright was joined in the design and development effort in 2007 by [Andrei Alexandrescu][6]. Though it originated as a re-engineering of [C++][7], D is a distinct language, having redesigned some core C++ features while also taking inspiration from other languages, notably [Java][8], [Python][9], [Ruby][10], [C\#][11], and [Eiffel][12].

D's design goals attempt to combine the performance and safety of [compiled languages][13] with the [expressive power][14] of modern [dynamic languages][15]. Idiomatic D code is commonly as fast as equivalent C++ code, while being shorter\[_[citation needed][16]_\] and [memory-safe][17].[\[9\]][18]

[Type inference][19], [automatic memory management][20] and [syntactic sugar][21] for common types allow faster [development][22], while [bounds checking][23], [design by contract][24] features and a [concurrency][25]-aware type system help reduce the occurrence of [bugs][26].[\[10\]][27]

## Features

D is designed with lessons learned from practical C++ usage rather than from a purely theoretical perspective. Although it uses many [C][28] and C++ concepts it also discards some, and is as such not compatible with C and C++ source code. D has, however, been constrained in its design by the rule that any code that is legal in both C and D should behave in the same way. It adds to the functionality of C++ by also implementing [design by contract][24], [unit testing][29], true [modules][30], [garbage collection][31], [first class][32] [arrays][33], [associative arrays][34], [dynamic arrays][35], [array slicing][36], [nested functions][37], [inner classes][38], [closures][39], [anonymous functions][40], [compile time function execution][41], [lazy evaluation][42] and has a re-engineered [template][43] syntax. D retains C++'s ability to perform [low-level coding][44], and adds to it with support for an integrated [inline][45] [assembler][46]. C++ [multiple inheritance][47] is replaced by Java-style [single inheritance][47] with [interfaces][48] and [mixins][49]. On the other hand, D's declaration, statement and expression [syntax][50] closely matches that of C++.

The [inline assembler][45] typifies the differences between D and application languages like [Java][8] and [C\#][11]. An inline assembler lets programmers enter machine-specific [assembly][46] code within standard D code, a method often used by system programmers to access the low-level features of the [processor][51] needed to run programs that interface directly with the underlying [hardware][52], such as [operating systems][53] and [device drivers][54].

D has built-in support for documentation comments, allowing automatic [documentation generation][55].

## Programming paradigms

D supports five main [programming paradigms][56] -- [imperative][1], [object-oriented][57], [metaprogramming][58], [functional][59] and [concurrent][60] ([actor model][61]).

## Imperative

Imperative programming in D is almost identical to that in C. Functions, data, statements, declarations and expressions work just as they do in C, and the C runtime library may be accessed directly. On the other hand, some notable differences between D and C in the area of imperative programming include D's [`foreach`][62] loop construct, which allows looping over a collection, and [nested functions][37], which are functions that are declared inside of another and may access the enclosing function's [local variables][63].

## Object-oriented

Object-oriented programming in D is based on a single inheritance hierarchy, with all classes derived from class Object. D does not support multiple inheritance; instead, it uses Java-style [interfaces][64], which are comparable to C++'s pure abstract classes, and [mixins][49], which separates common functionality from the inheritance hierarchy. D also allows the defining of static and final (non-virtual) methods in interfaces.

## Metaprogramming

Metaprogramming is supported by a combination of templates, compile time function execution, [tuples][65], and string mixins. The following examples demonstrate some of D's compile-time features.

Templates in D can be written in a more imperative style compared to the C++ functional style for templates. This is a regular function that calculates the [factorial][66] of a number:

Here, the use of `static if`, D's compile-time conditional construct, is demonstrated to construct a template that performs the same calculation using code that is similar to that of the function above:

In the following two examples, the template and function defined above are used to compute factorials. The types of constants need not be specified explicitly as the compiler [infers their types][19] from the right-hand sides of assignments:

This is an example of [compile time function execution][41]. Ordinary functions may be used in constant, compile-time expressions provided they meet certain criteria:

The `std.string.format` function performs [`printf`][67]-like data formatting (also at compile-time, through [CTFE][41]), and the "msg" [pragma][68] displays the result at compile time:

String mixins, combined with compile-time function execution, allow generating D code using string operations at compile time. This can be used to parse [domain-specific languages][69] to D code, which will be compiled as part of the program:

## Functional

D supports [functional programming][59] features such as [function literals][70], [closures][39], recursively-immutable objects and the use of [higher-order functions][71]. There are two syntaxes for anonymous functions, including a multiple-statement form and a "shorthand" single-expression notation:[\[11\]][72]

There are two built-in types for function literals, `function`, which is simply a pointer to a stack-allocated function, and `delegate`, which also includes a pointer to the surrounding environment. Type inference may be used with an anonymous function, in which case the compiler creates a `delegate` unless it can prove that an environment pointer is not necessary. Likewise, to implement a closure, the compiler places enclosed local variables on the heap only if necessary (for example, if a closure is returned by another function, and exits that function's scope). When using type inference, the compiler will also add attributes such as `pure` and `nothrow` to a function's type, if it can prove that they apply.

Other functional features such as [currying][73] and common higher-order functions such as [map][74], [filter][75], and [reduce][76] are available through the standard library modules `std.functional` and `std.algorithm`.

Alternatively, the above function compositions can be expressed using [Uniform Function Call Syntax][77] (UFCS) for more natural left-to-right reading:

## Parallel

## Concurrent

## Memory management

Memory is usually managed with [garbage collection][31], but specific objects may be finalized immediately when they go out of scope. Explicit memory management is possible using the [overloaded operators][78] `new` and `delete`, and by simply calling [C][28]'s [malloc and free][79] directly. Garbage collection can be controlled: programmers may add and exclude memory ranges from being observed by the collector, can disable and enable the collector and force either a generational or full collection cycle.[\[12\]][80] The manual gives many examples of how to implement different highly optimized memory management schemes for when garbage collection is inadequate in a program.[\[13\]][81]

## SafeD

SafeD[\[14\]][82] is the name given to the subset of D that can be guaranteed to be memory safe (no writes to memory that were not allocated or that have already been recycled). Functions marked @safe are checked at compile time to ensure that they do not use any features that could result in corruption of memory, such as pointer arithmetic and unchecked casts, and any other functions called must also be marked as @safe or @trusted. Functions can be marked @trusted for the cases where the compiler cannot distinguish between safe use of a feature that is disabled in SafeD and a potential case of memory corruption.

## Interaction with other systems

[C][28]'s [application binary interface (ABI)][83] is supported as well as all of C's fundamental and derived types, enabling direct access to existing C code and libraries. D [bindings][84] are available for many popular C libraries. Additionally, C's standard [library][85] is a part of standard D.

Because C++ does not have a single standard ABI, D can only fully access C++ code that is written to the C ABI. The D parser understands an extern (C++) calling convention for limited linking to C++ objects.

On Microsoft Windows, D can access [Component Object Model][86] (COM) code.

## History

[Walter Bright][4] decided to start working on a new language in 1999\. D was first released in December 2001,[\[1\]][87] and reached version 1.0 in January 2007\.[\[15\]][88] The first version of the language (D1) concentrated on the imperative, object oriented and metaprogramming paradigms,[\[16\]][89] similar to C++.

Dissatisfied with Phobos, D's official [runtime][90] and [standard library][91], members of the D community created an alternative runtime and standard library named Tango. The first public Tango announcement came within days of D 1.0's release.[\[17\]][92] Tango adopted a different programming style, embracing OOP and high modularity. Being a community-led project, Tango was more open to contributions, which allowed it to progress faster than the official standard library. At that time, Tango and Phobos were incompatible due to different runtime support APIs (the garbage collector, threading support, etc.). This made it impossible to use both libraries in the same project. The existence of two libraries, both widely in use, has led to significant dispute due to some packages using Phobos and others using Tango.[\[18\]][93]

In June 2007, the first version of D2 was released.[\[2\]][94] The beginning of D2's development signalled the stabilization of D1; the first version of the language has been placed in maintenance, only receiving corrections and implementation bugfixes. D2 was to introduce [breaking changes][95] to the language, beginning with its first experimental [const system][96]. D2 later added numerous other language features, such as [closures][39], [purity][97], and support for the functional and concurrent programming paradigms. D2 also solved standard library problems by separating the runtime from the standard library. The completion of a D2 Tango port was announced in February 2012\.[\[19\]][98]

The release of [Andrei Alexandrescu][6]'s book _The D Programming Language_ on June 12, 2010 marked the stabilization of D2, which today is commonly referred to as just "D".

In January 2011, D development moved from a bugtracker / patch-submission basis to [GitHub][99]. This has led to a significant increase in contributions to the compiler, runtime and standard library.[\[20\]][100]

In December 2011, Andrei Alexandrescu announced that D1, the first version of the language, would be discontinued on December 31, 2012\.[\[21\]][101] The final D1 release, D v1.076, was on December 31, 2012\.[\[22\]][102]

## Implementations

Most current D implementations [compile][103] directly into [machine code][104] for efficient execution.

## Development tools

Editors and [integrated development environments][105] (IDEs) supporting D include [Eclipse][106], [Microsoft Visual Studio][107], [SlickEdit][108], [Emacs][109], [vim][110], [SciTE][111], [Smultron][112], [TextMate][113], [MonoDevelop][114], Zeus,[\[31\]][115] and [Geany][116] among others.[\[32\]][117]

[Open source][118] D IDEs for [Windows][119] exist, some written in D, such as Poseidon,[\[39\]][120] D-IDE,[\[40\]][121] and Entice Designer.[\[41\]][122]

D applications can be debugged using any C/C++ debugger, like [GDB][123] or [WinDbg][124], although support for various D-specific language features is extremely limited. On Windows, D programs can be debugged using [Ddbg][125], or Microsoft debugging tools (WinDBG and Visual Studio), after having converted the debug information using [cv2pdb][126]. The [ZeroBUGS][127] debugger for Linux has experimental support for the D language. Ddbg can be used with various IDEs or from the command line; ZeroBUGS has its own [graphical user interface][128] (GUI).

## Examples

## Example 1

This example program prints its command line arguments. The `main` function is the entry point of a D program, and `args` is an array of strings representing the command line arguments. A `string` in D is an array of characters, represented by `char[]` in D1, or `immutable(char)[]` in D2\.

The `foreach` statement can iterate over any collection. In this case, it is producing a sequence of indexes (`i`) and values (`arg`) from the array `args`. The index `i` and the value `arg` have their types inferred from the type of the array `args`.

## Example 2

The following shows several D capabilities and D design trade-offs in a very short program. It iterates over the lines of a text file named `words.txt`, which contains a different word on each line, and prints all the words that are anagrams of other words.

## See also

## References

## Further reading

## External links

[0]: /wiki/Object-oriented_programming "Object-oriented programming"
[1]: /wiki/Imperative_programming "Imperative programming"
[2]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[3]: /wiki/System_programming_language "System programming language"
[4]: /wiki/Walter_Bright "Walter Bright"
[5]: /wiki/Digital_Mars "Digital Mars"
[6]: /wiki/Andrei_Alexandrescu "Andrei Alexandrescu"
[7]: /wiki/C%2B%2B "C++"
[8]: /wiki/Java_(programming_language) "Java (programming language)"
[9]: /wiki/Python_(programming_language) "Python (programming language)"
[10]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[11]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[12]: /wiki/Eiffel_(programming_language) "Eiffel (programming language)"
[13]: /wiki/Compiled_language "Compiled language"
[14]: /wiki/Expressive_power_(computer_science) "Expressive power (computer science)"
[15]: /wiki/Dynamic_programming_language "Dynamic programming language"
[16]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[17]: /wiki/Memory_safety "Memory safety"
[18]: #cite_note-9
[19]: /wiki/Type_inference "Type inference"
[20]: /wiki/Automatic_memory_management "Automatic memory management"
[21]: /wiki/Syntactic_sugar "Syntactic sugar"
[22]: /wiki/Software_development "Software development"
[23]: /wiki/Bounds_checking "Bounds checking"
[24]: /wiki/Design_by_contract "Design by contract"
[25]: /wiki/Concurrency_(computer_science) "Concurrency (computer science)"
[26]: /wiki/Software_bug "Software bug"
[27]: #cite_note-10
[28]: /wiki/C_(programming_language) "C (programming language)"
[29]: /wiki/Unit_test "Unit test"
[30]: /wiki/Module_(programming) "Module (programming)"
[31]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[32]: /wiki/First-class_object "First-class object"
[33]: /wiki/Array_data_type "Array data type"
[34]: /wiki/Associative_array "Associative array"
[35]: /wiki/Dynamic_array "Dynamic array"
[36]: /wiki/Array_slicing "Array slicing"
[37]: /wiki/Nested_function "Nested function"
[38]: /wiki/Inner_class "Inner class"
[39]: /wiki/Closure_(computer_science) "Closure (computer science)"
[40]: /wiki/Anonymous_functions "Anonymous functions"
[41]: /wiki/Compile_time_function_execution "Compile time function execution"
[42]: /wiki/Lazy_evaluation "Lazy evaluation"
[43]: /wiki/Generic_programming#Templates_in_C.2B.2B "Generic programming"
[44]: /wiki/Low-level_programming_language "Low-level programming language"
[45]: /wiki/Inline_assembler "Inline assembler"
[46]: /wiki/Assembly_language "Assembly language"
[47]: /wiki/Multiple_inheritance "Multiple inheritance"
[48]: /wiki/Interface_(computer_science) "Interface (computer science)"
[49]: /wiki/Mixin "Mixin"
[50]: /wiki/Syntax "Syntax"
[51]: /wiki/Central_processing_unit "Central processing unit"
[52]: /wiki/Computer_hardware "Computer hardware"
[53]: /wiki/Operating_system "Operating system"
[54]: /wiki/Device_driver "Device driver"
[55]: /wiki/Documentation_generator "Documentation generator"
[56]: /wiki/Programming_paradigm "Programming paradigm"
[57]: /wiki/Object-oriented "Object-oriented"
[58]: /wiki/Metaprogramming "Metaprogramming"
[59]: /wiki/Functional_programming "Functional programming"
[60]: /wiki/Concurrent_programming_language "Concurrent programming language"
[61]: /wiki/Actor_model "Actor model"
[62]: /wiki/Foreach "Foreach"
[63]: /wiki/Local_variable "Local variable"
[64]: /wiki/Interface_(Java) "Interface (Java)"
[65]: /wiki/Tuple "Tuple"
[66]: /wiki/Factorial "Factorial"
[67]: /wiki/Printf "Printf"
[68]: /wiki/Directive_(programming) "Directive (programming)"
[69]: /wiki/Domain-specific_language "Domain-specific language"
[70]: /wiki/Anonymous_function "Anonymous function"
[71]: /wiki/Higher-order_function "Higher-order function"
[72]: #cite_note-11
[73]: /wiki/Currying "Currying"
[74]: /wiki/Map_(higher-order_function) "Map (higher-order function)"
[75]: /wiki/Filter_(higher-order_function) "Filter (higher-order function)"
[76]: /wiki/Fold_(higher-order_function) "Fold (higher-order function)"
[77]: /wiki/Uniform_Function_Call_Syntax "Uniform Function Call Syntax"
[78]: /wiki/Operator_overloading "Operator overloading"
[79]: /wiki/Malloc "Malloc"
[80]: #cite_note-12
[81]: #cite_note-13
[82]: #cite_note-SafeD-14
[83]: /wiki/Application_binary_interface "Application binary interface"
[84]: /wiki/Language_binding "Language binding"
[85]: /wiki/Library_(computer_science) "Library (computer science)"
[86]: /wiki/Component_Object_Model "Component Object Model"
[87]: #cite_note-D1_changelog1-1
[88]: #cite_note-D1_changelog2-15
[89]: #cite_note-16
[90]: /wiki/Runtime_library "Runtime library"
[91]: /wiki/Standard_library "Standard library"
[92]: #cite_note-17
[93]: #cite_note-18
[94]: #cite_note-D2_changelog-2
[95]: /wiki/Breaking_changes "Breaking changes"
[96]: /wiki/Const-correctness "Const-correctness"
[97]: /wiki/Pure_function "Pure function"
[98]: #cite_note-19
[99]: /wiki/GitHub "GitHub"
[100]: #cite_note-20
[101]: #cite_note-21
[102]: #cite_note-D1_changelog-22
[103]: /wiki/Compiler "Compiler"
[104]: /wiki/Machine_code "Machine code"
[105]: /wiki/Integrated_development_environment "Integrated development environment"
[106]: /wiki/Eclipse_(software) "Eclipse (software)"
[107]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[108]: /wiki/SlickEdit "SlickEdit"
[109]: /wiki/Emacs "Emacs"
[110]: /wiki/Vim_(text_editor) "Vim (text editor)"
[111]: /wiki/SciTE "SciTE"
[112]: /wiki/Smultron "Smultron"
[113]: /wiki/TextMate "TextMate"
[114]: /wiki/MonoDevelop "MonoDevelop"
[115]: #cite_note-31
[116]: /wiki/Geany "Geany"
[117]: #cite_note-32
[118]: /wiki/Open_source "Open source"
[119]: /wiki/Windows "Windows"
[120]: #cite_note-39
[121]: #cite_note-40
[122]: #cite_note-41
[123]: /wiki/GNU_Debugger "GNU Debugger"
[124]: /wiki/WinDbg "WinDbg"
[125]: http://ddbg.mainia.de/
[126]: http://dsource.org/projects/cv2pdb
[127]: http://zerobugs.codeplex.com/
[128]: /wiki/Graphical_user_interface "Graphical user interface"