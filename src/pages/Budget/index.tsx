import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

export function Budget() {

  return (
    <div className="m-10">
      <form action="" className='flex flex-wrap w-full justify-center items-center'>
        <Input id="name" placeholder='nome' type="text" parentStyle='w-full'/>
        <div className='flex w-full mobile:flex-col' >
          <Input id="email" placeholder='email' type="email" parentStyle='w-[70%] mobile:w-full' />
          <Input id="telefone" placeholder='telefone' type="text" parentStyle='w-[30%] mobile:w-full'/>
        </div>
        <Input id="endereco" placeholder='Endereço' type="text" className='min-w-[300px]'  parentStyle='w-full'/>
        <div className='flex mobile:flex-col w-full'>
          <Input id="numero" placeholder='numero' type="number" className='min-w-[50px]' parentStyle='w-[20%]'/>
          <Input id="bairro" placeholder='Bairro' type="text" className='min-w-[200px]' parentStyle='w-1/2' />
          <Input id="cep" placeholder='cep' type="text" className='min-w-100px' parentStyle='w-[30%]'/>
        </div>

        {/* Replace with custom Select/options */}
        <div className='w-full flex'>
          <Select name="estilo" id="estilo" title='estilo'
            placeholder='Estilo de peça'
            className='min-w-[200px] w-full border'
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
        <textarea name="observacoes" id="observacoes" cols={30} rows={5} title='observacoes'
          className='border w-full'
        />
      </form>
    </div>
  );
}
