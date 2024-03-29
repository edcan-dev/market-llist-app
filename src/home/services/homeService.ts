

const API_URL = 'http://localhost:8080/';


export const getUserMarketLists = async(): Promise<MarketList[]> => {

  let data: MarketList[] = [];

  await fetch(`${API_URL}api/v1/market-list`, { cache: "no-cache" })
    .then( async(res) => data = await res.json() as MarketList[])
    .catch(() => data = [])
  return data;

};

export const deleteMarketListById = async(id: number): Promise<void> => {
  const response = await fetch(`${API_URL}api/v1/market-list/${ id }`, {
    method: 'DELETE',
    cache: 'no-cache'
  });
  console.log(response)
}




function sleep(seconds: number): Promise<boolean> {

  return new Promise((res) => {
    setTimeout(() => {
      res(true)
    }, seconds);
  })
}