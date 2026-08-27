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
  { src: "photos/01.jpg", cap: "Exhibit A. Koi sawaal nahi.",           emoji: "🌟" },
  { src: "photos/02.jpg", cap: "Pose aise, jaise camera udhaar de",      emoji: "💅" },
  { src: "photos/03.jpg", cap: "Full main-character energy",             emoji: "🎬" },
  { src: "photos/04.jpg", cap: "Certified unbothered",                   emoji: "😌" },
  { src: "photos/05.jpg", cap: "Outfit: undefeated",                     emoji: "✨" },
  { src: "photos/06.jpg", cap: "Chalees photos mein se ek",              emoji: "📸" },
  { src: "photos/07.jpg", cap: "Smile aisi, jaise pareshan nahi kiya",   emoji: "😇" },
  { src: "photos/08.jpg", cap: "Blackmail material, pyaar se archived",  emoji: "🤫" },
  { src: "photos/09.jpg", cap: "Festival fits, unbeatable",             emoji: "🪔" },
  { src: "photos/10.jpg", cap: "Yeh wali frame mein jaa rahi hai",       emoji: "🖼️" },
  { src: "photos/11.jpg", cap: "Suspiciously photogenic, as usual",      emoji: "🌸" },
  { src: "photos/12.jpg", cap: "Nabbe takes, yeh ek final",              emoji: "🔁" },
  { src: "photos/13.jpg", cap: "Theek hai. Acchi lag rahi ho. Khush?",   emoji: "🙃" },
  { src: "photos/14.jpg", cap: "Nautanki, caught mid-pose",              emoji: "👑" },
  { src: "photos/15.jpg", cap: "Historically important. Trust me.",      emoji: "📜" },
  { src: "photos/16.jpg", cap: "Khatarnak close to a good photo",        emoji: "💫" },
  { src: "photos/17.jpg", cap: "Filed under: favourite log",             emoji: "💛" },
  { src: "photos/18.jpg", cap: "Yahi face hai jo kuch nahi sunta",       emoji: "🗣️" },
  { src: "photos/19.jpg", cap: "Absolute scene-stealer",                emoji: "🌺" },
  { src: "photos/20.jpg", cap: "Aur phir bhi, sabse best",               emoji: "🪢" },
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
    q: "Ek din baat na ho to kya hota hai?",
    opts: [
      { t: "Din boring lagta hai. Maan liya.",                s: 10, r: "Finally admit kar diya. Yeh screenshot ja raha hai." },
      { t: "Kuch nahi hota. Main busy thi.",                  s: 7, r: "Jhooth. Teen 'hello?' messages aaye the." },
      { t: "Main peace enjoy karti hoon, honestly.",          s: 8, r: "Peace 40 minute chalti hai maximum. Data hai mere paas." },
      { t: "Main pehle message karti hoon, always.",          s: 9, r: "Yeh sach hai. Credit deta hoon." },
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
  { emoji: "🍫", title: "Chocolate, Acchi Wali",        back: "Ek acchi chocolate, meri taraf se, bina taunt ke. Poora chocolate hisaab ek baar mein settle.", terms: "Non-transferable. Bhookh lagne tak valid." },
  { emoji: "📞", title: "2 AM Call, Bina Sawaal",        back: "Koi bhi time, koi bhi crisis. Na explanation chahiye, na lecture milega. Genuinely unlimited.", terms: "No expiry. Ever. Yeh wala sach hai." },
  { emoji: "💻", title: "Lifetime Tech Support",        back: "Wi-Fi, laptop, phone, woh ek printer. Main audibly sigh karunga, phir theek kar dunga.", terms: "Sigh included aur mandatory hai." },
  { emoji: "🤐", title: "Ek Guaranteed Cover Story",     back: "Ek (1) alibi, tumhari choice ka, ekdum straight face ke saath deliver kiya jayega.", terms: "Legal hona chahiye. Ideally." },
  { emoji: "🍜", title: "Khaana, Meri Taraf Se",         back: "Restaurant tumhara pick, bill mera. Price pe comment nahi karunga. Zor se.", terms: "Mann mein comment ho sakta hai." },
  { emoji: "🏆", title: "'Tum Sahi Thi' Coupon",         back: "Ek baar redeemable, tumhare chune hue witnesses ke saamne. Saaf saaf bolunga.", terms: "One use only. Moment soch ke choose karo." },
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
    setTimeout(() => burst(innerWidth / 2, innerHeight * 0.38, 70), 260);
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

  const petals = [];
  const confetti = [];

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
      color: PALETTE[(Math.random() * PALETTE.length) | 0],
      alpha: rand(0.35, 0.75),
    };
  }

  const PETAL_COUNT = reduceMotion ? 0 : (innerWidth < 640 ? 16 : 30);
  for (let i = 0; i < PETAL_COUNT; i++) petals.push(makePetal());

  function burst(x, y, count = 60) {
    if (reduceMotion) return;
    for (let i = 0; i < count; i++) {
      const a = rand(0, Math.PI * 2);
      const sp = rand(3, 12);
      confetti.push({
        x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - rand(2, 5),
        w: rand(5, 11),
        h: rand(3, 6),
        rot: rand(0, Math.PI * 2),
        vr: rand(-0.3, 0.3),
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        life: 1,
        decay: rand(0.006, 0.014),
      });
    }
    if (confetti.length > 900) confetti.splice(0, confetti.length - 900);
  }

  let t = 0;
  function frame() {
    t += 0.016;
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (const p of petals) {
      p.y += p.vy;
      p.x += p.vx + Math.sin(t * p.sway + p.phase) * 0.5;
      p.rot += p.vr;
      if (p.y > innerHeight + 20) { Object.assign(p, makePetal(), { y: -20 }); }
      if (p.x < -30) p.x = innerWidth + 20;
      if (p.x > innerWidth + 30) p.x = -20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.r, p.r * 0.55, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (let i = confetti.length - 1; i >= 0; i--) {
      const c = confetti[i];
      c.vy += 0.22;         // gravity
      c.vx *= 0.99;         // drag
      c.x += c.vx;
      c.y += c.vy;
      c.rot += c.vr;
      c.life -= c.decay;
      if (c.life <= 0 || c.y > innerHeight + 40) { confetti.splice(i, 1); continue; }

      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rot);
      ctx.globalAlpha = Math.max(0, Math.min(1, c.life));
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ==================================================
     SOUND — tiny WebAudio chime, no asset files
     ================================================== */
  let audioCtx = null, soundOn = false;
  const soundBtn = $("#soundBtn");

  function chime(freq = 880, dur = 0.16) {
    if (!soundOn) return;
    try {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
      osc.connect(gain).connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + dur + 0.02);
    } catch { /* audio unavailable — silently ignore */ }
  }

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundBtn.setAttribute("aria-pressed", String(soundOn));
    soundBtn.textContent = soundOn ? "🔊" : "🔔";
    if (soundOn) { chime(660); setTimeout(() => chime(990), 130); }
  });

  /* ==================================================
     NAV — sticky shadow + active link
     ================================================== */
  const nav = $("#nav");
  addEventListener("scroll", () => nav.classList.toggle("stuck", scrollY > 12), { passive: true });

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
    burst(r.left + r.width / 2, r.top, 110);
    chime(784);
    setTimeout(() => chime(1046), 120);
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
      if (btn.dataset.src) openLightbox(btn.dataset.src, p.cap);
      else burst(innerWidth / 2, innerHeight / 2, 30);
      chime(700 + idx * 40);
    });

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
      b.addEventListener("click", () => pick(b, o));
      optsEl.appendChild(b);
    });
  }

  function pick(btn, opt) {
    $$(".opt", optsEl).forEach(b => (b.disabled = true));
    btn.classList.add("picked");
    score += opt.s;
    reactEl.textContent = opt.r;
    reactEl.classList.add("show");
    chime(620 + opt.s * 30);

    const r = btn.getBoundingClientRect();
    burst(r.right - 24, r.top + r.height / 2, 18);

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
    burst(r.left + r.width / 2, r.top + 90, 140);
    chime(880); setTimeout(() => chime(1174), 140); setTimeout(() => chime(1318), 280);
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
      card.setAttribute("aria-pressed", String(card.classList.contains("flipped")));
      chime(card.classList.contains("flipped") ? 740 : 560, 0.1);
      if (card.classList.contains("flipped")) {
        const r = card.getBoundingClientRect();
        burst(r.left + r.width / 2, r.top + r.height / 2, 24);
      }
    });
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
    chime(523); setTimeout(() => chime(659), 130); setTimeout(() => chime(784), 260);
    setTimeout(() => {
      env.style.display = "none";
      letter.hidden = false;
      const r = letter.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + 40, 90);
    }, 620);
  });

  $("#letterConfetti").addEventListener("click", e => {
    const r = e.currentTarget.getBoundingClientRect();
    burst(r.left + r.width / 2, r.top, 180);
    burst(innerWidth * 0.15, innerHeight * 0.3, 60);
    burst(innerWidth * 0.85, innerHeight * 0.3, 60);
    chime(1046);
  });

  /* -------------------------------------------------- easter egg: press "R" */
  addEventListener("keydown", e => {
    if (e.key.toLowerCase() === "r" && !e.metaKey && !e.ctrlKey && !/input|textarea/i.test(e.target.tagName)) {
      burst(rand(0, innerWidth), rand(0, innerHeight * 0.6), 60);
    }
  });
})();
