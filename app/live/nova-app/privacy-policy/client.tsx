'use client';

import { useState } from 'react';

// Language content
const content = {
  id: {
    metadata: {
      title: "Kebijakan Privasi - Nova App",
      description: "Kebijakan privasi untuk Nova App - Bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda",
      keywords: ["Kebijakan Privasi", "Perlindungan Data", "Nova App"],
    },
    hero: {
      title: "Kebijakan Privasi",
      subtitle: "Untuk Nova App",
      description: "Kami berkomitmen untuk melindungi privasi Anda dan memastikan keamanan data pribadi Anda.",
      lastUpdated: "Terakhir diperbarui: 9 November 2025"
    },
    quickNav: "Navigasi Cepat",
    navigation: [
      { href: '#interpretation', label: 'Definisi' },
      { href: '#collecting', label: 'Pengumpulan Data' },
      { href: '#usage', label: 'Penggunaan Data' },
      { href: '#rights', label: 'Hak Anda' },
      { href: '#security', label: 'Keamanan' },
      { href: '#retention', label: 'Penyimpanan Data' },
      { href: '#children', label: 'Privasi Anak' },
      { href: '#contact', label: 'Hubungi Kami' }
    ],
    sections: {
      introduction: {
        title: "Pendahuluan",
        content: [
          "Kebijakan Privasi ini menjelaskan kebijakan dan prosedur kami mengenai pengumpulan, penggunaan, dan pengungkapan informasi Anda saat Anda menggunakan Layanan Nova App, dan menjelaskan hak privasi Anda serta bagaimana hukum melindungi Anda.",
          "Kami menggunakan Data Pribadi Anda untuk menyediakan dan meningkatkan Layanan. Dengan menggunakan Layanan, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini."
        ]
      },
      interpretation: {
        title: "Interpretasi dan Definisi",
        interpretation: "Kata-kata yang huruf awalnya dikapitalisasi memiliki makna yang didefinisikan dalam kondisi berikut. Definisi berikut akan memiliki makna yang sama regardless of whether they appear in singular or in plural.",
        definitions: [
          { term: "Akun", definition: "Akun unik yang dibuat untuk Anda untuk mengakses Layanan kami atau bagian dari Layanan kami." },
          { term: "Aplikasi", definition: "Mengacu pada Nova App, program perangkat lunak yang disediakan oleh Perusahaan." },
          { term: "Perusahaan", definition: "Mengacu pada Nova App, disebut sebagai \"Perusahaan\", \"Kami\", \"Kami\" atau \"Milik Kami\"." },
          { term: "Data Pribadi", definition: "Informasi apa pun yang berkaitan dengan individu yang diidentifikasi atau dapat diidentifikasi." },
          { term: "Layanan", definition: "Mengacu pada Aplikasi." },
          { term: "Penyedia Layanan", definition: "Setiap orang alami atau hukum yang memproses data atas nama Perusahaan." },
          { term: "Data Penggunaan", definition: "Data yang dikumpulkan secara otomatis, baik dihasilkan oleh penggunaan Layanan atau dari infrastruktur Layanan itu sendiri." },
          { term: "Anda", definition: "Individu yang mengakses atau menggunakan Layanan, atau perusahaan, atau entitas hukum lainnya atas nama individu tersebut mengakses atau menggunakan Layanan." }
        ]
      },
      collecting: {
        title: "Jenis Data yang Dikumpulkan",
        personalData: {
          title: "Data Pribadi",
          intro: "Saat menggunakan Layanan Kami, Kami mungkin meminta Anda untuk memberikan informasi identifikasi pribadi tertentu yang dapat digunakan untuk menghubungi atau mengidentifikasi Anda. Informasi identifikasi pribadi dapat mencakup, tetapi tidak terbatas pada:",
          items: [
            "Alamat email",
            "Nama depan dan nama belakang",
            "Nomor telepon",
            "Alamat, Negara Bagian, Provinsi, Kode Pos/Kode Pos, Kota",
            "Data Penggunaan"
          ]
        },
        usageData: {
          title: "Data Penggunaan",
          intro: "Data Penggunaan dikumpulkan secara otomatis saat menggunakan Layanan. Data Penggunaan dapat mencakup informasi seperti:",
          items: [
            "Alamat IP perangkat",
            "Jenis dan versi browser",
            "Waktu dan tanggal kunjungan halaman",
            "Waktu yang dihabiskan di halaman",
            "Identifier perangkat unik",
            "Data diagnostik lainnya"
          ]
        }
      },
      usage: {
        title: "Penggunaan Data Pribadi Anda",
        intro: "Perusahaan dapat menggunakan Data Pribadi untuk tujuan berikut:",
        items: [
          "Untuk menyediakan dan memelihara Layanan kami, termasuk untuk memantau penggunaan Layanan kami.",
          "Untuk mengelola Akun Anda: untuk mengelola pendaftaran Anda sebagai pengguna Layanan.",
          "Untuk kinerja kontrak: pengembangan, kepatuhan dan pelaksanaan kontrak pembelian untuk produk, barang atau layanan yang telah Anda beli atau kontrak lainnya dengan Kami melalui Layanan.",
          "Untuk memberikan Anda berita, penawaran khusus, dan informasi umum tentang barang, layanan, dan acara lainnya yang Kami tawarkan yang mirip dengan yang telah Anda beli atau tanyakan kecuali Anda memilih untuk tidak menerima informasi tersebut.",
          "Untuk mengelola permintaan Anda: Untuk menangani dan mengelola permintaan Anda kepada Kami.",
          "Untuk transfer bisnis: Kami dapat menggunakan informasi Anda untuk mengevaluasi atau melakukan merger, divestasi, restrukturisasi, reorganisasi, pembubaran, atau penjualan atau transfer lainnya dari sebagian atau seluruh aset Kami, baik sebagai perusahaan yang beroperasi atau sebagai bagian dari kebangkrutan, likuidasi, atau proses serupa, di mana Data Pribadi yang dimiliki Kami tentang pengguna Layanan kami termasuk dalam aset yang ditransfer.",
          "Untuk tujuan lainnya: Kami dapat menggunakan informasi Anda untuk tujuan lain, seperti analisis data, mengidentifikasi tren penggunaan, menentukan efektivitas kampanye promosi Kami dan untuk mengevaluasi dan meningkatkan Layanan, produk, layanan, pemasaran, dan pengalaman Anda."
        ]
      },
      security: {
        title: "Keamanan Data Pribadi Anda",
        content: "Keamanan Data Pribadi Anda penting bagi Kami, tetapi ingat bahwa tidak ada metode transmisi melalui Internet, atau metode penyimpanan elektronik yang 100% aman. Meskipun Kami berusaha untuk menggunakan cara yang wajar secara komersial untuk melindungi Data Pribadi Anda, Kami tidak dapat menjamin keamanan absolutnya."
      },
      retention: {
        title: "Penyimpanan Data Pribadi Anda",
        content: "Perusahaan akan menyimpan Data Pribadi Anda hanya selama diperlukan untuk tujuan yang dijelaskan dalam Kebijakan Privasi ini. Kami akan menyimpan dan menggunakan Data Pribadi Anda sejauh diperlukan untuk mematuhi kewajiban hukum kami, menyelesaikan sengketa, dan menegakkan perjanjian dan kebijakan hukum kami."
      },
      rights: {
        title: "Hak Anda",
        content: [
          "Anda memiliki hak untuk menghapus atau meminta Kami membantu menghapus Data Pribadi yang telah Kami kumpulkan tentang Anda.",
          "Anda dapat memperbarui, mengamandemen, atau menghapus informasi Anda kapan saja dengan masuk ke Akun Anda, jika Anda memilikinya, dan mengunjungi bagian pengaturan akun yang memungkinkan Anda mengelola informasi pribadi Anda. Anda juga dapat menghubungi Kami untuk meminta akses, koreksi, atau penghapusan informasi pribadi apa pun yang telah Anda berikan kepada Kami."
        ]
      },
      children: {
        title: "Privasi Anak-Anak",
        content: "Layanan Kami tidak ditujukan untuk siapa pun di bawah usia 13 tahun. Kami tidak sengaja mengumpulkan informasi identifikasi pribadi dari siapa pun di bawah usia 13 tahun. Jika Kami mengetahui bahwa Kami telah mengumpulkan Data Pribadi dari siapa pun di bawah usia 13 tahun tanpa verifikasi persetujuan orang tua, Kami mengambil langkah-langkah untuk menghapus informasi tersebut dari server Kami."
      },
      changes: {
        title: "Perubahan pada Kebijakan Privasi Ini",
        content: "Kami dapat memperbarui Kebijakan Privasi Kami dari waktu ke waktu. Kami akan memberi tahu Anda tentang perubahan apa pun dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal \"Terakhir diperbarui\" di bagian atas Kebijakan Privasi ini. Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk perubahan apa pun."
      },
      contact: {
        title: "Hubungi Kami",
        intro: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, Anda dapat menghubungi kami:",
        email: "privacy@novaardiansyah.id",
        website: "novaardiansyah.id",
        phone: "+62 8226 1111 084"
      }
    },
    footer: {
      copyright: "© 2025 Nova Ardiansyah. All rights reserved.",
      description: "Kebijakan Privasi ini adalah bagian dari komitmen kami pada transparansi dan privasi pengguna."
    }
  },
  en: {
    metadata: {
      title: "Privacy Policy - Nova App",
      description: "Privacy policy for Nova App - How we collect, use, and protect your information",
      keywords: ["Privacy Policy", "Data Protection", "Nova App"],
    },
    hero: {
      title: "Privacy Policy",
      subtitle: "For Nova App",
      description: "We are committed to protecting your privacy and ensuring the security of your personal data.",
      lastUpdated: "Last updated: November 9, 2025"
    },
    quickNav: "Quick Navigation",
    navigation: [
      { href: '#interpretation', label: 'Definitions' },
      { href: '#collecting', label: 'Data Collection' },
      { href: '#usage', label: 'Data Usage' },
      { href: '#rights', label: 'Your Rights' },
      { href: '#security', label: 'Security' },
      { href: '#retention', label: 'Data Retention' },
      { href: '#children', label: "Children's Privacy" },
      { href: '#contact', label: 'Contact Us' }
    ],
    sections: {
      introduction: {
        title: "Introduction",
        content: [
          "This Privacy Policy describes Our policies and procedures on the collection, use, and disclosure of Your information when You use the Nova App Service, and explains Your privacy rights and how the law protects You.",
          "We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
        ]
      },
      interpretation: {
        title: "Interpretation and Definitions",
        interpretation: "The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
        definitions: [
          { term: "Account", definition: "A unique account created for You to access our Service or parts of our Service." },
          { term: "Application", definition: "Refers to Nova App, the software program provided by the Company." },
          { term: "Company", definition: "Refers to Nova App, referred to as either \"the Company\", \"We\", \"Us\" or \"Our\"." },
          { term: "Personal Data", definition: "Any information that relates to an identified or identifiable individual." },
          { term: "Service", definition: "Refers to the Application." },
          { term: "Service Provider", definition: "Any natural or legal person who processes the data on behalf of the Company." },
          { term: "Usage Data", definition: "Data collected automatically, either generated by the use of the Service or from the Service infrastructure itself." },
          { term: "You", definition: "The individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service." }
        ]
      },
      collecting: {
        title: "Types of Data Collected",
        personalData: {
          title: "Personal Data",
          intro: "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
          items: [
            "Email address",
            "First name and last name",
            "Phone number",
            "Address, State, Province, ZIP/Postal code, City",
            "Usage Data"
          ]
        },
        usageData: {
          title: "Usage Data",
          intro: "Usage Data is collected automatically when using the Service. Usage Data may include information such as:",
          items: [
            "Device's IP address",
            "Browser type and version",
            "Pages visit time and date",
            "Time spent on pages",
            "Unique device identifiers",
            "Other diagnostic data"
          ]
        }
      },
      usage: {
        title: "Use of Your Personal Data",
        intro: "The Company may use Personal Data for the following purposes:",
        items: [
          "To provide and maintain our Service, including to monitor the usage of our Service.",
          "To manage Your Account: to manage Your registration as a user of the Service.",
          "For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
          "To provide You with news, special offers, and general information about other goods, services and events which We offer that are similar to those that you have already purchased or inquired about unless You have opted not to receive such information.",
          "To manage Your requests: To attend and manage Your requests to Us.",
          "For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
          "For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience."
        ]
      },
      security: {
        title: "Security of Your Personal Data",
        content: "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security."
      },
      retention: {
        title: "Retention of Your Personal Data",
        content: "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies."
      },
      rights: {
        title: "Your Rights",
        content: [
          "You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.",
          "You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us."
        ]
      },
      children: {
        title: "Children's Privacy",
        content: "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers."
      },
      changes: {
        title: "Changes to this Privacy Policy",
        content: "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes."
      },
      contact: {
        title: "Contact Us",
        intro: "If you have any questions about this Privacy Policy, You can contact us:",
        email: "privacy@novaardiansyah.id",
        website: "novaardiansyah.id",
        phone: "+62 8226 1111 084"
      }
    },
    footer: {
      copyright: "© 2025 Nova Ardiansyah. All rights reserved.",
      description: "This Privacy Policy is part of our commitment to transparency and user privacy."
    }
  }
};

