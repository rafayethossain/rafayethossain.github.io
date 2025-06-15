---
layout: post
title: A Beginner's Guide to Writing Your First Selenium Python Web Test
subtitle: Getting Started with Selenium Python Webdriver for Software Test Automation
tags: [software testing, test automation, python]
image: /assets/img/selenium-with-python.png
bigimg: /assets/img/back.gif
thumbnail-img: /assets/img/selenium-with-python.png
share-img: /assets/img/selenium-with-python.png
cover-img: /assets/img/cover.jpg
---


In this post, we'll take a look at how to perform software test automation using Selenium Python web bindings. We will write a script that  "opens a web page, searches for "pycon", and checks that search results are returned." If you're new to Selenium or Python, don't worry! We'll start with the basics and guide you through your first Selenium web test. 



First, let's make sure that you have the Selenium Python bindings installed. If not, please refer to our previous post on how to install them.


Post Link: [**How To Install Selenium Python Webdriver**](https://rafayethossain.github.io/2019-01-08-How-To-Install-Selenum-Python-Webdriver/)


Once you have the necessary software installed, you can begin writing your first Selenium Python web test using your favorite Python IDE. Here's a simple example script:



```py 

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://www.python.org")
assert "Python" in driver.title
elem = driver.find_element_by_name("q")
elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)
assert "No results found." not in driver.page_source
driver.close()

```

This code snippet is collected from official Selenium Python Document and The above script can be saved into a file (eg:- python_org_search.py), then it can be run like this from your terminal:

```
python python_org_search.py

```



## Example Explained

Let's go over the script line by line to understand what's going on. We start by importing the necessary modules from Selenium:

```py
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
```


The selenium.webdriver module provides all the WebDriver implementations. Currently supported WebDriver implementations are Firefox, Chrome, IE and Remote. The Keys class provide keys in the keyboard like RETURN, F1, ALT etc.


```py

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

```

Next, we create an instance of the Firefox WebDriver:


```py
driver = webdriver.Firefox()

```

You can change the browser to Chrome, IE, or Remote if needed. The ```driver.get() ``` method will navigate to a page specified by the URL. WebDriver will wait until the page has fully loaded before returning control to your script:



```py
driver.get("http://www.python.org")

```

The next line is an assertion that confirms that the page title contains the word "Python":


```py
assert "Python" in driver.title

```

WebDriver offers a number of ways to find elements using one of the ``` find_element_by_* methods.``` For example, the input text element can be located by its name attribute using find_element_by_name method.

```py

elem = driver.find_element_by_name("q")

```

Next, we are sending keys, this is similar to entering keys using your keyboard. Special keys can be sent using Keys class imported from selenium.webdriver.common.keys. 

To be safe, we’ll first clear any pre-populated text in the input field (e.g. “Search”) so it doesn’t affect our search results:

```py

elem.clear()
elem.send_keys("pycon")
elem.send_keys(Keys.RETURN)

```

After submission of the page, you should get the result if there is any. To ensure that some results are found, make an assertion:

```py

assert "No results found." not in driver.page_source

```


Finally, the browser window is closed. You can also call ```quit``` method instead of close. The quit will exit entire browser whereas ```close``` will close one tab, but if just one tab was open, by default most browser will exit entirely

```py

driver.close()

```
To summarize, we've just written a simple script that opens a web page, searches for "pycon", and checks that search results are returned.

If you want to learn more about Selenium Python, check out the Selenium Python repository on GitHub, or take a look at our Selenium Python crash course.

## Selenium Python

[**Selenium Python**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/03.%20Selenium-Python)

## Selenium Python Crash Course Source Code

[**Selenium Python Crash Course**](https://github.com/rafayethossain/Basic-Python-Script/tree/master/04.%20Selenium%20Crash%20Course)

Thank you for reading and happy testing!




----------------------------------------------------------------------
----------------------------------------------------------------------


Enjoyed this post!

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/rafayetanalyst/) [!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/rafayetanalyst/)
 
Your support helps me create more valuable content. Thank you!






{% include blog-footer.html %}

{: .box-success}
Enjoy !!!
**See Yaaa, Next.**

![Selenium with Python](/assets/img/selenium-with-python.png "Selenium with Python")
