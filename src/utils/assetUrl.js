export function assetUrl(path) {
  if (!path) return ''
  if (/^(https?:|data:|blob:|#)/i.test(path)) return path

  const clean = String(path)
    .replace(/^\.\//, '')
    .replace(/^\//, '')

  const base = import.meta.env.BASE_URL || './'
  return new URL(clean, new URL(base, window.location.href)).href
}
