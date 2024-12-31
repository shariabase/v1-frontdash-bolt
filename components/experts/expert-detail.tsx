"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Globe, Star, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExpertDetailProps {
  data: {
    id: string
    name: string
    image: string
    credentials: string
    specialization: string
    experience: number
    rating: number
    projects: number
    price: number
    bio: string
    expertise: string[]
    languages: string[]
    availability: string
    reviews: Array<{
      id: string
      author: string
      rating: number
      comment: string
      date: string
    }>
  }
}

export function ExpertDetail({ data }: ExpertDetailProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h1 className="text-2xl font-bold">{data.name}</h1>
                      <p className="text-muted-foreground">{data.credentials}</p>
                    </div>
                    <Badge variant="secondary">{data.specialization}</Badge>
                  </div>
                  <p className="mb-4">{data.bio}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "w-4 h-4",
                              i < data.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <span>({data.projects})</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{data.experience} years experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="expertise" className="space-y-4">
            <TabsList>
              <TabsTrigger value="expertise">Expertise</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="expertise">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Areas of Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {data.expertise.map((item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Languages</h3>
                      <div className="flex items-center gap-4">
                        {data.languages.map((language) => (
                          <div key={language} className="flex items-center gap-1">
                            <Globe className="w-4 h-4" />
                            <span>{language}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {data.reviews.map((review) => (
                      <div key={review.id} className="pb-6 border-b last:pb-0 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{review.author}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "w-4 h-4",
                                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-1">{review.comment}</p>
                        <span className="text-sm text-muted-foreground">{review.date}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">${data.price}/hr</div>
                <p className="text-muted-foreground">Professional rate</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Availability</p>
                    <p className="text-sm text-muted-foreground">{data.availability}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full">Schedule Meeting</Button>
                  <Button variant="outline" className="w-full">Send Message</Button>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Verified Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-green-500" />
                    <span>Flexible Schedule</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}