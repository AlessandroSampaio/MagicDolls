import { ReactElement, } from 'react';
import arrowDown from '../../assets/images/svg/arrow_down.svg';

interface AccordionProps {
  onclick: () => void,
  children?: [ReactElement<typeof AccordionHeader>, ReactElement<typeof AccordionBody> ],
}

interface AccordionHeaderProps {
  show: boolean,
  children: string,
}

interface AccordionBodyProps {
  show: boolean,
  children: string | ReactElement | Array<ReactElement>,
}

export function Accordion({onclick, children} : AccordionProps) {
  return (
    <div
      className="
          w-full p-5
          group
          flex flex-col gap-2
          border border-pink-flamingo-300  rounded-xl
          shadow-lg shadow-pink-flamingo-300
          cursor-pointer"
      tabIndex={1}
      onClick={onclick}
    >
      {children}
    </div>
  );
}

export function AccordionHeader({show, children} : AccordionHeaderProps) {
  return (
    <div className="flex cursor-pointer items-center justify-between">
      <span className="text-xl mobile:text-lg text-mirage-800"> {children} </span>
      <img
        alt="t"
        src={arrowDown}
        className={`size-6 transition-all duration-500 ${show ? '-rotate-180' : ''}`}
      />
    </div>
  );
}

export function AccordionBody({show, children} : AccordionBodyProps){
  return (
    <div
      className={`${show ? '' : 'hidden' } h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000`}
    >
      {children}
    </div>
  );
}
