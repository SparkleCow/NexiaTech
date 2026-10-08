import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Boxes,
  Check,
  CloudCog,
  Cpu,
  Cctv,
  Github,
  Linkedin,
  Menu,
  Moon,
  Network,
  ScanFace,
  ServerCog,
  SolarPanel,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexiatech — Ingeniería de software e infraestructura" },
      {
        name: "description",
        content:
          "Desarrollo de software a medida, arquitectura cloud e infraestructura tecnológica para operaciones que necesitan escalar.",
      },
      { property: "og:title", content: "Nexiatech — Ingeniería que conecta" },
      {
        property: "og:description",
        content:
          "Software escalable e infraestructura robusta, desde la arquitectura hasta la operación.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a
      href="#inicio"
      aria-label="Nexiatech, inicio"
      className="flex items-center font-bold text-foreground"
    >
      <img src="/logo.png" alt="Logo Nexiatech" className="h-12 w-auto object-contain" />
      <span className="text-lg">
        nexia<span className="text-primary">tech</span>
      </span>
    </a>
  );
}

function Whatsapp({ className = "" }) {
  return (
    <a
      href="https://wa.me/573243656689"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`flex items-center justify-center transition-transform ${className}`}
    >
      <img
        src="/projects/whatsapp.png"
        alt="WhatsApp logo"
        className="h-full w-full object-contain"
      />
    </a>
  );
}

function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-md border border-white/10 bg-slate-900 shadow-2xl shadow-primary/10 dark:border-border dark:bg-surface">
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 h-full w-full p-10">
        <img
          src="/projects/program.jpeg"
          alt="Fotografía macro de un prototipo de circuito impreso Nexiatech para IoT de misión crítica"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="float-panel absolute bottom-4 right-4 border border-border bg-card/90 p-3 shadow-xl backdrop-blur-sm">
        <p className="font-mono text-[10px] uppercase text-muted-foreground">Disponibilidad</p>
        <p className="mt-1 text-lg font-bold">99.999%</p>
      </div>
    </div>
  );
}

const capabilities = [
  {
    icon: Boxes,
    number: "01",
    title: "Desarrollo Full-Stack",
    text: "Productos digitales robustos con arquitecturas diseñadas para escalabilidad.",
    tags: ["Backend", "Bases de datos", "APIs"],
  },
  {
    icon: CloudCog,
    number: "02",
    title: "Cloud & DevOps",
    text: "Infraestructura automatizada, despliegues continuos y entornos cloud preparados para crecer sin fricción.",
    tags: ["Cloud", "CI/CD", "Containers"],
  },
  {
    icon: Network,
    number: "03",
    title: "Redes & Observabilidad",
    text: "Telemetría, monitoreo y redes de alto rendimiento para operaciones siempre visibles y disponibles.",
    tags: ["Monitoring", "Networks", "SRE"],
  },
];

const projects = [
  {
    icon: SolarPanel,
    number: "01",
    image: "/projects/paneles.jpeg",
    imageAlt: "Campo de paneles solares fotovoltaicos con monitoreo",
    category: "Energía renovable",
    title: "Paneles solares para energía renovable",
    text: "Instalaciones fotovoltaicas diseñadas de extremo a extremo: cálculo de generación, estructura, cableado y monitoreo por string para que la planta produzca el máximo posible con el mínimo mantenimiento.",
    tags: ["Fotovoltaica", "Inversores", "SCADA", "Mantenimiento"],
    featured: true,
  },
  {
    icon: Cctv,
    number: "02",
    image: "/projects/camara-p.jpeg",
    imageAlt: "Cámara de videovigilancia autonomous con panel solar y enlace inalámbrico",
    category: "Videovigilancia autónoma",
    title: "Cámaras con paneles solares",
    text: "Cámaras de seguridad que funcionan sin conexión a la red eléctrica: panel solar integrado, batería, enlace inalámbrico y central de revisión remota.",
    tags: ["CCTV", "Off-grid", "Wireless", "4G / LTE"],
  },
  {
    icon: Cpu,
    number: "03",
    image: "/projects/iot.jpeg",
    imageAlt: "Malla de sensores IoT transmitiendo telemetría en tiempo real",
    category: "Software & hardware",
    title: "Desarrollo de software con IoT",
    text: "Plataformas que conectan sensores y dispositivos en tiempo real: ingesta de telemetría, control remoto, reglas de automatización y tableros de operación.",
    tags: ["MQTT", "Telemetría", "Dashboards", "APIs"],
  },
  {
    icon: Blocks,
    number: "04",
    image: "/projects/software.jpeg",
    imageAlt: "Arquitectura de software a medida por capas con integraciones externas",
    category: "Ingeniería a medida",
    title: "Software a la medida",
    text: "Sistemas desarrollados desde cero para tu operación, integrándose con las herramientas que ya usas. Arquitectura, backend, frontend e integraciones bajo un mismo estándar de calidad.",
    tags: ["Angular", "Spring Boot", "APIs", "Cloud"],
  },
  {
    icon: ScanFace,
    number: "05",
    image: "/projects/camaras.gif",
    imageAlt: "Sistema de reconocimiento facial con procesamiento en el borde",
    category: "Visión por computadora",
    title: "Cámaras de reconocimiento facial",
    text: "Reconocimiento facial para control de acceso, conteo de personas y análisis de flujo, con procesamiento en el borde y protocolos de privacidad y seguridad biométrica.",
    tags: ["Computer Vision", "Edge AI", "Biometría", "Seguridad"],
  },
];

