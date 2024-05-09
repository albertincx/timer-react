import * as React from "react";
import {useRef, useEffect} from "react";
import MobileSelect, {CustomConfig} from "mobile-select";

type MSProps = {
    config: Omit<CustomConfig, "trigger">;
    placeholder?: String;
    children?: JSX.Element;
};
export default function MsComponent(props: MSProps) {
    const triggerRef = useRef(null);
    let instanceRef = useRef<any>(null);

    useEffect(() => {
        if (!instanceRef.current) {
            instanceRef.current = new MobileSelect({
                ...props.config,
                trigger: (triggerRef.current as unknown) as HTMLElement,
                triggerDisplayValue: !props.children
            });
        }

        return () => {
            instanceRef?.current.destroy();
            instanceRef.current = null;
        };
    }, []);

    return (
        <div>
            <div className="ms-default-trigger" ref={triggerRef}>
                {props.children || props.placeholder || "Custom time"}
            </div>
        </div>
    );
}
