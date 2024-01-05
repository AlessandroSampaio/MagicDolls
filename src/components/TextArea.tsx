import { TextareaHTMLAttributes, forwardRef } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps >(
  function TextArea({className, ...props} : TextAreaProps, ref){

    return (
      <textarea
        ref={ref}
        {...props}
        className={`
        border border-pink-flamingo-300 focus:border-pink-flamingo-500
        rounded-xl
        m-2 px-4 py-2
        ${className}
      `}
      >
      </textarea>
    );
  }
);
