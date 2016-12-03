**Prolog** is a general-purpose [logic programming][0] language associated with [artificial intelligence][1] and [computational linguistics][2].[\[1\]][3][\[2\]][4][\[3\]][5]

Prolog has its roots in [first-order logic][6], a [formal logic][7], and unlike many other [programming languages][8], Prolog is [declarative][9]: the program logic is expressed in terms of relations, represented as facts and [rules][10]. A computation is initiated by running a _query_ over these relations.[\[4\]][11]

The language was first conceived by a group around [Alain Colmerauer][12] in [Marseille][13], [France][14], in the early 1970s and the first Prolog system was developed in 1972 by Colmerauer with Philippe Roussel.[\[5\]][15][\[6\]][16]

Prolog was one of the first logic programming languages,[\[7\]][17] and remains the most popular among such languages today, with several free and commercial implementations available. The language has been used for [theorem proving][18],[\[8\]][19] [expert systems][20],[\[9\]][21] as well as its original intended field of use, [natural language processing][22].[\[10\]][23][\[11\]][24] Modern Prolog environments support creating [graphical user interfaces][25], as well as administrative and networked applications.

Prolog is well-suited for specific tasks that benefit from rule-based logical queries such as searching databases, voice control systems, and filling templates.

## Syntax and semantics

In Prolog, program logic is expressed in terms of relations, and a computation is initiated by running a _query_ over these relations. Relations and queries are constructed using Prolog's single data type, the _term_.[\[4\]][11] Relations are defined by _clauses_. Given a query, the Prolog engine attempts to find a [resolution][26] [refutation][27] of the negated query. If the negated query can be refuted, i.e., an instantiation for all free variables is found that makes the union of clauses and the singleton set consisting of the negated query false, it follows that the original query, with the found instantiation applied, is a [logical consequence][28] of the program. This makes Prolog (and other logic programming languages) particularly useful for database, symbolic mathematics, and language parsing applications. Because Prolog allows impure [predicates][29], checking the [truth value][30] of certain special predicates may have some deliberate side effect, such as printing a value to the screen. Because of this, the programmer is permitted to use some amount of conventional [imperative programming][31] when the logical paradigm is inconvenient. It has a purely logical subset, called "pure Prolog", as well as a number of extralogical features.

## Data types

Prolog's single [data type][32] is the _term_. Terms are either _atoms_, _numbers_, _variables_ or _compound terms_.

Special cases of compound terms:

## Rules and facts

Prolog programs describe relations, defined by means of clauses. Pure Prolog is restricted to [Horn clauses][33]. There are two types of clauses: facts and rules. A rule is of the form

and is read as "Head is true if Body is true". A rule's body consists of calls to predicates, which are called the rule's **goals**. The built-in [predicate][34] `,/2` (meaning a 2-arity [operator][35] with name `,`) denotes [conjunction][36] of goals, and `;/2` denotes [disjunction][37]. Conjunctions and disjunctions can only appear in the body, not in the head of a rule.

Clauses with empty bodies are called **facts**. An example of a fact is:

which is equivalent to the rule:

The built-in predicate `true/0` is always true.

Given the above fact, one can ask:

_is tom a cat?_

_what things are cats?_

Clauses with bodies are called **rules**. An example of a rule is:

If we add that rule and ask _what things are animals?_

Due to the relational nature of many built-in predicates, they can typically be used in several directions. For example, `length/2` can be used to determine the length of a list (`length(List, L)`, given a list `List`) as well as to generate a list skeleton of a given length (`length(X, 5)`), and also to generate both list skeletons and their lengths together (`length(X, L)`). Similarly, `append/3` can be used both to append two lists (`append(ListA, ListB, X)` given lists `ListA` and `ListB`) as well as to split a given list into parts (`append(X, Y, List)`, given a list `List`). For this reason, a comparatively small set of library predicates suffices for many Prolog programs.

As a general purpose language, Prolog also provides various built-in predicates to perform routine activities like [input/output][38], using graphics and otherwise communicating with the operating system. These predicates are not given a relational meaning and are only useful for the side-effects they exhibit on the system. For example, the predicate `write/1` displays a term on the screen.

