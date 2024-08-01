
import { Footer } from "@/ui/common/Footer";
import Header from "@/ui/common/Header";
import { ContactInfo } from "@/ui/home/ContactInfo";
import TestimonialsText from "@/ui/home/Testimonial/TestimonialsText";
import TestimonialData from "@/ui/home/Testimonial/TestimonialData";
import Testipaggination from "@/ui/home/Testimonial/Testipaggination";

export default function Platform () {
    return (
        <div className="min-h-screen bg-white">

      <ContactInfo />
      <div
        style={{
          backgroundImage: "url(/header.svg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="fade-up"
      >
        <Header />

        <main className="container mx-auto px-4 py-10">
        </main>
      </div>

      <TestimonialsText />
      <TestimonialData/>
      <Testipaggination />
      <Footer />
    </div>
    )
}

{/* <span className=" bg-gradient-to-r from-violet-500 to-primary bg-clip-text text-transparent ">
Company
</span> */}