[Apache][0] **Groovy** is an [object-oriented][1] [programming language][2] for the [Java platform][3]. It is a [dynamic language][4] with features similar to those of [Python][5], [Ruby][6], [Perl][7], and [Smalltalk][8]. It can be used as a [scripting language][9] for the Java Platform, is dynamically compiled to [Java Virtual Machine][10] (JVM) [bytecode][11], and interoperates with other Java code and [libraries][12]. Groovy uses a Java-like [curly-bracket syntax][13]. Most Java code is also syntactically valid Groovy, although semantics may be different.

Groovy 1.0 was released on January 2, 2007, and Groovy 2.0 in July, 2012\. Since version 2, Groovy can also be [compiled statically][14], offering [type inference][15] and performance very close to that of Java.[\[1\]][16][\[2\]][17] Groovy 2.4 was the last major release under [Pivotal Software][18]'s sponsorship which ended in March 2015\.[\[3\]][19] Groovy has since changed its governance structure to a Project Management Committee (PMC) in the Apache Software Foundation.[\[4\]][20]

## History

[James Strachan][21] first talked about the development of Groovy on his blog in August 2003\.[\[5\]][22] Several versions were released between 2004 and 2006\. After the [Java Community Process][23] (JCP) standardization process began, the version numbering changed and a version called "1.0" was released on January 2, 2007\. After various betas and release candidates numbered 1.1, on December 7, 2007, Groovy 1.1 Final was released and immediately rebranded as Groovy 1.5 as a reflection of the many changes made.

In 2007, Groovy won the first prize at JAX 2007 innovation award.[\[6\]][24] In 2008, [Grails][25], a Groovy [web framework][26], won the second prize at JAX 2008 innovation award.[\[7\]][27]

In November 2008, [SpringSource][28] acquired the Groovy and Grails company (G2One).[\[8\]][29] In August 2009 [VMWare][30] acquired SpringSource.[\[9\]][31]

In July 2009, Strachan wrote on his blog, "I can honestly say if someone had shown me the _Programming in [Scala][32]_ book by [Martin Odersky][33], [Lex Spoon][34] & [Bill Venners][35] back in 2003 I'd probably have never created Groovy."[\[10\]][36] Strachan had left the project silently a year before the Groovy 1.0 release in 2007\.\[_[citation needed][37]_\]

In March 2004, Groovy had been submitted to the JCP as JSR 241[\[11\]][38] and accepted by ballot. After 8 years of inactivity, the Spec Lead changed its status to dormant in April 2012\.

On July 2, 2012, Groovy 2.0 was released, which, among other new features, added static compilation and a static type checker to Groovy.

When the [Pivotal][18] joint venture was spun-off by [EMC][39] and VMware in April 2013, Groovy and Grails formed part of its product portfolio. Pivotal ceased sponsoring Groovy and Grails from April 2015\.[\[3\]][19] That same month, Groovy changed its governance structure from a [Codehaus][40] repository to a Project Management Committee (PMC) in the [Apache Software Foundation][0] via its incubator.[\[4\]][20] Groovy graduated from Apache's incubator and become a top-level project in November 2015\.[\[12\]][41]

## Features

Most valid Java files are also valid Groovy files. Although the two languages are similar, Groovy code can be more compact, because it does not require all the elements that Java requires.[\[13\]][42] This makes it possible for Java programmers to learn Groovy gradually by starting with familiar Java syntax before acquiring more Groovy [idioms][43].[\[14\]][44]

Groovy features not available in Java include both static and [dynamic typing][45] (with the _def_ keyword), [operator overloading][46], native syntax for lists and [associative arrays][47] (maps), native support for [regular expressions][48], [polymorphic iteration][49], expressions embedded inside strings, additional helper methods, and the [safe navigation operator][50] "?." to check automatically for [nulls][51] (for example, "variable?.method()", or "variable?.field").[\[15\]][52]

