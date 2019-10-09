# Solutions of EloquentJS Book's Exercises

![BookImage](https://eloquentjavascript.net/img/cover.jpg)<br>
Written by Marijn Haverbeke.

[EloquentJS](https://eloquentjavascript.net/) is a great book to learn Javascript. It is considered by many one of the Best, and I personally like it a lot.
You can either buy the paper, or use its free online version or its [free pdf file](https://eloquentjavascript.net/Eloquent_JavaScript.pdf). For convenience, I did the later.
It's importante to note that I read the Third Edition, being the latest on the time this written.

## What I have learnt?
**TL;DR** In a few words: Deep JS ES6+, HTTP and Forms, Asynchronous Programming, DOM Manipulation, Regular EXpressions, Modules, Bundles, Packages and Node.js

It is a bit hard to grasp some concepts, but you can always revisit some concepts later when need them. However, I tell you that it worths give everything in this book a try at first anyway, because I believe you always learn something at first. It doesn't matter if it is just 10% or 100%. You start doing things, then practice more, and read the hard parts again later and eventually you reach 100% of understanding.
It depends on what kind of tasks you have to do on daily-basis. You may find out you don't need to get so deep in JS, maths, programming or anything. But, I think it's always cool to learn new things!

## Let's cut to the chase right way!

Following below is the contents of the book and I linked each with my own solutions.
I may have done a little bit more work than asked by the author's book on those exercises I enjoyed doing in that reading time.

Some are ***HTML files*** and can be **viewed directly in the browser**.
So, use the Devtools of your favourite browser for checking the code.
Some are ***JS files*** and you might have to **copy/download the code and paste/run it in the browser or Node.js environment** to see the output they produce in the console.

#### Check it out!

if you find any **broken link**, please [let me know](https://github.com/trepichio)

<a name="contents-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### CONTENTS

1. Introduction
	- [Range - direct link](./chapter05/intro.js "see code") - [description link](#intro-link "go to description")
1. (Part 1: Language) Values, Types, and Operators
1. Program Structure
	- [Looping a triangle - direct link](./triangle.js "see code") - [description link](#triangle-link "go to description")
	- [FizzBuzz - direct link](./fizzbuzz.js "see code") - [description link](#fizzbuzz-link "go to description")
	- [Chessboard - direct link](./grid.js "see code") - [description link](#chessboard-link "go to description")
1. Functions
	- [Minimum - direct link](./minimum.js "see code") - [description link](#minimum-link "go to description")
	- [Recursion - direct link](./isEven.js "see code") - [description link](#recursion-link "go to description")
	- [Bean counting - direct link](./bean_counting.js "see code") - [description link](#bean_counting-link "go to description")
1. Data Structures: Objects and Arrays
	- [The sum of a range - direct link](./range.js "see code") - [description link](#range-link "go to description")
	- [Reversing an array - direct link](./chapter04/reverseArray.js "see code") - [description link](#reverse_array-link "go to description")
	- [A list - direct link](./chapter04/list.js) - [description link](#list-link "go to description")
	- [Deep comparison - direct link](./chapter04/deepComparison.js "see code") - [description link](#deepComparison-link "go to description")
1. Higher-order Functions
	- [Flattening - direct link](./flattening.js "see code") - [description link](#flattening-link "go to description")
	- [Your own loop - direct link](./own_loop.js "see code") - [description link](#own_loop-link "go to description")
	- [Everything - direct link](./everything.js "see code") - [description link](#everything-link "go to description")
	- [Dominant writing direction - direct link](./chapter05/dominant_writing.js "see code") - [description link](#dominant_writing-link "go to description")
1. The Secret Life of Objects
	- [A vector type - direct link](./vector_type.js "see code") - [description link](#vector-link "go to description")
	- [Groups - direct link](./group.js "see code") - [description link](#groups-link "go to description")
	- [Iterable Groups - direct link](./group.js "see code") - [description link](#iterable_groups-link "go to description")
	- [Borrowing a method - direct link](./group.js "see code") - [description link](#borrowing_method-link "go to description")
1. Project: A Robot
	- [Measuring a robot - direct link](./chapter10/robot.js "see code") - [description link](#robot-link "go to description")
	- [Robot efficiency - direct link](./chapter10/robot.js "see code") - [description link](#robot_efficiency-link "go to description")
	- [Persistent group - direct link]() - [description link](#-link "go to description")
1. Bugs and Errors
	- [Retry - direct link](./retry.js "see code") - [description link](#retry-link "go to description")
	- [The locked box - direct link](./chapter08/lockBox.js "see code") - [description link](#the_locked_box-link "go to description")
1. Regular Expressions
	- [Regexp golf - direct link](./chapter09/regexp_golf.js "see code") - [description link](#regexp_golf-link "go to description")
	- [Quoting style - direct link](./chapter09/quote.js "see code") - [description link](#quote-link "go to description")
	- [Numbers again - direct link](./chapter09/numbers_again.js "see code") - [description link](#numbers_again-link "go to description")
1. Modules
	- [A modular robot - direct link]() - [description link](#-link "go to description")
	- [Roads module - direct link](./chapter10/roads_module.js "see code") - [description link](#roads_module-link "go to description")
	- [Circular dependencies - direct link]() - [description link](#-link "go to description")
1. Asynchronous Programming
	- [Tracking the scalpel - direct link](./chapter11/11_async.js "see code") - [description link](#tracking_scalpel-link "go to description")
	- [Building Promise.all - direct link](./chapter11/promise_all.js "see code") - [description link](#promise_all-link "go to description")
1. Project: A Programming Language
	- [Arrays - direct link](./chapter12/12_language.js "see code") - [description link](#language_arrays-link "go to description")
	- [Comments - direct link](./chapter12/12_language.js "see code") - [description link](#language_comments-link "go to description")
	- [Fixing scope - direct link](./chapter12/12_language.js "see code") - [description link](#language_scope-link "go to description")
1. (Part 2: Browser)JavaScript and the Browser
1. The Document Object Model
	- [Build a table - direct link](./table_DOM.html "see code using DevTools, ok?") - [description link](#table_DOM-link "go to description")
	- [Elements by tag name - direct link](./chapter14/element_tagName.html "see code using DevTools, ok?") - [description link](#element_tagname-link "go to description")
	- [The cat's hat - direct link](./chapter14/cat_hat.html "see code using DevTools, ok?") - [description link](#cat_hat-link "go to description")
1. Handling Events
	- [Balloon](./baloon.html) - [description link](#balloon-link "go to description")
	- [Mouse trail - direct link](./chapter15/mouse_trail.html "see code using DevTools, ok?") - [description link](#-link "go to description")
	- [Tabs - direct link](./chapter15/tabs.html "see code using DevTools, ok?") - [description link](#tabs-link "go to description")
1. Project: A Platform Game
	- [Game over - direct link](./chapter16/game_over.html "see code using DevTools, ok?") - [description link](#game_over-link "go to description")
	- [Pausing the game - direct link](./chapter16/pausing_game.html "see code using DevTools, ok?") - [description link](#pausing_game-link "go to description")
	- [A monster - direct link](./chapter16/monster.html "see code using DevTools, ok?") - [description link](#monster-link "go to description")
1. Drawing on Canvas
	- [Shapes - direct link](./chapter17/shapes.html "see code using DevTools, ok?") - [description link](#shapes-link "go to description")
	- [The pie chart - direct link](./chapter17/pie_chart.html "see code using DevTools, ok?") - [description link](#pie_chart-link "go to description")
	- [A bouncing ball - direct link](./chapter17/bouncing_ball.html "see code using DevTools, ok?") - [description link](#bouncing_ball-link "go to description")
	- [Game on Canvas - direct link](./chapter17/game_on_canvas.html "see code using DevTools, ok?")
1. HTTP and Forms
	- [Content negotiation - direct link](./chapter18/content_negotiation.html "see code using DevTools, ok?") - [description link](#content_negotiation-link "go to description")
	- [A JavaScript workbench - direct link](./chapter18/js_workbench.html "see code using DevTools, ok?") - [description link](#js_workbench-link "go to description")
	- [Conway's Game of Life - direct link](./chapter18/conway_game_of_life.html "see code using DevTools, ok?") - [description link](#conway_game_of_life-link "go to description")
1. Project: A Pixel Art Editor
	- [Keyboard bindings - direct link](./chapter19/keyboard_bindings.html "see code using DevTools, ok?") - [description link](#keyboard_bindings-link "go to description")
	- [Efficient drawing - direct link](./chapter19/efficient_drawing.html "see code using DevTools, ok?") - [description link](#-link "go to description")
	- [Circles - direct link](./chapter19/circles.html "see code using DevTools, ok?") - [description link](#circles-link "go to description")
	- [Proper lines - direct link](./chapter19/proper_lines.html "see code using DevTools, ok?") - [description link](#proper_lines-link "go to description")
1. (Part 3: Node)Node.js
	- [Search tool - direct link](./chapter20/search.js "see code using DevTools, ok?") - [description link](#search_tool-link "go to description")
	- [Directory creation - direct link](./chapter20/nodeJS/server.js "see code") - [description link](#server-link "go to description")
	- [A public space on the web - direct link](./chapter20/nodeJS/index.html "see code using DevTools, ok?") - [description link](#public-webspace-link "go to description")
1. Project: Skill-Sharing Website.
	- [Disk persistence - direct link](./chapter21/nodeJs/skillShareServer.js "see code" ) - [description link](#skillShare-persistent_data-link "go to description")
	- [Comment field resets - direct link](./chapter21/public/js/skillsharing_client.js "see code" ) - [description link](#skillShare-comment_reset-link "go to description")

<a name="intro-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Intro - Range
#### description:
> a function that takes _two params_ that represents the **start** and **end** and _returns_ a **list of the numbers** _in that range_. It also takes _an optional third argument_ to specify a **step** on counting. Another function like _sum_ can use this function.

[↑ go up to Contents](#contents-link "go to description")

<a name="triangle-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Triangle
#### description:
> Write a loop that makes seven calls to console.log to output the following triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######

[↑ go up to Contents](#contents-link "go to description")

<a name="fizzbuzz-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### FizzBuzz
#### description:
> from 1 to 100, print "Fizz" for numbers divisible by 3, instead of the
number, and by 5 (and not 3), print "Buzz".
Print "FizzBuzz" for numbers that are divisible by both 3 and 5

[↑ go up to Contents](#contents-link "go to description")

<a name="chessboard-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Chessboard
#### description:
> Creates a string that represents an 8×8 grid, using space and '#' characters

[↑ go up to Contents](#contents-link "go to description")

<a name="minimum-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Minimum
#### description:
> a function min that takes two arguments and returns their minimum like Math.min().

[↑ go up to Contents](#contents-link "go to description")

<a name="recursion-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Recursion
#### description:
> a recursive function (and a regular too) isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.

[↑ go up to Contents](#contents-link "go to description")

<a name="bean_counting-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Bean Counting
#### description:
> a function called countChar that it takes a string and a second argument that indicates the character that is to be counted

[↑ go up to Contents](#contents-link "go to description")

<a name="range-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### The sum of a range
#### description:
> a function that takes **two params** that represents the **start** and **end** and **returns** a **list of the numbers in that range**. It also takes **an optional third argument** to specify a **step** on counting, which it sure **also works with negative step values**. Another function like _sum_ can use this function.

[↑ go up to Contents](#contents-link "go to description")

<a name="reverse_array-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Reversing an array
#### description:
> Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, **reverseArray** and **reverseArrayInPlace**. The first, **reverseArray**, takes an array as argument and **produces a new array** that has the same elements **in the inverse order**. The second, **reverseArrayInPlace**, does what the reverse method does: it modifies the array given as argument by reversing its elements. **Neither may use the standard reverse method**.

[↑ go up to Contents](#contents-link "go to description")

<a name="list-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### A list
#### description:
> Write a function **arrayToList** that **builds up a list structure** like the one shown when given [1, 2, 3] as argument. Also write a **listToArray** function that **produces an array from a list**. Then add a **helper** function **prepend**, which
takes an element and a list and creates a new list that adds the element to the front of the input list, and **nth**, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
If you haven’t already, also write **a recursive version of nth**.

[↑ go up to Contents](#contents-link "go to description")

<a name="deepComparison-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Deep comparison
#### description:

> The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties. Write a function deepEqual that takes two values and returns true only if they
are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

[↑ go up to Contents](#contents-link "go to description")

<a name="flattening-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Flattening
#### description:
> Use the reduce method in combination with the concat method to “flatten” an *array of arrays* into a *single array* that has all the elements of the original arrays.

[↑ go up to Contents](#contents-link "go to description")

<a name="own_loop-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Your Own Loop
#### description:
> a higher-order function _loop_ that provides something like a _for loop_ statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value
and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning. **IMPORTANT: Book's solution uses for statement, but I did only with recursion.**

[↑ go up to Contents](#contents-link "go to description")

<a name="dominant_writing-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Dominant Writing
#### description:

> Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
The dominant direction is the direction of a majority of the characters that have a script associated with them. The [characterScript](./chapter05/scripts.js "see code") and countBy functions defined earlier in the chapter are probably useful here.

[↑ go up to Contents](#contents-link "go to description")

<a name="vector-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Vector Type
#### description:
> Implements a class Vec that represents a vector in two-dimensional space. It takes
x and y parameters (numbers), which it should save to properties of the same
name. Give the Vec prototype two methods, plus and minus , that take another
vector as a parameter and return a new vector that has the sum or difference
of the two vectors’ ( this and the parameter) x and y values.
Add a getter property length to the prototype that computes the length of
the vector—that is, the distance of the point (x, y) from the origin (0, 0).

[↑ go up to Contents](#contents-link "go to description")

<a name="groups-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Groups
#### description:
> It's a class called Group. Like Set , it has add , delete , and has methods. Also, a **static** _from_ that takes an iterable object as argument and creates a group that contains all the values produced by iterating over it
- Its constructor creates an empty group
- add adds a value to the group (but only if it isn’t already a member)
- delete removes its argument from the group (if it was a member)
- has returns a Boolean value indicating whether its argument is a member of the group.

[↑ go up to Contents](#contents-link "go to description")

<a name="iterable_groups-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>

### Iterable Groups
#### description:
> Made the Group class from the previous exercise iterable without just calling its Symbol.iterator. That would defeats the purpose of this exercise.

[↑ go up to Contents](#contents-link "go to description")

<a name="borrowing_method-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Borrowing Method
#### description:
> made a way to call hasOwnProperty on an object that has its own property by that name

[↑ go up to Contents](#contents-link "go to description")

<a name="robot-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Measuring a robot
#### description:
> Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots solve each of these tasks. When done, it should output the average number of steps each robot took per task.
For the sake of fairness, make sure you give each task to both robots, rather than generating different tasks per robot.

[↑ go up to Contents](#contents-link "go to description")

<a name="robot_efficiency" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Robot efficiency
#### description:
> write a robot that finishes the delivery task faster than goalOrientedRobot. You might want to use your compareRobots function from previous exercise to verify whether you improved the robot.

[↑ go up to Contents](#contents-link "go to description")

<a name="retry-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Retry
#### description:
> a function _primitiveMultiply_ that in 20 percent of cases multiplies two numbers
and in the other 80 percent of cases raises an exception of type _MultiplicatorUnitFailure_. Made a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result

[↑ go up to Contents](#contents-link "go to description")

<a name="the_locked_box-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### The Locked Box
#### description:
> It is a box (a Object) with a lock. There is an array in the box, but you can get at it only
when the box is unlocked. Directly accessing the private \_content property is
forbidden. Made a function called withBoxUnlocked that takes a function value as argument, unlocks the box, runs the function, and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
If you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.

[↑ go up to Contents](#contents-link "go to description")

<a name="regexp_golf-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Regexp golf
#### description:

> write a regular expression to test whether any
of the given substrings occur in a string:
1. car and cat
2. pop and prop
3. ferret, ferry, and ferrari
4. Any word ending in ious
5. A whitespace character followed by a period, comma, colon, or semicolon
6. A word longer than six letters
7. A word without the letter e (or E)
Do not worry about word boundaries unless explicitly mentioned.

[↑ go up to Contents](#contents-link "go to description")

<a name="quote-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Quoting style
#### description:

> Imagine you have written a story and used single quotation marks throughout to mark pieces of dialogue. Now you want to replace all the dialogue quotes with double quotes, while keeping the single quotes used in contractions like aren’t.
Think of a pattern that distinguishes these two kinds of quote usage and craft a call to the replace method that does the proper replacement.

[↑ go up to Contents](#contents-link "go to description")

<a name="numbers_again-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Numbers again
#### description:

> Write an expression that matches only JavaScript-style numbers. It must sup-
port an optional minus **or** plus sign in front of the number, the decimal dot, and exponent notation— 5e-3 or 1E10 — again with an optional sign in front of the exponent. Also note that it is not necessary for there to be digits in front of or after the dot, but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot **isn’t**.

[↑ go up to Contents](#contents-link "go to description")

<a name="roads_module-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Roads module
#### description:

> Write a CommonJS module, based on the example from Chapter 7, that contains the array of roads and exports the graph data structure representing them as **roadGraph**. It should depend on a module **./graph**, which exports a function **buildGraph** that is used to build the graph. This function expects an array of two-element arrays (the start and end points of the roads).

[↑ go up to Contents](#contents-link "go to description")

<a name="tracking_scalpel-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Tracking the scalpel
#### description:

> The village crows own an old scalpel that they occasionally use on special missions—say, to cut through screen doors or packaging. To be able to quickly track it down, every time the scalpel is moved to another nest, an entry is added to the storage of both the nest that had it and the nest that took it, under the name "scalpel" , with its new location as the value.
This means that finding the scalpel is a matter of following the breadcrumb trail of storage entries, until you find a nest where that points at the nest itself.
Write an async function **locateScalpel** that does this, starting at the nest on which it runs. You can use the **anyStorage** function defined earlier to access storage in arbitrary nests. The scalpel has been going around long enough that you may assume that every nest has a "scalpel" entry in its data storage.
Next, write the same function again without using async and await.

[↑ go up to Contents](#contents-link "go to description")

<a name="promise_all-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Building Promise.all
#### description:

> Given an array of promises, **Promise.all** returns a promise that waits for all of the promises in the array to finish. It then succeeds, yielding an array of result values. If a promise in the array fails, the promise returned by **all** fails too, with the failure reason from the failing promise.
Implement something like this yourself as a regular function called **Promise_all**.
Remember that after a promise has succeeded or failed, it can’t succeed or fail again, and further calls to the functions that resolve it are ignored. This can simplify the way you handle failure of your promise

[↑ go up to Contents](#contents-link "go to description")

<a name="language_arrays-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Arrays
#### description:

> Add support for arrays to Egg language by adding the following three functions to the top scope: **array(...values)** to construct an array containing the argument values, **length(array)** to get an array’s length, and **element(array, n)** to fetch
the nth element from an array.

[↑ go up to Contents](#contents-link "go to description")

<a name="language_comments-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Comments
#### description:

> It would be nice if we could write comments in Egg. For example, whenever we find a hash sign ( # ), we could treat the rest of the line as a comment and ignore it, similar to // in JavaScript.
We do not have to make any big changes to the parser to support this. We can simply change **skipSpace** to skip comments as if they are whitespace so that all the points where skipSpace is called will now also skip comments. Make
this change.

[↑ go up to Contents](#contents-link "go to description")

<a name="language_scope-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Fixing scope
#### description:

> Add a special form **set**, similar to **define**, which gives a binding a new value, updating the binding in an outer scope if it doesn’t already exist in the inner scope. If the binding is not defined at all, throw a ReferenceError (another
standard error type).

[↑ go up to Contents](#contents-link "go to description")

<a name="table_DOM-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Build a table
#### description:

> Write a function that draws an HTML Table from an Array of objects that contains data called MOUNTAINS. Its columns are automatically derived from the objects, by taking the property names of the first object in the data. Add the resulting table to the element with an id attribute of "mountains" so that it becomes visible in the document. Once you have this working, right-align cells that contain number values by setting their style.textAlign property to "right".

[↑ go up to Contents](#contents-link "go to description")

<a name="element_tagname-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Elements by tag name
#### description:

> The document.getElementsByTagName method returns all child elements with a given tag name. Implement your own version of this as a function that takes a
node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name.
To find the tag name of an element, use its nodeName property. But note that this will return the tag name in all uppercase. Use the toLowerCase or toUpperCase string methods to compensate for this.

[↑ go up to Contents](#contents-link "go to description")

<a name="cat_hat-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### The cat's hat
#### description:

> Extend the cat animation defined earlier so that both the cat and his hat ( \<img src="img/hat.png"\> ) orbit at opposite sides of the ellipse.
Or make the hat circle around the cat. Or alter the animation in some other interesting way.

[↑ go up to Contents](#contents-link "go to description")

<a name="ballon-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Ballon
#### description:

> Inflate or deflate this Balloon until explodes using arrow keys

[↑ go up to Contents](#contents-link "go to description")

<a name="mouse_trail-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Mouse trail
#### description:

> In this exercise, implement a **mouse trail** -- a series of elements that would follow the mouse pointer as you moved it across the page.

[↑ go up to Contents](#contents-link "go to description")

<a name="tabs-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Tabs
#### description:

> Tabbed panels are widely used in user interfaces. They allow you to select an interface panel by choosing from a number of tabs “sticking out” above an element.
In this exercise you must implement a simple tabbed interface. Write a function, **asTabs**, that takes a DOM node and creates a tabbed interface showing
the child elements of that node. It should insert a list of \<button\> elements at the top of the node, one for each child element, containing text retrieved from the **data-tabname** attribute of the child. All but one of the original children
should be hidden (given a display style of none). The currently visible node can be selected by clicking the buttons.
When that works, extend it to style the button for the currently selected tab differently so that it is obvious which tab is selected.

[↑ go up to Contents](#contents-link "go to description")

<a name="game_over-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Game over
#### description:

> It’s traditional for platform games to have the player start with a limited number of lives and subtract one life each time they die. When the player is out of lives, the game restarts from the beginning.
Adjust **runGame** to implement lives. Have the player start with three. Output the current number of lives (using console.log ) every time a level starts.

[↑ go up to Contents](#contents-link "go to description")

<a name="pausing_game-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Pausing Game
#### description:

> Make it possible **to pause (suspend) and unpause** the game by pressing the **Esc** key.
This can be done by changing the runLevel function to use another keyboard event handler and interrupting or resuming the animation whenever the Esc key is hit.
The runAnimation interface may not look like it is suitable for this at first glance, but it is if you rearrange the way runLevel calls it.
When you have that working, there is something else you could try. The way we have been registering keyboard event handlers is somewhat problematic.
The arrows object is currently a global binding, and its event handlers are kept around even when no game is running. You could say they leak out of our
system. **Extend trackKeys** to provide a way **to unregister** its handlers and then change runLevel **to register its handlers** when it starts and unregister them again when it is finished.

[↑ go up to Contents](#contents-link "go to description")

<a name="monster-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### A monster
#### description:

> It is traditional for platform games to have enemies that you can jump on top of to defeat. This exercise asks you **to add such an actor type to the game**. We’ll call it **a monster**. Monsters move only horizontally. You can make them move in the direction of the player, bounce back and forth like horizontal lava, or have any movement pattern you want. The class doesn’t have to handle falling, but it should make sure the monster doesn’t walk through walls.
When a monster touches the player, the effect depends on whether the player is jumping on top of them or not. You can approximate this by checking
whether the player’s bottom is near the monster’s top. If this is the case, the monster disappears. If not, the game is lost.

[↑ go up to Contents](#contents-link "go to description")

<a name="everything-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Everything
#### description:

> Implements _every_ as a function that takes an array and a predicate function
as parameters. I've done two versions, one using a loop and one using the _some_ method

[↑ go up to Contents](#contents-link "go to description")

<a name="shapes-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Shapes
#### description:

> Write a program that draws the following shapes on a canvas:
1. A trapezoid (a rectangle that is wider on one side)
2. A red diamond (a rectangle rotated 45 degrees or 1⁄4 π radians)
3. A zigzagging line
4. A spiral made up of 100 straight line segments
5. A yellow star
Create a function for each shape. Pass the position, and optionally other properties such as the size or the number of points, as parameters.

[↑ go up to Contents](#contents-link "go to description")

<a name="pie_chart-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### The pie chart
#### description:

> Earlier in the chapter, we saw an example program that drew a pie chart.
**Modify** this program so that the name of each category is shown next to the slice that represents it. Try to find a pleasing-looking way to automatically position this text that would work for other data sets as well. You may assume
that categories are big enough to leave ample room for their labels.

[↑ go up to Contents](#contents-link "go to description")

<a name="bouncing_ball-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### A bouncing ball
#### description:

> Use the **requestAnimationFrame** technique that we saw in Chapter 14 and Chapter 16 **to draw a box with a bouncing ball in it.** The ball moves at a constant speed and bounces off the box’s sides when it hits them.

[↑ go up to Contents](#contents-link "go to description")

<a name="content_negotiation-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Content negotiation
#### description:
> The URL https://eloquentjavascript.net/author is configured to respond with either **plaintext, HTML, or JSON**, depending on what the client asks for. These formats are identified by the standardized media types text/plain , text/html , and application/json.
**Send requests to fetch all three formats** of this resource. Use the headers property in the options object passed to fetch to set the header named Accept to the desired media type.
Finally, **try asking for** the media type **application/rainbows+unicorns** and see which status code that produces.

[↑ go up to Contents](#contents-link "go to description")

<a name="js_workbench-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### A JavaScript workbench
#### description:
> **Build an interface that allows people to type and run pieces of JavaScript code.** Put a button next to a \<textarea\> field that, when pressed, uses the Function constructor we saw in Chapter 10 to wrap the text in a function and call it.
Convert the return value of the function, or any error it raises, to a string and display it below the text field.

[↑ go up to Contents](#contents-link "go to description")

<a name="conway_game_of_life-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Conway's Game of Life
#### description:
> **Conway’s Game of Life is a simple simulation that creates artificial “life” on a grid**, each cell of which is either alive or not. Each generation (turn), the following rules are applied:
• Any live cell with fewer than two or more than three live neighbors dies.
• Any live cell with two or three live neighbors lives on to the next generation.
• Any dead cell with exactly three live neighbors becomes a live cell.
A neighbor is defined as any adjacent cell, including diagonally adjacent ones.
Note that these rules are applied to the whole grid at once, not one square at a time. That means the counting of neighbors is based on the situation at the start of the generation, and changes happening to neighbor cells during this generation should not influence the new state of a given cell.
**Implement this game** using whichever data structure you find appropriate.
**Use Math.random to populate the grid** with a random pattern initially. **Display it as a grid of checkbox fields**, with a button next to it to advance to the next generation. **When the user checks or unchecks the checkboxes, their changes
should be included when computing the next generation**.

[↑ go up to Contents](#contents-link "go to description")

<a name="keyboard_bindings-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Keyboard bindings
#### description:
> **Add keyboard shortcuts** to the application. The first letter of a tool’s name selects the tool, and control-Z or command-Z activates undo.
Do this by modifying the PixelEditor component. **Add a tabIndex property of 0 to the wrapping <div>** element so that it can receive keyboard focus. Note
that the property corresponding to the tabindex attribute is called tabIndex, with a capital I, and our elt function expects property names. Register the key event handlers directly on that element. This means you have to click, touch,
or tab to the application before you can interact with it with the keyboard.

[↑ go up to Contents](#contents-link "go to description")

<a name="efficient_drawing-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Efficient drawing
#### description:
> During drawing, the majority of work that our application does happens in **drawPicture**. Creating a new state and updating the rest of the DOM isn’t very expensive, but repainting all the pixels on the canvas is quite a bit of work.
**Find a way to make the syncState method of PictureCanvas faster** by redrawing only the pixels that actually changed.
Remember that drawPicture is also used by the save button, so if you change it, either make sure the changes don’t break the old use or create a new version with a different name.
Also note that changing the size of a \<canvas\> element, by setting its width
or height properties, clears it, making it entirely transparent again.

[↑ go up to Contents](#contents-link "go to description")

<a name="circles-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Circles
#### description:
> Define a tool called circle that draws a filled circle when you drag. The center of the circle lies at the point where the drag or touch gesture starts, and its radius is determined by the distance dragged.

<a name="proper_lines-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Proper Lines
#### description:
> This is a more advanced exercise than the preceding two, and it will require you to design a solution to a nontrivial problem. Make sure you have plenty of time and patience before starting to work on this exercise, and do not get discouraged by initial failures.
On most browsers, when you select the draw tool and quickly drag across the picture, you don’t get a closed line. Rather, you get dots with gaps between them because the "mousemove" or "touchmove" events did not fire quickly
enough to hit every pixel.
**Improve the draw tool to make it draw a full line.** This means you have to make the motion handler function remember the previous position and connect that to the current one.
To do this, since the pixels can be an arbitrary distance apart, you’ll have to write a general line drawing function.
A line between two pixels is a connected chain of pixels, as straight as possible, going from the start to the end. Diagonally adjacent pixels count as a connected. So a slanted line should look like the picture on the left, not the picture on the right.
Finally, if we have code that draws a line between two arbitrary points, we
might as well use it to also define a line tool, which draws a straight line between the start and end of a drag.

[↑ go up to Contents](#contents-link "go to description")

<a name="search_tool-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Search tool
#### description:
> On Unix systems, there is a command line tool called grep that can be used to quickly search files for a regular expression.
Write a Node **script that can be run from the command line and acts somewhat like grep**. It treats its first command line argument as a regular expression and treats any further arguments as files to search. It should output the names of any file whose content matches the regular expression.
When that works, **extend it so that when one of the arguments is a directory, it searches through all files in that directory and its subdirectories.**
Use asynchronous or synchronous file system functions as you see fit. Setting things up so that multiple asynchronous actions are requested at the same time might speed things up a little, but not a huge amount, since most file systems can read only one thing at a time.

[↑ go up to Contents](#contents-link "go to description")

<a name="server-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Directory creation
#### description:
> Though the DELETE method in our file server is able to delete directories (using rmdir), the server currently does not provide any way to create a directory.
**Add support for the MKCOL method (“make column”)**, which should create a directory by calling mkdir from the fs module. MKCOL is not a widely used HTTP method, but it does exist for this same purpose in the WebDAV standard, which specifies a set of conventions on top of HTTP that make it suitable for creating documents.

[↑ go up to Contents](#contents-link "go to description")

<a name="public-webspace-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### A public space on the web
#### description:
> Since the file server serves up any kind of file and even includes the right Content-Type header, you can use it to serve a website. Since it allows everybody to delete and replace files, it would be an interesting kind of website: one that can be modified, improved, and vandalized by everybody who takes the time
to create the right HTTP request.
**Write a basic HTML page that includes a simple JavaScript file. Put the
files in a directory served by the file server and open them in your browser.
Next, as an advanced exercise or even a weekend project, combine all the knowledge you gained from this book to build a more user-friendly interface for modifying the website—from inside the website.
Use an HTML form to edit the content of the files that make up the website, allowing the user to update them on the server by using HTTP requests, as described in Chapter 18.
Start by making only a single file editable. Then make it so that the user can select which file to edit. Use the fact that our file server returns lists of files when reading a directory.
Don’t work directly in the code exposed by the file server since if you make a mistake, you are likely to damage the files there. Instead, keep your work outside of the publicly accessible directory and copy it there when testing**

[↑ go up to Contents](#contents-link "go to description")

<a name="skillShare-persistent_data-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Disk persistence
#### description:
> The skill-sharing server keeps its data purely in memory. This means that when it crashes or is restarted for any reason, all talks and comments are lost.
Extend the server so that it stores the talk data to disk and automatically reloads the data when it is restarted. Do not worry about efficiency — do the simplest thing that works.

[↑ go up to Contents](#contents-link "go to description")

<a name="skillShare-comment_reset-link" style="display: inline-block;position: relative;top: -150px;visibility: hidden;"></a>
### Comment field resets
#### description:
> The wholesale redrawing of talks works pretty well because you usually can’t tell the difference between a DOM node and its identical replacement. But there are exceptions. If you start typing something in the comment field for a talk in one browser window and then, in another, add a comment to that talk, the field in the first window will be redrawn, removing both its content and its focus.
In a heated discussion, where multiple people are adding comments at the same time, this would be annoying. Can you come up with a way to solve it?

[↑ go up to Contents](#contents-link "go to description")

