import { Concert_One } from 'next/font/google'
import { Chrome } from 'lucide-react'

const concertOne = Concert_One({ subsets: ['latin'], weight: '400' })

export const Logo = () => {
  return (
    <div className={'text-2xl flex gap-1 items-center ' + concertOne.className}>
      <Chrome />
      浏览器插件开发小册
    </div>
  )
}
