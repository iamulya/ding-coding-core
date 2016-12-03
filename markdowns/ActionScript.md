**ActionScript** is an [object-oriented programming][0] language originally developed by [Macromedia Inc.][1] (since merged into [Adobe Systems][2]). It is a derivation of [HyperTalk][3], the scripting language for [HyperCard][4].[\[2\]][5] It is now a dialect of [ECMAScript][6] (meaning it is a superset of the syntax and semantics of the language more widely known as [JavaScript][7]), though it originally arose as a sibling, both being influenced by HyperTalk.

ActionScript is used primarily for the development of websites and software targeting the [Adobe Flash Player][8] platform, used on [Web pages][9] in the form of embedded SWF files.

ActionScript 3 is also used with [Adobe AIR][10] system for the development of desktop and mobile applications. The language itself is open-source in that its specification is offered free of charge[\[3\]][11] and both an open source compiler (as part of [Apache Flex][12]) and open source virtual machine ([Mozilla Tamarin][13]) are available.

ActionScript is also used with [Scaleform GFx][14] for the development of 3D video game user interfaces and [HUDs][15].

## Overview

ActionScript was initially designed for controlling simple 2D vector animations made in [Adobe Flash][16] (formerly Macromedia Flash). Initially focused on animation, early versions of Flash content offered few interactivity features and thus had very limited scripting capability. Later versions added functionality allowing for the creation of Web-based games and [rich Internet applications][17] with streaming media (such as video and audio). Today, ActionScript is suitable for mobile development through [Adobe AIR][10], use in some database applications, and in basic robotics, as with the [Make Controller Kit][18].

Flash MX 2004 introduced ActionScript 2.0, a [scripting language][19] more suited to the development of Flash applications. It is often possible to save time by scripting something rather than animating it, which usually also enables a higher level of flexibility when editing.

Since the arrival of the Flash Player 9 alpha (in 2006) a newer version of ActionScript has been released, ActionScript 3.0\. This version of the language is intended to be compiled and run on a version of the [ActionScript Virtual Machine][20] that has been itself completely re-written from the ground up (dubbed AVM2).[\[4\]][21] Because of this, code written in ActionScript 3.0 is generally targeted for Flash Player 9 and higher and will not work in previous versions. At the same time, ActionScript 3.0 executes up to 10 times faster than legacy ActionScript code due to the [Just-In-Time compiler][22] enhancements.[\[5\]][23]

Flash libraries can be used with the XML capabilities of the browser to render rich content in the browser. This technology is known as Asynchronous Flash and XML, much like [AJAX][24]. Adobe offers its [Flex][12] product line to meet the demand for [Rich Internet Applications][25] built on the Flash runtime, with behaviors and programming done in ActionScript. ActionScript 3.0 forms the foundation of the Flex 2 API.

## History

ActionScript started as an [object-oriented language][26] for [Macromedia][1]'s Flash authoring tool, now developed by [Adobe Systems][2] as [Adobe Flash][16]. The first three versions of the Flash authoring tool provided limited interactivity features. Early Flash developers could attach a simple command, called an "action", to a button or a frame. The set of actions was basic navigation controls, with commands such as "play", "stop", "getURL", and "gotoAndPlay".

With the release of Flash 4 in 1999, this simple set of actions became a small [scripting language][19]. New capabilities introduced for Flash 4 included [variables][27], [expressions][28], [operators][29], [if statements][30], and [loops][31]. Although referred to internally as "ActionScript", the Flash 4 user manual and marketing documents continued to use the term "actions" to describe this set of commands.

## Timeline by player version

## Timeline by ActionScript version

**2000--2004: ActionScript "1.0"** With the release of Flash 5 in September 2000, the "actions" from Flash 4 were enhanced once more and named "ActionScript" for the first time.[\[11\]][32] This was the first version of ActionScript with influences from [JavaScript][7] and the [ECMA-262][33] (Third Edition) standard, supporting the said standard's object model and many of its core [data types][34]. Local [variables][27] may be declared with the var statement, and user-defined [functions][35] with [parameter][36] passing and [return][37] values can also be created. Notably, ActionScript could now also be typed with a text editor rather than being assembled by choosing actions from drop-down lists and dialog box controls. With the next release of its authoring tool, Flash MX, and its corresponding player, [Flash Player 6][8], the language remained essentially unchanged; there were only minor changes, such as the addition of the switch statement and the "strict equality" (===) operator, which brought it closer to being [ECMA-262][33]-compliant. Two important features of ActionScript that distinguish it from later versions are its loose type system and its reliance on prototype-based [inheritance][38]. Loose typing refers to the ability of a [variable][27] to hold any type of data. This allows for rapid script development and is particularly well-suited for small-scale scripting projects. Prototype-based inheritance is the ActionScript 1.0 mechanism for code reuse and [object-oriented programming][0]. Instead of a class keyword that defines common characteristics of a [class][39], ActionScript 1.0 uses a special object that serves as a "prototype" for a class of objects. All common characteristics of a class are defined in the class's prototype object and every [instance][40] of that class contains a link to that prototype object.

