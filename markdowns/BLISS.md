**BLISS** is a [system programming language][0] developed at [Carnegie Mellon University][1] by [W. A. Wulf][2], [D. B. Russell][3], and [A. N. Habermann][4] around 1970\. It was perhaps the best known systems programming language right up until [C][5] made its debut a few years later. Since then, C took off and BLISS faded into obscurity. When C was in its infancy, a few projects within [Bell Labs][6] were debating the merits of BLISS vs. C\[_[citation needed][7]_\].

BLISS is a typeless block-structured language based on expressions rather than statements, and includes constructs for [exception handling][8], [coroutines][9], and [macros][10]. It does not include a [goto][11] statement.

The name is variously said to be short for "Basic Language for Implementation of System Software" or "System Software Implementation Language, Backwards". It was sometimes called "Bill's Language for Implementing System Software", after Bill Wulf.

The original Carnegie Mellon [compiler][12] was notable for its extensive use of [optimizations][13], and formed the basis of the classic book _[The Design of an Optimizing Compiler][14]_.

[DEC][15] developed and maintained BLISS compilers for the [PDP-10][16],[\[1\]][17] [PDP-11][18],[\[1\]][17] [VAX][19],[\[1\]][17] [DEC PRISM][20],[\[2\]][21] [MIPS][22],[\[1\]][17] [DEC Alpha][23],[\[1\]][17] and [Intel IA-32][24],[\[1\]][17] The language did not become popular among customers and few had the compiler,[\[3\]][25] but DEC used it heavily in-house into the 1980s; most of the utility programs for the [VMS][26] [operating system][27] were written in BLISS-32\. After its acquisition of DEC, [Compaq][28] developed and maintained a BLISS compiler for [Intel IA-64][29].[\[1\]][17]

## Language description

BLISS has many of the features of other modern high-level languages. It has block structure, an automatic stack, and mechanisms for defining and calling recursive routines ... provides a variety of predefined data structures and ... facilities for testing and iteration ...

On the other hand, BLISS omits certain features of other high-level languages. It does not have built-in facilities for input/output, because a system-software project usually develops its own input/output or builds on basic monitor I/O or screen management services ... it permits access to machine-specific features, because system software often requires this. BLISS has characteristics that are unusual among high-level languages. A name ... is uniformly interpreted as the address of that segment rather than the value of the segment ... Also, BLISS is an "expression language" rather than a "statement language".

The BLISS language has the following characteristics:

## Source example

The following example is taken verbatim from the _Bliss Language Manual_:[\[4\]][30]

## Versions

## Notes

## References

## External links

## Downloads

[0]: /wiki/System_programming_language "System programming language"
[1]: /wiki/Carnegie_Mellon_University "Carnegie Mellon University"
[2]: /wiki/W._A._Wulf "W. A. Wulf"
[3]: /w/index.php?title=D._B._Russell&action=edit&redlink=1 "D. B. Russell (page does not exist)"
[4]: /wiki/A._N._Habermann "A. N. Habermann"
[5]: /wiki/C_(programming_language) "C (programming language)"
[6]: /wiki/Bell_Labs "Bell Labs"
[7]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[8]: /wiki/Exception_handling "Exception handling"
[9]: /wiki/Coroutine "Coroutine"
[10]: /wiki/Macro_(computer_science) "Macro (computer science)"
[11]: /wiki/GOTO "GOTO"
[12]: /wiki/Compiler "Compiler"
[13]: /wiki/Compiler_optimization "Compiler optimization"
[14]: /wiki/The_Design_of_an_Optimizing_Compiler "The Design of an Optimizing Compiler"
[15]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[16]: /wiki/PDP-10 "PDP-10"
[17]: #cite_note-bliss-history-1
[18]: /wiki/PDP-11 "PDP-11"
[19]: /wiki/VAX "VAX"
[20]: /wiki/DEC_PRISM "DEC PRISM"
[21]: #cite_note-2
[22]: /wiki/MIPS_architecture "MIPS architecture"
[23]: /wiki/DEC_Alpha "DEC Alpha"
[24]: /wiki/IA-32 "IA-32"
[25]: #cite_note-dacruz198870916-3
[26]: /wiki/OpenVMS "OpenVMS"
[27]: /wiki/Operating_system "Operating system"
[28]: /wiki/Compaq "Compaq"
[29]: /wiki/IA-64 "IA-64"
[30]: #cite_note-Manual-4