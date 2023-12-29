import { ItemCard } from '../../components/ItemCard';
import { ImageList } from './catalog_list';


export function Catalogo() {
  return (
    <div className='pt-12'>
      <div className="flex flex-wrap gap-4">
        {
          ImageList.map((image) => (
            <ItemCard
              key={image.file}
              file={image.file}
              description={image.description}
              name={image.name}
              price={image.price}
            />
          ))
        }
      </div>
    </div>
  );
}
