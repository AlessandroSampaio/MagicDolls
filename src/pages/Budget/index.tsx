import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { TextArea } from '../../components/TextArea';
import whatsapp from '../../assets/images/svg/whatsapp.svg';

export function Budget() {

  return (
    <div className="m-10">
      <div>
        <div>
          <p className='font-bold text-lg'>Quais as formas de pagamento?</p>
          <p>O pagamento pode ser realizado de duas maneiras:
            1. Se optar pelo pagamento integral via Pix, você receberá um desconto de 7% no valor da peça.
            2. Optando pelo pagamento normal pode ser dividido em duas parcelas: 50% do valor total é pago no momento do agendamento e os 50% restantes, juntamente com o frete, são pagos após a finalização da peça.
          <br />
            Aceitamos <b>Boleto bancario / Pix / Cartão (Mercado Pago)</b></p>
        </div>
        <div className='my-6'>
          <p className='font-bold text-lg'>Quais as formas de envio?</p>
          <p>Após a finalização da peça, procedemos com o envio. Utilizamos os Correios para realizar entregas em todo o Brasil.</p>
        </div>
      </div>
      <form action="" className='flex flex-wrap w-full justify-center items-center mt-6'>
        <Input id="name" placeholder='nome' type="text" parentStyle='w-full'/>
        <div className='flex w-full mobile:flex-col' >
          <Input id="email" placeholder='email' type="email" parentStyle='w-[70%] mobile:w-full' />
          <Input id="telefone" placeholder='telefone' type="text" parentStyle='w-[30%] mobile:w-full'/>
        </div>
        <Input id="endereco" placeholder='Endereço' type="text" className='min-w-[300px]'  parentStyle='w-full'/>
        <div className='flex mobile:flex-col w-full'>
          <Input id="numero" placeholder='numero' type="number" className='min-w-[50px]' parentStyle='w-[20%] mobile:w-full'/>
          <Input id="bairro" placeholder='Bairro' type="text" className='min-w-[200px]' parentStyle='w-1/2 mobile:w-full' />
          <Input id="cep" placeholder='cep' type="text" className='min-w-100px' parentStyle='w-[30%] mobile:w-full'/>
        </div>

        {/* Replace with custom Select/options */}
        <div className='w-full flex'>
          <Select name="estilo" id="estilo" title='estilo'
            placeholder='Estilo de peça'
            className='min-w-[200px] w-full'
            parentStyle='w-[70%]'
          >
            <option value="1">Chibi</option>
            <option value="2">Mini chibi</option>
            <option value="3">Figure pequena</option>
            <option value="4">Figures</option>
            <option value="5">Topo de Bolo</option>
          </Select>

          <Input id="tamanho" placeholder='tamanho' type="text" parentStyle='w-[30%]' />
        </div>
        <div className='flex mobile:flex-col w-full'>
          <Input id="base" placeholder='base' type="text" parentStyle='w-1/2'/>
          <Input id="acessorios" placeholder='acessorios' type="text" parentStyle='w-1/2'/>
        </div>

        {/* Replace with custom TextArea */}
        <TextArea
          name="observacoes"
          id="observacoes"
          cols={30}
          rows={5}
          title='observacoes'
          placeholder='observacoes'
          className='border w-full'
        />
        <button
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
        >
          Enviar Orçamento
          <img src={whatsapp} alt="whatsapp" className='size-8' />
        </button>
      </form>
    </div>
  );
}
