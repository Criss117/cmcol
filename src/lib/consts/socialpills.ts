import type { SocialPill } from "../models/type";

export const SOCIALPILLS: SocialPill[] = [
  {
    id: "whatsapp",
    title: "316-237-6997",
    link: "https://wa.me/573162376997",
    icon: "tabler:brand-whatsapp",
    toClipboard: "3162376997",
  },
  {
    id: "email",
    title: "cmcol.group@gmail.com",
    link: "mailto:cmcol.group@gmail.com",
    icon: "tabler:mail",
    toClipboard: "cmcol.group@gmail.com",
  },
] as const;
