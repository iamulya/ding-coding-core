**Commodore BASIC**, also known as **PET BASIC**, is the [dialect][0] of the [BASIC programming language][1] used in [Commodore International][2]'s [8-bit][3] [home computer][4] line, stretching from the [PET][5] of 1977 to the [C128][6] of 1985\. The core was based on [6502][7] [Microsoft BASIC][8], and as such it shares many characteristics with other 6502 BASICs of the time, such as [Applesoft BASIC][9]. Commodore licensed BASIC from [Microsoft][10] on a "pay once, no royalties" basis after [Jack Tramiel][11] turned down [Bill Gates][12]' offer of a $3 per unit fee, stating, "I'm already married," and would pay no more than $25,000 for a perpetual license.[\[1\]][13]

## History

Commodore took the source code of the flat-fee BASIC and further developed it internally for all their other 8-bit home computers. It was not until the Commodore 128 (with V7.0) that a Microsoft copyright notice was displayed. However, Microsoft had built an [easter egg][14] into the version 2 or "upgrade" Commodore Basic that proved its provenance: typing the (obscure) command `WAIT 6502, 1` would result in `Microsoft!` appearing on the screen. (The easter egg was well concealed---the message did not show up in any [disassembly][15] of the interpreter.)[\[2\]][16]

The popular [Commodore 64][17] came with BASIC v2.0 in ROM despite the computer being released after the PET/CBM series that had version 4.0 because the 64 was intended as a [home computer][4], while the PET/CBM series were targeted at business and educational use where their built-in programming language was presumed to be more heavily used. This saved manufacturing costs, as the V2 fit into smaller ROMs.

## Technical details

A convenient feature of Commodore's [ROM][18]-resident BASIC [interpreter][19] and [KERNAL][20] was the [full-screen editor][21].[\[3\]][22][\[4\]][23] Although Commodore keyboards only featured two [cursor keys][24] which alternated direction when the shift key was held, the screen editor allowed users to enter direct commands or to input and edit program lines from anywhere on the screen. If a line was prefixed with a line number, it was [tokenized][25] and stored in program memory. Lines not beginning with a number were executed by pressing the `RETURN` key whenever the [cursor][26] happened to be on the line. This marked a significant upgrade in program entry interfaces compared to other common home computer BASICs at the time, which typically used [line editors][27], invoked by a separate `EDIT` command, or a "copy cursor" that truncated the line at the cursor's position.

It also had the capability of saving named files to any device, including the [cassette][28] -- a popular storage device in the days of the [PET][5], and one that remained in use throughout the lifespan of the 8-bit Commodores as an inexpensive form of mass storage. Due to their use as an [analog audio][29] medium, cassettes were as ubiquitous during the era as CDs are today. Most systems only supported filenames on [diskette][30], which made saving multiple files on other devices more difficult. The user of one of these other systems had to note the recorder's counter display at the location of the file, but this was inaccurate and prone to error. With the PET (and BASIC 2.0), files from cassettes could be requested by name. The device would search for the filename by reading data sequentially, ignoring any non-matching filenames. The file system was also supported by a powerful [record structure][31] that could be loaded or saved to files. Commodore cassette data was recorded digitally, rather than less expensive (and less reliable) analog methods used by other manufacturers. Therefore, the specialized [Datasette][32] was required rather than a standard tape recorder. Adapters were available that used an [analog to digital converter][33] to allow use of a standard recorder, but these cost only a little less than the Datassette.

Due to Commodore's use of the same BASIC on multiple hardware architectures, the LOAD command was provided with an additional parameter to indicate the [memory address][34] where the program should start. A command such as `LOAD "*",8` would place the program data at the start of BASIC's area, while `LOAD "*",8,1` would place the file at the address from which it was saved. The former was usually used for BASIC programs, since BASIC's location varied between different models. Some Commodore BASIC variants supplied `BLOAD` and `[BSAVE][35]` commands that worked like their counterparts in [Applesoft BASIC][9], loading or saving [bitmaps][36] from specified memory locations.

Like the original [Microsoft BASIC][8] [interpreter][37], on which it is based, Commodore BASIC is slower than native [machine code][38]. Test results have shown that copying 16 [kilobytes][39] from [ROM][18] to [RAM][40] takes less than a second in machine code, compared to over a minute in BASIC. To execute faster than the interpreter, programmers started using various techniques to speed up execution. One was to store often-used floating point values in variables rather than using literal values, as interpreting a variable name was faster than interpreting a literal number. Since floating point is default type for all commands, it's faster to use floating point numbers, rather than integers. When speed was important, some programmers converted sections of BASIC programs to [6502][7] or [6510][41] assembly language which were loaded separately from a file, or POKEed into memory from DATA statements at the end of the BASIC program, and executed from BASIC using the `SYS` command either from [direct mode][42] or [from the program itself][43]. When the execution speed of machine language was too great, such as for a game or when waiting for user input, programmers could [poll][44] by `PEEK`ing selected memory locations (such as $A6 for the C-64, or $D0 for the C-128, denoting size of the keyboard queue) to delay or halt execution.

Commodore BASIC [keywords][45] could be abbreviated by entering first an unshifted keypress, and then a shifted keypress of the next letter. This set the [high bit][46], causing the interpreter to stop reading and parse the statement according to a lookup table. This meant the statement up to where the high bit was set was accepted as a substitute for typing the entire command out. However, since all BASIC keywords were stored in memory as single byte tokens, this was a convenience for statement entry rather than an optimization.

In the default uppercase-only character set, shifted characters appear as a graphics symbol; e.g. the command, `GOTO`, could be abbreviated `G{Shift-O}` (which resembled `G**Γ**` onscreen). Most such commands were two letters long, but in some cases they were longer. In cases like this, there was an ambiguity, so more unshifted letters of the command were needed, such as `GO{Shift-S}` (`GO♥`) being required for `[GOSUB][47]`. Some commands had no abbreviated form, either due to brevity or ambiguity with other commands. For example, the command, `INPUT` had no abbreviation because its spelling collided with the separate `INPUT#` keyword, which was located nearer to the beginning of the keyword [lookup table][48]. The heavily used `PRINT` command had a single `?` shortcut, as was common in most BASIC dialects. Abbreviating commands with shifted letters is unique to Commodore BASIC.

By abbreviating keywords, it was possible to fit more code on a single line (line lengths were usually limited to 2 or 4 screen lines, depending on the specific machine). This allowed for a slight saving on the overhead to store otherwise necessary extra program lines, but nothing more. All BASIC commands were tokenized and took up 1 byte (or two, in the case of several commands of BASIC 7 or BASIC 10) in memory no matter which way they were entered. And, such long lines could be difficult to edit. The `LIST` command displayed the entire command keyword - extending the program line beyond the 2 or 4 screen lines which could be entered into program memory.

Program lines in Commodore BASIC do not require spaces anywhere (but the LIST command will always display one between the line number and the statement), e.g., `100 IFA=5THENPRINT"YES":GOTO160`, and it was common to write programs with no spacing. This feature was added to conserve memory since the tokenizer never removes any space inserted between keywords: the presence of spaces results in extra `0x20` bytes in the tokenized program which are merely skipped during execution.

The order of execution of Commodore BASIC lines was not determined by line numbering; instead, it followed the order in which the lines were linked in memory.[\[5\]][49] Program lines were stored in memory as a [singly linked list][50] with a line number, a pointer (containing the address of the beginning of the next program line), and then the tokenized code for the line. While a program was being entered, BASIC would constantly reorder program lines in memory so that the line numbers and pointers were all in ascending order. However, after a program was entered, manually altering the line numbers and pointers with the [POKE][51] commands could allow for out-of-order execution or even give each line the same line number. In the early days, when BASIC was used commercially, this was a [software protection][52] technique to discourage casual modification of the program.

Variable names were only significant to 2 characters; thus the variable names `VARIABLE1`, `VARIABLE2` and `VA` all referred to the same variable.

The native number format of Commodore BASIC, like that of its parent MS BASIC, was [floating point][53]. Most contemporary BASIC implementations used one byte for the characteristic ([exponent][54]) and three bytes for the [mantissa][55]. The accuracy of a floating point number using a three-byte mantissa is only about 6.5 decimal digits, and [round-off error][56] is common. Commodore, however, used MS BASIC's four-byte mantissa, which made their BASIC much more useful for business.

Although Commodore BASIC supports [signed integer][57] variables (denoted with a percent sign) in the range -32768 to 32767, in practice they only work on array variables and serve the function of conserving memory by limiting array elements to two bytes each. Denoting a normal variable as integer simply causes BASIC to convert it back to floating point, slowing down program execution and wasting memory as each percent sign takes one additional byte to store. Also, it's not possible to POKE or PEEK memory locations above 32767 with address defined as a signed integer.

String variables were represented by postfixing the variable name with a dollar sign. Thus, the variables `AA$`, `AA`, and `AA%` would each be understood as distinct.

Many BASIC extensions were released for the Commodore 64, due to the relatively limited capabilities of its native BASIC 2.0\. One of the most popular extensions was the [DOS Wedge][58], which was included on the [Commodore 1541 Test/Demo Disk][59]. This 1 KB extension to BASIC added a number of disk-related commands, including the ability to read a disk directory without destroying the program in memory. Its features were subsequently incorporated in various third-party extensions, such as the popular [Epyx FastLoad][60] cartridge. Other BASIC extensions added additional keywords to make it easier to code sprites, sound, and high-resolution graphics like [Simons' BASIC][61].

Although BASIC 2.0's lack of sound or graphics features was frustrating to many users, some critics argued that it was ultimately beneficial since it forced the user to learn machine language.

The limitations of BASIC 2.0 on the C64 led to use of built-in ROM machine language from BASIC. To load a file to a designated memory location, the filename, drive, and device number would be read by a call: `SYS57812"filename",8`

The location would be specified in two locations: `POKE780,0:POKE781,0:POKE782,192`

And the load routine would be called: `SYS65493`

The disk magazine for the C64, [Loadstar][62] was a venue for hobbyist programmers, who shared collections of proto-commands for BASIC, called with the `SYS address + offset` command.

From a modern programming point of view, the earlier versions of Commodore BASIC presented a host of bad programming traps for the programmer. As most of these issues derived from Microsoft BASIC, virtually every home computer BASIC of the era suffered from similar deficiencies.[\[6\]][63] Every line of a Microsoft BASIC program was assigned a [line number][64] by the programmer. It was common practice to increment numbers by some value (5, 10 or 100) to make inserting lines during program editing or debugging easier, but bad planning meant that inserting large sections into a program often required restructuring the entire code. A common technique was to start a program at some low line number with an [ON...GOSUB][65] [jump table][66], with the body of the program structured into sections starting at a designated line number like 1000, 2000, and so on. If a large section needed to be added, it could just be assigned the next available major line number and inserted to the jump table.

Later BASIC versions on Commodore and other platforms included a DELETE and RENUMBER command, as well as an AUTO line numbering command that would automatically select and insert line numbers according to a selected increment. In addition, all variables are treated as global variables. Clearly defined loops are hard to create, often causing the programmer to rely on the [GOTO][67] command (this was later rectified in BASIC 3.5 with the addition of the DO, LOOP, WHILE, UNTIL, and EXIT commands). Flag variables often needed to be created to perform certain tasks. Earlier BASICs from Commodore also lack debugging commands, meaning that bugs and unused variables are hard to trap.

## Use as user interface

In common with other [home computers][4], Commodore's models booted directly into the BASIC interpreter. BASIC's file and programming commands could be entered in [direct mode][42] to load and execute software. If program execution was halted using the RUN/STOP key, variable values would be preserved in RAM and could be PRINTed for debugging. This, along with the advanced [screen editor][68] included with Commodore BASIC gave the programming environment a [REPL][69]-like feel; programmers could insert and edit program lines at any screen location, interactively building the program.[\[7\]][70] This is in contrast to business-oriented operating systems of the time like [CP/M][71] or [MS-DOS][72], which typically booted into a [command line interface][73]. If a programming language was required on these platforms, it had to be loaded separately.

While some versions of Commodore BASIC included disk-specific `DLOAD` and `DSAVE` commands, the version built into the popular [Commodore 64][17] lacked these, requiring the user to specify the disk drive's device number (typically 8 or 9) to the standard `LOAD` command, which otherwise defaulted to tape. Another omission from the Commodore 64s BASIC 2.0 was a `DIRECTORY` command to load a disk's contents into [screen memory][74] without clearing main memory. On the 64, viewing a disk's contents was implemented as loading a "program" which when listed showed the directory. This had the effect of overwriting the currently loaded program. Addons like the DOS Wedge overcame this by rendering the directory listing direct to the screen.

## Versions and features

A list of CBM BASIC versions in chronological order, with successively added features:

## Released versions

## Unreleased versions

## Notable extension packages

## References

[0]: /wiki/Dialect_(computing) "Dialect (computing)"
[1]: /wiki/BASIC_programming_language "BASIC programming language"
[2]: /wiki/Commodore_International "Commodore International"
[3]: /wiki/8-bit "8-bit"
[4]: /wiki/Home_computer "Home computer"
[5]: /wiki/Commodore_PET "Commodore PET"
[6]: /wiki/Commodore_128 "Commodore 128"
[7]: /wiki/MOS_Technology_6502 "MOS Technology 6502"
[8]: /wiki/Microsoft_BASIC "Microsoft BASIC"
[9]: /wiki/Applesoft_BASIC "Applesoft BASIC"
[10]: /wiki/Microsoft "Microsoft"
[11]: /wiki/Jack_Tramiel "Jack Tramiel"
[12]: /wiki/Bill_Gates "Bill Gates"
[13]: #cite_note-1
[14]: /wiki/Easter_egg_(media) "Easter egg (media)"
[15]: /wiki/Disassembler "Disassembler"
[16]: #cite_note-2
[17]: /wiki/Commodore_64 "Commodore 64"
[18]: /wiki/Read-only_memory "Read-only memory"
[19]: /wiki/Interpreter_(computer_software) "Interpreter (computer software)"
[20]: /wiki/KERNAL "KERNAL"
[21]: /wiki/Visual_editor "Visual editor"
[22]: #cite_note-3
[23]: #cite_note-4
[24]: /wiki/Cursor_keys "Cursor keys"
[25]: /wiki/Tokenized "Tokenized"
[26]: /wiki/Cursor_(computers) "Cursor (computers)"
[27]: /wiki/Line_editor "Line editor"
[28]: /wiki/Compact_Cassette "Compact Cassette"
[29]: /wiki/Analog_audio "Analog audio"
[30]: /wiki/Diskette "Diskette"
[31]: /wiki/Storage_record "Storage record"
[32]: /wiki/Datasette "Datasette"
[33]: /wiki/Analog_to_digital_converter "Analog to digital converter"
[34]: /wiki/Memory_address "Memory address"
[35]: /wiki/BSAVE "BSAVE"
[36]: /wiki/Bitmap "Bitmap"
[37]: /wiki/Interpreter_(programming) "Interpreter (programming)"
[38]: /wiki/Machine_code "Machine code"
[39]: /wiki/Kilobytes "Kilobytes"
[40]: /wiki/Random-access_memory "Random-access memory"
[41]: /wiki/MOS_Technology_6510 "MOS Technology 6510"
[42]: /wiki/Direct_mode "Direct mode"
[43]: /wiki/BASIC_loader "BASIC loader"
[44]: /wiki/Polling_(computer_science) "Polling (computer science)"
[45]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[46]: /wiki/Endianness "Endianness"
[47]: /wiki/GOSUB "GOSUB"
[48]: /wiki/Lookup_table "Lookup table"
[49]: #cite_note-5
[50]: /wiki/Singly_linked_list "Singly linked list"
[51]: /wiki/PEEK_and_POKE "PEEK and POKE"
[52]: /wiki/Software_protection "Software protection"
[53]: /wiki/Floating_point "Floating point"
[54]: /wiki/Exponent "Exponent"
[55]: /wiki/Significand "Significand"
[56]: /wiki/Round-off_error "Round-off error"
[57]: /wiki/Signed_number_representations "Signed number representations"
[58]: /wiki/DOS_Wedge "DOS Wedge"
[59]: /w/index.php?title=Commodore_1541_Test/Demo_Disk&action=edit&redlink=1 "Commodore 1541 Test/Demo Disk (page does not exist)"
[60]: /wiki/Epyx_FastLoad "Epyx FastLoad"
[61]: /wiki/Simons%27_BASIC "Simons' BASIC"
[62]: /wiki/Loadstar "Loadstar"
[63]: #cite_note-6
[64]: /wiki/Line_number "Line number"
[65]: /wiki/GOSUB#Computed_GOSUB "GOSUB"
[66]: /wiki/Jump_table "Jump table"
[67]: /wiki/GOTO "GOTO"
[68]: /w/index.php?title=Screen_editor&action=edit&redlink=1 "Screen editor (page does not exist)"
[69]: /wiki/REPL "REPL"
[70]: #cite_note-7
[71]: /wiki/CP/M "CP/M"
[72]: /wiki/MS-DOS "MS-DOS"
[73]: /wiki/Command_line_interface "Command line interface"
[74]: /w/index.php?title=Screen_memory&action=edit&redlink=1 "Screen memory (page does not exist)"