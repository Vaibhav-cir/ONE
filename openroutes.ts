export function createCompletion = () => {
    const question = 'How would you build the tallest building ever?';
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer <OPENROUTER_API_KEY>` ,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'openai/gpt-5', 
            messages: [{ role:'user', content:question }], 
            stream: true ,
        }),
    });

    const reader = response.body?.get reader();
    if (!reader) { 
        throw new Error ('Response body is not readable');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    new 
}