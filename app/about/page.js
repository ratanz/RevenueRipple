import React from 'react'

const About = () => {
    return (

        <div className='bg-[#000000]bg - [radial - gradient(#ffffff33_1px,#00091d_1px)] bg - [size: 20px_20px]' >
            <div className=" min-h-screen flex  justify-center">
                <div className="max-w-4xl mx-auto px-8 md:px-4 py-10">
                    {/* About page on Get me a Chai */}
                    <h1 className="text-4xl font-bold text-center mb-8">About Get me a Chai</h1>
                    <h2 className="text-2xl font-bold mb-6 text-center gap-4">
                        Welcome to Get me a Chai! We're a platform similar to Buy Me a Coffee
                    </h2>
                    <li className='my-2 mb-7 flex gap-2 text-lg font-mono items-center bg-gray-800 rounded-xl'>
                        <img width={35} src="tea.gif" alt="user avatar" />
                        <span>
                            Our mission is simple: to provide chai enthusiasts with a convenient way to support their favorite creators by buying them a chai. With just a few clicks, you can show your appreciation and help fuel their creativity.
                        </span>
                    </li>
                    <li className='my-2 mb-7 flex gap-2 text-lg font-mono items-center bg-gray-800 rounded-xl'>
                        <img width={35} src="tea.gif" alt="user avatar" />
                        <span>
                            Get me a Chai is built using Tailwind CSS for sleek and responsive design, Next.js for a fast and intuitive user experience, MongoDB for data storage, and Node.js for backend functionality. We're constantly working to improve our platform and add new features, so stay tuned for updates!
                        </span>
                    </li>

                    <li className='my-2 mb-7 flex gap-2 text-lg font-mono items-center bg-gray-800 rounded-xl'>
                        <img width={35} src="tea.gif" alt="user avatar" />
                        <span>
                            Whether you're a creator looking for support or a chai enthusiast looking to spread some love, we invite you to join the Get me a Chai community and make someone's day a little brighter. Cheers!
                        </span>
                    </li>
                </div>
            </div>
        </div >
    )
}

export default About


export const metadata = {
    title: 'About - Get Me A chai',
  }
