

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

        // in js you can do more than instantiate the class. You can instaantiate the methods also.
        // is there a difference between instantiating a method and placing the function into a value?

        // when a function is placed into a value, has it already been compiled?
        

}

