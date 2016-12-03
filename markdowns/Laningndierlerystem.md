The **Laning and Zierler system** (sometimes called "George" by its users) was one of the first operating algebraic [compilers][0], that is, a system capable of accepting mathematical formulae in [algebraic notation][1] and producing equivalent [machine code][2] (the term compiler had not yet been invented and the system was referred to as "an [interpretive][3] program"). It was implemented in 1954 for the [MIT][4] [WHIRLWIND][5] by [J. Halcombe Laning][6] and Neal Zierler. It is preceded by the [UNIVAC][7] A-2, [IBM][8] [Speedcoding][9] and a number of systems that were proposed but never implemented.

## Description

The system accepted formulae in a more or less algebraic notation. It respected the standard rules for [operator precedence][10], allowed nested parentheses, and used superscripts to indicate [exponents][11]. It was among the first programming systems to allow [symbolic variable][12] names and allocate storage automatically.

The system also automated the following tasks: [floating point][13] computation, linkage to [subroutines][14] for the basic functions of analysis (sine, etc.) and printing, and arrays and indexing.

The system accepted input on [punched tape][15] produced by a [Friden Flexowriter][16]. The [character set][17] in use at the Whirlwind installation included "[upper-case][18]" (superscript) digits and a hyphen, which were used to indicate array indices, function codes, and (integer) exponents. Like other programming notations of its time, the system accepted only single-letter variable names and [multiplication was indicated by juxtaposition][19] of operands. A raised dot was available to indicate multiplication explicitly (the character was created by filing off the lower half of a colon!) The system also included support for solution of linear differential equations via the [Runge-Kutta method][20].

The system was described in an 18-page typewritten manual written for people familiar with mathematics but perhaps unfamiliar with computers. It contains almost nothing in the way of an introduction to computer hardware.

## Sample Program

The following example, taken from page 11 of the system's manual, evaluates ![\cos x](https://wikimedia.org/api/rest_v1/media/math/render/svg/184ba70c3a71df25a25c09f34cd7f8175a9b5280) for ![x=0,0.1,...,1](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fab8d8f0a6459ed06333104398863edd59e6a96) using the [Taylor series][21] expansion. The implementation is not terribly efficient, and the system already includes ![\cos x](https://wikimedia.org/api/rest_v1/media/math/render/svg/184ba70c3a71df25a25c09f34cd7f8175a9b5280) in its subroutine library, but the example serves to give a flavor of the system's syntax. Note that division in the system is evaluated after multiplication:

## Applications

Few applications were written for the system. One documented application, authored by Laning and Zierler themselves, involved a problem in aeronautics. The problem required seven systems of differential equations to express, and had been given to the Whirlwind because it was too large for MIT's [Differential Analyzer][22] to handle. The authors, exploiting the Runge-Kutta feature of their programming system, produced a 97-statement program in two and half hours. The program ran successfully the first time.

## Influence on FORTRAN

Some sources have said that the Laning and Zierler system was the inspiration for [FORTRAN][23]. [John Backus][24] himself admitted to having contributed to this misconception:

The effect of the Laning and Zierler system on the development of FORTRAN is a question which has been muddled by many misstatements on my part. For many years I believed that we had gotten the idea for using algebraic notation in FORTRAN from seeing a demonstration of the Laning and Zierler system at MIT. (Backus [\[1\]][25])

After reviewing documentation from the time, Backus learned that the FORTRAN project was "well underway" when he and his team got a chance to see Laning and Zierler's work:

\[W\]e were already considering algebraic input considerably more sophisticated than that of Laning and Zierler's system when we first heard of their pioneering work... \[I\]t is difficult to know what, if any, new ideas we got from seeing the demonstration of their system. (Backus, _op cit_)

## Notes

## References

## See also

[0]: /wiki/Compiler "Compiler"
[1]: /wiki/Infix_notation "Infix notation"
[2]: /wiki/Machine_code "Machine code"
[3]: /wiki/Interpreter "Interpreter"
[4]: /wiki/Massachusetts_Institute_of_Technology "Massachusetts Institute of Technology"
[5]: /wiki/Whirlwind_(computer) "Whirlwind (computer)"
[6]: /wiki/J._Halcombe_Laning "J. Halcombe Laning"
[7]: /wiki/UNIVAC "UNIVAC"
[8]: /wiki/IBM "IBM"
[9]: /wiki/Speedcoding "Speedcoding"
[10]: /wiki/Operator_precedence "Operator precedence"
[11]: /wiki/Exponentiation "Exponentiation"
[12]: /wiki/Variable_(computer_science) "Variable (computer science)"
[13]: /wiki/Floating_point "Floating point"
[14]: /wiki/Subroutine "Subroutine"
[15]: /wiki/Punched_tape "Punched tape"
[16]: /wiki/Friden_Flexowriter "Friden Flexowriter"
[17]: /wiki/Character_set "Character set"
[18]: /wiki/Upper-case "Upper-case"
[19]: /wiki/Multiplication_by_juxtaposition "Multiplication by juxtaposition"
[20]: /wiki/Runge-Kutta_methods "Runge-Kutta methods"
[21]: /wiki/Taylor_series "Taylor series"
[22]: /wiki/Differential_Analyzer "Differential Analyzer"
[23]: /wiki/FORTRAN "FORTRAN"
[24]: /wiki/John_Backus "John Backus"
[25]: //en.wikipedia.org/wiki/Laning_and_Zierler_system#endnote_Backus