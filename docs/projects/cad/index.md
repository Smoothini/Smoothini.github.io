---
title: CAD projects
nav_order: 3
layout: page
parent: Projects
has_children: true
---

# CAD Projects
---
## 💾 SW Side
When it comes to printing 3D designs, you will need a slicer. I'm using [Cura](https://ultimaker.com/software/ultimaker-cura/), and for designs, well that's a whole thing of it's own.

You can find a lot of designs ready to print on a whole lot of websites, to name a few:
- [Thingiverse](https://www.thingiverse.com/)
- ???
- idk i mainly use thingieverse

If you can't find a suitable design, you can make your own with one of the many readily available CAD softwares. Among the ones I tried, these would be my notable mentions:
- [**OpenSCAD**](https://openscad.org/): Hands down my absolute favorite (as of now) for creating parametric designs!
- [**TinkerCAD**](https://www.tinkercad.com/): Used a few times, but mainly when it comes to combining different STL's.
- **Slic3r**: Good tool for splitting large models that don't fit on your build plate, albeit might be outdated.
- **Fusion360**/**FreeCAD**: Not really my cup of tea, way too many options and buttons, OpenSCAD had a much quicker learning curve. Fusion is kinda messy with the whole "cloud only" saves deal, and FreeCAD seems to bug out every now and then. I haven't used em that much other than a few kitchen tools but maybe one day!

---
## 🛠 HW Equipment
Ender 3v2 🖨 with the following upgrades:
- BL Touch probe
- Metalic extruder
- Most likely something else I don't recall, been a while since I got this


Upgrades I should have but I probably won't, as may be worth/cheaper upgrading to something better and faster:
- Ferrules on screw terminals
- SD2microsd
- Dual Z axis motors


Quality of life tools:
  - Digital Calipers
  - Electric stove top scraping blade - best tool to clean my glass bed


My G-Code setup using Marlin on the mobo:

<details markdown="block">
  <summary>
    Start code
  </summary>
```lisp
; Ender 3 Custom Start G-code
G92 E0 ; Reset Extruder

; Home Before Bed Level
G28 ; Home all axes

; Bilinear Mesh
G29 ; Auto bed-level (BL-Touch)
; M420 S1 F10; Load Saved Mesh

G1 Z2.0 F3000 ; Move Z Axis up little to prevent scratching of Heat Bed
G1 X0.1 Y20 Z0.3 F5000.0 ; Move to start position
G1 X0.1 Y200.0 Z0.3 F1500.0 E15 ; Draw the first line
G1 X0.4 Y200.0 Z0.3 F5000.0 ; Move to side a little
G1 X0.4 Y20 Z0.3 F1500.0 E30 ; Draw the second line
G92 E0 ; Reset Extruder
G1 Z2.0 F3000 ; Move Z Axis up little to prevent scratching of Heat Bed
G1 X5 Y20 Z0.3 F5000.0 ; Move over to prevent blob squish
```
</details>


<details markdown="block">
  <summary>
    End code
  </summary>
```lisp
G91 ;Relative positioning
G1 E-2 F2700 ;Retract a bit
G1 E-2 Z0.2 F2400 ;Retract and raise Z
G1 X5 Y5 F3000 ;Wipe out
G1 Z10 ;Raise Z more
G90 ;Absolute positioning

G1 X0 Y{machine_depth} ;Present print
M106 S0 ;Turn-off fan
M104 S0 ;Turn-off hotend
M140 S0 ;Turn-off bed

M84 X Y E ;Disable all steppers but Z
```
</details>
