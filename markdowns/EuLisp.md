**EuLisp** is a [statically][0] and [dynamically scoped][0] [Lisp][1] dialect developed by a loose formation of industrial and academic Lisp users and developers from around Europe. The [standardizers][2] intended to create a new [Lisp][3] "less encumbered by the past" (compared to [Common Lisp][4]), and not so [minimalistic][5] as [Scheme][6]. Another objective was to integrate the [Object-oriented programming][7] paradigm well.

## Origin

Language definition process first began in a meeting in 1985 in [Paris][8] and took a long time. The complete specification and a first implementation ([interpreted][9]-only) was available in 1990\.

## Distinguishing features

Its primary characteristics are that it is a Lisp-1 (no separate function and variable namespaces), has a [CLOS][10]-style (Common Lisp Object System) generic-function type object-oriented system named TELOS (The EuLisp Object System) integrated from the ground up, has a built-in module system, and is defined in layers to promote the use of the Lisp on small, embedded hardware and educational machines. It supports [continuations][11], though not as powerfully as [Scheme][6]. It has a simple lightweight process mechanism ([threads][12]).

## Summary

## Implementations

An early implementation of EuLisp was FEEL (Free and Eventually Eulisp). The successor to FEEL was Youtoo (interpreted and [compiled][13] versions), by [University of Bath][14] in the [United Kingdom][15]. An interpreter for the basic level of EuLisp, "level-0", was written by Russell Bradford in XScheme, an implementation of [Scheme][6] by David Michael Betz, originally called [EuScheme][16] but the most recent version is renamed EuXLisp [\[4\]][17] to avoid confusion. Also Eu2C [\[5\]][17], a EuLisp optimizing compiler, was created by Fraunhofer ISST under the APPLY project in Germany [\[6\]][18].

A dialect of EuLisp was developed, called Plural EuLisp; it was EuLisp with [parallel programming][19] extensions.

## Example

Example use of classes in the algorithm to solve the "[Towers of Hanoi][20]" problem.

## References

## External links

[0]: /wiki/Scope_(programming) "Scope (programming)"
[1]: /wiki/Lisp_programming_language "Lisp programming language"
[2]: /wiki/Standardization "Standardization"
[3]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[4]: /wiki/Common_Lisp "Common Lisp"
[5]: /wiki/Minimalism_(computing) "Minimalism (computing)"
[6]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[7]: /wiki/Object-oriented_programming "Object-oriented programming"
[8]: /wiki/Paris "Paris"
[9]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[10]: /wiki/CLOS "CLOS"
[11]: /wiki/Continuation "Continuation"
[12]: /wiki/Thread_(computer_science) "Thread (computer science)"
[13]: /wiki/Compiler "Compiler"
[14]: /wiki/University_of_Bath "University of Bath"
[15]: /wiki/United_Kingdom "United Kingdom"
[16]: http://people.bath.ac.uk/masrjb/Sources/euscheme.html
[17]: https://github.com/Henry/EuLisp/
[18]: http://publica.fraunhofer.de/dokumente/PX-46999.html
[19]: /wiki/Parallel_computing "Parallel computing"
[20]: /wiki/Towers_of_Hanoi "Towers of Hanoi"