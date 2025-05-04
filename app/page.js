"use client"

import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("ecommerce")

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">FeedbackAI</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#features"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1E293B] hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1E293B] hover:text-white"
                  >
                    How It Works
                  </a>
                  <a
                    href="#use-cases"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1E293B] hover:text-white"
                  >
                    Use Cases
                  </a>
                  <a
                    href="#pricing"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-[#1E293B] hover:text-white"
                  >
                    Pricing
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <button className="bg-[#3B82F6] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2563EB]">
                Get Started
              </button>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-[#1E293B] focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E293B] hover:text-white"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E293B] hover:text-white"
              >
                How It Works
              </a>
              <a
                href="#use-cases"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E293B] hover:text-white"
              >
                Use Cases
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#1E293B] hover:text-white"
              >
                Pricing
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-[#1E293B]">
              <div className="px-2">
                <button className="w-full bg-[#3B82F6] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#2563EB]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative bg-[#0F172A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-[#0F172A] sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">AI-Powered Feedback</span>
                  <span className="block text-[#3B82F6]">That Drives Action</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transform customer feedback into actionable insights with our QR-based feedback system powered by AI.
                  Get structured, vendor-specific feedback that helps your business improve.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#pricing"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#3B82F6] hover:bg-[#2563EB] md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#how-it-works"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#3B82F6] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      How It Works
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-[#1E293B] sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="relative w-3/4 h-3/4">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#3B82F6] opacity-20 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#3B82F6] opacity-20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-48 h-48 text-white"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="20" y="20" width="60" height="60" rx="5" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M30 30L70 70M30 70L70 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <rect x="35" y="35" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M40 50H60M50 40V60"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Key Features</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Everything you need to collect and act on customer feedback
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">QR Code-Based Feedback</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Generate unique QR codes for your products, services, or locations to collect targeted feedback.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">AI-Driven Conversations</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Our LLM-powered system asks intelligent follow-up questions to gather detailed, actionable feedback.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Actionable Analytics</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Get real-time insights with categorized summaries, trends, and AI-generated improvement suggestions.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Incentives</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Boost participation with customizable rewards like discounts, cashback, or loyalty points.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Pre-Payment Enforcement</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Optional feature to require feedback before completing payment, ensuring high response rates.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#EFF6FF] text-[#3B82F6]">
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Customer Communication</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Close the feedback loop by updating customers on improvements made based on their input.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Simple, effective feedback collection that drives real business improvements
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6] text-white text-xl font-bold">
                    1
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Generate QR Codes</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Create unique QR codes for your products, services, or locations.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6] text-white text-xl font-bold">
                    2
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Customers Scan & Respond</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Customers scan the QR code and engage with our AI-powered conversation.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6] text-white text-xl font-bold">
                    3
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">AI Processes Feedback</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Our AI analyzes responses and generates actionable insights.
                  </p>
                </div>

                {/* Step 4 */}
                <div className="relative flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#3B82F6] text-white text-xl font-bold">
                    4
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Implement Improvements</h3>
                  <p className="mt-2 text-base text-gray-500 text-center">
                    Act on insights and notify customers about changes made.
                  </p>
                </div>
              </div>

              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gray-200">
                <div className="absolute left-0 right-0 h-full bg-[#3B82F6] w-0 transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div id="use-cases" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Use Cases</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Tailored solutions for different industries
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <button
                onClick={() => setActiveTab("ecommerce")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  activeTab === "ecommerce"
                    ? "bg-[#3B82F6] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                E-commerce
              </button>
              <button
                onClick={() => setActiveTab("restaurants")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  activeTab === "restaurants"
                    ? "bg-[#3B82F6] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Restaurants
              </button>
              <button
                onClick={() => setActiveTab("malls")}
                className={`flex-1 py-2 px-4 rounded-md ${
                  activeTab === "malls"
                    ? "bg-[#3B82F6] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Malls
              </button>
            </div>

            {/* E-commerce Tab */}
            {activeTab === "ecommerce" && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">E-commerce Sellers</h3>
                    <p className="text-gray-600 mb-4">
                      Get detailed, actionable feedback directly from your customers about your products and delivery
                      experience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Attach QR codes to packages for immediate post-purchase feedback</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Offer cashback or discounts to incentivize detailed feedback</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Get AI-generated suggestions to improve product quality and delivery</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Track feedback trends over time to measure improvements</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md">
                      <div className="text-center mb-4">
                        <div className="inline-block p-3 bg-[#EFF6FF] rounded-lg">
                          <svg
                            className="h-12 w-12 text-[#3B82F6]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">How was your experience with our product?</p>
                          </div>
                        </div>
                        <div className="flex items-start justify-end">
                          <div className="mr-3 bg-[#3B82F6] p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-white">The delivery was late by 2 days.</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm">
                              U
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">I'm sorry to hear that. Was the product in good condition when it arrived?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Restaurants Tab */}
            {activeTab === "restaurants" && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Restaurants</h3>
                    <p className="text-gray-600 mb-4">
                      Collect detailed feedback about food quality, service, and ambiance to continuously improve your customer experience.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Place QR codes on tables or receipts for easy access</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Optional pre-payment enforcement to ensure high response rates</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Offer discounts on next visit to encourage return customers</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Get specific feedback on menu items, service, and cleanliness</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md">
                      <div className="text-center mb-4">
                        <div className="inline-block p-3 bg-[#EFF6FF] rounded-lg">
                          <svg
                            className="h-12 w-12 text-[#3B82F6]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">How was your dining experience today?</p>
                          </div>
                        </div>
                        <div className="flex items-start justify-end">
                          <div className="mr-3 bg-[#3B82F6] p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-white">Food was great but tables were not clean.</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm">
                              U
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">Thank you for letting us know. Which dish did you enjoy the most, and what specific cleanliness issues did you notice?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Malls Tab */}
            {activeTab === "malls" && (
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Shopping Malls</h3>
                    <p className="text-gray-600 mb-4">
                      Gather insights about visitor experience, facilities, and shopping preferences to optimize your mall operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Place QR codes at exits, food courts, and information desks</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Offer mall-wide discount vouchers for feedback completion</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Get insights on facilities, store mix, and customer service</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-[#3B82F6] mt-0.5 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>Track visitor satisfaction across different mall areas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="bg-gray-100 p-6 rounded-lg w-full max-w-md">
                      <div className="text-center mb-4">
                        <div className="inline-block p-3 bg-[#EFF6FF] rounded-lg">
                          <svg
                            className="h-12 w-12 text-[#3B82F6]"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">How was your shopping experience at our mall today?</p>
                          </div>
                        </div>
                        <div className="flex items-start justify-end">
                          <div className="mr-3 bg-[#3B82F6] p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-white">Parking was difficult to find and the food court was too crowded.</p>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm">
                              U
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <div className="h-8 w-8 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold text-sm">
                              AI
                            </div>
                          </div>
                          <div className="ml-3 bg-white p-3 rounded-lg shadow-sm">
                            <p className="text-sm text-gray-700">I appreciate your feedback. What time did you visit, and which stores did you enjoy shopping at?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Suggestions Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">AI-Powered Actionables</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Turn feedback into concrete improvement steps
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Customer Feedback
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          AI Suggestion
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Tables are nasty</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          Increase cleaning frequency, use XYZ disinfectant.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Delivery takes too long</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          Optimize logistics, partner with faster couriers.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Food quality is poor</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          Audit ingredient sourcing, standardize recipe procedures.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Product is expensive</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          Offer bundled discounts, introduce EMI options.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Pricing Plans</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Basic Plan */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">₹0</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">Perfect for small businesses just getting started with feedback.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Up to 100 responses/month</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Basic analytics dashboard</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">QR code generation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Email support</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#3B82F6] border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-[#2563EB]">
                  Get Started
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="absolute -top-4 -right-4">
                <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-[#3B82F6] text-white">
                  Popular
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">₹2,999</span>
                  <span className="ml-1 text-xl font-semibold">/month</span>
                </p>
                <p className="mt-6 text-gray-500">For growing businesses that need advanced feedback capabilities.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Unlimited responses</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Advanced analytics & reporting</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">AI-generated actionables</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Customer incentive management</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Priority support</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#3B82F6] border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-[#2563EB]">
                  Get Started
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">Custom</span>
                </p>
                <p className="mt-6 text-gray-500">For large organizations with specific requirements.</p>

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Everything in Pro plan</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Custom AI model training</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Dedicated account manager</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">Custom integrations</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-700">24/7 premium support</p>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <button className="w-full bg-[#3B82F6] border border-transparent rounded-md py-3 px-5 text-base font-medium text-white hover:bg-[#2563EB]">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}
    