/* ========== Translation System ========== */
let translations = {};
let currentLang = localStorage.getItem('lang') || (navigator.language && navigator.language.startsWith('es') ? 'es' : 'en');

// Traducciones embebidas
const embeddedTranslations = {
    es: {
        "nav": {
            "skip": "Saltar al contenido principal",
            "home": "Inicio",
            "creators": "Creadores",
            "services": "Servicios",
            "benefits": "Beneficios",
            "testimonials": "Testimonios",
            "faq": "FAQ",
            "contact": "Contáctame"
        },
        "cta": {
            "book": "Agenda llamada"
        },
        "hero": {
            "title": "Motion graphics que convierten vistas en leads.",
            "ctaText": "¿Listo para transformar tus videos? Agenda una llamada y llevemos tu marca al siguiente nivel.",
            "btnBook": "Agenda llamada"
        },
        "creators": {
            "title": "Creadores con los que he trabajado",
            "subtitle": "Colaboraciones exitosas con creadores de contenido"
        },
        "services": {
            "title": "Servicios",
            "subtitle": "Especializados en edición de video para redes y campañas",
            "editing": "Edición — Short form",
            "editingDesc": "Cortes rápidos, storytelling para redes, adaptaciones por plataforma y entregas optimizadas.",
            "sound": "Diseño sonoro",
            "soundDesc": "SFX, foley y mezcla final para lograr impacto emocional y claridad.",
            "color": "Color grading",
            "colorDesc": "Corrección y look final para elevar la estética de tu marca.",
            "motion": "Motion graphics",
            "motionDesc": "Animaciones y recursos gráficos que comunican y convierten."
        },
        "benefits": {
            "title": "Tu contenido merece generar resultados, no solo vistas.",
            "engagement": "Engagement que genera conversiones",
            "engagementDesc": "Nuestros motion graphics capturan atención inmediata y mantienen a tu audiencia comprometida, aumentando las tasas de conversión hasta en un 40%.",
            "communication": "Comunicación clara y memorable",
            "communicationDesc": "Transforma conceptos complejos en mensajes visuales impactantes que tu audiencia recordará y compartirá.",
            "professionalism": "Profesionalismo que inspira confianza",
            "professionalismDesc": "Eleva la percepción de tu marca con contenido de calidad premium que diferencia tu negocio de la competencia.",
            "advantages": "Ventajas exclusivas para tu crecimiento",
            "convertVideos": "Videos que convierten",
            "convertVideosDesc": "Produzco piezas optimizadas para generar leads y ventas, no solo vistas.",
            "expressDelivery": "Entrega express sin drama",
            "expressDeliveryDesc": "Archivos listos para publicar en 48–72 h con revisiones rápidas y coordinadas.",
            "strategicEditing": "Edición estratégica por plataforma",
            "strategicEditingDesc": "Versiones específicas (Reels, Shorts, TikTok) con formato, ritmo y estilo ideales.",
            "scalablePackages": "Paquetes escalables y sin ataduras",
            "scalablePackagesDesc": "Desde un single edit puntual hasta retainer mensual con prioridad de entrega."
        },
        "testimonials": {
            "title": "Testimonios",
            "subtitle": "Resultados reales que hablan por sí solos",
            "testimonio1": {
                "text": "Trabajar con Ariel es sinónimo de compromiso. Siempre responde a tiempo, entrega dentro del plazo y cuida cada detalle de la edición. Es un editor en el que realmente podés confiar.",
                "name": "Ángelo",
                "role": "Jefe de equipo de editores"
            },
            "testimonio2": {
                "text": "Responde rápido al feedback y lo aplica con criterio. Nunca hace cambios a ciegas: siempre explica por qué propone una opción u otra, y eso agiliza mucho el cierre del proyecto.",
                "name": "Marcelo",
                "role": "Content Specialist"
            },
            "testimonio3": {
                "text": "Es raro encontrar alguien que entienda tan rápido el estilo de uno. Ariel le dio una identidad a mis videos y mis seguidores lo notaron enseguida.",
                "name": "Jorge",
                "role": "Creador de contenido"
            }
        },
        "faq": {
            "title": "Preguntas Frecuentes",
            "subtitle": "Respuestas a las preguntas más comunes",
            "questions": [
                {
                    "q": "¿Qué pasa si no tengo una idea clara del estilo que quiero?",
                    "a": "No hay problema. Te ayudo a definir el tono visual, ritmo y referencias según tu objetivo y público."
                },
                {
                    "q": "¿Puedo pedir que el video tenga un estilo como el de cierto influencer o marca?",
                    "a": "Claro. Mándame ejemplos o reels de referencia, y adapto el look y ritmo a tu estilo personal o profesional."
                },
                {
                    "q": "¿Qué diferencia tu edición de otros editores?",
                    "a": "No solo corto y pego. Cada video se diseña con intención: retención, storytelling y conversión."
                },
                {
                    "q": "¿Cuánto tiempo toma una edición estándar?",
                    "a": "Normalmente 48–72 horas para edits tipo social; proyectos largos o con motion graphics pueden tardar más."
                },
                {
                    "q": "¿Ofreces entregas urgentes?",
                    "a": "Sí — servicio rush 24 h disponible con tarifa adicional y prioridad en la cola de producción."
                },
                {
                    "q": "¿Cuántas rondas de revisiones incluye el precio?",
                    "a": "Incluyo 2 rondas de revisiones gratuitas. Revisiones extra se cobran aparte o se incluyen en planes mensuales."
                },
                {
                    "q": "¿Puedo pagar por proyecto o por paquete mensual?",
                    "a": "Ambos. Si produces contenido frecuente, el plan mensual te sale más rentable y con prioridad de entrega."
                }
            ]
        },
        "contact": {
            "title": "¿Listo para llevar tu negocio al siguiente nivel?",
            "email": "Enviar Email",
            "call": "Agendar Llamada"
        },
        "footer": {
            "rights": "Todos los derechos reservados ©"
        }
    },
    en: {
        "nav": {
            "skip": "Skip to main content",
            "home": "Home",
            "creators": "Creators",
            "services": "Services",
            "benefits": "Benefits",
            "testimonials": "Testimonials",
            "faq": "FAQ",
            "contact": "Contact"
        },
        "cta": {
            "book": "Book call"
        },
        "hero": {
            "title": "Motion graphics that turn views into leads.",
            "ctaText": "Ready to transform your videos? Book a call and let's take your brand to the next level.",
            "btnBook": "Book call"
        },
        "creators": {
            "title": "Creators I've Worked With",
            "subtitle": "Successful collaborations with content creators"
        },
        "services": {
            "title": "Services",
            "subtitle": "Specialized in video editing for social media and campaigns",
            "editing": "Editing — Short form",
            "editingDesc": "Fast cuts, social storytelling, platform adaptations and optimized deliveries.",
            "sound": "Sound design",
            "soundDesc": "SFX, foley and final mix for emotional impact and clarity.",
            "color": "Color grading",
            "colorDesc": "Correction and final look to elevate your brand aesthetic.",
            "motion": "Motion graphics",
            "motionDesc": "Animations and graphical assets that communicate and convert."
        },
        "benefits": {
            "title": "Your content deserves to generate results, not just views.",
            "engagement": "Engagement that generates conversions",
            "engagementDesc": "Our motion graphics capture immediate attention and keep your audience engaged, increasing conversion rates by up to 40%.",
            "communication": "Clear and memorable communication",
            "communicationDesc": "Transform complex concepts into impactful visual messages that your audience will remember and share.",
            "professionalism": "Professionalism that inspires confidence",
            "professionalismDesc": "Elevate your brand perception with premium quality content that differentiates your business from the competition.",
            "advantages": "Exclusive advantages for your growth",
            "convertVideos": "Videos that convert",
            "convertVideosDesc": "I produce optimized pieces to generate leads and sales, not just views.",
            "expressDelivery": "Express delivery without complications",
            "expressDeliveryDesc": "Files ready to publish in 48-72h with fast and coordinated revisions.",
            "strategicEditing": "Strategic editing per platform",
            "strategicEditingDesc": "Specific versions (Reels, Shorts, TikTok) with ideal format, rhythm and style.",
            "scalablePackages": "Scalable packages without commitments",
            "scalablePackagesDesc": "From a single edit to monthly retainer with delivery priority."
        },
        "testimonials": {
            "title": "Testimonials",
            "subtitle": "Real results that speak for themselves",
            "testimonio1": {
                "text": "Working with Ariel is synonymous with commitment. He always responds on time, delivers within the deadline and takes care of every detail of the editing. He is an editor you can really trust.",
                "name": "Ángelo",
                "role": "Team Lead of Editors"
            },
            "testimonio2": {
                "text": "He responds quickly to feedback and applies it with criteria. He never makes changes blindly: he always explains why he proposes one option or another, and that speeds up the project closure a lot.",
                "name": "Marcelo",
                "role": "Content Specialist"
            },
            "testimonio3": {
                "text": "It's rare to find someone who understands one's style so quickly. Ariel gave an identity to my videos and my followers noticed it immediately.",
                "name": "Jorge",
                "role": "Content Creator"
            }
        },
        "faq": {
            "title": "Frequently Asked Questions",
            "subtitle": "Answers to the most common questions",
            "questions": [
                {
                    "q": "What if I don't have a clear idea of the style I want?",
                    "a": "No problem. I help you define the visual tone, rhythm and references according to your objective and audience."
                },
                {
                    "q": "Can I request the video to have a style like a certain influencer or brand?",
                    "a": "Of course. Send me examples or reference reels, and I'll adapt the look and rhythm to your personal or professional style."
                },
                {
                    "q": "What makes your editing different from other editors?",
                    "a": "I don't just cut and paste. Every video is designed with intention: retention, storytelling and conversion."
                },
                {
                    "q": "How long does a standard edit take?",
                    "a": "Normally 48-72 hours for social-type edits; longer projects or those with motion graphics may take longer."
                },
                {
                    "q": "Do you offer urgent deliveries?",
                    "a": "Yes — 24h rush service available with additional fee and priority in the production queue."
                },
                {
                    "q": "How many rounds of revisions are included in the price?",
                    "a": "I include 2 free revision rounds. Extra revisions are charged separately or included in monthly plans."
                },
                {
                    "q": "Can I pay per project or with a monthly package?",
                    "a": "Both. If you produce frequent content, the monthly plan is more cost-effective and includes delivery priority."
                }
            ]
        },
        "contact": {
            "title": "Ready to take your business to the next level?",
            "email": "Send Email",
            "call": "Schedule Call"
        },
        "footer": {
            "rights": "All rights reserved ©"
        }
    }
};

