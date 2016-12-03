This article discusses the major developments in the **history of [programming languages][0]**.

## Early history

During a nine-month period in 1842--1843, [Ada Lovelace][1] translated the memoir of Italian mathematician, [Luigi Menabrea][2] about [Charles Babbage][3]'s newest proposed machine, the [Analytical Engine][4]. With the article she appended a set of notes which specified in complete detail a method for calculating [Bernoulli numbers][5] with the Analytical Engine, recognized by some historians as the world's first computer program.[\[1\]][6]

[Herman Hollerith][7] realized that he could encode information on [punch cards][8] when he observed that [train][9] [conductors][10] encode the appearance of the ticket holders on the train tickets using the position of punched holes on the tickets. Hollerith then encoded the 1890 American census data on punch cards.

The first computer codes were specialized for their applications. In the first decades of the 20th century, numerical calculations were based on decimal numbers. Eventually it was realized that logic could be represented with numbers, not only with words. For example, [Alonzo Church][11] was able to express the [lambda calculus][12] in a formulaic way. The [Turing machine][13] was an abstraction of the operation of a tape-marking machine, for example, in use at the telephone companies. Turing machines set the basis for storage of programs as data in the [von Neumann architecture][14] of computers by representing a machine through a finite number. However, unlike the lambda calculus, Turing's code does not serve well as a basis for higher-level languages---its principal use is in rigorous analyses of [algorithmic complexity][15].

Like many "firsts" in history, the first modern programming language is hard to identify. From the start, the restrictions of the hardware defined the language. Punch cards allowed 80 columns, but some of the columns had to be used for a sorting number on each card. FORTRAN included some keywords which were the same as English words, such as "IF", "GOTO" (go to) and "CONTINUE". The use of a [magnetic drum][16] for memory meant that computer programs also had to be interleaved with the rotations of the drum. Thus the programs were more hardware-dependent.

To some people, what was the first modern programming language depends on how much power and human-readability is required before the status of "programming language" is granted. Jacquard looms and Charles Babbage's [Difference Engine][17] both had simple, extremely limited languages for describing the actions that these machines should perform. One can even regard the punch holes on a [player piano][18] scroll as a limited [domain-specific language][19], albeit not designed for human consumption.

## First programming languages

In the 1940s, the first recognizably modern electrically powered computers were created. The limited speed and memory capacity forced programmers to write hand tuned [assembly language][20] programs. It was eventually realized that programming in assembly language required a great deal of intellectual effort and was error-prone.

The first programming languages designed to communicate instructions to a computer were written in the 1950s. An early [high-level programming language][21] to be designed for a computer was [Plankalkül][22], developed by the Germans for [Z3][23] by [Konrad Zuse][24] between 1943 and 1945\. However, it was not implemented until 1998 and 2000\.[\[2\]][25]

[John Mauchly][26]'s [Short Code][27], proposed in 1949, was one of the first high-level languages ever developed for an [electronic computer][28].[\[3\]][29] Unlike [machine code][30], Short Code statements represented mathematical expressions in understandable form. However, the program had to be translated into [machine code][30] every time it ran, making the process much slower than running the equivalent machine code.

At the [University of Manchester][31], [Alick Glennie][32] developed [Autocode][33] in the early 1950s. A [programming language][21], it used a [compiler][34] to automatically convert the language into machine code. The first code and compiler was developed in 1952 for the [Mark 1][35] computer at the University of Manchester and is considered to be the first [compiled][34] high-level programming language.[\[4\]][36][\[5\]][37]

The second autocode was developed for the Mark 1 by [R. A. Brooker][38] in 1954 and was called the "Mark 1 Autocode". Brooker also developed an autocode for the [Ferranti Mercury][39] in the 1950s in conjunction with the University of Manchester. The version for the [EDSAC][40] 2 was devised by [D. F. Hartley][41] of [University of Cambridge Mathematical Laboratory][42] in 1961\. Known as EDSAC 2 Autocode, it was a straight development from Mercury Autocode adapted for local circumstances, and was noted for its object code optimisation and source-language diagnostics which were advanced for the time. A contemporary but separate thread of development, [Atlas Autocode][43] was developed for the University of Manchester [Atlas 1][44] machine.

In 1954, language [FORTRAN][45] was invented at IBM by [John Backus][46]; it was the first widely used [high level general purpose programming language][47] to have a functional implementation, as opposed to just a design on paper.[\[6\]][48][\[7\]][49] It is still popular language for [high-performance computing][50][\[8\]][51] and is used for programs that benchmark and rank the world's [fastest supercomputers][52].[\[9\]][53]

Another early programming language was devised by [Grace Hopper][54] in the US, called [FLOW-MATIC][55]. It was developed for the [UNIVAC I][56] at [Remington Rand][57] during the period from 1955 until 1959\. Hopper found that business data processing customers were uncomfortable with mathematical notation, and in early 1955, she and her team wrote a specification for an [English][58] programming language and implemented a prototype.[\[10\]][59] The FLOW-MATIC compiler became publicly available in early 1958 and was substantially complete in 1959\.[\[11\]][60] Flow-Matic was a major influence in the design of [COBOL][61], since only it and its direct descendent [AIMACO][62] were in actual use at the time.[\[12\]][63]

Other languages still in use today include [LISP][64] (1958), invented by [John McCarthy][65] and [COBOL][61] (1959), created by the Short Range Committee. Another milestone in the late 1950s was the publication, by a committee of American and European computer scientists, of "a new language for algorithms"; the _[ALGOL][66] 60 Report_ (the "**ALGO**rithmic **L**anguage"). This report consolidated many ideas circulating at the time and featured three key language innovations:

Another innovation, related to this, was in how the language was described:

Algol 60 was particularly influential in the design of later languages, some of which soon became more popular. The [Burroughs large systems][67] were designed to be programmed in an extended subset of Algol.

Algol's key ideas were continued, producing [ALGOL 68][68]:

Algol 68's many little-used language features (for example, concurrent and parallel blocks) and its complex system of syntactic shortcuts and automatic type coercions made it unpopular with implementers and gained it a reputation of being _difficult_. [Niklaus Wirth][69] actually walked out of the design committee to create the simpler [Pascal][70] language.

Some notable languages that were developed in this period include:

## Establishing fundamental paradigms

The period from the late 1960s to the late 1970s brought a major flowering of programming languages. Most of the major language paradigms now in use were invented in this period:

Each of these languages spawned an entire family of descendants, and most modern languages count at least one of them in their ancestry.

The 1960s and 1970s also saw considerable debate over the merits of "[structured programming][71]", which essentially meant programming without the use of [Goto][72]. This debate was closely related to language design: some languages did not include GOTO, which forced structured programming on the programmer. Although the debate raged hotly at the time, nearly all programmers now agree that, even in languages that provide GOTO, it is bad [programming style][73] to use it except in rare circumstances. As a result, later generations of language designers have found the structured programming debate tedious and even bewildering.

To provide even faster compile times, some languages were structured for "[one-pass compilers][74]" which expect subordinate routines to be defined first, as with [Pascal][70], where the main routine, or driver function, is the final section of the program listing.

Some notable languages that were developed in this period include:

## 1980s: consolidation, modules, performance

The 1980s were years of relative consolidation in [imperative languages][75]. Rather than inventing new paradigms, all of these movements elaborated upon the ideas invented in the previous decade. [C++][76] combined object-oriented and systems programming. The United States government standardized [Ada][77], a systems programming language intended for use by defense contractors. In Japan and elsewhere, vast sums were spent investigating so-called [fifth-generation programming languages][78] that incorporated logic programming constructs. The functional languages community moved to standardize ML and Lisp. Research in [Miranda][79], a functional language with [lazy evaluation][80], began to take hold in this decade.

One important new trend in language design was an increased focus on programming for large-scale systems through the use of _modules_, or large-scale organizational units of code. [Modula][81], Ada, and ML all developed notable module systems in the 1980s. Module systems were often wedded to [generic programming][82] constructs---generics being, in essence, parametrized modules (see also [polymorphism in object-oriented programming][83]).

