**Bash** is a [Unix shell][0] and [command language][1] written by [Brian Fox][2] for the [GNU Project][3] as a [free software][4] replacement for the [Bourne shell][5].[\[7\]][6][\[8\]][7] First released in 1989,[\[9\]][8] it has been distributed widely as it is a default shell on the major [Linux][9] distributions and [macOS][10] (formerly OS X). In 2016 it was also made available by Microsoft for use in [Windows 10][11] Anniversary Update, albeit it is not installed by default.[\[10\]][12]

Bash is a [command processor][13] that typically runs in a text window, where the user types commands that cause actions. Bash can also read commands from a file, called a [script][14]. Like all Unix shells, it supports filename [globbing][15] (wildcard matching), [piping][16], [here documents][17], [command substitution][18], [variables][19] and [control structures][20] for [condition-testing][21] and [iteration][22]. The [keywords][23], [syntax][24] and other basic features of the [language][25] are all copied from [sh][5]. Other features, e.g., [history][26], are copied from [csh][27] and [ksh][28]. Bash is a [POSIX][29] shell, but with a number of extensions.

The shell's name is an acronym for _Bourne-again shell_, [punning][30] on the name of the Bourne shell that it replaces[\[11\]][31] and on the term "[born again][32]" that denotes spiritual rebirth in contemporary American Christianity.[\[12\]][33][\[13\]][34]

A [security hole][35] in Bash dating from version 1.03 (August 1989),[\[14\]][36] dubbed [Shellshock][37], was discovered in early September 2014 and quickly led to a range of [attacks][38] across the Internet.[\[15\]][39][\[16\]][40][\[17\]][41] Patches to fix the bugs were made available soon after the bugs were identified, but not all computers have yet been updated.

## History

[Brian Fox][2] began [coding][42] Bash on January 10, 1988[\[18\]][43] after [Richard Stallman][44] became dissatisfied with the lack of progress being made by a prior developer.[\[7\]][6] Stallman and the [Free Software Foundation][45] (FSF) considered a free shell that could run existing shell scripts so strategic to a completely free system built from BSD and GNU code that this was one of the few projects they funded themselves, with Fox undertaking the work as an employee of FSF.[\[7\]][6][\[19\]][46] Fox released Bash as a beta, version .99, on June 8, 1989[\[9\]][8] and remained the primary maintainer until sometime between mid-1992[\[20\]][47] and mid-1994,[\[21\]][48] when he was laid off from FSF[\[22\]][49] and his responsibility was transitioned to another early contributor, Chet Ramey.[\[23\]][50][\[24\]][51][\[25\]][52]

Since then, Bash has become by far the most popular shell among users of Linux, becoming the default interactive shell on that operating system's various distributions (although [Almquist shell][53] may be the default scripting shell) and on Apple's macOS.[\[26\]][54][\[27\]][55][\[28\]][56] Bash has also been ported to [Microsoft Windows][57] and distributed with [Cygwin][58] and [MinGW][59], to [DOS][60] by the [DJGPP][61] project, to [Novell NetWare][62] and to [Android][63] via various terminal emulation applications. Microsoft announced during the 2016 Build Conference that [Windows 10][11] has added a [Linux subsystem][64] that fully supports Bash and other Ubuntu binaries running natively in Windows.[\[29\]][65]

In September 2014, Stéphane Chazelas, a Unix/Linux, network and telecom specialist working in the UK,[\[30\]][66] discovered a [security bug][35] in the program. The bug, first disclosed on September 24, was named [Shellshock][37] and assigned the numbers [CVE-2014-6271][67], CVE-2014-6277[\[31\]][68] and [CVE-2014-7169][69]. The bug was regarded as severe, since [CGI][70] scripts using Bash could be vulnerable, enabling [arbitrary code execution][71]. The bug was related to how Bash passes function definitions to subshells through [environment variables][72].[\[32\]][73]

## Features

The Bash [command][74] syntax is a [superset][75] of the Bourne shell command syntax. Bash can execute the vast majority of Bourne shell scripts without modification, with the exception of Bourne shell scripts stumbling into fringe syntax behavior interpreted differently in Bash or attempting to run a system command matching a newer Bash builtin, etc. Bash command syntax includes ideas drawn from the [Korn shell][28] (ksh) and the [C shell][27] (csh) such as command line editing, [command history][76], the directory stack, the `$RANDOM` and `$PPID` variables, and POSIX [command substitution][18] syntax `$(…)`.

When a user presses the [tab key][77] within an interactive command-shell, Bash automatically uses [command line completion][78] to match partly typed program names, filenames and variable names. The Bash command-line completion system is very flexible and customizable, and is often packaged with functions that complete arguments and filenames for specific programs and tasks.

