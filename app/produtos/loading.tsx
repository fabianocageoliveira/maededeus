export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-1/4">
          <div className="h-96 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
        <div className="w-full md:w-3/4">
          <div className="h-10 w-48 bg-gray-200 rounded animate-pulse mb-6"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg animate-pulse">
                <div className="aspect-square w-full"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/4 mb-4"></div>
                  <div className="h-10 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

