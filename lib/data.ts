import {
  Code,
  Database,
  Shield,
  Cloud,
  Cpu,
  Zap,
  GitBranch,
  Server,
  Type,
  Layers,
  FileText,
  Target,
  Heart
} from 'lucide-react'

// Skills data
export const skills = [
  { name: 'React', icon: GitBranch, category: 'Frontend' },
  { name: 'Next.js', icon: Layers, category: 'Frontend' },
  { name: 'TypeScript', icon: Type, category: 'Language' },
  { name: 'Node.js', icon: Server, category: 'Backend' },
  { name: 'Python', icon: FileText, category: 'Language' },
  { name: 'PostgreSQL', icon: Database, category: 'Database' },
  { name: 'Security', icon: Shield, category: 'Cybersecurity' },
  { name: 'Cloud', icon: Cloud, category: 'DevOps' },
  { name: 'AI/LLM', icon: Cpu, category: 'AI' },
  { name: 'Git', icon: GitBranch, category: 'DevOps' },
  { name: 'Performance', icon: Zap, category: 'Frontend' },
  { name: 'Web Dev', icon: Code, category: 'Frontend' }
]

// Values data
export const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Always exploring new technologies and approaches'
  },
  {
    icon: Shield,
    title: 'Quality',
    description: 'Delivering high-quality, maintainable code'
  },
  {
    icon: Heart,
    title: 'Collaboration',
    description: 'Working together to achieve great results'
  }
]

