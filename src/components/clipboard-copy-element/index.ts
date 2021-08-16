import { App } from "vue";
import ClipboardCopyElement from "./src/index";

export const Copy = ClipboardCopyElement;

export default {
  install(app: App) {
    app.directive("copy", ClipboardCopyElement);
  },
};
