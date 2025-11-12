import Heading from "@/components/Heading";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

function ProfilePage() {
    return (
        <>
            <Heading title="Trang cá nhân"></Heading>

            <Card className="bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] w-full h-full">
                {/* Phần nhập bài viết mới */}
                <div className="flex items-center justify-between px-6">
                    <Avatar className="size-9">
                        <AvatarImage src="https://i.pinimg.com/736x/0b/a7/c0/0ba7c012596101d0dc4310f666ac0ec3.jpg" />
                    </Avatar>
                    <p className="flex-1 px-3 text-md text-[#777]">Có gì mới?</p>
                    <Button className="outline-solid outline outline-[#77777790]">Đăng</Button>
                </div>


            </Card>
        </>
    );;
}
export default ProfilePage;