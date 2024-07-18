import NextBack from '../Components/Onboarding/NextBack';
import DropdownQuestion from '../Components/Onboarding/DropdownQuestion';

function CreateProfile({ onNextClick, onBackClick }) {

    const gender_options = [
        { value: 'male', text: 'Male' },
        { value: 'female', text: 'Female' },
        { value: 'other', text: 'Other' },
        { value: 'prefer not to say', text: 'Prefer not to say' },
    ];

    return (
        <div className="onboarding-container">
            
            {/* Dropdown selection */}
            <header className="flex justify-center">
                <h1 className="text-3xl sm:text-5xl font-bold text-white mb-2">Dropdown Page</h1>
            </header>
            <div className="onboarding-form">
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
                <DropdownQuestion question="Gender" options={gender_options} />
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