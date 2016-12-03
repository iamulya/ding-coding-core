**CLU** is a pioneering [programming language][0] created at the [Massachusetts Institute of Technology][1] (MIT) by [Barbara Liskov][2] and her students between 1974 and 1975\. While it did not find extensive use, it introduced many features that are used widely now, and is seen as a step in the development of [object-oriented programming][3] (OOP). However, it is not object-oriented, instead being considered an [object-based language][4], as it lacked many features of OOP.

Key contributions include [abstract data types][5],[\[5\]][6] [call-by-sharing][7], [iterators][8], multiple return values (a form of [parallel assignment][9]), type-safe [parameterized types][10], and type-safe [variant types][11]. It is also notable for its use of [classes][12] with [constructors][13] and methods, but without [inheritance][14].

## Clusters

The [syntax][15] of CLU was based on [ALGOL][16], then the starting point for most new language designs. The key addition was the concept of a _cluster_, CLU's type extension system and the root of the language's name (CLUster).[\[6\]][17] Clusters correspond generally to the concept of a "class" in an OO language, and have similar syntax. For instance, here is the CLU syntax for a cluster that implements [complex numbers][18]:

A cluster is a module that encapsulates all of its components except for those explicitly named in the "is" clause. These correspond to the public components of a class in recent OO languages. A cluster also defines a type that can be named outside the cluster (in this case, "complex\_number"), but its representation type (rep) is hidden from external clients.

Cluster names are global, and no namespace mechanism was provided to group clusters or allow them to be created "locally" inside other clusters.

CLU does not perform implicit type conversions. In a cluster, the explicit type conversions _up_ and _down_ change between the abstract type and the representation. There is a universal type _any_, and a procedure force\[\] to check that an object is a certain type. Objects may be mutable or immutable, the latter being _base types_ such as integers, booleans, characters and strings.[\[6\]][17]

## Other features

Another key feature of the CLU type system are _[iterators][8]_, which return objects from a collection serially, one after another.[\[6\]][17] Iterators offer an identical [application programming interface][19] (API) no matter what data they are being used with. Thus the iterator for a collection of `complex_number`s can be used interchangeably with that for an array of `integer`s. A distinctive feature of CLU iterators is that they are implemented as coroutines, with each value being provided to the caller via a _yield_ statement. Iterators like those in CLU are now a common feature of many modern languages, such as C\#, Ruby, and Python, though recently they are often referred to as generators.

CLU also includes [exception handling][20], based on various attempts in other languages; exceptions are raised using `signal` and handled with `except`. Unlike most other languages with exception handling, exceptions are not implicitly resignaled up the calling chain. Exceptions that are neither caught nor resignaled explicitly are immediately converted into a special failure exception that typically terminates the program.

CLU is often credited as being the first language with type-safe [variant types][11], called _oneofs_, before the language [ML][21] had them.

A final distinctive feature in CLU is [parallel assignment][9] (multiple assignment), where more than one variable can appear on the left hand side of an [assignment][22] operator. For instance, writing `x,y = y,x` would exchange values of `x` and `y`. In the same way, functions could return several values, like `x,y,z = f(t)`. Parallel assignment (though not multiple return values) predates CLU, appearing in [CPL][23] (1963), named _simultaneous assignment_,[\[7\]][24] but CLU popularized it and is often credited as the direct influence leading to parallel assignment in later languages.

All objects in a CLU program live in the heap, and memory management is automatic.

CLU supported [type parameterized][25] user-defined data abstractions. It was the first language to offer type-safe bounded parameterized types, using structure _where clauses_ to express constraints on actual type arguments.

## Influence on other programming languages

CLU has influenced many other languages in many ways. In approximate chronological order, these include:

CLU and [Ada][26] were major inspirations for [C++][27] templates.

CLU's exception handling mechanisms influenced later languages like C++ and [Java][28].

[C++][27], [Sather][29], [Python][30], and [C\#][31] include [iterators][8], which first appeared in CLU.

[Perl][32] and [Lua][33] took multiple assignment and multiple returns from function calls from CLU.[\[8\]][34]

[Python][30] and [Ruby][35] borrowed several concepts from CLU, such as [call by sharing][36], the _yield_ statement, and multiple assignment\[_[citation needed][37]_\]

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Massachusetts_Institute_of_Technology "Massachusetts Institute of Technology"
[2]: /wiki/Barbara_Liskov "Barbara Liskov"
[3]: /wiki/Object-oriented_programming "Object-oriented programming"
[4]: /wiki/Object-based_language "Object-based language"
[5]: /wiki/Abstract_data_type "Abstract data type"
[6]: #cite_note-5
[7]: /wiki/Call-by-sharing "Call-by-sharing"
[8]: /wiki/Iterator "Iterator"
[9]: /wiki/Parallel_assignment "Parallel assignment"
[10]: /wiki/Parameterized_type "Parameterized type"
[11]: /wiki/Variant_type "Variant type"
[12]: /wiki/Class_(computer_programming) "Class (computer programming)"
[13]: /wiki/Constructor_(object-oriented_programming) "Constructor (object-oriented programming)"
[14]: /wiki/Inheritance_(object-oriented_programming) "Inheritance (object-oriented programming)"
[15]: /wiki/Syntax "Syntax"
[16]: /wiki/ALGOL "ALGOL"
[17]: #cite_note-Liskov1977-6
[18]: /wiki/Complex_number "Complex number"
[19]: /wiki/Application_programming_interface "Application programming interface"
[20]: /wiki/Exception_handling "Exception handling"
[21]: /wiki/ML_(programming_language) "ML (programming language)"
[22]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[23]: /wiki/CPL_(programming_language) "CPL (programming language)"
[24]: #cite_note-7
[25]: /wiki/Generic_programming "Generic programming"
[26]: /wiki/Ada_(programming_language) "Ada (programming language)"
[27]: /wiki/C%2B%2B "C++"
[28]: /wiki/Java_(programming_language) "Java (programming language)"
[29]: /wiki/Sather "Sather"
[30]: /wiki/Python_(programming_language) "Python (programming language)"
[31]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[32]: /wiki/Perl "Perl"
[33]: /wiki/Lua_(programming_language) "Lua (programming language)"
[34]: #cite_note-8
[35]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[36]: /wiki/Call_by_sharing "Call by sharing"
[37]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"