
import DropdownQuestion from './DropdownQuestion';

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
            <div className="flex flex-col items-center border form-labels border-gray-300 bg-white space-y-4 rounded-3xl w-96 pb-4 pt-4  mt-4">
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />

                <div className="flex space-x-2">
                    <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onBackClick}>
                        Back
                    </button>
                    <button className="bg-med-blue text-white rounded-lg w-40 h-10" onClick={onNextClick}>
                        Next
                </button>
                </div>
            </div>
           
        </div>
    );
}

export default CreateProfile;