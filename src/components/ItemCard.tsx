export interface ItemCardProps {
  file: string;
  name: string;
  description: string;
  price: number;
}


export function ItemCard(props : ItemCardProps) {
  return (
    <div className='w-60 h-[400px]
          border border-white-200 rounded-lg
          gap-4
          shadow-md shadow-pink-flamingo-300
          flex flex-col'
    >
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
      <div placeholder='' className='flex flex-col flex-1 align-middle justify-center items-center'>
        <img src={`/catalog/${props.file}`} alt="prop.image" className='h-[200px] w-[200px] rounded-2xl'/>
        <span className="font-medium w-52 text-center">{props.description}</span>
      </div>
      <div
        placeholder=''
        className='flex-1 align-bottom justify-center flex text-center items-end'
      >
        <p placeholder=''>
          <a href={`/orcamento?type=${props.name}`}>Faça um orçamento conosco</a>
        </p>
      </div>
    </div>
  );
}
