**HyperTalk** is a high-level, [procedural][0] [programming language][1] created in 1987 by [Dan Winkler][2] and used in conjunction with [Apple Computer][3]'s [HyperCard][4] hypermedia program by [Bill Atkinson][5]. The main target audience of HyperTalk was beginning programmers, hence HyperTalk programmers were usually called authors, and the process of writing programs was called "[scripting][6]". HyperTalk scripts are fairly similar to written [English][7], and use a logic structure similar to that of the [Pascal programming language][8].

It supports the basic control structures of [procedural languages][9]: repeat for/while/until, if/then/else, as well as function and message "handler" calls (a handler is a subroutine, a message handler is a procedure). [Data types][10] are transparent to the user, conversion happens transparently in the background between [strings][11] and numbers. There are no [classes][12] or [data structures][13] in the traditional sense; their place was taken by special [string literals][14], or rather "lists" of "items" delimited by commas (in later versions the "itemDelimiter" property allowed choosing an arbitrary character).

The [case-insensitive][15] language was interpreted at first, but gained [just-in-time compilation][16] with HyperCard 2.0\.[\[1\]][17]

## Description

## Fundamental operations

For most basic operations and mathematics, HyperTalk tended to favor the natural-language ordering of predicates in a statement to that used in mathematical notation. For instance, HyperTalk used the `put` assignment command that placed the variable at the end:

whereas in the more traditional [BASIC programming language][18] (and most others), the result of a basic multiplication would be saved in a variable by writing:

The HyperTalk code has the side-effect of creating the [variable][19] _theResult_ on the fly. Scripts could assign any type or value to a variable using `put` - HyperTalk was _very_ [weakly typed][20]. Conversions between variable types were invisible and automatic; one can multiply the string "3" and the number 5 to produce the number 15, or concatenate the number 5 onto the string "3" to produce the string "35"; HyperTalk will not complain unless the types cannot be automatically converted.

HyperTalk's flow control and logic was generally similar to other common languages, using `if ... then ... else ... end if` for [conditionals][21] and supporting a variety of [loops][22] based on a flexible `repeat ... end repeat` syntax. [Comments][23] were prefaced with two minus signs; `-- this is a comment`.

## Objects, containers and scripts

HyperCard's primary [user interface][24] concept was the _card_, a display system that emulated an [index card][25]. Cards were normally used to store information, similar to a record in a conventional flat-file database. The graphical layout of the card was created by placing various elements like text fields and buttons on it using the mouse. A master layout "card" known as the _background_ was shown behind the transparent areas of each card. Objects placed on the background, such as fields and buttons, would be shared as a layout among several cards, but with card-specific content. The collection of cards, backgrounds and the associated data stored in them were stored in a single file known as the _stack_ (of cards). Collectively, all of these data-containing objects are referred to as _containers_.

HyperTalk functions, or _scripts_, were normally stored within the `script` property available in many of the stack's containers. Scripts could access the properties of a container, corresponding to [instance variables][26], using the `get` and `set` instructions. The script property held plain text, and had no special properties; scripts could be placed in and run from any text container, including string variables (and thus indirectly text files), imported from other stacks using the `start using` command, or even user-typed text in an on-screen text field. Arbitrary text could be "run" using the `do` command, in a fashion not unlike Dynamic SQL.[\[2\]][27]

## Referring to containers

A key concept within the HyperTalk language was the way it referred to containers through a navigational system based on the visual hierarchy of the stack. Every container in the stack was given a unique ID number when it was created, and could also be given a name. Scripts could refer to objects by using either of these identifiers, along with an object _type_ addressed using the `of` operator. The `of` operator used a natural language syntax that made for easily readable, self-documenting code. For instance, a script stored in a button on a card might wish to read the content of text field the user had typed into, in which case the field might be referred to in this fashion:

This script is running in the context of a button on a card, so "which card" is "the card the user is currently interacting with". In this case the code uses the `put` operator to assign the value of the text field into a new variable called `theValue`. HyperTalk tried its best to determine additional context and allow the programmer to "leave out" redundant code. In the case of text fields, for instance, "the value", the text typed into the field, was assumed to be the main property and was assumed to be the target if not otherwise specified. Likewise, "card fields" were assumed to be the target of commands, as opposed to "background field", so it could be left off as well. Even container types had short forms to save typing. The code above is equivalent to the short form `put fld "typehere" into theValue`.

Objects within a given context, the card or background for instance, were also given a runtime number based on their [z-order][28] on the screen. To assist in using their position for navigation, HyperTalk also included a variety of [ordinal][29] and [cardinal][30] referencing systems to simplify the syntax further. Assuming the field "typehere" is the only field on the card, the code above could also be written in this fashion:

or alternately:

