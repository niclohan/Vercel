import Image from "next/image"
import { Clock, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="sobre" className="py-16 bg-forest-700">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gold-300 sm:text-4xl mb-6">Sobre a New Orleans</h2>
            <p className="text-lg mb-6 text-gold-100/80">
              A New Orleans Barbearia Clássica nasceu com o propósito de oferecer serviços de alta qualidade em um
              ambiente acolhedor e sofisticado. Nossa equipe é formada por profissionais experientes e apaixonados pela
              arte da barbearia.
            </p>
            <p className="text-lg mb-8 text-gold-100/80">
              Utilizamos produtos de primeira linha e técnicas tradicionais para garantir a satisfação dos nossos
              clientes. Aqui, você não é apenas um cliente, mas parte da nossa família.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gold-300">Horário</h3>
                  <p className="text-sm text-gold-100/70">Terça a Sexta: 10h às 20h30</p>
                  <p className="text-sm text-gold-100/70">Sábado: 9h às 18h30</p>
                  <p className="text-sm text-gold-100/70">Domingo e Segunda: Fechado</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gold-300">Localização</h3>
                  <p className="text-sm text-gold-100/70">Avenida Rebouças, 2747</p>
                  <p className="text-sm text-gold-100/70">Pinheiros - São Paulo</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl border-2 border-gold-700/30">
            <Image
              src="/gallery/equipe-ilustracao.png"
              alt="Ilustração da equipe da New Orleans Barbearia"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <Card className="border-2 border-gold-700/20 bg-forest-800">
            <CardHeader>
              <CardTitle className="text-gold-300 text-center">Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gold-100/70 text-center">
                Proporcionar uma experiência única de barbearia clássica, aliando tradição e modernidade, com
                atendimento personalizado e serviços de excelência.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gold-700/20 bg-forest-800">
            <CardHeader>
              <CardTitle className="text-gold-300 text-center">Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gold-100/70 text-center">
                Ser reconhecida como referência em barbearia clássica em São Paulo, mantendo a tradição e incorporando
                inovações que agreguem valor à experiência dos nossos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-gold-700/20 bg-forest-800">
            <CardHeader>
              <CardTitle className="text-gold-300 text-center">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gold-100/70 text-center">
                Excelência, respeito, ética, compromisso com a satisfação do cliente, valorização da tradição e busca
                constante por aperfeiçoamento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
