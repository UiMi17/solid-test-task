import {PropsWithChildren} from "react";

const Container = ({children}: PropsWithChildren) => {
    return <div className='flex items-center flex-col max-w-[420px] h-full p-4 pb-0 desktop:p-6'>{children}</div>
}

export default Container;