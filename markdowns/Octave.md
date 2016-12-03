**GNU Octave** is software featuring a [high-level][0] [programming language][1], primarily intended for [numerical computations][2]. Octave helps in solving linear and nonlinear problems numerically, and for performing other numerical experiments using a language that is mostly compatible with [MATLAB][3]. It may also be used as a [batch-oriented][4] language. Since it is part of the [GNU Project][5], it is [free software][6] under the terms of the [GNU General Public License][7].

Octave is one of the major [free][6] alternatives to MATLAB, others being [FreeMat][8] and [Scilab][9].[\[4\]][10][\[5\]][11][\[6\]][12][\[7\]][13] Scilab, however, puts less emphasis on (bidirectional) syntactic compatibility with MATLAB than Octave does.[\[4\]][10][\[8\]][14][\[9\]][15]

## History

The project was conceived around 1988\. At first it was intended to be a companion to a chemical reactor design course. Real development was started by John W. Eaton in 1992\. The first alpha release dates back to January 4, 1993 and on February 17, 1994 version 1.0 was released. Version 4.0.0 was released on May 29, 2015\.

The program is named after [Octave Levenspiel][16], a former professor of the principal author. Levenspiel is known for his ability to perform quick [back-of-the-envelope calculations][17].[\[10\]][18]

## Developments

In addition to use on desktops for personal scientific computing, Octave is used in academia and industry. For example, Octave was used on a massive [parallel][19] computer at Pittsburgh supercomputing center to find vulnerabilities related to guessing social security numbers.[\[11\]][20]

## Technical details

## Octave, the language

The Octave language is an interpreted programming language. It is a [structured programming][21] language (similar to [C][22]) and supports many common [C standard library][23] functions, and also certain [UNIX][24] system calls and functions.[\[12\]][25] However, it does not support passing arguments by reference.[\[13\]][26]

Octave programs consist of a list of function calls or a [script][27]. The syntax is [matrix][28]-based and provides various functions for matrix operations. It supports various [data structures][29] and allows [object-oriented programming][30].[\[14\]][31]

Its syntax is very similar to [MATLAB][3], and careful programming of a script will allow it to run on both Octave and MATLAB.[\[15\]][32]

Because Octave is made available under the [GNU General Public License][7], it may be freely changed, copied and used.[\[10\]][18] The program runs on [Microsoft Windows][33] and most [Unix][34] and [Unix-like][35] [operating systems][36], including [OS X][37].[\[16\]][38]

## Notable features

## Command and variable name completion

