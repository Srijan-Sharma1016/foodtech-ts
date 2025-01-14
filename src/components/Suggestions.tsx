import { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "./ui/label"
export default function Suggestions() {
  const [searchTerm, setSearchTerm] = useState("")

  const suggestions = [
    { id: 1, title: "Tomatoes", sellerPrice: "$2.50/lb", buyerPrice: "$2.00/lb" },
    { id: 2, title: "Apples", sellerPrice: "$1.75/lb", buyerPrice: "$1.50/lb" },
    { id: 3, title: "Carrots", sellerPrice: "$1.25/lb", buyerPrice: "$1.00/lb" },
  ]

  const filteredSuggestions = suggestions.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Product Suggestions</h1>
      <div className="flex space-x-2">
        <Input
          placeholder="Search for items to buy or sell..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button>Search</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredSuggestions.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p>Suggested selling price: {item.sellerPrice}</p>
              <p>Suggested buying price: {item.buyerPrice}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    Buy Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Buy</DialogTitle>
                    <DialogDescription>
                      Lorem ipsum dolor sit.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Quantity
                      </Label>
                      <Input id="Quantity" defaultValue="1" type="number" className="col-span-3" />
                    </div>

                  </div>
                  <DialogFooter>
                    <Button type="submit">Confirm Puchase</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

