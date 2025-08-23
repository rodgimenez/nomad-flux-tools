import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Globe, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">RemoteSync</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building essential tools for the location-independent workforce. 
            From timezone coordination to visa compliance, RemoteSync helps remote workers and digital nomads 
            navigate the logistics of distributed work.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Remote work and digital nomadism have opened incredible opportunities for professionals worldwide. 
              But with that freedom comes new challenges: coordinating across timezones, staying compliant with visa rules, 
              and managing work schedules that span continents.
            </p>
            <p>
              RemoteSync was born from our own experiences working remotely and traveling the world. 
              We've felt the frustration of trying to schedule meetings across six timezones, 
              the anxiety of tracking visa day limits, and the confusion of calculating pay for overnight shifts.
            </p>
            <p>
              Our mission is simple: make remote work logistics effortless, so you can focus on what matters – 
              doing great work and exploring the world.
            </p>
          </CardContent>
        </Card>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-meeting" />
                Accuracy First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We use the most reliable data sources and algorithms to ensure our calculations are precise. 
                Your work and travel plans depend on accuracy – we take that seriously.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-schengen" />
                Community Driven
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built by remote workers, for remote workers. We understand the real challenges because we live them. 
                Our tools solve problems we've personally experienced.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-shift" />
                Globally Inclusive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Whether you're working from a coffee shop in Lisbon or a co-working space in Bangkok, 
                our tools are designed to work for anyone, anywhere in the world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tools Overview */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Our Tools</CardTitle>
            <CardDescription>
              Each calculator addresses a specific pain point in remote work logistics
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-meeting to-blue-600 flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">Meeting Overlap Finder</h3>
                <p className="text-sm text-muted-foreground">
                  Eliminates the back-and-forth of finding meeting times across multiple timezones. 
                  Handles DST automatically and generates copy-ready invites.
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-schengen to-green-600 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">Schengen 90/180 Tracker</h3>
                <p className="text-sm text-muted-foreground">
                  Takes the anxiety out of European travel planning. Track your days precisely 
                  and get early warnings before approaching violation thresholds.
                </p>
              </div>

              <div className="space-y-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-shift to-orange-600 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold">Time-Shift Pay Helper</h3>
                <p className="text-sm text-muted-foreground">
                  Helps remote workers understand their local schedules when working for teams 
                  in different timezones, including overtime and pay considerations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust & Transparency */}
        <Card>
          <CardHeader>
            <CardTitle>Trust & Transparency</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold">Open Source Approach</h3>
                <p className="text-sm text-muted-foreground">
                  Our algorithms are transparent and verifiable. We believe you should understand 
                  how our calculations work, especially when they impact your work and travel plans.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Privacy Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Your travel and work data stays private. We process calculations locally when possible 
                  and never store personal information without explicit consent.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Continuous Improvement</h3>
                <p className="text-sm text-muted-foreground">
                  We regularly update our tools based on user feedback and changing regulations. 
                  Subscribe to our updates to stay informed of new features and important changes.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold">Expert Reviewed</h3>
                <p className="text-sm text-muted-foreground">
                  Our calculations are reviewed by immigration lawyers, tax professionals, 
                  and experienced digital nomads to ensure accuracy and practical utility.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default About;