## Execution

Execution of a Prolog program is initiated by the user's posting of a single goal, called the query. Logically, the Prolog engine tries to find a [resolution][26] refutation of the negated query. The resolution method used by Prolog is called [SLD resolution][39]. If the negated query can be refuted, it follows that the query, with the appropriate variable bindings in place, is a logical consequence of the program. In that case, all generated variable bindings are reported to the user, and the query is said to have succeeded. Operationally, Prolog's execution strategy can be thought of as a generalization of function calls in other languages, one difference being that multiple clause heads can match a given call. In that case, the system creates a choice-point, unifies the goal with the clause head of the first alternative, and continues with the goals of that first alternative. If any goal fails in the course of executing the program, all variable bindings that were made since the most recent choice-point was created are undone, and execution continues with the next alternative of that choice-point. This execution strategy is called chronological [backtracking][40]. For example:

This results in the following query being evaluated as true:

This is obtained as follows: Initially, the only matching clause-head for the query `sibling(sally, erica)` is the first one, so proving the query is equivalent to proving the body of that clause with the appropriate variable bindings in place, i.e., the conjunction `(parent_child(Z,sally), parent_child(Z,erica))`. The next goal to be proved is the leftmost one of this conjunction, i.e., `parent_child(Z, sally)`. Two clause heads match this goal. The system creates a choice-point and tries the first alternative, whose body is `father_child(Z, sally)`. This goal can be proved using the fact `father_child(tom, sally)`, so the binding `Z = tom` is generated, and the next goal to be proved is the second part of the above conjunction: `parent_child(tom, erica)`. Again, this can be proved by the corresponding fact. Since all goals could be proved, the query succeeds. Since the query contained no variables, no bindings are reported to the user. A query with variables, like:

enumerates all valid answers on backtracking.

Notice that with the code as stated above, the query `?- sibling(sally, sally).` also succeeds. One would insert additional goals to describe the relevant restrictions, if desired.

## Loops and recursion

Iterative algorithms can be implemented by means of recursive predicates.

## Negation

The built-in Prolog predicate `\+/1` provides [negation as failure][41], which allows for [non-monotonic][42] reasoning. The goal `\+ illegal(X)` in the rule

is evaluated as follows: Prolog attempts to prove `illegal(X)`. If a proof for that goal can be found, the original goal (i.e., `\+ illegal(X)`) fails. If no proof can be found, the original goal succeeds. Therefore, the `\+/1` prefix operator is called the "not provable" operator, since the query `?- \+ Goal.` succeeds if Goal is not provable. This kind of negation is [sound][43] if its argument is ["ground"][44] (i.e. contains no variables). Soundness is lost if the argument contains variables and the proof procedure is complete. In particular, the query `?- legal(X).` can now not be used to enumerate all things that are legal.

## Programming in Prolog

In Prolog, loading code is referred to as _consulting_. Prolog can be used interactively by entering queries at the Prolog prompt `?-`. If there is no solution, Prolog writes `no`. If a solution exists then it is printed. If there are multiple solutions to the query, then these can be requested by entering a semi-colon `;`. There are guidelines on good programming practice to improve code efficiency, readability and maintainability.[\[12\]][45]

Here follow some example programs written in Prolog.

## Hello world

An example of a query:

## Compiler optimization

Any computation can be expressed declaratively as a sequence of state transitions. As an example, an optimizing compiler with three optimization passes could be implemented as a relation between an initial program and its optimized form:

or equivalently using [DCG][46] notation:

## Quicksort

The [quicksort][47] sorting algorithm, relating a list to its sorted version:

## Design patterns

A [design pattern][48] is a general reusable solution to a commonly occurring problem in [software design][49]. In Prolog, design patterns go under various names: skeletons and techniques,[\[13\]][50][\[14\]][51] cliches,[\[15\]][52] program schemata,[\[16\]][53] and logic description schemata.[\[17\]][54] An alternative to design patterns is [higher order programming][55].[\[18\]][56]

## Higher-order programming

