/* ============================================================
   Raksha Bandhan — interactions
   ============================================================
   ▸ EDIT THE CONFIG BLOCK BELOW. Nothing else needs touching.
   ============================================================ */

const CONFIG = {
  // Her name — used in the hero, the letter, the footer and the page title.
  sisterFull: "Aditi",
};

/* ------------------------------------------------------------
   PHOTOS
   Drop image files into the photos/ folder, then list them here.
   `src` is the filename, `cap` is the caption under the frame.
   Any file that fails to load shows a decorated placeholder instead.
   ------------------------------------------------------------ */
const PHOTOS = [
  { src: "photos/01.jpg", cap: "Yeh wali favourite hai",          emoji: "🌟" },
  { src: "photos/02.jpg", cap: "Camera ka favourite subject",     emoji: "💅" },
  { src: "photos/03.jpg", cap: "Smile pe copyright hona chahiye", emoji: "🎬" },
  { src: "photos/04.jpg", cap: "Bilkul unbothered",               emoji: "😌" },
  { src: "photos/05.jpg", cap: "Yeh outfit yaad hai?",            emoji: "✨" },
  { src: "photos/06.jpg", cap: "Ek hi pose, chalees photos",      emoji: "📸" },
  { src: "photos/07.jpg", cap: "Sabse pyaari nautanki",           emoji: "😇" },
  { src: "photos/08.jpg", cap: "Isko delete nahi karne wala",     emoji: "🤫" },
  { src: "photos/09.jpg", cap: "Tyohaar wali chamak",             emoji: "🪔" },
  { src: "photos/10.jpg", cap: "Frame karwane layak",             emoji: "🖼️" },
  { src: "photos/11.jpg", cap: "Har photo mein perfect",          emoji: "🌸" },
  { src: "photos/12.jpg", cap: "Aur yeh final take tha",          emoji: "🔁" },
  { src: "photos/13.jpg", cap: "Theek hai, acchi lag rahi ho",    emoji: "🙃" },
  { src: "photos/14.jpg", cap: "Nakhre level: expert",            emoji: "👑" },
  { src: "photos/15.jpg", cap: "Purani photo, best photo",        emoji: "📜" },
  { src: "photos/16.jpg", cap: "Isme sach mein khush lag rahi ho", emoji: "💫" },
  { src: "photos/17.jpg", cap: "Favourite logo ki list mein top", emoji: "💛" },
  { src: "photos/18.jpg", cap: "Yeh expression legendary hai",    emoji: "🗣️" },
  { src: "photos/19.jpg", cap: "Poora scene tum le gayi",         emoji: "🌺" },
  { src: "photos/20.jpg", cap: "Aur yeh sabse pyaari",            emoji: "🪢" },
];

