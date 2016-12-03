**Ada** is a [structured][0], [statically typed][1], [imperative][2], [wide-spectrum][3], and [object-oriented][4] [high-level][5] [computer][6] [programming language][7], extended from [Pascal][8] and other languages. It has built-in language support for [design-by-contract][9], extremely strong typing, explicit concurrency, offering tasks, synchronous message passing, protected objects, and [non-determinism][10]. Ada improves code safety and maintainability by using the compiler to find errors in favor of runtime errors. Ada is an international standard; the current version (known as Ada 2012[\[7\]][11]) is defined by ISO/IEC 8652:2012\.[\[8\]][12]

Ada was originally designed by a team led by [Jean Ichbiah][13] of [CII Honeywell Bull][14] under contract to the [United States Department of Defense][15] (DoD) from 1977 to 1983 to supersede over 450 programming languages used by the DoD at that time.[\[9\]][16] Ada was named after [Ada Lovelace][17] (1815--1852), who is credited with being the first computer programmer.[\[10\]][18]

## Features

Ada was originally targeted at [embedded][19] and [real-time][20] systems. The Ada 95 revision, designed by [S. Tucker Taft][21] of [Intermetrics][22] between 1992 and 1995, improved support for systems, numerical, financial, and [object-oriented programming][4] (OOP).

Features of Ada include: [strong typing][23], [modularity mechanisms][24] (packages), [run-time checking][25], [parallel processing][26] ([tasks][27], synchronous [message passing][28], [protected objects][29], and nondeterministic [select statements][30]), [exception handling][31], and [generics][32]. Ada 95 added support for [object-oriented programming][4], including [dynamic dispatch][33].

The syntax of Ada minimizes choices of ways to perform basic operations, and prefers English keywords (such as "or else" and "and then") to symbols (such as "||" and "&&"). Ada uses the basic arithmetical operators "+", "-", "\*", and "/", but avoids using other symbols. Code blocks are delimited by words such as "declare", "begin", and "end", where the "end" (in most cases) is followed by the identifier of the block it closes (e.g., _if ... end if_, _loop ... end loop_). In the case of conditional blocks this avoids a _[dangling else][34]_ that could pair with the wrong nested if-expression in other languages like C or Java.

Ada is designed for development of very large software systems. Ada packages can be compiled separately. Ada package specifications (the package interface) can also be compiled separately without the implementation to check for consistency. This makes it possible to detect problems early during the design phase, before implementation starts.

A large number of compile-time checks are supported to help avoid bugs that would not be detectable until run-time in some other languages or would require explicit checks to be added to the source code. For example, the syntax requires explicitly named closing of blocks to prevent errors due to mismatched end tokens. The adherence to strong typing allows detection of many common software errors (wrong parameters, range violations, invalid references, mismatched types, etc.) either during compile-time, or otherwise during run-time. As concurrency is part of the language specification, the compiler can in some cases detect potential deadlocks.\[_[citation needed][35]_\] Compilers also commonly check for misspelled identifiers, visibility of packages, redundant declarations, etc. and can provide warnings and useful suggestions on how to fix the error.

Ada also supports run-time checks to protect against access to unallocated memory, [buffer overflow][36] errors, range violations, [off-by-one errors][37], array access errors, and other detectable bugs. These checks can be disabled in the interest of runtime efficiency, but can often be compiled efficiently. It also includes facilities to help program verification. For these reasons, Ada is widely used in critical systems, where any [anomaly][38] might lead to very serious consequences, e.g., accidental death, injury or severe financial loss. Examples of systems where Ada is used include [avionics][39], [ATC][40], railways, banking, military and space technology.[\[11\]][41][\[12\]][42]

Ada's dynamic [memory management][43] is high-level and type-safe. Ada does not have generic or untyped [pointers][44]; nor does it implicitly declare any pointer type. Instead, all dynamic memory allocation and deallocation must take place through explicitly declared _access types_. Each access type has an associated _storage pool_ that handles the low-level details of memory management; the programmer can either use the default storage pool or define new ones (this is particularly relevant for [Non-Uniform Memory Access][45]). It is even possible to declare several different access types that all designate the same type but use different storage pools. Also, the language provides for _accessibility checks_, both at compile time and at run time, that ensures that an _access value_ cannot outlive the type of the object it points to.

