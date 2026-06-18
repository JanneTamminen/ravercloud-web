import Image from "next/image";
import { Faq } from "@/components/Faq";
import { MediaSlot } from "@/components/MediaSlot";
import { Nav } from "@/components/Nav";
import { PageEffects } from "@/components/PageEffects";

const CON_ITEMS = [
  {
    title: "Twitch and YouTube are crowded",
    body: "You're one tile in an infinite grid, competing with everything else on the internet.",
  },
  {
    title: "Instagram Live disappears",
    body: "The set ends, the story expires, and the moment is gone within 24 hours.",
  },
  {
    title: "Most DJ streams feel disposable",
    body: "A webcam in a corner doesn't feel like an event worth buying a ticket for.",
  },
  {
    title: "Fans stay passive",
    body: "They watch, maybe drop an emoji, and never feel like they were actually in the room.",
  },
  {
    title: "Promo & replay are left to you",
    body: "Every flyer, clip, and re-upload is one more unpaid job between sets.",
  },
];

const FEATS = [
  {
    num: "02",
    title: "Branded Event Page",
    body: "A dedicated page for each virtual show — date, lineup, ticket tiers, and a countdown.",
    tag: "one per show",
    delay: 1,
  },
  {
    num: "03",
    title: "Virtual Club Stream",
    body: "A cinematic performance format that looks like a venue, not a webcam window.",
    tag: "the stage",
    delay: 2,
  },
  {
    num: "04",
    title: "Audience Video Wall",
    body: "Opt-in fan cams appear inside the room, so the crowd is visibly part of the show.",
    tag: "fans on-screen",
  },
  {
    num: "05",
    title: "Ticketing & Tips",
    body: "Sell entry, take tips mid-set, and run VIP tiers — direct, no middle layer.",
    tag: "get paid",
    delay: 1,
  },
  {
    num: "06",
    title: "Replay Archive",
    body: "Every set becomes a reusable media asset you can gate, sell, or release.",
    tag: "after the show",
    delay: 2,
  },
  {
    num: "07",
    title: "Promo Kit",
    body: "Auto-generated flyers, clips, and copy so promoting the event isn't a second job.",
    tag: "share-ready",
    delay: 3,
  },
];

const STEPS = [
  {
    num: "01",
    title: "Apply for a residency",
    body: "Tell us about your project. We review and onboard founding DJs by hand.",
    si: "Step 01 · apply",
  },
  {
    num: "02",
    title: "Choose your show format",
    body: "Weekly set, monthly session, label showcase — pick a recurring shape.",
    si: "Step 02 · format",
    delay: 1,
  },
  {
    num: "03",
    title: "Set up your stream",
    body: "Follow guided OBS setup. A 10-minute tech rehearsal gets you stage-ready.",
    si: "Step 03 · OBS",
    delay: 2,
  },
  {
    num: "04",
    title: "Promote your event",
    body: "Use the promo kit and your branded event page to fill the room.",
    si: "Step 04 · promo",
  },
  {
    num: "05",
    title: "Go live inside the club",
    body: "Perform in the virtual venue with fans on the wall and tips rolling in.",
    si: "Step 05 · live",
    delay: 1,
  },
  {
    num: "06",
    title: "Monetize the replay",
    body: "Turn the recorded set into gated replay access, clips, and merch moments.",
    si: "Step 06 · replay",
    delay: 2,
  },
];

const FORMATS = [
  { sched: "Fri · Weekly", title: "Weekly Friday Set", body: "Your standing night. Same room, same time, every week." },
  { sched: "Monthly", title: "Underground Session", body: "A deeper, longer monthly journey for the core crowd.", delay: 1 },
  { sched: "Showcase", title: "Label Showcase", body: "Put the whole roster on one stage across a single night.", delay: 2 },
  { sched: "Late", title: "Afterparty Series", body: "The set that starts when the headline show ends.", delay: 3 },
  { sched: "Sun · Ambient", title: "Ambient Sunday", body: "A slow, immersive listening stream to close the week." },
  { sched: "Guest", title: "Guest DJ Takeover", body: "Hand the room to a guest and split the door.", delay: 1 },
  { sched: "VIP", title: "VIP Fan Club Event", body: "Members-only sets for your most committed listeners.", delay: 2 },
  { sched: "Release", title: "Release Party", body: "Premiere the record live, the night it drops.", delay: 3 },
];

