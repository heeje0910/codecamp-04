import { useRouter } from "next/router"
import MarketListUI from "../../market/list/MarketList.presenter"


const MarketList = () => {
 const router = useRouter();

 function onClickWrite(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element) router.push(event.target.id);
  }

 return<
   MarketListUI
        onClickWrite={onClickWrite}
     />   
}

export default MarketList