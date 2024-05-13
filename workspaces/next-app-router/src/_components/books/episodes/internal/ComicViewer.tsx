import "./comicviewer.css"

import ComicViewerCore from '../../../src/features/viewer/components/ComicViewerCore';
import { addUnitIfNeeded } from '../../../src/lib/css/addUnitIfNeeded';

const IMAGE_WIDTH = 1075 as const;
const IMAGE_HEIGHT = 1518 as const;

const calc = 1075 / 1518;

const MIN_VIEWER_HEIGHT = 500 as const;
const MAX_VIEWER_HEIGHT = 650 as const;

const MIN_PAGE_WIDTH = Math.floor((MIN_VIEWER_HEIGHT / IMAGE_HEIGHT) * IMAGE_WIDTH);
// const MIN_PAGE_WIDTH = _.floor((MIN_VIEWER_HEIGHT / IMAGE_HEIGHT) * IMAGE_WIDTH);

function lodashClamp(number: number, lower: number, upper: number) {
  // console.log("loadshClamp", {number, lower, upper})
  return Math.max(lower, Math.min(number, upper));
}

const Wrapper: React.FC<{children: React.ReactNode;}> = ({ children }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: '100%',
    maxHeight: addUnitIfNeeded(MAX_VIEWER_HEIGHT),
    minHeight: addUnitIfNeeded(MIN_VIEWER_HEIGHT),
    overflow: 'hidden',
  }} className="viewer">
    {children}
  </div>
);

type Props = {
  episodeId: string;
};

export const ComicViewer: React.FC<Props> = ({ episodeId }) => {
  // 画面のリサイズに合わせて再描画する
  // const rerender = useUpdate();
  // useInterval(rerender, 0);

  // // コンテナの幅
  // const cqw = (el?.getBoundingClientRect().width ?? 0);

  // // 1画面に表示できるページ数（1 or 2）
  // const pageCountParView = cqw <= 2 * MIN_PAGE_WIDTH ? 1 : 2;
  // // el.getBoundingClientRectが708px以下で1
  // // 1ページの幅の候補
  // const candidatePageWidth = cqw / pageCountParView;
  // // 1ページの高さの候補
  // const candidatePageHeight = (candidatePageWidth / IMAGE_WIDTH) * IMAGE_HEIGHT;
  // // 
  // // ビュアーの高さ
  // const viewerHeight = lodashClamp(candidatePageHeight, MIN_VIEWER_HEIGHT, MAX_VIEWER_HEIGHT);
  // // css calmp がある 

  // useMemo(() => {
  //   console.log("oit", {pageCountParView, candidatePageWidth, candidatePageHeight, viewerHeight}, el?.getBoundingClientRect().width, MIN_PAGE_WIDTH, (2 * MIN_PAGE_WIDTH))
  // }, [pageCountParView, candidatePageWidth, candidatePageHeight, viewerHeight])

  return (
    <div style={{ position: 'relative' }}>
      <Wrapper>
        {/*/ //@ts-expect-error */}
        <ComicViewerCore episodeId={episodeId} maxHeight={MAX_VIEWER_HEIGHT}/>
      </Wrapper>
    </div>
  );
};
