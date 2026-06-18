/* RaverCloud Residency — Tweaks island.
   Renders only the Tweaks panel; applies values to <html> via side effects. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "direction": "midnight",
  "accent": "",
  "glow": 100,
  "motion": true
}/*EDITMODE-END*/;

const DIRECTIONS = [
  { value: "midnight",  label: "Midnight" },
  { value: "warehouse", label: "Warehouse" },
  { value: "afterglow", label: "Afterglow" }
];

const ACCENTS = ["#8b6cff", "#34e6e0", "#ff5c8a", "#ffb24d"];

function hexToRgb(hex) {
  let h = hex.replace('#', '');
  if (h.length === 3) h = h.replace(/./g, c => c + c);
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
}

function applyTweaks(t) {
  const root = document.documentElement;
  root.setAttribute('data-theme', t.direction);

  // accent override (empty string = follow direction)
  if (t.accent) {
    root.style.setProperty('--accent', t.accent);
    root.style.setProperty('--accent-rgb', hexToRgb(t.accent));
  } else {
    root.style.removeProperty('--accent');
    root.style.removeProperty('--accent-rgb');
  }

  root.style.setProperty('--glow', (t.glow / 100).toFixed(2));
  root.classList.toggle('no-motion', !t.motion);
  root.classList.toggle('force-motion', !!t.motion);
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyTweaks(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Direction" />
      <TweakRadio label="Aesthetic"
        value={t.direction} options={DIRECTIONS}
        onChange={(v) => setTweak('direction', v)} />
      <div style={{ font: '10px/1.5 var(--font-mono, monospace)', color: 'rgba(41,38,27,.5)', padding: '0 1px' }}>
        Midnight · cinematic violet&nbsp;&nbsp;|&nbsp;&nbsp;Warehouse · raw &amp; cold&nbsp;&nbsp;|&nbsp;&nbsp;Afterglow · warm bloom
      </div>

      <TweakSection label="Accent" />
      <TweakColor label="Override" value={t.accent || ''}
        options={ACCENTS} onChange={(v) => setTweak('accent', v)} />
      <TweakButton label="Match direction" secondary onClick={() => setTweak('accent', '')} />

      <TweakSection label="Atmosphere" />
      <TweakSlider label="Glow" value={t.glow} min={0} max={160} step={5} unit="%"
        onChange={(v) => setTweak('glow', v)} />
      <TweakToggle label="Cinematic motion" value={t.motion}
        onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}

// Apply defaults immediately (before React paints) so first render matches.
applyTweaks(TWEAK_DEFAULTS);

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<App />);
