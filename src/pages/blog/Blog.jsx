import React from 'react';

const Blog = () => {
    return (
        <div className='my-container bg-slate-200'>
            <div className='w-9/12 text-center shadow-xl p-9 mx-auto mb-6 rounded-xl bg-cyan-200 text-black'>
                <p>Question: Tell us the difference between uncontrolled and controlled components?</p><br />
                <p className='text-start'>
                    Ans: In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only th Dom. if you are using a controlled component, you are in control of your form input values. <br />
                    Control Component: <br />1. Value managed by React State. <br />
                    2. Parent component updates state on user interaction. <br />
                    3. Data flows from parent component to component. <br />
                    4. Easier to debugging. <br />
                    5.Control component performance generally faster as there's less state management. <br />
                    6. Code complexity less complex code. <br /><br />
                    Uncontrolled component: <br /> 1. Value managed by component's own internal state. <br />
                    2. Component updates own internal state on user interaction. <br />
                    3. Data flows within the component. <br />
                    4. More difficult to debugging. <br />
                    5. Performance generally slower as there's more state management.
                    6. Code complexity more complex code
                </p>

            </div>
            <div className='w-9/12 text-center shadow-xl p-9 mx-auto mb-6 rounded-xl bg-cyan-200 text-black'>
                <p>Question: How to validate react props using propTypes?</p><br />
                <p className='text-start'>
                    Ans: Props and propTypes are important mechanisms for passing read-only attributes between React components.We can use react props, short for properties, to send data from one component to another. if a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.
                    When developing a React application, you'll need to structure and edfine your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly. 
                    
                </p>

            </div>
            <div className='w-9/12 text-center shadow-xl p-9 mx-auto mb-6 rounded-xl bg-cyan-200 text-black'>
                <p>Question: Tell us the difference between node js and express js?</p><br />
                <p className='text-start'>
                    Ans: Node.js: <br /> 1. Node.js is a server side runtime environment that allows developers to run JavaScript cod on the server. it provides a powerful set of built-in modules for file I/O , networking, and other low-level operations, as well as a rich ecosystem of third-party modules. <br />
                    2. Node.js can be used to build a wide range of server-side applications, including web servers, APIs, and command-line tools. <br />
                    3. Node.js provides low-level access to the network and file system, which can make it more flexible and powerful than Express.js for certain types of applications. <br />
                    <br /><br />
                    Express.js: <br /> 1. Express.js on the other hand is a framework built on top of node.js that provides a set of high-level abstractions and utilities for building web applications, such as routing, middleware, and templating. <br />
                    2. Express.js is specifically designed for building web applications, and provides a range of features for handling HTTP requests and responses, such as routing, middleware, and view rendering. <br />
                    3. Express.js however, provides a higher level of abstraction and is often easier to use and more productive for building web application. <br />
                
                </p>

            </div>
            <div className='w-9/12 text-center shadow-xl p-9 mx-auto mb-6 rounded-xl bg-cyan-200 text-black'>
                <p>Question: What is custom hook and why will you create a custom hook?</p><br />
                <p className='text-start'>
                    Ans: React custom Hook is a function that starts with the word "use" and may call other Hooks. The "useWhatever" naming convention mainly allows the linter to find bugs in how these hooks are used, for example, scenarios where their usage goes against the rules of hooks.
                    <br />Create a Custom React Hook: <br />Be called at the very top level of your React function to ensure that hooks are called in the same order each time a component renders. <br />
                    Start with the use keyword. Never be called inside a nested function , a loop or condition. Only be called form functional components in React.
                </p>

            </div>
        </div>
    );
};

export default Blog;
