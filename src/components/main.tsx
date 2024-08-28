import { useConfig } from 'nextra-theme-docs'
import { ReactNode } from 'react'
import { Comments } from './comments'

export const Main = ({ children }: { children: ReactNode }) => {
  const config = useConfig()
  return (
    <div>
      {children}
      <div>{config.frontMatter.showComment !== false && <Comments />}</div>
    </div>
  )
}
