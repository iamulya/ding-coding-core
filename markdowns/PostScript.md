**PostScript** (**PS**) is a computer language for creating [vector graphics][0]. It is a [dynamically typed][1], [concatenative programming language][2] and was created at [Adobe Systems][3] by [John Warnock][4], [Charles Geschke][5], Doug Brotz, Ed Taft and Bill Paxton from 1982 to 1984\. It is used as a [page description language][6] in the [electronic publishing][7] and [desktop publishing][8].

## History

The concepts of the PostScript language were seeded in 1976 when [John Warnock][4] was working at [Evans & Sutherland][9], a [computer graphics][10] company. At that time John Warnock was developing an interpreter for a large three-dimensional graphics database of [New York][11] harbor. Warnock conceived the Design System language to process the graphics.

Concurrently, researchers at [Xerox PARC][12] had developed the first [laser printer][13] and had recognized the need for a standard means of defining page images. In 1975-76 [Bob Sproull][14] and [William Newman][15] developed the Press format, which was eventually used in the [Xerox Star][16] system to drive laser printers. But Press, a data format rather than a language, lacked flexibility, and PARC mounted the [Interpress][17] effort to create a successor.

In 1978 Evans & Sutherland asked Warnock to move from the [San Francisco Bay Area][18] to their main headquarters in [Utah][19], but he was not interested in moving. He then joined Xerox PARC to work with [Martin Newell][20]. They rewrote Design System to create J & M (for "John and Martin") which was used for [VLSI][21] design and the investigation of type and graphics printing. This work later evolved and expanded into the [Interpress][17] language.

Warnock left with [Chuck Geschke][22] and founded [Adobe Systems][3] in December 1982\. They, together with Doug Brotz, Ed Taft and Bill Paxton created a simpler language, similar to Interpress, called PostScript, which went on the market in 1984\. At about this time they were visited by [Steve Jobs][23], who urged them to adapt PostScript to be used as the language for driving laser printers.

In March 1985, the [Apple][24] [LaserWriter][25] was the first printer to ship with PostScript, sparking the [desktop publishing][8] (DTP) revolution in the mid-1980s. The combination of technical merits and widespread availability made PostScript a language of choice for graphical output for printing applications. For a time an [interpreter][26] (sometimes referred to as a [RIP][27] for Raster Image Processor) for the PostScript language was a common component of laser printers, into the 1990s.

However, the cost of implementation was high; computers output raw PS code that would be interpreted by the printer into a raster image at the printer's natural resolution. This required high performance [microprocessors][28] and ample [memory][29]. The LaserWriter used a 12 MHz [Motorola 68000][30], making it faster than any of the Macintosh computers to which it attached. When the laser printer engines themselves cost over a thousand dollars the added cost of PS was marginal. But as printer mechanisms fell in price, the cost of implementing PS became too great a fraction of overall printer cost; in addition, with desktop computers becoming more powerful, it no longer made sense to offload the rasterisation work onto the resource-constrained printer. By 2001, few lower-end printer models came with support for PostScript, largely due to growing competition from much cheaper non-PostScript ink jet printers, and new software-based methods to render PostScript images on the computer, making them suitable for any printer; [PDF][31], a descendant of PostScript, provides one such method, and has largely replaced PostScript as _[de facto][32]_ standard for electronic document distribution.

On high-end printers, PostScript processors remain common, and their use can dramatically reduce the CPU work involved in printing documents, transferring the work of rendering PostScript images from the computer to the printer.

## PostScript Level 1

The first version of the PostScript language was released to the market in 1984\. The term "Level 1" was added when Level 2 was introduced.

## PostScript Level 2

PostScript Level 2 was introduced in 1991, and included several improvements: improved speed and reliability, support for in-RIP separations, [image decompression][33] (for example, [JPEG][34] images could be rendered by a PostScript program), support for composite [fonts][35], and the form mechanism for caching reusable content.

## PostScript 3

