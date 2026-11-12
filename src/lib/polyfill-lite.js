// Pengganti `next/dist/build/polyfills/polyfill-module`: browser target situs ini
// (Chrome/Edge/Firefox 111+, Safari 16.4+) sudah punya semua polyfill bawaan Next kecuali URL.canParse.
if (typeof URL !== "undefined" && !("canParse" in URL)) {
  URL.canParse = function (url, base) {
    try {
      return !!new URL(url, base);
    } catch (e) {
      return false;
    }
  };
}
