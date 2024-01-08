import ChatSection from '@/components/pages/landing-page/ChatSection'
import HeroSection from '@/components/pages/landing-page/HeroSection'
import MoodSection from '@/components/pages/landing-page/MoodSection'
import QuotesSection from '@/components/pages/landing-page/QuotesSection'

export default function Home() {
  return (
    <>
      <HeroSection  
        heading='"Ceritakanlah Pengalaman Keseharianmu Melalui chat Kami, We share Our Hope Here!! "' 
        message='~Hikaru Chat'
      />
      <ChatSection/>
      <QuotesSection/>
      <MoodSection/>
    </>
  )
}
