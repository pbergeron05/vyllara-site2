import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

export default function Home() {
  return <main className="min-h-screen bg-sand text-charcoal"><Header/><Hero/><About/><Experience/><HowItWorks/><Footer/></main>;
}
