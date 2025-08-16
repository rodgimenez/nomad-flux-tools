import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, AlertTriangle } from "lucide-react";

const Schengen90180 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-schengen to-green-600 flex items-center justify-center mx-auto mb-6">
            <MapPin className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Schengen 90/180-Day Tracker</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your Schengen Area stay compliance with the 90-day rolling window rule. 
            Avoid overstay violations and plan your travel safely.
          </p>
        </div>

        {/* Calculator Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <Card className="shadow-calculator">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Trip Calculator
                </CardTitle>
                <CardDescription>
                  Enter your past and planned trips to track compliance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-8 text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Calculator interface coming soon...</p>
                  <p className="text-sm mt-2">
                    Will include trip entry/exit dates and rolling window visualization
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The 90/180 Rule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="font-medium">How it works:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• 90 days maximum in any 180-day period</li>
                    <li>• Rolling window (not calendar period)</li>
                    <li>• Entry and exit days both count</li>
                    <li>• Applies to all Schengen countries</li>
                  </ul>
                </div>
                
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                    <div>
                      <p className="text-sm font-medium">Important</p>
                      <p className="text-xs text-muted-foreground">
                        This is an unofficial calculator. Always verify with official sources.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Example Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Days used (180-day window)</span>
                    <span className="font-mono">45/90</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-schengen rounded-full h-2" style={{ width: '50%' }}></div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Next reset: March 15, 2024
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>How the Rolling Window Works</CardTitle>
            <CardDescription>
              Understanding the 90/180-day calculation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-semibold">Rolling 180-Day Period</h3>
                <p className="text-sm text-muted-foreground">
                  On any given date, look back exactly 179 days (plus the current day = 180 total). 
                  Count all days you were present in the Schengen Area during this period.
                </p>

                <h3 className="font-semibold">Day Counting Rules</h3>
                <p className="text-sm text-muted-foreground">
                  Both entry and exit days count as days present. If you enter on Monday and exit on Friday, 
                  that counts as 5 days total (Monday, Tuesday, Wednesday, Thursday, Friday).
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold">Violation Prevention</h3>
                <p className="text-sm text-muted-foreground">
                  The calculator warns you before violations occur and shows the earliest date 
                  you can re-enter the Schengen Area without exceeding the 90-day limit.
                </p>

                <h3 className="font-semibold">Multiple Trips</h3>
                <p className="text-sm text-muted-foreground">
                  All trips within the 180-day window are combined. Short trips home between 
                  Schengen visits don't reset the counter – it's a true rolling window.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Important Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <h3 className="font-semibold mb-2 text-destructive">Legal Responsibility</h3>
                <p className="text-sm">
                  This calculator is for informational purposes only. You are solely responsible for ensuring 
                  compliance with immigration laws. Always verify with official sources and consult legal 
                  professionals for complex situations.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Special Cases</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Long-term visas and residence permits have different rules</li>
                  <li>• Some nationalities have bilateral agreements with specific countries</li>
                  <li>• Transit without leaving the airport may not count as entry</li>
                  <li>• Border control officers have discretion in enforcement</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Recommended Actions</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Keep all entry/exit stamps and boarding passes</li>
                  <li>• Document your travels with photos and receipts</li>
                  <li>• Check embassy websites for your nationality's specific rules</li>
                  <li>• Consider travel insurance that covers overstay situations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Schengen90180;