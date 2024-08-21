import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({auth}) {
    const {data, setData, post, processing, error} = useForm({
        author: "",
        title: "",
        body: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route("posts.store"));
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    New Post
                </h2>
            }
        >
            <Head title="Create Post" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col space-y-8 text-left">
                                    <label>
                                        Title
                                        <input
                                            value={data.title}
                                            onChange={(e) => setData("title", e.target.value)}
                                            type="text"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                                        />
                                    </label>

                                    <label>
                                        Author
                                        <input
                                            value={data.author}
                                            onChange={(e) => setData("author", e.target.value)}
                                            type="text"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                                        />
                                    </label>

                                    <label>
                                        Body
                                        <textarea
                                            value={data.body}
                                            onChange={(e) => setData("body", e.target.value)}
                                            type="text"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-200 sm:text-sm sm:leading-6"
                                        />
                                    </label>
                                </div>

                                <div className="flex">
                                    <Link
                                        href={route("home")}
                                        className="inline-block px-4 py-2 mt-4 text-black border rounded-md hover:bg-gray-200"
                                    >
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-block px-4 py-2 mt-4 ml-4 text-white bg-purple-500 rounded-md hover:bg-purple-600"
                                    >
                                        Create Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
