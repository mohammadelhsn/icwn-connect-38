import * as React from "react";

type Variant = "h1" | "h2" | "h3" | "h4" | "subtitle" | "body" | "caption";

interface TypographyProps<T extends React.ElementType = "p"> extends React.HTMLAttributes<HTMLElement> {
    variant?: Variant;
    as?: T;
}

const variantClasses: Record<Variant, string> = {
    h1: "text-5xl font-bold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-semibold",
    h4: "text-2xl font-semibold",
    subtitle: "text-xl font-medium text-ink-600",
    body: "text-base font-normal",
    caption: "text-sm text-ink-500",
};

export function Typography<T extends React.ElementType = "p">({
    variant = "body",
    as,
    className,
    children,
    ...props
}: TypographyProps<T>) {
    const Component = as || (["h1", "h2", "h3", "h4"].includes(variant) ? variant : "p") as React.ElementType;

    return (
        <Component className={`${variantClasses[variant]} ${className ?? ""}`} {...props}>
            {children}
        </Component>
    );
}
