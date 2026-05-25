import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/46c98693-e04f-4e23-9485-fb6ad4ed8e3c/files/f4e4c409-c37c-4cbd-9542-920cd1be1902.jpg";
const TEAM_IMAGE = "https://cdn.poehali.dev/projects/46c98693-e04f-4e23-9485-fb6ad4ed8e3c/files/189539ad-c26c-48ec-9820-bfb89c839457.jpg";
const APARTMENT_IMAGE = "https://cdn.poehali.dev/projects/46c98693-e04f-4e23-9485-fb6ad4ed8e3c/files/fc1af050-3dec-4cde-bf7f-2624aed6fdc1.jpg";

const services = [
  {
    icon: "Search",
    title: "Подбор квартиры",
    desc: "Анализируем рынок, отбираем лучшие предложения под ваш бюджет и пожелания. Только проверенные застройщики.",
  },
  {
    icon: "Video",
    title: "Онлайн-просмотры",
    desc: "Организуем живые видеотрансляции прямо с объекта. Вы видите всё — планировку, вид из окна, двор.",
  },
  {
    icon: "FileCheck",
    title: "Сопровождение сделки",
    desc: "Берём на себя все документы, проверку застройщика, регистрацию в Росреестре.",
  },
  {
    icon: "Shield",
    title: "Безопасные расчёты",
    desc: "Помогаем провести безопасные расчёты. Ваши деньги защищены на каждом этапе.",
  },
  {
    icon: "MapPin",
    title: "Без поездок в Москву",
    desc: "Приезжайте к нам в офис в Воронеже или встречайтесь онлайн. Всю работу в Москве мы берём на себя.",
  },
  {
    icon: "Headphones",
    title: "Личный менеджер",
    desc: "Один специалист ведёт вас от первого звонка до получения ключей. Всегда на связи.",
  },
];

const steps = [
  { num: "01", title: "Консультация", desc: "Встречаемся в офисе или онлайн, обсуждаем бюджет и пожелания" },
  { num: "02", title: "Подбор", desc: "После заключения договора в течение 2–3 дней формируем подборку лучших вариантов" },
  { num: "03", title: "Просмотр", desc: "Организуем онлайн-трансляцию с объекта в удобное для вас время" },
  { num: "04", title: "Сделка", desc: "Сопровождаем весь процесс оформления — от брони до ключей" },
];

