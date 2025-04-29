interface ISeparatorWithTextProps {
    text?: string;
}

const Separator = ({text}: ISeparatorWithTextProps) => {
    return text ? <div className="flex items-center">
        <div className="flex-grow border border-border-primary"/>
        <span className="mx-4 text-sm leading-[calc(24/14)] text-secondary">{text}</span>
        <div className="flex-grow border border-border-primary"/>
    </div> : <div className="flex-grow border border-border-tertiary"/>
}

export default Separator;