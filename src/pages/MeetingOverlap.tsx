import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Clock, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

const MeetingOverlap = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-meeting to-blue-600 flex items-center justify-center mx-auto mb-6">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Meeting Overlap Finder</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect meeting time across up to 6 timezones with working hours. 
            Handles DST automatically and provides copy-ready meeting invites.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-calculator">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Calculator
                </CardTitle>
                <CardDescription>
                  Add participants with their timezones and working hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Calculator interface coming soon...</p>
                  <p className="text-sm mt-2">
                    Will include timezone selection, working hours input, and date range picker
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Guide</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">How it works:</p>
                  <ol className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>1. Add team members with their cities</li>
                    <li>2. Set working hours for each person</li>
                    <li>3. Choose date range to check</li>
                    <li>4. Get optimal meeting slots</li>
                  </ol>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Automatic DST handling</li>
                    <li>• 30/60 minute window options</li>
                    <li>• Copy-ready meeting invites</li>
                    <li>• Up to 6 participants</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Result</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Best Slot</span>
                      <Button size="sm" variant="outline">
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="text-sm space-y-1">
                      <p>San Francisco: 9:00 AM</p>
                      <p>London: 5:00 PM</p>
                      <p>São Paulo: 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>
              The algorithm behind timezone coordination
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">1. Normalize to UTC</h3>
                <p className="text-sm text-muted-foreground">
                  Each participant's working hours are converted to UTC intervals for the selected date, 
                  automatically accounting for Daylight Saving Time transitions.
                </p>

                <h3 className="font-semibold">2. Find Intersections</h3>
                <p className="text-sm text-muted-foreground">
                  The system calculates overlapping time windows across all participants, 
                  identifying candidate meeting slots of 30 or 60 minutes.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">3. Convert Back to Local Time</h3>
                <p className="text-sm text-muted-foreground">
                  Results are displayed in each participant's local timezone, 
                  making it easy to see what time the meeting would be for everyone.
                </p>

                <h3 className="font-semibold">4. Generate Meeting Invites</h3>
                <p className="text-sm text-muted-foreground">
                  One-click copying of meeting details with times formatted for each participant, 
                  ready to paste into calendar invites or team communications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How accurate is the DST handling?</h3>
                <p className="text-sm text-muted-foreground">
                  We use the browser's built-in Intl.DateTimeFormat API which is updated automatically 
                  with timezone rule changes. This ensures accuracy without requiring manual updates.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Can I save my team configurations?</h3>
                <p className="text-sm text-muted-foreground">
                  Currently, configurations are stored locally in your browser. 
                  We're working on cloud sync for easier access across devices.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">What if there are no overlapping hours?</h3>
                <p className="text-sm text-muted-foreground">
                  The calculator will suggest the best compromise times and show how many participants 
                  would be outside their working hours for each option.
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

export default MeetingOverlap;