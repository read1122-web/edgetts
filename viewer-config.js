// 全域設定：集中管理 TTS 與 GAS 代理伺服器網址。
// 若未提供，會回退到預設值，以避免舊版程式出錯。
(function initPdfViewerConfig() {
  const defaults = {
    TTS_BASE_URL: 'https://readtts-tts.hf.space',
    GAS_PROXY_URL:
      'https://script.google.com/macros/s/AKfycbyD5dVne4RQ0gbQm_wbT-9No18RsADs2I78tZ8NOEwF9-75QkeYRYdWD7diV2r1z94i/exec',
  };

  if (typeof window === 'undefined') return;

  const existing = window.PDF_VIEWER_CONFIG || {};
  window.PDF_VIEWER_CONFIG = {
    ...defaults,
    ...existing,
  };
})();

