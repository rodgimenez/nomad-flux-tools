import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, Calculator, Users, MapPin, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
                    Remote Work
                  </span>
                  <br />
                  Made Simple
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Essential logistics calculators for digital nomads and remote workers. 
                  Coordinate meetings, track visa days, and manage cross-timezone schedules.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <Link to="/meeting-overlap">
                    <Clock className="h-5 w-5 mr-2" />
                    Start Calculating
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <Link to="/about">
                    Learn More
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Multi-timezone</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span>Visa tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="h-4 w-4" />
                  <span>Shift planning</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img 
                src={heroImage} 
                alt="Digital nomads working across timezones"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-20 bg-accent/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Three Essential Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to coordinate work across timezones, track travel compliance, 
              and manage remote schedules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Meeting Overlap Calculator */}
            <Card className="relative overflow-hidden group hover:shadow-calculator transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-meeting/10 to-meeting/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-meeting to-blue-600 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Meeting Overlap Finder</CardTitle>
                <CardDescription>
                  Find the perfect meeting time across up to 6 timezones with working hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-meeting" />
                    Multi-timezone coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-meeting" />
                    Automatic DST handling
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-meeting" />
                    Copy-ready meeting invites
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link to="/meeting-overlap">
                    Try Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Schengen Tracker */}
            <Card className="relative overflow-hidden group hover:shadow-calculator transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-schengen/10 to-schengen/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-schengen to-green-600 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Schengen 90/180 Tracker</CardTitle>
                <CardDescription>
                  Track your Schengen visa days and avoid overstay violations.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-schengen" />
                    Rolling 180-day window
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-schengen" />
                    Violation warnings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-schengen" />
                    Next valid entry dates
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link to="/schengen-90-180">
                    Try Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Shift Helper */}
            <Card className="relative overflow-hidden group hover:shadow-calculator transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-shift/10 to-shift/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-shift to-orange-600 flex items-center justify-center mb-4">
                  <Timer className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">Time-Shift Pay Helper</CardTitle>
                <CardDescription>
                  Calculate local work hours and overtime for remote timezone shifts.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative space-y-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-shift" />
                    Local schedule conversion
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-shift" />
                    Overtime calculations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-shift" />
                    Printable schedules
                  </li>
                </ul>
                <Button className="w-full" variant="secondary" asChild>
                  <Link to="/shift-helper">
                    Try Calculator
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
