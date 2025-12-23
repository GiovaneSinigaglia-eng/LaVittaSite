"use client"

import { Bot, MessageCircle, Send, User, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { getRandomWelcomeMessage, getResponseForMessage } from "./chatbot-responses"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
  options?: string[]
}

interface ChatOption {
  text: string
  response: string
  followUp?: string[]
}

export default function WhatsAppFloating() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [userInput, setUserInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const phoneNumber = "5511999999999"

  // Opções do chat bot
  const chatOptions: Record<string, ChatOption> = {
    produtos: {
      text: "Ver nossos produtos",
      response: "Temos 4 categorias principais de produtos:",
      followUp: [
        "Cuidados com Cabelos",
        "Cuidados com a Pele",
        "Linha Natural",
        "Tratamentos Especiais",
      ],
    },
    ajuda: {
      text: "Preciso de ajuda para escolher",
      response: "Ficarei feliz em te ajudar! Para recomendar os produtos ideais, me conte:",
      followUp: [
        "Qual é o seu tipo de pele?",
        "Que tipo de cabelo você tem?",
        "Tem alguma preocupação específica?",
      ],
    },
    precos: {
      text: "Informações sobre preços",
      response: "Nossos produtos têm preços que variam de R$ 12,90 a R$ 89,90. Alguns exemplos:",
      followUp: [
        "Shampoo Natural - R$ 29,90",
        "Sérum Vitamina C - R$ 89,90",
        "Hidratante Facial - R$ 54,90",
      ],
    },
    duvidas: {
      text: "Tenho uma dúvida",
      response: "Estou aqui para esclarecer suas dúvidas! Sobre o que gostaria de saber?",
      followUp: [
        "Ingredientes dos produtos",
        "Como usar os produtos",
        "Prazo de entrega",
        "Política de troca",
      ],
    },
    horarios: {
      text: "Horários de atendimento",
      response: "Nossos horários de atendimento são:",
      followUp: ["Segunda a Sexta: 8h às 18h", "Sábado: 8h às 12h", "Domingo: Fechado"],
    },
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensagem inicial do bot
      setTimeout(() => {
        addBotMessage(
          getRandomWelcomeMessage(),
          Object.keys(chatOptions).map((key) => chatOptions[key].text),
        )
      }, 500)
    }
  }, [isOpen])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const addBotMessage = (text: string, options?: string[]) => {
    setIsTyping(true)
    setTimeout(
      () => {
        const newMessage: Message = {
          id: Date.now().toString(),
          text,
          isBot: true,
          timestamp: new Date(),
          options,
        }
        setMessages((prev) => [...prev, newMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Simula tempo de digitação
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const handleOptionClick = (optionText: string) => {
    addUserMessage(optionText)

    // Encontrar a opção correspondente
    const optionKey = Object.keys(chatOptions).find((key) => chatOptions[key].text === optionText)

    if (optionKey) {
      const option = chatOptions[optionKey]
      setTimeout(() => {
        addBotMessage(option.response, option.followUp)
      }, 500)
    } else {
      // Resposta genérica para opções de follow-up
      setTimeout(() => {
        addBotMessage(
          "Entendi! Para te ajudar melhor com essa questão específica, vou te conectar com nossa equipe no WhatsApp. Eles terão todas as informações detalhadas para você! 😊",
          ["Falar no WhatsApp agora", "Fazer outra pergunta"],
        )
      }, 500)
    }
  }

  const handleSendMessage = () => {
    if (!userInput.trim()) return

    addUserMessage(userInput)
    const input = userInput.trim()
    setUserInput("")

    // Buscar resposta automática
    const response = getResponseForMessage(input)

    setTimeout(
      () => {
        if (response) {
          addBotMessage(response.response, response.followUp)
        } else {
          // Resposta padrão para mensagens não reconhecidas
          const defaultResponses = [
            "Interessante! Para te dar uma resposta mais completa e personalizada, vou te conectar com nossa equipe especializada no WhatsApp. 💚",
            "Ótima pergunta! Nossa equipe no WhatsApp terá todas as informações detalhadas para você! 😊",
            "Entendi sua dúvida! Para te ajudar melhor, que tal conversar diretamente com nossos especialistas no WhatsApp? 📱",
          ]

          const randomResponse =
            defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
          addBotMessage(randomResponse, ["Falar no WhatsApp agora", "Fazer outra pergunta"])
        }
      },
      800 + Math.random() * 400,
    ) // Tempo variável para parecer mais natural
  }

  const handleWhatsAppRedirect = (customMessage?: string) => {
    const conversationSummary = messages
      .filter((msg) => !msg.isBot)
      .map((msg) => msg.text)
      .join(" | ")

    const finalMessage =
      customMessage ||
      `Olá! Vim do chat do site da Giga Cosmética. Conversei sobre: ${conversationSummary}`

    const encodedMessage = encodeURIComponent(finalMessage)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsOpen(false)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat Widget */}
      {isOpen && (
        <Card className="shadow-giga-xl dark:shadow-giga-dark-xl giga-fade-in-left mb-4 flex h-[500px] w-96 flex-col rounded-xl border-0 bg-white transition-all duration-300 dark:bg-stone-900">
          {/* Header */}
          <div className="bg-chat-header-gradient dark:bg-chat-header-gradient-dark flex-shrink-0 rounded-t-lg p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <Bot className="text-giga-red-500 h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistente Giga</h3>
                  <div className="flex items-center space-x-1">
                    <div className="bg-giga-red-300 giga-pulse-notification h-2 w-2 rounded-full"></div>
                    <p className="text-giga-red-100 text-sm">Online agora</p>
                  </div>
                </div>
              </div>
              <Button
                // variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="hover:bg-giga-red-600 dark:hover:bg-giga-red-700 focus:ring-giga-red-500 text-white focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-stone-900"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="chat-messages flex-1 space-y-4 overflow-y-auto bg-gray-50 p-4 dark:bg-stone-700">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                } giga-slide-in-message`}
              >
                <div className={`max-w-[80%] ${message.isBot ? "order-2" : "order-1"}`}>
                  <div
                    className={`rounded-lg p-3 shadow-sm ${
                      message.isBot
                        ? "bg-white text-gray-800 dark:bg-stone-600 dark:text-stone-100"
                        : "bg-giga-red-500 dark:bg-giga-red-600 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p
                      className={`mt-1 text-xs ${
                        message.isBot ? "text-gray-500 dark:text-stone-400" : "text-giga-red-100"
                      }`}
                    >
                      {formatTime(message.timestamp)}
                    </p>
                  </div>

                  {/* Options */}
                  {message.options && (
                    <div className="mt-2 space-y-1">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            if (
                              option === "Falar no WhatsApp agora" ||
                              option === "Ver preços no WhatsApp" ||
                              option === "Calcular frete no WhatsApp"
                            ) {
                              handleWhatsAppRedirect()
                            } else {
                              handleOptionClick(option)
                            }
                          }}
                          className="hover:bg-giga-red-50 dark:hover:bg-giga-red-900/20 hover:border-giga-red-300 dark:hover:border-giga-red-400 focus:ring-giga-red-500 block w-full rounded border border-gray-200 bg-white p-2 text-left text-sm text-gray-800 transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:border-stone-500 dark:bg-stone-600 dark:text-stone-100 dark:focus:ring-offset-stone-900"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Avatar */}
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    message.isBot
                      ? "bg-giga-red-100 dark:bg-giga-red-900/30 order-1 mr-2"
                      : "order-2 ml-2 bg-gray-300 dark:bg-stone-600"
                  }`}
                >
                  {message.isBot ? (
                    <Bot className="text-giga-red-600 dark:text-giga-red-400 h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4 text-gray-600 dark:text-stone-300" />
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-giga-red-100 dark:bg-giga-red-900/30 mr-2 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                  <Bot className="text-giga-red-600 dark:text-giga-red-400 h-4 w-4" />
                </div>
                <div className="rounded-lg bg-white p-3 shadow-sm dark:bg-stone-600">
                  <div className="flex space-x-1">
                    <div className="giga-typing h-2 w-2 rounded-full bg-gray-400 dark:bg-stone-400"></div>
                    <div
                      className="giga-typing h-2 w-2 rounded-full bg-gray-400 dark:bg-stone-400"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="giga-typing h-2 w-2 rounded-full bg-gray-400 dark:bg-stone-400"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex-shrink-0 border-t bg-white p-4 dark:border-stone-700 dark:bg-stone-800">
            <div className="flex space-x-2">
              <Input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Digite sua mensagem..."
                className="focus:ring-giga-red-500 w-full flex-1 rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 dark:border-stone-600 dark:bg-stone-800 dark:text-stone-100 dark:placeholder-stone-400"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-giga-red-600 hover:bg-giga-red-700 shadow-giga hover:shadow-giga-lg dark:bg-giga-red-700 dark:hover:bg-giga-red-800 dark:shadow-giga-dark dark:hover:shadow-giga-dark-lg rounded-lg px-6 py-3 font-medium text-white transition-all duration-200"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-2 text-center text-xs text-gray-500 dark:text-stone-400">
              Powered by Giga Cosmética IA
            </p>
          </div>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-giga-red-500 hover:bg-giga-red-600 dark:bg-giga-red-600 dark:hover:bg-giga-red-700 shadow-giga-lg hover:shadow-giga-xl group focus:ring-giga-red-500 relative h-14 w-14 rounded-full text-white transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-stone-900"
        size="icon"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageCircle className="h-6 w-6 transition-transform group-hover:scale-110" />
            {/* Notification dot */}
            <div className="bg-giga-red-500 dark:bg-giga-red-400 giga-pulse-notification absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full">
              <span className="text-xs font-bold text-white">!</span>
            </div>
          </>
        )}
      </Button>
    </div>
  )
}
