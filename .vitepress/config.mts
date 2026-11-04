import { defineConfig } from 'vitepress'

const releases = 'https://github.com/sstp-pinger/sstp_shield_releases'

export default defineConfig({
  title: 'SSTP Shield',
  description:
    'A fast, cross-platform VPN client for SSTP and SoftEther servers, including free VPN Gate servers. No account, no sign-up, free trial.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ['README.md'],
  sitemap: { hostname: 'https://sstp-pinger.github.io' },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/app_icon.png' }],
    ['meta', { name: 'theme-color', content: '#2f6fed' }],
    ['meta', { name: 'google-site-verification', content: 'iZbCjkFuRR9iXPb-g7Bpf29MBj8Va9Um26fLOK4abmM' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'SSTP Shield' }],
    ['meta', { property: 'og:image', content: 'https://sstp-pinger.github.io/app_icon.png' }],
  ],
  themeConfig: {
    logo: '/app_icon.png',
    nav: [
      { text: 'Download', link: '/download' },
      { text: 'Guides', link: '/docs/guides/getting-started', activeMatch: '/docs/' },
      { text: 'FAQ', link: '/docs/faq' },
      { text: 'Changelog', link: '/changelogs' },
      { text: 'Contact', link: '/contact' },
    ],
    sidebar: {
      '/docs/': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting started', link: '/docs/guides/getting-started' },
            { text: 'Simple mode', link: '/docs/guides/simple-mode' },
            { text: 'Professional view', link: '/docs/guides/professional-view' },
            { text: 'Updates', link: '/docs/guides/updates' },
            { text: 'Command-line tool', link: '/docs/guides/cli' },
          ],
        },
        {
          text: 'Reference',
          items: [
            { text: 'System requirements', link: '/docs/requirements' },
            { text: 'Troubleshooting', link: '/docs/troubleshooting' },
            { text: 'FAQ', link: '/docs/faq' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: releases }],
    search: { provider: 'local' },
    editLink: {
      pattern: 'https://github.com/sstp-pinger/sstp-pinger.github.io/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message:
        '<a href="https://sstp-shield-server.vercel.app/privacy">Privacy Policy</a> · <a href="https://sstp-shield-server.vercel.app/terms">Terms of Service</a> · <a href="/contact">Contact</a>',
      copyright: 'SSTP Shield — a VPN client for SSTP and SoftEther servers.',
    },
  },
})
