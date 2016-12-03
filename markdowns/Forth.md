**Forth** is an [imperative][0] [stack-based][1] computer [programming language][2] and environment originally designed by [Charles "Chuck" Moore][3]. Language features include [structured programming][4], [reflection][5] (the ability to modify the program structure during program execution), [concatenative programming][6] (functions are composed with juxtaposition) and [extensibility][7] (the programmer can create new commands). Although not an [acronym][8], the language's name is sometimes spelled with all capital letters as FORTH, following the customary usage during its earlier years.

A [procedural programming][9] language without [type checking][10], Forth features both interactive execution of commands (making it suitable as a [shell][11] for systems that lack a more formal [operating system][12]) and the ability to [compile][13] sequences of commands for later execution. Some Forth implementations (usually early versions or those written to be extremely portable) compile [threaded code][14], but many implementations today generate [optimized][15] [machine code][16] like other language compilers.

Forth is used in the [Open Firmware][17] [boot loader][18], in [space][19] applications,[\[1\]][20] such as the [Philae spacecraft][21] and other embedded systems which involve interaction with hardware. The bestselling 1986 [DOS][22] game _[Starflight][23]_, from [Electronic Arts][24], was written with a custom Forth.[\[2\]][25]

The free software [Gforth][26] implementation is actively maintained, as are several commercially supported systems.

## Overview

A Forth environment combines the compiler with an interactive shell, where the user defines and runs [subroutines][27] called _words_. Words can be tested, redefined, and debugged as the source is entered without recompiling or restarting the whole program. All syntactic elements, including variables and basic operators, are defined as words. Forth environments vary in how the resulting program is stored, but ideally running the program has the same effect as manually re-entering the source.

## Stacks

Most programming environments with recursive [subroutines][27] use a [stack][28] for [control flow][29]. This structure typically also stores [local variables][30], including subroutine [parameters][31] (in [call by value][32] system such as C). Forth often does not have local variables, however, nor is it call-by-value. Instead, intermediate values are kept in a second [stack][28]. Words operate directly on the topmost values in the first stack. It may therefore be called the "parameter" or "data" stack, but most often simply "the" stack. The second, function-call stack is then called the "linkage" or "return" stack, abbreviated _rstack_. Special rstack manipulation functions provided by the kernel allow it to be used for temporary storage within a word, but otherwise it cannot be used to pass parameters or manipulate data.

Most words are specified in terms of their effect on the stack. Typically, parameters are placed on the top of the stack before the word executes. After execution, the parameters have been erased and replaced with any return values. For arithmetic operators, this follows the rule of [reverse Polish notation][33]. See below for examples illustrating stack usage.

## Maintenance

Forth is a simple yet extensible language; its modularity and extensibility permit the writing of high-level programs such as [CAD][34] systems. Forth has been used successfully in large, complex projects, while applications developed by competent, disciplined professionals have proven to be easily maintained on evolving hardware platforms over decades of use.[\[3\]][35] Forth has a niche both in astronomical and space applications.[\[4\]][36] Forth is still used today in many [embedded systems][37] (small computerized devices) because of its [portability][38], efficient memory use, short development time, and fast execution speed. It has been implemented efficiently on modern [RISC processors][39], and [processors that use Forth as machine language][40] have been produced.[\[5\]][41] Other uses of Forth include the [Open Firmware][17] [boot ROMs][42] used by [Apple][43], [IBM][44], [Sun][45], and [OLPC XO-1][46]; and the [FICL][47]-based [first stage boot controller][48] of the [FreeBSD][49] operating system.

## History

Forth evolved from [Charles H. Moore][3]'s personal programming system, which had been in continuous development since 1968\.[\[6\]][50] Forth was first exposed to other programmers in the early 1970s, starting with [Elizabeth Rather][51] at the US [National Radio Astronomy Observatory][52].[\[6\]][50] After their work at NRAO, Charles Moore and Elizabeth Rather formed FORTH, Inc. in 1973, refining and porting Forth systems to dozens of other platforms in the next decade.

