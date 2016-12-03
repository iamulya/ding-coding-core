**Clean** is a [general-purpose][0] [purely functional][1] [computer programming language][2]. For much of the language's active development history it was called **Concurrent Clean**, but this was dropped at some point.

## Features

The language Clean first appeared in 1987 and is still being further developed.[\[1\]][3] It shares many properties with [Haskell][4]: [referential transparency][5], [list comprehension][6], [guards][7], [garbage collection][8], [higher order functions][9], [currying][10] and [lazy evaluation][11].

On Windows, an [integrated development environment][12] (IDE) is included in the Clean distribution.

Clean's method for dealing with mutable state and I/O is done through a [uniqueness typing system][13], in contrast to Haskell's use of [monads][14]. The compiler takes advantage of the uniqueness type system to generate more efficient code, because it knows that anything with a uniqueness type can only be used once. Therefore, a unique value can be [changed in place][15].[\[2\]][16]

## Examples

[Hello world][17]:

[Factorial][18]:

[Fibonacci sequence][19]:

[Infix][20] operator:

The type declaration states that the function is a right associative infix operator with priority 8: this states that `x*x^(n-1)` is equivalent to `x*(x^(n-1))` as opposed to `(x*x)^(n-1)`. This operator is pre-defined in [StdEnv][21], the Clean standard library.

## How Clean works

Computation is based on [graph rewriting][22] and [reduction][23]. Constants such as numbers are graphs and functions are graph rewriting formulas. This, combined with compilation to native code, makes Clean programs run relatively fast, even with high abstraction.[\[3\]][24]

## Compiling

Earlier Clean system versions were written completely in [C][25], thus avoiding bootstrapping issues.

The [SAPL][26] system compiles Core Clean to JavaScript and does not use ABC code.

## The ABC-Machine

To close the gap between Core Clean, a high-level functional language, and [machine code][27], the ABC-machine is used. This is an [imperative][28] abstract [graph rewriting][22] machine.[\[4\]][29] Generating concrete machine code from abstract ABC code is a relatively small step, so by using the ABC-machine it is much easier to target multiple architectures for code generation.

The ABC-machine has a uncommon [memory model][30]. It has a graph store to hold the Clean graph that is being rewritten. The A(rgument)-stack holds arguments that refer to nodes in the graph store. This way, a node's arguments can be rewritten, which is needed for pattern matching. The B(asic value)-stack holds basic values (integers, characters, reals, etc.). While not strictly necessary (all these elements could be nodes in the graph store as well), using a separate stack is much more efficient. The C(ontrol)-stack holds return addresses for flow control.

The [runtime system][31], which is linked into every executable, has a `print` rule which prints a node to the output channel. When a program is executed, the `Start` node is printed. For this, it has to be rewritten to root normal form, after which its children are rewritten to root normal form, etc., until the whole node is printed.

## Platforms

Clean is available for [Microsoft Windows][32], [Apple Macintosh][33], [Solaris][34] and [Linux][35].

Some libraries are not available on all platforms, like [ObjectIO][36] which is only available on Windows and Mac. The feature to write dynamics to files is only available on Windows.

## License

Clean is [dual licensed][37]: it is available under the terms of the [GNU LGPL][38], and also under a proprietary license. For the libraries, runtime system and examples, not the GNU LGPL but the [Simplified BSD License][39] applies.

## Versus Haskell

## Speed

A benchmark from 2008 shows that Clean is faster than Haskell in most cases:[\[5\]][40]

As can be seen, Clean outruns Haskell (GHC) on almost all test cases. Only parser combinators are faster in Haskell. Using GHC -O we get some optimisations, making pattern matching and higher order functions faster than in Clean as well. In most cases, however, Clean outperforms GHC -O or at least isn't slower.

The programs used were:

## Syntactic differences

The syntax of Clean is very similar to Haskell, with some notable differences:[\[2\]][16]

In general, Haskell has introduced more syntactic sugar than Clean.

## Community

## References

## External links

[0]: /wiki/General-purpose_programming_language "General-purpose programming language"
[1]: /wiki/Purely_functional_language "Purely functional language"
[2]: /wiki/Computer_programming_language "Computer programming language"
[3]: #cite_note-1
[4]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[5]: /wiki/Referential_transparency_(computer_science) "Referential transparency (computer science)"
[6]: /wiki/List_comprehension "List comprehension"
[7]: /wiki/Guard_(computing) "Guard (computing)"
[8]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[9]: /wiki/Higher_order_functions "Higher order functions"
[10]: /wiki/Currying "Currying"
[11]: /wiki/Lazy_evaluation "Lazy evaluation"
[12]: /wiki/Integrated_development_environment "Integrated development environment"
[13]: /wiki/Uniqueness_type "Uniqueness type"
[14]: /wiki/Monads_in_functional_programming "Monads in functional programming"
[15]: /wiki/Destructive_update "Destructive update"
[16]: #cite_note-CleanHaskellGuide-2
[17]: /wiki/Hello_world_program "Hello world program"
[18]: /wiki/Factorial "Factorial"
[19]: /wiki/Fibonacci_sequence "Fibonacci sequence"
[20]: /wiki/Infix_notation "Infix notation"
[21]: /w/index.php?title=StdEnv&action=edit&redlink=1 "StdEnv (page does not exist)"
[22]: /wiki/Graph_rewriting "Graph rewriting"
[23]: /wiki/Graph_reduction "Graph reduction"
[24]: #cite_note-3
[25]: /wiki/C_(programming_language) "C (programming language)"
[26]: /w/index.php?title=SAPL&action=edit&redlink=1 "SAPL (page does not exist)"
[27]: /wiki/Machine_code "Machine code"
[28]: /wiki/Imperative_programming "Imperative programming"
[29]: #cite_note-4
[30]: /wiki/Memory_address#Memory_models "Memory address"
[31]: /wiki/Runtime_system "Runtime system"
[32]: /wiki/Microsoft_Windows "Microsoft Windows"
[33]: /wiki/Apple_Macintosh "Apple Macintosh"
[34]: /wiki/Solaris_(operating_system) "Solaris (operating system)"
[35]: /wiki/Linux "Linux"
[36]: /w/index.php?title=ObjectIO&action=edit&redlink=1 "ObjectIO (page does not exist)"
[37]: /wiki/Dual_license "Dual license"
[38]: /wiki/GNU_Lesser_General_Public_License "GNU Lesser General Public License"
[39]: /wiki/Simplified_BSD_License "Simplified BSD License"
[40]: #cite_note-5