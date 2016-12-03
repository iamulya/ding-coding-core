**Dart** is a [general-purpose programming language][0] originally developed by [Google][1] and later approved as a standard by [Ecma][2] (ECMA-408).[\[4\]][3] It is used to build web, server and mobile applications, and for [Internet of Things][4] (IoT) devices.[\[5\]][5] It is [open-source software][6] under a [BSD license][7].

Dart is a [class-based][8], [single inheritance][9], [object-oriented][10] language with [C][11]-style [syntax][12] which can optionally [transcompile][13] into [JavaScript][14]. It supports [interfaces][15], [mixins][16], [abstract classes][17], [reified][18] [generics][19], and [optional typing][20].

## History

Dart was unveiled at the GOTO conference in [Aarhus][21], Denmark, October 10--12, 2011\.[\[6\]][22] The project was founded by [Lars Bak][23] and Kasper Lund.[\[7\]][24]

[Ecma International][25] has formed technical committee TC52[\[8\]][26] to work on standardizing Dart, and inasmuch as Dart can be compiled to standard JavaScript, it works effectively in any modern browser. Ecma International approved the Dart language specification first edition in July 2014, at its 107th General Assembly,[\[9\]][27] and a second edition in December 2014\.[\[10\]][28]

## Usage

There are four main ways to run Dart code:

## Runtime modes

Dart programs run in one of two modes. In _checked mode_, which is not the default mode and must be turned on, dynamic type assertions are enabled. These type assertions can turn on if static types are provided in the code, and can catch some errors when types do not match. For example, if a method is annotated to return a String, but instead returns an integer, the dynamic type assertion will catch this and throw an exception. Running in _checked mode_ is recommended for development and testing.

Dart programs run by default in _production mode_, which runs with all dynamic type assertions turned off. This is the default mode because it is the fastest way to run a Dart program.

## Isolates

To achieve concurrency, Dart uses isolates, which are independent workers that do not share memory, but instead use message passing. This is similar to [Erlang][29] actors. Every Dart program uses at least one isolate, which is the main isolate. When compiled to JavaScript, isolates are transformed into [Web workers][30].

## Snapshots

Snapshots are a core part of the Dart VM. Snapshots are files which store objects and other runtime data.

Dart programs can be compiled into snapshot files. These files contain all of the program code and dependencies preparsed and ready to execute. This allows fast startups.

The Dart core libraries can be compiled into a snapshot file which allows fast loading of the libraries. Most standard distributions of the main Dart VM have a prebuilt snapshot for the core libraries which is loaded at runtime.

Dart is a very asynchronous language. With this, it uses isolates for concurrency. Since these are workers which pass messages, it needs a way to _serialize_ a message. This is done using a snapshot, which is generated from a given object, and then this is transferred to another isolate for deserializing.

## Native mobile apps

Google is working on full Dart stacks for native mobile app development on both [Android][31] and [iOS][32].[\[17\]][33]

## Compiling to JavaScript

The first compiler to generate JavaScript from Dart code was dartc, but it was deprecated. The second Dart-to-JavaScript compiler was Frog. It was written in Dart, but never implemented the full semantics of the language. As of 2015, the third Dart-to-JavaScript compiler is dart2js, from Google. An evolution of earlier compilers, it is written in Dart, and intended to implement the full Dart language specification and semantics.

On March 28, 2013, the Dart team posted an update on their blog addressing Dart code compiled to JavaScript with the dart2js compiler,[\[18\]][34] stating that it now runs faster than handwritten JavaScript on Chrome's V8 JavaScript engine for the DeltaBlue benchmark.[\[19\]][35]

## Editors

On November 18, 2011, Google released Dart Editor, an open-source program based on [Eclipse][36] components, for Mac [OS X][37], [Windows][38], and [Linux][39]-based [operating systems][40].[\[20\]][41] The editor supports syntax highlighting, code completion, JavaScript compiling, running web and server Dart applications, and [debugging][42].

