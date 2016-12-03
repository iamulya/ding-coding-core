**VisSim** is a visual [block diagram][0] language for simulation of [dynamical systems][1] and [model based design][2] of [embedded systems][3]. It is developed by Visual Solutions of [Westford, Massachusetts][4]. It uses a graphical data flow paradigm to implement dynamic systems based on differential equations. Version 8 adds interactive [UML][5] [OMG][6] 2 compliant [state chart graphs][7] that are placed in VisSim diagrams. This allows easy modeling of state based systems like startup sequencing of process plants or serial protocol decoding.

## Applications

VisSim is widely used in [control system][8] design and [digital signal processing][9] for multidomain simulation and design.[\[1\]][10] It includes blocks for arithmetic, Boolean, and [transcendental functions][11], as well as [digital filters][12], [transfer functions][13], [numerical integration][14] and interactive plotting.[\[2\]][15] The most commonly modeled systems are aeronautical, biological/medical, digital power, electric motor, electrical, hydraulic, mechanical, process, thermal/HVAC and econometric.[\[1\]][10]

## Academic use

Accredited educational institutions are allowed to site license VisSim v3.0 at no cost. The latest versions of VisSim and add-ons are also available to students and academic institutions at greatly reduced pricing.[\[2\]][15]

## Distributing VisSim models

A read-only version of the software, [VisSim Viewer][16], is available free of charge and provides a way for people not licensed to use VisSim to run VisSim models.[\[3\]][17] This program is intended to allow models to be more widely shared while preserving the model in its published form.[\[3\]][17] The viewer will execute any VisSim model, and only allows changes to block and simulation parameters to illustrate different design scenarios. Sliders and buttons may be activated if included in the model.

## Code generation

The "VisSim/C-Code" add-on generates [ANSI C][18] code for the model, and generates target specific code for on-chip devices like PWM, ADC, encoder, GPIO, I2C etc. This is useful for development of [embedded systems][3]. After the behavior of the controller has been simulated, C-code can be generated, compiled and run on the target. For debugging, VisSim supports an interactive JTAG linkage, called "Hotlink", that allows interactive gain change and plotting of on-target variables. The VisSim generated code has been called efficient and readable, making it well suited for development of embedded systems.[\[4\]][19] VisSim's author served on the X3J11 ANSI C committee and wrote several C compilers, in addition to co-authoring a book on C.[\[5\]][20] This deep understanding of ANSI C, and the nature of the resulting [machine code][21] when compiled, is the key to the code generator's efficiency. VisSim can target small [16-bit][22] [fixed point][23] systems like the [Texas Instruments][24] [MSP430][25], using only 740 bytes flash and 64 bytes of RAM for a small closed-loop [Pulse-width modulation][26] (PWM) actuated system, as well as allowing very high control sample rates over 500 kHz on larger [32-bit][27] [floating point processors][28] like the [Texas Instruments][24] 150 MHz F28335\.

## Use of model-based development

The technique of simulating system performance off-line, and then generating code from the simulation is known as "model-based development". Model-based development for [embedded systems][29] is becoming widely adopted for production systems because it shortens development cycles for hardware development in the same way that [Model-driven architecture][30] shortens production cycles for software development.[\[6\]][31]

[Model building][32] is a visual way of describing a situation. In an engineering context, instead of writing and solving a [system of equations][33], model building involves using visual "blocks" to solve the problem. The advantage of using models is that in some cases problems which appear difficult if expressed mathematically may be easier to understand when represented pictorially.

VisSim uses a hierarchical composition to create nested block diagrams. A typical model would consist of "virtual plants" composed of various VisSim "layers", combined if necessary with custom blocks written in C or FORTRAN. A virtual controller can be added and tuned to give desired overall system response. [Graphical control element][34] such as sliders and buttons allow control of [what-if analysis][35] for operator training or controller tuning.

Although VisSim was originally designed for use by [control engineers][36], it can be used for any type of mathematical model. An example is work done by [Steve Keen][37], an economist.[\[7\]][38]

## Optional features

## See also

## References

## External links

[0]: /wiki/Block_diagram "Block diagram"
[1]: /wiki/Dynamical_system "Dynamical system"
[2]: /wiki/Model_based_design "Model based design"
[3]: /wiki/Embedded_systems "Embedded systems"
[4]: /wiki/Westford,_Massachusetts "Westford, Massachusetts"
[5]: /wiki/UML_state_machine "UML state machine"
[6]: /wiki/Object_Management_Group "Object Management Group"
[7]: /wiki/State_diagram "State diagram"
[8]: /wiki/Control_system "Control system"
[9]: /wiki/Digital_signal_processing "Digital signal processing"
[10]: #cite_note-References-1
[11]: /wiki/Transcendental_function "Transcendental function"
[12]: /wiki/Digital_filter "Digital filter"
[13]: /wiki/Transfer_function "Transfer function"
[14]: /wiki/Numerical_integration "Numerical integration"
[15]: #cite_note-userguide-2
[16]: http://www.vissim.com/downloads/demos.html
[17]: #cite_note-Viewer-3
[18]: /wiki/ANSI_C "ANSI C"
[19]: #cite_note-4
[20]: #cite_note-5
[21]: /wiki/Machine_code "Machine code"
[22]: /wiki/16-bit "16-bit"
[23]: /wiki/Fixed-point_arithmetic "Fixed-point arithmetic"
[24]: /wiki/Texas_Instruments "Texas Instruments"
[25]: /wiki/MSP430 "MSP430"
[26]: /wiki/Pulse-width_modulation "Pulse-width modulation"
[27]: /wiki/32-bit "32-bit"
[28]: /wiki/Floating_point_processor "Floating point processor"
[29]: /wiki/Embedded_system "Embedded system"
[30]: /wiki/Model-driven_architecture "Model-driven architecture"
[31]: #cite_note-6
[32]: /wiki/Model_building "Model building"
[33]: /wiki/System_of_equations "System of equations"
[34]: /wiki/Graphical_control_element_(software) "Graphical control element (software)"
[35]: /wiki/What-if_analysis "What-if analysis"
[36]: /wiki/Control_engineer "Control engineer"
[37]: /wiki/Steve_Keen "Steve Keen"
[38]: #cite_note-7