A higher-order predicate is a predicate that takes one or more other predicates as arguments. Although support for higher-order programming takes Prolog outside the domain of first-order logic, which does not allow quantification over predicates,[\[19\]][57] ISO Prolog now has some built-in higher-order predicates such as `call/1`, `call/2`, `call/3`, `findall/3`, `setof/3`, and `bagof/3`.[\[20\]][58] Furthermore, since arbitrary Prolog goals can be constructed and evaluated at run-time, it is easy to write higher-order predicates like `maplist/2`, which applies an arbitrary predicate to each member of a given list, and `sublist/3`, which filters elements that satisfy a given predicate, also allowing for [currying][59].[\[18\]][56]

To convert solutions from temporal representation (answer substitutions on backtracking) to spatial representation (terms), Prolog has various all-solutions predicates that collect all answer substitutions of a given query in a list. This can be used for [list comprehension][60]. For example, [perfect numbers][61] equal the sum of their proper divisors:

This can be used to enumerate perfect numbers, and also to check whether a number is perfect.

As another example, the predicate `maplist` applies a predicate `P` to all corresponding positions in a pair of lists:

When `P` is a predicate that for all `X`, `P(X,Y)` unifies `Y` with a single unique value, `maplist(P, Xs, Ys)` is equivalent to applying the [map][62] function in [functional programming][63] as `Ys = map(Function, Xs)`.

Higher-order programming style in Prolog was pioneered in [HiLog][64] and [λProlog][65].

## Modules

For [programming in the large][66], Prolog provides a [module system][67]. The module system is standardised by ISO.[\[21\]][68] However, not all Prolog compilers support modules, and there are compatibility problems between the module systems of the major Prolog compilers.[\[22\]][69] Consequently, modules written on one Prolog compiler will not necessarily work on others.

## Parsing

There is a special notation called [definite clause grammars][46] (DCGs). A rule defined via `-->/2` instead of `:-/2` is expanded by the preprocessor (`expand_term/2`, a facility analogous to macros in other languages) according to a few straightforward rewriting rules, resulting in ordinary Prolog clauses. Most notably, the rewriting equips the predicate with two additional arguments, which can be used to implicitly thread state around,\[_[clarification needed][70]_\] analogous to [monads][71] in other languages. DCGs are often used to write parsers or list generators, as they also provide a convenient interface to difference lists.

## Meta-interpreters and reflection

Prolog is a [homoiconic][72] language and provides many facilities for [reflection][73]. Its implicit execution strategy makes it possible to write a concise [meta-circular evaluator][74] (also called _meta-interpreter_) for pure Prolog code:

where `true` represents an empty conjunction, and `clause(Head, Body)` unifies with clauses in the database of the form `Head :- Body`.

Since Prolog programs are themselves sequences of Prolog terms (`:-/2` is an infix [operator][35]) that are easily read and inspected using built-in mechanisms (like `read/1`), it is possible to write customized interpreters that augment Prolog with domain-specific features. For example, Sterling and Shapiro present a meta-interpreter that performs reasoning with uncertainty, reproduced here with slight modifications:[\[23\]][75]:330

This interpreter uses a table of built-in Prolog predicates of the form[\[23\]][75]:327

and clauses represented as `clause_cf(Head, Body, Certainty)`. Given those, it can be called as `solve(Goal, Certainty)` to execute `Goal` and obtain a measure of certainty about the result.

## Turing completeness

Pure Prolog is based on a subset of first-order [predicate logic][76], [Horn clauses][33], which is [Turing-complete][77]. Turing completeness of Prolog can be shown by using it to simulate a Turing machine:

A simple example Turing machine is specified by the facts:

This machine performs incrementation by one of a number in unary encoding: It loops over any number of "1" cells and appends an additional "1" at the end. Example query and result:

This illustrates how any computation can be expressed declaratively as a sequence of state transitions, implemented in Prolog as a relation between successive states of interest.

## Implementation

## ISO Prolog