// Experience data
export const experiences = [
  {
    type: 'work' as const,
    title: 'Part-Time Software Developer',
    company: 'Teravisions AI',
    location: 'Remote',
    period: 'September 2025 – Present',
    description: '',
    logo: '/logos/TeraVisions.png',
    achievements: [
      'Actively contributing to the development and maintenance of internal and client-facing AI/ML solutions.',
      'Applying expertise in the full stack (Next.js, React, Node.js/Laravel) to deliver robust and scalable features.',
      'Focusing on integrating front-end design with efficient backend logic for enhanced application performance.'
    ],
    translations: {
      ar: {
        description: '',
        achievements: [
          'المساهمة بنشاط في تطوير وصيانة حلول الذكاء الاصطناعي / تعلم الآلة الداخلية والتي تواجه العملاء.',
          'تطبيق الخبرة في الحزمة الكاملة (Next.js ، React ، Node.js / Laravel) لتقديم ميزات قوية وقابلة للتطوير.',
          'التركيز على دمج تصميم الواجهة الأمامية مع منطق الواجهة الخلفية الفعال لتحسين أداء التطبيق.'
        ]
      },
      tr: {
        description: '',
        achievements: [
          'Dahili ve müşteri odaklı AI/ML çözümlerinin geliştirilmesine ve bakımına aktif olarak katkıda bulunmak.',
          'Sağlam ve ölçeklenebilir özellikler sunmak için tam yığın (Next.js, React, Node.js/Laravel) uzmanlığını uygulamak.',
          'Gelişmiş uygulama performansı için ön uç tasarımını verimli arka uç mantığıyla entegre etmeye odaklanmak.'
        ]
      }
    }
  },
  {
    type: 'work' as const,
    title: 'Self-Employed Real Estate Manager',
    company: 'Independent Tourist Rentals Management',
    location: 'Remote',
    period: 'Late 2023 – Mid 2024',
    description: '',
    logo: '/logos/logoWhite.png',
    achievements: [
      'Managed end-to-end operations for tourist rental properties, overseeing client communication, bookings (Booking.com, Agoda), and guest turnover.',
      'Responsible for financial accountability, including commission management and coordinating cleaning and maintenance staff.',
      'Demonstrated strong client-facing communication, negotiation, and operational management skills.'
    ],
    translations: {
      ar: {
        description: '',
        achievements: [
          'إدارة عمليات شاملة لتأجير العقارات السياحية ، والإشراف على اتصالات العملاء ، والحجوزات (Booking.com ، Agoda) ، ودوران الضيوف.',
          'مسؤول عن المساءلة المالية ، بما في ذلك إدارة العمولات وتنسيق موظفي التنظيف والصيانة.',
          'إظهار مهارات قوية في التواصل مع العملاء والتفاوض والإدارة التشغيلية.'
        ]
      },
      tr: {
        description: '',
        achievements: [
          'Turist kiralama mülkleri için uçtan uca operasyonları yönetti, müşteri iletişimini, rezervasyonları (Booking.com, Agoda) ve misafir devir teslimini denetledi.',
          'Komisyon yönetimi ve temizlik ve bakım personelinin koordinasyonu dahil olmak üzere mali sorumluluktan sorumlu.',
          'Güçlü müşteri odaklı iletişim, müzakere ve operasyonel yönetim becerileri sergiledi.'
        ]
      }
    }
  },
  {
    type: 'work' as const,
    title: 'Inventory & Operations Manager',
    company: 'Kantee Market (Arslan Integrated Solutions Holding Co.)',
    location: 'Turkey',
    period: 'September 2022 – Early 2024',
    description: '',
    logo: '/logos/KanteeMarket.jpg',
    achievements: [
      'Managed all aspects of inventory and finance, including stock intake, counting, cash flow, and financial tracking.',
      'Led the successful transition and implementation of a new Odoo POS system, resulting in improved accounting accuracy and enhanced business efficiency.',
      'Provided comprehensive support across market operations, including delivery logistics and customer service/cashier duties.',
      'Worked full-time during summers and weekends/part-time during the school year, demonstrating exceptional commitment and time management.'
    ],
    translations: {
      ar: {
        description: '',
        achievements: [
          'إدارة جميع جوانب المخزون والتمويل ، بما في ذلك استلام المخزون والعد والتدفق النقدي والتتبع المالي.',
          'قاد الانتقال الناجح وتنفيذ نظام نقاط بيع Odoo جديد ، مما أدى إلى تحسين دقة المحاسبة وتعزيز كفاءة الأعمال.',
          'تقديم دعم شامل عبر عمليات السوق ، بما في ذلك لوجستيات التسليم وخدمة العملاء / واجبات أمين الصندوق.',
          'عمل بدوام كامل خلال فصول الصيف وعطلات نهاية الأسبوع / بدوام جزئي خلال العام الدراسي ، مما يدل على التزام استثنائي وإدارة الوقت.'
        ]
      },
      tr: {
        description: '',
        achievements: [
          'Stok alımı, sayım, nakit akışı ve finansal takip dahil olmak üzere envanter ve finansın tüm yönlerini yönetti.',
          'Yeni bir Odoo POS sisteminin başarılı bir şekilde geçişine ve uygulanmasına öncülük ederek, geliştirilmiş muhasebe doğruluğu ve artırılmış iş verimliliği sağladı.',
          'Teslimat lojistiği ve müşteri hizmetleri/kasiyer görevleri de dahil olmak üzere pazar operasyonlarında kapsamlı destek sağladı.',
          'Yazları ve hafta sonları tam zamanlı/okul yılı boyunca yarı zamanlı çalışarak olağanüstü bir bağlılık ve zaman yönetimi sergiledi.'
        ]
      }
    }
  },
  {
    type: 'education' as const,
    title: 'BEng Electrical & Electronic Engineering',
    company: 'University of Nottingham',
    location: 'Nottingham, UK',
    period: '2025 – Present',
    description: 'Commencing program focused on Digital Systems, Embedded Computing, Power, and Communications. The curriculum provides a strong foundation for hardware-software integration through practical, lab-based projects.',
    achievements: [],
    logo: '/logos/UoN-Nottingham-Blue.png',
    translations: {
      ar: 'برنامج يبدأ بالتركيز على الأنظمة الرقمية والحوسبة المدمجة والطاقة والاتصالات. يوفر المنهج أساسًا قويًا لتكامل الأجهزة والبرامج من خلال مشاريع عملية قائمة على المختبرات.',
      tr: 'Dijital Sistemler, Gömülü Bilgi İşlem, Güç ve İletişim odaklı bir program başlıyor. Müfredat, pratik, laboratuvar tabanlı projeler aracılığıyla donanım-yazılım entegrasyonu için güçlü bir temel sağlamaktadır.'
    }
  },
  {
    type: 'education' as const,
    title: 'Full-Stack Software Development',
    company: 'Self-Taught & Applied Learning',
    location: 'Remote',
    period: '2024 – 2025',
    description: 'Accelerated self-directed curriculum (e.g., Udemy/online courses and intensive practice) focusing on React, Next.js, TypeScript, Node.js, and Laravel. Skills validated by delivering complex, real-world projects, including a full-scale Auto Repair Management System.',
    achievements: [],
    logo: '/logos/udemy-logo.svg',
    translations: {
      ar: 'منهج ذاتي التوجيه ومكثف (مثل دورات Udemy/عبر الإنترنت والممارسة المكثفة) يركز على React و Next.js و TypeScript و Node.js و Laravel. تم التحقق من صحة المهارات من خلال تقديم مشاريع معقدة وواقعية، بما في ذلك نظام كامل لإدارة إصلاح السيارات.',
      tr: 'React, Next.js, TypeScript, Node.js ve Laravel\'e odaklanan hızlandırılmış kendi kendine öğrenme müfredatı (örn. Udemy/çevrimiçi kurslar ve yoğun pratik). Beceriler, tam ölçekli bir Oto Tamir Yönetim Sistemi de dahil olmak üzere karmaşık, gerçek dünya projeleri sunarak doğrulandı.'
    }
  },
  {
    type: 'education' as const,
    title: 'Science & Mathematics Curriculum',
    company: 'Private Neva Science High School',
    location: 'Ankara, Turkey',
    period: '2021 – 2025',
    description: 'Developed a robust analytical and problem-solving foundation in core sciences and advanced mathematics to prepare for engineering studies.',
    achievements: [],
    logo: '/logos/Ozleneva.png',
    translations: {
      ar: 'طورت أساسًا تحليليًا قويًا وحل المشكلات في العلوم الأساسية والرياضيات المتقدمة للتحضير للدراسات الهندسية.',
      tr: 'Mühendislik çalışmaları için temel bilimlerde ve ileri matematikte sağlam bir analitik ve problem çözme temeli geliştirdi.'
    }
  }
]

