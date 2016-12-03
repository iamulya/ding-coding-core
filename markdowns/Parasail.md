**Parallel Specification and Implementation Language** (**ParaSail**) is an [object-oriented][0] [parallel programming language][1]. Its design and ongoing implementation is described in a blog[\[1\]][2] and on its official website.[\[2\]][3]

ParaSail uses a [pointer][4]-free programming model, where [objects][5] can grow and shrink, and value semantics are used for assignment. It has no global [garbage collected][6] heap. Instead, [region-based memory management][7] is used throughout. Types can be recursive, so long as the recursive components are declared _optional_. There are no global variables, no parameter aliasing, and all subexpressions of an expression can be evaluated in parallel. [Assertions][8], [preconditions][9], [postconditions][10], [class invariants][11], etc., are part of the standard syntax, using a [Hoare][12]-like notation. Any possible [race conditions][13] are detected at [compile time][14].

Initial design of ParaSail began in September 2009, by S. Tucker Taft.

Both an [interpreter][15] using the ParaSail [virtual machine][16], and an [LLVM][17]-based ParaSail [compiler][18] are available. [Work stealing][19] is used for scheduling ParaSail's light-weight [threads][20]. The latest version can be downloaded from the ParaSail website.[\[2\]][3]

## Goals

ParaSail goals:

## Description

The [syntax][21] of ParaSail is similar to [Modula][22], but with a class-and-interface-based object-oriented programming model more similar to [Java][23] or [C\#][24].

More recently, the parallel constructs of ParaSail have been adapted to other syntaxes, to produce [Java][23]-like, [Python][25]-like, and [Ada][26]-like [parallel languages][27], dubbed, respectively, Javallel, Parython, and Sparkel (named after the Ada subset [SPARK][28] on which it is based). Compilers and interpreters for these languages are included with the ParaSail implementation.[\[2\]][3]

## Examples

The following is a [Hello world program][29] in ParaSail:

The following is an interface to a basic map module:

Here is a possible implementation of this map module, using a binary tree:

Here is a simple test program for the BMap module:

## Articles

Articles on ParaSail have appeared in various forums:

## References

  
## External links

[0]: /wiki/Object-oriented_programming "Object-oriented programming"
[1]: /wiki/Parallel_computing#Parallel_programming_languages "Parallel computing"
[2]: #cite_note-1
[3]: #cite_note-ParaWebsite-2
[4]: /wiki/Pointer_(computer_programming) "Pointer (computer programming)"
[5]: /wiki/Object_(computer_science) "Object (computer science)"
[6]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[7]: /wiki/Region-based_memory_management "Region-based memory management"
[8]: /wiki/Assertion_(software_development) "Assertion (software development)"
[9]: /wiki/Precondition "Precondition"
[10]: /wiki/Postcondition "Postcondition"
[11]: /wiki/Class_invariant "Class invariant"
[12]: /wiki/Tony_Hoare "Tony Hoare"
[13]: /wiki/Race_condition "Race condition"
[14]: /wiki/Compile_time "Compile time"
[15]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[16]: /wiki/Virtual_machine "Virtual machine"
[17]: /wiki/LLVM "LLVM"
[18]: /wiki/Compiler "Compiler"
[19]: /wiki/Work_stealing "Work stealing"
[20]: /wiki/Thread_(computing) "Thread (computing)"
[21]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[22]: /wiki/Modula "Modula"
[23]: /wiki/Java_(programming_language) "Java (programming language)"
[24]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[25]: /wiki/Python_(programming_language) "Python (programming language)"
[26]: /wiki/Ada_(programming_language) "Ada (programming language)"
[27]: /wiki/Parallel_programming_language "Parallel programming language"
[28]: /wiki/SPARK_(programming_language) "SPARK (programming language)"
[29]: /wiki/Hello_world_program "Hello world program"