// Переводы для сайта Mario
const translations = {
  ru: {
    // Меню
    "menu_home": "Главная",
    "menu_services": "Услуги",
    "menu_packages": "Пакеты",
    "menu_portfolio": "Портфолио",
    "menu_skills": "Навыки",
    "menu_process": "Процесс",
    "menu_faq": "FAQ",
    "menu_contacts": "Связаться",

    // Заголовки секций
    "who_am_i": "Кто я",
    "what_i_do": "Что делаю",
    "services_title": "Услуги",
    "packages_title": "Пакетные предложения",
    "portfolio_title": "Портфолио",
    "skills_title": "Навыки",
    "process_title": "Как я работаю",
    "faq_title": "Частые вопросы",

    // Услуги
    "discord_bots": "Discord-боты",
    "telegram_bots": "Telegram-боты",
    "websites": "Сайты",
    "automation": "Автоматизация",
    "order": "Заказать",
    "order_package": "Заказать пакет",
    "from": "от",

    // Пакеты
    "pkg_starter": "🚀 Стартовый",
    "pkg_business": "💼 Бизнес",
    "pkg_premium": "👑 Премиум",

    // FAQ
    "faq_q1": "Сколько стоит бот?",
    "faq_q2": "Сколько времени займёт разработка?",
    "faq_q3": "Какие технологии используешь?",
    "faq_q4": "Есть ли поддержка после сдачи?",
    "faq_q5": "Как проходит оплата?",

    // Общие
    "available": "Доступен для заказов",
    "online": "Онлайн",
    "footer": "Разработка ботов и сайтов"
  },
  en: {
    // Menu
    "menu_home": "Home",
    "menu_services": "Services",
    "menu_packages": "Packages",
    "menu_portfolio": "Portfolio",
    "menu_skills": "Skills",
    "menu_process": "Process",
    "menu_faq": "FAQ",
    "menu_contacts": "Contact",

    // Section titles
    "who_am_i": "Who am I",
    "what_i_do": "What I do",
    "services_title": "Services",
    "packages_title": "Package Deals",
    "portfolio_title": "Portfolio",
    "skills_title": "Skills",
    "process_title": "How I work",
    "faq_title": "FAQ",

    // Services
    "discord_bots": "Discord Bots",
    "telegram_bots": "Telegram Bots",
    "websites": "Websites",
    "automation": "Automation",
    "order": "Order",
    "order_package": "Order Package",
    "from": "from",

    // Packages
    "pkg_starter": "🚀 Starter",
    "pkg_business": "💼 Business",
    "pkg_premium": "👑 Premium",

    // FAQ
    "faq_q1": "How much does a bot cost?",
    "faq_q2": "How long does development take?",
    "faq_q3": "What technologies do you use?",
    "faq_q4": "Is there support after delivery?",
    "faq_q5": "How does payment work?",

    // Common
    "available": "Available for orders",
    "online": "Online",
    "footer": "Bots & Websites Development"
  }
};

// Текущий язык
let currentLang = localStorage.getItem('lang') || 'ru';

// Применение языка
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Переключение кнопок языка
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

// Переключение языка
function toggleLang(lang) {
  applyLanguage(lang);
}

// Применение при загрузке
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});
