import { copyNode, copyText } from "./clipboard";

async function copy(button: HTMLElement) {
  const id = button.getAttribute("for");
  const text = button.getAttribute("value");
  function trigger() {
    button.dispatchEvent(new CustomEvent("clipboard-copy", { bubbles: true }));
  }

  if (text) {
    await copyText(text);
    trigger();
  } else if (id) {
    const root =
      "getRootNode" in Element.prototype
        ? button.getRootNode()
        : button.ownerDocument;
    if (
      !(
        root instanceof Document ||
        ("ShadowRoot" in window && root instanceof ShadowRoot)
      )
    )
      return;
    const node = root.getElementById(id);
    if (node) {
      await copyTarget(node);
      trigger();
    }
  } else {
    await copyNode(button);
    trigger();
  }
}

function copyTarget(content: HTMLElement) {
  if (
    content instanceof HTMLInputElement ||
    content instanceof HTMLTextAreaElement
  ) {
    return copyText(content.value);
  } else if (
    content instanceof HTMLAnchorElement &&
    content.hasAttribute("href")
  ) {
    return copyText(content.href);
  } else {
    return copyNode(content);
  }
}

function clicked(event: Event) {
  const button: any = event.currentTarget;
  if (button instanceof HTMLElement) {
    copy(button);
  }
}

function keydown(event: any) {
  if (event.key === " " || event.key === "Enter") {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      event.preventDefault();
      copy(button);
    }
  }
}

function focused(event: any) {
  event.currentTarget.addEventListener("keydown", keydown);
}

function blurred(event: any) {
  event.currentTarget.removeEventListener("keydown", keydown);
}

export default {
  created(el: HTMLElement) {
    if (!el.hasAttribute("tabindex")) {
      el.setAttribute("tabindex", "0");
    }

    if (!el.hasAttribute("role")) {
      el.setAttribute("role", "button");
    }
  },
  mounted(el: HTMLElement) {
    el.addEventListener("click", clicked);
    el.addEventListener("focus", focused);
    el.addEventListener("blur", blurred);
  },
};