On August 13, 2012, Google announced the release of an Eclipse plugin for Dart development.[\[21\]][43]

On April 18, 2015, Google announced that the Dart Editor would be retired in favor of the [JetBrains][44] [integrated development environment][45] (IDE),[\[22\]][46] which is now the recommended IDE for the language. The Dart plugin[\[23\]][47] is available for [IntelliJ IDEA][48], [PyCharm][49], [PhpStorm][50] and [WebStorm][51]. This plugin supports many features such as syntax highlighting, code completion, analysis, refactoring, debugging, and more. Other plugins are available for editors like [Sublime Text][52], [Atom][53], [Emacs][54], [Vim][55] and [Visual Studio Code][56].[\[24\]][57]

## Chrome Dev Editor

It has been known since November 2013[\[25\]][58] that the Chromium team is working on an open source, [Chrome App][59]-based development environment with a reusable library of [GUI widgets][60], codenamed Spark, later renamed as Chrome Dev Editor.[\[26\]][61] It is built in Dart, and contains Spark which is powered by Polymer.[\[27\]][62] A developer preview version is available in the [Chrome Web Store][63].

## DartPad

The Dart team created DartPad at the start of 2015, to provide an easier way to start using Dart. It is a fully online editor from which users can experiment with Dart [application programming interfaces][64] (APIs), and run Dart code. It provides syntax highlighting, code analysis, code completion, documentation, and HTML and CSS editing.[\[28\]][65]

## SIMD on the web

In 2013, John McCutchan announced that he had created a performant interface to single instruction, multiple data ([SIMD][66]) instruction sets for Dart, bringing the benefits of SIMD to web programs for the first time, for users running Google's experimental Dartium browser.[\[29\]][67] The interface consists of two types:

Instances of these types are immutable and in optimized code are mapped directly to SIMD registers. Operations expressed in Dart typically are compiled into one instruction with no overhead. This is similar to C and [C++][68] intrinsics. Benchmarks for 4×4 [matrix multiplication][69], [3D vertex transformation][70], and [Mandelbrot set][71] visualization show near 400% speedup compared to scalar code written in Dart.

## Example

A [Hello World][72] example:

A function to calculate the nth [Fibonacci number][73]:

A simple class:

## Influences from other languages

Dart is a descendant of the [ALGOL][74] language family,[\[30\]][75] alongside C, Java, C\#, JavaScript, and others.

The method cascade syntax, which provides a syntactic shortcut for invoking several methods one after another on the same object, is adopted from Smalltalk.

Dart's [mixins][16] were influenced by [Strongtalk][76]\[_[citation needed][77]_\][\[31\]][78] and [Ruby][79].

Dart makes use of isolates as a concurrency and security unit when structuring applications.[\[32\]][80] The Isolate concept builds upon the [Actor model][81], which is most famously implemented in Erlang.

The Mirror API for performing controlled and secure [reflection][82] was first proposed in a paper[\[33\]][83] by [Gilad Bracha][84] (who is a member of the Dart team) and [David Ungar][85] and originally implemented in [Self][86].

## Criticism

Dart initially had a mixed reception and the Dart initiative has been criticized by some for fragmenting the web, due to the original plans to include a Dart VM in Chrome. Those plans were dropped to focus instead on compiling Dart to JavaScript.[\[14\]][87]

## See also

## References

## Bibliography

## External links

