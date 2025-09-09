// Utility for robust mobile device detection that resists "Desktop site" UA overrides
// We combine several signals:
// - UA checks for Android/iPhone/iPad/iPod
// - userAgentData.mobile (when available)
// - iPadOS 13+ (MacIntel + maxTouchPoints > 1)
// - Touch capability + coarse pointer + small screen
// This aims to treat both phones and tablets as mobile devices.

export function isLikelyMobileDevice() {
  try {
    const n = typeof navigator !== 'undefined' ? navigator : null;
    const w = typeof window !== 'undefined' ? window : null;
    if (!n || !w) return false;

    const ua = `${n.userAgent || ''} ${n.vendor || ''}`;

    // Client Hints (modern Chromium)
    const chMobile = n.userAgentData && typeof n.userAgentData.mobile === 'boolean'
      ? n.userAgentData.mobile
      : false;

    // Classic UA checks
    const isAndroid = /Android/i.test(ua);
    const isIPhone = /iPhone/i.test(ua);
    const isIPod = /iPod/i.test(ua);
    const isIPadLegacy = /iPad/i.test(ua); // older iPad UAs

    // iPadOS 13+ reports as Mac but has touch points
    const isIPadOS13Plus = n.platform === 'MacIntel' && (n.maxTouchPoints || 0) > 1;

    // Touch capability
    const touchPoints = (n.maxTouchPoints || n.msMaxTouchPoints || 0);
    const hasTouch = 'ontouchstart' in w || touchPoints > 0;

    // Pointer/coarse detection
    let coarsePointer = false;
    try {
      coarsePointer = typeof w.matchMedia === 'function' && w.matchMedia('(pointer: coarse)').matches;
    } catch (e) {
      coarsePointer = false;
    }

    // Screen size heuristic (CSS pixels). Threshold chosen to include phones and small tablets.
    const sw = Math.min(w.screen?.width || 0, w.screen?.height || 0) || 0;
    const smallScreen = sw > 0 && sw <= 820;

    // Additional keywords often present even in desktop mode
    const mobileKeyword = /Mobi|Mobile|Phone/i.test(ua);

    // Primary signals
    let mobile = chMobile || isAndroid || isIPhone || isIPod || isIPadLegacy || isIPadOS13Plus || mobileKeyword;

    // Fallback heuristic when UA is masked
    if (!mobile) {
      mobile = (hasTouch && coarsePointer && smallScreen);
    }

    return !!mobile;
  } catch (e) {
    return false;
  }
}
