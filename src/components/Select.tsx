import { SelectHTMLAttributes, forwardRef } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
  parentStyle?: string,
  error?: string | undefined,

}

export const Select = forwardRef<HTMLSelectElement, SelectProps >(

  function Select({className, parentStyle, error, ...props}: SelectProps, ref) {
    if(props.id == null){
      return null;
    }

    if(!parentStyle){
      parentStyle='';
    }

    return (
      <div className={`relative flex flex-col m-2 ${parentStyle}`}>
        <select {...props}
          ref={ref}
          className={`
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
        `}
        >
          {props.children}
        </select>
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
          className='
          absolute
          w-full
          px-4
          text-sm
          capitalize
          left-1
          text-iron-400
          peer-placeholder-shown:top-[17px]
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-iron-900
          peer-focus:text-sm
          peer-focus:top-0
          peer-focus:text-iron-400
        '
        >
          {props.placeholder}
        </label>
      </div>
    );

  }
);
