import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className=" dark:bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#374151] via-[#111827] to-black  py-5 md:py-3 lg:py-10 "
      >
        <div className="container pb-20 pt-10  ">
          
          <SectionTitle
            title="What They Offer"
            paragraph="S8ul has its foot in almost every game here are a few games. Still waiting for valorant XD"
            center
          />

          <div className="grid grid-cols-1  dark: gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
