**JavaScript** ([/ˈdʒævəˌskrɪpt/][0][\[5\]][1]) is a [high-level][2], [dynamic][3], [untyped][4], and [interpreted][5] [programming language][6].[\[6\]][7] It has been standardized in the [ECMAScript][8] language specification.[\[7\]][9] Alongside [HTML][10] and [CSS][11], JavaScript is one of the three core technologies of [World Wide Web][12] [content production][13]; the majority of [websites][14] employ it, and all modern [Web browsers][15] support it without the need for [plug-ins][16].[\[6\]][7] JavaScript is [prototype-based][17] with [first-class functions][18], making it a [multi-paradigm][19] language, supporting [object-oriented][20],[\[8\]][21] [imperative][22], and [functional][23] [programming styles][24].[\[6\]][7] It has an [API][25] for working with text, [arrays][26], dates and [regular expressions][27], but does not include any [I/O][28], such as networking, storage, or graphics facilities, relying for these upon the host environment in which it is embedded.[\[7\]][9]

Although there are strong outward similarities between JavaScript and Java, including language name, [syntax][29], and respective [standard libraries][30], the two are distinct languages and differ greatly in their design. JavaScript was influenced by programming languages such as [Self][31] and [Scheme][32].[\[9\]][33]

JavaScript is also used in environments that are not Web-based, such as [PDF][34] documents, [site-specific browsers][35], and [desktop widgets][36]. Newer and faster JavaScript [virtual machines][37] (VMs) and platforms built upon them have also increased the popularity of JavaScript for [server-side][38] [Web applications][39]. On the [client side][40], developers have traditionally implemented JavaScript as an [interpreted][41] language, but more recent browsers perform [just-in-time compilation][42]. Programmers also use JavaScript in [video-game development][43], in crafting desktop and mobile applications, and in server-side [network programming][44] with run-time environments such as [Node.js][45].

## History

## Beginnings at Netscape

In 1993, the [National Center for Supercomputing Applications][46] (NCSA), a unit of the [University of Illinois at Urbana-Champaign][47], released [NCSA Mosaic][48], the first popular graphical [Web browser][15], which played an important part in expanding the growth of the nascent [World Wide Web][12]. In 1994, a company called [Mosaic Communications][49] was founded in [Mountain View][50], [California][51] and employed many of the original NCSA Mosaic authors to create [Mosaic Netscape][52]. However, it intentionally shared no code with NCSA Mosaic. The internal codename for the company's browser was Mozilla, which stood for "Mosaic killer", as the company's goal was to displace NCSA Mosaic as the world's number one web browser. The first version of the Web browser, Mosaic Netscape 0.9, was released in late 1994\. Within four months it had already taken three-quarters of the browser market and became the main browser for Internet in the 1990s. To avoid trademark ownership problems with the NCSA, the browser was subsequently renamed Netscape Navigator in the same year, and the company took the name Netscape Communications.

Netscape Communications realized that the Web needed to become more dynamic. [Marc Andreessen][53], the founder of the company believed that [HTML][10] needed a "glue language" that was easy to use by Web designers and part-time programmers to assemble components such as images and plugins, where the code could be written directly in the Web page markup. In 1995, the company recruited [Brendan Eich][54] with the goal of embedding the [Scheme][32] programming language into its Netscape Navigator. Before he could get started, Netscape Communications collaborated with [Sun Microsystems][55] to include in Netscape Navigator Sun's more static programming language [Java][56], in order to compete with [Microsoft][57] for user adoption of Web technologies and platforms.[\[10\]][58] Netscape Communications then decided that the scripting language they wanted to create would complement Java and should have a similar syntax, which excluded adopting other languages such as [Perl][59], [Python][60], [TCL][61], or Scheme. To defend the idea of JavaScript against competing proposals, the company needed a prototype. Eich wrote one in 10 days, in May 1995\.

Although it was developed under the name **Mocha**, the language was officially called **LiveScript** when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995, but it was renamed **JavaScript**[\[11\]][62] when it was deployed in the Netscape Navigator 2.0 beta 3 in December.[\[12\]][63] The final choice of name caused confusion, giving the impression that the language was a spin-off of the Java programming language, and the choice has been characterized as a marketing ploy by Netscape to give JavaScript the cachet of what was then the hot new Web programming language.

There is a common misconception that JavaScript was influenced by an earlier Web page scripting language developed by [Nombas][64] named C-- (not to be confused with the later [C--][65] created in 1997).[\[13\]][66][\[14\]][67] Brendan Eich, however, had never heard of C-- before he created LiveScript.[\[15\]][68] Nombas did pitch their embedded Web page scripting to Netscape, though Web page scripting was not a new concept, as shown by the [ViolaWWW][69] Web browser.[\[16\]][70] Nombas later switched to offering JavaScript instead of C-- in their ScriptEase product and was part of the TC39 group that standardized ECMAScript.[\[17\]][71]

## Server-side JavaScript

Netscape introduced an implementation of the language for [server-side scripting][72] with [Netscape Enterprise Server][73] in December 1995, soon after releasing JavaScript for browsers.[\[18\]][74] Since the mid-2000s, there has been a resurgence of [server-side JavaScript implementations][75], such as [node.js][45].[\[19\]][76] and [MarkLogic][77].[\[20\]][78]

## Adoption by Microsoft

