// 'use client'
// import JoditEditor from 'jodit-react';
// import { useRef, useState } from 'react';

// const Page = () => {
//     const editor = useRef(null);
//     const [content, setContent] = useState('');
//     const [statusMessage, setStatusMessage] = useState('');
//     const [className, setClassName] = useState('');
//     const [chapterName, setChapterName] = useState('');
//     const [chapterNo, setChapterNo] = useState('');

//     const config = {
//         readonly: false,
//         height: 600,
//         toolbarSticky: true,
//         buttons: [
//             'bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript', '|',
//             'align', 'outdent', 'indent', 'font', 'fontsize', 'fontcolor', 'backcolor', 'paragraph', '|',
//             'image', 'file', 'video', 'table', 'link', 'unlink', '|',
//             'undo', 'redo', 'cut', 'copy', 'paste', 'hr', 'eraser', 'fullsize', '|',
//             'source', 'print', 'preview', 'selectall'
//         ],
//         uploader: {
//             insertImageAsBase64URI: true
//         },
//         filebrowser: {
//             ajax: {
//                 url: '/files',
//             },
//             files: {
//                 list: []
//             }
//         }
//     };

//     const saveContent = async () => {
//         if (!content || !className || !chapterName || !chapterNo) {
//             setStatusMessage('Please fill all fields: class, chapter name, chapter number, and content.');
//             return;
//         }

//         try {
//             const response = await fetch('https://ustserver.vercel.app/editor-content', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ content, className, chapterName, chapterNo }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setStatusMessage('Content saved successfully!');
//             } else {
//                 setStatusMessage(`Error saving content: ${data.error}`);
//             }
//         } catch (error) {
//             setStatusMessage(`Error: ${error.message}`);
//         }
//     };

//     return (
//         <div className='w-full p-10 bg-gray-100 min-h-screen'>
//             <h1 className='text-2xl font-bold mb-4'>Enhanced Word Editor</h1>

//             <div className='mb-6'>
//                 <label className='block text-lg font-medium mb-2'>Class:</label>
//                 <select
//                     className='w-full p-2 border border-gray-300 rounded-lg mb-4'
//                     value={className}
//                     onChange={(e) => setClassName(e.target.value)}
//                 >
//                     <option value=''>Select Class</option>
//                     <option value='6'>Class 6</option>
//                     <option value='7'>Class 7</option>
//                     <option value='8'>Class 8</option>
//                     <option value='9'>Class 9</option>
//                     <option value='10'>Class 10</option>
//                 </select>

//                 <label className='block text-lg font-medium mb-2'>Chapter Name:</label>
//                 <input
//                     type='text'
//                     className='w-full p-2 border border-gray-300 rounded-lg mb-4'
//                     value={chapterName}
//                     onChange={(e) => setChapterName(e.target.value)}
//                     placeholder='Enter Chapter Name'
//                 />

//                 <label className='block text-lg font-medium mb-2'>Chapter Number:</label>
//                 <input
//                     type='number'
//                     className='w-full p-2 border border-gray-300 rounded-lg mb-6'
//                     value={chapterNo}
//                     onChange={(e) => setChapterNo(e.target.value)}
//                     placeholder='Enter Chapter Number'
//                 />
//             </div>

//             <JoditEditor
//                 ref={editor}
//                 value={content}
//                 config={config}
//                 onBlur={(newContent) => setContent(newContent)}
//                 onChange={(newContent) => { }}
//             />

//             <button
//                 className='mt-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none'
//                 onClick={saveContent}
//             >
//                 Save Content
//             </button>

//             {statusMessage && (
//                 <div className='mt-4 text-sm text-red-500'>
//                     {statusMessage}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Page;



'use client'
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Swal from 'sweetalert2';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Page = () => {
    const [content, setContent] = useState('');
    const [className, setClassName] = useState('');
    const [chapterName, setChapterName] = useState('');
    const [chapterNo, setChapterNo] = useState('');

    const config = {
        readonly: false,
        height: 600,
        toolbarSticky: true,
        buttons: [
            'bold', 'italic', 'underline', 'strikeThrough', 'superscript', 'subscript', '|',
            'font', 'fontsize', 'fontcolor', 'backcolor', '|', // Added font and background color options
            'align', 'outdent', 'indent', '|', 
            'table', 'addcolumnbefore', 'addcolumnafter', 'addrowbefore', 'addrowafter', 'deletecolumn', 'deleterow', 'deletetable', '|', // Enhanced table buttons
            'image', 'file', 'video', 'link', 'unlink', '|',
            'undo', 'redo', 'cut', 'copy', 'paste', 'hr', 'eraser', 'fullsize', '|',
            'source', 'print', 'preview', 'selectall'
        ],
        uploader: {
            insertImageAsBase64URI: true
        },
        filebrowser: {
            ajax: {
                url: '/files',
            },
            files: {
                list: []
            }
        }
    };

    const saveContent = async () => {
        if (!content || !className || !chapterName || !chapterNo) {
            Swal.fire({
                icon: 'warning',
                title: 'Incomplete Fields',
                text: 'Please fill all fields: class, chapter name, chapter number, and content.',
            });
            return;
        }

        if (isNaN(chapterNo)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Chapter Number',
                text: 'Please enter a valid chapter number.',
            });
            return;
        }

        try {
            const response = await fetch('https://ustserver.vercel.app/editor-content', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content, className, chapterName, chapterNo }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Content Saved',
                    text: 'Your content was saved successfully!',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error Saving Content',
                    text: data.error || 'An error occurred while saving the content.',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Network Error',
                text: `An error occurred: ${error.message}`,
            });
        }
    };

    return (
        <div className='w-full p-10 bg-gray-100 min-h-screen'>
            <h1 className='text-2xl font-bold mb-4'>Enhanced Word Editor</h1>

            <div className='mb-6'>
                <label className='block text-lg font-medium mb-2'>Class:</label>
                <select
                    className='w-full p-2 border border-gray-300 rounded-lg mb-4'
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                >
                    <option value=''>Select Class</option>
                    <option value='6'>Class 6</option>
                    <option value='7'>Class 7</option>
                    <option value='8'>Class 8</option>
                    <option value='9'>Class 9</option>
                    <option value='10'>Class 10</option>
                </select>

                <label className='block text-lg font-medium mb-2'>Chapter Name:</label>
                <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded-lg mb-4'
                    value={chapterName}
                    onChange={(e) => setChapterName(e.target.value)}
                    placeholder='Enter Chapter Name'
                />

                <label className='block text-lg font-medium mb-2'>Chapter Number:</label>
                <input
                    type='number'
                    className='w-full p-2 border border-gray-300 rounded-lg mb-6'
                    value={chapterNo}
                    onChange={(e) => setChapterNo(e.target.value)}
                    placeholder='Enter Chapter Number'
                />
            </div>

            <JoditEditor
                value={content}
                config={config}
                onBlur={(newContent) => setContent(newContent)}
            />

            <button
                className='mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none'
                onClick={saveContent}
            >
                Save Content
            </button>
        </div>
    );
};

export default Page;