/* ------------------------------------------------------------ QUIZ */
const QUESTIONS = [
  {
    q: "Sach batao — hum dono ka connection kaise shuru hua?",
    opts: [
      { t: "Pata nahi. Kis janam ka hisaab hai.",            s: 10, r: "Exactly meri line hai yeh. Copyright issue banta hai." },
      { t: "Main friendly thi, tum peeche pad gaye.",         s: 9, r: "Bold rewriting of history. Screenshots mere paas hain." },
      { t: "Ek random baat se, aur phir kabhi ruki hi nahi.",  s: 10, r: "Yahi hua tha. Aur ab band karne ka option nahi hai." },
      { t: "Galti se. Ab bhugat rahe hain dono.",             s: 8, r: "Rude. Accurate. Chalta hai." },
    ],
  },
  {
    q: "Hum dono ke chats mein zyada kya hota hai?",
    opts: [
      { t: "Bakchodi. Sirf bakchodi.",                        s: 10, r: "Koi padh le to samajh hi na paaye kya chal raha hai." },
      { t: "Tum complain karti ho, main sunta hoon.",          s: 9, r: "Roles clear hain. Aise hi chalta rahe." },
      { t: "Memes forward, baaki silence.",                    s: 9, r: "Modern friendship ki official definition." },
      { t: "Ek dusre ko insult, pyaar se.",                    s: 10, r: "Yahi hai asli love language. Baaki sab dikhawa." },
    ],
  },
  {
    q: "Behen kam, pareshan karne wali zyada — kitne percent sach?",
    opts: [
      { t: "100%. Aur mujhe proud hai.",                      s: 10, r: "Isi confidence ki wajah se tum jeet jaati ho." },
      { t: "70% nautanki, 30% sweet. Balanced.",              s: 9, r: "Maths galat hai par intention accha hai." },
      { t: "Main sweet hoon, tum drama karte ho.",            s: 8, r: "Gaslighting at this hour? Impressive." },
      { t: "Part-time sweet, full-time nautanki. Fair.",       s: 10, r: "Meri hi line thi. Ab tum bhi bol rahi ho. Growth." },
    ],
  },
  {
    q: "Raat ke 2 baje ek bakwaas idea aata hai. Kise batati ho?",
    opts: [
      { t: "Tumhe. Obviously tumhe.",                        s: 10, r: "Correct. Phone kabhi silent nahi hota. Kabhi bhi." },
      { t: "Tumhe, par credit apna hi rakhungi.",             s: 9, r: "Classic. Idea mera, glory tumhari." },
      { t: "Google, phir tumhe jab Google fail ho jaaye.",    s: 8, r: "Backup option hoon main. Accept kar liya hai." },
      { t: "Kisi ko nahi. Main independent hoon.",            s: 6, r: "Pichle hafte cockroach ke liye call aaya tha. Yaad hai?" },
    ],
  },
  {
    q: "Meri sabse annoying aadat kya hai?",
    opts: [
      { t: "Bina puche gyaan dena.",                          s: 9, r: "Main iska explanation dena chahta tha — oh. Point noted." },
      { t: "Sahi hone ke baad yaad dilana.",                  s: 9, r: "Yaad dilana hi asli maza hai. Woh nahi chhodunga." },
      { t: "Reply 11 din baad karna.",                        s: 10, r: "Defence: padh liya tha turant. Phir panic ho gaya." },
      { t: "Kuch nahi. Tum perfect ho.",                      s: 10, r: "Galat hai, par bolti raho. Achha lag raha hai." },
    ],
  },
  {
    q: "Is rakhi pe mujhse expectation kya hai, honestly?",
    opts: [
      { t: "Cash. Sirf cash. Overthink mat karo.",            s: 9, r: "Direct. Shameless. Unfortunately reasonable." },
      { t: "Chocolate, aur acchi wali.",                      s: 10, r: "Already order ho chuki hai. Conditions apply." },
      { t: "Reply on time. Bas itna.",                        s: 10, r: "Yeh sabse mehnga gift maang liya tum ne." },
      { t: "Kuch nahi. Tum ho, kaafi hai.",                  s: 8, r: "Itni sincerity? Kya toda hai batao pehle." },
    ],
  },
  {
    q: "Last one — rakhi phir se mujhe hi baandhogi?",
    opts: [
      { t: "Haan. Turant. No notes.",                         s: 10, r: "Same. Har baar. Har version mein." },
      { t: "Haan, par thode upgrades ke saath.",              s: 10, r: "List bhejo. Do consider kar lunga." },
      { t: "Uff. Theek hai. Haan.",                           s: 10, r: "Yeh 'uff' tumhara sabse pyaara word hai." },
      { t: "Sirf free tech support ke liye.",                 s: 9, r: "Transactional par honest. Support jaari rahega anyway." },
    ],
  },
];

const VERDICTS = [
  { min: 0,  title: "Formality Wali Behen",       text: "Maths keh raha hai rakhi sister, vibe keh rahi hai shaadi mein mile do log. Yeh khaane pe theek karenge." },
  { min: 50, title: "Certified Nautanki Partner",  text: "Bond strong hai, methods questionable. Tum help bhi karogi aur poori process mein complain bhi karti rahogi. Perfect." },
  { min: 62, title: "Full-Time Nautanki, S-Tier",  text: "Officially unbeatable. Pareshan karne wali, sweet, irreplaceable — usi order mein. Rakhi ab sirf formality hai." },
];

