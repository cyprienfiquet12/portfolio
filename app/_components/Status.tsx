import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { Egg, Footprints, Home, Layers3 } from "lucide-react";
import Companie from "../_assets/img/organilog.png";
import OldCompanie1 from "../_assets/img/proxiad.jpeg";
import Profile from "../_assets/img/profil.png";
import { ContactCard } from "./ContactCard";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="p-4 w-full flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side, fun projects.</p>
          <div className="flex flex-col flex-4">
            {SIDE_PROJECT.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          {" "}
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col flex-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          {" "}
          <p className="text-lg text-muted-foreground">Contact me</p>
          <ContactCard
            name="Cyprien Fiquet"
            image={Profile.src}
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1024px-LinkedIn_icon.svg.png"
            description=""
            url="https://fr.linkedin.com/in/cyprien-fiquet"
          />
          <ContactCard
            name="@FiquetCyprien"
            image="https://pbs.twimg.com/profile_images/1037983455919915008/RIIHVM5V_400x400.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
            description=""
            url="https://twitter.com/FiquetCyprien"
          />
          <ContactCard
            name="cyprienf.photo"
            image="https://scontent.cdninstagram.com/v/t51.2885-19/326563655_507275228214012_8596772899301739592_n.jpg?stp=dst-jpg_s160x160&_nc_cat=102&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=hsmrlDe91D8Ab4GcdHY&_nc_ht=scontent.cdninstagram.com&oh=00_AfBDCflRAmRykYKkesHrEWoF4ZK4po1RnPbf2_ZgNDCdvA&oe=6619E58B"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
            description="20 Followers"
            url="https://www.instagram.com/cyprienf.photos/"
          />
        </Card>
      </div>
    </Section>
  );
};
const SIDE_PROJECT: SideProjectProps[] = [
  {
    Logo: Layers3,
    title: "My Boilerplate",
    description:
      "I have created a boilerplate that is completely free and features all the technologies I like (React, NextJs, Tailwind, Prisma, Stripe, AuthJs). You can thank me by giving me a star on this Repository",
    url: "https://github.com/cyprienfiquet12/my-public-stack",
  },
  {
    Logo: Egg,
    title: "Dofus Adventure Manager",
    description:
      "An application to follow the complete progress of each of its characters in the Dofus video game.",
    url: "https://github.com/cyprienfiquet12/dofus-adventure-manager",
  },
  {
    Logo: Footprints,
    title: "Promenade",
    description:
      "An app for people who like to walk with their dogs or who want to find someone to do it for them.",
    url: "",
  },
];

const WORKS: WorkProps[] = [
  {
    image: Companie.src,
    title: "Organilog",
    role: "Fullstack Web developper",
    url: "https://fr.organilog.com/",
    date: "2021 - Present",
  },
  {
    image: OldCompanie1.src,
    title: "Proxiad Axe-Seine",
    role: "Web developper",
    url: "https://www.proxiad.com/",
    date: "2019 - 2021",
  },

  {
    image: OldCompanie1.src,
    title: "Proxiad Axe-Seine",
    role: "Bi-Analyst programmer",
    url: "https://www.proxiad.com/",
    date: "2018 - 2019",
  },
];
