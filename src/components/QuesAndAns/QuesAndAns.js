import React from 'react';

const QuesAndAns = () => {
    return (
        <div className='container-fluid mx-auto my-5'>
            <h1 className='text-center border-bottom border-5 border-secondary pb-3'>How React Works ?</h1>
            <p className='p-5'>Firstly browser render engine recieves HTML file & CSS file then parse them and creates a DOM tree & a CSSOM tree. After creating both, browser engine creates a Render tree which goes through a layout phase which decides where every element should be placed. After that getting all things engine paints everything to output. So when we manupulate DOM everytime and change the data to the UI. Render tree re calculate the hole process again which is very inefficient. Here React uses Virtual DOM. When any state is changed Virtual DOM creates a replica of real DOM and compares through diff algorithm. After finding the changes it simply paint that particular changed element or data effeciently.</p>
            <h1 className='text-center border-bottom border-5 border-secondary pb-3'>How useState Works ?</h1>
            <p className='p-5'>useState is called React's hook. useState is a function itself when we call in our code it returns a variable to store data and a setter function to modify data of that variable under the hood. When we call useState it keeps e initial value and store it behind the scene. By calling it's setter function pass data through argument it simply compares the previous value and the new value. If any changes found it sets the new value to the variable, else it keep the previous data same.</p>
            <h1 className='text-center border-bottom border-5 border-secondary pb-3'>Difference between props and state</h1>
            <ul className='p-5'>
                <li>props are immutable but states are mutable.</li>
                <li>props are read-only but the states changes</li>
                <li>props helps to pass the data from a component to another component but state holds the data.</li>
            </ul>
        </div>
    );
};

export default QuesAndAns;