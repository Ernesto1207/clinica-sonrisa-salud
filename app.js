/* ==========================================================================
   CLÍNICA DENTAL SONRISA & SALUD — Interactive Clinic Logic
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. Specialties Data (with Includes, Duration & FAQs)
     ------------------------------------------------------------------------ */
  const SPECIALTIES = [
    {
      id: 'diseno-sonrisa',
      title: 'Diseño de Sonrisa',
      bookingValue: 'Diseño de Sonrisa',
      duration: '2 a 3 sesiones · 60 min c/u',
      shortDesc:
        'Carillas ultrafinas y blanqueamiento clínico respetando el esmalte natural y la armonía de tu rostro.',
      summary:
        'Planificamos digitalmente tu sonrisa antes de tocar un solo diente. Podrás ver una simulación 3D real y probar un prototipo estético en boca para decidir con total seguridad.',
      includes: [
        'Escaneo intraoral 3D y fotografía facial de estudio',
        'Simulación digital (Mock-up) para previsualizar el resultado',
        'Carillas de porcelana feldespática o resina estética de alta naturalidad',
      ],
      faqs: [
        {
          q: '¿Se desgastan mucho los dientes?',
          a: 'Trabajamos con técnicas mínimamente invasivas de 0.3 mm o sin desgaste según cada caso.',
        },
        {
          q: '¿Se ve artificial o demasiado blanco?',
          a: 'Elegimos contigo el tono y textura natural para que armonice con tu piel y expresión.',
        },
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3l1.9 4.6L19 9.5l-5.1 1.9L12 16l-1.9-4.6L5 9.5l5.1-1.9L12 3z" />',
    },
    {
      id: 'ortodoncia-invisible',
      title: 'Ortodoncia Invisible',
      bookingValue: 'Ortodoncia Invisible',
      duration: '6 a 14 meses · Revisiones cada 6 semanas',
      shortDesc:
        'Alineadores transparentes y removibles diseñados a medida sin brackets metálicos ni rozaduras.',
      summary:
        'Corregimos la alineación y mordida mediante férulas transparentes prácticamente imperceptibles que puedes retirar para comer y cepillarte con normalidad.',
      includes: [
        'Escaneo 3D sin moldes incómodos de alginato',
        'Video simulación paso a paso del movimiento dental',
        'Juego completo de alineadores y retenedores finales',
      ],
      faqs: [
        {
          q: '¿Duele usar alineadores?',
          a: 'Solo se siente una ligera presión las primeras 24 horas al cambiar de férula, sin llagas ni alambres.',
        },
        {
          q: '¿Cuántas horas al día se usan?',
          a: 'Se recomienda utilizarlos entre 20 y 22 horas diarias para cumplir los tiempos estimados.',
        },
      ],
      icon: '<rect x="4" y="8" width="16" height="8" rx="4" /><path stroke-linecap="round" d="M8 12h8" />',
    },
    {
      id: 'implantes-dentales',
      title: 'Implantes Dentales',
      bookingValue: 'Implantes Dentales',
      duration: '1 sesión quirúrgica (45 min) + integración',
      shortDesc:
        'Recupera piezas perdidas con implantes de titanio biocompatibles y cirugía guiada por computadora.',
      summary:
        'Mediante tomografía 3D colocamos el implante con precisión milimétrica y mínima incisión, reduciendo inflamación y acelerando tu recuperación.',
      includes: [
        'Valoración con tomografía 3D de baja radiación',
        'Guía quirúrgica digital impresa en 3D',
        'Implante certificado de grado médico y corona cerámica personalizada',
      ],
      faqs: [
        {
          q: '¿El procedimiento es doloroso?',
          a: 'Se realiza con anestesia local computarizada (y sedación opcional), por lo que no sientes dolor durante la colocación.',
        },
        {
          q: '¿Cuánto dura un implante?',
          a: 'Con higiene adecuada y revisiones periódicas, está diseñado para durar décadas.',
        },
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 4v5m-3 0h6l-1 11h-4L9 9Z" /><path stroke-linecap="round" d="M10 13h4M10.5 16.5h3" />',
    },
    {
      id: 'odontopediatria',
      title: 'Odontopediatría',
      bookingValue: 'Odontopediatría',
      duration: '30 a 40 minutos · Ambiente adaptado',
      shortDesc:
        'Atención amable y preventiva para niñas y niños, creando experiencias positivas sin miedo.',
      summary:
        'Acompañamos el crecimiento dental desde el primer año de vida con lenguaje cercano, técnica "decir-mostrar-hacer" y cero prisas.',
      includes: [
        'Revisión preventiva de erupción y mordida',
        'Limpieza suave, aplicación de flúor y selladores sin dolor',
        'Guía práctica de cepillado para mamá, papá y peques',
      ],
      faqs: [
        {
          q: '¿A qué edad es recomendable la primera visita?',
          a: 'Al cumplir el primer año o cuando erupciona el primer diente, para prevenir caries tempranas.',
        },
        {
          q: '¿Puedo acompañar a mi hijo dentro del consultorio?',
          a: 'Sí, siempre fomentamos tu presencia cercana para darle seguridad.',
        },
      ],
      icon: '<circle cx="12" cy="12" r="8" /><path stroke-linecap="round" d="M9 14.5c.8 1 2 1.5 3 1.5s2.2-.5 3-1.5M9.5 10h.01M14.5 10h.01" />',
    },
    {
      id: 'endodoncia',
      title: 'Endodoncia',
      bookingValue: 'Endodoncia',
      duration: '1 sesión única · 50 a 70 minutos',
      shortDesc:
        'Salvamos piezas dentales dañadas eliminando el dolor de raíz mediante microscopía y anestesia suave.',
      summary:
        'Realizamos tratamientos de conductos con localizador apical digital y magnificación óptica para aliviar el dolor agudo en una sola visita cómoda.',
      includes: [
        'Radiografía digital instantánea de alta precisión',
        'Anestesia tópica previa y refuerzo computarizado indoloro',
        'Sellado tridimensional biocompatible del conducto',
      ],
      faqs: [
        {
          q: '¿Es cierto que la endodoncia duele?',
          a: 'Es un mito del pasado: hoy se realiza bajo anestesia profunda y justamente sirve para quitar el dolor.',
        },
        {
          q: '¿Puedo volver a mis actividades el mismo día?',
          a: 'Sí, al pasar el efecto de la anestesia puedes retomar tu rutina con normalidad.',
        },
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3c3 0 5 2.2 5 5.2 0 2.5-.9 4.5-1.3 7.3-.2 1.4-.7 3.5-1.7 3.5-.8 0-1.2-1.8-2-3-.8 1.2-1.2 3-2 3-1 0-1.5-2.1-1.7-3.5C7.9 12.7 7 10.7 7 8.2 7 5.2 9 3 12 3Z" />',
    },
    {
      id: 'limpieza-ultrasonica',
      title: 'Limpieza Ultrasónica',
      bookingValue: 'Valoración Integral / Limpieza Ultrasónica',
      duration: '40 minutos · Agua tibia sin sensibilidad',
      shortDesc:
        'Profilaxis profunda con ultrasonido de última generación y aire pulidor suave para encías sanas.',
      summary:
        'Removemos sarro, placa bacteriana y manchas superficiales con microvibraciones ultrasónicas y agua temperada para evitar sensibilidad dental.',
      includes: [
        'Detección digital de placa y salud de encías',
        'Limpieza ultrasónica con agua tibia (sin raspado brusco)',
        'Pulido suave con eritritol y remineralización',
      ],
      faqs: [
        {
          q: '¿Cada cuánto tiempo se recomienda?',
          a: 'Generalmente cada 6 meses para mantener encías sanas y prevenir problemas mayores.',
        },
        {
          q: '¿Daña el esmalte dental?',
          a: 'No, el ultrasonido y el polvo fino de eritritol respetan completamente el esmalte.',
        },
      ],
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18M5.5 8.5l13 7M18.5 8.5l-13 7" />',
    },
  ];

  /* ------------------------------------------------------------------------
     2. Header Scroll & Mobile Menu
     ------------------------------------------------------------------------ */
  const header = document.getElementById('site-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  const toggleMobileMenu = (forceClose = false) => {
    if (!mobileMenuBtn || !mobileMenu) return;
    const isOpen = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
    const next = forceClose ? false : !isOpen;
    mobileMenuBtn.setAttribute('aria-expanded', String(next));
    mobileMenuBtn.setAttribute(
      'aria-label',
      next ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );
    mobileMenu.classList.toggle('hidden', !next);
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
  }
  mobileNavLinks.forEach((link) =>
    link.addEventListener('click', () => toggleMobileMenu(true))
  );

  /* ------------------------------------------------------------------------
     3. Render Specialties Grid & Accessible Modal
     ------------------------------------------------------------------------ */
  const specialtiesGrid = document.getElementById('specialties-grid');
  const modal = document.getElementById('specialty-modal');
  const modalPanel = document.getElementById('spec-modal-panel');
  const modalCloseBtn = document.getElementById('spec-modal-close');
  const modalBookBtn = document.getElementById('spec-modal-book');

  const modalFields = {
    duration: document.getElementById('spec-modal-duration'),
    title: document.getElementById('spec-modal-title'),
    summary: document.getElementById('spec-modal-summary'),
    includes: document.getElementById('spec-modal-includes'),
    faqs: document.getElementById('spec-modal-faqs'),
  };

  let activeSpecialty = null;
  let lastTrigger = null;

  if (specialtiesGrid) {
    specialtiesGrid.innerHTML = SPECIALTIES.map(
      (spec) => `
      <article class="card-calm flex flex-col justify-between rounded-2xl p-6">
        <div>
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-sage-soft text-primary">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
              ${spec.icon}
            </svg>
          </div>
          <h3 class="font-heading mt-5 text-xl font-bold text-fg">${spec.title}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-fg">${spec.shortDesc}</p>
        </div>

        <div class="mt-6 flex items-center justify-between border-t border-border pt-4">
          <span class="text-xs font-medium text-sage">${spec.duration.split('·')[0].trim()}</span>
          <button
            type="button"
            class="specialty-trigger inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            data-spec-id="${spec.id}"
            aria-label="Ver detalles de ${spec.title}"
          >
            Ver detalles
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </article>
    `
    ).join('');

    specialtiesGrid.querySelectorAll('.specialty-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const spec = SPECIALTIES.find((s) => s.id === btn.dataset.specId);
        if (spec) openSpecialtyModal(spec, btn);
      });
    });
  }

  const getFocusables = (container) =>
    Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );

  const openSpecialtyModal = (spec, triggerEl) => {
    if (!modal || !modalPanel) return;
    activeSpecialty = spec;
    lastTrigger = triggerEl || document.activeElement;

    modalFields.duration.textContent = spec.duration;
    modalFields.title.textContent = spec.title;
    modalFields.summary.textContent = spec.summary;
    modalFields.includes.innerHTML = spec.includes
      .map(
        (item) => `
      <li class="flex items-start gap-2.5">
        <svg class="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m5 13 4 4L19 7" />
        </svg>
        <span>${item}</span>
      </li>
    `
      )
      .join('');

    modalFields.faqs.innerHTML = spec.faqs
      .map(
        (faq) => `
      <div class="rounded-xl border border-border bg-bg p-4">
        <p class="text-sm font-semibold text-fg">${faq.q}</p>
        <p class="mt-1 text-sm text-muted-fg">${faq.a}</p>
      </div>
    `
      )
      .join('');

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (modalCloseBtn) modalCloseBtn.focus();
  };

  const closeSpecialtyModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus();
      lastTrigger = null;
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeSpecialtyModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeSpecialtyModal();
    });
  }

  if (modalBookBtn) {
    modalBookBtn.addEventListener('click', () => {
      const specialtySelect = document.getElementById('booking-specialty');
      if (specialtySelect && activeSpecialty) {
        specialtySelect.value = activeSpecialty.bookingValue;
        specialtySelect.removeAttribute('aria-invalid');
        const err = document.getElementById('error-specialty');
        if (err) err.classList.add('hidden');
      }
      closeSpecialtyModal();
      const target = document.getElementById('agendar');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal || modal.getAttribute('aria-hidden') === 'true') return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeSpecialtyModal();
      return;
    }

    if (e.key === 'Tab' && modalPanel) {
      const focusables = getFocusables(modalPanel);
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  /* ------------------------------------------------------------------------
     4. FAQ Accordion
     ------------------------------------------------------------------------ */
  const faqTriggers = document.querySelectorAll('#faq-accordion .accordion-trigger');
  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panelId = trigger.getAttribute('aria-controls');
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) return;

      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      faqTriggers.forEach((other) => {
        if (other === trigger) return;
        const otherId = other.getAttribute('aria-controls');
        const otherPanel = otherId ? document.getElementById(otherId) : null;
        other.setAttribute('aria-expanded', 'false');
        if (otherPanel) otherPanel.classList.remove('is-open');
      });

      trigger.setAttribute('aria-expanded', String(!isExpanded));
      panel.classList.toggle('is-open', !isExpanded);
    });
  });

  /* ------------------------------------------------------------------------
     5. Step-by-Step Interactive Appointment Form
     ------------------------------------------------------------------------ */
  const bookingForm = document.getElementById('booking-form');
  const dateInput = document.getElementById('booking-date');
  const confirmationBox = document.getElementById('booking-confirmation');

  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }

  const steps = [
    document.getElementById('booking-step-1'),
    document.getElementById('booking-step-2'),
    document.getElementById('booking-step-3'),
  ];

  const indicators = [
    document.getElementById('step-indicator-1'),
    document.getElementById('step-indicator-2'),
    document.getElementById('step-indicator-3'),
  ];

  let currentStep = 0;

  const showStep = (stepIndex) => {
    currentStep = stepIndex;
    steps.forEach((el, idx) => {
      if (el) el.classList.toggle('hidden', idx !== stepIndex);
    });

    indicators.forEach((ind, idx) => {
      if (!ind) return;
      const badge = ind.querySelector('span:first-child');
      const isDoneOrCurrent = idx <= stepIndex;
      ind.classList.toggle('text-primary', isDoneOrCurrent);
      ind.classList.toggle('text-muted-fg', !isDoneOrCurrent);
      if (badge) {
        badge.className = isDoneOrCurrent
          ? 'flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white'
          : 'flex h-6 w-6 items-center justify-center rounded-full border border-border bg-bg text-muted-fg';
      }
    });
  };

  const validators = {
    'booking-specialty': (v) =>
      v.trim() !== '' ? '' : 'Por favor selecciona una especialidad o valoración.',
    'booking-branch': (v) =>
      v.trim() !== '' ? '' : 'Selecciona la sede de tu preferencia.',
    'booking-date': (v) =>
      v.trim() !== '' ? '' : 'Elige una fecha tentativa para tu cita.',
    'booking-time': (v) =>
      v.trim() !== '' ? '' : 'Selecciona un rango de horario.',
    'booking-name': (v) =>
      v.trim().length >= 2 ? '' : 'Ingresa tu nombre completo.',
    'booking-phone': (v) =>
      v.replace(/\D/g, '').length >= 8
        ? ''
        : 'Ingresa un número de teléfono o WhatsApp válido (mín. 8 dígitos).',
    'booking-email': (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())
        ? ''
        : 'Ingresa un correo electrónico válido.',
  };

  const validateField = (input) => {
    if (!input) return true;
    const fn = validators[input.id];
    if (!fn) return true;
    const errorId = input.getAttribute('aria-describedby');
    const errorEl = errorId ? document.getElementById(errorId) : null;
    const msg = fn(input.value);

    if (msg) {
      input.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = msg;
        errorEl.classList.remove('hidden');
      }
      return false;
    }

    input.removeAttribute('aria-invalid');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.add('hidden');
    }
    return true;
  };

  const validateStepFields = (fieldIds) => {
    let firstInvalid = null;
    fieldIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!validateField(el) && !firstInvalid) {
        firstInvalid = el;
      }
    });
    if (firstInvalid) {
      firstInvalid.focus();
      return false;
    }
    return true;
  };

  if (bookingForm) {
    Object.keys(validators).forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      el.addEventListener('blur', () => validateField(el));
      el.addEventListener('input', () => {
        if (el.getAttribute('aria-invalid') === 'true') validateField(el);
      });
      el.addEventListener('change', () => {
        if (el.getAttribute('aria-invalid') === 'true') validateField(el);
      });
    });

    const btnNext1 = document.getElementById('btn-next-1');
    const btnPrev2 = document.getElementById('btn-prev-2');
    const btnNext2 = document.getElementById('btn-next-2');
    const btnPrev3 = document.getElementById('btn-prev-3');

    if (btnNext1) {
      btnNext1.addEventListener('click', () => {
        if (validateStepFields(['booking-specialty'])) showStep(1);
      });
    }
    if (btnPrev2) {
      btnPrev2.addEventListener('click', () => showStep(0));
    }
    if (btnNext2) {
      btnNext2.addEventListener('click', () => {
        if (
          validateStepFields([
            'booking-branch',
            'booking-date',
            'booking-time',
          ])
        ) {
          showStep(2);
        }
      });
    }
    if (btnPrev3) {
      btnPrev3.addEventListener('click', () => showStep(1));
    }

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (
        !validateStepFields([
          'booking-name',
          'booking-phone',
          'booking-email',
        ])
      ) {
        return;
      }

      const name = document.getElementById('booking-name').value.trim();
      const specialty = document.getElementById('booking-specialty').value;
      const branch = document.getElementById('booking-branch').value;
      const date = document.getElementById('booking-date').value;
      const time = document.getElementById('booking-time').value;

      bookingForm.reset();
      showStep(0);

      if (confirmationBox) {
        confirmationBox.innerHTML = `
          <p class="font-heading text-base font-bold text-success">¡Solicitud de cita recibida, ${name}!</p>
          <p class="mt-1 text-sm text-fg">
            Registramos tu interés en <strong>${specialty}</strong> en <strong>${branch}</strong> para el <strong>${date}</strong> (${time}). Nuestro equipo de recepción te confirmará por WhatsApp en menos de 30 minutos dentro del horario laboral.
          </p>
        `;
        confirmationBox.classList.remove('hidden');
      }
    });
  }
})();
