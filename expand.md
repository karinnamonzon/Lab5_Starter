1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)
    - It is important to put thought into IDs and Classes, as they are crucial for identifying and styling elements in HTML, CSS, and JavaScript. Having accurate and clear IDs and Classes leads to code clarity maintainability, and accessibility. Without proper use, code can deteriorate into a web of issues and misaligned links.
      
2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?
    - Data attributes are HTML attributes used to store extra information about specific elements. They are useful for custom data storage, while not affecting any actions, and can be good for adding structured data to elements that can be referred to in the later segments of code.
      
3. What is a DOM fragment? Why are they powerful?
    - A DOM fragment is a lightweight in-memory representation of a portion of the DOM tree, and are powerful as they can manipulate nodes easily without causing any major conflicts over the entire document.
      
4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?
    - The point of a "Virtual DOM" is to increase the performance in updating the UI, as it does not update the entire page when making changes, only updating small elements and interactions by dissecting the page into smaller parts. However, it can lead to overhead, using more resources for the task than necessary.
      
5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?
    - Since ```class``` is a reserved keyword, it cannot be used as a selector, and so the ```className``` property is used instead to access the ```class``` attribute of an element.
      
6. What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?
    - ```addEventListener()``` is more versatile in use, as it has several event atributes it can use to trigger the function call, while ```onClick()``` is much better for simpler applications, being much more clear for code clarity. Overall, for more precise functions, ```addEventListener()``` is more effective, while for quick and simple actions, ```onClick()``` is more applicable.
