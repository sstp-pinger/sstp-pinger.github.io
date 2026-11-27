---
title: Add a server
description: Open a shared server in SSTP Shield. Free forever, no account.
head:
  - - meta
    - name: robots
      content: noindex
---

<script setup>
import { ref, onMounted } from 'vue'

// The server link rides after `#`, so it never reaches this web server; the
// page only reads it in your browser and hands it to the app.
const link = ref('')
const server = ref(null)
const copied = ref(false)

function parse(raw) {
  const at = raw.toLowerCase().indexOf('sstp://')
  if (at < 0) return null
  let text = raw.slice(at)
  if (!text.includes('#')) text = text.replace('%23', '#')
  try {
    const u = new URL(text.replace(/^sstp:/i, 'https:'))
    if (!u.hostname) return null
    return {
      link: 'sstp:' + text.slice(5),
      name: decodeURIComponent(u.hash.slice(1)) || u.hostname,
      address: u.hostname + ':' + (u.port || '443'),
      user: u.username ? decodeURIComponent(u.username) : 'vpn',
    }
  } catch {
    return null
  }
}

onMounted(() => {
  let hash = window.location.hash.slice(1)
  try {
    hash = decodeURI(hash)
  } catch {}
  const s = parse(hash)
  if (s) {
    server.value = s
    link.value = s.link
  }
})

async function copy() {
  await navigator.clipboard.writeText(link.value)
  copied.value = true
}
</script>

# Add a server

<div v-if="server">

Someone shared a server with you:

| | |
|---|---|
| Name | {{ server.name }} |
| Address | `{{ server.address }}` |
| User | `{{ server.user }}` |

<p><a class="add-button" :href="link">Open in SSTP Shield</a></p>

The app asks before adding it, and never connects on its own. Only add servers
you trust: whoever runs a server can see traffic that isn't encrypted.

**Nothing happens?** [Install SSTP Shield](/download) first, then come back
and tap the button again. Or copy the link and use **Paste link** under
*Use your own server* (or Settings → Custom node):

<p><button class="add-copy" @click="copy">{{ copied ? 'Copied' : 'Copy link' }}</button></p>

</div>

<div v-else>

This page opens a shared server in SSTP Shield, but the link that brought you
here has no server in it. Ask whoever sent it for the full link — it looks like
`https://sstp-pinger.github.io/add#sstp://…`.

</div>

Using your own servers is free forever and needs no account.
[How it works](/docs/guides/own-servers).

<style>
.add-button, .add-copy {
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none !important;
}
.add-button {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white) !important;
}
.add-copy {
  border: 1px solid var(--vp-c-divider);
}
</style>
