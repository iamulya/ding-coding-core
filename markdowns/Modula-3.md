**Modula-3** is a [programming language][0] conceived as a successor to an upgraded version of [Modula-2][1] known as [Modula-2+][2]. While it has been influential in research circles (influencing the designs of languages such as [Java][3], [C\#][4], and [Python][5]) it has not been adopted widely in industry. It was designed by [Luca Cardelli][6], James Donahue, Lucille Glassman, Mick Jordan (before at the [Olivetti][7] Software Technology Laboratory), Bill Kalsow and Greg Nelson at the Digital Equipment Corporation ([DEC][8]) [Systems Research Center][9] (SRC) and the [Olivetti][7] Research Center (ORC) in the late 1980s.

Modula-3's main features are simplicity and safety while preserving the power of a systems-programming language. Modula-3 aimed to continue the [Pascal][10] tradition of type safety, while introducing new constructs for practical real-world programming. In particular Modula-3 added support for [generic programming][11] (similar to [templates][12]), [multithreading][13], [exception handling][14], [garbage collection][15], [object-oriented programming][16], partial revelation and explicit mark of unsafe code. The design goal of Modula-3 was a language that implements the most important features of modern [imperative][17] languages in quite basic forms. Thus allegedly dangerous and complicating features such as [multiple inheritance][18] and [operator overloading][19] were omitted.

## Historical development

The Modula-3 project started in November 1986 when [Maurice Wilkes][20] wrote to [Niklaus Wirth][21] with some ideas for a new version of Modula. Wilkes had been working at DEC just prior to this point, and had returned to England and joined Olivetti's Research Strategy Board. Wirth had already moved on to [Oberon][22], but had no problems with Wilkes's team continuing development under the Modula name. The language definition was completed in August 1988, and an updated version in January 1989\. Compilers from DEC and Olivetti soon followed, and 3rd party implementations after that.

Its design was heavily influenced by work on the [Modula-2+][2] language in use at SRC and at the [Acorn Computers][23] Research Center (ARC, later ORC when Olivetti bought out Acorn) at the time, which was the language in which the operating system for the [DEC Firefly][24] multiprocessor [VAX][25] workstation was written and in which the [Acorn][23] Compiler for Acorn C and Modula Execution Library (CAMEL) at ARC for the [ARX operating system][26] project of [ARM][27] based [Acorn Archimedes][28] range of computers was written. As the revised Modula-3 Report states, the language was influenced by other languages such as [Mesa][29], [Cedar][30], [Object Pascal][31], [Oberon][22] and [Euclid][32].[\[3\]][33]

During the 1990s, Modula-3 gained considerable currency as a teaching language, but it was never widely adopted for industrial use. Contributing to this may have been the demise of DEC, a key Modula-3 supporter (specially when it ceased to maintain it effectively any more before DEC was sold to [Compaq][34] in 1998). In any case, in spite of Modula-3's simplicity and power, it appears that there was little demand for a procedural [compiled language][35] with restricted implementation of [object-oriented programming][16]. For a time, a commercial [compiler][36] called CM3 maintained by one of the chief implementors prior at DEC SRC who was hired before DEC being sold to [Compaq][34], an [integrated development environment][37] called Reactor and an extensible [Java Virtual Machine][38] (licensed in binary and source formats and buildable with Reactor) were offered by Critical Mass, Inc., but that company ceased active operations in 2000 and gave some of the sources of its products to [elego Software Solutions GmbH][39]. Modula-3 is now taught in universities mostly in comparative programming language courses, and its textbooks are out of print. Essentially the only corporate supporter of Modula-3 is elego Software Solutions GmbH, which inherited the sources from Critical Mass and has since made several releases of the CM3 system in source and binary form. The Reactor IDE has been open source released after several years it had not, with the new name CM3-IDE. In March 2002 elego also took over the repository of another active Modula-3 distribution, PM3, till then maintained at the [École Polytechnique de Montréal][40] but which later continued by the work on HM3 improved over the years later until it was obsoleted.

## Syntax

A common example of a language's [syntax][41] is the [Hello world program][42].

All programs in Modula-3 have at least a module file, while most also include an interface file that is used by clients to access data from the module. Like in other languages, a Modula-3 program must export a Main module, which can either be a file named Main.m3, or a file can call `EXPORT` to export the Main module.

Module file names are suggested to be the same as the actual module name, but the compiler will only warn you if they are different.

Other conventions in the syntax include naming the exported type of an interface `T`, since types are usually qualified by their full names, so a type `T` inside a module named Foo will be named `Foo.T`. This aids in readability. Another similar convention is naming a public object `Public` as in the OOP examples above.

## Language features

## Modularity

First and foremost, all compilation units are either `INTERFACE` or implementation `MODULE`s, of one flavor or another. An interface compilation unit, beginning with the keyword `INTERFACE`, defines constants, types, variables, exceptions, and procedures. The implementation module, beginning with the keyword `MODULE`, provides the actual code, and any further constants, types, or variables needed to implement the interface. By default an implementation module will implement the interface of the same name, but a module may explicitly `EXPORT` to a module not of the same name. For example, the main program exports an implementation module for the Main interface.

Any compilation unit may `IMPORT` other interfaces, although circular imports are forbidden. This may be resolved by doing the import from the implementation MODULE. The entities within the imported module may be imported, instead of just the module name, using the `FROM Module IMPORT Item [, Item]*` syntax:

Typically, one only imports the interface, and uses the 'dot' notation to access the items within the interface (similar to accessing the fields within a record). A typical usage is to define one data structure (record or object) per interface along with any support procedures. Here the main type will get the name 'T', and one uses as in `MyModule.T`.

In the event of a name collision between an imported module and other entity within the module, the reserved word `AS` can be used as in `IMPORT CollidingModule AS X;`

## Safe vs Unsafe

Some capability is deemed unsafe, where the compiler can no longer guarantee the results will be consistent (for example, when interfacing to the [C programming language][43]). The keyword `UNSAFE` prefixed in front of `INTERFACE` or `MODULE`, may be used to tell the compiler to enable certain low level features of the language. For example, an unsafe operation is bypassing the type system using `LOOPHOLE` to copy the bits of an integer into a floating point `REAL` number.

An interface that imports an unsafe module must itself be unsafe. A safe interface may be exported by an unsafe implementation module. This is the typical usage when interfacing to external libraries, where two interfaces are built (one unsafe, the other safe).

## Generics

A generic interface and its corresponding generic module, prefix the `INTERFACE` or `MODULE` keyword with `GENERIC`, and take as formal arguments other interfaces. Thus (like C++ templates) one can easily define and use abstract data types, but unlike C++, the granularity is at the module level. An interface is passed to the generic interface and implementation modules as actual arguments, and the compiler will generate concrete modules.

For example, one could define a GenericStack, then instantiate it with interfaces such as `IntegerElem`, or `RealElem` or even interfaces to Objects, as long as each of those interfaces defines the properties required by the generic modules.

**NOTE:** The bare types `INTEGER`, or `REAL` can't be used, because they are not modules, and the system of generics is based upon using modules as arguments. By comparison, in a C++ template, a bare type would be used.

**FILE: IntegerElem.i3**

**FILE: GenericStack.ig**

**FILE: GenericStack.mg**

**FILE: IntegerStack.i3**

**FILE: IntegerStack.m3**

## Traceability

Any identifier can be traced back to where it originated, unlike the 'include' feature of other languages. A compilation unit must import identifiers from other compilation units, using an `IMPORT` statement. Even enumerations make use of the same 'dot' notation as used when accessing a field of a record.

## Dynamic Programming

Modula-3 supports the allocation of data at runtime. There are two kinds of memory that can be allocated `TRACED` and `UNTRACED`, the difference being whether the [garbage collector][15] can see it or not. NEW() is used to allocate data of either of these classes of memory. In an `UNSAFE` module, `DISPOSE` is available to free untraced memory.

## Object Oriented

Object Oriented Programming techniques may be used in Modula-3, but their use is not required. Many of the other features provided in _Modula-3_ (modules, generics) can usually take the place of object orientation.

Object support is intentionally kept to its simplest terms. An object type (Termed a "class" in other object oriented languages) is introduced with the `OBJECT` declaration, which has essentially the same syntax as a `RECORD` declaration, although an object type is a reference type, whereas RECORDs in Modula-3 are not (similar to structs in C). Exported types are usually named T by convention, and create a separate "Public" type to expose the methods and data. For instance:

This defines an interface `Person` with two types, `T`, and `Public`, which is defined as an object with two methods, `getAge()` and `init()`. `T` is defined as a subtype of `Public` by the use of the `<:` operator.

To create a new `Person.T` object, we use the built in procedure `NEW` with the method `init()` as

Modula-3's `REVEAL` construct provides a conceptually simple and clean yet very powerful mechanism for hiding implementation details from clients, with arbitrarily many levels of "friendliness". We use `REVEAL` to show the full implementation of the `Person` interface from above.

Note the use of the `BRANDED` keyword, which "brands" objects to make them unique as to avoid structural equivalence. `BRANDED` can also take a string as an argument, but when omitted, a unique string is generated for you.

Modula-3 is one of the few programming languages that requires that external references from a module be strictly qualified. That is, a reference in module `A` to the object `x` exported from module `B` must take the form `B.x`. It is not possible in Modula-3 to import "all exported names" from a module.

Because of the language's requirements on name qualification and method overriding, it is impossible to break a working program simply by adding new declarations to an interface (any interface). This makes it possible for large programs to be edited concurrently by many programmers without any worries about naming conflicts; and it also makes it possible to edit core language libraries with the firm knowledge that no existing programs will be "broken" in the process.

## Exceptions

[Exception handling][14] is based on a `TRY`...`EXCEPT` block system, which has since\[_[citation needed][44]_\] become common. One feature that has not been adopted in other languages\[_[citation needed][44]_\], with the notable exceptions of [Delphi][45], [Python][5][\[2\]][46], [Scala][47][\[3\]][48] and [Visual Basic.NET][49], is that the `EXCEPT` construct defined a form of [switch statement][50] with each possible exception as a case in its own EXCEPT clause. Modula-3 also supports a `LOOP`...`EXIT`...`END` construct that loops until an `EXIT` occurs, a structure equivalent to a simple loop inside a `TRY`...`EXCEPT` clause.

## Multi-Threaded

The language supports the use of multi-threading, and synchronization between threads. There is a standard module within the runtime library (_m3core_) named Thread, which supports the use of multi-threaded applications. In fact, the Modula-3 runtime may make use of a separate thread for internal tasks such as garbage collection.

A built-in data structure `MUTEX` is used to synchronize multiple threads and protect data structures from simultaneous access with possible corruption or race conditions. The `LOCK` and corresponding `UNLOCK` statements, lock and unlock a `MUTEX`. The `MUTEX` is an object, and as such, other objects may be derived from it.

For example, in the I/O section of the _libm3_ library, readers and writers (Rd.T, and Wr.T) are derived from MUTEX, and they lock themselves before accessing or modifying any internal data such as buffers.

## Summary

In summary, the language features:

Modula-3 is one of the rare languages whose evolution of features is documented.

In _Systems Programming with Modula-3_, four essential points of the language design are intensively discussed. These topics are: structural vs. name equivalence, subtyping rules, generic modules, and parameter modes like `READONLY`.

## Standard library features

Continuing a trend started with the [C][43] programming language, many of the features required to write real programs were left out of the language definition itself and instead provided via a number of standard libraries. Most of the interfaces below are described in detail in[\[4\]][51]

Standard libraries providing the following features. This are called standard interfaces and are required (must be provided) in the language.

Some recommended interfaces implemented in the available implementations but are not required

As in C, I/O is also provided via libraries, in Modula-3 called `Rd` and `Wr`. The object-oriented design of the Rd and Wr (readers and writers respectively) libraries is covered in detail in the book by Greg Nelson. An interesting aspect of Modula-3 is that it is one of few programming languages whose standard libraries have been formally verified not to contain various types of bugs, including locking bugs. This was done under the auspices of the [Larch/Modula-3][52] (see [Larch family][53])[\[5\]][54] and [Extended static checking][55][\[6\]][56] projects at [DEC Systems Research Center][57].

## Implementations

Several compilers are available, most of them [open source][58].

Since the only aspect of C data structures that is missing from Modula-3 is the union type, all existing Modula-3 implementations are able to provide good binary compatibility with C language type declarations of arrays and structs.

## Books

None of these books are still in print, although used copies are obtainable and some are digitized or partially digitized and some chapters of one them have previous or posterior versions obtainable as research reports from web.

## Projects using Modula-3

## Influences on other Programming Languages

Although Modula-3 itself did not gain mainstream status, several parts of the DEC-SRC M3 distribution did. Arguably the most influential part was the Network Objects library, which formed the basis for Java's first RMI implementation, including the actual network protocol. Only when Sun moved to the [IIOP based protocol][59] from the [CORBA][60] standard, was it dropped. The documentation on [garbage collection][15] of remote objects still refer to the pioneering work done for Modula-3 Network Objects.[\[14\]][61] Class mechanism in python is also inspired by the class mechanism found in C++ and Modula-3\.[\[15\]][62]

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Modula-2 "Modula-2"
[2]: /wiki/Modula-2%2B "Modula-2+"
[3]: /wiki/Java_(programming_language) "Java (programming language)"
[4]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[5]: /wiki/Python_(programming_language) "Python (programming language)"
[6]: /wiki/Luca_Cardelli "Luca Cardelli"
[7]: /wiki/Olivetti "Olivetti"
[8]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[9]: /wiki/DEC_Systems_Research_Center "DEC Systems Research Center"
[10]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[11]: /wiki/Generic_programming "Generic programming"
[12]: /wiki/Template_(programming) "Template (programming)"
[13]: /wiki/Thread_(computer_science) "Thread (computer science)"
[14]: /wiki/Exception_handling "Exception handling"
[15]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[16]: /wiki/Object-oriented_programming "Object-oriented programming"
[17]: /wiki/Imperative_programming "Imperative programming"
[18]: /wiki/Multiple_inheritance "Multiple inheritance"
[19]: /wiki/Operator_overloading "Operator overloading"
[20]: /wiki/Maurice_Wilkes "Maurice Wilkes"
[21]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[22]: /wiki/Oberon_(programming_language) "Oberon (programming language)"
[23]: /wiki/Acorn_Computers "Acorn Computers"
[24]: /wiki/DEC_Firefly "DEC Firefly"
[25]: /wiki/VAX "VAX"
[26]: /wiki/ARX_(operating_system) "ARX (operating system)"
[27]: /wiki/ARM_architecture "ARM architecture"
[28]: /wiki/Acorn_Archimedes "Acorn Archimedes"
[29]: /wiki/Mesa_(programming_language) "Mesa (programming language)"
[30]: /wiki/Cedar_(programming_language) "Cedar (programming language)"
[31]: /wiki/Object_Pascal "Object Pascal"
[32]: /wiki/Euclid_(programming_language) "Euclid (programming language)"
[33]: #cite_note-DecSrcRr052-3
[34]: /wiki/Compaq "Compaq"
[35]: /wiki/Compiled_language "Compiled language"
[36]: /wiki/Compiler "Compiler"
[37]: /wiki/Integrated_development_environment "Integrated development environment"
[38]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[39]: /w/index.php?title=Elego_Software_Solutions_GmbH&action=edit&redlink=1 "Elego Software Solutions GmbH (page does not exist)"
[40]: /wiki/%C3%89cole_Polytechnique_de_Montr%C3%A9al "École Polytechnique de Montréal"
[41]: /wiki/Syntax "Syntax"
[42]: /wiki/Hello_world_program "Hello world program"
[43]: /wiki/C_(programming_language) "C (programming language)"
[44]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[45]: /wiki/Delphi_(programming_language) "Delphi (programming language)"
[46]: https://www.python.org/doc/faq/general/#why-was-python-created-in-the-first-place
[47]: /wiki/Scala_(programming_language) "Scala (programming language)"
[48]: http://scala.epfl.ch
[49]: /wiki/Visual_Basic.NET "Visual Basic.NET"
[50]: /wiki/Switch_statement "Switch statement"
[51]: #cite_note-DecSrcRr113-4
[52]: /w/index.php?title=Larch/Modula-3&action=edit&redlink=1 "Larch/Modula-3 (page does not exist)"
[53]: /wiki/Larch_family "Larch family"
[54]: #cite_note-DecSrcRr072-5
[55]: /wiki/Extended_static_checking "Extended static checking"
[56]: #cite_note-CompaqSrcRr159-6
[57]: /wiki/DEC_SRC "DEC SRC"
[58]: /wiki/Open_source "Open source"
[59]: /wiki/General_Inter-ORB_Protocol "General Inter-ORB Protocol"
[60]: /wiki/CORBA "CORBA"
[61]: #cite_note-14
[62]: #cite_note-15