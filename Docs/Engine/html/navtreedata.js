/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Crimson Engine", "index.html", [
    [ "Vulkan ECS Game Engine Prototype", "index.html", "index" ],
    [ "Skeletal Animation &amp; Skinning Subsystem", "md_docs_2animation__system.html", [
      [ "1. Linear Blend Skinning (LBS) Math", "md_docs_2animation__system.html#autotoc_md21", [
        [ "Mathematical Formulation", "md_docs_2animation__system.html#autotoc_md22", null ]
      ] ],
      [ "2. Keyframe Interpolation", "md_docs_2animation__system.html#autotoc_md24", [
        [ "Translation &amp; Scale: Linear Interpolation (LERP)", "md_docs_2animation__system.html#autotoc_md25", null ],
        [ "Rotation: Spherical Linear Interpolation (SLERP)", "md_docs_2animation__system.html#autotoc_md26", null ]
      ] ],
      [ "3. Forward Kinematics (FK) Hierarchy", "md_docs_2animation__system.html#autotoc_md28", [
        [ "Local-to-Global Updates", "md_docs_2animation__system.html#autotoc_md29", null ]
      ] ],
      [ "4. Vulkan Shader Integration", "md_docs_2animation__system.html#autotoc_md31", [
        [ "Input Bindings", "md_docs_2animation__system.html#autotoc_md32", null ],
        [ "Uniform Layout (Set 2)", "md_docs_2animation__system.html#autotoc_md33", null ]
      ] ],
      [ "5. Locomotion State Machines, 1D &amp; 2D Blend Trees", "md_docs_2animation__system.html#autotoc_md35", [
        [ "Locomotion State Machine", "md_docs_2animation__system.html#autotoc_md36", null ],
        [ "1D Blend Trees", "md_docs_2animation__system.html#autotoc_md37", null ],
        [ "2D Freeform Cartesian Blend Trees", "md_docs_2animation__system.html#autotoc_md38", null ],
        [ "Automatic Player Locomotion Binding", "md_docs_2animation__system.html#autotoc_md39", null ],
        [ "Visual Editing &amp; Tooling Integration", "md_docs_2animation__system.html#autotoc_md40", null ]
      ] ],
      [ "6. Inverse Kinematics (IK) Solvers", "md_docs_2animation__system.html#autotoc_md42", [
        [ "2-Bone Analytical Solver (Law of Cosines)", "md_docs_2animation__system.html#autotoc_md43", null ],
        [ "Multi-Joint Iterative FABRIK Solver", "md_docs_2animation__system.html#autotoc_md44", null ]
      ] ],
      [ "7. Entity Transform Hierarchy &amp; Skeletal Sharing", "md_docs_2animation__system.html#autotoc_md46", [
        [ "Multi-Mesh Splitting", "md_docs_2animation__system.html#autotoc_md47", null ],
        [ "Skeletal Sharing", "md_docs_2animation__system.html#autotoc_md48", null ],
        [ "Recursive Deletion", "md_docs_2animation__system.html#autotoc_md49", null ]
      ] ],
      [ "8. Fast Binary Animation Pipeline (.anim)", "md_docs_2animation__system.html#autotoc_md51", [
        [ "Binary File Layout (.anim)", "md_docs_2animation__system.html#autotoc_md52", null ]
      ] ],
      [ "9. Direct FBX Binary File Loading (ufbx)", "md_docs_2animation__system.html#autotoc_md54", [
        [ "Geometry Import", "md_docs_2animation__system.html#autotoc_md55", null ],
        [ "Animation Evaluation &amp; Baking", "md_docs_2animation__system.html#autotoc_md56", null ]
      ] ],
      [ "10. Drag-and-Drop Editor Mapping &amp; Append Loading", "md_docs_2animation__system.html#autotoc_md58", null ],
      [ "Case Study &amp; Engineering Post-Mortem", "md_docs_2animation__system.html#autotoc_md60", null ]
    ] ],
    [ "Animator Controller Editor", "md_docs_2animator__controller__editor.html", [
      [ "1. Overview &amp; Core Purpose", "md_docs_2animator__controller__editor.html#autotoc_md63", null ],
      [ "2. Component Architecture &amp; Data Model", "md_docs_2animator__controller__editor.html#autotoc_md65", [
        [ "1. <span class=\"tt\">AnimatorComponent</span>", "md_docs_2animator__controller__editor.html#autotoc_md66", null ],
        [ "2. <span class=\"tt\">AnimationControllerComponent</span>", "md_docs_2animator__controller__editor.html#autotoc_md67", null ]
      ] ],
      [ "3. Visual State Nodes", "md_docs_2animator__controller__editor.html#autotoc_md69", null ],
      [ "4. Parameter Management (Left Panel)", "md_docs_2animator__controller__editor.html#autotoc_md71", null ],
      [ "5. State Properties &amp; Blend Tree Editor (Detail Panel)", "md_docs_2animator__controller__editor.html#autotoc_md73", [
        [ "Standard State Properties", "md_docs_2animator__controller__editor.html#autotoc_md74", null ],
        [ "1D &amp; 2D Blend Tree Editor", "md_docs_2animator__controller__editor.html#autotoc_md75", null ]
      ] ],
      [ "6. Transitions &amp; Condition Rules", "md_docs_2animator__controller__editor.html#autotoc_md77", [
        [ "Transition Properties (in Detail Panel)", "md_docs_2animator__controller__editor.html#autotoc_md78", null ]
      ] ],
      [ "7. Real-Time ECS Synchronization", "md_docs_2animator__controller__editor.html#autotoc_md80", null ]
    ] ],
    [ "Engine Architecture", "md_docs_2architecture.html", [
      [ "System Design Overview", "md_docs_2architecture.html#autotoc_md82", [
        [ "Architectural Layers", "md_docs_2architecture.html#autotoc_md83", null ]
      ] ],
      [ "Frame Lifecycle &amp; Execution Flow", "md_docs_2architecture.html#autotoc_md85", [
        [ "Core Loop Structure (<span class=\"tt\">Application::run()</span>)", "md_docs_2architecture.html#autotoc_md86", null ],
        [ "Detailed Loop Phases", "md_docs_2architecture.html#autotoc_md87", null ]
      ] ],
      [ "Data-Driven Scenes &amp; Standalone Configuration", "md_docs_2architecture.html#autotoc_md89", null ],
      [ "Asset Pipeline &amp; Resource Caching", "md_docs_2architecture.html#autotoc_md91", null ],
      [ "Architectural Trade-Offs", "md_docs_2architecture.html#autotoc_md93", [
        [ "Single-Threaded Main Loop &amp; Job System", "md_docs_2architecture.html#autotoc_md94", null ],
        [ "Decoupled Scene / Engine Splitting", "md_docs_2architecture.html#autotoc_md95", null ]
      ] ]
    ] ],
    [ "Custom Entity-Component System (ECS)", "md_docs_2ecs__system.html", [
      [ "Entity Allocation &amp; Recycling", "md_docs_2ecs__system.html#autotoc_md98", null ],
      [ "ComponentStorage &amp; The Swap-Remove Pattern", "md_docs_2ecs__system.html#autotoc_md100", [
        [ "The Swap-Remove Mechanics", "md_docs_2ecs__system.html#autotoc_md101", null ]
      ] ],
      [ "Event Subscriptions", "md_docs_2ecs__system.html#autotoc_md103", null ],
      [ "Compile-Time Multi-Component Views", "md_docs_2ecs__system.html#autotoc_md105", [
        [ "Optimization: Smallest Pool Heuristic", "md_docs_2ecs__system.html#autotoc_md106", null ],
        [ "Iterator Structured Binding Support", "md_docs_2ecs__system.html#autotoc_md107", null ]
      ] ],
      [ "Structure of Arrays (SoA) Optimizations", "md_docs_2ecs__system.html#autotoc_md109", [
        [ "CPU Cache Line Visual Comparison", "md_docs_2ecs__system.html#autotoc_md110", null ],
        [ "Benefits of SoA in the Engine", "md_docs_2ecs__system.html#autotoc_md111", null ]
      ] ],
      [ "Example Usage Code (Registry &amp; Views)", "md_docs_2ecs__system.html#autotoc_md113", null ]
    ] ],
    [ "Editor UI &amp; Raycast Picking", "md_docs_2editor__ui.html", [
      [ "ImGui &amp; ImGuizmo Integration", "md_docs_2editor__ui.html#autotoc_md116", null ],
      [ "Editor Panels &amp; Controls", "md_docs_2editor__ui.html#autotoc_md118", null ],
      [ "Specialized Editor Windows", "md_docs_2editor__ui.html#autotoc_md120", [
        [ "1. Animation Editor Window (<span class=\"tt\">Window -&gt; Animation Editor</span>)", "md_docs_2editor__ui.html#autotoc_md121", null ],
        [ "2. Animator Controller Editor Window (<span class=\"tt\">Window -&gt; Animator Controller</span>)", "md_docs_2editor__ui.html#autotoc_md122", null ],
        [ "3. Node Graph Demo Window (<span class=\"tt\">Window -&gt; Node Graph Demo</span>)", "md_docs_2editor__ui.html#autotoc_md123", null ]
      ] ],
      [ "Viewport Gizmos (ImGuizmo)", "md_docs_2editor__ui.html#autotoc_md125", null ],
      [ "Viewport Viewport Raycast Picking Math", "md_docs_2editor__ui.html#autotoc_md127", [
        [ "Step-by-Step Projection Pipeline", "md_docs_2editor__ui.html#autotoc_md128", [
          [ "Step 1: Normalized Device Coordinates (NDC)", "md_docs_2editor__ui.html#autotoc_md129", null ],
          [ "Step 2: Unprojecting Clip Space Points", "md_docs_2editor__ui.html#autotoc_md130", null ],
          [ "Step 3: Perspective Division", "md_docs_2editor__ui.html#autotoc_md131", null ],
          [ "Step 4: Construct Ray", "md_docs_2editor__ui.html#autotoc_md132", null ],
          [ "Step 5: Ray-Sphere Intersection Test", "md_docs_2editor__ui.html#autotoc_md133", null ]
        ] ]
      ] ],
      [ "C++ Viewport Picking Implementation", "md_docs_2editor__ui.html#autotoc_md135", null ],
      [ "ImGui Viewport Coordinates Note", "md_docs_2editor__ui.html#autotoc_md137", null ],
      [ "Scene Serialization", "md_docs_2editor__ui.html#autotoc_md139", [
        [ "Saving Scene File", "md_docs_2editor__ui.html#autotoc_md140", null ],
        [ "Loading Scene File", "md_docs_2editor__ui.html#autotoc_md141", null ]
      ] ]
    ] ],
    [ "Multi-Threaded Job System", "md_docs_2job__system.html", [
      [ "Architecture Overview", "md_docs_2job__system.html#autotoc_md144", null ],
      [ "Execution Interface", "md_docs_2job__system.html#autotoc_md146", [
        [ "1. Initialization &amp; Lifecycle", "md_docs_2job__system.html#autotoc_md147", null ],
        [ "2. Job Submission", "md_docs_2job__system.html#autotoc_md148", null ]
      ] ],
      [ "Parallel For Loop Partitioning", "md_docs_2job__system.html#autotoc_md150", [
        [ "1. Work Chunking", "md_docs_2job__system.html#autotoc_md151", null ]
      ] ],
      [ "Cooperative Spin-Yield Synchronization", "md_docs_2job__system.html#autotoc_md153", [
        [ "The Condition Variable Race Condition (Postmortem)", "md_docs_2job__system.html#autotoc_md154", null ],
        [ "The Lock-Free Yield-Spin Solution", "md_docs_2job__system.html#autotoc_md155", null ]
      ] ]
    ] ],
    [ "Generic Node Graph Framework", "md_docs_2node__graph__framework.html", [
      [ "1. Overview &amp; Architectural Goals", "md_docs_2node__graph__framework.html#autotoc_md158", [
        [ "Core Design Principles", "md_docs_2node__graph__framework.html#autotoc_md159", null ]
      ] ],
      [ "2. Core Data Structures", "md_docs_2node__graph__framework.html#autotoc_md161", [
        [ "NodePinType", "md_docs_2node__graph__framework.html#autotoc_md162", null ],
        [ "NodePin", "md_docs_2node__graph__framework.html#autotoc_md163", null ],
        [ "Node", "md_docs_2node__graph__framework.html#autotoc_md164", null ],
        [ "NodeLink", "md_docs_2node__graph__framework.html#autotoc_md165", null ]
      ] ],
      [ "3. Node Type Registry &amp; Factory System", "md_docs_2node__graph__framework.html#autotoc_md167", [
        [ "Registering a Custom Node Type Example", "md_docs_2node__graph__framework.html#autotoc_md168", null ]
      ] ],
      [ "4. Canvas Rendering Pipeline &amp; Viewport Interaction", "md_docs_2node__graph__framework.html#autotoc_md170", [
        [ "Rendering Layout", "md_docs_2node__graph__framework.html#autotoc_md171", null ],
        [ "Canvas Features", "md_docs_2node__graph__framework.html#autotoc_md172", null ]
      ] ],
      [ "5. Event Callbacks &amp; Lifecycle Integration", "md_docs_2node__graph__framework.html#autotoc_md174", null ],
      [ "6. JSON Serialization", "md_docs_2node__graph__framework.html#autotoc_md176", [
        [ "Export Format (<span class=\"tt\">serialize()</span>)", "md_docs_2node__graph__framework.html#autotoc_md177", null ],
        [ "Import Format (<span class=\"tt\">deserialize()</span>)", "md_docs_2node__graph__framework.html#autotoc_md178", null ]
      ] ],
      [ "7. How to Build a New Node Editor", "md_docs_2node__graph__framework.html#autotoc_md180", null ]
    ] ],
    [ "Postmortem: 3D Physics Solver Stabilization &amp; Contact Resolution", "md_docs_2physics__stabilization__postmortem.html", [
      [ "1. The Perpetual Sliding &amp; Spinning (Phantom Motion)", "md_docs_2physics__stabilization__postmortem.html#autotoc_md183", [
        [ "The Struggle", "md_docs_2physics__stabilization__postmortem.html#autotoc_md184", null ],
        [ "My Discoveries &amp; Analysis", "md_docs_2physics__stabilization__postmortem.html#autotoc_md185", null ],
        [ "The Solution", "md_docs_2physics__stabilization__postmortem.html#autotoc_md186", null ]
      ] ],
      [ "2. Freeze-in-Air (Tilted Sleeping)", "md_docs_2physics__stabilization__postmortem.html#autotoc_md188", [
        [ "The Struggle", "md_docs_2physics__stabilization__postmortem.html#autotoc_md189", null ],
        [ "My Discoveries &amp; Analysis", "md_docs_2physics__stabilization__postmortem.html#autotoc_md190", null ],
        [ "The Solution", "md_docs_2physics__stabilization__postmortem.html#autotoc_md191", null ]
      ] ],
      [ "3. Lateral Skipping and Jittering", "md_docs_2physics__stabilization__postmortem.html#autotoc_md193", [
        [ "The Struggle", "md_docs_2physics__stabilization__postmortem.html#autotoc_md194", null ],
        [ "My Discoveries &amp; Analysis", "md_docs_2physics__stabilization__postmortem.html#autotoc_md195", [
          [ "Bug A: Wide Floor Contact Point Displacement (The Ultimate Jitter Source)", "md_docs_2physics__stabilization__postmortem.html#autotoc_md196", null ],
          [ "Bug B: Normal Drift at Boundaries", "md_docs_2physics__stabilization__postmortem.html#autotoc_md197", null ]
        ] ],
        [ "The Solution", "md_docs_2physics__stabilization__postmortem.html#autotoc_md198", null ]
      ] ],
      [ "4. Viewport Translation Gizmo Drift", "md_docs_2physics__stabilization__postmortem.html#autotoc_md200", [
        [ "The Struggle", "md_docs_2physics__stabilization__postmortem.html#autotoc_md201", null ],
        [ "My Discoveries &amp; Analysis", "md_docs_2physics__stabilization__postmortem.html#autotoc_md202", null ],
        [ "The Solution", "md_docs_2physics__stabilization__postmortem.html#autotoc_md203", null ]
      ] ],
      [ "Conclusion", "md_docs_2physics__stabilization__postmortem.html#autotoc_md205", null ]
    ] ],
    [ "Physics &amp; Collision System", "md_docs_2physics__system.html", [
      [ "Architecture Overview", "md_docs_2physics__system.html#autotoc_md208", null ],
      [ "RigidBody Dynamics", "md_docs_2physics__system.html#autotoc_md210", [
        [ "1. Linear &amp; Angular Integration", "md_docs_2physics__system.html#autotoc_md211", null ]
      ] ],
      [ "Collision Shapes", "md_docs_2physics__system.html#autotoc_md213", null ],
      [ "Collision Detection Algorithms", "md_docs_2physics__system.html#autotoc_md215", [
        [ "1. Sphere-Sphere", "md_docs_2physics__system.html#autotoc_md216", null ],
        [ "2. Sphere-AABB", "md_docs_2physics__system.html#autotoc_md217", null ],
        [ "3. OBB-Sphere", "md_docs_2physics__system.html#autotoc_md218", null ],
        [ "4. OBB-OBB (Separating Axis Theorem)", "md_docs_2physics__system.html#autotoc_md219", null ]
      ] ],
      [ "Contact Point Estimation", "md_docs_2physics__system.html#autotoc_md221", null ],
      [ "Rotational Impulse Resolution", "md_docs_2physics__system.html#autotoc_md223", [
        [ "1. Local &amp; World Moments of Inertia", "md_docs_2physics__system.html#autotoc_md224", null ],
        [ "2. Rotational Impulse Solver", "md_docs_2physics__system.html#autotoc_md225", null ]
      ] ]
    ] ],
    [ "Static Reflection &amp; Serialization Subsystem", "md_docs_2reflection__system.html", [
      [ "1. Why Static Reflection?", "md_docs_2reflection__system.html#autotoc_md228", null ],
      [ "2. Annotation &amp; Syntax", "md_docs_2reflection__system.html#autotoc_md230", [
        [ "Key Annotations", "md_docs_2reflection__system.html#autotoc_md231", null ]
      ] ],
      [ "3. Code Generation Pipeline (<span class=\"tt\">reflection_generator</span>)", "md_docs_2reflection__system.html#autotoc_md233", [
        [ "Execution Flow", "md_docs_2reflection__system.html#autotoc_md234", null ]
      ] ],
      [ "4. Scene Serialization Integration", "md_docs_2reflection__system.html#autotoc_md236", [
        [ "Automatic Field Serialization", "md_docs_2reflection__system.html#autotoc_md237", null ]
      ] ],
      [ "5. Editor UI Property Drawer", "md_docs_2reflection__system.html#autotoc_md239", [
        [ "Dynamic Rendering", "md_docs_2reflection__system.html#autotoc_md240", null ]
      ] ]
    ] ],
    [ "Case Study: Engineering a Skinned Animation System in a Custom Vulkan Engine", "md_docs_2skinned__animation__postmortem.html", [
      [ "The Architecture", "md_docs_2skinned__animation__postmortem.html#autotoc_md243", null ],
      [ "Challenges &amp; Resolutions", "md_docs_2skinned__animation__postmortem.html#autotoc_md245", [
        [ "1. The glTF Buffer Loader Crash (cgltf_load_buffers Failure)", "md_docs_2skinned__animation__postmortem.html#autotoc_md246", null ],
        [ "2. Mesh Collapsing (The Empty Channel Overwrite)", "md_docs_2skinned__animation__postmortem.html#autotoc_md248", null ],
        [ "3. Vulkan UBO Range Constraints (The Crumpled Rig)", "md_docs_2skinned__animation__postmortem.html#autotoc_md250", null ],
        [ "4. Highly Detailed Rig Support (189-Bone Overflow)", "md_docs_2skinned__animation__postmortem.html#autotoc_md252", null ],
        [ "5. Static Animation Playback (Overlapping Joint Channels)", "md_docs_2skinned__animation__postmortem.html#autotoc_md254", null ],
        [ "6. ImGui Widget Collision (Duplicate Node Names)", "md_docs_2skinned__animation__postmortem.html#autotoc_md256", null ],
        [ "7. Save Mirroring (Build Directory Cleanups)", "md_docs_2skinned__animation__postmortem.html#autotoc_md258", null ],
        [ "8. Multi-Mesh Rigid Attachments (Hierarchy Flattening)", "md_docs_2skinned__animation__postmortem.html#autotoc_md260", null ],
        [ "9. FABRIK Bone Splitting (Mismatched Joint Rotations)", "md_docs_2skinned__animation__postmortem.html#autotoc_md262", null ],
        [ "10. ECS Skeletal Sharing (Descriptor Set Overhead)", "md_docs_2skinned__animation__postmortem.html#autotoc_md264", null ]
      ] ],
      [ "Key Takeaways for Portfolio", "md_docs_2skinned__animation__postmortem.html#autotoc_md266", null ]
    ] ],
    [ "Vulkan Rendering Engine", "md_docs_2vulkan__renderer.html", [
      [ "Vulkan Abstraction Layer", "md_docs_2vulkan__renderer.html#autotoc_md269", null ],
      [ "Double-Buffered Frame Synchronization", "md_docs_2vulkan__renderer.html#autotoc_md271", [
        [ "The Render Loop Sync Protocol", "md_docs_2vulkan__renderer.html#autotoc_md272", null ],
        [ "Trade-Off: Double vs Triple Buffering", "md_docs_2vulkan__renderer.html#autotoc_md273", null ]
      ] ],
      [ "Resource Lifetimes &amp; RAII Destruction Sequence", "md_docs_2vulkan__renderer.html#autotoc_md275", null ],
      [ "Shader &amp; Graphics Pipeline Compilation", "md_docs_2vulkan__renderer.html#autotoc_md277", [
        [ "Depth Buffering &amp; Depth Clears", "md_docs_2vulkan__renderer.html#autotoc_md278", null ],
        [ "Descriptor Set Layouts (Camera &amp; Textures)", "md_docs_2vulkan__renderer.html#autotoc_md279", null ]
      ] ],
      [ "Instanced Drawing &amp; Push Constants", "md_docs_2vulkan__renderer.html#autotoc_md281", [
        [ "Per-Instance Data via Push Constants", "md_docs_2vulkan__renderer.html#autotoc_md282", null ],
        [ "The Batch Drawing Loop", "md_docs_2vulkan__renderer.html#autotoc_md283", null ]
      ] ],
      [ "Infinite Grid Rendering", "md_docs_2vulkan__renderer.html#autotoc_md285", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", "globals_type" ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", "globals_defs" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_animation_controller_8hpp.html",
"_rigid_body_8hpp.html#afa062a6a839a5127af1ec7ba30ab4585a84a8921b25f505d0d2077aeb5db4bc16",
"class_engine_1_1_application.html#a3c798c58878941dc1979589ca4488434",
"class_engine_1_1_physics_system.html#af3063a3bcc2fbe4338122c1194524727",
"class_scene_manager.html#a35e3fe6737779e8ba5a0c8364a4df445",
"class_vulkan_renderer.html#a788ec7f418ba71f08522717937ddf014",
"globals_vars_k.html",
"namespace_engine.html#ab8b32182e3646fb3dbebb8b22832c24d",
"struct_engine_1_1_component_reflection.html#ae1ea6c528fe80dad1149ba1013f70059",
"struct_engine_1_1_tileset_asset.html#a22194b45f3b7eca0d9adba74f8fae61a",
"struct_mesh_so_a.html#aa1509dd426edbf382baa0b3e99cbb2c5",
"structufbx__anim__stack.html#a70b7cc3be237840e3b09353d043888eb",
"structufbx__constraint.html#a561047aff2546ffcb3789ba139125fc5",
"structufbx__load__opts.html#afb8e801d494bfd1782c08a16be69ccf5",
"structufbx__metadata.html#a275cc72e3b8fd307f7e9b70eaccd6cfc",
"structufbx__scene.html#a6b7a85804e941a684322108b91ea4fb3",
"structufbx__texture__layer.html#a46ec240252c4f48668f6f51080a8d3c5",
"structufbxi__bit__stream.html#ae63f4734429b87beb21094e9de5f80eb",
"structufbxi__external__file.html",
"structufbxi__shader__mapping__list.html#a8111f473d2a7ba539112ff0469b8d5c4",
"ufbx_8cpp.html#a0a49737969085bfee8117ea69d48e0ef",
"ufbx_8cpp.html#a2bf96289d2a899f7d0ab243d3bde427a",
"ufbx_8cpp.html#a52fb6d380522cb342e2cd4bc734652d6",
"ufbx_8cpp.html#a6c055470d7f0a81dcb45e622612aaeb2",
"ufbx_8cpp.html#a9053a490e04a3e319e09b6ef5a52011c",
"ufbx_8cpp.html#ab5ad0e56942fd81613b525b5df504888afe32b19b7178fd782f699ad54c4e6473",
"ufbx_8cpp.html#ad989dc0b4f6951e8e0fa14c5d6b3455b",
"ufbx_8cpp.html#afd8dcbc94a46828afb33723bc4ce7f02",
"ufbx_8h.html#a38a9f64f5805203f5b4a0816670891d5",
"ufbx_8h.html#a77f56deaf698317b591110847864d877",
"ufbx_8h.html#aaff77235911046b04d1731490792be2c",
"ufbx_8h.html#ae12dbccb1a2a112b9e3146cfca59db97"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';