export function PrivacyPolicyClient() {
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${language === 'id'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                >
                  🇮🇩 ID
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${language === 'en'
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

              {/* Interpretation and Definitions */}
              <section className="mb-12 scroll-mt-24" id="interpretation">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.interpretation.title}</h2>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{language === 'id' ? 'Interpretasi' : 'Interpretation'}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-justify">
                  {t.sections.interpretation.interpretation}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{language === 'id' ? 'Definisi' : 'Definitions'}</h3>
                <div className="space-y-4">
                  {t.sections.interpretation.definitions.map((item: any, index: number) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{item.term}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed text-justify">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Types of Data Collected */}
              <section className="mb-12 scroll-mt-24" id="collecting">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.collecting.title}</h2>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.sections.collecting.personalData.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  {t.sections.collecting.personalData.intro}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  {t.sections.collecting.personalData.items.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">{t.sections.collecting.usageData.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  {t.sections.collecting.usageData.intro}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {t.sections.collecting.usageData.items.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Use of Personal Data */}
              <section className="mb-12 scroll-mt-24" id="usage">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.usage.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                  {t.sections.usage.intro}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 text-justify">
                  {t.sections.usage.items.map((item: any, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </section>

              {/* Security */}
              <section className="mb-12 scroll-mt-24" id="security">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.security.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.security.content}
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-12 scroll-mt-24" id="retention">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.retention.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.retention.content}
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12 scroll-mt-24" id="rights">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.rights.title}</h2>
                {t.sections.rights.content.map((paragraph: any, index: number) => (
                  <p key={index} className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-justify">
                    {paragraph}
                  </p>
                ))}
              </section>

              {/* Children's Privacy */}
              <section className="mb-12 scroll-mt-24" id="children">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.children.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.children.content}
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t.sections.changes.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                  {t.sections.changes.content}
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
                      href={`mailto:${t.sections.contact.email}?subject=${language === 'id' ? 'Pertanyaan%20Tentang%20Kebijakan%20Privasi%20Nova%20App' : 'Question%20About%20Nova%20App%20Privacy%20Policy'}`}
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
                      href={`https://api.whatsapp.com/send/?phone=6282261111084&text=${language === 'id' ? 'Hai+Nova%2C+saya+memiliki+pertanyaan+tentang+Kebijakan+Privasi+untuk+Nova+App.+Bisakah+Anda+memberikan+penjelasan+untuk+saya%3F' : 'Hi+Nova%2C+I+have+a+question+about+the+Privacy+Policy+for+Nova+App.+Could+you+please+clarify+some+details+for+me%3F'}&type=phone_number&app_absent=0`}
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