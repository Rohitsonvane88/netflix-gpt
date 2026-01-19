function VideoTitle({ title, overview }) {
    return (
        <div className="w-screen h-screen aspect-video md:pt-[20%] md:px-24 text-white bg-gradient-to-r from-black absolute bottom-0 flex flex-col justify-center items-center md:block">
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            <p className="hidden md:block py-6 text-lg w-1/2">{overview}</p>
            <div className="flex flex-row gap-4">
                <button className="px-8 py-2 mt-4 md:mt-0 bg-slate-200 opacity-70 hover:opacity-100 border-transparent rounded-md text-black"><i className="fa fa-play mr-2"></i> Play</button>
                <button className="hidden md:block px-8 py-2 bg-slate-600 opacity-70 hover:opacity-100 border-transparent rounded-md text-white"><i className="fa fa-info mr-2"></i> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
