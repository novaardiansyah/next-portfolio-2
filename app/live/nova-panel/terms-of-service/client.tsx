'use client';

import { useState } from 'react';

// Language content
const content = {
  id: {
    metadata: {
      title: "Syarat dan Ketentuan - Nova Panel",
      description: "Syarat dan ketentuan untuk Nova Panel - Aturan penggunaan aplikasi panel administrasi",
      keywords: ["Syarat dan Ketentuan", "Aturan Penggunaan", "Nova Panel"],
    },
    hero: {
      title: "Syarat dan Ketentuan",
      subtitle: "Untuk Nova Panel",
      description: "Syarat dan ketentuan ini mengatur penggunaan aplikasi Nova Panel dan layanan yang kami sediakan.",
      lastUpdated: "Terakhir diperbarui: 25 November 2025"
    },
    quickNav: "Navigasi Cepat",
    navigation: [
      { href: '#acceptance', label: 'Penerimaan Syarat' },
      { href: '#service', label: 'Deskripsi Layanan' },
      { href: '#obligations', label: 'Kewajiban Pengguna' },
      { href: '#privacy', label: 'Privasi dan Data' },
      { href: '#intellectual', label: 'Hak Kekayaan Intelektual' },
      { href: '#liability', label: 'Batasan Tanggung Jawab' },
      { href: '#third-party', label: 'Layanan Pihak Ketiga' },
      { href: '#termination', label: 'Pembatalan dan Penghentian' },
      { href: '#changes', label: 'Perubahan Syarat' },
      { href: '#governing', label: 'Hukum yang Berlaku' },
      { href: '#contact', label: 'Hubungi Kami' }
    ],
    sections: {
      introduction: {
        title: "Pendahuluan",
        content: [
          "Selamat datang di Nova Panel. Syarat dan ketentuan ini mengatur penggunaan aplikasi panel administrasi kami dan layanan yang kami sediakan.",
          "Dengan mengakses dan menggunakan Nova Panel, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, Anda tidak boleh menggunakan aplikasi kami."
        ]
      },
      acceptance: {
        title: "Penerimaan Syarat",
        content: "Dengan mengakses dan menggunakan Nova Panel, Anda menerima dan setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan syarat dan ketentuan ini, Anda tidak boleh menggunakan aplikasi kami."
      },
      service: {
        title: "Deskripsi Layanan",
        intro: "Nova Panel adalah aplikasi panel administrasi yang membantu pengguna untuk:",
        features: [
          "Mengelola sistem dan aplikasi",
          "Memantau kinerja server",
          "Mengelola pengguna dan peran",
          "Melihat laporan sistem dan analitik",
          "Mengkonfigurasi pengaturan aplikasi"
        ]
      },
      obligations: {
        title: "Kewajiban Pengguna",
        intro: "Sebagai pengguna Nova Panel, Anda setuju untuk:",
        obligations: [
          "Memberikan informasi yang akurat dan lengkap",
          "Menjaga kerahasiaan akun dan kata sandi Anda",
          "Menggunakan aplikasi hanya untuk tujuan yang sah",
          "Tidak melakukan aktivitas yang melanggar hukum",
          "Menghormati hak pengguna lain"
        ]
      },
      privacy: {
        title: "Privasi dan Data",
        content: "Kami mematuhi Kebijakan Privasi kami dalam pengumpulan, penggunaan, dan perlindungan data pribadi Anda. Dengan menggunakan Nova Panel, Anda menyetujui pengumpulan dan penggunaan data Anda sesuai dengan kebijakan privasi kami."
      },
      intellectual: {
        title: "Hak Kekayaan Intelektual",
        content: "Nova Panel dan seluruh kontennya, termasuk namun tidak terbatas pada perangkat lunak, teks, grafik, logo, dan ikon, dilindungi oleh hak cipta dan hukum kekayaan intelektual lainnya. Anda tidak boleh mereproduksi, mendistribusikan, atau membuat karya turunan dari aplikasi kami tanpa izin tertulis."
      },
      liability: {
        title: "Batasan Tanggung Jawab",
        content: "Nova Panel disediakan \"sebagaimana adanya\" tanpa jaminan dalam bentuk apa pun. Kami tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan aplikasi kami."
      },
      thirdparty: {
        title: "Layanan Pihak Ketiga",
        content: "Aplikasi kami mungkin mengandung tautan ke layanan pihak ketiga atau mengintegrasikan layanan pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi atau konten layanan pihak ketiga tersebut."
      },
      termination: {
        title: "Pembatalan dan Penghentian",
        content: "Kami berhak untuk membatalkan atau menghentikan akun Anda kapan saja jika Anda melanggar syarat dan ketentuan ini. Anda juga dapat menghapus akun Anda kapan saja melalui pengaturan aplikasi."
      },
      changes: {
        title: "Perubahan Syarat dan Ketentuan",
        content: "Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan berlaku efektif segera setelah diposting dalam aplikasi. Penggunaan berkelanjutan Anda dari aplikasi setelah perubahan menandakan penerimaan Anda terhadap syarat dan ketentuan yang diperbarui."
      },
      governing: {
        title: "Hukum yang Berlaku",
        content: "Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku. Setiap sengketa yang timbul dari atau sehubungan dengan syarat dan ketentuan ini akan diselesaikan melalui arbitrase yang mengikat."
      },
      contact: {
        title: "Hubungi Kami",
        intro: "Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:",
        email: "terms@novaardiansyah.my.id",
        website: "novaardiansyah.my.id",
        phone: "+62 8950 666 8480"
      }
    },
    footer: {
      copyright: "© 2025 Nova Ardiansyah. All rights reserved.",
      description: "Syarat dan Ketentuan ini adalah bagian dari komitmen kami pada transparansi dan kepercayaan pengguna."
    }
  },
  en: {
    metadata: {
      title: "Terms of Service - Nova Panel",
      description: "Terms of service for Nova Panel - Rules for using the administration panel application",
      keywords: ["Terms of Service", "Terms of Use", "Nova Panel"],
    },
    hero: {
      title: "Terms of Service",
      subtitle: "For Nova Panel",
      description: "These terms and conditions govern the use of the Nova Panel application and the services we provide.",
      lastUpdated: "Last updated: November 25, 2025"
    },
    quickNav: "Quick Navigation",
    navigation: [
      { href: '#acceptance', label: 'Acceptance of Terms' },
      { href: '#service', label: 'Service Description' },
      { href: '#obligations', label: 'User Obligations' },
      { href: '#privacy', label: 'Privacy and Data' },
      { href: '#intellectual', label: 'Intellectual Property Rights' },
      { href: '#liability', label: 'Limitation of Liability' },
      { href: '#third-party', label: 'Third-Party Services' },
      { href: '#termination', label: 'Cancellation and Termination' },
      { href: '#changes', label: 'Changes to Terms' },
      { href: '#governing', label: 'Governing Law' },
      { href: '#contact', label: 'Contact Us' }
    ],
    sections: {
      introduction: {
        title: "Introduction",
        content: [
          "Welcome to Nova Panel. These terms and conditions govern the use of our administration panel application and the services we provide.",
          "By accessing and using Nova Panel, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you must not use our application."
        ]
      },
      acceptance: {
        title: "Acceptance of Terms",
        content: "By accessing and using Nova Panel, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms and conditions, you must not use our application."
      },
      service: {
        title: "Service Description",
        intro: "Nova Panel is an administration panel application that helps users to:",
        features: [
          "Manage systems and applications",
          "Monitor server performance",
          "Manage users and roles",
          "View system reports and analytics",
          "Configure application settings"
        ]
      },
      obligations: {
        title: "User Obligations",
        intro: "As a Nova Panel user, you agree to:",
        obligations: [
          "Provide accurate and complete information",
          "Maintain the confidentiality of your account and password",
          "Use the application only for legitimate purposes",
          "Not engage in activities that violate the law",
          "Respect the rights of other users"
        ]
      },
      privacy: {
        title: "Privacy and Data",
        content: "We comply with our Privacy Policy in the collection, use, and protection of your personal data. By using Nova Panel, you consent to the collection and use of your data in accordance with our privacy policy."
      },
      intellectual: {
        title: "Intellectual Property Rights",
        content: "Nova Panel and all its content, including but not limited to software, text, graphics, logos, and icons, are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works of our application without written permission."
      },
      liability: {
        title: "Limitation of Liability",
        content: "Nova Panel is provided \"as is\" without any warranties of any kind. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our application."
      },
      thirdparty: {
        title: "Third-Party Services",
        content: "Our application may contain links to third-party services or integrate third-party services. We are not responsible for the privacy practices or content of such third-party services."
      },
      termination: {
        title: "Cancellation and Termination",
        content: "We reserve the right to cancel or terminate your account at any time if you violate these terms and conditions. You may also delete your account at any time through the application settings."
      },
      changes: {
        title: "Changes to Terms and Conditions",
        content: "We reserve the right to change these terms and conditions at any time. Changes will be effective immediately upon posting in the application. Your continued use of the application after changes signifies your acceptance of the updated terms and conditions."
      },
      governing: {
        title: "Governing Law",
        content: "These terms and conditions are governed by and construed in accordance with applicable law. Any dispute arising from or in connection with these terms and conditions will be resolved through binding arbitration."
      },
      contact: {
        title: "Contact Us",
        intro: "If you have any questions about these terms and conditions, please contact us:",
        email: "terms@novaardiansyah.my.id",
        website: "novaardiansyah.my.id",
        phone: "+62 8950 666 8480"
      }
    },
    footer: {
      copyright: "© 2025 Nova Ardiansyah. All rights reserved.",
      description: "These Terms and Conditions are part of our commitment to transparency and user trust."
    }
  }
};

