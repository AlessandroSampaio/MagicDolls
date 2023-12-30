export interface ItemCardProps {
  file: string;
  name: string;
  description: string;
  price: number;
}


export function ItemCard(props : ItemCardProps) {
  return (
    <div placeholder='' className='w-60' >
      <div
        placeholder=''
        color='transparent'
        className='h-20 align-middle justify-center flex text-center items-center'
      >
        <p
          placeholder=''
          className='font-bold text-3xl'
        >
          {props.name}
        </p>
      </div>
      <div placeholder='' className='flex-1'>
        <img src={`/catalog/${props.file}`} alt="prop.image" className='h-60'/>
        <p placeholder={props.description}>
          <span className='font-medium'>{props.description}</span>
        </p>
      </div>
      <div
        placeholder=''
        className='align-middle justify-center flex text-center items-center'
      >
        <p placeholder=''>
          <a href="">Faça um orçamento conosco</a>
        </p>
      </div>
    </div>
  );
}
