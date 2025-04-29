interface ISeparatorWithTextProps {
    text: string;
}

const SeparatorWithText = ({text}: ISeparatorWithTextProps) => {
    return <div className="flex items-center">
        <div className="flex-grow border border-border-primary"/>
        <span className="mx-4 text-sm leading-[calc(24/14)] text-secondary">{text}</span>
        <div className="flex-grow border border-border-primary"/>
    </div>
}

export default SeparatorWithText;