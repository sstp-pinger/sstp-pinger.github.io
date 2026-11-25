import { defineConfig } from 'vitepress'

const releases = 'https://github.com/sstp-pinger/sstp_shield_releases'
const site = 'https://sstp-pinger.github.io'

// One sentence per page for search results and link previews. Pages with a
// `description:` in their front matter use that instead.
const descriptions: Record<string, string> = {
  'index.md':
    'SSTP Shield is a free-to-try VPN client for SSTP and SoftEther servers, including free VPN Gate servers. No account or email. Android, Windows and Linux.',
  'download.md':
    'Download SSTP Shield for Android (APK), Windows (installer or portable) and Linux (.deb, Arch package, tarball). Always the latest version.',
  'changelogs.md':
    'What changed in every SSTP Shield version: new features, fixes and improvements for Android, Windows and Linux.',
  'contact.md':
    'Contact SSTP Shield: email and Telegram for questions, problems, payments and feedback.',
  'docs/faq.md':
    'Answers about SSTP Shield: is it free, the free plan, paying with Stars or USDT, activating a code, promo codes, and what is logged.',
  'docs/requirements.md':
    'SSTP Shield system requirements for Android 7+, Windows 10/11 and Linux (glibc 2.39+), plus the permissions the app needs.',
  'docs/troubleshooting.md':
    'Fix SSTP Shield problems: it will not connect, no internet after connecting, updates fail. How to send a log.',
  'docs/guides/getting-started.md':
    'Install SSTP Shield on Android, Windows or Linux and connect in a minute — no sign-up, the free trial starts by itself.',
  'docs/guides/simple-mode.md':
    'Simple mode in SSTP Shield: one button that picks a fast server, checks pages really load, and switches servers by itself.',
  'docs/guides/professional-view.md':
    'The SSTP Shield professional view: server list and ping, bookmarks, auto-switch, reconnection, SoftEther, proxy sharing, custom DNS and themes.',
  'docs/guides/free-plan.md':
    'The SSTP Shield free plan: keep a daily set of servers for free after the trial by joining our Telegram channel or with a friend\'s invite code.',
  'docs/guides/updates.md':
    'How SSTP Shield updates itself on Android, Windows and Linux, including the jsDelivr mirror for networks that block GitHub.',
  'docs/guides/cli.md':
    'The sstp-shield-cli command-line tool for Windows and Linux: connect, measure servers, manage access and settings without the window.',
}

// VitePress's built-in socialLinks icon set has no "telegram" entry, so it's
// supplied as inline SVG instead (the standard Telegram glyph).
const telegramIcon = {
  svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.94 8.14-1.89 8.908c-.142.638-.512.796-1.038.496l-2.87-2.117-1.384 1.332c-.153.153-.28.28-.573.28l.204-2.898 5.27-4.76c.23-.204-.05-.318-.356-.114l-6.51 4.1-2.804-.878c-.61-.19-.622-.61.127-.903l10.95-4.22c.508-.19.953.114.788.904z"/></svg>',
}

export default defineConfig({
  title: 'SSTP Shield',
  titleTemplate: ':title | SSTP Shield',
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
    ['meta', { property: 'og:site_name', content: 'SSTP Shield' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['meta', { property: 'og:image', content: `${site}/app_icon.png` }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:image', content: `${site}/app_icon.png` }],
    // What the site is, for search engines: a free application, per platform.
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'SSTP Shield',
        applicationCategory: 'SecurityApplication',
        operatingSystem: 'Android, Windows, Linux',
        description:
          'A VPN client for SSTP and SoftEther servers, including free VPN Gate servers. No account or sign-up.',
        url: `${site}/`,
        downloadUrl: `${site}/download`,
        image: `${site}/app_icon.png`,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      }),
    ],
  ],
  // Per page: a canonical URL, and the title/description link previews and
  // search results show.
  transformPageData(pageData) {
    const path = pageData.relativePath
    if (path === '404.md') return
    const url =
      path === 'index.md'
        ? `${site}/`
        : `${site}/${path.replace(/\.md$/, '')}`
    const description =
      pageData.frontmatter.description ?? descriptions[path] ?? undefined
    if (description && !pageData.frontmatter.description) {
      pageData.description = description
    }
    const title = pageData.frontmatter.title ?? pageData.title
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: path === 'index.md' ? 'SSTP Shield' : `${title} | SSTP Shield` }],
      ['meta', { property: 'og:description', content: description ?? 'A VPN client for SSTP and SoftEther servers.' }],
    )
  },
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
            { text: 'Free plan', link: '/docs/guides/free-plan' },
            { text: 'Invite friends', link: '/docs/guides/invite-friends' },
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
    socialLinks: [
      { icon: 'github', link: releases },
      {
        icon: telegramIcon,
        link: 'https://t.me/sstp_shield_softether',
        ariaLabel: 'Telegram channel',
      },
      {
        icon: telegramIcon,
        link: 'https://t.me/sstp_shield',
        ariaLabel: 'Telegram',
      },
    ],
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
