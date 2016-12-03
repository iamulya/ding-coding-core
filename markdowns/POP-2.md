**POP-2**, often referred to as **POP2** is a discontinued [programming language][0] developed around 1970 from the earlier language POP-1 (developed by Robin Popplestone in 1968, originally named [COWSEL][1]) by [Robin Popplestone][2] and [Rod Burstall][3] at the [University of Edinburgh][4].[\[1\]][5] It drew roots from many sources: the languages [LISP][6] and [ALGOL 60][7], and theoretical ideas from [Peter J. Landin][8]. It used an [incremental compiler][9], which gave it some of the flexibility of an [interpreted language][10], including allowing new function definitions at run time and modification of function definitions while a program was running (both of which are features of [dynamic compilation][11]), without the overhead of an interpreted language.

## Description

## Stack

POP-2's syntax was Algol-like, except that assignments were the other way round: instead of writing

one wrote

The reason for this was that the language had explicit notion of an _[operand stack][12]_; thus, the previous assignment could be written as two separate statements:

which evaluated the value 3 and left it on the stack, and

which popped the top value off the stack and assigned it to the variable 'a'. Similarly, the function call

could be written as

(commas and semicolons being largely interchangeable) or even

Because of the stack-based paradigm, there was no need to distinguish between _statements_ and _expressions_; thus, the two constructs

were equivalent (note the use of close, as endif hadn't been invented yet).

## Arrays and doublet functions

There were no special language constructs for creating arrays or record structures as they are commonly understood: instead, these were created with the aid of special builtin functions, e.g. [newarray][13] (for arrays that could contain any type of item) and [newanyarray][14] for creating restricted types of items.

Thus, array element and record field accessors were simply special cases of a _doublet function_: this was a function that had another function attached as its [_updater_][15], which was called on the receiving side of an assignment. Thus, if the variable a contained an array, then

was equivalent to

the builtin function updater returning the updater of the doublet. Of course, updater was itself a doublet and could be used to change the updater component of a doublet.

## Functions

Variables could hold values of any type, including functions, which were first-class objects. Thus, the following constructs

were equivalent.

An interesting operation on functions was [_partial application_][16], (sometimes referred to as "[currying][17]"). In partial application some number of the rightmost arguments of the function (which would be the last ones placed on the stack before the function is involved) were _frozen_ to given values, to produce a new function of fewer arguments, which is a [closure][18] of the original function. For instance, consider a function for computing general second-degree polynomials:

This could be bound, for instance as

such that the expression

applies the closure of poly2 with three arguments frozen, to the argument 3, returning the square of (3 - 1), which is 4\. The application of the partially applied function causes the frozen values (in this case 1, -2, 1) to be added to whatever is already on the stack (in this case 3), after which the original function poly2 is invoked. It then uses the top four items on the stack, producing the same result as

i.e.

## Operator definition

In POP-2, it was possible to define new operations (operators in modern terms).[\[2\]][19]

The first line declares a new operation +\* with precedence (priority) 3\. The second line creates a function f(x,y)=x\*x+y\*y, and assigns it to the newly declared operation +\*.

## History

The original version of POP-2 was implemented on an [Elliott 4130][20] computer in the University of Edinburgh (with only 64KB RAM, doubled to 128KB in 1972).

In the mid-1970s, POP-2 was ported to [BESM-6][21] (POPLAN System).

Later versions were implemented for [CTL][22] Modular One, [PDP-10][23], [ICL 1900 series][24] (running the George operating system). Julian Davies, in Edinburgh, implemented an extended version of POP-2, which he called **POP-10** on the PDP-10 computer running [TOPS-10][25]. This was the first dialect of POP-2 that treated case as significant in identifier names, used lower case for most system identifiers, and supported long identifiers with more than 8 characters.

Shortly after that, a new implementation known as **WPOP** (for WonderPop) was implemented by Robert Rae and Allan Ramsay in Edinburgh, on a research-council funded project. That version introduced caged address spaces, some compile-time syntactic typing (e.g. for integers and reals) as well as some pattern matching constructs for use with a variety of data-structures.

In parallel with that Steve Hardy at Sussex University implemented a subset of POP-2, which he called **[POP-11][26]** which ran on a [DEC][27] PDP-11/40 computer. It was originally designed to run on the DEC operating system RSX-11D, in time-shared mode for teaching, but that caused so many problems that an early version of [Unix][28] was installed and used instead. That version was written in Unix assembler, and code was incrementally compiled to an intermediate byte code which was interpreted. That port was completed around 1976 and as a result Pop-11 was used in several places for teaching. In order to support its teaching function many of the syntactic features of POP-2 were modified, e.g. replacing **function ... end** with **define ... enddefine** and adding a wider variety of looping constructs with closing brackets to match their opening brackets instead of the use of **close** for all loops in POP-2\. Pop-11 also introduced a [pattern matcher][29] for list structures, making it much easier to teach AI programming.

Around 1980 Pop-11 was ported to a [VAX-11/780][30] computer by Steve Hardy and John Gibson, and soon after that it was replaced by a full incremental compiler (producing machine-code instead of an interpreted intermediate code). The existence of the compiler and all its subroutines at run time made it possible to support far richer language extensions than were possible with Macros, and as a result Pop-11 was used (by Steve Hardy, Chris Mellish and John Gibson)) to produce an implementation of [Prolog][31], using the standard syntax of Prolog, and the combined system became known as [Poplog][32], to which [Common Lisp][33] and [Standard ML][34] were later added. This version was later ported to a variety of machines and operating systems and as a result Pop-11 became the dominant dialect of POP-2, still available in the Poplog system.

