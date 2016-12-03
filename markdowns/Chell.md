The **C shell** (**csh** or the improved version, **[tcsh][0]**) is a [Unix shell][1] created by [Bill Joy][2] while he was a graduate student at [University of California, Berkeley][3] in the late 1970s. It has been widely distributed, beginning with the 2BSD release of the [Berkeley Software Distribution][4] (BSD) that Joy began distributing in 1978\.[\[2\]][5][\[3\]][6] Other early contributors to the ideas or the code were Michael Ubell, [Eric Allman][7], Mike O'Brien and Jim Kulp.[\[4\]][8]

The C shell is a [command processor][9] typically run in a text window, allowing the user to type commands. The C shell can also read commands from a file, called a [script][10]. Like all Unix shells, it supports filename [wildcarding][11], [piping][12], [here documents][13], [command substitution][14], [variables][15] and [control structures][16] for [condition-testing][17] and [iteration][18]. What differentiated the C shell from others, especially in the 1980s, were its interactive features and overall style. Its new features made it easier and faster to use. The overall style of the language looked more like [C][19] and was seen as more readable.

On many systems, such as [Mac OS X][20] and [Red Hat Linux][21], csh is actually [tcsh][0], an improved version of csh. Often one of the two files is either a [hard link][22] or a [symbolic link][23] to the other, so that either name refers to the same improved version of the C shell.

On [Debian][24] and some derivatives (including [Ubuntu][25]), there are two different packages: csh and tcsh. The former is based on the original BSD version of csh[\[5\]][26][\[6\]][27] and the latter is the improved tcsh.[\[7\]][28][\[8\]][29]

tcsh added filename and command completion and command line editing concepts borrowed from the [Tenex][30] system, which is the source of the "t".[\[9\]][31] Because it only added functionality and did not change what was there, tcsh remained [backward compatible][32][\[10\]][33] with the original C shell. Though it started as a side branch from the original source tree Joy had created, tcsh is now the main branch for ongoing development. tcsh is very stable but new releases continue to appear roughly once a year, consisting mostly of minor bug fixes.[\[11\]][34]

## Design objectives and features

The main design objectives for the C shell were that it should look more like the [C programming language][19] and that it should be better for interactive use.

## More like C

The Unix system had been written almost exclusively in C, so the C shell's first objective was a command language that was more stylistically consistent with the rest of the system. The keywords, the use of parentheses and the C shell's built-in expression grammar and support for arrays were all strongly influenced by C.

By today's standards, csh may not seem particularly more C-like than many other popular scripting languages. But through the 80s and 90s, the difference was seen as striking, particularly when compared to [Bourne shell][35] (also known as _sh_), the then-dominant shell written by [Stephen Bourne][36] at [Bell Labs][37]. This example illustrates the C shell's more conventional [expression operators][38] and [syntax][39].

sh lacked an [expression grammar][40]. The square bracketed condition had to be evaluated by the slower means of running the external [test][41] program. sh's if command took its argument words as a new command to be run as a [child process][42]. If the child exited with a zero [return code][43], sh would look for a then clause (a separate statement, but often written joined on the same line with a semicolon) and run that nested block. Otherwise it would run the else. [Hard-linking][22] the test program as both "`test`" and "`[`" gave the notational advantage of the square brackets and the appearance that the functionality of test was part of the sh language. sh's use of a reversed keyword to mark the end of a control block was a style borrowed from [ALGOL 68][44].[\[12\]][45]

By contrast, csh could evaluate the expression directly, which made it faster. It also claimed better readability: Its expressions used a [grammar][46] and a set of operators mostly copied from C, none of its keywords were reversed and the overall style was also more like C.

Here is a second example, comparing scripts that calculate the first 10 powers of 2\.

Again because of the lack of an expression grammar, the sh script uses [command substitution][14] and the [expr][47] command. The @ statement in C shell is a [pun][48]: it's the "at-sign-ment" statement.

Finally, here is a third example, showing the differing styles for a [switch statement][49].

In the sh script, "`;;`" marks the end of each case because sh disallows null statements otherwise.

## Improvements for interactive use

The second objective was that the C shell should be better for interactive use. It introduced numerous new features that made it easier, faster and more [friendly][50] to use by typing commands at a terminal. Users could get things done with a lot fewer keystrokes and it ran faster. The most significant of these new features were the history and editing mechanisms, aliases, directory stacks, tilde notation, cdpath, job control and path hashing. These new features proved very popular, and many of them have since been copied by other Unix shells.

