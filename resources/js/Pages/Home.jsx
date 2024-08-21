// import { Index as Posts } from "../Pages/Posts/Index";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Home({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home</h2>}
        >
            <Head title="Home" />
            <div>
                <h1 className="my-5 text-xl font-semibold text-center">
                    Welcome to my Blog
                </h1>
                <p>Check out my latest posts below:</p>
                {/* <Posts/> */}
            </div>
        </AuthenticatedLayout>
    );
}