Forth is so named because in 1968 "the file holding the interpreter was labeled FOURTH, for 4th (next) generation software---but the [IBM 1130][53] operating system restricted file names to 5 characters."[\[7\]][54] Moore saw Forth as a successor to compile-link-go [third-generation programming languages][55], or software for "fourth generation" hardware, not a [fourth-generation programming language][56] as the term has come to be used.

Because Charles Moore frequently moved from job to job over his career, an early pressure on the developing language was ease of [porting][38] to different computer architectures. A Forth system has often been used to bring up new hardware. For example, Forth was the first resident software on the new [Intel 8086][57] chip in 1978 and MacFORTH was the first resident development system for the first Apple [Macintosh][58] in 1984\.[\[6\]][50]

FORTH, Inc.'s microFORTH was developed for the [Intel 8080][59], [Motorola 6800][60], and [Zilog Z80][61] microprocessors starting in 1976\. MicroFORTH was later used by hobbyists to generate Forth systems for other architectures, such as the [6502][62] in 1978\. Wide dissemination finally led to standardization of the language. Common practice was codified in the de facto standards FORTH-79[\[8\]][63] and FORTH-83[\[9\]][64] in the years 1979 and 1983, respectively. These standards were unified by [ANSI][65] in 1994, commonly referred to as ANS Forth.[\[10\]][66][\[11\]][67]

Forth became very popular in the 1980s[\[12\]][68] because it was well suited to the small [microcomputers][69] of that time, being compact and portable. At least one [home computer][70], the British [Jupiter ACE][71], had Forth in its [ROM][72]-[resident operating system][73]. The [Canon Cat][74] also used Forth for its system programming, and [Rockwell][75] produced single-chip microcomputers with resident Forth kernels, the R65F11 and R65F12\. A complete family tree is at [TU-Wien][76]. Insoft GraFORTH was a version of Forth with graphics expansions for the Apple II.[\[13\]][77] ASYST was a Forth expansion for measuring and controlling on PCs.[\[14\]][78]

## Programmer's perspective

Forth relies heavily on explicit use of a [data stack][79] and [reverse Polish notation][33] (RPN or postfix notation), commonly used in calculators from [Hewlett-Packard][80]. In RPN, the operator is placed after its operands, as opposed to the more common [infix notation][81] where the operator is placed between its operands. Postfix notation makes the language easier to parse and extend; Forth's flexibility makes a static [BNF][82] grammar inappropriate, and it does not have a monolithic compiler. Extending the compiler only requires writing a new word, instead of modifying a grammar and changing the underlying implementation.

Using RPN, one could get the result of the mathematical expression `(25 * 10 + 50)` this way:

This command line first puts the numbers 25 and 10 on the implied stack.

  
The word `*` multiplies the two numbers on the top of the stack and replaces them with their product.

Then the number 50 is placed on the stack.

  
The word `+` adds it to the previous product. The CR moves the output to a new line (it is only for formatting purposes and could be omitted but - in most implementations - without it the output would occur on the same line as the input and would be less readable in the example). Finally, the `.` command prints the result to the user's terminal. As everything has completed successfully at that point, the text interpreter then outputs the prompt "ok" and moves to a new line to get more input without needing anything explicit to do that.[\[15\]][83]

Even Forth's structural features are stack-based. For example:

This code defines a new word (again, _word_ is the term used for a subroutine) called `FLOOR5` using the following commands: `DUP` duplicates the number on the stack; `6` places a 6 on top of the stack; `<` compares the top two numbers on the stack (6 and the `DUP`ed input), and replaces them with a true-or-false value; `IF` takes a true-or-false value and chooses to execute commands immediately after it or to skip to the `ELSE`; `DROP` discards the value on the stack; and `THEN` ends the conditional. The text in parentheses is a comment, advising that this word expects a number on the stack and will return a possibly changed number. The `FLOOR5` word is equivalent to this function written in the [C programming language][84] using the [ternary operator][85]:

This function is written more succinctly as:

You could run this word as follows:

First the interpreter pushes a number (1 or 8) onto the stack, then it calls FLOOR5, which pops off this number again and pushes the result. The CR moves the output to a new line (again, this is only here for readability). Finally, a call to "." pops the result and prints it to the user's terminal.

