import Chips from '../oldComponents/misc/Chips';
import NextBack from '../oldComponents/Onboarding/NextBack';


function TagPage({ onBackClick, onNextClick}) {
    
    return (
        <div className="onboarding-container">
            <header className="flex justify-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Tag Page</h1>
            </header>
            <div className="onboarding-form">
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <Chips question="Select tags" items={['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10']} />
                <NextBack onBackClick={onBackClick} onNextClick={onNextClick}/>

            </div>
           
        </div>
    );
}

export default TagPage;