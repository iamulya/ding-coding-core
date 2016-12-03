**PowerShell** (including **Windows PowerShell** and **PowerShell Core**) is a task automation and configuration management framework from [Microsoft][0], consisting of a [command-line][1] [shell][2] and associated [scripting language][3] built on the [.NET Framework][4]. PowerShell provides full access to [COM][5] and [WMI][6], enabling administrators to perform administrative tasks on both local and remote Windows systems as well as [WS-Management][7] and [CIM][8] enabling management of remote Linux systems and network devices. Initially a Windows component only, PowerShell was made [open-source][9] and [cross-platform][10] on 18 August 2016\.[\[3\]][11]

In PowerShell, administrative tasks are generally performed by _cmdlets_ (pronounced _command-lets_), which are specialized .NET [classes][12] implementing a particular operation. Sets of cmdlets may be combined into _scripts_, _executables_ (which are standalone applications), or by instantiating regular .NET classes (or WMI/COM Objects).[\[4\]][13][\[5\]][14] These work by accessing data in different data stores, like the [file system][15] or [registry][16], which are made available to the PowerShell runtime via PowerShell _providers_.

PowerShell also provides a hosting [API][17] with which the PowerShell runtime can be embedded inside other applications. These applications can then use PowerShell functionality to implement certain operations, including those exposed via the [graphical interface][18]. This capability has been used by [Microsoft Exchange Server][19] 2007 to expose its management functionality as PowerShell cmdlets and providers and implement the [graphical][20] management tools as PowerShell hosts which invoke the necessary cmdlets.[\[4\]][13][\[6\]][21] Other Microsoft applications including [Microsoft SQL Server 2008][22] also expose their management interface via PowerShell cmdlets.[\[7\]][23]

PowerShell includes its own extensive, console-based help, similar to [man pages][24] in [Unix shells][25], via the `Get-Help` cmdlet. Local help contents can be retrieved from the Internet via `Update-Help` cmdlet. Alternatively, help from the web can be acquired on a case-by-case basis via the `-online` switch to `Get-Help`.

## Background

Every released version of [Microsoft DOS][26] and [Microsoft Windows][27] for [personal computers][28] has included a command-line interface tool ([shell][2]). These are `[COMMAND.COM][29]` (in installations relying on [MS-DOS][30], including [Windows 9x][31]) and `[cmd.exe][32]` (in [Windows NT][33] family operating systems). The shell is a [command line interpreter][34] that supports a few basic commands. For other purposes, a separate [console application][35] must be invoked from the shell. The shell also includes a scripting language ([batch files][36]), which can be used to automate various tasks. However, the shell cannot be used to automate all facets of [GUI][18] functionality, in part because command-line equivalents of operations exposed via the graphical interface are limited, and the scripting language is elementary and does not allow the creation of complex scripts. In [Windows Server 2003][37], the situation was improved, but scripting support was still considered unsatisfactory.[\[8\]][38]

Microsoft attempted to address some of these shortcomings by introducing the [Windows Script Host][39] in 1998 with [Windows 98][40], and its command-line based host: `cscript.exe`. It integrates with the [Active Script][41] engine and allows scripts to be written in compatible languages, such as [JScript][42] and [VBScript][43], leveraging the [APIs][17] exposed by applications via [COM][5]. However, it has its own deficiencies: it is not integrated with the shell, its documentation is not very accessible, and it quickly gained a reputation as a system [vulnerability vector][44] after several high-profile [computer viruses][45] exploited weaknesses in its security provisions. Different versions of Windows provided various special-purpose command line interpreters (such as [netsh][46] and [WMIC][47]) with their own command sets. None of them were integrated with the command shell; nor were they interoperable.

By 2002 Microsoft had started to develop a new approach to command line management, including a shell called Monad (also known as Microsoft Shell or MSH). The shell and the ideas behind it were published in August 2002 in a white paper entitled Monad Manifesto.[\[9\]][48] Monad was to be a new extensible command shell with a fresh design that would be capable of automating a full range of core administrative tasks. Microsoft first showed off Monad at the Professional Development Conference in Los Angeles in October 2003\. A private beta program began a few months later which eventually led to a public beta program.

