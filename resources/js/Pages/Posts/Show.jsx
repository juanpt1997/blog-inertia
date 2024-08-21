import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Create({ auth, post }) {
    
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {post.title}
                </h2>
            }
        >
            <Head title={post.title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="flex flex-col space-y-10">
                                <h2>
                                    By 
                                    <span className="font-bold">
                                        {" " + post.author}
                                    </span>
                                </h2>

                                <div className="leading-7 text-left">
                                    {post.body}
                                </div>
                            </div>

                            <Link
                                href={route("home")}
                                className="inline-block px-4 py-2 mt-10 text-black border rounded-md hover:bg-gray-200"
                            >
                                Go back
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
