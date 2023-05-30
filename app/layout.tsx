'use client'

import '#/styles/globals.css'
import { Header } from '@/components/Header'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import AppContextProvider from '@/context/AppContextProvider'
import { IRootLayout } from './types'

export default function RootLayout({ children }: IRootLayout) {
  const queryClient = new QueryClient()

  return (
    <html>
      <title>Daunted | CoinGecko Market Pairs (USD)</title>
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content='Max Silva' />
      <meta name='description' content='A test for daunted to showcase modern Next.js and Typescript code.' />
      <body className='bg-gray-900 antialiased'>
        <main>
          <Header />
          <AppContextProvider>
            <QueryClientProvider client={queryClient}>
              {children} <ReactQueryDevtools initialIsOpen={true} />
            </QueryClientProvider>
          </AppContextProvider>
        </main>
      </body>
    </html>
  )
}