export function TermsOfServiceClient() {
  const [language, setLanguage] = useState<'id' | 'en'>('id');
  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.hero.title}</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 mb-4">{t.hero.subtitle}</h2>
            <p className="text-xl text-slate-200 max-w-xl mx-auto">
              {t.hero.description}
            </p>
            <div className="mt-6 inline-flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {t.hero.lastUpdated}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">

          {/* Quick Navigation with Language Switcher */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{t.quickNav}</h2>

              {/* Language Switcher */}
              <div className="bg-white dark:bg-gray-700 rounded-full p-1 inline-flex shadow-lg">
                <button
                  onClick={() => setLanguage('id')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    language === 'id'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    language === 'en'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                  }`}
                >
                  🇬🇧 EN
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {t.navigation.map((item: any) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm py-1 px-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Main Content - Single Legal Document Card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-gray dark:prose-invert max-w-none legal-document">

              {/* Introduction */}
              <section className="mb-12 scroll-mt-24" id="introduction">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.introduction.title}</h2>
                {t.sections.introduction.content.map((paragraph: any, index: number) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Acceptance of Terms */}
              <section className="mb-12 scroll-mt-24" id="acceptance">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.acceptance.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.acceptance.content}
                </p>
              </section>

              {/* Service Description */}
              <section className="mb-12 scroll-mt-24" id="service">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  {t.sections.service.intro}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {t.sections.service.features.map((feature: any, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </section>

              {/* User Obligations */}
              <section className="mb-12 scroll-mt-24" id="obligations">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.obligations.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  {t.sections.obligations.intro}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {t.sections.obligations.obligations.map((obligation: any, index: number) => (
                    <li key={index}>{obligation}</li>
                  ))}
                </ul>
              </section>

              {/* Privacy and Data */}
              <section className="mb-12 scroll-mt-24" id="privacy">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.privacy.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.privacy.content}
                </p>
              </section>

              {/* Intellectual Property Rights */}
              <section className="mb-12 scroll-mt-24" id="intellectual">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.intellectual.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.intellectual.content}
                </p>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12 scroll-mt-24" id="liability">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.liability.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.liability.content}
                </p>
              </section>

              {/* Third-Party Services */}
              <section className="mb-12 scroll-mt-24" id="third-party">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.thirdparty.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.thirdparty.content}
                </p>
              </section>

              {/* Cancellation and Termination */}
              <section className="mb-12 scroll-mt-24" id="termination">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.termination.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.termination.content}
                </p>
              </section>

              {/* Changes to Terms and Conditions */}
              <section className="mb-12 scroll-mt-24" id="changes">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.changes.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.changes.content}
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12 scroll-mt-24" id="governing">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.governing.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.governing.content}
                </p>
              </section>

              {/* Contact Us */}
              <section className="scroll-mt-24" id="contact">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.contact.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  {t.sections.contact.intro}
                </p>

                <div className="space-y-3">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-gray-200">{language === 'id' ? 'Email:' : 'Email:'}</strong>{" "}
                    <a
                      href={`mailto:${t.sections.contact.email}?subject=${language === 'id' ? 'Pertanyaan%20Tentang%20Syarat%20dan%20Ketentuan%20Nova%20Panel' : 'Question%20About%20Nova%20Panel%20Terms%20of%20Service'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {t.sections.contact.email}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-gray-200">{language === 'id' ? 'Website:' : 'Website:'}</strong>{" "}
                    <a href={`https://${t.sections.contact.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                      {t.sections.contact.website}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong className="text-gray-800 dark:text-gray-200">{language === 'id' ? 'Telepon:' : 'Phone:'}</strong>{" "}
                    <a
                      href={`https://api.whatsapp.com/send/?phone=6289506668480&text=${language === 'id' ? 'Hai+Nova%2C+saya+memiliki+pertanyaan+tentang+Syarat+dan+Ketentuan+untuk+Nova+Panel.+Bisakah+Anda+memberikan+penjelasan+untuk+saya%3F' : 'Hi+Nova%2C+I+have+a+question+about+the+Terms+of+Service+for+Nova+Panel.+Could+you+please+clarify+some+details+for+me%3F'}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {t.sections.contact.phone}
                    </a>
                  </p>
                </div>
              </section>

            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white p-6 rounded-xl">
              <p className="text-sm mb-2">{t.footer.copyright}</p>
              <p className="text-slate-300 text-xs">
                {t.footer.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}