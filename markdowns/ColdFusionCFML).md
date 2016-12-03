Adobe **ColdFusion** is a commercial [rapid web application development][0] [platform][1] created by [JJ Allaire][2] in 1995\.[\[1\]][3][\[2\]][4][\[3\]][5][\[4\]][6] (The [programming language][7] used with that platform is also commonly called ColdFusion, though is more accurately known as [CFML][8].) ColdFusion was originally designed to make it easier to connect simple [HTML][9] pages to a [database][10]. By Version 2 (1996), it became a full platform that included an [IDE][11] in addition to a full [scripting language][12].

## Overview

One of the distinguishing features of ColdFusion is its associated scripting language, [ColdFusion Markup Language][13] (CFML). CFML compares to the scripting components of [ASP][14], [JSP][15], and [PHP][16] in purpose and features, but its tag syntax more closely resembles [HTML][9], while its script syntax resembles [JavaScript][17]. _ColdFusion_ is often used synonymously with _[CFML][13]_, but there are [additional CFML application servers][18] besides ColdFusion, and ColdFusion supports programming languages other than CFML, such as server-side [Actionscript][19] and embedded scripts that can be written in a [JavaScript][17]-like language known as [CFScript][20].

Originally a product of [Allaire][21] and released on July 2, 1995, ColdFusion was developed by brothers [Joseph J. "JJ"][2] and [Jeremy Allaire][22]. In 2001 [Allaire][21] was acquired by [Macromedia][23], which in turn was acquired by [Adobe Systems][24] Inc in 2005\.

ColdFusion is most often used for data-driven [websites][25] or [intranets][26], but can also be used to generate remote services such as [SOAP][27] [web services][28] or [Flash][29] remoting. It is especially well-suited as the server-side technology to the client-side [Flex][30].[\[5\]][31]

ColdFusion can also handle asynchronous events such as [SMS][32] and [instant messaging][33] via its gateway interface, available in ColdFusion MX 7 Enterprise Edition.

## Main features

ColdFusion provides a number of additional features out of the box. The main things are:

Other implementations of CFML offer similar or enhanced functionality, such as running in a [.NET][34] environment or image manipulation.

The engine was written in C and featured, among other things, a built-in scripting language (CFScript), plugin modules written in Java, and a syntax very similar to HTML. The equivalent to an HTML element, a ColdFusion tag begins with the letters "CF" followed by a name that is indicative of what the tag is interpreted to, in HTML. E.g. <cfoutput\> to begin the output of variables or other content.

In addition to CFScript and plugins (as described), CFStudio provided a design platform with a [WYSIWYG][35] display. In addition to ColdFusion, CFStudio also supports syntax in other languages popular for backend programming, such as Perl. In addition to making backend functionality easily available to the non-programmer, (version 4.0 and forward in particular) integrated easily with the [Apache Web Server][36] and with [Internet Information Services][37].

## Other features

All versions of ColdFusion prior to 6.0 were written using Microsoft [Visual C++][38]. This meant that ColdFusion was largely limited to running on [Microsoft Windows][39], although Allaire did successfully port ColdFusion to [Sun][40] [Solaris][41] starting with version 3.1\.

The [Allaire][21] company was sold to [Macromedia][23], then Macromedia was sold to [Adobe][24]. Earlier versions were not as robust as the versions available from version 4.0 forward.

With the release of ColdFusion MX 6.0, the engine had been re-written in [Java][42] and supported its own runtime environment, which was easily replaced through its configuration options with the runtime environment from Sun. Version 6.1 included the ability to code and debug Shockwave Flash.

## Release history

## Versions

## Cold Fusion 3.1

Version 3.1 brought about a port to the [Sun Solaris][41] operating system. Cold Fusion studio gained a live page preview and HTML syntax checker.

## ColdFusion 4

"Cold Fusion" moniker renamed simply as "ColdFusion" - possibly to distinguish it from [Cold fusion][43] theory.

