**Lasso** is an [application server][0] and server management interface used to develop internet applications and is a [general-purpose][1], [high-level programming language][2]. Originally a web datasource connection tool,[\[1\]][3] for [Filemaker][4] and later included in [Apple Computer][5]'s FileMaker 4.0 and [Claris Homepage][6] as CDML,[\[2\]][7][\[3\]][8] it has since evolved into a complex language used to develop and serve large-scale internet applications and web pages.

Lasso includes a simple template system allowing code to control generation of [HTML][9] and other [content types][10]. Lasso is [object-oriented][11] and every value is an [object][12]. It also supports [procedural programming][13] through _unbound_ methods. The language uses [traits][14] and [multiple dispatch][15] extensively.

Lasso has a dynamic [type system][16], where objects can be loaded and augmented at runtime, automatic [memory management][17], a comprehensive [standard library][18], and three [compiling][19] methodologies: [dynamic][20] (comparable to [PHP][21]-[Python][22]), [just-in-time compilation][23] (comparable to [Java][24] or [.NET Framework][25]), and [pre-compiled][19] (comparable to [C][26]). Lasso also supports Query Expressions,[\[4\]][27] allowing elements within arrays and other types of sequences to be iterated, filtered, and manipulated using a natural language syntax similar to [SQL][28].[\[5\]][29] Lasso includes full [Unicode][30] character support in the standard string object, allowing it to serve and support [multi-byte characters][31] such as Japanese and Swedish, and supports transparent [UTF-8][32] conversion when writing string data to the network or file system.

Lasso is often used as a [scripting language][33], and also used in a wide range of non-scripting contexts. Lasso code can be packaged into standalone executable programs called "LassoApps", in which folder structures are compiled into single files.[\[6\]][34]

The Lasso Server application server runs as a system service and receives requests from the [web server][35] through [FastCGI][36]. It then hands the request off to the appropriate Lasso Instance, which formulates the response. Multiple individual instances are supported, allowing one server to handle multiple sites, each as separate processes. The server uses a high performance [IO][37]-based [green threading][38] system designed for [multi-core][39] systems.

Lasso can be compared to the [server-side scripting][40] languages [PHP][21][\[7\]][41][\[8\]][42] and [Python][22], [ColdFusion][43], [Ruby][44], etc. [\[9\]][45][\[10\]][46]

