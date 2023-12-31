import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
}


export function Input({ className, label, placeholder, ...props }: InputProps) {

  if(placeholder){
    label = placeholder;
  }

  return (
    <div className='flex flex-col min-w-[350px] m-2 relative'>
      <input {...props} className={`
      peer
      border border-pink-flamingo-300 focus:border-pink-flamingo-500
      rounded-2xl
      px-4
      py-2
      w-full
      h-[56px]
      outline-0
      bg-white-50
      ${className}`} />
      <label
        htmlFor={props.id}
        className='
          text-pink-flamingo-500
          font-medium
          pl-[17px]
          pointer-events-none
          capitalize
          absolute
          translate-y-[16px]
          scale-100
          origin-top-left
          transition-all
          peer-focus:translate-y-[0px]
          peer-focus:scale-75
        '
      >
        {label}
      </label>
    </div>
  );
}
