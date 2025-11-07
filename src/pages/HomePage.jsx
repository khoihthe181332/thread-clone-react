import Heading from "@/components/Heading";
import PostItem from "@/components/PostItem";

function HomePage() {
    return (
        <>
            <h1 className="text-lg font-semibold my-4">Dành cho bạn</h1>
            <article className="w-full">
                <PostItem />
            </article>
        </>
    )
}

export default HomePage;