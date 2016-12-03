**TUTOR** (also known as **PLATO Author Language**) is a [programming language][0] developed for use on the [PLATO system][1] at the [University of Illinois at Urbana-Champaign][2] around 1965\. TUTOR was initially designed by [Paul Tenczar][3] for use in [computer assisted instruction][4] (CAI) and [computer managed instruction][5] (CMI) (in computer programs called "lessons") and has many features for that purpose. For example, TUTOR has powerful answer-parsing and answer-judging commands, graphics, and features to simplify handling student records and statistics by instructors. TUTOR's flexibility, in combination with PLATO's computational power (running on what was considered a supercomputer in 1972), also made it suitable for the creation of many non-educational lessons---that is, _games_---including flight simulators, war games, dungeon style multiplayer role-playing games, card games, word games, and medical lesson games such as [Bugs and Drugs][6] (BND).

## Origins and development

TUTOR was originally developed as a special purpose [authoring language][7] for designing instructional lessons, and its evolution into a general purpose programming language was unplanned. The name TUTOR was first applied to the authoring language of the [PLATO system][8] in the later days of Plato III. The first documentation of the language, under this name, appears to have been _The TUTOR Manual_, CERL Report X-4, by R. A. Avner and P. Tenczar, Jan. 1969\.

The article _Teaching the Translation of Russian by Computer_[\[2\]][9] gives a snapshot of TUTOR from shortly before PLATO IV was operational. Core elements of the language were present, but commands were given in upper case, and instead of using a general mechanism, support for alternative character sets was through special command names such as `WRUSS` for "write using the Russian character set."

Through the 1970s, the developers of TUTOR took advantage of the fact that the entire corpus of TUTOR programs were stored on-line on the same computer system. Whenever they felt a need to change the language, they ran conversion software over the corpus of TUTOR code to revise all existing code so that it conformed with the changes they had made.[\[3\]][10] As a result, once new versions of TUTOR were developed, maintaining compatibility with the PLATO version could be very difficult.[\[4\]][11]

[CDC][12], by 1981, had largely expunged the name TUTOR from their PLATO documentation. They referred to the language itself as the _PLATO Author Language_. The phrase _TUTOR file_ or even _TUTOR lesson file_ survived, however, as the name of the type of file used to store text written in the PLATO Author Language.[\[5\]][13]

## Structure of a TUTOR lesson

A TUTOR lesson consists of a sequence of _units_ where each unit begins with the presentation of information and progress from one unit to the next is contingent on correctly answering one or more questions. As with [COBOL][14] paragraphs, control may enter a TUTOR unit from the preceding unit and exit into the next, but units are also callable as subroutines using the `do` or `join` commands.

Here is an example unit from page 5 of the _TUTOR User's Memo_, March 1973 ([Computer-based Education Research Laboratory][15], University of Illinois at Urbana-Champaign):

Several things should be immediately apparent from this example.

What may not be apparent is the control structure implicit in this unit. The `arrow` command marks the entrance to a _judging block_ This control structure is one of TUTOR's unique features.

## Unique features

TUTOR contained a number of unique features. The following list is not intended as a substitute for a TUTOR manual, but merely highlights the most interesting, innovative, and sometimes confusing features of the language.

## Answer judging

A _judging block_ in TUTOR is a control structure that begins with an `arrow` command and ends with the next `arrow`, `endarrow` or `unit` command. The `arrow` command also prompts for input, with the special arrow character (resembling "▷") displayed as a prompt at the indicated screen coordinates. In effect, a judging block can be thought of as a backtracking control structure where the student may make multiple attempts to answer a question until a correct answer allows forward progress.

## Judging pattern matching

Each judging block consists of a sequence of [pattern matching][16] commands, each of which introduces a (possibly empty) block of commands to be executed if that pattern matches. The two most common pattern matching commands were `answer` and `wrong`. These had identical pattern matching semantics except that `answer` judged a student response to be correct if it matched, while `wrong` judged a student response to be incorrect.

