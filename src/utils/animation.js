export const riseAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.5
        }
    }
}

export const delayRiseAnimation = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            delay: 0.5,
            duration: 0.5
        }
    }
}

export const fadeInAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.5
        }
    }
}

export const delayFadeInAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            delay: 0.25,
            duration: 0.5
        }
    }
}

export const rotateAnimation = {
    initial: {
        rotate: -270
    },
    animate: {
        rotate: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.95],
            duration: 0.5
        }
    }
}