The choice of addressing style was left to the programmer and any one would work in any situation. However, as is the case in most human languages, certain styles of addressing were more natural given the context of the surrounding text, and the programmer would often change styles to make the code more readable.

HyperTalk included the `me` container which acted in the same fashion as the `self` qualifier found in most OO languages, allowing simple access to the current container object. Less common was the `it` variable, which held the value of the last operation for certain built-in operators. For instance:

uses the `ask` command to display a [dialog box][31] with a text field the user can type into, and when the dialog is completed by hitting `Return` or clicking `OK`, the value is assigned to the `it` pseudo-variable. The code then copies the value into a card field using the `put` assignment operator.

## Collections

Containers of a given type were also available as collections with a pluralized version of that container type as its name - the collection of the fields on a card was `card fields`. These collections were themselves containers with their own properties. Key among these was the `number` property which was widely used during iterations and similar tasks. For instance, if one wanted to hide all the fields on a card, this could be accomplished with this code:

This code exposes another common feature of HyperTalk, that a property might have several names and operators. In this case the `hide` command, and the associated `show`, act by setting the value of the container's `visible` property. `hide field i` is exactly equivalent to `set the visible of field i to false`. A similar example was the `lock screen` command that stopped visual updating, which was a short form for `set the lockscreen to true`, where `lockscreen` is a property of HyperCard itself---also a container. Many examples of this sort of [syntactic sugar][32] were found in HyperTalk, in order to simplify the syntax and improve readability of common code.

In HyperCard 2.2 and later, the collection of collections was also available as a container's `parts`. This allowed a script to address all of the objects in a container with a single iterator.

## Handling text

A notable feature of the HyperTalk container model was its handling of text. Every collection of text, whether a literal string in a program or text typed into a text field, was itself considered a container with multiple collections of containers within it. This allowed scripts to parse text using the same navigational commands as any other container. For instance, while parsing a space-delimited data file, one might want to extract the third column, like this:

This syntax allowed the script to "walk" down the text to find particular data, as in this example:

This process of treating text as a container was known as "chunking", and the functions as "chunk expressions". These same sorts of expressions were used to handle file manipulation, along with a set of file management functions. The following code opens a known file, reads from it, extracts data, and then closes the file:

HyperTalk also included functions for chunking strings using a substring find operation using the `in` operator. The following code finds all examples of a given pattern using the `in` as part of the `repeat` loop, while `offset` finds the location of that pattern within the string:

## Lists and other collections

HyperTalk used the same chunking system to produce a structure like the array or list simply by placing data items in a variable, separated by commas. APIs that would use a custom type in other languages would accept strings in HyperTalk, parsing them out as required. For instance, the position of objects on the screen was defined by a pair of numbers representing the X and Y coordinates of the upper left corner. The following code creates a variable called _pos_ that holds a coordinate pair, and then manipulates this to re-position all of the buttons on a card in a diagonal from top left to bottom right:

The `item` chunking expression was originally based on the comma, but later versions of HyperCard allowed this to be changed using the `itemDelimiter` which offered the ability to parse arbitrary lists and structures.

## Messages and events

HyperTalk used an object-oriented concept for calling scripts, with objects in the stack sending "events" that would be processed by "handlers" that declared their interest in receiving the events using the `on` syntax. For instance, most GUI containers could send the `mouseUp` event when the mouse button was clicked down and then released on top of that container, and a script could capture these events like this:

The events were first sent to the script in the object that created the event, for instance, if the user clicked on a button the `mouseUp` event was first sent to that button. If the button's script object did not have a `mouseUp` handler (or no script at all), it was then passed to the card, the background, the stack, any stacks whose scripts had been explicitly imported using the `start using` command, the "home stack" (a user-selected always-open HyperCard stack), and finally to the HyperCard application itself.

For many simple events like mouse clicks on buttons the script would be placed directly within the object in question, the button itself. For instance, one might use the example code above within a button handler in this fashion:

In the case where code was being called from multiple locations, or it was being used as a global handler for an event, the script could determine the original sender of the event using the `target` function. Likewise, scripts could send events to other containers using the `send` command and then using the navigational code to refer to the container holding that handlers code:

Combining HyperTalk's string processing with the `do` command allowed for the construction of interactive interpreters by placing a text field on a card and then placing this code in the field's script:

`clickLine` is a global property that returns the name and line number of the last field clicked, in a form like "line 10 of card field 4". This code first selects all of the text on the clicked line, then extracts the line number into a local variable, then uses `do` to run the text as a HyperCard script.

The `mouseDown` message was sent to a button when the user clicked it, and `mouseUp` was sent when the user released the mouse inside it to trigger its action. Similarly, HyperCard sent periodic `idle` message, `mouseEnter`, `mouseLeave`, ... and various other messages related to navigation between different cards in a HyperCard stack, as well as user input (`keyDown`, `functionKey`, ...), and system events. As far as the scripters were concerned, there were no main event loops like in other procedural programming languages.

