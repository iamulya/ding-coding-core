**Open Programming Language** (OPL) is an [embedded][0] [programming language][1] for portable devices that run the [Symbian Operating System][2].

## Usage

It can be found on the [Nokia][3] 9200, [9300][4] and [9500][5] Communicator series [mobile telephone][6]/[personal digital assistant][7] (PDA) and the [Sony Ericsson][8] [P800][9], [P900][10], [P910][11] series. On classic [Psion][12] PDAs such as the [Series 3][13], [5/5mx][14], [Series 7][15], and netBook/netPad, as well as the [MC218][16], OPL is part of the standard application suite. OPL is also included in Psion Teklogix industrial handhelds such as the [Workabout mx][17]. OPL is an [interpreted language][18] similar to [BASIC][19]. A fully [Visual Basic][20]-compatible language OVAL has been also developed.

## History

The language was originally called **Organiser Programming Language,** developed by [Psion Ltd][12] for the [Psion Organiser][21]. The first implementation (without graphics) was for the original Psion Organiser (now referred to as the Psion Organiser I, 1984), and it came bundled with the Science, Finance and Math [data packs][22]. It became truly accessible as built-in software in the Psion Organiser II (1986), and the language went on to be used in the [Psion Series 3][13] and later. After [Psion][12] retired from the [portable digital assistant][23] market, the project was delayed until 2003, when the fledgling Symbian Developer Program released it as [open source][24]. The language is now developed on [SourceForge][25] in the opl-dev project.\[_[clarification needed][26]_\]

The language is not available from Symbian OS v8 and later, mainly due to lack of interest and support from major Symbian licencees Nokia and Sony Ericsson.\[_[citation needed][27]_\] Hence, OPL will most likely never be made available for the newer generation of Symbian OS phones such as Sony Ericsson [P990][28], [M600][29],\[_[citation needed][27]_\] [W950][30], [P1i][31] and Nokia [E61i][32] and [E90][33]. As of 2010, Nokia device developers are encouraged to use [Python][34] for S60 instead (See [Python for S60][35]).\[_[citation needed][27]_\]

## Examples

Here is the console version of a [Hello world program][36]:

_(Source code taken from the PCDevPrimer in the OPL Wiki.)_

And here is a GUI version for Nokia's Series 80 user interface:

OPL is a [structured programming][37] language. OPL programs contain PROCedures, which are much like [functions][38] in other programming languages.

## Testing dialog responses

An example:

In this cruel interrogative program, the Yes button is assigned the shortcut of Ctrl+y, while No has Ctrl+n, represented by %y and %n respectively. The user's input from the DIALOG is tested in the IF statement, PRINTing appropriate responses to the screen. Note that the 'GET' keyword, which gets user input without using a dialog box, is here used simply to wait for a keypress before terminating the program (otherwise it would end immediately without giving time for the user to read the text). The output from DIALOG can also be stored in a variable.

Variables specific to a procedure must be declared with the LOCAL keyword; global variables are defined with the GLOBAL keyword.

## Variable types

The table below uses an example variable called 'var'.

## Minutiae

OPL interfaced with advanced Psion Series 3 features by means of [operating system][39] CALLs, but in the later [Psion Series 5mx][14] this was changed to a so-called 'OPX' library, stored in the system [ROM][40] (the Z drive). 'OPX' libraries were also made available for the [Nokia 9210][41], [Nokia 9300][4] and [Nokia 9500][5] Communicators, adding OPXs routines for handling SMS and managing Bluetooth communication.

Other OPL features include those with a letter 'g' at the beginning, for graphical functions; those with a letter 'm', for menus; and those with a letter 'd', for dialogs.

## See also

## External links

[0]: /wiki/Embedded_system "Embedded system"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Symbian_OS "Symbian OS"
[3]: /wiki/Nokia "Nokia"
[4]: /wiki/Nokia_9300 "Nokia 9300"
[5]: /wiki/Nokia_9500 "Nokia 9500"
[6]: /wiki/Mobile_telephone "Mobile telephone"
[7]: /wiki/Personal_digital_assistant "Personal digital assistant"
[8]: /wiki/Sony_Ericsson "Sony Ericsson"
[9]: /wiki/Sony_Ericsson_P800 "Sony Ericsson P800"
[10]: /wiki/Sony_Ericsson_P900 "Sony Ericsson P900"
[11]: /wiki/Sony_Ericsson_P910 "Sony Ericsson P910"
[12]: /wiki/Psion_(computers) "Psion (computers)"
[13]: /wiki/Psion_3 "Psion 3"
[14]: /wiki/Psion_5 "Psion 5"
[15]: /wiki/Psion_Series_7 "Psion Series 7"
[16]: /w/index.php?title=Ericsson_MC218&action=edit&redlink=1 "Ericsson MC218 (page does not exist)"
[17]: /w/index.php?title=Psion_Workabout&action=edit&redlink=1 "Psion Workabout (page does not exist)"
[18]: /wiki/Interpreted_language "Interpreted language"
[19]: /wiki/BASIC "BASIC"
[20]: /wiki/Visual_Basic "Visual Basic"
[21]: /wiki/Psion_Organiser "Psion Organiser"
[22]: /wiki/Data_pack "Data pack"
[23]: /wiki/Portable_digital_assistant "Portable digital assistant"
[24]: /wiki/Open_source "Open source"
[25]: /wiki/SourceForge "SourceForge"
[26]: /wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify"
[27]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[28]: /wiki/Sony_Ericsson_P990 "Sony Ericsson P990"
[29]: /wiki/Sony_Ericsson_M600 "Sony Ericsson M600"
[30]: /wiki/Sony_Ericsson_W950 "Sony Ericsson W950"
[31]: /w/index.php?title=Sony_Ericsson_P1i&action=edit&redlink=1 "Sony Ericsson P1i (page does not exist)"
[32]: /wiki/Nokia_E61 "Nokia E61"
[33]: /wiki/Nokia_E90 "Nokia E90"
[34]: /wiki/Python_(programming_language) "Python (programming language)"
[35]: /wiki/Python_for_S60 "Python for S60"
[36]: /wiki/Hello_world_program "Hello world program"
[37]: /wiki/Structured_programming "Structured programming"
[38]: /wiki/Subroutine "Subroutine"
[39]: /wiki/Operating_system "Operating system"
[40]: /wiki/Read-only_memory "Read-only memory"
[41]: /wiki/Nokia_9210 "Nokia 9210"