**ECMAScript** (or **ES**)[\[1\]][0] is a [trademarked][1][\[2\]][2] [scripting-language][3] [specification][4] standardized by [Ecma International][5] in **ECMA-262** and ISO/IEC 16262\. It was based on [JavaScript][6], which now tracks ECMAScript. It is commonly used for [client-side scripting][7] on the [World Wide Web][8]. Other implementations of ECMAScript include [JScript][9] and [ActionScript][10].

## History

The ECMAScript specification is a standardized specification of a scripting language developed by [Brendan Eich][11] of [Netscape][12]; initially it was named Mocha, later LiveScript, and finally JavaScript.[\[3\]][13] In December 1995, [Sun Microsystems][14] and Netscape announced JavaScript in a press release.[\[4\]][15] In March 1996, [Netscape Navigator][16] 2.0 was released, featuring support for JavaScript.

Owing to the widespread success of JavaScript as a client-side scripting language for Web pages, [Microsoft][17] developed a compatible dialect of the language, naming it [JScript][9] to avoid trademark issues. JScript added new date methods to alleviate the [Year 2000 problem][18] caused by the JavaScript methods that were based on the Java _Date_ class.[\[5\]][19] JScript was included in [Internet Explorer][20] 3.0, released in August 1996\.

Netscape delivered JavaScript to [Ecma International][5] for standardization and the work on the specification, ECMA-262, began in November 1996\.[\[6\]][21] The first edition of ECMA-262 was adopted by the Ecma General Assembly in June 1997\. Several editions of the language standard have been published since then. The name "ECMAScript" was a compromise between the organizations involved in standardizing the language, especially Netscape and Microsoft, whose disputes dominated the early standards sessions. Eich commented that "ECMAScript was always an unwanted trade name that sounds like [a skin disease][22]."[\[7\]][23]

While both JavaScript and JScript aim to be compatible with ECMAScript, they also provide additional features not described in the ECMA specifications.[\[8\]][24]

## Versions

There are seven editions of ECMA-262 published. Work on version 7 of the standard, was finalized in June 2016\.[\[9\]][25]

In June 2004, Ecma International published ECMA-357 standard, defining an extension to ECMAScript, known as [ECMAScript for XML][26] (E4X). Ecma also defined a "Compact Profile" for ECMAScript -- known as ES-CP, or ECMA 327 -- that was designed for resource-constrained devices, which was withdrawn in 2015\.[\[15\]][27]

## 4th Edition (abandoned)

The proposed fourth edition of ECMA-262 (**ECMAScript 4** or **ES4**) would have been the first major update to ECMAScript since the third edition was published in 1999\. The specification (along with a reference implementation) was originally targeted for completion by October 2008\.[\[16\]][28] An overview of the language was released by the working group on October 23, 2007\.[\[17\]][29]

By August 2008, the ECMAScript 4th edition proposal had been scaled back into a project codenamed [ECMAScript Harmony][30]. Features under discussion for Harmony at the time included

The intent of these features was partly to better support _[programming in the large][31]_, and to allow sacrificing some of the script's ability to be dynamic to improve performance. For example, [Tamarin][32] -- the virtual machine for ActionScript developed and open sourced by Adobe -- has [just-in-time compilation][33] (JIT) support for certain classes of scripts.

In addition to introducing new features, some ES3 bugs were proposed to be fixed in edition 4\.[\[18\]][34][\[19\]][35] These fixes and others, and support for [JSON][36] encoding/decoding, have been folded into the ECMAScript, 5th Edition specification.[\[20\]][37]