The [ISO][78] Prolog standard consists of two parts. ISO/IEC 13211-1,[\[20\]][58][\[24\]][79] published in 1995, aims to standardize the existing practices of the many implementations of the core elements of Prolog. It has clarified aspects of the language that were previously ambiguous and leads to portable programs. There are two corrigenda: Cor.1:2007[\[25\]][80] and Cor.2:2012\.[\[26\]][81] ISO/IEC 13211-2,[\[20\]][58] published in 2000, adds support for modules to the standard. The standard is maintained by the [ISO/IEC JTC1][82]/[SC22][83]/WG17[\[27\]][84] working group. ANSI X3J17 is the US Technical Advisory Group for the standard.[\[28\]][85]

## Compilation

For efficiency, Prolog code is typically compiled to abstract machine code, often influenced by the register-based [Warren Abstract Machine][86] (WAM) instruction set.[\[29\]][87] Some implementations employ [abstract interpretation][88] to derive type and mode information of predicates at compile time, or compile to real machine code for high performance.[\[30\]][89] Devising efficient implementation methods for Prolog code is a field of active research in the logic programming community, and various other execution methods are employed in some implementations. These include [clause binarization][90] and [stack-based virtual machines][91].\[_[citation needed][92]_\]

## Tail recursion

Prolog systems typically implement a well-known optimization method called [tail call optimization][93] (TCO) for deterministic predicates exhibiting [tail recursion][94] or, more generally, tail calls: A clause's stack frame is discarded before performing a call in a tail position. Therefore, deterministic tail-recursive predicates are executed with constant stack space, like loops in other languages.

## Term indexing

Finding clauses that are unifiable with a term in a query is linear in the number of clauses. [Term indexing][95] uses a [data structure][96] that enables [sub-linear-time][97] lookups.[\[31\]][98] Indexing only affects program performance, it does not affect semantics. Most Prologs only use indexing on the first term, as indexing on all terms is expensive, but techniques based on _field-encoded words_ or _[superimposed][99] codewords_ provide fast indexing across the full query and head.[\[32\]][100][\[33\]][101]

## Hashing

Some Prolog systems, such as LPA Prolog and SWI-Prolog, now implement hashing to help handle large datasets more efficiently. This tends to yield very large performance gains when working with large corpora such as [WordNet][102].

## Tabling

Some Prolog systems, ([BProlog][103], [XSB][104] Yap, B-Prolog and Ciao), implement a [memoization][105] method called _tabling_, which frees the user from manually storing intermediate results.[\[34\]][106][\[35\]][107]

Subgoals encountered in a query evaluation are maintained in a table, along with answers to these subgoals. If a subgoal is re-encountered, the evaluation reuses information from the table rather than re-performing resolution against program clauses.[\[36\]][108]

Tabling is a [space-time tradeoff][109]; execution time can be reduced by using more memory to store intermediate results.

## Implementation in hardware

During the [Fifth Generation Computer Systems project][110], there were attempts to implement Prolog in hardware with the aim of achieving faster execution with dedicated architectures.[\[37\]][111][\[38\]][112][\[39\]][113] Furthermore, Prolog has a number of properties that may allow speed-up through parallel execution.[\[40\]][114] A more recent approach has been to compile restricted Prolog programs to a [field programmable gate array][115].[\[41\]][116] However, rapid progress in general-purpose hardware has consistently overtaken more specialised architectures.

## Limitations

Although Prolog is widely used in research and education, Prolog and other logic programming languages have not had a significant impact on the computer industry in general.[\[42\]][117] Most applications are small by industrial standards, with few exceeding 100,000 lines of code.[\[42\]][117][\[43\]][118] [Programming in the large][66] is considered to be complicated because not all Prolog compilers support modules, and there are compatibility problems between the module systems of the major Prolog compilers.[\[22\]][69] Portability of Prolog code across implementations has also been a problem, but developments since 2007 have meant: "the portability within the family of Edinburgh/Quintus derived Prolog implementations is good enough to allow for maintaining portable real-world applications."[\[44\]][119]

Software developed in Prolog has been criticised for having a high performance penalty compared to conventional programming languages. In particular, Prolog's non-deterministic evaluation strategy can be problematic when programming deterministic computations, or when even using "don't care non-determinism" (where a single choice is made instead of backtracking over all possibilities). Cuts and other language constructs may have to be used to achieve desirable performance, destroying one of Prolog's main attractions, the ability to run programs "backwards and forwards".[\[45\]][120]

