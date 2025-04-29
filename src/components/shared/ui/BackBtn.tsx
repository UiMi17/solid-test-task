import ArrowLeftIcon from "../../icons/ArrowLeftIcon.tsx";

const BackBtn = () => {
    const handleBackBtnClick = () => {
        //TODO: Possible useHistory routing logic;
        console.log("Back button clicked.");
    }

    return <button onClick={handleBackBtnClick} className='flex justify-center items-center w-6 h-6'>
        <ArrowLeftIcon/>
    </button>
}

export default BackBtn;