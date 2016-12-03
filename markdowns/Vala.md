**Vala** is an [object-oriented][0] [programming language][1] with a [self-hosting][2] [compiler][3] that generates [C][4] code and uses the [GObject][5] system.

Vala is [syntactically][6] similar to [C\#][7] and includes several features such as: [anonymous functions][8], [signals][9], properties, [generics][10], [assisted memory management][11], [exception handling][12], [type inference][13], and [foreach][14] statements.[\[2\]][15] Its developers Jürg Billeter and Raffaele Sandrini aim to bring these features to the plain [C][4] [runtime][16] with little overhead and no special [runtime][16] support by targeting the [GObject][5] [object][0] system. Rather than compiling directly to machine code or assembly language, it compiles to a lower level [intermediate language][17]. It [source-to-source compiles][18] to C, which is then compiled with a C compiler for a given platform, such as [GCC][19].[\[3\]][20]

For memory management, the GObject system provides [reference counting][21]. In C, a programmer must manually manage adding and removing references, but in Vala, managing such reference counts is automated if a programmer uses the language's built-in reference types rather than plain pointers.

Using functionality from native code libraries requires writing vapi files, defining the library interfacing. Writing these interface definitions is well-documented for C libraries, especially when based on GObject. However, C++ libraries are not supported. Vapi files are provided for a large portion of the [GNOME][22] platform, including [GTK+][23].

Vala was conceived by Jürg Billeter and was implemented by him and Raffaele Sandrini, finishing a [self-hosting][2] compiler in May 2006\.[\[4\]][24]

## Code example

A simple "[Hello, World!][25]" Vala program:

A more complex version, showing some of Vala's [object-oriented][0] features:

An example using [GTK+][23] to create a [GUI][26] "[Hello, World!][27]" program (see also [GTK+ hello world][28]):

The last example needs an extra parameter to compile on GNOME 3 platforms:

This is the converted C code:

## Text editor / IDE support

There are various projects in various states of stability in order to provide syntax-highlighting and other text editor/IDE support for Vala:

## See also

## References

## External links

[0]: /wiki/Object-oriented_programming "Object-oriented programming"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Self-hosting "Self-hosting"
[3]: /wiki/Compiler "Compiler"
[4]: /wiki/C_(programming_language) "C (programming language)"
[5]: /wiki/GObject "GObject"
[6]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[7]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[8]: /wiki/Anonymous_functions "Anonymous functions"
[9]: /wiki/Observer_pattern "Observer pattern"
[10]: /wiki/Generic_programming "Generic programming"
[11]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[12]: /wiki/Exception_handling "Exception handling"
[13]: /wiki/Type_inference "Type inference"
[14]: /wiki/Foreach_loop "Foreach loop"
[15]: #cite_note-2
[16]: /wiki/Runtime_system "Runtime system"
[17]: /wiki/Intermediate_language "Intermediate language"
[18]: /wiki/Source-to-source_compiler "Source-to-source compiler"
[19]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[20]: #cite_note-lwn-3
[21]: /wiki/Reference_counting "Reference counting"
[22]: /wiki/GNOME "GNOME"
[23]: /wiki/GTK%2B "GTK+"
[24]: #cite_note-multi-4
[25]: /wiki/%22Hello,_World!%22_program ""Hello, World!" program"
[26]: /wiki/Graphical_user_interface "Graphical user interface"
[27]: /wiki/Hello_world_program "Hello world program"
[28]: /wiki/GTK%2B#Example "GTK+"