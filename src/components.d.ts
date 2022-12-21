/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface LukesMightyGif {
        "src": string;
    }
}
export interface LukesMightyGifCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLLukesMightyGifElement;
}
declare global {
    interface HTMLLukesMightyGifElement extends Components.LukesMightyGif, HTMLStencilElement {
    }
    var HTMLLukesMightyGifElement: {
        prototype: HTMLLukesMightyGifElement;
        new (): HTMLLukesMightyGifElement;
    };
    interface HTMLElementTagNameMap {
        "lukes-mighty-gif": HTMLLukesMightyGifElement;
    }
}
declare namespace LocalJSX {
    interface LukesMightyGif {
        "onOnerror"?: (event: LukesMightyGifCustomEvent<Error>) => void;
        "onOnload"?: (event: LukesMightyGifCustomEvent<any>) => void;
        "onOnloadstart"?: (event: LukesMightyGifCustomEvent<any>) => void;
        "src"?: string;
    }
    interface IntrinsicElements {
        "lukes-mighty-gif": LukesMightyGif;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "lukes-mighty-gif": LocalJSX.LukesMightyGif & JSXBase.HTMLAttributes<HTMLLukesMightyGifElement>;
        }
    }
}
