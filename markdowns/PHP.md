**PHP** is a [server-side scripting][0] language designed primarily for [web development][1] but also used as a [general-purpose programming language][2]. Originally created by [Rasmus Lerdorf][3] in 1994,[\[5\]][4] the PHP [reference implementation][5] is now produced by The PHP Development Team.[\[6\]][6] PHP originally stood for _Personal Home Page_,[\[5\]][4] but it now stands for the [recursive acronym][7] _PHP: Hypertext Preprocessor_.[\[7\]][8]

PHP code may be embedded into [HTML][9] code, or it can be used in combination with various [web template systems][10], [web content management systems][11] and [web frameworks][12]. PHP code is usually processed by a PHP [interpreter][13] implemented as a [module][14] in the web server or as a [Common Gateway Interface][15] (CGI) executable. The web server combines the results of the interpreted and executed PHP code, which may be any type of data, including images, with the generated web page. PHP code may also be executed with a [command-line interface][16] (CLI) and can be used to implement [standalone][17] [graphical applications][18].[\[8\]][19]

The standard PHP interpreter, powered by the [Zend Engine][20], is [free software][21] released under the [PHP License][22]. PHP has been widely ported and can be deployed on most web servers on almost every [operating system][23] and [platform][24], free of charge.[\[9\]][25]

The PHP language evolved without a written [formal specification][26] or standard until 2014, leaving the canonical PHP interpreter as a _[de facto][27]_ standard. Since 2014 work has gone on to create a formal PHP specification.[\[10\]][28]

## History

## Early history

PHP development began in 1995 when [Rasmus Lerdorf][3] wrote several [Common Gateway Interface][15] (CGI) programs in C,[\[11\]][29][\[12\]][30][\[13\]][31] which he used to maintain his [personal homepage][32]. He extended them to work with [web forms][33] and to communicate with [databases][34], and called this implementation "Personal Home Page/Forms Interpreter" or PHP/FI.

PHP/FI could help to build simple, dynamic [web applications][35]. To accelerate [bug][36] reporting and to improve the code, Lerdorf initially announced the release of PHP/FI as "Personal Home Page Tools (PHP Tools) version 1.0" on the [Usenet][37] discussion group _comp.infosystems.www.authoring.cgi_ on June 8, 1995\.[\[14\]][38][\[15\]][39] This release already had the basic functionality that PHP has as of 2013. This included [Perl-like variables][40], form handling, and the ability to embed HTML. The [syntax][41] resembled that of Perl but was simpler, more limited and less consistent.[\[6\]][6]

Lerdorf did not intend the early PHP to become a new programming language, but it grew organically, with Lerdorf noting in retrospect: "I don't know how to stop it, there was never any intent to write a programming language \[...\] I have absolutely no idea how to write a programming language, I just kept adding the next logical step on the way."[\[16\]][42] A development team began to form and, after months of work and [beta][43] testing, officially released PHP/FI 2 in November 1997\.

The fact that PHP lacked an original overall design but instead developed organically has led to inconsistent naming of functions and inconsistent ordering of their parameters.[\[17\]][44] In some cases, the function names were chosen to match the lower-level libraries which PHP was "wrapping",[\[18\]][45] while in some very early versions of PHP the length of the function names was used internally as a [hash function][46], so names were chosen to improve the distribution of hash values.[\[19\]][47]

## PHP 3 and 4

[Zeev Suraski][48] and [Andi Gutmans][49] rewrote the [parser][50] in 1997 and formed the base of PHP 3, changing the language's name to the [recursive acronym][7] _PHP: Hypertext Preprocessor_.[\[6\]][6][\[20\]][51] Afterwards, public testing of PHP 3 began, and the official launch came in June 1998\. Suraski and Gutmans then started a new [rewrite][52] of PHP's core, producing the [Zend Engine][20] in 1999\.[\[21\]][53] They also founded [Zend Technologies][54] in [Ramat Gan][55], Israel.[\[6\]][6]

On May 22, 2000, PHP 4, powered by the Zend Engine 1.0, was released.[\[6\]][6] As of August 2008 this branch reached version 4.4.9\. PHP 4 is no longer under development nor will any security updates be released.[\[22\]][56][\[23\]][57]

## PHP 5

On July 13, 2004, PHP 5 was released, powered by the new Zend Engine II.[\[6\]][6] PHP 5 included new features such as improved support for [object-oriented programming][58], the PHP Data Objects (PDO) extension (which defines a lightweight and consistent interface for accessing databases), and numerous performance enhancements.[\[24\]][59] In 2008 PHP 5 became the only stable version under development. [Late static binding][60] had been missing from PHP and was added in version 5.3\.[\[25\]][61][\[26\]][62]

Many high-profile open-source projects ceased to support PHP 4 in new code as of February 5, 2008, because of the GoPHP5 initiative,[\[27\]][63] provided by a consortium of PHP developers promoting the transition from PHP 4 to PHP 5\.[\[28\]][64][\[29\]][65]

Over time, PHP interpreters became available on most existing [32-bit][66] and [64-bit][67] operating systems, either by building them from the PHP source code, or by using pre-built binaries.[\[30\]][68] For the PHP versions 5.3 and 5.4, the only available [Microsoft Windows][69] binary distributions were 32-bit [x86][70] builds,[\[31\]][71][\[32\]][72] requiring Windows 32-bit compatibility mode while using [Internet Information Services][73] (IIS) on a 64-bit Windows platform. PHP version 5.5 made the 64-bit [x86-64][74] builds available for Microsoft Windows.[\[33\]][75]

## PHP 6 and Unicode

PHP has received criticism due to lacking native [Unicode][76] support at the core language level, instead only supporting byte strings. In 2005, a project headed by Andrei Zmievski was initiated to bring native Unicode support throughout PHP, by embedding the [International Components for Unicode][77] (ICU) library, and representing text strings as [UTF-16][78] internally.[\[34\]][79] Since this would cause major changes both to the internals of the language and to user code, it was planned to release this as version 6.0 of the language, along with other major features then in development.[\[35\]][80]

However, a shortage of developers who understood the necessary changes, and performance problems arising from conversion to and from UTF-16, which is rarely used in a web context, led to delays in the project.[\[36\]][81] As a result, a PHP 5.3 release was created in 2009, with many non-Unicode features back-ported from PHP 6, notably namespaces. In March 2010, the project in its current form was officially abandoned, and a PHP 5.4 release was prepared containing most remaining non-Unicode features from PHP 6, such as traits and closure re-binding.[\[37\]][82] Initial hopes were that a new plan would be formed for Unicode integration, but as of 2014 none have been adopted.

## PHP 7

