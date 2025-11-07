import Heading from "@/components/Heading";
import PostItem from "@/components/PostItem";

function HomePage() {
    return (
        <>
            <Heading title="Dành cho bạn" />
            <article className="w-full">
                <PostItem />
            </article>
        </>
    )
}

export default HomePage;