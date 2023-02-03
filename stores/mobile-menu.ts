import { defineStore } from "pinia";

type Screen = "main" | "collections";

export const useMobileMenu = defineStore("mobile-menu", () => {
  const { state, open, close, toggle } = useToggleState();
  const { width } = useWindowSize();
  const screen = ref<Screen>("main");

  const setScreen = (s: Screen) => (screen.value = s);

  const closeMenu = () => {
    close();
    setTimeout(() => {
      setScreen("main");
    }, 500);
  };

  watchDebounced(
    width,
    () => {
      if (state && width.value >= 1024) {
        closeMenu();
      }
    },
    {
      debounce: 200,
      maxWait: 1000,
    }
  );

  return {
    state,
    open,
    close: closeMenu,
    toggle,
    screen,
    setScreen,
  };
});
