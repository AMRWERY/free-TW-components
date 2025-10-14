import { ref } from "vue";
import type { Ref } from "vue";
import { useClipboard } from "@vueuse/core";

export function useClipboardExample(
  initialValue: string | Ref<string> = "Hello from Vue + VueUse!"
) {
  const source =
    typeof initialValue === "string" ? ref(initialValue) : initialValue;

  const { copy, copied, isSupported } = useClipboard({ source });

  async function onCopy(overrideContent?: string) {
    await copy(overrideContent);
  }

  return {
    source,
    copied,
    isSupported,
    onCopy,
  };
}
