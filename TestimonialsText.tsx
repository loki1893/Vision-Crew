import Image from "next/image";

export default function TestimonialsText() {
  return (
    <main className="flex flex-col items-center"
    style={{
      backgroundImage:"url('/StarBackground.png')",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat",
      paddingTop:"100px",
      paddingBottom:"100px",
      paddingLeft:"100px",
      paddingRight:"100px",
     
    }}
    >
      <h1 className="text-6xl font-bold  font-manrope leading-tight text-center">
        <span className="bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
          TESTIMONIALS
        </span>
      </h1>
      <div className="flex justify-center">
        <Image src="/Star.png" width={241} height={53} alt="TestimonialStars" />
      </div>
    </main>
  );
}
