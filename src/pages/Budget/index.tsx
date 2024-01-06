import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { TextArea } from '../../components/TextArea';
import whatsapp from '../../assets/images/svg/whatsapp.svg';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BudgetFormData, budgetForm } from './Budget';
import { openInNewTab } from '../../util/openLink';

export function Budget() {

  function handleLink(data: BudgetFormData){

    const link = `https://wa.me/5585984751461?text=Oi meu nome e _${data.name}_`;

    openInNewTab(link);
  }

  const { register, handleSubmit, formState: { errors } } = useForm<BudgetFormData>({ resolver: zodResolver(budgetForm) });

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
      <form
        className='flex flex-wrap w-full justify-center items-center mt-6'
      >
        <Input placeholder='Nome' parentStyle='w-full' {...register('name')} error={errors.name?.message} />
        <div className='flex w-full mobile:flex-col' >
          <Input placeholder='email' parentStyle='w-[70%] mobile:w-full' {...register('email')} error={errors.email?.message} />
          <Input placeholder='telefone' type="text" parentStyle='w-[30%] mobile:w-full' {...register('telefone')} error={errors.telefone?.message} />
        </div>
        <Input placeholder='Endereço'  className='min-w-[300px]' parentStyle='w-full' {...register('endereco')} error={errors.endereco?.message} />
        <div className='flex mobile:flex-col w-full'>
          <Input placeholder='numero'
            className='min-w-[50px]'
            parentStyle='w-[20%] mobile:w-full'
            {...register('numero', { valueAsNumber: true })}
            error={errors.numero?.message}
          />
          <Input
            placeholder='Bairro'
            className='min-w-[200px]'
            parentStyle='w-1/2 mobile:w-full'
            {...register('bairro')}
            error={errors.bairro?.message}
          />
          <Input placeholder='cep'  className='min-w-100px' parentStyle='w-[30%] mobile:w-full'{...register('cep')} error={errors.cep?.message} />
        </div>


        <div className='w-full flex'>
          <Select
            id='estilo'
            title='estilo'
            placeholder='Estilo de peça'
            className='min-w-[200px] w-full'
            parentStyle='w-[70%]'
            {...register('estilo', { valueAsNumber: true })}
          >
            <option value="1">Chibi</option>
            <option value="2">Mini chibi</option>
            <option value="3">Figure pequena</option>
            <option value="4">Figures</option>
            <option value="5">Topo de Bolo</option>
          </Select>

          <Input placeholder='tamanho' parentStyle='w-[30%]' {...register('tamanho', {valueAsNumber: true})} error={errors.tamanho?.message} />
        </div>
        <div className='flex mobile:flex-col w-full'>
          <Input placeholder='base' parentStyle='w-1/2' {...register('base')} error={errors.base?.message} />
          <Input placeholder='acessorios' parentStyle='w-1/2' {...register('acessorios')} error={errors.acessorios?.message} />
        </div>

        {/* Replace with custom TextArea */}
        <TextArea
          id="observacoes"
          cols={30}
          rows={5}
          title='observacoes'
          placeholder='observacoes'
          className='border w-full'
          {...register('observacoes')}
        />
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
          onClick={handleSubmit((data: BudgetFormData) => {
            handleLink(data);
          },
          (error) => {
            console.log(error);
          })}
        >
          Enviar Orçamento
          <img src={whatsapp} alt="whatsapp" className='size-8' />
        </button>
      </form>
    </div>
  );
}
