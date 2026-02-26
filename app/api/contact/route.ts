import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Service temporarily unavailable' }, { status: 503 })
  }
  const resend = new Resend(apiKey)

  const body = await req.json()
  const { name, business, email, phone, message } = body

  if (!name || !business || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Sends to Caden's Gmail (Resend free tier requires verified recipient)
  const emailText = `Mainstay lead: ${name}, ${business}. ${email} ${phone || ''} - ${message || 'no message'}`

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'cadenhillier33@gmail.com',
      subject: 'New Lead - Mainstay AI',
      text: emailText,
    })
    console.log('Resend result:', result)
    return NextResponse.json({ success: true, result })
  } catch (err: any) {
    console.error('SMS error:', err)
    return NextResponse.json({ error: 'Failed to send', details: err?.message || String(err) }, { status: 500 })
  }
}