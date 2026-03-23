'use client'

const testimonials = [
  {
    quote:
      "Beyond their technical proficiency, Sweta possesses a rare, innate empathy that transforms complex research into deeply human experiences. They were a standout, consistently balancing disciplined design process with a heart for the end-user.",
    name: 'Neil Harner',
    role: 'Design Director',
    company: 'Inverse Paradox',
    relation: 'Supervisor',
  },
  {
    quote:
      "Sweta consistently demonstrated strong engagement, initiative, and a deep commitment to mastering the full design process. Her standout work included a Wizard of Oz experiment that simulated autonomous monitoring — so effective that I've since shared it as an example with other students. Sweta takes on complex challenges with confidence and care, and I highly recommend her to any design team seeking a designer who is both strategic and technically strong.",
    name: 'Mike Begley',
    role: 'Senior Experience Consultant',
    company: 'EPAM Systems',
    relation: 'Professor',
  },
  {
    quote:
      "She has a knack for quickly understanding client needs and translating them into clear, actionable designs while keeping the team aligned. Her focus, energy, and problem-solving mindset make her a joy to collaborate with. Sweta is also a powerhouse when it comes to innovation — one of the few on the team fully leveraging cutting-edge AI design tools. I would strongly recommend her for any UX or product design role that values creativity, deep understanding, and forward-thinking solutions.",
    name: 'Eswar Uppalapati',
    role: 'Senior Product Designer',
    company: 'Inverse Paradox',
    relation: 'Colleague',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-inner">
        <div className="max-w-xl mb-14">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title mb-4">What others say</h2>
          <p className="section-subtitle">
            Kind words from the people I have had the pleasure of working and learning alongside.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="font-display text-5xl leading-none text-primary mb-5 select-none"
                aria-hidden
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="font-sans text-sm text-text-secondary leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-border mt-8 mb-6" />

              {/* Person */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-sans font-semibold text-sm text-text">{t.name}</p>
                  <p className="font-sans text-xs text-text-muted mt-0.5">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-medium">
                  {t.relation}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