/* ------------------------------------------------------------ VOUCHERS */
const VOUCHERS = [
  { emoji: "🍫", title: "Chocolate, Acchi Wali",        back: "Jo bologi wahi, jitni bologi utni. Ek baar bhi nahi bolunga ki mehengi hai.", terms: "Ek hi condition: aadha mujhe milega." },
  { emoji: "📞", title: "2 AM Call, Bina Sawaal",        back: "Time dekhe bina uthaunga. Na 'kal baat karte hain', na lecture. Bas sun lunga jitna bolna ho.", terms: "Expiry nahi hai. Yeh wala sach hai." },
  { emoji: "💻", title: "Lifetime Tech Support",        back: "Phone, laptop, Wi-Fi, koi bhi weird error. Bina samjhaye chup-chaap theek kar dunga.", terms: "Ek gehri saans included hai. Free." },
  { emoji: "🤐", title: "Ek Guaranteed Cover Story",     back: "Jab bolo, poore confidence se tumhari baat pe haan bhar dunga. Story tumhari, delivery meri.", terms: "Bas mujhe pehle bata dena." },
  { emoji: "🍜", title: "Khaana, Meri Taraf Se",         back: "Jagah tumhari pasand, bill mera. Menu ke right side dekhne ki zaroorat nahi hai.", terms: "Dessert bhi isi mein hai." },
  { emoji: "🏆", title: "'Tum Sahi Thi' Coupon",         back: "Ek baar, saaf saaf, sabke saamne maan lunga ki tum sahi thi aur main galat tha.", terms: "Sirf ek baar. Soch ke use karna." },
];

/* ============================================================
   ▲ END OF CONFIG — implementation below
   ============================================================ */