PostScript 3 (Adobe dropped the "level" terminology in favor of simple versioning) came at the end of 1997, and along with many new dictionary-based versions of older operators, introduced better color handling, and new filters (which allow in-program compression/decompression, program chunking, and advanced error-handling).

PostScript 3 was significant in terms of replacing the existing proprietary color electronic prepress systems, then widely used for magazine production, through the introduction of smooth shading operations with up to 4096 shades of grey (rather than the 256 available in PostScript Level 2), as well as DeviceN, a [color space][36] that allowed the addition of additional ink colors (called [spot colors][37]) into composite color pages.

## Use in printing

## Before PostScript

Prior to the introduction of PostScript, printers were designed to print character output given the text---typically in [ASCII][38]---as input. There were a number of technologies for this task, but most shared the property that the [glyphs][39] were physically difficult to change, as they were stamped onto [typewriter][40] keys, bands of metal, or optical plates.

This changed to some degree with the increasing popularity of [dot matrix printers][41]. The characters on these systems were drawn as a series of dots, as defined by a [font][42] table inside the printer. As they grew in sophistication, dot matrix printers started including several built-in fonts from which the user could select, and some models allowed users to upload their own custom glyphs into the printer.

Dot matrix printers also introduced the ability to print [raster graphics][43]. The graphics were interpreted by the computer and sent as a series of dots to the printer using a series of [escape sequences][44]. These [printer control languages][45] varied from printer to printer, requiring program authors to create numerous [drivers][46].

Vector graphics printing was left to special-purpose devices, called [plotters][47]. Almost all plotters did share a common command language, [HPGL][48], but were of limited use for anything other than printing graphics. In addition, they tended to be expensive and slow, and thus rare.

## PostScript printing

Laser printers combine the best features of both printers and plotters. Like plotters, laser printers offer high quality line art, and like dot-matrix printers, they are able to generate pages of text and raster graphics. Unlike either printers or plotters, however, a laser printer makes it possible to position high-quality graphics and text on the same page. PostScript made it possible to fully exploit these characteristics, by offering a single control language that could be used on any brand of printer.

PostScript went beyond the typical printer control language and was a complete programming language of its own. Many applications can transform a document into a PostScript program whose execution will result in the original document. This program can be sent to an [interpreter][26] in a printer, which results in a printed document, or to one inside another application, which will display the document on-screen. Since the document-program is the same regardless of its destination, it is called _device-independent_.

PostScript is noteworthy for implementing on-the fly [rasterization][49]; everything, even text, is specified in terms of straight lines and cubic [Bézier curves][50] (previously found only in [CAD][51] applications), which allows arbitrary scaling, rotating and other transformations. When the PostScript program is interpreted, the interpreter converts these instructions into the dots needed to form the output. For this reason PostScript interpreters are occasionally called PostScript [Raster Image Processors][27], or RIPs.

## Font handling

Almost as complex as PostScript itself is its handling of [fonts][42]. The font system uses the PS graphics primitives to draw glyphs as [line art][52], which can then be rendered at any [resolution][53]. A number of [typographic][54] issues had to be considered with this approach.

One issue is that fonts do not actually scale linearly at small sizes; features of the glyphs will become proportionally too large or small and they start to look wrong. PostScript avoided this problem with the inclusion of [font hinting][55], in which additional information is provided in horizontal or vertical bands to help identify the features in each letter that are important for the rasterizer to maintain. The result was significantly better-looking fonts even at low resolution; it had formerly been believed that hand-tuned bitmap fonts were required for this task.

At the time, the technology for including these hints in fonts was carefully guarded, and the hinted fonts were compressed and encrypted into what Adobe called a _[Type 1 Font][56]_ (also known as _PostScript Type 1 Font_, _PS1_, _T1_ or _Adobe Type 1_). Type 1 was effectively a simplification of the PS system to store outline information only, as opposed to being a complete language (PDF is similar in this regard). Adobe would then sell licenses to the Type 1 technology to those wanting to add hints to their own fonts. Those who did not license the technology were left with the _[Type 3 Font][57]_ (also known as _PostScript Type 3 Font_, _PS3_ or _T3_). Type 3 fonts allowed for all the sophistication of the PostScript language, but without the standardized approach to hinting.

