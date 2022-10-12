import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                    <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Q-1: What is the purpose of react router?</summary>
                            <div className="px-4 pb-4">
                                <p>A-1: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Q-2: How does the context API works?</summary>
                            <div className="px-4 pb-4">
                                <p>A-2: In a few words, the Context API allows you to have a central store where your data lives (yes, just like in Redux). The store can be inserted into any component directly. You can cut out the middleman! The refactoring is quite easy–we don't have to make any changes to how the components are structured.</p>
                            </div>
                        </details>
                        <details>
                            <summary className="py-2 outline-none cursor-pointer focus:underline">Q-3: What is useref in react?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>A-3: Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div ref=myRef  , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;