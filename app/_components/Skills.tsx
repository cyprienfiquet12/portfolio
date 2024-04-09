import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { TailwindIcon } from "./icons/TailwindIcon";
import { FigmaIcon } from "./icons/FigmaIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant={"outline"}>Skill</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I love working on
      </h2>
      <div className="flex max-lg:flex-col gap-4">
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-2">
            <ReactIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main frontend framework is <Code>React</Code> I also use{" "}
            <Code>Next.js</Code> as backend and frontend framework or I use{" "}
            <Code>Node.js</Code> or <Code>PHP</Code> (with <Code>Symfony</Code>)
            as backend
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-2">
            <TailwindIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            I discovered <Code>Tailwind</Code> 1 year ago and I can&apos;t deal
            without it now. It&apos;s my main CSS framework !
          </p>
        </div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-2">
            <FigmaIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Figma</h3>
          <p className="text-sm text-muted-foreground">
            I like spending time on <Code>Figma</Code>, try new things for
            designs, new colors palet. <Code>Figma</Code> make me feel and
            relaxed.
          </p>
        </div>
      </div>
    </Section>
  );
};
