"use client"
import React from 'react'

const Herosection = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
            {/* Background Image with Overlay */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-purple-900/80"></div>
            </div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-ping"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-8 animate-fade-in-up leading-tight">
                    {/* Mobile/Tablet Layout - Vertical */}
                    <div className="block xl:hidden">
                        <span className="block animate-slide-in-left">Empowering</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-slide-in-right delay-300">
                            Businesses
                        </span>
                        <span className="block animate-slide-in-left delay-500">to Unlock Their</span>
                        <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-slide-in-right delay-700">
                            Full Potential
                        </span>
                    </div>
                    
                    {/* Desktop Layout - Horizontal */}
                    <div className="hidden xl:block">
                        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
                            <span className="animate-slide-in-left whitespace-nowrap">Empowering</span>
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-slide-in-right delay-300 whitespace-nowrap">
                                Businesses
                            </span>
                            <span className="animate-slide-in-left delay-500 whitespace-nowrap">to Unlock Their</span>
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-slide-in-right delay-700 whitespace-nowrap">
                                Full Potential
                            </span>
                        </div>
                    </div>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed animate-fade-in delay-1000 px-4">
                    <span className="block sm:inline font-light">Unleash the untapped potential of your business through our </span>
                    <span className="block sm:inline font-semibold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">groundbreaking AI research</span>
                    <span className="block sm:inline font-light">, revolutionizing the way you operate and empowering you to achieve </span>
                    <span className="block sm:inline font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">unprecedented efficiency, innovation, and success</span>
                    <span className="block sm:inline font-light"> in today's fast-paced digital landscape.</span>
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-1200 mb-16">
                    <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 transform hover:-translate-y-1">
                        <span className="relative z-10 flex items-center">
                            Get Started Now
                            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                    </button>
                    
                    <button className="group px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/60 hover:scale-110 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                        <span className="flex items-center">
                            <svg className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                            Watch Demo
                        </span>
                    </button>
                </div>

                {/* Stats */}
                {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-1500">
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white mb-2 counter" data-target="500">500+</div>
                        <div className="text-gray-300">Companies Transformed</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white mb-2">99%</div>
                        <div className="text-gray-300">Success Rate</div>
                    </div>
                    <div className="text-center group hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl font-bold text-white mb-2">24/7</div>
                        <div className="text-gray-300">AI Support</div>
                    </div>
                </div> */}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            {/* Custom styles moved to globals.css for global usage */}
        </div>
    )
}

export default Herosection;