// TODO: Add your projects here
// Projects data
export const projects = [
  {
    title: 'TeraMotors: Auto Repair Management Software',
    description: "A comprehensive, full-stack management solution designed for auto repair shops (similar to ARI). Features end-to-end inventory management, service scheduling, technician tracking, and custom invoicing.",
    tech: ['nextjs', 'react', 'typescript', 'tailwind', 'nodejs', 'supabase'],
    github: 'https://github.com/almonzer-fadl/teramotors',
    live: 'https://www.teramotor.cc/',
    image: '/images/fruitcards',
    featured: true,

    translations: {
      ar: {
        title: 'تيراموتورز: برنامج إدارة ورش تصليح السيارات',
        description: 'حل شامل ومتكامل لإدارة ورش تصليح السيارات (مشابه لـ ARI). يتميز بإدارة المخزون الشاملة، وجدولة الخدمات، وتتبع الفنيين، وإعداد الفواتير المخصصة.'
      },
      tr: {
        title: 'TeraMotors: Oto Tamir Yönetim Yazılımı',
        description: 'Oto tamirhaneleri için tasarlanmış kapsamlı, tam yığın bir yönetim çözümü (ARI benzeri). Uçtan uca envanter yönetimi, servis planlaması, teknisyen takibi ve özel faturalandırma özelliklerine sahiptir.'
      }
    }
  },
  {
    title: 'Tkaful: Charity Organization',
    description: 'Developed a robust Student and Admin management portal for a charity organization. Implements secure role-based access control for managing applications, tracking volunteer activities, and communications.',
    tech: ['nextjs', 'react', 'typescript', 'tailwind',],
    github: 'https://github.com/AAbosham/tkaful',
    live: 'https://tkaful.testingapplications.xyz/',
    image: '/images/fruitcards.png',
    featured: true,
    translations: {
      ar: {
        title: 'تكافل: منظمة خيرية',
        description: 'تم تطوير بوابة قوية لإدارة الطلاب والإدارة لمنظمة خيرية. تنفذ تحكمًا آمنًا في الوصول المستند إلى الأدوار لإدارة التطبيقات وتتبع الأنشطة التطوعية والاتصالات.'
      },
      tr: {
        title: 'Tkaful: Hayır Kurumu',
        description: 'Bir hayır kurumu için sağlam bir Öğrenci ve Yönetici yönetim portalı geliştirildi. Başvuruları yönetmek, gönüllü faaliyetlerini ve iletişimleri izlemek için güvenli rol tabanlı erişim kontrolü uygular.'
      }
    }
  },
  {
    title: 'Takkah App: Whatsaap tool',
    description: 'A mobile or web application focusing on engaging user interaction. Showcases proficiency in mobile-first design and state management for complex user interactions.',
    tech: ['react', 'typescript', 'typescript', 'tailwind'],
    github: 'https://github.com/AAbosham/takkah-app',
    live: 'https://takkah.app/',
    image: '/images/fruitcards',
    featured: true,
    translations: {
      ar: {
        title: 'تطبيق تكة: ',
        description: 'تطبيق جوال أو ويب يركز على تفاعل المستخدم الجذاب. يعرض الكفاءة في تصميم الجوال أولاً وإدارة الحالة لتفاعلات المستخدم المعقدة.'
      },
      tr: {
        title: 'Takkah Uygulaması',
        description: 'Etkileşimli kullanıcı etkileşimine odaklanan bir mobil veya web uygulaması. Karmaşık kullanıcı etkileşimleri için mobil öncelikli tasarım ve durum yönetiminde yeterlilik sergiler.'
      }
    }
  },
  {
    title: 'Teravisions Academy: E-learning Platform',
    description: 'An internal or client-facing application built for educational or training purposes, demonstrating solid architecture for content delivery and user progress tracking.',
    tech: ['nextjs', 'react', 'typescript', 'tailwind', 'code', 'shield'],
    github: 'https://github.com/almonzer-fadl/teravisions-academy',
    live: 'https://teravisionsai.com/',
    featured: true,
    image: '/images/fruitcards',
    translations: {
      ar: {
        title: 'أكاديمية تيرافيجنز: منصة تعليم إلكتروني',
        description: 'تطبيق داخلي أو موجه للعملاء تم إنشاؤه لأغراض تعليمية أو تدريبية، يوضح بنية قوية لتسليم المحتوى وتتبع تقدم المستخدم.'
      },
      tr: {
        title: 'Teravisions Akademi: E-öğrenme Platformu',
        description: 'Eğitim veya öğretim amaçlı oluşturulmuş, içerik dağıtımı ve kullanıcı ilerleme takibi için sağlam bir mimari sergileyen dahili veya müşteri odaklı bir uygulama.'
      }
    }
  }
];

