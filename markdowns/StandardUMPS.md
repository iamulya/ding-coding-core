**MUMPS** (_Massachusetts General Hospital Utility Multi-Programming System_), or alternatively **M**, is a general-purpose computer [programming language][0] that provides [ACID][1] (Atomic, Consistent, Isolated, and Durable) transaction processing. Its differentiating feature is its "built-in" database, enabling high-level access to disk storage using simple symbolic program [variables][2] and subscripted [arrays][3], similar to the variables used by most languages to access main memory.

The M database is a [key-value database][4] engine optimized for high-throughput [transaction processing][5]. As such it is in the class of "schema-less", "schema-free," or [NoSQL][6] databases. Internally, M stores data in multidimensional hierarchical [sparse arrays][7] (also known as key-value nodes, sub-trees, or associative memory). Each array may have up to 32 subscripts, or dimensions. A [scalar][2] can be thought of as an array element with zero subscripts. Nodes with varying numbers of subscripts (including one node with no subscripts) can freely co-exist in the same array.

Perhaps the most unusual aspect of the M language is the notion that the database is accessed through variables, rather than queries or retrievals. This means that accessing volatile memory and non-volatile storage use the same basic syntax, enabling a function to work on either local (volatile) or global (non-volatile) variables. Practically, this provides for extremely high performance data access.[\[1\]][8]

Originally designed in 1966 for the healthcare industry, M continues to be used today by many large hospitals and banks to provide high-throughput transaction data processing.

## History

## Genesis

MUMPS was developed by Neil Pappalardo, Robert Greenes, and Curt Marble in Dr. Octo Barnett's animal lab at the [Massachusetts General Hospital][9] (MGH) in [Boston][10] during 1966 and 1967\. The original MUMPS system was, like [Unix][11] a few years later, built on a spare [DEC][12] [PDP-7][13]. Octo Barnett and Neil Pappalardo were also involved with MGH's planning for a Hospital Information System, obtained a [backward compatible][14] [PDP-9][15], and began using MUMPS in the admissions cycle and laboratory test reporting. MUMPS was then an [interpreted language][16], yet even then, incorporated a [hierarchical database][17] file system to standardize interaction with the data.

Some aspects of MUMPS can be traced from [Rand Corporation][18]'s [JOSS][19] through [BBN][20]'s [TELCOMP][21] and [STRINGCOMP][22]. The MUMPS team deliberately chose to include portability between machines as a design goal. Another feature, not widely supported for machines of the era, in [operating systems][23] or in [computer hardware][24], was [multitasking][25], which was also built into the language itself.\[_[citation needed][26]_\]

The portability was soon useful, as MUMPS was shortly adapted to a DEC PDP-15, where it lived for some time. MUMPS was developed with the support of a government research grant, and so MUMPS was released to the public domain (no longer a requirement for grants), and was soon ported to a number of other systems including the popular DEC [PDP-8][27], the [Data General Nova][28] and the DEC [PDP-11][29] and the [Artronix][30] [PC12 minicomputer][31]. Word about MUMPS spread mostly through the medical community, and by the early 1970s was in widespread use, often being locally modified for their own needs.

## 1970s

By the early 1970s, there were many and varied implementations of MUMPS on a range of hardware platforms. The most widespread was DEC's MUMPS-11 on the PDP-11, and [MEDITECH][32]'s [MIIS][33]. In 1972, many MUMPS users attended a conference which standardized the then-fractured language, and created the **MUMPS Users Group** and **MUMPS Development Committee** (MDC) to do so. These efforts proved successful; a standard was complete by 1974, and was approved, on September 15, 1977, as [ANSI][34] standard, X11.1-1977\. At about the same time DEC launched DSM-11 (Digital Standard MUMPS) for the PDP-11\. This quickly dominated the market, and became the reference implementation of the time. Also, [InterSystems][35] sold ISM-11 for the PDP-11 (which was identical to DSM-11).

## 1980s

During the early 1980s several vendors brought MUMPS-based platforms that met the ANSI standard to market. The most significant were:

Other companies developed important MUMPS implementations:

This period also saw considerable MDC activity. The second revision of the ANSI standard for MUMPS (X11.1-1984) was approved on November 15, 1984\.

## 1990s

## 2000s

## Current users of MUMPS applications

The US Department of Veterans Affairs (formerly the Veterans Administration) was one of the earliest major adopters of the MUMPS language. Their development work (and subsequent contributions to the free MUMPS application codebase) was an influence on many medical users worldwide. In 1995, the Veterans Affairs' patient Admission/Tracking/Discharge system, [Decentralized Hospital Computer Program][36] (DHCP) was the recipient of the Computerworld [Smithsonian Award][37] for best use of Information Technology in Medicine. In July 2006, the Department of Veterans Affairs (VA) / Veterans Health Administration (VHA) was the recipient of the Innovations in American Government Award presented by the Ash Institute of the [John F. Kennedy School of Government][38] at [Harvard University][39] for its extension of DHCP into the Veterans Health Information Systems and Technology Architecture ([VistA][40]). Nearly the entire VA hospital system in the United States, the [Indian Health Service][41], and major parts of the [Department of Defense][42] [CHCS][43] hospital system use MUMPS databases for clinical data tracking.

Large companies currently using MUMPS include AmeriPath (part of Quest Diagnostics), Care Centric, [Allscripts][44], [Epic][45], [Coventry Healthcare][46], [EMIS][47], [Partners HealthCare][48] (including Massachusetts General Hospital), [MEDITECH][32], [GE Healthcare][49] (formerly [IDX][50] Systems and [Centricity][51]), and [Sunquest Information Systems][52] (formerly Misys Healthcare[\[8\]][53]). Many reference laboratories, such as DASA, [Quest Diagnostics][54],[\[9\]][55] and Dynacare, use MUMPS software written by or based on Antrim Corporation code. Antrim was purchased by Misys Healthcare (now [Sunquest Information Systems][52]) in 2001\.[\[10\]][56]

MUMPS is widely used in financial applications. MUMPS gained an early following in the financial sector, and MUMPS applications are in use at many banks and credit unions. It is used by [Ameritrade][57], the largest online trading service in the US, with over 12 billion transactions per day, as well as by the [Bank of England][58] and [Barclays Bank][59], among others.[\[11\]][60][\[12\]][61][\[13\]][62]

Since 2005, the use of MUMPS has been either in the form of GT.M or InterSystems Caché. The latter is being aggressively marketed by InterSystems and has had success in penetrating new markets, such as telecommunications, in addition to existing markets. The European Space Agency announced on May 13, 2010 that it will use the [InterSystems Caché][63] database to support the [Gaia mission][64]. This mission aims to map the [Milky Way][65] with unprecedented precision.[\[14\]][66]

## Overview

MUMPS is a language intended for and designed to build database applications. Secondary language features were included to help programmers make applications using minimal computing resources. The original implementations were [interpreted][67], though modern implementations may be fully or partially [compiled][68]. Individual "programs" run in memory ["partitions"][69]. Early MUMPS memory partitions were limited to 2048 bytes so aggressive abbreviation greatly aided multi-programming on severely resource limited hardware, because more than one MUMPS job could fit into the very small memories extant in hardware at the time. The ability to provide multi-user systems was another language design feature. The word "**M**ulti-**P**rogramming" in the acronym points to this. Even the earliest machines running MUMPS supported multiple jobs running at the same time. With the change from mini-computers to micro-computers a few years later, even a "single user PC" with a single 8-bit CPU and 16K or 64K of memory could support multiple users, who could connect to it from (non-[graphical][70]) [video display terminals][71].

Since memory was tight originally, the language design for MUMPS valued very terse code. Thus, every MUMPS command or function name could be abbreviated from one to three letters in length, e.g. Quit (exit program) as Q, $P = $Piece function, R = Read command, $TR = $Translate function. Spaces and end-of-line markers are significant in MUMPS because line scope promoted the same terse language design. Thus, a single line of program code could express, with few characters, an idea for which other programming languages could require 5 to 10 times as many characters. Abbreviation was a common feature of languages designed in this period (e.g., [FOCAL-69][72], early BASICs such as [Tiny BASIC][73], etc.). An unfortunate side effect of this, coupled with the early need to write minimalist code, was that MUMPS programmers routinely did not comment code and used extensive abbreviations. This meant that even an expert MUMPS programmer could not just skim through a page of code to see its function but would have to analyze it line by line.