During 2014 and 2015, a new major PHP version was developed, which was numbered PHP 7\. The numbering of this version involved some debate.[\[38\]][83] While the PHP 6 Unicode experiment had never been released, several articles and book titles referenced the PHP 6 name, which might have caused confusion if a new release were to reuse the name.[\[39\]][84] After a vote, the name PHP 7 was chosen.[\[40\]][85]

The foundation of PHP 7 is a PHP [branch][86] that was originally dubbed _PHP next generation_ (_phpng_). It was authored by Dmitry Stogov, Xinchen Hui and Nikita Popov,[\[41\]][87] and aimed to optimize PHP performance by refactoring the Zend Engine to use more compact [data structures][88] with improved [cache locality][89] while retaining near-complete language compatibility.[\[42\]][90] As of 14 July 2014, [WordPress][91]-based benchmarks, which served as the main benchmark suite for the phpng project, showed an almost 100% increase in performance. Changes from phpng are also expected to make it easier to improve performance in the future, as more compact data structures and other changes are seen as better suited for a successful migration to a [just-in-time][92] (JIT) compiler.[\[43\]][93] Because of the significant changes, the reworked Zend Engine is called _Zend Engine 3_, succeeding Zend Engine 2 used in PHP 5\.[\[44\]][94]

Because of major internal changes in phpng, it must receive a new [major version][95] number of PHP, rather than a minor PHP 5 release, according to PHP's release process.[\[45\]][96] Major versions of PHP are allowed to break backward-compatibility of code and therefore PHP 7 presented an opportunity for other improvements beyond phpng that require backward-compatibility breaks, including wider use of [exceptions][97],[\[46\]][98][\[47\]][99] reworking variable syntax to be more consistent and complete,[\[48\]][100] and the deprecation or removal of various legacy features.[\[49\]][101][\[50\]][102]

PHP 7 also introduced new language features, including return type declarations for functions,[\[51\]][103] which complement the existing parameter type declarations, and support for the scalar types (integer, float, string, and boolean) in parameter and return type declarations.[\[52\]][104]

## Release history

Beginning on June 28, 2011, the PHP Group implemented a timeline for the release of new versions of PHP.[\[45\]][96] Under this system, at least one release should occur every month. Once per year, a minor release should occur which may include new features. Every minor release should at least be supported for two years with security and bug fixes, followed by at least one year of only security fixes, for a total of a three-year release process for every minor release. No new features, unless small and self-contained, are to be introduced into a minor release during the three-year release process.

## Mascot

The mascot of the PHP project is the _elePHPant_, a blue [elephant][105] with the PHP logo on its side, designed by Vincent Pontier[\[81\]][106] in 1998\.[\[82\]][107] The elePHPant is sometimes differently colored when in [plush toy][108] form.

## Syntax

The following ["Hello, World!" program][109] is written in PHP code embedded in an [HTML][9] document:

However, as no requirement exists for PHP code to be embedded in HTML, the simplest version of _Hello, World!_ may be written like this, with the closing tag omitted as preferred in files containing pure PHP code[\[83\]][110]

The PHP interpreter only executes PHP code within its [delimiters][111]. Anything outside its delimiters is not processed by PHP, although non-PHP text is still subject to [control structures][112] described in PHP code. The most common delimiters are _<?php_ to open and _?\>_ to close PHP sections. The shortened form _<?_ also exists. This short delimiter makes script files less portable, since support for them can be disabled in the local PHP configuration and it is therefore discouraged.[\[84\]][113][\[85\]][114] However, there is no recommendation against the use of the echo short tag _<?=_.[\[86\]][115] Prior to PHP 5.4.0, this short syntax for _echo()_ only works with the _short\_open\_tag_ configuration setting enabled, while for PHP 5.4.0 and later it is always available.[\[84\]][113][\[87\]][116][\[88\]][117] The purpose of all these delimiters is to separate PHP code from non-PHP content, such as [JavaScript][118] code or HTML markup.[\[89\]][119]

The first form of delimiters, _<?php_ and _?\>_, in [XHTML][120] and other [XML][121] documents, creates correctly formed XML processing instructions.[\[90\]][122] This means that the resulting mixture of PHP code and other markup in the server-side file is itself well-formed XML.

Variables are prefixed with a [dollar symbol][123], and a [type][124] does not need to be specified in advance. PHP 5 introduced _type hinting_ that allows functions to force their parameters to be objects of a specific class, arrays, interfaces or [callback functions][125]. However, before PHP 7.0, type hints could not be used with scalar types such as integer or string.[\[52\]][104]

Unlike function and class names, variable names are case sensitive. Both double-quoted ("") and [heredoc][126] strings provide the ability to interpolate a variable's value into the string.[\[91\]][127] PHP treats [newlines][128] as [whitespace][129] in the manner of a [free-form language][130], and statements are terminated by a semicolon.[\[92\]][131] PHP has three types of [comment syntax][132]: `/* */` marks block and inline comments; `//` as well as `#` are used for one-line comments.[\[93\]][133] The `echo` statement is one of several facilities PHP provides to output text, _e.g._, to a web browser.

In terms of keywords and language syntax, PHP is similar to the C style syntax. _if_ conditions, _for_ and _while_ loops, and function returns are similar in syntax to languages such as C, C++, C\#, Java and Perl.

The following is an example of PHP for loop:

## Data types

PHP stores integers in a platform-dependent range, either a 64-bit or 32-bit [signed][134] [integer][135] equivalent to the [C-language long type][136]. Unsigned integers are converted to signed values in certain situations; this behavior is different from that of other programming languages.[\[94\]][137] Integer variables can be assigned using decimal (positive and negative), [octal][138], [hexadecimal][139], and [binary][140] notations.

[Floating point][141] numbers are also stored in a platform-specific range. They can be specified using floating point notation, or two forms of [scientific notation][142].[\[95\]][143] PHP has a native [Boolean][144] type that is similar to the native Boolean types in [Java][145] and [C++][146]. Using the Boolean type conversion rules, non-zero values are interpreted as true and zero as false, as in [Perl][147] and C++.[\[95\]][143]

The null data type represents a variable that has no value; `NULL` is the only allowed value for this data type.[\[95\]][143]

Variables of the "resource" type represent references to resources from external sources. These are typically created by functions from a particular extension, and can only be processed by functions from the same extension; examples include file, image, and database resources.[\[95\]][143]

Arrays can contain elements of any type that PHP can handle, including resources, objects, and other arrays. Order is preserved in lists of values and in [hashes][148] with both keys and values, and the two can be intermingled.[\[95\]][143] PHP also supports [strings][149], which can be used with single quotes, double quotes, nowdoc or [heredoc][126] syntax.[\[96\]][150]

