import * as React from "react";
import { useRef, useEffect } from "react";
import MobileSelect, { CustomConfig } from "mobile-select";

type MSProps = {
    config: Omit<CustomConfig, "trigger">;
    placeholder?: String;
    children?: JSX.Element;
};
export default function MsComponent(props: MSProps) {
    const tirggerRef = useRef(null);
    let instanceRef = useRef<any>(null);

    useEffect(() => {
        console.log(" triggerDisplayValue: !props.children", !props.children);
        console.log("useEffect:实例化调用", instanceRef);
        if (!instanceRef.current) {
            instanceRef.current = new MobileSelect({
                ...props.config,
                trigger: (tirggerRef.current as unknown) as HTMLElement,
                triggerDisplayValue: !props.children
            });
        }

        return () => {
            instanceRef?.current.destroy();
            instanceRef.current = null;
            console.log("销毁时调用", instanceRef);
        };
    }, []);

    return (
        <div>
            <div className="ms-default-trigger" ref={tirggerRef}>
                {props.children || props.placeholder || "Please select an option.."}
            </div>
        </div>
    );
}
