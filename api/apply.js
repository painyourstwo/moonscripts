export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const webhook = process.env.WEBHOOK_URL;

    await fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: "🚀 Test application received!"
        })
    });

    res.status(200).json({ success: true });
}
