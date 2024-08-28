import { useEffect, useRef } from 'react'

export function Comments() {
  const ref = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const hasScript = document.querySelector(
      'script[src="https://beaudar.lipk.org/client.js"]'
    )
    if (hasScript) {
      return
    }
    const scriptElement = document.createElement('script')
    scriptElement.async = true
    scriptElement.crossOrigin = 'anonymous'
    scriptElement.src = 'https://beaudar.lipk.org/client.js'

    scriptElement.setAttribute('issue-term', 'pathname')
    scriptElement.setAttribute('label', 'comment')
    scriptElement.setAttribute('repo', 'tuntun0609/comment')
    scriptElement.setAttribute('theme', 'github-light')
    scriptElement.setAttribute('crossorigin', 'anonymous')
    scriptElement.setAttribute('async', 'true')
    scriptElement.setAttribute('comment-order', 'desc')
    scriptElement.setAttribute('input-position', 'top')

    ref.current?.appendChild(scriptElement)
  }, [])

  return <div ref={ref} />
}
