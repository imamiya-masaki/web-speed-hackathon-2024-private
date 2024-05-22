import { getDayOfWeekStr } from "@/_components/src/lib/date/getDayOfWeekStr";
import { BookCard } from "./BookCard";
import { useRelease } from "../../release/hooks/useRelease";

const ReleaseComponents = async() => {
    const todayStr = getDayOfWeekStr(new Date());
    const release = await useRelease({ params: { dayOfWeek: todayStr } });
    return (<>
    {release.books.map((book) => (
                  <BookCard key={book.id} bookId={book.id} bookData={book}/>
                ))}
    </>) 
  }

export default ReleaseComponents;