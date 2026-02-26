import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, Building, Building2 } from "lucide-react";

// Mock data representing stored sign-ups
const MOCK_SIGNUPS = [
  {
    id: "1",
    email: "john.doe@buildco.com",
    company: "BuildCo Construction",
    employees: "51-100",
    signupDate: "2026-02-26T10:30:00Z",
  },
  {
    id: "2",
    email: "sarah.smith@apexplumbing.net",
    company: "Apex Plumbing",
    employees: "11-25",
    signupDate: "2026-02-26T11:15:00Z",
  },
  {
    id: "3",
    email: "mike.johnson@steelworks.io",
    company: "SteelWorks Manufacturing",
    employees: "100+",
    signupDate: "2026-02-26T12:45:00Z",
  },
  {
    id: "4",
    email: "contact@rapidroofing.com",
    company: "Rapid Roofing",
    employees: "1-10",
    signupDate: "2026-02-26T13:20:00Z",
  },
  {
    id: "5",
    email: "hr@precisionconcrete.com",
    company: "Precision Concrete",
    employees: "26-50",
    signupDate: "2026-02-26T14:05:00Z",
  },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-3xl font-bold font-heading tracking-tight text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage early access sign-ups and leads.</p>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-sm px-3 py-1">
              Live Mockup
            </Badge>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sign-ups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading">{MOCK_SIGNUPS.length}</div>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recent (24h)</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading text-secondary">+{MOCK_SIGNUPS.length}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Companies</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading">{MOCK_SIGNUPS.filter(s => s.company).length}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Enterprise (100+)</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading text-primary">
                {MOCK_SIGNUPS.filter(s => s.employees === '100+').length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Waitlist Entries</CardTitle>
            <p className="text-sm text-muted-foreground">A persistent list of all users who have registered interest.</p>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-slate-200 overflow-hidden">
              <Table>
                <TableHeader className="bg-slate-50">
                  <TableRow>
                    <TableHead className="w-[250px]">Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Employees</TableHead>
                    <TableHead className="text-right">Sign-up Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MOCK_SIGNUPS.map((signup) => (
                    <TableRow key={signup.id} className="hover:bg-slate-50">
                      <TableCell className="font-medium">{signup.email}</TableCell>
                      <TableCell>{signup.company || <span className="text-muted-foreground italic">Not provided</span>}</TableCell>
                      <TableCell>
                        {signup.employees ? (
                          <Badge variant="outline" className="font-normal bg-white">
                            {signup.employees}
                          </Badge>
                        ) : (
                          <span className="text-muted-foreground italic text-sm">Not provided</span>
                        )}
                      </TableCell>
                      <TableCell className="text-right text-muted-foreground">
                        {new Date(signup.signupDate).toLocaleDateString()} at {new Date(signup.signupDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </TableCell>
                    </TableRow>
                  ))}
                  {MOCK_SIGNUPS.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                        No sign-ups found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}