Database interaction is transparently built into the language. The MUMPS language provides a [hierarchical database][74] made up of [persistent][75] [sparse arrays][7], which is implicitly "opened" for every MUMPS application. All variable names prefixed with the caret character ("^") use permanent (instead of RAM) storage, will maintain their values after the application exits, and will be visible to (and modifiable by) other running applications. Variables using this shared and permanent storage are called _Globals_ in MUMPS, because the scoping of these variables is "globally available" to all jobs on the system. The more recent and more common use of the name "global variables" in other languages is a more limited scoping of names, coming from the fact that [unscoped variables][76] are "globally" available to any programs running in the same process, but not shared among multiple processes. The MUMPS Storage mode (i.e. Globals stored as persistent sparse arrays), gives the MUMPS database the characteristics of a [document-oriented database][77].[\[15\]][78]

All variable names which are not prefixed with caret character ("^") are temporary and private. Like global variables, they also have a hierarchical storage model, but are only "locally available" to a single job, thus they are called "locals". Both "globals" and "locals" can have child nodes (called _subscripts_ in MUMPS terminology). Subscripts are not limited to numerals---any [ASCII][79] character or group of characters can be a subscript identifier. While this is not uncommon for modern languages such as Perl or JavaScript, it was a highly unusual feature in the late 1970s. This capability was not universally implemented in MUMPS systems before the 1984 ANSI standard, as only canonically numeric subscripts were required by the standard to be allowed.[\[16\]][80] Thus, the variable named 'Car' can have subscripts "Door", "Steering Wheel" and "Engine", each of which can contain a value and have subscripts of their own. The variable ^Car("Door") could have a nested variable subscript of "Color" for example. Thus, you could say

to modify a nested child node of ^Car. In MUMPS terms, "Color" is the 2nd subscript of the variable ^Car (both the names of the child-nodes and the child-nodes themselves are likewise called subscripts). Hierarchical variables are similar to objects with properties in many [object oriented][81] languages. Additionally, the MUMPS language design requires that all subscripts of variables are automatically kept in sorted order. Numeric subscripts (including floating-point numbers) are stored from lowest to highest. All non-numeric subscripts are stored in alphabetical order following the numbers. In MUMPS terminology, this is _canonical order_. By using only non-negative integer subscripts, the MUMPS programmer can emulate the [arrays][82] data type from other languages. Although MUMPS does not natively offer a full set of [DBMS][83] features such as mandatory schemas, several DBMS systems have been built on top of it that provide application developers with flat-file, relational and network database features.

Additionally, there are built-in operators which treat a delimited string (e.g., [comma-separated values][84]) as an array. Early MUMPS programmers would often store a structure of related information as a delimited string, parsing it after it was read in; this saved disk access time and offered considerable speed advantages on some hardware.

MUMPS has no data types. Numbers can be treated as strings of digits, or strings can be treated as numbers by numeric operators (_coerced_, in MUMPS terminology). Coercion can have some odd side effects, however. For example, when a string is coerced, the parser turns as much of the string (starting from the left) into a number as it can, then discards the rest. Thus the statement `IF 20<"30 DUCKS"` is evaluated as `TRUE` in MUMPS.

Other features of the language are intended to help MUMPS applications interact with each other in a multi-user environment. Database locks, process identifiers, and [atomicity][85] of database update transactions are all required of standard MUMPS implementations.

In contrast to languages in the C or [Wirth][86] traditions, some space characters between MUMPS statements are significant. A single space separates a command from its argument, and a space, or newline, separates each argument from the next MUMPS token. Commands which take no arguments (e.g., `ELSE`) require two following spaces. The concept is that one space separates the command from the (nonexistent) argument, the next separates the "argument" from the next command. Newlines are also significant; an `IF`, `ELSE` or `FOR` command processes (or skips) everything else till the end-of-line. To make those statements control multiple lines, you must use the `DO` command to create a code block.

