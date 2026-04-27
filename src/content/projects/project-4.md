---
title: 'Building My Personal Homelab'
description: 'How I replaced Windows with LMDE and built a focused two-machine setup for development, music, writing, and communication.'
publishDate: 2026/03/26
isFeatured: true
tags:
  - 'System Design'
  - 'Open Source'
  - 'Linux'
seo:
  image:
    src: ''
    alt: ''
---

My goal was always to build a homelab complete for my use case. I have two machines, one at home and one for travel. The reasoning was simple: I wanted the same software, same keybindings, and same workspace structure on both.

My original home lab started it out with Windows 11. Every configuration I made kept on being reset to default settings, my computer constantly felt slow. My last straw was Windows Recall feature as it was a security nightmare as it's just a fancy keylogger. I just wanted a setup where I can configure it once and leave it alone. I didn’t need all these fancy bells and whistles.  

Nowadays I run Linux Mint Debian Edition (LMDE) gave me a stable base to configure once and leave alone. I chose debian as it's community ran, stable, and it was a great expereince. So I built everything else around four purposes: Website Development, Client Communication, Music Production and Researching. To keep each activity separate, I organized them into dedicated workspaces using Linux Mint's Cinnamon desktop environment. Cinnamon ships with four default workspaces, which I renamed to match each use case. 

The software stack is straightforward:
````
- Helium as my main browser.
- Libre Office as my office suite.
- Docker for self-hosting and managing software
- Zed, Terminal, Files, and Helium Browser for Web Development
- Discord and Slack for volenteer communication
- LocalSend: Share files to nearby devices.
- Reaper, Audacity, VLC, ALSA all for music production
````  
When playing guitar, I have three pieces of external hardware connected: a Focusrite Scarlett Solo audio interface, a BOSS TU3 chromatic tuner pedal, and a BOSS RC looper pedal. When traveling, I bring only the TU3 since it is battery-powered. I use a pair of Yamaha headphones plugged directly into the Scarlett Solo. 

I have been using this setup for a month with zero software issues. What took the most time was understanding how everything worked, which required reading documentation, visiting forums rather, and asking my local developer community how do I set up self-hosting. Watching videos never served me as I was constantly consuming content rather than spending time learning the tools. Videos pushed the latest Linux news and trends when I needed something simple, stable, and boring. LMDE delivered exactly that.
