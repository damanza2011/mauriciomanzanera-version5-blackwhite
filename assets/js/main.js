/* ==========================================================================
   MAURICIO MANZANERA - RED GLOBAL CONSULTORÍAS "MUNDO MEJOR"
   VERSIÓN 5: JAVASCRIPT CORE CON CHATBOT "HABLA CON MAURO" (VOZ Y TEXTO 100% FUNCIONAL)
   ========================================================================== */

// --- 1. DICCIONARIO INTERNACIONAL (5 IDIOMAS) ---
const translations = {
  es: {
    nav_inicio: "Inicio",
    nav_quienes: "Quiénes Somos",
    nav_soluciones: "Soluciones Ecológicas",
    nav_metodo: "El Método",
    nav_credenciales: "Trayectoria",
    nav_crm: "CRM Directivo",
    btn_agendar: "Agendar Sesión",
    hero_tag: "SOLUCIONES ECOLÓGICAS Y MEJORAMIENTO CONTINUO",
    hero_title: "Estrategia Global, Negociación de Alto Nivel y Soluciones Ecológicas.",
    hero_subtitle: "Presidente de Red Global Consultorías S.A.S. Desarrollamos soluciones donde el error ocurrido en el sistema se convierte en el proceso de aprendizaje para remediar y entrar en Mejora Continua, sin penalizar a sus actores y salvaguardando la inversión.",
    btn_cta_diagnostico: "Solicitar Diagnóstico Gratuito",
    btn_cta_whatsapp: "WhatsApp Directo",
    stats_years: "+20 Años",
    stats_years_sub: "Trayectoria Ejecutiva Multilateral",
    stats_deals: "+150 Acuerdos",
    stats_deals_sub: "Negociaciones y Juntas Directivas",
    stats_languages: "5 Idiomas",
    stats_languages_sub: "Negociación Internacional",
    stats_confidential: "100% Ético",
    stats_confidential_sub: "Gobernanza y Sostenibilidad ESG",
    philosophy_title: "La Filosofía de la Solución Ecológica",
    philosophy_subtitle: "Por qué las organizaciones líderes resuelven sus desafíos sistémicos con nosotros.",
    diag_modal_title: "Diagnóstico Organizacional Inicial (Gratuito)",
    diag_modal_sub: "Complete la información y reciba una evaluación confidencial directa con Mauricio Manzanera.",
    chat_header_title: "Mauricio Manzanera — Asesor Virtual",
    chat_status: "En línea | Voz y Texto Activo",
    chat_welcome: "Hola, le habla el asesor corporativo de Mauricio Manzanera. ¿Qué desafío o negociación requiere evaluar en su organización? Puede escribir o pulsar el micrófono para hablar.",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Todos los derechos reservados. Red Global Consultorías S.A.S. — Mundo Mejor."
  },
  en: {
    nav_inicio: "Home",
    nav_quienes: "About Us",
    nav_soluciones: "Ecological Solutions",
    nav_metodo: "The Method",
    nav_credenciales: "Credentials",
    nav_crm: "Executive CRM",
    btn_agendar: "Book Session",
    hero_tag: "ORGANIZATIONAL ECOLOGICAL SOLUTIONS & CONTINUOUS IMPROVEMENT",
    hero_title: "Global Strategy, High-Stakes Negotiation and Ecological Solutions.",
    hero_subtitle: "President of Red Global Consultorías S.A.S. Architecting corporate solutions where systemic errors become institutional learning to remediate and drive continuous improvement, safeguarding stakeholders and investments.",
    btn_cta_diagnostico: "Get Free Assessment",
    btn_cta_whatsapp: "Direct WhatsApp",
    stats_years: "+20 Years",
    stats_years_sub: "Multilateral Executive Leadership",
    stats_deals: "+150 Deals",
    stats_deals_sub: "Boardroom & Shareholder Mediation",
    stats_languages: "5 Languages",
    stats_languages_sub: "Cross-Border Negotiations",
    stats_confidential: "100% Ethical",
    stats_confidential_sub: "Governance & ESG Sustainability",
    philosophy_title: "The Ecological Solution Philosophy",
    philosophy_subtitle: "Why forward-thinking enterprises remediate systemic challenges with us.",
    diag_modal_title: "Initial Executive Assessment (Complimentary)",
    diag_modal_sub: "Submit your details for a direct confidential assessment with Mauricio Manzanera.",
    chat_header_title: "Mauricio Manzanera — Virtual Advisor",
    chat_status: "Online | Voice & Text Enabled",
    chat_welcome: "Greetings, I am Mauricio Manzanera's corporate advisor. What organizational challenge or negotiation may I assist you with today? Type or tap the microphone.",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. All rights reserved. Red Global Consultorías S.A.S. — Mundo Mejor."
  },
  fr: {
    nav_inicio: "Accueil",
    nav_quienes: "Qui Sommes-Nous",
    nav_soluciones: "Solutions Écologiques",
    nav_metodo: "La Méthode",
    nav_credenciales: "Parcours",
    nav_crm: "CRM Directoire",
    btn_agendar: "Prendre RDV",
    hero_tag: "SOLUTIONS ÉCOLOGIQUES ET AMÉLIORATION CONTINUE",
    hero_title: "Stratégie Mondiale, Négociation de Haut Niveau et Solutions Écologiques.",
    hero_subtitle: "Président de Red Global Consultorías S.A.S. Dans nos solutions, l'erreur génère un apprentissage systémique sans pénaliser les acteurs, protégeant le capital et la rentabilité.",
    btn_cta_diagnostico: "Diagnostic Gratuit",
    btn_cta_whatsapp: "WhatsApp Direct",
    stats_years: "+20 Ans",
    stats_years_sub: "Leadership International",
    stats_deals: "+150 Accords",
    stats_deals_sub: "Négociations en Conseils",
    stats_languages: "5 Langues",
    stats_languages_sub: "Commerce Global",
    stats_confidential: "100% Éthique",
    stats_confidential_sub: "Gouvernance & ESG",
    philosophy_title: "La Philosophie de la Solution Écologique",
    philosophy_subtitle: "Pourquoi les entreprises leaders surmontent leurs défis systémiques avec nous.",
    diag_modal_title: "Diagnostic Organisationnel Initial (Gratuit)",
    diag_modal_sub: "Remplissez vos informations pour une consultation directe avec Mauricio Manzanera.",
    chat_header_title: "Mauricio Manzanera — Conseiller Virtuel",
    chat_status: "En ligne | Voix et Texte",
    chat_welcome: "Bonjour, quel défi d'entreprise ou de négociation souhaitez-vous aborder avec Mauricio Manzanera ?",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Tous droits réservés. Red Global Consultorías S.A.S. — Mundo Mejor."
  },
  it: {
    nav_inicio: "Inizio",
    nav_quienes: "Chi Siamo",
    nav_soluciones: "Soluzioni Ecologiche",
    nav_metodo: "Il Metodo",
    nav_credenciales: "Esperienza",
    nav_crm: "CRM Direttivo",
    btn_agendar: "Prenota Sessione",
    hero_tag: "SOLUZIONI ECOLOGICHE E MIGLIORAMENTO CONTINUO",
    hero_title: "Strategia Globale, Negoziazione di Alto Livello e Soluzioni Ecologiche.",
    hero_subtitle: "Presidente di Red Global Consultorías S.A.S. Nelle nostre soluzioni, nessun collaboratore paga per gli errori commessi nel sistema: il sistema impara per attuare il Miglioramento Continuo.",
    btn_cta_diagnostico: "Diagnosi Gratuita",
    btn_cta_whatsapp: "WhatsApp Diretto",
    stats_years: "+20 Anni",
    stats_years_sub: "Esperienza Esecutiva",
    stats_deals: "+150 Accordi",
    stats_deals_sub: "Consigli di Amministrazione",
    stats_languages: "5 Lingue",
    stats_languages_sub: "Negoziati Globali",
    stats_confidential: "100% Etico",
    stats_confidential_sub: "Governance e ESG",
    philosophy_title: "La Filosofia della Soluzione Ecologica",
    philosophy_subtitle: "Perché le organizzazioni leader superano i problemi di sistema con noi.",
    diag_modal_title: "Diagnosi Organizzativa Iniziale (Gratuita)",
    diag_modal_sub: "Inserisci i tuoi dati per un piano di miglioramento con Mauricio Manzanera.",
    chat_header_title: "Mauricio Manzanera — Assistente Virtuale",
    chat_status: "Online | Voce e Testo",
    chat_welcome: "Benvenuto, sono l'assistente di Mauricio Manzanera. Quale sfida aziendale o negoziazione possiamo valutare?",
    footer_copy: "© 2026 Mauricio Manzanera Jaramillo. Tutti i diritti riservati. Red Global Consultorías S.A.S. — Mundo Mejor."
  },
  ar: {
    nav_inicio: "الرئيسية",
    nav_quienes: "من نحن",
    nav_soluciones: "حلول بيئية",
    nav_metodo: "المنهجية",
    nav_credenciales: "المسيرة المهنية",
    nav_crm: "إدارة العملاء",
    btn_agendar: "حجز موعد",
    hero_tag: "حلول بيئية تنظيمية وتحسين مستمر",
    hero_title: "استراتيجية عالمية، تفاوض رفيع المستوى وحلول بيئية مستدامة.",
    hero_subtitle: "رئيس Red Global Consultorías S.A.S. نقوم بتطوير المنظمات عبر المبدأ البيئي: يتعلم النظام من الخطأ دون معاقبة الأفراد لضمان التحسين المستمر وحماية الاستثمارات.",
    btn_cta_diagnostico: "تشخيص تنظيمي مجاني",
    btn_cta_whatsapp: "واتساب مباشر",
    stats_years: "+20 عاماً",
    stats_years_sub: "خبرة تنفيذية دولية",
    stats_deals: "+150 اتفاقية",
    stats_deals_sub: "مجالس الإدارة والتفاوض",
    stats_languages: "5 لغات",
    stats_languages_sub: "مفاوضات عالمية",
    stats_confidential: "100% أخلاقي",
    stats_confidential_sub: "حوكمة واستدامة مؤسسية",
    philosophy_title: "فلسفة الحلول البيئية المؤسسية",
    philosophy_subtitle: "لماذا تختار الشركات الرائدة معالجة التحديات التنظيمية معنا.",
    diag_modal_title: "التشخيص التنظيمي الأولي (مجاناً)",
    diag_modal_sub: "أدخل معلوماتك للحصول على استشارة مباشرة وسرية مع ماوريسيو مانزانيرا.",
    chat_header_title: "ماوريسيو مانزانيرا — المستشار المؤسسي",
    chat_status: "متصل | دعم صوتي ونصي",
    chat_welcome: "مرحباً بك، أنا المساعد التنفيذي لماوريسيو مانزانيرا. كيف يمكنني مساعدة منظمتك اليوم؟",
    footer_copy: "© 2026 ماوريسيو مانزانيرا جاراميلو. جميع الحقوق محفوظة. Red Global Consultorías S.A.S. — Mundo Mejor."
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  localStorage.setItem('mm_v5_lang', lang);
}

// --- 2. BASE DE CONOCIMIENTO EXTENSA PARA CHATBOT ---
const knowledgeBase = [
  {
    triggers: ["solucion", "ecologica", "ecologicas", "ecologico", "error", "errores", "filosofia", "mundo mejor"],
    response: "Nuestras Soluciones Ecológicas se basan en un principio fundamental: ningún actor o elemento paga por los errores cometidos en los procesos. Al ocurrir en el sistema, es el sistema el que entra en aprendizaje para remediar y entrar en Mejora Continua, salvaguardando la inversión y el talento."
  },
  {
    triggers: ["quien", "mauricio", "manzanera", "perfil", "trayectoria", "presidente", "red global"],
    response: "Mauricio Manzanera Jaramillo es Solutions Consultant y Presidente de Red Global Consultorías S.A.S. (Mundo Mejor). Posee más de 20 años de experiencia ejecutiva internacional, ex-Vicepresidente de I.B.R. Ltda. en Londres y Medellín, con formación en Javeriana, UniAndes y City College of London."
  },
  {
    triggers: ["estudios", "formacion", "universidad", "javeriana", "andes", "london"],
    response: "Mauricio es Administrador de Empresas de la Pontificia Universidad Javeriana (2002), con estudios en Ingeniería Industrial en la Universidad de los Andes y Contabilidad y Finanzas en el City College of London."
  },
  {
    triggers: ["pnl", "neurolinguistica", "negociacion", "socios", "junta"],
    response: "Aplica Programación Neurolingüística (PNL) directiva para resolver bloqueos en juntas directivas, pactos societarios y acuerdos comerciales complejos sin desgastar el clima corporativo."
  },
  {
    triggers: ["contacto", "whatsapp", "telefono", "celular", "hablar", "numero"],
    response: "Puede comunicarse directamente con Mauricio Manzanera por WhatsApp al +57 318 266 4266 o pulsando el botón flotante de WhatsApp en pantalla."
  },
  {
    triggers: ["diagnostico", "gratis", "gratuito", "evaluacion", "costo"],
    response: "Ofrecemos un Diagnóstico Inicial Gratuito para evaluar qué está fallando en su organización y diseñar la ruta de remediación. Puede solicitarlo con el botón 'Diagnóstico Gratuito'."
  },
  {
    triggers: ["redes", "redes sociales", "linkedin", "facebook", "instagram", "youtube"],
    response: "Redes Oficiales: LinkedIn (/in/mauriciomanzanera), FaceBook (@mauriciomanzanera), Instagram (@mauriciomanzanera) y YouTube (Mauricio Manzanera)."
  },
  {
    triggers: ["idiomas", "ingles", "frances", "italiano", "arabe"],
    response: "Mauricio conduce negociaciones internacionales en 5 idiomas: Español (nativo), Inglés corporativo, Italiano, Francés y Árabe (para misiones en Oriente Medio)."
  }
];

function getBotAnswer(query) {
  const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  for (let item of knowledgeBase) {
    for (let trigger of item.triggers) {
      if (q.includes(trigger)) {
        return item.response;
      }
    }
  }
  return "Excelente consulta. Para este caso puntual en su organización, le sugerimos agendar una sesión confidencial con Mauricio Manzanera al WhatsApp +57 318 266 4266 o solicitar el Diagnóstico Inicial Gratuito.";
}

// --- 3. RECONOCIMIENTO Y SÍNTESIS DE VOZ (WEB SPEECH API) ---
let recognition = null;
let isListening = false;

function setupSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    console.warn("Speech Recognition API not supported in this browser.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onstart = () => {
    isListening = true;
    const micBtn = document.getElementById('chat-mic-btn');
    if (micBtn) {
      micBtn.classList.add('bg-red-500', 'text-white', 'animate-pulse');
      micBtn.classList.remove('bg-white', 'text-black');
    }
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    const input = document.getElementById('chat-input');
    if (input) {
      input.value = transcript;
      handleSendMessage();
    }
  };

  recognition.onerror = () => {
    isListening = false;
    resetMicButton();
  };

  recognition.onend = () => {
    isListening = false;
    resetMicButton();
  };
}

