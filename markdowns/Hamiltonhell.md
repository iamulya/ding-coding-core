**Hamilton C shell** is a [clone][0] of the [Unix C shell][1] and [utilities][2][\[1\]][3][\[2\]][4] for [Microsoft Windows][5] created by Nicole Hamilton[\[3\]][6] at Hamilton Laboratories as a completely original work, not based on any prior code. It was first released on [OS/2][7] on December 12, 1988[\[4\]][8][\[5\]][9][\[6\]][10][\[7\]][11][\[8\]][12][\[9\]][13] and on [Windows NT][14] in July 1992\.[\[10\]][15][\[11\]][16][\[12\]][17] The OS/2 version was discontinued in 2003 but the Windows version continues to be actively supported.

## Design

Hamilton C shell differs from the Unix C shell in several respects, its [compiler][18] architecture, its use of [threads][19], and the decision to follow Windows rather than Unix conventions.[\[8\]][12][\[9\]][13]

## Parser

The original C shell uses an ad hoc parser. This has led to complaints about its limitations. It works well enough for the kinds of things users typed interactively but not very well on the more complex commands a user might take time to write in a script.[\[13\]][20] It is not possible, for example, to pipe the output of a [foreach][21] statement into [grep][22]. There was a limit to how complex a command it could handle.

By contrast, Hamilton uses a top-down [recursive descent parser][23] that allows it to compile commands and procedures to an internal form before running them.[\[1\]][3][\[8\]][12] As a result, statements can be nested arbitrarily.[\[6\]][10]

## Threads

Lacking [fork][24] or a high performance way to recreate that functionality, Hamilton uses the Windows [threads][25] facilities instead.[\[6\]][10][\[8\]][12] When a new thread is created, it runs within the same process space and it shares all of the process state. If one thread changes the current directory or the contents of memory, it's changed for all the threads. It's much cheaper to create a thread than a process but there's no isolation between them. To recreate the missing isolation of separate processes, the threads cooperate to share resources using [locks][26].[\[14\]][27]

## Windows conventions

Hamilton differs from other Unix shells in that it follows Windows conventions instead of Unix conventions for filename slashes, escape characters, etc.[\[9\]][13]

## References

## External links

[0]: /wiki/Clone_(computing) "Clone (computing)"
[1]: /wiki/C_shell "C shell"
[2]: /wiki/Unix_utilities "Unix utilities"
[3]: #cite_note-EarlyQuickRef-1
[4]: #cite_note-SoftwareQA-2
[5]: /wiki/Microsoft_Windows "Microsoft Windows"
[6]: #cite_note-3
[7]: /wiki/OS/2 "OS/2"
[8]: #cite_note-MiddlesexNews-4
[9]: #cite_note-PCWeek-5
[10]: #cite_note-Announce-6
[11]: #cite_note-DrDobbs-7
[12]: #cite_note-MIPS-8
[13]: #cite_note-BYTE-9
[14]: /wiki/Windows_NT "Windows NT"
[15]: #cite_note-10
[16]: #cite_note-11
[17]: #cite_note-12
[18]: /wiki/Compiler "Compiler"
[19]: /wiki/Thread_(computer_science) "Thread (computer science)"
[20]: #cite_note-13
[21]: /wiki/Foreach_loop "Foreach loop"
[22]: /wiki/Grep "Grep"
[23]: /wiki/Recursive_descent_parser "Recursive descent parser"
[24]: /wiki/Fork_(operating_system) "Fork (operating system)"
[25]: /wiki/Thread_(computing) "Thread (computing)"
[26]: /wiki/Lock_(computer_science) "Lock (computer science)"
[27]: #cite_note-14