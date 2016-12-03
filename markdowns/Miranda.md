**Miranda** is a [lazy][0], [purely functional][1] [programming language][2] designed by [David Turner][3] as a successor to his earlier programming languages [SASL][4] and [KRC][5], using some concepts from [ML][6] and [Hope][7]. It was produced by Research Software Ltd. of England (which holds a trademark on the name _Miranda_) and was the first purely functional language to be commercially supported.\[_[citation needed][8]_\]

Miranda was first released in 1985, as a fast interpreter in [C][9] for [Unix][10]-flavour operating systems, with subsequent releases in 1987 and 1989\. Miranda had a strong influence on the later [Haskell][11] programming language.[\[1\]][12]

## Overview

Miranda is a [lazy][0], [purely functional][1] programming language. That is, it lacks [side effects][13] and [imperative programming][14] features. A Miranda program (called a _script_) is a set of [equations][15] that define various mathematical [functions][16] and [algebraic data types][17]. The word _[set][18]_ is important here: the order of the equations is, in general, irrelevant, and there is no need to define an entity prior to its use.

Since the [parsing][19] algorithm makes intelligent use of [layout][20] (indentation), there is rarely a need for bracketing statements and no statement terminators are required. This feature, inspired by [ISWIM][21] is also used in [occam][22] and [Haskell][11] and was later popularized by [Python][23].

[Commentary][24] is introduced into regular scripts by the characters `||` and continue to the end of the same line. An alternative commenting convention affects an entire source code file, known as a "[literate script][25]", in which every line is considered a comment unless it starts with a `>` sign.

Miranda's basic [data types][26] are `char`, `num` and `bool`. A character string is simply a list of `char`, while `num` is silently converted between two underlying forms: [arbitrary-precision][27] integers (a.k.a. bignums) by default, and regular [floating point][28] values as required.

[Tuples][29] are sequences of elements of potentially mixed types, analogous to [records][30] in [Pascal][31]-like languages, and are written delimited with parentheses:

The _[list][32]_ instead is the most commonly used data structure in Miranda. It is written delimited by square brackets and with comma-separated elements, all of which must be of the same type:

List concatenation is `++`, subtraction is `--`, construction is `:`, sizing is `#` and indexing is `!`, so:

There are several list-building shortcuts: `..` is used for lists whose elements form an arithmetic series, with the possibility for specifying an increment other than 1:

More general and powerful list-building facilities are provided by "[list comprehensions][33]" (previously known as "ZF expressions"), which come in two main forms: an expression applied to a series of terms, e.g.:

(which is read: list of n squared where n is taken from the list of all positive integers) and a series where each term is a function of the previous one, e.g.:

As these two examples imply, Miranda allows for lists with an infinite number of elements, of which the simplest is the list of all positive integers: `[1..]`

The notation for function application is simply juxtaposition, as in `sin x`.

In Miranda, as in most other purely functional languages, functions are [first-class][34] citizens, which is to say that they can be passed as [parameters][35] to other functions, returned as results, or included as elements of data structures. What is more, a function requiring two or more parameters may be "partially parameterised", or [curried][36], by supplying less than the full number of parameters. This gives another function which, given the remaining parameters, will return a result. For example:

is a roundabout way of creating a function "increment" which adds one to its argument. In reality, `add 4 7` takes the two-parameter function `add`, applies it to `4` obtaining a single-parameter function that adds four to its argument, then applies that to `7`.

Any function taking two parameters can be turned into an infix operator (for example, given the definition of the `add` function above, the term `$add` is in every way equivalent to the `+` operator) and every infix operator taking two parameters can be turned into a corresponding function. Thus:

is the briefest way to create a function that adds one to its argument. Similarly, in

two single-parameter functions are generated. The interpreter understands in each case which of the divide operator's two parameters is being supplied, giving functions which respectively divide a number by two and return its reciprocal.

Although Miranda is a [strongly typed programming language][37], it does not insist on explicit type [declarations][38]. If a function's type is not explicitly declared, the interpreter [infers][39] it from the type of its parameters and how they are used within the function. In addition to the basic types (`char`, `num`, `bool`), it includes an "anything" type where the type of a parameter does not matter, as in the list-reversing function:

which can be applied to a list of any data type, for which the explicit function type declaration would be:

Finally, it has mechanisms for creating and managing program [modules][40] whose internal functions are invisible to programs calling those modules.

## Sample code

The following Miranda script determines the set of all subsets of a set of numbers

and this is a literate script for a function `primes` which gives the list of all prime numbers

## References

## External links

[0]: /wiki/Lazy_evaluation "Lazy evaluation"
[1]: /wiki/Functional_programming "Functional programming"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/David_Turner_(computer_scientist) "David Turner (computer scientist)"
[4]: /wiki/SASL_programming_language "SASL programming language"
[5]: /wiki/Kent_Recursive_Calculator "Kent Recursive Calculator"
[6]: /wiki/ML_(programming_language) "ML (programming language)"
[7]: /wiki/Hope_(programming_language) "Hope (programming language)"
[8]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[9]: /wiki/C_(programming_language) "C (programming language)"
[10]: /wiki/Unix "Unix"
[11]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[12]: #cite_note-1
[13]: /wiki/Side_effect_(computer_science) "Side effect (computer science)"
[14]: /wiki/Imperative_programming "Imperative programming"
[15]: /wiki/Equation "Equation"
[16]: /wiki/Function_(mathematics) "Function (mathematics)"
[17]: /wiki/Algebraic_data_type "Algebraic data type"
[18]: /wiki/Set_(mathematics) "Set (mathematics)"
[19]: /wiki/Parsing "Parsing"
[20]: /wiki/Off-side_rule "Off-side rule"
[21]: /wiki/ISWIM "ISWIM"
[22]: /wiki/Occam_(programming_language) "Occam (programming language)"
[23]: /wiki/Python_(programming_language) "Python (programming language)"
[24]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[25]: /wiki/Literate_programming "Literate programming"
[26]: /wiki/Data_type "Data type"
[27]: /wiki/Arbitrary-precision_arithmetic "Arbitrary-precision arithmetic"
[28]: /wiki/Floating_point "Floating point"
[29]: /wiki/Tuple "Tuple"
[30]: /wiki/Record_(computer_science) "Record (computer science)"
[31]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[32]: /wiki/List_(computing) "List (computing)"
[33]: /wiki/List_comprehension "List comprehension"
[34]: /wiki/First-class_function "First-class function"
[35]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[36]: /wiki/Currying "Currying"
[37]: /wiki/Strongly_typed_programming_language "Strongly typed programming language"
[38]: /wiki/Declaration_(computer_science) "Declaration (computer science)"
[39]: /wiki/Type_inference "Type inference"
[40]: /wiki/Module_(programming) "Module (programming)"