function resetMicButton() {
  const micBtn = document.getElementById('chat-mic-btn');
  if (micBtn) {
    micBtn.classList.remove('bg-red-500', 'text-white', 'animate-pulse');
    micBtn.classList.add('bg-white', 'text-black');
  }
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  const langMap = { es: 'es-ES', en: 'en-US', fr: 'fr-FR', it: 'it-IT', ar: 'ar-SA' };
  utterance.lang = langMap[currentLang] || 'es-ES';
  utterance.rate = 1.0;
  window.speechSynthesis.speak(utterance);
}

// --- 4. GESTIÓN DEL CHAT (INTERFAZ) ---
function appendChatMessage(sender, text) {
  const box = document.getElementById('chat-messages');
  if (!box) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = sender === 'user' ? 'flex justify-end mb-3' : 'flex justify-start mb-3';

  const bubble = document.createElement('div');
  bubble.className = sender === 'user'
    ? 'bg-white text-black font-medium rounded-2xl rounded-tr-none px-4 py-2.5 max-w-[85%] text-sm shadow-md'
    : 'bg-[#151c32] text-slate-100 border border-white/10 rounded-2xl rounded-tl-none px-4 py-2.5 max-w-[85%] text-sm shadow-md';

  bubble.innerHTML = text;
  msgDiv.appendChild(bubble);
  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
}

