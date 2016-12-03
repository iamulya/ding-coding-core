**K** is a proprietary [array][0] processing language developed by [Arthur Whitney][1] and commercialized by [Kx Systems][2]. Since then, an open-source implementation known as Kona has also been developed.[\[1\]][3] The language serves as the foundation for [kdb+][4], an in-memory, column-based [database][5], and other related financial products.[\[2\]][6] The language, originally developed in 1993, is a variant of [APL][7] and contains elements of [Scheme][8]. Advocates of the language emphasize its speed, facility in handling arrays, and expressive syntax.[\[3\]][9]

## History

Before developing K, Arthur Whitney had worked extensively with APL, first at [I. P. Sharp Associates][10] alongside [Ken Iverson][11] and [Roger Hui][12], and later at [Morgan Stanley][13] developing financial applications. At Morgan Stanley, Whitney helped to develop [A+][14], a variant of APL, to facilitate the migration of APL applications from [IBM][15] [mainframes][16] to a network of Sun workstations. A+ had a smaller set of primitive functions and was designed for speed and to handle large sets of time series data.[\[4\]][17]

In 1993, Whitney left Morgan Stanley and developed the first version of the K language. At the same time he formed Kx Systems to commercialize the product and signed an exclusive contract with [Union Bank of Switzerland][18] (UBS). For the next four years he developed various financial and trading applications using K for UBS.

The contract ended in 1997 when UBS merged with [Swiss Bank][19]. In 1998, Kx Systems released kdb+, a database built on K. kdb was an [in-memory][20], [column-oriented][21] database and included ksql, a query language with an [SQL][22]-like syntax. Since then, a number of financial products have been developed with K and kdb+. kdb+/tick and kdb+/taq were developed in 2001\. kdb+, a 64-bit version of kdb+ was released in 2003 and kdb+/tick and kdb+/taq were released in 2004\. kdb+ included [Q][23], a language that merged the functionality of the underlying K language and ksql.[\[5\]][24]

## Overview

K shares key features with APL. They are both interpreted, interactive languages noted for concise and expressive syntax. They have simple rules of precedence based on right to left evaluation. The languages contain a rich set of primitive functions designed for processing arrays. These primitive functions include mathematical operations that work on arrays as whole data objects, and array operations, such as sorting or reversing the order of an array. In addition, the language contains special operators that combine with primitive functions to perform types of iteration and recursion. As a result, complex and extended transformations of a dataset can be expressed as a chain of sub-expressions, with each link performing a segment of the calculation and passing the results to the next link in the chain.

Like APL, the primitive functions and operators are represented by single or double characters; however, unlike APL, K restricts itself to the [ASCII character set][25] (a feature it shares with [J][26], another variant of APL). To allow for this, the set of primitive functions for K is smaller and heavily overloaded, with each of the ASCII symbols representing two or more distinct functions or operations. In a given expression, the actual function referenced is determined by the context. As a result, K expressions can be opaque and difficult to parse for humans. For example, in the following contrived expression the [exclamation point][27] "!" refers to three distinct functions:

Reading from right to left the first ! is modulo division that is performed on 7 and 4 resulting in 3\. The next ! is enumeration and lists the integers less than 3, resulting in the list 0 1 2\. The final ! is rotation where the list on the right is rotated two times to the left producing the final result of 2 0 1\.

The second core distinction of K is that functions are [first-class objects][28], a concept borrowed from [Scheme][8]. [First-class functions][29] can be used in the same contexts where a data value can be used. Functions can be specified as anonymous expressions and used directly with other expressions. Function expressions are specified in K using [curly brackets][30]. For example, in the following expression a quadratic expression is defined as a function and applied to the values 0 1 2 and 3:

In K, named functions are simply function expressions stored to a variable in the same way any data value is stored to a variable.

Functions can be passed as an argument to another function or returned as a result from a function.

## Examples

K is an interpreted language where every statement is evaluated and its results immediately displayed. Literal expressions such as strings evaluate to themselves. Consequently, the [Hello world][31]-program is trivial:

The following expression sorts a list of strings by their lengths:

The expression is evaluated from right to left as follows:

A function to determine if a number is prime can be written as:

The function is evaluated from right to left:

If x is not prime then one of the values returned by the modulo operation will be 0 and consequently the minimal value of the list. If x is prime then the minimal value will be 1, because x mod 2 is 1 for any prime greater than 2\.

The function below can be used to list all of the prime numbers between 1 and R with:

The expression is evaluated from right to left

## K financial products

K is the foundation for a family of financial products. Kdb+ is an in-memory, column-based database with much of the same functionality of a [relational database management system][32]. The database supports [SQL][22], ([SQL-92][33]) and ksql, a query language with a syntax similar to SQL and designed for column based queries and array analysis.

Kdb+ is available for [Solaris][34], [Linux][35], [OSX][36] and [Windows][37] (32-bit or 64-bit).

## See also

## References

## External links

[0]: /wiki/Array_data_structure "Array data structure"
[1]: /wiki/Arthur_Whitney_(computer_scientist) "Arthur Whitney (computer scientist)"
[2]: /wiki/Kx_Systems "Kx Systems"
[3]: #cite_note-1
[4]: /wiki/Kdb%2B "Kdb+"
[5]: /wiki/Database "Database"
[6]: #cite_note-2
[7]: /wiki/APL_(programming_language) "APL (programming language)"
[8]: /wiki/Scheme_(programming_language) "Scheme (programming language)"
[9]: #cite_note-3
[10]: /wiki/I._P._Sharp_Associates "I. P. Sharp Associates"
[11]: /wiki/Kenneth_E._Iverson "Kenneth E. Iverson"
[12]: /wiki/Roger_Hui "Roger Hui"
[13]: /wiki/Morgan_Stanley "Morgan Stanley"
[14]: /wiki/A%2B_(programming_language) "A+ (programming language)"
[15]: /wiki/IBM "IBM"
[16]: /wiki/Mainframe_computer "Mainframe computer"
[17]: #cite_note-4
[18]: /wiki/Union_Bank_of_Switzerland "Union Bank of Switzerland"
[19]: /wiki/Swiss_Bank_Corporation "Swiss Bank Corporation"
[20]: /wiki/In-memory_database "In-memory database"
[21]: /wiki/Column-oriented_DBMS "Column-oriented DBMS"
[22]: /wiki/SQL "SQL"
[23]: /wiki/Q_(programming_language_from_Kx_Systems) "Q (programming language from Kx Systems)"
[24]: #cite_note-5
[25]: /wiki/ASCII_character_set "ASCII character set"
[26]: /wiki/J_(programming_language) "J (programming language)"
[27]: /wiki/Exclamation_point "Exclamation point"
[28]: /wiki/First-class_object "First-class object"
[29]: /wiki/First-class_function "First-class function"
[30]: /wiki/Curly_bracket "Curly bracket"
[31]: /wiki/Hello_world "Hello world"
[32]: /wiki/Relational_database_management_system "Relational database management system"
[33]: /wiki/SQL-92 "SQL-92"
[34]: /wiki/Solaris_(operating_system) "Solaris (operating system)"
[35]: /wiki/Linux "Linux"
[36]: /wiki/OSX "OSX"
[37]: /wiki/Microsoft_Windows "Microsoft Windows"