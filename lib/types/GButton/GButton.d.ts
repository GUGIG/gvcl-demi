import "./style.scss";
import { type PropType } from "vue-demi";
import type { ButtonTypes, ButtonColors } from "../types/ButtonTypes";
export declare const GButton: import("vue-demi").DefineComponent<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    color: {
        type: PropType<ButtonColors>;
        default: string;
    };
}, () => import("vue-demi").VNode<import("vue-demi").RendererNode, import("vue-demi").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue-demi").ComponentOptionsMixin, import("vue-demi").ComponentOptionsMixin, {
    click: null;
}, string, import("vue-demi").VNodeProps & import("vue-demi").AllowedComponentProps & import("vue-demi").ComponentCustomProps, Readonly<import("vue-demi").ExtractPropTypes<{
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonTypes>;
        default: string;
    };
    color: {
        type: PropType<ButtonColors>;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    disabled: boolean;
    type: ButtonTypes;
    color: ButtonColors;
}>;
