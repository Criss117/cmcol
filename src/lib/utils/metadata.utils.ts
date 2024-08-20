import { METADATA } from "../consts/metadata";

export function setTitle(title?: string) {
  if (title) {
    return METADATA.title.template.replace("%s", title);
  }

  return METADATA.title.default;
}
