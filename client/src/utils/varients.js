export const fadeIn = (direction, delay, typo, x, y) => {
    return {
        hidden: {
            x: direction === 'left' ? x : direction === 'right' ? -x : 0,
            y: direction === 'up' ? y : direction === 'down' ? -y : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: typo,
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        }
    }
}