export default function Footer() {
  const socialLinks = [
    { name: "Facebook", href: "#", icon: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.988h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { name: "Twitter", href: "#", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
    { name: "Pinterest", href: "#", icon: "M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.86 6.34 9.32-.09-.79-.17-2.01.04-2.87.19-.8 1.22-5.19 1.22-5.19s-.31-.62-.31-1.53c0-1.44.83-2.51 1.87-2.51.88 0 1.31.66 1.31 1.45 0 .88-.56 2.21-.85 3.44-.24 1.02.51 1.86 1.52 1.86 1.82 0 3.22-1.92 3.22-4.7 0-2.46-1.77-4.18-4.29-4.18-2.92 0-4.64 2.19-4.64 4.46 0 .88.34 1.83.76 2.34.08.1.09.19.07.29-.08.31-.25 1.02-.29 1.16-.05.19-.15.23-.35.14-1.3-.6-2.11-2.5-2.11-4.02 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.24.91-.87 2.05-1.3 2.75.98.3 2.02.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" },
  ];

  return (
    <footer className="bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-center sm:text-left">

        {/* Izquierda: nombre + copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <span className="text-sm font-bold text-slate-300">
            LaPazQr.com
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="text-xs sm:text-sm text-slate-500">
            © All Copyrights {new Date().getFullYear()} by Pepe
          </span>
        </div>

        {/* Derecha: iconos sociales */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-white hover:text-brand-orange transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d={social.icon} />
              </svg>
            </a>
          ))}

          {/* Instagram (icono con trazo, no relleno) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-brand-orange transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}