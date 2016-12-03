**Information Processing Language** (**IPL**) is a [programming language][0] created by [Allen Newell][1], [Cliff Shaw][2], and [Herbert A. Simon][3] at [RAND Corporation][4] and the [Carnegie Institute of Technology][5] at about 1956\. Newell had the job of language specifier-application programmer, Shaw was the system programmer, and Simon took the job of application programmer-user.

The language includes features intended to help with programs that perform simple problem solving actions such as lists, [dynamic memory allocation][6], [data types][7], [recursion][8], [functions][9] as arguments, generators, and [cooperative multitasking][10]. IPL invented the concept of list processing, albeit in an [assembly-language][11] style.

## A taste of IPL

An IPL computer has:

The data structure of IPL is the list, but lists are more intricate structures than in many languages. A list consists of a singly linked sequence of symbols, as might be expected -- plus some _description lists_, which are subsidiary singly linked lists interpreted as alternating attribute names and values. IPL provides primitives to access and mutate attribute value by name. The description lists are given local names (of the form 9-1). So, a list called L1 holding the symbols S4 and S5, and described by associating value V1 to attribute A1 and V2 to A2, would be stored as follows. 0 indicates the end of a list; the cell names 100, 101, etc. are automatically generated internal symbols whose values are irrelevant. These cells can be scattered throughout memory; only L1, which uses a regional name that must be globally known, needs to reside in a specific place.

IPL is an [assembly language][11] for manipulating lists. It has a few cells which are used as special-purpose registers. H1, for example, is the program counter. The SYMB field of H1 is the name of the current instruction. However, H1 is interpreted as a list; the LINK of H1 is, in modern terms, a pointer to the head of the call stack. For example, subroutine calls push the SYMB of H1 onto this stack.

H2 is the free-list. Procedures which need to allocate memory grab cells off of H2; procedures which are finished with memory put it on H2\. On entry to a function, the list of parameters is given in H0; on exit, the results should be returned in H0\. Many procedures return a boolean result indicating success or failure, which is put in H5\. Ten cells, W0-W9, are reserved for public working storage. Procedures are "morally bound" (to quote the CACM article) to save and restore the values of these cells.

There are eight instructions, based on the values of P: subroutine call, push/pop S to H0; push/pop the symbol in S to the list attached to S; copy value to S; conditional branch. In these instructions, S is the target. S is either the value of the SYMB field if Q=0, the symbol in the cell named by SYMB if Q=1, or the symbol in the cell named by the symbol in the cell named by SYMB if Q=2\. In all cases but conditional branch, the LINK field of the cell tells which instruction to execute next.

IPL has a library of some 150 basic operations. These include such operations as:

## History

IPL was first utilized to demonstrate that the theorems in _[Principia Mathematica][12]_ which were laboriously proven by hand, by [Bertrand Russell][13] and [Alfred North Whitehead][14], could in fact be [proven by computation][15]. According to Simon's autobiography _Models of My Life_, this application was originally developed first by hand simulation, using his children as the computing elements, while writing on and holding up note cards as the registers which contained the state variables of the program.

IPL was used to implement several early [artificial intelligence][16] programs, also by the same authors: the [Logic Theorist][17] (1956), the [General Problem Solver][18] (1957), and their [computer chess][19] program [NSS][20] (1958).

Several versions of IPL were created: IPL-I (never implemented), IPL-II (1957 for [JOHNNIAC][21]), IPL-III (existed briefly), IPL-IV, IPL-V (1958, for [IBM 650][22], [IBM 704][23], [IBM 7090][24], many others. Widely used), IPL-VI.

However the language was soon displaced by [Lisp][25], which had far more powerful features, a simpler syntax, and the benefit of automatic [garbage collection][26].

## Legacy to computer programming

IPL arguably introduced several programming language features:

Many of these features were generalized, cleaned up, and incorporated into Lisp[\[1\]][27] and from there into a wide range of programming languages over the next several decades.

## Publications

## See also

## References

This article is based on material taken from the [Free On-line Dictionary of Computing][28] prior to 1 November 2008 and incorporated under the "relicensing" terms of the [GFDL][29], version 1.3 or later.

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Allen_Newell "Allen Newell"
[2]: /wiki/Cliff_Shaw "Cliff Shaw"
[3]: /wiki/Herbert_A._Simon "Herbert A. Simon"
[4]: /wiki/RAND_Corporation "RAND Corporation"
[5]: /wiki/Carnegie_Institute_of_Technology "Carnegie Institute of Technology"
[6]: /wiki/Dynamic_memory_allocation "Dynamic memory allocation"
[7]: /wiki/Data_type "Data type"
[8]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[9]: /wiki/Subroutine "Subroutine"
[10]: /wiki/Cooperative_multitasking "Cooperative multitasking"
[11]: /wiki/Assembly_language "Assembly language"
[12]: /wiki/Principia_Mathematica "Principia Mathematica"
[13]: /wiki/Bertrand_Russell "Bertrand Russell"
[14]: /wiki/Alfred_North_Whitehead "Alfred North Whitehead"
[15]: /wiki/Automated_theorem_proving "Automated theorem proving"
[16]: /wiki/Artificial_intelligence "Artificial intelligence"
[17]: /wiki/Logic_Theorist "Logic Theorist"
[18]: /wiki/General_Problem_Solver "General Problem Solver"
[19]: /wiki/Computer_chess "Computer chess"
[20]: /w/index.php?title=NSS_(chess_program)&action=edit&redlink=1 "NSS (chess program) (page does not exist)"
[21]: /wiki/JOHNNIAC "JOHNNIAC"
[22]: /wiki/IBM_650 "IBM 650"
[23]: /wiki/IBM_704 "IBM 704"
[24]: /wiki/IBM_7090 "IBM 7090"
[25]: /wiki/Lisp_programming_language "Lisp programming language"
[26]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[27]: #cite_note-1
[28]: /wiki/Free_On-line_Dictionary_of_Computing "Free On-line Dictionary of Computing"
[29]: /wiki/GNU_Free_Documentation_License "GNU Free Documentation License"