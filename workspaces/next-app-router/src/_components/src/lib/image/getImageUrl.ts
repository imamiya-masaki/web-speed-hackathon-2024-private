type Params = {
  format: 'avif' | 'webp' | 'png' | 'jpg';
  height?: number;
  imageId: string;
  width?: number;
};

// const IMAGE_ORIGIN = `https://webspeed-api.anpan-playground.com`
const IMAGE_ORIGIN = `http://localhost:8000`
// const IMAGE_ORIGIN = `http://localhost:3000`

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
