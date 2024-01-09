export interface ItemCardProps {
  file: string;
  name: string;
  description: string;
  price?: string;
}


export function ItemCard(props : ItemCardProps) {
  return (
    <div className='w-60 h-[450px]
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
        <img src={`/MagicDolls/catalog/${props.file}`} alt="prop.image" className='h-[200px] w-[200px] rounded-2xl'/>
        <span className="font-medium w-52 text-center h-10">{props.description}</span>
      </div>
      <div className="flex flex-col justify-around items-center h-[40px] p-4">
        {
          props.price && <p className="font-semibold text-3xl text-wrap text-center">A partir de R$ {props.price}</p>
        }
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
