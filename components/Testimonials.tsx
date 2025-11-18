"use client";

import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { Transition } from "@headlessui/react";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  // Generate avatar URL based on name
  const getAvatarUrl = (name: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=56&background=random&color=fff&bold=true&rounded=true`;
  };

  const testimonials: Testimonial[] = [
    {
      img: getAvatarUrl("Kumar"),
      quote: "The community engagement is real and authentic. I've made real connections.",
      name: "Kumar",
      role: "Member",
    },
    {
      img: getAvatarUrl("Priyanka"),
      quote: "I received my first Flipkart voucher within a month. The rewards are genuine, and the community is incredibly supportive.",
      name: "Priyanka",
      role: "Member",
    },
    {
      img: getAvatarUrl("Shan Walsh"),
      quote: "As a group head, I love coordinating activities. The extra benefits make it worthwhile, and I've made real connections.",
      name: "Shan Walsh",
      role: "Group Head",
    },
    {
      img: getAvatarUrl("Hemalatha"),
      quote: "The community support helped my business gain instant visibility. Best part? It's completely free!",
      name: "Hemalatha",
      role: "Member",
    },
    {
      img: getAvatarUrl("Prabhu"),
      quote: "Amazing rewards system! I've received multiple gift vouchers just by staying active in the community.",
      name: "Prabhu",
      role: "Member",
    },
    {
      img: getAvatarUrl("Sugavanesh"),
      quote: "Leading a group has been rewarding. The extra benefits and networking opportunities are unmatched.",
      name: "Sugavanesh",
      role: "Group Head",
    },
    {
      img: getAvatarUrl("Nandhini"),
      quote: "From zero visibility to consistent engagement in weeks! This community changed my business trajectory.",
      name: "Nandhini",
      role: "Member",
    },
  ];

  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1 === testimonials.length ? 0 : prev + 1));
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center px-2">
            What Our Members Say
          </h2>
          <div className="mx-auto w-full max-w-3xl text-center px-2">
            <div className="relative h-24 sm:h-32">
              <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[300px] sm:h-[480px] sm:w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-primary-500/25 before:via-primary-500/5 before:via-25% before:to-primary-500/0 before:to-75%">
                <div className="h-24 sm:h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                  {testimonials.map((testimonial, index) => (
                    <Transition
                      as="div"
                      key={index}
                      show={active === index}
                      className="absolute inset-0 -z-10 h-full"
                      enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                      enterFrom="opacity-0 -rotate-[60deg]"
                      enterTo="opacity-100 rotate-0"
                      leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                      leaveFrom="opacity-100 rotate-0"
                      leaveTo="opacity-0 rotate-[60deg]"
                      beforeEnter={() => heightFix()}
                    >
                      <Image
                        className="relative left-1/2 top-8 sm:top-11 -translate-x-1/2 rounded-full"
                        src={testimonial.img}
                        width={56}
                        height={56}
                        alt={testimonial.name}
                      />
                    </Transition>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-6 sm:mb-9 transition-all delay-300 duration-150 ease-in-out px-2">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {testimonials.map((testimonial, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                  >
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary-900 before:content-['\201C'] after:content-['\201D'] px-2">
                      {testimonial.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            <div className="-m-1.5 flex flex-wrap justify-center px-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-2 sm:px-3 py-1.5 text-xs shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-300 min-h-[32px] ${
                    active === index
                      ? "bg-primary-500 text-white shadow-primary-950/10"
                      : "bg-white text-primary-900 hover:bg-primary-100"
                  }`}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span>{testimonial.name}</span>{" "}
                  <span
                    className={`${
                      active === index ? "text-primary-200" : "text-primary-300"
                    }`}
                  >
                    -
                  </span>{" "}
                  <span>{testimonial.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}