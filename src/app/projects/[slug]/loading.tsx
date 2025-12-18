import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4 md:px-6 lg:py-24">
      <div className="space-y-8">
        <div>
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="mt-4 h-6 w-full" />
          <Skeleton className="mt-2 h-6 w-2/3" />
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <Skeleton className="aspect-video w-full" />
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-1/3" />
              </CardHeader>
              <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <Skeleton className="h-8 w-1/2" />
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
