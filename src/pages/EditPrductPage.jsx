import React, { useEffect } from 'react'

function EditPrductPage() {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
      }, []);
  return (
    <section className="w-full h-full flex flex-col items-start justify-start bg-gray-100 p-4">
        <div className="w-full flex items-start justify-start">
            <h1 className="text-xl font-medium">Edit Product</h1>
        </div>
       
        <div className="w-full flex flex-row items-center justify-between gap-3">
            <div className="w-2/4 p-2">
                <div className=" w-full px-3 md:px-0 mb-4">
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Product Name</span>
                        <input type="text" name="company" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="company" />
                    </label>
                </div>
                <div className="w-full flex gap-4 mb-4">
                    <div className="w-full px-3 md:px-0 ">
                        <label className="block">
                            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="your_company">Product name</span>
                            <input type="text" name="company" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="company" />
                        </label>
                    </div>
                    <div className=" w-full px-3 md:px-0 ">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="phone">Category</span>
                            <input type="tel" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="phone number" required="" />
                        </label>
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-4">
                    <div className=" w-full px-3 md:px-0 ">
                        <label className="block">
                            <span className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="your_company">Brand</span>
                            <input type="text" name="company" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="company" />
                        </label>
                    </div>
                    <div className="md:w-[50%] w-full px-3 md:px-0 lg:w-[30%]">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="phone">Price</span>
                            <input type="tel" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="phone number" required="" />
                        </label>
                    </div>
                    <div className="md:w-[50%] w-full px-3 md:px-0 lg:w-[30%]">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="phone">QTY</span>
                            <input type="tel" name="phone" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="phone number" required="" />
                        </label>
                    </div>
                </div>
                <div className="w-full flex gap-4 mb-4">
                    <div className=" w-full px-3 md:px-0 ">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Barcode</span>
                            <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                        </label>
                    </div>
                    <div className="md:w-[70%] w-full px-3 md:px-0 lg:w-[50%]">
                        <label className="block">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="country">SKU</span>
                            <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                        </label>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-4 mb-4">
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Description</span>
                       
                            <textarea className="w-full p-2 mt-1 bg-gray-200 rounded-md text-slate-800 border shadow-sm border-slate-300 focus:border-sky-500 focus:ring-sky-500" name="quote_message" placeholder="Enter Message" id="" cols="30" rows="4"></textarea>
                    </label>
                </div>
            </div>
            <div className="w-2/4 p-2 flex flex-col items-strat justify-start gap-4">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Image</span>
                <div className="w-full flex flex-row gap-2 items-strart justify-start">
                    <label for="dropzone-file" className="flex flex-col items-center w-2/4 py-5 px-2 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                        </svg>
                        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Click to upload or drag and drop</h2>
                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 512x512px)</p>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                    <label for="dropzone-file" className="flex flex-col items-center w-2/4 py-5 px-2 mx-auto mt-2 text-center bg-white border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-900 dark:border-gray-700 rounded-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-gray-500 dark:text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                        </svg>
                        <h2 className="mt-1 font-medium tracking-wide text-gray-700 dark:text-gray-200">Click to upload or drag and drop</h2>
                        <p className="mt-2 text-xs tracking-wide text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 512x512px)</p>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                <h1 className="after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700"><span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Attention: </span>You need to upload at least one img file for your product</h1>
                    <div className="w-full flex gap-4 mb-4">
                        <div className=" w-full px-3 md:px-0 ">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="email">Barcode</span>
                                <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                            </label>
                        </div>
                        <div className="w-full px-3 md:px-0">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="country">SKU</span>
                                <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                            </label>
                        </div>
                        <div className="w-full px-3 md:px-0">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="country">SKU</span>
                                <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                            </label>
                        </div>
                        <div className="w-full px-3 md:px-0">
                            <label className="block">
                                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700" data-translate="country">SKU</span>
                                <input type="text" name="city" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="city" required="" />
                            </label>
                        </div>
                    </div>
                    <div className="w-full flex items-center  justify-start gap-2">
                        <button typt="submit" className="block border rounded-md shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-indigo-500 hover:bg-indigo-700 text-white border-transparent focus:border-indigo-300 focus:ring-indigo-200">
                            Add Product
                        </button>
                        <button typt="submit" className="block border rounded-md shadow-sm font-bold py-2 px-4 focus:outline-none focus:ring focus:ring-opacity-50 bg-indigo-200 hover:bg-indigo-300 text-slate-900 border-transparent focus:border-indigo-300 focus:ring-indigo-200">
                            Save Product
                        </button>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default EditPrductPage