Bash's syntax has many extensions lacking in the Bourne shell. Bash can perform integer calculations ("arithmetic evaluation") without spawning external processes. It uses the `((…))` command and the `$((…))` variable syntax for this purpose. Its syntax simplifies [I/O redirection][79]. For example, it can redirect [standard output][80] (stdout) and [standard error][81] (stderr) at the same time using the `&>` operator. This is simpler to type than the Bourne shell equivalent '`command > file 2>&1`'. Bash supports [process substitution][82] using the `<(command)` and `>(command)`syntax, which substitutes the output of (or input to) a command where a filename is normally used. (This is implemented through _/proc/fd/_ unnamed pipes on systems that support that, or via temporary [named pipes][83] where necessary).

When using the 'function' keyword, Bash function declarations are not compatible with Bourne/Korn/POSIX scripts (the Korn shell has the same problem when using 'function'), but Bash accepts the same function declaration syntax as the Bourne and Korn shells, and is POSIX-conformant. Because of these and other differences, Bash shell scripts are rarely runnable under the Bourne or Korn shell interpreters unless deliberately written with that compatibility in mind, which is becoming less common as Linux becomes more widespread. But in POSIX mode, Bash conforms with POSIX more closely.[\[33\]][84]

Bash supports [here documents][17]. Since version 2.05b Bash can redirect [standard input][85] (stdin) from a "here string" using the `<<<` operator.

Bash 3.0 supports in-process [regular expression][86] matching using a syntax reminiscent of [Perl][87].[\[34\]][88]

Bash 4.0 introduced support for associative arrays.[\[33\]][84][\[35\]][89] Associative arrays allow a fake support for multi-dimensional (indexed) arrays, in a similar way to [AWK][90]:

## Brace expansion

Brace expansion, also called alternation, is a feature copied from the [C shell][27]. It generates a set of alternative combinations. Generated results need not exist as files. The results of each expanded string are not sorted and left to right order is preserved:

Users should not use brace expansions in portable shell scripts, because the Bourne shell does not produce the same output.

When brace expansion is combined with wildcards, the braces are expanded first, and then the resulting wildcards are substituted normally. Hence, a listing of JPEG and PNG images in the current directory could be obtained using:

In addition to alternation, brace expansion can be used for sequential ranges between two integers or characters separated by double dots. Newer versions of Bash allow a third integer to specify the increment.

When brace expansion is combined with variable expansion the variable expansion is performed **after** the brace expansion, which in some cases may necessitate the use of the built-in `eval`, thus:

## Startup scripts

When Bash starts, it executes the commands in a variety of [dot files][91]. Though similar to Bash shell script commands, which have execute permission enabled and an [interpreter directive][92] like `#!/bin/bash`, the initialization files used by Bash require neither.

## Execution order of startup files

## When started as an interactive login shell

Bash reads and executes `/etc/profile` (if it exists). (Often this file calls `/etc/bash.bashrc`.)

After reading that file, it looks for `~/.bash_profile`, `~/.bash_login`, and `~/.profile` _in that order_, and reads and executes the first one that exists and is readable.

## When a login shell exits

Bash reads and executes `~/.bash_logout` (if it exists).

## When started as an interactive shell (but not a login shell)

Bash reads and executes `~/.bashrc` (if it exists). This may be inhibited by using the `--norc` option. The `--rcfile file` option forces Bash to read and execute commands from `file` instead of `~/.bashrc`.

## Comparison with the Bourne shell and csh startup sequences

Elements of Bash derive from the [Bourne shell][5] and [csh][27]. These allow limited startup file sharing with the Bourne shell and provide some startup features familiar to csh users.

## Setting inheritable environment variables

The Bourne shell uses the `~/.profile` at login to set environment variables that subprocesses then inherit. Bash can use the `~/.profile` in a compatible way, by executing it explicitly from the Bash-specific `~/.bash_profile` or `~/.bash_login` with the line below. Bash-specific syntax can be kept out of the `~/.profile` to keep the latter compatible with the Bourne shell.

## Aliases and Functions

These two facilities, [aliases][93] from _csh_ and the more general functions that largely supersede them from Bourne shell, were not typically inheritable from the login shell, and had to be redefined in each subshell spawned from the login shell. Although there is an `ENV` environment variable that could be applied to the problem, both _csh_ and Bash support per-subshell startup files that address it directly. In Bash, the `~/.bashrc` is called for interactive subshells. If user-defined functions from the `~/.bashrc` are desired in the login shell as well, the `~/.bash_login` can include the line below after any setting up of environment variables:

