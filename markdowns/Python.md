**Python** is a widely used [high-level][0], [general-purpose][1], [interpreted][2], [dynamic programming language][3].[\[24\]][4][\[25\]][5] Its design philosophy emphasizes code [readability][6], and its syntax allows programmers to express concepts in fewer [lines of code][7] than possible in languages such as [C++][8] or [Java][9].[\[26\]][10][\[27\]][11] The language provides constructs intended to enable writing clear programs on both a [small and large scale][12].[\[28\]][13]

Python supports multiple [programming paradigms][14], including [object-oriented][15], [imperative][16] and [functional programming][17] or [procedural][18] styles. It features a [dynamic type][19] system and automatic [memory management][20] and has a large and comprehensive [standard library][21].[\[29\]][22]

Python interpreters are available for many [operating systems][23], allowing Python code to run on a wide variety of systems. [CPython][24], the [reference implementation][25] of Python, is [free and open-source software][26] and has a community-based development model, as do nearly all of its variant implementations. CPython is managed by the non-profit [Python Software Foundation][27].

## History

Python was conceived in the late 1980s,[\[30\]][28] and its implementation began in December 1989[\[31\]][29] by [Guido van Rossum][30] at [Centrum Wiskunde & Informatica][31] (CWI) in the [Netherlands][32] as a successor to the [ABC language][33] (itself inspired by [SETL][34])[\[32\]][35] capable of [exception handling][36] and interfacing with the operating system [Amoeba][37].[\[8\]][38] Van Rossum is Python's principal author, and his continuing central role in deciding the direction of Python is reflected in the title given to him by the Python community, _[benevolent dictator for life][39]_ (BDFL).

About the origin of Python, Van Rossum wrote in 1996:[\[33\]][40]

