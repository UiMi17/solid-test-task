import ArrowLeftIcon from '../../icons/ArrowLeftIcon.tsx';

interface IBackBtnProps {
  text?: string;
}

const BackBtn = ({ text }: IBackBtnProps) => {
  const handleBackBtnClick = () => {
    //TODO: Possible useHistory routing logic;
    console.log('Back button clicked.');
  };

  return (
    <button
      onClick={handleBackBtnClick}
      className="flex justify-center items-center gap-2 w-6 h-6 desktop:w-fit desktop:h-fit"
    >
      <ArrowLeftIcon />
      {text && (
        <p className="font-semibold text-lg leading-[calc(32/18)] text-primary desktop:leading-[calc(40/18)]">{text}</p>
      )}
    </button>
  );
};

export default BackBtn;