## Commands performed only at login and logout

The _csh_ supports a `~/.login` file for purposes of tasks performed only during initial login, such as displaying system load, disk status, whether email has come in, logging the login time, etc. The Bourne shell can emulate this in the `~/.profile`, but doesn't predefine a file name. To achieve similar semantics to the csh model, the `~/.bash_profile` can contain the line below, after the environment setup and function setup:

Likewise, the _csh_ has a `~/.logout` file run only when the login shell exits. The Bash equivalent is `~/.bash_logout`, and requires no special setup. In the Bourne shell, the `trap` built-in can be used to achieve a similar effect.

## Legacy-compatible Bash startup example

The skeleton `~/.bash_profile` below is compatible with the Bourne shell and gives semantics similar to csh for the `~/.bashrc` and `~/.bash_login`. The `[ -r _filename_ ]` are tests to see if the _filename_ exists and is readable, simply skipping the part after the `&&` if it's not.

## Operating system issues in Bash startup

Some versions of [Unix][94] and [Linux][9] contain Bash system startup scripts, generally under the `/etc` directories. Bash calls these as part of its standard initialization, but other startup files can read them in a different order than the documented Bash startup sequence. The default content of the root user's files may also have issues, as well as the skeleton files the system provides to new user accounts upon setup. The startup scripts that launch the [X window system][95] may also do surprising things with the user's Bash startup scripts in an attempt to set up user-environment variables before launching the [window manager][96]. These issues can often be addressed using a `~/.xsession` or `~/.xprofile` file to read the `~/.profile` --- which provides the environment variables that Bash shell windows spawned from the window manager need, such as [xterm][97] or [Gnome Terminal][98].

## Portability

Invoking Bash with the `--posix` option or stating `set -o posix` in a script causes Bash to conform very closely to the [POSIX 1003.2 standard][99].[\[36\]][100] Bash shell scripts intended for [portability][101] should at least take into account the Bourne shell it intends to replace. Bash has certain features that the traditional Bourne shell lacks. They include:[\[36\]][100]

## Keyboard shortcuts

Bash uses readline to provide keyboard shortcuts for command line editing using the default ([Emacs][102]) key bindings. [Vi-bindings][103] can be enabled by running `set -o vi`.[\[37\]][104]

## Process management

The Bash shell has two modes of execution for commands: [batch (Unix)][105], and concurrent mode.

To execute commands in batch (i.e., in sequence) they must be separated by the character ";":

in this example, when command1 is finished, command2 is executed.

To have a concurrent execution of command1 and command2, they must be executed in the Bash shell in the following way:

In this case command1 is executed in background (symbol &), returning immediately the control to the shell that executes command2\.

Summarizing:

## Conditional execution

Bash supplies "conditional execution" command separators that allow execution of a command to be contingent on the [exit code][106] set by a precedent command. For example:

Where _./do\_something_ is only executed if the _cd_ (change directory) command was "successful" (returned an exit status of zero) and the _echo_ command would only be executed if either the _cd_ or the _./do\_something_ command return an "error" (non-zero exit status).

For all commands the exit status is stored in the special variable `$?`. Bash also supports `if ...;then ...;else ...;fi` and `case $VARIABLE in $pattern)...;;$other_pattern)...;; esac` forms of conditional command evaluation.

## Bug reporting

An external command called _bashbug_ reports Bash shell bugs. When the command is invoked, it brings up the user's default editor with a form to fill in. The form is mailed to the Bash maintainers (or optionally to other email addresses).[\[38\]][107][\[39\]][108]

## See also

## References

## External links