const FAN_FEATS = [
  { title: "Audience video wall", body: "Fans appear inside the show." },
  { title: "Fan camera opt-in", body: "On-screen only if they choose.", delay: 1 },
  { title: "Live chat", body: "The room talks back in real time." },
  { title: "VIP shoutouts", body: "Call out the crowd by name.", delay: 1 },
  { title: "Request queue", body: "Fans line up the next track." },
  { title: "Tip moments", body: "Support that lands mid-set.", delay: 1 },
  { title: "Photo moments", body: "Screenshot-worthy room shots." },
  { title: "Tip-triggered visuals", body: "Tips light up the stage.", soon: true, delay: 1 },
];

const MONEY = [
  { idx: "01", title: "Ticketed live events", body: "Sell entry to the room with tiered pricing.", when: "live" },
  { idx: "02", title: "Tips & donations", body: "Direct support during the set, in the moment.", when: "live", delay: 1 },
  { idx: "03", title: "Replay access", body: "Gate or sell the recording after the show.", when: "after", delay: 2 },
  { idx: "04", title: "Merch links", body: "Drop products in-stream and on the event page.", when: "live + after" },
  { idx: "05", title: "Sponsorship potential", body: "Branded shows and presented-by residencies.", when: "opportunity", delay: 1 },
  { idx: "06", title: "Memberships", body: "Recurring fan-club revenue between events.", when: "future", future: true, delay: 2 },
];

const INCLUDES = [
  "Branded DJ profile page",
  "First virtual event page",
  "Ticketing setup",
  "OBS setup guide",
  "10-minute tech rehearsal",
  "Audience video participation",
  "Replay page",
  "Basic promo kit",
  "Post-event feedback session",
];

const GALLERY = [
  {
    className: "big",
    tag: "Virtual club",
    label: "Virtual club screenshot",
    src: "/images/shot-club.png",
    alt: "RaverCloud virtual club stage with DJ Niki",
  },
  {
    className: "tall",
    tag: "DJ feed + room",
    label: "DJ feed composite",
    src: "/images/shot-feed.png",
    alt: "XCaster DJ feed with DJ Aiko Noir in the virtual room",
    delay: 1,
  },
  {
    className: "wide",
    tag: "Audience video wall",
    label: "Video wall mockup",
    src: "/images/shot-wall.png",
    alt: "VIP audience video wall with fan cams in the virtual club",
  },
  {
    className: "sq",
    tag: "Event page",
    label: "Event page mockup",
    src: "/images/shot-event.png",
    alt: "PsyTrance Sessions 001 branded event page with countdown and live chat",
    delay: 1,
  },
  {
    className: "wide",
    tag: "DJ profile page",
    label: "DJ profile mockup",
    src: "/images/shot-profile.png",
    alt: "DJ Aiko Noir brand and identity profile settings",
  },
  {
    className: "sq",
    tag: "Promo kit",
    label: "Promo kit mockup",
    src: "/images/shot-promo.png",
    alt: "PsyTrance Sessions event promo with upcoming and past events",
    delay: 1,
  },
];

const WALL_DELAYS = ["0s", ".4s", ".8s", "1.2s", "1.6s", "2s"];

function delayAttr(delay?: number) {
  return delay ? { "data-d": String(delay) } : {};
}

