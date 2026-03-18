import React from 'react';

const DevDetailsPage = async ({ params }: {params: Promise<{id: string}>}) => {
  const { id } = await params;

  return (
    <div className="text-center mt-4">
      <h1 className="text-2xl font-bold">Dev Details</h1>
      <p className="mt-2 text-gray-700">You clicked on Dev {id}</p>
    </div>
  );
};

export default DevDetailsPage;