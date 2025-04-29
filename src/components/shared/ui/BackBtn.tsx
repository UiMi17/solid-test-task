import ArrowLeftIcon from "../../icons/ArrowLeftIcon.tsx";

const BackBtn = () => {
    const handleBackBtnClick = () => {
        //TODO: Possible useHistory routing logic;
        console.log("Back button clicked.");
    }

    return <button onClick={handleBackBtnClick} className='flex justify-center items-center w-10 h-10'>
        <ArrowLeftIcon/>
    </button>
}

export default BackBtn;