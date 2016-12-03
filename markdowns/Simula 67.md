**Simula** is the name of two [simulation][0] [programming languages][1], Simula I and Simula 67, developed in the 1960s at the [Norwegian Computing Center][2] in [Oslo][3], by [Ole-Johan Dahl][4] and [Kristen Nygaard][5]. [Syntactically][6], it is a fairly faithful superset of [ALGOL 60][7].[\[1\]][8]:1.3.1

Simula 67 introduced [objects][9],[\[1\]][8]:2, 5.3 [classes][10],[\[1\]][8]:1.3.3, 2 [inheritance][11] and [subclasses][12],[\[1\]][8]:2.2.1 [virtual procedures][13],[\[1\]][8]:2.2.3 [coroutines][14],[\[1\]][8]:9.2 and [discrete event simulation][15],[\[1\]][8]:14.2 and features [garbage collection][16].[\[1\]][8]:9.1 Also other forms of [subtyping][17] (besides inheriting subclasses) were introduced in Simula derivatives.\[_[citation needed][18]_\]

Simula is considered the first [object-oriented][19] [programming][20] language. As its name suggests, Simula was designed for doing [simulations][21], and the needs of that [domain][22] provided the framework for many of the features of object-oriented languages today.

Simula has been used in a wide range of applications such as simulating [VLSI][23] designs, [process modeling][24], [protocols][25], [algorithms][26], and other applications such as [typesetting][27], [computer graphics][28], and [education][29]. The influence of Simula is often understated, and Simula-type objects are reimplemented in [C++][30], [Object Pascal][31], [Java][32], [C\#][33] and several other languages. The creator of C++, [Bjarne Stroustrup][34], has acknowledged that Simula 67 was the greatest influence on him to develop C++, to bring the kind of productivity enhancements offered by Simula to the raw computational speed offered by lower level languages like [BCPL][35].

## History

The following account is based on Jan Rune Holmevik's historical essay.[\[2\]][36][\[3\]][37]

[Kristen Nygaard][5] started writing computer simulation programs in 1957\. Nygaard saw a need for a better way to describe the heterogeneity and the [operation][38] of a [system][39]. To go further with his ideas on a formal [computer language][40] for describing a system, Nygaard realized that he needed someone with more [computer programming][41] skills than he had. [Ole-Johan Dahl][4] joined him on his work January 1962\. The decision of linking the language up to [ALGOL 60][7] was made shortly after. By May 1962 the main concepts for a [simulation][42] [language][1] were set. "SIMULA I" was born, a special purpose [programming language][1] for [simulating][42] discrete event systems.

Kristen Nygaard was invited to [UNIVAC][43] late May 1962 in connection with the marketing of their new [UNIVAC 1107][44] computer. At that visit Nygaard presented the ideas of Simula to [Robert Bemer][45], the director of systems programming at [Univac][46]. Bemer was a sworn [ALGOL][47] fan and found the Simula project compelling. Bemer was also chairing a session at the second international conference on information processing hosted by [IFIP][48]. He invited Nygaard, who presented the paper "SIMULA -- An Extension of ALGOL to the Description of Discrete-Event Networks".

[Norwegian Computing Center][2] got a [UNIVAC 1107][44] August 1963 at a considerable discount, on which Dahl implemented the SIMULA I under contract with UNIVAC. The implementation was based on the UNIVAC [ALGOL 60][7] compiler. SIMULA I was fully operational on the UNIVAC 1107 by January 1965\. In the following couple of years Dahl and Nygaard spent a lot of time teaching Simula. Simula spread to several countries around the world and SIMULA I was later implemented on [Burroughs B5500 computers][49] and the Russian [URAL-16 computer][50].

In 1966 [C. A. R. Hoare][51] introduced the concept of record class construct, which Dahl and Nygaard extended with the concept of prefixing and other features to meet their requirements for a generalized process concept. Dahl and Nygaard presented their paper on [Class][10] and [Subclass][12] Declarations at the [IFIP][48] Working Conference on [simulation languages][0] in [Oslo][3], May 1967\. This paper became the first formal definition of Simula 67\. In June 1967 a conference was held to standardize the language and initiate a number of implementations. Dahl proposed to unify the [type][52] and the class concept. This led to serious discussions, and the proposal was rejected by the board. SIMULA 67 was formally standardized on the first meeting of the SIMULA Standards Group (SSG) in February 1968\.

Simula was influential in the development of [Smalltalk][53] and later [object-oriented programming languages][54]. It also helped inspire the [actor model][55] of concurrent computation although Simula only supports [co-routines][56] and not true [concurrency][57].\[_[citation needed][18]_\]

In the late sixties and the early seventies there were four main implementations of Simula:

These implementations were ported to a wide range of platforms. The [TOPS-10][58] implemented the concept of public, protected, and private member variables and procedures, that later was integrated into Simula 87\. Simula 87 is the latest standard and is ported to a wide range of platforms. There are mainly three implementations:

In November 2001 Dahl and Nygaard were awarded the [IEEE John von Neumann Medal][59] by the [Institute of Electrical and Electronic Engineers][60] "For the introduction of the concepts underlying [object-oriented programming][19] through the design and implementation of SIMULA 67". In February 2002 they received the 2001 A. M. [Turing Award][61] by the [Association for Computing Machinery][62] (ACM), with the citation: "For ideas fundamental to the emergence of object oriented programming, through their design of the programming languages Simula I and Simula 67." Unfortunately neither Dahl, nor Nygaard could make it to the ACM Turing Award Lecture,[\[5\]][63] scheduled to be delivered at the [OOPSLA][64] 2002 conference in Seattle, as they both died within two months of each other in June and August, respectively.[\[6\]][65]

[Simula Research Laboratory][66] is a research institute named after the Simula language, and Nygaard held a part-time position there from the opening in 2001\.

The new Computer Science building at the [University of Oslo][67] is named Ole Johan Dahl's House, after one of the two inventors of Simula. The main auditorium in Ole Johan Dahl's House is named Simula.

Simula is still used for various types of university courses, for instance, Jarek Sklenar teaches Simula to students at University of Malta.[\[7\]][68]

## Sample code

## Minimal program

The empty [computer file][69] is the minimal [program][70] in Simula, measured by the size of the [source code][71]. It consists of one thing only; a dummy [statement][72].

However, the minimal program is more conveniently represented as an empty block:

It begins executing and immediately terminates. The language does not have any [return value][73] from the program itself.

## Classic Hello world

An example of a [Hello world program][74] in Simula:

Simula is [case-insensitive][75].

## Classes, subclasses and virtual procedures

A more realistic example with use of classes,[\[1\]][8]:1.3.3, 2 subclasses[\[1\]][8]:2.2.1 and virtual procedures:[\[1\]][8]:2.2.3

The above example has one [super class][76] (Glyph) with two [subclasses][12] (Char and Line). There is one [virtual procedure][13] with two [implementations][77]. The execution starts by executing the main program. Simula does not have the concept of [abstract classes][78] since classes with [pure virtual procedures][79] can be [instantiated][80]. This means that in the above example all classes can be instantiated. Calling a [pure virtual procedure][79] will however produce a [run-time error][81].

## Call by name

Simula supports [call by name][82][\[1\]][8]:8.2.3 so the [Jensen's Device][83] can easily be implemented. However, the default transmission mode for simple parameter is [call by value][84], contrary to [ALGOL][47] which used [call by name][82]. The source code for the [Jensen's Device][83] must therefore specify [call by name][82] for the parameters when compiled by a Simula compiler.

Another much simpler example is the [summation function ![\sum ](https://wikimedia.org/api/rest_v1/media/math/render/svg/f1d4e06539576633987e902f402ed46728d573b6)][85] which can be implemented as follows:

The above code uses [call by name][82] for the controlling variable (k) and the expression (u). This allows the controlling variable to be used in the expression.

Note that the Simula standard allows for certain restrictions on the controlling variable in a [for loop][86]. The above code therefore uses a while loop for maximum portability.

The following:

![Z=\sum _{i=1}^{100}{1 \over (i+a)^{2}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/7e5b4b37fb90cdd6177be7f4c3b1e2f037b248fa)

can then be implemented as follows:

## Simulation

Simula includes a [simulation][42][\[1\]][8]:14.2 package for doing [discrete event simulations][15]. This simulation package is based on Simula's [object oriented][87] features and its [coroutine][14][\[1\]][8]:9.2 concept.

Sam, Sally, and Andy are shopping for clothes. They have to share one fitting room. Each one of them is browsing the store for about 12 minutes and then uses the fitting room exclusively for about three minutes, each following a normal distribution. A simulation of their fitting room experience is as follows:

The main block is prefixed with `Simulation` for enabling simulation. The simulation package can be used on any block and simulations can even be nested when simulating someone doing simulations.

The fitting room object uses a queue (`door`) for getting access to the fitting room. When someone requests the fitting room and it's in use they must wait in this queue (`Wait (door)`). When someone leaves the fitting room the first one (if any) is released from the queue (`**Activate** door.first`) and accordingly removed from the door queue (`door.First.Out`).

Person is a subclass of Process and its activity is described using hold (time for browsing the store and time spent in the fitting room) and calls procedures in the fitting room object for requesting and leaving the fitting room.

The main program creates all the objects and activates all the person objects to put them into the event queue. The main program holds for 100 minutes of simulated time before the program terminates.

## See also

## Notes

## Sources

## Further reading

## External links

[0]: /wiki/Simulation_language "Simulation language"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Norwegian_Computing_Center "Norwegian Computing Center"
[3]: /wiki/Oslo "Oslo"
[4]: /wiki/Ole-Johan_Dahl "Ole-Johan Dahl"
[5]: /wiki/Kristen_Nygaard "Kristen Nygaard"
[6]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[7]: /wiki/ALGOL_60 "ALGOL 60"
[8]: #cite_note-CommonBase-1
[9]: /wiki/Object_(computing) "Object (computing)"
[10]: /wiki/Class_(computer_science) "Class (computer science)"
[11]: /wiki/Inheritance_(object-oriented_programming) "Inheritance (object-oriented programming)"
[12]: /wiki/Subclass_(computer_science) "Subclass (computer science)"
[13]: /wiki/Virtual_function "Virtual function"
[14]: /wiki/Coroutine "Coroutine"
[15]: /wiki/Discrete_event_simulation "Discrete event simulation"
[16]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[17]: /wiki/Subtyping "Subtyping"
[18]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[19]: /wiki/Object-oriented_programming "Object-oriented programming"
[20]: /wiki/Programming_paradigm "Programming paradigm"
[21]: /wiki/Simulations "Simulations"
[22]: /wiki/Problem_domain "Problem domain"
[23]: /wiki/Very-large-scale_integration "Very-large-scale integration"
[24]: /wiki/Process_modeling "Process modeling"
[25]: /wiki/Protocol_(computing) "Protocol (computing)"
[26]: /wiki/Algorithm "Algorithm"
[27]: /wiki/Typesetting "Typesetting"
[28]: /wiki/Computer_graphics "Computer graphics"
[29]: /wiki/Education "Education"
[30]: /wiki/C%2B%2B "C++"
[31]: /wiki/Object_Pascal "Object Pascal"
[32]: /wiki/Java_(programming_language) "Java (programming language)"
[33]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[34]: /wiki/Bjarne_Stroustrup "Bjarne Stroustrup"
[35]: /wiki/BCPL "BCPL"
[36]: #cite_note-2
[37]: #cite_note-3
[38]: /wiki/Instruction_(computer_science) "Instruction (computer science)"
[39]: /wiki/System "System"
[40]: /wiki/Computer_language "Computer language"
[41]: /wiki/Computer_programming "Computer programming"
[42]: /wiki/Simulation "Simulation"
[43]: /wiki/UNIVAC "UNIVAC"
[44]: /wiki/UNIVAC_1107 "UNIVAC 1107"
[45]: /wiki/Bob_Bemer "Bob Bemer"
[46]: /wiki/Univac "Univac"
[47]: /wiki/ALGOL "ALGOL"
[48]: /wiki/International_Federation_for_Information_Processing "International Federation for Information Processing"
[49]: /wiki/Burroughs_large_systems "Burroughs large systems"
[50]: /wiki/Ural_(computer) "Ural (computer)"
[51]: /wiki/C._A._R._Hoare "C. A. R. Hoare"
[52]: /wiki/Data_type "Data type"
[53]: /wiki/Smalltalk "Smalltalk"
[54]: /wiki/Object-oriented_programming_language "Object-oriented programming language"
[55]: /wiki/Actor_model "Actor model"
[56]: /wiki/Co-routines "Co-routines"
[57]: /wiki/Concurrency_(computer_science) "Concurrency (computer science)"
[58]: /wiki/TOPS-10 "TOPS-10"
[59]: /wiki/IEEE_John_von_Neumann_Medal "IEEE John von Neumann Medal"
[60]: /wiki/Institute_of_Electrical_and_Electronic_Engineers "Institute of Electrical and Electronic Engineers"
[61]: /wiki/Turing_Award "Turing Award"
[62]: /wiki/Association_for_Computing_Machinery "Association for Computing Machinery"
[63]: #cite_note-5
[64]: /wiki/OOPSLA "OOPSLA"
[65]: #cite_note-6
[66]: /wiki/Simula_Research_Laboratory "Simula Research Laboratory"
[67]: /wiki/University_of_Oslo "University of Oslo"
[68]: #cite_note-7
[69]: /wiki/Computer_file "Computer file"
[70]: /wiki/Computer_program "Computer program"
[71]: /wiki/Source_code "Source code"
[72]: /wiki/Statement_(programming) "Statement (programming)"
[73]: /wiki/Return_value "Return value"
[74]: /wiki/Hello_world_program "Hello world program"
[75]: /wiki/Case-insensitive "Case-insensitive"
[76]: /wiki/Superclass_(computer_science) "Superclass (computer science)"
[77]: /wiki/Implementation "Implementation"
[78]: /wiki/Abstract_class "Abstract class"
[79]: /wiki/Pure_virtual_function "Pure virtual function"
[80]: /wiki/Instantiation_(computer_science) "Instantiation (computer science)"
[81]: /wiki/Run-time_error "Run-time error"
[82]: /wiki/Call_by_name "Call by name"
[83]: /wiki/Jensen%27s_Device "Jensen's Device"
[84]: /wiki/Call_by_value "Call by value"
[85]: /wiki/Arithmetic_function#Summation_functions "Arithmetic function"
[86]: /wiki/For_loop "For loop"
[87]: /wiki/Object_oriented "Object oriented"