Prolog is not purely declarative: because of constructs like the [cut operator][121], a procedural reading of a Prolog program is needed to understand it.[\[46\]][122] The order of clauses in a Prolog program is significant, as the execution strategy of the language depends on it.[\[47\]][123] Other logic programming languages, such as [Datalog][124], are truly declarative but restrict the language. As a result, many practical Prolog programs are written to conform to Prolog's depth-first search order, rather than as purely declarative logic programs.[\[45\]][120]

## Extensions

Various implementations have been developed from Prolog to extend logic programming capabilities in numerous directions. These include [types][125], modes, [constraint logic programming][126] (CLP), object-oriented logic programming (OOLP), concurrency, [linear logic][127] (LLP), functional and [higher-order logic][128] programming capabilities, plus interoperability with knowledge bases:

## Types

Prolog is an untyped language. Attempts to introduce types date back to the 1980s,[\[48\]][129][\[49\]][130] and as of 2008 there are still attempts to extend Prolog with types.[\[50\]][131] Type information is useful not only for [type safety][132] but also for reasoning about Prolog programs.[\[51\]][133]

## Modes

The syntax of Prolog does not specify which arguments of a predicate are inputs and which are outputs.[\[52\]][134] However, this information is significant and it is recommended that it be included in the comments.[\[53\]][135] Modes provide valuable information when reasoning about Prolog programs[\[51\]][133] and can also be used to accelerate execution.[\[54\]][136]

## Constraints

[Constraint logic programming][126] extends Prolog to include concepts from [constraint satisfaction][137].[\[55\]][138][\[56\]][139] A constraint logic program allows constraints in the body of clauses, such as: `A(X,Y) :- X+Y>0.` It is suited to large-scale [combinatorial optimisation][140] problems.[\[57\]][141] and is thus useful for applications in industrial settings, such as automated time-tabling and [production scheduling][142]. Most Prolog systems ship with at least one constraint solver for finite domains, and often also with solvers for other domains like rational numbers.

## Object-orientation

[Flora-2][143] is an object-oriented knowledge representation and reasoning system based on [F-logic][144] and incorporates [HiLog][64], [Transaction logic][145], and [defeasible reasoning][146].

[Logtalk][147] is an object-oriented logic programming language that can use most Prolog implementations as a back-end compiler. As a multi-paradigm language, it includes support for both prototypes and classes.

[Oblog][148] is a small, portable, object-oriented extension to Prolog by Margaret McDougall of EdCAAD, University of Edinburgh.

[Objlog][149] was a frame-based language combining objects and Prolog II from CNRS, Marseille, France.

[Prolog++][150] was developed by [Logic Programming Associates][151] and first released in 1989 for MS-DOS PCs. Support for other platforms was added, and a second version was released in 1995\. A book about Prolog++ by Chris Moss was published by Addison-Wesley in 1994\.

## Graphics

Prolog systems that provide a [graphics library][152] are SWI-prolog,[\[58\]][153] Visual-prolog, LPA Prolog for Windows and B-Prolog.

## Concurrency

[Prolog-MPI][154] is an open-source [SWI-Prolog][155] extension for distributed computing over the [Message Passing Interface][156].[\[59\]][157] Also there are various concurrent Prolog programming languages.[\[60\]][158]

## Web programming

Some Prolog implementations, notably SWI-Prolog and Ciao, support [server-side][159] [web programming][160] with support for web protocols, [HTML][161] and [XML][162].[\[61\]][163] There are also extensions to support [semantic web][164] formats such as [RDF][165] and [OWL][166].[\[62\]][167][\[63\]][168] Prolog has also been suggested as a [client-side][169] language.[\[64\]][170]

## Adobe Flash

[Cedar][171] is a free and basic Prolog interpreter. From version 4 and above Cedar has a FCA (Flash Cedar App) support. This provides a new platform to programming in Prolog through [ActionScript][172].

## Other

## Interfaces to other languages

Frameworks exist which can bridge between Prolog and other languages:

## History

