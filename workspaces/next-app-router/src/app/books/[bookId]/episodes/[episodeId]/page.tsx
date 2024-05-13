import { ComicViewer } from '../../../../../_components/books/episodes/internal/ComicViewer';

export default async function Page ({params}: {params: {episodeId: string}}){
  const {  episodeId } = params

  return (
    <>
    <ComicViewer episodeId={episodeId} />
    </>
  );
};

// export { EpisodeDetailPageWithSuspense as EpisodeDetailPage };
