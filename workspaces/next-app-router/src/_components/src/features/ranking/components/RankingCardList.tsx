import { useRankingList } from "../hooks/useRankingList";
import RankingCard from "./RankingCard";


const RankingListComponents = async() => {
    const rankingList = await useRankingList({ query: {} });
    return (<>
    {rankingList.map((ranking) => (
      <RankingCard key={ranking.id} bookId={ranking.book.id} bookData={ranking.book}/>
    ))}
    </>) 
  }

  export default RankingListComponents;