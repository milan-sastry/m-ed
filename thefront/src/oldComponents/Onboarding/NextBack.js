const NextBack = ({onBackClick,onNextClick}) => {
    return (
    <div className="flex space-x-2 w-full justify-center next-back h-fit">
        <button onClick={onBackClick}>
            Back
        </button>
        <button onClick={onNextClick}>
            Next
    </button>
</div>
);
}

export default NextBack;