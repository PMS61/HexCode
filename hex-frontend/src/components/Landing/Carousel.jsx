import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Unleash Your Creativity",
      description:
        "Discover powerful tools to bring your ideas to life. Our intuitive platform empowers you to design, build, and launch with ease.",
      imgSrc: "/placeholder.svg",
    },
    {
      title: "Streamline Your Workflow",
      description:
        "Boost your productivity with our suite of integrated tools. Automate tasks, collaborate seamlessly, and focus on what matters most.",
      imgSrc: "/placeholder.svg",
    },
    {
      title: "Scale with Confidence",
      description:
        "Our platform is designed to grow with your business. Leverage our robust infrastructure and cutting-edge features.",
      imgSrc: "/placeholder.svg",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change the slide every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div aria-roledescription="carousel" className="relative w-full max-w-4xl" role="region">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {slides.map((slide, index) => (
            <div
              aria-roledescription="slide"
              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
              role="group"
              key={index}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={slide.imgSrc}
                  alt={`Carousel Image ${index + 1}`}
                  width={800}
                  height={450}
                  className="object-cover rounded-lg aspect-video"
                />
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="text-3xl font-bold">{slide.title}</h3>
                  <p className="text-muted-foreground">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2"
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left h-4 w-4"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        <span className="sr-only">Previous slide</span>
      </button>
      <button
        className="inline-flex shrink-0 items-center justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background font-medium shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-right h-4 w-4"
        >
          <path d="m12 5 7 7-7 7"></path>
          <path d="M5 12h14"></path>
        </svg>
        <span className="sr-only">Next slide</span>
      </button>
    </div>
  );
}