const footerNav = [
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo Full-Stack", href: "#servicios" },
      { label: "Cloud & DevOps", href: "#servicios" },
      { label: "Redes & Observabilidad", href: "#servicios" },
      { label: "IoT & Telemetría", href: "#proyectos" },
    ],
  },
  {
    title: "Compañía",
    links: [
      { label: "Infraestructura", href: "#infraestructura" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Ecosistema", href: "#ecosistema" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

function Index() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const themeSynced = useRef(false);

  useEffect(() => {
    if (!themeSynced.current) {
      themeSynced.current = true;
      setDark(document.documentElement.classList.contains("dark"));
      return;
    }
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  }, [dark]);

  return (
    <div id="inicio" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[oklch(0.16_0.045_252)]/90 backdrop-blur-xl dark:border-border dark:bg-background/90">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
          {/* Estilos para la animación de entrada (puedes ponerlos junto a tus estilos globales o aquí mismo) */}
          <style>{`
            @keyframes slideInFromLeft {
              0% {
                opacity: 0;
                transform: translateX(-60px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
            .animate-slide-left {
              animation: slideInFromLeft 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
          `}</style>
          {/* Aquí envuelves tu Logo dentro del div animado dentro del header */}
          <div className="animate-slide-left [&_a]:text-white [&_a>span>span]:text-[oklch(0.72_0.16_243)]">
            <Logo />
          </div>{" "}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            <a
              href="#infraestructura"
              className="text-sm text-white/80 transition-colors hover:text-white dark:text-muted-foreground dark:hover:text-foreground"
            >
              Infraestructura
            </a>
            <a
              href="#proyectos"
              className="text-sm text-white/80 transition-colors hover:text-white dark:text-muted-foreground dark:hover:text-foreground"
            >
              Proyectos
            </a>
            <a
              href="#ecosistema"
              className="text-sm text-white/80 transition-colors hover:text-white dark:text-muted-foreground dark:hover:text-foreground"
            >
              Ecosistema
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}
              title={dark ? "Modo claro" : "Modo oscuro"}
              className="text-white hover:bg-white/10 hover:text-white dark:text-foreground dark:hover:bg-accent dark:hover:text-accent-foreground"
            >
              {dark ? <Sun /> : <Moon />}
            </Button>
            <Button asChild className="hidden h-11 px-5 sm:inline-flex">
              <a href="mailto:hola@nexiatech.com">
                Iniciar proyecto <ArrowUpRightIcon />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[oklch(0.16_0.045_252)] p-5 text-white lg:hidden dark:border-border dark:bg-background dark:text-foreground">
            <div className="mx-auto grid max-w-7xl gap-1">
              <a onClick={() => setMenuOpen(false)} href="#servicios" className="py-3 text-sm">
                Servicios
              </a>
              <a
                onClick={() => setMenuOpen(false)}
                href="#infraestructura"
                className="py-3 text-sm"
              >
                Infraestructura
              </a>
              <a onClick={() => setMenuOpen(false)} href="#proyectos" className="py-3 text-sm">
                Proyectos
              </a>
              <a onClick={() => setMenuOpen(false)} href="#ecosistema" className="py-3 text-sm">
                Ecosistema
              </a>
              <Button asChild className="mt-3 sm:hidden">
                <a href="mailto:hola@nexiatech.com">Iniciar proyecto</a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative border-b border-border pt-36 sm:pt-44">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
          <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(70%_60%_at_50%_-15%,var(--accent),transparent)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-32">
            <div className="animate-fade-in">
              <h1 className="max-w-3xl text-2xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl">
                Ingeniería que conecta <span className="text-primary">software</span>,
                infraestructura y futuro.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Transformamos ideas complejas en infraestructura inteligente. Nexiatech es el socio
                de ingeniería y desarrollo IoT para productos que no pueden permitirse fallar.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 px-7">
                  <a href="mailto:hola@nexiatech.com?subject=Cotización de desarrollo">
                    Cotizar desarrollo <ArrowRight />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-13 px-7">
                  <a href="#infraestructura">
                    Ver arquitectura <ArrowDownRight />
                  </a>
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-signal" />
                  Arquitectura a medida
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-signal" />
                  Operación continua
                </span>
                <span className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-signal" />
                  Escala empresarial
                </span>
              </div>
            </div>
            <NetworkVisual />
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 py-18 sm:py-26">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <h2 className="mb-9 text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.15]">
                  Del <span className="text-primary">código</span> a la operación.
                </h2>
              </div>
              <p className="max-w-2xl mb-9 text-base leading-7 text-muted-foreground lg:justify-self-end">
                Traducimos retos complejos de arquitectura en código mantenible, infraestructura
                cloud estable y sistemas blindados para producción desde el día uno. Aceleramos el
                ciclo de vida del software con despliegues automatizados, asegurando que cada
                producto crezca con total estabilidad técnica.
              </p>
            </div>

            {/* Mantenemos el grid unificado pero añadimos padding interno (p-8) a cada article */}
            <div className="grid md:grid-cols-3">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="group flex flex-col justify-between border-b border-border py-10 transition-all duration-300 hover:bg-accent/60 md:border-r md:last:border-r-0 p-8 sm:p-10 cursor-pointer dark:bg-accent/60 dark:hover:bg-slate-800 dark:hover:border-blue-500/50 dark:hover:shadow-[0_4px_14px_-4px_rgba(59,130,246,0.25)] dark:hover:shadow-blue-500/25"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="grid h-11 w-11 place-items-center border border-border bg-muted text-primary">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-msono text-xs text-muted-foreground">
                        {item.number}
                      </span>
                    </div>
                    <h3 className="mt-12 text-xl font-bold">{item.title}</h3>
                    <p className="mt-4 min-h-24 text-sm leading-7 text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="infraestructura"
          className="scroll-mt-20 bg-surface-strong py-24 text-on-dark sm:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-mono text-xs uppercase text-signal">Infraestructura</p>
              <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">
                Construida para resistir.
                <br />
                Diseñada para avanzar.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-on-dark/65">
                Unificamos aplicación, nube, redes y observabilidad en una sola arquitectura
                operable. Menos puntos ciegos. Más velocidad de entrega.
              </p>
            </div>
            <div className="border border-on-dark/15 bg-on-dark/5 p-5 sm:p-8">
              <div className="mb-7 flex items-center justify-between border-b border-on-dark/15 pb-5">
                <span className="flex items-center gap-2 font-mono text-[10px] text-signal">
                  <span className="h-2 w-2 rounded-full bg-signal node-pulse" />
                  OPERATIVO
                </span>
              </div>
              {[
                "Código",
                "Orquestación y despliegue",
                "Conectividad y redes",
                "Monitoreo y telemetría",
              ].map((label, index) => (
                <div
                  key={label}
                  className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-on-dark/10 py-4 last:border-0"
                >
                  <span className="font-mono text-[10px] text-on-dark/35">0{index + 1}</span>
                  <span className="truncate text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-10 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 pb-24 lg:grid-cols-2 lg:items-end">
              <div>
                <h2 className="mt-4 text-3xl font-bold sm:text-5xl">
                  <span className="text-primary">Ingeniería</span> aplicada
                  <br className="hidden sm:block" /> a problemas reales.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">
                Soluciones tecnológicas de extremo a extremo. Fusionamos ingeniería de software
                moderna, infraestructura cloud robusta y automatización para escalar operaciones
                reales."
              </p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((item) => (
                <article
                  key={item.number}
                  className={cn(
                    "group relative flex flex-col bg-card p-7 transition-all duration-300 hover:bg-muted hover:shadow-2xl hover:shadow-black/15 hover:ring-1 hover:ring-foreground/15 sm:p-9 cursor-pointer dark:border dark:border-transparent dark:bg-surface dark:hover:bg-slate-800 dark:hover:border-blue-500/50 dark:hover:ring-0 dark:hover:shadow-[0_4px_14px_-4px_rgba(59,130,246,0.25)] dark:hover:shadow-blue-500/25",
                    item.featured && "lg:col-span-2",
                  )}
                >
                  <div className="relative h-36 w-full overflow-hidden rounded-lg border border-foreground/20 bg-muted shadow-[0_12px_30px_-14px_rgba(15,23,42,0.5)] sm:h-40 dark:border-border/70 dark:shadow-none">
                    <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <item.icon className="h-6 w-6 text-muted-foreground/40" />
                    </div>
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.opacity = "0";
                      }}
                      className="absolute inset-0 h-full w-full object-cover contrast-125 saturate-[1.15] transition-transform duration-500 group-hover:scale-[1.04] dark:contrast-100 dark:saturate-100"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 to-transparent dark:from-background/60" />
                    <span className="absolute right-2.5 top-2.5 font-mono text-[10px] text-on-dark/70">
                      {item.number}
                    </span>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center border border-border bg-muted text-primary transition-colors group-hover:border-primary/50">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] uppercase text-signal">
                      {item.category}
                    </span>
                  </div>
                  <h3
                    className={cn(
                      "mt-5 font-bold",
                      item.featured ? "text-2xl sm:text-3xl" : "text-xl",
                    )}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`mailto:hola@nexiatech.com?subject=${encodeURIComponent(`Proyecto: ${item.title}`)}`}
                    className="mt-auto inline-flex items-center gap-2 self-start pt-8 text-sm font-semibold text-primary"
                  >
                    Solicitar propuesta{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosistema" className="scroll-mt-20 pb-10 sm:pb-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 border-y border-border py-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div className="relative group w-full overflow-hidden rounded-2xl border border-foreground/25 bg-card/60 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-primary/40 dark:border-border">
                <div className="flex items-center justify-between border-b border-foreground/15 bg-muted/40 px-4 py-3 dark:border-border/60">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground tracking-wide">
                    nexiatech.tsx
                  </span>
                  <div className="w-10" /> {/* Espaciador simétrico */}
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/80">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-40" />
                  <img
                    src="https://panamproject.com/wp-content/uploads/2023/03/msp-carrusel-service-desk-1-5-1536x1024.webp"
                    alt="Nexiatech System Preview"
                    className="h-full w-full object-cover object-center filter grayscale-[25%] contrast-110 brightness-95 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 rounded-md bg-background/90 px-3 py-1.5 font-mono text-[10px] backdrop-blur-md border border-foreground/20 shadow-lg dark:border-border">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-muted-foreground">NexiaTech</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-mono text-xs uppercase text-primary">Ecosistema</p>
                <h2 className="mt-5 text-3xl font-bold sm:text-5xl">
                  Tecnología con respaldo y visión de negocio.
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-muted-foreground">
                  Ingeniería de software y gestión de infraestructura de alta disponibilidad.
                  Combinamos agilidad técnica y metodologías de centro de operaciones para construir
                  sistemas que escalan.
                </p>{" "}
                <a
                  href="https://panamproject.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  Conocer panamproject <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 px-5 pb-10 sm:px-8 sm:pb-16">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-surface-strong px-6 py-16 text-primary-foreground sm:px-14 sm:py-20 dark:bg-primary">
            <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-xs uppercase text-primary-foreground/80">
                  LISTOS PARA CONSTRUIR
                </p>
                <h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight text-primary-foreground sm:text-5xl">
                  Tu próximo sistema merece una ingeniería sin límites.
                </h2>
                <p className="mt-5 max-w-xl text-primary-foreground/85">
                  Hablemos de arquitectura, equipo y la ruta más inteligente para llevarlo a
                  producción.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="h-13 px-7">
                <a href="mailto:hola@nexiatech.com?subject=Nuevo proyecto">
                  Iniciar conversación <ArrowRight />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 right-4 z-50 cursor-pointer drop-shadow-lg">
        {/* Estilos CSS en línea para la animación intermitente */}
        <style>
          {`
            @keyframes attention-pulse {
              0%, 75%, 100% { transform: rotate(0deg) scale(1); }
              80% { transform: rotate(12deg) scale(1.08); }
              85% { transform: rotate(-10deg) scale(1.08); }
              90% { transform: rotate(6deg) scale(1.04); }
              95% { transform: rotate(0deg) scale(1); }
            }
            .whatsapp-float {
              animation: attention-pulse 3s ease-in-out infinite;
            }
          `}
        </style>

        {/* Contenedor sin el borde conflictivo, usando shadow-lg para un acabado pro */}
        <div className="whatsapp-float flex h-16 w-16 items-center justify-center rounded-full bg-card shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:rotate-0">
          <Whatsapp />
        </div>
      </div>

      <footer className="border-t border-white/15 bg-surface-strong text-white dark:border-border dark:bg-card/50 dark:text-muted-foreground">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 py-14 sm:py-16 md:grid-cols-[1.7fr_1fr_1fr_1.3fr]">
            {/* Marca, propuesta de valor y contacto social */}
            <div className="max-w-sm">
              <div className="[&_a]:text-white [&_a>span>span]:text-[oklch(0.72_0.16_243)]">
                <Logo />
              </div>
              <p className="mt-4 text-sm leading-6">
                Ingeniería de software e infraestructura tecnológica. Infraestructura resiliente,
                desarrollo full-stack y observabilidad de redes de alta disponibilidad.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase text-[oklch(0.75_0.16_158)] dark:text-signal">
                  Disponible para nuevos proyectos
                </span>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="text-foreground dark:text-muted-foreground"
                >
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="text-foreground dark:text-muted-foreground"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                  </a>
                </Button>
              </div>
            </div>

            {/* Enlaces rápidos (rellenar según contenido final) */}
            {footerNav.map((column) => (
              <div key={column.title}>
                <p className="font-mono text-xs uppercase tracking-wider text-white dark:text-primary">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-[oklch(0.72_0.16_243)] dark:hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contacto directo */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-white dark:text-primary">
                Contacto
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="nexiatech@panamproject.com"
                    className="transition-colors hover:text-[oklch(0.72_0.16_243)] dark:hover:text-foreground"
                  >
                    nexiatech@panamproject.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/573243656689"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[oklch(0.72_0.16_243)] dark:hover:text-foreground"
                  >
                    +57 324 365 6689
                  </a>
                </li>
                <li>Bogotá, Colombia · Carrera 14 # 147 – 05</li>
                <li>Lun–Vie · 9:00–18:00 (GMT-5)</li>
              </ul>
            </div>
          </div>

          {/* Barra inferior de cierre */}
          <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-xs sm:flex-row sm:items-center sm:justify-between dark:border-border">
            <p>
              © {new Date().getFullYear()} Nexiatech. Todos los derechos reservados. · Empresa del
              ecosistema panamproject.
            </p>
            <div className="flex items-center gap-4">
              <span className="transition-colors hover:text-[oklch(0.72_0.16_243)] dark:hover:text-foreground">
                Privacidad
              </span>
              <span className="transition-colors hover:text-[oklch(0.72_0.16_243)] dark:hover:text-foreground">
                Términos
              </span>
            </div>
          </div>

          {/* Crédito de desarrollo: discreto a propósito */}
          <p className="pb-5 text-center text-[10px] tracking-wide text-white/55 transition-colors hover:text-white dark:text-muted-foreground/40 dark:hover:text-muted-foreground">
            Development by SparkleCow
          </p>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="-rotate-45" />;
}