## History

## Editing operators

## Aliases

## Directory stack

## Tilde notation

## Filename completion

## Cdpath

## Job control

## Path hashing

## Overview of the language

The C shell operates one line at a time. Each line is [tokenized][51] into a set of words separated by spaces or other characters with special meaning, including parentheses, piping and input/output redirection operators, semicolons, and ampersands.

## Basic statements

A basic statement is one that simply runs a command. The first word is taken as name of the command to be run and may be either an internal command, e.g., `echo`, or an external command. The rest of the words are passed as arguments to the command.

At the basic statement level, here are some of the features of the grammar:

## Wildcarding

## I/O redirection

## Joining

## Piping

## Variable substitution

## Quoting and escaping

## Command substitution

## Background execution

## Subshells

## Control structures

The C shell provides control structures for both [condition-testing][17] and [iteration][18]. The condition-testing control structures are the if and switch statements. The iteration control structures are the while, foreach and repeat statements.

## if statement

There are two forms of the if statement. The short form is typed on a single line but can specify only a single command if the expression is true.

The long form uses then, else and endif keywords to allow for blocks of commands to be nested inside the condition.

If the else and if keywords appear on the same line, csh chains, rather than nests them; the block is terminated with a single endif.

## switch statement

The switch statement compares a string against a list of patterns, which may contain wildcard characters. If nothing matches, the default action, if there is one, is taken.

## while statement

The while statement evaluates an expression. If it is true, the shell runs the nested commands and then repeats for as long as the expression remains true.

## foreach statement

The foreach statement takes a list of values, usually a list of filenames produced by wildcarding, and then for each, sets the loop variable to that value and runs the nested commands.

## repeat statement

The repeat statement repeats a single command an integral number of times.

## Variables

The C shell implements both shell and [environment variables][52].[\[13\]][53] Environment variables, created using the `setenv` statement, are always simple strings, passed to any [child processes][42], which retrieve these variables via the [`envp[]`][54] argument to [`main()`][55].

Shell variables, created using the `set` or `@` statements, are internal to C shell. They are not passed to child processes. Shell variables can be either simple strings or arrays of strings. Some of the shell variables are predefined and used to control various internal C shell options, e.g., what should happen if a wildcard fails to match anything.

In current versions of csh, strings can be of arbitrary length, well into millions of characters.

## Expressions

The C shell implements a 32-bit integer expression grammar with operators borrowed from C but with a few additional operators for string comparisons and filesystem tests, e.g., testing for the existence of a file. Operators must be separated by whitespace from their operands. Variables are referenced as `$`_name_.

[Operator precedence][56] is also borrowed from C, but with different [operator associativity][57] rules to resolve the ambiguity of what comes first in a sequence of equal precedence operators. In C, the associativity is left-to-right for most operators; in C shell, it's right-to-left. For example,

The parentheses in the C shell example are to avoid having the bit-shifting operators confused as I/O redirection operators. In either language, parentheses can always be used to explicitly specify the desired order of evaluation, even if only for clarity.

## Criticism

Although Stephen Bourne himself acknowledged that csh was superior to his shell for interactive use,[\[14\]][58] it has never been as popular for scripting. Initially, and through the 1980s, csh could not be guaranteed to be present on all Unix systems, but sh could, which made it a better choice for any scripts that might have to run on other machines. By the mid-1990s, csh was widely available, but the use of csh for scripting faced new criticism by the [POSIX][59] committee,[\[15\]][60] which specified that there should only be one preferred shell, the [Korn Shell][61], for both interactive and scripting purposes. The C shell also faced criticism from others[\[16\]][62][\[17\]][63] over the C shell's alleged defects in syntax, missing features, and poor implementation.

**Syntax defects** were generally simple but unnecessary inconsistencies in the definition of the language. For example, the `set`, `setenv` and `alias` commands all did basically the same thing, namely, associate a name with a string or set of words. But all three had slight but unnecessary differences. An equal sign was required for a `set` but not for `setenv` or `alias`; parentheses were required around a word list for a `set` but not for `setenv` or `alias`, etc. Similarly, the `if`, `switch` and looping constructs use needlessly different keywords (`endif`, `endsw` and `end`) to terminate the nested blocks.

