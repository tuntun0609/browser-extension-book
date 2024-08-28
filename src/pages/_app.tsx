import './globals.css'

export default function Nextra({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: any
}) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