The Standard PHP Library (SPL) attempts to solve standard problems and implements efficient data access interfaces and classes.[\[97\]][151]

## Functions

PHP defines a large array of functions in the core language and many are also available in various extensions; these functions are well documented in the online PHP documentation.[\[98\]][152] However, the built-in library has a wide variety of naming conventions and associated inconsistencies, as described under [history][153] above.

Custom functions may be defined by the developer, e.g.:

In 2016, the output of the above sample program is 'I am currently 35 years old.'

In lieu of [function pointers][154], functions in PHP can be referenced by a string containing their name. In this manner, normal PHP functions can be used, for example, as [callbacks][125] or within [function tables][155].[\[99\]][156] User-defined functions may be created at any time without being [prototyped][157].[\[98\]][152][\[99\]][156] Functions may be defined inside code blocks, permitting a [run-time decision][158] as to whether or not a function should be defined. There is a `function_exists` function that determines whether a function with a given name has already been defined. Function calls must use parentheses, with the exception of zero-argument class [constructor][159] functions called with the PHP operator _new_, in which case parentheses are optional.

Until PHP 5.3, support for [anonymous functions][160] and [closures][161] did not exist in PHP. While `create_function()` exists since PHP 4.0.1, it is merely a thin wrapper around `eval()` that allows normal PHP functions to be created during program execution.[\[100\]][162] PHP 5.3 added syntax to define an anonymous function or "closure"[\[101\]][163] which can capture variables from the surrounding scope:

In the example above, `getAdder()` function creates a closure using passed argument `$x` (the keyword `use` imports a variable from the lexical context), which takes an additional argument `$y`, and returns the created closure to the caller. Such a function is a first-class object, meaning that it can be stored in a variable, passed as a parameter to other functions, etc.[\[102\]][164]

Unusually for a dynamically typed language, PHP supports type declarations on function parameters, which are enforced at runtime. This has been supported for classes and interfaces since PHP 5.0, for arrays since PHP 5.1, for "callables" since PHP 5.4, and scalar (integer, float, string and boolean) types since PHP 7.0\.[\[52\]][104] PHP 7.0 also has type declarations for function return types, expressed by placing the type name after the list of parameters, preceded by a colon.[\[51\]][103] For example, the `getAdder` function from the earlier example could be annotated with types like so in PHP 7:

By default, scalar type declarations follow weak typing principles. So, for example, if a parameter's type is `int`, PHP would allow not only integers, but also convertible numeric strings, floats or booleans to be passed to that function, and would convert them.[\[52\]][104] However, PHP 7 has a "strict typing" mode which, when used, disallows such conversions for function calls and returns within a file.[\[52\]][104]

## Object-oriented programming

Basic [object-oriented programming][58] functionality was added in PHP 3 and improved in PHP 4\.[\[6\]][6] This allowed for PHP to gain further abstraction, making creative tasks easier for programmers using the language. Object handling was completely rewritten for PHP 5, expanding the feature set and enhancing performance.[\[103\]][165] In previous versions of PHP, objects were handled like [value types][166].[\[103\]][165] The drawback of this method was that code had to make heavy use of PHP's "reference" variables if it wanted to modify an object it was passed rather than creating a copy of it. In the new approach, objects are referenced by [handle][167], and not by value.

PHP 5 introduced private and protected [member variables][168] and methods, along with [abstract classes][169], [final classes][170], [abstract methods][171], and [final methods][172]. It also introduced a standard way of declaring [constructors][159] and [destructors][173], similar to that of other object-oriented languages such as [C++][146], and a standard [exception handling][174] model. Furthermore, PHP 5 added [interfaces][175] and allowed for multiple interfaces to be implemented. There are special interfaces that allow objects to interact with the runtime system. [Objects][176] implementing ArrayAccess can be used with [array][177] syntax and objects implementing [Iterator][178] or [IteratorAggregate][179] can be used with the `foreach` [language construct][180]. There is no [virtual table][181] feature in the engine, so [static variables][182] are bound with a name instead of a reference at compile time.[\[104\]][183]

If the developer creates a copy of an object using the reserved word `clone`, the Zend engine will check whether a `__clone()` method has been defined. If not, it will call a default `__clone()` which will copy the object's properties. If a `__clone()` method is defined, then it will be responsible for setting the necessary properties in the created object. For convenience, the engine will supply a function that imports the properties of the source object, so the programmer can start with a by-value [replica][184] of the source object and only override properties that need to be changed.[\[105\]][185]

The following is a basic example of [object-oriented programming][58] in PHP:

The [visibility][186] of PHP properties and methods is defined using the [keywords][187] `public`, `private`, and `protected`. The default is public, if only [var][188] is used; `var` is a synonym for `public`. Items declared `public` can be accessed everywhere. `protected` limits access to [inherited classes][189] (and to the class that defines the item). `private` limits visibility only to the class that defines the item.[\[106\]][190] Objects of the same type have access to each other's private and protected members even though they are not the same instance. PHP's member visibility features have sometimes been described as "highly useful."[\[107\]][191] However, they have also sometimes been described as "at best irrelevant and at worst positively harmful."[\[108\]][192]

## Implementations

The original, only complete and most widely used PHP implementation is powered by the [Zend Engine][20] and known simply as PHP. To disambiguate it from other implementations, it is sometimes unofficially referred to as "Zend PHP". The Zend Engine [compiles][193] PHP [source code][194] on-the-fly into an internal format that it can execute, thus it works as an [interpreter][13].[\[109\]][195][\[110\]][196] It is also the "reference implementation" of PHP, as PHP has no formal specification, and so the semantics of Zend PHP define the semantics of PHP itself. Due to the complex and nuanced semantics of PHP, defined by how Zend works, it is difficult for competing implementations to offer complete compatibility.

PHP's single-request-per-script-execution model, and the fact the Zend Engine is an interpreter, leads to inefficiency; as a result, various products have been developed to help improve PHP performance. In order to speed up execution time and not have to compile the PHP source code every time the web page is accessed, PHP scripts can also be deployed in the PHP engine's internal format by using an [opcode][197] cache, which works by [caching][198] the compiled form of a PHP script (opcodes) in [shared memory][199] to avoid the overhead of [parsing][200] and [compiling][201] the code every time the script runs. An opcode cache, [Zend Opcache][202], is built into PHP since version 5.5\.[\[111\]][203] Another example of a widely used opcode cache is the [Alternative PHP Cache][204] (APC), which is available as a [PECL][205] extension.[\[112\]][206]

