/* eslint-disable @next/next/no-img-element */
import { Button, Heading } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { Github } from "@medusajs/icons"
import Link from "next/link"
import Image from "next/image"
import Frame3 from "/public/Frame3.jpg"

const Hero = () => {
  return (
    <div className=" row-span-3 flex flex-row  relative h-full">
      {/* <img
        src="/Frame-3.jpg"
        alt="f1"
        className="object-cover w-full sm:w-full "
      /> */}
      <Image src={Frame3} alt="Picture of the author" />

      <div className="absolute flex flex-col pt-[1rem] pl-[3rem] sm:pt-[10rem] sm:pl-[8rem] md:pt-[10rem] md:pl-[14rem] lg:pl-[18rem]">
        <p className=" font-optinonoy text-4xl sm:text-6xl text-white ">
          <span>Embrace the </span>
          <span className="text-yellow-400">Light</span>
        </p>
        <p className=" px-0 text-xl  font-helvitica text-white ">
          Find your festive sparkle,a world of choices awaits
        </p>
        <div className="flex flex-row sm:px-3 px-0 py-1 sm:py-2 md:px-8 md:py-1 md:text-md text-sm">
          <span className="py-3 flex gap-x-4">
            <Link
              href="/store"
              className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-black border-2 text-yellow-400 rounded-lg bg-white font-semibold hover:text-gray-500 transition duration-300"
            >
              <span className="md:py-2 sm:px-4  md:px-0 ">SHOP NOW</span>
            </Link>

            <Link
              href="/store"
              className="md:py-2 md:px-12 sm:px-6 px-1 py-2 sm:py-2 font-holispay border-white border-2 text-yellow-400 rounded-lg bg-black font-semibold hover:text-gray-500 transition duration-300"
            >
              <span className="md:py-2 sm:px-4  md:px-0 ">DISCOVER MORE</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