Although major new paradigms for imperative programming languages did not appear, many researchers expanded on the ideas of prior languages and adapted them to new contexts. For example, the languages of the [Argus][84] and [Emerald][85] systems adapted object-oriented programming to [distributed systems][86].

The 1980s also brought advances in programming language implementation. The [RISC][87] movement in [computer architecture][88] postulated that hardware should be designed for [compilers][34] rather than for human assembly programmers. Aided by [processor][89] speed improvements that enabled increasingly aggressive compilation techniques, the RISC movement sparked greater interest in compilation technology for high-level languages.

Language technology continued along these lines well into the 1990s.

Some notable languages that were developed in this period include:

## 1990s: the Internet age

The rapid growth of the Internet in the mid-1990s was the next major historic event in programming languages. By opening up a radically new platform for computer systems, the Internet created an opportunity for new languages to be adopted. In particular, the JavaScript programming language rose to popularity because of its early integration with the Netscape Navigator web browser. Various other scripting languages achieved widespread use in developing customized applications for web servers such as PHP. The 1990s saw no fundamental novelty in [imperative languages][75], but much recombination and maturation of old ideas. This era began the spread of [functional languages][90]. A big driving philosophy was programmer productivity. Many "rapid application development" (RAD) languages emerged, which usually came with an [IDE][91], [garbage collection][92], and were descendants of older languages. All such languages were [object-oriented][93]. These included [Object Pascal][94], [Visual Basic][95], and [Java][96]. Java in particular received much attention. More radical and innovative than the RAD languages were the new [scripting languages][97]. These did not directly descend from other languages and featured new syntaxes and more liberal incorporation of features. Many consider these scripting languages to be more productive than even the RAD languages, but often because of choices that make small programs simpler but large programs more difficult to write and maintain.\[_[citation needed][98]_\] Nevertheless, scripting languages came to be the most prominent ones used in connection with the Web.

Some notable languages that were developed in this period include:

## Current trends

Programming language evolution continues, in both industry and research. Some of the recent trends have included:

Some notable languages developed during this period include:

## Prominent people

Some key people who helped develop programming languages:

## See also

## References