## Facilities

Forth has no explicit [grammar][86]. The interpreter reads a line of input from the user input device, which is then parsed for a word using spaces as a [delimiter][87]; some systems recognise additional [whitespace][88] characters. When the interpreter finds a word, it looks the word up in the _dictionary_. If the word is found, the interpreter executes the code associated with the word, and then returns to parse the rest of the input stream. If the word isn't found, the word is assumed to be a number and an attempt is made to convert it into a number and push it on the stack; if successful, the interpreter continues parsing the input stream. Otherwise, if both the lookup and the number conversion fail, the interpreter prints the word followed by an error message indicating the word is not recognised, flushes the input stream, and waits for new user input.[\[16\]][89]

The definition of a new word is started with the word `:` (colon) and ends with the word `;` (semi-colon). For example,

will compile the word `X`, and makes the name findable in the dictionary. When executed by typing `10 X` at the console this will print `11 10`.[\[17\]][90]

Most Forth systems include an [assembler][91] that allows one to specify words using the processor's facilities at its lowest level. Mostly the assembler is tucked away in a separate [namespace][92] (_wordlist_) as relatively few users want to use it. Forth assemblers may use a reverse-polish syntax in which the parameters of an instruction precede the instruction, but designs vary widely and are specific to the Forth implementation. A typical reverse-polish assembler prepares the operands on the stack and have the mnemonic copy the whole instruction into memory as the last step. A Forth assembler is by nature a macro assembler, so that it is easy to define an alias for registers according to their role in the Forth system: e.g. "datastackpointer" for the register used as a stack pointer.[\[18\]][93]

## Operating system, files, and multitasking

Most Forth systems run under a host operating system such as [Microsoft Windows][94], [Linux][95] or a version of [Unix][96] and use the host operating system's file system for source and data files; the ANSI Forth Standard describes the words used for I/O. All modern Forth systems use normal text files for source, even if they are embedded. An embedded system with a resident compiler gets its source via a serial line.

Classic Forth systems traditionally use neither [operating system][12] nor [file system][97]. Instead of storing code in files, source code is stored in disk blocks written to physical disk addresses. The word `BLOCK` is employed to translate the number of a 1K-sized block of disk space into the address of a buffer containing the data, which is managed automatically by the Forth system. Block use has become rare since the mid-1990s. In a hosted system those blocks too are allocated in a normal file in any case.

[Multitasking][98], most commonly [cooperative][99] [round-robin scheduling][100], is normally available (although multitasking words and support are not covered by the ANSI Forth Standard). The word `PAUSE` is used to save the current task's execution context, to locate the next task, and restore its execution context. Each task has its own stacks, private copies of some control variables and a scratch area. Swapping tasks is simple and efficient; as a result, Forth multitaskers are available even on very simple [microcontrollers][101], such as the [Intel 8051][102], [Atmel AVR][103], and [TI MSP430][104].[\[19\]][105]

Other non-standard facilities include a mechanism for issuing [calls][106] to the host OS or [windowing systems][107], and many provide extensions that employ the scheduling provided by the operating system. Typically they have a larger and different set of words from the stand-alone Forth's `PAUSE` word for task creation, suspension, destruction and modification of priority.

## Self-compilation and cross compilation

