export type RadioOptionProps = {
    value: string;
    label: string;
    onClick: () => void;
};

export function RadioOption({ label, value, onClick }: RadioOptionProps) {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <label className="block w-full px-4 py-2 text-left text-sm text-gray-700 cursor-pointer hover:bg-indigo-50 hover:bg-opacity-50" 
            htmlFor={value} 
            onClick={onClick}>
            <input className="hidden" id={value} name="sort" type="radio"
                value={value}/>
            {label}
        </label>
    );
}