**Missing features** most commonly cited are the lack of ability to manipulate the [stdio][64] file handles independently and support for functions. Whereas Bourne shell functions lacked only local variables, Csh's aliases - the closest analogue in Csh to functions - were restricted to single lines of code, even though most flow control constructs required newlines to be recognized. As a result, Csh scripts could not be functionally broken down as C programs themselves could be, and larger projects tended to shift to either Bourne shell scripting or C code.

**The implementation,** which used an ad hoc [parser][65], has drawn the most serious criticism. By the early 1970s, [compiler][66] technology was sufficiently mature[\[18\]][67] that most new language implementations used either a [top-down][68] or [bottom-up parser][69] capable of recognizing a fully recursive [grammar][46]. It is not known why an ad hoc design was chosen instead for the C shell. It may be simply that, as Joy put it in an interview in 2009, "When I started doing this stuff with Unix, I wasn't a very good programmer."[\[19\]][70] The ad hoc design meant that the C shell language was not fully recursive. There was a limit to how complex a command it could handle.

It worked for most interactively typed commands, but for the more complex commands a user might write in a script, it could easily fail, producing only a cryptic error message or an unwelcome result. For example, the C shell could not support piping between control structures. Attempting to pipe the output of a `foreach` command into `[grep][71]` simply didn't work. (The work-around, which works for many of the complaints related to the parser, is to break the code up into separate scripts. If the `foreach` is moved to a separate script, piping works because scripts are run by forking a new copy of csh that does inherit the correct stdio handles.)

Another example is the unwelcome behavior in the following fragments. Both of these appear to mean, "If 'myfile' does not exist, create it by writing 'mytext' into it." But the version on the right always creates an empty file because the C shell's order of evaluation is to look for and evaluate I/O redirection operators on each command line as it reads it, before examining the rest of the line to see whether it contains a control structure.

The implementation is also criticized for its notoriously poor error messages, e.g., "0 event not found", which yields no useful information about the problem.

## Influence

The C shell was extremely successful in introducing a large number of innovations including the [history][72] mechanism, [aliases][73], [tilde notation][74], interactive filename completion, an expression grammar built into the shell, and more, that have since been copied by other Unix shells. But in contrast to [sh][35], which has spawned a large number of independently-developed clones, including [ksh][75] and [bash][76], only two csh [clones][77] are known. (Since [tcsh][0] was based on the csh code originally written by Bill Joy, it is not considered a clone.)

In 1986, [Allen Holub][78] wrote _On Command: Writing a Unix-Like Shell for [MS-DOS][79]_,[\[20\]][80] a book describing a program he had written called "SH" but which in fact copied the language design and features of csh, not sh. Companion diskettes containing full source for SH and for a basic set of Unix-like utilities (cat, cp, grep, etc.) were available for $25 and $30, respectively, from the publisher. The control structures, expression grammar, history mechanism and other features in Holub's SH were identical to those of the C shell.

In 1988, Hamilton Laboratories began shipping [Hamilton C shell][81] for [OS/2][82].[\[21\]][83] It included both a csh clone and a set of Unix-like utilities. In 1992, Hamilton C shell was released for [Windows NT][84].[\[22\]][85] The Windows version continues to be actively supported but the OS/2 version was discontinued in 2003\.[\[22\]][85] An early 1990 quick reference[\[23\]][86] described the intent as "full compliance with the entire C shell language (except [job control][87])" but with improvements to the language design and adaptation to the differences between Unix and a PC. The most important improvement was a [top-down parser][68] that allowed [control structures][88] to be nested or piped, something the original C shell could not support, given its ad hoc parser. Hamilton also added new language features including built-in and user-defined procedures, block-structured local variables and floating point arithmetic. Adaptation to a PC included support for the filename and other conventions on a PC and the use of [threads][89] instead of [forks][90] (which were not available under either OS/2 or Windows) to achieve [parallelism][91], e.g., in setting up a pipeline.

## See also

## References

## Further reading

## External links

