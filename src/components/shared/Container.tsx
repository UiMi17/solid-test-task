import { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center flex-col h-full p-4 pb-0 desktop:px-16">{children}</div>;
};

export default Container;
