'use client'
import { motion } from "framer-motion";
import Button1 from "../components/comman/Buttons/Button1";
import { FaArrowRight } from "react-icons/fa";
import FirstSection from "../components/careers/FirstSection";
import SecondSection from "../components/careers/SecondSection";


export default function page() {
  return (
    <div>
    <FirstSection/>
    <SecondSection/>
    </div>
  );
}