Microsoft published the first Monad public [beta release][49] on June 17, 2005, Beta 2 on September 11, 2005, and Beta 3 on January 10, 2006\. Not much later, on April 25, 2006 Microsoft formally announced that Monad had been renamed _Windows PowerShell_, positioning it as a significant part of their management technology offerings.[\[10\]][50] Release Candidate 1 of PowerShell was released at the same time. A significant aspect of both the name change and the RC was that this was now a component of Windows, and not an add-on product.

Release Candidate 2 of PowerShell version 1 was released on September 26, 2006 with final Release to the web (RTW) on November 14, 2006 and announced at TechEd Barcelona. PowerShell for earlier versions of Windows was released on January 30, 2007\.[\[11\]][51]

PowerShell v2.0 development began before PowerShell v1.0 shipped. During the development, Microsoft shipped three [community technology preview (CTP)][52]. Microsoft made these releases available to the public. The last CTP release of Windows PowerShell v2.0 was made available in December 2008\.

PowerShell v2.0 was completed and released to manufacturing in August 2009, as an integral part of Windows 7 and Windows Server 2008 R2\. Versions of PowerShell for Windows XP, Windows Server 2003, Windows Vista and Windows Server 2008 were released in October 2009 and are available for download for both 32-bit and 64-bit platforms.[\[12\]][53]

Windows 10 shipped a testing framework for PowerShell.[\[13\]][54]

On 18 August 2016, Microsoft announced[\[14\]][55] that they had made PowerShell open-source and cross-platform with support for Windows, [OS X][56], [CentOS][57] and [Ubuntu][58].[\[3\]][11] The source code was published on [GitHub][59]. [\[15\]][60] The move to open source created a second incarnation of PowerShell called "PowerShell Core", which runs on [.NET Core][61]. It is distinct from "Windows PowerShell", which runs on the full [.NET Framework][4].[\[16\]][62] PowerShell Core will be shipped with [Windows Server 2016 Nano Server][63].[\[17\]][64]

## Design

PowerShell's developers based the core grammar of the tool on that of [POSIX 1003.2][65].[\[18\]][66]

Windows PowerShell can execute four kinds of named commands:[\[19\]][67]

If a command is a standalone executable program, `PowerShell.exe` launches it in a separate [process][68]; if it is a cmdlet, it executes in the PowerShell process. PowerShell provides an interactive [command-line interface][1], wherein the commands can be entered and their output displayed. The user interface, based on the [Win32 console][69], offers customizable [tab completion][70]. PowerShell enables the creation of _[aliases][71]_ for cmdlets, which PowerShell textually translates into invocations of the original commands. PowerShell supports both [named][72] and positional [parameters][73] for commands. In executing a cmdlet, the job of binding the argument value to the parameter is done by PowerShell itself, but for external executables, arguments are parsed by the external executable independently of PowerShell interpretation.\[_[citation needed][74]_\]

The PowerShell _Extended Type System_ (_ETS_) is based on the .NET type system, but with extended semantics (for example, propertySets and third-party extensibility). For example, it enables the creation of different views of objects by exposing only a subset of the data fields, properties, and methods, as well as specifying custom formatting and sorting behavior. These views are mapped to the original object using [XML][75]-based configuration files.[\[20\]][76]

## Cmdlets

Cmdlets are specialized commands in the PowerShell environment that implement specific functions. These are the native commands in the PowerShell stack. Cmdlets follow a _Verb_-_Noun_ naming pattern, such as _Get-ChildItem_, helping to make them self-descriptive.[\[21\]][77] Cmdlets output their results as objects or as collections thereof (including arrays), and can optionally receive input in that form, making them suitable for use as recipients in a pipeline. But whereas PowerShell allows arrays and other collections of objects to be written to the pipeline, cmdlets always process objects individually. For collections of objects, PowerShell invokes the cmdlet on each object in the collection, in sequence.[\[21\]][77]

