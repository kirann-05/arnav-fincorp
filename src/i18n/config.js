import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        loanProducts: "Loan Products",
        calculator: "EMI Calculator",
        about: "About",
        feedback: "Feedback",
        contactUs: "Contact Us",
        download: "Download App"
      },
      hero: {
        badge: "RBI REGISTERED NBFC",
        titleStart: "Credit that respects",
        titleAccent: "your",
        titleEnd: "ambition.",
        subtitle: "Home, Business, and Personal credit that's fair, transparent, and fast — purposefully crafted for Bharat's aspirations.",
        cta1: "Calculate your EMI",
        cta2: "Explore All Loans",
        stat1Value: "8.25%",
        stat1Label: "Interest from",
        stat2Value: "₹200 Cr+",
        stat2Label: "Loans disbursed",
        stat3Value: "24 hrs",
        stat3Label: "Avg. approval"
      },
      products: {
        eyebrow: "OUR PRODUCTS",
        titleStart: "A loan for every",
        titleAccent: "chapter",
        titleEnd: "of life.",
        lapLoan: {
          title: "Loan Against Property",
          desc: "Unlock the true value of your real estate. Get access to higher loan amounts and flexible repayment terms.",
          rate: "10.5%",
          tenure: "10 yrs",
          amount: "₹25L",
          backTitle: "LAP Details",
          eligibility: "Property owners, Age 21-65, Steady income source",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "High loan-to-value, Lower interest than personal loans"
        },
        homeLoan: {
          title: "Home Loan",
          desc: "Own a home in the city of your dreams. Affordable EMIs with property as security and flexible repayment.",
          rate: "8.25%",
          tenure: "10 yrs",
          amount: "₹25L",
          backTitle: "Home Loan Details",
          eligibility: "Salaried/Self-employed, Age 21-60, Min income ₹25,000/month",
          documents: "Customer KYC, Co-Applicant KYC, Property papers",
          benefits: "Low interest rates, No hidden charges, Quick approval"
        },
        businessLoan: {
          title: "Business Loan",
          desc: "Expand or kickstart your business with flexible funding. Short-term credit for entrepreneurs & MSMEs.",
          rate: "15%",
          tenure: "3 yrs",
          amount: "₹5L",
          backTitle: "Business Loan Details",
          eligibility: "Business vintage 2+ years, Min turnover ₹12L/year",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "Collateral-free, Flexible repayment"
        },
        vehicleLoan4W: {
          title: "Vehicle Loan (4W)",
          desc: "Drive your dream car today. Hassle-free processing for new and pre-owned four-wheelers.",
          rate: "12%",
          tenure: "3 yrs",
          amount: "₹10L",
          backTitle: "4W Loan Details",
          eligibility: "Salaried/Self-employed, Min age 21, Stable employment",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "Hassle-free processing, Minimal paperwork"
        },
        vehicleLoan2W: {
          title: "Vehicle Loan (2W)",
          desc: "Get on the road with ease. Instant loans for bikes and scooters with low down payment options.",
          rate: "12%",
          tenure: "2 yrs",
          amount: "₹2L",
          backTitle: "2W Loan Details",
          eligibility: "Age 18-60, Basic income proof, KYC",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "Instant approval, Flexible EMIs, Low down payment"
        },
        goldLoan: {
          title: "Gold Loan",
          desc: "Instant cash against your gold ornaments. Safe, secure, and minimal documentation required.",
          rate: "15%",
          tenure: "3 yrs",
          amount: "₹10L",
          backTitle: "Gold Loan Details",
          eligibility: "Anyone over 18 years with gold ornaments",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "Spot disbursement, Safe storage, Easy renewal"
        },
        personalLoan: {
          title: "Personal Loan",
          desc: "Meet personal expenditures — weddings, travel, emergencies. Fast disbursement, minimal documentation.",
          rate: "15%",
          tenure: "3 yrs",
          amount: "₹2L",
          backTitle: "Personal Loan Details",
          eligibility: "Salaried/Self-employed, Age 21-55, Min income ₹20,000/month",
          documents: "Customer KYC, Co-Applicant KYC, Other related documents",
          benefits: "No collateral needed, Instant approval"
        },
        applyNow: "Apply Now",
        flipHint: "Hover for details",
        labelRate: "Rate",
        labelTenure: "Tenure",
        labelAmount: "Amt.",
        exploreMore: "Explore More Loans"
      },
      trust: {
        eyebrow: "TRUST INDICATORS",
        titleStart: "Numbers that build",
        titleAccent: "trust",
        stat1: { value: "1,800", suffix: "+", label: "Happy Customers" },
        stat2: { value: "200", prefix: "₹", suffix: "Cr+", label: "Loans Disbursed" },
        stat3: { value: "3", suffix: "", label: "Branches in Rajasthan" },
        stat4: { value: "9", suffix: "", label: "Years of Service" },
        description: "Every number represents a family empowered, a business launched, and a dream fulfilled. We measure success in lives transformed."
      },
      calculator: {
        eyebrow: "EMI CALCULATOR",
        titleStart: "Plan your commitment,",
        titleAccent: "before",
        titleEnd: "you commit.",
        description: "Use our intelligent calculator to plan your monthly outflow before applying. Get clarity on exact EMI, total interest, and total payable amount.",
        loanAmount: "Loan Amount",
        interestRate: "Interest Rate (% p.a.)",
        loanTenure: "Loan Tenure (Years)",
        monthlyEmi: "Monthly EMI",
        totalInterest: "Total Interest",
        totalAmount: "Total Amount",
        applyForLoan: "Apply for this Loan"
      },
      testimonials: {
        eyebrow: "TESTIMONIALS",
        titleStart: "Stories from",
        titleAccent: "Bharat's",
        titleEnd: "borrowers.",
        items: [
          { quote: "Arnav FinCorp gave me a HOME loan when 3 banks refused. The process was transparent and the staff was incredibly helpful. I'm now a proud homeowner!", name: "Aarti Sharma", location: "Jaipur, Rajasthan", type: "Home Loan" },
          { quote: "The speed of their BUSINESS loan disbursement is unmatched. I applied, got approved, and received funds within 5 days. My textile shop is thriving!", name: "Rajesh Patel", location: "Surat, Gujarat", type: "Business Loan" },
          { quote: "I needed an MSME loan urgently for machinery. Arnav FinCorp's team personally visited my workshop and sanctioned the loan in record time.", name: "Sunita Devi", location: "Kanpur, UP", type: "MSME Loan" },
          { quote: "Their personal loan helped me fund my daughter's education abroad. Simple process, no hidden charges. Truly a company that cares.", name: "Vikram Singh", location: "Chandigarh, Punjab", type: "Personal Loan" },
          { quote: "What I love about Arnav FinCorp is their honesty. They clearly explained every charge, every clause. No bank ever did that for me.", name: "Meera Nair", location: "Kochi, Kerala", type: "Home Loan" }
        ]
      },
      footer: {
        tagline: "Credit that respects your ambition. Empowering Bharat's dreams since 2016.",
        products: "Products",
        company: "Company",
        legal: "Legal",
        homeLoan: "Home Loan",
        businessLoan: "Business Loan",
        personalLoan: "Personal Loan",
        msmeLoan: "MSME Loan",
        goldLoan: "Gold Loan",
        aboutUs: "About Us",
        careers: "Careers",
        branches: "Branches",
        contact: "Contact",
        press: "Press",
        termsConditions: "Terms & Conditions",
        privacyPolicy: "Privacy Policy",
        grievance: "Grievance Redressal",
        fairPractice: "Fair Practice Code",
        copyright: "© 2026 Arnav FinCorp Private Limited. All rights reserved. RBI Registered NBFC (B-10.00264)."
      },
      contactPage: {
        eyebrow: "GET IN TOUCH",
        titleStart: "Let us know how we can",
        titleAccent: "assist you",
        desc: "Our team is here to help you with your financial journey. Reach out to us via the form or our contact details.",
        form: {
          name: "Name",
          namePlaceholder: "Enter your full name",
          email: "Email",
          emailPlaceholder: "Enter your email address",
          phone: "Mobile Number",
          phonePlaceholder: "+91 (000) 000-0000",
          message: "Message",
          messagePlaceholder: "Leave us a message...",
          submit: "Send Message",
          success: "Message sent successfully!"
        },
        sidebar: {
          helpTitle: "Need help with the product?",
          helpDesc: "Our support team is ready to assist you with loan applications, document verification, and eligibility checks.",
          socialLinks: "Social Links",
          addressTitle: "Address",
          addressValue: "G-14, Navkar Plaza, Hari Seva Marg, Bhilwara, Rajasthan 311001",
          phoneValue: "+91 88751-20888 (WhatsApp) · 01482-238388 (Landline)",
          emailValue: "arnavfincorp@gmail.com"
        }
      },
      common: {
        home: "Home",
        ourStory: "Our Story",
        rbiNbfc: "RBI Registered NBFC",
        viewAllLoans: "View All Loans",
        applyNow: "Apply Now",
        exploreOtherLoans: "Explore other loans",
        calculateEMI: "Calculate EMI",
        talkToTeam: "Talk to our team",
        contactTeam: "Contact our team",
        emailGRO: "Email the GRO"
      },
      loanDetail: {
        breadcrumbLoans: "Loan Products",
        eligibilityEyebrow: "Eligibility",
        eligibilityTitle: "Who can apply",
        documentsEyebrow: "Documents",
        documentsTitle: "What you need",
        benefitsEyebrow: "Benefits",
        benefitsTitle: "What you get",
        ctaTitle: "Ready to apply for your {{name}}?",
        ctaDesc: "Talk to our lending experts today. Fast approval, fair rates, zero hidden charges.",
        notFoundTitle: "Loan not found",
        notFoundDesc: "The loan product you are looking for does not exist.",
        notFoundCta: "Back to all loans"
      },
      loanProductsPage: {
        description: "Discover financial solutions tailored for every stage of your life and business journey."
      },
      aboutPage: {
        eyebrow: "About Us",
        titleStart: "Born in Bikaner. Built for",
        titleAccent: "Bharat's",
        titleEnd: "backbone.",
        subtitle: "Since 2016, Arnav FinCorp has been quietly rewriting what credit looks like for Rajasthan's heartland. We finance the textile traders of Bhilwara, the shopkeepers of the surrounding mandi towns, and the first-generation borrowers no metro bank will underwrite. From our headquarters at Navkar Plaza on Hari Seva Marg, we have grown to three branches across Rajasthan — and crossed ₹200 crore in disbursements to over 1,800 families. Through every chapter of that growth, one promise has not changed: cash flow is real, character is verifiable, and the Bharat that built India deserves credit on its own terms.",
        ctaTitle: "Ready to take the next step?",
        ctaDesc: "Talk to our lending experts today. Quick approval, fair rates, zero hidden charges.",
        ctaPrimary: "Talk to our team",
        ctaSecondary: "Explore All Loans"
      },
      legalPage: {
        breadcrumb: "Legal & Policies",
        eyebrow: "Legal & Policies",
        titleStart: "Transparency, by",
        titleAccent: "design",
        titleEnd: ".",
        subtitle: "Every policy, regulation and right that governs your relationship with Arnav FinCorp — written in compliance with RBI Master Directions and the Fair Practices Code.",
        jumpToPolicy: "Jump to a policy",
        onThisPage: "On this page",
        ctaTitle: "Have a question about your rights?",
        ctaDesc: "Our Grievance Redressal Officer responds to every query within 15 working days."
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: "होम",
        loanProducts: "ऋण उत्पाद",
        calculator: "EMI कैलकुलेटर",
        about: "हमारे बारे में",
        feedback: "प्रतिक्रिया",
        contactUs: "संपर्क करें",
        download: "ऐप डाउनलोड करें"
      },
      hero: {
        badge: "RBI पंजीकृत NBFC",
        titleStart: "ऋण जो सम्मान करे",
        titleAccent: "आपकी",
        titleEnd: "महत्वाकांक्षा का।",
        subtitle: "होम, बिज़नेस और पर्सनल क्रेडिट — निष्पक्ष, पारदर्शी और तेज़ — भारत की आकांक्षाओं के लिए।",
        cta1: "EMI कैलकुलेट करें",
        cta2: "सभी ऋण देखें",
        stat1Value: "8.25%",
        stat1Label: "ब्याज दर से",
        stat2Value: "₹200 करोड़+",
        stat2Label: "वितरित ऋण",
        stat3Value: "24 घंटे",
        stat3Label: "औसत मंजूरी"
      },
      products: {
        eyebrow: "हमारे उत्पाद",
        titleStart: "जीवन के हर",
        titleAccent: "अध्याय",
        titleEnd: "के लिए ऋण।",
        lapLoan: {
          title: "संपत्ति पर ऋण (LAP)",
          desc: "अपनी अचल संपत्ति का सही मूल्य प्राप्त करें। उच्च ऋण राशि और लचीली चुकौती शर्तों तक पहुंच प्राप्त करें।",
          rate: "10.5%",
          tenure: "10 वर्ष",
          amount: "₹25L",
          backTitle: "LAP विवरण",
          eligibility: "संपत्ति के मालिक, आयु 21-65, आय का स्थिर स्रोत",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "उच्च ऋण-से-मूल्य, पर्सनल लोन से कम ब्याज"
        },
        homeLoan: {
          title: "होम लोन",
          desc: "अपने सपनों के शहर में घर खरीदें। किफायती EMI, संपत्ति गारंटी और लचीली अवधि।",
          rate: "8.25%",
          tenure: "10 वर्ष",
          amount: "₹25L",
          backTitle: "होम लोन विवरण",
          eligibility: "वेतनभोगी/स्वरोजगार, आयु 21-60, न्यूनतम आय ₹25,000/माह",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, संपत्ति के कागजात",
          benefits: "कम ब्याज दरें, कोई छिपे शुल्क नहीं, त्वरित मंजूरी"
        },
        businessLoan: {
          title: "बिज़नेस लोन",
          desc: "लचीले फंडिंग से अपना व्यवसाय बढ़ाएं। उद्यमियों और MSMEs के लिए।",
          rate: "15%",
          tenure: "3 वर्ष",
          amount: "₹5L",
          backTitle: "बिज़नेस लोन विवरण",
          eligibility: "व्यवसाय 2+ वर्ष पुराना, न्यूनतम टर्नओवर ₹12L/वर्ष",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "बिना गारंटी, लचीला भुगतान"
        },
        vehicleLoan4W: {
          title: "वाहन ऋण (4W)",
          desc: "आज ही अपनी सपनों की कार चलाएं। नए और पुराने चार पहिया वाहनों के लिए आसान प्रक्रिया।",
          rate: "12%",
          tenure: "3 वर्ष",
          amount: "₹10L",
          backTitle: "4W ऋण विवरण",
          eligibility: "वेतनभोगी/स्वरोजगार, न्यूनतम आयु 21, स्थिर रोजगार",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "आसान प्रक्रिया, न्यूनतम कागजी कार्रवाई"
        },
        vehicleLoan2W: {
          title: "वाहन ऋण (2W)",
          desc: "आसानी से सड़क पर उतरें। कम डाउन पेमेंट विकल्पों के साथ बाइक और स्कूटर के लिए तत्काल ऋण।",
          rate: "12%",
          tenure: "2 वर्ष",
          amount: "₹2L",
          backTitle: "2W ऋण विवरण",
          eligibility: "आयु 18-60, बुनियादी आय प्रमाण, केवाईसी",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "तत्काल मंजूरी, लचीली EMI, कम डाउन पेमेंट"
        },
        goldLoan: {
          title: "गोल्ड लोन",
          desc: "अपने सोने के गहनों के बदले तत्काल नकद। सुरक्षित और न्यूनतम दस्तावेज़ीकरण आवश्यक।",
          rate: "15%",
          tenure: "3 वर्ष",
          amount: "₹10L",
          backTitle: "गोल्ड लोन विवरण",
          eligibility: "सोने के गहनों के साथ 18 वर्ष से अधिक का कोई भी व्यक्ति",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "मौके पर वितरण, सुरक्षित भंडारण, आसान नवीनीकरण"
        },
        personalLoan: {
          title: "पर्सनल लोन",
          desc: "शादी, यात्रा, आपातकालीन — व्यक्तिगत ख़र्चों के लिए। तेज़ वितरण, न्यूनतम दस्तावेज़।",
          rate: "15%",
          tenure: "3 वर्ष",
          amount: "₹2L",
          backTitle: "पर्सनल लोन विवरण",
          eligibility: "वेतनभोगी/स्वरोजगार, आयु 21-55, न्यूनतम आय ₹20,000/माह",
          documents: "ग्राहक केवाईसी, सह-आवेदक केवाईसी, अन्य संबंधित दस्तावेज़",
          benefits: "बिना गारंटी, तुरंत मंजूरी"
        },
        applyNow: "अभी आवेदन करें",
        flipHint: "विवरण के लिए होवर करें",
        labelRate: "दर",
        labelTenure: "अवधि",
        labelAmount: "राशि",
        exploreMore: "और ऋण देखें"
      },
      trust: {
        eyebrow: "विश्वास संकेतक",
        titleStart: "संख्याएँ जो बनाती हैं",
        titleAccent: "विश्वास",
        stat1: { value: "1,800", suffix: "+", label: "खुश ग्राहक" },
        stat2: { value: "200", prefix: "₹", suffix: "Cr+", label: "वितरित ऋण" },
        stat3: { value: "3", suffix: "", label: "राजस्थान में शाखाएं" },
        stat4: { value: "9", suffix: "", label: "सेवा के वर्ष" },
        description: "हर संख्या एक सशक्त परिवार, एक शुरू किया गया व्यवसाय और एक पूरा किया गया सपना दर्शाती है।"
      },
      calculator: {
        eyebrow: "EMI कैलकुलेटर",
        titleStart: "अपनी प्रतिबद्धता की योजना बनाएं,",
        titleAccent: "प्रतिबद्ध होने से",
        titleEnd: "पहले।",
        description: "आवेदन करने से पहले अपने मासिक भुगतान की योजना बनाने के लिए हमारे कैलकुलेटर का उपयोग करें।",
        loanAmount: "ऋण राशि",
        interestRate: "ब्याज दर (% वार्षिक)",
        loanTenure: "ऋण अवधि (वर्ष)",
        monthlyEmi: "मासिक EMI",
        totalInterest: "कुल ब्याज",
        totalAmount: "कुल राशि",
        applyForLoan: "इस ऋण के लिए आवेदन करें"
      },
      testimonials: {
        eyebrow: "प्रशंसापत्र",
        titleStart: "कहानियाँ",
        titleAccent: "भारत के",
        titleEnd: "उधारकर्ताओं की।",
        items: [
          { quote: "अर्णव फिनकॉर्प ने मुझे होम लोन दिया जब 3 बैंकों ने मना कर दिया। प्रक्रिया पारदर्शी थी और कर्मचारी बेहद सहायक थे।", name: "आरती शर्मा", location: "जयपुर, राजस्थान", type: "होम लोन" },
          { quote: "उनके बिज़नेस लोन की गति बेजोड़ है। मैंने आवेदन किया, मंजूरी मिली और 5 दिनों में फंड मिल गया।", name: "राजेश पटेल", location: "सूरत, गुजरात", type: "बिज़नेस लोन" },
          { quote: "मशीनरी के लिए MSME लोन तुरंत चाहिए था। अर्णव फिनकॉर्प की टीम ने मेरी कार्यशाला का दौरा किया और रिकॉर्ड समय में लोन मंजूर किया।", name: "सुनीता देवी", location: "कानपुर, उत्तर प्रदेश", type: "MSME लोन" },
          { quote: "उनके पर्सनल लोन से मैंने अपनी बेटी की विदेश में शिक्षा का खर्च उठाया। सरल प्रक्रिया, कोई छिपे शुल्क नहीं।", name: "विक्रम सिंह", location: "चंडीगढ़, पंजाब", type: "पर्सनल लोन" },
          { quote: "अर्णव फिनकॉर्प की ईमानदारी मुझे बहुत पसंद है। हर शुल्क, हर शर्त स्पष्ट रूप से बताई गई।", name: "मीरा नायर", location: "कोच्चि, केरल", type: "होम लोन" }
        ]
      },
      footer: {
        tagline: "ऋण जो सम्मान करे आपकी महत्वाकांक्षा का। 2016 से भारत के सपनों को सशक्त बना रहे हैं।",
        products: "उत्पाद",
        company: "कंपनी",
        legal: "कानूनी",
        homeLoan: "होम लोन",
        businessLoan: "बिज़नेस लोन",
        personalLoan: "पर्सनल लोन",
        msmeLoan: "MSME लोन",
        goldLoan: "गोल्ड लोन",
        aboutUs: "हमारे बारे में",
        careers: "करियर",
        branches: "शाखाएं",
        contact: "संपर्क",
        press: "प्रेस",
        termsConditions: "नियम और शर्तें",
        privacyPolicy: "गोपनीयता नीति",
        grievance: "शिकायत निवारण",
        fairPractice: "उचित व्यवहार संहिता",
        copyright: "© 2026 अर्णव फिनकॉर्प प्रा. लि. सर्वाधिकार सुरक्षित। RBI पंजीकृत NBFC।"
      },
      contactPage: {
        eyebrow: "संपर्क करें",
        titleStart: "हमें बताएं कि हम आपकी",
        titleAccent: "कैसे मदद",
        titleEnd: "कर सकते हैं",
        desc: "हमारी टीम आपकी वित्तीय यात्रा में आपकी मदद करने के लिए यहाँ है। फॉर्म या हमारे संपर्क विवरण के माध्यम से हमसे संपर्क करें।",
        form: {
          name: "नाम",
          namePlaceholder: "अपना पूरा नाम दर्ज करें",
          email: "ईमेल",
          emailPlaceholder: "अपना ईमेल पता दर्ज करें",
          phone: "मोबाइल नंबर",
          phonePlaceholder: "+91 (000) 000-0000",
          message: "संदेश",
          messagePlaceholder: "हमें एक संदेश छोड़ें...",
          submit: "संदेश भेजें",
          success: "संदेश सफलतापूर्वक भेजा गया!"
        },
        sidebar: {
          helpTitle: "उत्पाद के साथ मदद चाहिए?",
          helpDesc: "हमारी सहायता टीम ऋण आवेदन, दस्तावेज़ सत्यापन और पात्रता जांच में आपकी सहायता के लिए तैयार है।",
          socialLinks: "सोशल लिंक्स",
          addressTitle: "पता",
          addressValue: "G-14, नवकार प्लाज़ा, हरि सेवा मार्ग, भीलवाड़ा, राजस्थान 311001",
          phoneValue: "+91 88751-20888 (WhatsApp) · 01482-238388 (लैंडलाइन)",
          emailValue: "arnavfincorp@gmail.com"
        }
      },
      common: {
        home: "होम",
        ourStory: "हमारी कहानी",
        rbiNbfc: "RBI पंजीकृत NBFC",
        viewAllLoans: "सभी ऋण देखें",
        applyNow: "अभी आवेदन करें",
        exploreOtherLoans: "अन्य ऋण देखें",
        calculateEMI: "EMI गणना करें",
        talkToTeam: "हमारी टीम से बात करें",
        contactTeam: "हमारी टीम से संपर्क करें",
        emailGRO: "GRO को ईमेल करें"
      },
      loanDetail: {
        breadcrumbLoans: "ऋण उत्पाद",
        eligibilityEyebrow: "पात्रता",
        eligibilityTitle: "कौन आवेदन कर सकता है",
        documentsEyebrow: "दस्तावेज़",
        documentsTitle: "आपको क्या चाहिए",
        benefitsEyebrow: "लाभ",
        benefitsTitle: "आपको क्या मिलेगा",
        ctaTitle: "अपने {{name}} के लिए आवेदन करने को तैयार हैं?",
        ctaDesc: "आज ही हमारे ऋण विशेषज्ञों से बात करें। त्वरित मंजूरी, निष्पक्ष दरें, कोई छिपे शुल्क नहीं।",
        notFoundTitle: "ऋण नहीं मिला",
        notFoundDesc: "आप जिस ऋण उत्पाद की तलाश कर रहे हैं वह मौजूद नहीं है।",
        notFoundCta: "सभी ऋणों पर वापस जाएँ"
      },
      loanProductsPage: {
        description: "जीवन और व्यवसाय की हर अवस्था के लिए बने वित्तीय समाधान खोजें।"
      },
      aboutPage: {
        eyebrow: "हमारे बारे में",
        titleStart: "बीकानेर में जन्मे।",
        titleAccent: "भारत की",
        titleEnd: "रीढ़ के लिए बने।",
        subtitle: "2016 से, अर्णव फिनकॉर्प चुपचाप उस तरीके को फिर से लिख रहा है जिससे राजस्थान के दिल को ऋण मिलता है। हम भीलवाड़ा के वस्त्र व्यापारियों, आसपास की मंडी कस्बों के दुकानदारों और उन पहली पीढ़ी के उधारकर्ताओं को वित्त देते हैं जिन्हें कोई मेट्रो बैंक नहीं अपनाएगा। हरि सेवा मार्ग, नवकार प्लाज़ा स्थित हमारे मुख्यालय से, हम राजस्थान में तीन शाखाओं तक बढ़े हैं — और 1,800 से अधिक परिवारों को ₹200 करोड़ से ज़्यादा वितरित किया है। इस यात्रा के हर अध्याय में एक वादा नहीं बदला: नकदी प्रवाह वास्तविक है, चरित्र सत्यापन योग्य है, और जिस भारत ने इंडिया को बनाया वह अपनी शर्तों पर ऋण का हकदार है।",
        ctaTitle: "अगला कदम उठाने को तैयार हैं?",
        ctaDesc: "आज ही हमारे ऋण विशेषज्ञों से बात करें। तेज़ मंजूरी, निष्पक्ष दरें, कोई छिपे शुल्क नहीं।",
        ctaPrimary: "हमारी टीम से बात करें",
        ctaSecondary: "सभी ऋण देखें"
      },
      legalPage: {
        breadcrumb: "कानूनी और नीतियाँ",
        eyebrow: "कानूनी और नीतियाँ",
        titleStart: "पारदर्शिता,",
        titleAccent: "मूल",
        titleEnd: "रूप से।",
        subtitle: "हर नीति, नियम और अधिकार जो अर्णव फिनकॉर्प के साथ आपके संबंध को नियंत्रित करते हैं — RBI मास्टर निर्देशों और उचित व्यवहार संहिता के अनुपालन में लिखे गए।",
        jumpToPolicy: "किसी नीति पर जाएँ",
        onThisPage: "इस पृष्ठ पर",
        ctaTitle: "अपने अधिकारों के बारे में कोई प्रश्न है?",
        ctaDesc: "हमारे शिकायत निवारण अधिकारी हर प्रश्न का 15 कार्य दिवसों के भीतर उत्तर देते हैं।"
      }
    }
  }
};

const savedLang = typeof window !== 'undefined' ? window.localStorage.getItem('arnav-lang') : null;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang === 'hi' || savedLang === 'en' ? savedLang : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
