import emailjs from "@emailjs/nodejs"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const formData = await req.formData()

  const nome = formData.get("nome") as string
  const cpf = formData.get("cpf") as string
  const endereco = formData.get("endereco") as string
  const email = formData.get("email") as string
  const telefone = formData.get("telefone") as string
  const mensagem = formData.get("mensagem") as string
  const curriculo = formData.get("curriculo") as File | null
  const dataNasc = formData.get("dataNasc") as File | null

  if (!nome || !cpf || !endereco || !curriculo) {
    return NextResponse.json({ error: "Campos obrigatórios faltando" }, { status: 400 })
  }

  try {
    const result = await emailjs.send(
      process.env.EMAIL_SERVICE ?? "",
      process.env.EMAIL_TEMPLATE_CV ?? "",
      {
        nome,
        cpf,
        endereco,
        email,
        telefone,
        mensagem,
        curriculo,
        dataNasc,
      },
      {
        publicKey: process.env.EMAIL_PUBLIC,
        privateKey: process.env.EMAIL_PRIVATE,
      },
    )

    return NextResponse.json({ success: true, response: result })
  } catch (error) {
    console.error("Erro ao enviar email com EmailJS:", error)
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
  }
}