## "Hello, World!" example

A simple [Hello world program][87] in MUMPS might be:

and would be run from the MUMPS command line with the command `do ^hello`. Since MUMPS allows commands to be strung together on the same line, and since commands can be abbreviated to a single letter, this routine could be made more compact:

The '`,!`' after the text generates a newline.

## Summary of key language features

ANSI X11.1-1995 gives a complete, formal description of the language; an annotated version of this standard is available online.[\[17\]][88]

**Data types**: There is one universal [datatype][89], which is implicitly [coerced][90] to string, integer, or floating-point datatypes as context requires.

**Booleans** (called _truthvalues_ in MUMPS): In IF commands and other syntax that has expressions evaluated as conditions, any string value is evaluated as a numeric value, and if that is a nonzero value, then it is interpreted as True. `a<b` yields 1 if a is less than b, 0 otherwise.

**Declarations**: None. All variables are dynamically created at the first time a value is assigned.

**Lines**: are important syntactic entities, unlike their status in languages patterned on C or Pascal. Multiple statements per line are allowed and are common. The scope of any IF, ELSE, and FOR command is "the remainder of current line."

**Case sensitivity**: Commands and intrinsic functions are case-insensitive. In contrast, variable names and labels are case-sensitive. There is no special meaning for upper vs. lower-case and few widely followed conventions. The percent sign (%) is legal as first character of variables and labels.

**Postconditionals**: execution of almost any command can be controlled by following it with a colon and a truthvalue expression. `SET:N<10 A="FOO"` sets A to "FOO" if N is less than 10; `DO:N>100 PRINTERR,` performs PRINTERR if N is greater than 100\. This construct provides a conditional whose scope is less than a full line.

**Abbreviation**: You can abbreviate nearly all commands and native functions to one, two, or three characters.

**Reserved words**: None. Since MUMPS interprets source code by context, there is no need for reserved words. You may use the names of language commands as variables. There has been no contest such as the [International Obfuscated C Code Contest][91] for MUMPS, despite the potential of examples such as the following, perfectly legal, MUMPS code:

MUMPS can be made more obfuscated by using the contracted operator syntax, as shown in this terse example derived from the example above:

**Arrays**: are created dynamically, stored as [B-trees][92], are sparse (i.e. use almost no space for missing nodes), can use any number of subscripts, and subscripts can be strings or numeric (including floating point). Arrays are always automatically stored in sorted order, so there is never any occasion to sort, pack, reorder, or otherwise reorganize the database. Built in functions such as $DATA, $ORDER, $NEXT(deprecated) and $QUERY functions provide efficient examination and traversal of the fundamental array structure, on disk or in memory.

**Local arrays**: variable names not beginning with caret (i.e. "^") are stored in memory by process, are private to the creating process, and expire when the creating process terminates. The available storage depends on implementation. For those implementations using partitions, it is limited to the partition size, (A small partition might be 32K). For other implementations, it may be several megabytes.

**Global arrays**: `^abc, ^def`. These are stored on disk, are available to all processes, and are persistent when the creating process terminates. Very large globals (for example, hundreds of gigabytes) are practical and efficient in most implementations. This is MUMPS' main "database" mechanism. It is used instead of calling on the operating system to create, write, and read files.

**Indirection**: in many contexts, `@VBL` can be used, and effectively substitutes the contents of VBL into another MUMPS statement. `SET XYZ="ABC" SET @XYZ=123` sets the variable ABC to 123\. `SET SUBROU="REPORT" DO @SUBROU` performs the subroutine named REPORT. This substitution allows for [lazy evaluation][93] and late binding as well as effectively the operational equivalent of "pointers" in other languages.

**Piece function**: This breaks variables into segmented pieces guided by a user specified separator string (sometimes called a "delimiter"). Those who know [awk][94] will find this familiar. `$PIECE(STRINGVAR,"^",3)` means the "third caret-separated piece of STRINGVAR." The piece function can also appear as an assignment (SET command) target.