Over six years ago, in December 1989, I was looking for a "hobby" programming project that would keep me occupied during the week around Christmas. My office ... would be closed, but I had a home computer, and not much else on my hands. I decided to write an interpreter for the new scripting language I had been thinking about lately: a descendant of [ABC][33] that would appeal to [Unix][41]/[C][42] [hackers][43]. I chose Python as a working title for the project, being in a slightly irreverent mood (and a big fan of _[Monty Python's Flying Circus][44]_).

Python 2.0 was released on 16 October 2000 and had many major new features, including a cycle-detecting [garbage collector][45] and support for [Unicode][46]. With this release the development process was changed and became more transparent and community-backed.[\[34\]][47]

Python 3.0 (which early in its development was commonly referred to as Python 3000 or py3k), a major, backwards-incompatible release, was released on 3 December 2008[\[35\]][48] after a long period of testing. Many of its major features have been [backported][49] to the backwards-compatible Python 2.6.x[\[36\]][50] and 2.7.x version series.

## Features and philosophy

Python is a [multi-paradigm programming language][51]: [object-oriented programming][15] and [structured programming][52] are fully supported, and many language features support [functional programming][17] and [aspect-oriented programming][53] (including by [metaprogramming][54][\[37\]][55] and [metaobjects][56] (magic methods)).[\[38\]][57] Many other paradigms are supported via extensions, including [design by contract][58][\[39\]][59][\[40\]][60] and [logic programming][61].[\[41\]][62]

Python uses [dynamic typing][63] and a mix of [reference counting][64] and a cycle-detecting garbage collector for [memory management][20]. An important feature of Python is dynamic [name resolution][65] ([late binding][66]), which binds method and variable names during program execution.

The design of Python offers some support for [functional programming][17] in the [Lisp][67] tradition. The language has map(), reduce() and filter() functions; [list comprehensions][68], [dictionaries][69], and sets; and [generator][70] expressions.[\[42\]][71] The standard library has two modules (itertools and functools) that implement functional tools borrowed from [Haskell][72] and [Standard ML][73].[\[43\]][74]

The core philosophy of the language is summarized by the document _The [Zen of Python][75]_ (_PEP 20_), which includes [aphorisms][76] such as:[\[44\]][77]

Rather than requiring all desired functionality to be built into the language's core, Python was designed to be highly extensible. Python can also be embedded in existing applications that need a programmable interface. This design of a small core language with a large standard library and an easily extensible interpreter was intended by Van Rossum from the start because of his frustrations with [ABC][33], which espoused the opposite mindset.[\[30\]][28]

While offering choice in coding methodology, the Python philosophy rejects exuberant syntax, such as in [Perl][78], in favor of a sparser, less-cluttered grammar. As [Alex Martelli][79] put it: "To describe something as clever is _not_ considered a compliment in the Python culture."[\[45\]][80] Python's philosophy rejects the Perl "[there is more than one way to do it][81]" approach to language design in favor of "there should be one---and preferably only one---obvious way to do it".[\[44\]][77]

Python's developers strive to avoid [premature optimization][82], and moreover, reject patches to non-critical parts of CPython that would offer a marginal increase in speed at the cost of clarity.[\[46\]][83] When speed is important, a Python programmer can move time-critical functions to extension modules written in languages such as C, or try using [PyPy][84], a [just-in-time compiler][85]. [Cython][86] is also available, which translates a Python script into C and makes direct C-level API calls into the Python interpreter.

An important goal of Python's developers is making it fun to use. This is reflected in the origin of the name, which comes from [Monty Python][87],[\[47\]][88] and in an occasionally playful approach to tutorials and reference materials, such as using examples that refer to spam and eggs instead of the standard [foo and bar][89].[\[48\]][90][\[49\]][91]

A common [neologism][92] in the Python community is _pythonic_, which can have a wide range of meanings related to program style. To say that code is pythonic is to say that it uses Python idioms well, that it is natural or shows fluency in the language, that it conforms with Python's minimalist philosophy and emphasis on readability. In contrast, code that is difficult to understand or reads like a rough transcription from another programming language is called _unpythonic_.

Users and admirers of Python, especially those considered knowledgeable or experienced, are often referred to as _Pythonists_, _Pythonistas_, and _Pythoneers_.[\[50\]][93][\[51\]][94]

## Syntax and semantics

Python is intended to be a highly readable language. It is designed to have an uncluttered visual layout, often using English keywords where other languages use punctuation. Further, Python has fewer syntactic exceptions and special cases than [C][42] or [Pascal][95].[\[52\]][96]

## Indentation

Python uses [whitespace][97] indentation to delimit [blocks][98] - rather than [curly braces][99] or keywords. An increase in indentation comes after certain statements; a decrease in indentation signifies the end of the current block.[\[53\]][100] This feature is also sometimes termed the [off-side rule][101].

## Statements and control flow

Python's [statements][102] include (among others):

Python does not support [tail call][103] optimization or [first-class continuations][104], and, according to Guido van Rossum, it never will.[\[55\]][105][\[56\]][106] However, better support for [coroutine][107]-like functionality is provided in 2.5, by extending Python's [generators][108].[\[57\]][109] Before 2.5, generators were [lazy][110] [iterators][111]; information was passed unidirectionally out of the generator. As of Python 2.5, it is possible to pass information back into a generator function, and as of Python 3.3, the information can be passed through multiple stack levels.[\[58\]][112]

## Expressions

Some Python [expressions][113] are similar to languages such as [C][42] and [Java][9], while some are not:

In Python, a distinction between expressions and statements is rigidly enforced, in contrast to languages such as [Common Lisp][114], [Scheme][115], or [Ruby][116]. This leads to duplicating some functionality. For example:

Statements cannot be a part of an expression, so list and other comprehensions or [lambda expressions][117], all being expressions, cannot contain statements. A particular case of this is that an assignment statement such as `a = 1` cannot form part of the conditional expression of a conditional statement. This has the advantage of avoiding a classic C error of mistaking an assignment operator `=` for an equality operator `==` in conditions: `if (c = 1) { ... }` is syntactically valid (but probably unintended) C code but `if c = 1: ...` causes a syntax error in Python.

## Methods

[Methods][118] on objects are [functions][119] attached to the object's class; the syntax `instance.method(argument)` is, for normal methods and functions, [syntactic sugar][120] for `Class.method(instance, argument)`. Python methods have an explicit `[self][121]` parameter to access [instance data][122], in contrast to the implicit `self` (or `this`) in some other object-oriented programming languages (e.g., [C++][8], [Java][9], [Objective-C][123], or [Ruby][116]).[\[64\]][124]

## Typing

Python uses [duck typing][125] and has typed objects but untyped variable names. Type constraints are not checked at [compile time][126]; rather, operations on an object may fail, signifying that the given object is not of a suitable type. Despite being [dynamically typed][127], Python is [strongly typed][128], forbidding operations that are not well-defined (for example, adding a number to a string) rather than silently attempting to make sense of them.

Python allows programmers to define their own types using [classes][129], which are most often used for [object-oriented programming][15]. New [instances][130] of classes are constructed by calling the class (for example, `SpamClass()` or `EggsClass()`), and the classes are instances of the [metaclass][131] `type` (itself an instance of itself), allowing [metaprogramming][54] and [reflection][132].

Before version 3.0, Python had two kinds of classes: _old-style_ and _new-style_.[\[65\]][133] Old-style classes were eliminated in Python 3.0, making all classes new-style. In versions between 2.2 and 3.0, both kinds of classes could be used. The syntax of both styles is the same, the difference being whether the class `object` is inherited from, directly or indirectly (all new-style classes inherit from `object` and are instances of `type`).

## Mathematics

Python has the usual C arithmetic operators (`+`, `-`, `*`, `/`, `%`). It also has `**` for exponentiation, e.g. `5**3 == 125` and `9**0.5 == 3.0`, and a new matrix multiply `@` operator is included in version 3.5\.[\[67\]][134]

The behavior of division has changed significantly over time:[\[68\]][135]

Rounding towards negative infinity, though different from most languages, adds consistency. For instance, it means that the equation `(a+b) // b == a // b + 1` is always true. It also means that the equation `b * (a // b) + a % b == a` is valid for both positive and negative values of `a`. However, maintaining the validity of this equation means that while the result of `a % b` is, as expected, in the [half-open interval][136] \[0, _b_), where `b` is a positive integer, it has to lie in the interval (_b_, 0\] when `b` is negative.[\[69\]][137]

Python provides a `round` function for [rounding][138] a float to the nearest integer. For [tie-breaking][139], versions before 3 use round-away-from-zero: `round(0.5)` is 1.0, `round(-0.5)` is −1.0\.[\[70\]][140] Python 3 uses [round to even][141]: `round(1.5)` is 2, `round(2.5)` is 2\.[\[71\]][142]

Python allows boolean expressions with multiple equality relations in a manner that is consistent with general use in mathematics. For example, the expression `a < b < c` tests whether `a` is less than `b` and `b` is less than `c`. C-derived languages interpret this expression differently: in C, the expression would first evaluate `a < b`, resulting in 0 or 1, and that result would then be compared with `c`.[\[72\]][143]\[_[page needed][144]_\]

Python has extensive built-in support for [arbitrary precision arithmetic][145]. Integers are transparently switched from the machine-supported maximum fixed-precision (usually 32 or 64 bits), belonging to the python type `int`, to arbitrary precision, belonging to the python type `long`, where needed. The latter have an "L" suffix in their textual representation.[\[73\]][146] The `Decimal` type/class in module `decimal` (since version 2.4) provides decimal floating point numbers to arbitrary precision and several rounding modes.[\[74\]][147] The `Fraction` type in module `fractions` (since version 2.6) provides arbitrary precision for rational numbers.[\[75\]][148]

Due to Python's extensive mathematics library, it is frequently used as a scientific scripting language to aid in problems such as numerical data processing and manipulation.

## Libraries

Python has a large [standard library][21], commonly cited as one of Python's greatest strengths,[\[76\]][149] providing tools suited to many tasks. This is deliberate and has been described as a "batteries included"[\[29\]][22] Python philosophy. For Internet-facing applications, many standard formats and protocols (such as [MIME][150] and [HTTP][151]) are supported. Modules for creating [graphical user interfaces][152], connecting to [relational databases][153], [pseudorandom number generators][154], arithmetic with arbitrary precision decimals,[\[77\]][155] manipulating [regular expressions][156], and doing [unit testing][157] are also included.

Some parts of the standard library are covered by specifications (for example, the [Web Server Gateway Interface][158] (WSGI) implementation `wsgiref` follows PEP 333[\[78\]][159]), but most modules are not. They are specified by their code, internal documentation, and test suite (if supplied). However, because most of the standard library is cross-platform Python code, only a few modules need altering or rewriting for variant implementations.

The standard library is not needed to run Python or embed it in an application. For example, [Blender][160] 2.49 omits most of the standard library.

As of November, 2016, the [Python Package Index][161], the official repository containing third-party software for Python, contains over 92,000[\[79\]][162] packages offering a wide range of functionality, including:

## Development environments

Most Python implementations (including CPython) can function as a [command line interpreter][163], for which the user enters statements sequentially and receives the results immediately ([read--eval--print loop][164] (REPL)). In short, Python acts as a [command-line interface][165] or [shell][166].

Other shells add abilities beyond those in the basic interpreter, including [IDLE][167] and [IPython][168]. While generally following the visual style of the Python shell, they implement features like auto-completion, session state retention, and syntax highlighting.

In addition to standard desktop [integrated development environments][169] ([Python IDEs][170]), there are also [web browser][171]-based IDEs, [SageMath][172] (intended for developing science and math-related Python programs), and a browser-based IDE and hosting environment, [PythonAnywhere][173]. Additionally, the Canopy IDE is also an option for creating programs written in Python.[\[80\]][174]

## Implementations

The main Python implementation, named [CPython][24], is written in [C][42] meeting the [C89][175] standard.[\[81\]][176] It compiles Python programs into intermediate [bytecode][177],[\[82\]][178] which is executed by the [virtual machine][179].[\[83\]][180] CPython is distributed with a large standard library written in a mixture of C and Python. It is available in versions for many platforms, including [Windows][181] and most modern [Unix-like][182] systems. CPython was intended from almost its very conception to be cross-platform.[\[84\]][183]

[PyPy][84] is a fast, compliant[\[85\]][184] interpreter of Python 2.7 and 3.2\. Its [just-in-time compiler][85] brings a significant speed improvement over CPython.[\[86\]][185] A version taking advantage of [multi-core processors][186] using [software transactional memory][187] is being created.[\[87\]][188]

[Stackless Python][189] is a significant fork of CPython that implements [microthreads][190]; it does not use the C memory stack, thus allowing massively concurrent programs. PyPy also has a stackless version.[\[88\]][191]

[MicroPython][192] is a lean, fast Python 3 variant that is optimised to run on [microcontrollers][193].

Other just-in-time compilers have been developed in the past, but are now unsupported:

In 2005, [Nokia][194] released a Python interpreter for the [Series 60][195] mobile phones named [PyS60][196]. It includes many of the modules from the CPython implementations and some added modules to integrate with the [Symbian][197] operating system. This project has been kept up to date to run on all variants of the S60 platform and there are several third party modules available. The Nokia [N900][198] also supports Python with [GTK][199] widget libraries, with the feature that programs can be both written and run on the target device.[\[90\]][200]

There are several compilers to high-level [object languages][201], with either unrestricted Python, a restricted subset of Python, or a language similar to Python as the source language:

A performance comparison of various Python implementations on a non-numerical (combinatorial) workload was presented at EuroSciPy '13\.[\[91\]][202]

## Development

Python's development is conducted largely through the **Python Enhancement Proposal** (PEP) process. The PEP process is the primary mechanism for proposing major new features, for collecting community input on an issue, and for documenting the design decisions that have gone into Python.[\[92\]][203] Outstanding PEPs are reviewed and commented upon by the Python community and by Van Rossum, the Python project's [benevolent dictator for life][39].[\[92\]][203]

Enhancement of the language goes along with development of the CPython reference implementation. The mailing list python-dev is the primary forum for discussion about the language's development; specific issues are discussed in the [Roundup][204] [bug tracker][205] maintained at python.org.[\[93\]][206] Development takes place on a [self-hosted][207] source code repository running [Mercurial][208].[\[94\]][209]

CPython's public releases come in three types, distinguished by which part of the version number is incremented:

Many [alpha, beta, and release-candidates][210] are also released as previews, and for testing before final releases. Although there is a rough schedule for each release, this is often pushed back if the code is not ready. The development team monitors the state of the code by running the large [unit test][211] suite during development, and using the [BuildBot][212] [continuous integration][213] system.[\[97\]][214]

The community of Python developers has also contributed over 86,000[\[98\]][215] software modules (as of August 20, 2016) to the [Python Package Index][161] (PyPI), the official repository of third-party libraries for Python.

The major [academic conference][216] on Python is named [PyCon][217]. There are special mentoring programmes like the [Pyladies][218].

## Naming

Python's name is derived from the television series _[Monty Python's Flying Circus][44]_,[\[99\]][219] and it is common to use Monty Python references in example code.[\[100\]][220] For example, the [metasyntactic variables][221] often used in Python literature are [_spam_ and _eggs_][222], instead of the traditional [_foo_ and _bar_][89].[\[100\]][220][\[101\]][223] Also, the official Python documentation often contains various obscure Monty Python references.

The prefix _Py-_ is used to show that something is related to Python. Examples of the use of this prefix in names of Python applications or libraries include [Pygame][224], a [binding][225] of [SDL][226] to Python (commonly used to create games); [PyS60][196], an implementation for the [Symbian][197] [S60][227] operating system; [PyQt][228] and [PyGTK][229], which bind [Qt][230] and [GTK][199], respectively, to Python; and [PyPy][84], a Python implementation originally written in Python.

## Uses

Since 2003, Python has consistently ranked in the top ten most popular programming languages as measured by the [TIOBE Programming Community Index][231]. As of August 2016, it is the fifth most popular language.[\[102\]][232] It was ranked as Programming Language of the Year for the year 2007 and 2010\.[\[24\]][4] It is the third most popular language whose [grammatical syntax][233] is not predominantly based on [C][42], e.g. C++, Objective-C (note, C\# and Java only have partial syntactic similarity to C, such as the use of curly braces, and are closer in similarity to each other than C).

An empirical study found scripting languages (such as Python) more productive than conventional languages (such as C and Java) for a programming problem involving string manipulation and search in a dictionary. Memory consumption was often "better than Java and not much worse than C or C++".[\[103\]][234]

Large organizations that make use of Python include [Wikipedia][235], [Google][236],[\[104\]][237] [Yahoo!][238],[\[105\]][239] [CERN][240],[\[106\]][241] [NASA][242],[\[107\]][243] and some smaller ones like [ILM][244],[\[108\]][245] and [ITA][246].[\[109\]][247] The social news networking site, [Reddit][248], is written entirely in Python.

Python can serve as a [scripting language][249] for [web applications][250], e.g., via [mod\_wsgi][251] for the [Apache web server][252].[\[110\]][253] With [Web Server Gateway Interface][158], a standard API has evolved to facilitate these applications. [Web frameworks][254] like [Django][255], [Pylons][256], [Pyramid][257], [TurboGears][258], [web2py][259], [Tornado][260], [Flask][261], [Bottle][262] and [Zope][263] support developers in the design and maintenance of complex applications. [Pyjamas][264] and [IronPython][265] can be used to develop the client-side of Ajax-based applications. [SQLAlchemy][266] can be used as [data mapper][267] to a relational database. [Twisted][268] is a framework to program communications between computers, and is used (for example) by [Dropbox][269].

Libraries like [NumPy][270], [SciPy][271] and [Matplotlib][272] allow the effective use of Python in scientific computing,[\[111\]][273][\[112\]][274] with specialized libraries such as [BioPython][275] and [Astropy][276] providing domain-specific functionality. [SageMath][172] is a [mathematical software][277] with a "[notebook][278]" programmable in Python: its library covers many aspects of [mathematics][279], including [algebra][280], [combinatorics][281], [numerical mathematics][282], [number theory][283], and [calculus][284]. The Python language re-implemented in [Java][9] platform is used for numeric and statistical calculations with 2D/3D visualization by the [DMelt][285] project. [\[113\]][286] [\[114\]][287]

Python has been successfully embedded in many software products as a scripting language, including in [finite element method][288] software such as [Abaqus][289], 3D parametric modeler like [FreeCAD][290], 3D animation packages such as [3ds Max][291], [Blender][160], [Cinema 4D][292], [Lightwave][293], [Houdini][294], [Maya][295], [modo][296], [MotionBuilder][297], [Softimage][298], the visual effects compositor [Nuke][299], 2D imaging programs like [GIMP][300],[\[115\]][301] [Inkscape][302], [Scribus][303] and [Paint Shop Pro][304],[\[116\]][305] and [musical notation][306] program or [scorewriter][307] [capella][308]. [GNU Debugger][309] uses Python as a [pretty printer][310] to show complex structures such as C++ containers. [Esri][311] promotes Python as the best choice for writing scripts in [ArcGIS][312].[\[117\]][313] It has also been used in several video games,[\[118\]][314][\[119\]][315] and has been adopted as first of the three available [programming languages][316] in [Google App Engine][317], the other two being [Java][318] and [Go][319].[\[120\]][320] Python is also used in [algorithmic trading][321] and quantitative finance.[\[121\]][322] Python can also be implemented in APIs of online brokerages that run on other languages by using wrappers.[\[122\]][323]

Python has been used in [artificial intelligence][324] tasks.[\[123\]][325][\[124\]][326][\[125\]][327][\[126\]][328] As a scripting language with module architecture, simple syntax and rich text processing tools, Python is often used for [natural language processing][329] tasks.[\[127\]][330]

Many operating systems include Python as a standard component; the language ships with most [Linux distributions][331], [AmigaOS 4][332], [FreeBSD][333], [NetBSD][334], [OpenBSD][335] and [OS X][336], and can be used from the terminal. Many Linux distributions use installers written in Python: [Ubuntu][337] uses the [Ubiquity][338] installer, while [Red Hat Linux][339] and [Fedora][340] use the [Anaconda][341] installer. [Gentoo Linux][342] uses Python in its [package management system][343], [Portage][344].

Python has also seen extensive use in the [information security][345] industry, including in exploit development.[\[128\]][346][\[129\]][347]

Most of the [Sugar][348] software for the [One Laptop per Child][349] XO, now developed at [Sugar Labs][350], is written in Python.[\[130\]][351]

The [Raspberry Pi][352] [single-board computer][353] project has adopted Python as its main user-programming language.

[LibreOffice][354] includes Python and intends to replace Java with Python. Python Scripting Provider is a core feature[\[131\]][355] since Version 4.0 from 7 February 2013\.

## Languages influenced by Python

Python's design and philosophy have influenced several programming languages, including:

Python's development practices have also been emulated by other languages. The practice of requiring a document describing the rationale for, and issues surrounding, a change to the language (in Python's case, a PEP) is also used in [Tcl][356][\[141\]][357] and [Erlang][358][\[142\]][359] because of Python's influence.

Python has been awarded a TIOBE Programming Language of the Year award twice (in 2007 and 2010), which is given to the language with the greatest growth in popularity over the course of a year, as measured by the [TIOBE index][360].[\[143\]][361]

## See also

## References

## Further reading

## External links

[0]: /wiki/High-level_programming_language "High-level programming language"
[1]: /wiki/General-purpose_programming_language "General-purpose programming language"
[2]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[3]: /wiki/Dynamic_programming_language "Dynamic programming language"
[4]: #cite_note-AutoNT-34-24
[5]: #cite_note-25
[6]: /wiki/Readability "Readability"
[7]: /wiki/Source_lines_of_code "Source lines of code"
[8]: /wiki/C%2B%2B "C++"
[9]: /wiki/Java_(programming_language) "Java (programming language)"
[10]: #cite_note-Summerfield-26
[11]: #cite_note-27
[12]: /wiki/Programming_in_the_large_and_programming_in_the_small "Programming in the large and programming in the small"
[13]: #cite_note-AutoNT-7-28
[14]: /wiki/Programming_paradigm "Programming paradigm"
[15]: /wiki/Object-oriented_programming "Object-oriented programming"
[16]: /wiki/Imperative_programming "Imperative programming"
[17]: /wiki/Functional_programming "Functional programming"
[18]: /wiki/Procedural_programming "Procedural programming"
[19]: /wiki/Dynamic_type "Dynamic type"
[20]: /wiki/Memory_management "Memory management"
[21]: /wiki/Standard_library "Standard library"
[22]: #cite_note-About-29
[23]: /wiki/Operating_system "Operating system"
[24]: /wiki/CPython "CPython"
[25]: /wiki/Reference_implementation "Reference implementation"
[26]: /wiki/Open-source_software "Open-source software"
[27]: /wiki/Python_Software_Foundation "Python Software Foundation"
[28]: #cite_note-venners-interview-pt-1-30
[29]: #cite_note-timeline-of-python-31
[30]: /wiki/Guido_van_Rossum "Guido van Rossum"
[31]: /wiki/Centrum_Wiskunde_%26_Informatica "Centrum Wiskunde & Informatica"
[32]: /wiki/Netherlands "Netherlands"
[33]: /wiki/ABC_(programming_language) "ABC (programming language)"
[34]: /wiki/SETL "SETL"
[35]: #cite_note-AutoNT-12-32
[36]: /wiki/Exception_handling "Exception handling"
[37]: /wiki/Amoeba_(operating_system) "Amoeba (operating system)"
[38]: #cite_note-faq-created-8
[39]: /wiki/Benevolent_dictator_for_life "Benevolent dictator for life"
[40]: #cite_note-33
[41]: /wiki/Unix "Unix"
[42]: /wiki/C_(programming_language) "C (programming language)"
[43]: /wiki/Hacker_(programmer_subculture) "Hacker (programmer subculture)"
[44]: /wiki/Monty_Python%27s_Flying_Circus "Monty Python's Flying Circus"
[45]: /wiki/Garbage_collection_(computer_science) "Garbage collection (computer science)"
[46]: /wiki/Unicode "Unicode"
[47]: #cite_note-newin-2.0-34
[48]: #cite_note-3.0-release-35
[49]: /wiki/Backporting "Backporting"
[50]: #cite_note-pep-3000-36
[51]: /wiki/Multi-paradigm_programming_language "Multi-paradigm programming language"
[52]: /wiki/Structured_programming "Structured programming"
[53]: /wiki/Aspect-oriented_programming "Aspect-oriented programming"
[54]: /wiki/Metaprogramming "Metaprogramming"
[55]: #cite_note-AutoNT-13-37
[56]: /wiki/Metaobject "Metaobject"
[57]: #cite_note-AutoNT-14-38
[58]: /wiki/Design_by_contract "Design by contract"
[59]: #cite_note-AutoNT-15-39
[60]: #cite_note-AutoNT-16-40
[61]: /wiki/Logic_programming "Logic programming"
[62]: #cite_note-AutoNT-17-41
[63]: /wiki/Dynamic_typing "Dynamic typing"
[64]: /wiki/Reference_counting "Reference counting"
[65]: /wiki/Name_resolution_(programming_languages) "Name resolution (programming languages)"
[66]: /wiki/Late_binding "Late binding"
[67]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[68]: /wiki/List_comprehension "List comprehension"
[69]: /wiki/Associative_array "Associative array"
[70]: /wiki/Generator_(computer_programming) "Generator (computer programming)"
[71]: #cite_note-AutoNT-59-42
[72]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[73]: /wiki/Standard_ML "Standard ML"
[74]: #cite_note-AutoNT-18-43
[75]: /wiki/Zen_of_Python "Zen of Python"
[76]: /wiki/Aphorism "Aphorism"
[77]: #cite_note-PEP20-44
[78]: /wiki/Perl "Perl"
[79]: /wiki/Alex_Martelli "Alex Martelli"
[80]: #cite_note-AutoNT-19-45
[81]: /wiki/There_is_more_than_one_way_to_do_it "There is more than one way to do it"
[82]: /wiki/Premature_optimization "Premature optimization"
[83]: #cite_note-AutoNT-20-46
[84]: /wiki/PyPy "PyPy"
[85]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[86]: /wiki/Cython "Cython"
[87]: /wiki/Monty_Python "Monty Python"
[88]: #cite_note-47
[89]: /wiki/Foobar "Foobar"
[90]: #cite_note-48
[91]: #cite_note-49
[92]: /wiki/Neologism "Neologism"
[93]: #cite_note-AutoNT-27-50
[94]: #cite_note-AutoNT-25-51
[95]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[96]: #cite_note-AutoNT-52-52
[97]: /wiki/Whitespace_character "Whitespace character"
[98]: /wiki/Block_(programming) "Block (programming)"
[99]: /wiki/Curly_bracket_programming_language "Curly bracket programming language"
[100]: #cite_note-AutoNT-53-53
[101]: /wiki/Off-side_rule "Off-side rule"
[102]: /wiki/Statement_(computer_science) "Statement (computer science)"
[103]: /wiki/Tail_call "Tail call"
[104]: /wiki/First-class_continuations "First-class continuations"
[105]: #cite_note-AutoNT-55-55
[106]: #cite_note-AutoNT-56-56
[107]: /wiki/Coroutine "Coroutine"
[108]: /wiki/Generator_(computer_science) "Generator (computer science)"
[109]: #cite_note-AutoNT-57-57
[110]: /wiki/Lazy_evaluation "Lazy evaluation"
[111]: /wiki/Iterator "Iterator"
[112]: #cite_note-AutoNT-58-58
[113]: /wiki/Expression_(computer_science) "Expression (computer science)"
[114]: /wiki/Common_Lisp "Common Lisp"
[115]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[116]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[117]: /wiki/Lambda_(programming) "Lambda (programming)"
[118]: /wiki/Method_(programming) "Method (programming)"
[119]: /wiki/Function_(programming) "Function (programming)"
[120]: /wiki/Syntactic_sugar "Syntactic sugar"
[121]: /wiki/This_(computer_programming) "This (computer programming)"
[122]: /wiki/Instance_data "Instance data"
[123]: /wiki/Objective-C "Objective-C"
[124]: #cite_note-AutoNT-61-64
[125]: /wiki/Duck_typing "Duck typing"
[126]: /wiki/Compile_time "Compile time"
[127]: /wiki/Type_system#Dynamic_type_checking_and_runtime_type_information "Type system"
[128]: /wiki/Strongly_typed_programming_language "Strongly typed programming language"
[129]: /wiki/Class_(computer_science) "Class (computer science)"
[130]: /wiki/Object_(computer_science) "Object (computer science)"
[131]: /wiki/Metaclass "Metaclass"
[132]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[133]: #cite_note-classy-65
[134]: #cite_note-67
[135]: #cite_note-pep0238-68
[136]: /wiki/Half-open_interval "Half-open interval"
[137]: #cite_note-AutoNT-62-69
[138]: /wiki/Rounding "Rounding"
[139]: /wiki/Rounding#Tie-breaking "Rounding"
[140]: #cite_note-AutoNT-63-70
[141]: /wiki/Round_to_even "Round to even"
[142]: #cite_note-AutoNT-64-71
[143]: #cite_note-AutoNT-65-72
[144]: /wiki/Wikipedia:Citing_sources "Wikipedia:Citing sources"
[145]: /wiki/Arbitrary_precision_arithmetic "Arbitrary precision arithmetic"
[146]: #cite_note-73
[147]: #cite_note-74
[148]: #cite_note-75
[149]: #cite_note-AutoNT-86-76
[150]: /wiki/MIME "MIME"
[151]: /wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol"
[152]: /wiki/Graphical_user_interface "Graphical user interface"
[153]: /wiki/Relational_database "Relational database"
[154]: /wiki/Pseudorandom_number_generator "Pseudorandom number generator"
[155]: #cite_note-AutoNT-88-77
[156]: /wiki/Regular_expression "Regular expression"
[157]: /wiki/Unit_testing "Unit testing"
[158]: /wiki/Web_Server_Gateway_Interface "Web Server Gateway Interface"
[159]: #cite_note-AutoNT-89-78
[160]: /wiki/Blender_(software) "Blender (software)"
[161]: /wiki/Python_Package_Index "Python Package Index"
[162]: #cite_note-79
[163]: /wiki/Command_line_interpreter "Command line interpreter"
[164]: /wiki/Read%E2%80%93eval%E2%80%93print_loop "Read–eval–print loop"
[165]: /wiki/Command-line_interface "Command-line interface"
[166]: /wiki/Shell_(computing) "Shell (computing)"
[167]: /wiki/IDLE_(Python) "IDLE (Python)"
[168]: /wiki/IPython "IPython"
[169]: /wiki/Integrated_development_environment "Integrated development environment"
[170]: /wiki/Python_IDE "Python IDE"
[171]: /wiki/Web_browser "Web browser"
[172]: /wiki/SageMath "SageMath"
[173]: /wiki/PythonAnywhere "PythonAnywhere"
[174]: #cite_note-80
[175]: /wiki/C89_(C_version) "C89 (C version)"
[176]: #cite_note-AutoNT-66-81
[177]: /wiki/Bytecode "Bytecode"
[178]: #cite_note-AutoNT-67-82
[179]: /wiki/Virtual_machine "Virtual machine"
[180]: #cite_note-AutoNT-68-83
[181]: /wiki/Microsoft_Windows "Microsoft Windows"
[182]: /wiki/Unix-like "Unix-like"
[183]: #cite_note-AutoNT-69-84
[184]: #cite_note-AutoNT-70-85
[185]: #cite_note-AutoNT-71-86
[186]: /wiki/Multi-core_processor "Multi-core processor"
[187]: /wiki/Software_transactional_memory "Software transactional memory"
[188]: #cite_note-AutoNT-72-87
[189]: /wiki/Stackless_Python "Stackless Python"
[190]: /wiki/Microthread "Microthread"
[191]: #cite_note-AutoNT-73-88
[192]: /wiki/MicroPython "MicroPython"
[193]: /wiki/Microcontroller "Microcontroller"
[194]: /wiki/Nokia "Nokia"
[195]: /wiki/Series_60 "Series 60"
[196]: /wiki/PyS60 "PyS60"
[197]: /wiki/Symbian "Symbian"
[198]: /wiki/N900 "N900"
[199]: /wiki/GTK "GTK"
[200]: #cite_note-90
[201]: /wiki/Object_language "Object language"
[202]: #cite_note-91
[203]: #cite_note-PepCite000-92
[204]: /wiki/Roundup_(issue_tracker) "Roundup (issue tracker)"
[205]: /wiki/Bug_tracker "Bug tracker"
[206]: #cite_note-AutoNT-21-93
[207]: /wiki/Self-hosted "Self-hosted"
[208]: /wiki/Mercurial "Mercurial"
[209]: #cite_note-py_dev_guide-94
[210]: /wiki/Beta_release "Beta release"
[211]: /wiki/Unit_test "Unit test"
[212]: /wiki/BuildBot "BuildBot"
[213]: /wiki/Continuous_integration "Continuous integration"
[214]: #cite_note-AutoNT-23-97
[215]: #cite_note-98
[216]: /wiki/Academic_conference "Academic conference"
[217]: /wiki/PyCon "PyCon"
[218]: /wiki/Pyladies "Pyladies"
[219]: #cite_note-AutoNT-24-99
[220]: #cite_note-tutorial-chapter1-100
[221]: /wiki/Metasyntactic_variable "Metasyntactic variable"
[222]: /wiki/Spam_(Monty_Python) "Spam (Monty Python)"
[223]: #cite_note-AutoNT-26-101
[224]: /wiki/Pygame "Pygame"
[225]: /wiki/Language_binding "Language binding"
[226]: /wiki/Simple_DirectMedia_Layer "Simple DirectMedia Layer"
[227]: /wiki/S60_(software_platform) "S60 (software platform)"
[228]: /wiki/PyQt "PyQt"
[229]: /wiki/PyGTK "PyGTK"
[230]: /wiki/Qt_(software) "Qt (software)"
[231]: /wiki/TIOBE_Programming_Community_Index "TIOBE Programming Community Index"
[232]: #cite_note-102
[233]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[234]: #cite_note-AutoNT-28-103
[235]: /wiki/Wikipedia "Wikipedia"
[236]: /wiki/Google "Google"
[237]: #cite_note-quotes-about-python-104
[238]: /wiki/Yahoo! "Yahoo!"
[239]: #cite_note-AutoNT-29-105
[240]: /wiki/CERN "CERN"
[241]: #cite_note-AutoNT-30-106
[242]: /wiki/NASA "NASA"
[243]: #cite_note-AutoNT-31-107
[244]: /wiki/Industrial_Light_%26_Magic "Industrial Light & Magic"
[245]: #cite_note-AutoNT-32-108
[246]: /wiki/ITA_Software "ITA Software"
[247]: #cite_note-AutoNT-33-109
[248]: /wiki/Reddit "Reddit"
[249]: /wiki/Scripting_language "Scripting language"
[250]: /wiki/Web_application "Web application"
[251]: /wiki/Mod_wsgi "Mod wsgi"
[252]: /wiki/Apache_web_server "Apache web server"
[253]: #cite_note-AutoNT-35-110
[254]: /wiki/Web_framework "Web framework"
[255]: /wiki/Django_(web_framework) "Django (web framework)"
[256]: /wiki/Pylons_(web_framework) "Pylons (web framework)"
[257]: /wiki/Pyramid_(web_framework) "Pyramid (web framework)"
[258]: /wiki/TurboGears "TurboGears"
[259]: /wiki/Web2py "Web2py"
[260]: /wiki/Tornado_(web_server) "Tornado (web server)"
[261]: /wiki/Flask_(web_framework) "Flask (web framework)"
[262]: /wiki/Bottle_(web_framework) "Bottle (web framework)"
[263]: /wiki/Zope "Zope"
[264]: /wiki/Pyjamas_(software) "Pyjamas (software)"
[265]: /wiki/IronPython "IronPython"
[266]: /wiki/SQLAlchemy "SQLAlchemy"
[267]: /wiki/Data_mapper_pattern "Data mapper pattern"
[268]: /wiki/Twisted_(software) "Twisted (software)"
[269]: /wiki/Dropbox_(service) "Dropbox (service)"
[270]: /wiki/NumPy "NumPy"
[271]: /wiki/SciPy "SciPy"
[272]: /wiki/Matplotlib "Matplotlib"
[273]: #cite_note-cise-111
[274]: #cite_note-millman-112
[275]: /wiki/BioPython "BioPython"
[276]: /wiki/Astropy "Astropy"
[277]: /wiki/Mathematical_software "Mathematical software"
[278]: /w/index.php?title=Electronic_Notebook&action=edit&redlink=1 "Electronic Notebook (page does not exist)"
[279]: /wiki/Mathematics "Mathematics"
[280]: /wiki/Algebra "Algebra"
[281]: /wiki/Combinatorics "Combinatorics"
[282]: /wiki/Numerical_mathematics "Numerical mathematics"
[283]: /wiki/Number_theory "Number theory"
[284]: /wiki/Calculus "Calculus"
[285]: /wiki/DataMelt "DataMelt"
[286]: #cite_note-schekanov-113
[287]: #cite_note-schekanov2-114
[288]: /wiki/Finite_element_method "Finite element method"
[289]: /wiki/Abaqus "Abaqus"
[290]: /wiki/FreeCAD "FreeCAD"
[291]: /wiki/3ds_Max "3ds Max"
[292]: /wiki/Cinema_4D "Cinema 4D"
[293]: /wiki/Lightwave "Lightwave"
[294]: /wiki/Houdini_(software) "Houdini (software)"
[295]: /wiki/Maya_(software) "Maya (software)"
[296]: /wiki/Modo_(software) "Modo (software)"
[297]: /wiki/MotionBuilder "MotionBuilder"
[298]: /wiki/Autodesk_Softimage "Autodesk Softimage"
[299]: /wiki/Nuke_(software) "Nuke (software)"
[300]: /wiki/GIMP "GIMP"
[301]: #cite_note-115
[302]: /wiki/Inkscape "Inkscape"
[303]: /wiki/Scribus "Scribus"
[304]: /wiki/Paint_Shop_Pro "Paint Shop Pro"
[305]: #cite_note-AutoNT-38-116
[306]: /wiki/Musical_notation "Musical notation"
[307]: /wiki/Scorewriter "Scorewriter"
[308]: /wiki/Capella_(notation_program) "Capella (notation program)"
[309]: /wiki/GNU_Debugger "GNU Debugger"
[310]: /wiki/Prettyprint "Prettyprint"
[311]: /wiki/Esri "Esri"
[312]: /wiki/ArcGIS "ArcGIS"
[313]: #cite_note-AutoNT-39-117
[314]: #cite_note-AutoNT-40-118
[315]: #cite_note-AutoNT-41-119
[316]: /wiki/Programming_language "Programming language"
[317]: /wiki/Google_App_Engine "Google App Engine"
[318]: /wiki/Java_(software_platform) "Java (software platform)"
[319]: /wiki/Go_(programming_language) "Go (programming language)"
[320]: #cite_note-AutoNT-42-120
[321]: /wiki/Algorithmic_trading "Algorithmic trading"
[322]: #cite_note-121
[323]: #cite_note-122
[324]: /wiki/Artificial_intelligence "Artificial intelligence"
[325]: #cite_note-AutoNT-43-123
[326]: #cite_note-AutoNT-44-124
[327]: #cite_note-AutoNT-45-125
[328]: #cite_note-AutoNT-46-126
[329]: /wiki/Natural_language_processing "Natural language processing"
[330]: #cite_note-AutoNT-47-127
[331]: /wiki/Linux_distribution "Linux distribution"
[332]: /wiki/AmigaOS_4 "AmigaOS 4"
[333]: /wiki/FreeBSD "FreeBSD"
[334]: /wiki/NetBSD "NetBSD"
[335]: /wiki/OpenBSD "OpenBSD"
[336]: /wiki/OS_X "OS X"
[337]: /wiki/Ubuntu_(operating_system) "Ubuntu (operating system)"
[338]: /wiki/Ubiquity_(software) "Ubiquity (software)"
[339]: /wiki/Red_Hat_Linux "Red Hat Linux"
[340]: /wiki/Fedora_(operating_system) "Fedora (operating system)"
[341]: /wiki/Anaconda_(installer) "Anaconda (installer)"
[342]: /wiki/Gentoo_Linux "Gentoo Linux"
[343]: /wiki/Package_management_system "Package management system"
[344]: /wiki/Portage_(software) "Portage (software)"
[345]: /wiki/Information_security "Information security"
[346]: #cite_note-AutoNT-49-128
[347]: #cite_note-AutoNT-50-129
[348]: /wiki/Sugar_(software) "Sugar (software)"
[349]: /wiki/One_Laptop_per_Child "One Laptop per Child"
[350]: /wiki/Sugar_Labs "Sugar Labs"
[351]: #cite_note-AutoNT-51-130
[352]: /wiki/Raspberry_Pi "Raspberry Pi"
[353]: /wiki/Single-board_computer "Single-board computer"
[354]: /wiki/LibreOffice "LibreOffice"
[355]: #cite_note-131
[356]: /wiki/Tcl "Tcl"
[357]: #cite_note-AutoNT-99-141
[358]: /wiki/Erlang_(programming_language) "Erlang (programming language)"
[359]: #cite_note-AutoNT-100-142
[360]: /wiki/TIOBE_index "TIOBE index"
[361]: #cite_note-AutoNT-101-143