The [Type 2 font][58] format was designed to be used with [Compact Font Format][59] (CFF) charstrings, and was implemented to reduce the overall font file size. The [CFF/Type2][60] format later became the basis for handling PostScript outlines in [OpenType][61] fonts.

The [CID-keyed font][62] format was also designed, to solve the problems in the [OCF/Type 0 fonts][63], for addressing the complex Asian-language ([CJK][64]) encoding and very large character set issues. The CID-keyed font format can be used with the Type 1 font format for standard CID-keyed fonts, or Type 2 for CID-keyed OpenType fonts.

To compete with Adobe's system, Apple designed their own system, [TrueType][65], around 1991\. Immediately following the announcement of TrueType, Adobe published the specification for the Type 1 font format. Retail tools such as Altsys [Fontographer][66] (acquired by [Macromedia][67] in January 1995, owned by [FontLab][68] since May 2005) added the ability to create Type 1 fonts. Since then, many free Type 1 fonts have been released; for instance, the fonts used with the [TeX][69] typesetting system are available in this format.

In the early 1990s there were several other systems for storing outline-based fonts, developed by [Bitstream][70] and [METAFONT][71] for instance, but none included a general-purpose printing solution and they were therefore not widely used.

In the late 1990s, Adobe joined Microsoft in developing [OpenType][61], essentially a functional superset of the Type 1 and TrueType formats. When printed to a PostScript output device, the unneeded parts of the OpenType font are omitted, and what is sent to the device by the driver is the same as it would be for a TrueType or Type 1 font, depending on which kind of outlines were present in the OpenType font.

## Other implementations

In the 1980s, Adobe drew most of its revenue from the licensing fees for their implementation of PostScript for printers, known as a [raster image processor][72] or _RIP_. As a number of new [RISC][73]-based platforms became available in the mid-1980s, some found Adobe's support of the new machines to be lacking.

This and issues of cost led to third-party implementations of PostScript becoming common, particularly in low-cost printers (where the licensing fee was the sticking point) or in high-end typesetting equipment (where the quest for speed demanded support for new platforms faster than Adobe could provide). At one point, Microsoft licensed to Apple a PostScript-compatible interpreter it had bought called [TrueImage][74], and Apple licensing to Microsoft its new font format, [TrueType][65]. Apple ended up reaching an accord with Adobe and licensed genuine PostScript for its printers, but TrueType became the standard [outline font][75] technology for both Windows and the Macintosh.

Today, third-party PostScript-compatible interpreters are widely used in printers and multifunction peripherals (MFPs). For example, [CSR plc][76]'s IPS PS3[\[1\]][77] interpreter, formerly known as PhoenixPage, is standard in many printers and MFPs, including those developed by [Hewlett-Packard][78] and sold under the [LaserJet][79] and Color LaserJet lines. Other third-party PostScript solutions used by print and MFP manufacturers include Jaws[\[2\]][80] and the [Harlequin RIP][81], both by [Global Graphics][82]. A [free software][83] version, with several other applications, is [Ghostscript][84]. Several compatible interpreters are listed on the Undocumented Printing Wiki.[\[3\]][85]

Some basic, inexpensive laser printers do not support PostScript, instead coming with drivers that simply rasterize the platform's native graphics formats rather than converting them to PostScript first.\[_[citation needed][86]_\] When PostScript support is needed for such a printer, Ghostscript can be used. There are also a number of commercial PostScript interpreters, such as [TeleType Co.][87]'s T-Script.

## Use as a display system

PostScript became commercially successful due to the introduction of the [graphical user interface][88], allowing designers to directly lay out pages for eventual output on laser printers. However, the GUI's own graphics systems were generally much less sophisticated than PostScript; Apple's [QuickDraw][89], for instance, supported only basic lines and arcs, not the complex [B-splines][90] and advanced region filling options of PostScript. In order to take full advantage of PostScript printing, applications on the computers had to re-implement those features using the host platform's own graphics system. This led to numerous issues where the on-screen layout would not exactly match the printed output, due to differences in the implementation of these features.

