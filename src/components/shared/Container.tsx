import {PropsWithChildren} from "react";

const Container = ({children}: PropsWithChildren) => {
    return <div className='flex items-center flex-col h-full p-4 desktop:p-6'>{children}</div>
}

export default Container;