## ColdFusion 4.5

Version 4.5 brought the ability to natively invoke Java objects, execute system commands, and talk directly to a Java EE server.

## ColdFusion 5

First release from [Macromedia][23] after the [Allaire Corporation][21] acquisition. The last to be legacy coded for a specific platform.

On January 16, 2001, Allaire announced a pending merger with Macromedia. Macromedia continued its development and released the product under the name ColdFusion 5.0\. It retained the name "ColdFusion" through the remainder of version 5 releases.

## ColdFusion MX 6

Prior to 2000, Edwin Smith, an Allaire architect on JRun and later the Flash Player, initiated a project codenamed "Neo".[\[13\]][44] This project was later revealed as a ColdFusion Server re-written completely using [Java][45]. This made portability easier and provided a layer of security on the server, because it ran inside a Java Runtime Environment.

In June 2002 Macromedia released the version 6.0 product under a slightly different name, ColdFusion MX, allowing the product to be associated with both the Macromedia brand and its original branding. ColdFusion MX was completely rebuilt from the ground up and was based on the [Java EE][46] platform. ColdFusion MX was also designed to integrate well with [Macromedia Flash][47] using Flash Remoting.

With the release of ColdFusion MX, the CFML language API was released with an [OOP][48] interface.

## ColdFusion MX 7

With the release of ColdFusion 7.0 on February 7, 2005, the naming convention was amended, rendering the product name "Macromedia ColdFusion MX 7" (the codename for CFMX7 was "Blackstone"). CFMX 7 added Flash-based and [XForms][49]-based web forms, and a report builder that output in [Adobe PDF][50] as well as [FlashPaper][51], [RTF][52] and [Excel][53]. The Adobe PDF output is also available as a wrapper to any HTML page, converting that page to a quality printable document. The enterprise edition also added [Gateways][54]. These provide interaction with non-HTTP request services such as IM Services, SMS, Directory Watchers, and an asynchronous execution. XML support was boosted in this version to include native schema checking.

ColdFusion MX 7.0.1 (codename "Merrimack") added support for Mac OS X, improvements to Flash forms, RTF support for CFReport, the new CFCPRoxy feature for Java/CFC integration, and more. ColdFusion MX 7.0.2 (codenamed "Mystic") included advanced features for working with Adobe Flex 2 as well as more improvements for the CF Report Builder.

## Adobe ColdFusion 8

On July 30, 2007, [Adobe Systems][24] released **ColdFusion 8**, dropping "MX" from its name.[\[14\]][55] During beta testing the codename used was "Scorpio" (the eighth sign of the zodiac and the eighth iteration of ColdFusion as a commercial product). More than 14,000 developers worldwide were active in the beta process - many more testers than the 5,000 [Adobe Systems][24] originally expected. The ColdFusion development team consisted of developers based in Newton/Boston, Massachusetts and offshore in Bangalore, India.

Some of the new features are the CFPDFFORM tag, which enables integration with [Adobe Acrobat][56] forms, some image manipulation functions, [Microsoft .NET][57] integration, and the CFPRESENTATION tag, which allows the creation of dynamic presentations using [Adobe Acrobat Connect][58], the Web-based collaboration solution formerly known as [Macromedia Breeze][59]. In addition, the ColdFusion Administrator for the Enterprise version ships with built-in server monitoring. ColdFusion 8 is available on several [operating systems][60] including [Linux][61], [Mac OS X][62] and [Windows Server 2003][63].

Other additions to ColdFusion 8 are built-in [Ajax][64] widgets, file archive manipulation (CFZIP), [Microsoft Exchange][65] server integration (CFEXCHANGE), image manipulation including automatic [CAPTCHA][66] generation (CFIMAGE), multi-threading, per-application settings, [Atom][67] and [RSS][68] feeds, reporting enhancements, stronger encryption libraries, array and structure improvements, improved database interaction, extensive performance improvements, PDF manipulation and merging capabilities (CFPDF), interactive debugging, embedded database support with [Apache Derby][69], and a more [ECMAScript][70] compliant CFSCRIPT.

For development of ColdFusion applications, several tools are available: primarily [Adobe Dreamweaver][71] CS4, [Macromedia HomeSite][72] 5.x, [CFEclipse][73], [Eclipse][74] and others. "Tag updaters" are available for these applications to update their support for the new ColdFusion 8 features.

## Adobe ColdFusion 9

ColdFusion 9 (Codenamed: [Centaur][75]) was released on October 5, 2009\. New features for CF9 include:

## Adobe ColdFusion 10

ColdFusion 10 (Codenamed: Zeus) was released on May 15, 2012\. New or improved features available in all editions (Standard, Enterprise, and Developer) include (but are not limited to):

Additional new or improved features in ColdFusion Enterprise or Developer editions include (but are not limited to):

The lists above were obtained from the Adobe web site pages describing "new features", as listed first in the links in the following list.

For additional information on new features, see:

CF10 was originally referred to by the codename Zeus, after first being confirmed as coming by Adobe at [Adobe MAX][76] 2010, and during much of its prerelease period. It was also commonly referred to as "ColdFusion next" and "ColdFusion X" in blogs, on Twitter, etc., before Adobe finally confirmed it would be "ColdFusion 10". For much of 2010, ColdFusion Product Manager Adam Lehman toured the US setting up countless meetings with customers, developers, and user groups to formulate a master blueprint for the next feature set. In September 2010, he presented the plans to Adobe where they were given full support and approval by upper management.[\[15\]][77]

The first public beta of ColdFusion 10 was released via Adobe Labs on 17 February 2012\.

## Adobe ColdFusion 11

ColdFusion 11 (Codenamed: Splendor) was released on April 29, 2014\.

ColdFusion 11 has actually removed many features previously identified in earlier releases as "deprecated" or no longer supported. Usually you could continue to use a certain tag or function. This is no longer the case. For example, changes to the CFLOG tag that were deprecated will cause an error condition in CF11 and not in CF10\.

## Adobe ColdFusion (2016 release)

Adobe ColdFusion (2016 release), Codenamed: Raijin was released on February 16, 2016\.

## Adobe ColdFusion 13

ColdFusion 13 (Codenamed: Aether[\[16\]][78]). The next version of ColdFusion server post Raijin has been codenamed **Aether**. Aether is the Greek god of upper atmosphere.

## Development roadmap

On August 13, 2012 Adobe announced, via their [Official ColdFusion Blog][79], the new [Roadmap][80] for ColdFusion including the code names, "Splendor", "Thunder" and "Dazzle", for the next two release versions. Adobe announced new features for ColdFusion including (but not limited to); Mobile - Streamlined Mobile Application Development, Revamped and new PDF functionalities, Enabling Enterprise to easily integrate with Social Media Streams, Enterprise mobility, Support for responsive multi screen content, Digital Marketing -- Web, Mobile & Social Analytics and Customizable Enterprise Video Portal. Adobe also announced in the same Roadmap upcoming cloud enhancements. The Roadmap projects ColdFusion development out to the year 2021\.

## Features

## Rich forms

ColdFusion Server includes a subset of its [Macromedia Flex][81] 1.5 technology. Its stated purpose is to allow for rich forms in HTML pages using CFML to generate Flash movies. These Flash forms can be used to implement rich internet applications, but with limited efficiency due to the ActionScript restrictions in place on Flash forms by Macromedia.

Flash forms also provide additional widgets for data input, such as date pickers and data grids.

In previous versions of ColdFusion, some form validation and additional widgets were available using a combination of Java applets and JavaScript. This option persists for those who do not wish to use Flash, however not all features are supported.

An example:

ColdFusion also includes some [XForms][49] capability, and the ability to "skin" forms using [XSLT][82].

## PDF and FlashPaper generation

ColdFusion can generate [PDF][83] or [FlashPaper][51] documents using standard HTML (i.e. no additional coding is needed to generate documents for print). CFML authors place HTML and CSS within a pair of cfdocument tags and specify the desired format (FlashPaper or PDF). The generated document can then either be saved to disk or sent to the client's browser. ColdFusion 8 has now introduced the cfpdf tag which allows for control over PDF documents including PDF forms, and merging of PDFs. These tags however do not use Adobe's PDF engine but a combination of the commercial [JPedal][84] Java PDF library and the free and open source Java library [iText][85].

## ColdFusion Components (Objects)

ColdFusion was originally not an [object-oriented programming language][86] like [PHP][16] versions 3 and below. ColdFusion falls into the category of OO languages that do not support multiple inheritance (along with Java, Smalltalk, etc.).[\[17\]][87] With the MX release (6+), ColdFusion introduced basic OO functionality with the _component_ language construct which resembles classes in OO languages. Each _component_ may contain any number of properties and methods. One component may also extend another ([Inheritance][88]). Components only support single inheritance. Object handling feature set and performance enhancing has occurred with subsequent releases. With the release of ColdFusion 8, Java-style [interfaces][89] are supported. ColdFusion components use the file extension _cfc_ to differentiate them from ColdFusion templates (.cfm).

## Remoting

Component methods may be made available as web services with no additional coding and configuration. All that is required is for a method's access to be declared 'remote'. ColdFusion automatically generates a [WSDL][90] at the URL for the component in this manner: http://path/to/components/Component.cfc?wsdl. Aside from SOAP, the services are offered in Flash Remoting binary format.

Methods which are declared remote may also be invoked via an HTTP GET or POST request. Consider the GET request as shown.  

This will invoke the component's search function, passing "your query" and "strict" as arguments.

This type of invocation is well-suited for [Ajax][64]-enabled applications. ColdFusion 8 introduced the ability to serialize ColdFusion data structures to [JSON][91] for consumption on the client.

The ColdFusion server will automatically generate documentation for a component if you navigate to its URL and insert the appropriate code within the component's declarations. This is an application of component introspection, available to developers of ColdFusion components. Access to a component's documentation requires a password. A developer can view the documentation for all components known to the ColdFusion server by navigating to the ColdFusion URL. This interface resembles the [Javadoc][92] HTML documentation for Java classes.

## Custom Tags

ColdFusion provides several ways to implement custom [markup language][93] tags, i.e. those not included in the core ColdFusion language. These are especially useful for providing a familiar interface for web designers and content authors familiar with HTML but not [imperative programming][94].

The traditional and most common way is using CFML. A standard CFML page can be interpreted as a tag, with the tag name corresponding to the file name prefixed with "cf\_". For example, the file IMAP.cfm can be used as the tag "cf\_imap". Attributes used within the tag are available in the ATTRIBUTES scope of the tag implementation page. CFML pages are accessible in the same directory as the calling page, via a special directory in the ColdFusion web application, or via a CFIMPORT tag in the calling page. The latter method does not necessarily require the "cf\_" prefix for the tag name.

A second way is the development of CFX tags using Java or C++. CFX tags are prefixed with "cfx\_", for example "cfx\_imap". Tags are added to the ColdFusion runtime environment using the ColdFusion administrator, where JAR or DLL files are registered as custom tags.

Finally, ColdFusion supports JSP tag libraries from the JSP 2.0 language specification. JSP tags are included in CFML pages using the CFIMPORT tag.

Currently, alternative server platforms generally support ColdFusion 8 functionality, with minor changes or feature enhancements.

## Interactions with other programming languages

## ColdFusion and Java

The standard ColdFusion installation allows the deployment of ColdFusion as a [WAR file][95] or [EAR file][96] for deployment to standalone application servers, such as [Macromedia JRun][97], and IBM [WebSphere][98]. ColdFusion can also be deployed to servlet containers such as [Apache Tomcat][99] and [Mortbay Jetty][100], but because these platforms do not officially support ColdFusion, they leave many of its features inaccessible. As of ColdFusion 10 [Macromedia JRun][97] was replaced by [Apache Tomcat][99].

Because ColdFusion is a Java EE application, ColdFusion code can be mixed with Java classes to create a variety of applications and use existing Java libraries. ColdFusion has access to all underlying Java classes, supports JSP custom tag libraries, and can access JSP functions after retrieving the JSP page context (_GetPageContext()_).

Prior to ColdFusion 7.0.1, ColdFusion components could only be used by Java or .NET by declaring them as web services. However, beginning in ColdFusion MX 7.0.1, ColdFusion components can now be used directly within Java classes using the CFCProxy class.[\[18\]][101]

Recently, there has been much interest in Java development using alternate languages such as [Jython][102], [Groovy][103] and [JRuby][104]. ColdFusion was one of the first scripting platforms to allow this style of Java development.

## ColdFusion and .NET

ColdFusion 8 natively supports [.NET][34] within the CFML syntax. ColdFusion developers can simply call any .NET assembly without needing to recompile or alter the assemblies in any way. Data types are automatically translated between ColdFusion and .NET (example: .NET DataTable → ColdFusion Query).

A unique feature for a Java EE vendor, ColdFusion 8 offers the ability to access .NET Assemblies remotely through proxy (without the use of [.NET Remoting][105]). This allows ColdFusion users to leverage .NET without having to be installed on a Windows operating system.

## Acronyms

The [acronym][106] for the ColdFusion Markup Language is _**CFML**_. When ColdFusion templates are saved to disk, they are traditionally given the extension .cfm or .cfml. The .cfc extension is used for ColdFusion Components. The original extension was DBM or DBML, which stood for Database Markup Language. When talking about ColdFusion, most users use the acronym CF and this is used for numerous ColdFusion resources such as user groups (CFUGs) and sites.

CFMX is the common abbreviation for ColdFusion versions 6 and 7 (aka ColdFusion MX).

## Alternative server environments

ColdFusion originated as proprietary technology based on Web technology industry standards. However, it is becoming a less closed technology through the availability of competing products. Such alternative products include (in alphabetical order):

The argument can be made that ColdFusion is even less platform-bound than raw Java EE or .NET, simply because ColdFusion will run on top of a .NET app server (New Atlanta), or on top of any servlet container or Java EE application server ([JRun][107], [WebSphere][108], [JBoss][109], [Geronimo][110], [Tomcat][99], [Resin Server][111], [Jetty (web server)][100], etc.). In theory, a ColdFusion application could be moved unchanged from a Java EE application server to a .NET application server.

## Vulnerabilities

In March 2013, a known issue affecting ColdFusion 8, 9 and 10 left the [National Vulnerability Database][112] open to attack.[\[19\]][113] The vulnerability had been identified and a patch released by Adobe for CF9 and CF10 in January.[\[20\]][114]

In April 2013, a ColdFusion vulnerability was blamed by [Linode][115] for an intrusion into the Linode Manager control panel website.[\[21\]][116] A security bulletin and [hotfix][117] for this had been issued by Adobe a week earlier.[\[22\]][118]

In May 2013, Adobe identified another critical vulnerability, reportedly already being exploited in the wild, which targets all recent versions of ColdFusion on any servers where the web-based administrator and API have not been locked down. The vulnerability allows unauthorized users to upload malicious scripts and potentially gain full control over the server.[\[23\]][119][\[24\]][120] A security bulletin and [hotfix][117] for this was issued by Adobe 6 days later.[\[25\]][121] This is currently the only known vulnerability for ColdFusion 9 and ColdFusion 10 (currently supported versions).[\[26\]][122][\[27\]][123]

