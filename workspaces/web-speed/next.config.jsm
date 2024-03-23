// next.config.ts
import fs from 'fs';
import path from 'path';

// tsup設定から転用した環境変数とパス
const PROJECT_ROOT = process.cwd();
const SEED_IMAGE_DIR = path.resolve(PROJECT_ROOT, './public/images');
const IMAGE_PATH_LIST = fs.readdirSync(SEED_IMAGE_DIR).map(file => `/images/${file}`);

const nextConfig = {
  // Reactの厳格モードを有効に
  reactStrictMode: true,
  env: {
    API_URL: '', // APIのURL環境変数（必要に応じて設定）
    NODE_ENV: process.env.NODE_ENV || 'development',
    PATH_LIST: IMAGE_PATH_LIST.join(',') || '',
  },
  webpack: (config, { isServer }) => {
    // サーバーサイドとクライアントサイドでの設定の分岐
    if (!isServer) {
      // ブラウザ向けの設定
      config.resolve.fallback = { 
        fs: false, // fsモジュールのポリフィルを無効に（ブラウザでは不要）
        path: false, // pathモジュールのポリフィルも同様
      };
    }

    // esbuildを使用する具体的な設定はNext.jsでは直接サポートされていませんが、
    // 必要に応じてwebpackの設定をカスタマイズしてパフォーマンスを向上させることが可能です。

    return config;
  },
  // その他のNext.js設定をここに追加（例：画像最適化の設定など）
};

export default nextConfig;
