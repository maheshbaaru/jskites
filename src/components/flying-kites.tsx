/** Decorative only: lightweight, deterministic motion with no browser state. */
export function FlyingKites() {
  return (
    <div className="flying-kites" aria-hidden="true">
      {["near", "middle", "far"].map((position) => (
        <div key={position} className={`flying-kite flying-kite--${position}`}>
          <svg viewBox="0 0 160 320" fill="none" focusable="false">
            <g className="kite-sail">
              <path d="M80 10 139 73 80 157 21 73Z" fill="currentColor" />
              <path d="M80 10 80 157 21 73Z" className="kite-panel" />
              <path d="M80 10V157M21 73Q80 54 139 73" className="kite-frame" />
              <path d="M80 10 139 73 80 157 21 73Z" className="kite-outline" />
            </g>
            <g className="kite-tail">
              <path d="M80 157C110 185 44 196 73 220S107 248 79 272 69 291 87 311" className="kite-string" />
              <path d="m77 196-15-8 3 19 12-11 13 8-2-18Z" fill="currentColor" />
              <path d="m91 245-14-7 2 17 12-10 12 8-2-17Z" fill="currentColor" />
              <path d="m74 289-12-6 2 15 10-9 11 7-2-15Z" fill="currentColor" />
            </g>
          </svg>
        </div>
      ))}
    </div>
  );
}