While Zend PHP is still the most popular implementation, several other implementations have been developed. Some of these are [compilers][193] or support [JIT compilation][207], and hence offer performance benefits over Zend PHP at the expense of lacking full PHP compatibility. Alternative implementations include the following:

## Licensing

PHP is [free software][21] released under the [PHP License][22], which stipulates that:[\[115\]][208]

Products derived from this software may not be called "PHP", nor may "PHP" appear in their name, without prior written permission from group@php.net. You may indicate that your software works in conjunction with PHP by saying "[Foo][209] for PHP" instead of calling it "PHP Foo" or "phpfoo".

This restriction on use of "PHP" makes the PHP License incompatible with the [General Public License][210] (GPL), while the Zend License is incompatible due to an advertising clause similar to that of the original [BSD license][211].[\[116\]][212]

## Development and community

PHP includes various [free and open-source libraries][213] in its source distribution, or uses them in resulting PHP binary builds. PHP is fundamentally an [Internet][214]-aware system with built-in modules for accessing [File Transfer Protocol][215] (FTP) servers and many database servers, including [PostgreSQL][216], [MySQL][217], [Microsoft SQL Server][218] and [SQLite][219] (which is an embedded database), [LDAP][220] servers, and others. Numerous functions familiar to C programmers, such as those in the [stdio][221] family, are available in standard PHP builds.[\[117\]][222]

PHP allows developers to write [extensions][223] in [C][224] to add functionality to the PHP language. PHP extensions can be compiled statically into PHP or loaded dynamically at runtime. Numerous extensions have been written to add support for the [Windows API][225], process management on [Unix-like][226] [operating systems][23], multibyte strings ([Unicode][76]), [cURL][227], and several popular [compression formats][228]. Other PHP features made available through extensions include integration with [IRC][229], dynamic generation of images and [Adobe Flash][230] content, _PHP Data Objects_ (PDO) as an abstraction layer used for accessing databases,[\[118\]][231][\[119\]][232][\[120\]][233][\[121\]][234][\[122\]][235][\[123\]][236][\[124\]][237] and even [speech synthesis][238]. Some of the language's core functions, such as those dealing with strings and arrays, are also implemented as extensions.[\[125\]][239] The [PHP Extension Community Library][205] (PECL) project is a repository for extensions to the PHP language.[\[126\]][240]

Some other projects, such as _Zephir_, provide the ability for PHP extensions to be created in a high-level language and compiled into native PHP extensions. Such an approach, instead of writing PHP extensions directly in C, simplifies the development of extensions and reduces the time required for programming and testing.[\[127\]][241]

The PHP Group consists of ten people (as of 2015): [Thies C. Arntzen][242], [Stig Bakken][243], [Shane Caraveo][244], [Andi Gutmans][49], [Rasmus Lerdorf][3], [Sam Ruby][245], [Sascha Schumann][246], [Zeev Suraski][48], [Jim Winstead][247], [Andrei Zmievski][248].[\[128\]][249]

[Zend Technologies][54] provides a [PHP Certification][250] based on PHP 5.5[\[129\]][251] exam for programmers to become certified PHP developers.

## Installation and configuration

There are two primary ways for adding support for PHP to a web server -- as a native web server module, or as a CGI executable. PHP has a direct module interface called [Server Application Programming Interface][252] (SAPI), which is supported by many web servers including [Apache HTTP Server][253], [Microsoft IIS][254], [Netscape][255] (now defunct) and [iPlanet][256]. Some other web servers, such as OmniHTTPd, support the [Internet Server Application Programming Interface][257] (ISAPI), which is a [Microsoft][258]'s web server module interface. If PHP has no module support for a web server, it can always be used as a [Common Gateway Interface][15] (CGI) or [FastCGI][259] processor; in that case, the web server is configured to use PHP's CGI executable to process all requests to PHP files.[\[130\]][260]

PHP-FPM (FastCGI Process Manager) is an alternative FastCGI implementation for PHP, bundled with the official PHP distribution since version 5.3.3\.[\[131\]][261] When compared to the older FastCGI implementation, it contains some additional features, mostly useful for heavily loaded web servers.[\[132\]][262]

When using PHP for command-line scripting, a PHP [command-line interface][16] (CLI) executable is needed. PHP supports a CLI SAPI as of PHP 4.3.0\.[\[133\]][263] The main focus of this SAPI is developing [shell][264] applications using PHP. There are quite a few differences between the CLI SAPI and other SAPIs, although they do share many of the same behaviors.[\[134\]][265]

PHP has a direct module interface called SAPI for different web servers;[\[135\]][266] in case of PHP 5 and Apache 2.0 on Windows, it is provided in form of a [DLL][267] file called php5apache2.dll,[\[136\]][268] which is a module that, among other functions, provides an interface between PHP and the web server, implemented in a form that the server understands. This form is what is known as a SAPI.

There are different kinds of SAPIs for various web server extensions. For example, in addition to those listed above, other SAPIs for the PHP language include the [Common Gateway Interface][15] (CGI) and [command-line interface][16] (CLI).[\[135\]][266][\[137\]][269]

PHP can also be used for writing desktop [graphical user interface][18] (GUI) applications, by using the [PHP-GTK][270] extension. PHP-GTK is not included in the official PHP distribution,[\[130\]][260] and as an extension it can be used only with PHP versions 5.1.0 and newer. The most common way of installing PHP-GTK is compiling it from the source code.[\[138\]][271]

When PHP is installed and used in [cloud][272] environments, [software development kits][273] (SDKs) are provided for using cloud-specific features. For example:

Numerous configuration options are supported, affecting both core PHP features and extensions.[\[141\]][274][\[142\]][275] Configuration file `php.ini` is searched for in different locations, depending on the way PHP is used.[\[143\]][276] The configuration file is split into various sections,[\[144\]][277] while some of the configuration options can be also set within the web server configuration.[\[145\]][278]

## Use

PHP is a general-purpose scripting language that is especially suited to [server-side][0] [web development][1], in which case PHP generally runs on a [web server][279]. Any PHP code in a requested file is [executed][280] by the PHP runtime, usually to create [dynamic web page][281] content or dynamic images used on websites or elsewhere.[\[146\]][282] It can also be used for [command-line][283] scripting and [client-side][284] [graphical user interface][18] (GUI) applications. PHP can be deployed on most web servers, many [operating systems][23] and [platforms][24], and can be used with many [relational database management systems][285] (RDBMS). Most [web hosting][286] providers support PHP for use by their clients. It is available free of charge, and the PHP Group provides the complete source code for users to build, customize and extend for their own use.[\[9\]][25]

