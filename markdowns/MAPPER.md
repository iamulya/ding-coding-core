**MAPPER** (MAintain, Prepare, and Produce Executive Reports), also referred to by diehard Mapper programmers as (**M**ost **A**mazing **P**rogramming **P**roduct **E**ver **R**eleased), is a database management and processing system. It is a software tool that enables end-users to share computer power in a corporation. Users are able to develop their own applications and process them interactively. The product has a number of unique characteristics that may appear technically impossible to persons unfamiliar with its method of operation.

MAPPER had its origins outside the technical mainstream of computer programming. Initially created in [Sperry Univac][0]'s computer factory in Roseville, Minnesota, MAPPER is a proprietary product of [Unisys][1] Corporation. The principal architect was Louis S. Schlueter, who worked with other early "gurus" like Michael Stroeing of Sperry, Steve Anderson of Santa Fe Railway, and later with Kansas City government. MAPPER became a very popular solution in the Government sector. Large user group communities formed like the New England MAPPER Users Group headed by Judith Hartman, Howard Roundy and Michael Scolastico.

There are similarities between the development history of MAPPER and that of UNIX. Both were responses to what appeared to be unreasonable restrictions in the way computer systems were developed. While UNIX (and later LINUX) is a core software "operating" system, MAPPER is a cross-platform application tool. Thus it will run, like a program, on a variety of operating systems.

## History

MAPPER's heritage dates back to the 1960s when Louis Schlueter conceived the CRT RPS (Report Processing System, to differentiate it from [RPG][2]) as a means to help Sperry/Univac manage their factory producing computer hardware.[\[1\]][3][\[2\]][4]

CRT RPS became MAPPER in 1975\. Because of its illegitimacy, it was a low-budget development. This meant that all was set up for minimum use of resources. The development of the [UNIVAC][5] 1100, and pressure from customers led to a release for more general use in 1979\. In these applications, end-users were devising and doing their own computing.

The data are shown using a cabinet and drawer metaphor, corresponding with the file addressing method of the Univac 1100\. Data were presented in strict rows of 80 to 132 characters long to match card punching and line printing capabilities. A set of commands gradually developed that were executed via a user's video screen.

The earliest external use of MAPPER was in the [Santa Fe][6] railroad for tracking its piggyback trailers in Chicago. Eventually, this involved large-scale data handling and real-time updating. The development was done by railroad office workers, not programmers. After about four years, the Santa Fe actually bought its competitor, the [Southern Pacific][7], a railway that used the much advertised Total Operations Processing System (|TOPS|)

In the mid 1980s Sperry actively marketed MAPPER, including advertising featuring "MAPPER Man", the self-empowered executive end-user. In the Scandinavian countries, Sperry had a MAPPER song---"Do it the MAPPER way!" (1983)---written and performed by an [ABBA][8]-style group.

The relationship between IT departments and this end-user tool tended to be difficult. IT staff, despite their work backlog, sensed a threat to their hegemony of application development and were actively hostile. Many applications were shut down by IT departments, embarrassed that end-users were producing results that were faster and more accurate than theirs. In some cases, other IT vendors called the active users "programmers" and claimed gross inefficiency.

## Unique features

Unusual features are found in MAPPER in its Data Structure, Command Language, Method of Solution, On-Line Real-time Efficiency, Quick method of Prototyping Applications, and importantly, its Coordination and Security tools, all of which lead to its suitability for use in controlling fast-changing inventories. The base has been extended over time. These aspects are covered below.

An early description of MAPPER was the paper "MAPPER Was the First User-command Language" presented at the USE technical conference in March 1983 by Michael Nicoll-Griffith of Canadian Pacific Consulting Services and published as part of the USE proceedings. In 1988, the book "User-driven Computing" by Louis Schlueter was published.

MAPPER use requires that the community have a MAPPER Coordinator, who acts like a shepherd. The Coordinator has a set of privileged tools to monitor and tune the development and control abuses. Such tools are written in the MAPPER programming (or "Command") language, and operate from secure locations in the database.

Thus MAPPER serves the same role for a corporation that spreadsheets on PCs serve for individuals. The involvement and participation of users would be quite similar were it not for the stabilizing and assisting role of the Coordinator.

## Data structure

