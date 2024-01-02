import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export function TextArea({className, ...props} : TextAreaProps){

  return (
    <textarea
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
