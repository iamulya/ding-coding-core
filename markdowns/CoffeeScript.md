**CoffeeScript** is a programming language that [transcompiles][0] to [JavaScript][1]. It adds [syntactic sugar][2] inspired by [Ruby][3], [Python][4] and [Haskell][5] in an effort to enhance JavaScript's brevity and readability.[\[3\]][6] Specific additional features include [list comprehension][7] and [pattern matching][8].

CoffeeScript support is included in [Ruby on Rails][9] version 3.1[\[4\]][10] and [Play Framework][11].[\[5\]][12] In 2011, [Brendan Eich][13] referenced CoffeeScript as an influence on his thoughts about the future of JavaScript.[\[6\]][14][\[7\]][15]

## History

On December 13, 2009, [Jeremy Ashkenas][16] made the first [Git][17] commit of CoffeeScript with the comment: "initial commit of the mystery language."[\[8\]][18] The compiler was written in Ruby. On December 24, he made the first tagged and documented release, 0.1.0\. On February 21, 2010, he committed version 0.5, which replaced the Ruby compiler with a [self-hosting][19] version in pure CoffeeScript. By that time the project had attracted several other contributors on [GitHub][20], and was receiving over 300 page hits per day.

On December 24, 2010, Ashkenas announced the release of stable 1.0.0 to [Hacker News][21], the site where the project was announced for the first time.[\[9\]][22][\[10\]][23]

## Syntax

Almost everything is an expression in CoffeeScript, for example `if`, `switch` and `for` expressions (which have no return value in JavaScript) return a value. As in [Perl][24], these control statements also have postfix versions; for example, `if` can also be written after the conditional statement.

Many unnecessary parentheses and braces can be omitted; for example, blocks of code can be denoted by indentation instead of braces, function calls are implicit, and object literals are often detected automatically.

## Examples

## Interval test

To compute the [body mass index][25], one may do (here in [JavaScript][1]):

With CoffeeScript the interval is directly described:

## Loops and comprehensions

To compute the [greatest common divisor][26] of two integers with the [euclidean algorithm][27], in JavaScript one usually needs a _while_ loop:

Whereas in CoffeeScript one can use `until` and pattern-matching instead:

Any _for_ loop can be replaced by a [list comprehension][7]; so that to compute the squares of the positive odd numbers smaller than ten (i.e. numbers which remainder modulo 2 is 1), one can do:

Alternatively, there is:

You can implement a [linear search][28] with a one-liner using the when keyword:

The `for ... in` syntax allows you to loop over arrays while the `for ... of` syntax allows you to loop over objects.

You can use the `?` keyword to quickly check if a variable is `null` or `undefined` :

This would alert "No person" if the variable is `null` or `undefined` and "Have person" if there is something there.

## Functions and jQuery

A common JavaScript snippet using the [jQuery][29] library is:

Or even just:

In CoffeeScript, the `function` keyword is replaced by the `->` symbol, and indentation is used instead of curly braces, as in other [off-side rule][30] languages such as Python and Haskell. Also, parentheses can usually be omitted, using indentation level instead to denote a function or block. Thus, the CoffeeScript equivalent of the snippet above is:

Or just:

## String interpolation

Ruby-style string interpolation is included in CoffeeScript. Double-quoted strings allow for interpolated values, using \#{ ... }, and single-quoted strings are literal.[\[11\]][31]

## Compiling

The CoffeeScript compiler has been [written in CoffeeScript][19] since version 0.5 and is available as a [Node.js][32] utility; however, the core compiler does not rely on Node.js and can be run in any [JavaScript][1] environment.[\[12\]][33] One alternative to the [Node.js][32] utility is the [Coffee Maven Plugin][34], a plugin for the popular [Apache Maven][35] build system. The plugin uses the [Rhino][36] JavaScript engine written in [Java][37].

The official site at CoffeeScript.org has a "Try CoffeeScript" button in the menu bar; clicking it opens a modal window in which users can enter CoffeeScript, see the JavaScript output, and run it directly in the browser. The js2coffee[\[13\]][38] site provides bi-directional translation.

## Latest additions

## Adoption

On September 13, 2012, [Dropbox][39] announced that their browser-side code base has been rewritten from [JavaScript][1] to CoffeeScript.[\[14\]][40]

[GitHub][20]'s internal style guide once said "write new JS in CoffeeScript", and while it no longer does, all the advice in the style guide references how to write good CoffeeScript,[\[15\]][41] and their [Atom text editor][42] is also written in the language.[\[16\]][43]

## See also

## References

## Further reading

## External links

[0]: /wiki/Source-to-source_compiler "Source-to-source compiler"
[1]: /wiki/JavaScript "JavaScript"
[2]: /wiki/Syntactic_sugar "Syntactic sugar"
[3]: /wiki/Ruby_(programming_language) "Ruby (programming language)"
[4]: /wiki/Python_(programming_language) "Python (programming language)"
[5]: /wiki/Haskell_(programming_language) "Haskell (programming language)"
[6]: #cite_note-thelittlebookoncoffeescript-3
[7]: /wiki/List_comprehension "List comprehension"
[8]: /wiki/Pattern_matching "Pattern matching"
[9]: /wiki/Ruby_on_Rails "Ruby on Rails"
[10]: #cite_note-4
[11]: /wiki/Play_Framework "Play Framework"
[12]: #cite_note-5
[13]: /wiki/Brendan_Eich "Brendan Eich"
[14]: #cite_note-6
[15]: #cite_note-7
[16]: /wiki/Jeremy_Ashkenas "Jeremy Ashkenas"
[17]: /wiki/Git_(software) "Git (software)"
[18]: #cite_note-8
[19]: /wiki/Self-hosting "Self-hosting"
[20]: /wiki/GitHub "GitHub"
[21]: /wiki/Hacker_News "Hacker News"
[22]: #cite_note-9
[23]: #cite_note-10
[24]: /wiki/Perl "Perl"
[25]: /wiki/Body_mass_index "Body mass index"
[26]: /wiki/Greatest_common_divisor "Greatest common divisor"
[27]: /wiki/Euclidean_algorithm "Euclidean algorithm"
[28]: /wiki/Linear_search "Linear search"
[29]: /wiki/JQuery "JQuery"
[30]: /wiki/Off-side_rule "Off-side rule"
[31]: #cite_note-11
[32]: /wiki/Node.js "Node.js"
[33]: #cite_note-12
[34]: https://github.com/talios/coffee-maven-plugin
[35]: /wiki/Apache_Maven "Apache Maven"
[36]: /wiki/Rhino_(JavaScript_engine) "Rhino (JavaScript engine)"
[37]: /wiki/Java_(programming_language) "Java (programming language)"
[38]: #cite_note-13
[39]: /wiki/Dropbox_(service) "Dropbox (service)"
[40]: #cite_note-14
[41]: #cite_note-15
[42]: /wiki/Atom_(text_editor) "Atom (text editor)"
[43]: #cite_note-16