import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import Profile from "../_assets/img/profil.png";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will be happy to work with you
      </h2>
      <div className="flex max-md:flex-col w-full gap-4">
        <div className="flex-1">
          <ContactCard
            name="Cyprien Fiquet"
            image={Profile.src}
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
            description=""
            url="https://fr.linkedin.com/in/cyprien-fiquet"
          />
        </div>
        <div className="flex-1">
          <ContactCard
            name="@FiquetCyprien"
            image="https://pbs.twimg.com/profile_images/1037983455919915008/RIIHVM5V_400x400.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
            description=""
            url="https://twitter.com/FiquetCyprien"
          />{" "}
        </div>
      </div>
      <div className="flex max-md:flex-col w-full gap-4">
        <div className="flex-1">
          <ContactCard
            name="cyprienf.photo"
            image="https://scontent.cdninstagram.com/v/t51.2885-19/326563655_507275228214012_8596772899301739592_n.jpg?stp=dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=hsmrlDe91D8Ab4GcdHY&_nc_ht=scontent.cdninstagram.com&oh=00_AfBDCflRAmRykYKkesHrEWoF4ZK4po1RnPbf2_ZgNDCdvA&oe=6619E58B"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
            description="20 Followers"
            url="https://www.instagram.com/cyprienf.photos/"
          />{" "}
        </div>

        <div className="flex-1">
          <ContactCard
            name="cyprien.fiquetpro@outlook.fr"
            image={Profile.src}
            mediumImage="https://e7.pngegg.com/pngimages/912/208/png-clipart-microsoft-outlook-outlook-com-computer-icons-email-outlook-on-the-web-free-miscellaneous-blue.png"
            description="Email me for any inquiries."
            url="mailto:cyprien.fiquetpro@outlook.fr"
          />{" "}
        </div>
      </div>
    </Section>
  );
};
