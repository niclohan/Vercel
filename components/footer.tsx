import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="New Orleans Barbearia" width={60} height={60} className="h-14 w-auto" />
              <span className="text-xl font-bold text-gold-300">New Orleans Barbearia</span>
            </div>
            <p className="text-gold-100/70 mb-4">
              Oferecendo serviços de barbearia clássica de alta qualidade. Cortes tradicionais e modernos para homens
              que valorizam estilo.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gold-100/50 hover:text-gold-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://facebook.com" className="text-gold-100/50 hover:text-gold-400">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://youtube.com/@neworleansbarber?si=3XkOhi82c26R-pqA"
                className="text-gold-100/50 hover:text-gold-400"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://wa.me/5511963176982" className="text-gold-100/50 hover:text-gold-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                  <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="mailto:neworleansb101@gmail.com" className="text-gold-100/50 hover:text-gold-400">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="tel:+5511963176982" className="text-gold-100/50 hover:text-gold-400">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Telefone</span>
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold mb-4 text-gold-300">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-gold-100/70 hover:text-gold-400">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#servicos" className="text-gold-100/70 hover:text-gold-400">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gold-100/70 hover:text-gold-400">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#sobre" className="text-gold-100/70 hover:text-gold-400">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gold-100/70 hover:text-gold-400">
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  href="https://tr.ee/Jm7BLJAFJe"
                  className="text-gold-100/70 hover:text-gold-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agendar Horário
                </Link>
              </li>
              <li>
                <Link
                  href="https://linktr.ee/neworleansb101?utm_source=linktree_profile_share&ltsid=dfd0e2ab-9a53-4565-a442-191f25e16977"
                  className="text-gold-100/70 hover:text-gold-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linktree
                </Link>
              </li>
              <li>
                <Link
                  href="https://g.page/r/CRRSRttSZsxvEBM/review"
                  className="text-gold-100/70 hover:text-gold-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Avalie-nos no Google
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@neworleansbarber?si=3XkOhi82c26R-pqA"
                  className="text-gold-100/70 hover:text-gold-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nosso Canal no YouTube
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-gold-300">Horário de Funcionamento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gold-100/70">Segunda-feira</span>
                <span className="text-gold-300">Fechado</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Terça-feira</span>
                <span className="text-gold-300">10h - 20h30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Quarta-feira</span>
                <span className="text-gold-300">10h - 20h30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Quinta-feira</span>
                <span className="text-gold-300">10h - 20h30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Sexta-feira</span>
                <span className="text-gold-300">10h - 20h30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Sábado</span>
                <span className="text-gold-300">9h - 18h30</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gold-100/70">Domingo</span>
                <span className="text-gold-300">Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gold-900/30">
        <div className="container py-6 text-center text-gold-100/50">
          <p>© {new Date().getFullYear()} New Orleans Barbearia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