Cmdlets are specialized .NET [classes][78], which the PowerShell runtime instantiates and invokes at run-time. Cmdlets derive either from `Cmdlet` or from `PSCmdlet`, the latter being used when the cmdlet needs to interact with the PowerShell runtime.[\[21\]][77] These base classes specify certain methods - `BeginProcessing()`, `ProcessRecord()` and `EndProcessing()` -- which the cmdlet's implementation overrides to provide the functionality. Whenever a cmdlet runs, PowerShell invokes these methods in sequence, with `ProcessRecord()` being called if it receives pipeline input.[\[22\]][79] If a collection of objects is piped, the method is invoked for each object in the collection. The class implementing the Cmdlet must have one .NET [attribute][80] - `CmdletAttribute` -- which specifies the verb and the noun that make up the name of the cmdlet. Common verbs are provided as an [enum][81].\>[\[23\]][82][\[24\]][83]

If a cmdlet receives either pipeline input or command-line parameter input, there must be a corresponding [property][84] in the class, with a [mutator][85] implementation. PowerShell invokes the mutator with the parameter value or pipeline input, which is saved by the mutator implementation in class variables. These values are then referred to by the methods which implement the functionality. Properties that map to command-line parameters are marked by `ParameterAttribute`[\[25\]][86] and are set before the call to `BeginProcessing()`. Those which map to pipeline input are also flanked by `ParameterAttribute`, but with the `ValueFromPipeline` attribute parameter set.[\[26\]][87]

The implementation of these cmdlet classes can refer to any [.NET][4] [API][17] and may be in any [.NET language][88]. In addition, PowerShell makes certain APIs available, such as `WriteObject()`, which is used to access PowerShell-specific functionality, such as writing resultant objects to the pipeline. Cmdlets can use .NET data access [APIs][17] directly or use the PowerShell infrastructure of PowerShell _Providers_, which make data stores addressable using unique [paths][89]. Data stores are exposed using drive letters, and hierarchies within them, addressed as directories. Windows PowerShell ships with providers for the [file system][15], [registry][16], the [certificate][90] store, as well as the namespaces for command aliases, variables, and functions.[\[27\]][91] Windows PowerShell also includes various cmdlets for managing various [Windows][27] systems, including the [file system][15], or using [Windows Management Instrumentation][6] to control [Windows components][92]. Other applications can register cmdlets with PowerShell, thus allowing it to manage them, and, if they enclose any datastore (such as databases), they can add specific providers as well.\[_[citation needed][74]_\]

PowerShell V2 added a more portable version of Cmdlets called Modules. The PowerShell V2 release notes state:

"Modules allow script developers and administrators to partition and organize their Windows PowerShell code in self-contained, reusable units. Code from a module executes in its own self-contained context and does not affect the state outside of the module. Modules also enable you to define a restricted runspace environment by using a script."\[_[citation needed][74]_\]

## Pipeline

PowerShell implements the concept of a _pipeline_, which enables piping the output of one cmdlet to another cmdlet as input. For example, the output of the Get-Process cmdlet could be piped to the Where-Object to filter any process that has less than 1 MB of paged memory, and then to the Sort-Object cmdlet (e.g., to sort the objects by handle count), and then finally to the Select-Object cmdlet to select just the first 10 (i.e., the 10 processes based on handle count).\[_[citation needed][74]_\]

As with [Unix pipelines][93], PowerShell pipelines can construct complex commands, using the `|` operator to connect stages. However, the PowerShell pipeline differs from Unix pipelines in that stages execute within the PowerShell runtime rather than as a set of processes coordinated by the operating system, and structured .NET objects, rather than [byte streams][94], are passed from one stage to the next. Using [objects][95] and executing stages within the PowerShell runtime eliminates the need to [serialize][96] data structures, or to extract them by explicitly [parsing][97] text output.[\[28\]][98] An object can also encapsulate certain functions that work on the contained data, which become available to the recipient command for use.[\[29\]][99][\[30\]][100] For the last cmdlet in a pipeline, PowerShell automatically pipes its output object to the `Out-Default` cmdlet, which transforms the objects into a stream of format objects and then renders those to the screen.[\[31\]][101][\[32\]][102]

