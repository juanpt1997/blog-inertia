import { Link, router, usePage } from "@inertiajs/react";

export function Index({ posts }) {
    const { flash } = usePage().props;

    setTimeout(() => {
        if (flash.message){
            let elements = document.getElementsByClassName("flash-message");
            elements[0].parentNode.removeChild(elements[0]);
        }
    }, 5000);

    function deletePost(postId) {
        router.delete(route("posts.destroy", postId));
    }
    return (
        <div>
            {flash.message && (
                <h3 className="flash-message p-5 mb-5 text-white font-bold bg-green-400 rounded-md">
                    {flash.message + "!!"}
                </h3>
            )}
            <div className="flex">
                <Link
                    href={route("posts.create")}
                    className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                >
                    Create new post
                </Link>
            </div>
            {posts &&
                posts.map((post) => (
                    <div
                        key={post.id}
                        className="p-5 my-5 border rounded-md shadow-sm text-left"
                    >
                        <Link href={route("posts.show", post.id)}>
                            <h2 className="py-3 mb-5 font-bold hover:underline">
                                {post.title}
                            </h2>
                        </Link>
                        <h2 className="font-bold">{post.author}</h2>
                        <p>{post.body}</p>

                        <div className="space-x-5 space-y-5">
                            <Link
                                href={route("posts.edit", post.id)}
                                className="px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                            >
                                Edit Post
                            </Link>

                            <button
                                onClick={() => {
                                    if (
                                        confirm(
                                            "Are you sure you want to delete this post?"
                                        )
                                    ) {
                                        deletePost(post.id);
                                    }
                                }}
                                className="px-3 py-2 text-white bg-gray-400 rounded-md hover:bg-gray-500"
                            >
                                Delete Post
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    ); //
}
