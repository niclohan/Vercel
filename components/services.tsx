import { Scissors, Droplet, Wind } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Scissors className="h-10 w-10 text-gold-500" />,
    title: "Corte de Cabelo",
    description:
      "Cortes modernos e clássicos realizados por profissionais experientes. Inclui lavagem e finalização com produtos de alta qualidade para um visual impecável.",
  },
  {
    icon: <Droplet className="h-10 w-10 text-gold-500" />,
    title: "Barba com Ozônio",
    description:
      "Tratamento completo para barba com toalha quente, produtos especiais e aplicação de ozônio que proporciona assepsia, hidratação e brilho. Finalização com óleo especial.",
  },
  {
    icon: <Wind className="h-10 w-10 text-gold-500" />,
    title: "Depilação de Nariz e Orelha",
    description:
      "Remoção de pelos indesejados do nariz e orelhas com técnicas seguras e indolores, garantindo um visual limpo e bem cuidado.",
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-16 bg-forest-800">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gold-300 sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gold-100/70">
            Oferecemos uma variedade de serviços para atender às suas necessidades
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 border-gold-700/20 bg-forest-900 transition-all hover:border-gold-600/50"
            >
              <CardHeader className="pb-2">
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-gold-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gold-100/70">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://linktr.ee/neworleansb101?utm_source=linktree_profile_share&ltsid=dfd0e2ab-9a53-4565-a442-191f25e16977"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg border border-gold-700/30 bg-gold-900/10 px-4 py-2 text-gold-300 hover:bg-gold-900/20"
          >
            <span className="text-sm font-medium">Acesse nosso Linktree para mais informações</span>
          </a>
        </div>
      </div>
    </section>
  )
}
