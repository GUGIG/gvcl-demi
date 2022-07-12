import { defineComponent, computed, getCurrentInstance, h } from "vue";
var style = "";
const GButton = defineComponent({
  name: "GButton",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: "primary"
    }
  },
  emits: {
    click: null
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
    const vm = getCurrentInstance();
    const h$1 = h.bind(vm);
    return () => {
      var _a, _b;
      return h$1("button", {
        class: ROOT_CLASS_NAME + buttonClasses.value,
        type: props.type,
        onClick: () => emit("click"),
        attrs: { type: props.type },
        on: { click: () => emit("click") }
      }, [
        h$1("span", { class: ROOT_CLASS_NAME + "__content" }, (_a = slots.default) == null ? void 0 : _a.call(slots)),
        props.loading ? slots.loader ? (_b = slots.loader) == null ? void 0 : _b.call(slots) : h$1("span", { class: ROOT_CLASS_NAME + "__loading" }, "LOADING...") : null
      ]);
    };
  }
});
export { GButton };