Because all PowerShell objects are .NET objects, they share a `.ToString()` method, which retrieves the text representation of the data in an object. In addition, PowerShell allows formatting definitions to be specified, so the text representation of objects can be customized by choosing which data elements to display, and in what manner. However, in order to maintain backwards compatibility, if an external executable is used in a pipeline, it receives a text stream representing the object, instead of directly integrating with the PowerShell type system.[\[33\]][103][\[34\]][104][\[35\]][105]

## Scripting

Windows PowerShell includes a [dynamically typed][106] [scripting language][3] which can implement complex operations using cmdlets [imperatively][107]. The scripting language supports variables, functions, branching (`[if-then-else][108]`), loops (`[while][109]`, `[do][110]`, `[for][111]`, and `[foreach][112]`), structured error/exception handling and [closures][113]/[lambda expressions][114],[\[36\]][115] as well as integration with .NET. Variables in PowerShell scripts are prefixed with `$`. Variables can be assigned any value, including the output of cmdlets. Strings can be enclosed either in single quotes or in double quotes: when using double quotes, variables will be expanded even if they are inside the quotation marks. Enclosing the path to a file in braces preceded by a dollar sign (as in `${C:\foo.txt}`) creates a reference to the contents of the file. If it is used as an [L-value][116], anything assigned to it will be written to the file. When used as an [R-value][116], the contents of the file will be read. If an object is assigned, it is serialized before being stored.\[_[citation needed][74]_\]

Object members can be accessed using `.` notation, as in C\# syntax. PowerShell provides special variables, such as `$args`, which is an array of all the command line arguments passed to a function from the command line, and `$_`, which refers to the current object in the pipeline.[\[37\]][117] PowerShell also provides [arrays][118] and [associative arrays][119]. The PowerShell scripting language also evaluates arithmetic expressions entered on the command line immediately, and it parses common abbreviations, such as GB, MB, and KB.[\[38\]][120][\[39\]][121]

Using the `function` keyword, PowerShell provides for the creation of functions, the following general form:[\[40\]][122]

The defined function is invoked in either of the following forms:[\[40\]][122]

PowerShell supports named parameters, positional parameters, switch parameters and dynamic parameters.[\[40\]][122]

PowerShell allows any .NET methods to be called by providing their namespaces enclosed in brackets (`[]`), and then using a pair of colons (`::`) to indicate the static method.[\[41\]][123] For example, `[System.Console]::WriteLine("PowerShell")`. Objects are created using the `New-Object` cmdlet. Calling methods of .NET objects is accomplished by using the regular `.` notation.[\[41\]][123]

PowerShell scripting language accepts [strings][124], both raw and [escaped][125]. A string enclosed between single [quotation marks][126] is a raw string while a string enclosed between double quotation marks is an escaped string. PowerShell treats straight and curly quotes as equivalent.[\[42\]][127]

For error handling, PowerShell provides a .NET-based [exception-handling][128] mechanism. In case of errors, objects containing information about the error (`Exception` object) are thrown, which are caught using the `try ... catch` construct (although a `trap` construct is supported as well). However, the action-or-error is configurable; in case of an error, PowerShell can be configured to silently resume execution, without actually throwing the exception.[\[43\]][129]

Scripts written using PowerShell can be made to persist across sessions in either a `.ps1` file or a `.psm1` file (the latter is used to implement a module). Later, either the entire script or individual functions in the script can be used. Scripts and functions operate analogously with cmdlets, in that they can be used as commands in pipelines, and parameters can be bound to them. Pipeline objects can be passed between functions, scripts, and cmdlets seamlessly. To prevent unintentional running of scripts, script execution is disabled by default and must be enabled explicitly.[\[44\]][130] Enabling of scripts can be performed either at system, user or session level. PowerShell scripts can be [signed][131] to verify their integrity, and are subject to [Code Access Security][132].[\[45\]][133]

The PowerShell scripting language supports [binary prefix][134] notation similar to the [scientific notation][135] supported by many programming languages in the C-family.[\[46\]][136]\[_[better source needed][137]_\]

## Hosting

