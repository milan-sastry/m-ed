function Field({name,placeholder,value,isValid,handleChange}){
    return (
        <div className="flex flex-col space-y-2">
                    <h1>{placeholder}</h1>
                    <input
                        className={`${isValid ? 'bg-green-100' : 'border-gray-200'} border w-full pr-10`}
                        type='text'
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleChange}
                    />
                </div>
    );
}

export default Field;