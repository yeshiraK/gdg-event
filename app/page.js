"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link"
import { ArrowRight } from "lucide-react"


export default function Home() {
  const [expandedFaqs, setExpandedFaqs] = useState([])

  const toggleFaq = (index) => {
    setExpandedFaqs((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqItems = [
    {
      question: "What is the Next.js 3000 Workshop & Buildathon?",
      answer:
        "The Next.js 3000 Workshop & Buildathon is an immersive event where developers learn advanced Next.js concepts and apply them in a high-energy buildathon. Participants will get hands-on experience with cutting-edge tools while competing to build the best projects.",
    },
    {
      question: "Who can participate in the Buildathon?",
      answer:
        "Anyone with an interest in web development can participate! Whether you're a beginner or an experienced developer, this event is designed to help you level up your skills. Basic familiarity with React.js and Next.js is recommended but not mandatory.",
    },
    {
      question: "What is the format of the event?",
      answer:
        "The event consists of two parts, A Workshop A guided session covering Next.js 3000 features, performance optimization, and best practices ,Followed by a Buildathon  A time-bound challenge where participants build and showcase innovative projects using Next.js.",
    },
    {
      question: "Where can I ask technical questions during the event?",
      answer:
        "Technical questions can be asked to the volunteers.",
    },
    {
      question: "Is there a registration fee?",
      answer:
        "No, participation is completely free! Just register through the provided link and secure your spot.",
    },
    {
      question: "How do I register for the event?",
      answer:
        "Click on the Register button on the event website. You will need to fill out details like your name, email, year of study, college name, GitHub link, and Twitter link. After submitting, you’ll receive a confirmation message Registered Successfully!",
    },
    {
      question: "How can I find a team to join?",
      answer:
        "This is completely an individual participation event, feel free to join and ask doubts!",
    },
    {
      question: "Do I need prior experience with Next.js to participate?",
      answer:
        "No! While some knowledge of React.js is helpful, the workshop covers essential Next.js concepts to get you started. Whether you're a beginner or an advanced developer, you'll learn something new!",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col">
        {/* Title Bar */}
        <div className="flex border-b border-gray-800">
          <div className="w-full md:w-3/4 bg-white p-4">
            <h1 className="text-2xl font-bold">Next Js : 3000</h1>
          </div>
          <div className="hidden md:flex md:w-1/4 bg-[#0f1729] p-4 items-center justify-center">
            <span className="text-blue-400">&lt;date&gt;</span>
            <span className="text-white mx-2">March-8, 2025</span>
            <span className="text-blue-400">&lt;/date&gt;</span>
          </div>
        </div>

        {/* Main Hero Section */}
        <section className="relative bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            <div className="flex flex-col justify-center p-8 md:p-16">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0f1729]">
                Next
                <br />
                Js
                <br />
                3000
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-[#234694]">March-8, 2025</p>
              <div className="mt-8">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#0f1729] text-white font-medium rounded-none hover:bg-[#1a2540] transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-[url('/imgs/spline.png')] bg-[size:120%] bg-no-repeat bg-cover bg-center min-h-[200px]">

            </div>
          </div>
        </section>


        {/* Over $500,000 in prizes Section */}
        <section className="bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
            <div className="flex flex-col justify-center p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-bold text-[#0f1729]">
                Over <span className="text-blue-500">$10,000</span> in prizes
              </h2>
              <div className="mt-8 max-w-xl">
                <p className="text-lg">
                Next.js 3000 Buildathon is a premier event designed to push the boundaries of modern web development, uniting developers and innovators worldwide to redefine performance, scalability, and seamless user experiences.
                </p>
                <p className="text-lg mt-4 text-blue-500">With over $10,000 INR in prizes across 4 project tracks,</p>
                <p className="text-lg mt-4">
                Take this opportunity to shape the future on the most powerful and dynamic full-stack framework for the web.                </p>
                <p className="text-lg mt-8">
                  Buildathon winners also have the chance to be invited to
                  <span className="text-blue-500"> exclusive developer initiatives</span>, offering tailored support and
                  access to a high-quality network of builders.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-[url('/imgs/award1.png')] bg-[size:70%] bg-no-repeat bg-cover bg-center min-h-[200px]">
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="bg-[#f5f5f0] py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0f1729] mb-16">Tracks</h2>
          

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Track 1 - AI Powered web app */}
              <div className="flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/3 bg-indigo-500 p-8 flex items-center justify-center">
                  <Image
                    src="/imgs/ai.png"
                    width={150}
                    height={150}
                    alt="DeFi icon"
                    className="w-32 h-32"
                  />
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <div className="bg-gray-100 p-2 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-indigo-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">AI-Powered Web Apps</h3>
                  </div>
                  <p className="text-lg mb-4">
                  Build intelligent web applications by integrating AI models, chatbots, and automation using Next.js                  </p>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>Track sponsor:</span>
                    <span className="ml-2 font-medium">DeepSeek (AI model provider)</span>
                  </div>
                </div>
              </div>

              {/* Track 2 - Dapps */}
              <div className="flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/3 bg-pink-500 p-8 flex items-center justify-center">
                  <Image
                    src="/imgs/dapp.png"
                    width={150}
                    height={150}
                    alt="Infra icon"
                    className="w-32 h-32"
                  />
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <div className="bg-gray-100 p-2 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-pink-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Decentralized & Web3 Apps</h3>
                  </div>
                  <p className="text-lg">
                  Leverage blockchain and decentralized technologies to create secure, scalable dApps using Next.js.
                  </p>
                </div>
              </div>

              {/* Track 3 - UIUX */}
              <div className="flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/3 bg-green-800 p-8 flex items-center justify-center">
                  <Image
                    src="/imgs/uiux.png"
                    width={150}
                    height={150}
                    alt="AI icon"
                    className="w-32 h-32"
                  />
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <div className="bg-gray-100 p-2 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-800 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Next-Gen UI/UX & Performance </h3>
                  </div>
                  <p className="text-lg">
                  Push the boundaries of web performance, animations, and UI/UX design with cutting-edge Next.js features.                  </p>
                </div>
              </div>

              {/* Track 4 - Fullstack */}
              <div className="flex flex-col md:flex-row bg-white">
                <div className="w-full md:w-1/3 bg-blue-400 p-8 flex items-center justify-center">
                  <Image
                    src="/imgs/full.png"
                    width={150}
                    height={150}
                    alt="Cryptography icon"
                    className="w-32 h-32"
                  />
                </div>
                <div className="w-full md:w-2/3 p-8">
                  <div className="bg-gray-100 p-2 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-400 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Full-Stack Innovation</h3>
                  </div>
                  <p className="text-lg">
                  Develop robust, scalable full-stack applications using Next.js, serverless functions, and databases like MongoDB or PostgreSQL.                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prizes Section */}
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0f1729] mb-16">Prizes</h2>

            <hr className="my-12" />

            <h3 className="text-2xl font-bold mb-8">Track prizes</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200">
              {/* 1st place */}
              <div className="bg-white">
                <div className="bg-[#f5f5f0] p-4 flex items-center">
                  <span className="bg-green-800 text-white px-2 py-1 text-sm mr-2">#</span>
                  <span className="bg-yellow-400 text-black px-2 py-1 text-sm">1st place</span>
                </div>
                <div className="p-8 h-48 flex items-center justify-center">
                  <Image
                    src="/imgs/firstprize.png"
                    width={150}
                    height={150}
                    alt="1st place prize"
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-4xl font-bold">$10,000 INR</h4>
                </div>
              </div>

              {/* 2nd place */}
              <div className="bg-white">
                <div className="bg-[#f5f5f0] p-4 flex items-center">
                  <span className="bg-green-800 text-white px-2 py-1 text-sm mr-2">#</span>
                  <span className="bg-blue-400 text-black px-2 py-1 text-sm">2nd place</span>
                </div>
                <div className="p-8 h-48 flex items-center justify-center">
                  <Image
                    src="/imgs/scndprize.png"
                    width={150}
                    height={150}
                    alt="2nd place prize"
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-4xl font-bold">$7,000 INR</h4>
                </div>
              </div>

              {/* 3rd place */}
              <div className="bg-white">
                <div className="bg-[#f5f5f0] p-4 flex items-center">
                  <span className="bg-green-800 text-white px-2 py-1 text-sm mr-2">#</span>
                  <span className="bg-orange-400 text-black px-2 py-1 text-sm">3rd place</span>
                </div>
                <div className="p-8 h-48 flex items-center justify-center">
                  <Image
                    src="/imgs/thirdprize.png"
                    width={150}
                    height={150}
                    alt="3rd place prize"
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-4xl font-bold">$4,000 INR</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0f1729] mb-8">Awards</h2>
            <p className="text-2xl text-gray-500 mb-16">These can be won alongside other prizes.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
              {/* Empower Award */}
              <div className="bg-white border border-gray-200">
                <div className="bg-[#f0e6ff] p-4">
                  <h3 className="text-lg font-bold">Empower Award</h3>
                </div>
                <div className="p-8 h-48 flex items-center justify-center">
                  <Image
                    src="/imgs/award1.png"
                    width={190}
                    height={190}
                    alt="Empower Award"
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-4xl font-bold mb-4">$2,500 INR to winners</h4>
                  <p className="text-lg">
                    If you're a team a female student, this special buildathon prize is for you!
                  </p>
                </div>
              </div>

              {/* Community Favorite Award */}
              <div className="bg-white border border-gray-200">
                <div className="bg-[#f0e6ff] p-4">
                  <h3 className="text-lg font-bold">Community Favorite Award</h3>
                </div>
                <div className="p-8 h-48 flex items-center justify-center">
                  <Image
                    src="/imgs/award2.png"
                    width={190}
                    height={190}
                    alt="Community Favorite Award"
                    className="w-32 h-32"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-4xl font-bold mb-4">$2,500 INR to 3 winners</h4>
                  <p className="text-lg">
                    A special prize awarded to crowd favorite projects, based on community voting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-[#0f1729] py-16 border-b border-gray-800 text-white">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">Timeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* day one */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#0f1729] flex items-center justify-center text-white">
                  01
                </div>
                <div className="bg-[#0f1729] border border-blue-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-indigo-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Workshop</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-blue-400">
                  <div className="bg-white text-black p-4">
                    <h4 className="font-bold">Kick off with registration and an in-depth Next.js workshop to equip participants with essential skills.</h4>
                  </div>
                  <div className="bg-[#0f1729] p-4">
                    <p>March 8</p>
                    <p>8.00 am - 4.30pm</p>
                  </div>
                </div>
              </div>

              {/* Buildathon */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#0f1729] flex items-center justify-center text-white">
                  02
                </div>
                <div className="bg-[#0f1729] border border-blue-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-400 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Buildathon</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-blue-400">
                  <div className="bg-white text-black p-4">
                    <h4 className="font-bold">Buildathon starts</h4>
                  </div>
                  <div className="bg-[#0f1729] p-4">
                    <p>March 9</p>
                    <p>12.00 am</p>
                  </div>
                  <div className="bg-white text-black p-4">
                    <h4 className="font-bold">A 24-hour solo Buildathon where developers showcase their Next.js skills.</h4>
                  </div>
                  <div className="bg-[#0f1729] p-4">
                    <p>Refreshments provided</p>
                  </div>
                  <div className="bg-white text-black p-4">
                    <h4 className="font-bold">Buildathon ends</h4>
                  </div>
                  <div className="bg-[#0f1729] p-4">
                    <p>March 9</p>
                    <p>11.59 pm</p>
                  </div>
                </div>
              </div>

              {/* Demo day */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-8 h-8 bg-[#0f1729] flex items-center justify-center text-white">
                  03
                </div>
                <div className="bg-[#0f1729] border border-blue-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-orange-500 flex items-center justify-center mr-2">
                      <span className="text-white text-xs">•••</span>
                    </div>
                    <h3 className="text-xl font-bold">Demo day</h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-px bg-blue-400">
                  <div className="bg-white text-black p-4">
                    <h4 className="font-bold">Showcase your project in the final presentations, followed by prize distribution and closing ceremony.</h4>
                  </div>
                  <div className="bg-[#0f1729] p-4">
                    <p>March 10</p>
                    <p>8.00 am - 11.00 am</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* other events */}
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0f1729] mb-8">Events to Explore</h2>
            <p className="text-xl mb-16 max-w-3xl">
              Explore the other workshops and events that we're hosting  to help builders connect , grow and expand their knowledge.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-blue-400">
                    <th className="p-4 text-left">Date</th>
                    <th className="p-4 text-left">Name</th>
                    <th className="p-4 text-left">Location</th>
                    <th className="p-4 text-left">Category</th>
                    <th className="p-4 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="event-row relative bg-[#0f1729] text-white overflow-hidden group cursor-pointer">
                    <td className="p-4 group-hover:animate-flip-left">February 20, 2025</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-100">
                      REACT.JS | React Dev Workshop w/ Gdg
                    </td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-200">Chennai,TN</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-300">
                      <span className="inline-block w-3 h-3 bg-blue-400 mr-2"></span>
                      Workshop
                    </td>
                    <td className="p-4 text-right group-hover:animate-flip-left animation-delay-400">
                      <button className="p-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="event-row relative bg-white overflow-hidden group cursor-pointer">
                    <td className="p-4 group-hover:animate-flip-left">March 28, 2025</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-100">Ideas & Chill</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-200">Chennai,TN</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-300">Ideathon</td>
                    <td className="p-4 text-right group-hover:animate-flip-left animation-delay-400">
                      <button className="p-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="event-row relative bg-[#f5f5f0] overflow-hidden group cursor-pointer">
                    <td className="p-4 group-hover:animate-flip-left">April 21, 2025</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-100"> Hacker House Gdg</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-200">Chennai,TN</td>
                    <td className="p-4 group-hover:animate-flip-left animation-delay-300">Hacker House</td>
                    <td className="p-4 text-right group-hover:animate-flip-left animation-delay-400">
                      <button className="p-2">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 18L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M4 6L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="bg-[#0f1729] py-16 border-b border-gray-800 text-white">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-16">Sponsors</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-blue-400">
              {/* Row 1 */}
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2">Deepseek </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/deepseek.jpeg"
                    width={250}
                    height={250}
                    alt="deepseeklogo"
                    className="max-h-16"
                  />
                </div>
              </div>
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2"> Vercel </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/vercel.png"
                    width={250}
                    height={200}
                    alt="vercel logo"
                    className="max-h-16"
                  />
                </div>
              </div>
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2">Polygon </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/polygon.png"
                    width={250}
                    height={200}
                    alt="polygon logo"
                    className="max-h-16"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2">ShadCN UI </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/shadcn.png"
                    width={250}
                    height={200}
                    alt="shadcn logo"
                    className="max-h-16"
                  />
                </div>
              </div>
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2">GitHub</div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/git.png"
                    width={250}
                    height={200}
                    alt="github logo"
                    className="max-h-16"
                  />
                </div>
              </div>
              <div className="bg-[#0f1729] p-4 border border-blue-400">
                <div className="text-sm text-gray-400 mb-2">MongoDB </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src="/imgs/mongo.png"
                    width={250}
                    height={200}
                    alt="mongodb logo"
                    className="max-h-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0f1729] mb-16">FAQ</h2>

            <div className="border-t border-gray-200">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-gray-200 py-6">
                  <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFaq(index)}>
                    <h3 className="text-xl font-bold">{item.question}</h3>
                    <button className="p-2 bg-[#f5f5f0] rounded-md">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {expandedFaqs.includes(index) ? (
                          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        ) : (
                          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        )}
                      </svg>
                    </button>
                  </div>
                  {expandedFaqs.includes(index) && (
                    <div className="mt-4 text-gray-600 animate-accordion-down">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="bg-[#f0e6ff] py-16 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-16">
              <h2 className="text-4xl md:text-6xl font-bold text-[#0f1729] mb-8">
                Subscribe to receive
                <br />
                more updates
              </h2>
              <div className="mt-8">
                <div className="flex flex-col md:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full md:w-3/4 p-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="mt-4 md:mt-0 w-full md:w-1/4 bg-blue-500 text-white p-4 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
                <div className="mt-4 flex items-start">
                  <input type="checkbox" id="terms" className="mt-1 mr-2" />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="#" className="underline">
                      Event Participation Terms & Conditions
                    </Link>
                    ,{" "}
                    <Link href="#" className="underline">
                      Privacy Policy
                    </Link>
                    , and{" "}
                    <Link href="#" className="underline">
                      Hackathon Terms of Service
                    </Link>
                    .
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center bg-[url('/imgs/mail.png')] bg-[size:60%] bg-no-repeat bg-cover bg-center min-h-[200px]">
          
            </div>
          </div>
        </section>

        {/* Navigation Bar */}
        <nav className="sticky bottom-0 z-40 w-full bg-white border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-8 divide-x divide-gray-200">
            <Link href="#" className="p-6 text-center hover:bg-blue-100 transition-colors bg-blue-200">
              Overview
            </Link>
            <Link href="" className="p-6 text-center hover:bg-blue-100 transition-colors bg-yellow-200">
              Tracks & Prizes
            </Link>
            <Link href="#" className="p-6 text-center hover:bg-blue-100 transition-colors">
              Sponsors
            </Link>
            <Link href="#" className="p-6 text-center hover:bg-blue-100 transition-colors">
              Events
            </Link>
            <Link href="#" className="p-6 text-center hover:bg-blue-100 transition-colors">
              FAQ
            </Link>
            <Link href="https://drive.google.com/file/d/1QjQA9t1wVkB8kUJlZlzpwfazEPkIgcam/view?usp=sharing" className="p-6 text-center hover:bg-blue-100 transition-colors">
              Participant Handbook
            </Link>
            <Link href="https://discord.com/" className="p-6 text-center hover:bg-blue-100 transition-colors">
              Discord
            </Link>
            <Link
              href="/register"
              className="p-6 text-center hover:bg-blue-100 transition-colors bg-blue-500 text-white"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

