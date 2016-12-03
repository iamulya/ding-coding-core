**Hack** is a [programming language][0] for the [HipHop Virtual Machine][1] (HHVM), created by [Facebook][2] as a dialect of [PHP][3]. The language implementation is [open-source][4], licensed under the [BSD License][5].[\[2\]][6][\[3\]][7][\[4\]][8]

Hack allows programmers to use both [dynamic typing][9] and [static typing][10]. This kind of a [type system][11] is called [gradual typing][12], which is also implemented in other programming languages such as [ActionScript][13].[\[5\]][14] Hack's type system allows types to be specified for [function][15] [arguments][16], function [return values][17], and [class properties][18]; however, types of [local variables][19] are always inferred and cannot be specified.[\[3\]][7][\[6\]][20]

## History

Hack was introduced on March 20, 2014\.[\[7\]][21] Before the announcement of the new programming language, Facebook had already implemented the code and "battle tested" it on a large portion of its web site.

## Features

Hack is designed to interoperate seamlessly with PHP, which is a widely used open-source general-purpose [scripting language][22] that was designed for [web development][23] and can be embedded into [HTML][24]. A majority of valid PHP scripts are also valid in Hack; however, numerous less frequently used PHP features and language constructs are not supported in Hack.[\[8\]][25]

Hack extends the [type hinting][26] available in PHP 5 through the introduction of static typing, by adding new type hints (for example, for scalar types such as integer or string), as well as by extending the use of type hints (for example, for class properties or function return values). However, types of local variables cannot be specified.[\[6\]][20] Since Hack uses a gradual typing system, in the default mode, type annotations are not mandatory even in places they cannot be inferred; the type system will assume the author is correct and admit the code.[\[9\]][27] However, a "strict" mode is available which requires such annotations, and thus enforces fully sound code.[\[10\]][28]

## Syntax and semantics

The basic file structure of a Hack script is similar to a PHP script with a few changes. A Hack file starts with <?hh as opposed to <?php for a PHP script:

The above script, similar to PHP, will be executed and the following output is sent to the browser:

An important point to note is that unlike PHP, Hack and HTML code do not mix. Normally you can mix PHP and HTML code together in the same file, like this:

This type of code is not supported by Hack; either [XHP][29] or another [template engine][30] needs to be used.[\[8\]][25]

## Functions

Hack allows types to be specified for function arguments and function return values. Functions in Hack are thus annotated with types like the following:

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/HipHop_Virtual_Machine "HipHop Virtual Machine"
[2]: /wiki/Facebook "Facebook"
[3]: /wiki/PHP "PHP"
[4]: /wiki/Open-source "Open-source"
[5]: /wiki/BSD_License "BSD License"
[6]: #cite_note-license-2
[7]: #cite_note-oreilly-3
[8]: #cite_note-4
[9]: /wiki/Dynamic_typing "Dynamic typing"
[10]: /wiki/Static_typing "Static typing"
[11]: /wiki/Type_systems "Type systems"
[12]: /wiki/Gradual_typing "Gradual typing"
[13]: /wiki/ActionScript "ActionScript"
[14]: #cite_note-5
[15]: /wiki/Function_(programming) "Function (programming)"
[16]: /wiki/Argument_(computer_programming) "Argument (computer programming)"
[17]: /wiki/Return_value "Return value"
[18]: /wiki/Class_properties "Class properties"
[19]: /wiki/Local_variable "Local variable"
[20]: #cite_note-hack.annotations-6
[21]: #cite_note-7
[22]: /wiki/Scripting_language "Scripting language"
[23]: /wiki/Web_development "Web development"
[24]: /wiki/HTML "HTML"
[25]: #cite_note-unsupported-8
[26]: /wiki/Type_hinting "Type hinting"
[27]: #cite_note-9
[28]: #cite_note-10
[29]: /wiki/XHP "XHP"
[30]: /wiki/Web_template_system "Web template system"