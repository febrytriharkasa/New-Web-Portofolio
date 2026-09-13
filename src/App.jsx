import { lazy, Suspense } from 'react'
import Header from './components/Header'
import MarqueeTicker from './components/MarqueeTicker'
import HomeSection from './components/HomeSection'

const AboutSection = lazy(() => import('./components/AboutSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const SkillsSection = lazy(() => import('./components/SkillsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  return (
    <div className="w-full max-w-[1360px] mx-auto px-grid-margin-mobile md:px-grid-margin-desktop py-space-xl">
      <div className="h-12 bg-surface-container-low rounded-xl animate-pulse" />
      <div className="h-96 bg-surface-container-low rounded-2xl mt-space-lg animate-pulse" />
    </div>
  )
}

export default function App() {
  return (
    <div className="bg-surface font-body-md text-on-surface min-h-screen">
      <Header />
      <main className="w-full pt-20 bg-surface">
        <div className="flex flex-col w-full">
          <MarqueeTicker />
          <HomeSection />
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
            <ProjectsSection />
            <SkillsSection />
            <ContactSection />
          </Suspense>
        </div>
      </main>
      <Suspense fallback={<div className="w-full h-96 bg-surface-container animate-pulse" />}>
        <Footer />
      </Suspense>
    </div>
  )
}
