const emailjsUrl = import.meta.env.VITE_EMAILJS_API_URL
const openaiUrl = import.meta.env.VITE_OPENAI_API_URL
const gpt_key = import.meta.env.VITE_API_KEY_GPT
const fetchEmailJs = (endpoint, data, method = 'GET') => {
    const url = `${emailjsUrl}/${endpoint}`
    if (method === 'GET') {
        return fetch(url)
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    }
}



const fetchOpenAi = (data, method = 'GET') => {
    const url = `${openaiUrl}`
    if (method === 'GET') {
        return fetch(url)
    } else {
        return fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${gpt_key}`
            },
            body: JSON.stringify(data),
        })
    }
}

export { fetchEmailJs,fetchOpenAi}