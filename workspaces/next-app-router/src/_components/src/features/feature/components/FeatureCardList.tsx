import { useFeatureList } from "../hooks/useFeatureList";
import FeatureCard from "./FeatureCard";

const FeatureListComponents = async() => {
    const featureList = await useFeatureList({ query: {} });
    return (<>
    {featureList.map((feature) => (
      //@ts-expect-error
      <FeatureCard key={feature.id} bookId={feature.book.id} bookData={feature.book}/>
    ))}
  </>)}

export default FeatureListComponents