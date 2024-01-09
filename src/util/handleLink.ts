export function openInNewTab(url: string) : void{
  window.open(url, '_blank', 'noopener, noreferrer');
}

export function clearBlankSpace(param: string) : string{
  return param.split(' ').join('%20');
}
