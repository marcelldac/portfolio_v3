import { animate, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function FastCounter(props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, props.quantity, { duration: 3 });
    return animation.stop;
  }, []);

  return (
    <Flex direction="row" ml={12} justify="center">
      <motion.h1
        color={props.color || "black"}
        style={{ fontWeight: 500, fontSize: 16 }}
      >
        {rounded}
      </motion.h1>
      <Text ml={2}>{props.text}</Text>
    </Flex>
  );
}
