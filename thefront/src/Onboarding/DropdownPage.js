import NextBack from '../Components/NextBack';
import DropdownQuestion from '../Components/DropdownQuestion';

function CreateProfile({ onNextClick, onBackClick }) {

    const gender_options = [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'other', text: 'Other' },
        { value: 'prefer not to say', text: 'Prefer not to say' },
    ];

    return (
        <div className="h-screen flex flex-col items-center space-y-2">
            
            {/* Dropdown selection */}
            <div className="flex flex-col items-center border form-labels bg-white space-y-4 rounded-3xl w-96 pb-4 pt-4  mt-4">
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <NextBack onBackClick={onBackClick} onNextClick={onNextClick} />
            </div>
           
        </div>
    );
}

export default CreateProfile;