Since version 2 Groovy also supports modularity (being able to ship only the needed jars according to the project needs, thus reducing the size of groovy's lib), type checking, static compilation, Project Coin syntax enhancements, [multicatch blocks][53] and ongoing performance enhancements using JDK7's invoke dynamic instruction.[\[16\]][54]

Groovy provides native support for various [markup languages][55] such as [XML][56] and [HTML][57], accomplished via an inline [DOM][58] syntax. This feature enables the definition and manipulation of many types of heterogeneous data assets with a uniform and concise syntax and programming methodology.\[_[citation needed][37]_\]

Unlike Java, a Groovy source code file can be executed as an (uncompiled) [script][9] if it contains code outside any class definition, if it is a class with a _main_ method, or if it is a _Runnable_ or _GroovyTestCase_. A Groovy script is fully parsed, compiled, and generated before execution (similar to Perl and Ruby). This occurs under the hood, and the compiled version is not saved as an artifact of the process.[\[17\]][59]

## GroovyBeans / Properties

_GroovyBeans_ are Groovy's version of [JavaBeans][60]. Groovy implicitly generates getters and setters. In the following code, setColor(String color) and getColor() are implicitly generated; and the last two lines, which appear to access color directly, are actually calling the implicitly generated methods.[\[18\]][61]

Groovy offers simple, consistent syntax for handling _lists_ and _maps_, reminiscent of Java's _array_ syntax.[\[19\]][62]

## Prototype extension

Groovy offers support for [prototype extension][63] through ExpandoMetaClass, Extension Modules (only in Groovy 2), Objective-C-like [Categories][64] and DelegatingMetaClass.[\[20\]][65]

ExpandoMetaClass offers a [domain-specific language][66] (DSL) to express the changes in the class easily, similar to [Ruby's][67] open class concept:

Groovy's changes in code through prototyping are not visible in Java, since each attribute/method invocation in Groovy goes through the metaclass registry. The changed code can only be accessed from Java by going to the metaclass registry.

Groovy also allows overriding methods as `getProperty()`, `propertyMissing()` among others, enabling the developer to intercept calls to an object and specify an action for them, in a simplified [aspect-oriented][68] way. The following code enables the class `java.lang.String` to respond to the `hex` property:

The Grails framework uses metaprogramming extensively to enable [GORM][69] dynamic finders, like `User.findByName('Josh')` and others.[\[21\]][70]

## Dot and parentheses

Groovy's syntax permits omitting parentheses and dots in some situations. The following groovy code

can be written as

enabling the development of [domain-specific languages][66] (DSLs) which look like plain English.

## Functional programming

Although Groovy is mostly an object-oriented language, it also offers [functional][71] features.

## Closures

According to Groovy's documentation: "Closures in Groovy work similar to a 'method pointer', enabling code to be written and run in a later point in time".[\[22\]][72] Groovy's closures support free variables, i.e. variables which have not been explicitly passed as a parameter to it, but exist in its declaration context, [partial application][73] (which it terms '[currying][74]'[\[23\]][75]), delegation, implicit, typed and untyped parameters.

When working on Collections of a determined type, the closure passed to an operation on the collection can be inferred:

A group of expressions can be written in a closure block without reference to an implementation and the responding object can be assigned at a later point using delegation:

## Curry

Usually called _[partial application][73]_,[\[23\]][75] this Groovy feature allows closures' parameters to be set to a default parameter in any of their arguments, creating a new closure with the bound value. If you supply one argument to the curry() method you will fix the first argument. If you supply N arguments you will fix arguments 1..N.

Curry can also be used in the reversed direction (fixing arguments N to N-1) using rcurry.

Groovy also supports [lazy evaluation][76],[\[24\]][77][\[25\]][78] reduce/fold,[\[26\]][79] infinite structures and immutability,[\[27\]][80] among others.[\[28\]][81]

## XML and JSON processing

On XML and [JSON][82] processing Groovy employs the [Builder pattern][83], making the production of the data structure less verbose. For example, the following XML:

Can be generated through the following Groovy code:

And also can be processed in a streaming way through `StreamingMarkupBuilder`. To change the implementation to JSON, we can just swap the `MarkupBuilder` to `JsonBuilder`.[\[29\]][84]

To parse it and search for a functional language we can use Groovy's `findAll` method:

## String interpolation

In Groovy we can interpolate the string with variables and expressions by using GStrings:[\[30\]][85]

GStrings containing variables and expressions must be declared using double quotes.

A complex expression must be enclosed in curly brackets. This prevents parts of it from being interpreted as belonging to the surrounding string instead of to the expression:

Expression evaluation can be deferred by employing arrow syntax:

## AST (Abstract Syntax Tree) Transformation

According to Groovy's own documentation, "When the Groovy compiler compiles Groovy scripts and classes, at some point in the process, the source code will end up being represented in memory in the form of a Concrete Syntax Tree, then transformed into an Abstract Syntax Tree. The purpose of AST Transformations is to let developers hook into the compilation process to be able to modify the AST before it is turned into bytecode that will be run by the JVM. AST Transformations provides Groovy with improved compile-time metaprogramming capabilities allowing powerful flexibility at the language level, without a runtime performance penalty.".[\[31\]][86]

Examples of ASTs in Groovy are:

Among others.

## Traits

According to Groovy's documentation, "[Traits][87] are a structural construct of the language which allow: composition of behaviors, runtime implementation of interfaces, behavior overriding, and compatibility with static type checking/compilation."

Traits can be seen as interfaces carrying both default implementations and state. A trait is defined using the trait keyword:

Then it can be used like a normal interface using the implements keyword:

Traits allow a wide range of capabilities, from simple composition to testing.

## Adoption

## IDE support

Many [integrated development environments][88] and [text editors][89] support Groovy:

## See also

## References

## Citations

## Sources

## External links

[0]: /wiki/Apache_Software_Foundation "Apache Software Foundation"
[1]: /wiki/Object-oriented_programming "Object-oriented programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Java_platform "Java platform"
[4]: /wiki/Dynamic_programming_language "Dynamic programming language"
[5]: /wiki/Python_(programming_language) "Python (programming language)"
[6]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[7]: /wiki/Perl "Perl"
[8]: /wiki/Smalltalk "Smalltalk"
[9]: /wiki/Scripting_language "Scripting language"
[10]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[11]: /wiki/Bytecode "Bytecode"
[12]: /wiki/Library_(computer_science) "Library (computer science)"
[13]: /wiki/Curly_bracket_programming_language "Curly bracket programming language"
[14]: /wiki/Static_typing "Static typing"
[15]: /wiki/Type_inference "Type inference"
[16]: #cite_note-1
[17]: #cite_note-2
[18]: /wiki/Pivotal_Software "Pivotal Software"
[19]: #cite_note-blog.pivotal.io-3
[20]: #cite_note-Groovy_joins_Apache_Incubator-4
[21]: /wiki/James_Strachan_(programmer) "James Strachan (programmer)"
[22]: #cite_note-5
[23]: /wiki/Java_Community_Process "Java Community Process"
[24]: #cite_note-6
[25]: /wiki/Grails_(framework) "Grails (framework)"
[26]: /wiki/Web_framework "Web framework"
[27]: #cite_note-7
[28]: /wiki/SpringSource "SpringSource"
[29]: #cite_note-8
[30]: /wiki/VMWare "VMWare"
[31]: #cite_note-9
[32]: /wiki/Scala_(programming_language) "Scala (programming language)"
[33]: /wiki/Martin_Odersky "Martin Odersky"
[34]: /w/index.php?title=Lex_Spoon&action=edit&redlink=1 "Lex Spoon (page does not exist)"
[35]: /w/index.php?title=Bill_Venners&action=edit&redlink=1 "Bill Venners (page does not exist)"
[36]: #cite_note-10
[37]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[38]: #cite_note-11
[39]: /wiki/EMC_Corporation "EMC Corporation"
[40]: /w/index.php?title=Codehaus&action=edit&redlink=1 "Codehaus (page does not exist)"
[41]: #cite_note-12
[42]: #cite_note-konig32-13
[43]: /wiki/Programming_idiom "Programming idiom"
[44]: #cite_note-14
[45]: /wiki/Dynamic_typing "Dynamic typing"
[46]: /wiki/Operator_overloading "Operator overloading"
[47]: /wiki/Associative_array "Associative array"
[48]: /wiki/Regular_expression "Regular expression"
[49]: /w/index.php?title=Polymorphic_iteration&action=edit&redlink=1 "Polymorphic iteration (page does not exist)"
[50]: /wiki/Safe_navigation_operator "Safe navigation operator"
[51]: /wiki/Null_pointer "Null pointer"
[52]: #cite_note-15
[53]: /wiki/Java_syntax#Code_blocks "Java syntax"
[54]: #cite_note-16
[55]: /wiki/Markup_language "Markup language"
[56]: /wiki/XML "XML"
[57]: /wiki/HTML "HTML"
[58]: /wiki/Document_Object_Model "Document Object Model"
[59]: #cite_note-konig37_8-17
[60]: /wiki/JavaBeans "JavaBeans"
[61]: #cite_note-konig38_9-18
[62]: #cite_note-konig41_3-19
[63]: /wiki/Prototype-based_programming "Prototype-based programming"
[64]: /wiki/Objective-C#Categories "Objective-C"
[65]: #cite_note-20
[66]: /wiki/Domain-specific_language "Domain-specific language"
[67]: /wiki/Ruby_programming_language "Ruby programming language"
[68]: /wiki/Aspect-oriented_programming "Aspect-oriented programming"
[69]: /wiki/Grails_(framework)#Persistence "Grails (framework)"
[70]: #cite_note-21
[71]: /wiki/Functional_programming "Functional programming"
[72]: #cite_note-22
[73]: /wiki/Partial_application "Partial application"
[74]: /wiki/Currying "Currying"
[75]: #cite_note-:0-23
[76]: /wiki/Lazy_evaluation "Lazy evaluation"
[77]: #cite_note-24
[78]: #cite_note-25
[79]: #cite_note-26
[80]: #cite_note-27
[81]: #cite_note-28
[82]: /wiki/JSON "JSON"
[83]: /wiki/Builder_pattern "Builder pattern"
[84]: #cite_note-29
[85]: #cite_note-30
[86]: #cite_note-31
[87]: /wiki/Trait_(computer_programming) "Trait (computer programming)"
[88]: /wiki/Integrated_development_environment "Integrated development environment"
[89]: /wiki/Text_editors "Text editors"