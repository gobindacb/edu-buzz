import React from 'react';


const Home = () => {

    return (

        <div>

            <div className="px-8 py-2 bg-gray-900 text-gray-100">
                <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
                    <div>
                        <span>Get up to 50% off your first order + free support,&nbsp;</span>
                        <a href="#" rel="noopener noreferrer" className="underline">sign up</a>today!
                    </div>
                    <a href="#" rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
                        <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
                            <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
                        </svg>
                        <span className="hover:underline focus-visible:underline">Gift Cards</span>
                    </a>
                </div>
            </div>
            <section className="bg-gray-400 text-gray-100">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://previews.123rf.com/images/artinspiring/artinspiring2005/artinspiring200500680/146623095-website-analysis-online-service-or-platform-set-web-page-improvement-for-business-promotion-as-a-par.jpg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">We
                            <span className="text-violet-800">EDU BUZZ</span>alwayas with you.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">EDU BUZZ is one of the most popular platform in
                            <br></br> offline and online. We alwayas with you for education.
                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900">Enroll Now</a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100">Log In</a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Home;