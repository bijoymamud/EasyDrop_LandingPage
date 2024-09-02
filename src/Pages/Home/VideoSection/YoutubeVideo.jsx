
function YouTubeVideo() {
    return (
        <section>

            <div className="pb-20">
            <h1 className="text-4xl font-semibold text-center">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#522F8F] to-[#D31A65] font-extrabold text-5xl">Your Guide to <br />
                 Dropshipping Success</span>        
        </h1>

                <div className="flex items-center justify-around px-20  pt-20 pb-5">

                    <div>
                         <iframe width="600" height="315" src="https://www.youtube.com/embed/r--zYuKe5CE?si=iohmVrFvZrX40VhX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>

                    <div>
                        <iframe width="600" height="315" src="https://www.youtube.com/embed/l1LCLAevPn0?si=iFpzMQ_kSLh8gVE9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                    </div>
                </div>
                <p className="underline text-[#522F8F] font-semibold text-center cursor-pointer">Check our more videos</p>
            </div>
            
        </section>
    )
}

export default YouTubeVideo
