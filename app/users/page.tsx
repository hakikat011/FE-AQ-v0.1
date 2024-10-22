import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Manager" },
]

export default function UsersPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Users</h1>
      <Card>
        <CardHeader>
          <CardTitle>User List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {users.map((user) => (
              <div key={user.id} className="flex items-center">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={`https://avatar.vercel.sh/${user.name}`} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
                <div className="ml-auto font-medium">{user.role}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}