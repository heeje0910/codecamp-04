import { useRouter } from "next/router";
import MarketListUI from "../../market/list/MarketList.presenter";
import { MouseEvent, useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS } from "./MarketList.queries";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";

export default function MarketList() {
  const router = useRouter();

  //const [startPage] = useState(1);
  const { data, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);



  const onClickMove = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
  };

  function onLoadMore() {
    if (!data) return;

 


    fetchMore({
      variables: {page: Math.ceil(data?.fetchUseditems.length / 5) + 1},
      updateQuery: (prev, {fetchMoreResult}) => {
        if (!fetchMoreResult?.fetchUseditems)
        return {fetchUseditems: [...prev.fetchUseditems]} 
        return {
          fetchUseditems: [...prev.fetchUseditems, ...fetchMoreResult?.fetchUseditems],
        }
      }
    })
  }

  function onClickMoveToMarketDetail(event: MouseEvent<HTMLDivElement>){
    event.target instanceof Element &&
      router.push(`/market/$(event.currentarget.id)`);
  }  
  return (
    <MarketListUI
      onClickMove={onClickMove}
      data={data}
      loadMore={onLoadMore}
      //onClickMoveToMarketDetail={onClickMoveToMarketDetail}
      // fetchMore={fetchMore}
    />
  );
  }
// export default MarketList;
//IQueryFetchUseditemsArgs
