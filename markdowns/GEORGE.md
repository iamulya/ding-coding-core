**GEORGE** is a [programming language][0] invented by [Charles Leonard Hamblin][1] in 1957\.[\[1\]][2][\[2\]][3]

It was designed around a push-down pop-up stack for arithmetic operations, and employed [reverse Polish notation][4].

The language included [loops][5], [subroutines][6], [conditionals][7], [vectors][8], and [matrices][9].

Algebraic expressions were written in reverse Polish notation; thus, ![a+b](https://wikimedia.org/api/rest_v1/media/math/render/svg/a2391acf09244b9dba74eb940e871a6be7e7973a) was written `a b +`, and similarly for the other arithmetic operations of subtraction, multiplication, and division.

The algebraic expression ![ax^{2}+bx+c](https://wikimedia.org/api/rest_v1/media/math/render/svg/126c6935d3dd9f1c1da0c388ca2799be4f6f237c) was written `a x dup × × b x × + c +`, where '`dup`' meant 'duplicate the value'.

Following the reverse Polish form, an assignment statement to evaluate the formula ![{\displaystyle y=ax^{2}+bx+c}](https://wikimedia.org/api/rest_v1/media/math/render/svg/cf8a55c26ab89b7ed1b9b7dba43e446364e96022) was written as `a x dup × × b x × + c + (y)`.

The computer evaluated the expression as follows: the values of `a`, then `x`, were pushed onto the top of the [accumulator stack][10]; '`dup`' caused a copy of the top-most value (`x`) to be pushed onto the top of the accumulator stack; Multiply (`×`) caused the top two values, namely, `x` and `x`, to be removed (popped) and multiplied, returning the product to the top of the accumulator stack. The second multiply (`×`) then caused the top two values on the stack (namely, `a` and `x**2`) to be popped and multiplied, and the product (`a×x**2`) to be pushed onto the top of the accumulator stack. And so on the remaining components of the expression. The final operation, namely (`y`), returned the value of the expression to storage without changing the status of the accumulator stack.

Assuming that the value on the top of the accumulator stack was not required immediately, it would be removed (cleared) by using the operator (`;`).

The following program reads in eight values and forms their sum:

Manipulation of vectors and matrices requires subscript notation. In GEORGE, the subscript(s) preceded the vector or matrix name. Thus A(j) was written `j | A`. The following program reads in vector _a_ of 10 values, then forms the squares of those values, and finally prints those values.

The above GEORGE coding table assisted in transcribing a program onto punch cards.

Conditional operations were written as jumps, as follows: if a \> 0 go to 5 (which transfers to label 5 if a is greater than zero) would be written

Label 5 was indicated by including \*5 elsewhere in the program. Unconditional transfers were written 5↑

Subroutine calls were made with the down arrow, .g., to call subroutine labelled 17, write 17↓, where the label 17 was encoded using column 3 of the above table.

## Historical note

In the first version running by May 1957 on an [English Electric DEUCE][11], all values were stored in binary fixed-point form in a 32-bit word, with 16 binary places.

In the second version introduced by 1958, values were held in floating-point form, with one value per word: 22 bits for the mantissa and 10 bits for the exponent.

Some form of coding table was needed because the printing equipment of the time provided only 26 letters of the alphabet, a decimal point, plus sign, minus sign, and slash.

## References

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Charles_Leonard_Hamblin "Charles Leonard Hamblin"
[2]: #cite_note-1
[3]: #cite_note-2
[4]: /wiki/Reverse_Polish_notation "Reverse Polish notation"
[5]: /wiki/Loop_(computing) "Loop (computing)"
[6]: /wiki/Subroutine "Subroutine"
[7]: /wiki/Conditional_(programming) "Conditional (programming)"
[8]: /wiki/Array_data_structure "Array data structure"
[9]: /wiki/Matrix_(mathematics) "Matrix (mathematics)"
[10]: /wiki/Stack_machine "Stack machine"
[11]: /wiki/English_Electric_DEUCE "English Electric DEUCE"