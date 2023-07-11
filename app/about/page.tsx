import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About S8UL"
        description="S8ul Esports is an Indian team that is formed by a partnership between two major esports organizations, Team SouL and 8bit.
        S8ul also competes for esports titles like PUBG, BGMI, Clash of Clans, Clash Royale and Free Fire."
      />
      <AboutSectionOne />
 
    </>
  );
};

export default AboutPage;
