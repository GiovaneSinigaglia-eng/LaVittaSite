"use client"

import { motion } from "framer-motion"
import { CheckCircle, Clock, Mail, MapPin, MessageCircle, Phone, X } from "lucide-react"
import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import WhatsAppButton from "@/components/whatsapp-button"

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    cpfcnpj: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormData({ nome: "", email: "", telefone: "", mensagem: "", cpfcnpj: "" })
        setShowSuccessModal(true)
      } else {
        alert(`Erro ao enviar mensagem: ${result.error}`)
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro ao enviar mensagem. Tente novamente mais tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const closeSuccessModal = () => {
    setShowSuccessModal(false)
  }

  return (
    <div className="min-h-screen">
      {showSuccessModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="mx-4 max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-stone-900">Mensagem Enviada!</h3>
              <p className="mb-6 text-stone-600">
                Obrigado pelo seu contato! Recebemos sua mensagem e nossa equipe entrará em contato
                com você o mais breve possível, geralmente em até 24 horas.
              </p>
              <Button onClick={closeSuccessModal} className="w-full bg-red-600 hover:bg-red-700">
                Fechar
              </Button>
            </div>
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-red-50 to-rose-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">📧 Estamos à disposição</span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-stone-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              Entre em <span className="giga-text-gradient">Contato</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base text-stone-600 sm:text-lg lg:text-xl">
              Estamos aqui para ajudar você! Entre em contato conosco através dos canais abaixo ou
              envie uma mensagem diretamente pelo formulário.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contato Principal */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Formulário */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Card className="border-2 shadow-xl transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-stone-900">Envie sua Mensagem</CardTitle>
                  <p className="text-stone-600">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="nome"
                        className="mb-2 block text-sm font-medium text-stone-700"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        value={formData.nome}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-stone-700"
                      >
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="cpfcnpj"
                        className="mb-2 block text-sm font-medium text-stone-700"
                      >
                        CPF/CNPJ *
                      </label>
                      <Input
                        id="cpfcnpj"
                        name="cpfcnpj"
                        type="text"
                        required
                        value={formData.cpfcnpj}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                        placeholder="Digite seu CPF ou CNPJ"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="telefone"
                        className="mb-2 block text-sm font-medium text-stone-700"
                      >
                        Telefone/WhatsApp
                      </label>
                      <Input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        value={formData.telefone}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                        placeholder="(11) 99999-9999"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="mensagem"
                        className="mb-2 block text-sm font-medium text-stone-700"
                      >
                        Mensagem *
                      </label>
                      <Textarea
                        id="mensagem"
                        name="mensagem"
                        required
                        value={formData.mensagem}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="min-h-[120px] w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-red-500 disabled:opacity-50"
                        placeholder="Como podemos ajudar você?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50"
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
                      <MapPin className="h-6 w-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">Endereço</h3>
                      <p className="text-stone-600">
                        Rua Javari, 246
                        <br />
                        Mooca, São Paulo - SP
                        <br />
                        CEP: 03112-100
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-rose-100">
                      <Phone className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">Telefone</h3>
                      <p className="text-stone-600">
                        <span>(11) 2796-3162</span>
                        <br />
                        <span>(11) 2081-4744</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">E-mail</h3>
                      <p className="text-stone-600">
                        <strong>Geral:</strong> contato@lavittacosmetica.com.br
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">
                        Horário de Atendimento
                      </h3>
                      <p className="text-stone-600">
                        <strong>Segunda a Quinta:</strong> 7h às 17h
                        <br />
                        <strong>Sexta:</strong> 7h às 16h
                        <br />
                        <strong>Sábado e Domingo:</strong> Fechado
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                      <MessageCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-lg font-semibold text-stone-900">WhatsApp</h3>
                      <p className="mb-4 text-stone-600">
                        Atendimento rápido e personalizado
                        <br />
                        <strong>Online:</strong> Segunda a Sexta, 8h às 18h
                      </p>
                      <WhatsAppButton
                        variant="inline"
                        size="sm"
                        message="Olá! Vim através do site da La Vitta Cosmética e gostaria de falar com vocês."
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mapa */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-stone-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Nossa <span className="text-primary">Localização</span>
            </h2>
            <p className="text-base text-stone-600 sm:text-lg lg:text-xl">
              Venha nos visitar em nossa loja física em São Paulo
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.865041326538!2d-46.602095923911154!3d-23.53973736070639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e7e41eab70f%3A0x42637c193108c726!2sR.%20Javari%2C%20246%20-%20Mooca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003112-100!5e0!3m2!1spt-BR!2sbr!4v1727044480000!5m2!1spt-BR!2sbr"
              width="100%"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização La Vitta Cosmética"
            />
          </div>
        </div>
      </motion.section>

      {/* WhatsApp CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-red-600 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <MessageCircle className="mx-auto mb-6 h-16 w-16 text-white" />
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Precisa de ajuda imediata?
          </h2>
          <p className="mb-8 text-lg text-red-100 sm:text-xl">
            Fale conosco pelo WhatsApp e receba atendimento personalizado em tempo real!
          </p>
          <WhatsAppButton
            variant="inline"
            size="lg"
            message="Olá! Preciso de ajuda imediata com os produtos da La Vitta Cosmética. Podem me atender?"
            className="bg-white text-green-600 hover:bg-stone-50"
          />
        </div>
      </motion.section>
    </div>
  )
}
