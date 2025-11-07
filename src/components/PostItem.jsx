import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

function PostItem() {
    return (
        <>
            <Card className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)]">

                <Separator className="bg-[rgba(255,255,255,0.1)]" />

                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                    <CardAction>Card Action</CardAction>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>

                <Separator className="bg-[rgba(255,255,255,0.1)]" />
            </Card>
        </>
    )
}

export default PostItem;