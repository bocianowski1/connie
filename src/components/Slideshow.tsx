import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

export default function Slideshow({
  logos,
  dir = "left",
}: {
  logos: Array<StaticImageData>;
  dir?: "right" | "left";
}) {
  const marqueeDivs: string = "flex items-center gap-16 mr-16 h-full";
  return (
    <Marquee direction={dir} gradient gradientColor="#f0ece3" pauseOnHover>
      <div className={marqueeDivs}>
        {logos.map((img) => (
          <div key={String(img)}>
            <Image
              src={img}
              alt="lol"
              height={1000}
              width={1000}
              className="h-20 w-full"
            />
          </div>
        ))}
        <div>
          <p className="text-2xl font-medium">Er du neste...?</p>
        </div>
      </div>
    </Marquee>
  );
}
