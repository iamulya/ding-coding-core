**TRAC** (for **T**ext **R**eckoning **A**nd **C**ompiling) **Language** is a [programming language][0] developed between 1959-1964 by [Calvin Mooers][1] and implemented on a PDP-10 in 1964 by [L. Peter Deutsch][2].[\[1\]][3] It was one of three "first languages" recommended by [Ted Nelson][4] in _[Computer Lib][5]_. TRAC T64 was used until 1984, when Mooers updated it to TRAC T84\.[\[2\]][6]

TRAC is a purely text-based language---a kind of macro language. Unlike traditional _ad hoc_ macro languages of the time, such as those found in assemblers, TRAC is well planned, consistent, and in many senses complete. It has explicit input and output operators, unlike the typical implicit I/O at the outermost macro level, which makes it simultaneously simpler and more versatile than older macro languages.

It also differs from traditional macro languages in that TRAC numbers are strings of digits, with integer arithmetic (without specific limits on maximum values) being provided through built-in ("primitive") functions. Arguably, one aspect of its completeness is that the concept of error is limited to events like lack of file space and requesting expansion of a string longer than the interpreter's working storage; what would in many languages be described as illegal operations are dealt with in TRAC by defining a result (often a null string) for every possible combination of a function's argument strings.

The emphasis on strings as strings is so strong that TRAC provides mechanisms for handling the language's own syntactic characters either in their syntactic roles or like any other character, and [self-modifying code][7] has more the feel of a natural consequence of typical TRAC programming techniques than of being a special feature.

TRAC is, like [APL][8] or [LISP][9], an [expression oriented][10] language (in contrast to more typical [procedure-oriented][11] languages), but unlike APL, it completely lacks operators. In most respects, it is a case of pure [functional programming][12].

TRAC has in common with LISP a syntax that generally involves the presence of many levels of nested parentheses.

Mooers trademarked the name TRAC in an effort to maintain his control over the definition of the language, an unusual and pioneering action at the time. At one point, he brought an intellectual property infringement suit against [DEC][13], alleging that a contract to deliver a mini-computer with a TRAC interpreter violated his rights. "The first issue of [Dr. Dobb's Journal][14], one of the early publications in the personal computer field, has [a vitriolic editorial against Mooers][15] and his rapacity in trying to charge people for his computing language."[\[3\]][16] However, the trademark ([\#72301892][17]) expired in 1992\. The name has since been used several times for unrelated [information technology][18] projects, including a current [open source][19] project management system called [Trac][20].

There have been various languages inspired by TRAC. To avoid any trouble with Mooers, they renamed primitives and/or used different metacharacters. In SAM76's case, primitives were added, according to Claude Kagan, "because TRAC is baby talk". In MINT's case, primitives were added to give access to a sophisticated text editor machinery.

TRAC was used by FTP Software in its PC/TCP product as the modem dialler scripting language.

TRAC was also used as a front end on Digital Productions Cray renderer for films, including [The Last Starfighter][21].

## See also

## References

## External links

[0]: /wiki/Programming_language "Programming language"
[1]: /wiki/Calvin_Mooers "Calvin Mooers"
[2]: /wiki/L._Peter_Deutsch "L. Peter Deutsch"
[3]: #cite_note-1
[4]: /wiki/Ted_Nelson "Ted Nelson"
[5]: /wiki/Computer_Lib "Computer Lib"
[6]: #cite_note-2
[7]: /wiki/Self-modifying_code "Self-modifying code"
[8]: /wiki/APL_programming_language "APL programming language"
[9]: /wiki/LISP "LISP"
[10]: /wiki/Expression_orientation "Expression orientation"
[11]: /wiki/Procedure_orientation "Procedure orientation"
[12]: /wiki/Functional_programming "Functional programming"
[13]: /wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"
[14]: /wiki/Dr._Dobb%27s_Journal "Dr. Dobb's Journal"
[15]: https://archive.org/stream/dr_dobbs_journal_vol_01#page/n121/mode/2up/
[16]: #cite_note-3
[17]: http://tsdr.uspto.gov/#caseNumber=72301892&caseType=SERIAL_NO&searchType=statusSearch
[18]: /wiki/Information_technology "Information technology"
[19]: /wiki/Open_source "Open source"
[20]: /wiki/Trac "Trac"
[21]: /wiki/The_Last_Starfighter "The Last Starfighter"