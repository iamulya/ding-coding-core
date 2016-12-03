**NewtonScript** is a [prototype-based][0] [programming language][1] created to write programs for the [Newton][2] platform.[\[1\]][3] It is heavily influenced by the [Self][4] programming language, but modified to be more suited to needs of [mobile][5] and [embedded devices][6].[\[2\]][7]

## History

On August 3, 1993, Apple unveiled Apple Newton [MessagePad][8]. The device had 640 KB RAM and 4 MB ROM, running on 20 MHz Acorn RISC machine.

The main intention behind Newton project, was to develop a device capable of replacing a computer while being portable.With limited battery and memory, the developers were looking for programming language capable of meeting these challenges.

The developers looked at C++ language but realized that it lacked flexibility. They started focusing on prototype based languages and were impressed with Smalltalk and Self.[\[3\]][9] Concurrently Apple was developing another dynamic programming language called [Dylan][10], which was a strong candidate for Newton platform.[\[4\]][11]

However, both Self and Dylan were dropped out of consideration, as they were both in nascent stage for proper integration.

Instead, a team headed by Walter R Smith, developed a new language called as NewtonScript. it was influenced by [dynamic language][12] like [Smalltalk][13] and prototype model based like Self.[\[3\]][9]

## Features

Although NewtonScript was heavily influenced by Self, there were some differences in both the languages.

Differences aroused due to three perceived problems with Self.

The syntax was also modified to allow a more text-based programming style, as opposed to Self's widespread use of a GUI environment for programming. This allowed Newton programs to be developed on a computer running the Toolkit, where the programs would be compiled and then downloaded to a Newton device for running.

One of the advantages of NewtonScript's prototype based inheritance was reduced memory usage, a key consideration in the 128 KB Newton. The prototype of a GUI object could actually be stored in ROM, so there was no need to copy default data or functions into working memory.

Unlike class based languages, where creation of an object involves memory being allocated to all of its attributes, NewtonScripts' use of prototype inheritance allowed it to allocated memory to few fields like \_proto and \_parent instead of creating whole new object. Here, \_proto and \_parent signifies whether the object is using prototype or parent inheritance.[\[6\]][14]

An example to illustrate above concept, a developer might create a new button instance. If the button uses the default font, accessing its font "slot" (i.e., property or member variable) will return a value that is actually stored in ROM; the button instance in RAM does not have a value in its own font slot, so the prototype inheritance chain is followed until a value is found. If the developer then changes the button's font, setting its font slot to a new value will override the prototype; this override value is stored in RAM. NewtonScript's "[differential inheritance][15]" therefore made efficient use of the Newton's expensive [flash RAM][16] by storing the bulk of the default data and code in the PDA's cheaper and much larger [ROM][17].

## Important terms

**Views:** They are objects created by Newton View System, which are created on [run-time][18] to render views.

**Template:** It is a blueprint from which views are created.

**Protos:** They can be blueprint for a template or a view, and are elements of NewtonScript code libraries.

**Frame and Slot:** Frame is a dynamic collection of slots, and one element of fram is called as a slot. A slot is made up of name and value. The value can be of any type. It is worthwhile to note that all objects in NewtonScript are frames.[\[7\]][19]

**Soup and Entry:** It is a related collection of frames/ data. Entry is an individual frame in a soup.

**Frame Heap:** RAM allocated dynamically by NewtonScript.

**Base View:** It is the main view of application, consisting of all the variables and [methods][20] used in the application.

## Advantages and Disadvantages

**Advantages**

**Disadvantages**

## Influences

With the cancellation of Newton project by Apple in 1998,[\[8\]][21] all further mainstream developments on NewtonScript were stopped. However, the features used in NewtonScript would continue to inspire other programming models and languages.

NewtonScript is also one of the conceptual ancestors (together with Smalltalk, Self, Act1, [Lisp][22] and [Lua][23]) of a general-purpose programming language called [Io][24].[\[9\]][25]

The Io language implements the same differential inheritance model, which is used in NewtonScript to conserve memory.

The prototype-based object model of Self and NewtonScript was used in [JavaScript][26], the most popular and visible language to use the concept so far.

## See also

## References

## External links

[0]: /wiki/Prototype-based_programming "Prototype-based programming"
[1]: /wiki/Programming_language "Programming language"
[2]: /wiki/Newton_(platform) "Newton (platform)"
[3]: #cite_note-1
[4]: /wiki/Self_(computer_language) "Self (computer language)"
[5]: /wiki/Mobile_phone "Mobile phone"
[6]: /wiki/Embedded_system "Embedded system"
[7]: #cite_note-:1-2
[8]: /wiki/MessagePad "MessagePad"
[9]: #cite_note-:2-3
[10]: /wiki/Dylan_(programming_language) "Dylan (programming language)"
[11]: #cite_note-4
[12]: /wiki/Dynamic_programming_language "Dynamic programming language"
[13]: /wiki/Smalltalk "Smalltalk"
[14]: #cite_note-:0-6
[15]: /wiki/Differential_inheritance "Differential inheritance"
[16]: /wiki/Flash_memory "Flash memory"
[17]: /wiki/Read-only_memory "Read-only memory"
[18]: /wiki/Run_time_(program_lifecycle_phase) "Run time (program lifecycle phase)"
[19]: #cite_note-7
[20]: /wiki/Method_(computer_programming) "Method (computer programming)"
[21]: #cite_note-8
[22]: /wiki/Lisp_(programming_language) "Lisp (programming language)"
[23]: /wiki/Lua_(programming_language) "Lua (programming language)"
[24]: /wiki/Io_(programming_language) "Io (programming language)"
[25]: #cite_note-9
[26]: /wiki/JavaScript "JavaScript"