export default function Index() {
  const [formData, setFormData] = useState({ name: "", phone: "", format: "office", comment: "" });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "hsl(220, 20%, 8%)", color: "#f0ede8" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(16,19,26,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(180,145,60,0.15)" }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="font-cormorant text-2xl font-bold tracking-wider" style={{ color: "hsl(43,74%,55%)" }}>МАКСИМУМ</span>
            <span className="hidden sm:block text-xs tracking-widest uppercase" style={{ color: "rgba(240,237,232,0.35)" }}>| недвижимость</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {["Услуги", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item === "Услуги" ? "services" : item === "О нас" ? "about" : "contacts"}`}
                className="text-sm tracking-wide transition-colors"
                style={{ color: "rgba(240,237,232,0.65)", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
            <a href="#consultation" className="btn-gold px-5 py-2 rounded text-sm" style={{ textDecoration: "none" }}>
              Записаться
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "hsl(43,74%,55%)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: "rgba(16,19,26,0.98)" }}>
            {["Услуги", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href={`#${item === "Услуги" ? "services" : item === "О нас" ? "about" : "contacts"}`}
                className="text-sm tracking-wide py-1"
                style={{ color: "rgba(240,237,232,0.7)", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#consultation" className="btn-gold px-5 py-2.5 rounded text-sm text-center" style={{ textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Москва" className="w-full h-full object-cover" style={{ filter: "brightness(0.35)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(16,19,26,0.9) 0%, rgba(16,19,26,0.5) 60%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, hsl(220,20%,8%), transparent)" }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="animate-fade-up flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ background: "hsl(43,74%,49%)" }} />
              <span className="text-xs tracking-widest uppercase font-golos" style={{ color: "hsl(43,74%,65%)" }}>
                Воронеж · Черноземье · Москва
              </span>
            </div>

            <h1 className="font-cormorant animate-fade-up-delay-1 mb-6 leading-none" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 300 }}>
              Квартира в Москве
              <br />
              <em className="font-cormorant" style={{ fontStyle: "italic", color: "hsl(43,74%,62%)" }}>без поездок</em>
              <br />
              <span style={{ fontWeight: 400 }}>в столицу</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg mb-10 leading-relaxed max-w-xl" style={{ color: "rgba(240,237,232,0.65)" }}>
              Мы сделаем всё за вас: подберём, покажем, оформим. Вам достаточно приехать к нам в Воронеж или выйти на онлайн-встречу.
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4">
              <a href="#consultation" className="btn-gold px-8 py-4 rounded text-base font-golos text-center" style={{ textDecoration: "none" }}>
                Записаться на консультацию
              </a>
              <a href="#services" className="px-8 py-4 rounded text-base font-golos text-center transition-colors" style={{ border: "1px solid rgba(180,145,60,0.4)", color: "hsl(43,74%,65%)", textDecoration: "none" }}>
                Наши услуги
              </a>
            </div>

            <div className="animate-fade-up-delay-4 mt-14 flex flex-wrap gap-8">
              {[
                { val: "13 лет", label: "на рынке недвижимости" },
                { val: "100%", label: "без поездок в Москву" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="font-cormorant text-3xl font-semibold" style={{ color: "hsl(43,74%,60%)" }}>{s.val}</div>
                  <div className="text-sm mt-0.5" style={{ color: "rgba(240,237,232,0.45)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <Icon name="ChevronDown" size={22} style={{ color: "hsl(43,74%,49%)" }} />
        </div>
      </section>

      <div className="gold-line" />

      {/* SERVICES */}
      <section id="services" className="py-24 px-6" style={{ background: "hsl(220,18%,10%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(43,74%,60%)" }}>Что мы делаем</p>
            <h2 className="font-cormorant text-5xl mb-4" style={{ fontWeight: 300 }}>Услуги агентства</h2>
            <div className="gold-line w-20 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="luxury-card rounded-lg p-7">
                <div className="w-11 h-11 rounded mb-5 flex items-center justify-center" style={{ background: "rgba(180,145,60,0.12)" }}>
                  <Icon name={s.icon} size={20} style={{ color: "hsl(43,74%,60%)" }} fallback="Star" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "#f0ede8" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: "hsl(220,20%,8%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(180,145,60,0.06), transparent)" }} />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(43,74%,60%)" }}>Просто и понятно</p>
            <h2 className="font-cormorant text-5xl" style={{ fontWeight: 300 }}>Как это работает</h2>
            <div className="gold-line w-20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="relative z-10 p-6 rounded-lg" style={{ background: "hsl(220,18%,12%)", border: "1px solid hsl(220,15%,18%)" }}>
                  <div className="font-cormorant text-5xl font-bold mb-4 leading-none" style={{ color: "rgba(180,145,60,0.25)" }}>{step.num}</div>
                  <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: "hsl(43,74%,65%)" }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.5)" }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6" style={{ background: "hsl(220,18%,10%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(43,74%,60%)" }}>О нас</p>
              <h2 className="font-cormorant text-5xl mb-6 leading-tight" style={{ fontWeight: 300 }}>
                Ваш мост между
                <br />
                <em style={{ fontStyle: "italic", color: "hsl(43,74%,62%)" }}>Воронежем</em> и Москвой
              </h2>
              <div className="gold-line w-16 mb-8" />
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(240,237,232,0.65)" }}>
                Агентство <strong style={{ color: "#f0ede8" }}>«Максимум»</strong> специализируется на покупке квартир в новостройках Москвы для жителей Воронежа и всего Черноземья. Мы работаем на рынке недвижимости с 2013 года и знаем рынок изнутри.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(240,237,232,0.65)" }}>
                Наши клиенты получают максимум информации при минимуме усилий. Ни одной лишней поездки, ни одного непонятного документа. Мы берём все заботы на себя — от первого звонка до получения ключей.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: "Award", text: "Официальные партнёры 50+ застройщиков Москвы" },
                  { icon: "Clock", text: "Сопровождение от бронирования до ключей" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: "hsl(220,18%,13%)", border: "1px solid hsl(220,15%,18%)" }}>
                    <Icon name={item.icon} size={16} style={{ color: "hsl(43,74%,55%)", marginTop: 2, flexShrink: 0 }} fallback="Check" />
                    <span className="text-sm leading-snug" style={{ color: "rgba(240,237,232,0.6)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(180,145,60,0.2)" }}>
                <img src={TEAM_IMAGE} alt="Команда" className="w-full object-cover" style={{ height: 420 }} />
              </div>
              <div className="absolute -bottom-6 -left-6 p-5 rounded-lg" style={{ background: "hsl(220,20%,8%)", border: "1px solid rgba(180,145,60,0.3)" }}>
                <img src={APARTMENT_IMAGE} alt="Квартира" className="w-40 h-28 object-cover rounded" />
              </div>
              <div className="absolute top-6 right-6 p-4 rounded-lg text-center" style={{ background: "rgba(16,19,26,0.9)", border: "1px solid rgba(180,145,60,0.25)", backdropFilter: "blur(8px)" }}>
                <div className="font-cormorant text-3xl font-semibold" style={{ color: "hsl(43,74%,60%)" }}>600+</div>
                <div className="text-xs mt-1" style={{ color: "rgba(240,237,232,0.5)" }}>довольных<br />клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section id="consultation" className="py-24 px-6 relative overflow-hidden" style={{ background: "hsl(220,20%,8%)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 50% 50%, rgba(180,145,60,0.07), transparent)" }} />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(43,74%,60%)" }}>Первый шаг</p>
            <h2 className="font-cormorant text-5xl mb-4" style={{ fontWeight: 300 }}>Запись на консультацию</h2>
            <div className="gold-line w-20 mx-auto mb-5" />
            <p className="text-base" style={{ color: "rgba(240,237,232,0.55)" }}>
              Бесплатная консультация — 40 минут. Расскажем о рынке, ответим на все вопросы.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16 px-8 rounded-xl" style={{ background: "hsl(220,18%,12%)", border: "1px solid rgba(180,145,60,0.3)" }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(180,145,60,0.15)" }}>
                <Icon name="Check" size={28} style={{ color: "hsl(43,74%,60%)" }} />
              </div>
              <h3 className="font-cormorant text-3xl mb-3" style={{ color: "hsl(43,74%,65%)" }}>Заявка принята!</h3>
              <p className="text-base" style={{ color: "rgba(240,237,232,0.55)" }}>
                Наш менеджер свяжется с вами в течение часа для подтверждения времени встречи.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-xl p-8 md:p-10" style={{ background: "hsl(220,18%,12%)", border: "1px solid rgba(180,145,60,0.2)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: "rgba(240,237,232,0.45)" }}>Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Александр"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: "rgba(240,237,232,0.45)" }}>Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (900) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg text-sm"
                    required
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-xs tracking-wide uppercase mb-3" style={{ color: "rgba(240,237,232,0.45)" }}>Формат встречи</label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { val: "office", label: "В офисе в Воронеже", icon: "MapPin" },
                    { val: "online", label: "Онлайн-встреча", icon: "Video" },
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, format: opt.val })}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-lg text-sm text-left transition-all"
                      style={{
                        background: formData.format === opt.val ? "rgba(180,145,60,0.15)" : "hsl(220,18%,16%)",
                        border: formData.format === opt.val ? "1px solid hsl(43,74%,49%)" : "1px solid hsl(220,15%,22%)",
                        color: formData.format === opt.val ? "hsl(43,74%,65%)" : "rgba(240,237,232,0.55)",
                      }}
                    >
                      <Icon name={opt.icon} size={15} fallback="Star" />
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-7">
                <label className="block text-xs tracking-wide uppercase mb-2" style={{ color: "rgba(240,237,232,0.45)" }}>Комментарий (необязательно)</label>
                <textarea
                  placeholder="Расскажите о вашем запросе: бюджет, район, количество комнат..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg text-sm resize-none"
                />
              </div>

              <button type="submit" className="btn-gold w-full py-4 rounded-lg text-base font-golos font-semibold">
                Записаться на консультацию
              </button>
              <p className="text-center text-xs mt-4" style={{ color: "rgba(240,237,232,0.3)" }}>
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: "hsl(220,18%,10%)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "hsl(43,74%,60%)" }}>Мы рядом</p>
            <h2 className="font-cormorant text-5xl" style={{ fontWeight: 300 }}>Контакты</h2>
            <div className="gold-line w-20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "MapPin",
                title: "Офис в Воронеже",
                lines: ["ул. Куцыгина, д. 32, офис 302", "Пн–Пт: 9:00–19:00", "Сб: 10:00–16:00"],
              },
              {
                icon: "Phone",
                title: "Телефон",
                lines: ["8 950 773 88 90", "Бесплатная консультация"],
              },
              {
                icon: "Mail",
                title: "Почта",
                lines: ["maksimum-36@yandex.ru"],
              },
            ].map((card, i) => (
              <div key={i} className="luxury-card rounded-xl p-7 text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "rgba(180,145,60,0.12)" }}>
                  <Icon name={card.icon} size={20} style={{ color: "hsl(43,74%,60%)" }} fallback="Info" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-4" style={{ color: "#f0ede8" }}>{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className="text-sm mb-1" style={{ color: j === 0 ? "rgba(240,237,232,0.75)" : "rgba(240,237,232,0.4)" }}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6" style={{ background: "hsl(220,20%,6%)", borderTop: "1px solid rgba(180,145,60,0.1)" }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-xl font-semibold" style={{ color: "hsl(43,74%,50%)" }}>МАКСИМУМ</span>
          <p className="text-xs text-center" style={{ color: "rgba(240,237,232,0.25)" }}>
            © 2024 Агентство недвижимости «Максимум». Воронеж · Черноземье · Москва
          </p>
          <a href="#consultation" className="text-xs" style={{ color: "hsl(43,74%,50%)", textDecoration: "none" }}>
            Записаться →
          </a>
        </div>
      </footer>

    </div>
  );
}