Microsoft script technologies including [VBScript][79] and [JScript][80] were released in 1996\. JScript, a reverse-engineered implementation of Netscape's JavaScript, was part of [Internet Explorer 3][81] as well as being available server-side in [Internet Information Server][82]. Internet Explorer 3 also included Microsoft's first support for CSS and various extensions to HTML, but in each case the implementation was noticeably different to that found in Netscape Navigator at the time.[\[21\]][83][\[22\]][84] These differences made it difficult for designers and programmers to make a single website work well in both browsers, leading to the use of "best viewed in Netscape" and "best viewed in Internet Explorer" logos that characterized these early years of the [browser wars][85].[\[23\]][86] JavaScript began to acquire a reputation for being one of the roadblocks to a cross-platform and standards-driven Web. Some developers took on the difficult task of trying to make their sites work in both major browsers, but many could not afford the time.[\[21\]][83] With the release of [Internet Explorer 4][87], Microsoft introduced the concept of [Dynamic HTML][88], but the differences in language implementations and the different and proprietary [Document Object Models][89] remained and were obstacles to widespread take-up of JavaScript on the Web.[\[21\]][83]

## Standardization

In November 1996, Netscape submitted JavaScript to [Ecma International][90] to carve out a standard specification, which other browser vendors could then implement based on the work done at Netscape. This led to the official release of the language specification [ECMAScript][8] published in the first edition of the ECMA-262 standard in June 1997, with JavaScript being the most well known of the implementations. [ActionScript][91] and [JScript][80] are other well-known implementations of ECMAScript, with extensions.

The standards process continued in cycles, with the release of ECMAScript 2 in June 1998, which brings some modifications to conform to the ISO/IEC 16262 international standard. The release of ECMAScript 3 followed in December 1999, which is the baseline for modern day JavaScript. The original ECMAScript 4 work led by Waldemar Horwat (then at Netscape, now at [Google][92]) started in 2000 and at first, [Microsoft][57] seemed to participate and even implemented some of the proposals in their [JScript .NET][93] language.

Over time it was clear though that Microsoft had no intention of cooperating or implementing proper JavaScript in Internet Explorer, even though they had no competing proposal and they had a partial (and diverged at this point) implementation on the [.NET][94] server side. So by 2003, the original ECMAScript 4 work was mothballed.

The next major event was in 2005, with two major happenings in JavaScript's history. First, Brendan Eich and Mozilla rejoined Ecma International as a not-for-profit member and work started on [ECMAScript for XML][95] (E4X), the ECMA-357 standard, which came from ex-Microsoft employees at [BEA Systems][96] (originally acquired as Crossgain). This led to working jointly with [Macromedia][97] (later acquired by [Adobe Systems][98]), who were implementing E4X in ActionScript 3 (ActionScript 3 was a fork of original ECMAScript 4).

So, along with Macromedia, work restarted on ECMAScript 4 with the goal of standardizing what was in ActionScript 3\. To this end, Adobe Systems released the ActionScript Virtual Machine 2, code named [Tamarin][99], as an [open source][100] project. But Tamarin and ActionScript 3 were too different from web JavaScript to converge, as was realized by the parties in 2007 and 2008\.

Alas, there was still turmoil between the various players; [Douglas Crockford][101]---then at [Yahoo!][102]---joined forces with Microsoft in 2007 to oppose ECMAScript 4, which led to the ECMAScript 3.1 effort. The development of ECMAScript 4 was never completed, but that work influenced subsequent versions.[\[24\]][103]

While all of this was happening, the open source and developer communities set to work to revolutionize what could be done with JavaScript. This community effort was sparked in 2005 when [Jesse James Garrett][104] released a white paper in which he coined the term [Ajax][105], and described a set of technologies, of which JavaScript was the backbone, used to create web applications where data can be loaded in the background, avoiding the need for full page reloads and leading to more dynamic applications. This resulted in a renaissance period of JavaScript usage spearheaded by open source libraries and the communities that formed around them, with libraries such as [Prototype][106], [jQuery][107], [Dojo Toolkit][108], [MooTools][109] and others being released.

In July 2008, the disparate parties on either side came together in Oslo. This led to the eventual agreement in early 2009 to rename ECMAScript 3.1 to ECMAScript 5 and drive the language forward using an agenda that is known as Harmony. ECMAScript 5 was finally released in December 2009\.

In June 2011, ECMAScript 5.1 was released to fully align with the third edition of the ISO/IEC 16262 international standard. ECMAScript 2015 was released in June 2015\. The current version is ECMAScript 2016, released in June 2016\.[\[25\]][110]

## Later developments

JavaScript has become one of the most popular programming languages on the Web. Initially, however, many professional programmers denigrated the language because, among other reasons, its target audience consisted of Web authors and other such "amateurs".[\[26\]][111] The advent of [Ajax][105] returned JavaScript to the spotlight and brought more professional programming attention. The result was a proliferation of comprehensive [frameworks and libraries][112], improved JavaScript programming practices, and increased usage of JavaScript outside Web browsers, as seen by the proliferation of [server-side JavaScript][113] platforms.

In January 2009, the [CommonJS][114] project was founded with the goal of specifying a common standard library mainly for JavaScript development outside the browser.[\[27\]][115]

With the rise of [single-page applications][116] and JavaScript-heavy sites, it is increasingly being used as a compile target for [source-to-source compilers][117] from both [dynamic languages][118] and [static languages][119].

## Trademark

"JavaScript" is a [trademark][120] of [Oracle Corporation][121].[\[28\]][122] It is used under license for technology invented and implemented by Netscape Communications and current entities such as the [Mozilla Foundation][123].[\[29\]][124]

## Features

The following features are common to all conforming ECMAScript implementations, unless explicitly specified otherwise.

## Imperative and structured

JavaScript supports much of the [structured programming][125] syntax from [C][126] (e.g., if statements, while loops, switch statements, do while loops, etc.). One partial exception is [scoping][127]: JavaScript originally had only [function scoping][128] with var. ECMAScript 2015 added a let keyword for block scoping, meaning JavaScript now has both function and block scoping. Like C, JavaScript makes a distinction between [expressions][129] and [statements][130]. One syntactic difference from C is [automatic semicolon insertion][131], which allows the semicolons that would normally terminate statements to be omitted.[\[30\]][132]

## Dynamic

## Prototype-based (Object-oriented)

JavaScript is almost entirely [object-based][133]. In JavaScript, an [object][134] is an [associative array][135], augmented with a prototype (see below); each string key provides the name for an object property, and there are two syntactical ways to specify such a name: dot notation (obj.x = 10) and bracket notation (obj\['x'\] = 10). A property may be added, rebound, or deleted at run-time. Most properties of an object (and any property that belongs to an object's prototype inheritance chain) can be enumerated using a for...in loop.

JavaScript has a small number of built-in objects, including Function and Date.

## Functional

A [function][136] is [first-class][18]; a function is considered to be an object. As such, a function may have properties and methods, such as `.call()` and .bind().[\[38\]][137] A _nested_ function is a function defined within another function. It is created each time the outer function is invoked. In addition, each nested function forms a [lexical closure][138]: The [lexical scope][139] of the outer function (including any constant, local variable, or argument value) becomes part of the internal state of each inner function object, even after execution of the outer function concludes.[\[39\]][140] JavaScript also supports [anonymous functions][141].

## Delegative

JavaScript supports implicit and explicit [delegation][142].

## Miscellaneous

## Vendor-specific extensions

JavaScript is officially managed by [Mozilla Foundation][123], and new language features are added periodically. However, only some [JavaScript engines][143] support these new features:

## Syntax

## Simple examples

[Variables][144] in JavaScript can be defined using the var keyword:[\[49\]][145]

Note the [comments][146] in the example above, both of which were preceded with two [forward slashes][147].

There is no built-in [I/O][28] functionality in JavaScript; the run-time environment provides that. The ECMAScript specification in edition 5.1 mentions:[\[50\]][148]

... indeed, there are no provisions in this specification for input of external data or output of computed results.

However, most runtime environments have a console object [\[51\]][149] that can be used to print output. Here is a minimalist [Hello World program][150]:

A simple [recursive][151] function:

An [anonymous function][141] (or lambda):

This example shows that in JavaScript, [function closures][138] captures their non-local variables _by reference_.

[Variadic function][152] demonstration (arguments is a special [variable][153]):[\[52\]][154]

[Immediately-invoked function expressions][155] are often used to create modules, as before ECMAScript 2015 there was not built-in construct in the language. Modules allow gathering properties and methods in a namespace and making some of them private:

## More advanced example

This sample code displays various JavaScript features.

The following output should be displayed in the browser window.

## Use in Web pages

The most common use of JavaScript is to add client-side behavior to [HTML][10] pages, also known as [Dynamic HTML][88] (DHTML). Scripts are embedded in or included from [HTML][10] pages and interact with the [Document Object Model][89] (DOM) of the page. Some simple examples of this usage are:

Because JavaScript code can run locally in a user's browser (rather than on a remote server), the browser can respond to user actions quickly, making an application more responsive. Furthermore, JavaScript code can detect user actions that HTML alone cannot, such as individual keystrokes. Applications such as [Gmail][156] take advantage of this: much of the user-interface logic is written in JavaScript, and JavaScript dispatches requests for information (such as the content of an e-mail message) to the server. The wider trend of Ajax programming similarly exploits this strength.

A [JavaScript engine][143] (also known as JavaScript interpreter or JavaScript implementation) is an [interpreter][41] that interprets JavaScript [source code][157] and executes the [script][158] accordingly. The first JavaScript engine was created by Brendan Eich at Netscape, for the Netscape Navigator Web browser. The engine, code-named [SpiderMonkey][159], is implemented in [C][160]. It has since been updated (in JavaScript 1.5) to conform to ECMAScript 3\. The [Rhino][161] engine, created primarily by Norris Boyd (formerly at Netscape, now at Google) is a JavaScript implementation in [Java][56]. Rhino, like SpiderMonkey, is ECMAScript 3 compliant.

A Web browser is by far the most common host environment for JavaScript. Web browsers typically create "host objects" to represent the DOM in JavaScript. The [Web server][162] is another common host environment. A [JavaScript Web server][113] would typically expose host objects representing [HTTP][163] request and response objects, which a JavaScript program could then interrogate and manipulate to dynamically generate Web pages.

Because JavaScript is the only language that the most popular browsers share support for, it has become a [target language][164] for many frameworks in other languages, even though JavaScript was never intended to be such a language.[\[54\]][165] Despite the performance limitations inherent to its dynamic nature, the increasing speed of JavaScript engines has made the language a surprisingly feasible compilation target.

## Example script

Below is a minimal example of a standards-conforming Web page containing JavaScript (using [HTML 5][166] syntax) and the DOM:

## Compatibility considerations

Because JavaScript runs in widely varying environments, an important part of testing and debugging is to test and verify that the JavaScript works across multiple browsers.

The DOM interfaces for manipulating Web pages are not part of the ECMAScript standard, or of JavaScript itself. Officially, the DOM interfaces are defined by a separate standardization effort by the [W3C][167]; in practice, browser implementations differ from the standards and from each other, and not all browsers execute JavaScript.

To deal with these differences, JavaScript authors can attempt to write standards-compliant code that will also be executed correctly by most browsers; failing that, they can write code that checks for the presence of certain browser features and behaves differently if they are not available.[\[55\]][168] In some cases, two browsers may both implement a feature but with different behavior, and authors may find it practical to detect what browser is running and change their script's behavior to match.[\[56\]][169][\[57\]][170] Programmers may also use libraries or toolkits that take browser differences into account.

Furthermore, scripts may not work for some users. For example, a user may:

To support these users, Web authors can try to create pages that [degrade gracefully][171] on user agents (browsers) that do not support the page's JavaScript. In particular, the page should remain usable albeit without the extra features that the JavaScript would have added. An alternative approach that many find preferable is to first author content using basic technologies that work in all browsers, then enhance the content for users that have JavaScript enabled. This is known as [progressive enhancement][172].

## Security

JavaScript and the DOM provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors contain this risk using two restrictions. First, scripts run in a [sandbox][173] in which they can only perform Web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the [same origin policy][174]: scripts from one Web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.

There are subsets of general JavaScript---ADsafe, Secure ECMAScript (SES)---that provide greater level of security, especially on code created by third parties (such as advertisements).[\[58\]][175][\[59\]][176] [Caja][177] is another project for safe embedding and isolation of third-party JavaScript and HTML.

[Content Security Policy][178] is the main intended method of ensuring that only trusted code is executed on a Web page.

## Cross-site vulnerabilities

A common JavaScript-related security problem is [cross-site scripting][179] (XSS), a violation of the [same-origin policy][180]. XSS vulnerabilities occur when an attacker is able to cause a target Web site, such as an online banking website, to include a malicious script in the webpage presented to a victim. The script in this example can then access the banking application with the privileges of the victim, potentially disclosing secret information or transferring money without the victim's authorization. A solution to XSS vulnerabilities is to use _HTML escaping_ whenever displaying untrusted data.

Some browsers include partial protection against _reflected_ XSS attacks, in which the attacker provides a URL including malicious script. However, even users of those browsers are vulnerable to other XSS attacks, such as those where the malicious code is stored in a database. Only correct design of Web applications on the server side can fully prevent XSS.

XSS vulnerabilities can also occur because of implementation mistakes by browser authors.[\[60\]][181]

Another cross-site vulnerability is [cross-site request forgery][182] (CSRF). In CSRF, code on an attacker's site tricks the victim's browser into taking actions the user didn't intend at a target site (like transferring money at a bank). It works because, if the target site relies only on cookies to authenticate requests, then requests initiated by code on the attacker's site will carry the same legitimate login credentials as requests initiated by the user. In general, the solution to CSRF is to require an authentication value in a hidden form field, and not only in the cookies, to authenticate any request that might have lasting effects. Checking the HTTP Referrer header can also help.

"JavaScript hijacking" is a type of CSRF attack in which a <script\> tag on an attacker's site exploits a page on the victim's site that returns private information such as [JSON][183] or JavaScript. Possible solutions include:

## Misplaced trust in the client

Developers of client-server applications must recognize that untrusted clients may be under the control of attackers. The application author cannot assume that his JavaScript code will run as intended (or at all) because any secret embedded in the code could be extracted by a determined adversary. Some implications are:

## Browser and plugin coding errors

JavaScript provides an interface to a wide range of browser capabilities, some of which may have flaws such as [buffer overflows][184]. These flaws can allow attackers to write scripts that would run any code they wish on the user's system. This code is not by any means limited to another JavaScript application. For example, a buffer overrun exploit can allow an attacker to gain access to the operating system's API with superuser privileges.

These flaws have affected major browsers including Firefox,[\[62\]][185] Internet Explorer,[\[63\]][186] and Safari.[\[64\]][187]

Plugins, such as video players, [Adobe Flash][188], and the wide range of [ActiveX][189] controls enabled by default in Microsoft Internet Explorer, may also have flaws exploitable via JavaScript (such flaws have been exploited in the past).[\[65\]][190][\[66\]][191]

In Windows Vista, Microsoft has attempted to contain the risks of bugs such as buffer overflows by running the Internet Explorer process with limited privileges.[\[67\]][192] [Google Chrome][193] similarly confines its page renderers to their own "sandbox".

## Sandbox implementation errors

Web browsers are capable of running JavaScript outside the sandbox, with the privileges necessary to, for example, create or delete files. Of course, such privileges aren't meant to be granted to code from the Web.

Incorrectly granting privileges to JavaScript from the Web has played a role in vulnerabilities in both Internet Explorer[\[68\]][194] and Firefox.[\[69\]][195] In Windows XP Service Pack 2, Microsoft demoted JScript's privileges in Internet Explorer.[\[70\]][196]

[Microsoft Windows][197] allows JavaScript source files on a computer's hard drive to be launched as general-purpose, non-sandboxed programs (see: [Windows Script Host][198]). This makes JavaScript (like [VBScript][79]) a theoretically viable vector for a [Trojan horse][199], although JavaScript Trojan horses are uncommon in practice.[\[71\]][200]

## Uses outside Web pages

In addition to Web browsers and servers, JavaScript interpreters are embedded in a number of tools. Each of these applications provides its own [object model][201] that provides access to the host environment. The core JavaScript language remains mostly the same in each application.

## Embedded scripting language

## Scripting engine

## Application platform

## Development tools

Within JavaScript, access to a [debugger][202] becomes invaluable when developing large, non-trivial programs. Because there can be implementation differences between the various browsers (particularly within the DOM), it is useful to have access to a debugger for each of the browsers that a Web application targets.[\[87\]][203]

Script debuggers are integrated within [Internet Explorer][204], [Firefox][205], [Safari][206], [Google Chrome][193], [Opera][207] and [Node.js][45].[\[88\]][208][\[89\]][209][\[90\]][210]

In addition to the native [Internet Explorer Developer Tools][211], three debuggers are available for Internet Explorer: [Microsoft Visual Studio][212] is the richest of the three, closely followed by [Microsoft Script Editor][213] (a component of [Microsoft Office][214]),[\[91\]][215] and finally the free [Microsoft Script Debugger][216] that is far more basic than the other two. The free [Microsoft Visual Web Developer Express][217] provides a limited version of the JavaScript debugging functionality in Microsoft Visual Studio. Internet Explorer has included developer tools since version 8\.

In comparison to Internet Explorer, Firefox has a more comprehensive set of developer tools, which include a debugger as well. Old versions of Firefox without these tools used a [Firefox addon][218] called [Firebug][219], or the older [Venkman][220] debugger. Also, [WebKit][221]'s Web Inspector includes a JavaScript debugger,[\[92\]][222] which is used in [Safari][206]. A modified version called Blink DevTools is used in [Google Chrome][193]. [Node.js][45] has Node Inspector, an interactive debugger that integrates with the Blink DevTools, available in [Google Chrome][193]. [Opera][207] includes a set of tools called [Dragonfly][223].[\[93\]][224]

In addition to the native computer software, there are online JavaScript IDEs, debugging aids that are themselves written in JavaScript and built to run on the Web. An example is the program [JSLint][225], developed by [Douglas Crockford][101] who has written extensively on the language. JSLint scans JavaScript code for conformance to a set of standards and guidelines. Many libraries for JavaScript, such as [three.js][226], provide links to demonstration code that can be edited by users. They are also used as a pedagogical tool by institutions such as [Khan Academy][227][\[94\]][228] to allow students to experience writing code in an environment where they can see the output of their programs, without needing any setup beyond a Web browser.

## Benchmark tools for developers

Since JavaScript is getting more important for web development (frontend overtakes many aspects which were done in backend before), there is also more consideration done about performance. Especially mobile devices could have problems with rendering and processing unoptimized complex logic.

A library for doing benchmarks is [benchmark.js][229]. A benchmarking library that supports high-resolution timers and returns statistically significant results\[_[citation needed][230]_\].

Another tool is [jsben.ch][231]. An online JavaScript benchmarking tool, where code snippets can be tested against each other.

## Version history

JavaScript was initially developed in 1996 for use in the [Netscape Navigator][52] Web browser. In the same year Microsoft released an implementation for Internet Explorer. This implementation was called [JScript][80] due to trademark issues. In 1997 the first standardized version of the language was released under the name [ECMAScript][8] in the first edition of the ECMA-252 standard. The explicit versioning and opt-in of language features was Mozilla-specific and has been removed. Firefox 4 was the last version which referred to a JavaScript version (1.8.5). With new editions of the ECMA-262 standard, JavaScript language features are now often mentioned with their initial definition in the ECMA-262 editions.

The following table is based on information from multiple sources.[\[95\]][232][\[96\]][233][\[97\]][234]

## Related languages and features

[JSON][183], or JavaScript Object Notation, is a general-purpose data interchange format that is defined as a subset of JavaScript's object literal syntax. Like much of JavaScript (regexps and anonymous functions as 1st class elements, closures, flexible classes, 'use strict'), [JSON][183], except for replacing [Perl][59]'s key-value operator '=\>' by an [RFC 822][235][\[100\]][236] inspired ':', is syntactically pure Perl.

[jQuery][107] is a popular JavaScript library designed to simplify [DOM][89]-oriented client-side HTML scripting along with offering cross-browser compatibility because various browsers respond differently to certain vanilla JavaScript code.

[Underscore.js][237] is a utility JavaScript library for data manipulation that is used in both client-side and server-side network applications.

[AngularJS][238] is a [web application framework][239] to use for developing [single-page applications][240] and also cross-platform mobile apps.

[React (JavaScript library)][241] is an [open-source][242] JavaScript library providing a views that is rendered using components specified as custom HTML tags.

Mozilla browsers currently support [LiveConnect][243], a feature that allows JavaScript and Java to intercommunicate on the Web. However, Mozilla-specific support for LiveConnect is scheduled to be phased out in the future in favor of passing on the LiveConnect handling via [NPAPI][244] to the Java 1.6+ plug-in (not yet supported on the Mac as of March 2010).[\[101\]][245] Most browser inspection tools, such as [Firebug][246] in Firefox, include JavaScript interpreters that can act on the visible page's DOM.

[asm.js][247] is a subset of JavaScript that can be run in any JavaScript engine or run faster in an [ahead-of-time][248] (AOT) compiling engine.[\[102\]][249]

[JSFuck][250] is an [esoteric programming language][251]. Programs are written using only six different characters, but are still valid JavaScript code.

p5.js[\[103\]][252] is an object oriented JavaScript library designed for artists and designers. It is based on the ideas of the [Processing][253] project but is for the web.

[jsben.ch][231] is an online JavaScript benchmarking tool, where different code snippets can be tested against each other.

## Use as an intermediate language

As JavaScript is the most widely supported client-side language that can run within a Web browser, it has become an [intermediate language][254] for other languages to target. This has included both newly created languages and ports of existing languages. Some of these include:

As JavaScript has unusual limitations -- such as no separate integer type, using floating point -- languages that compile to JavaScript commonly have slightly different behavior than in other environments.

## JavaScript and Java

A common misconception is that JavaScript is similar or closely related to [Java][56]. It is true that both have a C-like syntax (the C language being their most immediate common ancestor language). They also are both typically [sandboxed][173] (when used inside a browser), and JavaScript was designed with Java's syntax and standard library in mind. In particular, all Java keywords were reserved in original JavaScript, JavaScript's standard library follows Java's naming conventions, and JavaScript's Math and Date objects are based on classes from Java 1.0,[\[109\]][255] but the similarities end there.

[Java][56] and JavaScript both first appeared on 23 May 1995, but Java was developed by James Gosling of Sun Microsystems, and JavaScript by Brendan Eich of NetScape Communications.

The differences between the two languages are more prominent than their similarities. Java has [static typing][119], while JavaScript's typing is [dynamic][118]. Java is loaded from compiled bytecode, while JavaScript is loaded as human-readable source code. Java's objects are [class-based][256], while JavaScript's are [prototype-based][17]. Finally, Java did not support [functional programming][23] until Java 8, while JavaScript has done so from the beginning, being influenced by [Scheme][32].

## References

## Further reading

## External links

[0]: /wiki/Help:IPA_for_English "Help:IPA for English"
[1]: #cite_note-5
[2]: /wiki/High-level_programming_language "High-level programming language"
[3]: /wiki/Dynamic_programming_language "Dynamic programming language"
[4]: /wiki/Programming_language#Type_system "Programming language"
[5]: /wiki/Interpreted_language "Interpreted language"
[6]: /wiki/Programming_language "Programming language"
[7]: #cite_note-FOOTNOTEFlanagan20111-6
[8]: /wiki/ECMAScript "ECMAScript"
[9]: #cite_note-FOOTNOTEFlanagan20112-7
[10]: /wiki/HTML "HTML"
[11]: /wiki/CSS "CSS"
[12]: /wiki/World_Wide_Web "World Wide Web"
[13]: /wiki/Content_engineering "Content engineering"
[14]: /wiki/Website "Website"
[15]: /wiki/Web_browser "Web browser"
[16]: /wiki/Browser_extension "Browser extension"
[17]: /wiki/Prototype-based_programming "Prototype-based programming"
[18]: /wiki/First-class_function "First-class function"
[19]: /wiki/Multi-paradigm "Multi-paradigm"
[20]: /wiki/Object-oriented_programming "Object-oriented programming"
[21]: #cite_note-ECMA-262-8
[22]: /wiki/Imperative_programming "Imperative programming"
[23]: /wiki/Functional_programming "Functional programming"
[24]: /wiki/Programming_paradigm "Programming paradigm"
[25]: /wiki/Application_programming_interface "Application programming interface"
[26]: /wiki/Array_data_type "Array data type"
[27]: /wiki/Regular_expression "Regular expression"
[28]: /wiki/Input/output "Input/output"
[29]: /wiki/Syntax_(programming_languages) "Syntax (programming languages)"
[30]: /wiki/Standard_library "Standard library"
[31]: /wiki/Self_(programming_language) "Self (programming language)"
[32]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[33]: #cite_note-9
[34]: /wiki/Portable_Document_Format "Portable Document Format"
[35]: /wiki/Site-specific_browser "Site-specific browser"
[36]: /wiki/Desktop_widget "Desktop widget"
[37]: /wiki/Virtual_machine "Virtual machine"
[38]: /wiki/Server-side "Server-side"
[39]: /wiki/Web_application "Web application"
[40]: /wiki/Client_side "Client side"
[41]: /wiki/Interpreter_(computing) "Interpreter (computing)"
[42]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[43]: /wiki/Video_game_development "Video game development"
[44]: /wiki/Computer_network_programming "Computer network programming"
[45]: /wiki/Node.js "Node.js"
[46]: /wiki/National_Center_for_Supercomputing_Applications "National Center for Supercomputing Applications"
[47]: /wiki/University_of_Illinois_at_Urbana-Champaign "University of Illinois at Urbana-Champaign"
[48]: /wiki/Mosaic_(web_browser) "Mosaic (web browser)"
[49]: /wiki/Netscape "Netscape"
[50]: /wiki/Mountain_View,_California "Mountain View, California"
[51]: /wiki/California "California"
[52]: /wiki/Netscape_Navigator "Netscape Navigator"
[53]: /wiki/Marc_Andreessen "Marc Andreessen"
[54]: /wiki/Brendan_Eich "Brendan Eich"
[55]: /wiki/Sun_Microsystems "Sun Microsystems"
[56]: /wiki/Java_(programming_language) "Java (programming language)"
[57]: /wiki/Microsoft "Microsoft"
[58]: #cite_note-10
[59]: /wiki/Perl "Perl"
[60]: /wiki/Python_(programming_language) "Python (programming language)"
[61]: /wiki/Tcl "Tcl"
[62]: #cite_note-11
[63]: #cite_note-techvision-12
[64]: /wiki/Openwave "Openwave"
[65]: /wiki/C-- "C--"
[66]: #cite_note-13
[67]: #cite_note-14
[68]: #cite_note-15
[69]: /wiki/ViolaWWW "ViolaWWW"
[70]: #cite_note-16
[71]: #cite_note-17
[72]: /wiki/Server-side_scripting "Server-side scripting"
[73]: /wiki/Netscape_Enterprise_Server "Netscape Enterprise Server"
[74]: #cite_note-18
[75]: /wiki/Comparison_of_server-side_JavaScript_solutions "Comparison of server-side JavaScript solutions"
[76]: #cite_note-19
[77]: /wiki/MarkLogic "MarkLogic"
[78]: #cite_note-20
[79]: /wiki/VBScript "VBScript"
[80]: /wiki/JScript "JScript"
[81]: /wiki/Internet_Explorer_3 "Internet Explorer 3"
[82]: /wiki/Internet_Information_Server "Internet Information Server"
[83]: #cite_note-O.27Reilly-2001-21
[84]: #cite_note-22
[85]: /wiki/Browser_wars "Browser wars"
[86]: #cite_note-23
[87]: /wiki/Internet_Explorer_4 "Internet Explorer 4"
[88]: /wiki/Dynamic_HTML "Dynamic HTML"
[89]: /wiki/Document_Object_Model "Document Object Model"
[90]: /wiki/Ecma_International "Ecma International"
[91]: /wiki/ActionScript "ActionScript"
[92]: /wiki/Google "Google"
[93]: /wiki/JScript_.NET "JScript .NET"
[94]: /wiki/.NET ".NET"
[95]: /wiki/ECMAScript_for_XML "ECMAScript for XML"
[96]: /wiki/BEA_Systems "BEA Systems"
[97]: /wiki/Macromedia "Macromedia"
[98]: /wiki/Adobe_Systems "Adobe Systems"
[99]: /wiki/Tamarin_(software) "Tamarin (software)"
[100]: /wiki/Open_source "Open source"
[101]: /wiki/Douglas_Crockford "Douglas Crockford"
[102]: /wiki/Yahoo! "Yahoo!"
[103]: #cite_note-24
[104]: /wiki/Jesse_James_Garrett "Jesse James Garrett"
[105]: /wiki/Ajax_(programming) "Ajax (programming)"
[106]: /wiki/Prototype_JavaScript_Framework "Prototype JavaScript Framework"
[107]: /wiki/JQuery "JQuery"
[108]: /wiki/Dojo_Toolkit "Dojo Toolkit"
[109]: /wiki/MooTools "MooTools"
[110]: #cite_note-25
[111]: #cite_note-26
[112]: /wiki/List_of_JavaScript_libraries "List of JavaScript libraries"
[113]: /wiki/Server-side_JavaScript "Server-side JavaScript"
[114]: /wiki/CommonJS "CommonJS"
[115]: #cite_note-27
[116]: /wiki/Single-page_application "Single-page application"
[117]: /wiki/Source-to-source_compiler "Source-to-source compiler"
[118]: /wiki/Dynamic_typing "Dynamic typing"
[119]: /wiki/Static_typing "Static typing"
[120]: /wiki/Trademark "Trademark"
[121]: /wiki/Oracle_Corporation "Oracle Corporation"
[122]: #cite_note-28
[123]: /wiki/Mozilla_Foundation "Mozilla Foundation"
[124]: #cite_note-29
[125]: /wiki/Structured_programming "Structured programming"
[126]: /wiki/C_(computer_language) "C (computer language)"
[127]: /wiki/Scope_(computer_science) "Scope (computer science)"
[128]: /wiki/Function_scoping "Function scoping"
[129]: /wiki/Expression_(computer_science) "Expression (computer science)"
[130]: /wiki/Statement_(computer_science) "Statement (computer science)"
[131]: /wiki/Defensive_semicolon "Defensive semicolon"
[132]: #cite_note-FOOTNOTEFlanagan200616-30
[133]: /wiki/Object-based "Object-based"
[134]: /wiki/Object_(computer_science) "Object (computer science)"
[135]: /wiki/Associative_array "Associative array"
[136]: /wiki/Subroutine "Subroutine"
[137]: #cite_note-38
[138]: /wiki/Closure_(computer_programming) "Closure (computer programming)"
[139]: /wiki/Scope_(programming)#Lexical_scoping_vs._dynamic_scoping "Scope (programming)"
[140]: #cite_note-FOOTNOTEFlanagan2006141-39
[141]: /wiki/Anonymous_function "Anonymous function"
[142]: /wiki/Delegation_(object-oriented_programming) "Delegation (object-oriented programming)"
[143]: /wiki/JavaScript_engine "JavaScript engine"
[144]: /wiki/Variable_(computer_science) "Variable (computer science)"
[145]: #cite_note-49
[146]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[147]: /wiki/Slash_(punctuation) "Slash (punctuation)"
[148]: #cite_note-50
[149]: #cite_note-51
[150]: /wiki/Hello_World_program "Hello World program"
[151]: /wiki/Recursion_(computer_science) "Recursion (computer science)"
[152]: /wiki/Variadic_function "Variadic function"
[153]: /wiki/Variable_(programming) "Variable (programming)"
[154]: #cite_note-52
[155]: /wiki/Immediately-invoked_function_expression "Immediately-invoked function expression"
[156]: /wiki/Gmail "Gmail"
[157]: /wiki/Source_code "Source code"
[158]: /wiki/Computer_program "Computer program"
[159]: /wiki/SpiderMonkey_(JavaScript_engine) "SpiderMonkey (JavaScript engine)"
[160]: /wiki/C_(programming_language) "C (programming language)"
[161]: /wiki/Rhino_(JavaScript_engine) "Rhino (JavaScript engine)"
[162]: /wiki/Web_server "Web server"
[163]: /wiki/HTTP "HTTP"
[164]: /wiki/Target_language_(computing) "Target language (computing)"
[165]: #cite_note-computerworld-54
[166]: /wiki/HTML_5 "HTML 5"
[167]: /wiki/World_Wide_Web_Consortium "World Wide Web Consortium"
[168]: #cite_note-55
[169]: #cite_note-56
[170]: #cite_note-57
[171]: /wiki/Fault-tolerant_system "Fault-tolerant system"
[172]: /wiki/Progressive_enhancement "Progressive enhancement"
[173]: /wiki/Sandbox_(computer_security) "Sandbox (computer security)"
[174]: /wiki/Same_origin_policy "Same origin policy"
[175]: #cite_note-58
[176]: #cite_note-59
[177]: /wiki/Caja_project "Caja project"
[178]: /wiki/Content_Security_Policy "Content Security Policy"
[179]: /wiki/Cross-site_scripting "Cross-site scripting"
[180]: /wiki/Same-origin_policy "Same-origin policy"
[181]: #cite_note-60
[182]: /wiki/Cross-site_request_forgery "Cross-site request forgery"
[183]: /wiki/JSON "JSON"
[184]: /wiki/Buffer_overflow "Buffer overflow"
[185]: #cite_note-62
[186]: #cite_note-63
[187]: #cite_note-64
[188]: /wiki/Adobe_Flash#Flash_client_security "Adobe Flash"
[189]: /wiki/ActiveX "ActiveX"
[190]: #cite_note-65
[191]: #cite_note-66
[192]: #cite_note-67
[193]: /wiki/Google_Chrome "Google Chrome"
[194]: #cite_note-68
[195]: #cite_note-69
[196]: #cite_note-70
[197]: /wiki/Microsoft_Windows "Microsoft Windows"
[198]: /wiki/Windows_Script_Host "Windows Script Host"
[199]: /wiki/Trojan_horse_(computing) "Trojan horse (computing)"
[200]: #cite_note-71
[201]: /wiki/Object_model "Object model"
[202]: /wiki/Debugger "Debugger"
[203]: #cite_note-87
[204]: /wiki/Internet_Explorer "Internet Explorer"
[205]: /wiki/Firefox "Firefox"
[206]: /wiki/Safari_(Web_browser) "Safari (Web browser)"
[207]: /wiki/Opera_(Web_browser) "Opera (Web browser)"
[208]: #cite_note-88
[209]: #cite_note-89
[210]: #cite_note-90
[211]: /wiki/Internet_Explorer_Developer_Tools "Internet Explorer Developer Tools"
[212]: /wiki/Microsoft_Visual_Studio "Microsoft Visual Studio"
[213]: /wiki/Microsoft_Script_Editor "Microsoft Script Editor"
[214]: /wiki/Microsoft_Office "Microsoft Office"
[215]: #cite_note-91
[216]: /wiki/Microsoft_Script_Debugger "Microsoft Script Debugger"
[217]: /wiki/Microsoft_Visual_Web_Developer_Express "Microsoft Visual Web Developer Express"
[218]: /wiki/Firefox_addon "Firefox addon"
[219]: /wiki/Firebug_(Firefox_extension) "Firebug (Firefox extension)"
[220]: /wiki/Venkman "Venkman"
[221]: /wiki/WebKit "WebKit"
[222]: #cite_note-92
[223]: /wiki/Opera_Dragonfly "Opera Dragonfly"
[224]: #cite_note-93
[225]: /wiki/JSLint "JSLint"
[226]: /wiki/Three.js "Three.js"
[227]: /wiki/Khan_Academy "Khan Academy"
[228]: #cite_note-94
[229]: https://benchmarkjs.com/
[230]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[231]: http://jsben.ch
[232]: #cite_note-95
[233]: #cite_note-96
[234]: #cite_note-97
[235]: /wiki/RFC_822 "RFC 822"
[236]: #cite_note-100
[237]: /wiki/Underscore.js "Underscore.js"
[238]: /wiki/AngularJS "AngularJS"
[239]: /wiki/Web_application_framework "Web application framework"
[240]: /w/index.php?title=Single-page_applications&action=edit&redlink=1 "Single-page applications (page does not exist)"
[241]: /wiki/React_(JavaScript_library) "React (JavaScript library)"
[242]: /wiki/Open-source "Open-source"
[243]: /wiki/LiveConnect "LiveConnect"
[244]: /wiki/NPAPI "NPAPI"
[245]: #cite_note-101
[246]: /wiki/Firebug_(software) "Firebug (software)"
[247]: /wiki/Asm.js "Asm.js"
[248]: /wiki/Ahead-of-time "Ahead-of-time"
[249]: #cite_note-102
[250]: /wiki/JSFuck "JSFuck"
[251]: /wiki/Esoteric_programming_language "Esoteric programming language"
[252]: #cite_note-103
[253]: /wiki/Processing_(programming_language) "Processing (programming language)"
[254]: /wiki/Intermediate_language "Intermediate language"
[255]: #cite_note-popularity-109
[256]: /wiki/Class-based_programming "Class-based programming"