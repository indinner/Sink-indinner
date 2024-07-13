export default defineAppConfig({
  title: 'LAKI短链接',
  description: '一个能够让您的链接变的十分优雅的工具.',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
