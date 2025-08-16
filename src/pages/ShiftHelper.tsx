import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Timer, DollarSign, Printer } from "lucide-react";

const ShiftHelper = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-shift to-orange-600 flex items-center justify-center mx-auto mb-6">
            <Timer className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Time-Shift Pay Helper</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calculate local work hours and overtime when working remote shifts for teams in different timezones. 
            Perfect for freelancers and remote employees.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-calculator">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="h-5 w-5" />
                  Shift Calculator
                </CardTitle>
                <CardDescription>
                  Enter your base schedule and remote team timezone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-muted-foreground">
                  <Timer className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Calculator interface coming soon...</p>
                  <p className="text-sm mt-2">
                    Will include timezone selection, schedule input, and overtime rules
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">What it calculates:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Your local clock schedule</li>
                    <li>• Weekly hour totals</li>
                    <li>• Overtime threshold alerts</li>
                    <li>• Pay differential estimates</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium">Helpful for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Remote employees</li>
                    <li>• Freelancers</li>
                    <li>• Contractors</li>
                    <li>• Global team coordination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-accent/50 rounded-lg">
                    <div className="text-sm space-y-1">
                      <p className="font-medium">Berlin Team Hours</p>
                      <p>9:00 AM - 5:00 PM CET</p>
                    </div>
                  </div>
                  <div className="text-center text-xs text-muted-foreground">↓</div>
                  <div className="p-3 bg-shift/10 rounded-lg">
                    <div className="text-sm space-y-1">
                      <p className="font-medium">Your Local Hours (NYC)</p>
                      <p>3:00 AM - 11:00 AM EST</p>
                      <p className="text-xs text-destructive">⚠️ Includes overtime hours</p>
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
              Understanding timezone shifts and pay calculations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">1. Timezone Conversion</h3>
                <p className="text-sm text-muted-foreground">
                  Convert the remote team's working hours to your local timezone, 
                  automatically accounting for Daylight Saving Time differences.
                </p>

                <h3 className="font-semibold">2. Schedule Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Analyze when your work hours fall in your local day and week, 
                  identifying potential overtime, night shifts, or weekend work.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">3. Overtime Detection</h3>
                <p className="text-sm text-muted-foreground">
                  Flag hours that exceed daily or weekly thresholds based on your location's 
                  labor laws or your employment agreement.
                </p>

                <h3 className="font-semibold">4. Pay Estimates</h3>
                <p className="text-sm text-muted-foreground">
                  Calculate potential pay differentials for night work, overtime, 
                  or inconvenient hours based on common industry standards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Timer className="h-5 w-5 text-shift" />
                Schedule Conversion
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                See exactly what time you'll be working in your local timezone, 
                including DST-aware conversions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <DollarSign className="h-5 w-5 text-shift" />
                Overtime Alerts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Automatic detection of hours that qualify for overtime pay 
                based on configurable thresholds.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Printer className="h-5 w-5 text-shift" />
                Printable Schedule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Generate clean, printable schedules for your records 
                or to share with HR and payroll teams.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How accurate are the pay estimates?</h3>
                <p className="text-sm text-muted-foreground">
                  Pay estimates are based on common industry standards and should be used as guidelines only. 
                  Your actual pay rates depend on your employment agreement, local laws, and company policies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Can I factor in multiple time zones?</h3>
                <p className="text-sm text-muted-foreground">
                  Currently, the calculator handles one remote timezone at a time. 
                  For multiple teams, run separate calculations and manually combine the results.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">What about local labor laws?</h3>
                <p className="text-sm text-muted-foreground">
                  The calculator provides general overtime thresholds, but you should always 
                  verify compliance with your local labor laws and employment agreements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Can I save my calculations?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! You can generate printable PDFs of your schedules and calculations 
                  for your records or to share with employers and tax professionals.
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

export default ShiftHelper;