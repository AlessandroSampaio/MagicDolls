interface HeaderLinkProp {
  href: string,
  label: string,
  mobile?: boolean,
}

export function HeaderLink({ href, label, mobile = false }: HeaderLinkProp) {
  return (
    mobile
      ?
      <a
        href={href}
        className='py-2 pl-2
              text-pink-flamingo hover:text-white-50
              hover:bg-pink-flamingo-300'
      >
        {label}
      </a>
      :
      <a
        href={href}
        className="py-4 px-2
              text-pink-flamingo hover:text-pink-flamingo-700
              border-b-4 border-pink-flamingo-dark hover:border-pink-flamingo-700
              font-semibold"
      >
        {label}
      </a>

  );
}
