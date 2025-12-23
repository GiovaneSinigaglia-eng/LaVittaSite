"use client"

import { motion } from "framer-motion"
import { Award, Eye, Heart, Lightbulb, Shield, Target, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import WhatsAppButton from "@/components/whatsapp-button"
import ImageLavitta from "@/public/lavitta.jpg"

export default function QuemSomos() {
  const values = [
    {
      icon: Heart,
      title: "Cuidado",
      description:
        "Cada produto é desenvolvido com carinho e atenção aos detalhes para cuidar da beleza.",
      color: "rose",
    },
    {
      icon: Target,
      title: "Qualidade",
      description: "Processos rigorosos de fabricação garantem a excelência de cada fórmula.",
      color: "red",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Buscamos constantemente as mais recentes tecnologias e tendências.",
      color: "amber",
    },
    {
      icon: Users,
      title: "Confiança",
      description: "Relacionamentos duradouros baseados em transparência e satisfação.",
      color: "blue",
    },
  ]

  const produtos = [
    {
      title: "Esmaltes Cremosos",
      description: "Fórmulas cremosas com cobertura uniforme e acabamento impecável",
      icon: "💅",
    },
    {
      title: "Esmaltes com Glitter",
      description: "Brilho intenso e partículas especiais para looks únicos",
      icon: "✨",
    },
    {
      title: "Esmaltes Perolados",
      description: "Acabamento nacarado sofisticado com reflexos luminosos",
      icon: "🌟",
    },
    {
      title: "Esmaltes de Tratamento",
      description: "Cuidado especializado para fortalecimento e proteção das unhas",
      icon: "🌿",
    },
  ]

  const certifications = [
    { name: "CRQ", description: "Conselho Regional de Química" },
    { name: "ANVISA", description: "Agência Nacional de Vigilância Sanitária" },
    { name: "CETESB", description: "Companhia Ambiental do Estado" },
    { name: "Ministério da Saúde", description: "Autorização Federal" },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Melhorado */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-red-50 via-rose-50 to-white py-16 sm:py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
              <span className="text-sm font-semibold text-primary">🏆 25+ anos de excelência</span>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold text-stone-900 sm:text-5xl lg:text-6xl">
              Conheça a <span className="giga-text-gradient">La Vitta</span> Cosmética
            </h1>

            <p className="mx-auto max-w-3xl text-base text-stone-600 sm:text-lg lg:text-xl">
              Referência nacional em terceirização de esmaltes e produtos para unhas, unindo
              tradição, inovação e compromisso com a excelência.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Nossa História - Melhorado */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">Nossa Jornada</span>
              </div>

              <h2 className="mb-6 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
                Uma História de <span className="text-primary">Sucesso</span>
              </h2>

              <div className="space-y-6 text-base leading-relaxed text-stone-600 sm:text-lg">
                <p>
                  A <span className="font-bold text-primary">La Vitta</span> nasceu em julho de 1998
                  com a missão de ser parceira estratégica de marcas que buscam crescer no setor de
                  cosméticos para unhas. Ao longo de mais de duas décadas, nos tornamos sinônimo de
                  confiança, inovação e compromisso com a qualidade.
                </p>

                <p>
                  Contamos com uma estrutura moderna, equipe altamente especializada e tecnologia de
                  ponta em nossos processos de fabricação. Nossa experiência, aliada ao
                  acompanhamento constante das tendências do mercado de beleza, nos permite
                  desenvolver produtos diferenciados.
                </p>

                <div className="grid grid-cols-2 gap-4 rounded-xl bg-primary/5 p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">130k+</div>
                    <div className="text-sm text-stone-600">unidades/dia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">10k+</div>
                    <div className="text-sm text-stone-600">fórmulas</div>
                  </div>
                </div>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="mt-6 bg-primary text-white transition-all duration-300 hover:bg-primary/90 hover:shadow-lg"
                  >
                    Conheça Nossa História Completa
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[90vh] max-w-5xl overflow-hidden border-2 border-primary/20 bg-white p-0 shadow-2xl">
                  <DialogHeader className="flex-shrink-0 border-b border-stone-200 bg-gradient-to-r from-red-50 to-rose-50 px-6 py-5">
                    <DialogTitle className="text-center text-3xl font-bold text-stone-900 sm:text-4xl">
                      A História da <span className="giga-text-gradient">La Vitta</span> Cosmética
                    </DialogTitle>
                    <p className="mt-2 text-center text-sm text-stone-600">
                      Mais de 25 anos de dedicação à excelência em cosméticos
                    </p>
                  </DialogHeader>
                  <div className="scrollbar-thin scrollbar-track-red-100 scrollbar-thumb-primary hover:scrollbar-thumb-red-700 max-h-[calc(90vh-140px)] overflow-y-auto px-6 py-6">
                    <div className="space-y-6 pr-2">
                      {/* Os Primeiros Passos */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="group rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-2">
                            <span className="text-xl">🎯</span>
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                            Os Primeiros Passos (1998)
                          </h3>
                        </div>
                        <p className="leading-relaxed text-stone-600">
                          Em julho de 1998, nasceu a La Vitta Cosmética com uma visão
                          revolucionária: especializar-se exclusivamente na terceirização da
                          fabricação de esmaltes para unhas. Desde o início, nossa missão foi clara
                          - não apenas produzir, mas ser parceiros estratégicos de nossos clientes.
                        </p>
                      </motion.div>

                      {/* Crescimento e Inovação */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-red-50 to-rose-50 p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-white p-2">
                            <span className="text-xl">🚀</span>
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                            Crescimento e Inovação
                          </h3>
                        </div>
                        <div className="space-y-4 text-stone-700">
                          <p className="leading-relaxed">
                            Ao longo dos anos, investimos constantemente em pesquisa e
                            desenvolvimento, acompanhando de perto as tendências globais de beleza.
                            Nossa equipe técnica trabalha incansavelmente no aprimoramento de
                            fórmulas, testando novos pigmentos e desenvolvendo cores que capturam o
                            espírito de cada época.
                          </p>
                          <p className="leading-relaxed">
                            Desenvolvemos expertise em diferentes tipos de acabamentos: desde os
                            clássicos cremosos até as mais modernas formulações com glitter,
                            perolados e tratamentos especializados.
                          </p>
                        </div>
                      </motion.div>

                      {/* Expansão */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group rounded-2xl border-2 border-rose-200 bg-gradient-to-br from-red-50 to-rose-50 p-6 shadow-md transition-all duration-300 hover:border-primary hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-white p-2">
                            <span className="text-xl">🌎</span>
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                            Expansão Nacional e Internacional
                          </h3>
                        </div>
                        <p className="leading-relaxed text-stone-700">
                          Nossa reputação de qualidade e confiabilidade nos levou além das
                          fronteiras nacionais. Hoje, atendemos clientes em diversos países, sempre
                          mantendo os mesmos padrões rigorosos de qualidade que nos tornaram
                          referência no mercado brasileiro.
                        </p>
                      </motion.div>

                      {/* Certificações */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="group rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Shield className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                            Compromisso com a Qualidade
                          </h3>
                        </div>
                        <p className="mb-4 leading-relaxed text-stone-600">
                          Possuímos todas as certificações e autorizações necessárias dos órgãos
                          competentes:
                        </p>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                          {[
                            "Conselho Regional de Química (CRQ)",
                            "Vigilância Sanitária",
                            "Ministério da Saúde",
                            "CETESB (Companhia Ambiental)",
                            "Polícia Federal e Estadual",
                            "Corpo de Bombeiros",
                          ].map((cert, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 rounded-lg bg-primary/5 p-3"
                            >
                              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                ✓
                              </div>
                              <span className="text-sm text-stone-700">{cert}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Números */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-rose-50 p-6 shadow-md"
                      >
                        <div className="mb-4 flex items-center justify-center gap-2">
                          <span className="text-2xl">📊</span>
                          <h3 className="text-center text-xl font-bold text-stone-900 sm:text-2xl">
                            Nossos Números
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                          <div className="rounded-xl border-2 border-primary/20 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md">
                            <div className="text-4xl font-bold text-primary">25+</div>
                            <div className="mt-1 text-sm font-semibold text-stone-600">
                              Anos de Experiência
                            </div>
                          </div>
                          <div className="rounded-xl border-2 border-primary/20 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md">
                            <div className="text-4xl font-bold text-primary">130k+</div>
                            <div className="mt-1 text-sm font-semibold text-stone-600">
                              Unidades/Dia
                            </div>
                          </div>
                          <div className="rounded-xl border-2 border-primary/20 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md">
                            <div className="text-4xl font-bold text-primary">10k+</div>
                            <div className="mt-1 text-sm font-semibold text-stone-600">
                              Fórmulas Desenvolvidas
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Filosofia */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="group rounded-2xl border-2 border-primary/10 bg-white p-6 shadow-md transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <div className="rounded-full bg-primary/10 p-2">
                            <span className="text-xl">💡</span>
                          </div>
                          <h3 className="text-xl font-bold text-stone-900 sm:text-2xl">
                            Nossa Filosofia
                          </h3>
                        </div>
                        <div className="space-y-4 text-stone-600">
                          <p className="leading-relaxed">
                            Optamos conscientemente por não ter marca própria, mantendo nosso foco
                            total na terceirização. Esta decisão estratégica nos permite dedicar
                            100% de nossa energia e recursos ao sucesso de nossos parceiros.
                          </p>
                          <p className="leading-relaxed">
                            Cada projeto é único, desenvolvido de forma personalizada para atender
                            às necessidades específicas e metas de mercado de cada cliente. Não
                            fabricamos apenas esmaltes - construímos sonhos e ajudamos marcas a se
                            destacarem no competitivo universo da beleza.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={ImageLavitta}
                  alt="La Vitta Cosmética"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              {/* Badge decorativo */}
              <div className="absolute -right-6 -bottom-6 rounded-2xl bg-white p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">25+</div>
                  <div className="text-sm font-semibold text-stone-600">Anos</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Valores - Melhorado */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-stone-50 to-stone-100 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Nossos <span className="text-primary">Valores</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              Princípios que guiam cada decisão e cada produto que desenvolvemos
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary">
                        <Icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-stone-900">{value.title}</h3>
                      <p className="text-sm text-stone-600">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Certificações - NOVA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Qualidade Certificada</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Compromisso com a <span className="text-primary">Excelência</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              Todas as autorizações e certificações necessárias para garantir segurança e qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-3 inline-flex rounded-full bg-primary/10 p-3">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-stone-900">{cert.name}</h3>
                    <p className="text-xs text-stone-600">{cert.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Missão, Visão e Valores Original - Mantido */}
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
              Missão, Visão e <span className="text-primary">Valores</span>
            </h2>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-2 bg-white shadow-lg transition-all duration-300 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-stone-900">Missão</h3>
                <p className="text-stone-600">
                  Proporcionar produtos cosméticos de alta qualidade que realcem a beleza natural de
                  cada pessoa, promovendo autoestima e bem-estar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-white shadow-lg transition-all duration-300 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100">
                  <Eye className="h-8 w-8 text-rose-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-stone-900">Visão</h3>
                <p className="text-stone-600">
                  Ser reconhecida como a marca de cosméticos mais confiável e inovadora do Brasil,
                  presente na vida de milhões de pessoas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 bg-white shadow-lg transition-all duration-300 hover:border-primary">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Heart className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-stone-900">Valores</h3>
                <p className="text-stone-600">
                  Qualidade, inovação, sustentabilidade, respeito ao cliente e compromisso com a
                  beleza natural e saudável.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Nossos Valores Detalhados */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="border-2 bg-white shadow-lg transition-all duration-300 hover:border-primary"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-stone-900">{value.title}</h4>
                    <p className="text-sm text-stone-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Equipe
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-stone-900 lg:text-4xl">Nossa Equipe</h2>
            <p className="mx-auto max-w-2xl text-xl text-stone-600">
              Profissionais dedicados e apaixonados por beleza e inovação
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Ana Beatriz Silva",
                role: "CEO & Fundadora",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Carlos Mendes",
                role: "Diretor de P&D",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Mariana Costa",
                role: "Gerente de Qualidade",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="border-0 bg-white shadow-lg">
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="mb-2 text-xl font-bold text-stone-900">{member.name}</h3>
                  <p className="font-medium text-red-600">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-red-50 to-rose-50 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              Nossos <span className="text-primary">Produtos</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              Diversidade e qualidade em cada fórmula desenvolvida
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {produtos.map((produto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full border-2 bg-white transition-all duration-300 hover:border-primary hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
                      {produto.icon}
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-stone-900">{produto.title}</h3>
                    <p className="text-sm text-stone-600">{produto.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contato Direto */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-red-600 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Gostou de conhecer nossa história?
          </h2>
          <p className="mb-8 text-lg text-red-100 sm:text-xl">
            Entre em contato conosco e descubra como podemos ajudar sua marca a crescer!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <WhatsAppButton
              variant="inline"
              size="lg"
              message="Olá! Acabei de conhecer a história da La Vitta Cosmética e gostaria de saber mais."
              className="bg-white text-green-600 hover:bg-stone-50"
              />       
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/contato">Enviar E-mail</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
