function YouTubeVideo() {
    return (
        <section>
            <div className="pb-10 md:pb-20">
                <h1 className="text-3xl md:text-4xl font-semibold text-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-4xl md:text-5xl">
                        Your Guide to <br className="hidden md:block" />
                        Dropshipping Success
                    </span>
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-around px-5 md:px-20 pt-10 md:pt-20 pb-5 space-y-5 md:space-y-0">
                    <div className="w-full md:w-auto">
                        <iframe
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/r--zYuKe5CE?si=iohmVrFvZrX40VhX"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="aspect-video"
                        ></iframe>
                    </div>

                    <div className="w-full md:w-auto">
                        <iframe
                            width="100%"
                            height="auto"
                            src="https://www.youtube.com/embed/l1LCLAevPn0?si=iFpzMQ_kSLh8gVE9"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="aspect-video"
                        ></iframe>
                    </div>
                </div>

                <p className="underline text-[#522F8F] font-semibold text-center cursor-pointer">
                    Check out more videos
                </p>
            </div>
        </section>
    );
}

export default YouTubeVideo;
