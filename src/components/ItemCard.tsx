import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

export interface ItemCardProps {
  file: string;
  name: string;
  description: string;
  price: number;
}


export function ItemCard(props : ItemCardProps) {
  return (
    <Card placeholder='' className='w-60' >
      <CardHeader
        floated={false}
        shadow={false}
        placeholder=''
        color='transparent'
        className='h-20 align-middle justify-center flex text-center items-center'
      >
        <Typography
          placeholder=''
          className='font-bold text-3xl'
        >
          {props.name}
        </Typography>
      </CardHeader>
      <CardBody placeholder='' className='flex-1'>
        <img src={`/catalog/${props.file}`} alt="prop.image" className='h-60'/>
        <Typography placeholder={props.description}>
          <span className='font-medium'>{props.description}</span>
        </Typography>
      </CardBody>
      <CardFooter
        placeholder=''
        className='align-middle justify-center flex text-center items-center'
      >
        <Typography placeholder=''>
          <a href="">Faça um orçamento conosco</a>
        </Typography>
      </CardFooter>
    </Card>
  );
}
