import React, { type ReactNode } from "react";

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({children, title = "My Subheading"}: SectionProps ) => {
    return(
        <section>
            <p>{title}</p>
            <p>{children}</p>
        </section>
    )
}