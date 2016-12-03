**CORAL** (**C**omputer **O**n-line **R**eal-time **A**pplications **L**anguage) is a [programming language][0] originally developed in 1964 at the [Royal Radar Establishment][1] (RRE), [Malvern][2], [UK][3], as a [subset][4] of [JOVIAL][5]. Coral 66 was subsequently developed by I. F. Currie and M. Griffiths under the auspices of **IECCA** (**I**nter-**E**stablishment **C**ommittee for **C**omputer **A**pplications). Its official definition,[\[1\]][6] edited by [Woodward][7], Wetherall and Gorman, was first published in 1970\.

## Overview

Coral 66 is a general-purpose programming language based on [ALGOL 60][8], with some features from Coral 64, [JOVIAL][5], and [FORTRAN][9]. It includes structured record types (as in [Pascal][10]) and supports the packing of data into limited storage (also as in Pascal). Like [Edinburgh IMP][11] it allows embedded assembler, and also offers good run-time checking and diagnostics. It is specifically intended for [real-time][12] and embedded applications and for use on computers with limited processing power, including those limited to [fixed point arithmetic][13] and those without support for dynamic storage allocation.

The language was an inter-service standard for British military programming, and was also widely adopted for civil purposes in the British control and automation industry. It was used to write software for both the [Ferranti][14] and [GEC][15] computers from 1971 onwards. Implementations also exist for the Interdata 8/32, [PDP-11][16], [VAX][17], [Alpha][18] platforms and [HP Integrity][19] servers; for the [Honeywell][20], and for the Computer Technology Limited (CTL, later ITL) [Modular-1][21]; as well as for [SPARC][22] running [Solaris][23] and [Intel][24] running [Linux][25].

A variant of Coral 66 was developed during the late 1970s/early 1980s by the British [GPO][26], in conjunction with [GEC][27], STC and [Plessey][28], for use on the [System X][29] digital telephone exchange control computers, known as PO-CORAL. This was later renamed BT-CORAL when [British Telecom][30] was spun off from the Post Office. Unique features of this language were the focus on real-time execution, message processing, limits on statement execution between waiting for input, and a prohibition on recursion to remove the need for a stack.

As Coral was aimed at a variety of real-time work, rather than general office DP, there was no standardised equivalent to a [stdio][31] library. IECCA recommended a primitive I/O package to accompany any compiler (in a document titled _Input/Output of Character data in Coral 66 Utility Programs_). Most implementers avoided this by producing Coral interfaces to existing Fortran and, later, C libraries.

Perhaps CORAL's most significant contribution to computing was the enforcement of quality control in commercial compilers. To have a CORAL compiler approved by IECCA, and thus allowing a compiler to be marketed as a CORAL 66 compiler, the candidate compiler had to compile and execute an official suite of 25 test programs and 6 benchmark programs. The process was part of the BS5905 approval process. This methodology was observed and adapted later by DoD for the official certification of Ada compilers.

Source code for a Coral 66 compiler (written in [BCPL][32]) has been recovered and the "Official Definition of Coral 66" document by [HMSO][33] has been scanned; the Ministry of Defence patent office has issued a licence to the Edinburgh Computer History project to allow them to put both the code and the language reference online for non-commercial use.

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Royal_Radar_Establishment "Royal Radar Establishment"
[2]: /wiki/Malvern,_Worcestershire "Malvern, Worcestershire"
[3]: /wiki/United_Kingdom "United Kingdom"
[4]: /wiki/Subset "Subset"
[5]: /wiki/JOVIAL "JOVIAL"
[6]: #cite_note-1
[7]: /wiki/Philip_Woodward "Philip Woodward"
[8]: /wiki/ALGOL_60 "ALGOL 60"
[9]: /wiki/Fortran "Fortran"
[10]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[11]: /wiki/Edinburgh_IMP "Edinburgh IMP"
[12]: /wiki/Real-time_computing "Real-time computing"
[13]: /wiki/Fixed_point_arithmetic "Fixed point arithmetic"
[14]: /wiki/Ferranti "Ferranti"
[15]: /wiki/The_General_Electric_Company "The General Electric Company"
[16]: /wiki/PDP-11 "PDP-11"
[17]: /wiki/VAX "VAX"
[18]: /wiki/DEC_Alpha "DEC Alpha"
[19]: /wiki/HP_Integrity "HP Integrity"
[20]: /wiki/Honeywell "Honeywell"
[21]: /wiki/Information_Technology_Limited#The_Modular_One "Information Technology Limited"
[22]: /wiki/SPARC "SPARC"
[23]: /wiki/Solaris_(operating_system) "Solaris (operating system)"
[24]: /wiki/Intel "Intel"
[25]: /wiki/Linux "Linux"
[26]: /wiki/General_Post_Office "General Post Office"
[27]: /wiki/General_Electric_Company_plc "General Electric Company plc"
[28]: /wiki/Plessey "Plessey"
[29]: /wiki/System_X_(telephony) "System X (telephony)"
[30]: /wiki/British_Telecom "British Telecom"
[31]: /wiki/Stdio "Stdio"
[32]: /wiki/BCPL "BCPL"
[33]: /wiki/Office_of_Public_Sector_Information "Office of Public Sector Information"