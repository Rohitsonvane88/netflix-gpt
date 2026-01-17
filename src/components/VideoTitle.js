function VideoTitle({ title, overview }) {
    return (
        <div className="w-screen h-screen aspect-video pt-[20%] px-24 text-white bg-gradient-to-r from-black absolute">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/2">{overview}</p>
            <div className="flex flex-row gap-4">
                <button className="px-8 py-2 bg-slate-200 opacity-70 hover:opacity-100 border-transparent rounded-md text-black"><i className="fa fa-play mr-2"></i> Play</button>
                <button className="px-8 py-2 bg-slate-600 opacity-70 hover:opacity-100 border-transparent rounded-md text-white"><i className="fa fa-info mr-2"></i> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
