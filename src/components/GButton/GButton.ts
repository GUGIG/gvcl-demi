import "./style.scss";

import {
  computed,
  defineComponent,
  type PropType,
  h as _h,
  getCurrentInstance,
} from "vue-demi";

import type { ButtonTypes, ButtonColors } from "../types/ButtonTypes";

export const GButton = defineComponent({
  name: "GButton",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<ButtonTypes>,
      default: "button",
    },
    color: {
      type: String as PropType<ButtonColors>,
      default: "primary",
    },
  },
  emits: {
    click: null,
  },
  setup(props, { emit, slots }) {
    const ROOT_CLASS_NAME = "gugig-button";
    const buttonClasses = computed(() => {
      let className = "";
      className += props.loading ? " gugig-button--loading" : "";
      className += props.disabled ? " gugig-button--disabled" : "";
      className += " " + ROOT_CLASS_NAME + "__" + props.color;
      return className;
    });

    // https://github.com/vuejs/composition-api#createelement--h
    // to use h function outside of 'render()'
    const vm = getCurrentInstance();
    const h = _h.bind(vm);

    return () =>
      h(
        "button",
        {
          class: ROOT_CLASS_NAME + buttonClasses.value,
          type: props.type,
          onClick: () => emit("click"), // vue 3's h function syntax
          attrs: { type: props.type }, // vue 2's h function syntax
          on: { click: () => emit("click") },
        },
        [
          h(
            "span",
            { class: ROOT_CLASS_NAME + "__content" },
            slots.default?.()
          ),
          props.loading
            ? slots.loader
              ? slots.loader?.()
              : h(
                  "span",
                  { class: ROOT_CLASS_NAME + "__loading" },
                  "LOADING..."
                )
            : null,
        ]
      );
  },
});
