import { Input } from '../../components/Input';

export function Budget() {

  return (
    <div className="m-10">
      <form action="" className='flex flex-wrap '>
        <Input id="name" placeholder='nome' type="text" className='min-w-[200px] w-[400px]'/>
        <Input id="email" placeholder='email' type="email" className='w-[400px] min-w-[200px]'/>
        <Input id="telefone" placeholder='telefone' type="text" className='w-[250px] min-w-[150px]'/>
        <Input id="endereco" placeholder='Endereço' type="text" className='w-[500px] min-w-[300px]' />
        <Input id="numero" placeholder='numero' type="number" className='w-[100px] min-w-[50px]'/>
        <Input id="bairro" placeholder='Bairro' type="text" />
        <Input id="cep" placeholder='cep' type="text" />

        {/* Replace with custom Select/options */}
        <select name="estilo" id="estilo" title='estilo'
          className='min-w-[200px] w-[350px] border'
        >
          <option value="1">Chibi</option>
          <option value="2">Mini chibi</option>
          <option value="3">Figure pequena</option>
          <option value="4">Figures</option>
          <option value="5">Topo de Bolo</option>
        </select>

        <Input id="tamanho" placeholder='tamanho' type="text" />
        <Input id="base" placeholder='base' type="text" />
        <Input id="acessorios" placeholder='acessorios' type="text" />

        {/* Replace with custom TextArea */}
        <textarea name="observacoes" id="observacoes" cols={30} rows={5} title='observacoes'
          className='border w-full'
        />
      </form>
    </div>
  );
}
