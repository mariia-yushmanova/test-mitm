import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const styrene = localFont({
  src: [
    {
      path: './fonts/StyreneAWeb-Bold.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/StyreneAWeb-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/StyreneAWeb-Thin.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Специализированные дисциплины',
  description: 'Тестовое задание',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={clsx(styrene.className)}>{children}</body>
    </html>
  )
}
