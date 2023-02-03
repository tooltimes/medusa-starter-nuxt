export default function useToggleState(initialState: boolean = false) {
  const state = ref(initialState);

  const close = () => {
    state.value = false;
  };

  const open = () => {
    state.value = true;
  };

  const toggle = () => {
    state.value = !state.value;
  };

  return {
    state,
    close,
    open,
    toggle,
  };
}
