import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}


export function Input({ className, ...props }: InputProps) {

  return (
    <div className='flex flex-col m-2 relative'>
      <input {...props} className={`
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
      ${className}`} />
      <label
        htmlFor={props.id}
        className='
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
        '
      >
        {props.placeholder}
      </label>
    </div>
  );
}

// peer-placeholder-shown:px-4
//           peer-placeholder-shown:text-sm
//           peer-focus:px-4
//           peer-focus:text-sm