The name _Prolog_ was chosen by [Philippe Roussel][173] as an abbreviation for _programmation en logique_ ([French][174] for _programming in [logic][175]_). It was created around 1972 by [Alain Colmerauer][12] with Philippe Roussel, based on [Robert Kowalski][176]'s procedural interpretation of [Horn clauses][177]. It was motivated in part by the desire to reconcile the use of logic as a declarative knowledge representation language with the procedural representation of knowledge that was popular in North America in the late 1960s and early 1970s. According to [Robert Kowalski][176], the first Prolog system was developed in 1972 by Colmerauer and Phillipe Roussel.[\[5\]][15] The first implementations of Prolog were interpreters. However, [David H. D. Warren][178] created the [Warren Abstract Machine][86], an early and influential Prolog compiler which came to define the "Edinburgh Prolog" dialect which served as the basis for the syntax of most modern implementations.

European AI researchers favored Prolog while Americans favored [Lisp][179], reportedly causing many nationalistic debates on the merits of the languages.[\[65\]][180] Much of the modern development of Prolog came from the impetus of the [Fifth Generation Computer Systems project][110] (FGCS), which developed a variant of Prolog named _[Kernel Language][181]_ for its first [operating system][182].

Pure Prolog was originally restricted to the use of a [resolution][26] theorem prover with [Horn clauses][177] of the form:

The application of the theorem-prover treats such clauses as procedures:

Pure Prolog was soon extended, however, to include [negation as failure][41], in which negative conditions of the form not(Bi) are shown by trying and failing to solve the corresponding positive conditions Bi.

Subsequent extensions of Prolog by the original team introduced [constraint logic programming][126] abilities into the implementations.

## Use in industry

Prolog has been used in [Watson][183]. Watson uses IBM's DeepQA software and the Apache [UIMA][184] (Unstructured Information Management Architecture) framework. The system was written in various languages, including Java, C++, and Prolog, and runs on the [SUSE Linux Enterprise Server][185] 11 operating system using [Apache Hadoop][186] framework to provide distributed computing. Prolog is used for [pattern matching][187] over natural language parse trees. The developers have stated: "We required a language in which we could conveniently express pattern matching rules over the parse trees and other annotations (such as named entity recognition results), and a technology that could execute these rules very efficiently. We found that Prolog was the ideal choice for the language due to its simplicity and expressiveness."[\[11\]][24]

## See also

## Related languages

## References

## Further reading

## External links