The tag fields on the `answer` and `wrong` commands consisted of lists of optional, required and alternative words. consider this example from exercise 4-1 in the 1973 _TUTOR User's Memo_:

This would match answers such as "it is a right triangle" or "it's a triangular figure" or just "rt triangle". It would not match "sort of triangular" because the words "sort of" are not listed as ignored, and it would not match "triangle, right?" because the order is wrong.

The pattern matching subsystem recognized spelling errors, so the words "triangel" or "triangl" would match the example pattern. The lesson author could use the `specs` command to set how pedantic the system was about spelling errors.

The pattern matching algorithms used by various TUTOR implementations varied in detail, but typically, each word in the input text and each word in the pattern were converted to [bit vectors][17]. To see whether a word of student input matched a word of the pattern, the [Hamming distance][18] between the two bit vectors was used as a measure of the degree of difference between the words. Bit vectors were typically 60 or 64 bits long, with fields for letter presence, letter pair presence, and the first letter. As a result, the number of one bits in the [exclusive or][19] of two such bit vectors approximated the extent of the phonetic difference between the corresponding words.[\[6\]][20]

## Judging control structures

All early presentations of the control structure of a TUTOR judging block were confusing. In modern terms, however, a judging block can be described as an [iterative control structure][21] that exits when the student input is judged correct. The body of this control structure consists of a series of [cases][22], each introduced by a [pattern matching][16] command such as `answer` or `wrong`. All output produced by the body of the judging loop in the previous cycle is erased from the screen prior to the next cycle.

Consider this example, from exercise 4-1 of the 1973 _TUTOR User's Memo_:

In the event that the student inputs "square" or "a square", the answer is judged to be incorrect, and the text "A square has four sides." is output starting at line 15 column 1 on the screen. This output remains on the screen until the student begins to enter a new answer, at which point, it is erased so that the response to the new answer can be computed. The mechanism by which the display screen rolls back to its previous state varies from implementation to implementation. Early implementations operated by switching the terminal into erase mode and re-executing the entire case that had matched. Some later implementations buffered the output produced during judging so that this output could be erased.

