interface ISeparatorWithTextProps {
    text: string;
}

const SeparatorWithText = ({text}: ISeparatorWithTextProps) => {
    return <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300"/>
        <span className="mx-4 text-sm leading-[calc(24/14)] text-secondary">{text}</span>
        <div className="flex-grow border-t border-gray-300"/>
    </div>
}

export default SeparatorWithText;