[0]: /wiki/Unix_shell "Unix shell"
[1]: /wiki/Command_language "Command language"
[2]: /wiki/Brian_Fox_(computer_programmer) "Brian Fox (computer programmer)"
[3]: /wiki/GNU_Project "GNU Project"
[4]: /wiki/Free_software "Free software"
[5]: /wiki/Bourne_shell "Bourne shell"
[6]: #cite_note-GNUBSD-7
[7]: #cite_note-8
[8]: #cite_note-BashBeta-9
[9]: /wiki/Linux "Linux"
[10]: /wiki/MacOS "MacOS"
[11]: /wiki/Windows_10 "Windows 10"
[12]: #cite_note-10
[13]: /wiki/Command-line_interpreter "Command-line interpreter"
[14]: /wiki/Shell_script "Shell script"
[15]: /wiki/Glob_(programming) "Glob (programming)"
[16]: /wiki/Pipeline_(Unix) "Pipeline (Unix)"
[17]: /wiki/Here_document "Here document"
[18]: /wiki/Command_substitution "Command substitution"
[19]: /wiki/Variable_(programming) "Variable (programming)"
[20]: /wiki/Control_flow "Control flow"
[21]: /wiki/Conditional_(programming) "Conditional (programming)"
[22]: /wiki/Iteration "Iteration"
[23]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[24]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[25]: /wiki/Language_(computer_science) "Language (computer science)"
[26]: /wiki/C_shell#History "C shell"
[27]: /wiki/C_shell "C shell"
[28]: /wiki/Korn_shell "Korn shell"
[29]: /wiki/POSIX "POSIX"
[30]: /wiki/Pun "Pun"
[31]: #cite_note-11
[32]: /wiki/Born_again "Born again"
[33]: #cite_note-12
[34]: #cite_note-13
[35]: /wiki/Security_bug "Security bug"
[36]: #cite_note-Seclists-20141004-14
[37]: /wiki/Shellshock_(software_bug) "Shellshock (software bug)"
[38]: /wiki/Attack_(computing) "Attack (computing)"
[39]: #cite_note-TR-20140924-15
[40]: #cite_note-NYT-20140925-NP-16
[41]: #cite_note-ZDN-20140929-17
[42]: /wiki/Computer_programming "Computer programming"
[43]: #cite_note-18
[44]: /wiki/Richard_Stallman "Richard Stallman"
[45]: /wiki/Free_Software_Foundation "Free Software Foundation"
[46]: #cite_note-19
[47]: #cite_note-20
[48]: #cite_note-Bourne_shell_grammar-21
[49]: #cite_note-22
[50]: #cite_note-23
[51]: #cite_note-24
[52]: #cite_note-25
[53]: /wiki/Almquist_shell "Almquist shell"
[54]: #cite_note-26
[55]: #cite_note-27
[56]: #cite_note-28
[57]: /wiki/Microsoft_Windows "Microsoft Windows"
[58]: /wiki/Cygwin "Cygwin"
[59]: /wiki/MinGW "MinGW"
[60]: /wiki/DOS "DOS"
[61]: /wiki/DJGPP "DJGPP"
[62]: /wiki/Novell_NetWare "Novell NetWare"
[63]: /wiki/Android_(operating_system) "Android (operating system)"
[64]: /wiki/Windows_Subsystem_for_Linux "Windows Subsystem for Linux"
[65]: #cite_note-29
[66]: #cite_note-30
[67]: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-6271
[68]: #cite_note-31
[69]: http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-7169
[70]: /wiki/Common_Gateway_Interface "Common Gateway Interface"
[71]: /wiki/Arbitrary_code_execution "Arbitrary code execution"
[72]: /wiki/Environment_variable "Environment variable"
[73]: #cite_note-32
[74]: /wiki/Command_(computing) "Command (computing)"
[75]: /wiki/Superset "Superset"
[76]: /wiki/Command_history "Command history"
[77]: /wiki/Tab_key "Tab key"
[78]: /wiki/Command_line_completion "Command line completion"
[79]: /wiki/Redirection_(computing) "Redirection (computing)"
[80]: /wiki/Standard_out "Standard out"
[81]: /wiki/Standard_error_stream "Standard error stream"
[82]: /wiki/Process_substitution "Process substitution"
[83]: /wiki/Named_pipe "Named pipe"
[84]: #cite_note-GNUBASHREF-33
[85]: /wiki/Stdin "Stdin"
[86]: /wiki/Regular_expression "Regular expression"
[87]: /wiki/Perl "Perl"
[88]: #cite_note-34
[89]: #cite_note-35
[90]: /wiki/AWK "AWK"
[91]: /wiki/Hidden_file_and_hidden_directory#Unix_and_Unix-like_environments "Hidden file and hidden directory"
[92]: /wiki/Interpreter_directive "Interpreter directive"
[93]: /wiki/Alias_(command) "Alias (command)"
[94]: /wiki/Unix "Unix"
[95]: /wiki/X_window_system "X window system"
[96]: /wiki/Window_manager "Window manager"
[97]: /wiki/Xterm "Xterm"
[98]: /wiki/Gnome_Terminal "Gnome Terminal"
[99]: /wiki/Posix#POSIX.2 "Posix"
[100]: #cite_note-tldp-36
[101]: /wiki/Portability_(computer_science) "Portability (computer science)"
[102]: /wiki/Emacs "Emacs"
[103]: /wiki/Vi-binding "Vi-binding"
[104]: #cite_note-37
[105]: /wiki/Batch_(Unix) "Batch (Unix)"
[106]: /wiki/Exit_status "Exit status"
[107]: #cite_note-38
[108]: #cite_note-39