# Technical-Interview-Questions-In-JavaScript
This is just my private note for interview. If you found this repo by googling, please check below awesome links instead.

* https://github.com/MaximAbramchuck/awesome-interview-questions#javascript
* https://github.com/kennymkchan/interview-questions-in-javascript
* https://github.com/careercup/CtCI-6th-Edition-JavaScript-ES2015

## Simple way to run JavaScript in IDE without Web Browser

```bash
Install vscode
Install Code Runner Extension #https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
Run Code Runner
```

# JavaScript
 - Single threaded and synchronous execution
 - Object Based Programming and Functional Programming
 - Dynamic Typing

## Terms

**Vanilla JavaScript** : Vanilla often refers to pure or plain. So in terms of programming languages, it means either without the use of 3rd party libraries or without the use of frameworks.

**Syntax parser** : A program that reads your code and determines what it does and if its grammar is valid.

**Lexical Environment** : Where something sits physically in the code you write.
‘Lexical’ means ‘having to do with words or grammar’. A lexical environment exists in programming languages in which where you write something is important.

**Variable Environment** : Where the variables live and how they relate to each other in memory.

**Operator Precedence** : Which operator function get called first. 

**Associativity** : What order operator functions get called in - left to right or right to left

**Coercion** : Converting a value from one time to another. This happens quite often in JavaScript because it's dynamically typed.

**Mutate** : to change something (**Immutable** : it cannot be changed)

**Syntactic Sugar** : A feature that only changes how you type something, but nothing changes under the hood

**First Class Functions** : everything you can do with other types you can do with functions

**Whitespace** : Invisible characters that create literal 'space' in your written code (Carriage returns, tabs, spaces)

**Polyfill** : code that adds a feature which the engine may lack. 

**Method Chaining** : Calling one method after another, and each method affects the parent object. So, obj.method1().method2() where both method end up with a 'this' variable pointing at 'obj'

## Hoisting

setup memory space for variables and functions. Hoisting is the concept in which Javascript, by default, moves all declarations to the top
of the current scope. As such, a variable can be used before it has been declared. Note that Javascript only hoists declarations and not initializations.

## Execution Context

A wrapper to help manage the code that is running.
There are lots of lexical environments. Which one is currently running is managed via execution contexts. It can contain things beyond what you’ve write in your code.

By browser, an execution contexts is created at the global level, and there are Global Object (window object in case of browser), 'this' and outer environment. (in case of global execution context, it is null)

Execution Context consists of two phase:

* Creation Phase
  - global object, this, outer environment
  - setup memory space for variables and functions (hoisting)

* Execution Phase
  - Run the code line by line.

Execution Stack : stack of execution contexts

```javascript
//b execution contexts
function b() {
  var myVar;
  console.log(myVar);
}

//a execution contexts
function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

//global execution contexts
var myVar = 1;
console.log(myVar);
a();
console.log(myVar);

//1
//2
//undefined
//1
```

## Scope Chain

Every execution context has a references to its outer environments.

```javascript
function b() {
  console.log(myVar); 
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();
//1 - because b is physically, lexically global
```

```javascript
function a() {
  function b() {
    console.log(myVar); //2
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```

```javascript
function a() {
  function b() {
    console.log(myVar); //1
  }
  b();
}

var myVar = 1;
a();
```

## Scope 
where a variable is available in your code
  - Global Scope, Local Scope
  - JavaScript uses function-level scope.
  - let keyword enable to use block-level scope.

## Existence and Boolean

undefined, null, '', 0 is false

Boolean(0) is false
Boolean('0') is true

## Function Statement and Function Expressions

```javascript
//function statement
function greet() {
  console.log('hi');
}

//function expression
anonymousGreet(); // Uncaught TypeError: undefined is not a function,
                  // because function expressions are not hoisted.

var anonymousGreet = function(){
  console.log('hi');
}
```
## Call by Value, References

- Call by value : Primitive Types (undefined, null, boolean, number, string, symbol)
- Call by references : Object

```javascript
// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;

console.log(a); // 2
console.log(b); // 3

// by reference (all objects (including functions))
var c = { greeting: 'hi' };
var d;

d = c;
c.greeting = 'hello'; // mutate

console.log(c); // hello
console.log(d); // hello

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola'; // mutate   
}

changeGreeting(d);
console.log(c); // Hola
console.log(d); // Hola

// equals operator sets up new memory space (new address)
c = { greeting: 'howdy' };
console.log(c); // Howdy
console.log(d); // Hola
```

## this

```javascript
console.log(this); //Global Execution Context : Window Object

function a(){
  console.log(this); //also Window Object
}

var b = function() {
  console.log(this); //also Window Object
};
a();

var c = {
  name: 'The c object',
  log: function() {
    var self = this; //this can cover whole project

    this.name = 'Updated c object';
    console.log(this); //c object

    var setname = function(newname) {
      this.name = newname; //Window.name has been created (!?) internal function of object
    }
    setname('Updated again! the c object');
  }
};

c.log();
```

