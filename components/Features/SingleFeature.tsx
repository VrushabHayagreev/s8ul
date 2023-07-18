import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full p-3 bg-gradient-to-r from-[#fde68a] to-[#facc15]/80">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md   text-black/90">
          <img src={icon}/>
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-black/90 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-black/90">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
