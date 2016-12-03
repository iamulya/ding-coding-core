**PureBasic** is a [commercially distributed][0] [procedural][1] computer [programming language][2] and [integrated development environment][3] based on [BASIC][4] and developed by [Fantaisie Software][5] for [Windows][6] 32/64-bit, [Linux][7] 32/64-bit, and [Mac OS X][8]. An [Amiga][9] version is available, although it has been discontinued and some parts of it are released as [open source][10]. The first public release of PureBasic for Windows was on December 17, 2000\. It has been continually updated since.

PureBasic has a "lifetime license model". As cited on the website, the very first PureBasic user (who registered in 1998) still has free access to new updates and this is not going to change.[\[1\]][11]

PureBasic compiles directly to [x86][12], [x86-64][13], [PowerPC][14] or [680x0][15] instruction sets, generating small standalone [executables][16] and [DLLs][17] which need no runtime libraries beyond the standard system libraries. Programs developed without using the platform-specific [application programming interfaces][18] (APIs) can be built easily from the same source file with little or no modification.

PureBasic supports [inline assembly][19], allowing the developer to include [FASM][20] assembler commands within PureBasic source code, while using the variables declared in PureBasic source code, enabling experienced programmers to improve the speed of speed-critical sections of code. PureBasic supports and has integrated the [OGRE][21] 3D Environment. Other 3D environments such as the [Irrlicht Engine][22] are unofficially supported.

## Programming language

## Characteristics

PureBasic is a native 32 bit and 64 bit BASIC compiler. The code is highly portable. Currently supported systems are Windows, Linux, Mac OS X. The AmigaOS version is now legacy and open-source. The compiler produces very fast and highly optimized executables and the syntax of PureBasic is simple and straightforward.[\[2\]][23] It can compile console applications,[\[3\]][24] GUI applications,[\[4\]][25] and DLL files.[\[5\]][26]

## Hello World example

The following single line of PureBasic code will create a standalone x86 executable (4.5 KB (4,608 bytes) on Windows version) that displays a message box with the text "[Hello World][27]".

And the following variant of the same code, which instead uses an inline [Windows API][28] call with no need for declarations or other external references, will create an even smaller 2.0 KB (2,048 bytes) standalone x86 executable for Windows.

The following is a console version of the Hello World example.

## Procedural programming

PureBasic is a "Second generation BASIC" language, with structured conditionals and loops, and procedure-oriented programming supported. The user is not required to use procedures, so a programmer may opt for a coding style which includes Goto, Gosub Label, and Return.

Below is a sample procedure for sorting an array, although SortArray is now a built-in function of PureBasic.

Below is a sample program that displays a sizeable text editor with two menu items.

Note that PureBasic does not escape double quotes in strings so these must be concatenated with Chr(34).

## Object-oriented programming

Fred, the developer of PureBasic, has stated that PureBasic will never be [object oriented][29].[\[6\]][30] However, numerous users have created object oriented support systems.[\[7\]][31][\[8\]][32][\[9\]][33]

## Data types

Variable data type specified when you first use it (and optionally - in the future), and is separated from the name of the point. There is a set of basic types - .f, .d (float and double numbers), .b, .c, .w, .l, .q (integers - from single-byte and 8-byte), .s - strings.

Note Len(String) used to count the length of a string will not exceed the first null character (Chr(0)). In addition to basic types, the user can define the type of construction via

Variables can be single (actually, standard variables), dynamic array (declared using the `Dim var_name.type_name (size1, size2, ...)`, a linked list (`List() var_name.type_name`), an associative array (in new versions of language) (`Map var_name.type_name()`)

## Form Designer RAD

PureBasic has its own [form][34] designer to aid in the creation of forms for applications, but other third-party solutions are also available.[\[10\]][35][\[11\]][36][\[12\]][37] The original non-integrated _Visual Designer_ was replaced with a new integrated _Form Designer_ on 14 Feb, 2013\.[\[13\]][38]

## User community

PureBasic provides an online forum for users to ask questions and share knowledge. On 6 May 2013 the English language forum had 4,769 members and contained 44,043 threads comprising 372,200 posts since May 17, 2002\.[\[14\]][39]

Numerous code sharing sites show PureBasic is used to create tools[\[15\]][40] and games in a fast and easy way,[\[16\]][41] and share large amounts of open-source code.[\[17\]][42]

## Further reading

## Bibliography

## References

## External links

[0]: /wiki/Commercial_software "Commercial software"
[1]: /wiki/Procedural_programming "Procedural programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Integrated_development_environment "Integrated development environment"
[4]: /wiki/BASIC "BASIC"
[5]: /w/index.php?title=Fantaisie_Software&action=edit&redlink=1 "Fantaisie Software (page does not exist)"
[6]: /wiki/Microsoft_Windows "Microsoft Windows"
[7]: /wiki/Linux "Linux"
[8]: /wiki/Mac_OS_X "Mac OS X"
[9]: /wiki/Amiga "Amiga"
[10]: /wiki/Open_source "Open source"
[11]: #cite_note-Lifetime_License-1
[12]: /wiki/X86 "X86"
[13]: /wiki/X86-64 "X86-64"
[14]: /wiki/PowerPC "PowerPC"
[15]: /wiki/68k "68k"
[16]: /wiki/Executable "Executable"
[17]: /wiki/Dynamic-link_library "Dynamic-link library"
[18]: /wiki/Application_programming_interface "Application programming interface"
[19]: /wiki/Inline_assembly "Inline assembly"
[20]: /wiki/FASM "FASM"
[21]: /wiki/OGRE "OGRE"
[22]: /wiki/Irrlicht_Engine "Irrlicht Engine"
[23]: #cite_note-PureBasic_home_page-2
[24]: #cite_note-PureBasic_-_Console-3
[25]: #cite_note-PureBasic_-_Gadget-4
[26]: #cite_note-Building_a_DLL-5
[27]: /wiki/Hello_World "Hello World"
[28]: /wiki/Windows_API "Windows API"
[29]: /wiki/Object-oriented_programming "Object-oriented programming"
[30]: #cite_note-PureBasic_won.27t_be_object_oriented-6
[31]: #cite_note-PureBasic_Forum:_PureObject_-_PureBasic_OOP_support-7
[32]: #cite_note-PureBasic_Forum:_OOP_tutorial_added_to_the_nxSoftware_site.21-8
[33]: #cite_note-PureBasic_Forum:_Another_OOP_PreCompiler-9
[34]: /wiki/Form_(programming) "Form (programming)"
[35]: #cite_note-Form_design_1-10
[36]: #cite_note-Form_design_2-11
[37]: #cite_note-Form_design_3-12
[38]: #cite_note-PureBasic_5.10_is_released_.21-13
[39]: #cite_note-English_forum-14
[40]: #cite_note-Tools_1-15
[41]: #cite_note-PureArea-16
[42]: #cite_note-Code_snippets-17