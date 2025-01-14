import { useState } from "react"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export default function OrderDetails() {
  const [sortBy, setSortBy] = useState("date")

  const orders = [
    { id: 1, product: "Tomatoes", status: "Delivered", date: "2023-04-15" },
    { id: 2, product: "Apples", status: "In Transit", date: "2023-04-16" },
    { id: 3, product: "Carrots", status: "Processing", date: "2023-04-17" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Order Details</h1>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="status">Status</SelectItem>
            <SelectItem value="product">Product</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-4">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle>{order.product}</CardTitle>
              <CardDescription>Order ID: {order.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Status: {order.status}</p>
              <p>Date: {order.date}</p>
              {order.status === "In Transit" && (
                <p>Estimated arrival: 2 days</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="space-x-4">
        <Button variant="outline">My Cart</Button>
        <Button variant="outline">Statistics</Button>
      </div>
    </div>
  )
}