function handleSendMessage() {
  const input = document.getElementById('chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  appendChatMessage('user', text);
  input.value = '';

  setTimeout(() => {
    const answer = getBotAnswer(text);
    appendChatMessage('bot', answer);
    speakText(answer);
  }, 400);
}

// --- 5. MINI CRM & LOCALSTORAGE ---
function getCRMLeads() {
  const data = localStorage.getItem('mm_v5_leads');
  return data ? JSON.parse(data) : [];
}

function saveCRMLead(lead) {
  const leads = getCRMLeads();
  leads.unshift({
    id: Date.now(),
    date: new Date().toLocaleString(),
    ...lead
  });
  localStorage.setItem('mm_v5_leads', JSON.stringify(leads));
  renderCRMTable();
}

function renderCRMTable() {
  const tbody = document.getElementById('crm-table-body');
  if (!tbody) return;
  const leads = getCRMLeads();

  if (leads.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-slate-400">Aún no hay prospectos registrados. Utilice el formulario de Diagnóstico para probar la captura.</td></tr>`;
    return;
  }

  tbody.innerHTML = leads.map(l => `
    <tr class="border-b border-white/10 hover:bg-white/5 transition">
      <td class="py-3 px-4 text-xs font-mono text-slate-400">${l.date}</td>
      <td class="py-3 px-4 font-semibold text-white">${l.name}</td>
      <td class="py-3 px-4 text-sm text-slate-300">${l.company || 'N/A'}</td>
      <td class="py-3 px-4 text-sm text-white font-medium">${l.challenge}</td>
      <td class="py-3 px-4 text-sm font-mono text-slate-300">${l.phone}</td>
      <td class="py-3 px-4">
        <a href="https://wa.me/${l.phone.replace(/[^0-9]/g, '')}?text=Hola%20${encodeURIComponent(l.name)},%20te%20contacto%20de%20parte%20de%20Mauricio%20Manzanera%20de%20Red%20Global%20Consultor%C3%ADas" target="_blank" class="inline-flex items-center gap-1 text-xs bg-white text-black font-bold px-2.5 py-1 rounded hover:bg-slate-200 transition">
          WhatsApp
        </a>
      </td>
    </tr>
  `).join('');
}

function exportCRMToCSV() {
  const leads = getCRMLeads();
  if (leads.length === 0) {
    alert("No hay prospectos para exportar.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8,Fecha,Nombre,Empresa,Desafio,Telefono,Email\n";
  leads.forEach(l => {
    csvContent += `"${l.date}","${l.name}","${l.company || ''}","${l.challenge}","${l.phone}","${l.email || ''}"\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `Leads_RedGlobalConsultorias_V5_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- 6. INICIALIZACIÓN GLOBAL ---
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('mm_v5_lang') || 'es';
  setLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(btn.getAttribute('data-lang'));
    });
  });

  setupSpeechRecognition();

  // Chatbot Toggle & Listeners
  const chatToggleBtn = document.getElementById('chat-toggle-btn');
  const chatModal = document.getElementById('chat-modal');
  const chatCloseBtn = document.getElementById('chat-close-btn');

  if (chatToggleBtn && chatModal) {
    chatToggleBtn.addEventListener('click', () => {
      chatModal.classList.toggle('hidden');
      if (!chatModal.classList.contains('hidden')) {
        document.getElementById('chat-input')?.focus();
      }
    });
  }

  if (chatCloseBtn && chatModal) {
    chatCloseBtn.addEventListener('click', () => {
      chatModal.classList.add('hidden');
      window.speechSynthesis?.cancel();
    });
  }

  document.getElementById('chat-send-btn')?.addEventListener('click', handleSendMessage);
  document.getElementById('chat-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  });

  document.getElementById('chat-mic-btn')?.addEventListener('click', () => {
    if (!recognition) {
      alert("El reconocimiento por voz está soportado en navegadores como Google Chrome o Microsoft Edge.");
      return;
    }
    if (isListening) {
      recognition.stop();
    } else {
      const langMap = { es: 'es-ES', en: 'en-US', fr: 'fr-FR', it: 'it-IT', ar: 'ar-SA' };
      recognition.lang = langMap[currentLang] || 'es-ES';
      recognition.start();
    }
  });

  document.querySelectorAll('.quick-q-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.textContent.trim();
      document.getElementById('chat-input').value = q;
      handleSendMessage();
    });
  });

  // Diagnostic Modal
  const diagModal = document.getElementById('diagnostic-modal');
  const openDiagBtns = document.querySelectorAll('.open-diagnostic-btn');
  const closeDiagBtn = document.getElementById('close-diagnostic-btn');

  openDiagBtns.forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      diagModal?.classList.remove('hidden');
    });
  });

  closeDiagBtn?.addEventListener('click', () => diagModal?.classList.add('hidden'));

  document.getElementById('diagnostic-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('diag-name').value;
    const company = document.getElementById('diag-company').value;
    const phone = document.getElementById('diag-phone').value;
    const email = document.getElementById('diag-email').value;
    const challenge = document.getElementById('diag-challenge').value;

    saveCRMLead({ name, company, phone, email, challenge });

    const waMsg = `Hola Mauricio, solicito el Diagnóstico Inicial Gratuito para mi empresa:%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Empresa:* ${encodeURIComponent(company)}%0A*Desafío:* ${encodeURIComponent(challenge)}%0A*Teléfono:* ${encodeURIComponent(phone)}`;
    window.open(`https://wa.me/573182664266?text=${waMsg}`, '_blank');

    alert(`¡Diagnóstico registrado con éxito! Le estamos comunicando con el WhatsApp de Mauricio Manzanera.`);
    diagModal.classList.add('hidden');
    e.target.reset();
  });

  // CRM Modal
  const crmModal = document.getElementById('crm-modal');
  document.querySelectorAll('.open-crm-btn').forEach(b => {
    b.addEventListener('click', (e) => {
      e.preventDefault();
      renderCRMTable();
      crmModal?.classList.remove('hidden');
    });
  });

  document.getElementById('close-crm-btn')?.addEventListener('click', () => crmModal?.classList.add('hidden'));
  document.getElementById('export-crm-btn')?.addEventListener('click', exportCRMToCSV);

  // Pre-cargar 1 lead de muestra
  if (getCRMLeads().length === 0) {
    saveCRMLead({
      name: "Alejandro Valencia",
      company: "Grupo Valencia & Cía",
      challenge: "Conflicto en Junta y Soluciones Ecológicas",
      phone: "+57 300 987 6543",
      email: "avalencia@grupovalencia.com"
    });
  }
});