Though the semantics of the language allow automatic [garbage collection][46] of inaccessible objects, most implementations do not support it by default, as it would cause unpredictable behaviour in real-time systems. Ada does support a limited form of [region-based memory management][47]; also, creative use of storage pools can provide for a limited form of automatic garbage collection, since destroying a storage pool also destroys all the objects in the pool.

Ada was designed to resemble the English language in its syntax for [comments][48]: a double-[dash][49] ("--"), resembling an [em dash][50], denotes comment text. Comments stop at end of line, so there is no danger of unclosed comments accidentally voiding whole sections of source code. Prefixing each line (or column) with "--" will skip all that code, while being clearly denoted as a column of repeated "--" down the page. There is no limit to the nesting of comments, thereby allowing prior code, with commented-out sections, to be commented-out as even larger sections. All [Unicode][51] characters are allowed in comments, such as for symbolic formulas (E\[0\]=m×c²). To the compiler, the double-dash is treated as end-of-line, allowing continued parsing of the language as a [context-free grammar][52].

The semicolon (";") is a [statement terminator][53], and the null or no-operation statement is `null;`. A single `;` without a statement to terminate is not allowed.

Unlike most [ISO][54] standards, the Ada language definition (known as the _Ada Reference Manual_ or _ARM_, or sometimes the _Language Reference Manual_ or _LRM_) is [free content][55]. Thus, it is a common reference for Ada programmers and not just programmers implementing Ada compilers. Apart from the reference manual, there is also an extensive rationale document which explains the language design and the use of various language constructs. This document is also widely used by programmers. When the language was revised, a new rationale document was written.

One notable [free software][56] tool that is used by many Ada programmers to aid them in writing Ada source code is the [GNAT Programming Studio][57].

## History

In the 1970s, the [US Department of Defense][15] (DoD) was concerned by the number of different programming languages being used for its embedded computer system projects, many of which were obsolete or hardware-dependent, and none of which supported safe modular programming. In 1975, a [working group][58], the [High Order Language Working Group][59] (HOLWG), was formed with the intent to reduce this number by finding or creating a programming language generally suitable for the department's and UK Ministry of Defence requirements. After many iterations beginning with an original [Straw man proposal][60] the eventual programming language was named Ada. The total number of high-level programming languages in use for such projects fell from over 450 in 1983 to 37 by 1996\.

The HOLWG working group crafted the [Steelman language requirements][61], a series of documents stating the requirements they felt a programming language should satisfy. Many existing languages were formally reviewed, but the team concluded in 1977 that no existing language met the specifications.