In April 2015 there was reported a Cross-site scripting (XSS) vulnerability in Adobe ColdFusion 10 before Update 16, and in ColdFusion 11 before Update 5, that allows remote attackers to inject arbitrary web script or HTML;[\[28\]][124] however, it's exploitable only by users who have authenticated through the administration panel. [\[29\]][125]

## See also

## References

## External links

[0]: /wiki/Rapid_application_development "Rapid application development"
[1]: /wiki/Computing_platform "Computing platform"
[2]: /wiki/Joseph_J._Allaire "Joseph J. Allaire"
[3]: #cite_note-1
[4]: #cite_note-2
[5]: #cite_note-3
[6]: #cite_note-4
[7]: /wiki/Programming_language "Programming language"
[8]: /wiki/CFML "CFML"
[9]: /wiki/HTML "HTML"
[10]: /wiki/Database "Database"
[11]: /wiki/Integrated_development_environment "Integrated development environment"
[12]: /wiki/Scripting_language "Scripting language"
[13]: /wiki/ColdFusion_Markup_Language "ColdFusion Markup Language"
[14]: /wiki/Active_Server_Pages "Active Server Pages"
[15]: /wiki/JavaServer_Pages "JavaServer Pages"
[16]: /wiki/PHP "PHP"
[17]: /wiki/JavaScript "JavaScript"
[18]: #Alternative_server_environments
[19]: /wiki/Actionscript "Actionscript"
[20]: /wiki/CFScript "CFScript"
[21]: /wiki/Allaire_Corporation "Allaire Corporation"
[22]: /wiki/Jeremy_Allaire "Jeremy Allaire"
[23]: /wiki/Macromedia "Macromedia"
[24]: /wiki/Adobe_Systems "Adobe Systems"
[25]: /wiki/Website "Website"
[26]: /wiki/Intranet "Intranet"
[27]: /wiki/SOAP "SOAP"
[28]: /wiki/Web_service "Web service"
[29]: /wiki/Adobe_Flash "Adobe Flash"
[30]: /wiki/Adobe_Flex "Adobe Flex"
[31]: #cite_note-5
[32]: /wiki/Short_message_service "Short message service"
[33]: /wiki/Instant_messaging "Instant messaging"
[34]: /wiki/.NET_Framework ".NET Framework"
[35]: /wiki/WYSIWYG "WYSIWYG"
[36]: /wiki/Apache_HTTP_Server "Apache HTTP Server"
[37]: /wiki/Internet_Information_Services "Internet Information Services"
[38]: /wiki/Visual_C%2B%2B "Visual C++"
[39]: /wiki/Microsoft_Windows "Microsoft Windows"
[40]: /wiki/Sun_Microsystems "Sun Microsystems"
[41]: /wiki/Solaris_(operating_system) "Solaris (operating system)"
[42]: /wiki/Java_(programming_language) "Java (programming language)"
[43]: /wiki/Cold_fusion "Cold fusion"
[44]: #cite_note-13
[45]: /wiki/Java_platform "Java platform"
[46]: /wiki/Java_EE "Java EE"
[47]: /wiki/Macromedia_Flash "Macromedia Flash"
[48]: /wiki/Object-oriented_programming "Object-oriented programming"
[49]: /wiki/XForms "XForms"
[50]: /wiki/Adobe_PDF "Adobe PDF"
[51]: /wiki/FlashPaper "FlashPaper"
[52]: /wiki/Rich_Text_Format "Rich Text Format"
[53]: /wiki/Microsoft_Excel "Microsoft Excel"
[54]: /wiki/Gateway_(computer_networking) "Gateway (computer networking)"
[55]: #cite_note-14
[56]: /wiki/Adobe_Acrobat "Adobe Acrobat"
[57]: /wiki/Microsoft_.NET "Microsoft .NET"
[58]: /wiki/Adobe_Acrobat_Connect "Adobe Acrobat Connect"
[59]: /wiki/Macromedia_Breeze "Macromedia Breeze"
[60]: /wiki/Operating_systems "Operating systems"
[61]: /wiki/Linux "Linux"
[62]: /wiki/Mac_OS_X "Mac OS X"
[63]: /wiki/Windows_Server_2003 "Windows Server 2003"
[64]: /wiki/Ajax_(programming) "Ajax (programming)"
[65]: /wiki/Microsoft_Exchange_Server "Microsoft Exchange Server"
[66]: /wiki/CAPTCHA "CAPTCHA"
[67]: /wiki/Atom_(standard) "Atom (standard)"
[68]: /wiki/RSS "RSS"
[69]: /wiki/Apache_Derby "Apache Derby"
[70]: /wiki/ECMAScript "ECMAScript"
[71]: /wiki/Adobe_Dreamweaver "Adobe Dreamweaver"
[72]: /wiki/Macromedia_HomeSite "Macromedia HomeSite"
[73]: /w/index.php?title=CFEclipse&action=edit&redlink=1 "CFEclipse (page does not exist)"
[74]: /wiki/Eclipse_(software) "Eclipse (software)"
[75]: /wiki/Centaur "Centaur"
[76]: /wiki/Adobe_MAX "Adobe MAX"
[77]: #cite_note-15
[78]: #cite_note-:0-16
[79]: http://blogs.coldfusion.com/post.cfm/product-roadmap-for-coldfusion
[80]: http://blogs.coldfusion.com/assets/content/roadmap/ColdFusionRoadMap.pdf
[81]: /wiki/Macromedia_Flex "Macromedia Flex"
[82]: /wiki/XSLT "XSLT"
[83]: /wiki/PDF "PDF"
[84]: /wiki/JPedal "JPedal"
[85]: /wiki/IText "IText"
[86]: /wiki/Object-oriented_programming_language "Object-oriented programming language"
[87]: #cite_note-17
[88]: /wiki/Inheritance_(computer_science) "Inheritance (computer science)"
[89]: /wiki/Interface_(programming) "Interface (programming)"
[90]: /wiki/Web_Services_Description_Language "Web Services Description Language"
[91]: /wiki/JSON "JSON"
[92]: /wiki/Javadoc "Javadoc"
[93]: /wiki/Markup_language "Markup language"
[94]: /wiki/Imperative_programming "Imperative programming"
[95]: /wiki/WAR_(Sun_file_format) "WAR (Sun file format)"
[96]: /wiki/EAR_(file_format) "EAR (file format)"
[97]: /wiki/Macromedia_JRun "Macromedia JRun"
[98]: /wiki/WebSphere "WebSphere"
[99]: /wiki/Apache_Tomcat "Apache Tomcat"
[100]: /wiki/Jetty_(web_server) "Jetty (web server)"
[101]: #cite_note-18
[102]: /wiki/Jython "Jython"
[103]: /wiki/Groovy_(programming_language) "Groovy (programming language)"
[104]: /wiki/JRuby "JRuby"
[105]: /wiki/.NET_Remoting ".NET Remoting"
[106]: /wiki/Acronym "Acronym"
[107]: /wiki/JRun "JRun"
[108]: /wiki/IBM_WebSphere_Application_Server "IBM WebSphere Application Server"
[109]: /wiki/JBoss "JBoss"
[110]: /wiki/Apache_Geronimo "Apache Geronimo"
[111]: /wiki/Resin_Server "Resin Server"
[112]: /wiki/National_Vulnerability_Database "National Vulnerability Database"
[113]: #cite_note-19
[114]: #cite_note-20
[115]: /wiki/Linode "Linode"
[116]: #cite_note-21
[117]: /wiki/Hotfix "Hotfix"
[118]: #cite_note-22
[119]: #cite_note-23
[120]: #cite_note-24
[121]: #cite_note-25
[122]: #cite_note-26
[123]: #cite_note-27
[124]: #cite_note-28
[125]: #cite_note-29