**2003--2006: ActionScript 2.0** The next major revision of the language, ActionScript 2.0, was introduced in September 2003 with the release of Flash MX 2004 and its corresponding player, [Flash Player 7][8]. In response to user demand for a language better equipped for larger and more complex applications, ActionScript 2.0 featured [compile-time][41] [type checking][42] and class-based [syntax][43], such as the keywords class and extends. (While this allowed for a more structured object-oriented programming approach, the code would still be compiled to ActionScript 1.0 [bytecode][44], allowing it to be used on the preceding Flash Player 6 as well. In other words, the [class-based][45] inheritance [syntax][43] was a layer on top of the existing prototype-based system.) With ActionScript 2.0, developers could constrain [variables][27] to a specific type by adding a type annotation so that type mismatch errors could be found at [compile-time][41]. ActionScript 2.0 also introduced class-based inheritance [syntax][43] so that developers could create classes and interfaces, much as they would in class-based languages such as [Java][46] and [C++][47]. This version conformed partially to the [ECMAScript][6] Fourth Edition draft specification.

**2006--today: ActionScript 3.0** In June 2006, ActionScript 3.0 debuted with [Adobe Flex 2.0][48] and its corresponding player, [Flash Player 9][8]. ActionScript 3.0 was a fundamental restructuring of the language, so much so that it uses an entirely different [virtual machine][49]. [Flash Player 9][8] contains two virtual machines, AVM1 for code written in ActionScript 1.0 and 2.0, and AVM2 for content written in ActionScript 3.0\. ActionScript 3.0 added limited support for hardware acceleration ([DirectX][50], [OpenGL][51]).

The update to the language introduced several new features:

## Flash Lite

## AIR

[Adobe AIR][10] supports ActionScript, in addition to some extended contents, such as the Stage3D engine Adobe has developed. The number of [APIs][52] (Application programming interfaces) available to ActionScript 3.0 has also risen dramatically.

## Syntax

ActionScript code is [free form][53] and thus may be created with whichever amount or style of whitespace that the author desires. The basic syntax is derived from [ECMAScript][6].

## ActionScript 2.0

The following code, which works in any compliant player, creates a text field at depth 0, at position (0, 0) on the screen (measured in pixels), that is 100 pixels wide and high. Then the `text` parameter is set to the "Hello, world" string, and it is automatically displayed in the player:

When writing external ActionScript 2.0 class files the above example could be written in a file named Greeter.as as following.

## ActionScript 3.0

ActionScript 3.0 has a similar syntax to ActionScript 2.0 but a different set of APIs for creating objects. Compare the script below to the previous ActionScript 2.0 version:

Minimal ActionScript 3.0 programs may be somewhat larger and more complicated due to the increased separation of the programming language and the Flash IDE.

Presume the following file to be Greeter.as:

(_See also:_ [Sprite][54].)