The basic unit of data stored is called a "report". This appears similar to a [Microsoft Excel][9] spreadsheet. It is usual to have sets of similar reports with the same column structure that apply to different categories or groupings of items. The Coordinator (see below) will concur in the design. Reports are organised into "drawers" of (at least in principle) identically-structured reports, and groups of up to 8 drawers form a "cabinet". Reports can be between 40 and up to 998 characters wide, depending on platform. On the "Core MAPPER" platforms (Windows/Unix/Linux), the drawer size must be a multiple of 2: on the 1100/2200 it can be an odd number, and in fact there is a slight optimisation possible by making the drawer size of the form _4n-1_, due to the way data lines are padded to fit within SDF file structures which are word-addressable.

Reports are numbered from 1 to the maximum set for the drawer- there is also a report zero, but it has a special significance as it acts as both a template and as a filter for the rest of the reports in the drawer. Drawers have a drawer letter, from B to I. Cabinets are numbered from 0 and increment by 2 - odd numbered cabinets reference the same data as the matching even cabinet, but provide a read-only view of the data (e.g. cabinet 0 and cabinet 1 represent full and limited access to the same data). There is a system maximum for a given system, which varies depending on platform and is represented by the system reserved work MAXCAB$. Drawers run from B to I because A is a special drawer; it is deemed to exist simultaneously in all cabinets, so acts as a global resource. Drawer A is typically used for "quick and dirty" temporary datasets, captured data, prototype run code, notes and so on. Important or confidential data should never be left in the A drawer.

So, the third report in drawer C in cabinet 36 would be referenced as 3C36, or simply 3C if the user is logged into cabinet 36 already.

MAPPER's data are stored as a character representation, rather than, say, binary values. Even numeric fields are stored as text.

A major difference from spreadsheets is that MAPPER reports have no built-in calculation capability. Processing is achieved by applying a "Command" or "Function" to a report, an action that produces a duplicated "result". This result can be processed further.

Another important difference is that MAPPER data is a form of visible-record data; what you see is literally what you get. Within an individual drawer, reports all have the same line length, which is padded with spaces if not filled. By the same token, column sizes within a data record are fixed, unlike Excel where you can type hundreds of characters into a small field unless limited by data validation. This is both a strength and a weakness of MAPPER- due to the fixed sizes, the position of any section of the data on disk can be calculated, but the data must be able to be expressed in fixed-format fields.

In older versions of MAPPER, security was applied at a cabinet level- with current versions, security has a finer granularity and is applied at drawer level. If a user is not granted access to a particular drawer, the data will not be visible to that user. It's possible to grant either update or read-only access to a given drawer.

## Command language

When a command is to be performed, the software obtains the data organization from column headings that are above the data. In essence, it generates the "schema" on demand. Popular commands are "Search" to make a subset, "Sort" to change the sequence of lines, "Totalize" to generate subtotals by type, category or date. Two independent reports can be combined with "Match", while very sophisticated commands like "Calculate and Update" include successive steps in one operation.

The result from a command can be operated on by a succeeding command. This leads to stringing together sets of commands in the same way that coloured "poppets" can be used to make a necklace.

Users start working with simple commands and can grow into the more complicated ones as they gain experience. The commands that users have permission to perform are controlled individually by the Coordinator. This progressive learning pattern, with many participants, stabilizes the software over a long lifespan.

## Method of solution

After an initial orientation course, a user can start developing an application by setting up the data columns. When the data are entered on the screen, the commands can be used to work on it. Therefore, the user can get working results in one or two days.

An option then exists to leave the application at that level; set a sequence of commands into one or more "RUN" procedures (as in a "macro"); add a new type of related data; or abandon the experiment and proceed on to different work.

With time, different sets of data and command strings will form a backbone that reflects the processing needed by the whole corporation. The interactive nature of use means that new users can attach their processes to what exists already. There is no possibility of legacy systems being formed since the base set of available commands always exists in new product releases.

## Real-time efficiency

In the operation of MAPPER, the data are not obtained by a program that "reads" them, but the data wait for action. The programmed commands are brought to operate upon it. However, the complete set of available commands remains in the active memory of the computer. Being written in "re-entrant code", any command can be used by many hundreds of different users at the same time.

To avoid a bottleneck in disk accesses, the data are kept in screen display format. This results in the average number of disk reads per report display to be less than two.

The addition of new "records" to a long report can involve high disk activity and render a system non-responsive. The Coordinator monitors the length of reports and will guide a users in protecting the fast response times wanted.

