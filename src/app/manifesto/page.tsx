import Link from 'next/link';

const axioms = [
  {
    title: 'The peer group is the curriculum.',
    body: 'Who your child grows up alongside determines more about who they become than what they are taught.',
  },
  {
    title: 'Geography is optional.',
    body: 'The village is not a place. It is a network of families with aligned values who choose each other deliberately.',
  },
  {
    title: 'The parent with skin in the game is the safest bet.',
    body: 'No institution has more interest in your child\u2019s outcome than you do.',
  },
  {
    title: 'The default path is the riskiest path.',
    body: 'Sending your child to a system designed for 1850 is not the conservative choice. It is the most aggressive gamble you can make with their future.',
  },
  {
    title: 'The future belongs to the globally fluent.',
    body: 'The child who has lived in three countries, learned two languages, and navigated genuinely different cultures has an advantage that no credential can replicate.',
  },
];

const comparison = [
  ['Credentials signal competence', 'Results signal competence'],
  ['Geography determines education', 'The village travels with you'],
  ['Compliance is preparation', 'Agency is preparation'],
  ['The institution knows best', 'The parent has skin in the game'],
  ['Stability means staying put', 'Stability is internal, not geographic'],
  ['Childhood is preparation for work', 'Childhood is the work'],
  ['The peer group is assigned', 'The peer group is chosen'],
  ['Risk is deviation from the norm', 'Risk is the default path'],
  ['Success means a good job', 'Success means a full life'],
  ['Knowledge is the product', 'Judgment is the product'],
];

const sectionLabel = {
  fontFamily: "'JetBrains Mono', monospace" as const,
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.15em',
  color: '#999999',
  marginBottom: '32px',
};

const proseStyle = {
  fontSize: '17px',
  color: '#6B6B6B',
  lineHeight: 1.8,
  maxWidth: '680px',
};