ActionScript 3 can also be used in [MXML][55] files when using [Apache's Flex][12] framework:

## Data structures

## Data types

ActionScript primarily consists of "fundamental" or "simple" data types which are used to create other data types. These data types are very similar to [Java][46] data types. Since ActionScript 3 was a complete rewrite of ActionScript 2, the data types and their inheritances have changed.

**ActionScript 2 top level data types**

**ActionScript 2 complex data types**

There are additional "complex" data types. These are more processor and memory intensive and consist of many "simple" data types. For AS2, some of these data types are:

**ActionScript 3 primitive (prime) data types**[\[12\]][56]

**ActionScript 3 some complex data types**[\[12\]][56]

## Using data types

The basic syntax is:

So in order to make an empty Object:

Or, in an informal way:

Some types are automatically put in place:

Unlike some object-oriented languages, ActionScript makes no distinction between [primitive][57] types and [reference][58] types. In ActionScript, all variables are reference types. However, objects that belong to the primitive data types, which includes Boolean, Number, int, uint, and String, are immutable.[\[13\]][59]

So if a variable of a supposedly primitive type, e.g. an integer is passed to a function, altering that variable inside the function will not alter the original variable, as a new int Object is created when inside the function. If a variable of another (not primitive) datatype, e.g. XML is passed to a function, altering that variable inside the function _will_ alter the original variable as well, as no new XML Object is created.

Some data types can be assigned values with [literals][60]:

A reference in ActionScript is a pointer to an instance of a class. A reference stores the memory address of an object - operations against references will follow the value of the reference to the memory address of the object and carry out the operation on that object. All objects in ActionScript are accessed through references instead of being accessed directly.

Only references to an object may be removed by using the "delete" keyword. Removal of actual objects and data is done by the Flash Player garbage collector which checks for any existing references in the Flash memory space. If none are found (no other reference is made to the orphaned object), it is removed from memory. For this reason, memory management in ActionScript requires careful application development planning.

## Code protection

As with all [intermediate language][61] compiled code such as Flash and [Microsoft .NET][62], once an [SWF][63] file is saved locally, it can be [decompiled][64] into its source code and assets. Some decompilers are capable of nearly full reconstruction of the original source file, down to the actual code that was used during creation (although results vary on a case-by-case basis).[\[14\]][65][\[15\]][66][\[16\]][67]

In opposition to the decompilers, ActionScript [obfuscators][68] have been introduced, which transform code into a form that breaks decompiler output while preserving the functionality and structure of the program. Higher-quality obfuscators implement lexical transformations such as identifier renaming, control flow transformation, and data abstraction transformation which collectively make it harder for decompilers to generate output likely to be useful to a human. Less robust obfuscators insert traps for decompilers. Such obfuscators either cause the decompiler software to crash unexpectedly or to generate unintelligible source code.

The following is an example of ActionScript 3.0 code generated by a decompiler program, before and after obfuscation.

Code before obfuscation:

Code after obfuscation:

## References

## External links

[0]: /wiki/Object-oriented_programming "Object-oriented programming"
[1]: /wiki/Macromedia "Macromedia"
[2]: /wiki/Adobe_Systems "Adobe Systems"
[3]: /wiki/HyperTalk "HyperTalk"
[4]: /wiki/HyperCard "HyperCard"
[5]: #cite_note-2
[6]: /wiki/ECMAScript "ECMAScript"
[7]: /wiki/JavaScript "JavaScript"
[8]: /wiki/Adobe_Flash_Player "Adobe Flash Player"
[9]: /wiki/Web_page "Web page"
[10]: /wiki/Adobe_AIR "Adobe AIR"
[11]: #cite_note-3
[12]: /wiki/Apache_Flex "Apache Flex"
[13]: /wiki/Tamarin_(software) "Tamarin (software)"
[14]: /wiki/Scaleform_GFx "Scaleform GFx"
[15]: /wiki/Heads_up_display "Heads up display"
[16]: /wiki/Adobe_Flash "Adobe Flash"
[17]: /wiki/Rich_Internet_application "Rich Internet application"
[18]: /wiki/Make_Controller_Kit "Make Controller Kit"
[19]: /wiki/Scripting_language "Scripting language"
[20]: /wiki/ActionScript_Virtual_Machine "ActionScript Virtual Machine"
[21]: #cite_note-4
[22]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[23]: #cite_note-5
[24]: /wiki/Ajax_(programming) "Ajax (programming)"
[25]: /wiki/Rich_Internet_Applications "Rich Internet Applications"
[26]: /wiki/Object-oriented_language "Object-oriented language"
[27]: /wiki/Variable_(programming) "Variable (programming)"
[28]: /wiki/Expression_(programming) "Expression (programming)"
[29]: /wiki/Operator_(programming) "Operator (programming)"
[30]: /wiki/Conditional_(programming) "Conditional (programming)"
[31]: /wiki/Program_loops "Program loops"
[32]: #cite_note-11
[33]: /wiki/ECMA-262 "ECMA-262"
[34]: /wiki/Data_type "Data type"
[35]: /wiki/Function_(computer_science) "Function (computer science)"
[36]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[37]: /wiki/Return_statement "Return statement"
[38]: /wiki/Inheritance_(computer_science) "Inheritance (computer science)"
[39]: /wiki/Class_(computer_science) "Class (computer science)"
[40]: /wiki/Instantiation_(computer_science) "Instantiation (computer science)"
[41]: /wiki/Compile-time "Compile-time"
[42]: /wiki/Type_checking "Type checking"
[43]: /wiki/Syntax_of_programming_languages "Syntax of programming languages"
[44]: /wiki/Bytecode "Bytecode"
[45]: /wiki/Class-based_programming "Class-based programming"
[46]: /wiki/Java_(programming_language) "Java (programming language)"
[47]: /wiki/C%2B%2B "C++"
[48]: /wiki/Adobe_Flex "Adobe Flex"
[49]: /wiki/Virtual_machine "Virtual machine"
[50]: /wiki/DirectX "DirectX"
[51]: /wiki/OpenGL "OpenGL"
[52]: /wiki/API "API"
[53]: /wiki/Free-form_language "Free-form language"
[54]: /wiki/Sprite_(computer_graphics) "Sprite (computer graphics)"
[55]: /wiki/MXML "MXML"
[56]: #cite_note-adobe1-12
[57]: /wiki/Primitive_data_type "Primitive data type"
[58]: /wiki/Reference_(computer_science) "Reference (computer science)"
[59]: #cite_note-13
[60]: /wiki/Object_literal "Object literal"
[61]: /wiki/Intermediate_language "Intermediate language"
[62]: /wiki/Microsoft_.NET "Microsoft .NET"
[63]: /wiki/SWF "SWF"
[64]: /wiki/Decompilation "Decompilation"
[65]: #cite_note-14
[66]: #cite_note-15
[67]: #cite_note-16
[68]: /wiki/Obfuscated_code "Obfuscated code"