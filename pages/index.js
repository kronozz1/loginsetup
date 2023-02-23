import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"


export default function Home() {
  return (
    <>
    <Head>
<link rel="icon" href="https://www.technoloader.com/favicon.ico" type="image/favicon"/>
    <title>
    TECHNO PROPERTY
    </title>
    </Head>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex w-full mb-20 flex-wrap">
      <h1 className="sm:text-6xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Rectify 
   <p></p>      Real State</h1>
      <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">For the first time, investors around the globe can buy into the US real estate market through fully-compliant, fractional, tokenized ownership. Powered by blockchain.</p>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzn2f8damJaoeMh0G2kS65ZzoW4Q32w9Hk-A&usqp=CAU"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="data:image/jpeg;base64,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"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5wo9ey9STe4WAQTVVJFViAEYi1quKwhBNg&usqp=CAU"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQgSscqc9zPToMmToZOouIUtxy4-qzTJQ_eEDkETegsYdsBb4e5tF-iFDa4N3UKXLqlws&usqp=CAU"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhpC25iT6W05Zc5XjztWrWuNHok0ukb_MPK57iATZUft6DxaAp6mHWbfEAsmdJ2OUGDU&usqp=CAU"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhj4qh-QU5cc6ikv6cz-Mj4l5XEnpBjfhvBQ&usqp=CAU"/>
        </div>
      </div>
    </div>
  </div>
</section>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">Who we are?</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">    TECHNO PROPERTY
 is the most experienced fractional ownership platform run by veterans with 100+ years of cumulative experience in commercial real estate</p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Authentic Cliche Forage</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Coloring Book Ethical</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Typewriter Polaroid Cray</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">Pack Truffaut Blue</span>
        </div>
      </div>
      <div className="p-2 sm:w-1/2 w-full">
        <div className="bg-gray-100 rounded flex p-4 h-full items-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
            <path d="M22 4L12 14.01l-3-3"></path>
          </svg>
          <span className="title-font font-medium">The Catcher In The Rye</span>
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Know more</button>
  </div>
</section>
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">1</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Choose Property</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">2</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Earn</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">3</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <circle cx="12" cy="5" r="3"></circle>
            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Track</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
    <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">4</div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-12 h-12" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">Sell</h2>
          <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>
</section>
  <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
  <img className="h-6 w-6" src="https://www.technoloader.com/favicon.ico" />
      <span className="ml-3 text-xl">TECHNO PROPERTY</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 TECHNO PROPERTY —
      <a href="#" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@Aman.eth</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a className="text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
    </>
  )
}


