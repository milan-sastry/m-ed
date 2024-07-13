const NextBack = ({onBackClick,onNextClick}) => {
    return (
    <div className="flex space-x-2 w-full pb-2 justify-center rounded-b-3xl">
        <button className="bg-med-blue text-white rounded-lg w-full h-10" onClick={onBackClick}>
            Back
        </button>
        <button className="bg-med-blue text-white rounded-lg w-full h-10" onClick={onNextClick}>
            Next
    </button>
</div>
);
}

export default NextBack;