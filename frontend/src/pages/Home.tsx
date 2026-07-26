import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  DatabaseZap,
  LineChart,
  MessageSquarePlus,
  SearchCode,
  ShieldCheck,
  Sparkles,
  UserCircle2,
  Zap,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  const FEATURES = [
    { icon: Bot, title: t("home.featureAgent"), desc: t("home.featureAgentDesc") },
    { icon: BarChart3, title: t("home.featureBacktest"), desc: t("home.featureBacktestDesc") },
    { icon: Zap, title: t("home.featureStreaming"), desc: t("home.featureStreamingDesc") },
    { icon: UserCircle2, title: t("home.featureReplay"), desc: t("home.featureReplayDesc") },
  ];

  const STEPS = [
    { icon: MessageSquarePlus, title: t("home.step1Title"), desc: t("home.step1Desc") },
    { icon: SearchCode, title: t("home.step2Title"), desc: t("home.step2Desc") },
    { icon: LineChart, title: t("home.step3Title"), desc: t("home.step3Desc") },
    { icon: ShieldCheck, title: t("home.step4Title"), desc: t("home.step4Desc") },
  ];

  const MARKET_CARDS = [
    { label: "A-Share Momentum", value: "+18.4%", tone: "text-success", detail: "CSI 300 · 2024 walk-forward" },
    { label: "Risk Budget", value: "0.72", tone: "text-info", detail: "portfolio beta target" },
    { label: "Live Guardrails", value: "4", tone: "text-warning", detail: "mandate checks before execution" },
  ];

  const PROMPTS = [
    "Backtest a multi-factor CSI 300 strategy with momentum, reversal, and volatility filters.",
    "Analyze my broker export and show where my Shadow Account outperforms me.",
    "Run an investment committee debate on Tencent with bull, bear, and risk reviewers.",
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.16),transparent_34%),radial-gradient(circle_at_80%_10%,hsl(var(--info)/0.12),transparent_28%)]">
      <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Multi-agent research · backtesting · guarded execution
          </div>

          <div className="max-w-3xl space-y-5">
            <h1 className="text-5xl font-black tracking-tight md:text-6xl">
              {t("home.title")}
            </h1>
            <p className="text-xl leading-8 text-muted-foreground md:text-2xl">
              {t("home.subtitle")}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/agent"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:opacity-90"
            >
              {t("home.startResearch")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/reports"
              className="inline-flex items-center justify-center gap-2 rounded-xl border bg-card/80 px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:bg-muted"
            >
              View Reports <LineChart className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {MARKET_CARDS.map((card) => (
              <div key={card.label} className="rounded-2xl border bg-card/75 p-4 shadow-sm backdrop-blur">
                <div className="text-xs font-medium text-muted-foreground">{card.label}</div>
                <div className={`mt-2 text-2xl font-bold ${card.tone}`}>{card.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{card.detail}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border bg-card/90 p-5 shadow-2xl backdrop-blur">
            <div className="flex items-center justify-between border-b pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Vibe Trading Desk</p>
                <h2 className="text-lg font-bold">Research cockpit</h2>
              </div>
              <div className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">Online</div>
            </div>

            <div className="grid gap-4 py-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-muted/55 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><BrainCircuit className="h-4 w-4 text-primary" /> Agent Plan</div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {['Load market data', 'Generate signal code', 'Validate risk metrics'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-success" /> {item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-muted/55 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold"><CircleDollarSign className="h-4 w-4 text-primary" /> Portfolio</div>
                <div className="mt-4 h-24 rounded-xl bg-gradient-to-tr from-success/20 via-primary/20 to-info/20 p-3">
                  <div className="flex h-full items-end gap-2">
                    {[36, 58, 44, 70, 62, 88, 78].map((height, index) => (
                      <div key={index} className="flex-1 rounded-t bg-primary/70" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 rounded-2xl border bg-background/70 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold"><DatabaseZap className="h-4 w-4 text-primary" /> Try these prompts</div>
              {PROMPTS.map((prompt) => (
                <Link key={prompt} to="/agent" className="block rounded-xl border bg-card px-3 py-2 text-sm text-muted-foreground transition hover:border-primary/50 hover:text-foreground">
                  “{prompt}”
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-14 lg:px-10">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          {t("home.howItWorksTitle")}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-4">
          {STEPS.map(({ icon: Icon, title, desc }, index) => (
            <div key={title} className="relative rounded-2xl border bg-card/80 p-5 shadow-sm backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              {index < STEPS.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-6 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground/40 md:block" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
