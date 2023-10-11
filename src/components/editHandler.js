import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { useRouter } from 'next/router';

function EditHandler({cardId, title, content}) {
  const router = useRouter();

  const handleEditClick = () => {
    // Navigate to the edit page with the cardId as a query parameter
    router.push({
      pathname: '/updateContentPage',
      query: { cardId, title, content },
    });
  };


  return (
    <div>

        <MdEdit
          size={28}
          color="lightseagreen"
          style={{ cursor: 'pointer' }}
          onClick={handleEditClick}
        />
    
    </div>
  );
}

export default EditHandler;
