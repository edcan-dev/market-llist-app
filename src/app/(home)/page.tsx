import { MarketLists, getUserMarketLists,  } from '../../home';



export const revalidate = 0;
export default async function HomePage() {

  return (
    <div className='p-4'>
      <div className=''>

        <div className='bg-blue-50 rounded h-80 p-2'>

          <h1 className='text-3xl mb-2'>Mis listas de compra</h1>

          <MarketLists/>

        </div>

      </div>

    </div>
  );
}