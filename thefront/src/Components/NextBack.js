const NextBack = ({onBackClick,onNextClick}) => {
    return (<div className="flex space-x-2 w-96 pb-2 justify-center rounded-b-3xl  bg-white">
        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onBackClick}>
            Back
        </button>
        <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onNextClick}>
            Next
    </button>
</div>);
}

export default NextBack;