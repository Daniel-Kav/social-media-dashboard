const fetch = require('node-fetch');

// Your Twitter API credentials
const BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAAL2ttwEAAAAAGXd0FkWX%2Fk9rJ71ZrcDy3BksjvQ%3DEAEJcf821Fxzl0HvUOComDMNIvPUUkiklezuoh6QfYegOEI71i";

async function getTwitterUserInfo() {
    const url = "https://api.twitter.com/2/users/me";
    const headers = {
        "Authorization": `Bearer ${BEARER_TOKEN}`
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        const username = data.data.username;
        const followers_count = data.data.public_metrics.followers_count;

        return { username, followers_count };
    } catch (error) {
        console.error("Error fetching Twitter user info:", error);
    }
}

async function main() {
    const userInfo = await getTwitterUserInfo();
    if (userInfo) {
        console.log(`Username: ${userInfo.username}`);
        console.log(`Followers count: ${userInfo.followers_count}`);
    }
}

main();
