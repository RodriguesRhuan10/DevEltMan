import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import { db } from "@/app/_lib/prisma"
import { MapPinIcon, StarIcon, ScissorsIcon, PhoneIcon } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import Header from "@/app/_components/header"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // chamar o meu banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-900">
      <Header />

      {/* IMAGEM DE CAPA */}
      <div className="relative h-[300px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
          priority
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-gray-900/40"></div>
      </div>

      <div className="flex flex-col gap-4 px-4 pb-6 pt-3">
        {/* INFORMAÇÕES DA BARBEARIA */}
        <div className="rounded-2xl bg-gray-800/50 p-5 backdrop-blur-sm">
          <div className="flex items-start justify-between">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold text-white">{barbershop.name}</h1>
              
              <div className="flex items-center gap-2 text-gray-300">
                <MapPinIcon className="h-5 w-5 text-primary" />
                <p className="text-sm">{barbershop?.address}</p>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <StarIcon className="h-5 w-5 fill-primary text-primary" />
                <p className="text-sm">5,0 (499 avaliações)</p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <h2 className="text-sm font-medium uppercase tracking-wide text-primary">Sobre nós</h2>
            <p className="text-sm leading-relaxed text-gray-300">{barbershop?.description}</p>
          </div>
        </div>

        {/* SERVIÇOS */}
        <div className="rounded-2xl bg-gray-800/50 p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <ScissorsIcon className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-bold text-white">Serviços</h2>
          </div>

          <div className="space-y-3">
            {barbershop.services.map((service) => (
              <ServiceItem
                key={service.id}
                barbershop={JSON.parse(JSON.stringify(barbershop))}
                service={JSON.parse(JSON.stringify(service))}
              />
            ))}
          </div>
        </div>

        {/* CONTATO */}
        <div className="rounded-2xl bg-gray-800/50 p-5 backdrop-blur-sm">
          <div className="mb-4 flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 text-primary" />
            <h2 className="text-lg font-bold text-white">Contato</h2>
          </div>

          <div className="space-y-3">
            {barbershop.phones.map((phone) => (
              <PhoneItem key={phone} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
