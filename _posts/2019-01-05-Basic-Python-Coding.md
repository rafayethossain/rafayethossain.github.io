---
layout: post
title: Python Basic Code for Newbie
subtitle: Software Test Automation with Selenium & Python
tags: [software testing, test automation, python]
image: /assets/img/diary.png
bigimg: /assets/img/back.gif
thumbnail-img: /assets/img/selenium-with-python.png
share-img: /assets/img/selenium-with-python.png
cover-img: /assets/img/cover.jpg
---

Welcome back! I'm going to share with you some really basic Python code for beginners.



{: .box-warning}
**Disclaimer**: The contributor(s) cannot be held responsible for any misuse of the data.
_Quick Link to Specific Topic:_

- [Part 1- Variable declaration in Python.](#part-1--variable-declaration-in-python)
  - [Some Variable Declaration Rules:](#some-variable-declaration-rules)
- [Part 2- Playing with Numbers.](#part-2--playing-with-numbers)
- [Part 3- Get to know python Boolean .](#part-3--get-to-know-python-boolean-)
- [Part 4- String in Python .](#part-4--string-in-python-)
- [Part 5- Source Code from Books:](#part-5--source-code-from-books)
  - [Python The Hard Way](#python-the-hard-way)
  - [Automate The Boring Staff with Python](#automate-the-boring-staff-with-python)
- [Extras:](#extras)
  - [Selenium Python](#selenium-python)
  - [Selenium Python Crash Course](#selenium-python-crash-course)

# Part 1- Variable declaration in Python.

```py
a="dhaka"
b="dhaka"

print(a)

a=123

print(a)
print(b)

b=456
print(b)

c='dhaka'
d=c

print(c==d)
print(d is c)
```

## Some Variable Declaration Rules:

- Reserved word (keyword) can not be a variable
- Start with letter or underscore
- Don’t start with a number
- Variable name can contain letters, number, underscore
- Don’t include special characters in variable names

# Part 2- Playing with Numbers.

```py
int_num = 10
float_num = 20.0

print(int_num)
print(float_num)

a = 10
b = 20

print("*******************")

add = a + b
print(add)

sub = b - a
print(sub)

multi = a * b
print(multi)

div_mychoice = b / a
print(div_mychoice)
```

# Part 3- Get to know python Boolean .

```py
a = True
b = False

print(a)
print(b)

print("**************************")
print(bool(0))
print(bool(1))
print(bool(2))

c = ""
print(bool(c))

c = "Some Value"
print(bool(c))
```

# Part 4- String in Python .

```py
a = "This is a simple string"
b = 'Using single quotes'

print(a)
print(b)

c = "Need to use 'quotes' inside a string"
print(c)

d = "Another way to handle \"quotes\""
print(d)

a = "This is a single\
 string"
print(a)
```

**As this is a introductory series we will not discuss everything about python.**
_But here sharing some source code for better practices_

# Part 5- Source Code from Books:

## Python The Hard Way

[**Python The Hard Way**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/01.%20Python-The-Hard-Way)

## Automate The Boring Staff with Python

[**Automate The Boring Staff with Python**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/02.%20Automate-The-Boring-Stuff-With-Python)

# Extras:

## Selenium Python

[**Selenium Python**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/03.%20Selenium-Python)

## Selenium Python Crash Course

[**Selenium Python Crash Course**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/04.%20Selenium%20Crash%20Course)




{% include blog-footer.html %}

{: .box-success}
Enjoy !!!
**See Yaaa, Next.**

![Selenium with Python](/assets/img/selenium-with-python.png "Selenium with Python")
