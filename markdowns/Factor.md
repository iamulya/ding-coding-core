**Factor** is a [stack-oriented][0] [programming language][1] created by Slava Pestov. Factor is [dynamically typed][2] and has [automatic memory management][3], as well as powerful metaprogramming features. The language has a single implementation featuring a self-hosted [optimizing compiler][4] and an [interactive development environment][5]. The Factor distribution includes a large [standard library][6].

## History

Slava Pestov created Factor in 2003 as a [scripting language][7] for a [video game][8].[\[3\]][9] The initial implementation, now referred to as JFactor, was implemented in [Java][10] and ran on the [Java Virtual Machine][11]. Though the early language resembled modern Factor superficially in terms of [syntax][12], the modern language is very different in practical terms and the current implementation is much faster.

The language has changed significantly over time. Originally, Factor programs centered on manipulating Java objects with Java's [reflection][13] capabilities. From the beginning, the design philosophy has been to modify the language to suit programs written in it. As the Factor implementation and standard libraries grew more detailed, the need for certain language features became clear, and they were added. JFactor did not have an [object system][14] where you could define your own [classes][15], and early versions of native Factor were the same; the language was similar to [Scheme][16] in this way. Today, the object system is a central part of Factor. Other important language features such as [tuple][17] classes, combinator inlining, [macros][18], user-defined [parsing][19] words and the modern vocabulary system were only added in a piecemeal fashion as their utility became clear.

The [foreign function interface][20] was present from very early versions to Factor, and an analogous system existed in JFactor. This was chosen over creating a plugin to the [C][21] part of the implementation for each external [library][22] that Factor should communicate with, and has the benefit of being more [declarative][23], faster to compile and easier to write.

The Java implementation initially consisted of just an [interpreter][24], but a compiler to [Java bytecode][25] was later added. This compiler only worked on certain procedures. The Java version of Factor was replaced by a version written in C and Factor. Initially, this consisted of just an interpreter, but the interpreter was replaced by two compilers, used in different situations. Over time, the Factor implementation has grown significantly faster.[\[4\]][26]

## Programming paradigm

Factor is a [dynamically typed][2], [functional][27] and [object-oriented][28] [programming language][1]. Code is structured around small procedures, called words. In typical code, these are 1-3 lines long, and a procedure more than 7 lines long is very rare. Something that would idiomatically be expressed with one procedure in another programming language would be written as several words in Factor.[\[5\]][29]

Each word takes a fixed number of arguments and has a fixed number of return values. Arguments to words are passed on a [data stack][30], using [reverse Polish notation][31]. The stack is used just to organize calls to words, and not as a datastructure. The stack in Factor is used in a similar way to the stack in [Forth][32]; for this, they are both considered [stack languages][0]. For example, below is a snippet of code that prints out "hello world" to the current output stream:

`print` is a word in the `io` vocabulary that takes a string from the stack and returns nothing. It prints the string to the current output stream (by default, the terminal or the graphical listener).[\[5\]][29]

Not all data has to be passed around only with the stack. [Lexically scoped][33] local variables let you store and access [temporaries][34] used within a procedure. [Dynamically scoped][35] variables are used to pass things between procedure calls without using the stack. For example, the current input and output streams are stored in dynamically scoped variables.[\[5\]][29]

Factor emphasizes flexibility and the ability to extend the language.[\[5\]][29] There is a system for macros, as well as for arbitrary extension of Factor syntax. Factor's syntax is often extended to allow for new types of word definitions and new types of [literals][36] for data structures. It is also used in the [XML][37] library to provide literal syntax for generating XML. For example, the following word takes a string and produces an XML document object which is an HTML document emphasizing the string:

The word `dup` duplicates the top item on the stack. The `<->` stands for filling in that part of the XML document with an item from the stack.

## Implementation and libraries

Factor includes a large standard library, written entirely in the language. These include

A [foreign function interface][20] is built into Factor, allowing for communication with [C][21], [Objective-C][38] and [Fortran][39] programs. There is also support for executing and communicating with shaders written in [GLSL][40].[\[5\]][29][\[11\]][41]

Factor is implemented in Factor and [C++][42]. It was originally bootstrapped from an earlier Java implementation. Today, the parser and the optimizing compiler are written in the language. Certain basic parts of the language are implemented in C++ such as the garbage collector and certain primitives.

Factor uses an [image][43]-based model, analogous to many [Smalltalk][44] implementations, where compiled code and data are stored in an image.[\[12\]][45] To compile a program, the program is loaded into an image and the image is saved. A special tool assists in the process of creating a minimal image to run a particular program, packaging the result into something that can be deployed as a standalone application.[\[5\]][29][\[13\]][46]

The Factor compiler implements many advanced optimizations and has been used as a target for research in new optimization techniques.[\[5\]][29][\[14\]][47]

## References

## External links

[0]: /wiki/Stack-oriented_programming_language "Stack-oriented programming language"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Dynamically_typed "Dynamically typed"
[3]: /wiki/Automatic_memory_management "Automatic memory management"
[4]: /wiki/Compiler_optimization "Compiler optimization"
[5]: /wiki/Integrated_development_environment "Integrated development environment"
[6]: /wiki/Standard_library "Standard library"
[7]: /wiki/Scripting_language "Scripting language"
[8]: /wiki/Video_game "Video game"
[9]: #cite_note-3
[10]: /wiki/Java_(programming_language) "Java (programming language)"
[11]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[12]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[13]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[14]: /wiki/Object_system "Object system"
[15]: /wiki/Class_(computer_science) "Class (computer science)"
[16]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[17]: /wiki/Tuple "Tuple"
[18]: /wiki/Macro_(computer_science) "Macro (computer science)"
[19]: /wiki/Parsing "Parsing"
[20]: /wiki/Foreign_function_interface "Foreign function interface"
[21]: /wiki/C_(programming_language) "C (programming language)"
[22]: /wiki/Library_(computing) "Library (computing)"
[23]: /wiki/Declarative_programming "Declarative programming"
[24]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[25]: /wiki/Java_bytecode "Java bytecode"
[26]: #cite_note-4
[27]: /wiki/Functional_programming "Functional programming"
[28]: /wiki/Object-oriented_programming "Object-oriented programming"
[29]: #cite_note-dls-5
[30]: /wiki/Stack_(data_structure) "Stack (data structure)"
[31]: /wiki/Reverse_Polish_notation "Reverse Polish notation"
[32]: /wiki/Forth_(programming_language) "Forth (programming language)"
[33]: /wiki/Lexical_scoping "Lexical scoping"
[34]: /wiki/Temporary_variable "Temporary variable"
[35]: /wiki/Dynamic_scoping "Dynamic scoping"
[36]: /wiki/Literal_(computer_science) "Literal (computer science)"
[37]: /wiki/XML "XML"
[38]: /wiki/Objective-C "Objective-C"
[39]: /wiki/Fortran "Fortran"
[40]: /wiki/GLSL "GLSL"
[41]: #cite_note-11
[42]: /wiki/C%2B%2B "C++"
[43]: /wiki/System_image "System image"
[44]: /wiki/Smalltalk "Smalltalk"
[45]: #cite_note-12
[46]: #cite_note-13
[47]: #cite_note-14