The `join` command was a unique form of subroutine call. It was defined as being equivalent to textual substitution of the body of the joined unit in place of the join command itself (page 21, 1973 _TUTOR User's Memo_). As such, a joined unit could contain part of a judging block. Thus, while the judging block is conceptually an [iterator][21] enclosing a series of [cases][22], this block may be arbitrarily broken into subroutines. (An alternative subroutine call, the `do` command, conformed to the usual semantics associated with subroutine calls in other programming languages.)

## Graphic and display commands

The PLATO IV student terminal[\[7\]][23] had a 512 by 512 [pixel][24] [plasma display panel][25], with hardware support for point plotting, line drawing, and text display. Each pixel on the PLATO IV terminal was either orange or black. The CDC PLATO V terminal used a monochrome black and white [CRT][26] to emulate the plasma panel. The built-in character set had 4 sets of 63 characters, each 8 by 16 pixels, half of these were fixed, half were programmable. The Tutor language provided complete support for this terminal.

There were two [coordinate systems][27] (see page II-1 of _The TUTOR Language_ by Bruce Sherwood):

## Drawing commands

The following example illustrates some of Tutor's drawing commands.[\[8\]][28]

Note the use of semicolons to separate successive coordinates on the `draw` command. This allows use unambiguous use of comma-separated fine coordinates. Normally, the draw command connects consecutive points with line segments, but by putting `skip` in the tag, the `draw` command could be made to conceptually lift its pen.

The tags on the `circle` command give the radius and fine coordinates of the center. Additional tags could specify starting and ending angles for partial circles.

Hand composing draw commands is difficult, so a picture editor was included in the PLATO system by 1974 to automate this work.[\[9\]][29] This could only deal with drawing commands with constant coordinates.

## Text rendering commands

The following example illustrates some of the text rendering tools of Tutor.[\[10\]][30]

Text rendered in size zero rotation zero used the built-in character rendering hardware of the PLATO terminal, while rendering with nonzero size and rotation was done with line segments and therefore significantly slower due to the speed of the communication link to the terminal.

## Control structures

Aside from its unique answer judging mechanisms, TUTOR's original set of [control structures][31] was rather sparse. In the mid 1970s, this shortcoming was addressed by introducing `if`, `endif` blocks with optional `elseif` and `else` sections. The semantics of these control structures was routine, but the syntax was unique, with mandatory [indentation][32] presaging that of [Python][33] and a unique use of nonblank indent characters to distinguish indenting from continuation lines.

This is illustrated in the following example, from page S5 of the _Summary of TUTOR Commands and System Variables (10th ed)_ by Elaine Avner, 1981:

(The [assignment][34] arrow in the `calc` statement is not rendered correctly in some browsers. It appears similar to <= but as one character. It had a dedicated key on the PLATO IV keyboard.)

The same syntax was used for `loop`, `endloop` blocks with semantics comparable to [while loops][21] in conventional programming languages. This is illustrated in the following example, from page S6 of the _Summary of TUTOR Commands and System Variables (10th ed)_ by Elaine Avner, 1981:

Note that the `reloop` and `outloop` commands are somewhat analogous to the `continue` and `break` statements of languages based on [C][35], except that they must sit at the indenting level of the loop they modify, and they have a condition tag that indicates when the indicated control transfer is to take place.

## Expression syntax

TUTOR's expression syntax did not look back to the syntax of [FORTRAN][36], nor was it limited by poorly designed character sets of the era. For example, the PLATO IV character set included [control characters][37] for [subscript and superscript][38], and TUTOR used these for exponentiation. Consider this command (from page IV-1 of _The TUTOR Language_, Sherwood, 1974):

The character set also included the conventional symbols for multiplication and division, `×` and `÷`, but in a more radical departure from the conventions established by FORTRAN, it allowed implicit multiplication, so the expressions `(4+7)(3+6)` and `3.4+5(23-3)/2` were valid, with the values 99 and 15.9, respectively (op cit).

The language included a pre-defined constant named with the Greek letter pi (π), with the appropriate value, which could be used in calculations. Thus, the expression `πr2` could be used to calculate the area of a circle, using the built-in π constant, implicit multiplication and exponentiation indicated by a superscript.

In TUTOR, the floating-point comparison `x=y` was defined as being true if `x` and `y` were approximately equal (see page C5 of _PLATO User's Memo, Number One_ by Avner, 1975). This simplified life for mathematically naïve developers of instructional lessons, but it occasionally caused headaches for developers of numerically sophisticated code because it was possible that both `x<y` and `x≥y` could be true at the same time.[\[11\]][39]

## Memory management

As an authoring language, TUTOR began with only minimal memory resources and only the crudest tools for manipulating them. Each user process had a private data segment of 150 variables, and shared _common blocks_ could be attached, allowing interuser communication through shared memory.

On the PLATO IV system, words were 60 bits, in keeping with the [CDC 6600][40] family of computers. Some later implementations changed this to 64 bits.[\[12\]][41]

## Basic memory resources

The private memory region of each process consisted of 150 words each, referred to as student variables; the values of these variables were persistent, following the individual user from session to session. These were addressed as `n1` through `n150` when used to hold integer values, or as `v1` through `v150` when used to hold floating point values.[\[13\]][42]

A TUTOR lesson could attach a single region of up to 1500 words of shared memory using the `common` command. Each lesson could have an unnamed temporary common block containing variables shared by all users of that lesson. Such blocks were created when a lesson came into use and deallocated when the lesson became inactive. In contrast, named common blocks were associated with a block of a lesson (a disk file). Shared memory was addressed as `nc1` through `nc1500` (for integers) or `vc1` through `vc1500` (for floating point numbers).[\[14\]][43]

Where 150 student variables was insufficient, a lesson could use the `storage` command to create an additional private memory segment of up to 1000 words. This segment existed in swap space only, but it could be mapped to student variables or common variables. For example (from page X-11 of _The TUTOR Language_, Sherwood, 1974):

This example defines `nc1` to `nc1000` as a shared unnamed common block, while `nc1001` to `nc1075` are private storage.

## Defining symbolic names

The Tutor `define` command was very similar to the [C][35] `#define` [preprocessor][44] directive. This was the only way to associate mnemonic names with variables. It was up to the programmer to statically allocate memory and assign names to variables. Consider this example from page 17 of the _TUTOR User's Memo -- Introduction to TUTOR_, 1973"

This creates a set of definitions named `mynames` defining three floating point variables. Users were advised that "_there should not be any v3's or v26's anywhere in your lesson except in the `define` statement itself_. Put all your definitions at the very beginning of the lesson where you will have ready reference to which variables you are using." (underlining from the original, page IV-5 of _The TUTOR Language_, Sherwood, 1974.)

Functions could be defined, with macro-substitution semantics, as in this illustration from page IX-2 of _The TUTOR Language_, Sherwood, 1974:

Unlike C, the original [scope rules][45] of TUTOR were pure "definition before use" with no provisions for local definitions. Thus, the formal parameter `a` used above must not have any previous definition.

Later in the development of TUTOR, with the introduction of multiple named sets of definitions, the programmer was given explicit control over which sets of definitions were currently in force. For example, `define purge, setname` would discard all definitions in the named set.[\[15\]][46]

## Arrays, packed arrays, and text manipulation

The original TUTOR tools for text manipulation were based on commands for specific text operations, for example, `pack` to place a packed character string into consecutive variables in memory, `search` to search for one string within another, and `move` to move a string from memory to memory.[\[16\]][47] By 1975, more general tools for arrays of integers and packed arrays were added. Page 14 of _PLATO User's Memo -- Summary of TUTOR Commands and System Variables_, Avner, 1975, gives the following:

_Segmented arrays_, defined with the keyword `segment`, were comparable to packed arrays in [Pascal][48]. The byte size and whether or not the array elements were to be treated as signed or unsigned were entirely under user control. Arbitrary text manipulation could be done by setting the byte size to the machine byte size, 6 bits on implementations using [display code][49], 8 bits on some later [ASCII][50] and [extended ASCII][51] implementations. Note the lack of any specification of array dimensionality for segmented arrays.

## Parameter passing

A general [parameter passing][52] mechanism was added to TUTOR early in the PLATO IV era. Page IV-10 of _The TUTOR Language_ by Sherwood, 1974 gives the following example:

Notice that the [formal parameters][53] listed in the argument list to the `unit` command are simply the defined names for statically allocated global variables. The semantics of parameter passing was given as being equivalent to assignment at the time of the control transfer to the destination unit, and if [actual parameters][53] were omitted, as in the second `do` command above, the effect was to leave the prior values of the corresponding formal parameters unchanged.

## Local variables

[Local variables][54] were added to TUTOR some time around 1980\. Lesson authors wishing to use local variables were required to use the `lvars` command to declare the size of the buffer used for local variables, up to 128 words.[\[17\]][55] Having done so, a unit using local variables could begin as follows (from Page C2 of _Summary of TUTOR Commands and System Variables_, Avner, 1981):

The continuation lines of the `unit` command given above are taken to be lines of an implicit `define` command with local [scope][45]. Conventional definitions in terms of student variables such as `n150` could be used in such a local `define`, but the forms illustrated here all automatically bind names to locations in the block of memory allocated by the `lvars` command. The available TUTOR documentation does not discuss how local variables are allocated.

## Other Implementations

There has been a sizable family of TUTOR-related languages, each similar to the original TUTOR language but with differences. In particular, TUTOR was a component of a system (the PLATO computer-based education system) that ran on particular CDC mainframe hardware. For efficiency, there were some hardware-specific elements in TUTOR (e.g. variables that were 60-bit words that could be used as arrays of 60 bits or as 10 six-bit characters, etc.). Also, TUTOR was designed before the advent of the windows-oriented graphical user interface (GUI).

The microTutor language was developed in the PLATO project at UIUC to permit portions of a lesson to run in terminals that contained microcomputers, with connections to TUTOR code running on the mainframe. The microTutor dialect was also the programming language of the Cluster system developed at UIUC and licensed to TDK in Japan; the Cluster system consisted of a small group of terminals attached to a minicomputer which provided storage and compilation. The [Tencore Language Authoring System][56] is a TUTOR derivative developed by Paul Tenczar for PCs and sold by Computer Teaching Corporation. cT was a derivative of TUTOR and microTutor developed at Carnegie Mellon which allowed programs to run without change in windowed GUI environments on Windows, Mac, and Unix/Linux systems: [The cT Programming Language Archives][57]

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/PLATO_(computer_system) "PLATO (computer system)"
[2]: /wiki/University_of_Illinois_at_Urbana-Champaign "University of Illinois at Urbana-Champaign"
[3]: /w/index.php?title=Paul_Tenczar&action=edit&redlink=1 "Paul Tenczar (page does not exist)"
[4]: /wiki/Computer_assisted_instruction "Computer assisted instruction"
[5]: /wiki/Computer_managed_instruction "Computer managed instruction"
[6]: /w/index.php?title=Bugs_and_Drugs&action=edit&redlink=1 "Bugs and Drugs (page does not exist)"
[7]: /wiki/Authoring_language "Authoring language"
[8]: /wiki/PLATO_system "PLATO system"
[9]: #cite_note-2
[10]: #cite_note-3
[11]: #cite_note-4
[12]: /wiki/Control_Data_Corporation "Control Data Corporation"
[13]: #cite_note-5
[14]: /wiki/COBOL "COBOL"
[15]: /wiki/Computer-based_Education_Research_Laboratory "Computer-based Education Research Laboratory"
[16]: /wiki/Pattern_matching "Pattern matching"
[17]: /wiki/Bit_vector "Bit vector"
[18]: /wiki/Hamming_distance "Hamming distance"
[19]: /wiki/Exclusive_or "Exclusive or"
[20]: #cite_note-6
[21]: /wiki/While_loop "While loop"
[22]: /wiki/Conditional_(programming)#Case_and_switch_statements "Conditional (programming)"
[23]: #cite_note-7
[24]: /wiki/Pixel "Pixel"
[25]: /wiki/Plasma_display "Plasma display"
[26]: /wiki/Cathode_ray_tube "Cathode ray tube"
[27]: /wiki/Coordinate_system "Coordinate system"
[28]: #cite_note-8
[29]: #cite_note-9
[30]: #cite_note-10
[31]: /wiki/Control_flow "Control flow"
[32]: /wiki/Indent_style "Indent style"
[33]: /wiki/Python_(programming_language) "Python (programming language)"
[34]: /wiki/Assignment_(computer_science) "Assignment (computer science)"
[35]: /wiki/C_(programming_language) "C (programming language)"
[36]: /wiki/FORTRAN "FORTRAN"
[37]: /wiki/Control_characters "Control characters"
[38]: /wiki/Subscript_and_superscript "Subscript and superscript"
[39]: #cite_note-11
[40]: /wiki/CDC_6600 "CDC 6600"
[41]: #cite_note-12
[42]: #cite_note-13
[43]: #cite_note-14
[44]: /wiki/Preprocessor "Preprocessor"
[45]: /wiki/Scope_(programming) "Scope (programming)"
[46]: #cite_note-15
[47]: #cite_note-16
[48]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[49]: /wiki/Display_code "Display code"
[50]: /wiki/ASCII "ASCII"
[51]: /wiki/Extended_ASCII "Extended ASCII"
[52]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[53]: /wiki/Parameter_(computer_science)#Parameters_and_arguments "Parameter (computer science)"
[54]: /wiki/Local_variable "Local variable"
[55]: #cite_note-17
[56]: http://tencore.com
[57]: http://vpython.org/contents/cTsource/cToverview.html