import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { XIcon } from "./icons/Xicon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">cyprienf.com</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/cyprienfiquet12"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <GithubIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://fr.linkedin.com/in/cyprien-fiquet"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <LinkedInIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://twitter.com/FiquetCyprien"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <XIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://www.instagram.com/cyprienf.photos/"
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
          >
            <InstagramIcon size={20} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