Around 1986 a new AI company Cognitive Applications Ltd., collaborated with members of Sussex university to produce a variant of Pop-11 called **AlphaPop** running on Apple Mac computers, with integrated graphics. This was used for a number of commercial projects, as well as being used for teaching AI programming in several universities. The fact that it was implemented in an early dialect of C, using an idiosyncratic compiler made it very hard to maintain and upgrade to new versions of the Mac operating system. In addition to this, AlphaPop was not "32-bit clean" due to the use of high address bits as "tag bits" to signify the type of objects, which was incompatible with the use of memory above 8Mb on later Macintoshes.

## See also

## References

## External links

## References

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/COWSEL "COWSEL"
[2]: /wiki/Robin_Popplestone "Robin Popplestone"
[3]: /wiki/Rod_Burstall "Rod Burstall"
[4]: /wiki/University_of_Edinburgh "University of Edinburgh"
[5]: #cite_note-1
[6]: /wiki/LISP "LISP"
[7]: /wiki/ALGOL_60 "ALGOL 60"
[8]: /wiki/Peter_J._Landin "Peter J. Landin"
[9]: /wiki/Incremental_compiler "Incremental compiler"
[10]: /wiki/Interpreted_language "Interpreted language"
[11]: /wiki/Dynamic_compilation "Dynamic compilation"
[12]: /wiki/Stack_(data_structure) "Stack (data structure)"
[13]: http://www.cs.bham.ac.uk/research/projects/poplog/doc/pophelp/newarray
[14]: http://www.cs.bham.ac.uk/research/projects/poplog/doc/pophelp/newanyarray
[15]: http://www.cs.bham.ac.uk/research/projects/poplog/doc/pophelp/updater
[16]: http://www.cs.bham.ac.uk/research/projects/poplog/doc/pophelp/partapply
[17]: /wiki/Currying "Currying"
[18]: /wiki/Closure_(computer_science) "Closure (computer science)"
[19]: #cite_note-2
[20]: /wiki/Elliott_Brothers_(computer_company) "Elliott Brothers (computer company)"
[21]: /wiki/BESM-6 "BESM-6"
[22]: /wiki/Computer_Technology_Limited "Computer Technology Limited"
[23]: /wiki/PDP-10 "PDP-10"
[24]: /wiki/ICT_1900_series "ICT 1900 series"
[25]: /wiki/TOPS-10 "TOPS-10"
[26]: /wiki/POP-11 "POP-11"
[27]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[28]: /wiki/Unix "Unix"
[29]: http://www.cs.bham.ac.uk/research/projects/poplog/doc/popteach/matches
[30]: /wiki/VAX-11/780 "VAX-11/780"
[31]: /wiki/Prolog "Prolog"
[32]: /wiki/Poplog "Poplog"
[33]: /wiki/Common_Lisp "Common Lisp"
[34]: /wiki/Standard_ML "Standard ML"