---
title: 'Project: Caesar Cipher'
description: This article explains my plan for working through the project Cesar Cipher. As well as the the steps I took to completed the project with the solution.
tags:
  - IntroToProgramming
  - TheOdinProject
  - Cryptography
publishDate: 2025-08-06
isFeatured: true
seo:
  image:
    src: 'Project-Caesar-Cipher.png'
---

![Project preview](/Project-Caesar-Cipher.png)

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

def caesar_cipher(plain_text, shift)
	reset = shift % 26
	shifted = plain_text.chars.map { |char|
		if char.ord >= 65 && char.ord <= 90 ## Uppercase Letters
			if char.ord + reset > 90
				char.ord + reset - 26
			else
				char.ord + reset
			end
		elsif char.ord >= 97 && char.ord <= 122 ## Lowercase Letters
			if char.ord + reset > 122
				char.ord + reset - 26
			else
				char.ord + reset
			end
		else
			char.ord
		end
	}
	shifted.map { |ascii_value| ascii_value.chr }.join
end

## Breaking Down the Final Solution

[YOU NEED TO COMPLETE THIS SECTION - What did you want to explain here?]

Let's walk through what happens when we call caesar_cipher("Hello", 3):

1. reset = shift % 26 - This ensures our shift stays within the alphabet (26 letters)
2. We convert the string to individual characters with .chars
3. For each character, we check if it's uppercase (65-90), lowercase (97-122), or neither.
4. We shift the ASCII value by the reset amount.
5. If shifting goes past Z (90) or z (122), we wrap around by subtracting 26.
6. Finally, we convert back to characters and join them into a stringa.

## Key Takeaways

[YOU NEED TO EXPAND THIS SECTION - What else did you learn beyond git commits?]

- Writing descriptive and accurate git commits
- [Add more takeaways here - what did you learn about problem-solving? Community? Ruby?]