A fully featured Forth system with all source code will compile itself, a technique commonly called meta-compilation by Forth programmers (although the term doesn't exactly match [meta-compilation][108] as it is normally defined). The usual method is to redefine the handful of words that place compiled bits into memory. The compiler's words use specially named versions of fetch and store that can be redirected to a buffer area in memory. The buffer area simulates or accesses a memory area beginning at a different address than the code buffer. Such compilers define words to access both the target computer's memory, and the host (compiling) computer's memory.[\[20\]][109]

After the fetch and store operations are redefined for the code space, the compiler, assembler, etc. are recompiled using the new definitions of fetch and store. This effectively reuses all the code of the compiler and interpreter. Then, the Forth system's code is compiled, but this version is stored in the buffer. The buffer in memory is written to disk, and ways are provided to load it temporarily into memory for testing. When the new version appears to work, it is written over the previous version.

Numerous variations of such compilers exist for different environments. For [embedded systems][37], the code may instead be written to another computer, a technique known as [cross compilation][110], over a serial port or even a single [TTL][111] bit, while keeping the word names and other non-executing parts of the dictionary in the original compiling computer. The minimum definitions for such a Forth compiler are the words that fetch and store a byte, and the word that commands a Forth word to be executed. Often the most time-consuming part of writing a remote port is constructing the initial program to implement fetch, store and execute, but many modern microprocessors have integrated debugging features (such as the [Motorola CPU32][112]) that eliminate this task.[\[21\]][113]

## Structure of the language

The basic data structure of Forth is the "dictionary" which maps "words" to executable code or named data structures. The dictionary is laid out in memory as a tree of [linked lists][114] with the links proceeding from the latest (most recently) defined word to the oldest, until a [sentinel value][115], usually a NULL pointer, is found. A context switch causes a list search to start at a different leaf. A linked list search continues as the branch merges into the main trunk leading eventually back to the sentinel, the root. There can be several dictionaries. In rare cases such as meta-compilation a dictionary might be isolated and stand-alone. The effect resembles that of nesting namespaces and can overload keywords depending on the context.

A defined word generally consists of _head_ and _body_ with the head consisting of the _name field_ (NF) and the _link field_ (LF) and body consisting of the _code field_ (CF) and the _parameter field_ (PF).

Head and body of a dictionary entry are treated separately because they may not be contiguous. For example, when a Forth program is recompiled for a new platform, the head may remain on the compiling computer, while the body goes to the new platform. In some environments (such as [embedded systems][37]) the heads occupy memory unnecessarily. However, some cross-compilers may put heads in the target if the target itself is expected to support an interactive Forth.[\[22\]][116]

## Dictionary entry

The exact format of a dictionary entry is not prescribed, and implementations vary. However, certain components are almost always present, though the exact size and order may vary. Described as a structure, a dictionary entry might look this way:[\[23\]][117]

The name field starts with a prefix giving the length of the word's name (typically up to 32 bytes), and several bits for flags. The character representation of the word's name then follows the prefix. Depending on the particular implementation of Forth, there may be one or more NUL ('\\0') bytes for alignment.

The link field contains a pointer to the previously defined word. The pointer may be a relative displacement or an absolute address that points to the next oldest sibling.

The code field pointer will be either the address of the word which will execute the code or data in the parameter field or the beginning of machine code that the processor will execute directly. For colon defined words, the code field pointer points to the word that will save the current Forth instruction pointer (IP) on the return stack, and load the IP with the new address from which to continue execution of words. This is the same as what a processor's call/return instructions does.

## Structure of the compiler

The compiler itself is not a monolithic program. It consists of Forth words visible to the system, and usable by a programmer. This allows a programmer to change the compiler's words for special purposes.

The "compile time" flag in the name field is set for words with "compile time" behavior. Most simple words execute the same code whether they are typed on a command line, or embedded in code. When compiling these, the compiler simply places code or a threaded pointer to the word.[\[17\]][90]

The classic examples of compile-time words are the [control structures][118] such as `IF` and `WHILE`. Almost all of Forth's control structures and almost all of its compiler are implemented as compile-time words. Apart from some rarely used [control flow][29] words only found in a few implementations, such as a conditional return, all of Forth's [control flow][29] words are executed during compilation to compile various combinations of primitive words along with their branch addresses. For instance, `IF` and `WHILE`, and the words that match with those, set up `BRANCH` (unconditional branch) and `?BRANCH` (pop a value off the stack, and branch if it is false). Counted loop [control flow][29] words work similarly but set up combinations of primitive words that work with a counter, and so on. During compilation, the data stack is used to support control structure balancing, nesting, and back-patching of branch addresses. The snippet:

would be compiled to the following sequence inside a definition:

The numbers after `BRANCH` represent relative jump addresses. `LIT` is the primitive word for pushing a "literal" number onto the data stack.

## Compilation state and interpretation state

The word `:` (colon) parses a name as a parameter, creates a dictionary entry (a _colon definition_) and enters compilation state. The interpreter continues to read space-delimited words from the user input device. If a word is found, the interpreter executes the _compilation semantics_ associated with the word, instead of the _interpretation semantics_. The default compilation semantics of a word are to append its interpretation semantics to the current definition.[\[17\]][90]

The word `;` (semi-colon) finishes the current definition and returns to interpretation state. It is an example of a word whose compilation semantics differ from the default. The interpretation semantics of `;` (semi-colon), most control flow words, and several other words are undefined in ANS Forth, meaning that they must only be used inside of definitions and not on the interactive command line.[\[17\]][90]

The interpreter state can be changed manually with the words `[` (left-bracket) and `]` (right-bracket) which enter interpretation state or compilation state, respectively. These words can be used with the word `LITERAL` to calculate a value during a compilation and to insert the calculated value into the current colon definition. `LITERAL` has the compilation semantics to take an object from the data stack and to append semantics to the current colon definition to place that object on the data stack.

In ANS Forth, the current state of the interpreter can be read from the [flag][119] `STATE` which contains the value true when in compilation state and false otherwise. This allows the implementation of so-called _state-smart words_ with behavior that changes according to the current state of the interpreter.

## Immediate words

The word `IMMEDIATE` marks the most recent colon definition as an _immediate word_, effectively replacing its compilation semantics with its interpretation semantics.[\[24\]][120] Immediate words are normally executed during compilation, not compiled but this can be overridden by the programmer, in either state. `;` is an example of an immediate word. In ANS Forth, the word `POSTPONE` takes a name as a parameter and appends the compilation semantics of the named word to the current definition even if the word was marked immediate. Forth-83 defined separate words `COMPILE` and `[COMPILE]` to force the compilation of non-immediate and immediate words, respectively.

## Unnamed words and execution tokens

In ANS Forth, unnamed words can be defined with the word `:NONAME` which compiles the following words up to the next `;` (semi-colon) and leaves an _execution token_ on the data stack. The execution token provides an opaque handle for the compiled semantics, similar to the [function pointers][121] of the [C programming language][84].

Execution tokens can be stored in variables. The word `EXECUTE` takes an execution token from the data stack and performs the associated semantics. The word `COMPILE,` (compile-comma) takes an execution token from the data stack and appends the associated semantics to the current definition.

The word `'` (tick) takes the name of a word as a parameter and returns the execution token associated with that word on the data stack. In interpretation state, `' RANDOM-WORD EXECUTE` is equivalent to `RANDOM-WORD`.[\[25\]][122]

## Parsing words and comments

The words `:` (colon), `POSTPONE`, `'` (tick) are examples of _parsing words_ that take their arguments from the user input device instead of the data stack. Another example is the word `(` (paren) which reads and ignores the following words up to and including the next right parenthesis and is used to place comments in a colon definition. Similarly, the word `\` (backslash) is used for comments that continue to the end of the current line. To be parsed correctly, `(` (paren) and `\` (backslash) must be separated by whitespace from the following comment text.

## Structure of code

In most Forth systems, the body of a code definition consists of either [machine language][123], or some form of [threaded code][14]. The original Forth which follows the informal FIG standard (Forth Interest Group), is a TIL (Threaded Interpretive Language). This is also called indirect-threaded code, but direct-threaded and subroutine threaded Forths have also become popular in modern times. The fastest modern Forths use subroutine threading, insert simple words as macros, and perform [peephole optimization][124] or other optimizing strategies to make the code smaller and faster.[\[26\]][125]

## Data objects

When a word is a variable or other data object, the CF points to the runtime code associated with the defining word that created it. A defining word has a characteristic "defining behavior" (creating a dictionary entry plus possibly allocating and initializing data space) and also specifies the behavior of an instance of the class of words constructed by this defining word. Examples include:

Forth also provides a facility by which a programmer can define new application-specific defining words, specifying both a custom defining behavior and instance behavior. Some examples include circular buffers, named bits on an I/O port, and automatically indexed arrays.

Data objects defined by these and similar words are global in scope. The function provided by local variables in other languages is provided by the data stack in Forth (although Forth also has real local variables). Forth programming style uses very few named data objects compared with other languages; typically such data objects are used to contain data which is used by a number of words or tasks (in a multitasked implementation).[\[27\]][126]

Forth does not enforce consistency of data type usage; it is the programmer's responsibility to use appropriate operators to fetch and store values or perform other operations on data.

## Programming

Words written in Forth are compiled into an executable form. The classical "indirect threaded" implementations compile lists of addresses of words to be executed in turn; many modern systems generate actual machine code (including calls to some external words and code for others expanded in place). Some systems have optimizing compilers. Generally speaking, a Forth program is saved as the memory image of the compiled program with a single command (e.g., RUN) that is executed when the compiled version is loaded.

During development, the programmer uses the interpreter in [REPL][127] mode to execute and test each little piece as it is developed. Most Forth programmers therefore advocate a loose top-down design, and bottom-up development with continuous testing and integration.[\[28\]][128]

The top-down design is usually separation of the program into "vocabularies" that are then used as high-level sets of tools to write the final program. A well-designed Forth program reads like natural language, and implements not just a single solution, but also sets of tools to attack related problems.[\[29\]][129]

## Code examples

## Hello world

One possible implementation:

The word `CR` (Carriage Return) causes the following output to be displayed on a new line. The parsing word `."` (dot-quote) reads a double-quote delimited string and appends code to the current definition so that the parsed string will be displayed on execution. The space character separating the word `."` from the string `Hello, world!` is not included as part of the string. It is needed so that the parser recognizes `."` as a Forth word.

A standard Forth system is also an interpreter, and the same output can be obtained by typing the following code fragment into the Forth console:

`.(` (dot-paren) is an immediate word that parses a parenthesis-delimited string and displays it. As with the word `."` the space character separating `.(` from `Hello, world!` is not part of the string.

The word `CR` comes before the text to print. By convention, the Forth interpreter does not start output on a new line. Also by convention, the interpreter waits for input at the end of the previous line, after an `ok` prompt. There is no implied "flush-buffer" action in Forth's `CR`, as sometimes is in other programming languages.

## Mixing states of compiling and interpreting

Here is the definition of a word `EMIT-Q` which when executed emits the single character `Q`:

This definition was written to use the [ASCII][130] value of the `Q` character (81) directly. The text between the parentheses is a comment and is ignored by the compiler. The word `EMIT` takes a value from the data stack and displays the corresponding character.

The following redefinition of `EMIT-Q` uses the words `[` (left-bracket), `]` (right-bracket), `CHAR` and `LITERAL` to temporarily switch to interpreter state, calculate the ASCII value of the `Q` character, return to compilation state and append the calculated value to the current colon definition:

The parsing word `CHAR` takes a space-delimited word as parameter and places the value of its first character on the data stack. The word `[CHAR]` is an immediate version of `CHAR`. Using `[CHAR]`, the example definition for `EMIT-Q` could be rewritten like this:

This definition used `\` (backslash) for the describing comment.

Both `CHAR` and `[CHAR]` are predefined in ANS Forth. Using `IMMEDIATE` and `POSTPONE`, `[CHAR]` could have been defined like this:

## A complete RC4 cipher program

In 1987, [Ron Rivest][131] developed the [RC4][132] cipher-system for RSA Data Security, Inc. The code is extremely simple and can be written by most programmers from the description:

We have an array of 256 bytes, all different. Every time the array is used it changes by swapping two bytes. The swaps are controlled by counters _i_ and _j_, each initially 0\. To get a new _i_, add 1\. To get a new _j_, add the array byte at the new _i_. Exchange the array bytes at _i_ and _j_. The code is the array byte at the sum of the array bytes at _i_ and _j_. This is XORed with a byte of the plaintext to encrypt, or the ciphertext to decrypt. The array is initialized by first setting it to 0 through 255\. Then step through it using _i_ and _j_, getting the new _j_ by adding to it the array byte at _i_ and a key byte, and swapping the array bytes at _i_ and _j_. Finally, _i_ and _j_ are set to 0\. All additions are modulo 256\.

The following Standard Forth version uses Core and Core Extension words only.

This is one of many ways to test the code:

## Implementations

Because the Forth virtual machine is simple to implement and has no standard reference implementation, there are numerous implementations of the language. In addition to supporting the standard varieties of desktop computer systems ([POSIX][133], [Microsoft Windows][94], [Mac OS X][134]), many of these Forth systems also target a variety of [embedded systems][135]. Listed here are some of the more prominent systems which conform to the 1994 ANS Forth standard.

## See also

## References

## Further reading

## External links

[0]: /wiki/Imperative_programming "Imperative programming"
[1]: /wiki/Stack-oriented_programming_language "Stack-oriented programming language"
[2]: /wiki/Programming_language "Programming language"
[3]: /wiki/Charles_H._Moore "Charles H. Moore"
[4]: /wiki/Structured_programming "Structured programming"
[5]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[6]: /wiki/Concatenative_programming_language "Concatenative programming language"
[7]: /wiki/Extensible_programming "Extensible programming"
[8]: /wiki/Acronym "Acronym"
[9]: /wiki/Procedural_programming "Procedural programming"
[10]: /wiki/Type_system "Type system"
[11]: /wiki/Operating_system_shell "Operating system shell"
[12]: /wiki/Operating_system "Operating system"
[13]: /wiki/Compiler "Compiler"
[14]: /wiki/Threaded_code "Threaded code"
[15]: /wiki/Compiler_optimization "Compiler optimization"
[16]: /wiki/Machine_code "Machine code"
[17]: /wiki/Open_Firmware "Open Firmware"
[18]: /wiki/Boot_loader "Boot loader"
[19]: /wiki/Outer_space "Outer space"
[20]: #cite_note-1
[21]: /wiki/Philae_(spacecraft) "Philae (spacecraft)"
[22]: /wiki/DOS "DOS"
[23]: /wiki/Starflight "Starflight"
[24]: /wiki/Electronic_Arts "Electronic Arts"
[25]: #cite_note-2
[26]: /wiki/Gforth "Gforth"
[27]: /wiki/Subroutine "Subroutine"
[28]: /wiki/Stack_(data_structure) "Stack (data structure)"
[29]: /wiki/Control_flow "Control flow"
[30]: /wiki/Local_variable "Local variable"
[31]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[32]: /wiki/Call_by_value "Call by value"
[33]: /wiki/Reverse_Polish_notation "Reverse Polish notation"
[34]: /wiki/Computer-aided_design "Computer-aided design"
[35]: #cite_note-3
[36]: #cite_note-4
[37]: /wiki/Embedded_system "Embedded system"
[38]: /wiki/Porting "Porting"
[39]: /wiki/RISC_processor "RISC processor"
[40]: /wiki/Stack_machine "Stack machine"
[41]: #cite_note-5
[42]: /wiki/Booting "Booting"
[43]: /wiki/Apple_Inc. "Apple Inc."
[44]: /wiki/IBM "IBM"
[45]: /wiki/Sun_Microsystems "Sun Microsystems"
[46]: /wiki/OLPC_XO-1 "OLPC XO-1"
[47]: http://ficl.sourceforge.net/
[48]: /w/index.php?title=BTX_(boot_loader)&action=edit&redlink=1 "BTX (boot loader) (page does not exist)"
[49]: /wiki/FreeBSD "FreeBSD"
[50]: #cite_note-evolution-6
[51]: /wiki/Elizabeth_Rather "Elizabeth Rather"
[52]: /wiki/National_Radio_Astronomy_Observatory "National Radio Astronomy Observatory"
[53]: /wiki/IBM_1130 "IBM 1130"
[54]: #cite_note-7
[55]: /wiki/Third-generation_programming_language "Third-generation programming language"
[56]: /wiki/Fourth-generation_programming_language "Fourth-generation programming language"
[57]: /wiki/Intel_8086 "Intel 8086"
[58]: /wiki/Macintosh "Macintosh"
[59]: /wiki/Intel_8080 "Intel 8080"
[60]: /wiki/Motorola_6800 "Motorola 6800"
[61]: /wiki/Zilog_Z80 "Zilog Z80"
[62]: /wiki/MOS_Technology_6502 "MOS Technology 6502"
[63]: #cite_note-8
[64]: #cite_note-9
[65]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[66]: #cite_note-10
[67]: #cite_note-11
[68]: #cite_note-12
[69]: /wiki/Microcomputer "Microcomputer"
[70]: /wiki/Home_computer "Home computer"
[71]: /wiki/Jupiter_Ace "Jupiter Ace"
[72]: /wiki/Read-only_memory "Read-only memory"
[73]: /w/index.php?title=Resident_operating_system&action=edit&redlink=1 "Resident operating system (page does not exist)"
[74]: /wiki/Canon_Cat "Canon Cat"
[75]: /wiki/Rockwell_International "Rockwell International"
[76]: http://www.complang.tuwien.ac.at/forth/family-tree/
[77]: #cite_note-13
[78]: #cite_note-14
[79]: /wiki/Stack_data_structure "Stack data structure"
[80]: /wiki/Hewlett-Packard "Hewlett-Packard"
[81]: /wiki/Infix_notation "Infix notation"
[82]: /wiki/Backus-Naur_form "Backus-Naur form"
[83]: #cite_note-15
[84]: /wiki/C_(programming_language) "C (programming language)"
[85]: /wiki/%3F: "?:"
[86]: /wiki/Formal_grammar "Formal grammar"
[87]: /wiki/Delimiter "Delimiter"
[88]: /wiki/Whitespace_(computer_science) "Whitespace (computer science)"
[89]: #cite_note-16
[90]: #cite_note-compiler-17
[91]: /wiki/Assembly_language#Assembler "Assembly language"
[92]: /wiki/Namespace "Namespace"
[93]: #cite_note-18
[94]: /wiki/Microsoft_Windows "Microsoft Windows"
[95]: /wiki/Linux "Linux"
[96]: /wiki/Unix "Unix"
[97]: /wiki/File_system "File system"
[98]: /wiki/Computer_multitasking "Computer multitasking"
[99]: /wiki/Computer_multitasking#Cooperative_multitasking.2Ftime-sharing "Computer multitasking"
[100]: /wiki/Round-robin_scheduling "Round-robin scheduling"
[101]: /wiki/Microcontroller "Microcontroller"
[102]: /wiki/Intel_MCS-51 "Intel MCS-51"
[103]: /wiki/Atmel_AVR "Atmel AVR"
[104]: /wiki/TI_MSP430 "TI MSP430"
[105]: #cite_note-19
[106]: /wiki/System_call "System call"
[107]: /wiki/Windowing_system "Windowing system"
[108]: /wiki/Meta-Compilation "Meta-Compilation"
[109]: #cite_note-20
[110]: /wiki/Cross-compilation "Cross-compilation"
[111]: /wiki/Transistor-transistor_logic "Transistor-transistor logic"
[112]: /wiki/Motorola_CPU32 "Motorola CPU32"
[113]: #cite_note-21
[114]: /wiki/Linked_list "Linked list"
[115]: /wiki/Sentinel_value "Sentinel value"
[116]: #cite_note-22
[117]: #cite_note-23
[118]: /wiki/Control_structure "Control structure"
[119]: /wiki/Flag_(computing) "Flag (computing)"
[120]: #cite_note-24
[121]: /wiki/Function_pointer "Function pointer"
[122]: #cite_note-25
[123]: /wiki/Machine_language "Machine language"
[124]: /wiki/Peephole_optimization "Peephole optimization"
[125]: #cite_note-26
[126]: #cite_note-27
[127]: /wiki/REPL "REPL"
[128]: #cite_note-28
[129]: #cite_note-29
[130]: /wiki/ASCII "ASCII"
[131]: /wiki/Ron_Rivest "Ron Rivest"
[132]: /wiki/RC4 "RC4"
[133]: /wiki/POSIX "POSIX"
[134]: /wiki/Mac_OS_X "Mac OS X"
[135]: /wiki/Embedded_systems "Embedded systems"