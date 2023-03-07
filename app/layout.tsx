import './globals.css'

export const metadata = {
  title: 'chatGPTNext',
  description:
    'A demo app to show the easy integration between Next and OpenAI`s chatGPT AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