[0]: /wiki/General-purpose_programming_language "General-purpose programming language"
[1]: /wiki/Google "Google"
[2]: /wiki/Ecma "Ecma"
[3]: #cite_note-4
[4]: /wiki/Internet_of_Things "Internet of Things"
[5]: #cite_note-5
[6]: /wiki/Open-source_software "Open-source software"
[7]: /wiki/BSD_licenses "BSD licenses"
[8]: /wiki/Class-based_programming "Class-based programming"
[9]: /wiki/Single_inheritance "Single inheritance"
[10]: /wiki/Object-oriented_programming "Object-oriented programming"
[11]: /wiki/C_(programming_language) "C (programming language)"
[12]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[13]: /wiki/Transcompile "Transcompile"
[14]: /wiki/JavaScript "JavaScript"
[15]: /wiki/Interface_(object-oriented_programming) "Interface (object-oriented programming)"
[16]: /wiki/Mixin "Mixin"
[17]: /wiki/Abstract_class "Abstract class"
[18]: /wiki/Reification_(computer_science) "Reification (computer science)"
[19]: /wiki/Generic_programming "Generic programming"
[20]: /wiki/Optional_typing "Optional typing"
[21]: /wiki/Aarhus "Aarhus"
[22]: #cite_note-6
[23]: /wiki/Lars_Bak_(computer_programmer) "Lars Bak (computer programmer)"
[24]: #cite_note-7
[25]: /wiki/Ecma_International "Ecma International"
[26]: #cite_note-8
[27]: #cite_note-9
[28]: #cite_note-10
[29]: /wiki/Erlang_(programming_language) "Erlang (programming language)"
[30]: /wiki/Web_worker "Web worker"
[31]: /wiki/Android_(operating_system) "Android (operating system)"
[32]: /wiki/IOS "IOS"
[33]: #cite_note-17
[34]: #cite_note-18
[35]: #cite_note-19
[36]: /wiki/Eclipse_(software) "Eclipse (software)"
[37]: /wiki/OS_X "OS X"
[38]: /wiki/Microsoft_Windows "Microsoft Windows"
[39]: /wiki/Linux "Linux"
[40]: /wiki/Operating_system "Operating system"
[41]: #cite_note-20
[42]: /wiki/Debugging "Debugging"
[43]: #cite_note-21
[44]: /wiki/JetBrains "JetBrains"
[45]: /wiki/Integrated_development_environment "Integrated development environment"
[46]: #cite_note-22
[47]: #cite_note-23
[48]: /wiki/IntelliJ_IDEA "IntelliJ IDEA"
[49]: /wiki/PyCharm "PyCharm"
[50]: /wiki/PhpStorm "PhpStorm"
[51]: /wiki/WebStorm "WebStorm"
[52]: /wiki/Sublime_Text "Sublime Text"
[53]: /wiki/Atom_(text_editor) "Atom (text editor)"
[54]: /wiki/Emacs "Emacs"
[55]: /wiki/Vim_(text_editor) "Vim (text editor)"
[56]: /wiki/Visual_Studio_Code "Visual Studio Code"
[57]: #cite_note-24
[58]: #cite_note-25
[59]: /wiki/Chrome_Web_Store "Chrome Web Store"
[60]: /wiki/GUI_widget "GUI widget"
[61]: #cite_note-26
[62]: #cite_note-27
[63]: https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg?hl=en
[64]: /wiki/Application_programming_interface "Application programming interface"
[65]: #cite_note-28
[66]: /wiki/SIMD "SIMD"
[67]: #cite_note-29
[68]: /wiki/C%2B%2B "C++"
[69]: /wiki/Matrix_multiplication "Matrix multiplication"
[70]: /wiki/3D_vertex_transformation "3D vertex transformation"
[71]: /wiki/Mandelbrot_set "Mandelbrot set"
[72]: /wiki/Hello_World "Hello World"
[73]: /wiki/Fibonacci_number "Fibonacci number"
[74]: /wiki/ALGOL "ALGOL"
[75]: #cite_note-30
[76]: /wiki/Strongtalk "Strongtalk"
[77]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[78]: #cite_note-31
[79]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[80]: #cite_note-32
[81]: /wiki/Actor_model "Actor model"
[82]: /wiki/Reflection_(computer_programming) "Reflection (computer programming)"
[83]: #cite_note-33
[84]: /wiki/Gilad_Bracha "Gilad Bracha"
[85]: /wiki/David_Ungar "David Ungar"
[86]: /wiki/Self_(programming_language) "Self (programming language)"
[87]: #cite_note-VM_cancelled-14