One can also use PowerShell embedded in a management application, which uses the PowerShell runtime to implement the management functionality. For this, PowerShell provides a [managed][138] hosting [API][17]. Via the APIs, the application can instantiate a _runspace_ (one instantiation of the PowerShell runtime), which runs in the application's [process][68] and is exposed as a `Runspace` object.[\[4\]][13] The state of the runspace is encased in a `SessionState` object. When the runspace is created, the Windows PowerShell runtime initializes the instantiation, including initializing the providers and enumerating the cmdlets, and updates the `SessionState` object accordingly. The Runspace then must be opened for either synchronous processing or asynchronous processing. After that it can be used to execute commands.\[_[citation needed][74]_\]

To execute a command, a pipeline (represented by a `Pipeline` object) must be created and associated with the runspace. The pipeline object is then populated with the cmdlets that make up the pipeline. For sequential operations (as in a PowerShell script), a Pipeline object is created for each statement and nested inside another Pipeline object.[\[4\]][13] When a pipeline is created, Windows PowerShell invokes the pipeline processor, which resolves the cmdlets into their respective [assemblies][139] (the _command processor_) and adds a reference to them to the pipeline, and associates them with `InputPipe`, `Outputpipe` and `ErrorOutputPipe` objects, to represent the connection with the pipeline. The types are verified and parameters bound using [reflection][140].[\[4\]][13] Once the pipeline is set up, the host calls the `Invoke()` method to run the commands, or its asynchronous equivalent - `InvokeAsync()`. If the pipeline has the `Write-Host` cmdlet at the end of the pipeline, it writes the result onto the console screen. If not, the results are handed over to the host, which might either apply further processing or display the output itself.\[_[citation needed][74]_\]

[Microsoft Exchange Server][19] 2007 uses the hosting APIs to provide its management GUI. Each operation exposed in the GUI is mapped to a sequence of PowerShell commands (or pipelines). The host creates the pipeline and executes them. In fact, the interactive PowerShell console itself is a PowerShell host, which [interprets][141] the scripts entered at command line and creates the necessary `Pipeline` objects and invokes them.\[_[citation needed][74]_\]

## Desired State Configuration

DSC allows for declaratively specifying how a software environment should be configured.[\[47\]][142]

Upon running a _configuration_, DSC will ensure that the system gets the state described in the configuration. DSC configurations are idempotent. The _Local Configuration Manager_ (LCM) periodically polls the system using the control flow described by _resources_ (imperative pieces of DSC) to make sure that the state of a configuration is maintained.

## Versions

Initially using the code name "Monad", PowerShell was first shown publicly at the Professional Developers Conference in September 2003\. All major releases are still supported, and each major release has featured backwards compatibility with preceding versions.

## PowerShell 1.0

PowerShell 1.0 was released in November 2006 for [Windows XP SP2][143], [Windows Server 2003][37] and [Windows Vista][144]. It is an optional component of [Windows Server 2008][145].[\[48\]][146]

## PowerShell 2.0

PowerShell 2.0 is integrated with [Windows 7][147] and [Windows Server 2008 R2][148][\[49\]][149] and is released for [Windows XP][150] with Service Pack 3, [Windows Server 2003][37] with Service Pack 2, and [Windows Vista][144] with Service Pack 1\.[\[50\]][151][\[51\]][152]

PowerShell V2 includes changes to the scripting language and hosting API, in addition to including more than 240 new cmdlets.[\[52\]][153][\[53\]][154]

New features of PowerShell 2.0 include:[\[54\]][155][\[55\]][156][\[56\]][157]

## PowerShell 3.0

PowerShell 3.0 is integrated with [Windows 8][158] and with [Windows Server 2012][159]. Microsoft has also made PowerShell 3.0 available for [Windows 7][147] with Service Pack 1, for [Windows Server 2008][145] with Service Pack 1, and for [Windows Server 2008 R2][148] with Service Pack 1\.[\[60\]][160][\[61\]][161]

PowerShell 3.0 is part of a larger package, Windows Management Framework 3.0 (WMF3), which also contains the WinRM service to support remoting.[\[61\]][161] Microsoft made several [Community Technology Preview][52] releases of WMF3\. An early community technology preview 2 (CTP 2) version of Windows Management Framework 3.0 was released on 2 December 2011\.[\[62\]][162] Since then, updated versions have been shipped in the Windows 8 and Server 2012 [beta][163] and [release candidate][164] versions.\[_[citation needed][74]_\]

