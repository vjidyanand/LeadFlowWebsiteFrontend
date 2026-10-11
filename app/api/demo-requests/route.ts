const apiBaseUrl = (
  process.env.DEMO_REQUEST_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'https://api.magicghar.com'
).replace(/\/$/, '')

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return Response.json({ message: 'Request body must be valid JSON.' }, { status: 400 })
  }

  try {
    const response = await fetch(`${apiBaseUrl}/public/demo-requests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    })
    const responseBody = await response.text()

    return new Response(responseBody, {
      status: response.status,
      headers: {
        'Content-Type': response.headers.get('content-type') || 'application/json',
      },
    })
  } catch {
    return Response.json(
      { message: 'We could not reach the demo request service. Please try again.' },
      { status: 502 },
    )
  }
}