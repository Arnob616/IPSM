// app/api/chat/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || '';
    const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'CivicGuard Bangladesh';

    // Bangladesh-specific context
    const bangladeshContext = `
    You are CivicGuard BD - Bangladesh's 999 emergency service extension. 
    Current Features:
    1. Verified reporting requires valid NID (জাতীয় পরিচয়পত্র) and Bangladeshi citizenship
    2. All location data uses Bangladesh's coordinate system
    3. Incident categories: Road accidents, medical emergencies, political violence, etc.
    4. Real-time tracking integrated with Bangladesh Police systems
    5. Hate speech detection for Bengali/English content
    6. Media analysis for local context
    
    Response Guidelines:
    - Always mention "Call ৯৯৯ immediately" for active emergencies
    - Use Bengali terms for authorities (র‍্যাব, পুলিশ, ফায়ার সার্ভিস)
    - Include Bangladesh emergency contacts:
      * Police: ৯৯৯
      * Fire Service: ০৯৬৬৬-৭৭৭৭৭৭ 
      * Ambulance: ১০৯০
    - Use DD/MM format following Bengali calendar
    - Convert measurements to metric system
    - Use local thana/division names
    - Mention relevant Bangladeshi laws (Digital Security Act, Penal Code)`;

    const { message, reportType } = await request.json();

    // Create headers properly
    const headers = new Headers({
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': siteUrl,
      'X-Title': siteName,
      'Content-Type': 'application/json'
    });

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers,
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "system",
            content: `${bangladeshContext}\n\nCurrent report type: ${reportType || 'none'}`
          },
          { role: "user", content: message }
        ],
        temperature: 0.3
      })
    });

    if (!response.ok) {
      throw new Error(`API error: ${await response.text()}`);
    }

    const data = await response.json();
    return NextResponse.json({ 
      response: data.choices[0].message.content 
    });

  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json(
      { response: 'ত্রুটিজনিত সমস্যা। সরাসরি ৯৯৯ নম্বরে কল করুন।' },
      { status: 500 }
    );
  }
}