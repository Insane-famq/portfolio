// === СЛОВАРЬ ПЕРЕВОДОВ ===
const translations = {
  "Главная": "Home",
  "Услуги": "Services",
  "Пакеты": "Packages",
  "Портфолио": "Portfolio",
  "Навыки": "Skills",
  "Процесс": "Process",
  "FAQ": "FAQ",
  "Связаться": "Contact",
  "Кто я": "Who am I",
  "Что делаю": "What I do",
  "Пакетные предложения": "Package Deals",
  "Как я работаю": "How I work",
  "Частые вопросы": "Frequently Asked Questions",
  "Заказать": "Order",
  "Заказать пакет": "Order Package",
  "Доступен для заказов": "Available for orders",
  "🚀 Стартовый": "🚀 Starter",
  "💼 Бизнес": "💼 Business",
  "👑 Премиум": "👑 Premium",
  "Сколько стоит бот?": "How much does a bot cost?",
  "Сколько времени займёт разработка?": "How long does development take?",
  "Какие технологии используешь?": "What technologies do you use?",
  "Есть ли поддержка после сдачи?": "Is there support after delivery?",
  "Как проходит оплата?": "How does payment work?",
  "Разработка ботов и сайтов": "Bots & Websites Development",
  "Discord-боты": "Discord Bots",
  "Telegram-боты": "Telegram Bots",
  "Сайты": "Websites",
  "Автоматизация": "Automation",
};

let currentLang = localStorage.getItem('lang') || 'ru';

function translatePage(lang) {
  const isEn = lang === 'en';
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: function(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.tagName === 'SCRIPT' || parent.tagName === 'STYLE') {
          return NodeFilter.FILTER_REJECT;
        }
        if (node.textContent.trim().length === 0) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const text = node.textContent.trim();
    if (translations[text]) {
      if (!node._orig) node._orig = node.textContent;
      if (isEn) {
        node.textContent = node.textContent.replace(text, translations[text]);
      } else if (node._orig) {
        node.textContent = node._orig;
      }
    }
  });
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

function toggleLang(lang) {
  localStorage.setItem('lang', lang);
  location.reload();
}

document.addEventListener('DOMContentLoaded', () => {
  if (currentLang === 'en') translatePage('en');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });
});
