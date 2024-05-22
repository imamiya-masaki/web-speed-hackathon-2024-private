import { useEpisode } from '@/_components/src/features/episode/hooks/useEpisode';
import { ComicViewer } from '../../../../../_components/books/episodes/internal/ComicViewer';

export default async function Page ({params}: {params: {episodeId: string}}){
  const {  episodeId } = params
  const ep = await useEpisode({ params: { episodeId } })
  return (
    <>
    <ComicViewer episodeId={episodeId} ep={ep}/>
    </>
  );
};

// export { EpisodeDetailPageWithSuspense as EpisodeDetailPage };