Requests for proposals for a new programming language were issued and four contractors were hired to develop their proposals under the names of Red ([Intermetrics][22] led by [Benjamin Brosgol][62]), Green ([CII Honeywell Bull][63], led by [Jean Ichbiah][13]), Blue ([SofTech][64], led by John Goodenough)[\[13\]][65] and Yellow ([SRI International][66], led by [Jay Spitzen][67]). In April 1978, after public scrutiny, the Red and Green proposals passed to the next phase. In May 1979, the Green proposal, designed by Jean Ichbiah at CII Honeywell Bull, was chosen and given the name Ada---after [Augusta Ada, Countess of Lovelace][17]. This proposal was influenced by the programming language [LIS][68] that Ichbiah and his group had developed in the 1970s. The preliminary Ada reference manual was published in ACM SIGPLAN Notices in June 1979\. The Military Standard reference manual was approved on December 10, 1980 ([Ada Lovelace][17]'s birthday), and given the number MIL-STD-1815 in honor of Ada Lovelace's birth year. In 1981, [C. A. R. Hoare][69] took advantage of his [Turing Award][70] speech to criticize Ada for being overly complex and hence unreliable,[\[14\]][71] but subsequently seemed to recant in the foreword he wrote for an Ada textbook.[\[15\]][72]

Ada attracted much attention from the programming community as a whole during its early days. Its backers and others predicted that it might become a dominant language for general purpose programming and not just defense-related work. Ichbiah publicly stated that within ten years, only two programming languages would remain, Ada and [Lisp][73].[\[16\]][74] Early Ada compilers struggled to implement the large, complex language, and both compile-time and run-time performance tended to be slow and tools primitive. Compiler vendors expended most of their efforts in passing the massive, language-conformance-testing, government-required "ACVC" validation suite that was required in another novel feature of the Ada language effort.[\[16\]][74]

The first validated Ada implementation was the NYU Ada/Ed translator,[\[17\]][75] certified on April 11, 1983\. NYU Ada/Ed is implemented in the high-level set language [SETL][76].[\[18\]][77] A number of commercial companies began offering Ada compilers and associated development tools, including [Alsys][78], [TeleSoft][79], [DDC-I][80], [Advanced Computer Techniques][81], [Tartan Laboratories][82], [TLD Systems][83], [Verdix][84], and others.[\[19\]][85]

In 1991, the US Department of Defense began to require the use of Ada (the _Ada mandate_) for all software,[\[20\]][86] though exceptions to this rule were often granted. The Department of Defense Ada mandate was effectively removed in 1997, as the DoD began to embrace [COTS][87] technology.\[_[citation needed][35]_\] Similar requirements existed in other [NATO][88] countries.\[_[citation needed][35]_\]

By the late 1980s and early 1990s, Ada compilers had improved in performance, but there were still barriers to full exploitation of Ada's abilities, including a tasking model that was different from what most real-time programmers were used to.[\[16\]][74]

Because of Ada's [safety-critical][89] support features, it is now used not only for military applications, but also in commercial projects where a software bug can have severe consequences, e.g., [avionics][39] and [air traffic control][40], commercial rockets (e.g., [Ariane 4 and 5][90]), [satellites][91] and other space systems, railway transport and banking.[\[12\]][42] For example, the [Airplane Information Management System][92], the [fly-by-wire][93] system software in the [Boeing 777][94], was written in Ada; developed by [Honeywell Air Transport Systems][95] in collaboration with consultants from [DDC-I][80], it became arguably the best-known of any Ada project, civilian or military.[\[21\]][96][\[22\]][97] The Canadian Automated Air Traffic System was written in 1 million lines of Ada ([SLOC][98] count). It featured advanced distributed processing, a distributed Ada database, and object-oriented design. Ada is also used in other air traffic systems, e.g., the UK's next-generation Interim Future Area Control Tools Support (iFACTS) air traffic control system is designed and implemented using [SPARK][99] Ada.[\[23\]][100] It is also used in the [French][101] [TVM][102] in-[cab signalling][103] system on the [TGV][104] high-speed rail system, and the metro suburban trains in Paris, London, Hong Kong and New York City.[\[12\]][42][\[24\]][105]

## Standardization

The language became an [ANSI][106] standard in 1983 ([ANSI/MIL-STD 1815A][107]), and without any further changes became an [ISO standard][108] in 1987 (ISO-8652:1987). This version of the language is commonly known as Ada 83, from the date of its adoption by ANSI, but is sometimes referred to also as Ada 87, from the date of its adoption by ISO.

Ada 95, the joint ISO/ANSI standard ([ISO-8652:1995][109]) was published in February 1995, making Ada 95 the first ISO standard object-oriented programming language. To help with the standard revision and future acceptance, the [US Air Force][110] funded the development of the [GNAT][111] [Compiler][112]. Presently, the GNAT Compiler is part of the [GNU Compiler Collection][113].

Work has continued on improving and updating the technical content of the Ada programming language. A Technical Corrigendum to Ada 95 was published in October 2001, and a major Amendment, [ISO/IEC 8652:1995/Amd 1:2007][114] was published on March 9, 2007\. At the Ada-Europe 2012 conference in Stockholm, the Ada Resource Association (ARA) and Ada-Europe announced the completion of the design of the latest version of the Ada programming language and the submission of the reference manual to the International Organization for Standardization (ISO) for approval. ISO/IEC 8652:2012 was published in December 2012\.[\[8\]][12]

Other related standards include [ISO 8651][115]-3:1988 _Information processing systems---Computer graphics---Graphical Kernel System (GKS) language bindings---Part 3: Ada_.

## Language constructs

Ada is an [ALGOL][116]-like programming language featuring control structures with reserved words such as _if_, _then_, _else_, _while_, _for_, and so on. However, Ada also has many data structuring facilities and other abstractions which were not included in the original [ALGOL 60][117], such as [type definitions][118], [records][119], [pointers][44], [enumerations][120]. Such constructs were in part inherited or inspired from [Pascal][8].

## "Hello, world!" in Ada

A common example of a language's [syntax][121] is the [Hello world program][122]: (hello.adb)

This program can be compiled by using the freely available open source compiler [GNAT][111], by executing

## Data types

Ada's type system is not based on a set of predefined [primitive types][123] but allows users to declare their own types. This declaration in turn is not based on the internal representation of the type but on describing the goal which should be achieved. This allows the compiler to determine a suitable memory size for the type, and to check for violations of the type definition at compile time and run time (i.e., range violations, buffer overruns, type consistency, etc.). Ada supports numerical types defined by a range, modulo types, aggregate types (records and arrays), and enumeration types. Access types define a reference to an instance of a specified type; untyped pointers are not permitted. Special types provided by the language are task types and protected types.

For example, a date might be represented as:

Types can be refined by declaring subtypes:

Types can have modifiers such as _limited, abstract, private_ etc. Private types can only be accessed and limited types can only be modified or copied within the scope of the package that defines them.[\[25\]][124] Ada 95 adds additional features for object-oriented extension of types.

## Control structures

Ada is a [structured programming][0] language, meaning that the flow of control is structured into standard statements. All standard constructs and deep level early exit are supported so the use of the also supported '[go to][125]' commands is seldom needed.

## Packages, procedures and functions

Among the parts of an Ada program are packages, procedures and functions.

Example: Package specification (example.ads)

Package body (example.adb)

This program can be compiled, e.g., by using the freely available open source compiler [GNAT][111], by executing

Packages, procedures and functions can nest to any depth and each can also be the logical outermost block.

Each package, procedure or function can have its own declarations of constants, types, variables, and other procedures, functions and packages, which can be declared in any order.

## Concurrency

Ada has language support for task-based concurrency. The fundamental concurrent unit in Ada is a _task_ which is a built-in limited type. Tasks are specified in two parts -- the task declaration defines the task interface (similar to a type declaration), the task body specifies the implementation of the task. Depending on the implementation, Ada tasks are either mapped to operating system threads or processes, or are scheduled internally by the Ada runtime.

Tasks can have entries for synchronisation (a form of [synchronous message passing][28]). Task entries are declared in the task specification. Each task entry can have one or more _accept_ statements within the task body. If the control flow of the task reaches an accept statement, the task is blocked until the corresponding entry is called by another task (similarly, a calling task is blocked until the called task reaches the corresponding accept statement). Task entries can have parameters similar to procedures, allowing tasks to synchronously exchange data. In conjunction with _select_ statements it is possible to define _guards_ on accept statements (similar to Dijkstra's [guarded commands][126]).

Ada also offers _[protected objects][127]_ for [mutual exclusion][128]. Protected objects are a [monitor-like][129] construct, but use guards instead of conditional variables for signaling (similar to conditional critical regions). Protected objects combine the data encapsulation and safe mutual exclusion from monitors, and entry guards from conditional critical regions. The main advantage over classical monitors is that conditional variables are not required for signaling, avoiding potential deadlocks due to incorrect locking semantics. Like tasks, the protected object is a built-in limited type, and it also has a declaration part and a body.

A protected object consists of encapsulated private data (which can only be accessed from within the protected object), and procedures, functions and entries which are guaranteed to be mutually exclusive (with the only exception of functions, which are required to be side effect free and can therefore run concurrently with other functions). A task calling a protected object is blocked if another task is currently executing inside the same protected object, and released when this other task leaves the protected object. Blocked tasks are queued on the protected object ordered by time of arrival.

Protected object entries are similar to procedures, but additionally have _guards_. If a guard evaluates to false, a calling task is blocked and added to the queue of that entry; now another task can be admitted to the protected object, as no task is currently executing inside the protected object. Guards are re-evaluated whenever a task leaves the protected object, as this is the only time when the evaluation of guards can have changed.

Calls to entries can be _requeued_ to other entries with the same signature. A task that is requeued is blocked and added to the queue of the target entry; this means that the protected object is released and allows admission of another task.

The _select_ statement in Ada can be used to implement non-blocking entry calls and accepts, non-deterministic selection of entries (also with guards), time-outs and aborts.

The following example illustrates some concepts of concurrent programming in Ada.

## Pragmas

A pragma is a [compiler directive][130] that conveys information to the compiler to allow specific manipulation of compiled output.[\[26\]][131] Certain pragmas are built into the language[\[27\]][132] while other are implementation-specific.

Examples of common usage of compiler pragmas would be to disable certain features, such as run-time type checking or array subscript boundary checking, or to instruct the compiler to insert object code in lieu of a function call (as C/C++ does with inline functions).

## See also

## References

## International standards

## Rationale

(These documents have been published in various forms including print.)

## Books

## Archives

## External links

[0]: /wiki/Structured_programming "Structured programming"
[1]: /wiki/Statically_typed "Statically typed"
[2]: /wiki/Imperative_programming "Imperative programming"
[3]: /wiki/Wide-spectrum_language "Wide-spectrum language"
[4]: /wiki/Object-oriented_programming "Object-oriented programming"
[5]: /wiki/High-level_programming_language "High-level programming language"
[6]: /wiki/Computer_programming "Computer programming"
[7]: /wiki/Programming_language "Programming language"
[8]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[9]: /wiki/Design_by_contract "Design by contract"
[10]: /wiki/Nondeterministic_programming "Nondeterministic programming"
[11]: #cite_note-7
[12]: #cite_note-ISO_IEC_8652_2012-8
[13]: /wiki/Jean_Ichbiah "Jean Ichbiah"
[14]: /wiki/Groupe_Bull "Groupe Bull"
[15]: /wiki/United_States_Department_of_Defense "United States Department of Defense"
[16]: #cite_note-Um-9
[17]: /wiki/Ada_Lovelace "Ada Lovelace"
[18]: #cite_note-10
[19]: /wiki/Embedded_system "Embedded system"
[20]: /wiki/Real-time_computing "Real-time computing"
[21]: /w/index.php?title=Tucker_Taft&action=edit&redlink=1 "Tucker Taft (page does not exist)"
[22]: /wiki/Intermetrics "Intermetrics"
[23]: /wiki/Strongly_typed_languages "Strongly typed languages"
[24]: /wiki/Modularity_(programming) "Modularity (programming)"
[25]: /wiki/Run-time_checking "Run-time checking"
[26]: /wiki/Parallel_computing "Parallel computing"
[27]: /wiki/Task_(computing) "Task (computing)"
[28]: /wiki/Message_passing "Message passing"
[29]: /w/index.php?title=Protected_objects&action=edit&redlink=1 "Protected objects (page does not exist)"
[30]: /wiki/Switch_statement "Switch statement"
[31]: /wiki/Exception_handling "Exception handling"
[32]: /wiki/Generic_programming "Generic programming"
[33]: /wiki/Dynamic_dispatch "Dynamic dispatch"
[34]: /wiki/Dangling_else "Dangling else"
[35]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[36]: /wiki/Buffer_overflow "Buffer overflow"
[37]: /wiki/Off-by-one_error "Off-by-one error"
[38]: /wiki/Anomaly_in_software "Anomaly in software"
[39]: /wiki/Avionics "Avionics"
[40]: /wiki/Air_traffic_control "Air traffic control"
[41]: #cite_note-11
[42]: #cite_note-Ada_usage-12
[43]: /wiki/Memory_management "Memory management"
[44]: /wiki/Pointer_(computer_programming) "Pointer (computer programming)"
[45]: /wiki/Non-Uniform_Memory_Access "Non-Uniform Memory Access"
[46]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[47]: /wiki/Region-based_memory_management "Region-based memory management"
[48]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[49]: /wiki/Dash "Dash"
[50]: /wiki/Em_dash "Em dash"
[51]: /wiki/Unicode "Unicode"
[52]: /wiki/Context-free_grammar "Context-free grammar"
[53]: /wiki/Statement_terminator "Statement terminator"
[54]: /wiki/International_Organization_for_Standardization "International Organization for Standardization"
[55]: /wiki/Free_content "Free content"
[56]: /wiki/Free_software "Free software"
[57]: /wiki/GNAT_Programming_Studio "GNAT Programming Studio"
[58]: /wiki/Working_group "Working group"
[59]: /wiki/High_Order_Language_Working_Group "High Order Language Working Group"
[60]: /wiki/Straw_man_proposal "Straw man proposal"
[61]: /wiki/Steelman_language_requirements "Steelman language requirements"
[62]: /w/index.php?title=Benjamin_Brosgol&action=edit&redlink=1 "Benjamin Brosgol (page does not exist)"
[63]: /wiki/CII_Honeywell_Bull "CII Honeywell Bull"
[64]: /wiki/SofTech,_Inc. "SofTech, Inc."
[65]: #cite_note-13
[66]: /wiki/SRI_International "SRI International"
[67]: /w/index.php?title=Jay_Spitzen&action=edit&redlink=1 "Jay Spitzen (page does not exist)"
[68]: /wiki/LIS_programming_language "LIS programming language"
[69]: /wiki/C._A._R._Hoare "C. A. R. Hoare"
[70]: /wiki/Turing_Award "Turing Award"
[71]: #cite_note-14
[72]: #cite_note-15
[73]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[74]: #cite_note-SIGAda-Rosen-16
[75]: #cite_note-17
[76]: /wiki/SETL "SETL"
[77]: #cite_note-18
[78]: /wiki/Alsys "Alsys"
[79]: /wiki/TeleSoft "TeleSoft"
[80]: /wiki/DDC-I "DDC-I"
[81]: /wiki/Advanced_Computer_Techniques "Advanced Computer Techniques"
[82]: /wiki/Tartan_Laboratories "Tartan Laboratories"
[83]: /wiki/TLD_Systems "TLD Systems"
[84]: /wiki/Verdix "Verdix"
[85]: #cite_note-19
[86]: #cite_note-20
[87]: /wiki/Commercial_off-the-shelf "Commercial off-the-shelf"
[88]: /wiki/North_Atlantic_Treaty_Organisation "North Atlantic Treaty Organisation"
[89]: /wiki/Safety-critical "Safety-critical"
[90]: /wiki/Ariane_(rocket_family) "Ariane (rocket family)"
[91]: /wiki/Satellite "Satellite"
[92]: /wiki/Airplane_Information_Management_System "Airplane Information Management System"
[93]: /wiki/Aircraft_flight_control_systems "Aircraft flight control systems"
[94]: /wiki/Boeing_777 "Boeing 777"
[95]: /wiki/Honeywell_Aerospace "Honeywell Aerospace"
[96]: #cite_note-21
[97]: #cite_note-22
[98]: /wiki/Source_lines_of_code "Source lines of code"
[99]: /wiki/SPARK_(programming_language) "SPARK (programming language)"
[100]: #cite_note-23
[101]: /wiki/France "France"
[102]: /wiki/Transmission_Voie-Machine "Transmission Voie-Machine"
[103]: /wiki/Cab_signalling "Cab signalling"
[104]: /wiki/TGV "TGV"
[105]: #cite_note-24
[106]: /wiki/American_National_Standards_Institute "American National Standards Institute"
[107]: http://archive.adaic.com/standards/83lrm/html/Welcome.html
[108]: /wiki/International_standard "International standard"
[109]: http://www.adaic.org/standards/95lrm/html/RM-TTL.html
[110]: /wiki/US_Air_Force "US Air Force"
[111]: /wiki/GNAT "GNAT"
[112]: /wiki/Compiler "Compiler"
[113]: /wiki/GNU_Compiler_Collection "GNU Compiler Collection"
[114]: http://www.iso.org/iso/en/CatalogueDetailPage.CatalogueDetail?CSNUMBER=45001
[115]: /wiki/ISO_8651 "ISO 8651"
[116]: /wiki/ALGOL "ALGOL"
[117]: /wiki/ALGOL_60 "ALGOL 60"
[118]: /wiki/Type_system "Type system"
[119]: /wiki/Record_(computer_science) "Record (computer science)"
[120]: /wiki/Enumerated_type "Enumerated type"
[121]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[122]: /wiki/Hello_world_program "Hello world program"
[123]: /wiki/Primitive_types "Primitive types"
[124]: #cite_note-25
[125]: /wiki/Goto_(command) "Goto (command)"
[126]: /wiki/Guarded_commands "Guarded commands"
[127]: /w/index.php?title=Protected_object&action=edit&redlink=1 "Protected object (page does not exist)"
[128]: /wiki/Mutual_exclusion "Mutual exclusion"
[129]: /wiki/Monitor_(synchronization) "Monitor (synchronization)"
[130]: /wiki/Compiler_directive "Compiler directive"
[131]: #cite_note-Ada_.2783_Language_Reference_Manual-26
[132]: #cite_note-Ada_.2783_Language_Reference_Manual_AppendixB-27