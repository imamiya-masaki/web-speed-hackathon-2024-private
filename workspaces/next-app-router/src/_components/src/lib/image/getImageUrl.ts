import { API_URL } from "@/_components/apiURL";

type Params = {
  format: 'avif' | 'webp' | 'png' | 'jpg';
  height?: number;
  imageId: string;
  width?: number;
};

const IMAGE_ORIGIN = API_URL
export function getImageUrl({ format, height, imageId, width }: Params): string {
  const url = new URL(`${IMAGE_ORIGIN}/images/${imageId}`);

  url.searchParams.set('format', format);
  if (width != null) {
    url.searchParams.set('width', `${width}`);
  }
  if (height != null) {
    url.searchParams.set('height', `${height}`);
  }

  return url.href;
}