Work started on Edition 4 after the ES-CP (Compact Profile) specification was completed, and continued for approximately 18 months where slow progress was made balancing the theory of Netscape's JavaScript 2 specification with the implementation experience of Microsoft's JScript .NET. After some time, the focus shifted to the [ECMAScript for XML][26] (E4X) standard. The update has not been without controversy. In late 2007, a debate between Eich, later the [Mozilla Foundation][38]'s CTO, and [Chris Wilson][39], [Microsoft][17]'s platform architect for [Internet Explorer][20], became public on a number of [blogs][40]. Wilson cautioned that because the proposed changes to ECMAScript made it backwards incompatible in some respects to earlier versions of the language, the update amounted to "breaking the Web,"[\[21\]][41] and that stakeholders who opposed the changes were being "hidden from view".[\[22\]][42] Eich responded by stating that Wilson seemed to be "repeating falsehoods in blogs" and denied that there was attempt to suppress dissent and challenged critics to give specific examples of incompatibility.[\[23\]][43] He also pointed out that [Microsoft Silverlight][44] and [Adobe AIR][45] rely on [C\#][46] and [ActionScript][10] 3 respectively, both of which are larger and more complex than ECMAScript Edition 3\.[\[24\]][47]

## 5th Edition

Yahoo, Microsoft, Google, and other 4th edition dissenters formed their own subcommittee to design a less ambitious update of ECMAScript 3, tentatively named ECMAScript 3.1\. This edition would focus on security and library updates with a large emphasis on compatibility. After the aforementioned public sparring, the ECMAScript 3.1 and ECMAScript 4 teams agreed on a compromise: the two editions would be worked on, in parallel, with coordination between the teams to ensure that ECMAScript 3.1 remains a strict subset of ECMAScript 4 in both semantics and syntax.

However, the differing philosophies in each team resulted in repeated breakages of the subset rule, and it remained doubtful that the ECMAScript 4 dissenters would ever support or implement ECMAScript 4 in the future. After over a year since the disagreement over the future of ECMAScript within the Ecma Technical Committee 39, the two teams reached a new compromise in July 2008: [Brendan Eich][11] announced that Ecma TC39 would focus work on the ECMAScript 3.1 (later renamed to ECMAScript, 5th Edition) project with full collaboration of all parties, and vendors would target at least two interoperable implementations by early 2009\.[\[25\]][48][\[26\]][49] In April 2009, Ecma TC39 published the "final" draft of the 5th edition and announced that testing of interoperable implementations was expected to be completed by mid-July.[\[27\]][50] On December 3, 2009, ECMA-262 5th edition was published.[\[28\]][51]

## 6th Edition - ECMAScript 2015

The 6th edition, officially known as ECMAScript 2015, was finalized in June 2015\.[\[11\]][52][\[29\]][53][\[9\]][25] This update adds significant new syntax for writing complex applications, including classes and modules, but defines them semantically in the same terms as ECMAScript 5 strict mode. Other new features include iterators and for/of loops, [Python][54]-style generators and generator expressions, arrow functions, binary data, typed arrays, collections (maps, sets and weak maps), promises, number and math enhancements, reflection, and proxies (metaprogramming for virtual objects and wrappers).[\[30\]][55][\[31\]][56] The complete list is extensive.[\[32\]][57]

Browser support for ES6 is still incomplete.[\[33\]][58] However, ES6 code can be [transpiled][59] into ES5 code, which has more consistent support across browsers. [\[34\]][60] Transpiling adds an extra step to build processes whereas polyfills allow adding extra functionalities by including another javascript file.

## 7th Edition - ECMAScript 2016

The 7th edition, officially known as ECMAScript 2016, was finalized in June 2016\.[\[12\]][61] New features include the exponentiation operator (\*\*) and Array.prototype.includes.

## ES.Next

ES.Next is a dynamic name that refers to whatever the next version is at time of writing. ES.Next features are more correctly called _proposals_, because by definition the specification has not been finalized yet.

## Features

The ECMAScript language includes [structured][62], [dynamic][63], [functional][64], and [prototype-based][65] features.[\[35\]][66]

## Syntax

## Implementations

ECMAScript is supported in many applications, especially [Web browsers][67], where it is implemented by JavaScript, or, in the case of Internet Explorer, JScript. Implementations sometimes include extensions to the language, or to the [standard library][68] and related [application programming interfaces][69] (API) such as the [World Wide Web Consortium][70] (W3C) specified [Document Object Model][71] (DOM). This means that applications written in one implementation may be incompatible with another, unless they are written to use only a common subset of supported features and APIs.

## Version correspondence

Items on the same line are approximately the same language.[\[43\]][72][\[44\]][73]

## Conformance tests

In 2010, Ecma International started developing a standards test for Ecma 262 ECMAScript.[\[46\]][74] Test262 is an ECMAScript conformance test suite that can be used to check how closely a JavaScript implementation follows the ECMAScript 5th Edition Specification. The test suite contains thousands of individual tests, each of which tests some specific requirements of the ECMAScript specification.

Development of test262 is a project of Ecma Technical Committee 39 (TC39). The testing framework and individual tests are created by member organizations of TC39 and contributed to Ecma for use in Test262\.

Important contributions were made by Google (Sputnik testsuite) and Microsoft who both contributed thousands of tests. The Test262 testsuite already contains more than 11,000 tests and is being developed further as of 2013.

The following table shows current conformance results of browser products. Lower scores are better, although scores can not be compared, as tests are not weighted. Also, be aware that Test262 itself is likely to contain [bugs][75] that may impact a browser's score. So browsers with a score significantly lower than the current test suite bug count may not necessarily do better than those with a higher one.[\[47\]][76] That may be particularly true when several browsers have a higher score in their current development builds as compared to their last released version.

## See also

## References

## External links

  


[0]: #cite_note-1
[1]: /wiki/Trademarked "Trademarked"
[2]: #cite_note-2
[3]: /wiki/Scripting-language "Scripting-language"
[4]: /wiki/Specification_(technical_standard) "Specification (technical standard)"
[5]: /wiki/Ecma_International "Ecma International"
[6]: /wiki/JavaScript "JavaScript"
[7]: /wiki/Client-side_scripting "Client-side scripting"
[8]: /wiki/World_Wide_Web "World Wide Web"
[9]: /wiki/JScript "JScript"
[10]: /wiki/ActionScript "ActionScript"
[11]: /wiki/Brendan_Eich "Brendan Eich"
[12]: /wiki/Netscape_Communications_Corporation "Netscape Communications Corporation"
[13]: #cite_note-3
[14]: /wiki/Sun_Microsystems "Sun Microsystems"
[15]: #cite_note-4
[16]: /wiki/Netscape_Navigator "Netscape Navigator"
[17]: /wiki/Microsoft "Microsoft"
[18]: /wiki/Year_2000_problem "Year 2000 problem"
[19]: #cite_note-5
[20]: /wiki/Internet_Explorer "Internet Explorer"
[21]: #cite_note-6
[22]: /wiki/Eczema "Eczema"
[23]: #cite_note-7
[24]: #cite_note-8
[25]: #cite_note-auto-9
[26]: /wiki/ECMAScript_for_XML "ECMAScript for XML"
[27]: #cite_note-ES-CP-withdrawn-15
[28]: #cite_note-16
[29]: #cite_note-17
[30]: #6th_Edition_-_ECMAScript_2015
[31]: /wiki/Programming_in_the_large "Programming in the large"
[32]: /wiki/Tamarin_(JIT) "Tamarin (JIT)"
[33]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[34]: #cite_note-18
[35]: #cite_note-19
[36]: /wiki/JSON "JSON"
[37]: #cite_note-20
[38]: /wiki/Mozilla_Foundation "Mozilla Foundation"
[39]: /w/index.php?title=Chris_Wilson_(open_web_advocate)&action=edit&redlink=1 "Chris Wilson (open web advocate) (page does not exist)"
[40]: /wiki/Blog "Blog"
[41]: #cite_note-21
[42]: #cite_note-22
[43]: #cite_note-23
[44]: /wiki/Microsoft_Silverlight "Microsoft Silverlight"
[45]: /wiki/Adobe_AIR "Adobe AIR"
[46]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[47]: #cite_note-24
[48]: #cite_note-25
[49]: #cite_note-26
[50]: #cite_note-27
[51]: #cite_note-28
[52]: #cite_note-ES2015-11
[53]: #cite_note-29
[54]: /wiki/Python_(programming_language) "Python (programming language)"
[55]: #cite_note-30
[56]: #cite_note-31
[57]: #cite_note-32
[58]: #cite_note-33
[59]: /wiki/Transpiler "Transpiler"
[60]: #cite_note-34
[61]: #cite_note-ES2016-12
[62]: /wiki/Structured_programming "Structured programming"
[63]: /wiki/Dynamic_programming_language "Dynamic programming language"
[64]: /wiki/Functional_programming "Functional programming"
[65]: /wiki/Prototype-based_programming "Prototype-based programming"
[66]: #cite_note-35
[67]: /wiki/Web_browser "Web browser"
[68]: /wiki/Standard_library "Standard library"
[69]: /wiki/Application_programming_interface "Application programming interface"
[70]: /wiki/World_Wide_Web_Consortium "World Wide Web Consortium"
[71]: /wiki/Document_Object_Model "Document Object Model"
[72]: #cite_note-50
[73]: #cite_note-51
[74]: #cite_note-53
[75]: https://bugs.ecmascript.org/buglist.cgi?order=Importance&query_format=advanced&bug_status=CONFIRMED&bug_status=IN_PROGRESS&component=ECMA-262%20Tests&product=Test262
[76]: #cite_note-54