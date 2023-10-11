import React from 'react';
import EditTextEditor from '../components/editTextEditor';
import { useRouter } from 'next/router';


const UpdateContentPage = () => {
    const router = useRouter();
    const { cardId, title, content } = router.query;
    console.log("router.query", router.query);

    console.log("title", title, content)
    return (
        <div className="flex justify-center items-center h-screen bg-white">
            <div className="w-3/4 max-w-2xl p-4 border border-gray-300 rounded-lg">

                <EditTextEditor cardId={cardId} title={title} content={content} />

            </div>
        </div>
    );
};

export default UpdateContentPage;
