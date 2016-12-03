**XL** stands for eXtensible Language. It is the first and so far the only [computer][0] [programming language][1] designed to support [concept programming][2].[\[1\]][3]

XL features programmer-reconfigurable syntax and semantics. Compiler _plug-ins_ can be used to add new features to the language. A base set of plug-ins implements a relatively standard [imperative language][4]. Programmers can write their own plug-ins to implement application-specific notations, such as [symbolic differentiation][5], which can then be used as readily as built-in language features.

## Language

XL is defined at four different levels:

XL has no [primitive types][6] nor keywords. All useful operators and data types, like integers or addition, are defined in the standard library (XL2). XL1 is [portable][7] between different execution environments. There is no such guarantee for XL2: if a particular [CPU][8] does not implement floating-point multiplication, the corresponding operator definition may be missing from the standard library, and using a floating-point multiply may result in a [compile-time][9] error.

The [Hello World][10] program in XL looks like the following:

An alternative form in a style more suitable for large-scale programs would be:

A recursive implementation of [factorial][11] in XLR looks like the following:

## Syntax

Syntax is defined at the XL0 level. The XL0 phase of the compiler can be configured using a syntax description file, where properties like the text representation and precedence of operators are defined. A basic syntax file defines common mathematical notations, like + for addition, with the usually accepted [order of operations][12].

The parse tree consists of 7 node types, 4 [leaf node][13] types (integer, real, text and symbol) and 3 [internal node][14] types (infix, prefix and block).

With the default syntax file, the following is valid XL0, irrespective of any semantics.

It parses as:

## Semantics of XL1

The XL1 phase is defined as a sequence of operations on the XL0 parse tree. These operations are provided by various compiler plug-ins, that are triggered based on the shape of the parse tree.

Special constructs, `translate` and `translation`, are provided by a plug-in designed to facilitate the writing of other plug-ins. The `quote` construct generates a parse tree. Here is how these notations can be used to implement a plug-in called `ZeroRemoval` that eliminates superfluous additions and multiplications by zero.

A plug-in can be invoked on a whole file from the command line, or more locally in the source code using the _pragma_ notation, as follows:

The XL1 phase contains a large set of plug-ins, notably `XLSemantics`, that provide common abstractions like [subroutine][15], [data type][16] and [variable][17] [declaration][18] and [definition][19], as well as basic [structured programming][20] statements, like conditionals or loops.

## Type system

XL1 type checking is [static][16], with [generic programming][21] abilities that are beyond those of languages like Ada or C++. Types like arrays or pointers, which are primitive in languages like C++, are declared in the library in XL. For instance, a one-dimensional array type could be defined as follows:

A _validated generic type_ is a generic type where a condition indicates how the type can be used. Such types need not have generic parameters. For instance, one can declare that a type is `ordered` if it has a less-than operator as follows:

It is then possible to declare a function that is implicitly generic because the type `ordered` itself is generic.

This also applies to generic types that have parameters, such as `array`. A function computing the sum of the elements in any array can be written as follows:

## Type-safe variable argument lists

Functions can be [overloaded][22]. A function can be declared to use a variable number of arguments by using `...` in the parameter list (historically, the keyword `other` was used for that purpose). In such a function, `...` can be used to pass the variable number of arguments to another subroutine, a feature now called [Variadic templates][23]:

When such a function is called, the compiler recursively instantiates functions to match the parameter list:

## Expression reduction: operator overloading

Operators can be defined using the `written` form of function declarations. Below is the code that would declare the addition of integers:

Such _written forms_ can have more than two parameters. For instance, a matrix linear transform can be written as:

A written form can use constants, and such a form is more specialized than a form without constants. For example:

The mechanism is used to implement all basic operators. An expression is progressively reduced to function calls using written forms. For that reason, the mechanism is referred to as _expression reduction_ rather than operator overloading.

## Iterators

XL iterators allow programmers to implement both [generators][24] and [iterators][25].

## Development status and history

XL is the result of a long language design work that began around 1992\. The language was designed and implemented primarily by [Christophe de Dinechin][26].

Historically, the XL compiler was written in C++. It had achieved a point where most of the features described above worked correctly, but writing plug-ins was a nightmare, because C++ itself is not extensible, so implementing `translate`-like statements was impossible. The parse tree was more complicated, with dozens of node types, because it was designed for cross-language support. Moka was a Java-to-Java extensible compiler using the same infrastructure.

Abandoning the cross-language objectives and complex parse-tree structure, a [complete rewrite][27] of the compiler was started in 2003\. The parse tree was vastly simplified down to the seven XL0 nodes types now in use. This new compiler [bootstrapped][28] in 2004, and all new development is now written in XL. However, this new compiler still has somewhat incomplete XL1 support, although its abilities already exceed C++ in a few areas.

## Ancestry

XL1 was inspired by a large number of other languages. In alphabetical order:

## Semantics

XLR is a dynamic language, originally intended as a back-end for the XL1 compiler, hence the name, which stands for XL runtime. It shares the basic XL0 syntax with XL1, but its behavior is much closer to a functional language, whereas XL1 is intended to look mostly like an imperative language. XLR has practically only one built-in operator, "-\>", which denotes a rewrite. The notation on the left of the rewrite is transformed into the notation on the right of the rewrite.

This mechanism is used to implement standard notations:

## References

## External links

[0]: /wiki/Computer "Computer"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Concept_programming "Concept programming"
[3]: #cite_note-1
[4]: /wiki/Imperative_programming "Imperative programming"
[5]: /wiki/Derivative "Derivative"
[6]: /wiki/Primitive_types "Primitive types"
[7]: /wiki/Porting "Porting"
[8]: /wiki/Central_processing_unit "Central processing unit"
[9]: /wiki/Compile-time "Compile-time"
[10]: /wiki/Hello_World "Hello World"
[11]: /wiki/Factorial "Factorial"
[12]: /wiki/Order_of_operations "Order of operations"
[13]: /wiki/Leaf_node "Leaf node"
[14]: /wiki/Internal_node "Internal node"
[15]: /wiki/Subroutine "Subroutine"
[16]: /wiki/Data_type "Data type"
[17]: /wiki/Variable_(programming) "Variable (programming)"
[18]: /wiki/Declaration_(computer_science) "Declaration (computer science)"
[19]: /wiki/Definition "Definition"
[20]: /wiki/Structured_programming "Structured programming"
[21]: /wiki/Generic_programming "Generic programming"
[22]: /wiki/Polymorphism_(computer_science) "Polymorphism (computer science)"
[23]: /wiki/Variadic_templates "Variadic templates"
[24]: /wiki/Generator_(computer_science) "Generator (computer science)"
[25]: /wiki/Iterators "Iterators"
[26]: /wiki/Christophe_de_Dinechin "Christophe de Dinechin"
[27]: /wiki/Rewrite_(programming) "Rewrite (programming)"
[28]: /wiki/Bootstrapping_(compilers) "Bootstrapping (compilers)"