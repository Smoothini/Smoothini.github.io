---
title: Yet another Type C Charging Mod
layout: page
parent: Hardware projects
tags: [hardware, bluetooth, audio]
date: 2025-10-20
---

{% include top-card.html %}

# Type-C charging port swap for some random 3.5 audio jack to bluetooth converter

![Hall bt receiver opened](/assets/images/hw/hallbt/hallbt1.png)

Had a friend ask me if I can do some soldering as his BT receiver's charging port broke. This small box he uses to connect through bluetooth to a living room sound system that only has jack input.

Now I kinda had a bad feeling seeing the pictures of the crooked micro usb charging port that the traces were broken, and indeed they were. Luckily I had some type c breakout boards at hand, and after a bit of soldering and waiting for epoxy to dry we had a quite promising result!

![Hall bt receiver result opened](/assets/images/hw/hallbt/hallbt3.png)

Now, from that angle it looks fine, but I sure need more dremmel training haha.


![Hall bt receiver dremmel massacre](/assets/images/hw/hallbt/hallbt2.png)


All in all it worked out great, and thanks to my magnificent dremmeling skills, we also have a status light!!


![End result](/assets/images/hw/hallbt/hallbt4.png)

The only caveat is since its a simple breakout board, the 2 resistors you need to detect the host for pd are missing which means you can only use Type-A to Type-C cables, but for such a simple device its more than enough.

{% include tags.html %}