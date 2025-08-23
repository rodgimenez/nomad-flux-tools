import { Button } from "@/components/ui/button";
import { Clock, Plane, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <Clock className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            RemoteSync
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/meeting-overlap" className="text-foreground/80 hover:text-foreground transition-colors">
            Meeting Overlap
          </Link>
          <Link to="/schengen-90-180" className="text-foreground/80 hover:text-foreground transition-colors">
            Schengen Tracker
          </Link>
          <Link to="/shift-helper" className="text-foreground/80 hover:text-foreground transition-colors">
            Shift Helper
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <Button variant="default" asChild className="hidden md:flex">
          <Link to="/meeting-overlap">
            <Calculator className="h-4 w-4 mr-2" />
            Get Started
          </Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;