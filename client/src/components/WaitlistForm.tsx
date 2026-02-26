import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [employees, setEmployees] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const body: Record<string, string> = { email };
      if (company) body.company = company;
      if (employees) body.employees = employees;

      const res = await fetch("/api/signups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setIsLoading(false);
        return;
      }

      setIsSuccess(true);
      toast({
        title: "You're on the list!",
        description: "We'll reach out soon with early access details.",
      });
    } catch {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-secondary/10 text-secondary-foreground p-6 rounded-lg text-center" data-testid="status-waitlist-success">
        <h3 className="font-heading font-semibold text-xl mb-2 text-secondary">Thank You!</h3>
        <p className="text-secondary/80">You're on the list! We'll reach out soon with early access details.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-waitlist">
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address <span className="text-destructive">*</span></label>
        <Input
          id="email"
          type="email"
          placeholder="hello@yourcompany.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background"
          data-testid="input-email"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name <span className="text-muted-foreground text-xs font-normal">(Optional)</span></label>
        <Input
          id="company"
          type="text"
          placeholder="Company LLC"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="bg-background"
          data-testid="input-company"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Number of Employees <span className="text-muted-foreground text-xs font-normal">(Optional)</span></label>
        <Select value={employees} onValueChange={setEmployees} data-testid="select-employees">
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-25">11-25 employees</SelectItem>
            <SelectItem value="26-50">26-50 employees</SelectItem>
            <SelectItem value="51-100">51-100 employees</SelectItem>
            <SelectItem value="100+">100+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {errorMsg && (
        <p className="text-sm text-destructive text-center" data-testid="text-error">{errorMsg}</p>
      )}

      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg py-6 mt-4"
        disabled={isLoading}
        data-testid="button-submit-waitlist"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Joining...
          </>
        ) : (
          "Sign-up Now"
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground mt-4">
        No credit card required. Cancel anytime.
      </p>
    </form>
  );
}