// Extended projects for projects page - Non-featured
export const allProjects = [
  ...projects,
  {
    title: 'Passport Renew System',
    description: 'A system designed to streamline and automate the passport renewal process, focusing on secure data submission and efficient administrative review workflows.',
    tech: ['nextjs', 'react', 'typescript', 'shield', 'code'],
    github: 'https://github.com/almonzer-fadl/passportRenewSys',
    live: 'https://sdpassport.vercel.app/',
    featured: false,
    image: '/images/fruitcards',
    translations: {
      ar: {
        title: 'نظام تجديد جواز السفر',
        description: 'نظام مصمم لتبسيط وأتمتة عملية تجديد جواز السفر، مع التركيز على تقديم البيانات الآمنة وسير عمل المراجعة الإدارية الفعال.'
      },
      tr: {
        title: 'Pasaport Yenileme Sistemi',
        description: 'Pasaport yenileme sürecini kolaylaştırmak ve otomatikleştirmek için tasarlanmış, güvenli veri gönderimi ve verimli idari inceleme iş akışlarına odaklanan bir sistem.'
      }
    }
  },
  {
    title: 'TeraLab: Internal Development Tool',
    description: 'A project related to the "Tera" ecosystem, potentially a testing environment or a utility for internal development and experimentation.',
    tech: ['code', 'javascript', 'nodejs', 'code'],
    github: 'https://github.com/almonzer-fadl/teralab',
    live: 'https://teralab.io/',
    image: '/images/fruitcards',
    featured: false,
    translations: {
      ar: {
        title: 'تيرالاب: أداة تطوير داخلية',
        description: 'مشروع يتعلق ببيئة "تيرا"، قد يكون بيئة اختبار أو أداة للتطوير والتجريب الداخلي.'
      },
      tr: {
        title: 'TeraLab: Dahili Geliştirme Aracı',
        description: '"Tera" ekosistemiyle ilgili bir proje, potansiyel olarak dahili geliştirme ve deneyler için bir test ortamı veya bir yardımcı program.'
      }
    }
  },
  {
    title: 'Fruit Cards Game/App',
    description: 'A card-based application or game likely focused on engaging user interaction, demonstrating strong front-end skills and visual design implementation.',
    tech: ['react', 'javascript', 'code', 'code'],
    github: 'https://github.com/Mohannad-Algaali/fruit-cards',
    live: 'https://fruit-cards.vercel.app/',
    image: '/images/fruitcards',
    featured: false,
    translations: {
      ar: {
        title: 'لعبة/تطبيق بطاقات الفاكهة',
        description: 'تطبيق أو لعبة تعتمد على البطاقات تركز على تفاعل المستخدم الجذاب، وتوضح مهارات الواجهة الأمامية القوية وتنفيذ التصميم المرئي.'
      },
      tr: {
        title: 'Meyve Kartları Oyunu/Uygulaması',
        description: 'Etkileşimli kullanıcı etkileşimine odaklanan, güçlü ön uç becerileri ve görsel tasarım uygulamasını gösteren kart tabanlı bir uygulama veya oyun.'
      }
    }
  },
  {
    title: 'Minimind-V2',
    description: 'The updated version of your unified productivity app (Minimind), continuing to merge tasks, calendar, and notes into a simple, non-bloated mobile experience.',
    tech: ['react', 'typescript', 'code', 'zap'],
    github: 'https://github.com/almonzer-fadl/minimind-V2',
    live: 'https://minimind-ba00.onrender.com/',
    featured: false,
    image: '/images/fruitcards',
    translations: {
      ar: {
        title: 'مينمايند-الإصدار الثاني',
        description: 'النسخة المحدثة من تطبيق الإنتاجية الموحد الخاص بك (مينمايند)، والذي يواصل دمج المهام والتقويم والملاحظات في تجربة جوال بسيطة وغير متضخمة.'
      },
      tr: {
        title: 'Minimind-V2',
        description: 'Birleşik üretkenlik uygulamanızın (Minimind) güncellenmiş sürümü, görevleri, takvimi ve notları basit, şişkin olmayan bir mobil deneyimde birleştirmeye devam ediyor.'
      }
    }
  }
];

// Technologies data
export const technologies = [
  { name: 'HTML 5', icon: 'html' },
  { name: 'CSS 3', icon: 'css' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'TailwindCSS', icon: 'tailwind' },
  { name: 'React', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Supabase', icon: 'supabase' },
  { name: 'Git', icon: 'git' },
  { name: 'PHP', icon: 'php' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'Vite', icon: 'vite' }
];

// TODO: Add the correct path to your CV
export const cvPath = '/resume_en.pdf';