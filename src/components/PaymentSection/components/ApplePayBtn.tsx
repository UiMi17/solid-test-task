import AppleLogoIcon from "../../icons/AppleLogoIcon.tsx";

const ApplePayBtn = () => {
    const handleApplePayBtnClick = () => {
        //TODO: Some payment logic with apple pay;
        console.log("Apple pay button clicked.");
    }

    return <button onClick={handleApplePayBtnClick} className='flex justify-center items-center w-full h-12 rounded-[3px] bg-black'>
        <AppleLogoIcon/>
    </button>
}

export default ApplePayBtn;