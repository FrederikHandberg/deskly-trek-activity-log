import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const employees = [
  { name: "Alex Johnson", position: "Developer", standingTime: "3h 20m" },
  { name: "Sarah Chen", position: "Designer", standingTime: "4h 15m" },
  { name: "Mike Peters", position: "Manager", standingTime: "2h 45m" },
];

export function EmployeeList() {
  return (
    <Card className="p-6 animate-fade-up">
      <h3 className="font-semibold mb-4">Active Employees</h3>
      <div className="space-y-4">
        {employees.map((employee) => (
          <div
            key={employee.name}
            className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 transition-all duration-300 hover:bg-secondary"
          >
            <div>
              <p className="font-medium">{employee.name}</p>
              <p className="text-sm text-muted-foreground">{employee.position}</p>
            </div>
            <Badge variant="secondary" className="bg-accent text-accent-foreground">
              {employee.standingTime}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}