`$PIECE("world.std.com",".",2)` yields "std".

After

`SET $P(X,"@",1)="office"` causes X to become "office@world.std.com" (note that $P is equivalent to $PIECE and could be written as such).

**Order function**: This function treats its input as a structure, and finds the next index that exists which has the same structure except for the last subscript. It returns the sorted value that is ordered after the one given as input. (This treats the array reference as a content-addressable data rather than an address of a value)

`$Order(stuff(""))` yields 6, `$Order(stuff(6))` yields 10, `$Order(stuff(8))` yields 10, `$Order(stuff(10))` yields 15, `$Order(stuff(15))` yields "".

Here, the argument-less _For_ repeats until stopped by a terminating _Quit_. This line prints a table of i and stuff(i) where i is successively 6, 10, and 15\.

For iterating the database, the Order function returns the next key to use.

**Multi-User/Multi-Tasking/Multi-Processor**: MUMPS supports multiple simultaneous users and processes even when the underlying operating system does not (e.g., MS-DOS). Additionally, there is the ability to specify an environment for a variable, such as by specifying a machine name in a variable (as in `SET ^|"DENVER"|A(1000)="Foo"`), which can allow you to access data on remote machines.

## "MUMPS" vs. "M" naming debate

All of the following positions can be, and have been, supported by knowledgeable people at various times:

Some of the contention arose in response to strong M advocacy on the part of one commercial interest, InterSystems, whose chief executive disliked the name MUMPS and felt that it represented a serious marketing obstacle. Thus, favoring M to some extent became identified as alignment with InterSystems. The dispute also reflected rivalry between organizations (the M Technology Association, the MUMPS Development Committee, the ANSI and ISO Standards Committees) as to who determines the "official" name of the language. Some writers have attempted to defuse the issue by referring to the language as _M\[UMPS\]_, square brackets being the customary notation for optional syntax elements. A leading authority, and the author of an open source MUMPS implementation, Professor Kevin O'Kane, uses only 'MUMPS'.

The most recent standard (ISO/IEC 11756:1999, re-affirmed on 25 June 2010), still mentions both M and MUMPS as officially accepted names.

## Intellectual Property and Trademark Registration Status

Massachusetts General Hospital registered "MUMPS" as a trademark with the USPTO on November 28, 1971, renewed on November 16, 1992, and expired on August 30, 2003\.[\[18\]][95]

## See also

## References

