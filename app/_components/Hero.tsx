import { Section } from "./Section";
import Profil from "../_assets/img/profil.png";
import { ReactIcon } from "./icons/ReactIcon";
import { JavaScriptIcon } from "./icons/JavaScriptIcon";
import { PhpIcon } from "./icons/PhpIcon";
import Companie from "../_assets/img/organilog.png";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption text-5xl font-bold text-primary">
          {" "}
          Cyprien Fiquet
        </h2>
        <h3 className="text-3xl font-caption"> FullStack Developper</h3>
        <p className="text-base">
          I love coding in{" "}
          <Code className="inline-flex items-center gap-1">
            <ReactIcon size={16} className="inline" />
            React
          </Code>
          ,{" "}
          <Code className="inline-flex items-center gap-1">
            <JavaScriptIcon size={16} className="inline" />
            JavaScript
          </Code>{" "}
          and{" "}
          <Code className="inline-flex items-center gap-1">
            <PhpIcon size={16} className="inline" />
            PHP
          </Code>
          , currently working at{" "}
          <Link href="https://fr.organilog.com/">
            <Code className="inline-flex items-center gap-1">
              <img
                className="inline"
                style={{ width: 16, height: "auto" }}
                src={Companie.src}
              />
              Organilog
            </Code>
          </Link>
          , living in{" "}
          <Code className="inline-flex items-center gap-1">
            <img
              className="inline"
              style={{ width: 16, height: "auto" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg/220px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%29.svg.png"
              alt="France flag"
            />
            France
          </Code>
          . My hobbies are{" "}
          <Code className="inline-flex items-center gap-1">🧗🏼‍♂️ Climbing</Code>,{" "}
          <Code className="inline-flex items-center gap-1">🚶🏽‍♂️‍➡️ Walking</Code>{" "}
          and{" "}
          <Code className="inline-flex items-center gap-1">🎮 Video games</Code>
        </p>
      </div>
      <div className="flex-[2] max-lg:m-auto ml-auto">
        <img
          src={Profil.src}
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="Cyprien's picture"
        />
      </div>
    </Section>
  );
};
