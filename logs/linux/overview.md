---
layout: post
---

On GOD this is so overwhelming.

I am restarting my linux journey and this time i am not gonna follow tutorials, imma understand yayy. Let’s begin with the installation shit.

## Filesystem

Filesystem: it is like a rulebook containing instructions/rules on how the files are stored, where they are stored, who can access them etc.  
It exists on both secondary storage and ram (a live copy of it).

## Firmware

Firmware is software shit. It lives in ROM / flash memory of the motherboard (non-volatile memory).  
Basically it is the first instructions executed when the computer is powered on. It is usually stored at a fixed address, different for different processors (x86, ARM).

## BIOS vs UEFI

There are two types: BIOS and UEFI.

BIOS is old and crusty. It only starts the CPU in 16-bit real mode with memory access of 1 MB, no filesystem awareness, etc. Too bad :(

On the other hand UEFI is modern and is like a mini OS. It supports 32-bit or 64-bit CPU modes, full access to memory, filesystem support (usually FAT32 because it is simple), and other good features like secure boot and runtime system services.

## ISO Image

ISO image: oo this is the core shit. It is like the organs of the whole thing.  
It contains all the ingredients to set up a new OS like files, executable files of `.efi` format, filesystem, kernel, initramfs (probably registers some shit), and a lot more stuff.

I have yet to grasp the total understanding of it, issok.

<br>

> “Rome was not built in one day”.

<br>

