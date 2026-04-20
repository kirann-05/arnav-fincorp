import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav": {
        "personal": "Personal",
        "business": "Business",
        "investment": "Investment",
        "download": "Download App"
      },
      "hero": {
        "title1": "Experience Seamless",
        "title2": "Banking with",
        "brand": "Arnav Fincorp",
        "subtitle": "Take control of your finances and fundraising with our intuitive and secure mobile app.",
        "cta": "Get Started",
        "stats": {
          "users": "150K+",
          "desc": "Number of downloads"
        }
      },
      "features": {
        "title": "Discover our range of financial services",
        "badge": "SIMPLIFY",
        "card1": "USD Balance",
        "payNow": "Pay Now"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "personal": "व्यक्तिगत",
        "business": "व्यापार",
        "investment": "निवेश",
        "download": "ऐप डाउनलोड करें"
      },
      "hero": {
        "title1": "निर्बाध बैंकिंग का",
        "title2": "अनुभव करें",
        "brand": "अर्णव फिनकॉर्प",
        "subtitle": "हमारे सहज और सुरक्षित मोबाइल ऐप के साथ अपने वित्त और धन उगाहने पर नियंत्रण रखें।",
        "cta": "शुरू करें",
        "stats": {
          "users": "150K+",
          "desc": "डाउनलोड की संख्या"
        }
      },
      "features": {
        "title": "हमारी वित्तीय सेवाओं की श्रृंखला खोजें",
        "badge": "सरल बनाएं",
        "card1": "USD शेष",
        "payNow": "अभी भुगतान करें"
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
