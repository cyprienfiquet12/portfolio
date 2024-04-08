import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ContactType = {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
};
export const ContactCard = (props: ContactType) => {
  return (
    <Link href={props.url} className="w-full">
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
        <div className="relative w-10 h-10">
          <img
            src={props.image}
            alt={props.image}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.mediumImage}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto flex-1">
          <p className="text-lg font-semibold">{props.name}</p>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight
          className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform mr-4"
          size={16}
        />
      </Card>
    </Link>
  );
};
