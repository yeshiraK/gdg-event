"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    yearOfStudy: "",
    collegeName: "",
    githubLink: "",
    twitterLink: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.yearOfStudy.trim()) {
      newErrors.yearOfStudy = "Year of study is required"
    }

    if (!formData.collegeName.trim()) {
      newErrors.collegeName = "College name is required"
    }

    if (formData.githubLink && !formData.githubLink.includes("github.com")) {
      newErrors.githubLink = "Please enter a valid GitHub URL"
    }

    if (
      formData.twitterLink &&
      !formData.twitterLink.includes("twitter.com") &&
      !formData.twitterLink.includes("x.com")
    ) {
      newErrors.twitterLink = "Please enter a valid Twitter/X URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, you would submit the form data to your backend here
      console.log("Form submitted:", formData)
      setIsSubmitted(true)

      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        yearOfStudy: "",
        collegeName: "",
        githubLink: "",
        twitterLink: "",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#0f1729] grid-pattern flex flex-col">
      {/* Back button */}
      <div className="p-4">
        <Link href="/" className="inline-flex items-center text-white hover:text-blue-400 transition-colors">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Link>
      </div>

      {/* Registration form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 max-w-md w-full shadow-xl">
          <h1 className="text-3xl font-bold text-[#0f1729] mb-8">Register for Next JS 3000</h1>

          {isSubmitted ? (
            <div className="text-center py-12 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">Registered Successfully</h2>
              <p className="text-gray-600 mb-6">Thank you for registering for Next JS 3000!</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#0f1729] text-white font-medium hover:bg-[#1a2540] transition-colors"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Study <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="yearOfStudy"
                    name="yearOfStudy"
                    type="text"
                    value={formData.yearOfStudy}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g., 3rd Year, Graduate"
                  />
                  {errors.yearOfStudy && <p className="mt-1 text-sm text-red-600">{errors.yearOfStudy}</p>}
                </div>

                <div>
                  <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1">
                    College Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="collegeName"
                    name="collegeName"
                    type="text"
                    value={formData.collegeName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your college/university name"
                  />
                  {errors.collegeName && <p className="mt-1 text-sm text-red-600">{errors.collegeName}</p>}
                </div>

                <div>
                  <label htmlFor="githubLink" className="block text-sm font-medium text-gray-700 mb-1">
                    GitHub Link
                  </label>
                  <input
                    id="githubLink"
                    name="githubLink"
                    type="url"
                    value={formData.githubLink}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://github.com/yourusername"
                  />
                  {errors.githubLink && <p className="mt-1 text-sm text-red-600">{errors.githubLink}</p>}
                </div>

                <div>
                  <label htmlFor="twitterLink" className="block text-sm font-medium text-gray-700 mb-1">
                    Twitter/X Link
                  </label>
                  <input
                    id="twitterLink"
                    name="twitterLink"
                    type="url"
                    value={formData.twitterLink}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://twitter.com/yourusername"
                  />
                  {errors.twitterLink && <p className="mt-1 text-sm text-red-600">{errors.twitterLink}</p>}
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#0f1729] text-white font-medium hover:bg-[#1a2540] transition-colors"
                  >
                    Submit Registration
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

