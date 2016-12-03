**Scala** ([/ˈskɑːlɑː/][0] [_**SKAH**-lah_][1])[\[9\]][2] is a [general-purpose][3] [programming language][4]. Scala has full support for [functional programming][5] and a strong [static][6] [type system][7]. Designed to be concise,[\[10\]][8] many of Scala's design decisions were inspired by [criticism of Java][9]'s shortcomings.[\[8\]][10]

Scala source code is intended to be compiled to [Java bytecode][11], so that the resulting executable code runs on a [Java virtual machine][12]. Java libraries may be used directly in Scala code and vice versa ([language interoperability][13]).[\[11\]][14] Like Java, Scala is [object-oriented][15], and uses a curly-brace syntax reminiscent of the [C programming language][16]. Unlike Java, Scala has many features of [functional programming][5] languages like [Scheme][17], [Standard ML][18] and [Haskell][19], including [currying][20], [type inference][21], [immutability][22], [lazy evaluation][23], and [pattern matching][24]. It also has an advanced type system supporting [algebraic data types][25], [covariance and contravariance][26], [higher-order types][27] (but not [higher-rank types][28]), and [anonymous types][29]. Other features of Scala not present in Java include [operator overloading][30], optional parameters, [named parameters][31], [raw strings][32], and no [checked exceptions][33].

The name Scala is a [portmanteau][34] of _scalable_ and _language_, signifying that it is designed to grow with the demands of its users.[\[12\]][35]

## History

The design of Scala started in 2001 at the [École Polytechnique Fédérale de Lausanne][36] (EPFL) by [Martin Odersky][37]. It followed on from work on Funnel, a programming language combining ideas from functional programming and [Petri nets][38].[\[13\]][39] Odersky formerly worked on [Generic Java][40], and [javac][41], Sun's Java compiler.[\[13\]][39]

After an internal release in late 2003, Scala was released publicly in early 2004 on the [Java platform][42],[\[14\]][43] and on the [.NET Framework][44] in June 2004\.[\[8\]][10][\[13\]][39][\[15\]][45] A second version (v2.0) followed in March 2006\.[\[8\]][10] The .NET support was officially dropped in 2012\.[\[16\]][46]

Although Scala had extensive support for functional programming from its inception, Java remained a mostly object oriented language until the inclusion of [lambda expressions][47] with [Java 8][48] in 2014\.

On 17 January 2011 the Scala team won a five-year research grant of over €2.3 million from the [European Research Council][49].[\[17\]][50] On 12 May 2011, Odersky and collaborators launched Typesafe Inc. (renamed [Lightbend Inc.][51], February 2016; 10 months ago), a company to provide commercial support, training, and services for Scala. Typesafe received a $3 million investment in 2011 from [Greylock Partners][52].[\[18\]][53][\[19\]][54][\[20\]][55][\[21\]][56]

## Platforms and license

Scala runs on the [Java platform][42] ([Java virtual machine][12]) and is compatible with existing [Java][57] programs.[\[14\]][43] As [Android][58] applications are typically written in Java and translated from Java bytecode into [Dalvik][59] bytecode (which may be further translated to native machine code during installation) when packaged, Scala's Java compatibility makes it well suited to Android development, more so when a functional approach is preferred.[\[22\]][60] Scala also can compile to JavaScript, making it possible to write Scala programs that can run in web browsers.[\[23\]][61]

The Scala software distribution, including compiler and libraries, is released under a [BSD license][62].[\[24\]][63]

## Examples

## "Hello World" example

The [Hello World program][64] written in Scala has this form:

Unlike the [stand-alone Hello World application for Java][65], there is no class declaration and nothing is declared to be static; a [singleton object][66] created with the **object** keyword is used instead.

With the program saved in a file named `HelloWorld.scala`, it can be compiled from the command line:

To run it:

(You may need to use the "-cp" option to set the classpath as in Java).

This is analogous to the process for compiling and running Java code. Indeed, Scala's compiling and executing model is identical to that of Java, making it compatible with Java build tools such as [Apache Ant][67].

A shorter version of the "Hello World" Scala program is:

Scala includes interactive shell and scripting support.[\[25\]][68] Saved in a file named `HelloWorld2.scala`, this can be run as a script with no prior compiling using:

Commands can also be entered directly into the Scala interpreter, using the option **-e**:

Finally, commands can be entered interactively in the [REPL][69]:

## Basic example

The following example shows the differences between Java and Scala syntax:

Some syntactic differences in this code are:

