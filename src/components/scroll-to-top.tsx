import cn from 'clsx'
import { ArrowRightIcon } from 'nextra/icons'
import type { ReactElement } from 'react'
import { useEffect, useRef } from 'react'

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function BackToTop({ className }: { className?: string }): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    function toggleVisible() {
      const { scrollTop } = document.documentElement
      ref.current?.classList.toggle('opacity-0', scrollTop < 300)
    }

    window.addEventListener('scroll', toggleVisible)
    return () => {
      window.removeEventListener('scroll', toggleVisible)
    }
  }, [])

  return (
    <button
      ref={ref}
      aria-hidden="true"
      onClick={scrollToTop}
      className={cn(
        'flex items-center gap-1.5 transition opacity-0 text-xs font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100',
        className
      )}>
      滚动到顶部
      <ArrowRightIcon className="-rotate-90 w-3.5 h-3.5 border rounded-full border-current" />
    </button>
  )
}
