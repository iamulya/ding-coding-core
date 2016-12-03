**Kotlin** is a [statically-typed][0] [programming language][1] that runs on the [Java Virtual Machine][2] and also can be compiled to [JavaScript][3] source code. Its primary development is from a team of [JetBrains][4] programmers based in [Saint Petersburg][5], Russia (the name comes from the [Kotlin Island][6], near St. Petersburg).[\[3\]][7] Kotlin was named Language of the Month in the January 2012 issue of _[Dr. Dobb's Journal][8]_.[\[4\]][9] While not syntax compatible with Java, Kotlin is designed to interoperate with [Java][10] code and is reliant on Java code from the existing [Java Class Library][11], such as the [collections framework][12].

## History

In July 2011 JetBrains unveiled Project Kotlin, a new language for the JVM, which had been under development for a year.[\[5\]][13] JetBrains lead Dmitry Jemerov said that most languages did not have the features they were looking for, with the exception of Scala. However, he cited the slow compile time of Scala as an obvious deficiency.[\[5\]][13] One of the stated goals of Kotlin is to compile as quickly as Java. In February 2012, JetBrains open sourced the project under the [Apache 2 license][14].[\[6\]][15] Jetbrains hopes that the new language will drive [IntelliJ IDEA][16] sales.[\[7\]][17]

Kotlin v1.0 was released on February 15, 2016\.[\[8\]][18] This is considered to be the first officially stable release and JetBrains has committed to long-term backwards compatibility starting with this version.

## Philosophy

Development lead [Andrey Breslav][19] has said that Kotlin is designed to be an industrial-strength object-oriented language, and to be a better language than Java but still be fully interoperable with Java code, allowing companies to make a gradual migration from Java to Kotlin.[\[9\]][20]

## Syntax

Like [Pascal][21], [TypeScript][22], [Haxe][23], [PL/SQL][24], [F\#][25], [Go][26] and [Scala][27]---and unlike [C][28] and its derivatives such as [C++][29], [Java][10], [C\#][30], and [D][31]---Kotlin [variable][32] declarations and [parameter lists][33] have the [data type][34] come after the variable name (and with a [colon][35] separator). As in Scala and [Groovy][36], [semicolons][37] are optional as a [statement][38] [terminator][39]; in most cases a [newline][40] is sufficient for the [compiler][41] to deduce that the statement has ended.[\[10\]][42]

## Semantics

In addition to the [classes][43] and [methods][44] (called member functions in Kotlin) of [object-oriented programming][45], Kotlin also supports [procedural programming][46] with the use of [functions][47].[\[11\]][48] As in C and C++, the [entry point][49] to a Kotlin [program][50] is a function named "main", which is passed an array containing any [command line][51] arguments. [Perl][52] and Unix/Linux [shell script][53]-style [string interpolation][54] is supported. [Type inference][55] is also supported.

**Hello, world! example**

Kotlin makes a distinction between nullable and non-nullable datatypes. All nullable objects must be declared with a "?" postfix after the type name. Operations on nullable objects need special care from developers: null-check must be performed before using the value. Kotlin provides null-safe operators to help developers:

An example of the use of the safe navigation operator:

## Tools

## Applications

One of the obvious applications of Kotlin is [Android][56] development. The platform has been long stuck on Java 6 (note: retrolambda[\[16\]][57] and the transition to Jack compiler[\[17\]][58]) and Kotlin introduces many improvements for programmers such as null-pointer safety, extension functions and infix notation. Accompanied by 100% Java compatibility and good IDE support (_Android Studio_[\[18\]][59]) it gives an excellent way to improve code readability, extend Android SDK classes and speed up development.

## Users

According to the Kotlin website, [Prezi][60] is using Kotlin in the backend.[\[19\]][61] DripStat has done a writeup of their experience with Kotlin. [\[20\]][62]

## References

## External links

[0]: /wiki/Type_system#Static_type-checking "Type system"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Java_Virtual_Machine "Java Virtual Machine"
[3]: /wiki/JavaScript "JavaScript"
[4]: /wiki/JetBrains "JetBrains"
[5]: /wiki/St._Petersburg "St. Petersburg"
[6]: /wiki/Kotlin_Island "Kotlin Island"
[7]: #cite_note-oracle_interview-3
[8]: /wiki/Dr._Dobb%27s_Journal "Dr. Dobb's Journal"
[9]: #cite_note-dobbs-4
[10]: /wiki/Java_(programming_language) "Java (programming language)"
[11]: /wiki/Java_Class_Library "Java Class Library"
[12]: /wiki/Java_collections_framework "Java collections framework"
[13]: #cite_note-announce-5
[14]: /wiki/Apache_license "Apache license"
[15]: #cite_note-open_source-6
[16]: /wiki/IntelliJ_IDEA "IntelliJ IDEA"
[17]: #cite_note-7
[18]: #cite_note-8
[19]: /w/index.php?title=Andrey_Breslav&action=edit&redlink=1 "Andrey Breslav (page does not exist)"
[20]: #cite_note-interview-9
[21]: /wiki/Pascal_programming_language "Pascal programming language"
[22]: /wiki/TypeScript "TypeScript"
[23]: /wiki/Haxe "Haxe"
[24]: /wiki/PL/SQL "PL/SQL"
[25]: /wiki/F_Sharp_(programming_language) "F Sharp (programming language)"
[26]: /wiki/Go_(programming_language) "Go (programming language)"
[27]: /wiki/Scala_(programming_language) "Scala (programming language)"
[28]: /wiki/C_language "C language"
[29]: /wiki/C%2B%2B "C++"
[30]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[31]: /wiki/D_(programming_language) "D (programming language)"
[32]: /wiki/Variable_(computer_science) "Variable (computer science)"
[33]: /wiki/Parameter_(computer_programming) "Parameter (computer programming)"
[34]: /wiki/Data_type "Data type"
[35]: /wiki/Colon_(punctuation) "Colon (punctuation)"
[36]: /wiki/Groovy_(programming_language) "Groovy (programming language)"
[37]: /wiki/Semicolon "Semicolon"
[38]: /wiki/Statement_(computer_science) "Statement (computer science)"
[39]: /wiki/Statement_terminator#Statements "Statement terminator"
[40]: /wiki/Newline "Newline"
[41]: /wiki/Compiler "Compiler"
[42]: #cite_note-10
[43]: /wiki/Class_(computer_programming) "Class (computer programming)"
[44]: /wiki/Method_(computer_programming) "Method (computer programming)"
[45]: /wiki/Object-oriented_programming "Object-oriented programming"
[46]: /wiki/Procedural_programming "Procedural programming"
[47]: /wiki/Function_(computer_science) "Function (computer science)"
[48]: #cite_note-11
[49]: /wiki/Entry_point "Entry point"
[50]: /wiki/Computer_program "Computer program"
[51]: /wiki/Command-line_interface "Command-line interface"
[52]: /wiki/Perl "Perl"
[53]: /wiki/Shell_script "Shell script"
[54]: /wiki/String_interpolation "String interpolation"
[55]: /wiki/Type_inference "Type inference"
[56]: /wiki/Android_(operating_system) "Android (operating system)"
[57]: #cite_note-16
[58]: #cite_note-17
[59]: #cite_note-18
[60]: /wiki/Prezi "Prezi"
[61]: #cite_note-19
[62]: #cite_note-20