## Array

Array can hold anything.

```javascript
var arr = [
  1,
  false,
  {
    name:'Tony',
    address: '111 Main St.'
  },
  function(name) {
    var greeting = 'Hello ';
    console.log(greeting + name);
  },
  "hello"
];

console.log(arr);
arr[3](arr[2].name);
```

## arguments and spread

The parameters you pass to a function in general. Javascript gives you a keyword of the same name which contains them all.

```javascript
function greet(firstname, lastname, language, ...others) {

  language = language || 'en';

  if (arguments.length === 0) {
    console.log('Missing paramenters!');
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments); //array-like : italic []
}

greet();
```

## Function Overloading

Javascript does not allow function overloading like other language such as Java, C++

```javascript
function greet(firstname, lastname, language) {
  language = language || 'en';

  if(language === 'en') {
    console.log('Hello, ' + firstname + '' + lastname);
  } else if(language === 'es') {
    console.log('Hola, ' + firstname + '' + lastname);
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}
function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

```

## Automatic Semicolon Insertion

```javascript
function getPerson() {
  return 
  {
    firstname: 'Tony'
  }
}

console.log(getPerson()); //undefined because 'return;', watch out!
```

## Immediately Invoked Function Expressions (IIFE)

It is useful for safety because it wraps all its code in an immediately invoked function.
It's something that you can imitate in your own code to make sure you aren't colliding with other code when you are creating something reusable.

```javascript
var greeting = function(name) {
  return 'Hello ' + name;
}('John');

console.log(greeting); //greeting contains return value from IIFE

var firstname = 'John';

(function(name) {
  var greeting = 'Inside IIFE: Hello';
  console.log(greeting + ' ' + name);
}(firstname)); 
/*wrapped in parentheses, so the the javascript engine understands that 
I don't mean this to be my kind of normal function statement. to trick the syntax parser.*/

(3*4); //valid expression
```

## Closure

 - Inner function can access to variables in the parent function scope.
 - Closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.
 - Everytime you call a function, it gets its own execution context, and any functions created inside of it will point to that execution context.
 - Useful in hiding the implementation of functionality while still revealing the interface. (encapsulation)
 - Function Factory, Function Currying
 
```javascript
function parent(){
  var title = 'hello';
  function child(){
    alert(title);
  }
  child();
}
parent();
```

```javascript
function parent(){
    var title = 'hello';
    return function(){
        alert(title);
    }
}
var child = parent();
child();
```

```javascript
function buildFunctions() {
  var arr = [];
  for(var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); //3
fs[1](); //3
fs[2](); //3
```

```javascript
function buildFunctions() {
  var arr = [];
  for(var i = 0; i < 3; i++) {
    //let j = i; es6 way
    arr.push(
      (function(j) {
        return function() {
          console.log(j);
        }
      })(i);
    );
  }
  return arr;
}

var fs = buildFunctions();
fs[0](); //3
fs[1](); //3
fs[2](); //3
```

```javascript
function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hello ' + firstname + ' ' + lastname);
    }

    if (language === 'es') {
      console.log('Hola ' + firstname + ' ' + lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');

greetEnglish('John', 'Doe'); //Created a function that is using 'en' value always. 
greetSpanish('John', 'Doe');
```

## Closure and Callback

```javascript
function sayHiLater() {
  var greeting = 'Hi!';

  setTimeout(function(){
    console.log(greeting); //greeting is closured
  }, 3000);
}

sayHiLater();

//jQuery uses function expressions and first-class functions!
$('button').click(function() {

});
```

## Closure and IIFE

```javascript
const generate = (function() {
  let num = 1;
  return function() {
    return num++;
  }
})();

console.log(generate());
console.log(generate());
console.log(generate());
console.log(generate());

/*
1. The variable 'generate' is assigned the return value of a self-invoking function.
2. The self-invoking function only runs once. It sets the num to 1, and returns a function expression.
3. This way 'generate' becomes a function. The wonderful part is that it can access the 'num' in the parent scope.
4. This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
5. The counter is protected by the scope of the anonymous function, and can only be changed using the 'generate'
*/
})();

```

## call() apply() bind()
- To change what this keyword is.
- function currying : creating a copy of a function but with some preset parameters.
- function borrowing : var args = Array.prototype.slice.call(arguments);

```javascript
function.call(person, 'en', 'es');
function.apply(person, ['en', 'es']);
```

```javascript
//function currying
function multiply(a, b) {
  return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
multipleByTwo(4);
```

## Functional Programming

- underscore.js
- lodash

```javascript
//underscore.js
var arr6 = _.map(arr1, item => item * 3);
var arr7 = _.filter([2,3,4,5,6,7], item => item % 2 === 0);
```

## Object-Oriented JavaScript and Prototypal Inheritance

* Classical Inheritance
  - Java, C# way of inheritance
  - Verbose

* Prototypal Inheritance
  - Simple, flexible, extensible, easy to understand

## Prototype

All objects that including functions have a prototype property.

**Prototype Chain**