// Cargar traducciones
function loadTranslations() {
    console.log('Loading translations for:', currentLang);
    
    if (embeddedTranslations[currentLang]) {
        translations = embeddedTranslations[currentLang];
        console.log('Translations loaded successfully for:', currentLang);
    } else {
        translations = embeddedTranslations.es;
        currentLang = 'es';
        console.log('Fallback to Spanish translations');
    }
    
    applyTranslations(currentLang);
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    return value;
}

function applyTranslations(lang) {
    console.log('Applying translations for:', lang);
    currentLang = lang;
    
    // Aplicar traducciones a todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = getTranslation(key);
        if (translation !== key) {
            el.textContent = translation;
        }
    });
    
    // Actualizar el botón de idioma
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        const span = langToggle.querySelector('span');
        if (span) {
            span.textContent = lang.toUpperCase();
        }
    }
    
    // Actualizar el contenido del FAQ
    updateFAQContent();
    localStorage.setItem('lang', lang);
    
    console.log('Translations applied successfully');
}

function updateFAQContent() {
    console.log('Updating FAQ content for language:', currentLang);
    
    const faqData = getTranslation('faq.questions');
    const faqList = document.getElementById('faqList');
    
    if (faqList && Array.isArray(faqData) && faqData.length > 0) {
        faqList.innerHTML = '';
        
        faqData.forEach((f, idx) => {
            const item = document.createElement('div');
            item.className = 'faq-item';
            item.setAttribute('role', 'listitem');
            item.innerHTML = `
                <button class="faq-question" aria-expanded="false" aria-controls="faq${idx}">
                    <span>${f.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
                <div class="faq-answer" id="faq${idx}">
                    <p>${f.a}</p>
                </div>
            `;
            faqList.appendChild(item);
        });
        
        // Re-attach FAQ events after updating content
        attachFAQEvents();
    }
}