[0]: /wiki/Logic_programming "Logic programming"
[1]: /wiki/Artificial_intelligence "Artificial intelligence"
[2]: /wiki/Computational_linguistics "Computational linguistics"
[3]: #cite_note-Clocksin2003-1
[4]: #cite_note-Bratko2001-2
[5]: #cite_note-Covington1994-3
[6]: /wiki/First-order_logic "First-order logic"
[7]: /wiki/Formal_logic "Formal logic"
[8]: /wiki/Programming_language "Programming language"
[9]: /wiki/Declarative_programming "Declarative programming"
[10]: /wiki/Rule_of_inference "Rule of inference"
[11]: #cite_note-lloyd84-4
[12]: /wiki/Alain_Colmerauer "Alain Colmerauer"
[13]: /wiki/Marseille "Marseille"
[14]: /wiki/France "France"
[15]: #cite_note-Kowalski-5
[16]: #cite_note-6
[17]: #cite_note-7
[18]: /wiki/Automated_theorem_proving "Automated theorem proving"
[19]: #cite_note-8
[20]: /wiki/Expert_system "Expert system"
[21]: #cite_note-9
[22]: /wiki/Natural_language_processing "Natural language processing"
[23]: #cite_note-10
[24]: #cite_note-lally-11
[25]: /wiki/Graphical_user_interface "Graphical user interface"
[26]: /wiki/Resolution_(logic) "Resolution (logic)"
[27]: /wiki/Refutation "Refutation"
[28]: /wiki/Logical_consequence "Logical consequence"
[29]: /wiki/Predicate_(mathematical_logic) "Predicate (mathematical logic)"
[30]: /wiki/Truth_value "Truth value"
[31]: /wiki/Imperative_programming "Imperative programming"
[32]: /wiki/Data_type "Data type"
[33]: /wiki/Horn_clauses "Horn clauses"
[34]: /wiki/Predicate_(mathematics) "Predicate (mathematics)"
[35]: /wiki/Operator_(programming) "Operator (programming)"
[36]: /wiki/Logical_conjunction "Logical conjunction"
[37]: /wiki/Logical_disjunction "Logical disjunction"
[38]: /wiki/Input/output "Input/output"
[39]: /wiki/SLD_resolution "SLD resolution"
[40]: /wiki/Backtracking "Backtracking"
[41]: /wiki/Negation_as_failure "Negation as failure"
[42]: /wiki/Non-monotonic_logic "Non-monotonic logic"
[43]: /wiki/Soundness "Soundness"
[44]: /wiki/Ground_expression "Ground expression"
[45]: #cite_note-12
[46]: /wiki/Definite_clause_grammar "Definite clause grammar"
[47]: /wiki/Quicksort "Quicksort"
[48]: /wiki/Design_pattern_(computer_science) "Design pattern (computer science)"
[49]: /wiki/Software_design "Software design"
[50]: #cite_note-13
[51]: #cite_note-14
[52]: #cite_note-15
[53]: #cite_note-Gegg-harrison1995-16
[54]: #cite_note-17
[55]: /wiki/Higher_order_programming "Higher order programming"
[56]: #cite_note-Naish1996-18
[57]: #cite_note-19
[58]: #cite_note-ISO_13211-20
[59]: /wiki/Currying "Currying"
[60]: /wiki/List_comprehension "List comprehension"
[61]: /wiki/Perfect_numbers "Perfect numbers"
[62]: /wiki/Map_(higher-order_function) "Map (higher-order function)"
[63]: /wiki/Functional_programming "Functional programming"
[64]: /wiki/HiLog "HiLog"
[65]: /wiki/%CE%9BProlog "ΛProlog"
[66]: /wiki/Programming_in_the_large "Programming in the large"
[67]: /wiki/Modular_programming "Modular programming"
[68]: #cite_note-21
[69]: #cite_note-cs.kuleuven.ac.be-22
[70]: /wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify"
[71]: /wiki/Monads_in_functional_programming "Monads in functional programming"
[72]: /wiki/Homoiconic "Homoiconic"
[73]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[74]: /wiki/Meta-circular_evaluator "Meta-circular evaluator"
[75]: #cite_note-AOP94-23
[76]: /wiki/Predicate_logic "Predicate logic"
[77]: /wiki/Turing_completeness "Turing completeness"
[78]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[79]: #cite_note-24
[80]: #cite_note-Cor.1-25
[81]: #cite_note-Cor.2-26
[82]: /wiki/JTC1 "JTC1"
[83]: /wiki/SC22 "SC22"
[84]: #cite_note-WG17-27
[85]: #cite_note-X3J17-28
[86]: /wiki/Warren_Abstract_Machine "Warren Abstract Machine"
[87]: #cite_note-29
[88]: /wiki/Abstract_interpretation "Abstract interpretation"
[89]: #cite_note-30
[90]: /w/index.php?title=Clause_binarization&action=edit&redlink=1 "Clause binarization (page does not exist)"
[91]: /wiki/Stack_machines "Stack machines"
[92]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[93]: /wiki/Tail_call#Tail_call_optimization "Tail call"
[94]: /wiki/Tail_recursion "Tail recursion"
[95]: /wiki/Term_indexing "Term indexing"
[96]: /wiki/Data_structure "Data structure"
[97]: /wiki/Sublinear_time "Sublinear time"
[98]: #cite_note-31
[99]: /wiki/Superimposed_code "Superimposed code"
[100]: #cite_note-WisePowers-32
[101]: #cite_note-Colomb-33
[102]: /wiki/WordNet "WordNet"
[103]: /wiki/BProlog "BProlog"
[104]: /wiki/XSB "XSB"
[105]: /wiki/Memoization "Memoization"
[106]: #cite_note-34
[107]: #cite_note-35
[108]: #cite_note-36
[109]: /wiki/Space-time_tradeoff "Space-time tradeoff"
[110]: /wiki/Fifth_Generation_Computer_Systems_project "Fifth Generation Computer Systems project"
[111]: #cite_note-37
[112]: #cite_note-38
[113]: #cite_note-39
[114]: #cite_note-40
[115]: /wiki/Field_programmable_gate_array "Field programmable gate array"
[116]: #cite_note-41
[117]: #cite_note-RealWorld-42
[118]: #cite_note-43
[119]: #cite_note-44
[120]: #cite_note-rethinking-45
[121]: /wiki/Cut_(logic_programming) "Cut (logic programming)"
[122]: #cite_note-46
[123]: #cite_note-47
[124]: /wiki/Datalog "Datalog"
[125]: /wiki/Type_system "Type system"
[126]: /wiki/Constraint_logic_programming "Constraint logic programming"
[127]: /wiki/Linear_logic "Linear logic"
[128]: /wiki/Higher-order_logic "Higher-order logic"
[129]: #cite_note-48
[130]: #cite_note-49
[131]: #cite_note-50
[132]: /wiki/Type_safety "Type safety"
[133]: #cite_note-cite_doi.7C10.1007.2FBF01213601-51
[134]: #cite_note-craft-52
[135]: #cite_note-53
[136]: #cite_note-54
[137]: /wiki/Constraint_satisfaction "Constraint satisfaction"
[138]: #cite_note-55
[139]: #cite_note-56
[140]: /wiki/Combinatorial_optimisation "Combinatorial optimisation"
[141]: #cite_note-57
[142]: /wiki/Production_scheduling "Production scheduling"
[143]: /wiki/Flora-2 "Flora-2"
[144]: /wiki/F-logic "F-logic"
[145]: /wiki/Transaction_logic "Transaction logic"
[146]: /wiki/Defeasible_reasoning "Defeasible reasoning"
[147]: /wiki/Logtalk "Logtalk"
[148]: /wiki/Oblog "Oblog"
[149]: /wiki/Objlog "Objlog"
[150]: /wiki/Prolog%2B%2B "Prolog++"
[151]: /wiki/Logic_Programming_Associates "Logic Programming Associates"
[152]: /wiki/Graphics_library "Graphics library"
[153]: #cite_note-58
[154]: /w/index.php?title=Prolog-MPI&action=edit&redlink=1 "Prolog-MPI (page does not exist)"
[155]: /wiki/SWI-Prolog "SWI-Prolog"
[156]: /wiki/Message_Passing_Interface "Message Passing Interface"
[157]: #cite_note-59
[158]: #cite_note-60
[159]: /wiki/Server-side "Server-side"
[160]: /wiki/Web_programming "Web programming"
[161]: /wiki/HTML "HTML"
[162]: /wiki/XML "XML"
[163]: #cite_note-61
[164]: /wiki/Semantic_web "Semantic web"
[165]: /wiki/Resource_Description_Framework "Resource Description Framework"
[166]: /wiki/Web_Ontology_Language "Web Ontology Language"
[167]: #cite_note-62
[168]: #cite_note-63
[169]: /wiki/Client-side "Client-side"
[170]: #cite_note-64
[171]: http://sites.google.com/site/cedarprolog/
[172]: /wiki/ActionScript "ActionScript"
[173]: /w/index.php?title=Philippe_Roussel&action=edit&redlink=1 "Philippe Roussel (page does not exist)"
[174]: /wiki/French_language "French language"
[175]: /wiki/Logic "Logic"
[176]: /wiki/Robert_Kowalski "Robert Kowalski"
[177]: /wiki/Horn_clause "Horn clause"
[178]: /wiki/David_H._D._Warren "David H. D. Warren"
[179]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[180]: #cite_note-pountain198410-65
[181]: /wiki/KL1 "KL1"
[182]: /wiki/Operating_system "Operating system"
[183]: /wiki/Watson_(computer) "Watson (computer)"
[184]: /wiki/UIMA "UIMA"
[185]: /wiki/SUSE_Linux_Enterprise_Server "SUSE Linux Enterprise Server"
[186]: /wiki/Apache_Hadoop "Apache Hadoop"
[187]: /wiki/Pattern_matching "Pattern matching"