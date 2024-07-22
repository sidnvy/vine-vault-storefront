import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-4 sm:p-8 md:p-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Discover Exquisite Wines
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
          Explore our curated selection of fine wines from around the world
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="large" variant="primary">
            Shop Now
          </Button>
          <Button size="large" variant="secondary">
            Wine Tasting Events
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero
