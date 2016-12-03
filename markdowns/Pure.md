**Pure** is a dynamically typed, [functional][0] [programming language][1] based on [term rewriting][2]. It has facilities for user-defined [operator][3] syntax, [macros][4], [multiple-precision numbers][5], and compilation to native code through the [LLVM][6]. It is the successor to the [Q programming language][7].

Pure comes with an interpreter and debugger, provides automatic memory management, and has powerful functional and symbolic programming capabilities as well as interface to C libraries (e.g. for numerics, low-level protocols, and other such tasks). At the same time, Pure is a "small" language designed from scratch; its interpreter is not large, and the library modules are written in Pure itself. The syntax of Pure resembles that of [Miranda][8] and [Haskell][9], but it is a [free-format language][10] and thus uses explicit delimiters (rather than [indentation][11]) to indicate program structure.

The Pure language is a successor of the [Q][7] language created previously by the same author, Albert Gräf at the [University of Mainz][12] in Germany. Compared to Q, it offers some important new features (in particular, local functions with [lexical scoping][13], efficient vector and matrix support and the built-in C interface) and programs run much faster as they are [JIT-compiled][14] to native code on the fly. Pure is mostly aimed at mathematical applications and [scientific computing][15] currently, but its interactive interpreter environment, the C interface and the growing collection of addon modules make it suitable for a variety of other applications, such as artificial intelligence, symbolic computation, and real-time multimedia processing.

Pure [plugins][16] are available for the [Gnumeric][17] spreadsheet and Miller Puckette's [Pure Data][18] graphical multimedia software, which make it possible to extend these programs with functions written in the Pure language. Interfaces to [GNU Octave][19], [OpenCV][20], [OpenGL][21], the [GNU Scientific Library][22], [FAUST][23], [SuperCollider][24] and liblo (for [OSC][25]) are also provided as library modules.

Pure is [free software][26] distributed (mostly) under the [GNU Lesser General Public License][27] version 3 (or later).

## Examples

The [Fibonacci numbers][28] (naive version):

Better ([tail-recursive][29] and [linear-time][30]) version:

Compute the first 20 Fibonacci numbers:

An [algorithm][31] for the [n queens problem][32] which employs a [list comprehension][33] to organize the backtracking search:

While Pure uses [eager evaluation][34] by default, it also supports [lazy][35] data structures such as streams (lazy [lists][36]). For instance, here is a (suboptimal) trial division version of the [sieve of Eratosthenes][37] (attributed to [David Turner][38][\[1\]][39]) which computes the stream of all [prime numbers][40]:

Note the use of the & operator which turns the tail of the sieve into a [thunk][41] to delay its computation. The thunk is evaluated implicitly and then [memoized][42] (using [call by need][43] evaluation) when the corresponding part of the list is accessed, e.g.:

Pure has efficient support for vectors and matrices (similar to that provided by [MATLAB][44] and [GNU Octave][19]), including vector and matrix comprehensions. E.g., a [Gaussian elimination][45] algorithm with [partial pivoting][46] can be implemented as follows in Pure:

As a language based on [term rewriting][2], Pure fully supports [symbolic computation][47] with expressions. Here is an example showing the use of local rewriting rules to [expand][48] and [factor][49] simple arithmetic expressions:

Calling [C][50] functions from Pure is very easy. E.g., the following imports the puts function from the [C library][51] and uses it to print the string "Hello, world!" on the terminal:

## See also

## References

## Notes

## External links

[0]: /wiki/Functional_programming "Functional programming"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Term_rewriting "Term rewriting"
[3]: /wiki/Operator_(programming) "Operator (programming)"
[4]: /wiki/Macro_(computer_science) "Macro (computer science)"
[5]: /wiki/Arbitrary-precision_arithmetic "Arbitrary-precision arithmetic"
[6]: /wiki/LLVM "LLVM"
[7]: /wiki/Q_(equational_programming_language) "Q (equational programming language)"
[8]: /wiki/Miranda_programming_language "Miranda programming language"
[9]: /wiki/Haskell_programming_language "Haskell programming language"
[10]: /wiki/Free-format_language "Free-format language"
[11]: /wiki/Off-side_rule "Off-side rule"
[12]: /wiki/University_of_Mainz "University of Mainz"
[13]: /wiki/Lexical_scoping "Lexical scoping"
[14]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[15]: /wiki/Scientific_computing "Scientific computing"
[16]: /wiki/Plugins "Plugins"
[17]: /wiki/Gnumeric "Gnumeric"
[18]: /wiki/Pure_Data "Pure Data"
[19]: /wiki/GNU_Octave "GNU Octave"
[20]: /wiki/OpenCV "OpenCV"
[21]: /wiki/OpenGL "OpenGL"
[22]: /wiki/GNU_Scientific_Library "GNU Scientific Library"
[23]: /wiki/FAUST_(programming_language) "FAUST (programming language)"
[24]: /wiki/SuperCollider "SuperCollider"
[25]: /wiki/Open_Sound_Control "Open Sound Control"
[26]: /wiki/Free_software "Free software"
[27]: /wiki/GNU_Lesser_General_Public_License "GNU Lesser General Public License"
[28]: /wiki/Fibonacci_numbers "Fibonacci numbers"
[29]: /wiki/Tail-recursive "Tail-recursive"
[30]: /wiki/Linear-time "Linear-time"
[31]: /wiki/Algorithm "Algorithm"
[32]: /wiki/Eight_queens_puzzle "Eight queens puzzle"
[33]: /wiki/List_comprehension "List comprehension"
[34]: /wiki/Eager_evaluation "Eager evaluation"
[35]: /wiki/Lazy_evaluation "Lazy evaluation"
[36]: /wiki/List_(computing) "List (computing)"
[37]: /wiki/Sieve_of_Eratosthenes#Trial_division "Sieve of Eratosthenes"
[38]: /wiki/David_Turner_(computer_scientist) "David Turner (computer scientist)"
[39]: #cite_note-1
[40]: /wiki/Prime_numbers "Prime numbers"
[41]: /wiki/Thunk "Thunk"
[42]: /wiki/Memoization "Memoization"
[43]: /wiki/Call_by_need "Call by need"
[44]: /wiki/MATLAB "MATLAB"
[45]: /wiki/Gaussian_elimination "Gaussian elimination"
[46]: /wiki/Partial_pivoting "Partial pivoting"
[47]: /wiki/Symbolic_computation "Symbolic computation"
[48]: /wiki/Polynomial_expansion "Polynomial expansion"
[49]: /wiki/Factorization "Factorization"
[50]: /wiki/C_(programming_language) "C (programming language)"
[51]: /wiki/C_library "C library"