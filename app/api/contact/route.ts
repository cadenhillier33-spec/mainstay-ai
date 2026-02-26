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

  // Sends to Verizon email-to-SMS gateway — arrives as a text on Caden's phone
  const smsText = `Mainstay lead: ${name}, ${business}. ${email} ${phone || ''} - ${message || 'no message'}`

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: '2036714631@vtext.com',
      subject: 'New Lead',
      text: smsText,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('SMS error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}