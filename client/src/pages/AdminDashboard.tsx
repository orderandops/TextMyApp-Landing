import { useQuery } from "@tanstack/react-query";
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
import { Users, Mail, Building, Building2, Loader2 } from "lucide-react";
import type { Signup } from "@shared/schema";

export default function AdminDashboard() {
  const { data: signups = [], isLoading } = useQuery<Signup[]>({
    queryKey: ["/api/signups"],
    queryFn: async () => {
      const res = await fetch("/api/signups");
      if (!res.ok) throw new Error("Failed to fetch signups");
      return res.json();
    },
    refetchInterval: 10000,
  });

  const now = new Date();
  const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const recentCount = signups.filter(s => new Date(s.createdAt) > oneDayAgo).length;
  const companiesCount = signups.filter(s => s.company).length;
  const enterpriseCount = signups.filter(s => s.employees === "100+").length;

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div>
            <h1 className="text-3xl font-bold font-heading tracking-tight text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage sign-ups and leads.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Sign-ups</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading" data-testid="text-total-signups">{signups.length}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Recent (24h)</CardTitle>
              <Mail className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading text-secondary" data-testid="text-recent-signups">+{recentCount}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Companies</CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading" data-testid="text-companies-count">{companiesCount}</div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Enterprise (100+)</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold font-heading text-primary" data-testid="text-enterprise-count">{enterpriseCount}</div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Sign-up Entries</CardTitle>
            <p className="text-sm text-muted-foreground">A persistent list of all users who have registered interest. Entries are never deleted.</p>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : (
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
                    {signups.map((signup) => (
                      <TableRow key={signup.id} className="hover:bg-slate-50" data-testid={`row-signup-${signup.id}`}>
                        <TableCell className="font-medium" data-testid={`text-email-${signup.id}`}>{signup.email}</TableCell>
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
                          {new Date(signup.createdAt).toLocaleDateString()} at {new Date(signup.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </TableCell>
                      </TableRow>
                    ))}
                    {signups.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={4} className="h-24 text-center text-muted-foreground">
                          No sign-ups yet. They'll appear here as people register.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}