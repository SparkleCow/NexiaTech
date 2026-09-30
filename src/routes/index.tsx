import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Blocks, Boxes, Check, CloudCog, Cpu, Cctv, Github, Linkedin, Menu, Moon, Network, ScanFace, ServerCog, SolarPanel, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { THEME_STORAGE_KEY } from "@/lib/theme";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexiatech — Ingeniería de software e infraestructura" },
      { name: "description", content: "Desarrollo de software a medida, arquitectura cloud e infraestructura tecnológica para operaciones que necesitan escalar." },
      { property: "og:title", content: "Nexiatech — Ingeniería que conecta" },
      { property: "og:description", content: "Software escalable e infraestructura robusta, desde la arquitectura hasta la operación." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Logo() {
  return (
    <a href="#inicio" aria-label="Nexiatech, inicio" className="flex items-center font-bold text-foreground">
      <img 
        src="/logo.png" 
        alt="Logo Nexiatech" 
        className="h-12 w-auto object-contain" 
      />
      <span className="text-lg">
        nexia<span className="text-primary">tech</span>
      </span>
    </a>
  );
}

function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[450px] overflow-hidden rounded-md border border-border bg-surface shadow-2xl shadow-primary/10">
      <div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-0 h-full w-full p-10">
        <img 
          src="/back.jpeg" 
          alt="Fotografía macro de un prototipo de circuito impreso Nexiatech para IoT de misión crítica"
          className="h-full w-full object-contain object-center"
        />
      </div>
      <div className="float-panel absolute bottom-4 right-4 border border-border bg-background/90 p-3 shadow-xl backdrop-blur-sm">
        <p className="font-mono text-[10px] uppercase text-muted-foreground">Disponibilidad</p>
        <p className="mt-1 text-lg font-bold">99.99%</p>
      </div>
    </div>
  );
}

const capabilities = [
  { icon: Boxes, number: "01", title: "Desarrollo Full-Stack", text: "Productos digitales robustos con arquitecturas diseñadas para escalabilidad.", tags: ["Backend", "Bases de datos", "APIs"] },
  { icon: CloudCog, number: "02", title: "Cloud & DevOps", text: "Infraestructura automatizada, despliegues continuos y entornos cloud preparados para crecer sin fricción.", tags: ["Cloud", "CI/CD", "Containers"] },
  { icon: Network, number: "03", title: "Redes & Observabilidad", text: "Telemetría, monitoreo y redes de alto rendimiento para operaciones siempre visibles y disponibles.", tags: ["Monitoring", "Networks", "SRE"] },
];

