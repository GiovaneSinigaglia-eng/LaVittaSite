import emailjs from "@emailjs/nodejs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, mensagem, cpfcnpj } = await req.json()

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Nome, email e mensagem são obrigatórios" },
        { status: 400 },
      )
    }

    const contactData = {
      nome,
      email,
      cpfcnpj,
      telefone: telefone || "Não informado",
      mensagem,
      timestamp: new Date().toLocaleString("pt-BR"),
    }

    // Envia o e-mail via EmailJS
    await emailjs.send(
      process.env.EMAIL_SERVICE ?? "",
      process.env.EMAIL_TEMPLATE_CONTATO ?? "",
      contactData,
      {
        publicKey: process.env.EMAIL_PUBLIC,
        privateKey: process.env.EMAIL_PRIVATE,
      },
    )

    return NextResponse.json({
      success: true,
      message: "Contato enviado com sucesso!",
    })
  } catch (error) {
    console.error("Erro ao processar contato:", error)
    return NextResponse.json({ error: "Erro interno ao enviar e-mail" }, { status: 500 })
  }
}