New features in PowerShell 3.0 include:[\[61\]][161][\[63\]][165]:33--34

## PowerShell 4.0

PowerShell 4.0 is integrated with [Windows 8.1][166] and with [Windows Server 2012 R2][167]. Microsoft has also made PowerShell 4.0 available for [Windows 7 SP1][168], [Windows Server 2008 R2][148] SP1 and [Windows Server 2012][159].[\[64\]][169]

New features in PowerShell 4.0 include:

## PowerShell 5.0

Windows Management Framework (WMF) 5.0 RTM which includes PowerShell 5.0 was re-released to web on February 24, 2016, following an initial release with a severe bug.[\[68\]][170] Key features include OneGet PowerShell cmdlets to support [Chocolatey][171]'s repository-based [package management][172][\[69\]][173] and extending support for switch management to [layer 2][174] network switches.[\[70\]][175]

New features in PowerShell 5.0 include:

PowerShell 5.1 was released on August 2, 2016, in the [Windows 10 Anniversary Update][176].[\[71\]][177] PackageManagement now supports proxies, PSReadLine now has ViMode support, and two new cmdlets were added: Get-TimeZone and Set-TimeZone. The LocalAccounts module allows for adding/removing local user accounts.[\[72\]][178]

## Comparison of cmdlets with similar commands

The following table contains a selection of the cmdlets that ship with PowerShell, noting similar commands in other well-known command-line interpreters. Many of these similar commands come out-of-the-box defined as aliases within PowerShell, making it easy for people familiar with other common shells to start working.

**Notes**

## File extensions

## Application support

## Snap-ins and hosts

## Alternative implementation