export default function ManifestoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: '#F5F0EB', paddingTop: '64px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 24px 80px' }}>
          <p style={sectionLabel}>Manifesto</p>
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(32px, 5vw, 60px)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.1,
            maxWidth: '800px',
            marginBottom: '40px',
          }}>
            The school system was not built for your child. It was built for the state.
          </h1>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '12px',
            color: '#999999',
            letterSpacing: '0.05em',
          }}>
            Your child is not a resource to be allocated. They are a human being to be developed.
          </p>
        </div>
      </section>

      {/* The Thesis */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '120px 0', borderTop: '1px solid #D4CFC8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabel}>The Thesis</p>
          <div style={proseStyle}>
            <p style={{ marginBottom: '24px' }}>
              The school system is not broken. It is working exactly as designed. The problem is that it was designed for a world that ended fifty years ago.
            </p>
            <p style={{ marginBottom: '24px' }}>
              In 1850, the Prussian state invented compulsory education. The goal was not to produce curious humans. It was to produce obedient soldiers and reliable factory workers — people who would show up on time, follow instructions, and not ask too many questions. The system was extraordinarily successful. It spread across the world. And it remains, structurally unchanged, in almost every country on earth today.
            </p>
            <p style={{ marginBottom: '24px' }}>
              Germany — the country that invented it — still makes homeschooling illegal. Parents who refuse have been fined, imprisoned, had their children forcibly removed. This is not a historical footnote. It is happening now. It tells you everything you need to know about who the system was built to serve.
            </p>
            <p style={{ marginBottom: '24px' }}>
              It was not built for your child. It was built for the state.
            </p>
            <p>
              And yet — almost every parent who sends their child to school will tell you privately that they hated it. That their child hates it. That they sit in rooms for eight hours a day memorising things they will never use, ranked against peers by metrics that have nothing to do with who they will become. The system produces anxiety, conformity, and a deep distrust of learning itself. We all know this. And we keep doing it — because the alternative feels more frightening than the known failure.
            </p>
          </div>
        </div>
      </section>

      {/* The Future */}
      <section style={{ backgroundColor: '#1A1A1A', color: '#FAFAF8', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={{ ...sectionLabel, color: '#BFFF00' }}>What Remains When AI Arrives</p>
          <div style={{ ...proseStyle, color: 'rgba(255,255,255,0.55)' }}>
            <p style={{ marginBottom: '24px' }}>
              In five years, every piece of knowledge that can be retrieved will be retrieved instantly by a machine. Every skill that can be codified will be automated. The credentials that currently signal competence will signal increasingly little.
            </p>
            <p style={{ marginBottom: '24px' }}>
              What remains when AI commoditises knowledge? Judgment under uncertainty. Relationships at depth. Cultural fluency. The builder instinct. Sovereignty — a stable sense of self that does not depend on external validation.
            </p>
            <p style={{ marginBottom: '24px' }}>
              None of these appear on a school report card. All of them will determine your child&apos;s life.
            </p>
            <p>
              They are not taught in school. They are built in childhood — through the people you grow up alongside, the places you learn to navigate, the problems you are trusted to solve. The peer group is the curriculum. The village is the education.
            </p>
          </div>
        </div>
      </section>

      {/* The Village */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabel}>The Village</p>
          <div style={proseStyle}>
            <p style={{ marginBottom: '24px' }}>
              It takes a village to raise a child. Everyone knows this. Nobody built it for families who move.
            </p>
            <p style={{ marginBottom: '24px' }}>
              The traditional village was not a metaphor. It was a technology — a dense network of relationships, accountability structures, and shared knowledge that surrounded a child from birth and shaped them without any single person having to carry the whole weight.
            </p>
            <p style={{ marginBottom: '24px' }}>
              The globally mobile family has no village. They move between cities, countries, time zones. Their children make friends and lose them. They build community and then leave it.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We are building the village that travels. Not one place — a distributed, global network of the best learning experiences on earth, indexed and searchable, rated by real families, accessible wherever you are.
            </p>
            <p>
              Forest schools and STEAM labs and surf camps and language immersions and learning pods. The infrastructure for a childhood that matches the life you are already living.
            </p>
          </div>
        </div>
      </section>

      {/* Five Axioms */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '120px 0', borderTop: '1px solid #D4CFC8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabel}>Five Axioms</p>
          <div style={{ maxWidth: '680px' }}>
            {axioms.map((axiom, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '24px',
                paddingBottom: '40px',
                marginBottom: '40px',
                borderBottom: i < axioms.length - 1 ? '1px solid #D4CFC8' : 'none',
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#BFFF00',
                  flexShrink: 0,
                  paddingTop: '4px',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '22px',
                    fontWeight: 400,
                    color: '#1A1A1A',
                    marginBottom: '12px',
                    lineHeight: 1.3,
                  }}>
                    {axiom.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: '#6B6B6B', lineHeight: 1.7 }}>
                    {axiom.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old vs New */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabel}>Old vs New</p>
          <div style={{ maxWidth: '800px' }}>
            {/* Headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              paddingBottom: '16px',
              marginBottom: '0',
              borderBottom: '2px solid #1A1A1A',
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#999999',
              }}>
                The Old Model
              </span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '10px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#1A1A1A',
              }}>
                The New Family
              </span>
            </div>

            {/* Rows */}
            {comparison.map(([old, neu], i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '24px',
                padding: '16px 0',
                borderBottom: '1px solid #D4CFC8',
              }}>
                <span style={{ fontSize: '14px', color: '#999999' }}>
                  {old}
                </span>
                <span style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>
                  {neu}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ backgroundColor: '#FAFAF8', padding: '120px 0', borderTop: '1px solid #D4CFC8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <p style={sectionLabel}>Who We Are</p>
          <div style={proseStyle}>
            <p style={{ marginBottom: '24px' }}>
              We are not hippies. We are not dropouts. We are not rejecting modernity. We are more embedded in it than almost anyone.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We moved to Portugal not to escape but to optimise. To find the conditions — cost, climate, community, quality of life — that allow us to do our best work and give our children the richest possible environment simultaneously. We are not sacrificing career for family or family for career. We refused to accept that as the only choice.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We work in tech, run companies, or operate as independent professionals. We have already rejected the default career path. The school system is simply the next default we are examining.
            </p>
            <p>
              We are high-agency by definition. We do not wait for institutions to solve our problems. We build the solutions ourselves, or find the people who have.
            </p>
          </div>
        </div>
      </section>

      {/* Full Manifesto Closing */}
      <section style={{ backgroundColor: '#1A1A1A', color: '#FAFAF8', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ ...proseStyle, color: 'rgba(255,255,255,0.55)' }}>
            <p style={{ marginBottom: '24px' }}>
              We left the countries that told us otherwise. We moved across borders, changed languages, restructured our lives — not to escape, but to build something better. We are not dropouts. We are founders. We applied the same logic to our families that we applied to our companies: the default path is rarely the optimal one, and the people with the most skin in the game make the best decisions.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We know what is coming. We work in the industries building it. AI will commoditise knowledge faster than any curriculum can adapt. What remains — what has always remained, but that we forgot to build — is judgment, relationships, cultural fluency, and the unshakeable internal stability of a person who knows who they are and what they are for.
            </p>
            <p style={{ marginBottom: '24px' }}>
              These are not taught in school. They are built in childhood. By the village you grow up in. By the problems you are trusted to solve. By the people who take you seriously before you have earned it. By the experience of belonging everywhere because you were never confined to one place.
            </p>
            <p style={{ marginBottom: '24px' }}>
              We are building that village. Distributed, global, and deliberately chosen. A network of the best learning experiences on earth — indexed, rated by real families, and accessible wherever you land. Not one school. Not one country. A new kind of infrastructure for a new kind of childhood.
            </p>
            <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.75)' }}>
              This is not worldschooling. Worldschooling is what people called it before someone built the infrastructure.
            </p>
            <p style={{ marginBottom: '24px', color: 'rgba(255,255,255,0.75)' }}>
              We are The New Family. We are the parents who refused to choose between building the future and raising the people who will live in it. We are the village for global families.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section style={{ backgroundColor: '#F5F0EB', padding: '120px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1.2,
            maxWidth: '700px',
            margin: '0 auto 48px',
          }}>
            You already live in the future. Raise your kids there.
          </h2>
          <Link
            href="/destinations"
            style={{
              display: 'inline-block',
              padding: '16px 40px',
              backgroundColor: '#1A1A1A',
              color: '#BFFF00',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              textDecoration: 'none',
            }}
          >
            Explore the Directory
          </Link>
        </div>
      </section>
    </>
  );
}
