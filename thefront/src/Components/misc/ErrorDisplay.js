function ErrorDisplay({callback, error}) {
    return (
        <div className="absolute top-4 left-0 right-0 bottom-0 flex items-start justify-center z-50 px-4">
            <div className="flex-col space-y-4 bg-yellow-300 p-4 w-fit h-fit rounded-lg drop-shadow-2xl shadow-2xl items-center justify-center">
                <h1 className="text-black text-xl font-extrabold">error: </h1>
                <p className="text-black text-lg">{error}</p>
                <div className="flex space-x-4 justify-center text-white ">
                    <button className= "bg-med-blue w-fit rounded-lg p-2" onClick={callback}>
                        Dismiss
                    </button>
                    <button className="bg-med-blue w-fit rounded-lg p-2"
                    onClick={() => window.location.reload()}>
                        Reload
                    </button>
                </div>

            </div>
        </div>
    );

}

export default ErrorDisplay;