Typing a TAB character on the command line causes Octave to attempt to complete variable, function, and file names (similar to [Bash][39]'s [tab completion][40]). Octave uses the text before the cursor as the initial portion of the name to complete. [\[17\]][41]

## Command history

When running interactively, Octave saves the commands typed in an internal buffer so that they can be recalled and edited.

## Data structures

Octave includes a limited amount of support for organizing data in structures. In this example, we see a structure "x" with elements "a", "b", and "c", (an integer, an array, and a string, respectively):

## Short-circuit boolean operators

Octave's '`&&`' and '`||`' logical [operators][42] are evaluated in a [short-circuit][43] fashion (like the corresponding operators in the [C][22] language), in contrast to the element-by-element operators '`&`' and '`|`'.

## Increment and decrement operators

Octave includes the C-like [increment and decrement operators][44] '`++`' and '`--`' in both their prefix and postfix forms. Octave also does [augmented assignment][45], e.g. '`x += 5`'.

## Unwind-protect

Octave supports a limited form of [exception handling][46] modelled after the ['`unwind_protect`'][47] of [Lisp][48]. The general form of an unwind\_protect block looks like this:

As a general rule, GNU Octave recognizes as termination of a given '`_block_`' either the keyword '`end`' (which is compatible with the MATLAB language) or a more specific keyword '`end__block_`'. As a consequence, an '`unwind_protect`' block can be terminated either with the keyword '`end_unwind_protect`' as in the example, or with the more portable keyword '`end`'.

The _cleanup_ part of the block is always executed. In case an exception is raised by the _body_ part, _cleanup_ is executed immediately before propagating the exception outside the block '`unwind_protect`'.

GNU Octave also supports another form of exception handling (compatible with the MATLAB language):

This latter form differs from an '`unwind_protect`' block in two ways. First, _exception\_handling_ is only executed when an exception is raised by _body_. Second, after the execution of _exception\_handling_ the exception is not propagated outside the block (unless a '`rethrow( lasterror )`' statement is purposely inserted within the _exception\_handling_ code).

## Variable-length argument lists

Octave has a mechanism for handling functions that take an unspecified number of arguments without explicit upper limit. To specify a list of zero or more arguments, use the special argument `varargin` as the last (or only) argument in the list.

## Variable-length return lists

A function can be set up to return any number of values by using the special return value `varargout`. For example:

## C++ integration

It is also possible to execute Octave code directly in a [C++][49] program. For example, here is a code snippet for calling `rand([10,1])`:

C and C++ code can be integrated into GNU Octave by creating oct files, or using the Matlab compatible [MEX files][50].

## MATLAB compatibility

Octave has been built with [MATLAB][3] compatibility in mind, and shares many features with MATLAB:

In fact, Octave treats incompatibility with [MATLAB][3] as a [bug][51];[\[18\]][52] therefore, it can be considered a [software clone][53], which doesn't infringe [software copyright][54] as per [Lotus v. Borland][55] court case.

MATLAB scripts from the [MathWorks][56]' FileExchange repository are compatible with Octave, but can't be used legally due the [Terms of use][57].[\[19\]][58] While often provided and uploaded by users under an Octave [compatible][59] and proper [Open source][60] [BSD license][61], the fileexchange's [Terms of use][62] prohibit any usage beside MathWorks [proprietary][63] [MATLAB][3].[\[20\]][64][\[21\]][65]

## Syntax compatibility

There are a few purposeful, albeit minor, [syntax additions][66]:

## Function compatibility

Many of the numerous MATLAB functions are available in GNU Octave, some of them are accessible through packages via Octave-forge, but not all MATLAB functions are available in GNU Octave. List of unavailable functions exists in Octave, and developers are seeking for help to implement them. Looking for function \_\_unimplemented.m\_\_, leads to the [list of unimplemented functions][67].

Unimplemented functions are also categorized in [Image][68], [Mapping][69], [Optimization][70], [Signal][71], and [Statistics][72] packages.

When an unimplemented function is called the following error message is shown:

## User interfaces

Until version 3.8, Octave did not come with a [graphical user interface][73] (GUI)/[integrated development environment][74] (IDE) by default. However, an official graphical interface based on Qt has now been migrated to the main source repository and is available with Octave 3.8, but not as the default interface.[\[22\]][75] It has become the default interface with the release of Octave 4.0\.[\[23\]][76] Several 3rd-party graphical front-ends have been developed.

## See also

## References

## Further reading

## External links

## Documentation

## Numerical packages and libraries interfacing with GNU Octave

GNU Octave is also powered by third-party tools and libraries, mostly providing general or domain-specific abstractions for scientific computing. Those tools may be categorized according whether their contributions are more oriented toward [computational modelling][77] or toward enhancing visual analysis.

## Numerical tools

## Plotting tools

## MATLAB-like IDEs

## Other GUIs

## Web-based user interfaces (WUI)

[0]: /wiki/High-level_programming_language "High-level programming language"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Numerical_analysis "Numerical analysis"
[3]: /wiki/MATLAB "MATLAB"
[4]: /wiki/Batch_processing "Batch processing"
[5]: /wiki/GNU_Project "GNU Project"
[6]: /wiki/Free_software "Free software"
[7]: /wiki/GNU_General_Public_License "GNU General Public License"
[8]: /wiki/FreeMat "FreeMat"
[9]: /wiki/Scilab "Scilab"
[10]: #cite_note-Trappenberg2010-4
[11]: #cite_note-MuhammadZalizniak2011-5
[12]: #cite_note-MegreyMoksness2008-6
[13]: #cite_note-Kapuno2008-7
[14]: #cite_note-Herman2013-8
[15]: #cite_note-WouwerSaucez2014-9
[16]: /wiki/Octave_Levenspiel "Octave Levenspiel"
[17]: /wiki/Back-of-the-envelope_calculation "Back-of-the-envelope calculation"
[18]: #cite_note-about-10
[19]: /wiki/Parallel_computing "Parallel computing"
[20]: #cite_note-11
[21]: /wiki/Structured_programming "Structured programming"
[22]: /wiki/C_(programming_language) "C (programming language)"
[23]: /wiki/C_standard_library "C standard library"
[24]: /wiki/POSIX "POSIX"
[25]: #cite_note-12
[26]: #cite_note-13
[27]: /wiki/Script_(computer_programming) "Script (computer programming)"
[28]: /wiki/Array_programming "Array programming"
[29]: /wiki/Data_structure "Data structure"
[30]: /wiki/Object-oriented_programming "Object-oriented programming"
[31]: #cite_note-14
[32]: #cite_note-15
[33]: /wiki/Microsoft_Windows "Microsoft Windows"
[34]: /wiki/Unix "Unix"
[35]: /wiki/Unix-like "Unix-like"
[36]: /wiki/Operating_system "Operating system"
[37]: /wiki/OS_X "OS X"
[38]: #cite_note-16
[39]: /wiki/Bash_(Unix_shell) "Bash (Unix shell)"
[40]: /wiki/Tab_completion "Tab completion"
[41]: #cite_note-17
[42]: /wiki/Operator_(programming) "Operator (programming)"
[43]: /wiki/Short-circuit_evaluation "Short-circuit evaluation"
[44]: /wiki/Increment_and_decrement_operators "Increment and decrement operators"
[45]: /wiki/Augmented_assignment "Augmented assignment"
[46]: /wiki/Exception_handling "Exception handling"
[47]: http://www.lispworks.com/documentation/HyperSpec/Body/s_unwind.htm
[48]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[49]: /wiki/C%2B%2B "C++"
[50]: /wiki/MEX_file "MEX file"
[51]: /wiki/Bug_(software) "Bug (software)"
[52]: #cite_note-18
[53]: /wiki/Software_clone "Software clone"
[54]: /wiki/Software_copyright "Software copyright"
[55]: /wiki/Lotus_v._Borland "Lotus v. Borland"
[56]: /wiki/MathWorks "MathWorks"
[57]: /wiki/Terms_of_use "Terms of use"
[58]: #cite_note-19
[59]: /wiki/License_compatibility "License compatibility"
[60]: /wiki/Open_source "Open source"
[61]: /wiki/BSD_license "BSD license"
[62]: /wiki/EULA "EULA"
[63]: /wiki/Proprietary_software "Proprietary software"
[64]: #cite_note-20
[65]: #cite_note-21
[66]: http://octave.org/wiki/index.php?title=FAQ#Porting_programs_from_Matlab_to_Octave
[67]: http://hg.savannah.gnu.org/hgweb/octave/file/d63878346099/scripts/help/__unimplemented__.m#l530
[68]: http://wiki.octave.org/Image_package
[69]: http://wiki.octave.org/Mapping_package
[70]: http://wiki.octave.org/Optimization_package
[71]: http://wiki.octave.org/Signal_package
[72]: http://wiki.octave.org/Statistics_package
[73]: /wiki/Graphical_user_interface "Graphical user interface"
[74]: /wiki/Integrated_development_environment "Integrated development environment"
[75]: #cite_note-22
[76]: #cite_note-23
[77]: /wiki/Scientific_Method#Computational_approaches "Scientific Method"