## Further reading

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/ACID "ACID"
[2]: /wiki/Variable_(computer_science) "Variable (computer science)"
[3]: /wiki/Array_data_structure "Array data structure"
[4]: /wiki/Key-value_database "Key-value database"
[5]: /wiki/Transaction_processing "Transaction processing"
[6]: /wiki/NoSQL_(concept) "NoSQL (concept)"
[7]: /wiki/Sparse_array "Sparse array"
[8]: #cite_note-1
[9]: /wiki/Massachusetts_General_Hospital "Massachusetts General Hospital"
[10]: /wiki/Boston "Boston"
[11]: /wiki/Unix "Unix"
[12]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[13]: /wiki/PDP-7 "PDP-7"
[14]: /wiki/Backward_compatible "Backward compatible"
[15]: /wiki/Programmed_Data_Processor "Programmed Data Processor"
[16]: /wiki/Interpreted_language "Interpreted language"
[17]: /wiki/Hierarchical_database "Hierarchical database"
[18]: /wiki/Rand_Corporation "Rand Corporation"
[19]: /wiki/JOSS "JOSS"
[20]: /wiki/BBN_Technologies "BBN Technologies"
[21]: /wiki/TELCOMP "TELCOMP"
[22]: /wiki/STRINGCOMP "STRINGCOMP"
[23]: /wiki/Operating_system "Operating system"
[24]: /wiki/Computer_hardware "Computer hardware"
[25]: /wiki/Computer_multitasking "Computer multitasking"
[26]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[27]: /wiki/PDP-8 "PDP-8"
[28]: /wiki/Data_General_Nova "Data General Nova"
[29]: /wiki/PDP-11 "PDP-11"
[30]: /wiki/Artronix "Artronix"
[31]: /wiki/PC12_minicomputer "PC12 minicomputer"
[32]: /wiki/MEDITECH "MEDITECH"
[33]: /wiki/MIIS_(programming_language) "MIIS (programming language)"
[34]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[35]: /wiki/InterSystems "InterSystems"
[36]: /wiki/Decentralized_Hospital_Computer_Program "Decentralized Hospital Computer Program"
[37]: /wiki/Smithsonian_Award "Smithsonian Award"
[38]: /wiki/John_F._Kennedy_School_of_Government "John F. Kennedy School of Government"
[39]: /wiki/Harvard_University "Harvard University"
[40]: /wiki/VistA "VistA"
[41]: /wiki/Indian_Health_Service "Indian Health Service"
[42]: /wiki/United_States_Department_of_Defense "United States Department of Defense"
[43]: /wiki/CHCS "CHCS"
[44]: /wiki/Allscripts "Allscripts"
[45]: /wiki/Epic_Systems "Epic Systems"
[46]: /w/index.php?title=Coventry_Healthcare&action=edit&redlink=1 "Coventry Healthcare (page does not exist)"
[47]: /wiki/EMIS_Health "EMIS Health"
[48]: /wiki/Partners_HealthCare "Partners HealthCare"
[49]: /wiki/GE_Healthcare "GE Healthcare"
[50]: /wiki/IDX_Systems_Corporation "IDX Systems Corporation"
[51]: /wiki/Centricity "Centricity"
[52]: /wiki/Sunquest_Information_Systems "Sunquest Information Systems"
[53]: #cite_note-8
[54]: /wiki/Quest_Diagnostics "Quest Diagnostics"
[55]: #cite_note-9
[56]: #cite_note-10
[57]: /wiki/Ameritrade "Ameritrade"
[58]: /wiki/Bank_of_England "Bank of England"
[59]: /wiki/Barclays_Bank "Barclays Bank"
[60]: #cite_note-11
[61]: #cite_note-12
[62]: #cite_note-13
[63]: /wiki/InterSystems_Cach%C3%A9 "InterSystems Caché"
[64]: /wiki/Gaia_mission "Gaia mission"
[65]: /wiki/Milky_Way "Milky Way"
[66]: #cite_note-14
[67]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[68]: /wiki/Compiler "Compiler"
[69]: /wiki/Memory_management_(operating_systems)#Partitioned_allocation "Memory management (operating systems)"
[70]: /wiki/GUI "GUI"
[71]: /wiki/Computer_terminal "Computer terminal"
[72]: /wiki/FOCAL-69 "FOCAL-69"
[73]: /wiki/Tiny_BASIC "Tiny BASIC"
[74]: /wiki/Hierarchical_database_model "Hierarchical database model"
[75]: /wiki/Persistence_(computer_science) "Persistence (computer science)"
[76]: /wiki/Variable_scoping "Variable scoping"
[77]: /wiki/Document-oriented_database "Document-oriented database"
[78]: #cite_note-15
[79]: /wiki/ASCII "ASCII"
[80]: #cite_note-16
[81]: /wiki/Object-oriented_programming "Object-oriented programming"
[82]: /wiki/Array_data_type "Array data type"
[83]: /wiki/Database_Management_System "Database Management System"
[84]: /wiki/Comma-separated_values "Comma-separated values"
[85]: /wiki/Atomicity_(database_systems) "Atomicity (database systems)"
[86]: /wiki/Niklaus_Wirth#Programming_languages "Niklaus Wirth"
[87]: /wiki/Hello_world_program "Hello world program"
[88]: #cite_note-17
[89]: /wiki/Datatype "Datatype"
[90]: /wiki/Type_conversion "Type conversion"
[91]: /wiki/International_Obfuscated_C_Code_Contest "International Obfuscated C Code Contest"
[92]: /wiki/B-trees "B-trees"
[93]: /wiki/Lazy_evaluation "Lazy evaluation"
[94]: /wiki/Awk "Awk"
[95]: #cite_note-18