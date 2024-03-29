import { getUserMarketLists } from "..";
import { MarketListsItem } from "./MarketListsItem";

interface Props {
}

export const revalidate = 0;
export const MarketLists = async() => {

  const lists = await getUserMarketLists();
  
  return (

    <ul>

      {
        lists.map(list => <MarketListsItem key={list.id} list={list}/>
        )
      }

    </ul>

  );
};