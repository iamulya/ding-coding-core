**RPG II** is a very early and popular version of the [IBM RPG][0] programming language.

It was developed in the late 1960s and designed to work on the smallest IBM systems of the time such as the [IBM 1130][1], [IBM][2] [System/3][3], [System/32][4], [System/34][5], [System/36][6]. It was however also available for the [System/370][7], The [Singer System 10][8], Univac 90/25, 90/30, 90/40 and the [Wang VS][9] Series. [ICL][10] produced versions for its [ICL 2903][11] system and for [VME/K][12]; and [Burroughs Corporation][13] produced an RPG II compiler with database extensions for its [B1700][14] series of computers.

It has a number of unusual features, including: an implied processing loop; and that it is a fixed-format programming language, so that programs are difficult to read without a special debugging template.[\[1\]][15]

## Features

RPG II is a fixed-format programming language, which means that code must be placed in exact column locations in order to generate correct results. There are eight different specification types, and separate coding forms are used to write each, and a special debugging template[\[1\]][15] used as an aid to read program printouts.

Every RPG II program executes within an implied loop, the [program cycle][16], which applies the program successively to every record of a file - this is documented via a "Logic Flow" diagram on the debugging template.[\[1\]][15] Each record (individual punched card) would be compared to each line in the program, which would act upon the record, or not, based upon whether that line had an "indicator" turned "on" or "off" --- from a set of logical variables numbered 01--99 for user-defined purposes, or other smaller sets based upon record, field, or report processing functions. Special variables such as UDATE, UYEAR, PAGE, and so forth, are filled when the program begins or when page overflow occurs, even though there is no explicit instruction for these activities. Total calculations and output are done at "total time," after the detail cycle when L1/LR has been set on by fixed logic.

The concept of RPG's program cycle fitted neatly with a cyclical machine that read cards, summarised their contents and prints a result, rather like a [tabulating machine][17]. The language was extended to handle other input and output devices and provides a fast and efficient method of programming.

Devices such as the workstation (WORKSTN), the keyboard (KEYBORD), or the console (CONSOLE) do not have a fixed number of records at the beginning of the job and therefore, in order to incorporate the fixed-logic RPG "Last Record" cycle, the LR indicator can be set on with a SETON instruction. LR cannot be set off.

RPG II did not evolve much from the 1977 implementation on the System/34 to 2000 when the [Advanced/36][18] was discontinued from marketing. Changes that were made from the 1970s version included the IFEQ/IFNE/IFGT/IFGE/IFLT/IFLE and END grouping. Also, the call/parm to be able to call external subroutines. Another change was that for internal subroutines, you no longer had to put SR in columns 7 and 8 of the C (calculation) specs.

Third-party providers sold more than 200 different assembler subroutines that could be used by System/36 and Advanced/36 programmers to exceed RPG II limitations. Some of the limitations of RPGII on the System/3, 32, 34 and 36 including the Advanced/36 was the 64K limit and the number of files you could have in a program. So if you had a lot of programming lines or had large arrays, it was easy to exceed the 64,000 bytes of object code. However, RPGII running on the as/400 and its follow on iseries and IBM I (those running os/400 or i5/OS in what is called S/36EE (execution environment)) those limits (the 64K bytes and the number of files) were either greatly expanded or removed.

## RPGII specifications

In the popular [System/36][6] implementation of RPG II, there are 8 different specification types:

_Operation codes_ appear in columns 28--32 of an RPG-II calculation specification.

CHAIN retrieves the record in the indexed file named in Factor 2 that matches the exact key specified by the value in Factor 1\.

SETLL causes the index pointer for the file named in Factor 2 to be positioned at the location specified by the value in Factor 1\.

SORTA causes the named array to be sorted in place; that is, the elements appear in order.

Z-SUB calculates Factor 2 with opposite sign and moved to result field.

XFOOT causes an array to be summed and the result moved to result field.

MVR must follow a DIV operation. The integer remainder of the DIV operation is placed in the result field. MVR following the DIV operation for "56 divided by 3" would place the value 2 in the result field.

## Indicators

Indicators are either 'set' or not - so they are effectively a built-in series of ["flags"][19] or [boolean data types][20].

## Sample code

## References

## External links

[0]: /wiki/IBM_RPG "IBM RPG"
[1]: /wiki/IBM_1130 "IBM 1130"
[2]: /wiki/IBM "IBM"
[3]: /wiki/System/3 "System/3"
[4]: /wiki/System/32 "System/32"
[5]: /wiki/System/34 "System/34"
[6]: /wiki/System/36 "System/36"
[7]: /wiki/System/370 "System/370"
[8]: /wiki/Singer_System_10 "Singer System 10"
[9]: /wiki/Wang_VS "Wang VS"
[10]: /wiki/International_Computers_Limited "International Computers Limited"
[11]: /wiki/ICT_1900_series "ICT 1900 series"
[12]: /wiki/ICL_VME "ICL VME"
[13]: /wiki/Burroughs_Corporation "Burroughs Corporation"
[14]: /wiki/Burroughs_B1700 "Burroughs B1700"
[15]: #cite_note-template-1
[16]: /wiki/Main_loop "Main loop"
[17]: /wiki/Tabulating_machine "Tabulating machine"
[18]: /wiki/Advanced/36 "Advanced/36"
[19]: /wiki/Flag_(computing) "Flag (computing)"
[20]: /wiki/Boolean_data_type "Boolean data type"