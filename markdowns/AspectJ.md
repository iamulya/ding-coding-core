**AspectJ** is an [aspect-oriented programming][0] (AOP) extension created at [PARC][1] for the [Java][2] programming language. It is available in [Eclipse Foundation][3] open-source projects, both stand-alone and integrated into [Eclipse][4]. AspectJ has become a widely used de facto standard for AOP by emphasizing simplicity and usability for end users. It uses Java-like syntax, and included IDE integrations for displaying [crosscutting structure][5] since its initial public release in 2001\.

## Simple language description

All valid Java programs are also valid AspectJ programs, but AspectJ lets programmers define special constructs called _[aspects][6]_. Aspects can contain several entities unavailable to standard classes. These are:

AspectJ also supports limited forms of pointcut-based static checking and aspect reuse (by inheritance). See the [AspectJ Programming Guide][7] for a more detailed description of the language.

## AspectJ compatibility and implementations

AspectJ can be implemented in many ways, including [source-weaving][8] or [bytecode-weaving][9], and directly in the [virtual machine (VM)][10]. In all cases, the AspectJ program becomes a valid Java program that runs in a Java VM. Classes affected by aspects are binary-compatible with unaffected classes (to remain compatible with classes compiled with the unaffected originals). Supporting multiple implementations allows the language to grow as technology changes, and being Java-compatible ensures platform availability.

Key to its success has been engineering and language decisions that make the language usable and programs deployable. The original Xerox AspectJ implementation used source weaving, which required access to source code. When Xerox contributed the code to Eclipse, AspectJ was reimplemented using the Eclipse Java compiler and a bytecode weaver based on [BCEL][11], so developers could write aspects for code in binary (.class) form. At this time the AspectJ language was restricted to support a per-class model essential for incremental compilation and load-time weaving. This made IDE integrations as responsive as their Java counterparts, and it let developers deploy aspects without altering the build process. This led to increased adoption, as AspectJ became usable for impatient Java programmers and enterprise-level deployments. Since then, the Eclipse team has increased performance and correctness, upgraded the AspectJ language to support [Java 5][12] language features like [generics][13] and [annotations][14], and integrated annotation-style pure-java aspects from [AspectWerkz][15].

The Eclipse project supports both command-line and [Ant][16] interfaces. A related Eclipse project has steadily improved the Eclipse IDE support for AspectJ (called _AspectJ Development Tools ([AJDT][17])_) and other providers of crosscutting structure. IDE support for [emacs][18], [NetBeans][19], and [JBuilder][20] foundered when Xerox put them into open source, but support for Oracle's JDeveloper did appear. IDE support has been key to Java programmers using AspectJ and understanding crosscutting concerns.

BEA has offered limited VM support for aspect-oriented extensions, but for extensions supported in all Java VM's would require agreement through Sun's Java Community Process (see also the java.lang.instrument package available since Java SE 5 --- which is a common ground for JVM load-time instrumentation).

Academic interest in the semantics and implementation of [aspect-oriented][0] languages has surrounded AspectJ since its release. The leading research implementation of AspectJ is the [AspectBench Compiler][21], or _abc_; it supports extensions for changing the syntax and semantics of the language and forms the basis for many AOP experiments that the AspectJ team can no longer support, given its broad user base.

Many programmers discover AspectJ as an enabling technology for other projects, most notably [Spring AOP][22]. A sister Spring project, [Spring Roo][23], automatically maintains AspectJ [inter-type declarations][24] as its principal code generation output.

## History and contributors

[Gregor Kiczales][25] started and led the [Xerox PARC][26] team that eventually developed AspectJ. He coined the term _crosscutting_. Fourth on the team, [Chris Maeda][27] coined the term _aspect-oriented programming._ [Jim Hugunin][28] and [Erik Hilsdale][29] ([Xerox PARC][26] team members 12 and 13) were the original compiler and weaver engineers, [Mik Kersten][30] implemented the IDE integration and started the [Eclipse AJDT][31] project with [Adrian Colyer][32] (current lead of the [AspectJ project][33]) and [Andrew Clement][34] (current compiler engineer).

The [AspectBench Compiler][35] was developed and is maintained as a joint effort of the [Programming Tools Group][36] at the [Oxford University Computing Laboratory][37], the [Sable Research Group][38] at [McGill University][39], and the Institute for [Basic Research in Computer Science (BRICS)][40].

## AspectWerkz

AspectWerkz is a dynamic, lightweight and high-performance [AOP/AOSD][0] framework for [Java][2]. It has been merged with the AspectJ project, which supports AspectWerkz functionality since AspectJ 5\.

[Jonas Boner][41] and [Alex Vasseur][42] engineered the AspectWerkz project, and later contributed to the AspectJ project when it merged in the AspectWerkz annotation style and load-time weaving support.

