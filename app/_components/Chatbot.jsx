"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion, AnimatePresence } from "framer-motion"

const formatMessage = (text) => {
  // Convert markdown headings to styled headings
  let formatted = text.replace(/^### (.*?)$/gm, '<h3 class="text-base font-bold mt-3 mb-1">$1</h3>')
  formatted = formatted.replace(/^## (.*?)$/gm, '<h2 class="text-lg font-bold mt-3 mb-1">$1</h2>')
  formatted = formatted.replace(/^# (.*?)$/gm, '<h1 class="text-xl font-bold mt-3 mb-2">$1</h1>')

  // Convert **bold** to <strong>
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

  // Convert bullet points
  formatted = formatted.replace(/^• (.*?)$/gm, '<div class="flex"><span class="mr-2">•</span><span>$1</span></div>')

  // Convert numbered lists
  formatted = formatted.replace(/^(\d+)\. (.*?)$/gm, '<div class="flex"><span class="mr-2">$1.</span><span>$2</span></div>')

  // Convert URLs to links
  formatted = formatted.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">$1</a>',
  )

  // Convert line breaks to <br>
  formatted = formatted.replace(/\n/g, '<br />')

  return formatted
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Divyang's AI assistant. I can help you learn about his projects, skills, experience, and also answer any general questions you might have. What would you like to know? 😊",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputMessage }),
      })

      const data = await response.json()

      if (response.ok) {
        const botMessage = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        throw new Error(data.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble responding right now. Please try again or contact Divyang directly at palshetkardivyang@gmail.com",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const suggestedQuestions = [
    "Tell me about ExpensIQ project",
    "What are Divyang's technical skills?",
    "How can I contact Divyang?",
    "What's his work experience?",
    "Tell me about PulseMeet",
    "What is machine learning?",
  ]

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question)
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="rounded-full w-14 h-14 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl border-0 bg-white dark:bg-gray-800">
              <CardHeader className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Bot className="h-5 w-5" />
                  Divyang's AI Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages Area */}
                <ScrollArea className="h-80 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-start gap-2 max-w-[80%] ${
                            message.sender === "user" ? "flex-row-reverse" : "flex-row"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              message.sender === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                          </div>
                          <div
                            className={`rounded-lg px-3 py-2 ${
                              message.sender === "user"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                            }`}
                          >
                            <div
                              className="text-sm whitespace-pre-wrap leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                          </div>
                          <div className="bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-2">
                            <Loader2 className="h-4 w-4 animate-spin text-gray-600 dark:text-gray-300" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </ScrollArea>

                {/* Suggested Questions */}
                {messages.length === 1 && (
                  <div className="px-4 pb-2">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Try asking:</p>
                    <div className="flex flex-wrap gap-1">
                      {suggestedQuestions.slice(0, 3).map((question, index) => (
                        <button
                          key={index}
                          onClick={() => handleSuggestedQuestion(question)}
                          className="text-xs bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded transition-colors"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="border-t dark:border-gray-700 p-4">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      ref={inputRef}
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Ask me anything..."
                      disabled={isLoading}
                      className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      disabled={!inputMessage.trim() || isLoading}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
