import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    user: { name: "John Doe", avatar: "https://github.com/shadcn.png" },
    action: "created a new project",
    time: "2 hours ago"
  },
  {
    user: { name: "Jane Smith", avatar: "https://github.com/shadcn.png" },
    action: "commented on a task",
    time: "4 hours ago"
  },
  {
    user: { name: "Bob Johnson", avatar: "https://github.com/shadcn.png" },
    action: "completed a milestone",
    time: "1 day ago"
  },
  {
    user: { name: "Alice Brown", avatar: "https://github.com/shadcn.png" },
    action: "uploaded a file",
    time: "2 days ago"
  }
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
            <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
          </div>
          <div className="ml-auto font-medium text-sm text-muted-foreground">
            {activity.time}
          </div>
        </div>
      ))}
    </div>
  )
}