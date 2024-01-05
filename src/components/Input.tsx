import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  parentStyle?: string | undefined;
  error?: string | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps >(
  function input({className, error, parentStyle, ...props} : InputProps, ref){

    if(!parentStyle){
      parentStyle='';
    }

    return (
      <div className={`flex flex-col m-2 relative ${parentStyle}`}>
        <input ref={ref} {...props} className={`
        peer
        border border-pink-flamingo-300 focus:border-pink-flamingo-500
        rounded-2xl
        px-4
        py-2
        h-[56px]
        outline-0
        bg-white-50
        placeholder:capitalize
        placeholder-transparent
        ${className}
        ${error && 'border-rose focus:border-rose-800'}
        `} />
        {
          error &&
          <span
            className='text-rose pl-4 text-sm'
          >
            {error}
          </span>
        }
        <label
          htmlFor={props.id}
          className={`
            absolute
            px-4
            text-sm
            transition-all
            capitalize
            text-iron-400
            peer-placeholder-shown:top-[17px]
            peer-placeholder-shown:text-base
            peer-placeholder-shown:text-iron-900
            peer-focus:text-sm
            peer-focus:top-0
            peer-focus:text-iron-400
            ${error && 'text-rose'}
          `}
        >
          {props.placeholder}
        </label>
      </div>
    );
  }
);
