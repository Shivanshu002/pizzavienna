export default function QrCode() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-red-600 text-white flex flex-col items-center justify-center px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white"> Pizza Vienna</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">🎉 Welcome!</h2>
            <p className="text-lg text-center max-w-xl mb-8">
                Thanks for scanning our QR code! We’d love to hear about your experience at <span className="font-bold">Pizza Vienna</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href="https://www.tripadvisor.com/UserReviewEdit-g60996-d21047906-Pizza_Vienna-Vienna_Fairfax_County_Virginia.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition"
                >
                    📝 Trips Advisor
                </a>
                <a
                    href="https://www.google.com/search?sca_esv=62677d62e4a19e1b&rlz=1C1UEAD_enIN1129IN1129&sxsrf=AE3TifPSeVzOQjFo4iBe6KVFd2TD1cM0QQ:1752090295249&q=pizza+vienna&spell=1&sa=X&ved=2ahUKEwjysab9xLCOAxWBjWMGHUoFDhoQBSgAegQIFhAB&biw=1366&bih=633&lqi=CgxwaXp6YSB2aWVubmFIgpbFwrqwgIAIWhQQABgAGAEiDHBpenphIHZpZW5uYZIBEHBpenphX3Jlc3RhdXJhbnSqAUoKCC9tLzA2NjN2EAEqCSIFcGl6emEoADIfEAEiG0ZX0L2Pkb8KJPpFctW_xdaVrnF0UnwCE6I5YTIQEAIiDHBpenphIHZpZW5uYboBBwoFcGl6emE#lkt=LocalPoiReviews&rlimm=7191129143500575681&lrd=0x89b64b9e225e58b1:0x63cc05db144f93c1,3,,,,"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-800 font-bold py-3 px-6 rounded-lg shadow hover:bg-blue-100 transition"
                >
                    📝 Google Reviews
                </a>

                <a
                    href="https://pizzavienna.com/order"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow hover:bg-red-100 transition"
                >
                    📜 View Menu
                </a>
            </div>
        </div>
    );
}
