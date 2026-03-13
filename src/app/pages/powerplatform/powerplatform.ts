import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-powerapps',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, RouterLink],
  template: `
    <!-- ─── Header mínimo ─── -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur border-b border-white/5" role="banner">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a [routerLink]="['/']" class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity focus-visible:outline-2 focus-visible:outline-indigo-400 rounded" aria-label="Ir al inicio">
          <span class="text-indigo-600">Dev</span><span class="text-white">man</span>
        </a>
        <a
          [routerLink]="[]" fragment="formulario"
          class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-indigo-400"
        >
          Quiero una asesoría gratis
        </a>
      </div>
    </header>

    <main id="main-content">

      <!-- ─── Hero + Formulario ─── -->
      <section
        class="relative min-h-screen bg-linear-to-br from-slate-900 via-indigo-950 to-violet-950 pt-20"
        aria-label="Propuesta de valor"
      >
        <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div class="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"></div>
          <div class="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl"></div>
        </div>

        <div class="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16 items-center">

          <!-- Izquierda: mensaje -->
          <div>
            <span class="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full border border-indigo-500/30 mb-6">
              <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true"></span>
              Microsoft Power Platform
            </span>

            <h1 class="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Digitaliza tu negocio<br>
              <span class="bg-linear-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                sin pagar una fortuna
              </span>
            </h1>

            <p class="text-gray-300 text-lg leading-relaxed mb-8">
              Creo aplicaciones, automatizaciones y paneles de datos a medida
              para pymes y startups usando Microsoft Power Platform.
              Tu equipo trabaja mejor, pierdes menos tiempo y tu negocio
              crece.
            </p>

            <!-- Micro-beneficios -->
            <ul class="space-y-3 mb-10" role="list">
              @for (item of microBenefits; track item) {
                <li class="flex items-center gap-3 text-gray-200">
                  <svg class="w-5 h-5 text-indigo-400 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ item }}
                </li>
              }
            </ul>

          </div>

          <!-- Derecha: formulario -->
          <div id="formulario">
            <div class="bg-white/5 backdrop-blur border border-white/15 rounded-2xl p-8 shadow-2xl">
              @if (submitted()) {
                <div class="text-center py-8" role="status" aria-live="polite">
                  <div class="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h2 class="text-2xl font-bold text-white mb-2">¡Mensaje Enviado Correctamente!</h2>
                  <p class="text-gray-400">Recibirás respuesta lo antes posible.</p>
                </div>
              } @else {
                <div class="mb-6">
                  <h2 class="text-2xl font-bold text-white mb-1">Asesoría gratuita y sin compromiso</h2>
                  <p class="text-gray-400 text-sm">Cuéntame tu situación y te digo si puedo ayudarte.</p>
                </div>

                <form
                  [formGroup]="leadForm"
                  (ngSubmit)="onSubmit()"
                  novalidate
                  aria-label="Formulario de contacto Power Platform"
                  class="space-y-4"
                >
                  <!-- Nombre -->
                  <div>
                    <label for="lead-name" class="block text-sm font-medium text-gray-300 mb-1.5">
                      Tu nombre <span aria-hidden="true" class="text-red-400">*</span>
                    </label>
                    <input
                      id="lead-name"
                      type="text"
                      formControlName="name"
                      autocomplete="name"
                      placeholder="Ej: María García"
                      [attr.aria-invalid]="isInvalid('name')"
                      aria-describedby="lead-name-error"
                      [class]="fieldClass('name')"
                    />
                    @if (hasError('name', 'required')) {
                      <p id="lead-name-error" class="mt-1 text-xs text-red-400" role="alert">El nombre es requerido.</p>
                    }
                  </div>

                  <!-- Teléfono -->
                  <div>
                    <label for="lead-phone" class="block text-sm font-medium text-gray-300 mb-1.5">
                      Teléfono <span class="text-gray-500 text-xs font-normal">(opcional)</span>
                    </label>
                    <input
                      id="lead-phone"
                      type="tel"
                      formControlName="phone"
                      autocomplete="tel"
                      placeholder="Ej: +56 9 1234 5678"
                      [attr.aria-invalid]="isInvalid('phone')"
                      aria-describedby="lead-phone-error"
                      [class]="fieldClass('phone')"
                    />
                    @if (hasError('phone', 'pattern')) {
                      <p id="lead-phone-error" class="mt-1 text-xs text-red-400" role="alert">Ingresa un teléfono válido (solo números, espacios y +).</p>
                    }
                  </div>

                  <!-- Correo electrónico -->
                  <div>
                    <label for="lead-email" class="block text-sm font-medium text-gray-300 mb-1.5">
                      Correo electrónico <span aria-hidden="true" class="text-red-400">*</span>
                    </label>
                    <input
                      id="lead-email"
                      type="email"
                      formControlName="email"
                      autocomplete="email"
                      placeholder="Ej: maria@empresa.com"
                      [attr.aria-invalid]="isInvalid('email')"
                      aria-describedby="lead-email-error"
                      [class]="fieldClass('email')"
                    />
                    @if (hasError('email', 'required')) {
                      <p id="lead-email-error" class="mt-1 text-xs text-red-400" role="alert">El correo electrónico es requerido.</p>
                    } @else if (hasError('email', 'email')) {
                      <p id="lead-email-error" class="mt-1 text-xs text-red-400" role="alert">Ingresa un correo electrónico válido.</p>
                    }
                  </div>

                  <!-- Necesidad -->
                  <div>
                    <label for="lead-need" class="block text-sm font-medium text-gray-300 mb-1.5">
                      ¿Qué necesitas resolver? <span aria-hidden="true" class="text-red-400">*</span>
                    </label>
                    <select
                      id="lead-need"
                      formControlName="need"
                      [attr.aria-invalid]="isInvalid('need')"
                      aria-describedby="lead-need-error"
                      [class]="selectClass('need')"
                    >
                      <option value="" disabled>Selecciona una opción...</option>
                      @for (opt of needOptions; track opt.value) {
                        <option [value]="opt.value">{{ opt.label }}</option>
                      }
                    </select>
                    @if (hasError('need', 'required')) {
                      <p id="lead-need-error" class="mt-1 text-xs text-red-400" role="alert">Selecciona una opción.</p>
                    }
                  </div>

                  <button
                    type="submit"
                    [disabled]="isSubmitting()"
                    class="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors text-lg focus-visible:outline-2 focus-visible:outline-indigo-400"
                  >
                    @if (isSubmitting()) {
                      <svg class="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      Enviando...
                    } @else {
                      Quiero mi asesoría gratis →
                    }
                  </button>

                  @if (submitError()) {
                    <div class="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3" role="alert" aria-live="polite">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-red-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                      </svg>
                      <p class="text-red-400 text-sm">{{ submitError() }}</p>
                    </div>
                  }
                </form>
              }
            </div>
          </div>

        </div>
      </section>

      <!-- ─── Las 4 herramientas de Power Platform ─── -->
      <section class="py-20 bg-gray-50" aria-labelledby="products-heading">
        <div class="max-w-5xl mx-auto px-6">
          <div class="text-center mb-14">
            <span class="text-indigo-600 text-sm font-semibold tracking-widest uppercase">Microsoft Power Platform</span>
            <h2 id="products-heading" class="text-3xl font-extrabold text-gray-900 mt-2 mb-3">
              Cuatro herramientas, una sola plataforma
            </h2>
            <p class="text-gray-500 max-w-xl mx-auto">
              Diseñadas para trabajar juntas y resolver los problemas reales de tu negocio.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (product of products; track product.name) {
              <article
                class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <!-- Icono de producto con color oficial -->
                <div
                  class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-md"
                  [style.background]="product.color"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="product.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-1">{{ product.name }}</h3>
                <p class="text-xs font-semibold mb-3 px-2 py-1 rounded-full" [style.color]="product.color" [style.background]="product.bgLight">
                  {{ product.tag }}
                </p>
                <p class="text-gray-500 text-sm leading-relaxed">{{ product.description }}</p>
              </article>
            }
          </div>

          <!-- Badges de confianza -->
          <div class="mt-12 flex flex-wrap justify-center gap-6">
            @for (badge of trustBadges; track badge) {
              <div class="flex items-center gap-2 text-gray-500 text-sm">
                <svg class="w-4 h-4 text-indigo-500 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ badge }}
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── Beneficios ─── -->
      <section class="py-20 bg-white" aria-labelledby="benefits-heading">
        <div class="max-w-5xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 id="benefits-heading" class="text-3xl font-extrabold text-gray-900">
              ¿Por qué las pymes eligen Power Platform?
            </h2>
            <p class="text-gray-500 mt-3 max-w-xl mx-auto">
              No necesitas un equipo de tecnología ni un presupuesto enorme.
            </p>
          </div>

          <div class="grid sm:grid-cols-3 gap-8">
            @for (b of benefits; track b.title) {
              <article class="rounded-2xl p-6 border border-gray-100 bg-gray-50 text-center">
                <div
                  class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center mx-auto mb-4"
                  aria-hidden="true"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="b.icon" />
                  </svg>
                </div>
                <h3 class="font-bold text-gray-900 mb-2">{{ b.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">{{ b.description }}</p>
              </article>
            }
          </div>
        </div>
      </section>

      <!-- ─── Casos de uso ─── -->
      <section class="py-20 bg-gray-50" aria-labelledby="usecases-heading">
        <div class="max-w-5xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 id="usecases-heading" class="text-3xl font-extrabold text-gray-900">
              ¿Te suena familiar?
            </h2>
            <p class="text-gray-500 mt-3">Estos son los problemas que más resuelvo.</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            @for (uc of useCases; track uc.title) {
              <div class="flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span class="text-3xl shrink-0" aria-hidden="true">{{ uc.emoji }}</span>
                <div>
                  <h3 class="font-bold text-gray-900 mb-1">{{ uc.title }}</h3>
                  <p class="text-gray-500 text-sm">{{ uc.description }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- ─── CTA final ─── -->
      <section
        class="py-20 bg-linear-to-br from-slate-900 via-indigo-950 to-violet-950"
        aria-label="Llamada a la acción final"
      >
        <div class="max-w-2xl mx-auto px-6 text-center">
          <a
            [routerLink]="[]" fragment="formulario"
            class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-10 py-4 rounded-full text-lg transition-all shadow-lg shadow-indigo-600/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-indigo-400"
          >
            Quiero una asesoría gratis
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>
      </section>

    </main>

    <!-- ─── Footer mínimo ─── -->
    <footer class="bg-slate-950 border-t border-white/5 py-6" role="contentinfo">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <p class="text-gray-600 text-sm">&copy; 2026 devman.cl · Consultoría Microsoft Power Platform</p>
      </div>
    </footer>
  `,
})
export class PowerPlatform {
  private fb = inject(FormBuilder);
  private titleSvc = inject(Title);
  private metaSvc = inject(Meta);
  private doc = inject(DOCUMENT);

