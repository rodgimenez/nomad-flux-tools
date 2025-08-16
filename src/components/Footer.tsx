import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-accent/50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Clock className="h-3 w-3 text-primary-foreground" />
              </div>
              <span className="font-bold">RemoteSync</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Essential logistics tools for remote workers and digital nomads.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/meeting-overlap" className="text-muted-foreground hover:text-foreground">Meeting Overlap Finder</Link></li>
              <li><Link to="/schengen-90-180" className="text-muted-foreground hover:text-foreground">Schengen 90/180 Tracker</Link></li>
              <li><Link to="/shift-helper" className="text-muted-foreground hover:text-foreground">Shift Helper</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/disclaimer" className="text-muted-foreground hover:text-foreground">Disclaimer</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <p className="text-sm text-muted-foreground">
              Built for the remote work community. Use responsibly and verify important dates independently.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2024 RemoteSync. Tools for location-independent professionals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;