(() => {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------------------------------------------------- names + year */
  $$("[data-sister-full]").forEach(el => (el.textContent = CONFIG.sisterFull));
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  document.title = `Happy Raksha Bandhan, ${CONFIG.sisterFull} 🪢`;

  /* -------------------------------------------------- loader */
  const loader = $("#loader");
  const hideLoader = () => {
    loader.classList.add("done");
    setTimeout(() => {
      burst(innerWidth / 2, innerHeight * 0.38, 90);
      SFX.shehnai();
    }, 260);
  };
  if (document.readyState === "complete") setTimeout(hideLoader, 700);
  else addEventListener("load", () => setTimeout(hideLoader, 700));

  /* ==================================================
     CANVAS FX — falling petals + confetti bursts
     ================================================== */
  const canvas = $("#fx");
  const ctx = canvas.getContext("2d");
  let W = 0, H = 0, dpr = 1;

  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.width  = Math.floor(innerWidth  * dpr);
    H = canvas.height = Math.floor(innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  addEventListener("resize", resize);

  const PALETTE = ["#d92b3f", "#f79219", "#e0a92e", "#f6d68a", "#8c1b32", "#ff8f7a"];
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = arr => arr[(Math.random() * arr.length) | 0];

  const petals = [];
  const confetti = [];
  const sparks = [];

  function makePetal() {
    return {
      x: rand(0, innerWidth),
      y: rand(-innerHeight, 0),
      r: rand(4, 9),
      vy: rand(0.25, 0.85),
      vx: rand(-0.35, 0.35),
      rot: rand(0, Math.PI * 2),
      vr: rand(-0.012, 0.012),
      sway: rand(0.4, 1.3),
      phase: rand(0, Math.PI * 2),
      color: pick(PALETTE),
      alpha: rand(0.35, 0.75),
      kind: Math.random() < 0.22 ? "flower" : "petal",
    };
  }

  const PETAL_COUNT = reduceMotion ? 0 : (innerWidth < 640 ? 16 : 32);
  for (let i = 0; i < PETAL_COUNT; i++) petals.push(makePetal());

  const SHAPES = ["rect", "circle", "star", "ribbon"];

  function burst(x, y, count = 60, opts = {}) {
    if (reduceMotion) return;
    const shapes = opts.shapes || SHAPES;
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(3, 12);
      confetti.push({
        x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - rand(2, 5),
        w: rand(5, 12),
        h: rand(3, 7),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.3, 0.3),
        color: opts.color || pick(PALETTE),
        shape: pick(shapes),
        wobble: rand(0.5, 2),
        phase: rand(0, Math.PI * 2),
        life: 1,
        decay: rand(0.005, 0.013),
      });
    }
    if (confetti.length > 1100) confetti.splice(0, confetti.length - 1100);
  }

  // Cursor / touch sparkle trail.
  function addSpark(x, y) {
    sparks.push({
      x, y,
      vx: rand(-0.6, 0.6),
      vy: rand(-1.1, -0.2),
      r: rand(1.2, 3.2),
      color: pick(PALETTE),
      life: 1,
      decay: rand(0.02, 0.05),
    });
    if (sparks.length > 220) sparks.splice(0, sparks.length - 220);
  }

  if (!reduceMotion && matchMedia("(pointer:fine)").matches) {
    let lastSpark = 0;
    addEventListener("pointermove", e => {
      const now = performance.now();
      if (now - lastSpark < 28) return;
      lastSpark = now;
      addSpark(e.clientX, e.clientY);
    }, { passive: true });
  }

  function star(c, r) {
    c.beginPath();
    for (let i = 0; i < 10; i++) {
      const rad = i % 2 ? r * 0.45 : r;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      i ? c.lineTo(Math.cos(a) * rad, Math.sin(a) * rad)
        : c.moveTo(Math.cos(a) * rad, Math.sin(a) * rad);
    }
    c.closePath();
    c.fill();
  }

  let t = 0;
  function frame() {
    t += 0.016;
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    // ---- falling petals & marigold blooms ----
    for (const p of petals) {
      p.y += p.vy;
      p.x += p.vx + Math.sin(t * p.sway + p.phase) * 0.5;
      p.rot += p.vr;
      if (p.y > innerHeight + 20) Object.assign(p, makePetal(), { y: -20 });
      if (p.x < -30) p.x = innerWidth + 20;
      if (p.x > innerWidth + 30) p.x = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      if (p.kind === "flower") {
        for (let k = 0; k < 5; k++) {
          ctx.rotate((Math.PI * 2) / 5);
          ctx.beginPath();
          ctx.ellipse(0, -p.r * 0.7, p.r * 0.42, p.r * 0.8, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = p.alpha * 0.9;
        ctx.fillStyle = "#f6d68a";
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 0.34, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }

    // ---- confetti ----
    for (let i = confetti.length - 1; i >= 0; i--) {
      const c = confetti[i];
      c.vy += 0.22;                                  // gravity
      c.vx *= 0.99;                                  // drag
      c.x += c.vx + Math.sin(t * c.wobble + c.phase) * 0.6;
      c.y += c.vy;
      c.rot += c.vr;
      c.life -= c.decay;
      if (c.life <= 0 || c.y > innerHeight + 50) { confetti.splice(i, 1); continue; }

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.globalAlpha = Math.max(0, Math.min(1, c.life));
      ctx.fillStyle = c.color;
      if (c.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, c.h, 0, Math.PI * 2);
        ctx.fill();
      } else if (c.shape === "star") {
        star(ctx, c.w * 0.6);
      } else if (c.shape === "ribbon") {
        // a curled streamer: squashed sine sliver
        ctx.beginPath();
        ctx.moveTo(-c.w, 0);
        ctx.quadraticCurveTo(0, Math.sin(t * 4 + c.phase) * c.w, c.w, 0);
        ctx.lineWidth = c.h * 0.7;
        ctx.strokeStyle = c.color;
        ctx.stroke();
      } else {
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      }
      ctx.restore();
    }

    // ---- cursor sparks ----
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.02;
      s.life -= s.decay;
      if (s.life <= 0) { sparks.splice(i, 1); continue; }
      ctx.save();
      ctx.globalAlpha = Math.max(0, s.life) * 0.9;
      ctx.fillStyle = s.color;
      ctx.shadowColor = s.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r * s.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ==================================================
     AUDIO ENGINE — all synthesised, no asset files
     ================================================== */
  let audioCtx = null, master = null, soundOn = true;   // on by default
  const soundBtn = $("#soundBtn");

  function ensureAudio() {
    if (audioCtx) return audioCtx;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
      master = audioCtx.createGain();
      master.gain.value = 0.5;
      master.connect(audioCtx.destination);
    } catch { audioCtx = null; }
    return audioCtx;
  }

  // Single pitched note. `glide` bends the pitch by that many Hz over its life.
  function tone({ freq = 880, dur = 0.18, type = "sine", gain = 0.1, delay = 0, glide = 0 } = {}) {
    if (!soundOn || !ensureAudio()) return;
    const t0 = audioCtx.currentTime + delay;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (glide) osc.frequency.linearRampToValueAtTime(Math.max(40, freq + glide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.03);
  }

  // Filtered noise — the percussive layer (dhol hits, whooshes, sparkle texture).
  function noiseBurst({ dur = 0.16, gain = 0.1, cutoff = 900, type = "lowpass", delay = 0 } = {}) {
    if (!soundOn || !ensureAudio()) return;
    const t0 = audioCtx.currentTime + delay;
    const frames = Math.floor(audioCtx.sampleRate * dur);
    const buf = audioCtx.createBuffer(1, frames, audioCtx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
    const src = audioCtx.createBufferSource();
    src.buffer = buf;
    const filt = audioCtx.createBiquadFilter();
    filt.type = type;
    filt.frequency.value = cutoff;
    const g = audioCtx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(filt).connect(g).connect(master);
    src.start(t0);
  }

  function arpeggio(freqs, step = 0.08, opts = {}) {
    freqs.forEach((f, i) => tone({ freq: f, delay: i * step, dur: 0.22, gain: 0.075, type: "triangle", ...opts }));
  }

  // Named cues used across the page.
  const SFX = {
    // Raga-ish pentatonic run — the festive flourish.
    shehnai: () => arpeggio([587, 659, 784, 880, 1046], 0.075, { type: "sine", dur: 0.3, gain: 0.06 }),
    // Low membrane thump + noise slap.
    dhol: () => {
      tone({ freq: 96, dur: 0.22, type: "sine", gain: 0.24, glide: -46 });
      noiseBurst({ dur: 0.13, gain: 0.14, cutoff: 300 });
    },
    sparkle: () => {
      arpeggio([1046, 1318, 1568, 2093], 0.055, { type: "triangle", dur: 0.18, gain: 0.05 });
      noiseBurst({ dur: 0.3, gain: 0.03, cutoff: 6000, type: "highpass" });
    },
    tick:   () => tone({ freq: 1500, dur: 0.035, type: "square", gain: 0.02 }),
    flip:   () => { noiseBurst({ dur: 0.13, gain: 0.05, cutoff: 2400, type: "highpass" }); tone({ freq: 520, dur: 0.1, type: "triangle", gain: 0.05, glide: 180 }); },
    open:   () => { noiseBurst({ dur: 0.34, gain: 0.06, cutoff: 1600, type: "highpass" }); arpeggio([523, 659, 784, 1046], 0.1, { dur: 0.35, gain: 0.07 }); },
    select: () => { tone({ freq: 700, dur: 0.09, type: "triangle", gain: 0.07 }); tone({ freq: 1050, dur: 0.12, type: "sine", gain: 0.05, delay: 0.06 }); },
    bell:   () => { tone({ freq: 1318, dur: 0.7, type: "sine", gain: 0.08 }); tone({ freq: 1976, dur: 0.5, type: "sine", gain: 0.03, delay: 0.02 }); },
    fanfare: () => {
      arpeggio([523, 659, 784, 1046, 1318], 0.09, { dur: 0.4, gain: 0.08 });
      SFX.dhol();
      setTimeout(() => SFX.dhol(), 260);
      setTimeout(() => SFX.sparkle(), 420);
    },
  };

  // Kept for the older call sites: a plain pitched ping.
  const chime = (freq = 880, dur = 0.16) => tone({ freq, dur, gain: 0.09 });

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.textContent = soundOn ? "🔊" : "🔔";
    soundBtn.classList.toggle("ringing", soundOn);
    soundBtn.title = soundOn ? "Sound on — tap to mute" : "Sound off — tap to unmute";
    if (soundOn) {
      ensureAudio();
      if (audioCtx?.state === "suspended") audioCtx.resume();
      SFX.bell();
      setTimeout(() => SFX.shehnai(), 180);
    }
  });

  // Reflect the default-on state in the button straight away.
  soundBtn.textContent = "🔊";
  soundBtn.setAttribute("aria-pressed", "true");
  soundBtn.classList.add("ringing");
  soundBtn.title = "Sound on — tap to mute";

  // Browsers refuse to start audio before the visitor interacts with the page.
  // Try immediately (works when the site already has media engagement), then
  // retry on the very first gesture of any kind so it feels "already on".
  let audioReady = false;
  function unlockAudio(playFlourish = true) {
    if (!soundOn || audioReady) return;
    if (!ensureAudio()) return;
    if (audioCtx.state === "suspended") {
      audioCtx.resume().then(() => {
        if (audioCtx.state === "running" && !audioReady) {
          audioReady = true;
          if (playFlourish) SFX.shehnai();
        }
      }).catch(() => {});
      return;
    }
    audioReady = true;
    if (playFlourish) SFX.shehnai();
  }

  unlockAudio(false);                       // optimistic attempt on load
  ["pointerdown", "touchstart", "click", "keydown", "scroll"].forEach(evt =>
    addEventListener(evt, () => unlockAudio(true), { passive: true })
  );

  /* ==================================================
     NAV — sticky shadow + active link
     ================================================== */
  const nav = $("#nav");
  const progress = $("#scrollProgress");
  const onScroll = () => {
    nav.classList.toggle("stuck", scrollY > 12);
    if (progress) {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Soft tick when moving between nav items.
  $$(".nav-links a, .icon-btn").forEach(el =>
    el.addEventListener("pointerenter", () => SFX.tick(), { passive: true })
  );

  /* ---------- mobile drawer ---------- */
  const navToggle = $("#navToggle");
  const navBackdrop = $("#navBackdrop");
  const navLinksBox = $("#navLinks");

  function setNav(open) {
    nav.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    navBackdrop.hidden = !open;
    document.body.classList.toggle("nav-locked", open);
    if (open) navLinksBox.querySelector("a")?.focus({ preventScroll: true });
  }

  navToggle.addEventListener("click", () => {
    setNav(!nav.classList.contains("open"));
    SFX.flip();
  });
  navBackdrop.addEventListener("click", () => setNav(false));
  // Tapping a link should navigate, then get the drawer out of the way.
  navLinksBox.addEventListener("click", e => {
    if (e.target.closest("a")) setNav(false);
  });
  addEventListener("keydown", e => {
    if (e.key === "Escape" && nav.classList.contains("open")) setNav(false);
  });
  // Resizing back to desktop must never leave the drawer state stuck on.
  matchMedia("(min-width:761px)").addEventListener?.("change", e => {
    if (e.matches) setNav(false);
  });

  const navLinks = $$(".nav-links a");
  const sections = navLinks
    .map(a => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    const navObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(s => navObs.observe(s));
  }

  /* ==================================================
     REVEAL ON SCROLL
     ================================================== */
  const revealEls = $$(".reveal");
  if ("IntersectionObserver" in window) {
    const obs = new IntersectionObserver((entries, o) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add("in"), i * 90);
        o.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add("in"));
  }

  /* ==================================================
     HERO — typewriter name + confetti button
     ================================================== */
  const typed = $("#typed");
  const name = CONFIG.sisterFull;
  if (typed && !reduceMotion) {
    typed.textContent = "";
    let i = 0;
    const tick = () => {
      typed.textContent = name.slice(0, ++i);
      if (i < name.length) setTimeout(tick, 110);
    };
    setTimeout(tick, 1500);
  }

  $("#celebrateBtn").addEventListener("click", e => {
    const r = e.currentTarget.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    burst(cx, r.top, 130);
    burst(cx - 160, r.top + 30, 40);
    burst(cx + 160, r.top + 30, 40);
    SFX.dhol();
    SFX.shehnai();
  });

  /* ==================================================
     GALLERY
     ================================================== */
  const grid = $("#galleryGrid");

  PHOTOS.forEach((p, idx) => {
    const btn = document.createElement("button");
    btn.className = "frame reveal";
    btn.type = "button";
    btn.setAttribute("aria-label", `Enlarge photo: ${p.cap}`);
    btn.innerHTML = `
      <span class="frame-tape" aria-hidden="true"></span>
      <span class="frame-media">
        <span class="frame-ph">
          <span class="ph-emoji">${p.emoji || "📷"}</span>
          <span class="ph-text">Add <code>${p.src.split("/").pop()}</code></span>
        </span>
      </span>
      <span class="frame-cap">${p.cap}</span>`;

    // The <img> must live in the document and stay visible to the layout:
    // a detached image, or one hidden with `hidden`/`display:none`, is never
    // fetched when loading="lazy", so its load event would never fire.
    // It starts transparent and fades in over the placeholder instead.
    const media = btn.querySelector(".frame-media");
    const img = document.createElement("img");
    img.alt = p.cap;
    img.loading = idx < 4 ? "eager" : "lazy";
    img.decoding = "async";
    img.addEventListener("load", () => {
      img.classList.add("ready");
      media.querySelector(".frame-ph")?.remove();
      btn.dataset.src = p.src;
    });
    // Missing file: leave the decorative placeholder in place.
    img.addEventListener("error", () => img.remove());
    media.appendChild(img);
    img.src = p.src;

    btn.addEventListener("click", () => {
      if (btn.dataset.src) { openLightbox(btn.dataset.src, p.cap); SFX.open(); }
      else { burst(innerWidth / 2, innerHeight / 2, 30); SFX.sparkle(); }
    });
    btn.addEventListener("pointerenter", () => SFX.tick(), { passive: true });

    grid.appendChild(btn);
  });

  /* lightbox */
  const lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  function openLightbox(src, cap) {
    lbImg.src = src;
    lbImg.hidden = false;
    lbImg.alt = cap;
    lbCap.textContent = cap;
    lb.hidden = false;
    document.body.style.overflow = "hidden";
    $("#lbClose").focus();
  }
  function closeLightbox() {
    lb.hidden = true;
    lbImg.hidden = true;
    lbImg.removeAttribute("src");
    document.body.style.overflow = "";
  }
  $("#lbClose").addEventListener("click", closeLightbox);
  lb.addEventListener("click", e => { if (e.target === lb) closeLightbox(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLightbox(); });

  /* ==================================================
     QUIZ
     ================================================== */
  const qEl     = $("#quizQ");
  const optsEl  = $("#quizOptions");
  const countEl = $("#quizCount");
  const barEl   = $("#quizBar");
  const reactEl = $("#quizReact");
  const resultEl= $("#quizResult");

  const MAX_SCORE = QUESTIONS.length * 10;
  let qIndex = 0, score = 0;

  function renderQuestion() {
    const item = QUESTIONS[qIndex];
    countEl.textContent = `Question ${qIndex + 1} of ${QUESTIONS.length}`;
    barEl.style.width = `${(qIndex / QUESTIONS.length) * 100}%`;
    qEl.textContent = item.q;
    reactEl.textContent = "";
    reactEl.classList.remove("show");
    optsEl.innerHTML = "";

    item.opts.forEach((o, i) => {
      const b = document.createElement("button");
      b.className = "opt";
      b.type = "button";
      b.textContent = o.t;
      b.style.animation = reduceMotion ? "" : `fadeUp .4s ${i * 0.07}s backwards`;
      b.addEventListener("click", () => pick_(b, o));
      b.addEventListener("pointerenter", () => SFX.tick(), { passive: true });
      optsEl.appendChild(b);
    });
  }

  function pick_(btn, opt) {
    $$(".opt", optsEl).forEach(b => (b.disabled = true));
    btn.classList.add("picked");
    score += opt.s;
    reactEl.textContent = opt.r;
    reactEl.classList.add("show");
    SFX.select();

    const r = btn.getBoundingClientRect();
    burst(r.right - 24, r.top + r.height / 2, 22, { shapes: ["star", "circle"] });

    setTimeout(() => {
      qIndex++;
      if (qIndex < QUESTIONS.length) renderQuestion();
      else showResult();
    }, 1500);
  }

  function showResult() {
    barEl.style.width = "100%";
    countEl.hidden = true;
    qEl.hidden = true;
    optsEl.hidden = true;
    reactEl.hidden = true;
    resultEl.hidden = false;

    const pct = Math.round((score / MAX_SCORE) * 100);
    const verdict = [...VERDICTS].reverse().find(v => pct >= v.min) || VERDICTS[0];

    $("#verdictTitle").textContent = verdict.title;
    $("#verdictText").textContent  = verdict.text;
    $("#scoreRing").style.setProperty("--pct", `${pct}%`);
    $("#scoreRing").querySelector("small").textContent = `/ ${MAX_SCORE}`;

    // count up
    const numEl = $("#scoreNum");
    let n = 0;
    const step = Math.max(1, Math.round(score / 28));
    const up = setInterval(() => {
      n = Math.min(score, n + step);
      numEl.textContent = String(n);
      if (n >= score) clearInterval(up);
    }, 32);

    const r = resultEl.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top + 90, 170);
    burst(innerWidth * 0.18, innerHeight * 0.35, 60);
    burst(innerWidth * 0.82, innerHeight * 0.35, 60);
    SFX.fanfare();
  }

  $("#retryBtn").addEventListener("click", () => {
    qIndex = 0; score = 0;
    countEl.hidden = false; qEl.hidden = false; optsEl.hidden = false; reactEl.hidden = false;
    resultEl.hidden = true;
    $("#scoreNum").textContent = "0";
    renderQuestion();
  });

  renderQuestion();

  /* ==================================================
     VOUCHERS
     ================================================== */
  const vGrid = $("#voucherGrid");
  VOUCHERS.forEach(v => {
    const card = document.createElement("button");
    card.className = "voucher reveal";
    card.type = "button";
    card.setAttribute("aria-label", `Flip coupon: ${v.title}`);
    card.innerHTML = `
      <span class="v-inner">
        <span class="v-face v-front">
          <span class="v-emoji">${v.emoji}</span>
          <span class="v-title">${v.title}</span>
          <span class="v-hint">tap to open</span>
        </span>
        <span class="v-face v-back">
          <p>${v.back}</p>
          <p class="v-terms">${v.terms}</p>
        </span>
      </span>`;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      const open = card.classList.contains("flipped");
      card.setAttribute("aria-pressed", String(open));
      SFX.flip();
      if (open) {
        const r = card.getBoundingClientRect();
        burst(r.left + r.width / 2, r.top + r.height / 2, 28, { shapes: ["star", "ribbon"] });
        SFX.sparkle();
      }
    });
    card.addEventListener("pointerenter", () => SFX.tick(), { passive: true });
    vGrid.appendChild(card);
  });

  // Faces are absolutely positioned, so give every .v-inner one shared floor
  // tall enough for the longest back text — keeps rows from going ragged.
  const equaliseVouchers = () => {
    const inners = $$(".v-inner", vGrid);
    inners.forEach(el => (el.style.minHeight = ""));
    const tallest = Math.max(
      170,
      ...$$(".v-back", vGrid).map(b => b.scrollHeight + 44)
    );
    inners.forEach(el => (el.style.minHeight = `${tallest}px`));
  };
  requestAnimationFrame(equaliseVouchers);
  addEventListener("resize", equaliseVouchers);
  if (document.fonts?.ready) document.fonts.ready.then(equaliseVouchers);

  // re-observe dynamically added .reveal nodes
  if ("IntersectionObserver" in window) {
    const lateObs = new IntersectionObserver((entries, o) => {
      entries.forEach((e, i) => {
        if (!e.isIntersecting) return;
        setTimeout(() => e.target.classList.add("in"), i * 70);
        o.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    $$(".reveal:not(.in)").forEach(el => lateObs.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("in"));
  }

  /* ==================================================
     LETTER
     ================================================== */
  const env = $("#envelope"), letter = $("#letterBody");
  env.addEventListener("click", () => {
    env.classList.add("open");
    env.setAttribute("aria-expanded", "true");
    SFX.open();
    setTimeout(() => {
      env.style.display = "none";
      letter.hidden = false;
      const r = letter.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + 40, 110, { shapes: ["star", "circle", "ribbon"] });
      SFX.shehnai();
    }, 620);
  });

  $("#letterConfetti").addEventListener("click", e => {
    const r = e.currentTarget.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top, 200);
    burst(innerWidth * 0.12, innerHeight * 0.3, 70);
    burst(innerWidth * 0.88, innerHeight * 0.3, 70);
    SFX.fanfare();
  });

  /* -------------------------------------------------- easter egg: press "R" */
  addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "r" && !e.metaKey && !e.ctrlKey && !/input|textarea/i.test(e.target.tagName)) {
      burst(rand(0, innerWidth), rand(0, innerHeight * 0.6), 70);
      SFX.dhol();
    }
  });
})();
