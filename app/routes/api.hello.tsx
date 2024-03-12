
export function loader() {
    const payload = {
        message: "Hello World!"
    };
    return new Response(
        JSON.stringify(payload),
        {
            headers: {
                'X-hello': 'World'
            }
        }
    )
}