  constructor() {
    const url = 'https://devman.cl/powerplatform';
    this.titleSvc.setTitle('Microsoft Power Platform para pymes | devman.cl');
    this.metaSvc.updateTag({ name: 'description', content: 'Consultoría y desarrollo con Microsoft Power Platform para pymes y startups. Power Apps, Power Automate, Power BI y Power Pages. Primera asesoría gratuita y sin compromiso.' });
    this.metaSvc.updateTag({ property: 'og:type', content: 'website' });
    this.metaSvc.updateTag({ property: 'og:url', content: url });
    this.metaSvc.updateTag({ property: 'og:title', content: 'Microsoft Power Platform para pymes | devman.cl' });
    this.metaSvc.updateTag({ property: 'og:description', content: 'Digitaliza tu negocio sin pagar una fortuna. Aplicaciones, automatizaciones y paneles de datos a medida con Power Apps, Power Automate, Power BI y Power Pages.' });
    this.metaSvc.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaSvc.updateTag({ name: 'twitter:url', content: url });
    this.metaSvc.updateTag({ name: 'twitter:title', content: 'Microsoft Power Platform para pymes | devman.cl' });
    this.metaSvc.updateTag({ name: 'twitter:description', content: 'Digitaliza tu negocio sin pagar una fortuna. Aplicaciones, automatizaciones y paneles de datos a medida con Power Apps, Power Automate, Power BI y Power Pages.' });
    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = this.doc.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  private readonly contactService = inject(ContactService);

  submitted = signal(false);
  isSubmitting = signal(false);
  submitError = signal<string | null>(null);

  leadForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.pattern(/^[+\d\s\-()]{7,20}$/)],
    email: ['', [Validators.required, Validators.email]],
    need: ['', Validators.required],
  });

  onSubmit(): void {
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(null);

    const { name, phone, email, need } = this.leadForm.value;

    this.contactService
      .enviarConsultaPowerPlatform({
        origen: 'PowerPlatform',
        nombre: name ?? '',
        telefono: phone ?? '',
        correo: email ?? '',
        necesidad: need ?? '',
      })
      .subscribe({
        next: () => {
          this.isSubmitting.set(false);
          this.submitted.set(true);
          this.leadForm.reset();
        },
        error: () => {
          this.isSubmitting.set(false);
          this.submitError.set(
            'No se pudo enviar tu solicitud. Por favor inténtalo de nuevo.',
          );
        },
      });
  }

  isInvalid(field: string): boolean | null {
    const c = this.leadForm.get(field);
    return c?.invalid && c.touched ? true : null;
  }

  hasError(field: string, error: string): boolean {
    const c = this.leadForm.get(field);
    return !!(c?.hasError(error) && c.touched);
  }

  fieldClass(field: string): string {
    const base = 'w-full bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
    return base + (this.isInvalid(field) ? ' border-red-500' : ' border-white/20');
  }

  selectClass(field: string): string {
    const base = 'w-full bg-slate-800 border rounded-xl px-4 py-3 text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';
    return base + (this.isInvalid(field) ? ' border-red-500' : ' border-white/20');
  }

  protected readonly needOptions = [
    { value: 'reemplazar-planillas', label: 'Reemplazar planillas Excel o papel' },
    { value: 'eliminar-tareas-manuales', label: 'Eliminar tareas manuales repetitivas' },
    { value: 'reportes-automaticos', label: 'Tener reportes automáticos de mi negocio' },
    { value: 'pedidos-clientes', label: 'Gestionar pedidos o clientes' },
    { value: 'stock-inventario', label: 'Controlar stock o inventario' },
    { value: 'no-se', label: 'No sé bien, necesito asesoría' },
  ];

  protected readonly microBenefits = [
    'Solución lista en pocos dias',
    'Funciona en celular, tablet y computadora',
    'Se conecta con Excel, Teams y SharePoint',
    'Tu equipo la usa desde el primer día',
  ];

  protected readonly products = [
    {
      name: 'Power Apps',
      tag: 'Aplicaciones a medida',
      color: '#742774',
      bgLight: '#74277415',
      icon: 'M9.75 17 9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z',
      description: '¿Tu negocio funciona con planillas de Excel o cuadernos en papel? Power Apps reemplaza todo eso con una aplicación personalizada: tu equipo registra, consulta y actualiza información desde el celular, sin errores ni datos perdidos.',
    },
    {
      name: 'Power Automate',
      tag: 'Automatización',
      color: '#0067b8',
      bgLight: '#0067b815',
      icon: 'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
      description: '¿Cuántas horas pierde tu equipo en tareas que se repiten todos los días? Power Automate las ejecuta solo: envía correos, genera alertas, aprueba solicitudes y sincroniza datos de forma automática, sin que nadie tenga que intervenir.',
    },
    {
      name: 'Power BI',
      tag: 'Análisis de datos',
      color: '#f2c811',
      bgLight: '#f2c81115',
      icon: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
      description: '¿Tomas decisiones basadas en reportes que alguien arma a mano cada mes? Power BI conecta tus fuentes de datos y genera paneles visuales que se actualizan solos, para que veas el estado real de tu negocio en cualquier momento.',
    },
    {
      name: 'Power Pages',
      tag: 'Portales web',
      color: '#038387',
      bgLight: '#03838715',
      icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
      description: '¿Necesitas que tus clientes o proveedores ingresen pedidos, reclamos o formularios desde internet? Power Pages publica un portal web seguro y profesional que recibe esa información y la conecta directamente con tus datos internos.',
    },
  ];

  protected readonly trustBadges = [
    'Plataforma oficial de Microsoft',
    'Sin instalación de servidores',
    'Seguridad empresarial incluida',
    'Integración con Microsoft 365',
  ];

  protected readonly benefits = [
    {
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
      title: 'Listo en días, no meses',
      description: 'Sin procesos largos ni presupuestos interminables. Una solución básica funciona en 1 a 2 semanas.',
    },
    {
      icon: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
      title: 'Todo incluido en tu licencia',
      description: 'Si ya tienes Microsoft 365, Power Platform viene incluido. Sin costos extra de infraestructura.',
    },
    {
      icon: 'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z',
      title: 'Seguridad de Microsoft',
      description: 'Tus datos protegidos con la misma infraestructura que usan bancos y multinacionales en todo el mundo.',
    },
  ];

  protected readonly useCases = [
    {
      emoji: '🛒',
      title: 'Gestión de pedidos y clientes',
      description: 'Deja de recibir pedidos por WhatsApp y papel. Todo entra a una app, con seguimiento en tiempo real.',
    },
    {
      emoji: '📦',
      title: 'Control de stock e inventario',
      description: 'Registra entradas y salidas desde el celular. Sin planillas desactualizadas ni errores de conteo.',
    },
    {
      emoji: '✅',
      title: 'Aprobaciones y solicitudes internas',
      description: 'Vacaciones, gastos, materiales: todo se solicita y aprueba en la app, sin correos ni papeles perdidos.',
    },
    {
      emoji: '📊',
      title: 'Reportes que se generan solos',
      description: 'Tus datos de ventas, clientes o equipo en un panel visual, actualizado automáticamente cada día.',
    },
  ];
}
