export const bottomFadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut", delay }
    })
}

export const bottomSpringUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 1,
            duration: 0.8,
            ease: "easeOut",
            delay,
        },
    }),
};