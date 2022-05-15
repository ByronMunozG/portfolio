import { motion } from "framer-motion";
import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { ReactNode } from "react";

const MotionDiv = motion<Omit<BoxProps, "transition">>(Box);

interface ISectionProps {
  children: ReactNode;
  delay?: number;
}

const Section: FC<ISectionProps> = ({ children, delay = 0 }) => (
  <MotionDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
  >
    {children}
  </MotionDiv>
);

export default Section;
