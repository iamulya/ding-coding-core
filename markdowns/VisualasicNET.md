**Visual Basic .NET** (**VB.NET**) is a [multi-paradigm][0], [object-oriented][1] [programming language][2], implemented on the [.NET Framework][3]. Microsoft launched VB.NET in 2002 as the successor to its original [Visual Basic][4] language. Although the ".NET" portion of the name was dropped in 2005, this article uses "Visual Basic \[.NET\]" to refer to all Visual Basic languages releases since 2002, in order to distinguish between them and the [classic Visual Basic][4]. Along with [Visual C\#][5], it is one of the two main languages targeting the .NET framework.

Microsoft's [integrated development environment][6] (IDE) for developing in Visual Basic .NET language is [Visual Studio][7]. Most of Visual Studio editions are [commercial][8]; the only exceptions are [Visual Studio Express][9] and [Visual Studio Community][10], which are [freeware][11]. In addition, [.NET Framework SDK][12] includes a freeware [command-line][13] [compiler][14] called vbc.exe. [Mono][15] also includes a command-line VB.NET compiler.

## Syntax

VB.NET uses [statements][16] to specify actions. The most common statement is an expression statement, consisting of an [expression][17] to be evaluated, on a single line. As part of that evaluation, [functions or subroutines][18] may be [called][19] and [variables][20] may be [assigned][21] new values. To modify the normal sequential execution of statements, VB.NET provides several control-flow statements identified by reserved keywords. [Structured programming][22] is supported by several constructs including two conditional execution constructs (`If` ... `Then` ... `Else` ... `End If` and `Select Case` ... `Case` ... `End Select` ) and three iterative execution (loop) constructs (`Do` ... `Loop`, `For` ... `To`, and `For Each`) . The `For` ... `To` statement has separate initialisation and testing sections, both of which must be present. (See examples below.) The `For Each` statement steps through each value in a list.

In addition, in Visual Basic .NET:

## Simple example

The following is a very simple VB.NET program, a version of the classic "[Hello world][23]" example created as a console application:

It prints "_Hello world!_" on a [command-line window][24]. Each line serves a specific purpose, as follows:

This is a module definition, a division of code similar to a [class][25], although modules can contain classes. Modules serve as containers of code that can be referenced from other parts of a program.[\[3\]][26]  
It is common practice for a module and the code file, which contains it, to have the same name; however, this is not required, as a single code file may contain more than one module and/or class definition.

It defines a subroutine called "Main". "Main" is the entry point, where the program begins execution.[\[4\]][27]

This line performs the actual task of writing the output. _Console_ is a system object, representing a command-line interface (also known as "console") and granting programmatic access to the operating system's [standard streams][28]. The program calls the _Console_ method _WriteLine,_ which causes the string passed to it to be displayed on the console.

Instead of Console.WriteLine, one could use MsgBox, which prints the message in a dialog box instead of a command-line window.[\[5\]][29]

## Complex example

This piece of code is a solution to [Floyd's Triangle][30]:

## Comparison with the classic Visual Basic

Whether Visual Basic .NET should be considered as just another version of Visual Basic or a completely different language is a topic of debate. There are new additions to support new features, such as [structured exception handling][31] and short-circuited expressions. Also, two important data-type changes occurred with the move to VB.NET: compared to Visual Basic 6, the `Integer` [data type][32] has been doubled in length from 16 bits to 32 bits, and the `Long` [data type][32] has been doubled in length from 32 bits to 64 bits. This is true for all versions of VB.NET. A 16-bit integer in all versions of VB.NET is now known as a `Short`. Similarly, the [Windows Forms][33] editor is very similar in style and function to the Visual Basic form editor.

The things that _have_ changed significantly are the semantics---from those of an object-based programming language running on a [deterministic][34], [reference-counted][35] engine based on [COM][36] to a fully [object-oriented][37] language backed by the [.NET Framework][3], which consists of a combination of the [Common Language Runtime][38] (a [virtual machine][39] using [generational garbage collection][40] and a [just-in-time compilation][41] engine) and a far larger [class library][42]. The increased breadth of the latter is also a problem that VB developers have to deal with when coming to the language, although this is somewhat addressed by the _My_ feature in Visual Studio 2005\.

The changes have altered many underlying assumptions about the "right" thing to do with respect to performance and maintainability. Some functions and libraries no longer exist; others are available, but not as efficient as the "native" .NET alternatives. Even if they compile, most converted Visual Basic 6 applications will require some level of [refactoring][43] to take full advantage of the new language. Documentation is available to cover changes in the syntax, debugging applications, deployment and terminology.[\[6\]][44]

## Comparative examples

The following simple examples compare VB and VB.NET syntax. They assume that the developer has created a form, placed a button on it and has associated the subroutines demonstrated in each example with the click event handler of the mentioned button. Each example creates a "Hello, World" message box after the button on the form is clicked.

Visual Basic 6:

VB.NET (MsgBox or MessageBox class can be used):

The following example demonstrates a difference between Visual Basic 6 and VB.NET. Both examples close the [active window][45].

Visual Basic 6:

VB.NET:

The 'cmd' prefix is replaced by the 'btn' prefix, conforming to the new convention previously mentioned.\[_[which?][46]_\]

Visual Basic 6 did not provide common operator shortcuts. The following are equivalent:

Visual Basic 6:

VB.NET:

## Comparison with C\#

C\# and Visual Basic .NET are Microsoft's first languages made to program on the .NET Framework (later adding [F\#][47] and more and others have also added languages). Though C\# and VB.NET are syntactically different, that is where the differences mostly end. Microsoft developed both of these languages to be part of the same .NET Framework development platform. They are both developed, managed, and supported by the same language development team at Microsoft.[\[8\]][48] They compile to the same intermediate language (IL), which runs against the same .NET Framework runtime libraries.[\[9\]][49] Although there are some differences in the programming constructs, their differences are primarily syntactic and, assuming one avoids the Visual Basic "Compatibility" libraries provided by Microsoft to aid conversion from Visual Basic 6, almost every command in VB has an equivalent command in C\# and vice versa. Lastly, both languages reference the same Base Classes of the .NET Framework to extend their functionality. As a result, with few exceptions, a program written in either language can be run through a simple syntax converter to translate to the other. There are many open source and commercially available products for this task.

## Examples

## Hello world!

## Windows Form Application

## Console Application

## Speakering

## Windows Form Application

## Console Application

## Version history

Succeeding [the classic Visual Basic][4] version 6.0, the first version of Visual Basic .NET debuted in 2002\. As of 2014, seven versions of Visual Basic .NET are released.

## 2002 (VB 7.0)

The first version, Visual Basic .NET, relies on [.NET Framework 1.0][50]. The most important feature is [managed code][51], which contrasts with the classic Visual Basic.

## 2003 (VB 7.1)

Visual Basic .NET 2003 was released with [.NET Framework 1.1][52]. New features included support for the [.NET Compact Framework][53] and a better VB upgrade [wizard][54]. Improvements were also made to the performance and reliability of .NET IDE (particularly the [background compiler][55]) and runtime. In addition, Visual Basic .NET 2003 was available in the Visual Studio.NET Academic Edition, distributed to a certain number of scholars\[_[weasel words][46]_\] from each country without cost.

## 2005 (VB 8.0)

After Visual Basic .NET 2003, Microsoft dropped ".NET" from the name of the product, calling the next version Visual Basic 2005\.

For this release, Microsoft added many features intended to reinforce Visual Basic .NET's focus as a [rapid application development][56] platform and further differentiate it from [C\#][57]., including:

rather than

To bridge the gaps between itself and other .NET languages, this version added:

Visual Basic 2005 introduced the `IsNot` operator that makes `'If X IsNot Y'` equivalent to `'If Not X Is Y'`. It gained notoriety[\[15\]][58] when it was found to be the subject of a Microsoft patent application.[\[16\]][59][\[17\]][60]

## 2008 (VB 9.0)

Visual Basic 9.0 was released along with [.NET Framework 3.5][61] on 19 November 2007\.

For this release, Microsoft added many features, including:

## 2010 (VB 10.0)

In April 2010, Microsoft released Visual Basic 2010\. Microsoft had planned to use [Dynamic Language Runtime][62] (DLR) for that release[\[18\]][63] but shifted to a co-evolution strategy between Visual Basic and sister language C\# to bring both languages into closer parity with one another. Visual Basic's innate ability to interact dynamically with CLR and COM objects has been enhanced to work with dynamic languages built on the DLR such as [IronPython][64] and [IronRuby][65].[\[19\]][66] The Visual Basic compiler was improved to infer line continuation in a set of common contexts, in many cases removing the need for the "\_" line continuation character. Also, existing support of inline Functions was complemented with support for inline Subs as well as multi-line versions of both Sub and Function lambdas.[\[20\]][67]

## 2012 (VB 11.0)

Visual Basic 2012 was released along [.NET Framework 4.5][68]. Major features introduced in this version include:\[_[further explanation needed][69]_\]

## 2015 (VB 14.0)

Visual Basic 2015 (code named VB "14.0") has been released with Visual Studio 2015\.

Language features include a new "?." operator to perform inline null checks, and a new string interpolation feature is included to format strings inline.[\[21\]][70]

## Cross-platform and open-source development

The creation of open-source tools for VB.NET development has been slow compared to [C\#][57], although the [Mono][15] development platform provides an implementation of VB.NET-specific libraries and a VB.NET 8.0 compatible [compiler][14] written in VB.NET,[\[22\]][71] as well as standard framework libraries such as [Windows Forms][33] GUI library.

[SharpDevelop][72] and [MonoDevelop][73] are [open-source][74] alternative [IDEs][6].

## See also

## References

## Further reading

## External links

[0]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[1]: /wiki/Object-oriented_programming "Object-oriented programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/.NET_Framework ".NET Framework"
[4]: /wiki/Visual_Basic "Visual Basic"
[5]: /wiki/Microsoft_Visual_C_Sharp "Microsoft Visual C Sharp"
[6]: /wiki/Integrated_development_environment "Integrated development environment"
[7]: /wiki/Visual_Studio "Visual Studio"
[8]: /wiki/Commercial_software "Commercial software"
[9]: /wiki/Visual_Studio_Express "Visual Studio Express"
[10]: /wiki/Microsoft_Visual_Studio#Visual_Studio_Community "Microsoft Visual Studio"
[11]: /wiki/Freeware "Freeware"
[12]: /wiki/.NET_Framework_SDK ".NET Framework SDK"
[13]: /wiki/Command-line "Command-line"
[14]: /wiki/Compiler "Compiler"
[15]: /wiki/Mono_(software) "Mono (software)"
[16]: /wiki/Statement_(computer_science) "Statement (computer science)"
[17]: /wiki/Expression_(computer_science) "Expression (computer science)"
[18]: /wiki/Subroutine "Subroutine"
[19]: /wiki/System_call "System call"
[20]: /wiki/Variable_(programming) "Variable (programming)"
[21]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[22]: /wiki/Structured_programming "Structured programming"
[23]: /wiki/Hello_world "Hello world"
[24]: /wiki/Command-line_interface "Command-line interface"
[25]: /wiki/Class_(computer_science) "Class (computer science)"
[26]: #cite_note-3
[27]: #cite_note-4
[28]: /wiki/Standard_streams "Standard streams"
[29]: #cite_note-5
[30]: /wiki/Floyd%27s_Triangle "Floyd's Triangle"
[31]: /wiki/Exception_handling "Exception handling"
[32]: /wiki/Data_type "Data type"
[33]: /wiki/Windows_Forms "Windows Forms"
[34]: /wiki/Deterministic "Deterministic"
[35]: /wiki/Reference_counting "Reference counting"
[36]: /wiki/Component_Object_Model "Component Object Model"
[37]: /wiki/Object-oriented "Object-oriented"
[38]: /wiki/Common_Language_Runtime "Common Language Runtime"
[39]: /wiki/Virtual_machine "Virtual machine"
[40]: /wiki/Garbage_collection_(computer_science)#Generational_GC_.28aka_Ephemeral_GC.29 "Garbage collection (computer science)"
[41]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[42]: /wiki/Class_library "Class library"
[43]: /wiki/Refactoring "Refactoring"
[44]: #cite_note-6
[45]: /wiki/Active_window "Active window"
[46]: /wiki/Wikipedia:Avoid_weasel_words "Wikipedia:Avoid weasel words"
[47]: /wiki/F_Sharp_(programming_language) "F Sharp (programming language)"
[48]: #cite_note-8
[49]: #cite_note-9
[50]: /wiki/.NET_Framework_version_history#.NET_Framework_1.0 ".NET Framework version history"
[51]: /wiki/Managed_code "Managed code"
[52]: /wiki/.NET_Framework_1.1 ".NET Framework 1.1"
[53]: /wiki/.NET_Compact_Framework ".NET Compact Framework"
[54]: /wiki/Wizard_(software) "Wizard (software)"
[55]: http://msdn.microsoft.com/msdnmag/issues/05/06/AdvancedBasics/default.aspx
[56]: /wiki/Rapid_application_development "Rapid application development"
[57]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[58]: #cite_note-15
[59]: #cite_note-16
[60]: #cite_note-17
[61]: /wiki/.NET_Framework_3.5 ".NET Framework 3.5"
[62]: /wiki/Dynamic_Language_Runtime "Dynamic Language Runtime"
[63]: #cite_note-18
[64]: /wiki/IronPython "IronPython"
[65]: /wiki/IronRuby "IronRuby"
[66]: #cite_note-19
[67]: #cite_note-20
[68]: /wiki/.NET_Framework_4.5 ".NET Framework 4.5"
[69]: /wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify"
[70]: #cite_note-21
[71]: #cite_note-22
[72]: /wiki/SharpDevelop "SharpDevelop"
[73]: /wiki/MonoDevelop "MonoDevelop"
[74]: /wiki/Open_source "Open source"