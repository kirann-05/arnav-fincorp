import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "features": "Features",
        "calculator": "Calculator",
        "reviews": "Reviews",
        "getStarted": "Get Started"
      },
      "hero": {
        "titleMain": "Digital Banking",
        "titleAccent": "Reimagined.",
        "subtitle": "Secure, cinematic financial experiences built for the next generation. Experience the depth of modern fintech.",
        "ctaPrimary": "Start Now",
        "ctaSecondary": "Learn More",
        "balance": "Current Balance"
      },
      "features": {
        "title": "Advanced Capabilities",
        "instant": {
          "title": "Instant Transfers",
          "desc": "Move funds across the globe in milliseconds with our proprietary ledger technology."
        },
        "security": {
          "title": "Quantum Security",
          "desc": "Your assets protected by the highest level of encryption."
        },
        "global": {
          "title": "Global Reach",
          "desc": "Connect with 150+ countries seamlessly."
        },
        "analytics": {
          "title": "Real-time Analytics",
          "desc": "Deep insights into your spending and investment habits with AI-driven models."
        }
      },
      "calculator": {
        "title": "Investment Calculator",
        "principal": "Principal Amount",
        "period": "Time Period (Years)",
        "result": "Expected Return",
        "investNow": "Invest Now"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "features": "विशेषताएं",
        "calculator": "कैलकुलेटर",
        "reviews": "समीक्षाएं",
        "getStarted": "शुरू करें"
      },
      "hero": {
        "titleMain": "डिजिटल बैंकिंग का",
        "titleAccent": "नया स्वरूप।",
        "subtitle": "अगली पीढ़ी के लिए निर्मित सुरक्षित, सिनेमाई वित्तीय अनुभव। आधुनिक फिनटेक की गहराई का अनुभव करें।",
        "ctaPrimary": "अभी शुरू करें",
        "ctaSecondary": "अधिक जानें",
        "balance": "वर्तमान शेष"
      },
      "features": {
        "title": "उन्नत क्षमताएं",
        "instant": {
          "title": "त्वरित स्थानांतरण",
          "desc": "हमारी मालिकाना लेज़र तकनीक के साथ मिलीसेकंड में दुनिया भर में फंड ट्रांसफर करें।"
        },
        "security": {
          "title": "क्वांटम सुरक्षा",
          "desc": "आपकी संपत्ति उच्चतम स्तर के एन्क्रिप्शन द्वारा सुरक्षित है।"
        },
        "global": {
          "title": "वैश्विक पहुंच",
          "desc": "150+ देशों के साथ निर्बाध रूप से जुड़ें।"
        },
        "analytics": {
          "title": "वास्तविक समय विश्लेषण",
          "desc": "एआई-संचालित मॉडल के साथ आपके खर्च और निवेश की आदतों में गहरी अंतर्दृष्टि।"
        }
      },
      "calculator": {
        "title": "निवेश कैलकुलेटर",
        "principal": "मूल राशि",
        "period": "समय अवधि (वर्ष)",
        "result": "अपेक्षित रिटर्न",
        "investNow": "अभी निवेश करें"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
