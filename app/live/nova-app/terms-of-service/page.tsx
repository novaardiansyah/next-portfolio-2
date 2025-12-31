import { Metadata } from 'next';
import { TermsOfServiceClient } from './client';

// Generate metadata for the page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Syarat dan Ketentuan - Nova App',
    description: 'Syarat dan ketentuan untuk Nova App - Aturan penggunaan aplikasi keuangan pribadi',
    keywords: ['Syarat dan Ketentuan', 'Aturan Penggunaan', 'Nova App'],
    openGraph: {
      title: 'Syarat dan Ketentuan - Nova App',
      description: 'Syarat dan ketentuan untuk Nova App - Aturan penggunaan aplikasi keuangan pribadi',
      type: 'website',
      url: 'https://novaardiansyah.id/live/nova-app/terms-of-service',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Syarat dan Ketentuan - Nova App',
      description: 'Syarat dan ketentuan untuk Nova App - Aturan penggunaan aplikasi keuangan pribadi',
    },
    alternates: {
      canonical: 'https://novaardiansyah.id/live/nova-app/terms-of-service',
    },
  };
}

export default function TermsOfServicePage() {
  return <TermsOfServiceClient />;
}