

"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Check, Copy, Download, ChevronRight, ChevronLeft } from "lucide-react"

const cn = (...classes) => {
  return classes.filter(Boolean).join(" ")
}

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
      <div className="bg-orange-600 text-white py-2 px-3 rounded-t-lg text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?key=1y90p')] opacity-10"></div>
        <div className="relative z-10">
          <h1 className="text-lg font-bold tracking-tight">Rameshwaram Café</h1>
          <p className="text-xs font-medium text-orange-100">Authentic South Indian Cuisine</p>
        </div>
      </div>
    )
  }

  const renderQuestionCard = (question) => {
    const selectedOption = selectedOptions[question.id]

    return (
      <Card className="w-full shadow-lg overflow-hidden  flex flex-col" ref={cardRef}>
        {renderRestaurantHeader()}

        <div className="bg-orange-500 text-white py-2 px-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-white text-orange-500 flex items-center justify-center font-bold text-sm">
              {question.id}
            </div>
            <span className="ml-2 text-sm font-medium">of {questions.length}</span>
          </div>
          <h2 className="text-sm font-bold">Quick Feedback</h2>
        </div>

        <CardContent className="p-3 flex-grow flex flex-col">
          <h3 className="text-base font-medium mb-2 flex items-center">

            {question.question}
          </h3>

          <div className="grid grid-cols-2 gap-2 mb-3">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant={selectedOption === option.value ? "default" : "outline"}
                className={cn(
                  "h-10 text-sm",
                  selectedOption === option.value ? "bg-orange-500 hover:bg-orange-600" : "",
                )}
                onClick={() => handleOptionSelect(question.id, option.value)}
              >
                {option.label}
              </Button>
            ))}
          </div>

          <div className="mt-1 flex-grow flex flex-col">
            <p className="text-xs text-gray-500 mb-1">Additional comments (optional):</p>
            <Textarea
              placeholder="Write if you want..."
              value={comments[question.id] || ""}
              onChange={(e) => handleCommentChange(question.id, e.target.value)}
              className="resize-none flex-grow text-sm"
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-between p-2 border-t bg-orange-50">
          {currentStep > 0 ? (
            <Button variant="outline" size="sm" onClick={handleBack} className="h-8">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          ) : (
            <div></div>
          )}

          <Button
            onClick={handleNext}
            disabled={!selectedOption}
            size="sm"
            className={cn("bg-orange-500 hover:bg-orange-600 h-8", !selectedOption ? "opacity-50" : "")}
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
      <Card className="w-full shadow-lg overflow-hidden flex flex-col" ref={cardRef}>
        {renderRestaurantHeader()}

        <div className="bg-green-500 text-white py-2 px-3 text-center">
          <h2 className="text-base font-medium">Thanks for your feedback!</h2>
        </div>

        <CardContent className="p-3 flex-grow overflow-y-auto">
          <div className="text-center">

            <p className="text-sm mb-1">You've earned:</p>
            <p className="font-bold text-base mb-1">10% off on dosa next time</p>
            <p className="text-sm mb-3">at Rameshwaram Café, Indiranagar</p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 mb-3">
              <p className="text-xs text-gray-500 mb-1">Your Discount Code:</p>
              <p className="font-mono text-lg font-bold">{discountCode}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-2 mb-3">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-2 rounded-md text-center">

                <p className="font-bold text-orange-800 text-xs">DISCOUNT COUPON</p>
                <p className="text-lg font-bold text-orange-900 my-1">10% OFF</p>
                <p className="text-xs text-orange-800">on any dosa</p>
                <div className="my-2 py-1 bg-white rounded-md border border-orange-200">
                  <p className="font-mono font-bold text-sm">{discountCode}</p>
                </div>
                <p className="text-xs text-orange-800">Valid until: 31/05/2025</p>
                <p className="text-xs text-orange-800">Rameshwaram Café, Indiranagar</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-2">
            <Button onClick={copyToClipboard} variant="outline" size="sm" className="flex-1 h-8 text-xs">
              {copied ? <Check className="mr-1 h-3 w-3" /> : <Copy className="mr-1 h-3 w-3" />}
              {copied ? "Copied!" : "Copy Code"}
            </Button>

            <Button onClick={takeScreenshot} variant="outline" size="sm" className="flex-1 h-8 text-xs">
              <Download className="mr-1 h-3 w-3" /> Screenshot
            </Button>
          </div>
        </CardContent>

      </Card>
    )
  }

  return <>{isComplete ? renderThankYouCard() : renderQuestionCard(questions[currentStep])}</>
}

// Main Page Component
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-3 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="w-full max-w-sm">
        <FeedbackCard />
      </div>
      <p className="text-xs text-gray-500 mt-2 text-center">Scan QR for feedback & rewards. Powerded by <a href="#" className="underline">Fedbaker</a>  </p>

    </main>
  )
}