```javascript
var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullname: function() {
    console.log(this); //john when call john.getFullname();
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

var jane = {
  firstname: 'Jane'
}

//don't do this EVER! for demo purposes only!!
john.__proto__ = person;
console.log(john.getFullname()); //John Doe

jane.__proto__ = person;
console.log(jane.getFullname()); //Jane Default

```

**Base Object (Object {})** : the very bottom of the prototype chain. Everything eventually leads to the base object.

**Empty Function** : any function you create in JavaScript will have this proto.

```javascript
var a = {};
var b = function() {};
var c = [];

a.__proto__.toString();
b.__proto__.apply();
c.__proto__.length
```

### Reflection and Extend

Reflection : An object can look at itself, listing and changing its properties and methods.

```javascript
var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    console.log(this); //john when call john.getFullname();
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

john.__proto__ = person;

for (var prop in john) {
  if (john.hasOwnProperty(prop) {
    console.log(prop + ': ' + john[prop]);
  } // this does not print getFullName
}

var jane = {
  address: '111 Main St.',
  getFormalFullName: function() {
    return this.lastname + ', ' + this.firstname;
  }
}

var jim = {
  getFirstname : function() {
    return firstname;
  }
}

_.extend(john, jane, jim);
console.log(john);

```

## Function Constructor and 'new' and 'prototype'

A normal function that is used to construct object.
The 'this' variable points a new empty object, and that object is returned from the function automatically.

The prototype property on a function is not the prototype of the function (__proto__)

```javascript
function Person(firstname, lastname) {
  console.log(this); // Person {}
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked');

  //return { greeting: 'i got in the way'};
}

Person.prototype.getFullName = function() {
  return this.firstname + ' ' + this.lastname;
}

//John points to Person.prototype as its prototype as its __proto__, and so does Jane.

// function takes up memory space. By adding prototype method,
// it only takes one space even though thousand object uses it.

var john = new Person('John', 'Doe');
console.log(john);
var jane = new Person('Jane', 'Doe');
console.log(jane);

var dan = Person('Dan', 'Doe');
console.log(dan);
//pros of function constructer
//so we always use Capital Letter
```

## Built-in function constructor

```javascript
String.prototype.isLengthGreaterThan = function(limit) {
  return this.length > limit;
}

Number.prototype.isPositive = function() {
  return this > 0;
}

console.log('test'.isLengthGreaterThan(3)); //true
console.log(3.isPositive());  //error 
console.log(new Number(3).isPositive()); // true

var a = 3;
var b = new Number(3);

a == b //true
a === b //false - dangerous to use built-in function constructor

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for(var prop in arr) { //dangerous
  console.log(prop + ': ' + arr[prop]);
} 
```

## Object.create and Pure Prototypal Inheritance

```javascript
// this is called polyfill
if(!Object.create) {
  Object.create = function(o) {
    function F() {}
    F.prototype = o;
    return new F();
  }
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function() {
    return 'Hi ' + this.firstname;
  }
}

var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john);

```

## ES6 and Classes

This is just syntactic sugar, same as prototypal inheritance.

```javascript
class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  great() {
    return 'Hi ' + firstname;
  }
}

var john = new Person('John', 'Doe');

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return 'Yo ' + firstname;
  }
}
```

## typeof, instanceof

```javascript
var a = 3;
console.log(typeof a); // number (lower case)

var b = "Hello";
console.log(typeof b); // string (lower case)

var c = {};
console.log(typeof c); // object

var d = [];
console.log(typeof d); // object - weird
console.log(Object.prototype.toString.call(d)); // [object Array] better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); //object
console.log(e instanceof Person); // true

console.log(typeof undefined); // undefined - makes sense
console.log(typeof null); // object - a bug since, like, forever...

var z = function() { };
console.log(typeof z); // function
```

## Strict Mode

use strict : it prevents developers from using undeclared variables.

```javascript
function logNewPerson() {
  "use strict";

  var person2;
  persom2 = {};
  console.log(persom2); // Error
}

var person;
persom = {};
console.log(persom); // Object {} without 'use strict';
logNewPerson();
```
# Etc

## document vs window

The window is the actual global object.
The screen is the screen, it contains properties about the user's display.
The document is where the DOM is.

## prototype vs __ proto __

## preventDefault vs stopPropagation

## Event Bubbling

When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

```html
<div onclick="alert('The handler !')">
  <em>If you click on <code>EM</code>, the handler on <code>DIV</code> runs.</em>
</div>
```

You can stop it by event.stopPropagation().

## Web Vulnerability

- Cross-Site Scripting (XSS) : hacker injects browser side code into the web application. When the end-user run the injected code, cookie or session or other sensitive information can be delivered to hacker.

- Cross Origin Resource Sharing (CORS) : If you set Access-Control-Allow-Origin to *, it can allow anyone to send a request to your server, potentially revealing sensitive information in the response.

## Memory Leak

1: Accidental global variables
2: Forgotten timers or callbacks

https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/

## Generator

yield
