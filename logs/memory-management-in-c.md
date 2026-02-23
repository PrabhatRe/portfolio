---
layout: post
---

hello !! this is my first post here, i dont know why i am doing this **༎ຶ⁠‿⁠༎ຶ** 

while I was preparing for **gate** I saw a question to find the difference between

```c
char s[] = “hello, world”;
char *s = “ hello world”;
```
i was rather dumb to not understand the difference ( those who don't know **char s[] is contiguous shit**, while **\*s is a string literal**). after some digging  i found how *differently* they are stored in memory

the c program when compiled, it generates a executable file of **ELF** format 
![](../assets/images/elf.jpg)




*not this one !!*![](../assets/images/elf-header.jpg)

which then loaded onto **RAM** for execution( also not the whole file lol - *OS magic lalala..*)

during the execution it is divided into
![](../assets/images/mem.png)

### text / code segment
contains some **alien language shit** we can't understand but basically these are instructions of the program
![](../assets/images/cc-compile.png)

### rodata (read-only data)
rodata contains **global read-only variables**, like **string literals**.
```c
char *s = "hello";
printf(“hello world”); 
```
as the name suggest **u can't edit this** ( *i swear u really cant modify* )

### data segment
contains **global and static variables that are initialized**.
```c
int x = 10;
```

### bss segment
contains **global and static variables that are uninitialized**.
```c
int xx;
```

### heap
this is where **dynamically allocated memory** lives.
```c
int *xxx = malloc(sizeof(int) * 10);
```
it starts empty and grows upwards if the instruction calls for it, usually it is said, to always free the memory after using
```c
free(xxx);
```
but modern compilers *do* free memory when the program stops executing,  
nevertheless this is **compiler and os dependent**.

### stack
stores **local variables, function parameters, and return addresses**.  
it grows downwards and is **automatically managed by the compiler**.

i think this is enough for now .
**༎ຶ⁠‿⁠༎ຶ**