## Quick prototyping

In place of supervising specifications, the user applies his knowledge of the work situation to experiment with what will give him control. Marginal ideas can be discarded quickly. The step of trying to communicate the fine points of his job to a programmer is avoided. Immediate understanding of the possibility of solving the problem with a computer is available to the user. This reduces waste.

Some dressing of final application may be needed to make the processes more readily understandable.

## Coordination and security

One or more persons known as Coordinators control the development and use of the database. They also identify needs. They initiate added training and workshop sessions. Computer literacy tends to become spread throughout the corporation.

Data forms that are inefficient or duplicate the work being done by different departments are eliminated.

The Coordinator also ensures that departmental barriers are secured with read and write access allocated for those who need them.

## Dynamic inventories

Giving many different users access to a shared database can set up a cooperative participation in which each is proud of the accuracy and promptness of his/her material. Inventories can be kept accurately and this helps to manage the company's resources. All those using the data are immediately connectible and all get the latest status. Data entry by clerks for managers, with its tendency towards inaccurate keying, is avoided.

The "inventory" may be any set of "things". The things could be anything like Locomotives, Time-sheets, Accounts, Cars, X-Rays, Screws, Nurses, Street Lamps, or Pages of a Book.

There is no simple answer to "What does it do?". It does any data handling the user needs to manage his or her job.

## Extended capabilities

## Run language

Over time, the product has seen extensions made from the base described above. The first of these was mandated by the Santa Fe Railroad. It was a repeat command capability, called a "Run", and similar in concept to an Excel macro. This use of the pretested commands applied successively reduces the chance for programming errors.

The "Run language" uses scripted forms of normal screen commands on the reports (e.g. the manual SORT and the run-language element @SOR will invoke the same compiled re-entrant code module).

It permits logical selection of different processing paths, allows loops and logic branching, user-interaction and similar. It also has the capacity to perform calculations or base processing logic on any character or data field in the entire database. Naturally, this is subject to the security category of the data.

Despite being an interpreted language, a well-designed MAPPER run can achieve reasonable performance, because the commands of the language are relatively powerful and invoke pre-compiled functions. For example, Search, Sort, Match, and similar bulk-processing functions are single commands in both the MAPPER run language and manual functions.

## Cooperative processing

By using network connections, two or more MAPPER systems can process cooperatively. In this, one will wait for task completion by another.

MAPPER handles data or text message traffic between users.

Operations in one machine may be started over the network. SQL data retrieval commands can is be issued with full SQL syntax on external databases, and the results used in further MAPPER processing. MAPPER can run websites with its own .[asp][10] front end, has an integrated [JavaScript][11] engine, can produce [XML][12] for B2B, and is able to manipulate [SOAP][13] objects.

## Cross-platform opportunities

Because the product is standard across all platforms, it is feasible to develop an application on MAPPER in a PC and transfer later to a faster unit. Such faster units may be running on UNIX, OS 1100, LINUX, Windows NT, etc.

A 1989 survey by [Unisys][1] showed that 140 of 224 [UNIVAC][5] 1100 customers were using MAPPER. By 2006 there were more than 600 sites using MAPPER for Windows NT.

Today, MAPPER is in use by thousands of sites worldwide. It has seen a number of modernization upgrades, and has been renamed [Unisys][1] Business Information Server (BIS). Diehard MAPPER lovers still refer to it as MAPPER.

## External links

## References

[0]: /wiki/Sperry_Univac "Sperry Univac"
[1]: /wiki/Unisys "Unisys"
[2]: /wiki/IBM_RPG "IBM RPG"
[3]: #cite_note-LS-1
[4]: #cite_note-2
[5]: /wiki/UNIVAC "UNIVAC"
[6]: /wiki/Atchison,_Topeka_and_Santa_Fe_Railway "Atchison, Topeka and Santa Fe Railway"
[7]: /wiki/Southern_Pacific_Transportation_Company "Southern Pacific Transportation Company"
[8]: /wiki/ABBA "ABBA"
[9]: /wiki/Microsoft_Excel "Microsoft Excel"
[10]: /wiki/Active_Server_Pages "Active Server Pages"
[11]: /wiki/JavaScript "JavaScript"
[12]: /wiki/XML "XML"
[13]: /wiki/SOAP "SOAP"