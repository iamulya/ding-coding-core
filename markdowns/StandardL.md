**Standard ML** (**SML**) is a general-purpose, [modular][0], [functional programming language][1] with [compile-time type checking][2] and [type inference][3]. It is popular among [compiler][4] writers and [programming language researchers][5], as well as in the development of [theorem provers][6].

SML is a modern descendant of the [ML programming language][7] used in the [Logic for Computable Functions][8] (LCF) theorem-proving project. It is distinctive among widely used languages in that it has a formal specification, given as [typing rules][9] and [operational semantics][10] in _The Definition of Standard ML_ (1990, revised and simplified as _The Definition of Standard ML (Revised)_ in 1997).[\[1\]][11]

## Language

Standard ML is a functional programming language with some impure features. Programs written in Standard ML consist of [expressions][12] to be evaluated, as opposed to statements or commands, although some expressions return a trivial "unit" value and are only evaluated for their side-effects.

Like all functional programming languages, a key feature of Standard ML is the [function][13], which is used for abstraction. For instance, the [factorial][14] function can be expressed as:

A Standard ML compiler is required to infer the static type int -\> int of this function without user-supplied type annotations. I.e., it has to deduce that _n_ is only used with integer expressions, and must therefore itself be an integer, and that all value-producing expressions within the function return integers.

The same function can be expressed with [clausal function definitions][15] where the _if_-_then_-_else_ conditional is replaced by a sequence of templates of the factorial function evaluated for specific values, separated by '|', which are tried one by one in the order written until a match is found:

This can be rewritten using a case statement like this:

or as a lambda function:

Here, the keyword `val` introduces a binding of an identifier to a value, `fn` introduces the definition of an [anonymous function][16], and `case` introduces a sequence of patterns and corresponding expressions.

Using a local function, this function can be rewritten in a more efficient [tail recursive][17] style.

(The value of a **let**-expression is that of the expression between **in** and **end**.) The encapsulation of an invariant-preserving tail-recursive tight loop with one or more accumulator parameters inside an invariant-free outer function, as seen here, is a common idiom in Standard ML, and appears with great frequency in SML code.

## Type synonyms