As computer power grew, it became possible to host the PS system in the computer rather than the printer. This led to the natural evolution of PS from a printing system to one that could also be used as the host's own graphics language. There were numerous advantages to this approach; not only did it help eliminate the possibility of different output on screen and printer, but it also provided a powerful graphics system for the computer, and allowed the printers to be "dumb" at a time when the cost of the laser engines was falling. In a production setting, using PostScript as a display system meant that the host computer could render low-resolution to the screen, higher resolution to the printer, or simply send the PS code to a smart printer for offboard printing.

However, PostScript was written with printing in mind, and had numerous features that made it unsuitable for direct use in an interactive display system. In particular, PS was based on the idea of collecting up PS commands until the `showpage` command was seen, at which point all of the commands read up to that point were interpreted and output. In an interactive system this was clearly not appropriate. Nor did PS have any sort of interactivity built in; for example, supporting hit detection for mouse interactivity obviously did not apply when PS was being used on a printer.

When [Steve Jobs][23] left Apple and started [NeXT][91], he pitched Adobe on the idea of using PS as the display system for his new workstation computers. The result was [Display PostScript][92], or DPS. DPS added basic functionality to improve performance by changing many string lookups into 32 bit integers, adding support for direct output with every command, and adding functions to allow the GUI to inspect the diagram. Additionally, a set of "bindings" was provided to allow PS code to be called directly from the [C programming language][93]. NeXT used these bindings in their [NeXTStep][94] system to provide an [object oriented][95] graphics system. Although DPS was written in conjunction with NeXT, Adobe sold it commercially and it was a common feature of most [Unix workstations][96] in the 1990s.

[Sun Microsystems][97] took another approach, creating [NeWS][98]. Instead of DPS's concept of allowing PS to interact with C programs, NeWS instead extended PS into a language suitable for running the entire GUI of a computer. Sun added a number of new commands for timers, mouse control, interrupts and other systems needed for interactivity, and added [data structures][99] and language elements to allow it to be completely object oriented internally. A complete GUI, three in fact, were written in NeWS and provided for a time on their workstations. However, the ongoing efforts to standardize the [X11][100] system led to its introduction and widespread use on Sun systems, and NeWS never became widely used.

## The language

PostScript is a [Turing-complete][101] programming language, belonging to the [concatenative][2] group. Typically, PostScript programs are not produced by humans, but by other programs. However, it is possible to write computer programs in PostScript just like any other programming language.[\[4\]][102]

PostScript is an [interpreted][103], [stack-based][104] language similar to [Forth][105] but with strong dynamic [typing][1], data structures inspired by those found in [Lisp][106], [scoped memory][107] and, since language level 2, [garbage collection][108]. The language syntax uses [reverse Polish notation][109], which makes the order of operations unambiguous, but reading a program requires some practice, because one has to keep the layout of the [stack][110] in mind. Most _operators_ (what other languages term _functions_) take their arguments from the stack, and place their results onto the stack. _[Literals][111]_ (for example, numbers) have the effect of placing a copy of themselves on the stack. Sophisticated data structures can be built on the _array_ and _dictionary_ types, but cannot be declared to the type system, which sees them all only as arrays and dictionaries, so any further typing discipline to be applied to such user-defined "types" is left to the code that implements them.

The character "%" is used to introduce comments in PostScript programs. As a general convention, every PostScript program should start with the characters "%!PS" as an [interpreter directive][112] so that all devices will properly interpret it as PostScript.

## "Hello world"

A [Hello World program][113], the customary way to show a small example of a complete program in a given language, might look like this in PostScript (level 2):

or if the output device has a console

## Units of length

PostScript uses the [point][114] as its unit of length. However, unlike some of the other versions of the point, PostScript uses exactly 72 points to the inch. Thus:

For example, in order to draw a vertical line of 4 cm length, it is sufficient to type:

More readably and idiomatically, one might use the following equivalent, which demonstrates a simple procedure definition and the use of the mathematical operators `mul` and `div`:

Most implementations of PostScript use [single-precision][115] reals (24-bit mantissa), so it is not meaningful to use more than 9 decimal digits to specify a real number, and performing calculations may produce unacceptable round-off errors.

## See also

## Notes

## References

This article is based on material taken from the [Free On-line Dictionary of Computing][116] prior to 1 November 2008 and incorporated under the "relicensing" terms of the [GFDL][117], version 1.3 or later.

## External links

[0]: /wiki/Vector_graphics "Vector graphics"
[1]: /wiki/Type_system "Type system"
[2]: /wiki/Concatenative_programming_language "Concatenative programming language"
[3]: /wiki/Adobe_Systems "Adobe Systems"
[4]: /wiki/John_Warnock "John Warnock"
[5]: /wiki/Charles_Geschke "Charles Geschke"
[6]: /wiki/Page_description_language "Page description language"
[7]: /wiki/Electronic_publishing "Electronic publishing"
[8]: /wiki/Desktop_publishing "Desktop publishing"
[9]: /wiki/Evans_%26_Sutherland "Evans & Sutherland"
[10]: /wiki/Computer_graphics "Computer graphics"
[11]: /wiki/New_York_City "New York City"
[12]: /wiki/Xerox_PARC "Xerox PARC"
[13]: /wiki/Laser_printer "Laser printer"
[14]: /wiki/Bob_Sproull "Bob Sproull"
[15]: /wiki/William_Newman_(computer_scientist) "William Newman (computer scientist)"
[16]: /wiki/Xerox_Star "Xerox Star"
[17]: /wiki/Interpress "Interpress"
[18]: /wiki/San_Francisco_Bay_Area "San Francisco Bay Area"
[19]: /wiki/Utah "Utah"
[20]: /wiki/Martin_Newell_(computer_graphics) "Martin Newell (computer graphics)"
[21]: /wiki/Very-large-scale_integration "Very-large-scale integration"
[22]: /wiki/Chuck_Geschke "Chuck Geschke"
[23]: /wiki/Steve_Jobs "Steve Jobs"
[24]: /wiki/Apple_Computer "Apple Computer"
[25]: /wiki/LaserWriter "LaserWriter"
[26]: /wiki/Interpreter_(computer_software) "Interpreter (computer software)"
[27]: /wiki/Raster_Image_Processor "Raster Image Processor"
[28]: /wiki/Microprocessor "Microprocessor"
[29]: /wiki/Computer_memory "Computer memory"
[30]: /wiki/Motorola_68000 "Motorola 68000"
[31]: /wiki/Portable_Document_Format "Portable Document Format"
[32]: /wiki/De_facto "De facto"
[33]: /wiki/Image_compression "Image compression"
[34]: /wiki/JPEG "JPEG"
[35]: /wiki/Fonts "Fonts"
[36]: /wiki/Color_space "Color space"
[37]: /wiki/Spot_color "Spot color"
[38]: /wiki/ASCII "ASCII"
[39]: /wiki/Glyph "Glyph"
[40]: /wiki/Typewriter "Typewriter"
[41]: /wiki/Dot_matrix_printer "Dot matrix printer"
[42]: /wiki/Typeface "Typeface"
[43]: /wiki/Raster_graphics "Raster graphics"
[44]: /wiki/Escape_sequence "Escape sequence"
[45]: /wiki/Printer_control_language "Printer control language"
[46]: /wiki/Device_driver "Device driver"
[47]: /wiki/Plotter "Plotter"
[48]: /wiki/HPGL "HPGL"
[49]: /wiki/Rasterization "Rasterization"
[50]: /wiki/B%C3%A9zier_curve "Bézier curve"
[51]: /wiki/Computer-aided_design "Computer-aided design"
[52]: /wiki/Line_art "Line art"
[53]: /wiki/Image_resolution "Image resolution"
[54]: /wiki/Typographic "Typographic"
[55]: /wiki/Font_hinting "Font hinting"
[56]: /wiki/Type_1_Font "Type 1 Font"
[57]: /wiki/Type_3_Font "Type 3 Font"
[58]: /wiki/Type_2_font "Type 2 font"
[59]: /wiki/Compact_Font_Format "Compact Font Format"
[60]: /wiki/CFF/Type_2_font "CFF/Type 2 font"
[61]: /wiki/OpenType "OpenType"
[62]: /wiki/CID-keyed_font "CID-keyed font"
[63]: /w/index.php?title=OCF/Type_0_font&action=edit&redlink=1 "OCF/Type 0 font (page does not exist)"
[64]: /wiki/CJK "CJK"
[65]: /wiki/TrueType "TrueType"
[66]: /wiki/Fontographer "Fontographer"
[67]: /wiki/Macromedia "Macromedia"
[68]: /wiki/FontLab "FontLab"
[69]: /wiki/TeX "TeX"
[70]: /wiki/Bitstream_Inc. "Bitstream Inc."
[71]: /wiki/METAFONT "METAFONT"
[72]: /wiki/Raster_image_processor "Raster image processor"
[73]: /wiki/RISC "RISC"
[74]: /wiki/TrueImage "TrueImage"
[75]: /wiki/Outline_font "Outline font"
[76]: /wiki/CSR_plc "CSR plc"
[77]: #cite_note-1
[78]: /wiki/Hewlett-Packard "Hewlett-Packard"
[79]: /wiki/LaserJet "LaserJet"
[80]: #cite_note-2
[81]: /wiki/Harlequin_RIP "Harlequin RIP"
[82]: /wiki/Global_Graphics "Global Graphics"
[83]: /wiki/Free_software "Free software"
[84]: /wiki/Ghostscript "Ghostscript"
[85]: #cite_note-3
[86]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[87]: /wiki/TeleType_Co. "TeleType Co."
[88]: /wiki/Graphical_user_interface "Graphical user interface"
[89]: /wiki/QuickDraw "QuickDraw"
[90]: /wiki/B-spline "B-spline"
[91]: /wiki/NeXT "NeXT"
[92]: /wiki/Display_PostScript "Display PostScript"
[93]: /wiki/C_programming_language "C programming language"
[94]: /wiki/NeXTStep "NeXTStep"
[95]: /wiki/Object_oriented "Object oriented"
[96]: /wiki/Unix_workstation "Unix workstation"
[97]: /wiki/Sun_Microsystems "Sun Microsystems"
[98]: /wiki/NeWS "NeWS"
[99]: /wiki/Data_structure "Data structure"
[100]: /wiki/X11 "X11"
[101]: /wiki/Turing-complete "Turing-complete"
[102]: #cite_note-4
[103]: /wiki/Interpreted_language "Interpreted language"
[104]: /wiki/Stack-oriented_programming_language "Stack-oriented programming language"
[105]: /wiki/Forth_(programming_language) "Forth (programming language)"
[106]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[107]: /w/index.php?title=Scoped_memory&action=edit&redlink=1 "Scoped memory (page does not exist)"
[108]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[109]: /wiki/Reverse_Polish_notation "Reverse Polish notation"
[110]: /wiki/Stack_(data_structure) "Stack (data structure)"
[111]: /wiki/Literal_(computer_science) "Literal (computer science)"
[112]: /wiki/Interpreter_directive "Interpreter directive"
[113]: /wiki/Hello_World_program "Hello World program"
[114]: /wiki/Point_(typography) "Point (typography)"
[115]: /wiki/Single-precision "Single-precision"
[116]: /wiki/Free_On-line_Dictionary_of_Computing "Free On-line Dictionary of Computing"
[117]: /wiki/GNU_Free_Documentation_License "GNU Free Documentation License"