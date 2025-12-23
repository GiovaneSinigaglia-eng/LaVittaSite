"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle, Heart, Lightbulb, Users, X } from "lucide-react"
import React, { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    endereco: "",
    email: "",
    telefone: "",
    mensagem: "",
    curriculo: "",
    dataNasc: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("nome", formData.nome)
      formDataToSend.append("cpf", formData.cpf)
      formDataToSend.append("dataNasc", formData.dataNasc)
      formDataToSend.append("endereco", formData.endereco)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("telefone", formData.telefone)
      formDataToSend.append("mensagem", formData.mensagem)
      formDataToSend.append("curriculo", formData.curriculo)

      const response = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formDataToSend,
      })

      const result = await response.json()

      if (response.ok) {
        setFormData({
          nome: "",
          cpf: "",
          endereco: "",
          email: "",
          telefone: "",
          mensagem: "",
          curriculo: "",
          dataNasc: "",
        })
        setShowSuccessModal(true)
      } else {
        alert(`Erro ao enviar: ${result.error}`)
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      alert("Erro interno. Tente novamente mais tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const closeSuccessModal = () => setShowSuccessModal(false)

  return (
    <div className="min-h-screen">
      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="relative mx-4 max-w-md rounded-2xl bg-white p-8 shadow-2xl">
            <button
              onClick={closeSuccessModal}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-600"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-stone-900">Candidatura Enviada!</h3>
              <p className="mb-6 text-stone-600">
                Obrigado por enviar seu currículo! Nossa equipe de RH analisará suas informações e
                entrará em contato se houver uma oportunidade adequada.
              </p>
              <Button onClick={closeSuccessModal} className="w-full bg-red-600 hover:bg-red-700">
                Fechar
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-red-50 to-rose-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">
                💼 Oportunidades de carreira
              </span>
            </div>
            <h1 className="mb-4 text-3xl font-bold text-stone-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              Trabalhe <span className="giga-text-gradient">Conosco</span>
            </h1>
            <p className="mx-auto max-w-3xl text-base text-stone-600 sm:text-lg lg:text-xl">
              Faça parte da equipe La Vitta Cosmética! Preencha o formulário abaixo e envie seu
              currículo.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefícios */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Por que trabalhar <span className="text-primary">conosco?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              Venha fazer parte de uma equipe apaixonada pela beleza e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Briefcase,
                title: "Oportunidades",
                description: "Crescimento profissional em ambiente dinâmico",
                color: "primary",
              },
              {
                icon: Users,
                title: "Equipe Unida",
                description: "Trabalhe com profissionais experientes e dedicados",
                color: "rose",
              },
              {
                icon: Lightbulb,
                title: "Inovação",
                description: "Tecnologia de ponta e processos modernos",
                color: "amber",
              },
              {
                icon: Heart,
                title: "Cuidado",
                description: "Ambiente que valoriza cada colaborador",
                color: "red",
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary">
                        <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-stone-900">{benefit.title}</h3>
                      <p className="text-sm text-stone-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Formulário */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-stone-50 to-stone-100 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-stone-900">Envie seu Currículo</CardTitle>
              <p className="text-stone-600">
                Preencha seus dados e envie seu currículo para nossa equipe de RH.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="mb-2 block text-sm font-medium text-stone-700">
                    Nome Completo *
                  </label>
                  <Input
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="cpf" className="mb-2 block text-sm font-medium text-stone-700">
                    CPF *
                  </label>
                  <Input
                    id="cpf"
                    name="cpf"
                    required
                    value={formData.cpf}
                    onChange={handleChange}
                    placeholder="Digite seu CPF"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dataNascimento"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Data de Nascimento *
                  </label>
                  <Input
                    id="dataNascimento"
                    name="dataNasc"
                    type="date"
                    required
                    value={formData.dataNasc || ""}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="endereco"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Endereço Completo *
                  </label>
                  <Input
                    id="endereco"
                    name="endereco"
                    required
                    value={formData.endereco}
                    onChange={handleChange}
                    placeholder="Rua, número, bairro, cidade"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="telefone"
                      className="mb-2 block text-sm font-medium text-stone-700"
                    >
                      Telefone
                    </label>
                    <Input
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Mensagem (opcional)
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Fale brevemente sobre você"
                    className="min-h-[120px]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="curriculo"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Link do Currículo (Google Drive) *
                  </label>
                  <Input
                    id="curriculo"
                    name="curriculo"
                    type="url"
                    required
                    value={formData.curriculo || ""}
                    onChange={handleChange}
                    placeholder="https://drive.google.com/file/d/SEU_ARQUIVO/view?usp=sharing"
                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-500 focus:border-transparent focus:ring-2 focus:ring-red-500"
                  />
                  <p className="mt-2 text-sm text-stone-500">
                    Para compartilhar seu currículo, faça o upload do arquivo no Google Drive,
                    clique com o botão direito sobre o arquivo, selecione &quot;Compartilhar&quot;,
                    depois &quot;Qualquer pessoa com o link&quot; e copie o link aqui.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Currículo"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </motion.section>
    </div>
  )
}
