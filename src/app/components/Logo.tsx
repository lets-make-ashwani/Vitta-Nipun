import brandLogo from '@/VN-logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-10 w-auto object-contain" }: LogoProps) {
  return (
    <img 
      src={brandLogo} 
      alt="Vitta Nipun Logo" 
      className={className} 
    />
  );
}