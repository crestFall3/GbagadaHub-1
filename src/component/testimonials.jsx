import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        quote:
            "Reliable power, fast internet, and a comfortable setup.",
        name: "Joshua Odunayo",
    },
    {
        quote:
            "Studying Biosensors & Nanotechnology helped me understand diagnostics.",
        name: "Precious Akinyami",
    },
    {
        quote:
            "The practical experience was just as valuable as the theory.",
        name: "Sarah Johnson",
    },
    {
        quote:
            "A great environment for startups and remote workers.",
        name: "David Smith",
    },
]

export default function Testimonials() {
    return (
        <section className="bg-slate-950 py-24 w-full">
            <div className="px-8">
                <h2 className="mb-12 text-center text-4xl font-bold text-white">
                    Testimonials
                </h2>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {testimonials.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="pl-4 md:basis-1/2 lg:basis-1/3"
                            >
                                <div className="h-full rounded-lg border border-slate-700 p-6 text-white">
                                    <p className="mb-8 leading-relaxed">
                                        "{item.quote}"
                                    </p>

                                    <p className="font-semibold">
                                        {item.name}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="-left-8 bg-transparent text-white border-slate-600" />
                    <CarouselNext className="-right-8 bg-transparent text-white border-slate-600" />
                </Carousel>
            </div>
        </section>
    )
}