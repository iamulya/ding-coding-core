**TTM** is a string oriented, general purpose macro processing [programming language][0] developed in 1968 by Steven Caine and E. Kent Gordon at the [California Institute of Technology][1].

## Description

The following description is taken from the original TTM reference manual [\[1\]][2] and the subsequent batch processing extension.[\[2\]][3]

TTM Is a recursive, interpretive language designed primarily for string manipulation, text editing, macro definition and expansion, and other applications generally classified as systems programming. It is derived, primarily, from GAP[\[3\]][4] and GPM.[\[4\]][5]

Initially, TTM was planned as the macro processing portion of an assembler for the IBM System/360 and, as such, was designed to overcome the restrictions and inconsistencies which existed in the standard assemblers for that system.[\[5\]][6][\[6\]][7]

In addition, it was designed to have all of the power possessed by earlier general macro assemblers but with the unfortunate syntactic and semantic difficulties removed.[\[7\]][8][\[8\]][9][\[9\]][10][\[10\]][11]

During the development of TTM, it became apparent that applications other than assembler macro processing were possible. These include data editing, text manipulation, expression compiling, and macro processing for language processors other than assemblers.

The initial version of TTM was implemented to run in a conversational manner under the Caltech Basic Time Sharing System for the [IBM System/360 Model 50][12].[\[11\]][13] Other versions have been written to run in the batch processing environment of OS/360 and to operate in front of or in conjunction with various language processors.

## Syntax and Semantics

The reference implementation assumes that TTM is given a text file containing some combination of ordinary text and TTM function calls (i.e. invocations). The text is scanned character by character. Any ordinary text is passed to the output unchanged (except for [escapes][14]). If a TTM function is encountered, it is collected and executed.

The general form of a TTM function call looks like this

where the function name and the arguments are arbitrary character strings not containing characters of significance: '\#', '<', '\>', and ';'. The function is invoked with the specified arguments and the resulting text is inserted into the original text in place of the function call. If the function call was prefixed by a single '\#' character, then scanning will resume just _before_ the inserted text from the function call.

This is called _active_ invocation.

If the function call was prefixed by two '\#' characters, then scanning resumes just _after_ the inserted text. This is called _passive_ invocation.

During the collection of a function call, additional function calls may be encountered, for example, this.

The nested function call will be invoked when encountered and the result inserted into the text of the outer function call and scanning of the outer function call resumes at the place indicated by the number of '\#' characters preceding the nested call.

If a function takes, for example, 2 arguments, any extras are ignored. For user defined functions, if too few arguments are provided, additional one are added with the value of the empty string (""). A function may have a maximum of 62 arguments.

As with other [applicative programming languages][15], a TTM function may be recursive and may be defined as the result of the invocation of a sequence of other function calls.

Functions are either _built-in_ or _user defined_. A large number of built-in functions exist and are defined in the TTM reference manual [\[1\]][2]

## Function definition

User defined functions are created using the following two built-in functions.

The first function, ds for "define string", defines a named string in the TTM dictionary. The name is "name" and its value is "text". Invoking this named string will cause its invocation to be replaced by the value (i.e. "text").

The second function, ss for "segment string", scans the text of a previously defined string looking for occurrences of its arguments: text1, text2, ... textn. When an occurrence is found, it is replaced with a _segment mark_. All occurrences of each argument are replaced by the same segment mark.

When a segmented string is invoked, each argument to the call is substituted for the corresponding segment mark. Consider this example.

The string F is defined (line 1) and its body "abcxxdefyy" is segmented on the two strings "xx" and "yy" (line2). When invoked (line 3), it will return the value "abc11def22". In effect, we have a user defined function F with two arguments.

## Escaping

It is possible to escape one or more characters using either of two conventions.

If a string is enclosed in <...\>, then it is scanned but not interpreted by TTM. In the scanning process, the outer < and \> brackets are removed. If there are nested occurrences of <...\>, then they are scanned but the < and \> are not removed. The brackets must balance: the number of '<' characters must equal the number of '\>' characters.

The '@' escape convention causes the interpreter to pass as-is the character after the '@'. The leading '@' is left if it within a <...\> escape sequence, otherwise it is removed. One use is to allow unbalanced occurrences of '<' or '\>' characters.

## Examples

## Example 1: Function Definition

The most basic example involves defining a function that is useful for defining additional functions. This "meta" function is called _def_. It is written as:

We can, for example, use _def_ to define the string XX as 12345 and then segment XX on 34 by writing this.

The call

will then produce the string "1200005".

The _def_ function operates by invoking _ds_ to define the function name and initial text in the **TTM** dictionary --- XX in our example.

Then the text of the dictionary entry of XX is segmented with respect to any specified arguments: "34" in this case.

When XX is invoked, its argument is substituted for the segment mark.

## Example 2: Factorial

The factorial function can be defined (using the above _\#\#<def\>_ function) as follows.

Notice that the inner computation (\#<mu...) is escaped so it will only be evaluated after the \#<lt... functions is executed and returns that nested computation as its result.

An example call would look like this.

and would return the string 6\.

## See also

The exact relationship between TTM and TRAC is unknown. The TTM documentation indicates that it was derived from GAP[\[3\]][4] and GPM.[\[4\]][5] In any case, the description of the characteristics of TRAC also apply to TTM. However, by removing the syntactic distinction between built-in and user-defined function, TTM would appear to be a much cleaner language.

## Notes

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/California_Institute_of_Technology "California Institute of Technology"
[2]: #cite_note-interactive-1
[3]: #cite_note-2
[4]: #cite_note-GAP-3
[5]: #cite_note-GPM-4
[6]: #cite_note-5
[7]: #cite_note-6
[8]: #cite_note-7
[9]: #cite_note-8
[10]: #cite_note-9
[11]: #cite_note-10
[12]: /wiki/IBM_System/360_Model_50 "IBM System/360 Model 50"
[13]: #cite_note-11
[14]: #Escaping
[15]: /wiki/Applicative_programming_language "Applicative programming language"