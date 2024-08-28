import dayjs from 'dayjs'
import { type DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { Logo } from './components/logo'
import { Main } from './components/main'
import { BackToTop } from './components/scroll-to-top'

const themeConfig: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/tuntun0609/browser-extension-book',
  },
  feedback: {
    content: null,
  },
  main: Main,
  gitTimestamp: ({ timestamp }: { timestamp: Date }) =>
    `最后更新于 ${dayjs(timestamp).format('YYYY-MM-DD HH:mm')}`,
  sidebar: {
    toggleButton: true,
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          Tuntun
        </a>
        .
      </span>
    ),
  },
  search: {
    placeholder: '搜索文档...',
  },
  themeSwitch: {
    useOptions() {
      return {
        light: '明亮',
        dark: '暗黑',
        system: '系统',
      }
    },
  },
  toc: {
    title: '目录',
    backToTop: false,
    extraContent: () => <BackToTop />,
  },
  editLink: {
    text: '在 GitHub 上编辑此页 →',
    component: ({ children, className, filePath }) => {
      return (
        <a
          className={className}
          target="_blank"
          href={`https://www.github.com/tuntun0609/browser-extension-book/edit/main/${filePath}`}>
          {children}
        </a>
      )
    },
  },
}

export default themeConfig
