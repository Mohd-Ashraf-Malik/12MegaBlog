import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom';

function PostCard({$id,title,featuredImage}) {
  if(!$id){
    console.warn("PostCard: Missing $id");
    return null;
  }
  return (
    <Link to={`/post/${encodeURIComponent($id)}`}>
        <div className="w-full bg-gray-100 rounded-xl p-4 h-[21rem]">
            <div className='w-full justify-center mb-4'>
                <img
                 className='rounded-xl'
                 src={appwriteService.getFilePreview(featuredImage,300,300)} alt={title}
                />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard