**BBC BASIC** is a [programming language][0], developed in 1981 as a native programming language for the [MOS Technology 6502][1] based [Acorn][2] [BBC Micro][3] home/personal computer, mainly by [Sophie Wilson][4]. It is a version of the [BASIC][5] programming language adapted for a UK computer literacy project of the [BBC][6].[\[1\]][7]

BBC BASIC, based on the older [Atom BASIC][8] (for the [Acorn Atom][9]), extended traditional BASIC with named `DEF PROC`/`DEF FN` procedures and functions, `REPEAT UNTIL` loops, and `IF THEN ELSE` structures inspired by [COMAL][10]. The [interpreter][11] also included powerful statements for controlling the BBC Micro's four-channel sound output and its low-/high-resolution eight-mode graphics display.

One of the unique features of BBC BASIC was the presence of an [inline assembler][12] allowing users to write [6502][1], and later: [Z80][13], [NS32016][14] and [ARM][15] assembly language programs. The assembler was fully integrated into the BASIC interpreter and shared variables with it, which could be included between the \[ and \] characters, saved via \*SAVE and \*LOAD, and called via the CALL or USR commands. This allowed developers to write not just assembly language code, but also BASIC code to emit assembly language, making it possible to use code-generation techniques and even write simple compilers in BASIC.

## History

In 1978 [Hermann Hauser][16] and [Chris Curry][17] founded [Acorn Computers][2]. Much of the code was developed at Cambridge University by [Sophie Wilson][4][\[2\]][18] and her colleagues.[\[3\]][19]

## Platforms and versions

## BBC Micro

Complete History available here:[\[4\]][20]

BASIC I, the original version, was shipped on early [BBC Micros][3].

BASIC II was used on the [Acorn Electron][21] and BBC Micros shipped after 1982, including the Model B. It added the `OPENUP` and `OSCLI` keywords, along with offset assembly and bug fixes.

BASIC III, was produced in both a UK version and a US market version for Acorn's abortive attempt to enter the cross-Atlantic computer market. Apart from a few bug fixes, the only change from BASIC II was that the `COLOUR` command could also be spelled `COLOR`: regardless of which was input, the UK version always listed it as `COLOUR`, the US version as `COLOR`. The main place that BASIC III can be found is as the HI-BASIC version for the external second processor.

BASIC IV, also known as CMOS BASIC, available on the [BBC Master][22] machines, was changed to use the new instructions available in the 65SC12 processor, reducing the size of the code and therefore allowing the inclusion of `LIST IF`, `EXT#` as a statement, `EDIT`, `TIME$`, `ON PROC`, | in `VDU` statements and faster floating point. Bug fixes were again included.

BASIC IV(1986) was a further improvement to BASIC IV, and was included on the Master Compact machine. The version of BASIC on the Compact included re-coded mathematical routines, said to provide a 30% speed increase over the version included in the rest of the Master series.[\[5\]][23]

HI-BASIC: this was available in two versions, the first based on BASIC III, and the second based on BASIC IV. Both were built to run from a higher address (&B800) on the second processor, rather than the usual &8000 address on the BBC B. This allowed more program space to be available on either the external or internal 6502 Second Processors. A version was introduced to support a second [Z80][24] processor.[\[6\]][25]

Another version of BBC BASIC, called BAS128, was supplied on tape and disc with the BBC Master and Master Compact; it loaded into main RAM and used the 64 kB of Sideways RAM for user programs. This provided support for much larger programs at the cost of being a lot slower than the normal ROM-based version.

The interpreter can deal with both BASIC and [6502][26] [assembly language][27], which can be included between the \[ and \] characters. This contributed to the system's popularity with industrial and research engineers.[\[7\]][28]

## Further details/Determining BASIC version

Because the BBC MOS and RISC OS were usually supplied on ROM, it may be assumed that a specific release of the operating system contained a specific version of BASIC. As such, there is no simple way to determine _which_ version of BASIC is actually running other than by enquiring the operating system identity and thus making an assumption.

Identify OS version (See OSBYTE &81 for more information regarding OS identification)

Entry parameters:  
X=0 Execute BRK with a message giving the OS version  
X<\>0 RTS with OS version returned in X  
  
On exit:  
X=0, OS 1.00 or Electron OS 1.00  
X=1, OS 1.20 or American OS

  
**Osbyte &81(129)**  
Entry parameters:  
X=0  
Y=&FF  
  
On exit:  
X=0 BBC OS 0.1  
X=1 Electron OS 1.00  
X=&FF BBC OS 1.00 or OS 1.20  
X=&FE US BBC OS 1.20

  
**INKEY(-256) command**  
Examples, to avoid the \*SHADOW command upsetting a standard Electron or BBC model B, whilst executing it on a B+ or Master/Compact, you could use  
IF INKEY(-256)\>1 THEN \*SHADOW1  
  
_Returned values:_  
0 = BBC B with old 0.10 OS (obsolete!)  
-1 = BBC B with new 1.00+ OS (including 1.20)  
1 = Electron  
251 = BBC B+ 64/128  
253 = Master 128  
245 = Compact  
160 = Archimedes (Arthur OS) (obsolete)  
161 = Archimedes/A3000 (RiscOS)  
??? = Acorn A5000

On the BBC family, it is possible to run both the standard BASIC _and_ an enhanced HIBASIC on the 6502 Second Processor. One may determine if the program is running on the second processor by examining the initial value of PAGE, it will be &800 if using the second processor. To distinguish between BASIC and HIBASIC, one should examine the initial value of HIMEM. This will be &8000 for BASIC running on the second processor, and &B800 for HIBASIC on the second processor.

A similar situation exists on RISC OS where there may be the normal BASIC or BASIC64 (which offers higher precision maths). Normal BASIC identifies itself as "BASIC V" and BASIC64 identifies itself as "BASIC VI", therefore the following (used before any error has occurred) will distinguish one from the other:  
`IF INSTR(REPORT$,"VI") THEN PRINT "BASIC64" ELSE PRINT "BASIC"`

## Acorn Archimedes (RISC OS)

With the move to the 32 bit [ARM][15] CPU and the removal of the 16kB limit on the BASIC code size many new features were added.[\[8\]][29] BASIC V version 1.04 was 61kB long. Current versions of RISC OS still contain a BBC BASIC interpreter. The source code to the RISC OS 5 version of BBC BASIC V has been released as 'shared source' by [RISC OS Open][30]. In 2011 [TBA Software][31] released test versions of an updated BASIC which includes support for [VFP/NEON][32] from [assembler][33].[\[9\]][34]

Amongst the new commands and features supported were:

The graphics commands were entirely backwards compatible, the sound less so (for example, the `ENVELOPE` keyword from BASIC V onwards is a command which takes fourteen numeric parameters and effectively does nothing -- as in older versions, it calls OS\_Word 8, but that does nothing on RISC OS [\[1\]][35][\[2\]][36]). The in-line 6502 assembler was replaced by an [ARM][15] assembler. BASIC V was said, by Acorn, to be "certainly the fastest interpreted BASIC in the world" and "probably the most powerful BASIC found on any computer".

BASIC VI is a version of BASIC V that supports 8 byte format real numbers (according to IEEE standard 754) as opposed to the standard 5 byte format introduced in BASIC I.

BBC BASIC V and VI were delivered as standard on the [Acorn Archimedes][37] and the [Risc PC][38]. A version of BBC BASIC V was also available to run on the [ARM second processor][39] for the BBC Micro.

A Compiler for BBC BASIC V was produced by Paul Fellows, team leader of the Arthur OS development, and published initially by DABS Press.\[_[citation needed][40]_\] This was able to implement almost all of the language, with the obvious exception of the EVAL function -- which inevitably required run-time programmatic interpretation. As evidence of its completeness, it was able to support in-line assembler syntax. The compiler itself was written in BBC BASIC. The compiler (running under the interpreter in the early development stages) was able to compile itself, and versions that were distributed were self-compiled object code.\[_[original research?][41]_\] Many applications initially written to run under the interpreter benefitted from the performance boost that this gave, putting BBC BASIC on a par with other languages for serious application development.

## Other platforms

BBC BASIC has also been ported to many other platforms.[\[10\]][42]

A [32016][43] version of BBC BASIC was supplied with the Acorn 32016 CoProcessor and Acorn ABC.

In addition to the version of BBC BASIC supplied with the [BBC Micro][3]'s [Z80][13] Second processor, a Z80 based version of BBC BASIC also exists for [CP/M][44] based systems. Until recently, no version existed for the [Sinclar ZX Spectrum][45]; however, due to efforts of J.G. Harston (also responsible for a [PDP-11][46] version [\[3\]][47]), [BBC BASIC for the Spectrum][48] was released in January 2002 with many improvements made in subsequent releases.

A [Zilog Z80][13] version of BBC BASIC was also used on the [Tiki 100][49] desktop computer, [Cambridge Z88][50] portable and the [Amstrad NC100][51] Notepad and [Amstrad NC200][52] Notebook computers. This version has been implemented on the [TI-83 Plus][53] and [TI-84 Plus][54] series [graphing calculators][55].

For [PC][56] based systems, BBC BASIC was also implemented for [DOS][57] as _BBCBASIC (86)_ (which aimed for maximum compatibility with the BBC Micro) and _BBasic_ (which concentrated on the BASIC language itself, with its own enhancements based on BASIC II).

A version of BBC BASIC integrated with the [Microsoft Windows][58] [graphical user interface][59], [BBC BASIC for Windows][60] created by [Richard Russell][61] (who also developed the Z80 and x86 versions), was released in 2001\. This version is still under active development, seeing much industry use currently. Whilst supporting nearly completely the original BBC BASIC specification (BASIC IV), the Windows version supports much of BASIC V/VI syntax as well as some advanced features of its own. Features unique to BBC BASIC for Windows include interpreter support for record/structure types, and the ability to call Windows [API][62] routines or those in an external [DLL][63]. Recent versions have included advanced features comparable with languages like [C][64], and an external library has recently added support for objects. As of 2016 an experimental port to SDL was under development.

A [GPL][65] clone of BBC BASIC named _Brandy_ written in portable [C][64] is also available.[\[11\]][66][\[12\]][67][\[13\]][68][\[14\]][69]

An emulator of the BBC Micro for the [Commodore][70] [Amiga][71] was produced by Ariadne Software for [CBM][70] (UK). While extremely fast, it did not emulate the 6502 at full speed so assembly code would run slower than a real BBC while BASIC programs would run much faster. Due to the way the optimised BASIC and the 6502 emulation interacted, almost no commercial games would run (but well behaved code and educational software generally worked); additionally it used a slightly less precise floating-point numeric format. For a while it was bundled with a special academic package of the [Amiga 500][72], in the hope that schools would replace their ageing BBC Bs with Amiga 500s.

A version of BBC BASIC (Z80) has also been made for the TI-83/84+ Texas Instruments calculator families by Benjamin Ryves.

A [Commodore 64][73] version _Shado_ was produced by a small software house [Aztec Software][74] in the early 1980s.

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/MOS_Technology_6502 "MOS Technology 6502"
[2]: /wiki/Acorn_Computers "Acorn Computers"
[3]: /wiki/BBC_Micro "BBC Micro"
[4]: /wiki/Sophie_Wilson "Sophie Wilson"
[5]: /wiki/BASIC "BASIC"
[6]: /wiki/BBC "BBC"
[7]: #cite_note-1
[8]: /w/index.php?title=Atom_BASIC&action=edit&redlink=1 "Atom BASIC (page does not exist)"
[9]: /wiki/Acorn_Atom "Acorn Atom"
[10]: /wiki/COMAL "COMAL"
[11]: /wiki/Interpreter_(computer_software) "Interpreter (computer software)"
[12]: /wiki/Inline_assembler "Inline assembler"
[13]: /wiki/Zilog_Z80 "Zilog Z80"
[14]: /wiki/NS320xx "NS320xx"
[15]: /wiki/ARM_architecture "ARM architecture"
[16]: /wiki/Hermann_Hauser "Hermann Hauser"
[17]: /wiki/Chris_Curry "Chris Curry"
[18]: #cite_note-2
[19]: #cite_note-3
[20]: #cite_note-4
[21]: /wiki/Acorn_Electron "Acorn Electron"
[22]: /wiki/BBC_Master "BBC Master"
[23]: #cite_note-5
[24]: /wiki/Z80 "Z80"
[25]: #cite_note-6
[26]: /wiki/6502 "6502"
[27]: /wiki/Assembly_language "Assembly language"
[28]: #cite_note-edn_marsh_2005-7
[29]: #cite_note-8
[30]: /wiki/RISC_OS_Open "RISC OS Open"
[31]: /w/index.php?title=TBA_Software&action=edit&redlink=1 "TBA Software (page does not exist)"
[32]: /wiki/ARM_NEON "ARM NEON"
[33]: /wiki/Assembler_(computer_programming) "Assembler (computer programming)"
[34]: #cite_note-iconbar_old_news-9
[35]: http://lists.cloud9.co.uk/pipermail/bbc-micro/2006-November/000257.html
[36]: http://mdfs.net/Archive/BBCMicro/2006/11/19/185014.htm
[37]: /wiki/Acorn_Archimedes "Acorn Archimedes"
[38]: /wiki/Risc_PC "Risc PC"
[39]: /wiki/Tube_(BBC_Micro) "Tube (BBC Micro)"
[40]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[41]: /wiki/Wikipedia:No_original_research "Wikipedia:No original research"
[42]: #cite_note-10
[43]: /wiki/32016 "32016"
[44]: /wiki/CP/M "CP/M"
[45]: /wiki/ZX_Spectrum "ZX Spectrum"
[46]: /wiki/PDP-11 "PDP-11"
[47]: http://mdfs.net/bbcbasic/PDP11/
[48]: http://mdfs.net/bbcbasic/Spectrum/
[49]: /wiki/Tiki_100 "Tiki 100"
[50]: /wiki/Cambridge_Z88 "Cambridge Z88"
[51]: /wiki/Amstrad_NC100 "Amstrad NC100"
[52]: /wiki/Amstrad_NC200 "Amstrad NC200"
[53]: /wiki/TI-83#TI-83_Plus "TI-83"
[54]: /wiki/TI-84_Plus "TI-84 Plus"
[55]: /wiki/Graphing_calculator "Graphing calculator"
[56]: /wiki/IBM_PC_compatible "IBM PC compatible"
[57]: /wiki/DOS "DOS"
[58]: /wiki/Microsoft_Windows "Microsoft Windows"
[59]: /wiki/Graphical_user_interface "Graphical user interface"
[60]: http://www.rtrussell.co.uk/products/bbcwin/bbcwin.html
[61]: /wiki/Richard_T._Russell "Richard T. Russell"
[62]: /wiki/Application_programming_interface "Application programming interface"
[63]: /wiki/Dynamic-link_library "Dynamic-link library"
[64]: /wiki/C_(programming_language) "C (programming language)"
[65]: /wiki/GNU_General_Public_License "GNU General Public License"
[66]: #cite_note-11
[67]: #cite_note-12
[68]: #cite_note-13
[69]: #cite_note-14
[70]: /wiki/Commodore_International "Commodore International"
[71]: /wiki/Amiga "Amiga"
[72]: /wiki/Amiga_500 "Amiga 500"
[73]: /wiki/Commodore_64 "Commodore 64"
[74]: /w/index.php?title=Aztec_Software&action=edit&redlink=1 "Aztec Software (page does not exist)"