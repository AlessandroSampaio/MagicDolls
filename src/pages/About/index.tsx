import {
  Card,
  CardBody,
  Typography,
} from '@material-tailwind/react';

export function About() {
  return (
    <Card className="shadow-lg shadow-primary-light m-8 p-9" placeholder=''>
      <CardBody placeholder=''>
        <Typography variant="h5" className="mb-2" placeholder=''>
          Sobre nós
        </Typography>
        <Typography placeholder='' className='mb-8 text-pretty font-medium'>
          Olá, meu nome é Tiago Vasconcelos. Sou de Fortaleza e sou o artesão responsável pela <a className='underline underline-offset-4' href='https://www.instagram.com/magicdolls.arts/'>Magicdolls.art</a>. Tenho trabalhado com Biscuit desde setembro de 2021.
        </Typography>
        <Typography placeholder='' className='mb-8 text-pretty font-medium'>
          A Magicdolls é composta por um grupo de 3 pessoas. Eu, Tiago Vasconcelos, cuido da parte artesanal. Allan Sampaio é responsável pela parte financeira e administrativa, e Diego Vasconcelos cuida do design e da divulgação.

          Atualmente, o biscuit é minha segunda profissão, mas tenho a intenção de torná-lo minha atividade principal um dia. Meu objetivo é espalhar um pouco da minha arte por todo o Brasil.
        </Typography>
        <Typography placeholder='' className='mb-8 text-pretty font-medium'>
        Minha jornada começou assistindo a vídeos de figures, desenhos e modelagens. Sempre tive o desejo de aprender a modelar, já possuía conhecimento em desenho e minha profissão principal é cabeleireiro. Com o passar do tempo, eu e os meninos decidimos investir no biscuit e na modelagem, sempre acreditando no potencial que eu já demonstrava nos desenhos. No início, a modelagem foi um desafio e até cômica, mas com o tempo, ela foi melhorando. Recebemos encomendas para aniversários e todos adoraram. A cada dia, busco aperfeiçoar ainda mais minha modelagem. Atualmente, tenho a loja <a className='cursor-pointer ' href='https://www.instagram.com/magicdolls.arts/'>Magicdolls.art</a> e fico muito feliz com cada peça que crio, assim como meus clientes que buscam pela minha arte.
        </Typography>
      </CardBody>
    </Card>
  );
}
