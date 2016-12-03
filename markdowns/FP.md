**FP** (short for **F**unction **P**rogramming) is a [programming language][0] created by [John Backus][1] to support the [function-level programming][2][\[2\]][3] paradigm. This allows eliminating named variables.

## Overview

The **values** that FP programs map into one another comprise a [set][4] which is [closed][5] under **sequence formation**:

These values can be built from any set of atoms: booleans, integers, reals, characters, etc.:

**⊥** is the **undefined** value, or **bottom**. Sequences are _bottom-preserving_:

FP programs are _functions_ **f** that each map a single _value_ **x** into another:

Functions are either primitive (i.e., provided with the FP environment) or are built from the primitives by **program-forming operations** (also called **functionals**).

An example of primitive function is **constant**, which transforms a value **x** into the constant-valued function **x̄**. Functions are [strict][6]:

Another example of a primitive function is the **selector** function family, denoted by **1**,**2**,... where:

## Functionals

In contrast to primitive functions, functionals operate on other functions. For example, some functions have a _unit_ value, such as 0 for _addition_ and 1 for _multiplication_. The functional **unit** produces such a **value** when applied to a **function f** that has one:

These are the core functionals of FP:

## Equational functions

In addition to being constructed from primitives by functionals, a function may be defined recursively by an equation, the simplest kind being:

where _E_**f** is an [expression][7] built from primitives, other defined functions, and the function symbol **f** itself, using functionals.

## See also

## References

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/John_Backus "John Backus"
[2]: /wiki/Function-level_programming "Function-level programming"
[3]: #cite_note-Backus_1977-2
[4]: /wiki/Set_(computer_science) "Set (computer science)"
[5]: /wiki/Closure_(mathematics) "Closure (mathematics)"
[6]: /wiki/Strict_function "Strict function"
[7]: /wiki/Expression_(programming) "Expression (programming)"