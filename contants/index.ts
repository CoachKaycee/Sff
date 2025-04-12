import { LearningPackage } from "@/types";

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Packages",
    href: "/#packages",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    label: "FAQs",
    href: "/#faqs",
  },
];

export const approaches = [
  {
    title: "1-on-1 Conversional Coaching",
    description:
      "You are assigned at least two personal conversation coaches for 1-on-1 practice to accelerate your speaking proficiency.",
    imgUrl: "/assets/icons/conversations.svg",
  },
  {
    title: "1-on-1 Accountability Coaching",
    description:
      "After registration, you are assigned a highly proficient accountability coach that will hold you accountable everyday for your success.",
    imgUrl: "/assets/icons/coach.svg",
  },
  {
    title: "Personal Report Page",
    description:
      "This is the dedicated private platform where you submit your daily tasks and interact with your accountability coach.",
    imgUrl: "/assets/icons/report.svg",
  },
  {
    title: "Daily Tasks",
    description:
      "Our program structure is such that students are given well-defined daily tasks to be graded by their accountability coach.",
    imgUrl: "/assets/icons/tasks.svg",
  },
  {
    title: "Live Zoom Interactive Classes",
    description:
      "We have zoom sessions twice every week where you interact with people within your group, ask questions, and learn new things.",
    imgUrl: "/assets/icons/interactive.svg",
  },
  {
    title: "Monthly Internal Examinations",
    description: "At the end of every month, students are assessed on lessons learnt based on the standard CEFR-DELF structure to ensure gradual transition from A1 to C2 level.",
    imgUrl: '/assets/icons/internal.svg'
  },
  {
    title: "TEF/TCF Canada Prep",
    description:
      "You get exclusive access to one of the most robust TEF/TCF preparatory curriculums in the world.",
    imgUrl: "/assets/icons/prep.svg",
  },
];

export const learningPackages: {
  [key: number]: LearningPackage[];
} = {
  1: [
    {
      title: "Basic",
      price: "$44.99",
      features: [
        "Personal accountability coach",
        "Personal report page",
        "Bi-weekly zoom live classes",
        "500+ Extra Learning Materials",
        "Guaranteed Refund",
      ],
      link: "/plan?type=basic"
    },
    {
      title: "Standard",
      price: "$74.99",
      features: [
        "Everything in Regular",
        "Two coaches for 1-on-1 practice",
        "Two 1-on-1 sessions every week",
        "Flexible daily report schedules",
      ],
      link: "/plan?type=standard"
    },
    {
      title: "Advanced",
      price: "$199.99",
      features: [
        "Everything in Regular",
        "Four coaches for 1-on-1 practice",
        "Four 1-on-1 sessions every week",
        "Priority live sessions every week",
      ],
      isPreferred: true,
      link: "/plan?type=advance"
    },
  ],
  3: [
    {
      title: "Basic",
      price: "$99.99",
      save: "$35",
      features: [
        "Personal accountability coach",
        "Personal report page",
        "Bi-weekly zoom live classes",
        "500+ Extra Learning Materials",
        "Guaranteed Refund",
      ],
      link: "/plan?type=basic"
    },
    {
      title: "Standard",
      price: "$149.99",
      save: "$75",
      features: [
        "Everything in Regular",
        "Two coaches for 1-on-1 practice",
        "Two 1-on-1 sessions every week",
        "Flexible daily report schedules",
      ],
      link: "/plan?type=standard"
    },
    {
      title: "Advanced",
      price: "$399.99",
      save: "$200",
      features: [
        "Everything in Regular",
        "Four coaches for 1-on-1 practice",
        "Four 1-on-1 sessions every week",
        "Priority live sessions every week",
      ],
      isPreferred: true,
      link: "/plan?type=advance"
    },
  ],
  6: [
    {
      title: "Basic",
      price: "$179.99",
      save: "$45",
      features: [
        "Personal accountability coach",
        "Personal report page",
        "Bi-weekly zoom live classes",
        "500+ Extra Learning Materials",
        "Guaranteed Refund",
      ],
      link: "/plan?type=basic"
    },
    {
      title: "Standard",
      price: "$299.99",
      save: "$150",
      features: [
        "Everything in Regular",
        "Two coaches for 1-on-1 practice",
        "Two 1-on-1 sessions every week",
        "Flexible daily report schedules",
      ],
      link: "/plan?type=standard"
    },
    {
      title: "Advanced",
      price: "$799.99",
      save: "$400",
      features: [
        "Everything in Regular",
        "Four coaches for 1-on-1 practice",
        "Four 1-on-1 sessions every week",
        "Priority live sessions every week",
      ],
      isPreferred: true,
      link: "/plan?type=advance"
    },
  ],
};

