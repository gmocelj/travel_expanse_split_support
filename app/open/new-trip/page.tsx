import type { Metadata } from 'next'
import { OpenPage } from '../open-page'

export const metadata: Metadata = {
  title: 'Plan a group trip with Trevvy',
  robots: { index: false },
}

export default function Page() {
  return <OpenPage action="newTrip" />
}
