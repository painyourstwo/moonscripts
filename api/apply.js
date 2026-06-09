export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const {
        discord,
        experience,
        languages,
        projects,
        portfolio,
        reason,
        activity,
        fit,
        notes
    } = req.body;

    const webhook = process.env.WEBHOOK_URL;

    const embed = {
        title: "📩 New Developer Application",
        color: 0x6a00ff,
        fields: [
            {
                name: "👤 Discord Username",
                value: discord || "N/A"
            },
            {
                name: "💻 Experience",
                value: experience || "N/A"
            },
            {
                name: "🛠 Languages",
                value: languages || "N/A"
            },
            {
                name: "📂 Projects",
                value: projects || "N/A"
            },
            {
                name: "🔗 Portfolio",
                value: portfolio || "N/A"
            },
            {
                name: "⭐ Why Join MoonScripts?",
                value: reason || "N/A"
            },
            {
                name: "⏰ Weekly Activity",
                value: activity || "N/A"
            },
            {
                name: "🎯 Why You're a Good Fit",
                value: fit || "N/A"
            },
            {
                name: "📝 Additional Notes",
                value: notes || "None"
            }
        ]
    };

    await fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [embed]
        })
    });

    return res.status(200).json({
        success: true
    });
}