[0]: /wiki/Tcsh "Tcsh"
[1]: /wiki/Unix_shell "Unix shell"
[2]: /wiki/Bill_Joy "Bill Joy"
[3]: /wiki/University_of_California,_Berkeley "University of California, Berkeley"
[4]: /wiki/Berkeley_Software_Distribution "Berkeley Software Distribution"
[5]: #cite_note-2
[6]: #cite_note-3
[7]: /wiki/Eric_Allman "Eric Allman"
[8]: #cite_note-4
[9]: /wiki/Command-line_interpreter "Command-line interpreter"
[10]: /wiki/Shell_script "Shell script"
[11]: /wiki/Wildcard_character "Wildcard character"
[12]: /wiki/Pipeline_(Unix) "Pipeline (Unix)"
[13]: /wiki/Here_document "Here document"
[14]: /wiki/Command_substitution "Command substitution"
[15]: /wiki/Variable_(programming) "Variable (programming)"
[16]: /wiki/Control_flow "Control flow"
[17]: /wiki/Conditional_(programming) "Conditional (programming)"
[18]: /wiki/Iteration "Iteration"
[19]: /wiki/C_(programming_language) "C (programming language)"
[20]: /wiki/Mac_OS_X "Mac OS X"
[21]: /wiki/Red_Hat_Linux "Red Hat Linux"
[22]: /wiki/Hard_link "Hard link"
[23]: /wiki/Symbolic_link "Symbolic link"
[24]: /wiki/Debian "Debian"
[25]: /wiki/Ubuntu_(operating_system) "Ubuntu (operating system)"
[26]: #cite_note-5
[27]: #cite_note-6
[28]: #cite_note-7
[29]: #cite_note-8
[30]: /wiki/TOPS-20#TENEX "TOPS-20"
[31]: #cite_note-Greer-9
[32]: /wiki/Backward_compatible "Backward compatible"
[33]: #cite_note-10
[34]: #cite_note-11
[35]: /wiki/Bourne_shell "Bourne shell"
[36]: /wiki/Stephen_R._Bourne "Stephen R. Bourne"
[37]: /wiki/Bell_Labs "Bell Labs"
[38]: /wiki/Operator_(programming) "Operator (programming)"
[39]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[40]: /wiki/Expression_(programming) "Expression (programming)"
[41]: /wiki/Test_(Unix) "Test (Unix)"
[42]: /wiki/Process_(computing) "Process (computing)"
[43]: /wiki/Return_code "Return code"
[44]: /wiki/ALGOL_68 "ALGOL 68"
[45]: #cite_note-12
[46]: /wiki/Formal_grammar "Formal grammar"
[47]: /wiki/Expr "Expr"
[48]: /wiki/Pun "Pun"
[49]: /wiki/Switch_statement "Switch statement"
[50]: /wiki/User-friendly "User-friendly"
[51]: /wiki/Lexical_analysis "Lexical analysis"
[52]: /wiki/Environment_variable "Environment variable"
[53]: #cite_note-USDT-13
[54]: /wiki/Exec_(operating_system)#envp "Exec (operating system)"
[55]: /wiki/Main_function_(programming) "Main function (programming)"
[56]: /wiki/Operator_precedence#Programming_languages "Operator precedence"
[57]: /wiki/Operator_associativity "Operator associativity"
[58]: #cite_note-bourne198310-14
[59]: /wiki/POSIX "POSIX"
[60]: #cite_note-15
[61]: /wiki/Korn_Shell "Korn Shell"
[62]: #cite_note-16
[63]: #cite_note-17
[64]: /wiki/Stdio "Stdio"
[65]: /wiki/Parsing "Parsing"
[66]: /wiki/Compiler "Compiler"
[67]: #cite_note-18
[68]: /wiki/Top-down_parsing "Top-down parsing"
[69]: /wiki/Bottom-up_parsing "Bottom-up parsing"
[70]: #cite_note-19
[71]: /wiki/Grep "Grep"
[72]: /wiki/C_shell#History "C shell"
[73]: /wiki/C_shell#Aliases "C shell"
[74]: /wiki/C_shell#Tilde_notation "C shell"
[75]: /wiki/Korn_shell "Korn shell"
[76]: /wiki/Bash_(Unix_shell) "Bash (Unix shell)"
[77]: /wiki/Clone_(computing) "Clone (computing)"
[78]: /wiki/Allen_Holub "Allen Holub"
[79]: /wiki/MS-DOS "MS-DOS"
[80]: #cite_note-20
[81]: /wiki/Hamilton_C_shell "Hamilton C shell"
[82]: /wiki/OS/2 "OS/2"
[83]: #cite_note-21
[84]: /wiki/Windows_NT "Windows NT"
[85]: #cite_note-HamiltonReleaseNotes-22
[86]: #cite_note-23
[87]: /wiki/C_shell#Job_control "C shell"
[88]: /wiki/Control_structure "Control structure"
[89]: /wiki/Thread_(computer_science) "Thread (computer science)"
[90]: /wiki/Fork_(operating_system) "Fork (operating system)"
[91]: /wiki/Parallel_computing "Parallel computing"