import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/about/About'
import { Experience } from '@/components/experience/Experience'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'
import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/components/footer/Footer'

export default function Home() {
  return (
    <main className="pt-14">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
