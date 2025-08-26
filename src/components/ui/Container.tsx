import * as React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "xl";
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ size = "lg", className, ...props }, ref) => {
        const sizeClasses = {
            sm: "max-w-screen-sm",
            md: "max-w-screen-md",
            lg: "max-w-screen-lg",
            xl: "max-w-screen-xl",
        };

        return (
            <div
                ref={ref}
                className={`w-full px-4 mx-auto ${sizeClasses[size]} ${className}`}
                {...props}
            />
        );
    }
);

Container.displayName = "Container";
