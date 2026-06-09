export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { discord } = req.body;

    await fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `📩 Test Application\n\nDiscord: ${discord}`
        })
    });

    res.status(200).json({ success: true });
}
