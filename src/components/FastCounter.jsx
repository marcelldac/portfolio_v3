import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { Text } from "@chakra-ui/react";

export default function FastCounter(props) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);

    useEffect(() => {
        const animation = animate(count, props.quantity, { duration: 3 });
        return animation.stop;
    }, [])

    return (
        <Text ml={5} color='#BEE3F8'>
            <motion.h1>
                {rounded}
            </motion.h1>
        </Text>
    )
}