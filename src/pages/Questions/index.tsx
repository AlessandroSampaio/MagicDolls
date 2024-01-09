import { useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader } from '../../components/Accordion/Index';


export default function Questions() {

  const [open, setOpen] = useState<number>(0);

  function handleOpen(value: number) {
    setOpen(open === value ? 0 : value);
  }

  return (

    <div className="mx-8 space-y-8 mt-8">
      <Accordion
        onclick={() => handleOpen(1)}
      >
        <AccordionHeader show={open === 1}>
          Como faço pra encomendar uma peça?
        </AccordionHeader>
        <AccordionBody show={open === 1}>
          <p>
            Para iniciar, visite nossa página e selecione a opção “Catálogo”. Você será direcionado para o nosso catálogo de estilos, onde poderá escolher o seu preferido. Depois, clique em “Solicitar Orçamento”, onde será redirecionado a um de nossos atendentes no whatsapp. Em até 48 horas, você receberá o orçamento final, detalhes sobre as formas de pagamento, informações de envio e a disponibilidade em nossa agenda.
          </p>
          <p className='font-semibold'>
            Pronto! Você deu o primeiro passo para adquirir sua peça favorita.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion
        onclick={() => handleOpen(2)}
      >
        <AccordionHeader show={open === 2}>
          Existe limites de peça por cliente?
        </AccordionHeader>
        <AccordionBody show={open === 2}>
          Não impomos um limite na quantidade de peças que você pode solicitar. No entanto, vale ressaltar que o tempo necessário para a confecção das peças pode variar dependendo do número de itens solicitados e da disponibilidade em nossa agenda.
        </AccordionBody>
      </Accordion>

      <Accordion
        onclick={() => handleOpen(3)}
      >
        <AccordionHeader show={open === 3}>
          Orçamento tem validade?
        </AccordionHeader>
        <AccordionBody show={open === 3}>
          <p>
            Com certeza! Após receber o seu orçamento, é crucial que você o confirme e realize o pagamento para assegurar sua posição em nossa agenda. O valor do orçamento pode ser garantido por um período de 10 dias corridos. Se esse prazo for excedido, será necessário solicitar um novo orçamento.
          </p>
        </AccordionBody>
      </Accordion>

      <Accordion
        onclick={() => handleOpen(4)}
      >
        <AccordionHeader show={open === 4}>
          O que acontece se eu não confirmar o orçamento?
        </AccordionHeader>
        <AccordionBody show={open === 4}>
          Se você não confirmar o orçamento dentro do prazo de 10 dias corridos, o valor do orçamento não será mais garantido. Isso significa que o valor pode mudar e você precisará solicitar um novo orçamento. Portanto, é importante confirmar e efetuar o pagamento do orçamento o mais rápido possível para garantir seu lugar na agenda.
        </AccordionBody>
      </Accordion>

      <Accordion onclick={() => handleOpen(5)}>
        <AccordionHeader show={open === 5}>
          O que acontece se eu não efetuar o restante do pagamento?
        </AccordionHeader>
        <AccordionBody show={open === 5}>
        A sua peça não será enviada até que o restante do valor seja pago. Caso ultrapasse os 30 dias úteis, a sua peça poderá ser vendida. A parte inicial do pagamento, que é destinada à agendamento da produção, não é reembolsável, pois corresponde ao tempo reservado na agenda e aos serviços oferecidos.
        </AccordionBody>
      </Accordion>

      <Accordion
        onclick={() => handleOpen(6)}
      >
        <AccordionHeader show={open === 6}>
          O que acontece se meu pedido for extraviado no envio?
        </AccordionHeader>
        <AccordionBody show={open === 6}>
          <ol className='list-decimal ml-8'>
            <li className='my-4'>Reembolso total: O cliente receberá um reembolso integral do valor pago pela peça.</li>
            <li>Nova peça sem custos adicionais: O cliente tem a opção de solicitar a confecção de uma nova peça sem nenhum custo adicional. No entanto, será necessário aguardar novamente o prazo de confecção. O envio da nova peça será gratuito.</li>
          </ol>
        </AccordionBody>
      </Accordion>

      <Accordion onclick={() => handleOpen(7)}>
        <AccordionHeader show={open === 7}>
          Direito à devolução
        </AccordionHeader>
        <AccordionBody show={open === 7}>
          <ul className='ml-8'>
            <li><b>Peça chegou quebrada:</b> Caso a sua peça chegue danificada, você tem duas opções:</li>
            <li>
              <ol className='ml-8 list-disc'>
                <li>Solicitar o reparo da peça.</li>
                <li>Solicitar a devolução de parte do valor pago.</li>
              </ol>
            </li>
            <li><b>Cancelamento da compra:</b></li>
            <li>
              <ol className='ml-8 list-disc'>
                <li>Se você desejar cancelar a sua compra, tem um prazo de 10 dias para entrar em contato conosco.</li>
                <li>Caso a peça já esteja em andamento, não será possível fazer o estorno do valor.</li>
              </ol>
            </li>
            <li><b>Troca ou acréscimo de detalhes:</b></li>
            <li>
              <ol className='ml-8 list-disc'>
                <li>Se você efetuou o pagamento de uma peça e deseja trocar por outra ou acrescentar detalhes, entre em contato com a loja.</li>
                <li>Iremos lhe fornecer um novo orçamento de acordo com o seu novo pedido.</li>
              </ol>
            </li>
          </ul>
        </AccordionBody>
      </Accordion>
      <div>
        <p className='text-xl'>
        Para mais esclarecimentos ou parcerias, entrar em contato pelo nosso <a href="mailto:magicdolls.art@gmail.com" className='text-mirage-500' >e-mail</a>.
        </p>
      </div>
    </div>
  );
}
