import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../components/ui/card";
  import { Badge } from "../components/ui/badge";

function SuggestCard(){
    return(
    <Card className="bg-med-red/20 w-full">
        <CardHeader>
          <div className="flex w-full justify-between border-black ml-2">
              <CardTitle>Suggested Mentor</CardTitle>
              <Badge variant="custom">
                Reccomended
                </Badge>
          </div>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      );
}
export default SuggestCard;