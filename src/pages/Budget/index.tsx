import whatsapp from '../../assets/images/svg/whatsapp.svg';
import { clearBlankSpace, openInNewTab } from '../../util/handleLink';
import pix from '../../assets/images/svg/pix.svg';
import mercadoLivre from '../../assets/images/svg/mercado_livre.svg';
import boleto from '../../assets/images/svg/boleto.svg';
import correios from '../../assets/images/svg/correios.svg';
export function Budget() {

  function handleLink(){

    const link = `https://wa.me/558598273544/?text=${clearBlankSpace('Oi, gostaria de solicitar um orçamento!')}`;

    openInNewTab(link);
  }


  return (
    <div className="m-10">
      <div>
        <div>
          <p className='font-bold text-lg'>Quais as formas de pagamento?</p>
          <p className='inline-block' >O pagamento pode ser realizado de duas maneiras:
            <ul className='list-decimal ml-10'>
              <li>Se optar pelo pagamento integral via Pix, você receberá um desconto de 10% no valor da peça.</li>
              <li>Optando pelo pagamento normal pode ser dividido em duas parcelas: 50% do valor total é pago no momento do agendamento e os 50% restantes, juntamente com o frete, são pagos após a finalização da peça.</li>
            </ul>
          </p>
          <p className='align-middle flex gap-8 items-center text-xl'>
          Aceitamos :
            <img src={boleto} alt="Boleto bancario" className='size-16 inline' />
            <img src={pix} alt="pix" className='size-16 inline' />
            <img src={mercadoLivre} alt="Cartão de Crédito" className='size-16 inline' />
          </p>
        </div>
        <div className='my-6'>
          <p className='font-bold text-lg'>Quais as formas de envio?</p>
          <p>Após a finalização da peça, procedemos com o envio. Utilizamos os Correios para realizar entregas em todo o Brasil.</p>
          <div className='flex gap-8 mt-4'>
            <img className="header__logo-image" src="https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=130&amp;height=55&amp;name=logo%20superfrete-2.png" loading="eager" alt="" height="55" width="130" srcSet="https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=65&amp;height=28&amp;name=logo%20superfrete-2.png 65w, https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=130&amp;height=55&amp;name=logo%20superfrete-2.png 130w, https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=195&amp;height=83&amp;name=logo%20superfrete-2.png 195w, https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=260&amp;height=110&amp;name=logo%20superfrete-2.png 260w, https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=325&amp;height=138&amp;name=logo%20superfrete-2.png 325w, https://superfrete.com/hs-fs/hubfs/logo%20superfrete-2.png?width=390&amp;height=165&amp;name=logo%20superfrete-2.png 390w" sizes="(max-width: 130px) 100vw, 130px"
            />
            <img src={correios} alt="Correios" />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <button
          type='button'
          className='
            mobile:w-full
            bg-teal-400
            p-4
            rounded-xl
            text-white-50
            flex
            gap-4
            justify-center
            items-center
            mt-6
          '
          onClick={() => handleLink()}
        >
          Fale conosco
          <img src={whatsapp} alt="whatsapp" className='size-8' />
        </button>
      </div>

    </div>
  );
}