export function LandingPage() {
  return (
    <>
      <PageEffects />
      <div className="bg-field" />
      <div className="grain" data-anim />

      <Nav />

      <main id="top">
        <header className="hero">
          <div className="hero-lights" data-anim>
            <span className="l1" />
            <span className="l2" />
          </div>
          <div className="hero-grid" />
          <div className="wrap">
            <div className="hero-copy">
              <span className="kicker reveal">Founding DJ Residency · Applications open</span>
              <h1 className="display reveal" data-d="1">
                Launch your own <span className="soft">virtual DJ</span> residency.
              </h1>
              <p className="hero-sub reveal" data-d="2">
                Host premium virtual shows, sell tickets, bring fans on-screen, and build a replay archive from every set.
              </p>
              <div className="hero-actions reveal" data-d="3">
                <a href="#founding" className="btn btn--primary btn--lg">
                  Apply for a Founding DJ Residency
                </a>
                <a href="#demo" className="btn btn--ghost btn--lg">
                  <span className="play" />
                  Watch the Demo
                </a>
              </div>
              <div className="hero-trust reveal" data-d="4">
                <span className="rule" /> Built on the Luminara / XCaster live media stack
              </div>
            </div>

            <div className="stage reveal" data-d="2">
              <div className="stage-screen">
                <span className="pill pill--live live-chip">
                  <span className="dot" />
                  Live
                </span>
                <MediaSlot
                  label="DJ feed / virtual club still"
                  src="/images/hero-stage.png"
                  alt="DJ Aiko Noir performing in the RaverCloud virtual club"
                  priority
                />
                <div className="stage-hud">
                  <div className="stage-eq" data-anim>
                    {[0, 0.15, 0.3, 0.1, 0.25, 0.05, 0.35, 0.2].map((delay) => (
                      <i key={delay} style={{ animationDelay: `${delay}s` }} />
                    ))}
                  </div>
                  <span className="viewers">
                    <span
                      className="pill__dot"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "var(--accent-2)",
                      }}
                    />
                    1,284 in the room
                  </span>
                </div>
              </div>
              <div className="wall">
                {WALL_DELAYS.map((d) => (
                  <div key={d} className="tile" data-anim style={{ "--d": d } as React.CSSProperties} />
                ))}
                <div className="wall-label">
                  <span>Audience video wall</span>
                  <span>fan cams · opt-in</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section" id="problem">
          <div className="wrap">
            <div className="problem-grid">
              <div className="reveal">
                <span className="eyebrow-index">02 / The gap</span>
                <p className="big" style={{ marginTop: 18 }}>
                  Livestreaming is easy. Building a <em>memorable, monetizable</em> show format is hard.
                </p>
                <p className="lede" style={{ marginTop: 24 }}>
                  Going live takes one click. Owning a recurring show your fans plan their week around — that&apos;s the part no streaming platform actually gives you.
                </p>
              </div>
              <ul className="con-list">
                {CON_ITEMS.map((item, i) => (
                  <li key={item.title} className="con-item reveal" {...delayAttr(i || undefined)}>
                    <span className="x">✕</span>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--tight" id="product">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 46 }}>
              <span className="kicker">03 / What you get</span>
              <h2 className="display">Your virtual residency, packaged.</h2>
              <p className="lede">
                Everything a premium recurring show needs — the page, the stage, the audience, and the money — in one connected system.
              </p>
            </div>
            <div className="feat-grid">
              <article className="feat feat--hero reveal">
                <div className="ftext">
                  <span className="num">01</span>
                  <h3>DJ Profile Page</h3>
                  <p>
                    A branded home for the artist — bio, upcoming shows, residency schedule, and the full replay archive in one link.
                  </p>
                  <span className="tag">your-name.ravercloud.live</span>
                </div>
                <div className="fvis">
                  <span className="slot-tag">DJ profile</span>
                  <MediaSlot
                    label="DJ profile mockup"
                    src="/images/feat-profile.png"
                    alt="DJ Aiko Noir profile page mockup"
                  />
                </div>
              </article>
              {FEATS.map((feat) => (
                <article key={feat.num} className="feat reveal" {...delayAttr(feat.delay)}>
                  <span className="num">{feat.num}</span>
                  <h3>{feat.title}</h3>
                  <p>{feat.body}</p>
                  <span className="tag">{feat.tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 46 }}>
              <span className="kicker">04 / The flow</span>
              <h2 className="display">How your first RaverCloud show works.</h2>
            </div>
            <div className="steps">
              {STEPS.map((step) => (
                <div key={step.num} className="step reveal" {...delayAttr(step.delay)}>
                  <span className="ghost">{step.num}</span>
                  <h4>{step.title}</h4>
                  <p>{step.body}</p>
                  <span className="si">{step.si}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--tight" id="formats">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 42 }}>
              <span className="kicker">05 / Recurring formats</span>
              <h2 className="display">Built for recurring shows, not one-off streams.</h2>
              <p className="lede">A residency is a format your fans can count on. Start with one of these and make it yours.</p>
            </div>
            <div className="format-grid">
              {FORMATS.map((fmt) => (
                <article key={fmt.title} className="format reveal" {...delayAttr(fmt.delay)}>
                  <span className="sched">{fmt.sched}</span>
                  <h4>{fmt.title}</h4>
                  <p>{fmt.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="fans">
          <div className="wrap">
            <div className="fan-split">
              <div className="fan-visual reveal">
                <div className="fan-wall fan-wall--photo">
                  <Image
                    src="/images/fan-wall.png"
                    alt="DJ performing with audience video wall of fan cams behind"
                    fill
                    sizes="(max-width: 880px) 100vw, 45vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div>
                <div className="sec-head reveal" style={{ marginBottom: 18 }}>
                  <span className="kicker">06 / Participation</span>
                  <h2 className="display">Let your fans become part of the room.</h2>
                </div>
                <ul className="fan-feats">
                  {FAN_FEATS.map((feat) => (
                    <li key={feat.title} className="reveal" {...delayAttr(feat.delay)}>
                      <span className="ic" />
                      <div>
                        <h4>
                          {feat.title}
                          {feat.soon ? <span className="soon"> soon</span> : null}
                        </h4>
                        <p>{feat.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight" id="money">
          <div className="wrap">
            <div className="money-head reveal">
              <div className="sec-head">
                <span className="kicker">07 / Monetization</span>
                <h2 className="display">
                  Your set should keep working
                  <br />
                  after the stream ends.
                </h2>
              </div>
              <p className="lede" style={{ maxWidth: "34ch" }}>
                One night can become multiple revenue streams — live, on replay, and beyond.
              </p>
            </div>
            <div className="money-grid">
              {MONEY.map((item) => (
                <article key={item.idx} className="money reveal" {...delayAttr(item.delay)}>
                  <span className="idx">{item.idx}</span>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                  <span className={`when${item.future ? " future" : ""}`}>{item.when}</span>
                </article>
              ))}
            </div>
            <div className="note-strip reveal">
              <span className="tag">No hype</span> We don&apos;t promise income figures. RaverCloud gives you the structure and the opportunity — the audience and the work are yours.
            </div>
          </div>
        </section>

        <section className="section founding" id="founding">
          <div className="wrap">
            <div className="ticket reveal">
              <div className="ticket-l">
                <span className="badge">
                  <span className="dot" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
                  Limited slots · Cohort 01
                </span>
                <span className="eyebrow-index">08 / Founding DJ Residency Program</span>
                <h2 className="display">Help shape the next generation of virtual performance.</h2>
                <p>
                  We&apos;re opening a limited number of early RaverCloud residency slots for DJs, collectives, and labels who want to build a premium show format from the ground up — with hands-on setup and direct feedback at every step.
                </p>
                <a href="mailto:hello@ravercloud.live?subject=Founding%20DJ%20Residency%20Application" className="btn btn--primary btn--lg" style={{ alignSelf: "flex-start" }}>
                  Apply for a Founding DJ Residency
                </a>
              </div>
              <div className="ticket-r">
                <h4>Included in the program</h4>
                <ul className="incl">
                  {INCLUDES.map((item) => (
                    <li key={item}>
                      <span className="ck">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--tight" id="demo">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 42 }}>
              <span className="kicker">09 / Inside the product</span>
              <h2 className="display">See the room before you book it.</h2>
              <p className="lede">Drop in real screens as they&apos;re ready — these slots persist exactly where you place them.</p>
            </div>
            <div className="gallery">
              {GALLERY.map((shot) => (
                <div key={shot.tag} className={`shot ${shot.className} reveal`} {...delayAttr(shot.delay)}>
                  <span className="slot-tag">{shot.tag}</span>
                  <MediaSlot label={shot.label} src={shot.src} alt={shot.alt} />
                </div>
              ))}
            </div>
            <div className="builton">
              <span>Built on the Luminara / XCaster live media stack</span>
              <span className="rule" />
              <span>v0 · founding cohort</span>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 36 }}>
              <span className="kicker">10 / Questions</span>
              <h2 className="display">Before you apply.</h2>
            </div>
            <Faq />
          </div>
        </section>

        <section className="final">
          <div className="final-lights" data-anim>
            <span />
          </div>
          <div className="wrap">
            <span className="kicker kicker--plain reveal">Founding DJ Residency · Cohort 01</span>
            <h2 className="display reveal" data-d="1">
              Not another livestream link.
              <br />
              <em>Your own virtual residency.</em>
            </h2>
            <div className="hero-actions reveal" data-d="2" style={{ justifyContent: "center" }}>
              <a href="mailto:hello@ravercloud.live?subject=Founding%20DJ%20Residency%20Application" className="btn btn--primary btn--lg">
                Apply for a Founding DJ Residency
              </a>
              <a href="#demo" className="btn btn--ghost btn--lg">
                <span className="play" />
                Watch the Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <a className="brand" href="#top">
            <span className="mark" />
            <b>RaverCloud</b>
            <span className="sub">/ Residency</span>
          </a>
          <div className="foot-meta">
            <span>Built on Luminara / XCaster</span>
            <a href="#founding">Apply</a>
            <a href="#faq">FAQ</a>
            <span>© 2026 RaverCloud</span>
          </div>
        </div>
      </footer>
    </>
  );
}