## Further reading

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Ada_Lovelace "Ada Lovelace"
[2]: /wiki/Luigi_Menabrea "Luigi Menabrea"
[3]: /wiki/Charles_Babbage "Charles Babbage"
[4]: /wiki/Analytical_engine "Analytical engine"
[5]: /wiki/Bernoulli_number "Bernoulli number"
[6]: #cite_note-1
[7]: /wiki/Herman_Hollerith "Herman Hollerith"
[8]: /wiki/Punched_card "Punched card"
[9]: /wiki/Train "Train"
[10]: /wiki/Conductor_(transportation) "Conductor (transportation)"
[11]: /wiki/Alonzo_Church "Alonzo Church"
[12]: /wiki/Lambda_calculus "Lambda calculus"
[13]: /wiki/Turing_machine "Turing machine"
[14]: /wiki/Von_Neumann_architecture#Development_of_the_stored-program_concept "Von Neumann architecture"
[15]: /wiki/Computational_complexity_theory "Computational complexity theory"
[16]: /wiki/Drum_memory "Drum memory"
[17]: /wiki/Difference_engine "Difference engine"
[18]: /wiki/Player_piano "Player piano"
[19]: /wiki/Domain-specific_language "Domain-specific language"
[20]: /wiki/Assembly_language "Assembly language"
[21]: /wiki/High-level_programming_language "High-level programming language"
[22]: /wiki/Plankalk%C3%BCl "Plankalkül"
[23]: /wiki/Z3_(computer) "Z3 (computer)"
[24]: /wiki/Konrad_Zuse "Konrad Zuse"
[25]: #cite_note-2
[26]: /wiki/John_Mauchly "John Mauchly"
[27]: /wiki/Short_Code_(computer_language) "Short Code (computer language)"
[28]: /wiki/Electronic_computer "Electronic computer"
[29]: #cite_note-Sebesta-3
[30]: /wiki/Machine_code "Machine code"
[31]: /wiki/University_of_Manchester "University of Manchester"
[32]: /wiki/Alick_Glennie "Alick Glennie"
[33]: /wiki/Autocode "Autocode"
[34]: /wiki/Compiler "Compiler"
[35]: /wiki/Manchester_Mark_1 "Manchester Mark 1"
[36]: #cite_note-4
[37]: #cite_note-5
[38]: /wiki/Tony_Brooker "Tony Brooker"
[39]: /wiki/Ferranti_Mercury "Ferranti Mercury"
[40]: /wiki/EDSAC "EDSAC"
[41]: /w/index.php?title=D._F._Hartley&action=edit&redlink=1 "D. F. Hartley (page does not exist)"
[42]: /wiki/University_of_Cambridge_Mathematical_Laboratory "University of Cambridge Mathematical Laboratory"
[43]: /wiki/Atlas_Autocode "Atlas Autocode"
[44]: /wiki/Atlas_Computer_(Manchester) "Atlas Computer (Manchester)"
[45]: /wiki/FORTRAN "FORTRAN"
[46]: /wiki/John_Backus "John Backus"
[47]: /wiki/High-level_language "High-level language"
[48]: #cite_note-6
[49]: #cite_note-7
[50]: /wiki/High-performance_computing "High-performance computing"
[51]: #cite_note-hpc-8
[52]: /wiki/TOP500 "TOP500"
[53]: #cite_note-9
[54]: /wiki/Grace_Hopper "Grace Hopper"
[55]: /wiki/FLOW-MATIC "FLOW-MATIC"
[56]: /wiki/UNIVAC_I "UNIVAC I"
[57]: /wiki/Remington_Rand "Remington Rand"
[58]: /wiki/English_language "English language"
[59]: #cite_note-10
[60]: #cite_note-11
[61]: /wiki/COBOL "COBOL"
[62]: /wiki/AIMACO "AIMACO"
[63]: #cite_note-12
[64]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[65]: /wiki/John_McCarthy_(computer_scientist) "John McCarthy (computer scientist)"
[66]: /wiki/ALGOL "ALGOL"
[67]: /wiki/Burroughs_large_systems "Burroughs large systems"
[68]: /wiki/ALGOL_68 "ALGOL 68"
[69]: /wiki/Niklaus_Wirth "Niklaus Wirth"
[70]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[71]: /wiki/Structured_programming "Structured programming"
[72]: /wiki/Goto "Goto"
[73]: /wiki/Programming_style "Programming style"
[74]: /wiki/One-pass_compiler "One-pass compiler"
[75]: /wiki/Imperative_language "Imperative language"
[76]: /wiki/C%2B%2B "C++"
[77]: /wiki/Ada_(programming_language) "Ada (programming language)"
[78]: /wiki/Fifth-generation_programming_language "Fifth-generation programming language"
[79]: /wiki/Miranda_(programming_language) "Miranda (programming language)"
[80]: /wiki/Lazy_evaluation "Lazy evaluation"
[81]: /wiki/Modula "Modula"
[82]: /wiki/Generic_programming "Generic programming"
[83]: /wiki/Polymorphism_in_object-oriented_programming "Polymorphism in object-oriented programming"
[84]: /wiki/Argus_(computer_system) "Argus (computer system)"
[85]: /w/index.php?title=Emerald_(computer_system)&action=edit&redlink=1 "Emerald (computer system) (page does not exist)"
[86]: /wiki/Distributed_computing "Distributed computing"
[87]: /wiki/Reduced_instruction_set_computer "Reduced instruction set computer"
[88]: /wiki/Computer_architecture "Computer architecture"
[89]: /wiki/Central_processing_unit "Central processing unit"
[90]: /wiki/Functional_language "Functional language"
[91]: /wiki/Integrated_development_environment "Integrated development environment"
[92]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[93]: /wiki/Object-oriented_programming "Object-oriented programming"
[94]: /wiki/Object_Pascal "Object Pascal"
[95]: /wiki/Visual_Basic "Visual Basic"
[96]: /wiki/Java_(programming_language) "Java (programming language)"
[97]: /wiki/Scripting_language "Scripting language"
[98]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"