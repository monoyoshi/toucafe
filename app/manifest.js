export default function manifest() {
    return {
        name: "tou café",
        short_name: "toucafe",
        description: "a silly recipe database with a café front",
        start_url: "/",
        icons: [
            {
                src: "/icon.svg",
                sizes: "any",
                type: "image/svg+xml",
            },
        ],
    };
};