export const faqs = [
  {
    title: "Are your classes online or offline.",
    description:
      "We are 100% online",
  },
  {
    title: "Is your training tailored to help me pass TEF/TCF Canada and how long?",
    description:
      "100% Yes. 90% of our students are here for that same reason. From your very first day, you'll have tasks,  materials and live classes that are 100% tailored to helping you achieve this objective, including solving past questions. If you're a beginner, you'll need minimum of 6 months of learning to pass TEF/TCF",
  },
  {
    title: "Do you work by cohorts? Or if I register when can I start?",
    description:
      "No, every student has a personalized journey, so we don't work by cohorts. If you register today you start tomorrow, simple. Except you request to start at a latter date.",
  },
  {
    title: "How much time do I need to invest daily?",
    description: "You need to invest at least 2 hours daily. It's however not fixed. You decide when to learn.",
  },
  {
    title: "I'm in a different time zone, is that a problem?",
    description:
      "Not at all, we currently have students from all the continents of the world, we are blessed also to have different kinds of celebrities, directors, managers and captains of industries as students. There's a place for everyone and we honour everyone. Your journey is personal so irrespective of your time zone, there's certainly a place for you.",
  },
  {
    title: "Can I be fluent with the regular package? And What's the difference between the fluency you'll get in the regular package and that of the VIPs?:",
    description:
      "Absolutely. You can be fluent with regular package. For your second question, fluency comes in different levels. There's a difference between the fluency you need to speak with a friend for two hours in French and the fluency to get a high paying job. The higher your package and the longer you learn, the deeper your fluency. Simple",
  },
  {
    title: "I know absolutely nothing about French! Never learnt before. Can I still speak fluent french in 3 months ?",
    description:
      "Yes, most of the  hundreds of  testimonies on our Instagram page were exactly like you when they started. The difference now compared to when they started is like day and night.",
  },
  {
    title: "My case is special. I already speak French, I just want to be prepared for TEF/TCF:",
    description:
      "No problem. We have many students like you. Just do your  registration, you'll have a placement test to determine your level. However, if you want 1ON1 guide where you want nothing else but TEF/TCF training, you'll need to go for the VIP or VVIP package",
  },
  {
    title: "Am an absolute beginner, my objective is to write TEF/TCF. What do you advice and how long?",
    description:
      " First of all, honestly, 3 months won't be enough to go from absolute beginner to TEF/TCF proficiency. So I recommend you go for 6 months VIP Package. If you prefer, you can pay for 3 months first.",
  },
  {
    title: "The daily tasks, is there any specific time I must carry them out?",
    description:
      "No, it's up to you. Even if you want to do them in midnights it's fine, but it has to be dailly.",
  },
  {
    title: "What's your refund policy?",
    description:
      "We only do refunds when you show us proof that you've followed all we asked you to do and you're not fluent after minimum 3 months. You'll get your refund 100%",
  },
];


export const footerMenu = [
  {
    title: "About",
    links: [
      {
        title: 'Pricing',
        href: '/#packages'
      },
      {
        title: 'Testimonials',
        href: '/#testimonials'
      },
      {
        title: 'FAQs',
        href: '/#faqs'
      }
    ]
  },
  {
    title: "Company",
    links: [
      {
        title: 'Services',
        href: '/#services'
      },
      {
        title: 'Careers',
        href: '/#careers'
      },
    ]
  },
  {
    title: "Legal",
    links: [
      {
        title: 'Terms of Service',
        href: '/#terms'
      },
      {
        title: 'Privacy Policy',
        href: '/#privacy'
      },
    ]
  },
]