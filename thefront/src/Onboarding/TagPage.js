import Chips from '../Components/Chips';
import NextBack from '../Components/NextBack';


function TagPage({ onBackClick, onNextClick}) {

    return (
    <div className="flex flex-col items-center">
        <div className="flex flex-col items-center border form-labels bg-white space-y-2 rounded-3xl w-96 pb-2 pt-2 mb-4 mt-4">
            <div className="flex flex-col items-center space-y-2">
                <Chips question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['fuckfacediddlywaggon 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                
            </div>
            <NextBack onBackClick={onBackClick} onNextClick={onNextClick}/>
        </div>
    </div>
    );
}

export default TagPage;