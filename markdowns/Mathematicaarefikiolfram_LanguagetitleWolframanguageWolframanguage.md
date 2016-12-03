**Wolfram Mathematica** (sometimes referred to as **Mathematica**) is a [symbolic mathematical computation][0] program, sometimes called a [computer algebra program][1], used in many scientific, engineering, mathematical, and computing fields. It was conceived by [Stephen Wolfram][2] and is developed by [Wolfram Research][3] of [Champaign, Illinois][4].[\[7\]][5][\[8\]][6] The [Wolfram Language][7] is the programming language used in Mathematica.[\[9\]][8]

## Features

Features of Wolfram Mathematica include:[\[10\]][9]

## The Notebook Interface

Wolfram Mathematica is split into two parts, the [kernel][10] and the [front end][11]. The kernel interprets expressions (Wolfram Language code) and returns result expressions.

The front end, designed by [Theodore Gray][12][\[15\]][13] in 1988, provides a [GUI][14], which allows the creation and editing of [Notebook documents][15][\[16\]][16] containing program code with [prettyprinting][17], formatted text together with results including [typeset mathematics][18], graphics, GUI components, tables, and sounds. All content and formatting can be generated algorithmically or edited interactively. Standard word processing capabilities are supported, including real-time multi-lingual spell-checking.

Documents can be structured using a hierarchy of cells, which allow for outlining and sectioning of a document and support automatic numbering index creation. Documents can be presented in a slideshow environment for presentations. Notebooks and their contents are represented as Mathematica expressions that can be created, modified or analyzed by Mathematica programs or converted to other formats.

The front end includes development tools such as a debugger, input completion and automatic syntax coloring.

Among the alternative front ends is the Wolfram Workbench, an [Eclipse][19] based [IDE][20], introduced in 2006\. It provides project-based code development tools for Mathematica, including revision management, debugging, profiling, and testing.[\[17\]][21] There is a plugin for [IntelliJ IDEA][22] based IDEs to work with Wolfram Language code which in addition to syntax highlighting can analyse and auto-complete local variables and defined functions.[\[18\]][23] The Mathematica Kernel also includes a command line front end.[\[19\]][24] Other interfaces include JMath,[\[20\]][25] based on [GNU readline][26] and MASH[\[21\]][27] which runs self-contained Mathematica programs (with arguments) from the UNIX command line.

## High-performance computing

In recent years, the capabilities for [high-performance computing][28] have been extended with the introduction of [packed arrays][29] (version 4, 1999)[\[22\]][30] and [sparse matrices][31] (version 5, 2003),[\[23\]][32] and by adopting the [GNU Multi-Precision Library][33] to evaluate high-precision arithmetic.

Version 5.2 (2005) added automatic [multi-threading][34] when computations are performed on [multi-core][35] computers.[\[24\]][36] This release included CPU specific optimized libraries. In addition Mathematica is supported by third party specialist acceleration hardware such as [ClearSpeed][37].[\[25\]][38]

In 2002, [gridMathematica][39] was introduced to allow user level [parallel programming][40] on heterogeneous clusters and multiprocessor systems[\[26\]][41] and in 2008 parallel computing technology was included in all Mathematica licenses including support for grid technology such as [Windows HPC Server 2008][42], [Microsoft Compute Cluster Server][43] and [Sun Grid][44].

Support for [CUDA][45] and [OpenCL][46] [GPU][47] hardware was added in 2010\. Also, since version 8 it can generate [C][48] code, which is automatically compiled by a system C compiler, such as [GCC][49] or [Microsoft Visual Studio][50].

## Deployment

There are several ways to deploy applications written in Wolfram Mathematica:

## Connections with other applications

