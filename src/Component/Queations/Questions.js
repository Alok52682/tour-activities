import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2 className='text-green-500 text-4xl font-bold mb-5'># Frequently Asked Questions</h2>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    How Does React Work?
                </div>
                <div className="collapse-content">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                    <p>One of the biggest advantages of using React is that we can infuse HTML code with JavaScript.</p>
                    <p>We can create a representation of a DOM node by declaring the Element function in React.</p>

                </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    Difference between props and state
                </div>
                <div className="collapse-content">
                    <div className="overflow-x-auto">

                        <h2 className='text-lg font-semibold'>PROPS</h2>
                        <li>The Data is passed from one component to another.</li>
                        <li>It is Immutable (cannot be modified).</li>
                        <li>Props can be used with state and functional components.</li>
                        <li>Props are read-only.</li>

                        <h2 className='text-lg font-semibold'>STATE</h2>
                        <li>The Data is passed within the component only.</li>
                        <li>It is Mutable ( can be modified).</li>
                        <li>State can be used only with the state components/class component (Before 16.0).</li>
                        <li>State is both read and write.</li>

                    </div>
                </div>
            </div>
            <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <input type="checkbox" className="peer" />
                <div className="collapse-title text-xl font-bold">
                    What is useEffect used for other than loading data?
                </div>
                <div className="collapse-content">
                    <h2 className='text-lg font-semibold'>useEffect use cases</h2>
                    <li>Running on state change: validating input field.</li>
                    <li>Running on state change: live filtering.</li>
                    <li>Running on state change: trigger animation on new array value.</li>
                    <li>Running on props change: update paragraph list on fetched API data update.</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price.</li>
                </div>
            </div>
        </div>
    );
};

export default Questions;