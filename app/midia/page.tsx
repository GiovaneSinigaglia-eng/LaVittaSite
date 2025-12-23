"use client"

import { motion } from "framer-motion"
import { PlayCircle } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Midia() {
  const videos = [
    {
      id: "EKLON64xLIg?si=J6Z4nXPlXtoUgBLS",
      title: "Inovação na Fabricação de Esmaltes",
      description:
        "Conheça nossos processos de fabricação e como transformamos ideias em produtos de alta qualidade.",
    },
  ]

  // const articles = [
  //   {
  //     title: "La Vitta expande atuação no mercado internacional",
  //     summary:
  //       "Empresa brasileira conquista novos parceiros na América Latina e Europa, levando a qualidade dos esmaltes nacionais para o mundo.",
  //     date: "15 de Outubro, 2025",
  //     image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Portal Cosméticos Brasil",
  //   },
  //   {
  //     title: "Sustentabilidade e inovação: o futuro da indústria cosmética",
  //     summary:
  //       "La Vitta investe em pesquisa para desenvolver fórmulas cada vez mais sustentáveis e seguras para o meio ambiente.",
  //     date: "28 de Setembro, 2025",
  //     image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Revista Beleza & Negócios",
  //   },
  //   {
  //     title: "Tecnologia de ponta na fabricação de esmaltes",
  //     summary:
  //       "Com mais de 25 anos de experiência, La Vitta utiliza tecnologia avançada para garantir a qualidade de seus produtos.",
  //     date: "10 de Setembro, 2025",
  //     image: "https://images.unsplash.com/photo-1581093458791-9d42a0c5a4c6?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Jornal da Indústria",
  //   },
  //   {
  //     title: "Parceria estratégica impulsiona marcas emergentes",
  //     summary:
  //       "Descubra como a terceirização com a La Vitta tem ajudado pequenas e médias marcas a conquistarem o mercado de beleza.",
  //     date: "5 de Agosto, 2025",
  //     image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Empreendedores & Negócios",
  //   },
  //   {
  //     title: "Certificações e compromisso com a qualidade",
  //     summary:
  //       "La Vitta mantém todas as autorizações e certificações necessárias para garantir a segurança e excelência de seus produtos.",
  //     date: "22 de Julho, 2025",
  //     image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Cosméticos em Foco",
  //   },
  //   {
  //     title: "Cores que definem tendências: o trabalho da La Vitta",
  //     summary:
  //       "Como nossa equipe de P&D desenvolve as cores e acabamentos que se tornam sucesso de vendas no mercado brasileiro.",
  //     date: "12 de Junho, 2025",
  //     image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=400&fit=crop",
  //     link: "#",
  //     source: "Fashion & Beauty Magazine",
  //   },
  // ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-red-50 to-rose-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold text-stone-900 sm:mb-6 sm:text-4xl lg:text-5xl">
              A <span className="font-extrabold text-primary">La Vitta</span> em Destaque
            </h1>
            <p className="mx-auto max-w-3xl text-base text-stone-600 sm:text-lg lg:text-xl">
              Confira vídeos, matérias e reportagens sobre nossa trajetória e inovação no setor
              cosmético.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vídeos Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-12">
            <PlayCircle className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">Vídeos</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-1">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative aspect-video w-full overflow-hidden bg-stone-100">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        className="h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="mb-3 text-xl font-bold text-stone-900">{video.title}</h3>
                      <p className="text-stone-600">{video.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Matérias Section */}
      {/* <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-red-50 to-rose-50 py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-3 sm:mb-12">
            <Newspaper className="h-8 w-8 text-primary sm:h-10 sm:w-10" />
            <h2 className="text-2xl font-bold text-stone-900 sm:text-3xl lg:text-4xl">Matérias e Notícias</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden border-0 bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium text-primary">{article.source}</span>
                        <span className="text-sm text-stone-500">{article.date}</span>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-stone-900 transition-colors duration-300 group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="mb-6 text-stone-600">{article.summary}</p>
                      <Button
                        asChild
                        variant="default"
                        className="w-full bg-primary hover:bg-primary/90"
                      >
                        <Link href={article.link} className="flex items-center justify-center gap-2">
                          Ler matéria
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="giga-basic-gradient py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground sm:mb-6 sm:text-3xl lg:text-4xl">
            Quer fazer parte da nossa história?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Descubra como a <span className="font-extrabold">La Vitta</span> pode ajudar sua marca a
            crescer no mercado de cosméticos.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="inverted"
              className="h-auto min-h-12 text-lg font-bold"
            >
              <Link href="/contato">Entre em contato</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-auto min-h-12 border-2 border-white bg-transparent text-lg font-bold text-white hover:bg-white hover:text-primary"
            >
              <Link href="/quem-somos">Conheça a La Vitta</Link>
            </Button>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
