export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  try {
    let apiURL = process.env.NEXT_PUBLIC_API_BASE_URL
    let apiKey = process.env.NEXT_PUBLIC_API_KEY

    const res = await fetch(`${apiURL}/${endpoint}`, {
      ...options,
      body: options?.body && options.body instanceof FormData ? options.body : JSON.stringify(options.body),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${apiKey}`,
        ...(options.headers || {}),
      },
    });

    let data = await res.json()

    return { status: res.status, ...data }
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error))
  }
}