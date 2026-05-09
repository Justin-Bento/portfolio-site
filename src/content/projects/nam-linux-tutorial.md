---
title: 'Installing NAM (Neural Amp Modeler) on Linux'
description: Tested my knowledge with an introductory programming question, that covers fundamental concepts like variables, data types, loops, functions, and control structures.
tags:
  - 'The Odin Project'
  - 'Software Projects'
publishDate: 2026/06/09
isFeatured: true
seo:
  image:
    src: 'Project-Caesar-Cipher.png'
---


**Prerequisites:** This guide assumes familiarity with Linux terminal usage and basic music production concepts. If you need background on either, consult the [REAPER manual](https://www.reaper.fm/) and the [Linux filesystem hierarchy overview](https://labex.io/lesson/filesystem-hierarchy) before continuing.

---

## What is NAM?

NAM (Neural Amp Modeler) is an open-source project that uses deep learning to model the behavior of guitar amplifiers and pedals. On Linux, it runs as an LV2 plugin developed by Mike Oliphant. The plugin loads `.nam` and `.json` (RTNeural) model files inside any LV2-compatible DAW. Models are sourced primarily from [Tone3000](https://www.tone3000.com/), a free, open repository of community-contributed amp captures.


### Step 1: Update the System

This guide targets Debian-based distributions, including Linux Mint. If you are on Arch or another base, the package manager commands will differ — consult your distribution's documentation for equivalents.

Run the following with elevated privileges:

```bash
sudo apt update -y
sudo apt upgrade -y
```

Reboot after the upgrade completes:

```bash
sudo reboot now
```

### Step 2: Install Build Dependencies and Python

After rebooting, install the packages required to compile software from source:

```bash
sudo apt install build-essential zlib1g-dev libncurses5-dev libgdbm-dev \
  libnss3-dev libssl-dev libreadline-dev libffi-dev wget
```

Install Python 3:

```bash
sudo apt install python3
```

Verify the installation:

```bash
python3 --version
```

You should see a version string returned. The exact version will depend on what your distribution ships.

> **Note:** Python is required to build the NAM LV2 plugin from source. It is not required at runtime once the plugin is compiled.


### Step 3: Prepare the LV2 Plugin Directory

LV2 plugins on Linux are loaded from `~/.lv2` by default. Create this directory if it does not already exist:

```bash
mkdir -p ~/.lv2
```

Open the directory in your file manager:

```bash
xdg-open ~/.lv2
```


### Step 4: Install the NAM LV2 Plugin

Download the prebuilt LV2 plugin bundle from the [mikeoliphant/neural-amp-modeler-lv2](https://github.com/mikeoliphant/neural-amp-modeler-lv2) GitHub releases page.

Extract the downloaded archive and place the resulting `.lv2` bundle folder into `~/.lv2`. The directory structure should look like this:

```
~/.lv2/
  neural_amp_modeler.lv2/
    manifest.ttl
    neural_amp_modeler.so
    ...
```


### Step 5: Configure REAPER to Recognize the Plugin

REAPER does not automatically scan `~/.lv2` on first launch. You must add the path manually:

1. Open REAPER.
2. Go to **Options > Preferences > Plug-ins > LV2**.
3. Add `~/.lv2` to the scan paths if it is not already listed.
4. Run a full plugin scan.

After the scan completes, the plugin will appear under `developers/MikeOliphant` in the plugin browser.

> **Important:** NAM is a loader plugin. It produces no sound on its own. It requires a compatible model file to function.


### Step 6: Download a NAM Model File

[Tone3000](https://www.tone3000.com/) hosts a large library of free amp captures. Browse the site, find a tone that suits your needs, and download the corresponding `.nam` file.

Create a dedicated directory for your model files:

```bash
mkdir -p ~/Music/NAM_Audio_Files
```

Extract the downloaded archive and move the `.nam` file into `~/Music/NAM_Audio_Files`.


### Step 7: Load a Model in REAPER

1. Insert the NAM plugin on a track in REAPER.
2. Open the plugin interface.
3. Use the file browser inside the plugin to navigate to `~/Music/NAM_Audio_Files` and load your `.nam` file.

The plugin will now process audio through the selected amp model.


## Troubleshooting

**Plugin does not appear after scanning.**
Confirm the `.lv2` bundle is placed directly inside `~/.lv2`, not nested in a subdirectory. Verify REAPER's LV2 scan path includes `~/.lv2`. Re-run the scan.

**REAPER does not detect `~/.lv2` automatically.**
The `~` in the path expands to `/home/yourusername`. If REAPER requires an absolute path, enter `/home/yourusername/.lv2` explicitly.

**No audio output from the plugin.**
Confirm a `.nam` model file is loaded in the plugin interface. Without a model, the plugin outputs silence.

**`apt` commands fail with permission errors.**
Ensure you are prefixing commands with `sudo`. Running bare `apt` without elevated privileges will be rejected on a standard user account.
