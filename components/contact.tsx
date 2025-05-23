import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="py-16 bg-forest-800">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gold-300 sm:text-4xl">Entre em Contato</h2>
          <p className="mt-4 text-lg text-gold-100/70">Estamos à disposição para atender você</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gold-300">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-gold-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gold-300">Endereço</h4>
                    <p className="text-gold-100/70">Avenida Rebouças, 2747</p>
                    <p className="text-gold-100/70">Pinheiros - São Paulo</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-gold-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gold-300">Telefone</h4>
                    <p className="text-gold-100/70">(11) 96317-6982</p>
                    <a
                      href="https://wa.me/5511963176982"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold-400 hover:text-gold-300 flex items-center mt-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                        <path d="M9.5 13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5Z" />
                      </svg>
                      Fale conosco pelo WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-gold-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gold-300">E-mail</h4>
                    <p className="text-gold-100/70">neworleansb101@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-gold-500 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gold-300">Horário de Funcionamento</h4>
                    <p className="text-gold-100/70">Terça a Sexta: 10h às 20h30</p>
                    <p className="text-gold-100/70">Sábado: 9h às 18h30</p>
                    <p className="text-gold-100/70">Domingo e Segunda: Fechado</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gold-300">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-700/30 text-gold-100/70 hover:bg-gold-900/20 hover:text-gold-400"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-700/30 text-gold-100/70 hover:bg-gold-900/20 hover:text-gold-400"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://youtube.com/@neworleansbarber?si=3XkOhi82c26R-pqA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-700/30 text-gold-100/70 hover:bg-gold-900/20 hover:text-gold-400"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
                <a
                  href="https://linktr.ee/neworleansb101?utm_source=linktree_profile_share&ltsid=dfd0e2ab-9a53-4565-a442-191f25e16977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 px-4 items-center justify-center rounded-full border border-gold-700/30 text-gold-100/70 hover:bg-gold-900/20 hover:text-gold-400"
                >
                  <span>Linktree</span>
                </a>
                <a
                  href="https://g.page/r/CRRSRttSZsxvEBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 px-4 items-center justify-center rounded-full border border-gold-700/30 text-gold-100/70 hover:bg-gold-900/20 hover:text-gold-400"
                >
                  <span>Avalie-nos no Google</span>
                </a>
              </div>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border-2 border-gold-700/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0518269332166!2d-46.68661492374369!3d-23.56731006150077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579d9e6b5ec9%3A0x7f98b3dac21b7d61!2sAv.%20Rebou%C3%A7as%2C%202747%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1716407629000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da Barbearia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
