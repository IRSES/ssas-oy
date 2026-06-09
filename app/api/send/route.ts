import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Инициализируем Resend с твоим API-ключом (ключ нужно взять на сайте resend.com)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, city, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Ssas Oy Form <onboarding@resend.dev>', // На бесплатном тарифе отправка идет с этого адреса
      to: ['info@ssasoy.fi'], // Твоя рабочая почта, куда должны приходить заявки
      subject: `Uusi yhteydenottopyyntö: ${name}`,
      html: `
        <h2>Uusi viesti nettisivuilta (Yhteystiedot)</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Puhelinnumero:</strong> ${phone}</p>
        <p><strong>Osoite:</strong> ${address}, ${city}</p>
        <p><strong>Viesti:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      // Возвращаем саму ошибку, чтобы прочитать её на клиенте
      return NextResponse.json({ error: error.message || error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Catch Error:", error);
    return NextResponse.json({ error: error.message || 'Jotain meni vikaan' }, { status: 500 });
  }
}