function attachFAQEvents() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            // Configurar estado inicial
            question.setAttribute('aria-expanded', 'false');
            answer.style.display = 'none';
            
            // Remover event listeners previos para evitar duplicados
            const newQuestion = question.cloneNode(true);
            question.parentNode.replaceChild(newQuestion, question);
            
            // Agregar nuevos event listeners
            newQuestion.addEventListener('click', handleFAQClick);
            newQuestion.addEventListener('keydown', handleFAQKeydown);
        }
    });
}

function handleFAQClick(e) {
    const question = e.currentTarget;
    toggleFaq(question);
}

function handleFAQKeydown(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const question = e.currentTarget;
        toggleFaq(question);
    }
}

function toggleFaq(question) {
    const answer = question.nextElementSibling;
    const isExpanded = question.getAttribute('aria-expanded') === 'true';
    
    question.setAttribute('aria-expanded', !isExpanded);
    
    if (!isExpanded) {
        answer.style.display = 'block';
        // Pequeño delay para la transición
        setTimeout(() => {
            answer.style.opacity = '1';
            answer.style.transform = 'translateY(0)';
        }, 10);
    } else {
        answer.style.opacity = '0';
        answer.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            answer.style.display = 'none';
        }, 300);
    }
}

/* ========== Fixed Header Behavior ========== */
(function() {
    const header = document.querySelector('header');
    if (!header) return;
    
    function updateHeader() {
        header.classList.toggle('scrolled', window.scrollY > 50);
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
})();

/* ========== Creators Carousel - AUTOMÁTICO Y EN LOOP SUAVE ========== */
(function(){
    const track = document.querySelector('.creators-track');
    if (!track) return;
    
    const creators = Array.from(track.children);
    if (creators.length === 0) return;

    // Duplicar elementos para loop infinito suave
    creators.forEach(creator => {
        const clone = creator.cloneNode(true);
        track.appendChild(clone);
    });

    let currentPosition = 0;
    let animationId;
    const speed = 0.8; // Velocidad del desplazamiento

    function animateCarousel() {
        currentPosition -= speed;
        
        const trackWidth = track.scrollWidth / 2; // Porque duplicamos los elementos
        if (currentPosition <= -trackWidth) {
            currentPosition = 0;
        }
        
        track.style.transform = `translateX(${currentPosition}px)`;
        animationId = requestAnimationFrame(animateCarousel);
    }

    function startAnimation() {
        if (!animationId) {
            animationId = requestAnimationFrame(animateCarousel);
        }
    }

    function stopAnimation() {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    }

    // Pausar al interactuar
    track.addEventListener('mouseenter', stopAnimation);
    track.addEventListener('mouseleave', startAnimation);
    track.addEventListener('focusin', stopAnimation);
    track.addEventListener('focusout', startAnimation);

    // Inicializar
    startAnimation();
})();

/* ========== Sistema de Partículas para Contact ========== */
(function(){
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 50;
    
    // Configuración de partículas
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 100 + 0.5;
            this.speedX = Math.random() * 0.2 - 0.25;
            this.speedY = Math.random() * 0.1 - 0.25;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.color = `rgba(11, 99, 255, ${this.opacity})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Rebote en los bordes
            if (this.x > canvas.width || this.x < 0) {
                this.speedX = -this.speedX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.speedY = -this.speedY;
            }
            
            // Reaparecer si se sale completamente
            if (this.x < -10 || this.x > canvas.width + 10 || 
                this.y < -10 || this.y > canvas.height + 10) {
                this.reset();
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animateParticles);
    }
    
    function resizeCanvas() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            canvas.width = contactSection.offsetWidth;
            canvas.height = contactSection.offsetHeight;
        }
    }
    
    // Inicializar
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    initParticles();
    animateParticles();
})();

/* ========== Mobile Menu Functionality ========== */
(function(){
    const menuToggle = document.getElementById('mobileMenuToggle');
    const menu = document.getElementById('main-menu');
    
    if (menuToggle && menu) {
        // Crear botón de menú móvil si no existe
        if (!menuToggle.querySelector('span')) {
            menuToggle.innerHTML = `
                <span></span>
                <span></span>
                <span></span>
            `;
        }
        
        // Asegurarse de que el menú tenga la clase para estilos móviles
        if (!menu.classList.contains('mobile-menu')) {
            menu.classList.add('mobile-menu');
        }
        
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
        });

        // Cerrar menú móvil al hacer clic en un enlace
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menu.classList.remove('active');
                    menuToggle.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });

        // Cerrar menú al hacer clic fuera
        document.addEventListener('click', (e) => {
            if (menu.classList.contains('active') && 
                !menu.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Cerrar menú con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && menu.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
})();

/* ========== Calendly Popup Handler ========== */
(function(){
    // Asegurarse de que Calendly esté disponible
    function initCalendly() {
        if (typeof Calendly !== 'undefined') {
            console.log('Calendly loaded successfully');
            
            // Agregar event listeners a todos los botones de Calendly
            document.querySelectorAll('[onclick*="Calendly.initPopupWidget"]').forEach(button => {
                // Clonar el botón para eliminar event listeners previos
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                
                // Agregar el event listener de forma limpia
                newButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    if (typeof Calendly !== 'undefined') {
                        Calendly.initPopupWidget({
                            url: 'https://calendly.com/amesaedits01/new-meeting'
                        });
                    } else {
                        console.error('Calendly not loaded');
                        // Fallback: abrir en nueva pestaña
                        window.open('https://calendly.com/amesaedits01/new-meeting', '_blank');
                    }
                    return false;
                });
            });
        } else {
            console.warn('Calendly not loaded, retrying...');
            setTimeout(initCalendly, 500);
        }
    }
    
    // Inicializar Calendly cuando esté disponible
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCalendly);
    } else {
        initCalendly();
    }
})();

/* ========== Contact Section Interactions ========== */
(function(){
    const contactEmailBtn = document.querySelector('.contact-simple .btn-primary');
    
    if (contactEmailBtn) {
        contactEmailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'mailto:hola@am-video.com?subject=Contacto desde web&body=Hola, me interesa conocer más sobre tus servicios.';
        });
    }
    
    // El botón de llamada ahora usa Calendly, no necesita event listener adicional
})();

/* ========== Utility Functions ========== */
(function(){
    // Actualizar año en el footer
    function updateYear() {
        const yearElement = document.getElementById('year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }

    // Mantener aspect ratio del video
    function maintainVideoAspectRatio() {
        const videoWraps = document.querySelectorAll('.video-wrap');
        videoWraps.forEach(wrap => {
            const iframe = wrap.querySelector('iframe');
            if (iframe) {
                const width = wrap.offsetWidth;
                iframe.style.height = (width * 9 / 16) + 'px';
            }
        });
    }

    // Language toggle
    const langToggleBtn = document.getElementById('langToggle');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            loadTranslations();
        });
    }

    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    window.addEventListener('resize', maintainVideoAspectRatio);
    window.addEventListener('load', () => {
        maintainVideoAspectRatio();
        updateYear();
    });
})();

// INICIALIZACIÓN PRINCIPAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('AM — Video Editing & Motion loaded successfully');
    
    // Cargar traducciones primero
    loadTranslations();
    
    // Inicializar componentes después de un breve delay
    setTimeout(() => {
        attachFAQEvents();
        updateYear();
        
        // Asegurar que los iconos de contacto estén bien alineados
        const contactButtons = document.querySelectorAll('.contact-buttons .btn');
        contactButtons.forEach(btn => {
            btn.style.display = 'inline-flex';
            btn.style.alignItems = 'center';
            btn.style.justifyContent = 'center';
            btn.style.gap = '10px';
        });
        
        console.log('All components initialized successfully');
    }, 300);
});