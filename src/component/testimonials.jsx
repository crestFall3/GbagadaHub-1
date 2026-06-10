import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        quote: "Reliable power, fast internet, and a comfortable setup. Gbagada Hub gives you everything you need to scale your business without the usual Lagos stress",
        name: "Joshua Odunayo",
    },
    {
        quote: "Studying Biosensors & Nanotechnology at Olabisi Onabanjo University really helped me understand how diagnostic systems actually work, not just the theory.",
        name: "Precious Akinyami",
    },
    {
        quote: "The practical experience was just as valuable as the theory.",
        name: "Sarah Johnson",
    },
    {
        quote: "A great environment for startups and remote workers.",
        name: "David Smith",
    },
]

export default function Testimonials() {
    return (
        <section className="bg-[#0f172a] py-24 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
            <div className="max-w-6xl mx-auto px-16">
                <h2 className="mb-12 text-center text-4xl font-display font-bold text-white">
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
                                <div className="h-full rounded-lg border border-slate-600 p-6 text-white flex flex-col justify-between min-h-[200px]">
                                    <p className="mb-8 leading-relaxed italic text-sm">
                                        "{item.quote}"
                                    </p>
                                    <p className="font-semibold text-sm">
                                        {item.name}
                                    </p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-0 -translate-x-full bg-transparent text-white border-slate-500 hover:bg-slate-800 hover:text-white" />
                    <CarouselNext className="right-0 translate-x-full bg-transparent text-white border-slate-500 hover:bg-slate-800 hover:text-white" />
                </Carousel>
            </div>
        </section>
    )
}