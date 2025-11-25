import { Metadata } from 'next';
import { PrivacyPolicyClient } from './client';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Kebijakan Privasi - Nova App',
    description: 'Kebijakan privasi untuk Nova App - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda',
    keywords: ['Kebijakan Privasi', 'Perlindungan Data', 'Nova App'],
    openGraph: {
      title: 'Kebijakan Privasi - Nova App',
      description: 'Kebijakan privasi untuk Nova App - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda',
      type: 'website',
      url: 'https://novaardiansyah.my.id/live/nova-app/privacy-policy',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Kebijakan Privasi - Nova App',
      description: 'Kebijakan privasi untuk Nova App - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda',
    },
    alternates: {
      canonical: 'https://novaardiansyah.my.id/live/nova-app/privacy-policy',
    },
  };
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}