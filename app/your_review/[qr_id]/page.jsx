"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Check, Copy, Download, ChevronRight, ChevronLeft, Star, MessageSquare, Coffee } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Only primary color is customizable
const primaryColor = "black" // Brand's main color (orange)

// Questions data
const questions = [
  {
    id: 1,
    question: "How was your dosa?",
    options: [
      { value: "bad", label: "Bad" },
      { value: "okay", label: "Okay" },
      { value: "good", label: "Good" },
      { value: "amazing", label: "Amazing" },
    ],
  },
  {
    id: 2,
    question: "Anything you'd like improved?",
    options: [
      { value: "spicier", label: "Spicier" },
      { value: "more_chutney", label: "More chutney" },
      { value: "hotter", label: "Hotter" },
      { value: "better_sambar", label: "Better sambar" },
    ],
  },
  {
    id: 3,
    question: "How was the service?",
    options: [
      { value: "poor", label: "Poor" },
      { value: "okay", label: "Okay" },
      { value: "good", label: "Good" },
      { value: "excellent", label: "Excellent" },
    ],
  },
]



const handleSubmit = async () => {
  const data = "ds"

  try {
    const send = await fetch('/api/review', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ data })
    })
    return send;
  } catch (error) {
    console.log(error)
  }
}



// Feedback Card Component
function FeedbackCard() {

  const [currentStep, setCurrentStep] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [comments, setComments] = useState({})
  const [copied, setCopied] = useState(false)
  const cardRef = useRef(null)

  const discountCode = "RAMESH-849F"
  const isLastQuestion = currentStep === questions.length - 1
  const isComplete = currentStep === questions.length

  const sendFeedback = async () => {
    const response = await handleSubmit()
    const data = await response.json()
    console.log("Response:", data)
  }
  useEffect(() => {
    sendFeedback()
  }, [])

  const handleOptionSelect = (questionId, value) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleCommentChange = (questionId, comment) => {
    setComments((prev) => ({ ...prev, [questionId]: comment }))
  }

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const takeScreenshot = () => {
    if (!cardRef.current) return
    alert("Screenshot functionality would capture this card in a real implementation")
  }

  const renderRestaurantHeader = () => {
    return (
      <CardHeader className="p-0">
        <div
          className="relative overflow-hidden rounded-t-lg text-white py-4 px-3"
          style={{ background: primaryColor }}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg?key=s2gh6')] opacity-10"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-xl font-bold tracking-tight">Rameshwaram Café</h1>
            <p className="text-sm font-medium opacity-90">Authentic South Indian Cuisine</p>
          </div>
        </div>
      </CardHeader>
    )
  }

  const renderProgressBar = () => {
    const progress = isComplete ? 100 : (currentStep / questions.length) * 100

    return (
      <div className="w-full h-1 bg-gray-100 mt-1">
        <motion.div
          className="h-full rounded-r-full"
          style={{ background: primaryColor }}
          initial={{ width: `${(currentStep / questions.length) * 100}%` }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    )
  }

  const renderQuestionCard = (question) => {
    const selectedOption = selectedOptions[question.id]

    return (
      <Card className="w-full shadow-lg overflow-hidden flex flex-col border border-gray-200" ref={cardRef}>
        {renderRestaurantHeader()}
        {renderProgressBar()}

        <div className="py-2 px-4 flex items-center justify-between bg-gray-50">
          <div className="flex items-center">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm text-white"
              style={{ background: primaryColor }}
            >
              {question.id}
            </div>
            <span className="ml-2 text-sm font-medium text-gray-500">of {questions.length}</span>
          </div>
          <h2 className="text-sm font-bold text-gray-700">Quick Feedback</h2>
        </div>

        <CardContent className="p-4 flex-grow flex flex-col">
          <h3 className="text-base font-medium mb-3 flex items-center text-gray-800">
            {question.question}
          </h3>

          <div className="grid grid-cols-2 gap-2 mb-4">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                className={cn(
                  "h-10 text-sm transition-all duration-200 border",
                  selectedOption === option.value
                    ? "text-white border-transparent"
                    : "text-gray-700 border-gray-200  bg-white",
                )}
                style={selectedOption === option.value ? { background: primaryColor } : {}}
                onClick={() => handleOptionSelect(question.id, option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="mt-1 flex-grow flex flex-col">
            <p className="text-xs mb-1 text-gray-500">Additional comments (optional):</p>
            <Textarea
              placeholder="Write if you want..."
              value={comments[question.id] || ""}
              onChange={(e) => handleCommentChange(question.id, e.target.value)}
              className="resize-none flex-grow text-sm border-gray-200 focus:border-gray-300"
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between p-3 border-t bg-gray-50">
          {currentStep > 0 ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleBack}
              className="h-9 transition-all duration-200 border-gray-200 text-gray-600 "
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          ) : (
            <div></div>
          )}

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            size="sm"
            className="h-9 transition-all duration-200"
            style={{
              background: selectedOption ? primaryColor : "#ccc",
              opacity: selectedOption ? 1 : 0.7,
            }}
          >
            {isLastQuestion ? "Finish" : "Next"}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const renderThankYouCard = () => {
    return (
      <Card className="w-full shadow-lg overflow-hidden flex flex-col border border-gray-200" ref={cardRef}>
        {renderRestaurantHeader()}
        {renderProgressBar()}

        <div className="py-6 px-3 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3 text-white"
              style={{ background: primaryColor }}
            >
              <Check className="h-8 w-8" />
            </div>
          </motion.div>
          <h2 className="text-xl font-bold mb-2 text-gray-800">Thanks for your feedback!</h2>
          <p className="text-sm text-gray-500">We appreciate your time and input</p>
        </div>

        <CardContent className="p-4 flex-grow overflow-y-auto">
          <div className="text-center">
            <p className="text-sm mb-1 text-gray-700">You've earned:</p>
            <p className="font-bold text-lg mb-1" style={{ color: primaryColor }}>
              10% off on dosa next time
            </p>
            <p className="text-sm mb-4 text-gray-500">at Rameshwaram Café, Indiranagar</p>

            <motion.div
              className="rounded-lg p-4 mb-4"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}10, white)`,
                border: `1px dashed ${primaryColor}`,
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <div className="p-3 rounded-md text-center bg-white shadow-sm">
                <p className="font-bold text-xs uppercase tracking-wider mb-1" style={{ color: primaryColor }}>
                  DISCOUNT COUPON
                </p>
                <p className="text-2xl font-bold my-2" style={{ color: primaryColor }}>
                  10% OFF
                </p>
                <p className="text-xs mb-2 text-gray-500">on any dosa</p>
                <div className="my-2 py-2 rounded-md border border-gray-200 mx-auto max-w-[180px]">
                  <p className="font-mono font-bold text-base text-gray-800">{discountCode}</p>
                </div>
                <p className="text-xs mt-2 text-gray-500">Valid until: 31/05/2025</p>
                <p className="text-xs text-gray-500">Rameshwaram Café, Indiranagar</p>
              </div>
            </motion.div>
          </div>

          <div className="flex gap-2 mt-2">
            <Button
              onClick={copyToClipboard}
              variant="outline"
              className={cn(
                "flex-1 h-10 text-sm transition-all duration-200 border",
                copied ? "bg-green-50 text-green-600 border-green-200" : "border-gray-200",
              )}
              style={!copied ? { color: primaryColor } : {}}
            >
              {copied ? <Check className="mr-1 h-4 w-4" /> : <Copy className="mr-1 h-4 w-4" />}
              {copied ? "Copied!" : "Copy Code"}
            </Button>

            <Button
              onClick={takeScreenshot}
              variant="outline"
              className="flex-1 h-10 text-sm transition-all duration-200 border-gray-200 text-gray-700"
            >
              <Download className="mr-1 h-4 w-4" /> Save Coupon
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {isComplete ? renderThankYouCard() : renderQuestionCard(questions[currentStep])}
      </motion.div>
    </AnimatePresence>
  )
}

// Main Page Component
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-sm">
        <FeedbackCard />
      </div>
      <p className="text-xs mt-4 text-center text-gray-500">
        Scan QR for feedback & rewards. Powered by{" "}
        <a href="#" className="underline" style={{ color: primaryColor }}>
          Fedbaker
        </a>
      </p>
    </main>
  )
}
