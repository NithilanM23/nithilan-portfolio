import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const channels = [
  {
    id: 'EMAIL',
    label: 'Primary Channel',
    value: 'am.nithilan@gmail.com',
    href: 'mailto:am.nithilan@gmail.com',
    cmd: 'open --channel email',
  },
  {
    id: 'GITHUB',
    label: 'Code Repository',
    value: 'github.com/NithilanM23',
    href: 'https://github.com/NithilanM23',
    cmd: 'open --channel github',
  },
  {
    id: 'LINKEDIN',
    label: 'Professional Network',
    value: 'linkedin.com/in/nithilanm23',
    href: 'https://www.linkedin.com/in/nithilanm23/',
    cmd: 'open --channel linkedin',
  },
  {
    id: 'TWITTER',
    label: 'Broadcast Channel',
    value: '@nithilanm_',
    href: 'https://twitter.com/nithilanm_',
    cmd: 'open --channel twitter',
  },
]

const terminalLines = [
  { delay: 0, text: '> INITIATING CONTACT PROTOCOL...', dim: true },
  { delay: 0.4, text: '> SYSTEM: NM-OS v3.0', dim: true },
  { delay: 0.8, text: '> STATUS: ONLINE — AVAILABLE FOR COLLABORATION', dim: false },
  { delay: 1.2, text: '> RESPONSE TIME: < 24 HOURS', dim: true },
  { delay: 1.6, text: '> SELECT CHANNEL TO ESTABLISH CONNECTION', dim: false },
]

function TerminalLine({
  text,
  delay,
  dim,
  inView,
}: {
  text: string
  delay: number
  dim: boolean
  inView: boolean
}) {
  const [visible, setVisible] = useState(false)
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    if (!inView) return
    const showTimer = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(showTimer)
  }, [inView, delay])

  useEffect(() => {
    if (!visible) return
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) clearInterval(interval)
    }, 18)
    return () => clearInterval(interval)
  }, [visible, text])

  if (!visible) return null

  return (
    <div
      className={`font-mono text-[12px] leading-6 ${dim ? 'text-muted' : 'text-signal'
        }`}
    >
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[6px] h-[12px] bg-signal/60 ml-0.5 align-middle" />
      )}
    </div>
  )
}

function ChannelLink({ ch, index }: { ch: (typeof channels)[0]; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.a
      href={ch.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group block border border-border hover:border-wire transition-all duration-300 p-5 md:p-6 bg-void hover:bg-surface"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${hovered ? 'bg-signal/80 scale-125' : 'bg-wire'
              }`}
          />
          <span className="font-mono text-[9px] tracking-[0.2em] text-wire">
            CH.{String(index + 1).padStart(2, '0')} / {ch.id}
          </span>
        </div>
        <span
          className={`font-mono text-[10px] transition-colors duration-300 ${hovered ? 'text-signal' : 'text-wire'
            }`}
        >
          ↗
        </span>
      </div>
      <div className="label mb-1">{ch.label}</div>
      <div
        className={`font-mono text-[13px] transition-colors duration-300 ${hovered ? 'text-signal' : 'text-dim'
          }`}
      >
        {ch.value}
      </div>
      {hovered && (
        <div className="mt-2 font-mono text-[9px] text-muted tracking-widest">
          {ch.cmd}
        </div>
      )}
    </motion.a>
  )
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inView = useInView(terminalRef, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding border-t border-border bg-void"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 md:mb-20 gap-6"
        >
          <div>
            <div className="label mb-4">Contact Protocol / COMMS</div>
            <h2
              className="font-display font-bold text-signal leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 7rem)' }}
            >
              Initiate
              <br />
              Contact
            </h2>
          </div>
          <p className="font-sans text-sm text-muted max-w-xs leading-relaxed">
            Whether you have a project, an idea, or just want to
            connect—every message gets a response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
          {/* Terminal panel */}
          <div className="bg-void p-6 md:p-8 data-panel">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 mb-6 pb-5 border-b border-border">
              <div className="flex gap-1.5">
                {['bg-wire', 'bg-wire', 'bg-wire'].map((c, i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <span className="font-mono text-[9px] text-wire tracking-widest ml-2">
                NM-OS TERMINAL — COMMS v1.0
              </span>
            </div>

            {/* Terminal output */}
            <div
              ref={terminalRef}
              className="space-y-1 min-h-[160px]"
            >
              {terminalLines.map((line, i) => (
                <TerminalLine
                  key={i}
                  text={line.text}
                  delay={line.delay}
                  dim={line.dim}
                  inView={inView}
                />
              ))}
            </div>

            {/* Input line */}
            <div className="mt-6 pt-5 border-t border-border flex items-center gap-2">
              <span className="font-mono text-[11px] text-muted">$</span>
              <span className="font-mono text-[11px] text-dim">
                nm-os comms
              </span>
              <span className="cursor-blink" />
            </div>

            {/* System footer */}
            <div className="mt-8 pt-5 border-t border-border">
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Node', value: 'NM-01' },
                  { label: 'Uptime', value: '4+ YRS' },
                  { label: 'Ping', value: '<24H' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="label mb-1">{stat.label}</div>
                    <div className="font-mono text-[11px] text-dim">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Channels */}
          <div className="bg-void">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
              {channels.map((ch, i) => (
                <div key={ch.id} className="bg-void">
                  <ChannelLink ch={ch} index={i} />
                </div>
              ))}
            </div>

            {/* Availability banner */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-px bg-void border border-border p-5 md:p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-signal/70 animate-pulse-slow" />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-dim">
                    Currently Available
                  </span>
                </div>
                <span className="font-mono text-[9px] text-wire">
                  Q3 2024
                </span>
              </div>
              <p className="font-sans text-xs text-muted mt-3 leading-relaxed">
                Taking on new projects — product engineering, immersive
                experiences, and design systems.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <span className="font-mono text-[9px] tracking-[0.2em] text-wire uppercase">
            © 2024 Nithilan M — All Rights Reserved
          </span>
          <div className="flex items-center gap-6">
            <span className="font-mono text-[9px] text-wire">
              NM-OS v3.0.0
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-signal/50 animate-pulse-slow" />
              <span className="font-mono text-[9px] text-wire">
                System Online
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