Unlike AspectJ prior to version 5, AspectWerkz did not add any new language constructs to Java, but instead supported declaration of aspects within [Java annotations][14]. It utilizes bytecode modification to [weave][43] classes at project build-time, class load time, as well as [runtime][44]. It uses standardized JVM level APIs\[_[clarify][45]_\]. Aspects can be defined using either Java annotations (introduced with Java 5), Java 1.3/1.4 custom [doclet][46] or a simple XML definition file.

AspectWerkz provides an API to use the very same aspects for proxies, hence providing a transparent experience, allowing a smooth transition for users familiar with proxies.

AspectWerkz is [free software][47]. The [LGPL][48]-style license allows the use of AspectWerkz 2.0 in both commercial and open source projects.

## See also

## Bibliography

## External links

[0]: /wiki/Aspect-oriented_programming "Aspect-oriented programming"
[1]: /wiki/PARC_(company) "PARC (company)"
[2]: /wiki/Java_(programming_language) "Java (programming language)"
[3]: /wiki/Eclipse_Foundation "Eclipse Foundation"
[4]: /wiki/Eclipse_(computing) "Eclipse (computing)"
[5]: /wiki/Cross-cutting_concern "Cross-cutting concern"
[6]: /wiki/Aspect-oriented_software_development#Aspects "Aspect-oriented software development"
[7]: http://www.eclipse.org/aspectj/doc/released/progguide/index.html
[8]: /w/index.php?title=Source-weaving&action=edit&redlink=1 "Source-weaving (page does not exist)"
[9]: /w/index.php?title=Bytecode-weaving&action=edit&redlink=1 "Bytecode-weaving (page does not exist)"
[10]: /wiki/Virtual_machine "Virtual machine"
[11]: /wiki/BCEL "BCEL"
[12]: /wiki/Java_5 "Java 5"
[13]: /wiki/Generics_in_Java "Generics in Java"
[14]: /wiki/Java_annotation "Java annotation"
[15]: /wiki/AspectWerkz "AspectWerkz"
[16]: /wiki/Apache_Ant "Apache Ant"
[17]: /wiki/AJDT "AJDT"
[18]: /wiki/Emacs "Emacs"
[19]: /wiki/NetBeans "NetBeans"
[20]: /wiki/JBuilder "JBuilder"
[21]: http://www.sable.mcgill.ca/abc/
[22]: /wiki/Spring_Framework_(Java)#Aspect-oriented_programming_framework "Spring Framework (Java)"
[23]: /wiki/Spring_Roo "Spring Roo"
[24]: /wiki/Mixins "Mixins"
[25]: /wiki/Gregor_Kiczales "Gregor Kiczales"
[26]: /wiki/Xerox_PARC "Xerox PARC"
[27]: /wiki/Chris_Maeda "Chris Maeda"
[28]: /wiki/Jim_Hugunin "Jim Hugunin"
[29]: /w/index.php?title=Erik_Hilsdale&action=edit&redlink=1 "Erik Hilsdale (page does not exist)"
[30]: /wiki/Mik_Kersten "Mik Kersten"
[31]: http://eclipse.org/ajdt
[32]: /w/index.php?title=Adrian_Colyer&action=edit&redlink=1 "Adrian Colyer (page does not exist)"
[33]: http://eclipse.org/aspectj
[34]: /w/index.php?title=Andrew_Clement&action=edit&redlink=1 "Andrew Clement (page does not exist)"
[35]: /w/index.php?title=AspectBench_Compiler&action=edit&redlink=1 "AspectBench Compiler (page does not exist)"
[36]: /w/index.php?title=Programming_Tools_Group&action=edit&redlink=1 "Programming Tools Group (page does not exist)"
[37]: /wiki/Oxford_University_Computing_Laboratory "Oxford University Computing Laboratory"
[38]: /w/index.php?title=Sable_Research_Group&action=edit&redlink=1 "Sable Research Group (page does not exist)"
[39]: /wiki/McGill_University "McGill University"
[40]: /w/index.php?title=BRICS_Institute&action=edit&redlink=1 "BRICS Institute (page does not exist)"
[41]: /w/index.php?title=Jonas_Boner&action=edit&redlink=1 "Jonas Boner (page does not exist)"
[42]: /w/index.php?title=Alex_Vasseur&action=edit&redlink=1 "Alex Vasseur (page does not exist)"
[43]: /wiki/Aspect_weaver "Aspect weaver"
[44]: /wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)"
[45]: /wiki/Wikipedia:Please_clarify "Wikipedia:Please clarify"
[46]: /wiki/Doclet "Doclet"
[47]: /wiki/Free_software "Free software"
[48]: /wiki/GNU_Lesser_General_Public_License "GNU Lesser General Public License"