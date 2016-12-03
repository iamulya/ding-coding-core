**Eiffel** is an [object-oriented][0] [programming language][1] designed by [Bertrand Meyer][2] (an object-orientation proponent and author of _[Object-Oriented Software Construction][3]_) and [Eiffel Software][4]. Meyer conceived the language in 1985 with the goal of increasing the reliability of commercial software development;[\[2\]][5] the first version becoming available in 1986\. In 2005, Eiffel became an [ISO][6]-standardized language.

The design of the language is closely connected with the Eiffel programming method. Both are based on a set of principles, including [design by contract][7], [command-query separation][8], the [uniform-access principle][9], the [single-choice principle][10], the [open-closed principle][11], and [option-operand separation][12].

Many concepts initially introduced by Eiffel later found their way into [Java][13], [C\#][14], and other languages.[\[3\]][15] New language design ideas, particularly through the [Ecma][16]/[ISO][17] standardization process, continue to be incorporated into the Eiffel language.

## Characteristics

The key characteristics of the Eiffel language include:

## Design goals

Eiffel emphasizes declarative statements over procedural code and attempts to eliminate the need for bookkeeping instructions.

Eiffel shuns coding tricks or coding techniques intended as [optimization][18] hints to the compiler. The aim is not only to make the code more readable, but also to allow programmers to concentrate on the important aspects of a program without getting bogged down in implementation details. Eiffel's simplicity is intended to promote simple, extensible, reusable, and reliable answers to computing problems. Compilers for computer programs written in Eiffel provide extensive optimization techniques, such as automatic in-lining, that relieve the programmer of part of the optimization burden.

## Background

Eiffel was originally developed by [Eiffel Software][4], a company founded by [Bertrand Meyer][2]. _[Object-Oriented Software Construction][3]_ contains a detailed treatment of the concepts and theory of the object technology that led to Eiffel's design.[\[4\]][19]

The design goal behind the Eiffel language, libraries, and programming methods is to enable programmers to create reliable, reusable software modules. Eiffel supports [multiple inheritance][20], [genericity][21], [polymorphism][22], [encapsulation][23], type-safe conversions, and [parameter covariance][24]. Eiffel's most important contribution to [software engineering][25] is [design by contract][7] (DbC), in which [assertions][26], [preconditions][27], [postconditions][28], and [class invariants][29] are employed to help ensure program correctness without sacrificing efficiency.

Eiffel's design is based on object-oriented programming theory, with only minor influence of other paradigms or concern for support of legacy code. Eiffel formally supports [abstract data types][30]. Under Eiffel's design, a software text should be able to reproduce its design documentation from the text itself, using a formalized implementation of the "Abstract Data Type".

## Implementations and environments

[EiffelStudio][31] is an [integrated development environment][32] available under either an [open source][33] or a commercial license. It offers an object-oriented environment for [software engineering][25]. EiffelEnvision is a plug-in for [Microsoft Visual Studio][34] that allows users to edit, compile, and debug Eiffel projects from within the Microsoft Visual Studio IDE. Five other [open source][33] implementations are available: ["The Eiffel Compiler" tecomp][35], Gobo Eiffel, [SmartEiffel][36]---the GNU implementation, based on an older version of the language---, [LibertyEiffel][37]---based on the SmartEiffel compiler--- and [Visual Eiffel][38].

Several other programming languages incorporate elements first introduced in Eiffel. [Sather][39], for example, was originally based on Eiffel but has since diverged, and now includes several [functional programming][40] features. The interactive-teaching language [Blue][41], forerunner of [BlueJ][42], is also Eiffel-based. The [Apple Media Tool][43] includes an Eiffel-based Apple Media Language.

## Specifications and standards

The Eiffel language definition is an international standard of the [ISO][6]. The standard was developed by [ECMA International][44], which first approved the standard on 21 June 2005 as Standard ECMA-367, _Eiffel: Analysis, Design and Programming Language_. In June 2006, ECMA and ISO adopted the second version. In November 2006, ISO first published that version. The standard can be found and used free of charge on the ECMA site.[\[5\]][45] The ISO version[\[6\]][46] is identical in all respects except formatting.

Eiffel Software, "The Eiffel Compiler" tecomp and Eiffel-library-developer Gobo have committed to implementing the standard; Eiffel Software's EiffelStudio 6.1 and "The Eiffel Compiler" tecomp implement some of the major new mechanisms---in particular, inline agents, assigner commands, bracket notation, non-conforming inheritance, and attached types. The [SmartEiffel][36] team has turned away from this standard to create its own version of the language, which they believe to be closer to the original style of Eiffel. Object Tools has not disclosed whether future versions of its Eiffel compiler will comply with the standard. [LibertyEiffel][37] implements a dialect somewhere in between the [SmartEiffel][36] language and the standard.

The standard cites the following, predecessor Eiffel-language specifications:

The current version of the standard from June 2006 contains some inconsistencies (e.g. covariant redefinitions)\[_[citation needed][47]_\]. The ECMA committee has not yet announced any timeline and direction on how to resolve the inconsistencies.

## Syntax and semantics

## Overall structure

An Eiffel "system" or "program" is a collection of _classes_. Above the level of classes, Eiffel defines _cluster_, which is essentially a group of classes, and possibly of _subclusters_ (nested clusters). Clusters are not a syntactic [language construct][48], but rather a standard organizational convention. Typically an Eiffel program will be organized with each class in a separate file, and each cluster in a directory containing class files. In this organization, subclusters are subdirectories. For example, under standard organizational and casing conventions, `x.e` might be the name of a file that defines a class called X.

A class contains _features_, which are similar to "routines", "members", "attributes" or "methods" in other object-oriented programming languages. A class also defines its invariants, and contains other properties, such as a "notes" section for documentation and metadata. Eiffel's standard data types, such as `INTEGER`, `STRING` and `ARRAY`, are all themselves classes.

Every system must have a class designated as "root", with one of its creation procedures designated as "root procedure". Executing a system consists of creating an instance of the root class and executing its root procedure. Generally, doing so creates new objects, calls new features, and so on.

Eiffel has five basic executable instructions: assignment, object creation, routine call, condition, and iteration. Eiffel's control structures are strict in enforcing structured programming: every block has exactly one entry and exactly one exit.

## Scoping

Unlike many object-oriented languages, but like [Smalltalk][49], Eiffel does not permit any assignment into fields of objects, except within the features of an object, which is the practical application of the principle of [information hiding][50] or data abstraction, requiring formal interfaces for data mutation. To put it in the language of other object-oriented programming languages, all Eiffel fields are "private", and "setters" are needed to modify values. An upshot of this is that "setters" can, and normally do, implement the invariants for which Eiffel provides syntax.

While Eiffel does not allow direct access to the features of a class by a client of the class, it does allow for the definition of an "assigner command", such as:

While a slight bow to the overall developer community to allow something looking like direct access (e.g. thereby breaking the Information Hiding Principle), the practice is dangerous as it hides or obfuscates the reality of a "setter" being used. In practice, it is better to read the direct call to a setter rather than implying a direct access to a feature like `some_attribute` as in the example code above.

Unlike other languages, having notions of "public", "private" and so on, Eiffel uses an exporting technology to more precisely control the scoping between client and supplier classes. Moreover, the export logic used can be checked statically by the compiler, which allows earlier detection of scope violating calls at compile-time rather than run-time. For example (below), the "{NONE}" is similar to "private" in other languages. Scope applied this way to a "feature set" (e.g. everything below the 'feature' keyword to either the next feature set keyword or the end of the class) can be changed in descendant classes using the "export" keyword.

Alternatively, the lack of a {x} export declaration implies {ANY} and is similar to the "public" scoping of other languages.

Finally, scoping can be selectively and precisely controlled to any class in the Eiffel project universe, such as:

Here, the compiler will allow only the classes listed between the curly braces to access the features within the feature group (e.g. DECIMAL, DCM\_MA\_DECIMAL\_PARSER, DCM\_MA\_DECIMAL\_HANDLER).

## "Hello, world!"

A programming language's look and feel is often conveyed using a ["Hello, world!"][51] program. Such a program written in Eiffel might be:

This program contains the class `HELLO_WORLD`. The constructor (create routine) for the class, named `make`, invokes the `print` system library routine to write a `"Hello,` `world!"` message to the output.

## Design by contract

The concept of Design by Contract is central to Eiffel. The contracts assert what must be true before a routine is executed (precondition) and what must hold to be true after the routine finishes (post-condition). Class Invariant contracts define what assertions must hold true both before and after any feature of a class is accessed (both routines and attributes). Moreover, contracts codify into executable code developer and designers assumptions about the operating environment of the features of a class or the class as a whole by means of the invariant.

The Eiffel compiler is designed to include the feature and class contracts in various levels. EiffelStudio, for example, executes all feature and class contracts during execution in the "Workbench mode." When an executable is created, the compiler is instructed by way of the project settings file (e.g. ECF file) to either include or exclude any set of contracts. Thus, an executable file can be compiled to either include or exclude any level of contract, thereby bringing along continuous levels of unit and integration testing. Moreover, contracts can be continually and methodically exercised by way of the [Auto-Test][52] feature found in EiffelStudio.

The Design by Contract mechanisms are tightly integrated with the language and guide redefinition of features in inheritance:

In addition, the language supports a "check instruction" (a kind of "assert"), loop invariants, and loop variants (which guarantee loop termination).

## Void-safety

[Void-safety][53], like static typing, is another facility for improving software quality. Void-safe software is protected from run time errors caused by calls to void references, and therefore will be more reliable than software in which calls to void targets can occur. The analogy to static typing is a useful one. In fact, void-safe capability could be seen as an extension to the type system, or a step beyond static typing, because the mechanism for ensuring void-safety is integrated into the type system.

The guard against void target calls can be seen by way of the notion of attachment and (by extension) detachment (e.g. detachable keyword). The void-safe facility can be seen in a short re-work of the example code used above:

The code example above shows how the compiler can statically address the reliability of whether `some_attribute` will be attached or detached at the point it is used. Notably, the `attached` keyword allows for an "attachment local" (e.g. `l_attribute`), which is scoped to only the block of code enclosed by the if-statement construct. Thus, within this small block of code, the local variable (e.g. `l_attribute`) can be statically guaranteed to be non-void (i.e. void-safe).

## Features, commands, and queries

The primary characteristic of a class is that it defines a set of features: as a class represents a set of run-time objects, or "instances", a feature is an operation on these objects. There are two kinds of features: queries and commands. A query provides information about an instance. A command modifies an instance.

The command-query distinction is important to the Eiffel method. In particular:

## Overloading

Eiffel does not allow argument [overloading][54]. Each feature name within a class always maps to a specific feature within the class. One name, within one class, means one thing. This design choice helps the readability of classes, by avoiding a cause of ambiguity about which routine will be invoked by a call. It also simplifies the language mechanism; in particular, this is what makes Eiffel's multiple inheritance mechanism possible.[\[7\]][55]

Names can, of course, be reused in different classes. For example the feature plus (along with its infix [alias][56] "+") is defined in several classes: INTEGER, REAL, STRING, etc.

## Genericity

A generic class is a class that varies by type (e.g. LIST \[PHONE\], a list of phone numbers; ACCOUNT \[G-\>ACCOUNT\_TYPE\], allowing for ACCOUNT \[SAVINGS\] and ACCOUNT \[CHECKING\], etc.). Classes can be generic, to express that they are parameterized by types. Generic parameters appear in square brackets:

G is known as a "formal generic parameter". (Eiffel reserves "argument" for routines, and uses "parameter" only for generic classes.) With such a declaration G represents within the class an arbitrary type; so a function can return a value of type G, and a routine can take an argument of that type:

The `LIST [INTEGER]` and `LIST [WORD]` are "generic derivations" of this class. Permitted combinations (with `n: INTEGER`, `w: WORD`, `il: LIST [INTEGER]`, `wl: LIST [WORD]`) are:

`INTEGER` and `WORD` are the "actual generic parameters" in these generic derivations.

It is also possible to have 'constrained' formal parameters, for which the actual parameter must inherit from a given class, the "constraint". For example in

a derivation `HASH_TABLE [INTEGER, STRING]` is valid only if `STRING` inherits from `HASHABLE` (as it indeed does in typical Eiffel libraries). Within the class, having `KEY` constrained by `HASHABLE` means that for `x: KEY` it is possible to apply to `x` all the features of `HASHABLE`, as in `x.hash_code`.

## Inheritance basics

To inherit from one or more others, a class will include an `inherit` clause at the beginning:

The class may redefine (override) some or all of the inherited features. This must be explicitly announced at the beginning of the class through a `redefine` subclause of the inheritance clause, as in

See[\[8\]][57] for a complete discussion of Eiffel inheritance.

## Deferred classes and features

Classes may be defined with `deferred class` rather than with `class` to indicate that the class may not be directly instantiated. Non-instantiatable classes are called [abstract classes][58] in some other object-oriented programming languages. In Eiffel parlance, only an "effective" class can be instantiated (it may be a descendent of a deferred class). A feature can also be deferred by using the `deferred` keyword in place of a `do` clause. If a class has any deferred features it must be declared as deferred; however, a class with no deferred features may nonetheless itself be deferred.

Deferred classes play some of the same role as interfaces in languages such as Java, though many object-oriented programming theorists believe interfaces are themselves largely an answer to Java's lack of multiple inheritance (which Eiffel has).[\[9\]][59][\[10\]][60][\[11\]][61]

## Renaming

A class that inherits from one or more others gets all its features, by default under their original names. It may, however, change their names through `rename` clauses. This is required in the case of multiple inheritance if there are name clashes between inherited features; without renaming, the resulting class would violate the no-overloading principle noted above and hence would be invalid.

## Tuples

Tuples types may be viewed as a simple form of class, providing only attributes and the corresponding "setter" procedure. A typical tuple type reads

and could be used to describe a simple notion of birth record if a class is not needed. An instance of such a tuple is simply a sequence of values with the given types, given in brackets, such as

Components of such a tuple can be accessed as if the tuple tags were attributes of a class, for example if `t` has been assigned the above tuple then `t.weight` has value 3.5\.

Thanks to the notion of assigner command (see below), dot notation can also be used to assign components of such a tuple, as in

The tuple tags are optional, so that it is also possible to write a tuple type as `TUPLE [STRING, REAL, DATE]`. (In some compilers this is the only form of tuple, as tags were introduced with the ECMA standard.)

The precise specification of e.g. `TUPLE [A, B, C]` is that it describes sequences of _at least_ three elements, the first three being of types `A`, `B`, `C` respectively. As a result `TUPLE [A, B, C]` conforms to (may be assigned to) `TUPLE [A, B]`, to `TUPLE [A]` and to `TUPLE` (without parameters), the topmost tuple type to which all tuple types conform.

## Agents

Eiffel's "agent" mechanism wraps operations into objects. This mechanism can be used for iteration, [event-driven programming][62], and other contexts in which it is useful to pass operations around the program structure. Other programming languages, especially ones that emphasize [functional programming][40], allow a similar pattern using [continuations][63], [closures][64], or [generators][65]; Eiffel's agents emphasize the language's object-oriented paradigm, and use a syntax and semantics similar to code blocks in [Smalltalk][49] and [Ruby][66].

For example, to execute the `my_action` block for each element of `my_list`, one would write:

To execute `my_action` only on elements satisfying `my_condition`, a limitation/filter can be added:

In these examples, `my_action` and `my_condition` are routines. Prefixing them with `agent` yields an object that represents the corresponding routine with all its properties, in particular the ability to be called with the appropriate arguments. So if `a` represents that object (for example because `a` is the argument to `do_all`), the instruction

will call the original routine with the argument `x`, as if we had directly called the original routine: `my_action (x)`. Arguments to `call` are passed as a tuple, here `[x]`.

It is possible to keep some arguments to an agent **open** and make others **closed**. The open arguments are passed as arguments to `call`: they are provided at the time of _agent use_. The closed arguments are provided at the time of agent _definition_. For example, if `action2` has two arguments, the iteration

iterates `action2 (x, y)` for successive values of `x`, where the second argument remains set to `y`. The question mark `?` indicates an open argument; `y` is a closed argument of the agent. Note that the basic syntax `agent f` is a shorthand for `agent f (?, ?, ...)` with all arguments open. It is also possible to make the _target_ of an agent open through the notation `{T}?` where `T` is the type of the target.

The distinction between open and closed operands (operands = arguments + target) corresponds to the distinction between bound and free variables in [lambda calculus][67]. An agent expression such as `action2 (?, y)` with some operands closed and some open corresponds to a version of the original operation _[curried][68]_ on the closed operands.

The agent mechanism also allows defining an agent without reference to an existing routine (such as `my_action`, `my_condition`, `action2`), through inline agents as in

The inline agent passed here can have all the trappings of a normal routine, including precondition, postcondition, rescue clause (not used here), and a full signature. This avoids defining routines when all that's needed is a computation to be wrapped in an agent. This is useful in particular for contracts, as in an invariant clause that expresses that all elements of a list are positive:

The current agent mechanism leaves a possibility of run-time type error (if a routine with _n_ arguments is passed to an agent expecting _m_ arguments with _m_ < _n_). This can be avoided by a run-time check through the precondition `valid_arguments` of `call`. Several proposals for a purely static correction of this problem are available, including a language change proposal by Ribet et al.[\[12\]][69]

## Once routines

A routine's result can be cached using the `once` keyword in place of `do`. Non-first calls to a routine require no additional computation or resource allocation, but simply return a previously computed result. A common pattern for "once functions" is to provide shared objects; the first call will create the object, subsequent ones will return the reference to that object. The typical scheme is:

The returned object---`Result` in the example---can itself be mutable, but its reference remains the same.

Often "once routines" perform a required initialization: multiple calls to a library can include a call to the initialization procedure, but only the first such call will perform the required actions. Using this pattern initialization can be decentralized, avoiding the need for a special initialization module. "Once routines" are similar in purpose and effect to the [singleton pattern][70] in many programming languages, and to the [Borg pattern][71] used in Python.

By default, a "once routine" is called _once per thread_. The semantics can be adjusted to _once per process_ or _once per object_ by qualifying it with a "once key", e.g. `once ("PROCESS")`.

## Conversions

Eiffel provides a mechanism to allow conversions between various types. The mechanisms coexists with inheritance and complements it. To avoid any confusion between the two mechanisms, the design enforces the following principle:

For example `NEWSPAPER` may conform to `PUBLICATION`, but `INTEGER` converts to `REAL` (and does not inherit from it).

The conversion mechanism simply generalizes the ad hoc conversion rules (such as indeed between `INTEGER` and `REAL`) that exist in most programming languages, making them applicable to any type as long as the above principle is observed. For example a `DATE` class may be declared to convert to `STRING`; this makes it possible to create a string from a date simply through

as a shortcut for using an explicit object creation with a conversion procedure:

To make the first form possible as a synonym for the second, it suffices to list the creation procedure (constructor) `make_from_date` in a `convert` clause at the beginning of the class.

As another example, if there is such a conversion procedure listed from `TUPLE [day: INTEGER; month: STRING; year: INTEGER]`, then one can directly assign a tuple to a date, causing the appropriate conversion, as in

## Exception handling

[Exception handling][72] in Eiffel is based on the principles of design by contract. For example, an exception occurs when a routine's caller fails to satisfy a precondition, or when a routine cannot ensure a promised postcondition. In Eiffel, exception handling is not used for [control flow][73] or to correct data-input mistakes.

An Eiffel exception handler is defined using the rescue keyword. Within the rescue section, the retry keyword executes the routine again. For example, the following routine tracks the number of attempts at executing the routine, and only retries a certain number of times:

This example is arguably flawed for anything but the simplest programs, however, because connection failure is to be expected. For most programs a routine name like attempt\_connecting\_to\_server would be better, and the postcondition would not promise a connection, leaving it up to the caller to take appropriate steps if the connection was not opened.

## Concurrency

A number of networking and threading libraries are available, such as EiffelNet and EiffelThreads. A concurrency model for Eiffel, based on the concepts of design by contract, is [SCOOP][74], or _Simple Concurrent Object-Oriented Programming_, not yet part of the official language definition but available in [EiffelStudio][31]. CAMEO[\[13\]][75] is an (unimplemented) variation of SCOOP for Eiffel. Concurrency also interacts with exceptions. Asynchronous exceptions can be troublesome (where a routine raises an exception after its caller has itself finished).[\[14\]][76]

## Operator and bracket syntax, assigner commands

Eiffel's view of computation is completely object-oriented in the sense that every operation is relative to an object, the "target". So for example an addition such as

is conceptually understood as if it were the method call

with target `a`, feature `plus` and argument `b`.

Of course, the former is the conventional syntax and usually preferred. Operator syntax makes it possible to use either form by declaring the feature (for example in `INTEGER`, but this applies to other basic classes and can be used in any other for which such an operator is appropriate):

The range of operators that can be used as "alias" is quite broad; they include predefined operators such as "+" but also "free operators" made of non-alphanumeric symbols. This makes it possible to design special infix and prefix notations, for example in mathematics and physics applications.

Every class may in addition have _one_ function aliased to "\[\]", the "bracket" operator, allowing the notation `a [i, ...]` as a synonym for `a.f (i, ...)` where `f` is the chosen function. This is particularly useful for container structures such as arrays, hash tables, lists etc. For example access to an element of a hash table with string keys can be written

"Assigner commands" are a companion mechanism designed in the same spirit of allowing well-established, convenient notation reinterpreted in the framework of object-oriented programming. Assigner commands allow assignment-like syntax to call "setter" procedures. An assignment proper can never be of the form `a.x := v` as this violates information hiding; you have to go for a setter command (procedure). For example the hash table class can have the function and the procedure

Then to insert an element you have to use an explicit call to the setter command:

It is possible to write this equivalently as

(in the same way that `phone_book ["JILL SMITH"]` is a synonym for `number := phone_book.item ("JILL SMITH")`), provided the declaration of `item` now starts (replacement for \[3\]) with

This declares `put` as the assigner command associated with `item` and, combined with the bracket alias, makes \[5\] legal and equivalent to \[4\]. (It could also be written, without taking advantage of the bracket, as `phone_book.item ("JILL SMITH") := New_person`.

note: The argument list of a's assigner is constrained to be: (a's return type;all of a's argument list...)

## Lexical and syntax properties

Eiffel is not case-sensitive. The tokens `make`, `maKe` and `MAKE` all denote the same identifier. See, however, the "style rules" below.

Comments are introduced by `--` (two consecutive dashes) and extend to the end of the line.

The semicolon, as instruction separator, is optional. Most of the time the semicolon is just omitted, except to separate multiple instructions on a line. This results in less clutter on the program page.

There is no nesting of feature and class declarations. As a result the structure of an Eiffel class is simple: some class-level clauses (inheritance, invariant) and a succession of feature declarations, all at the same level.

It is customary to group features into separate "feature clauses" for more readability, with a standard set of basic feature tags appearing in a standard order, for example:

In contrast to most [curly bracket programming languages][77], Eiffel makes a clear distinction between expressions and instructions. This is in line with the [Command-Query Separation][78] principle of the Eiffel method.

## Style conventions

Much of the documentation of Eiffel uses distinctive style conventions, designed to enforce a consistent look-and-feel. Some of these conventions apply to the code format itself, and others to the standard typographic rendering of Eiffel code in formats and publications where these conventions are possible.

While the language is case-insensitive, the style standards prescribe the use of all-capitals for class names (`LIST`), all-lower-case for feature names (`make`), and initial capitals for constants (`Avogadro`). The recommended style also suggests underscore to separate components of a multi-word identifier, as in `average_temperature`.

The specification of Eiffel includes guidelines for displaying software texts in typeset formats: keywords in bold, user-defined identifiers and constants are shown in _`italics`_, comments, operators, and punctuation marks in `Roman`, with program text in `blue` as in the present article to distinguish it from explanatory text. For example, the "Hello, world!" program given above would be rendered as below in Eiffel documentation:

## Interfaces to other tools and languages

Eiffel is a purely object-oriented language but provides an open architecture for interfacing with "external" software in any other programming language.

It is possible for example to program machine- and operating-system level operations in [C][79]. Eiffel provides a straightforward interface to C routines, including support for "inline C" (writing the body of an Eiffel routine in C, typically for short machine-level operations).

Although there is no direct connection between Eiffel and C, many Eiffel [compilers][80] ([Visual Eiffel][38] is one exception) output C [source code][81] as an [intermediate language][82], to submit to a C compiler, for [optimizing][18] and [portability][83]. As such, they are examples of [transcompilers][84]. The Eiffel Compiler tecomp can execute Eiffel code directly (like an interpreter) without going via an intermediate C code or emit C code which will be passed to a C compiler in order to obtain optimized native code. On .NET, the [EiffelStudio][31] compiler directly generates [CIL][85] (Common Intermediate Language) code. The [SmartEiffel][36] compiler can also output [Java bytecode][86].

## References

## External links

[0]: /wiki/Object-oriented_programming "Object-oriented programming"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Bertrand_Meyer "Bertrand Meyer"
[3]: /wiki/Object-Oriented_Software_Construction "Object-Oriented Software Construction"
[4]: /w/index.php?title=Eiffel_Software&action=edit&redlink=1 "Eiffel Software (page does not exist)"
[5]: #cite_note-2
[6]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[7]: /wiki/Design_by_contract "Design by contract"
[8]: /wiki/Command-query_separation "Command-query separation"
[9]: /wiki/Uniform_access_principle "Uniform access principle"
[10]: /wiki/Single_choice_principle "Single choice principle"
[11]: /wiki/Open_Closed_Principle "Open Closed Principle"
[12]: /wiki/Option-operand_separation "Option-operand separation"
[13]: /wiki/Java_(programming_language) "Java (programming language)"
[14]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[15]: #cite_note-3
[16]: /wiki/Ecma_International "Ecma International"
[17]: /wiki/International_Organisation_for_Standardisation "International Organisation for Standardisation"
[18]: /wiki/Optimization_(computer_science) "Optimization (computer science)"
[19]: #cite_note-4
[20]: /wiki/Multiple_inheritance "Multiple inheritance"
[21]: /wiki/Genericity "Genericity"
[22]: /wiki/Polymorphism_(computer_science) "Polymorphism (computer science)"
[23]: /wiki/Encapsulation_(computer_science) "Encapsulation (computer science)"
[24]: /wiki/Parameter_covariance "Parameter covariance"
[25]: /wiki/Software_engineering "Software engineering"
[26]: /wiki/Assertion_(computing) "Assertion (computing)"
[27]: /wiki/Precondition "Precondition"
[28]: /wiki/Postcondition "Postcondition"
[29]: /wiki/Class_invariant "Class invariant"
[30]: /wiki/Abstract_data_type "Abstract data type"
[31]: /wiki/EiffelStudio "EiffelStudio"
[32]: /wiki/Integrated_development_environment "Integrated development environment"
[33]: /wiki/Open-source "Open-source"
[34]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[35]: http://www.sourceforge.net/projects/tecomp
[36]: /wiki/SmartEiffel "SmartEiffel"
[37]: /wiki/LibertyEiffel "LibertyEiffel"
[38]: /wiki/Visual_Eiffel "Visual Eiffel"
[39]: /wiki/Sather "Sather"
[40]: /wiki/Functional_programming "Functional programming"
[41]: /wiki/Blue_(programming_language) "Blue (programming language)"
[42]: /wiki/BlueJ "BlueJ"
[43]: /wiki/Apple_Media_Tool "Apple Media Tool"
[44]: /wiki/European_Computer_Manufacturers_Association "European Computer Manufacturers Association"
[45]: #cite_note-5
[46]: #cite_note-6
[47]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[48]: /wiki/Language_construct "Language construct"
[49]: /wiki/Smalltalk "Smalltalk"
[50]: /wiki/Information_hiding "Information hiding"
[51]: /wiki/Hello_world_program "Hello world program"
[52]: http://docs.eiffel.com/book/eiffelstudio/autotest
[53]: /wiki/Void_safety "Void safety"
[54]: /wiki/Method_overloading "Method overloading"
[55]: #cite_note-7
[56]: #Operator_and_bracket_syntax.2C_assigner_commands
[57]: #cite_note-8
[58]: /wiki/Abstract_class "Abstract class"
[59]: #cite_note-9
[60]: #cite_note-10
[61]: #cite_note-11
[62]: /wiki/Event-driven_programming "Event-driven programming"
[63]: /wiki/Continuations "Continuations"
[64]: /wiki/Closure_(computer_science) "Closure (computer science)"
[65]: /wiki/Generator_(computer_science) "Generator (computer science)"
[66]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[67]: /wiki/Lambda_calculus "Lambda calculus"
[68]: /wiki/Currying "Currying"
[69]: #cite_note-12
[70]: /wiki/Singleton_pattern "Singleton pattern"
[71]: https://en.wikibooks.org/wiki/Computer_Science_Design_Patterns/Singleton#Python "b:Computer Science Design Patterns/Singleton"
[72]: /wiki/Exception_handling "Exception handling"
[73]: /wiki/Control_flow "Control flow"
[74]: /wiki/SCOOP_(software) "SCOOP (software)"
[75]: #cite_note-13
[76]: #cite_note-14
[77]: /wiki/Curly_bracket_programming_language "Curly bracket programming language"
[78]: /wiki/Command-Query_Separation "Command-Query Separation"
[79]: /wiki/C_(programming_language) "C (programming language)"
[80]: /wiki/Compiler "Compiler"
[81]: /wiki/Source_code "Source code"
[82]: /wiki/Intermediate_language "Intermediate language"
[83]: /wiki/Porting "Porting"
[84]: /wiki/Transcompiler "Transcompiler"
[85]: /wiki/Common_Intermediate_Language "Common Intermediate Language"
[86]: /wiki/Java_bytecode "Java bytecode"