export default defineAppConfig({
  title: '团子のSink',
  email: 'personal@lixiaotuan.cn',
  github: 'https://github.com/TuanZiGit/sink',
  description: '无服务器的高效短链接服务',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
