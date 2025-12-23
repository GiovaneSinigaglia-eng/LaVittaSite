export interface ChatResponse {
  keywords: string[]
  response: string
  followUp?: string[]
  requiresWhatsApp?: boolean
}

export const chatbotResponses: ChatResponse[] = [
  {
    keywords: ["preço", "valor", "custa", "quanto", "barato", "caro"],
    response:
      "Nossos produtos têm ótimo custo-benefício! 💰 Os preços variam de R$ 12,90 a R$ 89,90. Temos opções para todos os orçamentos!",
    followUp: ["Ver tabela de preços", "Falar sobre promoções", "Continuar no WhatsApp"],
    requiresWhatsApp: true,
  },
  {
    keywords: ["entrega", "frete", "envio", "prazo", "demora"],
    response:
      "Fazemos entregas para todo o Brasil! 🚚 O prazo varia de 3 a 7 dias úteis dependendo da sua região.",
    followUp: ["Calcular frete", "Ver opções de entrega", "Falar no WhatsApp"],
    requiresWhatsApp: true,
  },
  {
    keywords: ["natural", "ingrediente", "orgânico", "vegano", "químico"],
    response:
      "Sim! 🌿 Temos uma linha completa de produtos naturais com ingredientes como óleo de argan, aloe vera, manteiga de karité e muito mais!",
    followUp: ["Ver linha natural", "Ingredientes específicos", "Certificações"],
  },
  {
    keywords: ["cabelo", "shampoo", "condicionador", "máscara capilar"],
    response:
      "Nossa linha capilar é incrível! 💇‍♀️ Temos produtos para todos os tipos de cabelo: secos, oleosos, cacheados, lisos...",
    followUp: ["Cabelos secos", "Cabelos oleosos", "Cabelos cacheados", "Ver todos os produtos"],
  },
  {
    keywords: ["pele", "rosto", "facial", "hidratante", "sérum"],
    response:
      "Cuidamos da sua pele com muito carinho! ✨ Temos produtos para todos os tipos: oleosa, seca, mista e sensível.",
    followUp: ["Pele oleosa", "Pele seca", "Pele sensível", "Anti-idade"],
  },
  {
    keywords: ["acne", "espinha", "oleosa", "cravos"],
    response:
      "Para peles com tendência à acne, recomendamos produtos oil-free com ácido salicílico! 🧴 Nossa linha específica é muito eficaz.",
    followUp: ["Produtos para acne", "Rotina anti-acne", "Falar com especialista"],
  },
  {
    keywords: ["idade", "rugas", "anti-idade", "colágeno", "firmeza"],
    response:
      "Temos uma linha anti-idade completa! 🌟 Com colágeno, vitamina C, ácido hialurônico e peptídeos para uma pele mais firme.",
    followUp: ["Sérum anti-idade", "Creme anti-rugas", "Rotina completa"],
  },
  {
    keywords: ["protetor solar", "fps", "proteção", "sol"],
    response:
      "Proteção solar é fundamental! ☀️ Temos protetores FPS 30, 50 e 60, com base hidratante e toque seco.",
    followUp: ["FPS 30", "FPS 60", "Para pele oleosa", "Para pele seca"],
  },
  {
    keywords: ["horário", "atendimento", "funciona", "aberto"],
    response:
      "Nossos horários de atendimento são: 📅\n• Segunda a Sexta: 8h às 18h\n• Sábado: 8h às 12h\n• Domingo: Fechado",
    followUp: ["Falar agora no WhatsApp", "Agendar atendimento"],
  },
  {
    keywords: ["troca", "devolução", "garantia", "defeito"],
    response:
      "Temos 30 dias para trocas e devoluções! 🔄 Se não ficar satisfeita, devolvemos seu dinheiro sem complicação.",
    followUp: ["Como trocar", "Política completa", "Falar no WhatsApp"],
  },
  {
    keywords: ["desconto", "promoção", "oferta", "cupom"],
    response:
      "Sempre temos promoções especiais! 🎉 Para saber sobre descontos atuais e cupons exclusivos, fale com nossa equipe!",
    followUp: ["Ver promoções", "Cupom de desconto", "Falar no WhatsApp"],
    requiresWhatsApp: true,
  },
  {
    keywords: ["como usar", "aplicar", "modo de uso", "instrução"],
    response:
      "Cada produto tem sua forma ideal de uso! 📋 Posso te explicar sobre algum produto específico ou nossa equipe pode te orientar melhor.",
    followUp: ["Rotina facial", "Rotina capilar", "Produto específico"],
  },
]

export const getResponseForMessage = (message: string): ChatResponse | null => {
  const lowerMessage = message.toLowerCase()

  return (
    chatbotResponses.find((response) =>
      response.keywords.some((keyword) => lowerMessage.includes(keyword)),
    ) || null
  )
}

export const getRandomWelcomeMessage = (): string => {
  const welcomeMessages = [
    "Olá! 👋 Sou a assistente virtual da Giga Cosmética. Como posso ajudar você hoje?",
    "Oi! 😊 Bem-vinda à Giga Cosmética! Em que posso te ajudar?",
    "Olá! ✨ Estou aqui para te ajudar a encontrar os produtos perfeitos para você!",
    "Oi! 💚 Sou sua assistente de beleza da Giga Cosmética. O que você gostaria de saber?",
  ]

  return welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]
}

export const getRandomThinkingMessage = (): string => {
  const thinkingMessages = [
    "Deixe-me pensar na melhor resposta para você...",
    "Analisando sua pergunta...",
    "Buscando as melhores informações...",
    "Um momento, estou preparando uma resposta personalizada...",
  ]

  return thinkingMessages[Math.floor(Math.random() * thinkingMessages.length)]
}