Free for development, Lasso allows partial access to its source code,[\[11\]][47] allowing developers to add or change major components of the language (for example, Ke Carlton's DS implementation of the Lasso Inline[\[12\]][48]). Licensing comes in both SAS and stand-alone versions.[\[13\]][49]

## History

Lasso began in the mid-1990s when early web developers were attempting to connect Apple's FileMaker Pro database with the World Wide Web. On the Mac platform, there were two solutions: Eric Bickford's [WEB-FM][50], and Russell Owens' [FileMaker CGI (ROFM)][51], both built in [AppleScript][52] and requiring the use of FileMaker Pro calculation fields for formatting. (WEB-FM was subsequently rewritten in C).

In the Fall of 1995, developer Vince Bonafonti wrote a new CGI based on ROFM, using C/C++ for improved performance, and using the notion of HTML-based "templates" instead of relying on calculation fields. This proved very popular in the FileMaker community, and was brought to the attention of Bill Doerrfeld, owner of [Blue World Communications Inc.][53], a print and website development firm based out of [Issaquah, Washington][54], who bought the [source code][55].[\[14\]][56]

At this time, Blue World experimented with improvements for the [CGI][57] in the [Frontier][58] scripting environment, which inspired the name "Lasso". Further need for improvement drove the creation of a C-based CGI which was later released as "Lasso 1.0". At this point Lasso only worked with [FileMaker][59] Pro 3.x and [WebSTAR][60], and only ran on [Apple][61] [Mac OS 8][62] and above.[\[15\]][63]

Lasso's popularity grew most notably from reviews in print publications[\[16\]][64]\[_[discuss][65]_\] and Blue World's hosting of and participation in many email discussion lists, many of which specifically pertained to FileMaker Pro. Blue World also made frequent appearances and was known as a leading company at [MacWorld conferences][66].[\[17\]][67]

Following the release of the Lasso 1.2 lineup in January 1997, Blue World and the Bonfantis entered private talks with [Claris][68], the software division of [Apple Computer][5], and owner of FileMaker Pro. Claris eventually licensed the post-version-1.2 Lasso [source code][55], and with the help of Vince and Paul Bonfanti released the FileMaker Web Companion as a component of FileMaker Pro 4.0\. FileMaker Web Companion's language, [CDML][69] (Claris Dynamic Markup Language),[\[18\]][70] differed from Lasso 1.2's LDML (Lasso Dynamic Markup Language), but was close enough as to offer an easy transition for developers looking to serve from FileMaker Pro through third-party servers[\[19\]][71] and offered more compelling features.[\[20\]][72]

Including the Lasso-like Web Companion in FileMaker 4.0 helped grow popularity for Lasso in the fast-growing Macintosh [web development][73] community. Blue World continued developing Lasso with Kyle Jessup becoming Lasso's [lead programmer][74]. Lasso 2.0 was released in July 1997, introducing some fundamental shifts in how Lasso could be used.[\[21\]][75]

On February 26, 2002 Blue World released Lasso 5, a radical departure from the FileMaker-centric language to date. (There was never a Lasso 4 release; the version number skipped from 3 to 5.) Lasso 5 included, among many updates, a completely rewritten architecture (for OS X, Windows, Linux), and an embedded [MySQL][76] database.[\[22\]][77] Though Lasso 5 still spoke to a FileMaker database (but not to a FileMaker Server), FileMaker as a data source remained relatively slow compared to an SQL engine, and was prohibitively more expensive. Since v2.0, Lasso was fully multithreaded, allowing many connections at once, but succumbed to FileMaker's latency or lag in certain operations, and there was no way to get around it reliably other than to make major changes to the data source.[\[23\]][78]

Lasso 5 also added support for [Apache HTTP Server][79] natively under OS X, Windows, and Linux, joining Webstar 5, [AppleShare IP][80] (which was replaced by OS X Server), and iTools (from Tenon[\[24\]][81]). (Mac OS 9, on which Lasso had been used for many years, was unsupported). This drove closer ties to a classic [LAMP][82] server architecture.\[_[citation needed][83]_\]

Blue World Communications released a series of plug-ins for popular Web development packages from Macromedia and Adobe. Lasso Studio 1.5 for Dreamweaver was a runner up in MacWorld magazine's Editors' Choice Awards for Internet and Development[\[25\]][84] in 2001, losing out to [Adobe Dreamweaver][85] 3\. Lasso Studio for Dreamweaver 1.5[\[26\]][86] was also reviewed favorably by MacWorld magazine earning 4 and a half mice. Later version of Lasso Studio supported both [Macromedia Dreamweaver][85] and [Adobe GoLive][87] including Lasso Studio 7 for Dreamweaver and GoLive[\[27\]][88] on March 26, 2004\.

With the release of FileMaker Server and FileMaker Server Advanced version 7 in 2004 FileMaker signaled a major change in their strategy for serving data to Web sites. They emphasized XML-XSLT, ODBC, and JDBC connectivity, but only through the more expensive FileMaker Server Advanced product.[\[28\]][89] Blue World began to distance the Lasso language from FileMaker and Apple. In 2005, Lasso Pro received MySQL Network certification[\[29\]][90] demonstrating the importance of the popular open source database to the future of Lasso.

On August 1 of 2004, Bill Doerrfeld officially sold the Lasso product line to OmniPilot Software, Inc. in Ft. Lauderdale, Florida. Lasso 7.0.3 was the last version of Lasso released by Blue World.[\[30\]][91]

On October 25, 2004, OmniPilot officially announced the release of Lasso 8, a version including sandboxing for multiple sites on the same server and connectivity to many new datasources.[\[31\]][92] This also included the first "free" version of Lasso limited to IP addresses.[\[32\]][93] OmniPilot followed this release with a number of complementary products, including Lasso Studio 8 for Dreamweaver and GoLive[\[33\]][94] on March 28, 2005, Lasso Studio for [Eclipse][95], ChartFX integration and a number of free Lasso-based solutions.[\[34\]][96]

In 2007, three OmniPilot employees, Kyle Jessup (the original developer of Lasso 1.0), Fletcher Sandbeck (an early employee of Blue World known for regular Tips and Tricks) and Kerry Adams (an employee of OmniPilot) created a new company, LassoSoft LLC, to purchase the intellectual property of Lasso from OmniPilot and continue development.[\[35\]][97][\[36\]][98] Recognizing the need to be competitive against much more popular languages such as [PHP][21] and [ASP][99], radical changes in architecture, syntax and structure were made and released as Lasso 9.0\. Technical challenges caused by these changes, coupled with limited marketing resources, led to significant community decline as the company struggled to release documentation and support for the new language.[\[37\]][100][\[38\]][101]

In December 2010, a new Canadian company was formed, LassoSoft Inc., which bought and invested heavily in the Lasso 9.0 language, marketing and documentation. Kyle Jessup agreed to stay on as both Lasso's Lead Developer and [Benevolent Dictator for Life][102]. Several releases (9.1 and 9.2) have released further developments in recent years.[\[39\]][103]

## Release history

## Code examples

## Hello World

Here are three ways to say "Hello world!" on a Lasso page.

Square brackets are reserved in Lasso, so html entities must be used to show square brackets on Lasso pages for other purposes than marking Lasso tags. Alternatively, printing square brackets can be by Lasso or be disabled by including \[no\_square\_brackets\] at the file top.

## Inlines

Inlines are the basic Lasso tool for database actions. [Database commands][104] can be issued as above, in Lasso's db-independent metalanguage, in which case the same search code works for MySQL, FileMaker Pro or for any other database backend with which Lasso can connect.

If needed, a [SQL][28] statement can of course be embedded in the inline when using a database server that supports SQL:

In the above example, the dashes (-) before commands denote optional parameters. These can be specified in any order and generated dynamically; the last of any duplicate parameters take precedence. The inline command supports a large range of parameters[\[59\]][105] allowing developers to interact with databases that they may not have intimate knowledge of.

Custom database connectors can be created which allows leveraging the abstracted nature of the inline command.

## 99 Bottles of Beer

The next procedural example prints out the lyrics for the song "99 Bottles of Beer".

The next example uses an OOP approach to print out the lyrics when the object is represented as a string:

## Development tools, environments

## References

## External links

[0]: /wiki/Application_server "Application server"
[1]: /wiki/General-purpose_programming_language "General-purpose programming language"
[2]: /wiki/High-level_programming_language "High-level programming language"
[3]: #cite_note-1
[4]: /wiki/Filemaker "Filemaker"
[5]: /wiki/Apple_Computer "Apple Computer"
[6]: /wiki/Claris_Homepage "Claris Homepage"
[7]: #cite_note-2
[8]: #cite_note-3
[9]: /wiki/HTML "HTML"
[10]: /wiki/Internet_media_type "Internet media type"
[11]: /wiki/Object-oriented "Object-oriented"
[12]: /wiki/Object_(computer_science) "Object (computer science)"
[13]: /wiki/Procedural_programming "Procedural programming"
[14]: /wiki/Trait_(computer_programming) "Trait (computer programming)"
[15]: /wiki/Multiple_dispatch "Multiple dispatch"
[16]: /wiki/Type_system "Type system"
[17]: /wiki/Memory_management "Memory management"
[18]: /wiki/Standard_library "Standard library"
[19]: /wiki/Compiler "Compiler"
[20]: /wiki/Dynamic_compilation "Dynamic compilation"
[21]: /wiki/PHP "PHP"
[22]: /wiki/Python_(programming_language) "Python (programming language)"
[23]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[24]: /wiki/Java_(programming_language) "Java (programming language)"
[25]: /wiki/.NET_Framework ".NET Framework"
[26]: /wiki/C_(programming_language) "C (programming language)"
[27]: #cite_note-4
[28]: /wiki/SQL "SQL"
[29]: #cite_note-5
[30]: /wiki/Unicode "Unicode"
[31]: /wiki/Variable-width_encoding "Variable-width encoding"
[32]: /wiki/UTF-8 "UTF-8"
[33]: /wiki/Scripting_language "Scripting language"
[34]: #cite_note-6
[35]: /wiki/Webserver "Webserver"
[36]: /wiki/FastCGI "FastCGI"
[37]: /wiki/Input/output "Input/output"
[38]: /wiki/Green_threads "Green threads"
[39]: /wiki/Multi-core_processor "Multi-core processor"
[40]: /wiki/Server-side_scripting "Server-side scripting"
[41]: #cite_note-7
[42]: #cite_note-8
[43]: /wiki/ColdFusion_Markup_Language "ColdFusion Markup Language"
[44]: /wiki/Ruby_programming_language "Ruby programming language"
[45]: #cite_note-9
[46]: #cite_note-10
[47]: #cite_note-11
[48]: #cite_note-12
[49]: #cite_note-13
[50]: http://webfm.com/webfm.html
[51]: http://www.astro.washington.edu/owen/ROFM_CGI.html
[52]: /wiki/AppleScript "AppleScript"
[53]: https://web.archive.org/web/20030605131907/http://www.blueworld.com/blueworld/
[54]: /wiki/Issaquah,_Washington "Issaquah, Washington"
[55]: /wiki/Source_code "Source code"
[56]: #cite_note-14
[57]: /wiki/Common_Gateway_Interface "Common Gateway Interface"
[58]: /wiki/UserLand_Software "UserLand Software"
[59]: /wiki/FileMaker "FileMaker"
[60]: /wiki/WebSTAR "WebSTAR"
[61]: /wiki/Apple_Inc. "Apple Inc."
[62]: /wiki/Mac_OS_8 "Mac OS 8"
[63]: #cite_note-15
[64]: #cite_note-16
[65]: /wiki/Talk:Lasso_(programming_language)#Notability "Talk:Lasso (programming language)"
[66]: /wiki/Macworld/iWorld "Macworld/iWorld"
[67]: #cite_note-17
[68]: /wiki/Claris "Claris"
[69]: /wiki/CDML "CDML"
[70]: #cite_note-18
[71]: #cite_note-19
[72]: #cite_note-20
[73]: /wiki/Web_development "Web development"
[74]: /wiki/Lead_programmer "Lead programmer"
[75]: #cite_note-21
[76]: /wiki/MySQL "MySQL"
[77]: #cite_note-22
[78]: #cite_note-23
[79]: /wiki/Apache_HTTP_Server "Apache HTTP Server"
[80]: /wiki/AppleShare_IP "AppleShare IP"
[81]: #cite_note-24
[82]: /wiki/LAMP_(software_bundle) "LAMP (software bundle)"
[83]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[84]: #cite_note-25
[85]: /wiki/Adobe_Dreamweaver "Adobe Dreamweaver"
[86]: #cite_note-26
[87]: /wiki/Adobe_GoLive "Adobe GoLive"
[88]: #cite_note-27
[89]: #cite_note-28
[90]: #cite_note-29
[91]: #cite_note-30
[92]: #cite_note-31
[93]: #cite_note-32
[94]: #cite_note-33
[95]: /wiki/Eclipse_(software) "Eclipse (software)"
[96]: #cite_note-34
[97]: #cite_note-35
[98]: #cite_note-36
[99]: /wiki/Active_Server_Pages "Active Server Pages"
[100]: #cite_note-37
[101]: #cite_note-38
[102]: /wiki/Benevolent_Dictator_for_Life "Benevolent Dictator for Life"
[103]: #cite_note-39
[104]: http://www.lassosoft.com/lassoDocs/languageReference/obj/inline
[105]: #cite_note-59