A project named _Pash_ (the name is a pun on the well-known "[bash][179]" Unix shell[\[97\]][180]) has been an [open source][181] and [cross-platform][10] re-implementation of PowerShell via the [Mono framework][182]. Pash was created by Igor Moochnick, written in [C\#][183] and was released under the [GNU General Public License][184]. Pash development stalled in 2008, but was restarted in 2012\.[\[97\]][180][\[98\]][185]

## See also

## References

## Further reading

## External links

[0]: /wiki/Microsoft "Microsoft"
[1]: /wiki/Command-line_interface "Command-line interface"
[2]: /wiki/Shell_(computing) "Shell (computing)"
[3]: /wiki/Scripting_language "Scripting language"
[4]: /wiki/.NET_Framework ".NET Framework"
[5]: /wiki/Component_Object_Model "Component Object Model"
[6]: /wiki/Windows_Management_Instrumentation "Windows Management Instrumentation"
[7]: /wiki/WS-Management "WS-Management"
[8]: /wiki/Common_Information_Model_(computing) "Common Information Model (computing)"
[9]: /wiki/Open-source_software "Open-source software"
[10]: /wiki/Cross-platform "Cross-platform"
[11]: #cite_note-ars-opensource-3
[12]: /wiki/Class_(computer_science) "Class (computer science)"
[13]: #cite_note-how-4
[14]: #cite_note-MSDN-5
[15]: /wiki/File_system "File system"
[16]: /wiki/Windows_Registry "Windows Registry"
[17]: /wiki/API "API"
[18]: /wiki/Graphical_user_interface "Graphical user interface"
[19]: /wiki/Microsoft_Exchange_Server "Microsoft Exchange Server"
[20]: /wiki/Graphical_User_Interface "Graphical User Interface"
[21]: #cite_note-lowe2007-6
[22]: /wiki/Microsoft_SQL_Server_2008 "Microsoft SQL Server 2008"
[23]: #cite_note-snover2007b-7
[24]: /wiki/Manual_page_(Unix) "Manual page (Unix)"
[25]: /wiki/Unix_shell "Unix shell"
[26]: /wiki/Microsoft_DOS "Microsoft DOS"
[27]: /wiki/Microsoft_Windows "Microsoft Windows"
[28]: /wiki/Personal_computer "Personal computer"
[29]: /wiki/COMMAND.COM "COMMAND.COM"
[30]: /wiki/MS-DOS "MS-DOS"
[31]: /wiki/Windows_9x "Windows 9x"
[32]: /wiki/Command_Prompt_(Windows) "Command Prompt (Windows)"
[33]: /wiki/Windows_NT "Windows NT"
[34]: /wiki/Command_line_interpreter "Command line interpreter"
[35]: /wiki/Console_application "Console application"
[36]: /wiki/Batch_files "Batch files"
[37]: /wiki/Windows_Server_2003 "Windows Server 2003"
[38]: #cite_note-pcmag-server2003-8
[39]: /wiki/Windows_Script_Host "Windows Script Host"
[40]: /wiki/Windows_98 "Windows 98"
[41]: /wiki/Active_Script "Active Script"
[42]: /wiki/JScript "JScript"
[43]: /wiki/VBScript "VBScript"
[44]: /wiki/Vulnerability_(computer_science) "Vulnerability (computer science)"
[45]: /wiki/Computer_viruses "Computer viruses"
[46]: /wiki/Netsh "Netsh"
[47]: /wiki/Windows_Management_Instrumentation_Command-line "Windows Management Instrumentation Command-line"
[48]: #cite_note-MonadManifesto-9
[49]: /wiki/Development_stage#Beta "Development stage"
[50]: #cite_note-monad-renamed-10
[51]: #cite_note-powershell-vista-11
[52]: /wiki/Community_Technology_Preview "Community Technology Preview"
[53]: #cite_note-PowerShell-V2-RTM-12
[54]: #cite_note-13
[55]: #cite_note-14
[56]: /wiki/OS_X "OS X"
[57]: /wiki/CentOS "CentOS"
[58]: /wiki/Ubuntu_(operating_system) "Ubuntu (operating system)"
[59]: /wiki/GitHub "GitHub"
[60]: #cite_note-15
[61]: /wiki/.NET_Core ".NET Core"
[62]: #cite_note-16
[63]: /wiki/Windows_Server_2016#Nano_Server "Windows Server 2016"
[64]: #cite_note-17
[65]: /wiki/POSIX_1003.2 "POSIX 1003.2"
[66]: #cite_note-18
[67]: #cite_note-19
[68]: /wiki/Process_(computing) "Process (computing)"
[69]: /wiki/Win32_console "Win32 console"
[70]: /wiki/Command-line_completion "Command-line completion"
[71]: /wiki/Alias_(command) "Alias (command)"
[72]: /wiki/Named_parameter "Named parameter"
[73]: /wiki/Parameter_(computer_science) "Parameter (computer science)"
[74]: /wiki/Wikipedia:Citation_needed "Wikipedia:Citation needed"
[75]: /wiki/XML "XML"
[76]: #cite_note-20
[77]: #cite_note-cmdlets-21
[78]: /wiki/Class_(computing) "Class (computing)"
[79]: #cite_note-firstcmdlet-22
[80]: /wiki/Attribute_(computing) "Attribute (computing)"
[81]: /wiki/Enumerated_type "Enumerated type"
[82]: #cite_note-23
[83]: #cite_note-24
[84]: /wiki/Property_(programming) "Property (programming)"
[85]: /wiki/Mutator_method "Mutator method"
[86]: #cite_note-25
[87]: #cite_note-26
[88]: /wiki/List_of_CLI_languages "List of CLI languages"
[89]: /wiki/Path_(computing) "Path (computing)"
[90]: /wiki/Public_key_certificate "Public key certificate"
[91]: #cite_note-27
[92]: /wiki/List_of_Microsoft_Windows_components "List of Microsoft Windows components"
[93]: /wiki/Pipeline_(Unix) "Pipeline (Unix)"
[94]: /wiki/Bitstream "Bitstream"
[95]: /wiki/Object_(computer_science) "Object (computer science)"
[96]: /wiki/Serialization_(computing) "Serialization (computing)"
[97]: /wiki/Parser "Parser"
[98]: #cite_note-28
[99]: #cite_note-29
[100]: #cite_note-30
[101]: #cite_note-31
[102]: #cite_note-32
[103]: #cite_note-33
[104]: #cite_note-34
[105]: #cite_note-about_Format.ps1xml-35
[106]: /wiki/Dynamically_typed "Dynamically typed"
[107]: /wiki/Imperative_programming "Imperative programming"
[108]: /wiki/Conditional_(programming) "Conditional (programming)"
[109]: /wiki/While_loop "While loop"
[110]: /wiki/Do_while_loop "Do while loop"
[111]: /wiki/For_loop "For loop"
[112]: /wiki/Foreach "Foreach"
[113]: /wiki/Closure_(computer_science) "Closure (computer science)"
[114]: /wiki/Lambda_expressions "Lambda expressions"
[115]: #cite_note-lambda1-36
[116]: /wiki/Value_(computer_science) "Value (computer science)"
[117]: #cite_note-37
[118]: /wiki/Array_data_type "Array data type"
[119]: /wiki/Associative_array "Associative array"
[120]: #cite_note-38
[121]: #cite_note-39
[122]: #cite_note-about_Functions-40
[123]: #cite_note-dotnet-41
[124]: /wiki/String_(computer_science) "String (computer science)"
[125]: /wiki/Escape_character "Escape character"
[126]: /wiki/Quotation_mark "Quotation mark"
[127]: #cite_note-42
[128]: /wiki/Exception_handling_syntax "Exception handling syntax"
[129]: #cite_note-43
[130]: #cite_note-44
[131]: /wiki/Code_signing "Code signing"
[132]: /wiki/Code_Access_Security "Code Access Security"
[133]: #cite_note-45
[134]: /wiki/Binary_prefix "Binary prefix"
[135]: /wiki/Scientific_notation "Scientific notation"
[136]: #cite_note-46
[137]: /wiki/Wikipedia:NOTRS "Wikipedia:NOTRS"
[138]: /wiki/Managed_code "Managed code"
[139]: /wiki/Assembly_(CLI) "Assembly (CLI)"
[140]: /wiki/Reflection_(computer_science) "Reflection (computer science)"
[141]: /wiki/Interpreter "Interpreter"
[142]: #cite_note-47
[143]: /wiki/Windows_XP_SP2 "Windows XP SP2"
[144]: /wiki/Windows_Vista "Windows Vista"
[145]: /wiki/Windows_Server_2008 "Windows Server 2008"
[146]: #cite_note-48
[147]: /wiki/Windows_7 "Windows 7"
[148]: /wiki/Windows_Server_2008_R2 "Windows Server 2008 R2"
[149]: #cite_note-49
[150]: /wiki/Windows_XP "Windows XP"
[151]: #cite_note-50
[152]: #cite_note-51
[153]: #cite_note-52
[154]: #cite_note-53
[155]: #cite_note-54
[156]: #cite_note-55
[157]: #cite_note-56
[158]: /wiki/Windows_8 "Windows 8"
[159]: /wiki/Windows_Server_2012 "Windows Server 2012"
[160]: #cite_note-60
[161]: #cite_note-WMF3-61
[162]: #cite_note-62
[163]: /wiki/Beta_release "Beta release"
[164]: /wiki/Release_candidate "Release candidate"
[165]: #cite_note-63
[166]: /wiki/Windows_8.1 "Windows 8.1"
[167]: /wiki/Windows_Server_2012_R2 "Windows Server 2012 R2"
[168]: /wiki/Windows_7_SP1 "Windows 7 SP1"
[169]: #cite_note-64
[170]: #cite_note-68
[171]: /wiki/Chocolatey_(software_package_manager) "Chocolatey (software package manager)"
[172]: /wiki/Package_management "Package management"
[173]: #cite_note-69
[174]: /wiki/Data_link_layer "Data link layer"
[175]: #cite_note-Snover_2014-04-03-70
[176]: /wiki/Windows_10_Anniversary_Update "Windows 10 Anniversary Update"
[177]: #cite_note-71
[178]: #cite_note-72
[179]: /wiki/Bash_(Unix_shell) "Bash (Unix shell)"
[180]: #cite_note-pash-102
[181]: /wiki/Open_source "Open source"
[182]: /wiki/Mono_(software) "Mono (software)"
[183]: /wiki/C_Sharp_(programming_language) "C Sharp (programming language)"
[184]: /wiki/GNU_General_Public_License "GNU General Public License"
[185]: #cite_note-pash_project-103