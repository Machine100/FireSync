

f1 = () => { i=1; console.log(i) }

f1();

--------------------------------


f1 = () => {
        // if a var is declared in a function's blockscope, is it available in the global context?
        //    no, this just means sub calls will have access to it.
        // What is the vocab word for contexts called previous to the current one?
        //    Higher order?
        // if you are in a block scope and wish to declare a var and bind it to another context in the _context stact_, is this possible?
        //    
        // Are var, let, and const all placed in the stack exactly the same? There are diferences in how they behave. Is this because
        // they are objects with different properties? Is the stack itself an object with properties to designate what the entries are?
        //
        // are let and const not available to _sub contexts_?
        //
        // are variables passed by value inside a closure to sub contexts
        //
        //   or are they availble by reference via the context ////window?
        // 
        // to pass by value, does it need to be stored somewhere?
        //
        //   is this what a closure is? Is this the only container that does this?
        //
        // does a closure not only pass down? is is actually more that that in that it ties a function definition to the context it is executed?
        //
        //   how is this differend from bind?
        //
        //  what is a higher order function? why are map, , and reduce taled about at the same time?

        // functions are written into memory as the actual RHS value, not as a reference? The are contained in the stack? can the stack hold this much?

        // Traditionally functions are all declared thin the global scope. With js they can be declared into any scope?
        // After they are declared in that scope, they could be executed in a different scope. So why does it matter where they are declared.?
        // the picure i have been drawing is an execution diagram. it shows who called who. it is not a declaretion model. js has two phases.
        // Do I also need to draw a who declared who diagram and show the relationship beween the models?

        // No matter where a function is invoked from, or even how it is invoked, its lexical scope is only defined by where the function was declared.
        // cheating the lexical scope is possible with eval and with, but do not do it.



        // in js you can do more than instantiate the class. You can instaantiate the methods also.
        // is there a difference between instantiating a method and placing the function into a value?

        // when a function is placed into a value, has it already been compiled?

        // The same identifier name can be specified at multiple layers of nested scope, which is called "shadowing" (the inner identifier "shadows" the outer identifier).
        // Global variables are also automatically properties of the global object (window in browsers   window.a
        // This technique gives access to a global variable which would otherwise be inaccessible due to it being shadowed. However, non-global shadowed variables cannot be accessed.

        // identifiers as anotther word for variable

        // Function scope encourages the idea that all variables belong to the function,
        // This design approach can be quite useful, and certainly can make full use of the "dynamic" nature of JavaScript variables to take on values of different types as needed.

        //  the identifier name foo itself "pollutes" the enclosing scope 
        // We also have to explicitly call the function by name (foo()) so that the wrapped code actually executes
        // Anonymous function expressions
        // noww that we have a function as an expression by virtue of wrapping it in a ( ) pair, we can execute that function by adding another () on the end, like (function foo(){ .. })()
        // iife
        // Of course, IIFE's don't need names, necessarily -- the most common form of IIFE is to use an anonymous function expression. While certainly less common, naming an IIFE has all the aforementioned benefits over anonymous function expressions, so it's a good practice to adopt.

        // In Chapter 4, we will address hoisting, which talks about declarations being taken as existing for the entire scope in which they occur.

		// However, declarations made with let will not hoist to the entire scope of the block they appear in. Such declarations will not observably "exist" in the block until the declaration statement.

		// the return statement in a function ends execution. If there is no return, the closing } is an implicit return.

		//


}