PHP acts primarily as a [filter][287],[\[147\]][288] taking input from a file or stream containing text and/or PHP instructions and outputting another stream of data. Most commonly the output will be HTML, although it could be [JSON][289], [XML][121] or [binary data][290] such as image or audio formats. Since PHP 4, the PHP [parser][50] [compiles][193] input to produce [bytecode][291] for processing by the [Zend Engine][20], giving improved performance over its [interpreter][13] predecessor.[\[148\]][292]

Originally designed to create dynamic [web pages][293], PHP now focuses mainly on [server-side scripting][0],[\[149\]][294] and it is similar to other server-side scripting languages that provide dynamic content from a web server to a [client][295], such as [Microsoft][258]'s [ASP.NET][296], [Sun Microsystems][297]' [JavaServer Pages][298],[\[150\]][299] and [mod\_perl][300]. PHP has also attracted the development of many [software frameworks][301] that provide building blocks and a design structure to promote [rapid application development][302] (RAD). Some of these include [PRADO][303], [CakePHP][304], [Symfony][305], [CodeIgniter][306], [Laravel][307], [Yii Framework][308], [Phalcon][309] and [Zend Framework][310], offering features similar to other [web frameworks][12].

The [LAMP architecture][311] has become popular in the web industry as a way of deploying web applications.[\[151\]][312] PHP is commonly used as the _P_ in this bundle alongside [Linux][313], [Apache][253] and [MySQL][217], although the _P_ may also refer to [Python][314], [Perl][147], or some mix of the three. Similar packages, [WAMP][315] and [MAMP][316], are also available for [Windows][69] and [OS X][317], with the first letter standing for the respective operating system. Although both PHP and Apache are provided as part of the Mac OS X base install, users of these packages seek a simpler installation mechanism that can be more easily kept up to date.

As of April 2007, over 20 million Internet domains had web services hosted on servers with PHP installed and mod\_php was recorded as the most popular [Apache HTTP Server][253] module.[\[152\]][318] As of October 2010, PHP was used as the server-side programming language on 75% of all websites whose server-side programming language was known[\[153\]][319] (as of February 2014, the percentage had reached 82%[\[154\]][320]), and PHP was the most-used open source software within enterprises.[\[155\]][321] [Web content management systems][11] written in PHP include [MediaWiki][322],[\[156\]][323] [Joomla][324],[\[157\]][325] [eZ Publish][326], [eZ Platform][327], [SilverStripe][328],[\[158\]][329] [WordPress][91],[\[159\]][330] [Drupal][331],[\[160\]][332] [Moodle][333],[\[161\]][334] the user-facing portion of [Facebook][335],[\[162\]][336] and [Digg][337].[\[163\]][338]

For specific and more advanced usage scenarios, PHP offers a well defined and documented way for writing custom extensions in [C][224] or [C++][146].[\[164\]][339][\[165\]][340][\[166\]][341][\[167\]][342][\[168\]][343][\[169\]][344][\[170\]][345] Besides extending the language itself in form of additional [libraries][346], extensions are providing a way for improving execution speed where it is critical and there is room for improvements by using a true [compiled language][347].[\[171\]][348][\[172\]][349] PHP also offers well defined ways for embedding itself into other software projects. That way PHP can be easily used as an internal [scripting language][350] for another project, also providing tight interfacing with the project's specific internal [data structures][351].[\[173\]][352]

PHP received mixed reviews due to lacking support for [multithreading][353] at the core language level,[\[174\]][354] though using threads is made possible by the "pthreads" [PECL][205] extension.[\[175\]][355][\[176\]][356]

As of January 2013, PHP was used in more than 240 million [websites][357] (39% of those sampled) and was installed on 2.1 million [web servers][279].[\[177\]][358]

## Security

In 2013, 9% of all vulnerabilities listed by the [National Vulnerability Database][359] were linked to PHP;[\[178\]][360] historically, about 30% of all vulnerabilities listed since 1996 in this database are linked to PHP. Technical security flaws of the language itself or of its core libraries are not frequent; (these numbered 22 in 2009, which was about 1% of the total, although PHP applies to about 20% of programs listed.)[\[179\]][361] Recognizing that programmers make mistakes, some languages include [taint checking][362] to automatically detect the lack of [input validation][363] which induces many issues. Such a feature is being developed for PHP,[\[180\]][364] but its inclusion into a release has been rejected several times in the past.[\[181\]][365][\[182\]][366]

There are advanced protection patches, such as [Suhosin][367] and [Hardening][368]-Patch, that are especially designed for web hosting environments,[\[183\]][369] primarily due to these environments being seen as places where carelessly written code may run.

There are certain language features and configuration parameters (primarily the default values for such runtime settings) that make PHP applications prone to security issues. Among these, [magic\_quotes\_gpc][370] and register\_globals[\[184\]][371] configuration directives are the best known; the latter made any URL parameters become PHP variables, opening a path for serious security vulnerabilities by allowing an attacker to set the value of any uninitialized global variable and interfere with the execution of a PHP script. Support for "[magic quotes][370]" and "register globals" has been deprecated as of PHP 5.3.0, and removed as of PHP 5.4.0\.[\[185\]][372]

Another example for the runtime settings vulnerability comes from failing to disable PHP execution (via engine configuration directive)[\[186\]][373] for the directory where uploaded images are stored; leaving the default settings can result in execution of malicious PHP code embedded within the uploaded images.[\[187\]][374][\[188\]][375][\[189\]][376] Also, leaving enabled the dynamic loading of PHP extensions (via enable\_dl configuration directive)[\[190\]][377] in a [shared web hosting][378] environment can lead to security issues.[\[191\]][379][\[192\]][380]

Also, implied [type conversions][381] that result in incompatible values being treated as identical against the programmer's intent can lead to security issues. For example, the result of the comparison _0e1234 == 0_ comparison is _true_ because the first compared value is treated as [scientific notation][142] having the value (0×101234), i.e. _zero_. This feature resulted in authentication vulnerabilities in [Simple Machines Forum][382],[\[193\]][383] [Typo3][384][\[194\]][385] and [phpBB][386][\[195\]][387] when [MD5][388] [password hashes][389] were compared. Instead, either the function [strcmp][390] or the identity operator (_===_) should be used; _0e1234 === 0_ results in _false_.[\[196\]][391]

In a 2013 analysis of over 170,000 [website defacements][392], published by [Zone-H][393], the most frequently (53%) used technique was exploitation of [file inclusion vulnerability][394], mostly related to insecure usage of the PHP functions _include_, _require_, and _allow\_url\_fopen_.[\[197\]][395][\[198\]][396]

## See also

## References

## Further reading

## External links

