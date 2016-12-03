**Informix-4GL** is a [4GL][0] [programming language][1] developed by [Informix][2] during the mid-1980s.

## Description

It includes embedded [SQL][3], a report writer language, a form language, and a limited set of imperative capabilities (functions, if and while statements, and supports arrays etc.). The language is particularly close to a natural language and is easy to learn and use.

It has two versions of compiler which either produce 1) intermediate byte code for an interpreter (known as the rapid development system), or 2) [C Programming Language][4] code for compilation with a C compiler into machine-code (which executes faster, but compiles slower, and executables are bigger). It is specifically designed to run as a client on a network, connected to an IBM Informix database engine service. It has a mechanism for calling [C Programming Language][4] functions and conversely, to be called from executing C programs. The [RDS][5] version also features an interactive debugger for [Dumb terminals][6]. A particular feature is the comprehensive error checking which is built into the final executable and the extremely helpful error messages produced by both compilers and executables. It also features embedded modal statements for changing compiler and executable behaviour (e.g. causing the compiler to include memory structures matching database schema structures and elements, or to continue executing in spite of error conditions, which can be trapped later on).

## History

The Informix-4GL project was started in 1985, with Chris Maloney as chief architect. Roy Harrington was in charge of the related [Informix][7] Turbo (later renamed Online) engine, which bypassed the "cooked" file system in favour of "raw" disk. A Rapid Application Development Tool called [FourGen CASE Tools][8], was bundled with Informix-4GL from 1989 to 1996\. Another flavor of Informix programming-tool was produced, called "NewEra", which supported [object-oriented programming][9] and a level of code-compatibility with Informix-4GL.

Informix was acquired by IBM in April 2001\.

Despite its age, Informix-4GL is still widely used to develop business applications, and a sizable market exists around it due to its popularity. With accounting being an inherently text based activity, it is often chosen for its purely text-based interface to optimize data entry efficiency.[\[1\]][10] New accounting applications are still being developed with Informix-4GL for this reason, such as [Stansoft][11] which was released in 2010\. The Eppix telecommunication accounting system uses [IBM Tuxedo][12] services written in the [C Programming Language][4] to call pre-compiled 4GL object modules dynamically at run-time.

## Extensions and alternatives

Several companies produced clone versions, with or without extended functionality, such as [graphical user interfaces][13] and [integrated development environments][14], some examples being [Four Js Development Tools][15] and [Querix][16]. A Belgian company (Anubex) and a company in Latin America (Art-in-Soft) built a translator to the [Java programming language][17]. There is even a free [GPL][18]'ed version called [Aubit-4GL][19]. Another company called [MoreData][20] developed technology to call any 4GL function in the native 4GL-generated executables from a Java EE application server, using Java Connector Architecture.

## External links

## References

[0]: /wiki/Fourth-generation_language "Fourth-generation language"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Informix_Corporation "Informix Corporation"
[3]: /wiki/Structured_Query_Language "Structured Query Language"
[4]: /wiki/C_Programming_Language "C Programming Language"
[5]: /w/index.php?title=Rapid_development_system&action=edit&redlink=1 "Rapid development system (page does not exist)"
[6]: /wiki/Dumb_terminal "Dumb terminal"
[7]: /wiki/Informix "Informix"
[8]: /wiki/FourGen_CASE_Tools "FourGen CASE Tools"
[9]: /wiki/Object-oriented_programming "Object-oriented programming"
[10]: #cite_note-1
[11]: /w/index.php?title=Stansoft&action=edit&redlink=1 "Stansoft (page does not exist)"
[12]: /w/index.php?title=IBM_Tuxedo&action=edit&redlink=1 "IBM Tuxedo (page does not exist)"
[13]: /wiki/Graphical_user_interface "Graphical user interface"
[14]: /wiki/Integrated_development_environment "Integrated development environment"
[15]: http://www.4js.com/en/products
[16]: http://www.querix.com
[17]: /wiki/Java_(programming_language) "Java (programming language)"
[18]: /wiki/GNU_General_Public_License "GNU General Public License"
[19]: /wiki/Aubit-4GL "Aubit-4GL"
[20]: /w/index.php?title=MoreData&action=edit&redlink=1 "MoreData (page does not exist)"