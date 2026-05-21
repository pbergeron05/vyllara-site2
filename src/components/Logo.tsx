import Image from "next/image";
export function Logo({ variant="white", className="" }:{variant?:"white"|"charcoal";className?:string}) {
  return <Image src={variant==="white"?"/logo-white.png":"/logo-charcoal.png"} alt="VYLLARA" width={440} height={120} priority className={`h-auto w-[150px] object-contain md:w-[190px] ${className}`} />;
}
