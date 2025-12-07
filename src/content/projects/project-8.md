---
title: 'Project: Caesar Cipher'
description: Tested my knowledge with an introductory programming question, that covers fundamental concepts like variables, data types, loops, functions, and control structures.
tags:
  - 'The Odin Project'
  - 'Software Projects'
publishDate: 2025-08-06
isFeatured: true
seo:
  image:
    src: 'Project-Caesar-Cipher.png'
---

![Project preview](/Project-Caesar-Cipher.png)

_Before we get into the article, I want to thank The Odin Project for making this project available. It gave me a practical way to apply key programming concepts and made me realize that I am not yet ready for junior programming positions at this stage in my career._

Working through the Caesar Cipher project was tougher than I expected. I realized I wasn’t ready for junior programming interviews yet, but it taught me how to apply strings, arrays, and conditionals in practice.

## What Is a Caesar Cipher?

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## Project Details:

- Type of Work: Project-Based
- Version: #3
- Type of Website: None
- Time frame: 1 Week
- Link To Github: [github.com/ruby-caesar-cipher](https://github.com/Justin-Bento/ruby-caesar-cipher)
- Link To Demo: Comming Soon
- Project Role: Software Developer
- Project Duration: June 29th - August 6th
- Project Status: Completed
- Team Size: 1
- Target Audience: Software Developers, Recruiters, and Team Leads.

My Learning Journey
After spending some time diving deep into Ruby and doing Harvard CS50, I had covered a very basic overview of core object-oriented OOP design, testing, and data structures – essential knowledge for learning other programming languages. Now it was time to put my knowledge to the test! Thankfully I was not doing this alone as The Odin Project had provided 'Basic Ruby Projects' for me to complete on my own without the use of AI.
My time had been spent reading through their Introduction and Basics Ruby, and one of these projects was to help test my knowledge of working with strings, arrays and hashes. After doing it myself, I only got as far as these steps:

- Defining a variable that takes a message called "What A String".
- Declared a function called sub_strings with two parameters called plainText and shift.
- Split the plain_text into individual arrays Outputted the function substrings to the CLI when the user runs the code.
- I cheated and used AI but it didn't help at all as it shifted the case but I didn't know what was going on

## The Outcome

My time this has has been reading throug[Add more takeaways here - what did you learn about problem-solving? Community? Ruby?]
h their Introduction and Basics Ruby one of these projects was to help test my knowledge of working with strings, arrays and hashes, after doing it myself I only got as far as these steps:

- defining a variable that takes a message called “What A String”.
- declared a function called sub_strings with two parameters called plainText and shift.
  - Split the plain_text into indivisual arrays.
- Outputted the function substrings to the CLI when the user runs the code.
- I cheated and used AI but it didn't help at all as it shifted the case but I didn't know what was going on.

After spending some time and thinking I decidedto look at Toronto’s developer community and managed to join find a Ruby Event and attend something called mob prograing. I introduced this soloutin and they helped me with the logic and poential edge cases and thanks to this wonderful community helpful support I chose to go Full-Stack Ruby and Ruby on Rails path.

## The Breakthrough: Finding Community

After spending some time thinking, I decided to look at Toronto's developer community and managed to find a Ruby Event and attend something called mob programming. I introduced this solution and they helped me with the logic and potential edge cases. Thanks to this wonderful community's helpful support, I chose to go the Full-Stack Ruby and Ruby on Rails path.

## My Code Evolution

As I was using git, I reverted the code back to its first version:

```
1. message = "Hello"
2.
3. def caesar_cipher(plain_text, shift)
4. 	plain_text.split("")
5. end
6.
7. puts caesar_cipher(message, 5)
```

Now what does this code do? On line 1, we've defined a variable called message, which stores a string called "Hello".

From line 3 to 5, we've declared an action called caesar_cipher that takes two arguments: one called plain_text and another called shift.

The goal for plain text is to grab the message and split each letter into its own character. So the output includes each letter inside of hello outputted onto a new line. To save space I've added a comma to represent a new line:

```
H, E, L, L, O
```

## Why Split Into Characters?

The next step is to convert each character into something called ASCII Code, which is a character encoding standard. It is a numbering system that assigns unique numerical values to letters, numbers, punctuation, and control characters.

```
1. message = "Hello"
2.
3. def caesar_cipher(plain_text, shift)
4. 	plain_text.split("").map(&:ord)
5. end
6.
7. puts caesar_cipher(message, 5)
```

Here is the ruby code with the output:

```
output => (Hello) [72, 101, 108, 108, 111]
```

With this new output we're able to manipulate each individual character and shift it based off the number value in the next argument. During this time I got stuck and didn't know how to solve this problem. So I attended a mob programming event and we did an entire session solving this problem.

What people said was that the logic was good so far, but now we had to find a way to shift each character and ensure that it always returns back to a string.

## The Final Solution

After spending some time programming and trying to understand the AI fluff. Things didn't go well - for me. During my time attending a Mob Programming session I had to re-write the entire code base as the previous logic didn't make sense to anyone. The goal with this programming group was to make code that people can understand while ensuring the code was readable.

After spending the time during a Mob Programming Session here's the final output.

```
01. def caesar_cipher(plain_text, shift)
02.	  reset = shift % 26
03. 	shifted = plain_text.chars.map { |char|
04. 		if char.ord >= 65 && char.ord <= 90 ## Uppercase Letters
05. 			if char.ord + reset > 90
06. 				char.ord + reset - 26
07. 			else
08. 				char.ord + reset
09.			end
10.		elsif char.ord >= 97 && char.ord <= 122 ## Lowercase Letters
11.			if char.ord + reset > 122
12.				char.ord + reset - 26
13.			else
14.				char.ord + reset
15.			end
16.		else
17.			char.ord
18.		end
19.	}
20.	  shifted.map { |ascii_value| ascii_value.chr }.join
21. end

```

## Breaking Down the Final Solution

After attending a mob programming session, I finally managed to solve the problem thanks to the amazing people at Mapel Coding. On YYYY/MM/DD, I shared the project with the group and everyone agreed to spend some time working through it together. The goal was to first discuss the logic in person before touching the code. Here’s a high-level overview of what we covered when walking through the sample output:

Example: `caesar_cipher("Hello", 3)`:

1. `reset = shift % 26` — ensures the shift stays within the alphabet (26 letters).
2. Convert the string into individual characters with .chars.
3. For each character, check if it’s uppercase (65–90), lowercase (97–122), or neither.
4. Shift the ASCII value by the reset amount.
5. If shifting goes past Z (90) or z (122), wrap around by subtracting 26.
6. Convert the new ASCII values back into characters and join them into a string.

At first glance, this might sound straightforward — and to some extent it was — but my limited knowledge of Ruby meant a lot of time was spent ensuring I was using the right methods for the task. For a seasoned Ruby developer, this would likely have been much simpler, but I’m still learning.

Thanks to the power of collaborative programming, we solved the problem together within the session timeframe (4 pm to 6 pm). The bigger challenge for me came afterward: figuring out how to clearly explain the logic in writing. After some careful review and study, I was able to push through that hurdle as well.

## Key Takeaways

Thanks to this shift cipher project and the support from the people at Mapel Coding, I realized that I need to continue developing my soft skills as a software developer. What does that mean in practice? For me, it was the recognition that I had been difficult to work with in the past, largely because I hadn’t had much experience collaborating with others.This project showed me that I grow and learn much faster when I work alongside other people, rather than trying to figure everything out on my own.

Here are some improvements I plan to focus on in the near future:

- Strengthening my writing skills so I can clearly express problems without barriers.
- Letting go of my controlling tendencies by learning to go with the flow and stepping in only when necessary.
- Shifting away from learning in isolation and making a conscious effort to learn from others and understand their perspectives.
