import {ReactComponent as Close} from "../../assets/close.svg";

function FilterPage({ show, close }) {
    const transitionStyle = {
        transition: 'opacity 0.5s ease, visibility 0.5s ease',
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden',
    };

    return (
        <div style={transitionStyle} className=" fixed top-0 right-0 w-full h-full drop-shadow-2xl border-orange-400 items-center justify-center z-50 sm:pl-44 px-12">
            {/* Parent element with relative positioning */}
            <div className="relative w-full h-full flex items-center justify-center">
                {/* Child element centered within the parent */}
                <div className="absolute top-0 left-0 right-0 bottom-0 m-auto w-full h-96 bg-white rounded-xl border-med-blue flex flex-col p-4 items-center space-y-4">
                    <h1>Filter Page</h1>
                    <button className="bg-white p-2 w-8 h-8 rounded-full absolute -top-7 -right-2" onClick={close}>
                        <Close className="w-8 h-8 fill-red-500 absolute top-0 right-0"/>
                    </button>
                    <button className="bg-green-500 p-2 rounded-2xl">Apply</button>
                </div>
            </div>
        </div>
    );
}

export default FilterPage;