const projects = [
  {
    icon: SolarPanel,
    number: "01",
    category: "Energía renovable",
    title: "Paneles solares para energía renovable",
    text: "Instalaciones fotovoltaicas diseñadas de extremo a extremo: cálculo de generación, estructura, cableado y monitoreo por string para que la planta produzca el máximo posible con el mínimo mantenimiento.",
    tags: ["Fotovoltaica", "Inversores", "SCADA", "Mantenimiento"],
    featured: true,
  },
  {
    icon: Cctv,
    number: "02",
    category: "Videovigilancia autónoma",
    title: "Cámaras con paneles solares",
    text: "Cámaras de seguridad que funcionan sin conexión a la red eléctrica: panel solar integrado, batería, enlace inalámbrico y central de revisión remota.",
    tags: ["CCTV", "Off-grid", "Wireless", "4G / LTE"],
  },
  {
    icon: Cpu,
    number: "03",
    category: "Software & hardware",
    title: "Desarrollo de software con IoT",
    text: "Plataformas que conectan sensores y dispositivos en tiempo real: ingesta de telemetría, control remoto, reglas de automatización y tableros de operación.",
    tags: ["MQTT", "Telemetría", "Dashboards", "APIs"],
  },
  {
    icon: Blocks,
    number: "04",
    category: "Ingeniería a medida",
    title: "Software a la medida",
    text: "Sistemas desarrollados desde cero para tu operación, integrándose con las herramientas que ya usas. Arquitectura, backend, frontend e integraciones bajo un mismo estándar de calidad.",
    tags: ["Angular", "Spring Boot", "APIs", "Cloud"],
  },
  {
    icon: ScanFace,
    number: "05",
    category: "Visión por computadora",
    title: "Cámaras de reconocimiento facial",
    text: "Reconocimiento facial para control de acceso, conteo de personas y análisis de flujo, con procesamiento en el borde y protocolos de privacidad y seguridad biométrica.",
    tags: ["Computer Vision", "Edge AI", "Biometría", "Seguridad"],
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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:flex lg:justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
            <a href="#servicios" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Servicios</a>
            <a href="#infraestructura" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Infraestructura</a>
            <a href="#proyectos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Proyectos</a>
            <a href="#ecosistema" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Ecosistema</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setDark(!dark)} aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"} title={dark ? "Modo claro" : "Modo oscuro"}>{dark ? <Sun /> : <Moon />}</Button>
            <Button asChild className="hidden h-11 px-5 sm:inline-flex"><a href="mailto:hola@nexiatech.com">Iniciar proyecto <ArrowUpRightIcon /></a></Button>
            <Button variant="outline" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background p-5 lg:hidden"><div className="mx-auto grid max-w-7xl gap-1"><a onClick={() => setMenuOpen(false)} href="#servicios" className="py-3 text-sm">Servicios</a><a onClick={() => setMenuOpen(false)} href="#infraestructura" className="py-3 text-sm">Infraestructura</a><a onClick={() => setMenuOpen(false)} href="#proyectos" className="py-3 text-sm">Proyectos</a><a onClick={() => setMenuOpen(false)} href="#ecosistema" className="py-3 text-sm">Ecosistema</a><Button asChild className="mt-3 sm:hidden"><a href="mailto:hola@nexiatech.com">Iniciar proyecto</a></Button></div></nav>}
      </header>

      <main>
        <section className="relative border-b border-border pt-36 sm:pt-44">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 sm:pb-28 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-32">
            <div className="animate-fade-in">
            <h1 className="max-w-3xl text-2xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl">
              Ingeniería que conecta <span className="text-primary">software</span>, infraestructura y futuro.
            </h1>           
             <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">Transformamos ideas complejas en infraestructura inteligente. Nexiatech es el socio de ingeniería y desarrollo IoT para productos que no pueden permitirse fallar.</p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 px-7"><a href="mailto:hola@nexiatech.com?subject=Cotización de desarrollo">Cotizar desarrollo <ArrowRight /></a></Button>
                <Button asChild variant="outline" size="lg" className="h-13 px-7"><a href="#infraestructura">Ver arquitectura <ArrowDownRight /></a></Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground"><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-signal" />Arquitectura a medida</span><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-signal" />Operación continua</span><span className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-signal" />Escala empresarial</span></div>
            </div>
            <NetworkVisual />
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 py-18 sm:py-26">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><div><h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl sm:leading-[1.15]">Del <span className="text-primary">código</span> a la operación.</h2></div><p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">Convertimos problemas de arquitectura complejos en código limpio, infraestructura estable y sistemas listos para producción desde el día uno.</p></div>
            <div className="grid md:grid-cols-3">
              {capabilities.map((item) => <article key={item.title} className="group border-b border-border py-10 transition-colors hover:bg-accent/40 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                <div className="flex items-center justify-between"><div className="grid h-11 w-11 place-items-center border border-border bg-surface text-primary"><item.icon className="h-5 w-5" /></div><span className="font-mono text-xs text-muted-foreground">{item.number}</span></div>
                <h3 className="mt-12 text-xl font-bold">{item.title}</h3><p className="mt-4 min-h-24 text-sm leading-7 text-muted-foreground">{item.text}</p>
                <div className="mt-8 flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="infraestructura" className="scroll-mt-20 bg-surface-strong py-24 text-on-dark sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
            <div><p className="font-mono text-xs uppercase text-signal">Infraestructura</p><h2 className="mt-5 text-3xl font-bold leading-tight sm:text-5xl">Construida para resistir.<br />Diseñada para avanzar.</h2><p className="mt-6 max-w-xl leading-8 text-on-dark/65">Unificamos aplicación, nube, redes y observabilidad en una sola arquitectura operable. Menos puntos ciegos. Más velocidad de entrega.</p></div>
            <div className="border border-on-dark/15 bg-on-dark/5 p-5 sm:p-8">
              <div className="mb-7 flex items-center justify-between border-b border-on-dark/15 pb-5"><span className="flex items-center gap-2 font-mono text-[10px] text-signal"><span className="h-2 w-2 rounded-full bg-signal node-pulse" />OPERATIVO</span></div>
              {["Código", "Orquestación y despliegue", "Conectividad y redes", "Monitoreo y telemetría"].map((label, index) => (<div key={label} className="grid grid-cols-[auto_1fr] items-center gap-4 border-b border-on-dark/10 py-4 last:border-0"><span className="font-mono text-[10px] text-on-dark/35">0{index + 1}</span><span className="truncate text-sm">{label}</span></div>))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-8 pb-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div><p className="font-mono text-xs uppercase text-primary">Proyectos</p><h2 className="mt-4 text-3xl font-bold sm:text-5xl">Ingeniería aplicada<br className="hidden sm:block" /> a problemas reales.</h2></div>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end">Cinco líneas donde convergen energía, hardware y software. Sistemas completos, desde la ingeniería inicial hasta la operación diaria.</p>
            </div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((item) => (
                <article key={item.number} className={cn("group flex flex-col bg-background p-7 transition-colors duration-300 hover:bg-surface sm:p-9", item.featured && "lg:col-span-2")}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center border border-border bg-surface text-primary transition-colors group-hover:border-primary/50"><item.icon className="h-5 w-5" /></div>
                    <span className="font-mono text-xs text-muted-foreground">{item.number}</span>
                  </div>
                  <p className="mt-12 font-mono text-[10px] uppercase text-signal">{item.category}</p>
                  <h3 className={cn("mt-3 font-bold", item.featured ? "text-2xl sm:text-3xl" : "text-xl")}>{item.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{item.text}</p>
                  <div className="mt-8 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground">{tag}</span>)}</div>
                  <a href={`mailto:hola@nexiatech.com?subject=${encodeURIComponent(`Proyecto: ${item.title}`)}`} className="mt-auto inline-flex items-center gap-2 self-start pt-10 text-sm font-semibold text-primary">Solicitar propuesta <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="ecosistema" className="scroll-mt-20 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8"><div className="grid gap-12 border-y border-border py-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="relative flex min-h-72 items-center justify-center overflow-hidden bg-muted"><div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:32px_32px]" /><div className="relative flex items-center gap-5"><div className="grid h-20 w-20 place-items-center border border-border bg-background shadow-xl"><ServerCog className="h-8 w-8 text-primary" /></div><div className="h-px w-12 bg-primary" /><div className="border border-border bg-background p-5 shadow-xl"><p className="font-mono text-[10px] text-muted-foreground">ECOSYSTEM</p><p className="mt-1 text-lg font-bold">panamproject</p></div></div></div>
            <div><p className="font-mono text-xs uppercase text-flare">Ecosistema</p><h2 className="mt-5 text-3xl font-bold sm:text-5xl">Tecnología con respaldo y visión de negocio.</h2><p className="mt-6 max-w-2xl leading-8 text-muted-foreground">Como subsidiaria tecnológica de panamproject, Nexiatech transforma estrategia en capacidad técnica. Combinamos la agilidad de un equipo especializado con la solidez de un ecosistema empresarial preparado para proyectos de largo plazo.</p><a href="https://panamproject.com" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">Conocer panamproject <ArrowRight className="h-4 w-4" /></a></div>
          </div></div>
        </section>

        <section className="px-5 pb-10 sm:px-8 sm:pb-16"><div className="relative mx-auto max-w-7xl overflow-hidden bg-primary px-6 py-16 text-primary-foreground sm:px-14 sm:py-20"><div className="absolute inset-0 bg-[linear-gradient(var(--grid-line)_1px,transparent_1px),linear-gradient(90deg,var(--grid-line)_1px,transparent_1px)] bg-[size:48px_48px] opacity-30" /><div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="font-mono text-xs uppercase text-primary-foreground/70">Ready to build</p><h2 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">Tu próximo sistema merece una ingeniería sin límites.</h2><p className="mt-5 max-w-xl text-primary-foreground/75">Hablemos de arquitectura, equipo y la ruta más inteligente para llevarlo a producción.</p></div><Button asChild size="lg" variant="secondary" className="h-13 px-7"><a href="mailto:hola@nexiatech.com?subject=Nuevo proyecto">Iniciar conversación <ArrowRight /></a></Button></div></div></section>
      </main>

      <footer className="border-t border-border"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1fr_auto] md:items-end"><div><Logo /><p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">Ingeniería de software e infraestructura tecnológica. Una empresa del ecosistema panamproject.</p><p className="mt-8 text-xs text-muted-foreground">© 2026 Nexiatech. Todos los derechos reservados.</p></div><div className="flex items-center gap-2"><Button variant="outline" size="icon" asChild><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a></Button><Button variant="outline" size="icon" asChild><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button></div></div></footer>
    </div>
  );
}

function ArrowUpRightIcon() { return <ArrowRight className="-rotate-45" />; }