A type synonym is defined with the **type** keyword. Here is a type synonym for points in the plane, and functions computing the distances between two points, and the area of a triangle with the given corners as per [Heron's formula][18].

## Algebraic datatypes and pattern matching

Standard ML provides strong support for [algebraic datatypes][19]. An ML datatype can be thought of as a [disjoint union][20] of tuples (or a "sum of products"). They are easy to define and easy to program with, in large part because of Standard ML's [pattern matching][21] as well as most Standard ML implementations' pattern exhaustiveness checking and pattern redundancy checking.

A datatype is defined with the **datatype** keyword, as in

(See above for the definition of loc.) Note: datatypes, not type synonyms, are necessary to define recursive constructors. (This is not at issue in the present example.)

Order matters in pattern matching; patterns that are textually first are tried first. Pattern matching can be syntactically embedded in function definitions as follows:

Note that subcomponents whose values are not needed in a particular computation are ellided with underscores, or so-called wildcard patterns.

The so-called "clausal form" style function definition, where patterns appear immediately after the function name, is merely [syntactic sugar][22] for

Pattern exhaustiveness checking will make sure each case of the datatype has been accounted for, and will produce a warning if not. The following pattern is inexhaustive:

There is no pattern for the Triangle case in the center function. The compiler will issue a warning that the pattern is inexhaustive, and if, at runtime, a Triangle is passed to this function, the exception Match will be raised.

The set of clauses in the following function definition is exhaustive and not redundant:

If control gets past the first pattern (the Circle), we know the value must be either a Square or a Triangle. In either of those cases, we know the shape has corners, so we can return true without discriminating which case we are in.

The pattern in the second clause of the following (meaningless) function is redundant:

Any value that matches the pattern in the second clause will also match the pattern in the first clause, so the second clause is unreachable. Therefore, this definition as a whole exhibits redundancy, and causes a compile-time warning.

C programmers can use [tagged unions][23], dispatching on tag values, to accomplish what ML accomplishes with datatypes and pattern matching. Nevertheless, while a C program decorated with appropriate checks will be in a sense as robust as the corresponding ML program, those checks will of necessity be dynamic; ML provides a set of static checks that give the programmer a high degree of confidence in the correctness of the program at compile time.

Note that in object-oriented programming languages, such as Java, a disjoint union can be expressed by designing [class hierarchies][24]. However, as opposed to class hierarchies, ADTs are [closed][25]. This makes ADT extensible in a way that is orthogonal to the extensibility of class hierarchies. Class hierarchies can be extended with new subclasses but no new methods, while ADTs can be extended to provide new behavior for all existing constructors, but do not allow defining new constructors.

## Higher-order functions

Functions can consume functions as arguments:

Functions can produce functions as return values:

(alternatively)

Functions can also both consume and produce functions:

(alternatively)

The function `List.map` from the basis library is one of the most commonly used higher-order functions in Standard ML:

(A more efficient implementation of `map` would define a tail-recursive inner loop as follows:)

## Exceptions

Exceptions are raised with the `raise` keyword, and handled with pattern matching `handle` constructs.

The exception system can be exploited to implement [non-local exit][26], an optimization technique suitable for functions like the following.

When the exception `Zero` is raised in the 0 case, control leaves the function `p` altogether. Consider the alternative: the value 0 would be returned to the most recent awaiting frame, it would be multiplied by the local value of `h`, the resulting value (inevitably 0) would be returned in turn to the next awaiting frame, and so on. The raising of the exception allows control to leapfrog directly over the entire chain of frames and avoid the associated computation. It has to be noted that the same optimization could have been obtained by using a tail recursion for this example.

## Module system

Standard ML has an advanced [module][0] system, allowing programs to be decomposed into hierarchically organized _structures_ of logically related type and value declarations. SML modules provide not only [namespace][27] control but also abstraction, in the sense that they allow programmers to define [abstract data types][28].

Three main syntactic constructs comprise the SML module system: signatures, structures and functors. A _structure_ is a module; it consists of a collection of types, exceptions, values and structures (called _substructures_) packaged together into a logical unit. A _signature_ is an [interface][29], usually thought of as a type for a structure: it specifies the names of all the entities provided by the structure as well as the [arities][30] of type components, the types of value components, and signatures for substructures. The definitions of type components may or may not be exported; type components whose definitions are hidden are _abstract types_. Finally, a _functor_ is a function from structures to structures; that is, a functor accepts one or more arguments, which are usually structures of a given signature, and produces a structure as its result. Functors are used to implement [generic][31] data structures and algorithms.

For example, the signature for a [queue][32] data structure might be:

This signature describes a module that provides a parameterized type `queue` of queues, an exception called `QueueError`, and six values (five of which are functions) providing the basic operations on queues. One can now implement the queue data structure by writing a structure with this signature:

This definition declares that `TwoListQueue` is an implementation of the `QUEUE` signature. Furthermore, the _opaque ascription_ (denoted by `:>`) states that any type components whose definitions are not provided in the signature (_i.e.,_ `queue`) should be treated as abstract, meaning that the definition of a queue as a pair of lists is not visible outside the module. The body of the structure provides bindings for all of the components listed in the signature.

To use a structure, one can access its type and value members using "dot notation". For instance, a queue of strings would have type `string TwoListQueue.queue`, the empty queue is `TwoListQueue.empty`, and to remove the first element from a queue called `q` one would write `TwoListQueue.remove q`.

One popular algorithm[\[2\]][33] for [breadth-first search][34] of trees makes uses of queues. Here we present a version of that algorithm parameterized over an abstract queue structure:

Please note that inside the `BFS` structure, the program has no access to the particular queue representation in play. More concretely, there is no way for the program to, say, select the first list in the two-list queue representation, if that is indeed the representation being used. This [data abstraction][35] mechanism makes the breadth-first code truly agnostic to the queue representation choice. This is in general desirable; in the present case, the queue structure can safely maintain any of the various logical invariants on which its correctness depends behind the bulletproof wall of abstraction.

## Code examples

Snippets of SML code are most easily studied by entering them into a "top-level", also known as a [read-eval-print loop][36] or REPL. This is an interactive session that prints the inferred types of resulting or defined expressions. Many SML implementations provide an interactive REPL, including [SML/NJ][37]:

Code can then be entered at the "-" prompt. For example, to calculate 1+2\*3:

The top-level infers the type of the expression to be "int" and gives the result "7".

## Hello world

The following program "hello.sml":

can be compiled with MLton:

and executed:

## Insertion sort

Insertion sort for lists of integers (ascending) is expressed concisely as follows:

This can be made polymorphic by abstracting over the ordering operator. Here we use the symbolic name `<<` for that operator.

The type of `insertionSort'` is `('a * 'a -> bool) -> ('a list) -> ('a list)`.

## Mergesort

Here, the classic mergesort algorithm is implemented in three functions: split, merge and mergesort.

The function `split` is implemented with a local function named `loop`, which has two additional parameters. The local function `loop` is written in a [tail-recursive][38] style; as such it can be compiled efficiently. This function makes use of SML's pattern matching syntax to differentiate between non-empty list (`x::xs`) and empty list (`[]`) cases. For stability, the input list `ns` is reversed before being passed to `loop`.

The local-in-end syntax could be replaced with a let-in-end syntax, yielding the equivalent definition:

As with split, merge also uses a local function loop for efficiency. The inner `loop` is defined in terms of cases: when two non-empty lists are passed, when one non-empty list is passed, and when two empty lists are passed. Note the use of the underscore (`_`) as a wildcard pattern.

This function merges two "ascending" lists into one ascending list. Note how the accumulator `out` is built "backwards", then reversed with `List.rev` before being returned. This is a common technique---build a list backwards, then reverse it before returning it. In SML, lists are represented as imbalanced binary trees, and thus it is efficient to prepend an element to a list, but inefficient to append an element to a list. The extra pass over the list is a [linear time][39] operation, so while this technique requires more wall clock time, the asymptotics are not any worse.

The main function.

Also note that the code makes no mention of variable types, with the exception of the :: and \[\] syntax which signify lists. This code will sort lists of any type, so long as a consistent ordering function lt can be defined. Using [Hindley--Milner type inference][40], the compiler is capable of inferring the types of all variables, even complicated types such as that of the lt function.

## Quicksort

Quicksort can be expressed as follows. This generic quicksort consumes an order operator `<<`.

## Expression language

Note the relative ease with which a small expression language is defined and processed.

## Arbitrary-precision factorial function (libraries)

In SML, the IntInf module provides arbitrary-precision integer arithmetic. Moreover, integer literals may be used as arbitrary-precision integers without the programmer having to do anything.

The following program "fact.sml" implements an arbitrary-precision factorial function and prints the factorial of 120:

and can be compiled and run with:

## Numerical derivative (higher-order functions)

Since SML is a functional programming language, it is easy to create and pass around functions in SML programs. This capability has an enormous number of applications. Calculating the numerical derivative of a function is one such application. The following SML function "d" computes the numerical derivative of a given function "f" at a given point "x":

This function requires a small value "delta". A good choice for delta when using this algorithm is the cube root of the [machine epsilon][41].\[_[citation needed][42]_\]

The type of the function "d" indicates that it maps a "float" onto another function with the type "(real -\> real) -\> real -\> real". This allows us to partially apply arguments. This functional style is known as [currying][43]. In this case, it is useful to partially apply the first argument "delta" to "d", to obtain a more specialised function:

Note that the inferred type indicates that the replacement "d" is expecting a function with the type "real -\> real" as its first argument. We can compute a numerical approximation to the derivative of ![f(x)=x^{3}-x-1](https://wikimedia.org/api/rest_v1/media/math/render/svg/1168fe8be3d478e75505c2a35c865e48e112c4b5) at ![x=3](https://wikimedia.org/api/rest_v1/media/math/render/svg/871a5063af170fa536b144fbcc5745146a42cc13) with:

The correct answer is ![f'(x)=3x^{2}-1](https://wikimedia.org/api/rest_v1/media/math/render/svg/b8b33b654f3104c021e18afaecfdbafb22df5c1e); ![f'(3)=27-1=26](https://wikimedia.org/api/rest_v1/media/math/render/svg/5ab36e829bece8e8b70171f894c867efc74005d5).

The function "d" is called a "higher-order function" because it accepts another function ("f") as an argument.

Curried and higher-order functions can be used to eliminate redundant code. For example, a library may require functions of type `a -> b`, but it is more convenient to write functions of type `a * c -> b` where there is a fixed relationship between the objects of type `a` and `c`. A higher order function of type (a \* c -\> b) -\> (a -\> b) can factor out this commonality. This is an example of the [adapter pattern][44].\[_[citation needed][42]_\]

## Discrete wavelet transform (pattern matching)

The 1D [Haar wavelet][45] [transform][46] of an [integer][47]-power-of-two-length list of numbers can be implemented very succinctly in SML and is an excellent example of the use of [pattern matching][21] over lists, taking pairs of elements ("h1" and "h2") off the front and storing their sums and differences on the lists "s" and "d", respectively:

For example:

Pattern matching is a useful construct that allows complicated transformations to be represented clearly and succinctly. Moreover, SML compilers turn pattern matches into efficient code, resulting in programs that are not only shorter but also faster.

## Implementations

Many SML implementations exist, including:

All of these implementations are [open-source][48] and freely available. Most are implemented themselves in SML. There are no longer any commercial SML implementations. [Harlequin][49] once produced a commercial IDE and compiler for SML called [MLWorks][50]. The company is now defunct. [MLWorks][50] passed on to [Xanalys][51] and was later acquired by [Ravenbrook Limited][52] on 2013-04-26 and open sourced.

## See also

## References

## External links

[0]: /wiki/Module_(programming) "Module (programming)"
[1]: /wiki/Functional_programming_language "Functional programming language"
[2]: /wiki/Compile-time_type_checking "Compile-time type checking"
[3]: /wiki/Type_inference "Type inference"
[4]: /wiki/Compiler "Compiler"
[5]: /wiki/Programming_language_research "Programming language research"
[6]: /wiki/Automated_theorem_proving "Automated theorem proving"
[7]: /wiki/ML_programming_language "ML programming language"
[8]: /wiki/Logic_for_Computable_Functions "Logic for Computable Functions"
[9]: /wiki/Type_rules "Type rules"
[10]: /wiki/Operational_semantics "Operational semantics"
[11]: #cite_note-1
[12]: /wiki/Expression_(programming) "Expression (programming)"
[13]: /wiki/Function_(programming) "Function (programming)"
[14]: /wiki/Factorial "Factorial"
[15]: /w/index.php?title=Clausal_function_definitions&action=edit&redlink=1 "Clausal function definitions (page does not exist)"
[16]: /wiki/Anonymous_function "Anonymous function"
[17]: /wiki/Tail_recursive "Tail recursive"
[18]: /wiki/Heron%27s_formula "Heron's formula"
[19]: /wiki/Algebraic_datatypes "Algebraic datatypes"
[20]: /wiki/Disjoint_union "Disjoint union"
[21]: /wiki/Pattern_matching "Pattern matching"
[22]: /wiki/Syntactic_sugar "Syntactic sugar"
[23]: /wiki/Tagged_union "Tagged union"
[24]: /wiki/Class_hierarchies "Class hierarchies"
[25]: /wiki/Closed_world_assumption "Closed world assumption"
[26]: /w/index.php?title=Non-local_exit&action=edit&redlink=1 "Non-local exit (page does not exist)"
[27]: /wiki/Namespace "Namespace"
[28]: /wiki/Abstract_data_type "Abstract data type"
[29]: /wiki/Interface_(computer_science) "Interface (computer science)"
[30]: /wiki/Arity "Arity"
[31]: /wiki/Generic_programming "Generic programming"
[32]: /wiki/Queue_(data_structure) "Queue (data structure)"
[33]: #cite_note-2
[34]: /wiki/Breadth-first_search "Breadth-first search"
[35]: /wiki/Data_abstraction "Data abstraction"
[36]: /wiki/Read-eval-print_loop "Read-eval-print loop"
[37]: /wiki/SML/NJ "SML/NJ"
[38]: /wiki/Tail_recursion "Tail recursion"
[39]: /wiki/Linear_time "Linear time"
[40]: /wiki/Hindley%E2%80%93Milner_type_inference "Hindley–Milner type inference"
[41]: /wiki/Machine_epsilon "Machine epsilon"
[42]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[43]: /wiki/Currying "Currying"
[44]: /wiki/Adapter_pattern "Adapter pattern"
[45]: /wiki/Haar_wavelet "Haar wavelet"
[46]: /wiki/Discrete_wavelet_transform "Discrete wavelet transform"
[47]: /wiki/Integer "Integer"
[48]: /wiki/Open-source "Open-source"
[49]: /wiki/Harlequin_(software_company) "Harlequin (software company)"
[50]: /w/index.php?title=MLWorks&action=edit&redlink=1 "MLWorks (page does not exist)"
[51]: /wiki/Xanalys "Xanalys"
[52]: /w/index.php?title=Ravenbrook_Limited&action=edit&redlink=1 "Ravenbrook Limited (page does not exist)"