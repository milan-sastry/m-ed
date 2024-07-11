function ErrorDisplay({callback}) {
    return (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
            <div className="flex flex-col space-y-4 bg-yellow-300 p-4 w-96 h-64 rounded-lg shadow-lg items-center justify-center">
                <h1 className="text-black text-3xl font-extrabold">something went wrong</h1>
                <button className="bg-med-red text-white rounded-lg pl-2 pr-3 h-8 flex items-center justify-center space-x-2" onClick={callback}>
                    <span>Close</span>
                </button>
                <button className="bg-med-red text-white rounded-lg pl-2 pr-3 h-8 flex items-center justify-center space-x-2" 
                onClick={() => window.location.reload()}>
                    <span>Reload</span>
                </button>

            </div>
        </div>
    );

}

export default ErrorDisplay;