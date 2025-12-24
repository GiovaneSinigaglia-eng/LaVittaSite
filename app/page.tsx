"use client"

import { motion } from "framer-motion"
import { Award, CheckCircle, Sparkles, Target, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { AnimatedNumber } from "@/components/animated-number"
import { ContentCarousel } from "@/components/content-carousel"
import { ProductionCarousel, ProductionSlide } from "@/components/production-caroussel"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import image1 from "@/public/clients/1.png"
import image2 from "@/public/clients/2.png"
import image3 from "@/public/clients/3.png"
import image4 from "@/public/clients/4.png"
import image5 from "@/public/clients/5.png"
import image6 from "@/public/clients/6.png"
import image7 from "@/public/clients/7.png"
import image8 from "@/public/clients/8.png"
import image9 from "@/public/clients/9.png"
import image10 from "@/public/clients/10.png"
import image11 from "@/public/clients/11.png"
import image12 from "@/public/clients/12.png"
import image13 from "@/public/clients/13.png"
import image14 from "@/public/clients/14.png"
import image15 from "@/public/clients/15.png"
import image16 from "@/public/clients/16.png"
import image17 from "@/public/clients/17.png"
import image18 from "@/public/clients/18.png"
import image19 from "@/public/clients/19.png"
import image20 from "@/public/clients/20.png"
import image21 from "@/public/clients/21.png"
import image22 from "@/public/clients/22.png"
import image23 from "@/public/clients/23.png"
import image24 from "@/public/clients/24.png"
import image25 from "@/public/clients/25.png"
import image26 from "@/public/clients/26.png"
import image27 from "@/public/clients/27.png"
import image28 from "@/public/clients/28.png"
import image29 from "@/public/clients/29.png"
import image30 from "@/public/clients/30.png"

export default function Home() {
  const { t } = useLanguage()

  const partnersImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
  ]
  const services = [
    {
      number: "01",
      title: t("home.services.advisory.title"),
      description: t("home.services.advisory.description"),
      icon: Target,
    },
    {
      number: "02",
      title: t("home.services.quality.title"),
      description: t("home.services.quality.description"),
      icon: Award,
    },
    {
      number: "03",
      title: t("home.services.research.title"),
      description: t("home.services.research.description"),
      icon: TrendingUp,
    },
    {
      number: "04",
      title: t("home.services.manufacturing.title"),
      description: t("home.services.manufacturing.description"),
      icon: CheckCircle,
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: t("home.benefits.experience.title"),
      description: t("home.benefits.experience.description"),
    },
    {
      icon: CheckCircle,
      title: t("home.benefits.certifications.title"),
      description: t("home.benefits.certifications.description"),
    },
    {
      icon: Users,
      title: t("home.benefits.partnership.title"),
      description: t("home.benefits.partnership.description"),
    },
    {
      icon: TrendingUp,
      title: t("home.benefits.innovation.title"),
      description: t("home.benefits.innovation.description"),
    },
  ]

  // Dentro do componente `Component`, antes do `return`, definir os slides:
  const productionSlides: ProductionSlide[] = [
    {
      video: "/videos/fabrica2.mp4",
      bgColor: "bg-red-600",
    },
    {
      video: "/videos/fabrica3.mp4",
      bgColor: "bg-red-600",
    },
    {
      video: "/videos/fabrica4.mp4",
      bgColor: "bg-red-600",
    },
  ]

  const carouselPhrases = [
    t("home.advisory.items.tax"),
    t("home.advisory.items.export"),
    t("home.advisory.items.launch"),
    t("home.advisory.items.design"),
    t("home.advisory.items.anvisa"),
    t("home.advisory.items.brand"),
    t("home.advisory.items.support"),
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Melhorado */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-gradient-to-br from-red-50 via-rose-50 to-white py-12 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Conteúdo Textual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-center lg:text-left"
            >
              <div className="inline-block rounded-full bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">{t("home.hero.badge")}</span>
              </div>

              <h1 className="text-4xl leading-tight font-extrabold text-stone-900 sm:text-5xl lg:text-6xl">
                {t("home.hero.title")} <br></br>
                <span className="giga-text-gradient">{t("home.hero.titleHighlight")}</span>
              </h1>

              <p className="text-lg leading-relaxed text-stone-600 sm:text-xl">
                {t("home.hero.description")}{" "}
                <span className="font-bold text-primary">{t("home.hero.quality")}</span>{" "}
                {t("home.hero.and")}{" "}
                <span className="font-bold text-primary">{t("home.hero.innovation")}</span>{" "}
                {t("home.hero.forSuccess")}
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button asChild size="lg" className="group text-base font-bold sm:text-lg">
                  <Link href="/contato">
                    {t("home.hero.ctaQuote")}
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base font-bold sm:text-lg"
                >
                  <Link href="/quem-somos">{t("home.hero.ctaAbout")}</Link>
                </Button>
              </div>

              {/* Mini Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">130k+</div>
                  <div className="text-xs text-stone-600 sm:text-sm">
                    {t("home.hero.unitsPerDay")}
                  </div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">10k+</div>
                  <div className="text-xs text-stone-600 sm:text-sm">{t("home.hero.formulas")}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary sm:text-3xl">25+</div>
                  <div className="text-xs text-stone-600 sm:text-sm">{t("home.hero.years")}</div>
                </div>
              </div>
            </motion.div>

            {/* Visual - Vídeo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <video autoPlay muted loop playsInline preload="none" className="w-full">
                  <source src="/videos/fabrica.mp4" type="video/mp4" />
                </video>

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm font-bold text-stone-900">
                      {t("home.hero.dedicated")}
                    </div>
                    <div className="text-xs text-stone-600">{t("home.hero.toOutsourcing")}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Diferenciais Section - NOVA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              {t("home.benefits.title")}{" "}
              <span className="text-primary">{t("home.benefits.titleHighlight")}</span>?
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              {t("home.benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-stone-900">{benefit.title}</h3>
                      <p className="text-sm text-stone-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section>

      {/* Nossos Serviços Section - Melhorado */}
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
              {t("home.services.title1")}{" "}
              <span className="text-primary">{t("home.services.title2")}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              {t("home.services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group h-full cursor-pointer overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <CardContent className="p-6 sm:p-8">
                      <div className="mb-6 flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl font-black text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                            {service.number}
                          </div>
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                            <Icon className="h-6 w-6 text-primary transition-all duration-300 group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-stone-900 sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="text-sm text-stone-600 sm:text-base">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="text-base font-bold sm:text-lg">
              <Link href="/contato">{t("home.services.button")} →</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Nossa Produção Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-white py-16 md:py-24 lg:py-32"
      >
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              {t("home.production.title1")}{" "}
              <span className="text-primary">{t("home.production.title2")}</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              {t("home.production.subtitle")}
            </p>
          </div>
          <ProductionCarousel slides={productionSlides} />
        </div>
      </motion.section>

      {/* Carrossel de Benefícios */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative flex h-20 w-full items-center justify-center bg-primary text-primary-foreground sm:h-24"
      >
        <ContentCarousel phrases={carouselPhrases} />
      </motion.section>

      {/* Numbers Section - Melhorado */}
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
              {t("home.numbers.title1")}{" "}
              <span className="text-primary">{t("home.numbers.title2")}</span>{" "}
              {t("home.numbers.title3")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              {t("home.numbers.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary">
                    <TrendingUp className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <AnimatedNumber
                    value={130000}
                    suffix=""
                    className="mb-2 block text-4xl font-bold text-primary sm:text-5xl lg:text-6xl"
                  />
                  <p className="text-base font-semibold text-stone-900 sm:text-lg">
                    {t("home.numbers.unitsPerShift")}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">{t("home.numbers.capacityDesc")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary">
                    <Sparkles className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <AnimatedNumber
                    value={10000}
                    suffix="+"
                    className="mb-2 block text-4xl font-bold text-primary sm:text-5xl lg:text-6xl"
                  />
                  <p className="text-base font-semibold text-stone-900 sm:text-lg">
                    {t("home.numbers.exclusiveFormulas")}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">{t("home.numbers.diversityDesc")}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="group h-full border-2 transition-all duration-300 hover:border-primary hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 inline-flex rounded-full bg-primary/10 p-4 transition-all duration-300 group-hover:bg-primary">
                    <Award className="h-8 w-8 text-primary transition-all duration-300 group-hover:text-white" />
                  </div>
                  <AnimatedNumber
                    value={1000}
                    suffix="+"
                    className="mb-2 block text-4xl font-bold text-primary sm:text-5xl lg:text-6xl"
                  />
                  <p className="text-base font-semibold text-stone-900 sm:text-lg">
                    {t("home.numbers.factoryArea")}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    {t("home.numbers.infrastructureDesc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Clientes Section - Melhorado */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-stone-900 sm:text-4xl lg:text-5xl">
              {t("home.clients.title1")}{" "}
              <span className="text-primary">{t("home.clients.title2")}</span>{" "}
              {t("home.clients.title3")}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-stone-600 sm:text-lg">
              {t("home.clients.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-6">
            {partnersImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex w-full items-center justify-center"
              >
                <div className="group relative overflow-hidden rounded-xl bg-stone-50 p-4 transition-all duration-300 hover:bg-white hover:shadow-lg">
                  <Image
                    src={src}
                    width={400}
                    height={400}
                    alt={`Cliente ${index + 1}`}
                    className="h-24 w-auto object-contain grayscale transition-all duration-300 group-hover:grayscale-0 sm:h-32"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-lg font-semibold text-stone-700">{t("home.clients.cta")}</p>
            <Button asChild size="lg" className="text-base font-bold sm:text-lg">
              <Link href="/contato">{t("home.clients.ctaButton")} →</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* CTA Final Section - NOVA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="giga-basic-gradient relative overflow-hidden py-16 sm:py-20 lg:py-24"
      >
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 inline-block rounded-full bg-white/20 px-4 py-2">
              <span className="text-sm font-semibold text-white">{t("home.cta.badge")}</span>
            </div>

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {t("home.cta.title")}
            </h2>

            <p className="mb-8 text-base text-white/90 sm:text-lg lg:text-xl">
              {t("home.cta.subtitle")}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                asChild
                size="lg"
                variant="inverted"
                className="text-base font-bold sm:text-lg"
              >
                <Link href="/contato">{t("home.cta.button")}</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-base font-bold text-white hover:bg-white hover:text-primary sm:text-lg"
              >
                <Link href="/quem-somos">{t("home.cta.buttonAlt")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
