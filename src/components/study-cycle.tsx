"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STUDIES = [
  "geologer",
  "informatikere",
  "sivilingeniører",
  "datavitere",
  "maskiningeniører",
  "elektroingeniører",
  "byggstudenter",
  "arkitekter",
  "økonomer",
  "markedsførere",
  "designere",
  "journalister",
  "lektorer",
  "sykepleiere",
  "leger",
];

const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

export const StudyCycle = () => {
  const [current, setCurrent] = useState(STUDIES[0]);
  const [color, setColor] = useState(generateRandomHexColor());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = STUDIES.indexOf(current);
      const nextIndex = (currentIndex + 1) % STUDIES.length;
      setCurrent(STUDIES[nextIndex]);
      setColor(generateRandomHexColor());
    }, 2000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <AnimatePresence key={current}>
      <span className="">
        <motion.span
          initial={{
            opacity: 0,
            x: -20,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 20,
          }}
          className="text-primary font-semibold"
        >
          {current}
        </motion.span>
      </span>
    </AnimatePresence>
  );
};