Communication with other applications occurs through a protocol called [WSTP][51]. It allows communication between the Wolfram Mathematica kernel and front-end, and also provides a general interface between the kernel and other applications. Wolfram Research freely distributes a developer kit for linking applications written in the [C programming language][48] to the Mathematica kernel through _WSTP_. Using _J/Link_.,[\[29\]][52] a [Java][53] program can ask Mathematica to perform computations; likewise, a Mathematica program can load Java [classes][54], manipulate Java objects and perform method calls. Similar functionality is achieved with _.NET /Link_,[\[30\]][55] but with [.NET][56] programs instead of Java programs. Other languages that connect to Mathematica include [Haskell][57],[\[31\]][58] [AppleScript][59],[\[32\]][60] [Racket][61],[\[33\]][62] [Visual Basic][63],[\[34\]][64] [Python][65][\[35\]][66][\[36\]][67] and [Clojure][68].[\[37\]][69]

Links are available to many mathematical software packages including [OpenOffice.org Calc][70],[\[38\]][71] [Microsoft Excel][72],[\[39\]][73] [MATLAB][74],[\[40\]][75][\[41\]][76][\[42\]][77] [R][78],[\[43\]][79] [SageMath][80],[\[44\]][81][\[45\]][82] [SINGULAR][83],[\[46\]][84] [Wolfram SystemModeler][85], and [Origin][86].[\[47\]][87] Mathematical equations can be exchanged with other computational or typesetting software via [MathML][88].

Communication with [SQL][89] databases is achieved through built-in support for [JDBC][90].[\[48\]][91] Mathematica can also install [web services][92] from a [WSDL][93] description.[\[49\]][94][\[50\]][95] It can access HDFS data via [Hadoop][96].[\[51\]][97]

Mathematica can capture real-time data via a link to [LabVIEW][98],[\[52\]][99] from financial data feeds[\[53\]][100] and directly from hardware devices via GPIB (IEEE 488),[\[54\]][101] [USB][102][\[55\]][103] and serial interfaces.[\[56\]][104] It automatically detects and reads from [HID][105] devices.

## Computable data

Wolfram Mathematica includes collections of curated data provided for use in computations. Mathematica is also integrated with [Wolfram Alpha][106], an online service which provides additional data, some of which is kept updated in real time. Some of the data sets include astronomical, chemical, geopolitical, language, biomedical and weather data, in addition to mathematical data (such as knots and polyhedra).[\[57\]][107]

## Version history

Wolfram Mathematica built on the ideas in Cole and Wolfram's earlier [Symbolic Manipulation Program][108] (SMP).[\[58\]][109][\[59\]][110] The name of the program "Mathematica" was suggested to Stephen Wolfram by Apple co-founder [Steve Jobs][111] although Stephen Wolfram had thought about it earlier and rejected it.[\[60\]][112]

[Wolfram Research][3] has released the following versions of Mathematica:[\[61\]][113]

  
## See also

## References

## External links

Wolfram Research has published a series of hands-on starter webcasts that introduce the user interface and the engine.[\[1\]][114]

