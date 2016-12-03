**Gosu** is a [statically-typed][0] [programming language][1] that runs on the [Java Virtual Machine][2] released under the [Apache 2][3].[\[1\]][4] This general-purpose programming language is used in several [open-source software][5] projects including [SparkGS][6] and [Ragnar DB][7] among several others, and is widely used in the insurance industry via [Guidewire Software][8]'s commercial products.[\[1\]][4][\[2\]][9] The language borrows from several existing languages including [Java][10], [C\#][11], and [ECMAScript][12]. A notable and unique feature is its Open Type System, which allows the language to be easily extended to provide compile-time checking and IDE awareness of information that is typically checked only at runtime in most other languages. Also of note is the language's ability to serve as both a full-featured general purpose language and as a concise scripting language. For instance, Gosu has free-form Program types (.gsp files) for scripting as well as statically verified Template files (.gst files). Gosu can optionally execute these and all other types directly from source without precompilation, which also distinguishes it from other static languages.

## History

Gosu began in 2002 as a scripting language called [GScript][13] at Guidewire Software. It was used to configure [business logic][14] in Guidewire's applications and was more of a simple rule definition language. In its original incarnation it followed [ECMAScript][12] guidelines. Guidewire enhanced the scripting language over the next 8 years, and released Gosu 0.7 beta to the community in November 2010\. The 0.8 beta was released in December 2010, and 0.8.6 beta was released in mid-2011 with additional typeloaders, making Gosu capable of loading [XML schema definition][15] files and XML documents as native Gosu types. The latest version is 1.10, released in January 2016, along with a new IntelliJ IDEA editor plugin.

## Philosophy

Gosu language creator and development lead, Scott McKinney, emphasizes pragmatism as the overriding principle in Gosu's design.[\[3\]][16] For instance, code readability is paramount. While the Gosu team tries to strike a balance between conciseness and readability, it favors readability as code tends to be read many times more than it is written. This simple idea has helped to keep Gosu a low-ceremony, pragmatic language. Discoverability is also a key principle that guides the language's design. With the aid of modern IDEs programmers must be able to quickly and deterministically apply static analysis to large Gosu codebases, some of them approaching 1M lines of code. As such Gosu's rich static type system is a necessary ingredient toward best of breed tooling via static analysis, rich parser feedback, intelligent code completion, deterministic refactoring, usage analysis, navigation, and the like. To that end the Gosu team is highly involved in both language and tooling/IDE design.

## Syntax and Semantic

Gosu follows a syntax resembling a combination of other languages. For instance, declarations follow more along the lines of [Pascal][17] with name-first grammar. Gosu classes can have functions, fields, properties, and inner classes as members. Nominal inheritance and composition via delegation are built into the type system as well as structural typing similar to the [Go][18] programming language.

Gosu supports several file types:

In addition to standard class types Gosu supports enums, interfaces, structures, and annotations.

Program files facilitate Gosu as a scripting language. For example, Gosu's Hello, World! is a simple one-line program:

Gosu classes are also executable a la Java:

Enhancements let you add additional functions and properties to other types, including built-in Java types such as String, List, etc. This example demonstrates adding a print() function to java.lang.String.

Now you can tell a String to print itself:

The combination of closures and enhancements provide a powerful way of coding with Collections. The overhead of Java streams is unnecessary with Gosu:

## References

## External links

[0]: /wiki/Type_system#Static_type-checking "Type system"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[3]: /wiki/Apache_license "Apache license"
[4]: #cite_note-slashdot-1
[5]: /wiki/Open-source_software "Open-source software"
[6]: https://sparkgs.github.io/
[7]: https://github.com/gosu-lang/ragnardb
[8]: /wiki/Guidewire_Software "Guidewire Software"
[9]: #cite_note-2
[10]: /wiki/Java_(programming_language) "Java (programming language)"
[11]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[12]: /wiki/ECMAScript "ECMAScript"
[13]: /wiki/GScript "GScript"
[14]: /wiki/Business_logic "Business logic"
[15]: /wiki/XML_Schema_(W3C) "XML Schema (W3C)"
[16]: #cite_note-drdobbs-3
[17]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[18]: /wiki/Go_(programming_language) "Go (programming language)"