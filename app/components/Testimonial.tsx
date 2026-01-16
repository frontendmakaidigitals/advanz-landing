"use client";
import { EmblaOptionsType } from "embla-carousel";
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from "@/components/uilayouts/carousel";
import Image from "next/image";
import { Star, StarIcon } from "lucide-react";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar?: string;
}

// Sample Google reviews data
const GOOGLE_REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "January 2026",
    text: "Absolutely phenomenal service! The team went above and beyond to ensure our project was completed on time and exceeded expectations. Highly recommend!",
    avatar: "/avatars/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: 5,
    date: "December 2025",
    text: "Professional, responsive, and incredibly knowledgeable. They transformed our vision into reality with attention to every detail.",
    avatar: "/avatars/michael.jpg",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    date: "November 2025",
    text: "Great experience overall! Communication was excellent and the final product looks amazing. Would definitely work with them again.",
    avatar: "/avatars/emily.jpg",
  },
  {
    id: 4,
    name: "David Kim",
    rating: 5,
    date: "October 2025",
    text: "Outstanding quality and customer service. They handled everything professionally from start to finish. Worth every penny!",
    avatar: "/avatars/david.jpg",
  },
  {
    id: 5,
    name: "Jessica Williams",
    rating: 5,
    date: "September 2025",
    text: "The best decision we made for our business! Their expertise and creativity delivered results beyond what we imagined.",
    avatar: "/avatars/jessica.jpg",
  },
  {
    id: 6,
    name: "Robert Taylor",
    rating: 4,
    date: "August 2025",
    text: "Very satisfied with the outcome. The team was flexible and accommodating throughout the entire process. Great value for money.",
    avatar: "/avatars/robert.jpg",
  },
];

// Helper function to render star ratings
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <StarIcon
      key={i}
      className={`h-5 w-5 ${
        i < rating ? "text-yellow-400 fill-amber-300" : "text-gray-300"
      }`}
    />
  ));
};

function Testimonial() {
  const OPTIONS: EmblaOptionsType = { loop: false };
  const emblaApiRef = useRef<any>(null);

  // 🎯 Callback to receive Embla API from Carousel
  const onEmblaInit = (api: any) => {
    emblaApiRef.current = api;
  };

  // 🔄 Custom navigation handlers
  const scrollPrev = () => {
    if (emblaApiRef.current) emblaApiRef.current.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApiRef.current) emblaApiRef.current.scrollNext();
  };

  return (
    <section className="max-w-6xl px-5 mx-auto my-24">
      <div className="mb-6">
        <h2 className="text-4xl font-semibold font-domine text-center">
          Trusted by our customers
        </h2>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-3 lg:gap-2 mt-4">
          <div className="border-t pt-3 lg:border-r border-slate-300 pr-4 flex items-center gap-1">
            {Array.from({ length: 4 }).map((_, i) => (
              <Star className="text-yellow-500 fill-amber-400" key={i} />
            ))}
            <span>4 star rating out of 50 reviews</span>
          </div>

          <div className="pl-4">
            <button className="bg-black px-3 py-1.5 text-white rounded-lg">
              Leave a review
            </button>
          </div>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            playOnInit: true,
            delay: 2000,
            stopOnMouseEnter: false,
            stopOnInteraction: false,
          }),
        ]}
        onEmblaInit={onEmblaInit}
        className="bg-transparent sm:px-10 px-2 relative"
        options={OPTIONS}
      >
        <button
          onClick={scrollPrev}
          className="  bg-white border z-20 p-2 rounded-lg absolute top-1/2 -translate-y-1/2 -left-2 hover:bg-gray-100"
          aria-label="Previous review"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={scrollNext}
          className="  bg-white border z-20 p-2 rounded-lg absolute top-1/2 -translate-y-1/2 -right-2 hover:bg-gray-100"
          aria-label="Next review"
        >
          <ArrowRight />
        </button>
        <SliderContainer className="gap-4 md:gap-6 pb-1">
          {GOOGLE_REVIEWS.map((review) => (
            <Slider
              key={review.id}
              className="basis-1/1 lg:basis-1/3 p-6 bg-white shadow-md rounded-xl border flex flex-col"
            >
              {/* Rating and Date */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex space-x-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 grow">"{review.text}"</p>

              {/* Reviewer Info */}
              <div className="flex items-center">
                {review.avatar ? (
                  <div className="size-13 mr-3">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1604364721460-0cbc5866219d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full w-full h-full object-cover "
                    />
                  </div>
                ) : (
                  <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-3">
                    <span className="text-gray-600 font-medium">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center mt-1">
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                      Google Review
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          ))}
        </SliderContainer>
        <div className="flex justify-center py-3">
          <SliderDotButton />
        </div>
      </Carousel>
    </section>
  );
}

export default Testimonial;