[0]: /wiki/Symbolic_computation "Symbolic computation"
[1]: /wiki/Computer_algebra_system "Computer algebra system"
[2]: /wiki/Stephen_Wolfram "Stephen Wolfram"
[3]: /wiki/Wolfram_Research "Wolfram Research"
[4]: /wiki/Champaign,_Illinois "Champaign, Illinois"
[5]: #cite_note-7
[6]: #cite_note-8
[7]: /wiki/Wolfram_Language "Wolfram Language"
[8]: #cite_note-9
[9]: #cite_note-10
[10]: /wiki/Kernel_(computer_science) "Kernel (computer science)"
[11]: /wiki/Front_and_back_ends "Front and back ends"
[12]: /wiki/Theodore_Gray "Theodore Gray"
[13]: #cite_note-15
[14]: /wiki/GUI "GUI"
[15]: /wiki/Notebook_interface "Notebook interface"
[16]: #cite_note-16
[17]: /wiki/Prettyprint "Prettyprint"
[18]: /wiki/Formula_editor "Formula editor"
[19]: /wiki/Eclipse_(software) "Eclipse (software)"
[20]: /wiki/Integrated_development_environment "Integrated development environment"
[21]: #cite_note-17
[22]: /wiki/IntelliJ_IDEA "IntelliJ IDEA"
[23]: #cite_note-18
[24]: #cite_note-19
[25]: #cite_note-20
[26]: /wiki/GNU_readline "GNU readline"
[27]: #cite_note-21
[28]: /wiki/High-performance_computing "High-performance computing"
[29]: /wiki/Packed_array "Packed array"
[30]: #cite_note-22
[31]: /wiki/Sparse_matrix "Sparse matrix"
[32]: #cite_note-23
[33]: /wiki/GNU_Multi-Precision_Library "GNU Multi-Precision Library"
[34]: /wiki/Thread_(computer_science) "Thread (computer science)"
[35]: /wiki/Multi-core "Multi-core"
[36]: #cite_note-24
[37]: /wiki/ClearSpeed "ClearSpeed"
[38]: #cite_note-25
[39]: /wiki/GridMathematica "GridMathematica"
[40]: /wiki/Parallel_computing "Parallel computing"
[41]: #cite_note-26
[42]: /wiki/Windows_HPC_Server_2008 "Windows HPC Server 2008"
[43]: /wiki/Windows_Server_2003 "Windows Server 2003"
[44]: /wiki/Sun_Grid "Sun Grid"
[45]: /wiki/CUDA "CUDA"
[46]: /wiki/OpenCL "OpenCL"
[47]: /wiki/GPU "GPU"
[48]: /wiki/C_(programming_language) "C (programming language)"
[49]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[50]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[51]: https://www.wolfram.com/wstp/
[52]: #cite_note-macworld.com-29
[53]: /wiki/Java_(programming_language) "Java (programming language)"
[54]: /wiki/Class_(computer_science) "Class (computer science)"
[55]: #cite_note-30
[56]: /wiki/.NET_Framework ".NET Framework"
[57]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[58]: #cite_note-31
[59]: /wiki/AppleScript "AppleScript"
[60]: #cite_note-32
[61]: /wiki/Racket_(programming_language) "Racket (programming language)"
[62]: #cite_note-33
[63]: /wiki/Visual_Basic "Visual Basic"
[64]: #cite_note-34
[65]: /wiki/Python_(programming_language) "Python (programming language)"
[66]: #cite_note-35
[67]: #cite_note-36
[68]: /wiki/Clojure "Clojure"
[69]: #cite_note-37
[70]: /wiki/OpenOffice.org_Calc "OpenOffice.org Calc"
[71]: #cite_note-38
[72]: /wiki/Microsoft_Excel "Microsoft Excel"
[73]: #cite_note-39
[74]: /wiki/MATLAB "MATLAB"
[75]: #cite_note-40
[76]: #cite_note-41
[77]: #cite_note-42
[78]: /wiki/R_Statistics "R Statistics"
[79]: #cite_note-43
[80]: /wiki/SageMath "SageMath"
[81]: #cite_note-44
[82]: #cite_note-45
[83]: /wiki/Singular_(software) "Singular (software)"
[84]: #cite_note-46
[85]: /wiki/Wolfram_SystemModeler "Wolfram SystemModeler"
[86]: /wiki/Origin_(software) "Origin (software)"
[87]: #cite_note-47
[88]: /wiki/MathML "MathML"
[89]: /wiki/SQL "SQL"
[90]: /wiki/JDBC "JDBC"
[91]: #cite_note-48
[92]: /wiki/Web_services "Web services"
[93]: /wiki/Web_Services_Description_Language "Web Services Description Language"
[94]: #cite_note-49
[95]: #cite_note-50
[96]: /wiki/Apache_Hadoop "Apache Hadoop"
[97]: #cite_note-51
[98]: /wiki/LabVIEW "LabVIEW"
[99]: #cite_note-52
[100]: #cite_note-53
[101]: #cite_note-54
[102]: /wiki/USB "USB"
[103]: #cite_note-55
[104]: #cite_note-56
[105]: /wiki/Human_interface_device "Human interface device"
[106]: /wiki/Wolfram_Alpha "Wolfram Alpha"
[107]: #cite_note-57
[108]: /wiki/Symbolic_Manipulation_Program "Symbolic Manipulation Program"
[109]: #cite_note-58
[110]: #cite_note-59
[111]: /wiki/Steve_Jobs "Steve Jobs"
[112]: #cite_note-60
[113]: #cite_note-revhistory-61
[114]: #cite_note-hands-on-quick-start-79