These syntactic relaxations are designed to allow support for [domain-specific languages][70].

Some other basic syntactic differences:

## Example with classes

The following example contrasts the definition of classes in Java and Scala.

The above code shows some of the conceptual differences between Java and Scala's handling of classes:

## Features (with reference to Java)

Scala has the same compiling model as [Java][42] and [C\#][71], namely separate compiling and [dynamic class loading][72], so that Scala code can call Java libraries.

Scala's operational characteristics are the same as Java's. The Scala compiler generates byte code that is nearly identical to that generated by the Java compiler.[\[14\]][43] In fact, Scala code can be [decompiled][73] to readable Java code, with the exception of certain constructor operations. To the [Java virtual machine][12] (JVM), Scala code and Java code are indistinguishable. The only difference is one extra runtime library, `scala-library.jar`.[\[26\]][74]

Scala adds a large number of features compared with Java, and has some fundamental differences in its underlying model of expressions and types, which make the language theoretically cleaner and eliminate several _[corner cases][75]_ in Java. From the Scala perspective, this is practically important because several added features in Scala are also available in C\#. Examples include:

## Syntactic flexibility

As mentioned above, Scala has a good deal of syntactic flexibility, compared with Java. The following are some examples:

By themselves, these may seem like questionable choices, but collectively they serve the purpose of allowing [domain-specific languages][70] to be defined in Scala without needing to extend the compiler. For example, [Erlang][76]'s special syntax for sending a message to an actor, i.e. `actor ! message` can be (and is) implemented in a Scala library without needing language extensions.

## Unified type system

Java makes a sharp distinction between primitive types (e.g. `int` and `boolean`) and reference types (any [class][77]). Only reference types are part of the inheritance scheme, deriving from `java.lang.Object`. In Scala, however, all types inherit from a top-level class `Any`, whose immediate children are `AnyVal` (value types, such as `Int` and `Boolean`) and `AnyRef` (reference types, as in Java). This means that the Java distinction between primitive types and boxed types (e.g. `int` vs. `Integer`) is not present in Scala; boxing and unboxing is completely transparent to the user. Scala 2.10 allows for new value types to be defined by the user.

## For-expressions

Instead of the Java "[foreach][78]" loops for looping through an iterator, Scala has a much more powerful concept of `for`-expressions. These are similar to [list comprehensions][79] in languages such as Haskell, or a combination of list comprehensions and [generator expressions][80] in [Python][81]. For-expressions using the `yield` keyword allow a new [collection][82] to be generated by iterating over an existing one, returning a new collection of the same type. They are translated by the compiler into a series of `map`, `flatMap` and `filter` calls. Where `yield` is not used, the code approximates to an imperative-style loop, by translating to `foreach`.

A simple example is:

The result of running it is the following vector:

(Note that the expression `1 to 25` is not special syntax. The method `to` is rather defined in the standard Scala library as an extension method on integers, using a technique known as implicit conversions[\[28\]][83] that allows new methods to be added to existing types.)

A more complex example of iterating over a map is:

Expression `(mention, times) <- mentions` is an example of [pattern matching][24] (see below). Iterating over a map returns a set of key-value [tuples][84], and pattern-matching allows the tuples to easily be destructured into separate variables for the key and value. Similarly, the result of the comprehension also returns key-value tuples, which are automatically built back up into a map because the source object (from the variable `mentions`) is a map. Note that if `mentions` instead held a list, set, array or other collection of tuples, exactly the same code above would yield a new collection of the same type.

## Functional tendencies

While supporting all of the object-oriented features available in Java (and in fact, augmenting them in various ways), Scala also provides a large number of capabilities that are normally found only in [functional programming][5] languages. Together, these features allow Scala programs to be written in an almost completely functional style, and also allow functional and object-oriented styles to be mixed.

Examples are:

## Everything is an expression

Unlike C or Java, but similar to languages such as [Lisp][85], Scala makes no distinction between statements and expressions. All statements are in fact expressions that evaluate to some value. Functions that would be declared as returning `void` in C or Java, and statements like `while` that logically do not return a value, are in Scala considered to return the type `Unit`, which is a [singleton type][86], with only one object of that type. Functions and operators that never return at all (e.g. the `throw` operator or a function that always exits [non-locally][87] using an exception) logically have return type `Nothing`, a special type containing no objects; that is, a [bottom type][88], i.e. a subclass of every possible type. (This in turn makes type `Nothing` compatible with every type, allowing [type inference][21] to function correctly.)

Similarly, an `if-then-else` "statement" is actually an expression, which produces a value, i.e. the result of evaluating one of the two branches. This means that such a block of code can be inserted wherever an expression is desired, obviating the need for a [ternary operator][89] in Scala:

For similar reasons, `return` statements are unnecessary in Scala, and in fact are discouraged. As in Lisp, the last expression in a block of code is the value of that block of code, and if the block of code is the body of a function, it will be returned by the function.

To make it clear that all expressions are functions, even methods that return `Unit` are written with an equals sign

or equivalently (with type inference, and omitting the unnecessary braces):

## Type inference

Due to [type inference][21], the type of variables, function return values, and many other expressions can typically be omitted, as the compiler can deduce it. Examples are `val x = "foo"` (for an immutable, [constant][90] variable or [immutable object][91]) or `var x = 1.5` (for a variable whose value can later be changed). Type inference in Scala is essentially local, in contrast to the more global [Hindley-Milner][92] algorithm used in [Haskell][19], [ML][93] and other more purely functional languages. This is done to facilitate object-oriented programming. The result is that certain types still need to be declared (most notably, function parameters, and the return types of [recursive functions][94]), e.g.

or (with a return type declared for a recursive function)

## Anonymous functions

In Scala, functions are objects, and a convenient syntax exists for specifying [anonymous functions][47]. An example is the expression `x => x < 2`, which specifies a function with one parameter, that compares its argument to see if it is less than 2\. It is equivalent to the Lisp form `(lambda (x) (< x 2))`. Note that neither the type of `x` nor the return type need be explicitly specified, and can generally be inferred by [type inference][21]; but they can be explicitly specified, e.g. as `(x: Int) => x < 2` or even `(x: Int) => (x < 2): Boolean`.

Anonymous functions behave as true [closures][95] in that they automatically capture any variables that are lexically available in the environment of the enclosing function. Those variables will be available even after the enclosing function returns, and unlike in the case of Java's _anonymous inner classes_ do not need to be declared as final. (It is even possible to modify such variables if they are mutable, and the modified value will be available the next time the anonymous function is called.)

An even shorter form of anonymous function uses [placeholder][96] variables: For example, the following:

can be written more concisely as

or even

## Immutability

Scala enforces a distinction between immutable (unmodifiable, read-only) variables, whose value cannot be changed once assigned, and mutable variables, which can be changed. A similar distinction is made between immutable and mutable objects. The distinction must be made when a variable is declared: Immutable variables are declared with `val` while mutable variables use `var`. Similarly, all of the [collection][97] objects (container types) in Scala, e.g. [linked lists][98], [arrays][99], [sets][100] and [hash tables][101], are available in mutable and immutable variants, with the immutable variant considered the more basic and default implementation. The immutable variants are ["persistent"][102] data types in that they create a new object that encloses the old object and adds the new member(s); this is similar to how linked lists are built up in Lisp, where elements are prepended by creating a new "cons" cell with a pointer to the new element (the "head") and the old list (the "tail"). This allows for very easy concurrency --- no locks are needed as no shared objects are ever modified. Immutable structures are also constructed efficiently, in the sense that modified instances reuses most of old instance data and unused/unreferenced parts are collected by [GC][103].[\[29\]][104]

## Lazy (non-strict) evaluation

Evaluation is strict ("eager") by default. In other words, Scala evaluates expressions as soon as they are available, rather than as needed. However, you can declare a variable non-strict ("lazy") with the `lazy` keyword, meaning that the code to produce the variable's value will not be evaluated until the first time the variable is referenced. Non-strict collections of various types also exist (such as the type `Stream`, a non-strict linked list), and any collection can be made non-strict with the `view` method. Non-strict collections provide a good semantic fit to things like server-produced data, where the evaluation of the code to generate later elements of a list (that in turn triggers a request to a server, possibly located somewhere else on the web) only happens when the elements are actually needed.

## Tail recursion

Functional programming languages commonly provide [tail call][105] optimization to allow for extensive use of [recursion][94] without [stack overflow][106] problems. Limitations in Java bytecode complicate tail call optimization on the JVM. In general, a function that calls itself with a tail call can be optimized, but mutually recursive functions cannot. [Trampolines][107] have been suggested as a workaround.[\[30\]][108] Trampoline support has been provided by the Scala library with the object `scala.util.control.TailCalls` since Scala 2.8.0 (released July 14, 2010). A function may optionally be annotated with `@tailrec`, in which case it will not compile unless it is tail recursive.[\[31\]][109]

## Case classes and pattern matching

Scala has built-in support for [pattern matching][24], which can be thought of as a more sophisticated, extensible version of a [switch statement][110], where arbitrary data types can be matched (rather than just simple types like integers, booleans and strings), including arbitrary nesting. A special type of class known as a _case class_ is provided, which includes automatic support for pattern matching and can be used to model the [algebraic data types][25] used in many functional programming languages. (From the perspective of Scala, a case class is simply a normal class for which the compiler automatically adds certain behaviors that could also be provided manually, e.g., definitions of methods providing for deep comparisons and hashing, and destructuring a case class on its constructor parameters during pattern matching.)

An example of a definition of the [quicksort][111] algorithm using pattern matching is this:

The idea here is that we partition a list into the elements less than a pivot and the elements not less, recursively sort each part, and paste the results together with the pivot in between. This uses the same [divide-and-conquer][112] strategy of [mergesort][113] and other fast sorting algorithms.

The `match` operator is used to do pattern matching on the object stored in `list`. Each `case` expression is tried in turn to see if it will match, and the first match determines the result. In this case, `Nil` only matches the literal object `Nil`, but `pivot :: tail` matches a non-empty list, and simultaneously _destructures_ the list according to the pattern given. In this case, the associated code will have access to a local variable named `pivot` holding the head of the list, and another variable `tail` holding the tail of the list. Note that these variables are read-only, and are semantically very similar to variable [bindings][114] established using the `let` operator in Lisp and Scheme.

Pattern matching also happens in local variable declarations. In this case, the return value of the call to `tail.partition` is a [tuple][84] --- in this case, two lists. (Tuples differ from other types of containers, e.g. lists, in that they are always of fixed size and the elements can be of differing types --- although here they are both the same.) Pattern matching is the easiest way of fetching the two parts of the tuple.

The form `_ < pivot` is a declaration of an [anonymous function][47] with a placeholder variable; see the section above on anonymous functions.

The list operators `::` (which adds an element onto the beginning of a list, similar to `cons` in Lisp and Scheme) and `:::` (which appends two lists together, similar to `append` in Lisp and Scheme) both appear. Despite appearances, there is nothing "built-in" about either of these operators. As specified above, any string of symbols can serve as function name, and a method applied to an object can be written "[infix][115]"-style without the period or parentheses. The line above as written:

could also be written thus:

in more standard method-call notation. (Methods that end with a colon are right-associative and bind to the object to the right.)

## Partial functions

In the pattern-matching example above, the body of the `match` operator is a [partial function][116], which consists of a series of `case` expressions, with the first matching expression prevailing, similar to the body of a [switch statement][110]. Partial functions are also used in the exception-handling portion of a `try` statement:

Finally, a partial function can be used alone, and the result of calling it is equivalent to doing a `match` over it. For example, the prior code for [quicksort][111] can be written thus:

Here a read-only _variable_ is declared whose type is a function from lists of integers to lists of integers, and bind it to a partial function. (Note that the single parameter of the partial function is never explicitly declared or named.) However, we can still call this variable exactly as if it were a normal function:

## Object-oriented extensions

Scala is a pure [object-oriented language][117] in the sense that every value is an [object][118]. [Data types][119] and behaviors of objects are described by [classes][120] and [traits][121]. Class abstractions are extended by [subclassing][122] and by a flexible [mixin][123]-based composition mechanism to avoid the problems of [multiple inheritance][124].

Traits are Scala's replacement for Java's [interfaces][125]. Interfaces in Java versions under 8 are highly restricted, able only to contain abstract function declarations. This has led to criticism that providing convenience methods in interfaces is awkward (the same methods must be reimplemented in every implementation), and extending a published interface in a backwards-compatible way is impossible. Traits are similar to [mixin][123] classes in that they have nearly all the power of a regular abstract class, lacking only class parameters (Scala's equivalent to Java's constructor parameters), since traits are always mixed in with a class. The `super` operator behaves specially in traits, allowing traits to be chained using composition in addition to inheritance. The following example is a simple window system:

A variable may be declared thus:

The result of calling `mywin.draw()` is

In other words, the call to `draw` first executed the code in `TitleDecoration` (the last trait mixed in), then (through the `super()` calls) threaded back through the other mixed-in traits and eventually to the code in `Window`, _even though none of the traits inherited from one another_. This is similar to the [decorator pattern][126], but is more concise and less error-prone, as it doesn't require explicitly encapsulating the parent window, explicitly forwarding functions whose implementation isn't changed, or relying on run-time initialization of entity relationships. In other languages, a similar effect could be achieved at compile-time with a long linear chain of [implementation inheritance][127], but with the disadvantage compared to Scala that one linear inheritance chain would have to be declared for each possible combination of the mix-ins.

## Expressive type system

Scala is equipped with an expressive static type system that enforces the safe and coherent use of abstractions. In particular, the type system supports:

Scala is able to [infer types][21] by usage. This makes most static type declarations optional. Static types need not be explicitly declared unless a compiler error indicates the need. In practice, some static type declarations are included for the sake of code clarity.

## Type enrichment

A common technique in Scala, known as "enrich my library"[\[32\]][128] (originally termed as "pimp my library" by Martin Odersky in 2006;[\[28\]][83] though concerns were raised about this phrasing due to its negative connotation[\[33\]][129] and immaturity[\[34\]][130]), allows new methods to be used as if they were added to existing types. This is similar to the C\# concept of [extension methods][131] but more powerful, because the technique is not limited to adding methods and can, for instance, be used to implement new interfaces. In Scala, this technique involves declaring an [implicit conversion][132] from the type "receiving" the method to a new type (typically, a class) that wraps the original type and provides the additional method. If a method cannot be found for a given type, the compiler automatically searches for any applicable implicit conversions to types that provide the method in question.

This technique allows new methods to be added to an existing class using an add-on library such that only code that _imports_ the add-on library gets the new functionality, and all other code is unaffected.

The following example shows the enrichment of type `Int` with methods `isEven` and `isOdd`:

Importing the members of `MyExtensions` brings the implicit conversion to extension class `IntPredicates` into scope.[\[35\]][133]

## Concurrency

Scala standard library includes support for the [actor model][134], in addition to the standard Java concurrency APIs. [Lightbend Inc.][51], provides a platform[\[36\]][135] that includes [Akka][136],[\[37\]][137] a separate open source framework that provides actor-based concurrency. Akka actors may be [distributed][138] or combined with [software transactional memory][139] (_transactors_). Alternative [communicating sequential processes][140] (CSP) implementations for channel-based message passing are Communicating Scala Objects,[\[38\]][141] or simply via [JCSP][142].

An Actor is like a thread instance with a mailbox. It can be created by `system.actorOf`, overriding the `receive` method to receive messages and using the `!` (exclamation point) method to send a message.[\[39\]][143] The following example shows an EchoServer that can receive messages and then print them.

Scala also comes with built-in support for data-parallel programming in the form of Parallel Collections[\[40\]][144] integrated into its Standard Library since version 2.9.0\.

The following example shows how to use Parallel Collections to improve performance.[\[41\]][145]

Besides actor support and data-parallelism, Scala also supports asynchronous programming with Futures and Promises, software transactional memory, and event streams.[\[42\]][146]

## Cluster computing

The most well-known open source cluster computing solution, written in Scala, is [Apache Spark][147]. Additionally, [Apache Kafka][148], the [publish-subscribe][149] [message queue][150] popular with Spark and other stream processing technologies, is written in Scala.

## Testing

There are several ways to test code in Scala:

## Versions

## Comparison with other JVM languages

Scala is often compared with [Groovy][151] and [Clojure][152], two other programming languages also using the JVM. Substantial differences between these languages are found in the type system, in the extent to which each language supports object-oriented and functional programming, and in the similarity of their syntax to the syntax of Java.

Scala is [statically typed][153], while both Groovy and Clojure are [dynamically typed][154]. This makes the type system more complex and difficult to understand but allows almost all type errors to be caught at compile-time and can result in significantly faster execution. By contrast, dynamic typing requires more testing to ensure program correctness and is generally slower in order to allow greater programming flexibility and simplicity. Regarding speed differences, current versions of Groovy and Clojure allow for optional type annotations to help programs avoid the overhead of dynamic typing in cases where types are practically static. This overhead is further reduced when using recent versions of the JVM, which has been enhanced with an _invoke dynamic_ instruction for methods that are defined with dynamically typed arguments. These advances reduce the speed gap between static and dynamic typing, although a statically typed language, like Scala, is still the preferred choice when execution efficiency is very important.

Regarding programming paradigms, Scala inherits the object-oriented model of Java and extends it in various ways. Groovy, while also strongly object-oriented, is more focused in reducing verbosity. In Clojure, object-oriented programming is deemphasised with functional programming being the main strength of the language. Scala also has many functional programming facilities, including features found in advanced functional languages like [Haskell][19], and tries to be agnostic between the two paradigms, letting the developer choose between the two paradigms or, more frequently, some combination thereof.

Regarding syntax similarity with Java, Scala inherits much of Java's syntax, as is the case with Groovy. Clojure on the other hand follows the [Lisp][85] syntax, which is different in both appearance and philosophy. However, learning Scala is also considered difficult because of its many advanced features. This is not the case with Groovy, despite its also being a feature-rich language, mainly because it was designed to be mainly a scripting language.\[_[citation needed][155]_\]

## Adoption

## Language rankings

Scala was voted the most popular JVM scripting language at the 2012 [JavaOne][156] conference.[\[14\]][43]

As of 2013, all JVM-based languages (Scala, Groovy, Clojure) are significantly less popular than the original Java language, which is usually ranked first or second,[\[78\]][157][\[79\]][158][\[80\]][159] and which is also simultaneously evolving over time.

The RedMonk Programming Language Rankings, as of June 2016 placed Scala 14th, based on a position in terms of number of [GitHub][160] projects and in terms of number of questions tagged on [Stack Overflow][161].[\[78\]][157] (Groovy and Clojure were both in 20th place.)[\[78\]][157] Here, Scala is shown somewhat between a first-tier group of languages (including, [C][16], [Python][81], [PHP][162], [Ruby][163], etc.), and ahead of a second-tier group.

Another measure, the Popularity of Programming Language Index[\[81\]][164] which tracks searches for language tutorials ranked Scala 15th in July 2016 with a small upward trend, making it the most popular JVM-based language after Java.

As of January 2016, the [TIOBE index][165][\[79\]][158] of programming language popularity shows Scala in 30th place (as measured by internet search engine rankings and similar publication-counting), but--as mentioned under "Bugs & Change Requests"--TIOBE is aware of issues with its methodology of using search terms which might not be commonly used in some programming language communities. In this ranking Scala is ahead of functional languages [Haskell][19] (39th), [Erlang][76] (35rd) and [Clojure][152] (\>50), but below [Java][57] (1st).

The [ThoughtWorks][166] Technology Radar, which is an opinion based half-yearly report of a group of senior technologists,[\[82\]][167] recommends Scala adoption in its languages and frameworks category.[\[83\]][168]

According to [Indeed.com][169] Job Trends, Scala demand has been rapidly increasing since 2010, trending ahead of Clojure and Groovy.[\[84\]][170]

## Companies

## Criticism

In March 2015, former VP of the Platform Engineering group at Twitter [Raffi Krikorian][171], stated he would not have chosen Scala in 2011 due to its learning curve.[\[113\]][172] The same month, LinkedIn SVP Kevin Scott stated their decision to "minimize \[their\] dependence on Scala."[\[114\]][173] In November 2011, [Yammer][174] moved away from Scala for reasons that included the learning curve for new team members and incompatibility from one version of the Scala compiler to the next.[\[115\]][175]

[dotty][176] is an attempt at creating a simpler, faster _Scala_ compiler based on a formal [calculus][177],[\[1\]][178] that will enable faster language development and future language simplification.[\[116\]][179]

## See also

## References

[\[117\]][180]

## Further reading

## External links

[0]: /wiki/Help:IPA_for_English "Help:IPA for English"
[1]: /wiki/Help:Pronunciation_respelling_key "Help:Pronunciation respelling key"
[2]: #cite_note-9
[3]: /wiki/General-purpose_programming_language "General-purpose programming language"
[4]: /wiki/Programming_language "Programming language"
[5]: /wiki/Functional_programming "Functional programming"
[6]: /wiki/Static_typing "Static typing"
[7]: /wiki/Type_system "Type system"
[8]: #cite_note-10
[9]: /wiki/Criticism_of_Java "Criticism of Java"
[10]: #cite_note-overview-8
[11]: /wiki/Java_bytecode "Java bytecode"
[12]: /wiki/Java_virtual_machine "Java virtual machine"
[13]: /wiki/Language_interoperability "Language interoperability"
[14]: #cite_note-11
[15]: /wiki/Object-oriented_programming "Object-oriented programming"
[16]: /wiki/C_(programming_language) "C (programming language)"
[17]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[18]: /wiki/Standard_ML "Standard ML"
[19]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[20]: /wiki/Currying "Currying"
[21]: /wiki/Type_inference "Type inference"
[22]: /wiki/Immutability "Immutability"
[23]: /wiki/Lazy_evaluation "Lazy evaluation"
[24]: /wiki/Pattern_matching "Pattern matching"
[25]: /wiki/Algebraic_data_type "Algebraic data type"
[26]: /wiki/Covariance_and_contravariance_(computer_science) "Covariance and contravariance (computer science)"
[27]: /wiki/Higher-order_type_operator "Higher-order type operator"
[28]: /wiki/Parametric_polymorphism "Parametric polymorphism"
[29]: /wiki/Anonymous_type "Anonymous type"
[30]: /wiki/Operator_overloading "Operator overloading"
[31]: /wiki/Named_parameter "Named parameter"
[32]: /wiki/Raw_string "Raw string"
[33]: /wiki/Checked_exception "Checked exception"
[34]: /wiki/Portmanteau "Portmanteau"
[35]: #cite_note-StepsInScala-12
[36]: /wiki/%C3%89cole_Polytechnique_F%C3%A9d%C3%A9rale_de_Lausanne "École Polytechnique Fédérale de Lausanne"
[37]: /wiki/Martin_Odersky "Martin Odersky"
[38]: /wiki/Petri_net "Petri net"
[39]: #cite_note-history-of-scala-13
[40]: /wiki/Generic_Java "Generic Java"
[41]: /wiki/Javac "Javac"
[42]: /wiki/Java_(software_platform) "Java (software platform)"
[43]: #cite_note-cacm-14
[44]: /wiki/.NET_Framework ".NET Framework"
[45]: #cite_note-spec-15
[46]: #cite_note-16
[47]: /wiki/Anonymous_function "Anonymous function"
[48]: /wiki/Java_8 "Java 8"
[49]: /wiki/European_Research_Council "European Research Council"
[50]: #cite_note-17
[51]: /wiki/Lightbend_Inc. "Lightbend Inc."
[52]: /wiki/Greylock_Partners "Greylock Partners"
[53]: #cite_note-18
[54]: #cite_note-19
[55]: #cite_note-20
[56]: #cite_note-21
[57]: /wiki/Java_(programming_language) "Java (programming language)"
[58]: /wiki/Android_(operating_system) "Android (operating system)"
[59]: /wiki/Dalvik_(software) "Dalvik (software)"
[60]: #cite_note-22
[61]: #cite_note-23
[62]: /wiki/BSD_license "BSD license"
[63]: #cite_note-24
[64]: /wiki/Hello_World_program "Hello World program"
[65]: /wiki/Java_(programming_language)#.22Hello.2C_world.21.22_program "Java (programming language)"
[66]: /wiki/Singleton_pattern "Singleton pattern"
[67]: /wiki/Apache_Ant "Apache Ant"
[68]: #cite_note-25
[69]: /wiki/REPL "REPL"
[70]: /wiki/Domain-specific_language "Domain-specific language"
[71]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[72]: /wiki/Java_Classloader "Java Classloader"
[73]: /wiki/Decompiler "Decompiler"
[74]: #cite_note-26
[75]: /wiki/Corner_cases "Corner cases"
[76]: /wiki/Erlang_(programming_language) "Erlang (programming language)"
[77]: /wiki/Class_(computer_programming) "Class (computer programming)"
[78]: /wiki/Foreach_loop "Foreach loop"
[79]: /wiki/List_comprehension "List comprehension"
[80]: /wiki/Python_syntax_and_semantics#Generator_expressions "Python syntax and semantics"
[81]: /wiki/Python_(programming_language) "Python (programming language)"
[82]: /wiki/Collection_(computer_science) "Collection (computer science)"
[83]: #cite_note-artima1-28
[84]: /wiki/Tuple_(computer_science) "Tuple (computer science)"
[85]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[86]: /wiki/Singleton_(mathematics) "Singleton (mathematics)"
[87]: /wiki/Exception_handling "Exception handling"
[88]: /wiki/Bottom_type "Bottom type"
[89]: /wiki/Ternary_operator "Ternary operator"
[90]: /wiki/Constant_(programming) "Constant (programming)"
[91]: /wiki/Immutable_object "Immutable object"
[92]: /wiki/Hindley-Milner "Hindley-Milner"
[93]: /wiki/ML_(programming_language) "ML (programming language)"
[94]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[95]: /wiki/Closure_(computer_science) "Closure (computer science)"
[96]: /wiki/Free_variables_and_bound_variables "Free variables and bound variables"
[97]: /wiki/Collection_(abstract_data_type) "Collection (abstract data type)"
[98]: /wiki/Linked_list "Linked list"
[99]: /wiki/Array_data_type "Array data type"
[100]: /wiki/Set_(computer_science) "Set (computer science)"
[101]: /wiki/Hash_table "Hash table"
[102]: /wiki/Persistent_data_structure "Persistent data structure"
[103]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[104]: #cite_note-29
[105]: /wiki/Tail_call "Tail call"
[106]: /wiki/Stack_overflow "Stack overflow"
[107]: /wiki/Trampoline_(computing) "Trampoline (computing)"
[108]: #cite_note-30
[109]: #cite_note-31
[110]: /wiki/Switch_statement "Switch statement"
[111]: /wiki/Quicksort "Quicksort"
[112]: /wiki/Divide_and_conquer_algorithm "Divide and conquer algorithm"
[113]: /wiki/Mergesort "Mergesort"
[114]: /wiki/Name_binding "Name binding"
[115]: /wiki/Infix "Infix"
[116]: /wiki/Partial_function "Partial function"
[117]: /wiki/Object-oriented_language "Object-oriented language"
[118]: /wiki/Object_(computer_science) "Object (computer science)"
[119]: /wiki/Data_type "Data type"
[120]: /wiki/Class_(computer_science) "Class (computer science)"
[121]: /wiki/Trait_(computer_science) "Trait (computer science)"
[122]: /wiki/Subclass_(computer_science) "Subclass (computer science)"
[123]: /wiki/Mixin "Mixin"
[124]: /wiki/Multiple_inheritance "Multiple inheritance"
[125]: /wiki/Protocol_(object-oriented_programming) "Protocol (object-oriented programming)"
[126]: /wiki/Decorator_pattern "Decorator pattern"
[127]: /wiki/Inheritance_(object-oriented_programming)#Code_reuse "Inheritance (object-oriented programming)"
[128]: #cite_note-32
[129]: #cite_note-33
[130]: #cite_note-34
[131]: /wiki/Extension_method "Extension method"
[132]: /wiki/Implicit_conversion "Implicit conversion"
[133]: #cite_note-35
[134]: /wiki/Actor_model "Actor model"
[135]: #cite_note-36
[136]: /wiki/Akka_(toolkit) "Akka (toolkit)"
[137]: #cite_note-AkkaAbout-37
[138]: /wiki/Distributed_computing "Distributed computing"
[139]: /wiki/Software_transactional_memory "Software transactional memory"
[140]: /wiki/Communicating_sequential_processes "Communicating sequential processes"
[141]: #cite_note-CSO-38
[142]: /wiki/JCSP "JCSP"
[143]: #cite_note-39
[144]: #cite_note-40
[145]: #cite_note-41
[146]: #cite_note-42
[147]: /wiki/Spark_(cluster_computing_framework) "Spark (cluster computing framework)"
[148]: /wiki/Apache_Kafka "Apache Kafka"
[149]: /wiki/Publish%E2%80%93subscribe_pattern "Publish–subscribe pattern"
[150]: /wiki/Message_queue "Message queue"
[151]: /wiki/Groovy_(programming_language) "Groovy (programming language)"
[152]: /wiki/Clojure "Clojure"
[153]: /wiki/Statically_typed "Statically typed"
[154]: /wiki/Dynamically_typed "Dynamically typed"
[155]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[156]: /wiki/JavaOne "JavaOne"
[157]: #cite_note-redmonk1-78
[158]: #cite_note-tiobe1-79
[159]: #cite_note-80
[160]: /wiki/GitHub "GitHub"
[161]: /wiki/Stack_Overflow "Stack Overflow"
[162]: /wiki/PHP "PHP"
[163]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[164]: #cite_note-pypl-81
[165]: /wiki/TIOBE_index "TIOBE index"
[166]: /wiki/ThoughtWorks "ThoughtWorks"
[167]: #cite_note-82
[168]: #cite_note-83
[169]: /wiki/Indeed.com "Indeed.com"
[170]: #cite_note-84
[171]: /wiki/Raffi_Krikorian "Raffi Krikorian"
[172]: #cite_note-113
[173]: #cite_note-114
[174]: /wiki/Yammer "Yammer"
[175]: #cite_note-115
[176]: https://github.com/lampepfl/dotty
[177]: /wiki/Formal_system "Formal system"
[178]: http://lampwww.epfl.ch/~amin/dot/fool.pdf
[179]: #cite_note-116
[180]: #cite_note-117