[0]: /wiki/Server-side_scripting "Server-side scripting"
[1]: /wiki/Web_development "Web development"
[2]: /wiki/General-purpose_programming_language "General-purpose programming language"
[3]: /wiki/Rasmus_Lerdorf "Rasmus Lerdorf"
[4]: #cite_note-History_of_PHP-5
[5]: /wiki/Reference_implementation "Reference implementation"
[6]: #cite_note-about_PHP-6
[7]: /wiki/Recursive_acronym "Recursive acronym"
[8]: #cite_note-7
[9]: /wiki/HTML "HTML"
[10]: /wiki/Web_template_system "Web template system"
[11]: /wiki/Web_content_management_system "Web content management system"
[12]: /wiki/Web_framework "Web framework"
[13]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[14]: /wiki/Plugin_(computing) "Plugin (computing)"
[15]: /wiki/Common_Gateway_Interface "Common Gateway Interface"
[16]: /wiki/Command-line_interface "Command-line interface"
[17]: /wiki/Computer_software "Computer software"
[18]: /wiki/Graphical_user_interface "Graphical user interface"
[19]: #cite_note-8
[20]: /wiki/Zend_Engine "Zend Engine"
[21]: /wiki/Free_software "Free software"
[22]: /wiki/PHP_License "PHP License"
[23]: /wiki/Operating_system "Operating system"
[24]: /wiki/Computing_platform "Computing platform"
[25]: #cite_note-foundations-9
[26]: /wiki/Formal_specification "Formal specification"
[27]: /wiki/De_facto "De facto"
[28]: #cite_note-10
[29]: #cite_note-php_origins-11
[30]: #cite_note-12
[31]: #cite_note-13
[32]: /wiki/Personal_homepage "Personal homepage"
[33]: /wiki/Web_form "Web form"
[34]: /wiki/Database "Database"
[35]: /wiki/Web_application "Web application"
[36]: /wiki/Software_bug "Software bug"
[37]: /wiki/Usenet "Usenet"
[38]: #cite_note-14
[39]: #cite_note-15
[40]: /wiki/Local_variable#Local_variables_in_Perl "Local variable"
[41]: /wiki/Syntax "Syntax"
[42]: #cite_note-itconversations-16
[43]: /wiki/Beta_development_stage "Beta development stage"
[44]: #cite_note-17
[45]: #cite_note-18
[46]: /wiki/Hash_function "Hash function"
[47]: #cite_note-php-internals-70691-19
[48]: /wiki/Zeev_Suraski "Zeev Suraski"
[49]: /wiki/Andi_Gutmans "Andi Gutmans"
[50]: /wiki/Parser "Parser"
[51]: #cite_note-20
[52]: /wiki/Rewrite_(programming) "Rewrite (programming)"
[53]: #cite_note-21
[54]: /wiki/Zend_Technologies "Zend Technologies"
[55]: /wiki/Ramat_Gan "Ramat Gan"
[56]: #cite_note-2007_news-22
[57]: #cite_note-23
[58]: /wiki/Object-oriented_programming "Object-oriented programming"
[59]: #cite_note-24
[60]: /wiki/Late_static_binding "Late static binding"
[61]: #cite_note-25
[62]: #cite_note-26
[63]: #cite_note-gophp5_projects-27
[64]: #cite_note-gophp5-28
[65]: #cite_note-29
[66]: /wiki/32-bit "32-bit"
[67]: /wiki/64-bit "64-bit"
[68]: #cite_note-30
[69]: /wiki/Microsoft_Windows "Microsoft Windows"
[70]: /wiki/X86 "X86"
[71]: #cite_note-31
[72]: #cite_note-32
[73]: /wiki/Internet_Information_Services "Internet Information Services"
[74]: /wiki/X86-64 "X86-64"
[75]: #cite_note-33
[76]: /wiki/Unicode "Unicode"
[77]: /wiki/International_Components_for_Unicode "International Components for Unicode"
[78]: /wiki/UTF-16 "UTF-16"
[79]: #cite_note-34
[80]: #cite_note-35
[81]: #cite_note-36
[82]: #cite_note-37
[83]: #cite_note-38
[84]: #cite_note-39
[85]: #cite_note-40
[86]: /wiki/Branching_(revision_control) "Branching (revision control)"
[87]: #cite_note-41
[88]: /wiki/Data_structures "Data structures"
[89]: /wiki/Locality_of_reference "Locality of reference"
[90]: #cite_note-42
[91]: /wiki/WordPress "WordPress"
[92]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[93]: #cite_note-phpng-43
[94]: #cite_note-ZE2-44
[95]: /wiki/Software_versioning "Software versioning"
[96]: #cite_note-releaseprocess-45
[97]: /wiki/Exception_(computer_science) "Exception (computer science)"
[98]: #cite_note-engine_exceptions-46
[99]: #cite_note-47
[100]: #cite_note-uvs-48
[101]: #cite_note-49
[102]: #cite_note-50
[103]: #cite_note-return-types-51
[104]: #cite_note-scalar-types-52
[105]: /wiki/Elephant "Elephant"
[106]: #cite_note-81
[107]: #cite_note-82
[108]: /wiki/Plush_toy "Plush toy"
[109]: /wiki/%22Hello,_World!%22_program ""Hello, World!" program"
[110]: #cite_note-83
[111]: /wiki/Delimiter "Delimiter"
[112]: /wiki/Control_structure "Control structure"
[113]: #cite_note-rfc-shortags-84
[114]: #cite_note-basic_syntax-85
[115]: #cite_note-86
[116]: #cite_note-87
[117]: #cite_note-88
[118]: /wiki/JavaScript "JavaScript"
[119]: #cite_note-89
[120]: /wiki/XHTML "XHTML"
[121]: /wiki/XML "XML"
[122]: #cite_note-90
[123]: /wiki/Dollar_sign "Dollar sign"
[124]: /wiki/Primitive_type "Primitive type"
[125]: /wiki/Callback_function "Callback function"
[126]: /wiki/Heredoc "Heredoc"
[127]: #cite_note-91
[128]: /wiki/Newline "Newline"
[129]: /wiki/Whitespace_character "Whitespace character"
[130]: /wiki/Free-form_language "Free-form language"
[131]: #cite_note-92
[132]: /wiki/Comparison_of_programming_languages_(syntax)#Comments "Comparison of programming languages (syntax)"
[133]: #cite_note-93
[134]: /wiki/Signed_number_representations "Signed number representations"
[135]: /wiki/Integer_(computer_science) "Integer (computer science)"
[136]: /wiki/C_variable_types_and_declarations "C variable types and declarations"
[137]: #cite_note-94
[138]: /wiki/Octal "Octal"
[139]: /wiki/Hexadecimal "Hexadecimal"
[140]: /wiki/Binary_code "Binary code"
[141]: /wiki/Floating_point "Floating point"
[142]: /wiki/Scientific_notation "Scientific notation"
[143]: #cite_note-types-95
[144]: /wiki/Boolean_datatype "Boolean datatype"
[145]: /wiki/Java_(programming_language) "Java (programming language)"
[146]: /wiki/C%2B%2B "C++"
[147]: /wiki/Perl "Perl"
[148]: /wiki/Hash_table "Hash table"
[149]: /wiki/String_(computing) "String (computing)"
[150]: #cite_note-96
[151]: #cite_note-97
[152]: #cite_note-functions-98
[153]: #ORGANIC
[154]: /wiki/Function_pointer "Function pointer"
[155]: /wiki/Function_table "Function table"
[156]: #cite_note-variable-functions-99
[157]: /wiki/Function_prototype "Function prototype"
[158]: /wiki/Dynamic_dispatch "Dynamic dispatch"
[159]: /wiki/Constructor_(computer_science) "Constructor (computer science)"
[160]: /wiki/Anonymous_functions "Anonymous functions"
[161]: /wiki/Closure_(computer_science) "Closure (computer science)"
[162]: #cite_note-100
[163]: #cite_note-101
[164]: #cite_note-102
[165]: #cite_note-php_5_objects-103
[166]: /wiki/Value_type "Value type"
[167]: /wiki/Handle_(computing) "Handle (computing)"
[168]: /wiki/Member_variable "Member variable"
[169]: /wiki/Abstract_type "Abstract type"
[170]: /wiki/Final_type "Final type"
[171]: /wiki/Abstract_method "Abstract method"
[172]: /wiki/Final_method "Final method"
[173]: /wiki/Destructor_(computer_science) "Destructor (computer science)"
[174]: /wiki/Exception_handling "Exception handling"
[175]: /wiki/Interface_(computing) "Interface (computing)"
[176]: /wiki/Object_(computer_science) "Object (computer science)"
[177]: /wiki/Array_data_type "Array data type"
[178]: /wiki/Iterator "Iterator"
[179]: /wiki/IteratorAggregate "IteratorAggregate"
[180]: /wiki/Language_construct "Language construct"
[181]: /wiki/Virtual_table "Virtual table"
[182]: /wiki/Static_variable "Static variable"
[183]: #cite_note-zend_engine_2-104
[184]: https://en.wiktionary.org/wiki/replica "wikt:replica"
[185]: #cite_note-105
[186]: /wiki/Visibility_(computer_science) "Visibility (computer science)"
[187]: /wiki/Keyword_(computer_programming) "Keyword (computer programming)"
[188]: /wiki/Variable_(programming) "Variable (programming)"
[189]: /wiki/Inherited_class "Inherited class"
[190]: #cite_note-106
[191]: #cite_note-107
[192]: #cite_note-108
[193]: /wiki/Compiler "Compiler"
[194]: /wiki/Source_code "Source code"
[195]: #cite_note-109
[196]: #cite_note-110
[197]: /wiki/Opcode "Opcode"
[198]: /wiki/Cache_(computing) "Cache (computing)"
[199]: /wiki/Shared_memory_(interprocess_communication) "Shared memory (interprocess communication)"
[200]: /wiki/Parsing "Parsing"
[201]: /wiki/Compiling "Compiling"
[202]: /wiki/Zend_Opcache "Zend Opcache"
[203]: #cite_note-111
[204]: /wiki/Alternative_PHP_Cache "Alternative PHP Cache"
[205]: /wiki/PHP_Extension_Community_Library "PHP Extension Community Library"
[206]: #cite_note-112
[207]: /wiki/JIT_compilation "JIT compilation"
[208]: #cite_note-115
[209]: /wiki/Foo "Foo"
[210]: /wiki/General_Public_License "General Public License"
[211]: /wiki/BSD_license "BSD license"
[212]: #cite_note-116
[213]: /wiki/List_of_PHP_libraries "List of PHP libraries"
[214]: /wiki/Internet "Internet"
[215]: /wiki/File_Transfer_Protocol "File Transfer Protocol"
[216]: /wiki/PostgreSQL "PostgreSQL"
[217]: /wiki/MySQL "MySQL"
[218]: /wiki/Microsoft_SQL_Server "Microsoft SQL Server"
[219]: /wiki/SQLite "SQLite"
[220]: /wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol"
[221]: /wiki/Stdio.h "Stdio.h"
[222]: #cite_note-117
[223]: /wiki/Software_extension "Software extension"
[224]: /wiki/C_(programming_language) "C (programming language)"
[225]: /wiki/Windows_API "Windows API"
[226]: /wiki/Unix-like "Unix-like"
[227]: /wiki/CURL "CURL"
[228]: /wiki/Archive_format "Archive format"
[229]: /wiki/Internet_Relay_Chat "Internet Relay Chat"
[230]: /wiki/Adobe_Flash "Adobe Flash"
[231]: #cite_note-118
[232]: #cite_note-119
[233]: #cite_note-120
[234]: #cite_note-121
[235]: #cite_note-122
[236]: #cite_note-123
[237]: #cite_note-124
[238]: /wiki/Speech_synthesis "Speech synthesis"
[239]: #cite_note-125
[240]: #cite_note-126
[241]: #cite_note-127
[242]: /w/index.php?title=Thies_C._Arntzen&action=edit&redlink=1 "Thies C. Arntzen (page does not exist)"
[243]: /w/index.php?title=Stig_Bakken&action=edit&redlink=1 "Stig Bakken (page does not exist)"
[244]: /w/index.php?title=Shane_Caraveo&action=edit&redlink=1 "Shane Caraveo (page does not exist)"
[245]: /wiki/Sam_Ruby "Sam Ruby"
[246]: /w/index.php?title=Sascha_Schumann&action=edit&redlink=1 "Sascha Schumann (page does not exist)"
[247]: /w/index.php?title=Jim_Winstead&action=edit&redlink=1 "Jim Winstead (page does not exist)"
[248]: /wiki/Andrei_Zmievski "Andrei Zmievski"
[249]: #cite_note-128
[250]: /wiki/Zend_Certified_Engineer "Zend Certified Engineer"
[251]: #cite_note-129
[252]: /wiki/Server_Application_Programming_Interface "Server Application Programming Interface"
[253]: /wiki/Apache_HTTP_Server "Apache HTTP Server"
[254]: /wiki/Microsoft_Internet_Information_Server "Microsoft Internet Information Server"
[255]: /wiki/Netscape "Netscape"
[256]: /wiki/IPlanet "IPlanet"
[257]: /wiki/Internet_Server_Application_Programming_Interface "Internet Server Application Programming Interface"
[258]: /wiki/Microsoft "Microsoft"
[259]: /wiki/FastCGI "FastCGI"
[260]: #cite_note-installation-130
[261]: #cite_note-131
[262]: #cite_note-132
[263]: #cite_note-133
[264]: /wiki/Command_line_interface "Command line interface"
[265]: #cite_note-134
[266]: #cite_note-php-installation2-135
[267]: /wiki/Dynamic-link_library "Dynamic-link library"
[268]: #cite_note-136
[269]: #cite_note-137
[270]: /wiki/PHP-GTK "PHP-GTK"
[271]: #cite_note-138
[272]: /wiki/Cloud_computing "Cloud computing"
[273]: /wiki/Software_development_kit "Software development kit"
[274]: #cite_note-141
[275]: #cite_note-142
[276]: #cite_note-143
[277]: #cite_note-144
[278]: #cite_note-145
[279]: /wiki/Web_server "Web server"
[280]: /wiki/Execution_(computing) "Execution (computing)"
[281]: /wiki/Dynamic_web_page "Dynamic web page"
[282]: #cite_note-146
[283]: /wiki/Command-line "Command-line"
[284]: /wiki/Client-side "Client-side"
[285]: /wiki/Relational_database_management_system "Relational database management system"
[286]: /wiki/Web_hosting "Web hosting"
[287]: /wiki/Filter_(software) "Filter (software)"
[288]: #cite_note-147
[289]: /wiki/JSON "JSON"
[290]: /wiki/Binary_data "Binary data"
[291]: /wiki/Bytecode "Bytecode"
[292]: #cite_note-148
[293]: /wiki/Web_page "Web page"
[294]: #cite_note-149
[295]: /wiki/Client_(computing) "Client (computing)"
[296]: /wiki/ASP.NET "ASP.NET"
[297]: /wiki/Sun_Microsystems "Sun Microsystems"
[298]: /wiki/JavaServer_Pages "JavaServer Pages"
[299]: #cite_note-150
[300]: /wiki/Mod_perl "Mod perl"
[301]: /wiki/Software_framework "Software framework"
[302]: /wiki/Rapid_application_development "Rapid application development"
[303]: /wiki/PRADO_(framework) "PRADO (framework)"
[304]: /wiki/CakePHP "CakePHP"
[305]: /wiki/Symfony "Symfony"
[306]: /wiki/CodeIgniter "CodeIgniter"
[307]: /wiki/Laravel "Laravel"
[308]: /wiki/Yii_Framework "Yii Framework"
[309]: /wiki/Phalcon_(framework) "Phalcon (framework)"
[310]: /wiki/Zend_Framework "Zend Framework"
[311]: /wiki/LAMP_(software_bundle) "LAMP (software bundle)"
[312]: #cite_note-151
[313]: /wiki/Linux "Linux"
[314]: /wiki/Python_(programming_language) "Python (programming language)"
[315]: /wiki/WAMP_(software_bundle) "WAMP (software bundle)"
[316]: /wiki/MAMP "MAMP"
[317]: /wiki/OS_X "OS X"
[318]: #cite_note-usage-152
[319]: #cite_note-W3Techs_usage_statistics_2010-10-29-153
[320]: #cite_note-W3Techs_usage_statistics_20140319-154
[321]: #cite_note-155
[322]: /wiki/MediaWiki "MediaWiki"
[323]: #cite_note-156
[324]: /wiki/Joomla "Joomla"
[325]: #cite_note-157
[326]: /wiki/EZ_Publish "EZ Publish"
[327]: /wiki/EZ_Platform "EZ Platform"
[328]: /wiki/SilverStripe "SilverStripe"
[329]: #cite_note-158
[330]: #cite_note-159
[331]: /wiki/Drupal "Drupal"
[332]: #cite_note-160
[333]: /wiki/Moodle "Moodle"
[334]: #cite_note-161
[335]: /wiki/Facebook "Facebook"
[336]: #cite_note-162
[337]: /wiki/Digg "Digg"
[338]: #cite_note-163
[339]: #cite_note-164
[340]: #cite_note-165
[341]: #cite_note-166
[342]: #cite_note-167
[343]: #cite_note-168
[344]: #cite_note-169
[345]: #cite_note-170
[346]: /wiki/Library_(computing) "Library (computing)"
[347]: /wiki/Compiled_language "Compiled language"
[348]: #cite_note-171
[349]: #cite_note-172
[350]: /wiki/Scripting_language "Scripting language"
[351]: /wiki/Data_structure "Data structure"
[352]: #cite_note-173
[353]: /wiki/Multithreading_(software) "Multithreading (software)"
[354]: #cite_note-174
[355]: #cite_note-175
[356]: #cite_note-176
[357]: /wiki/Website "Website"
[358]: #cite_note-177
[359]: /wiki/National_Vulnerability_Database "National Vulnerability Database"
[360]: #cite_note-CVE-178
[361]: #cite_note-PHP-related_vulnerabilities_on_the_National_Vulnerability_Database-179
[362]: /wiki/Taint_checking "Taint checking"
[363]: /wiki/Data_validation "Data validation"
[364]: #cite_note-180
[365]: #cite_note-181
[366]: #cite_note-182
[367]: /wiki/Suhosin "Suhosin"
[368]: /wiki/Hardening_(computing) "Hardening (computing)"
[369]: #cite_note-183
[370]: /wiki/Magic_quotes "Magic quotes"
[371]: #cite_note-register-globals-184
[372]: #cite_note-magic-quotes-185
[373]: #cite_note-186
[374]: #cite_note-187
[375]: #cite_note-188
[376]: #cite_note-189
[377]: #cite_note-190
[378]: /wiki/Shared_web_hosting "Shared web hosting"
[379]: #cite_note-191
[380]: #cite_note-192
[381]: /wiki/Type_conversion "Type conversion"
[382]: /wiki/Simple_Machines_Forum "Simple Machines Forum"
[383]: #cite_note-193
[384]: /wiki/Typo3 "Typo3"
[385]: #cite_note-194
[386]: /wiki/PhpBB "PhpBB"
[387]: #cite_note-195
[388]: /wiki/MD5 "MD5"
[389]: /wiki/Password_hashing "Password hashing"
[390]: /wiki/Strcmp "Strcmp"
[391]: #cite_note-196
[392]: /wiki/Website_defacement "Website defacement"
[393]: /wiki/Zone-H "Zone-H"
[394]: /wiki/File_inclusion_vulnerability "File inclusion vulnerability"
[395]: #cite_note-197
[396]: #cite_note-198