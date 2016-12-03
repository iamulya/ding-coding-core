**Fantom** is a general purpose [object-oriented programming language][0] created by Brian and Andy Frank[\[4\]][1] that runs on the [Java Runtime Environment][2] (JRE), [JavaScript][3], and the .NET [Common Language Runtime][4] (CLR) (.NET support is considered "prototype"[\[5\]][5] status). Its primary design goal is to provide a standard library [API][6][\[6\]][7] that abstracts away the question of whether the code will ultimately run on the JRE or CLR. Like [C\#][8] and [Java][9], Fantom uses a [curly brace syntax][10]. The language supports [functional programming][11] through closures and concurrency through the [Actor model][12]. Fantom takes a "middle of the road" approach to its type system, blending together aspects of both static and dynamic typing.

## Typing

Fantom's type system is simple by design. All variables are statically typed, as they are in [C\#][8] and [Java][9]. Fantom rejects [generic types][13] due to their complexity, but it does have a set of built-in generic types: List, Map, and Func. Fantom can also take on the feel of a dynamically typed language through dynamic calls and automatic [downcasting][14]. Fantom has an easy to use [reflection][15] API and [metaprogramming][16] capabilities.

Fantom is open source under the [Academic Free License][17] 3.0 and is available for Windows and Unix-like platforms (including Mac OS X).[\[7\]][18]

## Pods

In Fantom, the unit of deployment is called a _pod_. Pods take on the role of [namespaces][19], [packages][20], and [modules][21]. They are stored as .pod files, which are [zip][22] files containing the FCode (the Fantom bytecode), the documentation, and [resource files][23] necessary to run the pod. A pod can define any number of types for use in other libraries and applications. A pod name fully qualifies a type name. For example, fwt::Widget is distinct from webapp::Widget. If a pod contains a type named Main, then it can be executed on the command line with: fan <podName\>

The Fantom build system can package a set of Pods into a [JAR archive][24] through build::JarDist.

## Fantom Widget Toolkit

Fantom ships with a standard [windowing toolkit][25] called the Fantom Widget Toolkit, or FWT for short.[\[8\]][26] Like Fantom, FWT was designed to be portable across several platforms. It is currently implemented on the JVM using the [Standard Widget Toolkit][27] as a backend. The JavaScript implementation is backed by the [canvas element][28] and [JavaFX][29], allowing FWT applications to be run in a web browser. There are plans for a CLR implementation using [Windows Forms][30].

## "Hello World" example

Here is the classic [Hello world program][31] written in Fantom:

Notice that "Void" is capitalized. This is because Void is a class, not a primitive type in Fantom.

## Name change

The original name of the Fantom programming language was Fan, named after the [neighborhood][32] where the creators live in [Richmond, Virginia][33]. After gaining some popularity members of the community raised concerns about the [searchability][34] of the name. In November 2009,[\[9\]][35] the name of the project was officially changed from Fan to Fantom.[\[10\]][36]

## Other features

Fantom has other useful features:

## See also

## References

## Further reading

## External links

[0]: /wiki/Object-oriented_programming_language "Object-oriented programming language"
[1]: #cite_note-4
[2]: /wiki/Java_Runtime_Environment "Java Runtime Environment"
[3]: /wiki/JavaScript "JavaScript"
[4]: /wiki/Common_Language_Runtime "Common Language Runtime"
[5]: #cite_note-5
[6]: /wiki/Application_programming_interface "Application programming interface"
[7]: #cite_note-6
[8]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[9]: /wiki/Java_(programming_language) "Java (programming language)"
[10]: /wiki/Curly_brace_programming_language "Curly brace programming language"
[11]: /wiki/Functional_programming "Functional programming"
[12]: /wiki/Actor_model "Actor model"
[13]: /wiki/Generic_programming "Generic programming"
[14]: /wiki/Downcasting "Downcasting"
[15]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[16]: /wiki/Metaprogramming "Metaprogramming"
[17]: /wiki/Academic_Free_License "Academic Free License"
[18]: #cite_note-7
[19]: /wiki/Namespace "Namespace"
[20]: /wiki/Java_package "Java package"
[21]: /wiki/Modular_programming "Modular programming"
[22]: /wiki/ZIP_(file_format) "ZIP (file format)"
[23]: /wiki/Resource_(Java) "Resource (Java)"
[24]: /wiki/JAR_(file_format) "JAR (file format)"
[25]: /wiki/Widget_toolkit "Widget toolkit"
[26]: #cite_note-8
[27]: /wiki/Standard_Widget_Toolkit "Standard Widget Toolkit"
[28]: /wiki/Canvas_element "Canvas element"
[29]: /wiki/JavaFX "JavaFX"
[30]: /wiki/Windows_Forms "Windows Forms"
[31]: /wiki/Hello_world_program "Hello world program"
[32]: /wiki/Fan_district "Fan district"
[33]: /wiki/Richmond,_Virginia "Richmond, Virginia"
[34]: /wiki/Search_engine_optimization "Search engine optimization"
[35]: #cite_note-9
[36]: #cite_note-Fantom_rename-10