## Controlling HyperCard

Unlike general [rapid application development][33] platforms, HyperCard stacks always looked like stacks - the menu bar was HyperCard's and not the programmer's (by default---scripting could add, delete and modify menus), the single window was a fixed size (in early versions), and in certain cases, commands that were central to the operation were part of the application itself, and not directly available in HyperTalk itself.

A good example of this was the creation of new cards, which was part of the application, not directly accessible from the HyperTalk language itself. A new card could only be created using the New Card menu item, which could be simulated in code using`doMenu "New Card"`. While HyperTalk called into menu commands, menu commands also invoked handlers in HyperTalk. To run custom code when the Copy menu item was selected, one would place a script in the stack using the `on doMenu itemName` handler, and then examine `itemName` to see if it was "Copy".

HyperTalk also provided script control over the built-in drawing tools, simply by scripting the needed changes in paint tools and simulating mouse movements using the `drag from _start_ to _end_` and the `click at _position_` commands.

## Extending HyperTalk

Although the HyperTalk language languished just like HyperCard itself, it received a second lease on life through its plugin protocol, so-called External Commands (XCMDs) and External Functions (XFCNs), which were native code containers attached to stacks (as Macintosh-specific [resources][34]) with a single entry point and return value. XCMDs and XFCNs could be called just like regular message and function handlers from HyperTalk scripts, and were also able to send messages back to the HyperCard application. Some enterprising XCMD authors added advanced features like full color support (ColorizeHC, HyperTint, AddColor), multiple special-purpose windows (Prompt, Tabloid, Textoid, Listoid, ShowDialog, MegaWindows), drag and drop support and various hardware interfaces to the language.

## Descendants of HyperTalk

Various [scripting languages][6] have taken their cues from HyperTalk. They are commonly regrouped in a loosely defined family named [xTalk][35]:

As well as second-level clones like:

Many method names first popularized by HyperTalk made it into later languages, such as the `onmouseup` event handler in JavaScript.[\[4\]][36] Although Asymetrix [ToolBook][37] is often also considered a HyperCard clone, its scripting language apparently bears little resemblance to HyperTalk.

These clones and dialects (commonly referred to under the moniker of [xTalk][35]-languages) added various features to the language that are expected from a modern programming language, like exception handling, user-defined object properties, timers, multi-threading and even user-defined objects.

## See also

## References

## External links

[0]: /wiki/Procedural_programming "Procedural programming"
[1]: /wiki/Programming_language "Programming language"
[2]: /w/index.php?title=Dan_Winkler_(computer_scientist)&action=edit&redlink=1 "Dan Winkler (computer scientist) (page does not exist)"
[3]: /wiki/Apple_Inc. "Apple Inc."
[4]: /wiki/HyperCard "HyperCard"
[5]: /wiki/Bill_Atkinson "Bill Atkinson"
[6]: /wiki/Scripting_language "Scripting language"
[7]: /wiki/English_language "English language"
[8]: /wiki/Pascal_(programming_language) "Pascal (programming language)"
[9]: /wiki/Procedural_programming_language "Procedural programming language"
[10]: /wiki/Datatype "Datatype"
[11]: /wiki/String_(computer_science) "String (computer science)"
[12]: /wiki/Class_(computer_science) "Class (computer science)"
[13]: /wiki/Data_structure "Data structure"
[14]: /wiki/String_literal "String literal"
[15]: /wiki/Case_sensitivity "Case sensitivity"
[16]: /wiki/Just-in-time_compilation "Just-in-time compilation"
[17]: #cite_note-mactechCI2-1
[18]: /wiki/BASIC_programming_language "BASIC programming language"
[19]: /wiki/Variable_(computer_science) "Variable (computer science)"
[20]: /wiki/Weakly_typed "Weakly typed"
[21]: /wiki/Conditional_(programming) "Conditional (programming)"
[22]: /wiki/Loop_(computing)#Loops "Loop (computing)"
[23]: /wiki/Comment_(computer_programming) "Comment (computer programming)"
[24]: /wiki/User_interface "User interface"
[25]: /wiki/Index_card "Index card"
[26]: /wiki/Instance_variable "Instance variable"
[27]: #cite_note-2
[28]: /wiki/Z-order "Z-order"
[29]: /wiki/Ordinal_number "Ordinal number"
[30]: /wiki/Cardinal_number "Cardinal number"
[31]: /wiki/Dialog_box "Dialog box"
[32]: /wiki/Syntactic_sugar "Syntactic sugar"
[33]: /wiki/Rapid_application_development "Rapid application development"
[34]: /wiki/Resource_fork "Resource fork"
[35]: /wiki/XTalk "XTalk"
[36]: #cite_note-beichSplashKeynote2011-4
[37]: /wiki/ToolBook "ToolBook"