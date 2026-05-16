import './globals.css'

export const metadata = {
  title: 'Aimvesting - eCommerce Strategy for UK Sellers',
  description: 'Expert audits & strategy for eBay, Amazon, multi-channel, and AI adoption. Scale your business without hiring.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
