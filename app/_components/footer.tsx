import Link from "next/link"
import { Code, Instagram, Facebook, Twitter, Github } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-5">
        <div className="flex flex-col gap-4">
          {/* Logo e Links */}
          <div className="flex flex-col items-center justify-between gap-4 border-b border-gray-200 pb-4 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Code className="h-4 w-4 text-primary" />
              </div>
              <div className="flex items-center gap-1.5">
                <Link
                  href="/"
                  className="text-sm font-semibold text-gray-900 transition-colors hover:text-primary"
                >
                  DevElt
                </Link>
                <span className="text-[10px] font-medium text-gray-500">
                  © {new Date().getFullYear()}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Privacidade
              </Link>
              <div className="h-1 w-1 rounded-full bg-gray-200" />
              <Link
                href="/terms"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Termos
              </Link>
              <div className="h-1 w-1 rounded-full bg-gray-200" />
              <Link
                href="/contact"
                className="text-xs font-medium text-gray-500 transition-colors hover:text-gray-900"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Redes Sociais e Créditos */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-3">
              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
              >
                <Instagram className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
              >
                <Facebook className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
              >
                <Twitter className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-900"
              >
                <Github className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
              <span>Desenvolvido por</span>
              <Link
                href="https://github.com/develt"
                target="_blank"
                className="font-medium text-primary transition-colors hover:text-primary/80"
              >
                DevElt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
