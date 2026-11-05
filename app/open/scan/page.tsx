import type { Metadata } from 'next'
import { OpenPage } from '../open-page'

export const metadata: Metadata = {
  title: 'Scan a receipt with Trevvy',
  robots: { index: false },
}

export default function Page() {
  return <OpenPage action="scan" />
}
